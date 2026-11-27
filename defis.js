/* Œconomia — petits défis : une question, un pari, une réponse qui renvoie vers le contenu.
   Trois défis par page, tirés au hasard à chaque visite ; l’accueil puise dans tous.
   Les défis réussis sont notés dans le navigateur (« oec-defis ») pour les badges de « Ma progression ».
   Le défi de la carte des influences reste dans app.js, car sa réponse s’affiche sur la carte. */
(function () {
  "use strict";
  const tlIndex = (y) => (OEC.timeline || []).findIndex((e) => e.y === y);
  const tl = (y, label) => () => { const i = tlIndex(y); return i >= 0 ? [label, "#histoire", `data-tl="${i}"`] : [label, "#histoire", ""]; };
  const to = (label, href, attr = "") => () => [label, href, attr];

  const DEFIS = {
    histoire: [
      { q: "En quelle année paraît La Richesse des nations d’Adam Smith, souvent tenue pour l’acte de naissance de l’économie ?", o: ["1690", "1776", "1848", "1936"], c: 1,
        e: "En 1776, l’année de la déclaration d’indépendance des États-Unis. Smith y explique comment la division du travail et l’échange enrichissent les nations.", go: tl(1776, "Voir 1776 sur la frise") },
      { q: "Quelle crise a donné naissance à la macroéconomie moderne de Keynes ?", o: ["La tulipomanie hollandaise de 1637", "Le krach de 1929 et la Grande Dépression", "Le premier choc pétrolier de 1973", "La crise financière mondiale de 2008"], c: 1,
        e: "La Grande Dépression : le chômage de masse ne se résorbait pas, contrairement à ce que prévoyait la théorie. Keynes publie sa Théorie générale en 1936 pour l’expliquer.", go: tl(1929, "Voir 1929 sur la frise") },
      { q: "Qui publie en 1867 le premier livre du Capital ?", o: ["Adam Smith", "David Ricardo", "Karl Marx", "John Stuart Mill"], c: 2,
        e: "Karl Marx, à Londres. Il y analyse le capitalisme comme un rapport social entre ceux qui possèdent les moyens de production et ceux qui vendent leur travail.", go: tl(1867, "Voir 1867 sur la frise") }
    ],
    questions: [
      { q: "L’eau est indispensable, le diamant ne l’est pas. Pourquoi le diamant coûte-t-il pourtant beaucoup plus cher ?", o: ["Parce qu’il est plus utile que l’eau dans la vie de tous les jours", "Parce qu’il est rare, et qu’on paie l’utilité de la dernière unité", "Parce qu’il demande beaucoup plus de travail pour être extrait", "Parce que la mode et le prestige suffisent à fixer son prix"], c: 1,
        e: "C’est le « paradoxe de l’eau et du diamant », posé par Adam Smith et résolu un siècle plus tard par les marginalistes : un verre d’eau de plus ne vaut presque rien quand l’eau abonde.", go: to("Lire le dossier sur la valeur", "#q-valeur") },
      { q: "Un pays est plus productif que son voisin pour tous les biens. Selon Ricardo, a-t-il intérêt à commercer avec lui ?", o: ["Non, il a intérêt à tout produire lui-même", "Oui, en se spécialisant là où son avantage est le plus grand", "Seulement s’il manque de certaines matières premières", "Non, car il perdrait des emplois dans tous les secteurs"], c: 1,
        e: "Oui : c’est l’avantage comparatif. Chacun se spécialise là où il est relativement le meilleur, et les deux pays y gagnent.", go: to("Lire le dossier sur le commerce", "#q-commerce") },
      { q: "Selon Keynes, baisser les salaires suffit-il à faire disparaître le chômage ?", o: ["Oui, car des salaires plus bas incitent toujours à embaucher", "Non, car cela réduit aussi les revenus et donc la demande", "Oui, à condition que les prix baissent dans la même mesure", "Oui, si la baisse est assez forte et assez rapide"], c: 1,
        e: "Non. Une baisse générale des salaires réduit les revenus des ménages, donc la demande, et peut laisser le chômage intact. C’est l’argument de la demande effective.", go: to("Lire le dossier sur le chômage", "#q-chomage") }
    ],
    concepts: [
      { q: "Vrai ou faux : quand une banque vous accorde un prêt, elle vous prête l’argent que d’autres clients ont déposé.", o: ["Vrai", "Faux"], c: 1,
        e: "Faux. En accordant un prêt, la banque inscrit simplement la somme sur votre compte : de la monnaie nouvelle vient d’apparaître. La Banque d’Angleterre l’a expliqué noir sur blanc en 2014.", go: to("Lire la notice « Monnaie endogène »", "#c-monnaie-endogene") },
      { q: "Vrai ou faux : pour certains produits de luxe, une hausse du prix peut faire augmenter la demande.", o: ["Vrai", "Faux"], c: 0,
        e: "Vrai. Ce sont les « biens Veblen » : leur prix élevé fait partie de leur attrait, car il montre le statut de celui qui les achète.", go: to("Lire la notice « Consommation ostentatoire »", "#c-consommation-ostentatoire") },
      { q: "Une usine pollue une rivière sans payer pour les dégâts causés aux pêcheurs. Comment appelle-t-on cet effet ?", o: ["Une rente de situation", "Une externalité négative", "Un monopole naturel", "Une trappe à liquidité"], c: 1,
        e: "Une externalité négative : un effet sur des tiers que le prix ne prend pas en compte. Une taxe ou une règle peut le faire payer à celui qui le cause.", go: to("Lire la notice « Externalité »", "#c-externalite") }
    ],
    crises: [
      { q: "Après le krach de 1929, combien de banques américaines ont fait faillite entre 1930 et 1933 ?", o: ["Environ 90", "Environ 900", "Environ 9 000", "Environ 90 000"], c: 2,
        e: "Environ 9 000 banques disparaissent, emportant l’épargne de millions de déposants. La masse monétaire s’effondre, et la crise boursière devient la Grande Dépression.", go: to("Revivre le krach de 1929", "#crises", `data-crisis="krach29"`) },
      { q: "Sur quoi porte la première grande bulle spéculative de l’histoire, dans les Provinces-Unies des années 1630 ?", o: ["Le café d’Arabie", "Les bulbes de tulipes", "Le sucre des Antilles", "Les épices des Indes"], c: 1,
        e: "Les bulbes de tulipes : certains s’échangent à des prix extravagants, puis le marché s’effondre en 1637.", go: to("Revivre la tulipomanie", "#crises", `data-crisis="tulipes"`) },
      { q: "Quelle banque américaine fait faillite en septembre 2008, faisant basculer la crise des subprimes dans la panique ?", o: ["Goldman Sachs", "Lehman Brothers", "JPMorgan Chase", "Bank of America"], c: 1,
        e: "Lehman Brothers. Sa faillite, le 15 septembre 2008, provoque une panique sur les marchés du monde entier.", go: to("Revivre la crise des subprimes", "#crises", `data-crisis="subprimes"`) }
    ],
    controverses: [
      { q: "En 2021, l’inflation américaine allait-elle s’emballer ? Qui des deux économistes a vu juste ?", o: ["Paul Krugman, qui jugeait la hausse des prix passagère", "Lawrence Summers, qui annonçait une inflation forte", "Les deux, qui prévoyaient la même hausse des prix", "Aucun des deux, l’inflation étant restée modérée"], c: 1,
        e: "Summers. L’inflation a dépassé 9 % en juin 2022, et Krugman a publié une chronique intitulée « I Was Wrong About Inflation ». Mais la désinflation a ensuite été plus douce que Summers ne le prévoyait.", go: to("Voir le duel Summers contre Krugman", "#controverses", `data-debat="summers-krugman"`) },
      { q: "Qui publie en 1944 La Route de la servitude, la même année que La Grande Transformation de Polanyi ?", o: ["Keynes", "Hayek", "Friedman", "Schumpeter"], c: 1,
        e: "Friedrich Hayek. Pour lui, chaque intervention de l’État en appelle une autre et mène à la planification ; pour Polanyi, c’est le marché sans limites qui a détruit la démocratie.", go: to("Voir le duel Polanyi contre Hayek", "#controverses", `data-debat="polanyi-hayek"`) },
      { q: "Dans les années 1930, sur quoi Keynes et Hayek s’opposent-ils d’abord ?", o: ["Sur le libre-échange et les droits de douane", "Sur la sortie de crise, relancer ou laisser faire", "Sur le maintien ou l’abandon de l’étalon-or", "Sur la propriété privée des entreprises"], c: 1,
        e: "Pour Keynes, l’État doit soutenir la demande ; pour Hayek, la crise corrige des investissements mal orientés par un crédit trop facile.", go: to("Voir le duel Keynes contre Hayek", "#controverses", `data-debat="keynes-hayek"`) }
    ],
    actualite: [
      { q: "Vrai ou faux : en 2020, les prix ont baissé en moyenne en Suisse.", o: ["Vrai", "Faux"], c: 0,
        e: "Vrai : l’inflation a été de −0,7 %, une légère déflation, liée à la pandémie et à la force du franc. Deux ans plus tard, elle atteignait 2,8 %.", go: to("S’exercer sur la monnaie et l’inflation", "#ex-monnaie-1") },
      { q: "Vrai ou faux : de 2015 à 2022, le taux directeur de la BNS était négatif.", o: ["Vrai", "Faux"], c: 0,
        e: "Vrai : −0,75 %, pour freiner l’appréciation du franc. La BNS l’a ensuite relevé jusqu’à 1,75 % en 2023, puis ramené à 0 % en 2025.", go: to("Lire la notice « Trappe à liquidité »", "#c-trappe-liquidite") },
      { q: "En août 2025, quel droit de douane les États-Unis imposent-ils sur de nombreux produits suisses ?", o: ["10 %", "15 %", "25 %", "39 %"], c: 3,
        e: "39 %, l’un des taux les plus élevés appliqués à un pays développé. Un accord annoncé en novembre 2025 prévoit de le ramener à 15 %.", go: to("Lire le dossier sur le commerce", "#q-commerce") }
    ],
    tutorat: [
      { q: "Qui a écrit : « À long terme, nous serons tous morts » ?", o: ["Joseph Schumpeter", "John Maynard Keynes", "David Ricardo", "Milton Friedman"], c: 1,
        e: "Keynes, dans La Réforme monétaire (1923). Il reprochait aux économistes de se contenter de dire qu’après la tempête, la mer redeviendra calme.", go: to("Poser une question à Keynes", "#tutorat", `data-tutor="keynes"`) },
      { q: "Qui a écrit : « Le laissez-faire était planifié ; la planification ne l’était pas » ?", o: ["Friedrich Hayek", "Karl Polanyi", "Joan Robinson", "John Kenneth Galbraith"], c: 1,
        e: "Karl Polanyi, dans La Grande Transformation (1944). Pour lui, le marché autorégulateur a été créé par des lois, et non par la nature.", go: to("Poser une question à Polanyi", "#tutorat", `data-tutor="polanyi"`) },
      { q: "Quelle économiste compare l’économiste à un « plombier » qui doit régler les détails concrets des politiques ?", o: ["Elinor Ostrom", "Esther Duflo", "Joan Robinson", "Mariana Mazzucato"], c: 1,
        e: "Esther Duflo, dans sa conférence « The Economist as Plumber » (2017). Un programme bien conçu peut échouer à cause d’un formulaire trop compliqué.", go: to("Interroger un guide sur Duflo", "#tutorat", `data-tutor="duflo"`) }
    ],
    labo: [
      { q: "En période de chômage, l’État dépense un milliard de francs de plus. Selon Keynes, de combien le revenu national augmente-t-il ?", o: ["De moins d’un milliard", "D’un milliard exactement", "De plus d’un milliard", "Il ne change pas"], c: 2,
        e: "De plus d’un milliard : chaque franc dépensé devient le revenu de quelqu’un qui en dépense une partie à son tour. C’est l’effet multiplicateur, plus faible dans un petit pays ouvert comme la Suisse.", go: to("Tester le simulateur du multiplicateur", "#labo", `data-lab="1"`) },
      { q: "Un gel détruit une partie de la récolte d’oranges. Que deviennent le prix et la quantité vendue ?", o: ["Le prix baisse et la quantité vendue augmente", "Le prix monte et la quantité vendue baisse", "Le prix et la quantité vendue montent tous deux", "Le prix et la quantité vendue ne changent pas"], c: 1,
        e: "L’offre diminue : le prix monte et la quantité vendue baisse. Un choc d’offre fait bouger le prix et la quantité en sens contraire.", go: to("Tester le simulateur Offre et demande", "#labo", `data-lab="0"`) },
      { q: "La banque centrale double la quantité de monnaie. La production et la vitesse de circulation ne changent pas. Un café coûtait 4 francs ; il coûte maintenant…", o: ["4 francs", "6 francs", "8 francs", "16 francs"], c: 2,
        e: "8 francs : si M × V = P × Q et que V et Q ne bougent pas, les prix doublent comme la monnaie. C’est la théorie quantitative. En situation de sous-emploi, le résultat serait différent.", go: to("Tester le simulateur Planche à billets", "#labo", `data-lab="5"`) }
    ],
    entrainement: [
      { q: "Votre salaire augmente de 2 % et les prix de 3 %. Votre pouvoir d’achat…", o: ["augmente d’environ 2 %", "ne change pas", "baisse d’environ 1 %", "baisse de 5 %"], c: 2,
        e: "Il baisse d’environ 1 % : votre salaire monte moins vite que les prix. C’est la différence entre une hausse nominale et une hausse réelle.", go: to("Revoir la méthode : nominal ou réel", "#methode-reel") },
      { q: "Un pays exporte pour 120 milliards et importe pour 100 milliards. Quel est son taux de couverture ?", o: ["20 %", "83 %", "100 %", "120 %"], c: 3,
        e: "120 % : exportations ÷ importations × 100. Au-dessus de 100 %, la balance commerciale est excédentaire.", go: to("S’exercer sur le commerce international", "#ex-commerce-1") },
      { q: "Les 20 % les plus aisés gagnent en moyenne 150 000 francs par an, les 20 % les plus modestes 30 000. Que vaut le rapport S80/S20 ?", o: ["0,2", "5", "120 000", "180"], c: 1,
        e: "5 : 150 000 ÷ 30 000. Les plus aisés gagnent en moyenne cinq fois plus que les plus modestes. L’OFS et Eurostat utilisent cet indicateur.", go: to("S’exercer sur les inégalités", "#ex-inegalites-1") }
    ],
    methode: [
      { q: "Un prix augmente de 50 %, puis baisse de 50 %. Par rapport au prix de départ, il est…", o: ["identique", "25 % plus bas", "25 % plus haut", "50 % plus bas"], c: 1,
        e: "25 % plus bas : 100 devient 150, puis 75. Les pourcentages successifs ne s’additionnent pas, ils se multiplient (1,5 × 0,5 = 0,75).", go: to("Voir la fiche sur les variations successives", "#methode-multiplicateur") },
      { q: "Un indice des prix passe de 100 à 106. De combien les prix ont-ils augmenté ?", o: ["0,06 %", "6 %", "106 %", "On ne peut pas le savoir"], c: 1,
        e: "6 % : avec une base 100, l’écart à 100 se lit directement en pourcentage.", go: to("Voir la fiche sur les indices", "#methode-indices") },
      { q: "Un taux d’intérêt passe de 2 % à 3 %. Il a augmenté de…", o: ["1 %, soit une hausse d’un point", "1 point de pourcentage, soit une hausse de 33 %", "1 point de pourcentage, soit une hausse de 50 %", "50 %, soit une hausse de 1,5 point"], c: 2,
        e: "D’un point de pourcentage, ce qui représente une hausse de 50 % du taux lui-même. Confondre les deux est une erreur fréquente dans les médias.", go: to("Voir la fiche sur les taux de variation", "#methode-variation") }
    ],
    familles: [
      { q: "Lequel de ces économistes appartient à une hétérodoxie libérale, opposée à l’intervention de l’État ?", o: ["Michał Kalecki", "Friedrich Hayek", "Marilyn Waring", "Michel Aglietta"], c: 1,
        e: "Hayek. L’école autrichienne rejette les modèles d’équilibre du courant dominant, mais pour défendre davantage de marché, et non moins. L’hétérodoxie n’est pas seulement de gauche.", go: to("Voir le duel Polanyi contre Hayek", "#controverses", `data-debat="polanyi-hayek"`) },
      { q: "Quel courant place l’incertitude radicale, la monnaie de crédit et l’instabilité financière au cœur de l’analyse ?", o: ["Les néoclassiques", "Les post-keynésiens", "Les monétaristes", "L’école autrichienne"], c: 1,
        e: "Les post-keynésiens, de Joan Robinson et Michał Kalecki à Hyman Minsky et Stephanie Kelton.", go: to("Lire le portrait de Kalecki", "#eco-kalecki") },
      { q: "Quelle économiste a montré tout ce que le PIB ne compte pas, dans un livre souvent tenu pour le texte fondateur de l’économie féministe ?", o: ["Esther Duflo", "Elinor Ostrom", "Marilyn Waring", "Joan Robinson"], c: 2,
        e: "Marilyn Waring, dans Counting for Nothing (1988) : le travail domestique et de soin, assuré surtout par des femmes, n’entre pas dans les comptes nationaux.", go: to("Lire le portrait de Waring", "#eco-waring") }
    ]
  };

  const get = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || "") || d; } catch (e) { return d; } };
  const set = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  const css = document.createElement("style");
  css.textContent = `
.defi{margin:0 0 26px; padding:16px 20px; border:1px solid var(--line); border-left:4px solid var(--plum); border-radius:0 var(--r) var(--r) 0; background:var(--card)}
.defi .eyebrow{margin:0; color:var(--plum)}
.defi h3{font-size:22px; line-height:1.25; margin:6px 0 12px}
.defi-opts{display:flex; flex-wrap:wrap; gap:8px}
.defi-opts button{border:1px solid var(--line); background:var(--paper); color:var(--ink); border-radius:99px; padding:8px 14px; font:600 14px var(--f-body); cursor:pointer; text-align:left}
.defi-opts button:hover:not(:disabled){border-color:var(--plum)}
.defi-opts button:disabled{cursor:default; opacity:.6}
.defi-opts button.ok{opacity:1; background:var(--note-soft); border-color:var(--note); color:var(--ink)}
.defi-opts button.ko{opacity:1; border-color:var(--serial); text-decoration:line-through}
.defi-res{margin-top:12px; font-size:15px; line-height:1.55}
.defi-res .btn-row{display:flex; flex-wrap:wrap; gap:8px; margin-top:10px}
@media (max-width:720px){ .defi h3{font-size:19px} .defi-opts button{width:100%} }`;
  document.head.appendChild(css);

  const ALL = Object.entries(DEFIS).flatMap(([p, list]) => list.map((d, i) => [p, i]));
  /* Tire un défi de la page (ou de tout le site pour l’accueil), en évitant celui qu’on vient de voir et, si possible, ceux déjà réussis */
  function choose(key, avoid) {
    const pool = key === "accueil" ? ALL : DEFIS[key].map((d, i) => [key, i]);
    const done = new Set(get("oec-defis", []));
    let cand = pool.filter(([p, i]) => `${p}:${i}` !== avoid && !done.has(`${p}:${i}`));
    if (!cand.length) cand = pool.filter(([p, i]) => `${p}:${i}` !== avoid);
    if (!cand.length) cand = pool;
    return cand[Math.floor(Math.random() * cand.length)];
  }
  /* Ordre des réponses mélangé de façon stable (graine tirée de la question), comme dans les quiz des notices.
     Les vrai/faux et les listes de nombres gardent leur ordre naturel. */
  function ordre(d) {
    const idx = d.o.map((_, j) => j);
    if (d.o.length < 3 || d.o.every((t) => /^[−-]?\d/.test(t))) return idx;
    let h = 2166136261; for (const ch of d.q) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
    for (let k = idx.length - 1; k > 0; k--) { h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0; const r = h % (k + 1); [idx[k], idx[r]] = [idx[r], idx[k]]; }
    return idx;
  }
  function render(slot, avoid) {
    const key = slot.dataset.defi, [p, i] = choose(key, avoid), d = DEFIS[p][i], id = `${p}:${i}`;
    slot.dataset.cur = id; slot.dataset.done = "";
    slot.innerHTML = `<div class="defi"><p class="eyebrow">Petit défi</p><h3>${d.q}</h3><div class="defi-opts">${ordre(d).map((k) => `<button type="button" data-i="${k}">${d.o[k]}</button>`).join("")}</div><div class="defi-res" aria-live="polite"></div></div>`;
    slot.querySelector(".defi-opts").addEventListener("click", (ev) => {
      const b = ev.target.closest("button[data-i]"); if (!b) return;
      const ok = +b.dataset.i === d.c;
      slot.querySelectorAll(".defi-opts button").forEach((x) => { x.disabled = true; if (+x.dataset.i === d.c) x.classList.add("ok"); else if (x === b) x.classList.add("ko"); });
      if (ok) { const r = new Set(get("oec-defis", [])); r.add(id); set("oec-defis", [...r]); }
      slot.dataset.done = "1";
      const [label, href, attr] = d.go();
      slot.querySelector(".defi-res").innerHTML = `<b>${ok ? "Bien vu !" : "Pas tout à fait."}</b> ${d.e}<div class="btn-row"><a class="btn small" href="${href}" ${attr}>${label} →</a><button type="button" class="btn small ghost" data-autre>Un autre défi</button></div>`;
      slot.querySelector("[data-autre]").addEventListener("click", () => render(slot, id));
    });
  }
  function init() {
    document.querySelectorAll(".defi-slot[data-defi]").forEach((slot) => render(slot, null));
    /* en revenant sur une page dont le défi a été joué, on en propose un nouveau */
    new MutationObserver(() => {
      const v = document.body.dataset.view;
      document.querySelectorAll(".defi-slot[data-done='1']").forEach((slot) => { const sec = slot.closest("[data-view]"); if (sec && sec.dataset.view === v) render(slot, slot.dataset.cur); });
    }).observe(document.body, { attributes: true, attributeFilter: ["data-view"] });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
  OEC.defis = { list: DEFIS, total: ALL.length };
})();
