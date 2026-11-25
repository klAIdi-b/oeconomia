/* Œconomia — Entraînement : thème pilote « Marché et prix » (24 exercices, trois niveaux).
   Les autres thèmes sont annoncés et seront ajoutés dans des fichiers semblables. */
(function () {
  const X = OEC.exo, { rnd, pick, fmt, marche } = X;
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");
  const lin = (a, b, v = "P") => `${a} − ${b === 1 ? "" : b}${v}`;
  const linp = (c, d, v = "P") => (c >= 0 ? `${c} + ${d === 1 ? "" : d}${v}` : `${d === 1 ? "" : d}${v} − ${-c}`);

  X.theme({ id: "marche", nom: "Marché et prix",
    intro: "Comment se forment les prix ? Ces exercices vous entraînent à raisonner avec l’offre et la demande, à calculer des variations, des élasticités et des surplus, et à analyser l’effet des taxes, des prix plafonds et du monopole.",
    notions: ["offre-demande", "surplus", "cout-opportunite", "utilite-marginale", "concurrence-imparfaite", "valeur-usage"] });
  ["Monnaie et inflation", "Croissance et PIB", "Emploi et chômage", "Commerce international", "Inégalités et répartition", "État et biens publics", "Finance"].forEach((n, i) =>
    X.theme({ id: "bientot" + i, nom: n, bientot: true, intro: "", notions: [] }));

  X.add([
  /* =========================== NIVEAU 1 : DÉCOUVERTE =========================== */
  { id: "m1-loi-demande", theme: "marche", niveau: 1, type: "qcm", notion: "offre-demande",
    titre: "La loi de la demande", competence: "Connaître le lien entre le prix d’un bien et la quantité demandée.",
    enonce: P("Le prix d’un abonnement de streaming passe de 12 à 16 francs par mois, toutes choses égales par ailleurs. Que prévoit la loi de la demande ?"),
    options: ["Le nombre d’abonnés augmente, car un prix élevé signale la qualité.", "La quantité demandée diminue.", "La quantité demandée reste identique, car les clients sont fidèles.", "La courbe de demande se déplace vers la droite."], c: 1, pourquoi: ["Le signal de qualité joue pour quelques produits de luxe, mais la loi de la demande décrit le cas général : à goûts inchangés, un prix plus élevé fait renoncer une partie des clients.", null, "Des clients fidèles réagissent peu, mais rarement pas du tout : certains résilient ou partagent un compte. La quantité demandée baisse, même faiblement.", "La courbe se déplace quand autre chose que le prix change (revenus, goûts, prix des concurrents). Une hausse du prix du bien lui-même fait glisser le long de la courbe."],
    explication: P("Quand le prix d’un bien augmente, et que tout le reste est inchangé (revenus, goûts, prix des autres biens), la <b>quantité demandée diminue</b> : certains clients renoncent ou se tournent vers un concurrent. On se déplace <i>le long</i> de la courbe de demande ; la courbe elle-même ne bouge pas.") },

  { id: "m1-variation", theme: "marche", niveau: 1, type: "calcul", notion: "offre-demande",
    titre: "Calculer une variation de prix", competence: "Calculer un taux de variation en pourcentage.",
    gen: () => { const p0 = rnd(25, 60) / 10; const g = pick([-15, -12, -10, -8, -5, 5, 6, 8, 10, 12, 15, 20, 25]); const p1 = Math.round(p0 * (1 + g / 100) * 20) / 20; return { p0, p1 }; },
    enonce: (p) => P(`Le prix d’un café dans une gare passe de <b>${fmt(p.p0)} fr.</b> à <b>${fmt(p.p1)} fr.</b>`, "De combien de pourcentage le prix a-t-il varié ? Arrondissez à une décimale ; indiquez un signe moins s’il s’agit d’une baisse."),
    champs: [{ label: "Variation", unite: "%", tol: 0.1 }],
    reponses: (p) => [Math.round(((p.p1 - p.p0) / p.p0) * 1000) / 10],
    indice: "Taux de variation = (valeur d’arrivée − valeur de départ) ÷ valeur de départ × 100.",
    correction: (p) => { const v = ((p.p1 - p.p0) / p.p0) * 100; return P(`Taux de variation = (${fmt(p.p1)} − ${fmt(p.p0)}) ÷ ${fmt(p.p0)} × 100`, `= ${fmt(p.p1 - p.p0)} ÷ ${fmt(p.p0)} × 100 ≈ <b>${fmt(v, 1)} %</b>.`, v < 0 ? "Le résultat est négatif : c’est une baisse de prix." : "Le résultat est positif : c’est une hausse de prix."); } },

  { id: "m1-deplacement", theme: "marche", niveau: 1, type: "graphique", notion: "offre-demande",
    titre: "Lire un déplacement de courbe", competence: "Distinguer un déplacement de la demande d’un mouvement le long de la courbe.",
    enonce: P("Sur le marché des glaces en Suisse, on observe le déplacement représenté ci-dessous : la courbe de demande D passe en D′."),
    fig: () => marche({ shift: "demande+", caption: "La demande passe de D à D′ ; l’équilibre passe de E à E′." }),
    options: ["Le prix des glaces a baissé.", "Une vague de chaleur rend les glaces plus désirables à chaque prix.", "Le coût du lait, utilisé pour fabriquer les glaces, a augmenté.", "De nouveaux fabricants de glaces se sont installés."], c: 1, pourquoi: ["Une baisse du prix fait glisser le long de la courbe de demande ; elle ne la déplace pas.", null, "Le coût du lait concerne les producteurs : il déplace la courbe d’offre, pas celle de la demande.", "De nouveaux fabricants augmentent l’offre : c’est la courbe d’offre qui se déplace."],
    explication: P("La courbe de demande se déplace vers la droite quand, <b>à chaque prix</b>, les consommateurs veulent davantage du bien : changement de goûts, de météo, hausse des revenus, hausse du prix d’un substitut. La baisse du prix ne déplace pas la courbe : elle fait glisser le long de celle-ci. Le coût du lait et l’arrivée de nouveaux fabricants touchent l’<i>offre</i>.", "Résultat : au nouvel équilibre E′, le prix <b>et</b> la quantité échangée augmentent.") },

  { id: "m1-vf-marche", theme: "marche", niveau: 1, type: "vf", notion: "offre-demande",
    titre: "Offre, demande et équilibre", competence: "Utiliser correctement le vocabulaire de base du marché.",
    affirmations: [
      ["Au prix d’équilibre, la quantité offerte est égale à la quantité demandée.", true, "C’est la définition de l’équilibre : il n’y a ni pénurie ni excédent."],
      ["Si le prix est supérieur au prix d’équilibre, il y a une pénurie.", false, "Au-dessus de l’équilibre, les vendeurs offrent plus que ce que les acheteurs demandent : il y a un <b>excédent</b>, qui pousse le prix à la baisse."],
      ["Une hausse du prix du beurre peut faire augmenter la demande de margarine.", true, "Le beurre et la margarine sont des <b>substituts</b> : quand l’un devient plus cher, une partie des acheteurs se reporte sur l’autre."],
      ["Une amélioration technique qui réduit les coûts de production déplace la courbe d’offre vers la gauche.", false, "Elle rend la production moins coûteuse : à chaque prix, les entreprises veulent produire davantage. L’offre se déplace vers la <b>droite</b>."]
    ] },

  { id: "m1-cout-opp", theme: "marche", niveau: 1, type: "qcm", notion: "cout-opportunite",
    titre: "Le coût d’opportunité", competence: "Identifier ce à quoi on renonce quand on fait un choix.",
    enonce: P("Léa, apprentie, peut travailler le samedi dans un magasin pour 120 francs, ou partir faire une randonnée avec des amis. Le trajet en train coûte 30 francs. Elle choisit la randonnée.", "Quel est le coût d’opportunité de sa randonnée ?"),
    options: ["30 francs, le prix du billet de train.", "120 francs, le salaire auquel elle renonce.", "150 francs : le billet et le salaire auquel elle renonce.", "Rien, puisqu’elle a choisi ce qu’elle préférait."], c: 2, pourquoi: ["Le billet n’est qu’une partie du coût : il faut ajouter le salaire de 120 francs auquel Léa renonce.", "Le salaire perdu compte, mais le billet aussi : la randonnée coûte les deux.", null, "Choisir ce qu’on préfère ne rend pas le choix gratuit : on renonce quand même à la meilleure autre option."],
    explication: P("Le coût d’opportunité d’un choix est la valeur de la <b>meilleure option à laquelle on renonce</b>. En partant en randonnée, Léa dépense 30 francs <i>et</i> renonce à gagner 120 francs : son choix lui coûte en réalité 150 francs. Elle a raison de partir si la randonnée vaut au moins cela à ses yeux.") },

  { id: "m1-calc-opp", theme: "marche", niveau: 1, type: "calcul", notion: "cout-opportunite",
    titre: "Chiffrer un coût d’opportunité", competence: "Additionner coût monétaire et revenu perdu.",
    gen: () => ({ billet: rnd(5, 18) * 5, h: rnd(3, 6), w: rnd(20, 32) }),
    enonce: (p) => P(`Samir hésite à aller à un concert le jeudi soir. Le billet coûte <b>${p.billet} francs</b>. Pour y aller, il doit renoncer à un service de <b>${p.h} heures</b> dans un restaurant, payé <b>${p.w} francs de l’heure</b>.`, "Quel est le coût d’opportunité total du concert ?"),
    champs: [{ label: "Coût d’opportunité", unite: "fr.", tol: 0.5 }],
    reponses: (p) => [p.billet + p.h * p.w],
    indice: "Ajoutez la dépense et le revenu auquel il renonce.",
    correction: (p) => P(`Revenu auquel Samir renonce : ${p.h} × ${p.w} = ${p.h * p.w} francs.`, `Coût d’opportunité = billet + revenu perdu = ${p.billet} + ${p.h * p.w} = <b>${p.billet + p.h * p.w} francs</b>.`, "Le prix affiché n’est qu’une partie du coût réel d’un choix.") },

  { id: "m1-eau-diamant", theme: "marche", niveau: 1, type: "qcm", notion: "utilite-marginale",
    titre: "Le paradoxe de l’eau et du diamant", competence: "Expliquer un prix par la rareté et l’utilité marginale.",
    enonce: P("L’eau est indispensable à la vie, mais très bon marché ; un diamant est presque inutile, mais très cher. Comment les économistes marginalistes expliquent-ils ce paradoxe, soulevé par Adam Smith ?"),
    options: ["Le diamant demande beaucoup plus de travail que l’eau.", "Les prix sont fixés arbitrairement par les vendeurs.", "Le prix dépend de l’utilité de la dernière unité disponible : l’eau est abondante, le diamant rare.", "L’eau est un bien public, le diamant un bien privé."], c: 2, pourquoi: ["C’est l’explication des classiques par le travail. Les marginalistes la jugent insuffisante : un objet qui a demandé beaucoup de travail mais dont personne ne veut ne se vend pas cher.", "Les vendeurs ne fixent pas les prix à leur guise : ils dépendent de ce que les acheteurs sont prêts à payer, donc de la rareté.", null, "L’eau n’est pas un bien public au sens économique : on peut faire payer chaque litre, et un litre bu n’est plus disponible pour un autre."],
    explication: P("Ce qui fixe le prix n’est pas l’utilité <i>totale</i> d’un bien, mais son <b>utilité marginale</b>, celle de la dernière unité. L’eau est si abondante que son dernier litre ne sert qu’à des usages peu importants ; le diamant est si rare que la dernière pierre reste très désirée. Le travail joue aussi un rôle à long terme, par le coût de production, mais il n’explique pas tout.") },

  { id: "m1-tableau", theme: "marche", niveau: 1, type: "document", notion: "offre-demande",
    titre: "Trouver l’équilibre dans un tableau", competence: "Lire un tableau d’offre et de demande.",
    enonce: P("Voici l’offre et la demande de paniers de légumes bio sur un marché hebdomadaire :") +
      `<table><thead><tr><th>Prix (fr.)</th><th>Quantité demandée</th><th>Quantité offerte</th></tr></thead><tbody>
      <tr><td>15</td><td>140</td><td>40</td></tr><tr><td>20</td><td>110</td><td>70</td></tr><tr><td>25</td><td>90</td><td>90</td></tr><tr><td>30</td><td>70</td><td>115</td></tr><tr><td>35</td><td>50</td><td>140</td></tr></tbody></table>` +
      P("Quel est le prix d’équilibre, et que se passe-t-il si le vendeur fixe le prix à 30 francs ?"),
    options: ["25 fr. ; à 30 fr., il y a une pénurie de 45 paniers.", "25 fr. ; à 30 fr., il reste 45 paniers invendus.", "30 fr. ; c’est là que les recettes sont les plus élevées.", "20 fr. ; à 30 fr., il reste 70 paniers invendus."], c: 1, pourquoi: ["À 30 francs, l’offre (115) dépasse la demande (70) : il y a des invendus, pas une pénurie.", null, "À 30 francs, l’offre (115) et la demande (70) ne sont pas égales : ce n’est pas l’équilibre. Et la recette réelle, sur les paniers vendus, est de 70 × 30 = 2 100 francs, moins qu’à 25 francs (90 × 25 = 2 250).", "À 20 francs, la demande (110) dépasse l’offre (70) : c’est une pénurie, pas l’équilibre. L’équilibre est là où les deux quantités sont égales."],
    explication: P("À <b>25 francs</b>, la quantité demandée (90) est égale à la quantité offerte (90) : c’est l’équilibre.", "À 30 francs, les producteurs apportent 115 paniers, mais les clients n’en veulent que 70 : il y a un <b>excédent</b> de 115 − 70 = 45 paniers invendus. Pour les écouler, les vendeurs devront baisser leur prix.") },

  /* =========================== NIVEAU 2 : INTERMÉDIAIRE =========================== */
  { id: "m2-equilibre", theme: "marche", niveau: 2, type: "calcul", notion: "offre-demande",
    titre: "Calculer l’équilibre d’un marché", competence: "Résoudre un système d’offre et de demande linéaires.",
    gen: () => { const Ps = rnd(4, 14), Qs = rnd(30, 120), b = rnd(2, 6), d = rnd(2, 6); return { a: Qs + b * Ps, b, c: Qs - d * Ps, d, Ps, Qs }; },
    enonce: (p) => P("Sur le marché local des pommes, la demande et l’offre (en kilos par jour) sont données par :", `<b>Demande : Q<sub>d</sub> = ${lin(p.a, p.b)}</b> &nbsp;&nbsp; <b>Offre : Q<sub>o</sub> = ${linp(p.c, p.d)}</b>`, "où P est le prix en francs par kilo. Calculez le prix et la quantité d’équilibre."),
    champs: [{ label: "Prix d’équilibre", unite: "fr.", tol: 0.01 }, { label: "Quantité d’équilibre", unite: "kg", tol: 0.5 }],
    reponses: (p) => [p.Ps, p.Qs],
    indice: "À l’équilibre, Qd = Qo : écrivez l’égalité et isolez P, puis remplacez P dans l’une des deux équations.",
    correction: (p) => P(`À l’équilibre : ${lin(p.a, p.b)} = ${linp(p.c, p.d)}`, `On regroupe les P : ${p.a} − (${p.c}) = ${p.b}P + ${p.d}P, soit ${p.a - p.c} = ${p.b + p.d}P.`, `Donc P* = ${p.a - p.c} ÷ ${p.b + p.d} = <b>${p.Ps} francs</b>.`, `Quantité : Q* = ${p.a} − ${p.b} × ${p.Ps} = <b>${p.Qs} kg</b> (on vérifie avec l’offre : ${p.c} + ${p.d} × ${p.Ps} = ${p.Qs}).`) },

  { id: "m2-elasticite", theme: "marche", niveau: 2, type: "calcul", notion: "offre-demande",
    titre: "Mesurer une élasticité-prix", competence: "Calculer et interpréter l’élasticité-prix de la demande.",
    gen: () => { const dp = pick([5, 8, 10, 12, 15, 20]); const dq = -pick([2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30]); return { dp, dq }; },
    enonce: (p) => P(`Une compagnie de bus augmente ses tarifs de <b>${p.dp} %</b>. Le nombre de billets vendus varie de <b>${fmt(p.dq)} %</b>.`, "Calculez l’élasticité-prix de la demande (arrondie à deux décimales)."),
    champs: [{ label: "Élasticité", unite: "", tol: 0.011 }],
    reponses: (p) => [Math.round((p.dq / p.dp) * 100) / 100],
    indice: "Élasticité-prix = variation en % de la quantité ÷ variation en % du prix.",
    correction: (p) => { const e = p.dq / p.dp; return P(`Élasticité = ${fmt(p.dq)} % ÷ ${p.dp} % = <b>${fmt(e, 2)}</b>.`, Math.abs(e) < 1 ? `En valeur absolue, elle est inférieure à 1 : la demande est <b>inélastique</b>. La quantité réagit moins que le prix, donc la recette de la compagnie augmente.` : Math.abs(e) > 1 ? `En valeur absolue, elle est supérieure à 1 : la demande est <b>élastique</b>. La quantité réagit plus fortement que le prix, donc la recette de la compagnie diminue.` : `Elle vaut −1 : la demande a une élasticité unitaire, et la recette ne change pas.`); } },

  { id: "m2-recette", theme: "marche", niveau: 2, type: "qcm", notion: "offre-demande",
    titre: "Élasticité et recette", competence: "Prévoir l’effet d’une hausse de prix sur la recette.",
    enonce: P("L’élasticité-prix de la demande de cigarettes est estimée à environ −0,4. L’État augmente fortement les taxes, ce qui fait monter le prix du paquet de 10 %. Quel effet peut-on prévoir ?"),
    options: ["La consommation baisse d’environ 4 %, et les dépenses totales des fumeurs augmentent.", "La consommation baisse d’environ 40 %, et les recettes fiscales s’effondrent.", "La consommation ne change pas, car les fumeurs sont dépendants.", "La consommation baisse de 10 %, comme le prix."], c: 0,
    explication: P("Avec une élasticité de −0,4, une hausse de prix de 10 % réduit la quantité d’environ 0,4 × 10 = <b>4 %</b>. La demande est inélastique : le prix monte plus que la quantité ne baisse, donc la dépense totale augmente (environ 1,10 × 0,96 ≈ 1,056, soit +5,6 %).", "C’est pourquoi les taxes sur le tabac rapportent beaucoup à l’État. L’effet sur la santé existe, mais il est plus fort chez les jeunes, dont la demande est plus élastique.") },

  { id: "m2-taxe-graph", theme: "marche", niveau: 2, type: "graphique", notion: "surplus",
    titre: "L’effet d’une taxe sur le marché", competence: "Analyser graphiquement l’effet d’une taxe payée par les vendeurs.",
    enonce: P("L’État instaure une taxe de 1 franc par litre sur les boissons sucrées, payée par les producteurs. Sur le graphique, la courbe d’offre passe de O à « O + taxe »."),
    fig: () => marche({ shift: "offre-", label: "O + taxe", caption: "La taxe augmente le coût de chaque litre vendu : l’offre se déplace vers le haut (vers la gauche)." }),
    options: ["Le prix payé par les consommateurs augmente exactement de 1 franc.", "Le prix payé par les consommateurs augmente, mais de moins d’un franc, et la quantité échangée diminue.", "Le prix ne change pas : ce sont les producteurs qui paient.", "La quantité échangée augmente, car l’État dépense la recette."], c: 1,
    explication: P("Au nouvel équilibre E′, le prix payé par les consommateurs augmente et la quantité diminue. Mais la hausse de prix est en général <b>inférieure à la taxe</b> : une partie de la taxe est supportée par les consommateurs, l’autre par les producteurs, qui reçoivent moins par litre après avoir payé la taxe.", "Qui paie le plus dépend des élasticités : le côté du marché le moins capable de s’adapter (le plus inélastique) supporte la plus grande part. On appelle cela l’<b>incidence fiscale</b>.") },

  { id: "m2-surplus", theme: "marche", niveau: 2, type: "calcul", notion: "surplus",
    titre: "Calculer le surplus du consommateur", competence: "Calculer une surface sous la courbe de demande.",
    gen: () => { const B = pick([1, 2]); const Q = rnd(4, 12) * (B === 1 ? 2 : 1); const A = rnd(Math.ceil(B * Q / 1) + 4, B * Q + 20); return { A, B, Q, Pe: A - B * Q }; },
    enonce: (p) => P(`La demande de places pour un festival est donnée par <b>P = ${p.A} − ${p.B === 1 ? "" : p.B}Q</b>, où P est le prix en francs et Q le nombre de places en centaines.`, `Le prix d’équilibre est de <b>${p.Pe} francs</b>, et ${p.Q} centaines de places sont vendues.`, "Calculez le surplus des consommateurs, en centaines de francs."),
    fig: "",
    champs: [{ label: "Surplus", unite: "centaines de fr.", tol: 0.5 }],
    reponses: (p) => [0.5 * (p.A - p.Pe) * p.Q],
    indice: "Le surplus est le triangle compris entre la courbe de demande et le prix payé : ½ × base × hauteur.",
    correction: (p) => P(`Le prix maximal que quelqu’un serait prêt à payer est ${p.A} francs (quand Q = 0).`, `Le surplus est le triangle de hauteur ${p.A} − ${p.Pe} = ${p.A - p.Pe} francs et de base ${p.Q} centaines de places.`, `Surplus = ½ × ${p.Q} × ${p.A - p.Pe} = <b>${fmt(0.5 * (p.A - p.Pe) * p.Q)} centaines de francs</b>, soit ${fmt(50 * (p.A - p.Pe) * p.Q)} francs.`, "C’est le gain total des spectateurs : la différence entre ce qu’ils étaient prêts à payer et ce qu’ils ont réellement payé.") },

  { id: "m2-vf-prix-reglementes", theme: "marche", niveau: 2, type: "vf", notion: "surplus",
    titre: "Prix plafonds et prix planchers", competence: "Prévoir les effets d’un prix fixé par l’État.",
    affirmations: [
      ["Un prix plafond fixé en dessous du prix d’équilibre provoque une pénurie.", true, "À ce prix bas, la quantité demandée dépasse la quantité offerte : des acheteurs ne trouvent pas preneur, d’où des files d’attente ou des listes d’attente."],
      ["Un prix plafond fixé au-dessus du prix d’équilibre n’a aucun effet.", true, "Le prix d’équilibre est déjà inférieur au plafond : la contrainte ne joue pas, on dit qu’elle n’est pas « contraignante »."],
      ["Un prix plancher fixé au-dessus de l’équilibre provoque un excédent.", true, "Au prix élevé, les vendeurs offrent plus que ce que les acheteurs demandent. C’est le cas des anciens prix garantis agricoles, qui ont créé des surplus de beurre ou de lait en Europe."],
      ["Un salaire minimum est un exemple de prix plafond.", false, "C’est un <b>prix plancher</b> sur le marché du travail : il interdit de payer moins qu’un certain montant. Ses effets sur l’emploi dépendent de son niveau et du fonctionnement du marché."]
    ] },

  { id: "m2-loyers-zurich", theme: "marche", niveau: 2, type: "redaction", notion: "offre-demande",
    titre: "Pourquoi les loyers sont-ils si élevés à Zurich et à Genève ?", competence: "Expliquer un fait économique avec l’offre et la demande (8 à 12 lignes).",
    enonce: P("Les loyers à Zurich et à Genève comptent parmi les plus élevés d’Europe, et le taux de logements vacants y est très faible, souvent inférieur à 1 %.", "<b>Consigne :</b> en vous appuyant sur l’offre et la demande, expliquez pourquoi les loyers y sont si élevés. Donnez au moins deux facteurs qui pèsent sur la demande et deux qui limitent l’offre, puis concluez."),
    criteres: ["La réponse utilise explicitement l’offre et la demande (ou l’équilibre du marché).", "Elle cite au moins deux facteurs de demande : emplois attractifs, salaires élevés, croissance de la population, immigration, ménages plus petits…", "Elle cite au moins deux facteurs qui limitent l’offre : terrain rare, règles de construction et de protection du patrimoine, oppositions et recours, lenteur des procédures…", "Elle explique que l’offre ne suit pas la demande, d’où la hausse des prix et un faible taux de vacance.", "Elle conclut clairement, par exemple sur les pistes de solution ou les limites de l’explication."],
    corrige: P("Le loyer est le prix d’un service, le logement : il dépend de l’offre et de la demande. À Zurich et à Genève, la <b>demande</b> est très forte : ces villes concentrent des emplois bien payés dans la finance, la pharmacie, la technologie ou les organisations internationales, et attirent chaque année de nombreux habitants, suisses et étrangers. La taille moyenne des ménages diminue aussi, ce qui augmente le nombre de logements nécessaires.", "L’<b>offre</b>, elle, réagit lentement : le terrain est rare et cher, les règles de construction et de protection des sites limitent la densité, et les projets peuvent être retardés par des oppositions et des recours. Quand la demande progresse plus vite que l’offre, le prix d’équilibre monte, et la pénurie se traduit par un taux de vacance très bas.", "Pour faire baisser les loyers durablement, il faudrait surtout augmenter l’offre, par la densification ou la construction de logements d’utilité publique ; plafonner les loyers sans construire risquerait d’aggraver la pénurie.", "À noter : en Suisse, le droit du bail encadre les hausses de loyer pour les locataires en place. C’est surtout le loyer proposé aux nouveaux locataires qui reflète la tension entre l’offre et la demande, d’où l’écart souvent important entre anciens et nouveaux baux.") },

  { id: "m2-complements", theme: "marche", niveau: 2, type: "qcm", notion: "offre-demande",
    titre: "Biens complémentaires", competence: "Raisonner sur deux marchés liés.",
    enonce: P("Le prix des forfaits de ski augmente fortement dans les grandes stations suisses. Quel effet peut-on attendre sur le marché de la location de skis dans ces stations ?"),
    options: ["La demande de location de skis augmente, car les skieurs économisent ailleurs.", "La demande de location de skis diminue : sa courbe se déplace vers la gauche.", "L’offre de location de skis diminue.", "Aucun effet : ce sont deux marchés différents."], c: 1,
    explication: P("Le forfait et la location de skis sont des <b>biens complémentaires</b> : on les consomme ensemble. Si le forfait devient plus cher, certains skieurs viennent moins souvent ; à chaque prix, on loue moins de skis. La <b>courbe de demande</b> de location se déplace vers la gauche, ce qui tend à faire baisser son prix et la quantité louée.") },

  /* =========================== NIVEAU 3 : AVANCÉ =========================== */
  { id: "m3-perte-seche", theme: "marche", niveau: 3, type: "calcul", notion: "surplus",
    titre: "La perte sèche d’une taxe", competence: "Calculer le nouvel équilibre et la perte sèche après une taxe.",
    gen: () => { const [b, d, kk] = pick([[2, 2, 1], [4, 4, 2], [3, 6, 2], [6, 3, 2], [2, 6, 1.5], [6, 2, 1.5]]); const t = pick([2, 4]); const Ps = rnd(6, 14), Qs = rnd(60, 140); return { a: Qs + b * Ps, b, c: Qs - d * Ps, d, t, Ps, Qs, dQ: t * kk }; },
    enonce: (p) => P(`Sur un marché, <b>Q<sub>d</sub> = ${lin(p.a, p.b)}</b> et <b>Q<sub>o</sub> = ${linp(p.c, p.d)}</b>. Sans taxe, l’équilibre est P = ${p.Ps} francs et Q = ${p.Qs} unités.`, `L’État instaure une taxe de <b>${p.t} francs par unité</b>, payée par les vendeurs : ils reçoivent désormais P − ${p.t}.`, "Calculez la nouvelle quantité échangée, puis la perte sèche (perte de surplus total non compensée par la recette fiscale)."),
    champs: [{ label: "Nouvelle quantité", unite: "unités", tol: 0.05 }, { label: "Perte sèche", unite: "fr.", tol: 0.05 }],
    reponses: (p) => [p.Qs - p.dQ, 0.5 * p.t * p.dQ],
    indice: "Écrivez l’offre en fonction du prix payé par les acheteurs : Qo = c + d(P − t). Égalisez avec la demande. La perte sèche est un triangle : ½ × taxe × baisse de quantité.",
    correction: (p) => { const P2 = (p.a - p.c + p.d * p.t) / (p.b + p.d); const Q2 = p.a - p.b * P2; return P(`Avec la taxe, l’offre devient Q<sub>o</sub> = ${p.c} + ${p.d}(P − ${p.t}).`, `Équilibre : ${lin(p.a, p.b)} = ${p.c} + ${p.d}P − ${p.d * p.t}, soit ${p.b + p.d}P = ${p.a - p.c + p.d * p.t}, donc P = ${fmt(P2)} francs payés par les acheteurs (les vendeurs reçoivent ${fmt(P2 - p.t)} francs).`, `Nouvelle quantité : Q = ${p.a} − ${p.b} × ${fmt(P2)} = <b>${fmt(Q2)} unités</b>, soit ${fmt(p.dQ)} de moins qu’avant.`, `Perte sèche = ½ × ${p.t} × ${fmt(p.dQ)} = <b>${fmt(0.5 * p.t * p.dQ)} francs</b>.`, "Ce sont les échanges qui auraient profité aux deux parties et qui n’ont plus lieu à cause de la taxe."); } },

  { id: "m3-incidence", theme: "marche", niveau: 3, type: "calcul", notion: "surplus",
    titre: "Qui paie vraiment la taxe ?", competence: "Calculer l’incidence fiscale à partir des pentes.",
    gen: () => { const [b, d] = pick([[1, 3], [3, 1], [2, 2], [1, 4], [4, 1], [2, 3], [3, 2]]); const t = pick([2, 4, 5, 10]); return { b, d, t }; },
    enonce: (p) => P(`Sur un marché, la demande est Q<sub>d</sub> = 200 − ${p.b === 1 ? "" : p.b}P et l’offre Q<sub>o</sub> = 20 + ${p.d === 1 ? "" : p.d}P.`, `On instaure une taxe de <b>${p.t} francs par unité</b>, payée par les vendeurs.`, "De combien augmente le prix payé par les acheteurs ? Et quelle part de la taxe (en %) est supportée par les acheteurs ?"),
    champs: [{ label: "Hausse du prix payé", unite: "fr.", tol: 0.01 }, { label: "Part des acheteurs", unite: "%", tol: 0.5 }],
    reponses: (p) => [Math.round((p.t * p.d / (p.b + p.d)) * 100) / 100, Math.round((p.d / (p.b + p.d)) * 1000) / 10],
    indice: "Le prix payé augmente de t × d ÷ (b + d), où b et d sont les coefficients de P dans la demande et l’offre.",
    correction: (p) => { const h = p.t * p.d / (p.b + p.d); return P(`Sans taxe : 200 − ${p.b}P = 20 + ${p.d}P, donc P = 180 ÷ ${p.b + p.d} = ${fmt(180 / (p.b + p.d))} francs.`, `Avec la taxe : 200 − ${p.b}P = 20 + ${p.d}(P − ${p.t}), donc P = (180 + ${p.d * p.t}) ÷ ${p.b + p.d} = ${fmt((180 + p.d * p.t) / (p.b + p.d))} francs.`, `Hausse du prix payé : <b>${fmt(h)} francs</b>, soit <b>${fmt(100 * p.d / (p.b + p.d), 1)} %</b> de la taxe. Les vendeurs supportent le reste, ${fmt(p.t - h)} francs.`, p.b < p.d ? "La demande réagit peu au prix (petit coefficient b) : ce sont surtout les acheteurs qui paient." : p.b > p.d ? "La demande réagit beaucoup au prix : les acheteurs peuvent se détourner, ce sont surtout les vendeurs qui paient." : "Les deux côtés réagissent autant : la taxe est partagée moitié-moitié."); } },

  { id: "m3-monopole", theme: "marche", niveau: 3, type: "calcul", notion: "concurrence-imparfaite",
    titre: "Le prix d’un monopole", competence: "Déterminer la quantité et le prix qui maximisent le profit d’un monopole.",
    gen: () => { const b = pick([1, 2]); const Qm = rnd(5, 20); const c = rnd(4, 20); return { b, Qm, c, a: c + 2 * b * Qm }; },
    enonce: (p) => P(`Une entreprise est seule à fabriquer un médicament breveté. La demande est <b>P = ${p.a} − ${p.b === 1 ? "" : p.b}Q</b> (P en francs, Q en milliers de boîtes), et chaque boîte lui coûte <b>${p.c} francs</b> à produire (coût marginal constant).`, "Sachant que la recette marginale d’une demande linéaire P = a − bQ est Rm = a − 2bQ, calculez la quantité et le prix qui maximisent son profit."),
    champs: [{ label: "Quantité", unite: "milliers", tol: 0.05 }, { label: "Prix", unite: "fr.", tol: 0.05 }],
    reponses: (p) => [p.Qm, p.a - p.b * p.Qm],
    indice: "Le monopole produit jusqu’à ce que la recette marginale soit égale au coût marginal : a − 2bQ = c.",
    correction: (p) => P(`Condition de profit maximal : recette marginale = coût marginal, soit ${p.a} − ${2 * p.b}Q = ${p.c}.`, `Donc Q = (${p.a} − ${p.c}) ÷ ${2 * p.b} = <b>${p.Qm} milliers de boîtes</b>.`, `Prix : on le lit sur la demande, P = ${p.a} − ${p.b} × ${p.Qm} = <b>${p.a - p.b * p.Qm} francs</b>.`, `En concurrence parfaite, le prix serait égal au coût marginal (${p.c} francs) et la quantité serait ${2 * p.Qm} milliers : le monopole produit <b>deux fois moins</b> et vend beaucoup plus cher. C’est la raison d’être des autorités de la concurrence, et la contrepartie que la société accepte pour récompenser l’innovation par un brevet.`) },

  { id: "m3-croisee", theme: "marche", niveau: 3, type: "qcm", notion: "offre-demande",
    titre: "Élasticité croisée", competence: "Interpréter le signe d’une élasticité croisée.",
    enonce: P("Une ville augmente le prix des billets de bus de 10 %. Le nombre de locations de vélos en libre-service augmente de 6 %, et les ventes de cartes de recharge pour les cartes de transport baissent de 8 %.", "Que peut-on en conclure ?"),
    options: ["Les vélos en libre-service sont des compléments du bus ; les cartes de recharge, des substituts.", "L’élasticité croisée vélos-bus est de +0,6 : ce sont des substituts ; celle des cartes de recharge est de −0,8 : ce sont des compléments.", "Les deux élasticités sont négatives, car le prix du bus a augmenté.", "On ne peut rien conclure sans connaître le prix des vélos."], c: 1,
    explication: P("L’élasticité croisée mesure la réaction de la demande d’un bien B à une variation du prix d’un bien A : variation en % de la quantité de B ÷ variation en % du prix de A.", "Vélos : +6 % ÷ +10 % = <b>+0,6</b>. Positive : quand le bus devient plus cher, on loue plus de vélos, ce sont des <b>substituts</b>.", "Cartes de recharge : −8 % ÷ +10 % = <b>−0,8</b>. Négative : elles sont utilisées <i>avec</i> le bus, ce sont des <b>compléments</b>.") },

  { id: "m3-penurie", theme: "marche", niveau: 3, type: "calcul", notion: "surplus",
    titre: "Mesurer une pénurie due à un plafonnement", competence: "Calculer l’écart entre quantité demandée et offerte à un prix plafond.",
    gen: () => { const b = rnd(2, 5), d = rnd(2, 5), Ps = rnd(18, 30), Qs = rnd(200, 400), gap = rnd(4, 10); return { a: Qs + b * Ps, b, c: Qs - d * Ps, d, Ps, Qs, Pc: Ps - gap }; },
    enonce: (p) => P(`Sur le marché des logements d’une ville (loyers en dizaines de francs par mois, quantités en logements), <b>Q<sub>d</sub> = ${lin(p.a, p.b)}</b> et <b>Q<sub>o</sub> = ${linp(p.c, p.d)}</b>. L’équilibre est à P = ${p.Ps}.`, `La commune plafonne le loyer à <b>P = ${p.Pc}</b>. Combien de logements manque-t-il à ce prix ?`),
    figp: () => OEC.exo.marche({ plafond: true, caption: "Au prix plafond, la quantité demandée dépasse la quantité offerte." }),
    champs: [{ label: "Pénurie", unite: "logements", tol: 0.5 }],
    reponses: (p) => [(p.a - p.b * p.Pc) - (p.c + p.d * p.Pc)],
    indice: "Calculez séparément la quantité demandée et la quantité offerte au prix plafond, puis faites la différence.",
    correction: (p) => { const qd = p.a - p.b * p.Pc, qo = p.c + p.d * p.Pc; return P(`Au prix plafond P = ${p.Pc} : quantité demandée = ${p.a} − ${p.b} × ${p.Pc} = ${qd} logements.`, `Quantité offerte = ${p.c} + ${p.d} × ${p.Pc} = ${qo} logements.`, `Pénurie = ${qd} − ${qo} = <b>${qd - qo} logements</b>.`, "Les ménages qui obtiennent un logement paient moins cher, mais d’autres n’en trouvent pas. À long terme, si les propriétaires construisent et entretiennent moins, l’offre peut encore diminuer."); } },

  { id: "m3-vf-monopsone", theme: "marche", niveau: 3, type: "vf", notion: "concurrence-imparfaite",
    titre: "Salaire minimum, concurrence et monopsone", competence: "Comparer les prédictions de deux modèles du marché du travail.",
    affirmations: [
      ["Dans un marché du travail parfaitement concurrentiel, un salaire minimum supérieur au salaire d’équilibre réduit l’emploi.", true, "Au salaire minimum, les entreprises demandent moins de travail que ce que les travailleurs offrent : il y a du chômage."],
      ["Un monopsone est une situation où un seul vendeur fait face à de nombreux acheteurs.", false, "C’est l’inverse : un <b>monopsone</b> est un acheteur unique, par exemple un grand employeur dominant dans une petite région. Un vendeur unique est un monopole."],
      ["En situation de monopsone, un salaire minimum modéré peut augmenter à la fois les salaires et l’emploi.", true, "L’employeur dominant fixe un salaire bas et embauche moins pour ne pas faire monter les salaires de tous. Un salaire minimum bien choisi supprime cet intérêt : il peut embaucher plus au même salaire. C’est l’analyse de Joan Robinson (1933)."],
      ["L’étude de Card et Krueger (1994) sur les fast-foods du New Jersey a trouvé une forte baisse de l’emploi après une hausse du salaire minimum.", false, "Elle n’a <b>pas</b> trouvé d’effet négatif sur l’emploi, ce qui a relancé le débat. Le consensus actuel est que des hausses modérées ont peu d’effet ; l’effet de hausses fortes reste discuté."]
    ] },

  { id: "m3-plafonner-loyers", theme: "marche", niveau: 3, type: "redaction", notion: "surplus",
    titre: "Faut-il plafonner les loyers ?", competence: "Construire une argumentation équilibrée et conclure (15 à 25 lignes).",
    enonce: P("Face à la hausse des loyers, plusieurs villes européennes, comme Berlin entre 2020 et 2021, ont plafonné ou gelé les loyers. En Suisse, le droit du bail permet déjà de contester un loyer jugé abusif, et certains proposent d’aller plus loin.", "<b>Consigne :</b> faut-il plafonner les loyers ? Présentez les arguments en faveur et les arguments contre, en utilisant au moins une notion d’économie (offre et demande, prix plafond, pénurie, surplus, incitations), puis donnez une conclusion argumentée."),
    criteres: ["La réponse présente au moins deux arguments en faveur du plafonnement (protection des locataires, justice sociale, mixité, logement comme besoin essentiel, pouvoir de négociation des bailleurs…).", "Elle présente au moins deux arguments contre (pénurie, baisse de l’offre et de l’entretien, marché noir ou sélection des locataires, logements retirés du marché…).", "Elle mobilise correctement au moins une notion d’économie, par exemple le prix plafond et la pénurie.", "Elle distingue le court terme et le long terme, ou nuance selon la forme du plafonnement.", "Elle conclut de façon argumentée, par exemple en proposant des mesures complémentaires (construction, aides ciblées)."],
    corrige: P("<b>Pour :</b> le logement est un besoin essentiel, et quand l’offre réagit lentement, les propriétaires peuvent imposer de fortes hausses aux locataires en place, qui ont peu de choix. Un plafonnement protège les ménages modestes, évite qu’ils soient chassés de leur quartier et préserve la mixité sociale.", "<b>Contre :</b> un prix plafond inférieur à l’équilibre crée une <b>pénurie</b> : la quantité demandée dépasse l’offre. Les logements disponibles se raréfient, les bailleurs choisissent les locataires les plus sûrs, et un marché parallèle peut apparaître. À long terme, si la rentabilité baisse, on construit et on entretient moins. L’expérience de Berlin, où le plafonnement a été annulé par la justice en 2021, a montré une forte baisse du nombre de logements proposés à la location.", "<b>Conclusion :</b> un plafonnement peut protéger les locataires en place à court terme, mais il ne crée aucun logement. Il est plus efficace de l’associer, ou de le préférer, à des mesures qui augmentent l’offre (densification, logements d’utilité publique) et à des aides ciblées pour les ménages modestes.", "Attention aux comparaisons : les études les plus citées, à San Francisco ou à Berlin, portent sur des gels ou des plafonds stricts. Le droit suisse du bail fonctionne autrement : une hausse de loyer doit être justifiée, notamment par le taux hypothécaire de référence, le renchérissement ou des travaux, et un loyer jugé abusif peut être contesté. Les effets d’un encadrement dépendent donc beaucoup de sa forme.") },

  { id: "m3-degriffes", theme: "marche", niveau: 3, type: "qcm", notion: "concurrence-imparfaite",
    titre: "Les billets dégriffés", competence: "Reconnaître une stratégie de discrimination par les prix.",
    enonce: P("Les CFF vendent des billets « dégriffés », moins chers, pour certains trains peu fréquentés, à réserver à l’avance et valables seulement pour ce train. Le prix normal reste inchangé pour les autres voyageurs.", "Quelle est la logique économique principale de cette offre ?"),
    options: ["Faire payer davantage les voyageurs pressés pour compenser les pertes.", "Pratiquer une discrimination par les prix : attirer les clients sensibles au prix sans baisser le tarif de ceux qui paieraient le prix fort.", "Respecter une obligation légale de proposer des billets bon marché.", "Réduire la demande aux heures de pointe en augmentant le prix normal."], c: 1,
    explication: P("C’est une forme de <b>discrimination par les prix</b> : vendre le même service à des prix différents selon la disposition à payer. Les voyageurs flexibles et sensibles au prix (étudiants, retraités, loisirs) prennent un billet dégriffé sur un train peu rempli ; les voyageurs qui ont besoin de flexibilité paient le plein tarif.", "Les conditions (réservation, train imposé) empêchent la plupart des voyageurs pressés de profiter du rabais. Comme le coût d’un passager supplémentaire dans un train peu rempli est très faible, l’entreprise gagne des recettes, et des voyageurs qui ne seraient pas partis peuvent voyager.") },
  { id: "m1-fait-valeur", theme: "marche", niveau: 1, type: "vf", typeLib: "Constat ou jugement de valeur", etiquettes: ["Constat", "Jugement de valeur"],
    titre: "Constat ou jugement de valeur ?", competence: "Distinguer un constat, que l’on peut vérifier, d’un jugement de valeur, qui dit ce qui devrait être.",
    enonce: P("Pour chaque affirmation, dites s’il s’agit d’un <b>constat</b>, que l’on peut vérifier avec des données, même s’il se révèle faux, ou d’un <b>jugement de valeur</b>, qui dit ce qui devrait être."),
    affirmations: [
      ["Quand le prix d’un bien augmente, la quantité demandée diminue en général.", true, "On peut le vérifier avec des données, et les observations le confirment dans la grande majorité des marchés."],
      ["Il est injuste que les loyers soient si élevés à Genève.", false, "Il dit ce qui devrait être. Des faits peuvent éclairer le débat, mais pas le trancher : « injuste » est une appréciation."],
      ["Après le plafonnement des loyers à Berlin en 2020, le nombre d’annonces de location a baissé.", true, "On peut le vérifier avec des données : des études l’ont mesuré sur les annonces publiées."],
      ["L’État devrait garantir un logement abordable à chacun.", false, "Il dit ce qui devrait être. Des faits peuvent éclairer le débat, mais pas le trancher : « devrait » signale un choix politique."]] },
  ]);
})();
