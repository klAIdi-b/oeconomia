/* Œconomia — Entraînement : thème « Monnaie et inflation » (24 exercices, trois niveaux). */
(function () {
  const X = OEC.exo, { rnd, pick, fmt } = X;
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");

  X.theme({ id: "monnaie", nom: "Monnaie et inflation",
    intro: "À quoi sert la monnaie, d’où vient l’inflation et comment la Banque nationale suisse la combat-elle ? Ces exercices vous entraînent à mesurer l’inflation, à distinguer valeurs nominales et réelles, à utiliser l’équation quantitative et à raisonner sur la politique monétaire.",
    notions: ["fonctions-monnaie", "theorie-quantitative", "preference-liquidite", "trappe-liquidite", "courbe-phillips", "anticipations-rationnelles", "preteur-dernier-ressort"] });

  /* Courbe de Phillips schématique */
  const phillips = (longTerme) => {
    let s = `<line x1="70" y1="30" x2="70" y2="230" style="stroke:var(--line); stroke-width:1.5"/><line x1="70" y1="230" x2="580" y2="230" style="stroke:var(--line); stroke-width:1.5"/>`;
    s += `<text x="78" y="36" style="fill:var(--ink-soft); font:600 11px var(--f-mono, monospace)">Inflation</text><text x="576" y="250" text-anchor="end" style="fill:var(--ink-soft); font:600 11px var(--f-mono, monospace)">Chômage</text>`;
    s += `<path d="M110,45 C170,170 260,200 560,215" style="fill:none; stroke:var(--note); stroke-width:2.5"/>`;
    s += `<circle cx="150" cy="113" r="5" style="fill:var(--serial)"/><text x="162" y="104" style="fill:var(--serial); font:700 13px Manrope, sans-serif">A</text>`;
    s += `<circle cx="420" cy="210" r="5" style="fill:var(--gold)"/><text x="420" y="196" text-anchor="middle" style="fill:var(--gold); font:700 13px Manrope, sans-serif">B</text>`;
    if (longTerme) s += `<path d="M300,40 L300,228" style="fill:none; stroke:var(--plum); stroke-width:2; stroke-dasharray:6 5"/><text x="310" y="56" style="fill:var(--plum); font:700 12px Manrope, sans-serif">long terme</text>`;
    s += `<text x="560" y="206" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">court terme</text>`;
    return `<figure class="schema ex-fig"><svg viewBox="0 0 600 260" role="img" aria-label="Courbe de Phillips"><g>${s}</g></svg><figcaption>Courbe de Phillips (schéma) : chaque point associe un taux de chômage et un taux d’inflation.</figcaption></figure>`;
  };

  X.add([
  /* =========================== NIVEAU 1 : DÉCOUVERTE =========================== */
  { id: "mo1-fonctions", theme: "monnaie", niveau: 1, type: "qcm", notion: "fonctions-monnaie",
    titre: "Les trois fonctions de la monnaie", competence: "Reconnaître les fonctions de la monnaie dans des situations concrètes.",
    enonce: P("Nina met 200 francs de côté chaque mois sur un compte d’épargne pour s’acheter un vélo dans un an. Quelle fonction de la monnaie utilise-t-elle principalement ?"),
    options: ["Unité de compte.", "Moyen d’échange.", "Réserve de valeur.", "Instrument de politique monétaire."], c: 2, pourquoi: ["L’unité de compte sert à exprimer les prix dans une même unité ; Nina, elle, garde de l’argent pour plus tard.", "Le moyen d’échange sert à payer. Nina paiera son vélo dans un an ; pour l’instant, elle garde son argent en réserve.", null, "La politique monétaire est menée par la banque centrale : ce n’est pas un usage de la monnaie par un ménage."],
    explication: P("La monnaie a trois fonctions : <b>unité de compte</b> (exprimer tous les prix dans une même unité, le franc), <b>moyen d’échange</b> (payer ses achats) et <b>réserve de valeur</b> (conserver du pouvoir d’achat pour plus tard). En épargnant, Nina utilise la monnaie comme réserve de valeur. Cette fonction est fragilisée par l’inflation, qui érode la valeur de l’argent conservé.") },

  { id: "mo1-ipc", theme: "monnaie", niveau: 1, type: "calcul", notion: "theorie-quantitative",
    titre: "Calculer un taux d’inflation", competence: "Calculer l’inflation à partir d’un indice des prix.",
    gen: () => { const i0 = rnd(1000, 1080) / 10; const g = pick([-0.6, -0.3, 0.4, 0.8, 1.1, 1.5, 2.1, 2.8, 3.4, 4.5]); return { i0, i1: Math.round(i0 * (1 + g / 100) * 10) / 10 }; },
    enonce: (p) => P(`L’indice suisse des prix à la consommation (IPC) passe de <b>${fmt(p.i0, 1)}</b> points à <b>${fmt(p.i1, 1)}</b> points en un an.`, "Quel est le taux d’inflation annuel ? Arrondissez à une décimale (signe moins s’il s’agit d’une baisse des prix)."),
    champs: [{ label: "Inflation", unite: "%", tol: 0.1 }],
    reponses: (p) => [Math.round(((p.i1 - p.i0) / p.i0) * 1000) / 10],
    indice: "Inflation = (indice d’arrivée − indice de départ) ÷ indice de départ × 100.",
    correction: (p) => { const v = ((p.i1 - p.i0) / p.i0) * 100; return P(`Inflation = (${fmt(p.i1, 1)} − ${fmt(p.i0, 1)}) ÷ ${fmt(p.i0, 1)} × 100 ≈ <b>${fmt(v, 1)} %</b>.`, v < 0 ? "Le résultat est négatif : les prix ont baissé en moyenne, c’est une <b>déflation</b>." : "L’IPC mesure l’évolution du prix d’un panier de biens et de services représentatif de la consommation des ménages ; l’OFS le calcule chaque mois.") ; } },

  { id: "mo1-vf-bases", theme: "monnaie", niveau: 1, type: "vf", notion: "fonctions-monnaie",
    titre: "Monnaie et inflation : les bases", competence: "Utiliser correctement les notions de base.",
    affirmations: [
      ["L’inflation, c’est la hausse du prix d’un bien en particulier, par exemple l’essence.", false, "L’inflation est la hausse du <b>niveau général des prix</b>. Le prix de l’essence peut monter alors que l’inflation reste faible, si d’autres prix baissent."],
      ["En Suisse, les billets et les pièces représentent une petite partie de la monnaie en circulation.", true, "L’essentiel de la monnaie est constitué de dépôts sur des comptes bancaires."],
      ["Quand une banque accorde un crédit, elle crée de la monnaie.", true, "Elle crédite le compte de l’emprunteur d’un dépôt nouveau : les crédits font les dépôts. La monnaie disparaît quand le crédit est remboursé."],
      ["La déflation est toujours une bonne nouvelle, car les prix baissent.", false, "Une baisse générale et durable des prix peut pousser les ménages à reporter leurs achats et alourdit le poids réel des dettes. Elle a aggravé la Grande Dépression."]
    ] },

  { id: "mo1-valeur-reelle", theme: "monnaie", niveau: 1, type: "calcul", notion: "theorie-quantitative",
    titre: "Ce que vaut vraiment votre argent", competence: "Calculer la perte de pouvoir d’achat due à l’inflation.",
    gen: () => ({ s: rnd(10, 50) * 100, pi: pick([1, 1.5, 2, 2.5, 3, 4, 5]) }),
    enonce: (p) => P(`Vous gardez <b>${fmt(p.s)} francs</b> en liquide pendant un an. L’inflation est de <b>${fmt(p.pi)} %</b>.`, "Quelle est la valeur de cette somme dans un an, exprimée en francs d’aujourd’hui (pouvoir d’achat) ? Arrondissez au franc."),
    champs: [{ label: "Valeur réelle", unite: "fr.", tol: 1 }],
    reponses: (p) => [Math.round(p.s / (1 + p.pi / 100))],
    indice: "Divisez la somme par (1 + taux d’inflation).",
    correction: (p) => P(`Valeur réelle = ${fmt(p.s)} ÷ (1 + ${fmt(p.pi / 100, 3)}) = <b>${fmt(Math.round(p.s / (1 + p.pi / 100)))} francs</b> d’aujourd’hui.`, `Vous avez toujours ${fmt(p.s)} francs, mais ils permettent d’acheter environ ${fmt(p.pi * p.s / (100 + p.pi), 0)} francs de moins de biens et de services qu’aujourd’hui. C’est pourquoi l’inflation est parfois appelée un « impôt » sur la monnaie détenue.`) },

  { id: "mo1-bns", theme: "monnaie", niveau: 1, type: "qcm", notion: "preteur-dernier-ressort",
    titre: "Le mandat de la Banque nationale suisse", competence: "Connaître le rôle de la banque centrale.",
    enonce: P("Quel est l’objectif principal fixé par la loi à la Banque nationale suisse (BNS) ?"),
    options: ["Maximiser les bénéfices versés aux cantons.", "Assurer la stabilité des prix, en tenant compte de l’évolution de la conjoncture.", "Maintenir le franc au même cours que l’euro.", "Financer les dépenses de la Confédération."], c: 1, pourquoi: ["La BNS verse une partie de ses bénéfices à la Confédération et aux cantons quand il y en a, mais la loi ne lui donne pas pour but d’en faire.", null, "La BNS a maintenu un cours plancher face à l’euro de 2011 à 2015, comme moyen temporaire, jamais comme objectif légal ; aujourd’hui le franc flotte.", "La BNS est indépendante et ne finance pas les dépenses de la Confédération : ce serait contraire à sa mission de stabilité des prix."],
    explication: P("La loi charge la BNS d’assurer la <b>stabilité des prix</b>, en tenant compte de la conjoncture. Elle l’interprète comme une inflation positive mais inférieure à 2 % par an. Elle est indépendante du gouvernement, ne finance pas les dépenses publiques, et ses bénéfices, quand il y en a, sont distribués en partie à la Confédération et aux cantons.") },

  { id: "mo1-desinflation", theme: "monnaie", niveau: 1, type: "qcm", notion: "theorie-quantitative",
    titre: "Inflation, désinflation, déflation", competence: "Distinguer des notions proches.",
    enonce: P("Dans un pays, l’inflation passe de 5 % une année à 2 % l’année suivante. Comment appelle-t-on ce phénomène ?"),
    options: ["Une déflation : les prix baissent.", "Une désinflation : les prix augmentent encore, mais moins vite.", "Une stagflation.", "Une hyperinflation."], c: 1, pourquoi: ["Les prix montent encore de 2 % : ils ne baissent pas. La déflation suppose une inflation négative.", null, "La stagflation associe inflation élevée et activité qui stagne ; ici l’inflation recule, et rien n’est dit de l’activité.", "L’hyperinflation désigne des hausses de prix extrêmes, de plusieurs dizaines de pour cent par mois."],
    explication: P("Les prix continuent d’augmenter, de 2 %, mais <b>moins vite</b> qu’avant : c’est une <b>désinflation</b>. La <b>déflation</b> serait une baisse du niveau général des prix (inflation négative). La <b>stagflation</b> combine inflation élevée et stagnation de l’activité.") },

  { id: "mo1-salaire-reel", theme: "monnaie", niveau: 1, type: "calcul", notion: "theorie-quantitative",
    titre: "Salaire nominal et salaire réel", competence: "Calculer l’évolution du pouvoir d’achat d’un salaire.",
    gen: () => ({ w: pick([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]), pi: pick([0.5, 1, 1.5, 2, 2.8, 3.5]) }),
    enonce: (p) => P(`Le salaire de Marco augmente de <b>${fmt(p.w)} %</b> cette année, et l’inflation est de <b>${fmt(p.pi)} %</b>.`, "De combien son pouvoir d’achat (salaire réel) a-t-il varié ? Arrondissez à une décimale."),
    champs: [{ label: "Salaire réel", unite: "%", tol: 0.1 }],
    reponses: (p) => [Math.round(((1 + p.w / 100) / (1 + p.pi / 100) - 1) * 1000) / 10],
    indice: "Approximation : variation réelle ≈ variation nominale − inflation. Calcul exact : (1 + w) ÷ (1 + π) − 1.",
    correction: (p) => { const v = ((1 + p.w / 100) / (1 + p.pi / 100) - 1) * 100; return P(`Calcul exact : (1 + ${fmt(p.w / 100, 3)}) ÷ (1 + ${fmt(p.pi / 100, 3)}) − 1 ≈ <b>${fmt(v, 1)} %</b>.`, `Approximation : ${fmt(p.w)} − ${fmt(p.pi)} = ${fmt(p.w - p.pi, 1)} %, très proche.`, v < 0 ? "Le salaire réel baisse : Marco gagne plus de francs, mais peut acheter moins." : "Le salaire réel augmente : Marco peut acheter un peu plus qu’avant."); } },

  { id: "mo1-tableau-ipc", theme: "monnaie", niveau: 1, type: "document", notion: "theorie-quantitative",
    titre: "Lire l’inflation suisse", competence: "Lire et interpréter une série statistique.",
    enonce: P("Inflation annuelle moyenne en Suisse, mesurée par l’IPC (Office fédéral de la statistique, valeurs arrondies) :") +
      `<table><thead><tr><th>Année</th><th>2019</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th></tr></thead><tbody><tr><td>Inflation</td><td>0,4 %</td><td>−0,7 %</td><td>0,6 %</td><td>2,8 %</td><td>2,1 %</td><td>1,1 %</td></tr></tbody></table>` +
      P("Quelle affirmation est correcte ?"),
    options: ["Les prix ont baissé en 2023, puisque l’inflation est passée de 2,8 % à 2,1 %.", "La Suisse a connu une déflation en 2020, et l’inflation a dépassé l’objectif de la BNS en 2022 et en 2023.", "L’inflation suisse a été plus forte en 2022 que dans la zone euro.", "Les prix ont augmenté de 2,8 % au total entre 2019 et 2024."], c: 1, pourquoi: ["Une inflation de 2,1 % signifie que les prix ont encore augmenté, mais moins vite : c’est une désinflation, pas une baisse.", null, "Le tableau ne donne que des chiffres suisses : il ne permet aucune comparaison avec la zone euro.", "2,8 % est le taux d’une seule année, 2022. Sur toute la période, il faudrait cumuler les taux annuels."],
    explication: P("En 2020, l’inflation est négative (−0,7 %) : les prix ont baissé en moyenne, c’est une <b>déflation</b>, liée notamment à la pandémie et à la force du franc. En 2022 et 2023, elle dépasse 2 %, la limite supérieure de la stabilité des prix pour la BNS.", "En 2023, les prix ont continué de monter, mais moins vite (désinflation). Le tableau ne dit rien de la zone euro, où l’inflation a été bien plus forte (plus de 8 % en 2022). Pour la hausse totale, il faut combiner les taux année après année, et non prendre un seul chiffre.") },

  /* =========================== NIVEAU 2 : INTERMÉDIAIRE =========================== */
  { id: "mo2-quantitative", theme: "monnaie", niveau: 2, type: "calcul", notion: "theorie-quantitative",
    titre: "L’équation quantitative en taux de croissance", competence: "Utiliser MV = PY pour prévoir l’inflation.",
    gen: () => ({ m: pick([3, 4, 5, 6, 7, 8, 10, 12]), y: pick([0, 1, 1.5, 2, 2.5, 3]), v: pick([0, 0, -1, 1]) }),
    enonce: (p) => P("L’équation quantitative s’écrit M × V = P × Y (masse monétaire × vitesse de circulation = niveau des prix × production réelle). En taux de croissance, elle donne approximativement : %M + %V = %P + %Y.", `Dans un pays, la masse monétaire augmente de <b>${p.m} %</b>, la vitesse de circulation varie de <b>${fmt(p.v)} %</b> et la production réelle augmente de <b>${fmt(p.y)} %</b>.`, "Quelle inflation l’équation prévoit-elle ?"),
    champs: [{ label: "Inflation", unite: "%", tol: 0.05 }],
    reponses: (p) => [p.m + p.v - p.y],
    indice: "Isolez %P : %P = %M + %V − %Y.",
    correction: (p) => P(`%P = %M + %V − %Y = ${p.m} + (${fmt(p.v)}) − ${fmt(p.y)} = <b>${fmt(p.m + p.v - p.y)} %</b>.`, "Si la monnaie augmente plus vite que la production, et que la vitesse ne compense pas, les prix montent. C’est le raisonnement de Friedman : « l’inflation est toujours et partout un phénomène monétaire ». Mais la vitesse de circulation n’est pas toujours stable : après 2008, la masse monétaire a fortement augmenté sans inflation, car la monnaie circulait moins.") },

  { id: "mo2-taux-reel", theme: "monnaie", niveau: 2, type: "calcul", notion: "preference-liquidite",
    titre: "Taux d’intérêt nominal et réel", competence: "Calculer un taux d’intérêt réel (relation de Fisher).",
    gen: () => ({ i: pick([0.5, 1, 1.5, 2, 3, 4, 5, 6]), pi: pick([0.5, 1, 2, 3, 3.5, 5]) }),
    enonce: (p) => P(`Un compte d’épargne rapporte <b>${fmt(p.i)} %</b> par an, et l’inflation est de <b>${fmt(p.pi)} %</b>.`, "Quel est le taux d’intérêt réel ? Arrondissez à deux décimales (le calcul approché est accepté)."),
    champs: [{ label: "Taux réel", unite: "%", tol: 0.08 }],
    reponses: (p) => [Math.round(((1 + p.i / 100) / (1 + p.pi / 100) - 1) * 10000) / 100],
    indice: "Taux réel ≈ taux nominal − inflation ; calcul exact : (1 + i) ÷ (1 + π) − 1.",
    correction: (p) => { const r = ((1 + p.i / 100) / (1 + p.pi / 100) - 1) * 100; return P(`Approximation : ${fmt(p.i)} − ${fmt(p.pi)} = ${fmt(p.i - p.pi)} %.`, `Calcul exact : (1 + ${fmt(p.i / 100, 4)}) ÷ (1 + ${fmt(p.pi / 100, 4)}) − 1 ≈ <b>${fmt(r, 2)} %</b>.`, r < -0.005 ? "Le taux réel est négatif : l’épargne perd du pouvoir d’achat malgré les intérêts. C’était le cas de nombreux comptes en 2022." : r > 0.005 ? "Le taux réel est positif : l’épargne gagne du pouvoir d’achat." : "Le taux réel est nul : les intérêts compensent tout juste l’inflation, l’épargne garde son pouvoir d’achat."); } },

  { id: "mo2-hausse-taux", theme: "monnaie", niveau: 2, type: "qcm", notion: "preference-liquidite",
    titre: "Que se passe-t-il quand la BNS relève son taux ?", competence: "Décrire les canaux de transmission de la politique monétaire.",
    enonce: P("Face à une inflation de 3,5 %, la BNS relève son taux directeur. Quel enchaînement est le plus probable ?"),
    options: ["Les crédits deviennent moins chers, l’investissement augmente et l’inflation baisse.", "Les crédits et les hypothèques deviennent plus chers, la demande ralentit, le franc tend à s’apprécier, et l’inflation recule.", "Les prix baissent immédiatement, car les commerçants doivent appliquer le nouveau taux.", "Le chômage diminue fortement, car les banques gagnent plus."], c: 1,
    explication: P("Une hausse du taux directeur se transmet aux taux des crédits et des hypothèques : emprunter coûte plus cher, ménages et entreprises dépensent et investissent moins, la demande ralentit. Le franc devient aussi plus attractif pour les placements, ce qui le renforce et rend les importations moins chères.", "Ces effets prennent du temps, souvent un à deux ans. C’est ce que la BNS a fait entre juin 2022 et juin 2023, faisant passer son taux de −0,75 % à 1,75 %.") },

  { id: "mo2-epargne-reelle", theme: "monnaie", niveau: 2, type: "calcul", notion: "preference-liquidite",
    titre: "Une épargne qui fond lentement", competence: "Calculer une valeur réelle sur plusieurs années.",
    gen: () => ({ s: rnd(5, 30) * 1000, i: pick([0, 0.25, 0.5, 1]), pi: pick([1.5, 2, 2.5, 3]), n: rnd(3, 10) }),
    enonce: (p) => P(`Vous placez <b>${fmt(p.s)} francs</b> sur un compte rémunéré à <b>${fmt(p.i)} %</b> par an, pendant <b>${p.n} ans</b>. L’inflation est de <b>${fmt(p.pi)} %</b> par an.`, "Quelle sera la valeur réelle (en francs d’aujourd’hui) de votre épargne à la fin ? Arrondissez au franc."),
    champs: [{ label: "Valeur réelle", unite: "fr.", tol: 2 }],
    reponses: (p) => [Math.round(p.s * Math.pow((1 + p.i / 100) / (1 + p.pi / 100), p.n))],
    indice: "Valeur réelle = somme × [(1 + i) ÷ (1 + π)] puissance n.",
    correction: (p) => { const nom = p.s * Math.pow(1 + p.i / 100, p.n), re = p.s * Math.pow((1 + p.i / 100) / (1 + p.pi / 100), p.n); return P(`Valeur nominale après ${p.n} ans : ${fmt(p.s)} × ${fmt(1 + p.i / 100, 4)}<sup>${p.n}</sup> ≈ ${fmt(nom, 0)} francs.`, `Valeur réelle : on divise par ${fmt(1 + p.pi / 100, 4)}<sup>${p.n}</sup>, soit ${fmt(p.s)} × (${fmt(1 + p.i / 100, 4)} ÷ ${fmt(1 + p.pi / 100, 4)})<sup>${p.n}</sup> ≈ <b>${fmt(Math.round(re))} francs</b>.`, `L’épargne a perdu environ ${fmt(p.s - re, 0)} francs de pouvoir d’achat : tant que l’intérêt reste inférieur à l’inflation, l’argent épargné perd de sa valeur.`); } },

  { id: "mo2-vf-creation", theme: "monnaie", niveau: 2, type: "vf", notion: "preteur-dernier-ressort",
    titre: "Qui crée la monnaie ?", competence: "Comprendre la création monétaire moderne.",
    affirmations: [
      ["Une banque doit d’abord recevoir des dépôts avant de pouvoir accorder un crédit.", false, "C’est l’inverse dans le système actuel : en accordant un crédit, la banque crée un dépôt. Sa capacité à prêter est limitée par la demande de crédit, la solvabilité des emprunteurs, les règles de fonds propres et de liquidité, et le taux de la banque centrale."],
      ["La banque centrale influence la création monétaire des banques par son taux directeur.", true, "En renchérissant ou en réduisant le coût de la monnaie centrale, elle rend le crédit plus ou moins attractif."],
      ["Quand un crédit est remboursé, la monnaie correspondante disparaît.", true, "Le dépôt créé à l’octroi du crédit est détruit lors du remboursement."],
      ["En 2018, le peuple suisse a accepté l’initiative « Monnaie pleine ».", false, "Elle a été rejetée par environ 76 % des votants. Elle voulait réserver la création de monnaie scripturale à la BNS."]
    ] },

  { id: "mo2-phillips", theme: "monnaie", niveau: 2, type: "graphique", notion: "courbe-phillips",
    titre: "Lire la courbe de Phillips", competence: "Interpréter un arbitrage entre inflation et chômage.",
    enonce: P("Le graphique représente une courbe de Phillips de court terme, comme celle observée au Royaume-Uni et aux États-Unis dans les années 1950 et 1960."),
    fig: () => phillips(false),
    options: ["Le point A correspond à un chômage élevé et une inflation faible.", "Passer de B à A permet de réduire le chômage, au prix d’une inflation plus forte.", "La courbe montre que l’inflation et le chômage augmentent toujours ensemble.", "Le point B est impossible à atteindre."], c: 1,
    explication: P("Le point A combine <b>chômage faible et inflation élevée</b> ; le point B, chômage élevé et inflation faible. La courbe suggère un <b>arbitrage</b> : en stimulant l’économie, on passe de B à A, en réduisant le chômage au prix d’une inflation plus forte.", "Dans les années 1970, la stagflation a montré que cet arbitrage n’était pas stable : Friedman et Phelps ont montré qu’à long terme, il disparaît quand les anticipations d’inflation s’ajustent.") },

  { id: "mo2-franc-refuge", theme: "monnaie", niveau: 2, type: "redaction", notion: "fonctions-monnaie",
    titre: "Le franc, valeur refuge", competence: "Expliquer un phénomène monétaire et ses conséquences (10 à 15 lignes).",
    enonce: P("Lors des crises financières ou géopolitiques, de nombreux investisseurs achètent des francs suisses, considérés comme une « valeur refuge ». En 2011, la BNS a même fixé un cours plancher de 1,20 franc pour un euro, abandonné en janvier 2015.", "<b>Consigne :</b> expliquez pourquoi le franc est une valeur refuge, puis présentez les conséquences d’un franc fort pour l’économie suisse, en distinguant au moins un effet positif et un effet négatif."),
    criteres: ["La réponse explique pourquoi le franc inspire confiance : stabilité politique, faible inflation, finances publiques saines, institutions solides, banque centrale crédible…", "Elle explique le mécanisme : la demande de francs augmente, donc le franc s’apprécie (offre et demande de devises).", "Elle cite au moins un effet négatif : exportations et tourisme moins compétitifs, pression sur les marges et l’emploi industriel…", "Elle cite au moins un effet positif : importations moins chères, inflation faible, pouvoir d’achat à l’étranger…", "Elle mentionne une réponse possible de la BNS (cours plancher, achats de devises, taux négatifs) ou conclut clairement."],
    corrige: P("Le franc est une valeur refuge parce que la Suisse inspire confiance : stabilité politique, inflation historiquement faible, finances publiques solides, État de droit et banque centrale crédible. En période de crise, les investisseurs achètent des francs pour se protéger ; la <b>demande de francs</b> augmente, et le franc s’apprécie par rapport aux autres monnaies.", "Un franc fort a des <b>effets négatifs</b> : les produits suisses deviennent plus chers à l’étranger, ce qui pénalise l’industrie d’exportation, l’horlogerie, les machines et le tourisme, et peut menacer des emplois. Il a aussi des <b>effets positifs</b> : les importations, l’énergie et les vacances à l’étranger coûtent moins cher, ce qui freine l’inflation et soutient le pouvoir d’achat.", "Pour limiter la hausse du franc, la BNS a acheté massivement des devises, imposé un cours plancher de 2011 à 2015 et pratiqué des taux d’intérêt négatifs de 2015 à 2022. Ces mesures ont protégé l’économie, mais ont fortement gonflé son bilan.") },

  { id: "mo2-weimar", theme: "monnaie", niveau: 2, type: "qcm", notion: "theorie-quantitative",
    titre: "L’hyperinflation allemande de 1923", competence: "Expliquer une hyperinflation.",
    enonce: P("En novembre 1923, un dollar valait plus de 4 000 milliards de marks, et les prix doublaient en quelques jours. Quelle est la cause principale de cette hyperinflation ?"),
    options: ["Une mauvaise récolte qui a fait monter le prix du pain.", "Le financement des dépenses publiques et des réparations de guerre par la création massive de monnaie.", "La hausse des salaires imposée par les syndicats.", "L’ouverture de l’Allemagne au commerce international."], c: 1,
    explication: P("L’État allemand, qui devait payer les réparations imposées après la Première Guerre mondiale et financer ses dépenses, notamment pendant l’occupation de la Ruhr en 1923, a fait imprimer des quantités énormes de billets. La masse monétaire a explosé, la confiance s’est effondrée, et chacun a cherché à se débarrasser de son argent au plus vite, ce qui a encore accéléré la hausse des prix.", "C’est l’illustration la plus frappante de la théorie quantitative. Le traumatisme explique l’attachement durable de l’Allemagne à la stabilité des prix.") },

  /* =========================== NIVEAU 3 : AVANCÉ =========================== */
  { id: "mo3-vitesse", theme: "monnaie", niveau: 3, type: "calcul", notion: "theorie-quantitative",
    titre: "Calculer la vitesse de circulation", competence: "Utiliser l’équation quantitative en niveau.",
    gen: () => ({ py: rnd(600, 900), m: rnd(500, 1200) }),
    enonce: (p) => P(`Dans une économie, le PIB nominal (P × Y) est de <b>${p.py} milliards de francs</b> et la masse monétaire (M) de <b>${p.m} milliards</b>.`, "Calculez la vitesse de circulation de la monnaie (arrondie à deux décimales), puis le PIB nominal qu’on obtiendrait si la masse monétaire augmentait de 10 % à vitesse constante."),
    champs: [{ label: "Vitesse", unite: "", tol: 0.011 }, { label: "Nouveau PIB nominal", unite: "milliards", tol: 1 }],
    reponses: (p) => [Math.round((p.py / p.m) * 100) / 100, Math.round(p.py * 1.1 * 10) / 10],
    indice: "V = (P × Y) ÷ M. À vitesse constante, P × Y augmente comme M.",
    correction: (p) => P(`V = ${p.py} ÷ ${p.m} ≈ <b>${fmt(p.py / p.m, 2)}</b> : chaque franc sert en moyenne ${fmt(p.py / p.m, 2)} fois par an à acheter la production.`, `Si M augmente de 10 % et V reste constante, P × Y augmente aussi de 10 % : ${p.py} × 1,1 = <b>${fmt(p.py * 1.1, 1)} milliards</b>.`, "Toute la question est de savoir si cette hausse se traduit par plus de production (Y) ou par plus d’inflation (P). Pour les monétaristes, à long terme, ce sont les prix qui s’ajustent.") },

  { id: "mo3-taylor", theme: "monnaie", niveau: 3, type: "calcul",
    titre: "La règle de Taylor", competence: "Appliquer une règle de politique monétaire.",
    gen: () => ({ r: pick([0.5, 1, 2]), pi: pick([0, 0.5, 1, 2, 3, 3.5, 5]), cible: pick([1, 2]), ecart: pick([-2, -1, 0, 1, 2]) }),
    enonce: (p) => P("En 1993, l’économiste John Taylor propose une règle simple pour fixer le taux directeur :", "<b>i = r* + π + 0,5 × (π − π*) + 0,5 × écart de production</b>", `où r* est le taux d’intérêt réel neutre (<b>${fmt(p.r)} %</b>), π l’inflation (<b>${fmt(p.pi)} %</b>), π* la cible d’inflation (<b>${fmt(p.cible)} %</b>) et l’écart de production l’écart en % entre la production effective et la production potentielle (<b>${fmt(p.ecart)} %</b>).`, "Quel taux directeur la règle recommande-t-elle ?"),
    champs: [{ label: "Taux directeur", unite: "%", tol: 0.01 }],
    reponses: (p) => [p.r + p.pi + 0.5 * (p.pi - p.cible) + 0.5 * p.ecart],
    indice: "Remplacez chaque terme par sa valeur, en faisant attention aux signes.",
    correction: (p) => { const v = p.r + p.pi + 0.5 * (p.pi - p.cible) + 0.5 * p.ecart; return P(`i = ${fmt(p.r)} + ${fmt(p.pi)} + 0,5 × (${fmt(p.pi)} − ${fmt(p.cible)}) + 0,5 × (${fmt(p.ecart)})`, `= ${fmt(p.r)} + ${fmt(p.pi)} + ${fmt(0.5 * (p.pi - p.cible))} + ${fmt(0.5 * p.ecart)} = <b>${fmt(v)} %</b>.`, "La règle relève le taux quand l’inflation dépasse la cible ou que l’économie surchauffe, et le baisse dans le cas contraire. Elle ne s’impose pas aux banques centrales, mais sert de repère pour juger leur politique." + (v < 0 ? " Ici, la règle recommande un taux négatif, ce qui rappelle le problème du plancher du zéro." : "")); } },

  { id: "mo3-dette", theme: "monnaie", niveau: 3, type: "calcul", notion: "theorie-quantitative",
    titre: "L’inflation et les dettes", competence: "Mesurer l’effet de l’inflation sur la valeur réelle d’une dette.",
    gen: () => ({ d: rnd(20, 80) * 10000, pi: pick([2, 3, 5, 8, 10]), n: pick([5, 10]) }),
    enonce: (p) => P(`Un ménage a une dette de <b>${fmt(p.d)} francs</b>, à rembourser en une fois dans <b>${p.n} ans</b>, sans indexation. L’inflation est de <b>${p.pi} %</b> par an.`, `Quelle sera la valeur réelle de ce remboursement, en francs d’aujourd’hui ? Arrondissez à la centaine de francs. Qui est gagnant, l’emprunteur ou le prêteur ?`),
    champs: [{ label: "Valeur réelle", unite: "fr.", tol: 60 }],
    reponses: (p) => [Math.round(p.d / Math.pow(1 + p.pi / 100, p.n) / 100) * 100],
    indice: "Divisez la dette par (1 + inflation) puissance le nombre d’années.",
    correction: (p) => { const v = p.d / Math.pow(1 + p.pi / 100, p.n); return P(`Valeur réelle = ${fmt(p.d)} ÷ ${fmt(1 + p.pi / 100, 2)}<sup>${p.n}</sup> ≈ <b>${fmt(Math.round(v / 100) * 100)} francs</b> d’aujourd’hui.`, `L’inflation a réduit le poids réel de la dette d’environ ${fmt(100 * (1 - v / p.d), 0)} %. L’<b>emprunteur</b> est gagnant, le <b>prêteur</b> perdant, sauf si le taux d’intérêt compensait l’inflation.`, "C’est pourquoi l’inflation inattendue redistribue la richesse des créanciers vers les débiteurs, y compris vers les États endettés, et pourquoi la déflation fait l’inverse (Irving Fisher).") ; } },

  { id: "mo3-trappe", theme: "monnaie", niveau: 3, type: "qcm", notion: "trappe-liquidite",
    titre: "La trappe à liquidité", competence: "Reconnaître les limites de la politique monétaire.",
    enonce: P("Après 2008, plusieurs banques centrales ont baissé leurs taux à zéro et créé massivement de la monnaie, sans relancer fortement l’économie ni provoquer d’inflation pendant des années. Quelle analyse correspond à la notion de trappe à liquidité de Keynes ?"),
    options: ["La monnaie créée a été immédiatement dépensée, mais les entreprises ont augmenté leurs prix.", "Quand les taux sont proches de zéro, la monnaie supplémentaire est conservée plutôt que dépensée ou investie : la politique monétaire perd son efficacité, et la relance budgétaire devient nécessaire.", "Les banques centrales ont commis une erreur en baissant les taux, ce qui a provoqué la crise.", "La trappe à liquidité désigne une banque qui n’a plus de liquidités."], c: 1,
    explication: P("Dans une <b>trappe à liquidité</b>, les taux d’intérêt sont si bas que les agents préfèrent garder de la monnaie plutôt que d’acheter des titres ou d’investir. La banque centrale peut en créer autant qu’elle veut, cela ne stimule pas la demande.", "Keynes en concluait que l’État doit alors prendre le relais par la dépense publique. Krugman a appliqué cette analyse au Japon des années 1990, puis aux pays riches après 2008. Les banques centrales ont cherché d’autres outils : achats massifs de titres, engagements sur les taux futurs, taux négatifs.") },

  { id: "mo3-vf-anticipations", theme: "monnaie", niveau: 3, type: "vf", notion: "anticipations-rationnelles",
    titre: "Anticipations, crédibilité et stagflation", competence: "Maîtriser les débats sur la politique monétaire depuis les années 1970.",
    enonce: P("Indiquez si chaque affirmation est vraie ou fausse."),
    fig: () => phillips(true),
    affirmations: [
      ["Selon Friedman et Phelps, la courbe de Phillips devient verticale à long terme, au niveau du chômage naturel.", true, "Quand les salariés anticipent l’inflation, ils réclament des hausses de salaires équivalentes : l’arbitrage disparaît et seul le niveau d’inflation change."],
      ["La stagflation des années 1970 a confirmé la stabilité de l’arbitrage entre inflation et chômage.", false, "Elle l’a contredit : inflation et chômage ont augmenté ensemble, notamment après les chocs pétroliers."],
      ["Une banque centrale crédible peut réduire l’inflation à un coût plus faible en chômage.", true, "Si chacun croit qu’elle tiendra son objectif, les anticipations d’inflation baissent vite, et les salaires et les prix s’ajustent sans récession prolongée."],
      ["Selon les anticipations rationnelles de Lucas, une politique monétaire parfaitement anticipée a des effets durables sur la production.", false, "Selon Lucas, seule une politique <b>imprévue</b> peut avoir des effets réels, et seulement temporaires ; une politique anticipée ne change que les prix."]
    ] },

  { id: "mo3-ppa", theme: "monnaie", niveau: 3, type: "calcul", notion: "theorie-quantitative",
    titre: "Inflation et taux de change", competence: "Appliquer la parité des pouvoirs d’achat relative.",
    gen: () => ({ e: pick([0.92, 0.94, 0.96, 0.98, 1.05, 1.1]), pch: pick([0, 0.5, 1, 1.5]), peu: pick([2, 2.5, 3, 4, 6]) }),
    enonce: (p) => P(`Un euro vaut aujourd’hui <b>${fmt(p.e, 2)} franc</b>. L’inflation est de <b>${fmt(p.pch)} %</b> en Suisse et de <b>${fmt(p.peu)} %</b> dans la zone euro.`, "Selon la parité des pouvoirs d’achat relative, la monnaie du pays où l’inflation est plus forte se déprécie à peu près de l’écart d’inflation. Quel cours de l’euro (en francs) peut-on attendre dans un an ? Arrondissez à trois décimales."),
    champs: [{ label: "1 euro =", unite: "fr.", tol: 0.003 }],
    reponses: (p) => [Math.round(p.e * (1 + p.pch / 100) / (1 + p.peu / 100) * 1000) / 1000],
    indice: "Nouveau cours = cours actuel × (1 + inflation suisse) ÷ (1 + inflation de la zone euro).",
    correction: (p) => { const v = p.e * (1 + p.pch / 100) / (1 + p.peu / 100); return P(`Nouveau cours ≈ ${fmt(p.e, 2)} × ${fmt(1 + p.pch / 100, 3)} ÷ ${fmt(1 + p.peu / 100, 3)} ≈ <b>${fmt(v, 3)} franc</b> pour un euro.`, `L’euro perd de la valeur face au franc, car les prix montent plus vite dans la zone euro : le franc s’apprécie de façon à maintenir le même pouvoir d’achat des deux monnaies.`, "Cette relation explique en partie l’appréciation du franc sur longue période, l’inflation suisse étant presque toujours plus faible que celle de ses voisins. À court terme, les mouvements de capitaux, comme les achats de francs « refuge », pèsent souvent davantage."); } },

  { id: "mo3-independance", theme: "monnaie", niveau: 3, type: "redaction", notion: "anticipations-rationnelles",
    titre: "La Banque nationale doit-elle rester indépendante ?", competence: "Construire une argumentation équilibrée (15 à 25 lignes).",
    enonce: P("La BNS est indépendante : ni le Conseil fédéral ni le Parlement ne peuvent lui donner d’instructions sur sa politique monétaire. Certains proposent de lui confier d’autres missions, comme financer l’AVS avec ses bénéfices ou soutenir la transition climatique, et de la soumettre davantage au contrôle politique.", "<b>Consigne :</b> la BNS doit-elle rester indépendante du pouvoir politique ? Présentez des arguments pour et contre, en utilisant au moins une notion d’économie (crédibilité, anticipations, inflation, cycle électoral), puis concluez."),
    criteres: ["La réponse présente au moins deux arguments en faveur de l’indépendance : crédibilité, anticipations d’inflation ancrées, horizon long, résistance à la tentation de créer de l’inflation avant les élections, expériences historiques…", "Elle présente au moins deux arguments critiques : légitimité démocratique, pouvoir important confié à des non-élus, effets sur la répartition et les épargnants, question des missions (climat, emploi)…", "Elle utilise correctement au moins une notion d’économie (crédibilité, anticipations, inflation, cycle électoral).", "Elle distingue indépendance et absence de contrôle : mandat fixé par la loi, rapport au Parlement, transparence.", "Elle conclut de façon argumentée."],
    corrige: P("<b>Pour l’indépendance :</b> un gouvernement est tenté de stimuler l’économie avant les élections, quitte à provoquer de l’inflation ensuite. Une banque centrale indépendante, avec un mandat clair de stabilité des prix, est plus <b>crédible</b> : les anticipations d’inflation restent basses, ce qui permet de maîtriser l’inflation à moindre coût. L’histoire montre que les banques centrales soumises au pouvoir politique ont souvent laissé filer l’inflation, jusqu’aux hyperinflations.", "<b>Contre ou pour nuancer :</b> la politique monétaire a des effets importants sur l’emploi, les épargnants, les propriétaires et le franc ; confier ce pouvoir à des responsables non élus pose une question de légitimité démocratique. Les décisions de la BNS, comme l’abandon du cours plancher en 2015, ont surpris et coûté cher à certaines entreprises. Enfin, certains estiment qu’elle pourrait contribuer à d’autres objectifs, comme le climat.", "<b>Conclusion :</b> l’indépendance n’est pas l’absence de contrôle : c’est le peuple et le Parlement qui fixent le mandat de la BNS dans la loi, et elle doit rendre des comptes et être transparente. Il semble préférable de garder son indépendance dans le choix des instruments, tout en débattant démocratiquement de son mandat.") },

  { id: "mo3-taux-bns", theme: "monnaie", niveau: 3, type: "document", notion: "preference-liquidite",
    titre: "Dix ans de taux directeur de la BNS", competence: "Analyser une série de décisions de politique monétaire.",
    enonce: P("Taux directeur de la BNS à quelques dates (en %) :") +
      `<table><thead><tr><th>Janv. 2015</th><th>Juin 2022</th><th>Déc. 2022</th><th>Juin 2023</th><th>Déc. 2024</th><th>Juin 2025</th></tr></thead><tbody><tr><td>−0,75</td><td>−0,25</td><td>1,00</td><td>1,75</td><td>0,50</td><td>0,00</td></tr></tbody></table>` +
      P("Quelle interprétation est la plus juste ?"),
    options: ["La BNS a relevé ses taux en 2022-2023 pour soutenir l’emploi, puis les a baissés pour freiner l’inflation.", "Les taux négatifs visaient surtout à freiner la hausse du franc ; la hausse de 2022-2023 répondait à une inflation supérieure à 2 %, et la baisse ultérieure au retour d’une inflation faible.", "La BNS a laissé ses taux inchangés pendant dix ans.", "Les taux ont augmenté parce que la Confédération avait besoin d’argent."], c: 1,
    explication: P("De 2015 à 2022, le taux négatif de −0,75 % visait à rendre les placements en francs moins attractifs, pour freiner l’appréciation du franc après l’abandon du cours plancher. En 2022, l’inflation suisse dépasse 3 % : la BNS relève rapidement ses taux jusqu’à 1,75 % en juin 2023. L’inflation retombe ensuite nettement sous 2 %, et le franc reste fort : la BNS baisse ses taux, jusqu’à 0 % en juin 2025.", "La série illustre les deux soucis de la BNS dans une petite économie ouverte : l’inflation et le cours du franc.") }
  ]);
})();
