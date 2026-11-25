/* Œconomia — navigation par pages, accueil, pages « économiste », « grande question » et « concept »,
   recherche globale, sommaires, temps de lecture, suivi de lecture et glossaire */
(function () {
  "use strict";
  const A = window.OECAPP;
  const { $, $$, ECO } = A;
  const VIEWS = ["accueil", "histoire", "questions", "concepts", "controverses", "pantheon", "labo", "crises", "tutorat", "actualite", "entrainement", "methode", "sources", "progression", "parcours", "enseigner", "apropos", "familles"];
  const LEGACY = { frise: "histoire", ring: "controverses", genealogie: "pantheon", boussole: "pantheon", top: "accueil" };
  const NAV_OF = { question: "questions", eco: "pantheon", concept: "concepts", familles: "pantheon" };
  const CONCEPT = {}; (OEC.concepts || []).forEach((c) => (CONCEPT[c.id] = c));
  let pending = null;

  const life = (e) => e.vie[0] < 0 ? `${-e.vie[0]}–${-e.vie[1]} av. J.-C.` : `${e.vie[0]}–${e.vie[1] ?? ""}`;
  const schoolVar = (e) => `var(${OEC.schools[e.ecole].token})`;
  const debateTitle = (d) => `${ECO[d.a].nom.split(" ").slice(-1)[0]} contre ${ECO[d.b].nom.split(" ").slice(-1)[0]}`;
  const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/<[^>]+>/g, "");
  const words = (html) => norm(html).split(/\s+/).filter(Boolean).length;
  const minutes = (n) => Math.max(1, Math.round(n / 220));

  /* ---------- Suivi de lecture (propre à chaque visiteur) ---------- */
  let READ = new Set();
  try { READ = new Set(JSON.parse(localStorage.getItem("oec-lu") || "[]")); } catch (e) {}
  const isRead = (k) => READ.has(k);
  function markRead(k) {
    if (READ.has(k)) return;
    READ.add(k);
    try { localStorage.setItem("oec-lu", JSON.stringify([...READ])); } catch (e) {}
    const pill = $(`[data-readpill="${k}"]`); if (pill) pill.hidden = false;
    refreshCounts();
  }
  const readPill = (k) => `<span class="readpill" data-readpill="${k}" ${isRead(k) ? "" : "hidden"}>Lu</span>`;

  /* ---------- Routage ---------- */
  function parse(hash) {
    const h = (hash || "").replace(/^#/, "");
    if (!h) return { v: "accueil" };
    if (h.startsWith("eco-") && ECO[h.slice(4)] && ECO[h.slice(4)].idees) return { v: "eco", id: h.slice(4) };
    if (h.startsWith("q-") && OEC.questions.some((q) => q.id === h.slice(2))) return { v: "question", id: h.slice(2) };
    if (h.startsWith("c-") && CONCEPT[h.slice(2)]) return { v: "concept", id: h.slice(2) };
    if (h.startsWith("ep-")) return { v: "histoire", anchor: h };
    const [base, ...sub] = h.split("/");
    if (sub.length && (base === "entrainement" || base === "methode")) return { v: base, sub: sub.join("/") };
    if (h.startsWith("ex-")) return { v: "entrainement", sub: h.slice(3) };
    if (h.startsWith("methode-")) return { v: "methode", sub: h.slice(8) };
    if (h.startsWith("parcours-")) return { v: "parcours", sub: h.slice(9) };
    if (VIEWS.includes(h)) return { v: h };
    if (LEGACY[h]) return { v: LEGACY[h], anchor: h === "genealogie" || h === "boussole" ? h : null };
    return { v: "accueil" };
  }
  let readKey = null;
  let retrying = false;
  /* Navigation au clavier et lecteurs d’écran : on note les clics sur un lien interne pour déplacer le focus sur le titre de la page ouverte */
  let navClick = false;
  document.addEventListener("click", (e) => { if (e.target.closest && e.target.closest('a[href^="#"]')) navClick = true; }, true);
  const live = document.createElement("div"); live.className = "sr-only"; live.setAttribute("aria-live", "polite"); document.body.appendChild(live);
  /* Contenu chargé à la demande introuvable : on le dit, avec un bouton pour réessayer */
  function loadError(r) {
    const sec = $$(`section[data-view="${r.v}"]`).find((s) => s.offsetParent !== null), w = sec && (sec.querySelector(".wrap") || sec);
    if (!w || w.querySelector(".oec-load-err")) return;
    const d = document.createElement("div"); d.className = "oec-load-err"; d.setAttribute("role", "alert");
    d.innerHTML = `<span>Le texte complet n’a pas pu être chargé, peut-être à cause de la connexion. Seul le résumé s’affiche.</span><button type="button" class="btn small">Réessayer</button>`;
    d.querySelector("button").onclick = () => { d.remove(); route(); };
    w.prepend(d);
  }
  function route() {
    const r = parse(location.hash);
    /* notice ou portrait complet pas encore chargé : on le charge, puis on affiche */
    const wait = !retrying && OEC.lazy && OEC.lazy.ready(r);
    if (wait) { wait.then(() => route(), () => { retrying = true; route(); retrying = false; loadError(r); }); return; }
    document.body.dataset.view = r.v;
    readKey = null;
    if (r.v === "eco") { renderEco(r.id); readKey = "eco-" + r.id; }
    if (r.v === "question") { renderQuestion(r.id); readKey = "q-" + r.id; }
    if (r.v === "concept") { renderConcept(r.id); readKey = "c-" + r.id; }
    const navKey = NAV_OF[r.v] || r.v;
    $$("[data-nav]").forEach((a) => { const on = a.dataset.nav === navKey; a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    const drop = $("#navDrop"); if (drop) drop.classList.toggle("on", ["labo", "entrainement", "methode"].includes(navKey));
    if (A.navMenu) A.navMenu(false);
    if (navKey === "tutorat") { try { localStorage.setItem("oec-chat-vu", "1"); } catch (e) {} }
    const on = $("#nav a.on") || $("#nav .nav-drop.on"), nav = $("#nav");
    if (on) nav.scrollLeft = on.offsetLeft - nav.clientWidth / 2 + on.clientWidth / 2; else nav.scrollLeft = 0;
    navFade();
    const target = r.anchor && document.getElementById(r.anchor);
    const toTarget = () => window.scrollTo({ top: target ? target.getBoundingClientRect().top + window.scrollY - A.headH() : 0, behavior: "instant" });
    toTarget();
    if (target) setTimeout(toTarget, 150);
    document.title = titleFor(r);
    live.textContent = document.title.replace(/ · Œconomia$/, "");
    if (navClick) {
      navClick = false;
      const sec = $$(`section[data-view="${r.v}"]`).find((s) => s.offsetParent !== null);
      const h = target ? (target.querySelector("h1, h2") || target) : sec && sec.querySelector("h1");
      if (h && r.v !== "accueil") { if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
    updateProgress();
    const fn = pending; pending = null;
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
      if (fn) setTimeout(fn, 60);
    });
  }
  /* Page des familles : les puces d’auteurs viennent du champ « famille » de chaque économiste */
  function familles() {
    const cartes = $$("#familles [data-famille]"), connues = new Set(cartes.map((c) => c.dataset.famille));
    cartes.forEach((c) => {
      const box = c.querySelector(".fam-chips"); if (!box) return;
      box.innerHTML = OEC.economists.filter((e) => e.famille === c.dataset.famille).sort((a, b) => a.vie[0] - b.vie[0]).map((e) => `<a class="chip" href="#eco-${e.id}">${e.nom}</a>`).join("");
    });
    const oublies = OEC.economists.filter((e) => !connues.has(e.famille));
    if (oublies.length) console.warn("Familles de pensée : auteurs sans famille", oublies.map((e) => e.id));
  }
  /* Trois portes de profil dans le héros : elles fixent le niveau de lecture par défaut et orientent */
  function profils() {
    const btns = $$(".profils [data-profil]"), box = $("#profilBox"); if (!btns.length || !box) return;
    const marquer = (p) => btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.profil === p)));
    marquer(pref("oec-profil", ""));
    const T = () => OEC.totaux ? OEC.totaux() : {};
    const BOX = {
      decouvre: () => `<p><b>Bienvenue !</b> Les notions s’ouvriront dans leur version courte. Pour commencer :</p><ul>
        <li><a href="#parcours">Suivre un parcours guidé</a>, étape par étape, sans prérequis</li>
        <li><a href="#boussole">Faire le test « Quel économiste êtes-vous ? »</a></li>
        <li><a href="#ex-marche-1">S’entraîner au niveau Découverte</a></li></ul>`,
      connais: () => `<p><b>Pour aller plus loin.</b> Les notions s’ouvriront dans leur version complète, avec preuves, objections et textes sources. À explorer :</p><ul>
        <li><a href="#familles">Les familles de pensée</a>, orthodoxes et hétérodoxes</li>
        <li><a href="#controverses">Les ${T().debats || ""} controverses</a> entre économistes, et ce qu’en disent les faits</li>
        <li><a href="#questions">Les ${T().questions || ""} dossiers des grandes questions</a></li>
        <li><a href="#genealogie">La carte des influences</a> et les <a href="#pantheon">portraits complets</a></li>
        <li><a href="#ex-marche-3">Les exercices de niveau Avancé</a> et la <a href="#methode">boîte à outils</a></li></ul>`,
      enseigne: () => `<p><b>Pour la classe.</b> Trois séances prêtes à l’emploi avec leurs fiches élève, un tableau des ressources par thème et le mode d’emploi des exercices.</p><ul>
        <li><a href="#enseigner">Enseigner avec Œconomia</a></li>
        <li><a href="#parcours">Les parcours guidés</a>, à donner en travail autonome</li></ul>`
    };
    btns.forEach((b) => b.addEventListener("click", () => {
      const p = b.dataset.profil;
      setPref("oec-profil", p);
      if (p === "decouvre") setPref("oec-niveau", "decouvrir");
      if (p === "connais") setPref("oec-niveau", "approfondir");
      marquer(p);
      box.innerHTML = BOX[p](); box.hidden = false;
    }));
  }
  function titleFor(r) {
    if (r.v === "eco") return `${ECO[r.id].nom} · Œconomia`;
    if (r.v === "question") return `${OEC.questions.find((q) => q.id === r.id).court} · Œconomia`;
    if (r.v === "concept") return `${CONCEPT[r.id].nom} · Œconomia`;
    const names = { histoire: "Histoire", questions: "Grandes questions", concepts: "Concepts", controverses: "Controverses", pantheon: "Économistes", labo: "Simulateurs", crises: "Crises", boussole: "Quel économiste êtes-vous ?", tutorat: "ŒconoChat", actualite: "Actualité", entrainement: "Entraînement", methode: "Boîte à outils", sources: "Sources et méthode", progression: "Ma progression", parcours: "Parcours guidés", enseigner: "Enseigner avec Œconomia", apropos: "À propos", familles: "Les familles de pensée" };
    return names[r.v] ? `${names[r.v]} · Œconomia` : "Œconomia";
  }
  function go(hash, fn) {
    pending = fn || null;
    if (location.hash === "#" + hash) route(); else location.hash = hash;
  }
  A.go = go;
  /* Fondu sur les bords de la barre de navigation quand des liens sont hors de vue */
  function navFade() {
    const n = $("#nav"); if (!n) return;
    n.classList.toggle("fade-r", n.scrollLeft + n.clientWidth < n.scrollWidth - 2);
    n.classList.toggle("fade-l", n.scrollLeft > 2);
  }
  if ($("#nav")) { $("#nav").addEventListener("scroll", navFade, { passive: true }); window.addEventListener("resize", navFade); setTimeout(navFade, 0); }
  A.navFade = navFade;
  /* Menu déroulant « S’exercer » : le panneau est placé dans l’en-tête, hors de la barre qui défile, pour ne pas être coupé */
  (function () {
    const drop = $("#navDrop"), menu = $("#navMenu"), top = document.querySelector(".top");
    if (!drop || !menu || !top) return;
    let timer = null;
    const place = () => {
      const t = top.getBoundingClientRect(), r = drop.getBoundingClientRect();
      menu.style.top = (r.bottom - t.top + 6) + "px";
      const w = menu.offsetWidth;
      menu.style.left = Math.max(12, Math.min(r.left - t.left, t.width - w - 12)) + "px";
    };
    const show = (o) => {
      clearTimeout(timer);
      if (!o && menu.hidden) return;
      menu.hidden = !o; drop.setAttribute("aria-expanded", o ? "true" : "false");
      if (o) place();
    };
    A.navMenu = show;
    drop.addEventListener("click", (e) => { e.stopPropagation(); show(menu.hidden); if (!menu.hidden && e.detail === 0) { const f = menu.querySelector("a"); if (f) f.focus(); } });
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (fine) {
      drop.addEventListener("mouseenter", () => show(true));
      [drop, menu].forEach((el) => {
        el.addEventListener("mouseleave", () => { timer = setTimeout(() => show(false), 220); });
        el.addEventListener("mouseenter", () => clearTimeout(timer));
      });
    }
    document.addEventListener("click", (e) => { if (!menu.hidden && !menu.contains(e.target) && e.target !== drop) show(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) { show(false); drop.focus(); } });
    menu.addEventListener("keydown", (e) => {
      const items = [...menu.querySelectorAll("a")], i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    });
    menu.addEventListener("focusout", (e) => { if (!menu.contains(e.relatedTarget) && e.relatedTarget !== drop) show(false); });
    window.addEventListener("resize", () => { if (!menu.hidden) place(); });
    $("#nav").addEventListener("scroll", () => { if (!menu.hidden) place(); }, { passive: true });
    window.addEventListener("scroll", () => { if (!menu.hidden && !fine) show(false); }, { passive: true });
  })();
  /* Téléphone : menu plein écran */
  (function () {
    const btn = $("#menuBtn"), panel = $("#mnav"), close = $("#mnavClose");
    if (!btn || !panel) return;
    const open = (o) => {
      panel.hidden = !o; btn.setAttribute("aria-expanded", o ? "true" : "false");
      document.documentElement.classList.toggle("mnav-open", o);
      if (o) { const on = panel.querySelector("a.on") || close; on.focus({ preventScroll: true }); if (on !== close) on.scrollIntoView({ block: "center" }); }
      else btn.focus({ preventScroll: true });
    };
    A.mobileMenu = open;
    btn.addEventListener("click", () => open(true));
    close.addEventListener("click", () => open(false));
    panel.addEventListener("click", (e) => {
      const t = e.target.closest("[data-click]"); if (t) { const b = document.getElementById(t.dataset.click); if (b) b.click(); return; }
      if (e.target.closest("a[href^='#']")) { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); document.documentElement.classList.remove("mnav-open"); }
    });
    document.addEventListener("keydown", (e) => {
      if (panel.hidden) return;
      if (e.key === "Escape") open(false);
      if (e.key === "Tab") {
        const f = [...panel.querySelectorAll("a, button")], i = f.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
      }
    });
    window.addEventListener("resize", () => { if (!panel.hidden && window.innerWidth > 720) open(false); });
  })();
  /* ŒconoChat : un point attire l’œil tant que le visiteur ne l’a pas ouvert */
  /* hauteur réelle de l’en-tête collant (plus haute sur téléphone, où la navigation passe sur une seconde ligne) */
  A.headH = () => { const h = document.querySelector(".top"); return (h ? h.offsetHeight : 56) + 20; };

  /* Liens enrichis : data-lab, data-crisis, data-debat, data-map, data-tl, data-tutor */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;
    const d = a.dataset;
    let fn = null;
    if (d.lab != null) fn = () => window.OECLABS && window.OECLABS.show(+d.lab);
    else if (d.crisis) fn = () => A.showCrisis(d.crisis);
    else if (d.debat) fn = () => A.selectDebate(d.debat);
    else if (d.map) fn = () => setTimeout(() => { document.getElementById("genealogie").scrollIntoView(); A.mapFocus && A.mapFocus(d.map); }, 220);
    else if (d.tl != null) fn = () => A.selectTimeline(+d.tl);
    else if (d.tutor) fn = () => window.OECTUTOR && window.OECTUTOR.pick(d.tutor);
    pending = fn;
    const href = a.getAttribute("href");
    if (href === location.hash || (href === "#accueil" && !location.hash)) { e.preventDefault(); route(); }
    if ($("#searchDlg").open) $("#searchDlg").close();
  });
  window.addEventListener("hashchange", route);

  /* ---------- Barre de progression et lecture terminée ---------- */
  function updateProgress() {
    const bar = $("#readbar");
    const art = readKey && $(`body[data-view] main [data-view="${document.body.dataset.view}"] .prose`);
    if (!art) { bar.style.width = "0"; return; }
    const r = art.getBoundingClientRect(), total = r.height - window.innerHeight * 0.6;
    const p = Math.max(0, Math.min(1, -r.top / Math.max(1, total)));
    bar.style.width = (p * 100).toFixed(1) + "%";
    if (p > 0.92) markRead(readKey);
  }
  window.addEventListener("scroll", () => requestAnimationFrame(updateProgress), { passive: true });

  /* ---------- Cartes réutilisables ---------- */
  const faceList = (ids) => ids.length
    ? `<div class="face-list">${ids.map((id) => `<a href="#eco-${id}"><img src="${A.portrait(id)}" alt="" width="24" height="24">${ECO[id].nom}</a>`).join("")}</div>`
    : `<p class="muted" style="font-size:13px">Aucun auteur de ce panthéon.</p>`;
  const conceptChips = (ids) => ids.filter((id) => CONCEPT[id]).length
    ? `<div class="cchips">${ids.filter((id) => CONCEPT[id]).map((id) => `<a href="#c-${id}">${CONCEPT[id].nom}</a>`).join("")}</div>` : "";
  const debateCard = (d) => `<a class="next-card" href="#controverses" data-debat="${d.id}"><img src="${A.portrait(d.a)}" alt="" width="34" height="34"><span><small>Controverse · ${d.annee}</small>${debateTitle(d)} : ${d.titre}</span></a>`;
  const labCard = (i) => `<a class="next-card" href="#labo" data-lab="${i}"><span class="ico">LAB</span><span><small>Simulateur</small>${OEC.labNames[i]}</span></a>`;
  const crisisCard = (c) => `<a class="next-card" href="#crises" data-crisis="${c.id}"><span class="ico" style="background:color-mix(in srgb, var(--serial) 14%, transparent); color:var(--serial)">−%</span><span><small>Crise · ${c.annee}</small>${c.nom}</span></a>`;
  const questionCard = (q) => `<a class="next-card" href="#q-${q.id}"><span class="ico">?</span><span><small>Grande question</small>${q.titre}</span></a>`;
  const tlCard = (ev, i) => `<a class="next-card" href="#histoire" data-tl="${i}"><span class="ico">${ev.y < 0 ? "−" + Math.abs(ev.y) : ev.y}</span><span><small>Sur la frise</small>${ev.t}</span></a>`;
  const qCardBig = (q) => `<a class="qcard" href="#q-${q.id}"><span class="k">${q.court} · ${minutes(words(q.html))} min ${readPill("q-" + q.id)}</span><b>${q.titre}</b><p>${q.chapo}</p><span class="faces">${q.auteurs.slice(0, 7).map((id) => `<img src="${A.portrait(id)}" alt="" width="30" height="30" title="${ECO[id].nom}">`).join("")}</span></a>`;

  /* Sommaire : numérote les intertitres et produit la liste */
  function toc(container, label) {
    const hs = $$("h3", container);
    hs.forEach((h, i) => (h.id = `${label}-s${i + 1}`));
    return hs.length > 2 ? `<div><h4>Sommaire</h4><ol class="toc">${hs.map((h) => `<li><a href="#${location.hash.slice(1)}" data-scroll="${h.id}">${h.textContent}</a></li>`).join("")}</ol></div>` : "";
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-scroll]"); if (!a) return;
    e.preventDefault(); e.stopPropagation();
    const t = document.getElementById(a.dataset.scroll);
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - A.headH(), behavior: A.reduced ? "auto" : "smooth" });
  }, true);

  /* ---------- Accueil ---------- */
  function home() {
    const n = (a) => (a || []).length;
    const nbEx = OEC.exo && OEC.exo.count ? OEC.exo.count() : 0;
    const familles = [
      ["Comprendre", "Les idées qui façonnent votre quotidien, et ceux qui les ont eues.", [
        ["#parcours", "Parcours guidés", `${n(OEC.parcours && OEC.parcours.list)} itinéraires pour débuter`, "Pourquoi les prix grimpent ? Pourquoi les krachs reviennent ? Choisissez votre question : on vous guide pas à pas, en étapes courtes."],
        ["#histoire", "Histoire", "De la cité grecque à nos jours", `De la cité grecque aux banques centrales : ${OEC.lettres(OEC.totaux().epoques)} époques racontées comme un récit, et une frise à parcourir.`],
        ["#questions", "Grandes questions", `${n(OEC.questions)} dossiers`, `D’où vient la valeur ? Pourquoi le chômage ? ${OEC.lettres(OEC.totaux().questions, true)} énigmes suivies d’Aristote à aujourd’hui.`],
        ["#concepts", "Concepts", `${n(OEC.concepts)} notions expliquées`, "Avantage comparatif, trappe à liquidité… Chaque notion expliquée simplement, en version courte ou en profondeur."],
        ["#pantheon", "Économistes", `${n(OEC.economists)} portraits`, "Qui étaient vraiment Smith, Marx ou Keynes ? Leur vie, leurs idées, et ceux qui les ont inspirés."],
        ["#crises", "Crises", `${n(OEC.crises)} grandes crises`, "Des tulipes de 1637 aux subprimes de 2008, la même histoire en cinq actes. Saurez-vous reconnaître la prochaine ?"]]],
      ["Débattre", "Écoutez les camps s’affronter, puis tranchez.", [
        ["#controverses", "Controverses", `${n(OEC.debates)} débats, sources à l’appui`, "Keynes contre Hayek, Smith contre Marx : suivez le duel réplique par réplique, puis donnez votre verdict."],
        ["#actualite", "Actualité", "L’économie en train de se faire", "Un fait économique récent décrypté : ce qui s’est passé, pourquoi, et ce que vous en pensez."],
        ["#tutorat", "ŒconoChat", "Interroger un économiste", "Posez votre question à Keynes, Smith ou Ostrom : Claude vous répond en s’inspirant de leurs écrits. Nécessite un compte Claude connecté."],
        ["#boussole", "Le test", "Quel économiste êtes-vous ?", "Plutôt Smith, Marx ou Keynes ? Dix situations concrètes et cinq minutes pour le découvrir."]]],
      ["S’exercer", "Testez, calculez, vérifiez que vous avez compris.", [
        ["#labo", "Simulateurs", `${n(OEC.labNames)} modèles à manipuler`, "Que se passe-t-il si l’État dépense un milliard de plus ? Faites l’expérience vous-même, en quelques clics."],
        ["#entrainement", "Entraînement", `${nbEx || OEC.totaux().exercices} exercices`, "Trois niveaux, des chiffres nouveaux à chaque essai et des corrigés pas à pas : vérifiez que vous avez vraiment compris."],
        ["#methode", "Méthode", `${n(OEC.methode) || 12} fiches`, "Calculer un pourcentage, lire un graphique, argumenter : les réflexes de base, expliqués simplement."],
        ["#progression", "Ma progression", "Votre parcours", "Le chemin parcouru, vos points forts, et ce qui vous attend ensuite."]]]
    ];
    /* en haut, les quatre entrées les plus utiles ; en dessous, le plan complet, replié sur téléphone */
    const top = [["#parcours", "Pour débuter", "Les parcours guidés", "Un sujet, étape par étape, sans prérequis"], ["#boussole", "En cinq minutes", "Quel économiste êtes-vous ?", "Dix situations concrètes"],
      ["#controverses", "Pour débattre", "Les controverses", "Deux camps, sources à l’appui, et votre verdict"], ["#entrainement", "Pour s’exercer", "L’entraînement", "Des exercices corrigés sur trois niveaux"]];
    const ouvert = !(window.matchMedia && matchMedia("(max-width: 720px)").matches);
    $("#doors").outerHTML = `<div class="plan" id="doors"><p class="eyebrow">Les plus utilisés</p><div class="plan-top">${top.map(([h, k, t, p]) => `<a href="${h}"><small>${k}</small><b>${t}</b><span>${p}</span></a>`).join("")}</div><p class="eyebrow">Le plan complet</p>${familles.map(([titre, sous, portes]) => `<details class="plan-fam"${ouvert ? " open" : ""}><summary><header><h3>${titre}</h3><p>${sous}</p></header></summary><div class="doors">${portes.map(([href, k, t, p]) => `<a class="door" href="${href}"><span class="k">${k}</span><b>${t}</b><p>${p}</p><span class="go">Entrer →</span></a>`).join("")}</div></details>`).join("")}</div>`;
    const tf = $("#tutoFaces"); if (tf) tf.innerHTML = ["keynes", "smith", "hayek", "ostrom", "marx"].map((id) => `<img src="${A.portrait(id)}" alt="" width="42" height="42">`).join("");
    $("#qIndex").innerHTML = OEC.questions.map(qCardBig).join("");
    const hc = $("#homeConcepts");
    if (hc) hc.innerHTML = ["avantage-comparatif", "demande-effective", "destruction-creatrice", "trappe-liquidite", "plus-value", "externalite", "instabilite-financiere", "r-g", "aversion-pertes", "biens-communs"].map((id) => `<a href="#c-${id}">${CONCEPT[id].nom}</a>`).join("");
    refreshCounts();
  }
  function refreshCounts() {
    const nq = OEC.questions.filter((q) => isRead("q-" + q.id)).length;
    const nc = OEC.concepts.filter((c) => isRead("c-" + c.id)).length;
    const ne = OEC.economists.filter((e) => isRead("eco-" + e.id)).length;
    const el = $("#readStats");
    if (el) { el.hidden = !(nq + nc + ne); el.innerHTML = `Votre lecture : <b>${nq}</b> / ${OEC.questions.length} questions · <b>${ne}</b> / ${OEC.economists.length} auteurs · <b>${nc}</b> / ${OEC.concepts.length} concepts`; }
    const qi = $("#qReadCount"); if (qi) qi.textContent = nq ? `${nq} sur ${OEC.questions.length} lues` : "";
    const ci = $("#cReadCount"); if (ci) ci.textContent = nc ? `${nc} sur ${OEC.concepts.length} lus` : "";
  }

  /* ---------- Page « grande question » ---------- */
  function renderQuestion(id) {
    const i = OEC.questions.findIndex((q) => q.id === id), q = OEC.questions[i];
    const prev = OEC.questions[i - 1], next = OEC.questions[i + 1];
    const L = q.liens || {};
    const more = [];
    if (L.debat) more.push(debateCard(OEC.debates.find((d) => d.id === L.debat)));
    OEC.debates.filter((d) => d.id !== L.debat && q.auteurs.includes(d.a) && q.auteurs.includes(d.b)).forEach((d) => more.push(debateCard(d)));
    if (L.lab != null) more.push(labCard(L.lab));
    if (L.crise) more.push(crisisCard(OEC.crises.find((c) => c.id === L.crise)));
    const keys = [...new Set((q.html.match(/data-g="([^"]+)"/g) || []).map((m) => m.slice(8, -1)))];
    OEC.concepts.forEach((c) => { if (c.questions.includes(id) && !keys.includes(c.id)) keys.push(c.id); });
    const inner = $("#qpageInner");
    inner.innerHTML = `
      <nav class="crumb"><a href="#accueil">Accueil</a><span>/</span><a href="#questions">Grandes questions</a></nav>
      <header class="article-head"><p class="eyebrow">Grande question · ${q.court} · ${minutes(words(q.html))} min de lecture ${readPill("q-" + id)}</p><h1>${q.titre}</h1><p class="chapo">${q.chapo}</p></header>
      <div class="article-layout">
        <article class="prose">${q.html}</article>
        <aside class="aside" id="qAside"></aside>
      </div>
      <nav class="pager">
        ${prev ? `<a href="#q-${prev.id}"><small>← Question précédente</small><b>${prev.titre}</b></a>` : `<a href="#questions"><small>← Retour</small><b>Toutes les questions</b></a>`}
        ${next ? `<a href="#q-${next.id}"><small>Question suivante →</small><b>${next.titre}</b></a>` : `<a href="#concepts"><small>Et maintenant →</small><b>Explorer les concepts</b></a>`}
      </nav>`;
    $("#qAside").innerHTML = `${toc($(".prose", inner), "q")}
      <div><h4>Les auteurs</h4>${faceList(q.auteurs)}</div>
      ${keys.length ? `<div><h4>Concepts clés</h4>${conceptChips(keys)}</div>` : ""}
      <div><h4>Pour continuer</h4><div class="stack">${more.join("")}</div></div>`;
    $$("dfn", inner).forEach((d) => (d.tabIndex = 0));
  }

  /* ---------- Page « économiste » ---------- */
  function renderEco(id) {
    const e = ECO[id], D = (OEC.deep || {})[id];
    const list = OEC.economists, i = list.findIndex((x) => x.id === id);
    const prev = list[i - 1], next = list[i + 1];
    const from = OEC.influences.filter((l) => l[1] === id).map((l) => l[0]);
    const to = OEC.influences.filter((l) => l[0] === id).map((l) => l[1]);
    const inSite = [];
    inSite.push(`<a class="next-card" href="#tutorat" data-tutor="${id}"><span class="ico">?!</span><span><small>ŒconoChat</small>${["sen", "krugman", "summers", "acemoglu", "piketty", "duflo", "stiglitz", "mazzucato", "waring", "kelton"].includes(id) ? "Interroger un guide sur sa pensée" : "Lui poser une question"}</span></a>`);
    OEC.debates.filter((d) => d.a === id || d.b === id).forEach((d) => inSite.push(debateCard(d)));
    if (OEC.labOf[id] != null) inSite.push(labCard(OEC.labOf[id]));
    OEC.crises.filter((c) => c.theorie === id).forEach((c) => inSite.push(crisisCard(c)));
    OEC.questions.filter((q) => q.auteurs.includes(id)).forEach((q) => inSite.push(questionCard(q)));
    OEC.timeline.forEach((ev, k) => { if (ev.who === id) inSite.push(tlCard(ev, k)); });
    inSite.push(`<a class="next-card" href="#pantheon" data-map="${id}"><span class="ico">↗</span><span><small>Généalogie</small>Voir sa lignée sur la carte</span></a>`);
    const concepts = OEC.concepts.filter((c) => c.auteurs.includes(id)).map((c) => c.id);
    const lect = (OEC.lectures[id] || []);
    const inner = $("#ecopageInner");
    inner.style.setProperty("--sc", schoolVar(e));
    const P = (OEC.portraits || {})[id];
    const level = P && P.decouvrir && pref("oec-niveau", "decouvrir") === "decouvrir" ? "decouvrir" : "approfondir";
    const blocs = P && level === "approfondir" && pref("oec-blocs", "blocs") === "blocs";
    const pControls = P ? levelControls(P, level, blocs, P.decouvrir ? (P.decouvrir.duree || minutes(words(P.decouvrir.html))) : 0, minutes(words(noticeBody(e, P, "approfondir", false)))) : "";
    const body = P ? noticeBody(e, P, level, blocs) : `
      ${e.citation ? (e.type === "formule" ? `<blockquote class="quote-block">${e.citation}<cite>Formule qui résume sa pensée, d’après ${e.source}. Ce ne sont pas ses mots exacts.</cite></blockquote>` : `<blockquote class="quote-block">« ${e.citation} »<cite>${e.source}</cite></blockquote>`) : ""}
      ${D ? `<h3>Le contexte</h3><p>${D.contexte}</p>` : ""}
      <h3>Parcours</h3><p>${e.bio}</p>
      <h3>Idées clés</h3><ul>${e.idees.map((x) => `<li>${x}</li>`).join("")}</ul>
      ${D ? `<h3>Approfondir : ${D.concept.titre}</h3><p>${D.concept.texte}</p>` : ""}
      ${D ? `<h3>Ce qui est resté, ce qui a été contesté</h3><p>${D.heritage}</p>` : ""}
      <h3>Textes à lire</h3>
      <ul class="lect">${(D ? D.textes : [e.oeuvre[0] + ", " + e.oeuvre[1]]).map((x) => `<li>${x}</li>`).join("")}</ul>
      <h3>Pour aller plus loin</h3>
      <ul class="lect">${lect.map((x) => `<li>${x}</li>`).join("")}${OEC.lecturesGenerales.map((x) => `<li>${x}</li>`).join("")}</ul>`;
    inner.innerHTML = `
      <nav class="crumb"><a href="#accueil">Accueil</a><span>/</span><a href="#pantheon">Économistes</a><span>/</span><span>${e.nom}</span></nav>
      <header class="eco-hero">
        <img src="${A.portrait(id)}" alt="" width="170" height="170">
        <div class="article-head"><p class="eyebrow" style="color:${schoolVar(e)}">${OEC.schools[e.ecole].label} · ${P ? (level === "decouvrir" ? "lecture découverte" : "portrait complet") : minutes(words(body)) + " min de lecture"} ${readPill("eco-" + id)}</p><h1>${e.nom}</h1>
          <p class="mono muted" style="margin-top:10px; font-size:14px">${life(e)} · ${e.pays} · <i>${e.oeuvre[0]}</i> (${e.oeuvre[1]})</p><p class="chapo">${e.devise}</p></div>
      </header>
      ${pControls}
      <div class="article-layout">
        <article class="prose">${body}</article>
        <aside class="aside" id="ecoAside"></aside>
      </div>
      <nav class="pager">
        ${prev ? `<a href="#eco-${prev.id}"><small>← Auteur précédent</small><b>${prev.nom}</b></a>` : `<span></span>`}
        ${next ? `<a href="#eco-${next.id}"><small>Auteur suivant →</small><b>${next.nom}</b></a>` : `<a href="#pantheon"><small>Retour →</small><b>Tout le panthéon</b></a>`}
      </nav>`;
    $("#ecoAside").innerHTML = `${blocs ? "" : toc($(".prose", inner), "e")}
      ${concepts.length ? `<div><h4>Ses concepts</h4>${conceptChips(concepts)}</div>` : ""}
      <div><h4>Dans Œconomia</h4><div class="stack">${inSite.join("")}</div></div>
      <div><h4>Ses inspirations</h4>${faceList(from)}</div>
      <div><h4>Ses héritiers et contradicteurs</h4>${faceList(to)}</div>`;
    if (P) wireControls(inner, () => renderEco(id));
  }

  /* Barre « Niveau / Présentation » commune aux notices et aux portraits */
  function levelControls(N, level, blocs, shortLen, fullLen) {
    if (!N || !N.decouvrir) return "";
    return `
      <div class="ncontrols">
        <div class="seg" role="group" aria-label="Niveau de lecture">
          <span class="seg-l">Niveau</span>
          <button class="${level === "decouvrir" ? "on" : ""}" data-set="oec-niveau" data-val="decouvrir">Découvrir <small>${shortLen} min</small></button>
          <button class="${level === "approfondir" ? "on" : ""}" data-set="oec-niveau" data-val="approfondir">Approfondir <small>${fullLen} min</small></button>
        </div>
        ${level === "approfondir" ? `<div class="seg" role="group" aria-label="Présentation">
          <span class="seg-l">Présentation</span>
          <button class="${!blocs ? "on" : ""}" data-set="oec-blocs" data-val="continu">Page continue</button>
          <button class="${blocs ? "on" : ""}" data-set="oec-blocs" data-val="blocs">Blocs repliables</button>
        </div>` : ""}
        ${blocs ? `<div class="seg"><button data-allblocs="1">Tout ouvrir</button><button data-allblocs="0">Tout fermer</button></div>` : ""}
      </div>`;
  }
  function wireControls(inner, rerender) {
    wireQuiz(inner);
    $$("[data-set]", inner).forEach((b) => b.addEventListener("click", () => { setPref(b.dataset.set, b.dataset.val); rerender(); window.scrollTo(0, 0); }));
    $$("[data-allblocs]", inner).forEach((b) => b.addEventListener("click", () => $$("details.bloc", inner).forEach((d) => (d.open = b.dataset.allblocs === "1"))));
  }

  /* ---------- Concepts ---------- */
  let cFilter = "all", cText = "";
  function conceptsIndex() {
    const f = $("#cFilters");
    f.innerHTML = `<button class="chip on" data-cat="all">Toutes les notions</button>` +
      Object.entries(OEC.conceptCats).map(([k, v]) => `<button class="chip" data-cat="${k}">${v}</button>`).join("") +
      `<input class="search" id="cSearch" type="search" placeholder="Chercher une notion…" aria-label="Chercher une notion">`;
    f.addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (!b) return; cFilter = b.dataset.cat; $$("[data-cat]", f).forEach((x) => x.classList.toggle("on", x === b)); renderConceptGrid(); });
    $("#cSearch").addEventListener("input", (e) => { cText = norm(e.target.value); renderConceptGrid(); });
    renderConceptGrid();
  }
  const hasN = (id) => (OEC.notices || {})[id] || (OEC.lazy && OEC.lazy.hasNotice(id));
  function renderConceptGrid() {
    const g = $("#cGrid");
    const cats = cFilter === "all" ? Object.keys(OEC.conceptCats) : [cFilter];
    g.innerHTML = cats.map((cat) => {
      const items = OEC.concepts.filter((c) => c.cat === cat && (!cText || norm(c.nom + " " + c.court + " " + c.texte).includes(cText)))
        .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
      if (!items.length) return "";
      return `<div class="cgroup"><h3>${OEC.conceptCats[cat]}</h3><div class="cgrid">${items.map((c) =>
        `<a class="ccard${hasN(c.id) ? " full" : ""}" href="#c-${c.id}">${hasN(c.id) ? `<span class="fullbadge">Notice complète</span>` : ""}<b>${c.nom} ${readPill("c-" + c.id)}</b><p>${c.court}</p><span class="faces">${c.auteurs.slice(0, 4).map((id) => `<img src="${A.portrait(id)}" alt="" width="22" height="22" title="${ECO[id].nom}">`).join("")}</span></a>`).join("")}</div></div>`;
    }).join("") || `<p class="muted">Aucune notion ne correspond à cette recherche.</p>`;
  }
  function renderConcept(id) {
    const c = CONCEPT[id];
    const list = OEC.concepts.filter((x) => x.cat === c.cat).sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
    const i = list.findIndex((x) => x.id === id), prev = list[i - 1], next = list[i + 1];
    const more = [];
    c.questions.forEach((qid) => { const q = OEC.questions.find((x) => x.id === qid); if (q) more.push(questionCard(q)); });
    if (c.lab != null) more.push(labCard(c.lab));
    if (c.crise) more.push(crisisCard(OEC.crises.find((x) => x.id === c.crise)));
    const inner = $("#cpageInner");
    const N = (OEC.notices || {})[id];
    const level = N && N.decouvrir && pref("oec-niveau", "decouvrir") === "decouvrir" ? "decouvrir" : "approfondir";
    const blocs = N && level === "approfondir" && pref("oec-blocs", "blocs") === "blocs";
    const fullLen = N ? minutes(words(noticeBody(c, N, "approfondir", false))) : 0;
    const shortLen = N && N.decouvrir ? (N.decouvrir.duree || minutes(words(N.decouvrir.html))) : 0;
    const body = N ? noticeBody(c, N, level, blocs) : `<p>${c.texte}</p>${c.exemple ? `<div class="example"><span>Exemple</span><p>${c.exemple}</p></div>` : ""}`;
    const tutorId = c.auteurs.find((a) => ECO[a] && ECO[a].idees);
    const controls = N && N.decouvrir ? `
      <div class="ncontrols">
        <div class="seg" role="group" aria-label="Niveau de lecture">
          <span class="seg-l">Niveau</span>
          <button class="${level === "decouvrir" ? "on" : ""}" data-set="oec-niveau" data-val="decouvrir">Découvrir <small>${shortLen} min</small></button>
          <button class="${level === "approfondir" ? "on" : ""}" data-set="oec-niveau" data-val="approfondir">Approfondir <small>${fullLen} min</small></button>
        </div>
        ${level === "approfondir" ? `<div class="seg" role="group" aria-label="Présentation">
          <span class="seg-l">Présentation</span>
          <button class="${!blocs ? "on" : ""}" data-set="oec-blocs" data-val="continu">Page continue</button>
          <button class="${blocs ? "on" : ""}" data-set="oec-blocs" data-val="blocs">Blocs repliables</button>
        </div>` : ""}
        ${blocs ? `<div class="seg"><button data-allblocs="1">Tout ouvrir</button><button data-allblocs="0">Tout fermer</button></div>` : ""}
      </div>` : "";
    inner.innerHTML = `
      <nav class="crumb"><a href="#accueil">Accueil</a><span>/</span><a href="#concepts">Concepts</a><span>/</span><span>${OEC.conceptCats[c.cat]}</span></nav>
      <header class="article-head"><p class="eyebrow">${OEC.conceptCats[c.cat]}${N ? ` · ${level === "decouvrir" ? "lecture découverte" : "notice complète"}` : ""} ${readPill("c-" + id)}</p><h1>${c.nom}</h1><p class="chapo">${c.court}</p></header>
      ${controls}
      <div class="article-layout">
        <article class="prose">${body}</article>
        <aside class="aside">
          <div id="cToc"></div>
          <div><h4>Auteurs</h4>${faceList(c.auteurs)}</div>
          ${c.voir.length ? `<div><h4>Voir aussi</h4>${conceptChips(c.voir)}</div>` : ""}
          ${more.length || tutorId ? `<div><h4>Pour continuer</h4><div class="stack">${tutorId ? `<a class="next-card" href="#tutorat" data-tutor="${tutorId}"><span class="ico">?!</span><span><small>ŒconoChat</small>En discuter avec ${["sen", "krugman", "summers", "acemoglu", "piketty", "duflo"].includes(tutorId) ? "un guide sur " : ""}${ECO[tutorId].nom}</span></a>` : ""}${more.join("")}</div></div>` : ""}
        </aside>
      </div>
      <nav class="pager">
        ${prev ? `<a href="#c-${prev.id}"><small>← Notion précédente</small><b>${prev.nom}</b></a>` : `<a href="#concepts"><small>← Retour</small><b>Toutes les notions</b></a>`}
        ${next ? `<a href="#c-${next.id}"><small>Notion suivante →</small><b>${next.nom}</b></a>` : `<a href="#concepts"><small>Retour →</small><b>Toutes les notions</b></a>`}
      </nav>`;
    if (N) {
      $("#cToc").innerHTML = blocs ? "" : toc($(".prose", inner), "c");
      wireQuiz(inner);
      $$("[data-set]", inner).forEach((b) => b.addEventListener("click", () => { setPref(b.dataset.set, b.dataset.val); renderConcept(id); window.scrollTo(0, 0); }));
      $$("[data-allblocs]", inner).forEach((b) => b.addEventListener("click", () => $$("details.bloc", inner).forEach((d) => (d.open = b.dataset.allblocs === "1"))));
    }
    else setTimeout(() => { if (location.hash === "#c-" + id) markRead("c-" + id); }, 8000);
  }
  function pref(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function setPref(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* Notice longue : essentiel, sections, cas, objections, écoles, texte source, quiz, lectures.
     level : "decouvrir" ou "approfondir" ; blocs : présentation en blocs repliables */
  function noticeBody(c, N, level, blocs) {
    /* Ordre des réponses mélangé de façon stable (graine tirée du texte de la question),
       pour que la bonne réponse ne soit pas toujours à la même place. */
    const order = (q) => {
      let h = 2166136261; for (const ch of q.q) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
      const idx = q.o.map((_, j) => j);
      for (let k = idx.length - 1; k > 0; k--) { h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0; const r = h % (k + 1); [idx[k], idx[r]] = [idx[r], idx[k]]; }
      return idx;
    };
    const quizHtml = (items) => `<div class="quizbox">${items.map((q, i) => `
        <div class="quizq" data-c="${q.c}"><p class="qq"><b>${i + 1}.</b> ${q.q}</p>
          <div class="qopts">${order(q).map((j) => `<button class="qopt" data-j="${j}">${q.o[j]}</button>`).join("")}</div>
          <p class="qexpl" hidden>${q.e}</p></div>`).join("")}
        <p class="qscore" hidden></p></div>`;
    const essentiel = `<div class="essentiel"><span>L’essentiel</span><ul>${N.essentiel.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;

    if (level === "decouvrir" && N.decouvrir) {
      const mainFig = ((N.sections.find((s) => s.id === "raisonnement") || { html: "" }).html.match(/<figure class="schema">(?:(?!<figure)[\s\S])*?Acemoglu et Robinson[\s\S]*?<\/figure>/) || [""])[0];
      const versComplet = `<p class="nfull-link"><button type="button" data-set="oec-niveau" data-val="approfondir">${N.portrait ? "Lire le portrait complet : sa vie, ses livres, ses combats, ses héritiers" : "Lire la notice complète : preuves, objections, autres écoles, texte source"} →</button></p>`;
      return `${essentiel}${versComplet}${N.decouvrir.html}${mainFig}
        <h3>Vérifier sa compréhension</h3>${quizHtml(N.decouvrir.quiz.map((k) => N.quiz[k]))}
        <div class="nextlevel"><p>${N.portrait ? "Vous voulez suivre sa vie, ses livres, ses combats et ses héritiers en détail ?" : "Vous voulez comprendre les preuves, les études de cas et les objections ?"}</p><button class="btn small" data-set="oec-niveau" data-val="approfondir">${N.portrait ? "Lire le portrait complet →" : "Lire la notice complète →"}</button></div>`;
    }

    const R = N.resumes || {};
    const LB = Object.assign({ cas: "Études de cas", objections: "Les objections et les débats", ecoles: "Ce qu’en disent les autres écoles" }, N.labels || {});
    const parts = [];
    N.sections.forEach((s) => parts.push([s.id, s.titre, s.html]));
    if (N.cas) parts.push(["cas", LB.cas, N.cas.map((k) => `<div class="case"><h4>${k.titre}</h4>${k.html}</div>`).join("")]);
    if (N.objections) parts.push(["objections", LB.objections, N.objections]);
    if (N.ecoles) parts.push(["ecoles", LB.ecoles, N.ecoles]);
    if (N.source) parts.push(["source", "Texte source commenté", `<blockquote class="quote-block">« ${N.source.texte} »<cite>${N.source.titre}</cite></blockquote>${N.source.notes}`]);
    if (N.quiz) parts.push(["quiz", "Vérifier sa compréhension", quizHtml(N.quiz) + (N.ouverte ? `<div class="openq"><span>Question de réflexion</span><p>${N.ouverte.q}</p><button class="btn small ghost qreveal">Voir des éléments de réponse</button><p class="qexpl" hidden>${N.ouverte.r}</p></div>` : "")]);
    if (N.lectures) parts.push(["lectures", "Pour aller plus loin", `<ul class="lect lvl">${N.lectures.map(([lv, t]) => `<li><span class="lvltag">${lv}</span> ${t}</li>`).join("")}</ul>`]);

    if (blocs) {
      return `${essentiel}<p class="muted" style="font-size:14px">Ouvrez les blocs dans l’ordre que vous voulez. Chacun indique son contenu et son temps de lecture.</p>
        <div class="blocs">${parts.map(([pid, t, h], i) => `
          <details class="bloc" id="bloc-${pid}" ${i === 0 ? "open" : ""}>
            <summary><span class="bnum">${String(i + 1).padStart(2, "0")}</span><span class="btxt"><b>${t}</b><small>${R[pid] ? R[pid] + " · " : ""}${minutes(words(h))} min</small></span><span class="bchev" aria-hidden="true"></span></summary>
            <div class="bbody">${h}</div>
          </details>`).join("")}</div>`;
    }
    return essentiel + parts.map(([pid, t, h]) => `<h3>${t}</h3>${h}`).join("");
  }
  function wireQuiz(root) {
    const qs = $$(".quizq", root);
    qs.forEach((q) => q.addEventListener("click", (e) => {
      const b = e.target.closest(".qopt"); if (!b || q.dataset.done) return;
      q.dataset.done = b.dataset.j === q.dataset.c ? "ok" : "ko";
      $$(".qopt", q).forEach((o) => { o.disabled = true; if (o.dataset.j === q.dataset.c) o.classList.add("right"); });
      if (q.dataset.done === "ko") b.classList.add("wrong");
      $(".qexpl", q).hidden = false;
      const done = qs.filter((x) => x.dataset.done);
      if (done.length === qs.length) {
        const ok = done.filter((x) => x.dataset.done === "ok").length, s = $(".qscore", root);
        s.hidden = false; s.textContent = `Score : ${ok} sur ${qs.length}. ${ok === qs.length ? "Notion maîtrisée." : "Relisez les sections concernées, puis réessayez en rechargeant la page."}`;
        if (ok >= qs.length - 1) markRead(location.hash.slice(1));
      }
    }));
    $$(".qreveal", root).forEach((b) => b.addEventListener("click", () => { b.nextElementSibling.hidden = false; b.hidden = true; }));
  }

  /* ---------- Récits des époques (page Histoire) ---------- */
  function epochs() {
    const box = $("#recits"); if (!box || !OEC.recits) return;
    const slug = (s) => "ep-" + norm(s).replace(/[^a-z]+/g, "-").replace(/-$/, "");
    box.innerHTML = `
      <div class="sec-head" style="margin-top:72px"><div><p class="eyebrow">Les ${OEC.lettres(OEC.totaux().epoques)} époques</p><h2>Le récit</h2></div>
        <p>Chaque époque a ses problèmes, ses institutions et ses textes. Ces chapitres situent les auteurs dans leur monde, du domaine grec à la crise de 2008 et au retour de l’inflation.</p></div>
      <div class="article-layout">
        <div class="prose epochs">${OEC.recits.map((r) => `
          <section class="epoch" id="${slug(r.era)}">
            <p class="eyebrow">${r.era} · ${r.periode}</p>
            <h3>${r.titre}</h3>
            ${r.texte.map((p) => `<p>${p}</p>`).join("")}
            <div class="example"><span>Textes de l’époque</span><ul>${r.oeuvres.map((o) => `<li>${o}</li>`).join("")}</ul></div>
          </section>`).join("")}
        </div>
        <aside class="aside"><div><h4>Chapitres</h4><ol class="toc">${OEC.recits.map((r) => `<li><a href="#histoire" data-scroll="${slug(r.era)}">${r.era}</a></li>`).join("")}</ol></div></aside>
      </div>`;
    A.eraSlug = slug;
  }

  /* ---------- Recherche globale ---------- */
  let INDEX = [];
  function buildIndex() {
    INDEX = [];
    OEC.economists.forEach((e) => INDEX.push({ t: "Économistes", label: e.nom, sub: e.devise, href: "#eco-" + e.id, txt: norm(e.nom + " " + e.devise + " " + e.idees.join(" ") + " " + e.oeuvre[0]), img: e.id }));
    OEC.concepts.forEach((c) => INDEX.push({ t: "Concepts", label: c.nom, sub: c.court, href: "#c-" + c.id, txt: norm(c.nom + " " + c.court + " " + c.texte) }));
    OEC.questions.forEach((q) => INDEX.push({ t: "Grandes questions", label: q.titre, sub: q.chapo, href: "#q-" + q.id, txt: norm(q.titre + " " + q.chapo + " " + q.html) }));
    OEC.debates.forEach((d) => INDEX.push({ t: "Controverses", label: `${debateTitle(d)} : ${d.titre}`, sub: d.contexte, href: "#controverses", attr: `data-debat="${d.id}"`, txt: norm(debateTitle(d) + " " + d.titre + " " + d.contexte + " " + d.rounds.map((r) => r[1]).join(" ")) }));
    OEC.crises.forEach((c) => INDEX.push({ t: "Crises", label: c.nom, sub: `${c.lieu} · ${c.annee}`, href: "#crises", attr: `data-crisis="${c.id}"`, txt: norm(c.nom + " " + c.phases.join(" ") + " " + c.lecon) }));
    OEC.timeline.forEach((ev, i) => INDEX.push({ t: "Frise", label: `${ev.y < 0 ? "−" + Math.abs(ev.y) : ev.y} · ${ev.t}`, sub: ev.d, href: "#histoire", attr: `data-tl="${i}"`, txt: norm(ev.y + " " + ev.t + " " + ev.d) }));
    INDEX.push({ t: "Pages", label: "Les familles de pensée", sub: "Orthodoxes et hétérodoxes : comment se situent les économistes", href: "#familles", txt: norm("familles de pensée orthodoxie hétérodoxie hétérodoxe courant dominant post-keynésiens institutionnalistes régulation féministe école autrichienne marxisme néoclassiques") });
    ((OEC.parcours && OEC.parcours.list) || []).forEach((p) => INDEX.push({ t: "Parcours guidés", label: p.titre, sub: p.accroche, href: "#parcours-" + p.id, txt: norm(p.titre + " " + p.accroche + " " + p.intro) }));
    (OEC.recits || []).forEach((r) => INDEX.push({ t: "Époques", label: `${r.era} : ${r.titre}`, sub: r.periode, href: "#" + A.eraSlug(r.era), txt: norm(r.era + " " + r.titre + " " + r.texte.join(" ")) }));
  }
  function search(q) {
    const n = norm(q).trim();
    const out = $("#searchOut");
    if (n.length < 2) { out.innerHTML = `<p class="muted" style="padding:14px 4px">Tapez au moins deux lettres : un auteur, une notion, une date, un mot.</p>`; return; }
    const terms = n.split(/\s+/);
    const scored = INDEX.map((it) => {
      const l = norm(it.label); let s = 0;
      if (!terms.every((t) => it.txt.includes(t) || l.includes(t))) return null;
      if (l.startsWith(n)) s += 50; if (l.includes(n)) s += 25;
      terms.forEach((t) => { if (l.includes(t)) s += 8; });
      return { it, s };
    }).filter(Boolean).sort((a, b) => b.s - a.s).slice(0, 30);
    if (!scored.length) { out.innerHTML = `<p class="muted" style="padding:14px 4px">Aucun résultat pour « ${q.replace(/[<>&]/g, "")} ».</p>`; return; }
    const groups = {};
    scored.forEach(({ it }) => (groups[it.t] = groups[it.t] || []).push(it));
    out.innerHTML = Object.entries(groups).map(([t, items]) => `<div class="sgroup"><h4>${t}</h4>${items.slice(0, 6).map((it) =>
      `<a class="sres" href="${it.href}" ${it.attr || ""}>${it.img ? `<img src="${A.portrait(it.img)}" alt="" width="30" height="30">` : ""}<span><b>${it.label}</b><small>${it.sub.replace(/<[^>]+>/g, "").slice(0, 110)}${it.sub.length > 110 ? "…" : ""}</small></span></a>`).join("")}</div>`).join("");
  }
  function searchUI() {
    const dlg = $("#searchDlg"), input = $("#searchInput");
    const open = () => { if (!INDEX.length) buildIndex(); dlg.showModal(); input.select(); search(input.value); };
    $("#searchBtn").addEventListener("click", open);
    document.addEventListener("keydown", (e) => {
      const typing = /input|textarea|select/i.test(e.target.tagName);
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !typing)) { e.preventDefault(); open(); }
    });
    input.addEventListener("input", () => search(input.value));
    input.addEventListener("keydown", (e) => {
      const links = $$("#searchOut .sres"); if (!links.length) return;
      if (e.key === "ArrowDown") { e.preventDefault(); links[0].focus(); }
      if (e.key === "Enter") { e.preventDefault(); links[0].click(); }
    });
    $("#searchOut").addEventListener("keydown", (e) => {
      const links = $$("#searchOut .sres"), i = links.indexOf(document.activeElement);
      if (e.key === "ArrowDown" && i < links.length - 1) { e.preventDefault(); links[i + 1].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); (i > 0 ? links[i - 1] : input).focus(); }
    });
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    $("#searchClose").addEventListener("click", () => dlg.close());
  }

  /* ---------- Glossaire au survol, notice au clic ---------- */
  function glossary() {
    const tip = $("#gtip");
    const def = (k) => CONCEPT[k] ? [CONCEPT[k].nom, CONCEPT[k].court + " Cliquez pour lire la notice."] : (OEC.glossaire || {})[k];
    const show = (d) => {
      const g = def(d.dataset.g); if (!g) return;
      tip.innerHTML = `<b>${g[0]}</b>${g[1]}`;
      const r = d.getBoundingClientRect(), w = Math.min(320, window.innerWidth - 32);
      tip.style.maxWidth = w + "px";
      tip.style.left = Math.max(16, Math.min(window.innerWidth - w - 16, r.left + r.width / 2 - w / 2)) + "px";
      tip.style.opacity = 1;
      const th = tip.offsetHeight;
      tip.style.top = (r.top > th + 20 ? r.top - th - 10 : r.bottom + 10) + "px";
    };
    const hide = () => (tip.style.opacity = 0);
    document.addEventListener("mouseover", (e) => { const d = e.target.closest("dfn[data-g]"); if (d) show(d); });
    document.addEventListener("mouseout", (e) => { if (e.target.closest("dfn[data-g]")) hide(); });
    document.addEventListener("focusin", (e) => { const d = e.target.closest("dfn[data-g]"); if (d) show(d); });
    document.addEventListener("focusout", (e) => { if (e.target.closest("dfn[data-g]")) hide(); });
    document.addEventListener("click", (e) => {
      const d = e.target.closest("dfn[data-g]");
      if (d && CONCEPT[d.dataset.g]) { hide(); go("c-" + d.dataset.g); return; }
      if (d) show(d); else hide();
    });
    document.addEventListener("keydown", (e) => { const d = e.target.closest && e.target.closest("dfn[data-g]"); if (d && e.key === "Enter" && CONCEPT[d.dataset.g]) go("c-" + d.dataset.g); });
    window.addEventListener("scroll", hide, { passive: true });
  }

  window.OECPAGES = {
    init() {
      try { history.scrollRestoration = "manual"; } catch (e) {}
      epochs(); home(); conceptsIndex(); glossary(); searchUI(); familles(); profils();
      if (OEC.remplirTotaux) OEC.remplirTotaux();
      document.addEventListener("oec-theme", () => {
        home(); renderConceptGrid(); INDEX = [];
        const r = parse(location.hash);
        if (r.v === "eco") renderEco(r.id); if (r.v === "question") renderQuestion(r.id); if (r.v === "concept") renderConcept(r.id);
      });
      route();
    }
  };
})();
