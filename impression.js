/* Œconomia — impression.
   Bouton « Imprimer » sur les notices, les dossiers, les portraits et les fiches de méthode ;
   deux boutons sur la page Entraînement (sans corrigés, avec corrigés).
   Le contenu à imprimer est mis en page dans une zone dédiée (#printArea), puis la fenêtre d’impression s’ouvre.
   Sur claude.ai, où le site tourne dans un cadre, l’impression peut être bloquée : un lien propose alors
   de télécharger une version imprimable (fichier HTML à ouvrir, puis à imprimer ou enregistrer en PDF). */
(function () {
  "use strict";
  const VARS = "--paper:#fff;--paper-2:#f2f4f1;--card:#fff;--ink:#12231C;--ink-soft:#4B5F56;--line:rgba(18,35,28,.22);--note:#1D5944;--note-soft:rgba(29,89,68,.10);--plum:#5B2C6C;--plum-soft:rgba(91,44,108,.10);--gold:#9C7516;--serial:#A3322A;--r:8px;--f-display:Aptos,Calibri,Carlito,'Segoe UI',Arial,sans-serif;--f-body:Aptos,Calibri,Carlito,'Segoe UI',Arial,sans-serif;--f-mono:Consolas,'Courier New',monospace;--f-engr:Aptos,Calibri,Carlito,'Segoe UI',Arial,sans-serif";
  /* Document imprimé : Aptos (Calibri ou Carlito à défaut), 11 points au minimum pour le contenu, 9 à 10 points pour les éléments secondaires.
     Un titre ne reste jamais seul en bas de page ; listes de réponses, tableaux courts et figures ne sont pas coupés. */
  const DOC_CSS = `
.pr-doc{font:11pt/1.5 var(--f-body); color:var(--ink); background:#fff; max-width:180mm; margin:0 auto; orphans:3; widows:3}
.pr-doc h1{font:700 22pt/1.15 var(--f-display); margin:0 0 4pt}
.pr-doc h2{font:700 20pt/1.15 var(--f-display); margin:0 0 6pt}
.pr-doc h3{font:700 14pt/1.2 var(--f-display); margin:16pt 0 6pt}
.pr-doc h4{font:700 11pt/1.3 var(--f-body); margin:10pt 0 4pt}
.pr-doc h1, .pr-doc h2, .pr-doc h3, .pr-doc h4, .pr-doc h5, .pr-doc details > summary{break-after:avoid; page-break-after:avoid; break-inside:avoid; page-break-inside:avoid}
.pr-doc p{margin:0 0 6pt}
.pr-doc p:has(+ figure), .pr-doc p:has(+ table), .pr-doc p:has(+ ul), .pr-doc p:has(+ ol){break-after:avoid; page-break-after:avoid}
.pr-doc a{color:var(--ink); text-decoration:none}
.pr-doc table{border-collapse:collapse; margin:6pt 0 10pt; font-size:11pt}
.pr-doc th, .pr-doc td{border-bottom:1px solid var(--line); padding:3pt 5pt; text-align:left; vertical-align:top}
.pr-doc thead{display:table-header-group; break-after:avoid; page-break-after:avoid}
.pr-doc tr{break-inside:avoid; page-break-inside:avoid}
.pr-doc table:not(:has(tr:nth-of-type(8))){break-inside:avoid; page-break-inside:avoid}
.pr-doc small{font-size:inherit}
.pr-doc figure{margin:8pt 0; break-inside:avoid; page-break-inside:avoid}
.pr-doc svg{width:100%; max-width:170mm; height:auto; display:block}
.pr-doc figcaption{font-size:9pt; color:var(--ink-soft)}
.pr-doc .essentiel, .pr-doc .suisse, .pr-doc .openq, .pr-doc .fiche-ex, .pr-doc .fiche-formule{border:1px solid var(--line); border-radius:6px; padding:6pt 9pt; margin:8pt 0; break-inside:avoid}
.pr-doc .essentiel > span, .pr-doc .suisse > span, .pr-doc .openq > span{display:block; font:600 9pt var(--f-body); letter-spacing:.12em; text-transform:uppercase; color:var(--gold); margin-bottom:4pt}
.pr-doc details > summary{list-style:none; font:700 13pt var(--f-display); margin:12pt 0 4pt}
.pr-doc details > summary::-webkit-details-marker{display:none}
.pr-doc .bnum{color:var(--gold); margin-right:6pt; font:600 9pt var(--f-mono)}
.pr-doc .btxt small{display:block; font:9pt var(--f-body); color:var(--ink-soft)}
.pr-doc [class*="layout"]{display:block}
.pr-doc .bchev, .pr-doc .ncontrols, .pr-doc .crumb, .pr-doc .readpill{display:none}
.pr-head{display:flex; justify-content:space-between; align-items:baseline; border-bottom:1px solid var(--line); padding-bottom:4pt; margin-bottom:12pt; font-size:9pt; color:var(--ink-soft)}
.pr-head b{font:700 11pt var(--f-engr); letter-spacing:.14em; color:var(--ink)}
.pr-foot{margin-top:16pt; padding-top:4pt; border-top:1px solid var(--line); font-size:9pt; color:var(--ink-soft); break-inside:avoid; break-before:avoid; page-break-before:avoid}
.pr-sous{color:var(--ink-soft); margin-bottom:8pt}
.pr-nom{margin:6pt 0 12pt}
.pr-ex{break-inside:avoid; page-break-inside:avoid; border-top:1px solid var(--line); padding-top:6pt; margin-top:10pt}
.pr-ex h3{margin-top:0}
.pr-comp{font-size:11pt; color:var(--ink-soft); break-after:avoid; page-break-after:avoid}
.pr-ex > p{break-after:avoid; page-break-after:avoid}
.pr-opts, .pr-vf{margin:4pt 0 6pt; padding-left:18pt}
.pr-opts, .pr-champs{break-inside:avoid; page-break-inside:avoid}
.pr-opts li, .pr-vf li{margin-bottom:3pt; break-inside:avoid; page-break-inside:avoid}
.pr-box{white-space:nowrap; margin-left:6pt; color:var(--ink-soft)}
.pr-champs{line-height:2.2}
.pr-lignes span{display:block; height:22pt; border-bottom:1px solid var(--line)}
.pr-lignes span:nth-child(-n+3){break-after:avoid; page-break-after:avoid}
.pr-corr{margin:6pt 0; padding:6pt 9pt; border-left:3px solid var(--note); background:var(--note-soft)}
.pr-corr p{margin:0 0 4pt}
.pr-corr > p:first-child{break-after:avoid; page-break-after:avoid}
.pr-qopts{margin:2pt 0 6pt; padding-left:18pt}
`;
  const style = document.createElement("style");
  style.textContent = `#printArea{display:none}
.pr-btn{margin-left:8px}
.pr-panel{position:fixed; left:50%; bottom:18px; transform:translateX(-50%); z-index:70; display:flex; flex-wrap:wrap; gap:8px 12px; align-items:center; max-width:calc(100% - 32px); padding:10px 14px; border-radius:var(--r); background:var(--card); border:1px solid var(--gold); box-shadow:0 8px 24px rgba(0,0,0,.18); font-size:14px}
.pr-panel button{font:inherit}
.pr-panel .pr-x{border:0; background:transparent; cursor:pointer; font-size:18px; color:var(--ink-soft)}
#printArea{${VARS}}
#printArea [class*="layout"]{display:block !important}
#printArea .prose, #printArea article{max-width:none}
#printArea .pr-head span{text-align:right}
${DOC_CSS.replace(/\.pr-/g, "#printArea .pr-").replace(/#printArea \.pr-doc \.pr-/g, "#printArea .pr-doc .pr-")}
@media print{
  body.oec-printing > *:not(#printArea){display:none !important}
  body.oec-printing #printArea{display:block !important}
  body.oec-printing{background:#fff !important}
  body:not(.oec-printing) .top, body:not(.oec-printing) footer, body:not(.oec-printing) aside, body:not(.oec-printing) .aside,
  body:not(.oec-printing) .crumb, body:not(.oec-printing) .ncontrols, body:not(.oec-printing) button, body:not(.oec-printing) .tuto-banner,
  body:not(.oec-printing) .ticker, body:not(.oec-printing) .pr-panel{display:none !important}
  body:not(.oec-printing) .schema::before{display:none !important}
  body:not(.oec-printing) .schema{overflow:visible} body:not(.oec-printing) .schema svg{min-width:0 !important}
  #printArea .schema{overflow:visible !important; padding:0; border:0; background:none}
  #printArea .schema svg{min-width:0 !important}
  #printArea .schema::before{display:none !important}
}
@page{margin:14mm}`;
  document.head.appendChild(style);

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase().slice(0, 60) || "oeconomia";
  const wrap = (title, html) => `<div class="pr-doc"><header class="pr-head"><b>ŒCONOMIA</b><span>${esc(title)}</span></header>${html}<footer class="pr-foot">Œconomia · ${esc(OEC.linkTo ? OEC.linkTo(location.hash.slice(1)) : location.href)} · imprimé le ${new Date().toLocaleDateString("fr-CH")}</footer></div>`;
  const standalone = (title, inner) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · Œconomia</title><style>:root{${VARS}} body{margin:16px; background:#fff} ${DOC_CSS} @page{margin:14mm} .pr-note{font:13px Aptos,Calibri,Carlito,'Segoe UI',Arial,sans-serif; color:#555; margin-bottom:12px} @media print{.pr-note{display:none}}</style></head><body><p class="pr-note">Pour imprimer ou enregistrer en PDF : Ctrl + P (ou Cmd + P sur Mac).</p>${inner}</body></html>`;

  /* ----- Impression ----- */
  let area = null, last = null;
  function print(title, html) {
    last = { title, html: wrap(title, html) };
    if (!area) { area = document.createElement("div"); area.id = "printArea"; document.body.appendChild(area); }
    area.innerHTML = last.html;
    document.body.classList.add("oec-printing");
    const done = () => document.body.classList.remove("oec-printing");
    window.addEventListener("afterprint", done, { once: true });
    try { window.print(); } catch (e) {}
    setTimeout(done, 1000);
    panel();
  }
  function panel() {
    let p = document.querySelector(".pr-panel");
    if (!p) {
      p = document.createElement("div"); p.className = "pr-panel";
      p.innerHTML = `<span>La fenêtre d’impression ne s’est pas ouverte ?</span><button type="button" class="btn small pr-dl">Télécharger la version imprimable</button><button type="button" class="pr-x" aria-label="Fermer">×</button>`;
      document.body.appendChild(p);
      p.querySelector(".pr-x").addEventListener("click", () => p.remove());
      p.querySelector(".pr-dl").addEventListener("click", () => download());
    }
    clearTimeout(p._t); p._t = setTimeout(() => p.remove(), 20000);
  }
  async function download() {
    if (!last) return;
    const name = "oeconomia-" + slug(last.title) + ".html", data = standalone(last.title, last.html);
    let dl = null;
    try { dl = window.claude && claude.use ? await claude.use("downloads") : null; } catch (e) {}
    if (dl) { try { await dl.save({ filename: name, data }); return; } catch (e) { if (e && e.code === "declined") return; } }
    try { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data], { type: "text/html" })); a.download = name; document.body.appendChild(a); a.click(); a.remove(); } catch (e) {}
  }

  /* ----- Contenu d’une page (notice, dossier, portrait, fiche) ----- */
  function cleanClone(node) {
    const c = node.cloneNode(true);
    c.querySelectorAll("details").forEach((d) => d.setAttribute("open", ""));
    c.querySelectorAll(".qopts").forEach((q) => { const ol = document.createElement("ol"); ol.type = "A"; ol.className = "pr-qopts"; q.querySelectorAll("button").forEach((b) => { const li = document.createElement("li"); li.textContent = b.textContent; ol.appendChild(li); }); q.replaceWith(ol); });
    c.querySelectorAll("aside, .aside, nav, button, input, textarea, select, script, .ncontrols, .readpill, .lien-manuel, .ex-wait").forEach((e) => e.remove());
    c.querySelectorAll("[contenteditable]").forEach((e) => e.removeAttribute("contenteditable"));
    c.querySelectorAll(".oec-editable, .oec-modifie").forEach((e) => e.classList.remove("oec-editable", "oec-modifie"));
    return c.innerHTML;
  }
  const PAGES = { concept: "#cpageInner", question: "#qpageInner", eco: "#ecopageInner" };
  function printPage() {
    const v = document.body.dataset.view, sel = PAGES[v], node = sel && document.querySelector(sel);
    if (!node) return;
    print(document.title.replace(/ · Œconomia$/, ""), cleanClone(node));
  }
  function printFiche(id) {
    const f = document.getElementById("fiche-" + id); if (!f) return;
    print("Fiche méthode : " + f.querySelector(".btxt b").textContent, `<h2>${esc(f.querySelector(".btxt b").textContent)}</h2>` + cleanClone(f.querySelector(".bbody")));
  }

  /* ----- Boutons ----- */
  function decorate() {
    Object.values(PAGES).forEach((sel) => {
      const head = document.querySelector(sel + " .article-head");
      if (head && !head.querySelector(".pr-btn")) {
        const b = document.createElement("button"); b.type = "button"; b.className = "btn small ghost pr-btn pr-page"; b.textContent = "Imprimer";
        b.title = "Imprimer cette page, ou l’enregistrer en PDF";
        const t = head.querySelector("h1, h2"); (t || head).insertAdjacentElement(t ? "afterend" : "beforeend", b);
      }
    });
  }
  ["#cpageInner", "#qpageInner", "#ecopageInner"].forEach((sel) => { const n = document.querySelector(sel); if (n) new MutationObserver(decorate).observe(n, { childList: true }); });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".pr-page")) { printPage(); return; }
    const f = e.target.closest(".pr-fiche"); if (f) { printFiche(f.dataset.id); return; }
    const x = e.target.closest(".ex-print"); if (x && OEC.exo && OEC.exo.printable) { const r = OEC.exo.printable(x.dataset.mode); if (r) print(r.title, r.html); }
  });
  /* Impression directe (Ctrl + P) : on ouvre les blocs repliés le temps de l’impression */
  window.addEventListener("beforeprint", () => { if (document.body.classList.contains("oec-printing")) return; document.querySelectorAll("details:not([open])").forEach((d) => { d.open = true; d.dataset.prOpen = "1"; }); });
  window.addEventListener("afterprint", () => { document.querySelectorAll("details[data-pr-open]").forEach((d) => { d.open = false; delete d.dataset.prOpen; }); });
  OEC.print = { print, decorate, vars: VARS };
})();
