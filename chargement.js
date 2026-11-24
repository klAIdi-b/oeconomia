/* Œconomia — chargement à la demande.
   Les notices des concepts, les portraits complets et les exercices représentent l’essentiel du poids du site.
   Ils ne sont chargés qu’au moment où on ouvre la page concernée, fichier par fichier.
   Ce fichier est généré : s’il faut ajouter une notice, un portrait ou un thème, compléter les tables ci-dessous. */
(function () {
  "use strict";
  const NOTICES = {"institutions-inclusives":"notices.js","demande-effective":"notices-lot1a.js","avantage-comparatif":"notices-lot1a.js","theorie-quantitative":"notices-lot1b.js","destruction-creatrice":"notices-lot1b.js","instabilite-financiere":"notices-lot2a.js","plus-value":"notices-lot2a.js","externalite":"notices-lot2b.js","courbe-phillips":"notices-lot2b.js","r-g":"notices-lot2c.js","biens-communs":"notices-lot2c.js","preference-liquidite":"notices-lot3a.js","aversion-pertes":"notices-lot3a.js","taux-naturel":"notices-lot3b.js","utilite-marginale":"notices-lot3b.js","optimum-pareto":"notices-lot3c.js","capabilites":"notices-lot3c.js","valeur-travail":"notices-lot4a.js","prix-naturel":"notices-lot4a.js","rente":"notices-lot4b.js","paradoxe-epargne":"notices-lot4b.js","stagnation-seculaire":"notices-lot4c.js","asymetrie-information":"notices-lot4c.js","division-travail":"notices-lot5a.js","loi-debouches":"notices-lot5a.js","trappe-liquidite":"notices-lot5b.js","anticipations-rationnelles":"notices-lot5b.js","preteur-dernier-ressort":"notices-lot5c.js","choix-public":"notices-lot5c.js","multiplicateur":"notices-lot6a.js","stagflation":"notices-lot6a.js","alea-moral":"notices-lot6b.js","bien-public":"notices-lot6b.js","courbe-kuznets":"notices-lot6c.js","consommation-ostentatoire":"notices-lot6c.js","offre-demande":"notices-lot7a.js","surplus":"notices-lot7a.js","cout-opportunite":"notices-lot7b.js","concurrence-imparfaite":"notices-lot7b.js","equilibre-general":"notices-lot7c.js","valeur-usage":"notices-lot7c.js","pib":"notices-lot8a.js","cycles":"notices-lot8a.js","hysterese":"notices-lot8b.js","fonctions-monnaie":"notices-lot8b.js","equivalence-ricardienne":"notices-lot8c.js","rendements-croissants":"notices-lot8c.js","encastrement":"notices-lot9a.js","monnaie-endogene":"notices-lot9a.js","travail-non-remunere":"notices-lot9b.js","mode-regulation":"notices-lot9b.js"};
  const PORTRAITS = {"smith":"portraits-p1a.js","ricardo":"portraits-p1a.js","marx":"portraits-p1b.js","hayek":"portraits-p1b.js","friedman":"portraits-p2a.js","schumpeter":"portraits-p2a.js","walras":"portraits-p2b.js","marshall":"portraits-p2b.js","malthus":"portraits-p3a.js","say":"portraits-p3a.js","mill":"portraits-p3b.js","pareto":"portraits-p3b.js","aristote":"portraits-p4a.js","khaldoun":"portraits-p4a.js","mun":"portraits-p4b.js","quesnay":"portraits-p4b.js","mises":"portraits-p5a.js","veblen":"portraits-p5a.js","robinson":"portraits-p5b.js","galbraith":"portraits-p5b.js","samuelson":"portraits-p6a.js","minsky":"portraits-p6a.js","lucas":"portraits-p6b.js","kahneman":"portraits-p6b.js","ostrom":"portraits-p7a.js","sen":"portraits-p7a.js","krugman":"portraits-p7b.js","summers":"portraits-p8a.js","acemoglu":"portraits-p8a.js","piketty":"portraits-p8b.js","duflo":"portraits-p8b.js","stiglitz":"portraits-p9a.js","mazzucato":"portraits-p9a.js","polanyi":"portraits-p10a.js","kalecki":"portraits-p10a.js","aglietta":"portraits-p10a.js","waring":"portraits-p10b.js","kelton":"portraits-p10b.js"};
  const EXERCICES = [{"id":"marche","nom":"Marché et prix","file":"exercices-marche.js","n":24},{"id":"monnaie","nom":"Monnaie et inflation","file":"exercices-monnaie.js","n":24},{"id":"croissance","nom":"Croissance et PIB","file":"exercices-croissance.js","n":24},{"id":"emploi","nom":"Emploi et chômage","file":"exercices-emploi.js","n":24},{"id":"commerce","nom":"Commerce international","file":"exercices-commerce.js","n":24},{"id":"inegalites","nom":"Inégalités et répartition","file":"exercices-inegalites.js","n":24},{"id":"etat","nom":"État et biens publics","file":"exercices-etat.js","n":24},{"id":"finance","nom":"Finance","file":"exercices-finance.js","n":24},{"id":"visions","nom":"Autres visions de l’économie","file":"exercices-visions.js","n":18}];
  const done = {};          /* fichier → promesse */
  const charges = new Set();  /* fichiers déjà chargés */
  function script(src) {
    if (!done[src]) done[src] = new Promise((ok, ko) => {
      const s = document.createElement("script"); s.src = src; s.async = false;
      s.onload = () => { charges.add(src); ok(); }; s.onerror = () => { delete done[src]; ko(new Error("Chargement impossible : " + src)); };
      document.head.appendChild(s);
    });
    return done[src];
  }
  const busy = (p) => { document.body.classList.add("oec-loading"); return p.finally(() => document.body.classList.remove("oec-loading")); };
  /* Lien public vers une page du site. Sur claude.ai, la page tourne dans un cadre : on reconstruit l’adresse publique. */
  const PUBLIC = "https://claude.ai/artifact/7cm6THQkHe7xCzbPEPxpsH";
  /* Version hébergée hors de claude.ai : outils/generer-site-web.js pose window.OEC_HORS_CLAUDE dans chaque page.
     Le lien partagé pointe alors vers la page statique correspondante (titre, description et adresse propres). */
  const VUES = { histoire: "histoire", questions: "grandes-questions", concepts: "notions", pantheon: "economistes", crises: "crises", controverses: "controverses", actualite: "actualite",
    tutorat: "tutorat", boussole: "boussole", labo: "simulateurs", entrainement: "exercices", methode: "methode", sources: "sources", parcours: "parcours", enseigner: "enseigner", apropos: "a-propos",
    familles: "familles-de-pensee", genealogie: "economistes", accueil: "index" };
  const pageDe = (h) => {
    const m = h.match(/^(eco|c|q|parcours|methode)-(.+)$/), P = { eco: "economiste", c: "notion", q: "question", parcours: "parcours", methode: "methode" };
    if (m) return `${P[m[1]]}-${m[2]}.html`;
    if (h.startsWith("ex-")) return "exercices.html#" + h;
    return VUES[h] ? VUES[h] + ".html" : "index.html#" + h;
  };
  OEC.linkTo = (path) => window.OEC_HORS_CLAUDE
    ? location.origin + location.pathname.replace(/[^/]*$/, "") + pageDe(path)
    : (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) ? location.href.split("#")[0] : PUBLIC) + "#" + path;
  OEC.copyLink = (path, btn) => {
    const url = OEC.linkTo(path);
    const done = () => { const old = btn.textContent; btn.textContent = "Lien copié ✓"; setTimeout(() => (btn.textContent = old), 1800); };
    const manual = () => {               /* presse-papiers bloqué : on affiche le lien à copier */
      let f = btn.parentNode.querySelector(".lien-manuel");
      if (!f) { f = document.createElement("input"); f.className = "lien-manuel"; f.readOnly = true; btn.after(f); }
      f.value = url; f.focus(); f.select();
    };
    try { navigator.clipboard.writeText(url).then(done, manual); } catch (e) { manual(); }
  };
  /* Totaux du site, toujours calculés à partir des données. Dans la page : <span data-total="notions">51</span>
     (chiffre), data-total="notions:L" (lettres avec majuscule), data-total="notions:l" (lettres), et
     data-tpl-title="… {notions:L} …" pour une infobulle. Le chiffre écrit dans la page ne sert que si JavaScript est absent. */
  const UNITES = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
  const DIZ = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante"];
  OEC.lettres = (n, maj) => {
    let s = n < 20 ? UNITES[n] : n < 70 ? DIZ[Math.floor(n / 10)] + (n % 10 === 1 ? " et un" : n % 10 ? "-" + UNITES[n % 10] : "") : String(n);
    return maj ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  };
  const taille = (x) => (Array.isArray(x) ? x.length : x ? Object.keys(x).length : 0);
  OEC.totaux = () => ({
    economistes: taille(OEC.economists), notions: taille(OEC.concepts), questions: taille(OEC.questions), exercices: EXERCICES.reduce((a, t) => a + t.n, 0),
    fiches: taille(OEC.methode), simulateurs: taille(OEC.labNames), krachs: taille(OEC.crises), debats: taille(OEC.debates), epoques: taille(OEC.recits),
    parcours: taille(OEC.parcours && OEC.parcours.list)
  });
  const ecrire = (cle, T) => { const [k, m] = cle.split(":"), v = T[k]; return v ? (m === "L" ? OEC.lettres(v, true) : m === "l" ? OEC.lettres(v) : String(v)) : null; };
  OEC.remplirTotaux = (root) => {
    const T = OEC.totaux(), R = root || document;
    R.querySelectorAll("[data-total]").forEach((el) => { const v = ecrire(el.dataset.total, T); if (v) el.textContent = v; });
    R.querySelectorAll("[data-tpl-title]").forEach((el) => { el.title = el.dataset.tplTitle.replace(/\{([a-z]+(?::[lL])?)\}/g, (x, c) => ecrire(c, T) || x); });
  };
  OEC.lazy = {
    noticeFile: (id) => NOTICES[id],
    hasNotice: (id) => !!NOTICES[id],
    exercises: EXERCICES,
    totalExercises: EXERCICES.reduce((a, t) => a + t.n, 0),
    /* Les notices dépendent du conteneur défini dans notices.js */
    notice(id) { const f = NOTICES[id]; if (!f || (OEC.notices && OEC.notices[id])) return Promise.resolve(); return busy(script("notices.js").then(() => script(f))); },
    portrait(id) { const f = PORTRAITS[id]; if (!f || (OEC.portraits && OEC.portraits[id])) return Promise.resolve(); return busy(script(f)); },
    theme(id) { const t = EXERCICES.find((x) => x.id === id); if (!t) return Promise.resolve(); return busy(script(t.file)); },
    ready(r) {             /* ce qu’il faut charger avant d’afficher une page */
      if (r.v === "concept" && NOTICES[r.id] && !(OEC.notices && OEC.notices[r.id])) return this.notice(r.id);
      if (r.v === "eco") {
        const p = [];
        if (PORTRAITS[r.id] && !(OEC.portraits && OEC.portraits[r.id])) p.push(this.portrait(r.id));
        if (!OEC.deep) p.push(busy(script("approfondissements.js")));          /* contexte et héritage de chaque auteur */
        return p.length ? Promise.all(p) : null;
      }
      if (r.v === "labo" && !OEC.labGuide)                                      /* mode d’emploi des simulateurs */
        return busy(script("simulateurs-guide.js")).then(() => { if (window.OECLABS && OECLABS.again) OECLABS.again(); });
      if (r.v === "enseigner" && !charges.has("enseigner.js")) return busy(script("enseigner.js"));
      return null;
    }
  };
})();
