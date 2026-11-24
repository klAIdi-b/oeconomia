/* Œconomia — outils de lecture.
   1. Bouton « Haut de page » sur toutes les pages, dès qu’on a fait défiler.
   2. Sur téléphone et petit écran, bouton « Sommaire » sur les pages longues (le sommaire de la colonne de droite
      y passe en bas de page) : il liste les sections, ou les blocs repliables en mode « blocs ».
   3. Bouton « Écouter » sur les notices, les dossiers et les portraits : lecture à voix haute par Claude
      (capacité « tts »), le paragraphe lu est mis en évidence. Absent quand la lecture n’est pas disponible. */
(function () {
  "use strict";
  const PAGES = { concept: "#cpageInner", question: "#qpageInner", eco: "#ecopageInner" };
  const head = () => ((window.OECAPP && OECAPP.headH) ? OECAPP.headH() : 80);
  const goTo = (el) => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - head(), behavior: "instant" });
  const currentView = () => document.querySelector(`main [data-view="${document.body.dataset.view}"]:not([hidden])`) || document.querySelector(PAGES[document.body.dataset.view] || "#none");

  /* ---------- 1 et 2 : boutons flottants ---------- */
  const box = document.createElement("div"); box.className = "lect-btns";
  box.innerHTML = `<button type="button" class="lect-som" hidden>☰ Sommaire</button><button type="button" class="lect-top" hidden aria-label="Revenir en haut de la page" title="Revenir en haut de la page">↑</button>`;
  document.body.appendChild(box);
  const bTop = box.querySelector(".lect-top"), bSom = box.querySelector(".lect-som");
  let sheet = null;
  function sections() {
    const v = document.body.dataset.view, root = document.querySelector(PAGES[v]) || currentView(); if (!root) return [];
    const toc = root.closest("section") ? root.closest("section").querySelector(".toc") : null;
    if (toc && toc.querySelectorAll("a").length) return [...toc.querySelectorAll("a")].map((a) => ({ label: a.textContent, el: document.getElementById(a.dataset.scroll) })).filter((s) => s.el);
    const blocs = [...root.querySelectorAll("details.bloc")];
    if (blocs.length > 2) return blocs.map((d) => ({ label: (d.querySelector(".btxt b") || d.querySelector("summary")).textContent, el: d, bloc: true }));
    const h3 = [...root.querySelectorAll(".prose h3, article h3")];
    return h3.length > 2 ? h3.map((h) => ({ label: h.textContent, el: h })) : [];
  }
  function update() {
    bTop.hidden = window.scrollY < 700;
    bSom.hidden = !(window.innerWidth < 900 && window.scrollY > 300 && sections().length > 2);
  }
  function closeSheet() { if (sheet) { sheet.remove(); sheet = null; } }
  bTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "instant" }));
  bSom.addEventListener("click", () => {
    if (sheet) { closeSheet(); return; }
    const list = sections();
    sheet = document.createElement("div"); sheet.className = "lect-sheet";
    sheet.innerHTML = `<div class="lect-sheet-in"><p class="eyebrow">Sommaire</p><ol>${list.map((s, i) => `<li><button type="button" data-i="${i}"><span>${i + 1}.</span> ${s.label}</button></li>`).join("")}</ol><button type="button" class="btn small ghost lect-close">Fermer</button></div>`;
    document.body.appendChild(sheet);
    sheet.addEventListener("click", (e) => {
      if (e.target === sheet || e.target.closest(".lect-close")) { closeSheet(); return; }
      const b = e.target.closest("[data-i]"); if (!b) return;
      const s = list[+b.dataset.i]; closeSheet();
      if (s.bloc) s.el.open = true;
      goTo(s.el);
    });
  });
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  window.addEventListener("hashchange", () => { closeSheet(); stopReading(); setTimeout(update, 300); });

  /* ---------- 3 : écouter ---------- */
  let tts = null, reading = null;
  if (window.claude && claude.use) claude.use("tts").then((t) => { tts = t || null; if (tts) { decorate(); tts.onState(({ state }) => { if (state === "idle") endReading(); }); tts.onLine(({ id }) => highlight(id)); } }).catch(() => {});
  function decorate() {
    if (!tts) return;
    Object.values(PAGES).forEach((sel) => {
      const h = document.querySelector(sel + " .article-head");
      if (h && !h.querySelector(".lect-ecouter")) {
        const b = document.createElement("button"); b.type = "button"; b.className = "btn small ghost lect-ecouter"; b.textContent = "▶ Écouter";
        b.title = "Faire lire ce texte à voix haute";
        const anchor = h.querySelector(".pr-btn") || h.querySelector("h1, h2");
        if (anchor) anchor.insertAdjacentElement("afterend", b); else h.appendChild(b);
      }
    });
  }
  Object.values(PAGES).forEach((sel) => { const n = document.querySelector(sel); if (n) new MutationObserver(decorate).observe(n, { childList: true }); });

  /* Textes à lire, dans l’ordre de la page, regroupés en passages de 1 800 caractères au plus (100 au maximum) */
  function passages(root) {
    const skip = "aside, .aside, nav, figure, .quizbox, .openq, button, .ncontrols, table, .crumb, .readpill, .lect-ecouter, .eyebrow, [hidden], .ex-revoir";
    const quiz = (e) => { const d = e.closest("details"); return d && d.querySelector(".quizbox"); };
    const els = [...root.querySelectorAll("h1, h2, h3, h4, p, li, summary .btxt b")].filter((e) => !e.closest(skip) && !quiz(e) && !e.querySelector("p, li") && e.textContent.trim());
    const out = []; let cur = null;
    els.forEach((el) => {
      const t = el.textContent.replace(/\s+/g, " ").trim();
      if (!cur || cur.text.length + t.length > 1800 || /^H[234]$/.test(el.tagName)) { cur = { id: "p" + out.length, text: "", els: [] }; out.push(cur); }
      cur.text += (cur.text ? " " : "") + t.slice(0, 1800); cur.els.push(el);
    });
    return out.slice(0, 100);
  }
  function highlight(id) {
    document.querySelectorAll(".tts-on").forEach((e) => e.classList.remove("tts-on"));
    const p = reading && reading.find((x) => x.id === id); if (!p) return;
    p.els.forEach((e) => e.classList.add("tts-on"));
    const d = p.els[0].closest("details"); if (d && !d.open) d.open = true;
    const r = p.els[0].getBoundingClientRect(); if (r.top < head() || r.bottom > window.innerHeight) goTo(p.els[0]);
  }
  function endReading() {
    reading = null;
    document.querySelectorAll(".tts-on").forEach((e) => e.classList.remove("tts-on"));
    document.querySelectorAll(".lect-ecouter").forEach((b) => (b.textContent = "▶ Écouter"));
  }
  function stopReading() { if (reading && tts) tts.stop().catch(() => {}); endReading(); }
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".lect-ecouter"); if (!b || !tts) return;
    if (reading) { stopReading(); return; }
    const root = document.querySelector(PAGES[document.body.dataset.view]); if (!root) return;
    const list = passages(root); if (!list.length) return;
    reading = list; b.textContent = "■ Arrêter la lecture";
    tts.speak(list.map((p) => ({ text: p.text, id: p.id })), { language: "fr" }).catch((err) => {
      endReading();
      if (err && err.code === "rate_limited") b.textContent = "Lecture momentanément indisponible";
    });
  });
  update();
})();
