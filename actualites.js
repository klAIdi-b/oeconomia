/* Œconomia — le coin de l'actualité économique
   Un numéro toutes les deux semaines, le plus récent en tête du tableau.
   Chaque numéro : n, periode, portee ("Suisse" ou "Monde"), titre, resume (avec nos mots, ≤ 100 mots),
   chiffre { valeur, legende }, sources [{ nom, titre, date, url }], concepts (id de concepts.js, le premier est la notion principale),
   questions [{ niveau: "Comprendre" | "Expliquer" | "Réfléchir", q, pistes }]. */
OEC.actualites = [
  {
    n: 1,
    periode: "Quinzaine du 23 novembre au 6 décembre 2026",
    portee: "Suisse",
    titre: "Genève reste nettement au-dessus de la moyenne suisse du chômage",
    resume: "Fin octobre 2026, 13 387 personnes étaient inscrites au chômage à Genève, soit un taux de 5,3 %. Ce taux n’a pas bougé depuis septembre, mais il a progressé de 0,4 point en un an. Pour l’ensemble du pays, le SECO annonce un taux de 3,0 %, lui aussi stable, avec 141 015 chômeurs inscrits, environ 4 % de plus qu’il y a un an. Chez les 15-24 ans, le taux national est de 3,2 %. En proportion, Genève compte donc presque deux fois plus de chômeurs que la moyenne suisse.",
    chiffre: { valeur: "5,3 %", legende: "taux de chômage à Genève en octobre 2026, contre 3,0 % pour la Suisse" },
    sources: [
      { nom: "SECO", titre: "La situation sur le marché du travail en octobre 2026", date: "05.11.2026", url: "https://www.seco.admin.ch/fr/newnsb/UuA5YIwSJ2xh" },
      { nom: "OCSTAT", titre: "Chômage à Genève, octobre 2026", date: "05.11.2026", url: "https://statistique.ge.ch/statistique/actualites/welcome.asp?actu=6076&Actudomaine=03_03" }
    ],
    concepts: ["taux-naturel", "hysterese"],
    questions: [
      { niveau: "Comprendre",
        q: "Combien de points de pourcentage séparent le taux de chômage genevois du taux suisse ? Le chômage genevois a-t-il augmenté ou diminué en un an ?",
        pistes: "5,3 − 3,0 = 2,3 points. Le chômage genevois a augmenté de 0,4 point en un an." },
      { niveau: "Expliquer",
        q: "Lisez la notion « Taux de chômage naturel ». Expliquez avec vos mots pourquoi il reste toujours un peu de chômage, même quand l’économie va bien. Donnez un exemple.",
        pistes: "Il faut du temps pour trouver un nouvel emploi après une démission ou un déménagement ; certaines compétences ne correspondent pas aux postes offerts ; les règles du marché du travail jouent aussi. Exemple : une employée quitte son poste et met trois mois à en trouver un autre." },
      { niveau: "Réfléchir",
        q: "Proposez deux raisons possibles pour lesquelles Genève a plus de chômage que la moyenne suisse. Quelle information faudrait-il chercher pour vérifier l’une d’elles ?",
        pistes: "Hypothèses à discuter, que les sources n’affirment pas : le type d’emplois du canton, les qualifications demandées, la concurrence sur le marché du travail régional, le coût de la vie, la proportion de personnes qui s’inscrivent à l’office de l’emploi. Pour vérifier : le chômage par secteur ou par niveau de formation (OCSTAT), la comparaison avec d’autres cantons (SECO)." }
    ]
  }
];

(function () {
  "use strict";
  const list = (OEC.actualites || []).slice().sort((a, b) => b.n - a.n);
  const CONCEPT = {}; (OEC.concepts || []).forEach((c) => (CONCEPT[c.id] = c));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const conceptLink = (id) => CONCEPT[id] ? `<a href="#c-${id}">${esc(CONCEPT[id].nom)}</a>` : "";

  function numero(a) {
    const main = a.concepts[0], autres = a.concepts.slice(1).filter((id) => CONCEPT[id]);
    return `<article class="actu" id="actu-${a.n}">
      <p class="actu-meta"><span class="actu-tag">${esc(a.portee)}</span><span>N° ${a.n} · ${esc(a.periode)}</span></p>
      <h3>${esc(a.titre)}</h3>
      <div class="actu-body">
        <div>
          <p class="actu-resume">${esc(a.resume)}</p>
          <p class="actu-src"><b>Sources :</b> ${a.sources.map((s) => `${esc(s.nom)}, <a href="${esc(s.url)}" target="_blank" rel="noopener">« ${esc(s.titre)} »</a>, ${esc(s.date)}`).join(" ; ")}.</p>
        </div>
        <aside class="actu-side">
          <div class="actu-chiffre"><b>${esc(a.chiffre.valeur)}</b><small>${esc(a.chiffre.legende)}</small></div>
          ${CONCEPT[main] ? `<a class="next-card" href="#c-${main}"><span class="ico">Œ</span><span><small>La notion à lire</small>${esc(CONCEPT[main].nom)}</span></a>` : ""}
          ${autres.length ? `<p class="actu-plus">Pour aller plus loin : ${autres.map(conceptLink).join(", ")}</p>` : ""}
        </aside>
      </div>
      <ol class="actu-qs">
        ${a.questions.map((q, i) => `<li>
          <p><span class="lvltag">${i + 1} · ${esc(q.niveau)}</span></p>
          <p class="actu-q">${esc(q.q)}</p>
          <details class="actu-pistes"><summary>Pistes de correction</summary><p>${esc(q.pistes)}</p></details>
        </li>`).join("")}
      </ol>
    </article>`;
  }

  function render() {
    const box = document.getElementById("actuList");
    if (box) {
      if (!list.length) { box.innerHTML = `<p class="muted">Aucune actualité pour le moment.</p>`; }
      else {
        const [last, ...old] = list;
        box.innerHTML = numero(last) + `<div class="actu-archive"><p class="eyebrow">Numéros précédents</p>${old.length
          ? old.map((a) => `<details class="bloc"><summary><span class="bnum">N° ${a.n}</span><span class="btxt"><b>${esc(a.titre)}</b><small>${esc(a.portee)} · ${esc(a.periode)}</small></span><span class="bchev"></span></summary><div class="bbody">${numero(a)}</div></details>`).join("")
          : `<p class="muted">Les anciens numéros seront rangés ici.</p>`}</div>`;
      }
    }
    const home = document.getElementById("homeActu");
    if (home && list.length) {
      const a = list[0];
      home.innerHTML = `<div class="qstrip-head"><p class="eyebrow">L’actualité économique</p><a href="#actualite" class="more">Lire et répondre →</a></div>
        <a class="qcard actu-home" href="#actualite"><span class="k">${esc(a.portee)} · N° ${a.n}</span><b>${esc(a.titre)}</b><p>${esc(a.chiffre.valeur)} : ${esc(a.chiffre.legende)}.</p></a>`;
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
})();
