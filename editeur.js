/* Œconomia — mode édition.
   Le propriétaire du site (et les éditeurs invités) peuvent modifier sur place les titres et les textes.
   Chaque modification est enregistrée dans la base partagée de l’artefact (capacité « db »), collection « edits » :
   un document par bloc modifié, identifié par une empreinte du texte d’origine.
   À l’affichage, chaque bloc dont l’empreinte correspond est remplacé par sa version modifiée.
   Le texte d’origine reste dans les fichiers ; les modifications peuvent y être intégrées plus tard. */
(function () {
  const SEL = "h1, h2, h3, h4, h5, p, li, figcaption, td, th, blockquote, dt, dd, a.qcard > b, a.next-card b";
  const SKIP = "svg, script, style, button, input, textarea, select, #oecEdit, .oec-edit-ui, .ticker, [contenteditable='false']";
  const edits = new Map();          /* clé → html modifié */
  let db = null, canWrite = false, editing = false, scanQueued = false, fullNext = true;

  /* Empreinte courte et stable du contenu d’origine (FNV-1a 32 bits, en base 36) */
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const keyOf = (html) => { let h = 2166136261; const s = norm(html); for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return "k" + h.toString(36) + s.length.toString(36); };

  /* Nettoyage : on ne garde que la mise en forme simple et les liens internes du site */
  const ALLOWED = new Set(["A", "B", "STRONG", "I", "EM", "BR", "SPAN", "SUB", "SUP", "DFN", "ABBR", "SMALL"]);
  const ATTRS = new Set(["href", "data-g", "data-debat", "data-crisis", "data-lab", "data-tutor", "data-scroll"]);
  function clean(html) {
    const t = document.createElement("template"); t.innerHTML = html;
    const walk = (n) => {
      [...n.childNodes].forEach((c) => {
        if (c.nodeType === 3) return;
        if (c.nodeType !== 1 || !ALLOWED.has(c.tagName)) {
          if (c.nodeType === 1) { walk(c); c.replaceWith(...c.childNodes); } else c.remove();
          return;
        }
        [...c.attributes].forEach((a) => {
          const ok = ATTRS.has(a.name) && !(a.name === "href" && !/^#[\w-]*$/.test(a.value));
          if (!ok) c.removeAttribute(a.name);
        });
        walk(c);
      });
    };
    walk(t.content);
    return t.innerHTML.replace(/ /g, " ").trim();
  }

  const candidates = () => [...document.querySelectorAll(SEL)].filter((el) => !el.closest(SKIP) && !el.querySelector(SEL) && !el.hidden);

  /* Repère chaque bloc à sa première apparition et applique la version modifiée s’il y en a une */
  function scan() {
    scanQueued = false;
    const full = fullNext; fullNext = false;
    candidates().forEach((el) => {
      if (!full && el.dataset.oecK) return;          /* après une simple mise à jour de la page, seuls les nouveaux blocs */
      if (!el.dataset.oecK) {
        const orig = el.innerHTML;
        if (!norm(el.textContent)) return;
        el.dataset.oecK = keyOf(orig);
        el.__oecOrig = orig;
      }
      const k = el.dataset.oecK, mod = edits.get(k);
      const want = mod != null ? mod : el.__oecOrig;
      if (want != null && el !== document.activeElement && el.innerHTML !== want) el.innerHTML = want;
      el.classList.toggle("oec-modifie", mod != null && editing);
      if (editing) { el.setAttribute("contenteditable", "true"); el.classList.add("oec-editable"); }
      else if (el.hasAttribute("contenteditable")) { el.removeAttribute("contenteditable"); el.classList.remove("oec-editable"); }
    });
  }
  const queue = (full) => { if (full === true) fullNext = true; if (!scanQueued) { scanQueued = true; setTimeout(scan, 40); } };

  /* ---------- Interface du mode édition ---------- */
  let bar, toast, toastT;
  function say(msg) {
    if (!toast) { toast = document.createElement("div"); toast.className = "oec-edit-ui oec-toast"; document.body.appendChild(toast); }
    toast.textContent = msg; toast.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove("on"), 2600);
  }
  function buildUI() {
    const fab = document.createElement("button");
    fab.className = "oec-edit-ui oec-fab"; fab.type = "button"; fab.textContent = "✎ Modifier le site";
    fab.addEventListener("click", () => setEditing(!editing));
    bar = document.createElement("div"); bar.className = "oec-edit-ui oec-bar"; bar.hidden = true;
    bar.innerHTML = `<b>Mode édition</b><span>Cliquez sur un titre ou un paragraphe pour le modifier. L’enregistrement est automatique quand vous cliquez ailleurs.</span>
      <span class="oec-count"></span>
      <button type="button" class="btn small ghost oec-revert">Rétablir le texte d’origine du bloc</button>
      <button type="button" class="btn small oec-done">Terminer</button>`;
    bar.querySelector(".oec-done").addEventListener("click", () => setEditing(false));
    bar.querySelector(".oec-revert").addEventListener("mousedown", (e) => e.preventDefault());
    bar.querySelector(".oec-revert").addEventListener("click", revertFocused);
    document.body.append(fab, bar);
    updateCount();
  }
  const updateCount = () => { if (bar) bar.querySelector(".oec-count").textContent = edits.size ? `${edits.size} bloc${edits.size > 1 ? "s" : ""} modifié${edits.size > 1 ? "s" : ""} sur le site` : ""; };
  function setEditing(on) {
    if (on && document.activeElement && document.activeElement.isContentEditable) document.activeElement.blur();
    editing = on; fullNext = true; document.body.classList.toggle("oec-editing", on); bar.hidden = !on;
    document.querySelector(".oec-fab").textContent = on ? "✓ Terminer les modifications" : "✎ Modifier le site";
    if (!on && document.activeElement && document.activeElement.isContentEditable) document.activeElement.blur();
    scan();
  }

  /* ---------- Enregistrement ---------- */
  let lastFocused = null;
  async function save(el) {
    const k = el.dataset.oecK; if (!k) return;
    const html = clean(el.innerHTML), orig = el.__oecOrig || "";
    if (html === clean(edits.has(k) ? edits.get(k) : orig)) return;
    if (!norm(el.textContent)) { say("Un bloc ne peut pas être vide : utilisez « Rétablir » pour revenir à l’original."); el.innerHTML = edits.get(k) ?? orig; return; }
    const ref = db.collection("edits").doc(k);
    try {
      if (html === clean(orig)) { await ref.delete(); edits.delete(k); say("Texte d’origine rétabli."); }
      else {
        await ref.set({ html, orig: norm(orig).slice(0, 2000), page: location.hash || "#accueil", tag: el.tagName.toLowerCase(), at: new Date().toISOString() });
        edits.set(k, html); say("Modification enregistrée.");
      }
    } catch (e) { say("Échec de l’enregistrement" + (e && e.code === "invalid_argument" ? " : vous n’avez pas les droits d’écriture." : ". Réessayez.")); }
    updateCount(); queue(true);
  }
  async function revertFocused() {
    const el = lastFocused; if (!el || !el.dataset.oecK) { say("Cliquez d’abord dans le bloc à rétablir."); return; }
    const k = el.dataset.oecK;
    if (!edits.has(k)) { say("Ce bloc n’a pas été modifié."); return; }
    try { await db.collection("edits").doc(k).delete(); edits.delete(k); el.innerHTML = el.__oecOrig; say("Texte d’origine rétabli."); }
    catch (e) { say("Échec. Réessayez."); }
    updateCount(); queue(true);
  }

  document.addEventListener("focusout", (e) => { const el = e.target; if (editing && el.classList && el.classList.contains("oec-editable")) { lastFocused = el; save(el); } });
  document.addEventListener("focusin", (e) => { if (editing && e.target.classList && e.target.classList.contains("oec-editable")) lastFocused = e.target; });
  /* En mode édition, un clic dans un lien ou une carte place le curseur au lieu de changer de page */
  document.addEventListener("click", (e) => { if (editing && e.target.closest(".oec-editable") && !e.ctrlKey && !e.metaKey) { const a = e.target.closest("a"); if (a) { e.preventDefault(); e.stopPropagation(); } } }, true);
  /* Collage en texte brut, Entrée = valider */
  document.addEventListener("paste", (e) => { if (!editing || !e.target.closest || !e.target.closest(".oec-editable")) return; e.preventDefault(); const t = (e.clipboardData || window.clipboardData).getData("text/plain"); document.execCommand("insertText", false, t.replace(/\s*\n\s*/g, " ")); });
  document.addEventListener("keydown", (e) => { if (!editing) return; const el = e.target.closest && e.target.closest(".oec-editable"); if (!el) return; if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); el.blur(); } if (e.key === "Escape") { el.innerHTML = edits.get(el.dataset.oecK) ?? el.__oecOrig; el.blur(); } });

  /* ---------- Démarrage ---------- */
  (async () => {
    for (let i = 0; i < 10 && !(window.claude && claude.use); i++) await new Promise((r) => setTimeout(r, 300));
    if (!window.claude || !claude.use) return;         /* hors de claude.ai (aperçu local) : rien à faire */
    db = await claude.use("db");
    if (!db) return;                                   /* visiteur non connecté : textes d’origine */
    new MutationObserver(() => queue()).observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", () => queue());
    db.collection("edits").onSnapshot((snap) => {
      edits.clear();
      snap.docs.forEach((d) => { const v = d.data(); if (v && typeof v.html === "string") edits.set(d.id, clean(v.html)); });
      updateCount(); queue(true);
    }, () => {});
    const user = await claude.use("user");
    canWrite = user ? await user.canEdit() : false;
    if (canWrite) buildUI();
  })();
})();
