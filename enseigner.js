/* Œconomia — page « Enseigner avec Œconomia »
   Trois séquences prêtes à l’emploi (secondaire II), des idées d’activités par outil, le mode d’emploi des exercices,
   un tableau de correspondance par thème et les règles d’usage de l’IA.
   Les fiches élèves (Word) sont dans fiches-enseignants.js, chargé au premier téléchargement. */
(function () {
  "use strict";
  const L = (href, txt, attr = "") => `<a href="${href}" ${attr}>${txt}</a>`;

  const SEQ = [
    { id: "prix", titre: "Comment se forment les prix ?", duree: "90 minutes, ou deux fois 45", fiche: "oeconomia-fiche-prix.docx",
      notions: "offre, demande, équilibre, choc d’offre et de demande, incidence d’une taxe",
      objectif: "À la fin, les élèves expliquent une variation de prix en disant quelle courbe a bougé, et pourquoi.",
      conseil: "Je ne montre jamais le graphique en premier. Je pose la question des fraises, je laisse la classe se disputer deux minutes, et seulement ensuite on ouvre le simulateur. Le graphique arrive alors comme une réponse, pas comme un objet à apprendre.",
      deroule: [
        ["10 min", "Accroche", "« Pourquoi les fraises coûtent-elles moins cher en juin ? » Chacun écrit son explication (fiche, partie 1), puis trois ou quatre élèves la lisent. Je note au tableau les mots qui reviennent, sans corriger."],
        ["30 min", "Prédire, puis tester", `Par deux, sur le ${L("#labo", "simulateur Offre et demande", 'data-lab="0"')}. Pour chacune des trois expériences guidées, les élèves écrivent leur prédiction <b>avant</b> de cliquer. C’est la règle du jeu, et c’est ce qui les fait réfléchir.`],
        ["15 min", "Mise en commun", "Qui s’est trompé, et sur quoi ? L’expérience de la taxe surprend presque toujours : la classe pense que « le vendeur la répercute entièrement ». On regarde les chiffres ensemble."],
        ["20 min", "Un cas réel", `Chaque groupe choisit un cas (loyers, billets d’avion, masques de 2020) et trace son schéma. Pour ceux qui avancent vite : la notice ${L("#c-externalite", "Externalité")}, pour voir un cas où le prix ne dit pas tout.`],
        ["15 min", "Trace écrite", `Les élèves complètent la règle de la partie 5 avec leurs mots, puis on la compare à la notice ${L("#c-offre-demande", "Offre et demande")}. Pour s’entraîner ensuite : ${L("#ex-marche-1", "exercices Marché et prix, niveau Découverte")}.`]],
      reponses: [
        "Mauvaise récolte : la droite d’offre se déplace, le prix monte (47,3 → 60,7) et la quantité baisse (53,3 → 36,7). Prix et quantité bougent en sens contraire.",
        "Produit à la mode : la droite de demande se déplace, le prix monte (47,3 → 59) et la quantité aussi (53,3 → 70). Prix et quantité bougent dans le même sens.",
        "Taxe de 25 : les acheteurs paient 13,4 de plus et les vendeurs reçoivent 11,6 de moins. Les deux côtés la supportent ; la répartition dépend de la pente des droites.",
        "Fraises de juin : c’est l’offre qui augmente (pleine saison, coûts plus bas), donc le prix baisse alors que la quantité vendue monte.",
        "Limites à faire trouver : le modèle suppose beaucoup d’acheteurs et de vendeurs, des réactions immédiates, pas de stocks ni de publicité."] },
    { id: "inflation", titre: "D’où vient l’inflation ?", duree: "90 minutes, ou deux fois 45", fiche: "oeconomia-fiche-inflation.docx",
      notions: "monnaie, théorie quantitative (M × V = P × Q), sous-emploi, nominal et réel, pouvoir d’achat",
      objectif: "À la fin, les élèves savent dire dans quels cas créer de la monnaie fait monter les prix, et calculer une hausse réelle.",
      conseil: "Le piège de cette séance, c’est de laisser croire qu’il y a une seule bonne explication. Je la construis au contraire comme une enquête à trois suspects : la monnaie, le sous-emploi, la vitesse de circulation. Friedman et Keynes deviennent alors deux enquêteurs qui ne regardent pas le même indice.",
      deroule: [
        ["10 min", "Accroche", "« Si la banque centrale doublait demain la quantité de monnaie, que se passerait-il ? » Vote à main levée : tout double, rien ne change, ça dépend. On garde le résultat du vote au tableau."],
        ["30 min", "Prédire, puis tester", `Par deux, sur le ${L("#labo", "simulateur Planche à billets", 'data-lab="5"')}. Trois situations, trois prédictions écrites avant de cliquer. Le prix du café sert de fil rouge : tout le monde comprend un café à 9 francs.`],
        ["15 min", "Mise en commun", `On revient au vote du début. La bonne réponse était « ça dépend », et les élèves savent maintenant de quoi. Je présente alors Friedman en deux phrases (${L("#eco-friedman", "sa fiche")}) et l’argument de Keynes.`],
        ["20 min", "Calculer", `Nominal ou réel : l’exercice du salaire de Léa (fiche, partie 4), avec la fiche de méthode ${L("#methode-reel", "Passer du nominal au réel")} pour ceux qui bloquent.`],
        ["15 min", "Débat et trace écrite", `Pour finir, cinq minutes sur le duel ${L("#controverses", "Summers contre Krugman", 'data-debat="summers-krugman"')} : en 2021, l’inflation serait-elle passagère ? Puis chacun complète la partie 5. Pour s’entraîner : ${L("#ex-monnaie-1", "exercices Monnaie et inflation, niveau Découverte")}.`]],
      reponses: [
        "Situation A : la monnaie passe de 200 à 450 (+125 %) et le café de 4 à 9 francs (+125 %). C’est la thèse quantitative, défendue par Friedman.",
        "Situation B : la production passe de 800 à environ 1 530 ; le café ne monte que d’environ 5,00 à 5,90 francs. C’est l’argument de Keynes : en sous-emploi, la monnaie nouvelle fait surtout produire davantage.",
        "Situation C : le prix ne bouge pas, car la monnaie supplémentaire dort sur les comptes. C’est la situation qui éclaire le mieux les années d’après 2008.",
        "M : masse monétaire ; V : vitesse de circulation ; P : niveau des prix ; Q : production réelle.",
        "Salaire de Léa : hausse nominale de 2 % (100 ÷ 5 000). Avec 2,8 % d’inflation, son pouvoir d’achat baisse d’environ 0,8 %."] },
    { id: "crises", titre: "Pourquoi les crises reviennent-elles ?", duree: "90 minutes, ou deux fois 45", fiche: "oeconomia-fiche-crises.docx",
      notions: "bulle spéculative, crédit et effet de levier, instabilité financière (Minsky), relance ou purge",
      objectif: "À la fin, les élèves reconnaissent les cinq phases d’une bulle et défendent une position sur ce qu’il faut faire après un krach.",
      conseil: "Je demande aux élèves de deviner la phase suivante avant de cliquer. Dès la deuxième crise, ils y arrivent presque tous, et c’est exactement ce que je veux qu’ils retiennent : si eux peuvent prévoir la suite, pourquoi les contemporains ne l’ont-ils pas vue ?",
      deroule: [
        ["10 min", "Accroche", "« Pourquoi des milliers de gens achètent-ils un bien dont le prix a déjà triplé ? » Réponse écrite (fiche, partie 1). En général, quelqu’un cite une cryptomonnaie ou des baskets : c’est le bon point de départ."],
        ["30 min", "Enquêter", `Sur la page ${L("#crises", "Crises", 'data-crisis="krach29"')}, les élèves suivent le krach de 1929 phase par phase, puis la ${L("#crises", "crise des subprimes", 'data-crisis="subprimes"')}. Ils résument chaque phase en une phrase dans le tableau.`],
        ["15 min", "Mise en commun", `Les points communs : une nouveauté qui justifie l’optimisme, du crédit facile, puis des ventes forcées. J’introduis ici l’idée de Minsky, « la stabilité engendre l’instabilité » (${L("#c-instabilite-financiere", "la notice")}).`],
        ["25 min", "Débattre", `La classe se sépare en deux camps et prépare ses arguments avec le duel ${L("#controverses", "Keynes contre Hayek", 'data-debat="keynes-hayek"')}, dont chaque réplique est sourcée. Dix minutes de préparation, dix de débat, puis vote.`],
        ["10 min", "Trace écrite", `Chacun écrit sa position en trois lignes (fiche, partie 4) et complète la partie 5. Pour aller plus loin : le dossier ${L("#q-crises", "Pourquoi les crises ?")}.`]],
      reponses: [
        "Points communs attendus : une innovation ou un récit qui nourrit l’optimisme, des achats à crédit avec peu d’apport, une hausse qui s’entretient elle-même, puis des ventes forcées en cascade.",
        "Le crédit : pendant l’essor, il permet d’acheter davantage et fait monter les prix ; à la panique, il oblige à vendre pour rembourser, ce qui accélère la chute.",
        "Minsky : après des années calmes, prêteurs et emprunteurs prennent plus de risques, parce que rien de grave n’est arrivé. Le système devient fragile au moment où il paraît le plus sûr.",
        "Keynes : la demande s’effondre et ne se rétablit pas seule ; l’État doit dépenser pour relancer. Hayek : la crise corrige des investissements mal orientés par un crédit trop facile ; relancer prolonge le mal.",
        "Il n’y a pas de bonne position : j’évalue l’argument, pas le camp."] },
  ];

  const IDEES = [
    ["Quel économiste êtes-vous ?", "#boussole", "", "En début d’année, chacun fait le test chez soi et note son économiste. En classe, on place tout le monde sur la carte au tableau. Les élèves découvrent qu’ils ne pensent pas tous pareil, et l’économie devient d’emblée une affaire de désaccords."],
    ["Controverses", "#controverses", "", "Deux groupes défendent chacun un camp avec les répliques du site, toutes sourcées. Le reste de la classe vote avant et après : ce qui m’intéresse, ce sont ceux qui ont changé d’avis, et pourquoi."],
    ["Simulateurs", "#labo", "", "Toujours la même règle : on écrit sa prédiction avant de lancer l’expérience guidée. Une prédiction fausse apprend plus qu’une explication juste écoutée d’une oreille."],
    ["Actualité", "#actualite", "", "Un rituel de dix minutes toutes les deux semaines : un élève présente le fait, la classe répond aux trois questions (comprendre, expliquer, réfléchir)."],
    ["ŒconoChat", "#tutorat", "", "Par deux, les élèves préparent trois questions pour un économiste, les posent, puis cherchent ce qui manque ou ce qui cloche dans la réponse. C’est aussi un bon exercice d’esprit critique face à une IA."],
    ["Carte des influences", "#genealogie", "", "Je donne un nom par élève : à lui de dire en une minute de qui son économiste hérite et qui l’a contredit. Mis bout à bout, cela donne une histoire de la pensée racontée par la classe."],
  ];

  const THEMES = [
    ["Marché, prix, concurrence", [["#parcours-marche", "Comment se forment les prix"]], [["#c-offre-demande", "Offre et demande"], ["#c-surplus", "Surplus"], ["#c-externalite", "Externalité"]], "Offre et demande, Marché émergent", "#ex-marche-1"],
    ["Monnaie, inflation, banque centrale", [["#parcours-inflation", "Comprendre l’inflation"]], [["#c-fonctions-monnaie", "Fonctions de la monnaie"], ["#c-theorie-quantitative", "Théorie quantitative"]], "Planche à billets", "#ex-monnaie-1"],
    ["Crises et finance", [["#parcours-crises", "Pourquoi les crises reviennent"]], [["#c-instabilite-financiere", "Instabilité financière"], ["#c-preteur-dernier-ressort", "Prêteur en dernier ressort"]], "page Crises", [["#ex-fi3-bulle", "Reconnaître une bulle"], ["#ex-fi3-minsky", "Les trois financements de Minsky"], ["#ex-fi2-panique", "Arrêter une panique bancaire"], ["#ex-fi2-levier", "L’effet de levier"]]],
    ["Commerce international", [["#parcours-commerce", "Le commerce mondial"]], [["#c-avantage-comparatif", "Avantage comparatif"]], "Avantage comparatif", "#ex-commerce-1"],
    ["Emploi, chômage, conjoncture", [["#parcours-chomage", "Chômage et relance"]], [["#c-demande-effective", "Demande effective"], ["#c-multiplicateur", "Multiplicateur"]], "Multiplicateur", "#ex-emploi-1"],
    ["Croissance et développement", [], [["#c-destruction-creatrice", "Destruction créatrice"], ["#c-institutions-inclusives", "Institutions inclusives"]], "", "#ex-croissance-1"],
    ["Rôle de l’État, finances publiques", [], [["#c-bien-public", "Bien public"], ["#c-externalite", "Externalité"]], "Multiplicateur", "#ex-etat-1"],
    ["Inégalités et répartition", [["#parcours-inegalites", "Inégalités : mesurer et comprendre"]], [["#c-r-g", "r > g"], ["#c-capabilites", "Capabilités"]], "", "#ex-inegalites-1"],
    ["Environnement et biens communs", [["#parcours-communs", "Les communs et l’environnement"]], [["#c-biens-communs", "Biens communs"], ["#c-externalite", "Externalité"]], "Tragédie des communs", [["#ex-et1-externalite", "Une externalité négative"], ["#ex-et1-vf-biens", "Quatre types de biens"], ["#ex-et2-ostrom", "Ni le marché ni l’État ?"], ["#ex-et2-pigou", "La taxe pigouvienne"], ["#ex-et2-co2", "Faut-il une taxe carbone plus élevée ?"]]],
    ["Histoire de la pensée économique", [["#parcours-histoire", "Vingt-quatre siècles en six portraits"]], [["#histoire", `Les ${OEC.lettres(OEC.totaux().epoques)} époques`], ["#genealogie", "Qui a influencé qui ?"]], "", [["#ex-co1-mercantilisme", "La doctrine mercantiliste"], ["#ex-et1-smith", "Les devoirs du souverain selon Adam Smith"], ["#ex-em1-keynes", "Le chômage selon Keynes"], ["#ex-vi1-familles", "Orthodoxe ou hétérodoxe ?"]]],
  ];

  const css = document.createElement("style");
  css.textContent = `
.ens{max-width:980px}
.ens h3{font-size:clamp(26px,3vw,34px); margin:44px 0 12px}
.ens > p, .ens-lede{font-size:16.5px; line-height:1.65; color:var(--ink-soft); max-width:68ch}
.ens-sommaire{display:flex; flex-wrap:wrap; gap:8px; margin:18px 0 0}
.ens-seq{border:1px solid var(--line); border-radius:var(--r); background:var(--card); margin:14px 0; overflow:hidden}
.ens-seq > summary{list-style:none; cursor:pointer; padding:18px 20px; display:grid; grid-template-columns:1fr auto; gap:6px 16px; align-items:center}
.ens-seq > summary::-webkit-details-marker{display:none}
.ens-seq > summary b{font:400 26px/1.15 var(--f-display); color:var(--ink)}
.ens-seq > summary small{grid-column:1; font-size:13.5px; color:var(--ink-soft)}
.ens-seq > summary .chev{grid-row:1 / span 2; grid-column:2; font-size:13px; font-weight:700; color:var(--gold)}
.ens-seq[open] > summary .chev::after{content:"Refermer"} .ens-seq:not([open]) > summary .chev::after{content:"Voir la séance →"}
.ens-body{padding:0 20px 20px}
.ens-body p{margin:10px 0; line-height:1.6}
.ens-conseil{border-left:4px solid var(--gold); background:var(--paper-2); border-radius:0 12px 12px 0; padding:12px 16px; margin:14px 0; font-size:15px; line-height:1.6}
.ens-conseil b{display:block; font:600 11px/1 var(--f-engr); letter-spacing:.14em; text-transform:uppercase; color:var(--gold); margin-bottom:6px}
.ens table.positions td:first-child{white-space:nowrap; font-family:var(--f-mono); font-size:13px}
.ens table.positions td:nth-child(2){font-weight:700}
.ens-dl{display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin:16px 0 6px}
.ens-dl small{color:var(--ink-soft); font-size:13px}
.ens-rep{margin-top:10px; border-top:1px solid var(--line); padding-top:10px}
.ens-rep summary{cursor:pointer; font-weight:700; font-size:14.5px}
.ens-rep li{margin:6px 0; line-height:1.55; font-size:14.5px}
.ens-idees{display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 290px), 1fr)); gap:12px; margin-top:14px}
.ens-idee{border:1px solid var(--line); border-radius:var(--r); background:var(--card); padding:16px 18px}
.ens-idee a{font-weight:700; color:var(--ink)} .ens-idee p{margin:8px 0 0; font-size:14.5px; line-height:1.55; color:var(--ink-soft)}
.ens-steps{margin:10px 0 0; padding-left:20px} .ens-steps li{margin:8px 0; line-height:1.6}
.ens table.themes td{font-size:14px} .ens table.themes td:first-child{white-space:normal; font-family:inherit; font-weight:700; font-size:14.5px}
.ens table.themes td:nth-child(2){font-weight:400}
.foot-links{display:flex; flex-wrap:wrap; gap:6px 18px; margin-top:10px}`;
  document.head.appendChild(css);

  const seqHtml = (s, i) => `<details class="ens-seq" id="ens-${s.id}"${i === 0 ? " open" : ""}>
    <summary><b>${s.titre}</b><small>${s.duree} · ${s.notions}</small><span class="chev"></span></summary>
    <div class="ens-body">
      <p><b>Objectif.</b> ${s.objectif}</p>
      <div class="ens-conseil"><b>Ce qui marche en classe</b>${s.conseil}</div>
      <div class="tablewrap"><table class="positions"><thead><tr><th>Durée</th><th>Moment</th><th>Ce que font les élèves</th></tr></thead><tbody>
        ${s.deroule.map(([d, m, t]) => `<tr><td>${d}</td><td>${m}</td><td>${t}</td></tr>`).join("")}</tbody></table></div>
      <div class="ens-dl"><button type="button" class="btn small" data-fiche="${s.fiche}">Télécharger la fiche élève (Word)</button><small>Deux pages A4, modifiable : adaptez les consignes à votre classe.</small></div>
      <details class="ens-rep"><summary>Éléments de réponse pour l’enseignant</summary><ul>${s.reponses.map((r) => `<li>${r}</li>`).join("")}</ul></details>
    </div></details>`;

  function render() {
    const root = document.getElementById("enseignerRoot");
    if (!root) return;
    root.innerHTML = `<div class="ens">
      <p class="ens-lede">J’enseigne l’économie, et j’ai construit ce site d’abord pour donner envie de comprendre. Tout ce qu’il contient s’utilise en classe tel quel : pas de compte à créer, rien à installer, un simple lien à donner aux élèves. Voici trois séances que vous pouvez reprendre demain, et quelques idées qui fonctionnent avec chaque outil.</p>
      <div class="ens-sommaire">${[["ens-sequences", "Trois séances clés en main"], ["ens-idees", "Une idée par outil"], ["ens-exercices", "Les exercices"], ["ens-themes", "Trouver une page par thème"], ["ens-ia", "L’IA sur le site"]].map(([id, t]) => `<button type="button" class="chip" data-vers="${id}">${t}</button>`).join("")}</div>

      <h3 id="ens-sequences">Trois séances clés en main</h3>
      <p>Chaque séance suit le même fil : une question qui intrigue, une prédiction écrite, une expérience sur le site, une mise en commun, puis une trace écrite. La fiche élève est un fichier Word de deux pages, que vous pouvez modifier.</p>
      ${SEQ.map(seqHtml).join("")}

      <h3 id="ens-idees">Une idée par outil</h3>
      <p>Pas besoin d’une séance entière. Chacun de ces outils tient en dix à vingt minutes.</p>
      <div class="ens-idees">${IDEES.map(([t, h, a, p]) => `<div class="ens-idee"><a href="${h}" ${a}>${t} →</a><p>${p}</p></div>`).join("")}</div>

      <h3 id="ens-exercices">Les exercices : imprimer, ou envoyer un lien</h3>
      <p>La page ${L("#entrainement", "Entraînement")} propose neuf thèmes sur trois niveaux. Trois choses à savoir :</p>
      <ol class="ens-steps">
        <li><b>Imprimer une série.</b> En haut de chaque série, le bouton d’impression propose « Sans corrigés » pour les élèves et « Avec corrigés » pour vous.</li>
        <li><b>Envoyer un lien direct.</b> Le bouton « Copier le lien du thème » donne une adresse qui ouvre directement le bon thème et le bon niveau. Chaque exercice a aussi son propre lien.</li>
        <li><b>Des chiffres différents pour chacun.</b> Dans les calculs, les valeurs changent à chaque essai : deux voisins n’ont pas le même énoncé, et un élève peut recommencer autant qu’il veut.</li>
      </ol>
      <p>Les ${OEC.lettres(OEC.totaux().fiches)} fiches de la ${L("#methode", "boîte à outils")} (pourcentages, indices, lecture de graphique, argumentation) s’impriment de la même façon.</p>

      <h3 id="ens-themes">Trouver une page par thème</h3>
      <p>Les programmes varient d’un canton et d’un pays à l’autre. Ce tableau part donc des grands thèmes que l’on retrouve partout au secondaire II.</p>
      <div class="tablewrap"><table class="positions themes"><thead><tr><th>Thème</th><th>Parcours guidé</th><th>Notions</th><th>Simulateur</th><th>Exercices</th></tr></thead><tbody>
        ${THEMES.map(([t, p, n, s, e]) => `<tr><td>${t}</td><td>${p.map(([h, x]) => L(h, x)).join(", ") || "—"}</td><td>${n.map(([h, x]) => L(h, x)).join(", ")}</td><td>${s || "—"}</td><td>${!e ? "—" : Array.isArray(e) ? e.map(([h, x]) => L(h, x)).join(", ") : L(e, "Niveau Découverte")}</td></tr>`).join("")}</tbody></table></div>

      <h3 id="ens-ia">L’IA sur le site : ce que vos élèves doivent savoir</h3>
      <ol class="ens-steps">
        <li><b>Les textes.</b> Les notices, portraits et dossiers ont été rédigés avec l’aide de Claude, une intelligence artificielle, puis relus fait par fait. Une erreur reste possible : chaque page cite ses sources.</li>
        <li><b>ŒconoChat.</b> Quand un élève « interroge Keynes », c’est Claude qui répond en s’inspirant de ses écrits. Ce ne sont pas les paroles de Keynes. Je le dis aux élèves avant de commencer, et j’en fais un exercice : qu’est-ce qui, dans cette réponse, mériterait d’être vérifié ?</li>
        <li><b>La correction des rédactions.</b> Elle donne un retour immédiat sur la structure et les arguments. Elle ne remplace pas votre lecture et ne met pas de note.</li>
        <li><b>Les données personnelles.</b> Le site ne demande ni nom ni adresse. La progression d’un élève reste sur son appareil.</li>
      </ol>
      <p>Pour le détail : ${L("#sources", "Sources et méthode")}.</p>
    </div>`;
  }

  /* ----- Téléchargement des fiches Word ----- */
  let charge = null;
  const fiches = () => charge || (charge = new Promise((ok, ko) => { const s = document.createElement("script"); s.src = "fiches-enseignants.js"; s.onload = () => ok(OEC.fichesDocx); s.onerror = ko; document.head.appendChild(s); }));
  async function telecharger(nom, btn) {
    const old = btn.textContent, dire = (t) => { btn.textContent = t; setTimeout(() => (btn.textContent = old), 2500); };
    try {
      const b64 = (await fiches())[nom], bin = atob(b64), u8 = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
      const blob = new Blob([u8], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      let dl = null;
      try { dl = window.claude && claude.use ? await claude.use("downloads") : null; } catch (e) {}
      if (dl) { try { await dl.save({ filename: nom, data: blob }); dire("Fiche téléchargée ✓"); return; } catch (e) { if (e && e.code === "declined") return; } }
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = nom; document.body.appendChild(a); a.click(); a.remove();
      dire("Fiche téléchargée ✓");
    } catch (e) { dire("Téléchargement impossible"); }
  }
  document.addEventListener("click", (e) => {
    const f = e.target.closest("[data-fiche]"); if (f) { telecharger(f.dataset.fiche, f); return; }
    const v = e.target.closest("[data-vers]"); if (v) { const el = document.getElementById(v.dataset.vers); if (el) el.scrollIntoView({ block: "start", behavior: "smooth" }); }
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
})();
