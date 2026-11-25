/* Œconomia — Entraînement : thème « Croissance et PIB » (24 exercices, trois niveaux). */
(function () {
  const X = OEC.exo, { rnd, pick, fmt } = X;
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");

  X.theme({ id: "croissance", nom: "Croissance et PIB",
    intro: "Comment mesure-t-on la richesse produite par un pays, et d’où vient sa croissance ? Ces exercices vous entraînent à calculer et à interpréter le PIB, à distinguer valeurs nominales et réelles, à raisonner sur la croissance de long terme et à discuter de ses limites.",
    notions: ["pib", "division-travail", "destruction-creatrice", "cycles", "institutions-inclusives", "stagnation-seculaire", "capabilites"] });

  X.add([
  /* =========================== NIVEAU 1 : DÉCOUVERTE =========================== */
  { id: "cr1-ce-qui-compte", theme: "croissance", niveau: 1, type: "qcm", notion: "pib",
    titre: "Qu’est-ce qui compte dans le PIB ?", competence: "Savoir ce que mesure le produit intérieur brut.",
    enonce: P("Laquelle de ces opérations, réalisées en Suisse cette année, est comptée dans le PIB suisse de l’année ?"),
    options: ["L’achat d’une voiture d’occasion fabriquée il y a cinq ans.", "Un repas préparé à la maison pour sa famille.", "Une coupe de cheveux payée chez un coiffeur.", "L’achat d’actions d’une entreprise suisse en Bourse."], c: 2, pourquoi: ["La voiture a été comptée dans le PIB l’année de sa fabrication ; la revendre ne crée aucune production nouvelle.", "Le repas est produit, mais il n’est ni vendu ni payé : le PIB ne compte pas le travail domestique.", null, "Acheter des actions est un échange de titres, une opération financière : aucune production nouvelle n’est créée."],
    explication: P("Le PIB mesure la valeur des biens et services <b>produits</b> pendant l’année sur le territoire et <b>échangés sur un marché</b> (ou fournis par les administrations). La coupe de cheveux est un service produit et vendu cette année.", "La voiture d’occasion a été comptée l’année de sa fabrication ; le repas à la maison n’est pas vendu, il n’est pas compté ; l’achat d’actions est un simple transfert de propriété, pas une production.") },

  { id: "cr1-taux", theme: "croissance", niveau: 1, type: "calcul", notion: "pib",
    titre: "Calculer un taux de croissance", competence: "Calculer la croissance du PIB d’une année à l’autre.",
    gen: () => { const y0 = rnd(700, 860); const g = pick([-2.5, -1.2, 0.4, 0.8, 1.2, 1.6, 2.1, 2.9, 3.5, 5.0]); return { y0, y1: Math.round(y0 * (1 + g / 100)) }; },
    enonce: (p) => P(`Le PIB réel d’un pays passe de <b>${p.y0} milliards</b> de francs à <b>${p.y1} milliards</b> en un an.`, "Quel est le taux de croissance ? Arrondissez à une décimale (signe moins en cas de baisse)."),
    champs: [{ label: "Croissance", unite: "%", tol: 0.1 }],
    reponses: (p) => [Math.round(((p.y1 - p.y0) / p.y0) * 1000) / 10],
    indice: "Taux de croissance = (PIB de l’année − PIB de l’année précédente) ÷ PIB de l’année précédente × 100.",
    correction: (p) => { const v = ((p.y1 - p.y0) / p.y0) * 100; return P(`Croissance = (${p.y1} − ${p.y0}) ÷ ${p.y0} × 100 ≈ <b>${fmt(v, 1)} %</b>.`, v < 0 ? "La production a reculé : si cette baisse dure au moins deux trimestres consécutifs, on parle de récession." : "La production a augmenté. En Suisse, la croissance annuelle tourne souvent autour de 1 à 2 %."); } },

  { id: "cr1-par-habitant", theme: "croissance", niveau: 1, type: "calcul", notion: "pib",
    titre: "Le PIB par habitant", competence: "Calculer un PIB par habitant.",
    gen: () => ({ y: rnd(780, 880), pop: rnd(86, 93) / 10 }),
    enonce: (p) => P(`Le PIB d’un pays est de <b>${p.y} milliards</b> de francs pour une population de <b>${fmt(p.pop, 1)} millions</b> d’habitants (des chiffres proches de ceux de la Suisse).`, "Quel est le PIB par habitant ? Arrondissez à la centaine de francs."),
    champs: [{ label: "PIB par habitant", unite: "fr.", tol: 60 }],
    reponses: (p) => [Math.round((p.y * 1000 / p.pop) / 100) * 100],
    indice: "Divisez le PIB par la population, en faisant attention aux unités : milliards ÷ millions = milliers.",
    correction: (p) => P(`PIB par habitant = ${p.y} milliards ÷ ${fmt(p.pop, 1)} millions = ${fmt(p.y / p.pop, 2)} milliers de francs, soit environ <b>${fmt(Math.round((p.y * 1000 / p.pop) / 100) * 100)} francs</b> par habitant et par an.`, "C’est une <b>moyenne</b> : elle ne dit rien de la répartition des revenus entre les habitants.") },

  { id: "cr1-vf-limites", theme: "croissance", niveau: 1, type: "vf", notion: "pib",
    titre: "Les limites du PIB", competence: "Savoir ce que le PIB ne mesure pas.",
    affirmations: [
      ["Le travail bénévole dans une association est compté dans le PIB.", false, "Il n’est pas rémunéré ni vendu : il n’entre pas dans le PIB, alors qu’il a une grande valeur sociale. En Suisse, l’OFS l’estime à part, dans un « compte satellite »."],
      ["Les dépenses pour réparer les dégâts d’une inondation font augmenter le PIB.", true, "Les travaux de réparation sont une production vendue. Le PIB ne retire pas les destructions : c’est l’une de ses limites comme mesure du bien-être."],
      ["Un PIB par habitant élevé garantit que chaque habitant a un revenu élevé.", false, "C’est une moyenne : un pays très inégal peut avoir un PIB par habitant élevé et beaucoup de pauvres."],
      ["Le PIB ne mesure pas l’épuisement des ressources naturelles ni la pollution.", true, "C’est pourquoi on le complète par des indicateurs environnementaux et de bien-être, comme le recommandait le rapport Stiglitz-Sen-Fitoussi (2009)."]
    ] },

  { id: "cr1-nominal-reel", theme: "croissance", niveau: 1, type: "qcm", notion: "pib",
    titre: "PIB nominal et PIB réel", competence: "Distinguer une hausse des prix d’une hausse de la production.",
    enonce: P("Cette année, le PIB nominal d’un pays a augmenté de 3 %, et les prix ont augmenté en moyenne de 2 %. Que peut-on dire de la production ?"),
    options: ["Elle a augmenté de 3 %.", "Elle a augmenté d’environ 1 %.", "Elle a augmenté de 5 %.", "Elle a baissé de 1 %."], c: 1, pourquoi: ["3 % est la hausse du PIB nominal, qui mélange production et prix : il faut retirer la hausse des prix de 2 %.", null, "Il faut soustraire la hausse des prix, pas l’ajouter : le PIB nominal est gonflé par l’inflation.", "La valeur de la production a augmenté plus vite que les prix (3 % contre 2 %) : la production réelle a donc augmenté."],
    explication: P("Le PIB <b>nominal</b> est mesuré aux prix de l’année : il augmente si l’on produit plus, mais aussi si les prix montent. Le PIB <b>réel</b> retire l’effet des prix. Ici, la croissance réelle est d’environ 3 − 2 = <b>1 %</b> (plus précisément 1,03 ÷ 1,02 − 1 ≈ 0,98 %).", "Quand on parle de « croissance économique », on parle toujours de la croissance du PIB réel.") },

  { id: "cr1-valeur-ajoutee", theme: "croissance", niveau: 1, type: "calcul", notion: "pib",
    titre: "Le PIB comme somme des valeurs ajoutées", competence: "Éviter de compter deux fois les consommations intermédiaires.",
    gen: () => { const ble = rnd(20, 40), farine = ble + rnd(15, 30), pain = farine + rnd(40, 80); return { ble, farine, pain }; },
    enonce: (p) => P(`Un agriculteur vend du blé au meunier pour <b>${p.ble} francs</b>. Le meunier en fait de la farine qu’il vend au boulanger pour <b>${p.farine} francs</b>. Le boulanger vend le pain aux clients pour <b>${p.pain} francs</b>. (On suppose que l’agriculteur n’a rien acheté.)`, "Quelle est la contribution de cette filière au PIB ?"),
    champs: [{ label: "Contribution au PIB", unite: "fr.", tol: 0.5 }],
    reponses: (p) => [p.pain],
    indice: "Additionnez les valeurs ajoutées : chaque entreprise ajoute la différence entre ce qu’elle vend et ce qu’elle achète aux autres.",
    correction: (p) => P(`Valeur ajoutée de l’agriculteur : ${p.ble} francs ; du meunier : ${p.farine} − ${p.ble} = ${p.farine - p.ble} francs ; du boulanger : ${p.pain} − ${p.farine} = ${p.pain - p.farine} francs.`, `Total : ${p.ble} + ${p.farine - p.ble} + ${p.pain - p.farine} = <b>${p.pain} francs</b>, c’est-à-dire la valeur du produit final.`, `Additionner toutes les ventes (${p.ble + p.farine + p.pain} francs) compterait plusieurs fois le blé et la farine. C’est pourquoi le PIB est la somme des <b>valeurs ajoutées</b>.`) },

  { id: "cr1-crosse", theme: "croissance", niveau: 1, type: "qcm", notion: "division-travail",
    titre: "Quand la croissance a-t-elle commencé ?", competence: "Situer le décollage de la croissance dans l’histoire.",
    enonce: P("Selon les estimations de l’historien Angus Maddison, comment a évolué le revenu moyen par habitant dans le monde au cours des deux derniers millénaires ?"),
    options: ["Il a augmenté régulièrement d’environ 1 % par an depuis l’Antiquité.", "Il a très peu progressé jusque vers 1800, puis a été multiplié par plus de dix en deux siècles.", "Il a baissé depuis la révolution industrielle.", "Il a surtout augmenté au Moyen Âge, grâce à l’agriculture."], c: 1, pourquoi: ["Une croissance de 1 % par an pendant deux mille ans aurait multiplié le revenu par plusieurs centaines de millions : ce n’est pas ce qu’on observe.", null, "C’est l’inverse : la révolution industrielle marque le début de la hausse rapide du revenu par habitant.", "Au Moyen Âge, les progrès agricoles ont surtout permis à la population de croître ; le revenu par habitant a très peu changé (le « piège malthusien »)."],
    explication: P("Pendant des siècles, les gains de productivité se traduisaient surtout par une hausse de la population : c’est le « piège malthusien ». Avec la révolution industrielle, à partir de la fin du XVIIIe siècle en Angleterre, le revenu par habitant décolle : il a été multiplié par plus de dix depuis 1820. La courbe a la forme d’une « crosse de hockey ».") },

  { id: "cr1-suisse-pib", theme: "croissance", niveau: 1, type: "document", notion: "cycles",
    titre: "La croissance suisse récente", competence: "Lire une série de taux de croissance.",
    enonce: P("Croissance du PIB réel de la Suisse (en %, valeurs arrondies, les chiffres sont régulièrement révisés par le SECO et l’OFS) :") +
      `<table><thead><tr><th>2019</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th><th>2024</th></tr></thead><tbody><tr><td>1,1</td><td>−2,1</td><td>5,4</td><td>3,0</td><td>0,7</td><td>1,3</td></tr></tbody></table>` +
      P("Quelle affirmation est correcte ?"),
    options: ["Le PIB suisse a été plus faible en 2021 qu’en 2019.", "Le PIB a reculé en 2020, avec la pandémie, puis fortement rebondi en 2021.", "La Suisse a connu une récession en 2023, puisque la croissance n’était que de 0,7 %.", "Les chiffres montrent que la Suisse ne connaît jamais de baisse du PIB."], c: 1, pourquoi: ["Après −2,1 % en 2020 et +5,4 % en 2021, le PIB de 2021 dépasse celui de 2019 d’environ 3 %.", null, "Une croissance de 0,7 % reste positive : la production a augmenté. Une récession suppose une baisse de la production.", "Le tableau montre justement une baisse en 2020 (−2,1 %)."],
    explication: P("En 2020, la croissance est négative : la production a baissé, à cause des mesures sanitaires. En 2021, elle rebondit fortement, et le PIB dépasse alors son niveau de 2019 (−2,1 % puis +5,4 % donnent environ +3,2 %).", "En 2023, la croissance est faible mais positive : la production a augmenté, il ne s’agit pas d’une récession.") },

  /* =========================== NIVEAU 2 : INTERMÉDIAIRE =========================== */
  { id: "cr2-regle-70", theme: "croissance", niveau: 2, type: "calcul", notion: "pib",
    titre: "La règle de 70", competence: "Estimer le temps de doublement d’une grandeur.",
    gen: () => ({ g: pick([0.5, 1, 1.4, 2, 2.5, 3.5, 5, 7, 10]) }),
    enonce: (p) => P(`Le revenu par habitant d’un pays croît de <b>${fmt(p.g)} %</b> par an.`, "Selon la règle de 70, en combien d’années environ va-t-il doubler ?"),
    champs: [{ label: "Doublement en", unite: "ans", tol: 0.6 }],
    reponses: (p) => [Math.round((70 / p.g) * 10) / 10],
    indice: "Temps de doublement ≈ 70 ÷ taux de croissance en %.",
    correction: (p) => P(`Temps de doublement ≈ 70 ÷ ${fmt(p.g)} ≈ <b>${fmt(70 / p.g, 1)} ans</b> (calcul exact : ln 2 ÷ ln(1 + ${fmt(p.g / 100, 3)}) ≈ ${fmt(Math.log(2) / Math.log(1 + p.g / 100), 1)} ans).`, "De petites différences de croissance font de grandes différences à long terme : à 1 % par an, il faut 70 ans pour doubler ; à 7 %, comme la Chine pendant des décennies, 10 ans seulement.") },

  { id: "cr2-composee", theme: "croissance", niveau: 2, type: "calcul", notion: "pib",
    titre: "La croissance composée", competence: "Calculer l’effet cumulé d’une croissance annuelle.",
    gen: () => ({ g: pick([1, 1.5, 2, 3, 5]), n: pick([10, 20, 25, 30, 50]) }),
    enonce: (p) => P(`Le PIB par habitant d’un pays croît de <b>${fmt(p.g)} %</b> par an pendant <b>${p.n} ans</b>.`, "Par combien est-il multiplié au total ? Arrondissez à deux décimales."),
    champs: [{ label: "Multiplié par", unite: "", tol: 0.011 }],
    reponses: (p) => [Math.round(Math.pow(1 + p.g / 100, p.n) * 100) / 100],
    indice: "Coefficient multiplicateur = (1 + taux) puissance nombre d’années.",
    correction: (p) => { const k = Math.pow(1 + p.g / 100, p.n); return P(`Coefficient = ${fmt(1 + p.g / 100, 3)}<sup>${p.n}</sup> ≈ <b>${fmt(k, 2)}</b>, soit une hausse totale d’environ ${fmt((k - 1) * 100, 0)} %.`, `Attention : ce n’est pas ${p.n} × ${fmt(p.g)} = ${fmt(p.n * p.g)} %, car chaque année la croissance s’applique à un niveau déjà plus élevé.`); } },

  { id: "cr2-solow", theme: "croissance", niveau: 2, type: "qcm", notion: "pib",
    titre: "Le modèle de Solow", competence: "Comprendre les rendements décroissants du capital.",
    enonce: P("Selon le modèle de croissance de Robert Solow (1956), que se passe-t-il si un pays se contente d’accumuler toujours plus de machines, sans progrès technique ?"),
    options: ["Sa croissance s’accélère indéfiniment.", "Chaque machine supplémentaire rapporte un peu moins que la précédente, et la croissance du revenu par habitant finit par s’arrêter.", "Sa production baisse, car les machines remplacent les travailleurs.", "Sa croissance devient négative à cause de l’inflation."], c: 1,
    explication: P("Le capital a des <b>rendements décroissants</b> : une première machine fait beaucoup gagner, la vingtième beaucoup moins. À force d’accumuler, l’investissement ne fait plus que remplacer les machines usées. À long terme, seule la hausse de l’efficacité, le <b>progrès technique</b>, permet au revenu par habitant de continuer à croître.", "C’est ce qui a poussé Lucas, Romer, Aghion et Howitt à chercher d’où vient ce progrès : éducation, recherche, innovation.") },

  { id: "cr2-comptabilite", theme: "croissance", niveau: 2, type: "calcul", notion: "destruction-creatrice",
    titre: "La comptabilité de la croissance", competence: "Calculer la contribution du progrès technique (résidu de Solow).",
    gen: () => ({ y: pick([2, 2.5, 3, 3.5, 4]), k: pick([2, 3, 4, 5]), l: pick([0, 0.5, 1, 1.5]) }),
    enonce: (p) => P("La croissance de la production peut se décomposer ainsi : <b>croissance du PIB = 0,3 × croissance du capital + 0,7 × croissance du travail + progrès technique</b> (productivité globale des facteurs).", `Dans un pays, le PIB croît de <b>${fmt(p.y)} %</b>, le capital de <b>${fmt(p.k)} %</b> et le travail (heures travaillées) de <b>${fmt(p.l)} %</b>.`, "Quelle est la contribution du progrès technique ? Arrondissez à deux décimales."),
    champs: [{ label: "Progrès technique", unite: "points de %", tol: 0.011 }],
    reponses: (p) => [Math.round((p.y - 0.3 * p.k - 0.7 * p.l) * 100) / 100],
    indice: "Progrès technique = croissance du PIB − 0,3 × croissance du capital − 0,7 × croissance du travail.",
    correction: (p) => { const r = p.y - 0.3 * p.k - 0.7 * p.l; return P(`Contribution du capital : 0,3 × ${fmt(p.k)} = ${fmt(0.3 * p.k, 2)} point ; du travail : 0,7 × ${fmt(p.l)} = ${fmt(0.7 * p.l, 2)} point.`, `Progrès technique = ${fmt(p.y)} − ${fmt(0.3 * p.k, 2)} − ${fmt(0.7 * p.l, 2)} = <b>${fmt(r, 2)} point de %</b>, soit environ ${fmt(100 * r / p.y, 0)} % de la croissance.`, "C’est le « résidu de Solow », que Moses Abramovitz appelait « la mesure de notre ignorance » : la part de la croissance qu’on n’explique pas par plus de capital et plus de travail."); } },

  { id: "cr2-vf-innovation", theme: "croissance", niveau: 2, type: "vf", notion: "destruction-creatrice",
    titre: "Innovation et destruction créatrice", competence: "Comprendre le rôle de l’innovation selon Schumpeter.",
    affirmations: [
      ["Pour Schumpeter, l’entrepreneur innovateur est le moteur du capitalisme.", true, "Il introduit de nouveaux produits, procédés ou organisations, et bouleverse les marchés existants."],
      ["La destruction créatrice signifie que l’innovation ne fait que des gagnants.", false, "Les nouvelles activités remplacent les anciennes : des entreprises et des emplois disparaissent, d’autres apparaissent. Il y a des perdants, au moins temporairement."],
      ["Une idée, comme une recette ou un logiciel, peut être utilisée par beaucoup de personnes à la fois sans s’user.", true, "C’est ce que Paul Romer appelle la « non-rivalité » des idées, qui explique qu’elles puissent nourrir une croissance durable."],
      ["Selon Aghion et Howitt, une concurrence plus forte décourage toujours l’innovation.", false, "La relation est plus nuancée : la concurrence pousse les entreprises proches de la frontière technologique à innover pour garder leur avance, mais peut décourager celles qui sont très en retard."]
    ] },

  { id: "cr2-recession", theme: "croissance", niveau: 2, type: "qcm", notion: "cycles",
    titre: "Reconnaître une récession", competence: "Utiliser la définition courante d’une récession.",
    enonce: P("Voici la croissance du PIB réel d’un pays, trimestre par trimestre (par rapport au trimestre précédent) : +0,4 %, +0,1 %, −0,2 %, −0,3 %, +0,2 %. Que peut-on dire ?"),
    options: ["Il n’y a pas eu de récession, car la croissance sur l’année est positive.", "Le pays est entré en récession au sens courant, avec deux trimestres consécutifs de baisse du PIB.", "Le pays est en dépression.", "Il y a eu une récession dès le deuxième trimestre, car la croissance a ralenti."], c: 1,
    explication: P("Selon la définition la plus courante, une <b>récession</b> correspond à au moins <b>deux trimestres consécutifs de baisse du PIB réel</b>, ce qui est le cas aux troisième et quatrième trimestres. Un simple ralentissement, comme au deuxième trimestre, n’est pas une récession.", "Une <b>dépression</b> désigne une récession beaucoup plus longue et profonde, comme celle des années 1930. Certains organismes, comme le NBER aux États-Unis, utilisent une définition plus large, fondée aussi sur l’emploi et les revenus.") },

  { id: "cr2-suisse-riche", theme: "croissance", niveau: 2, type: "redaction", notion: "institutions-inclusives",
    titre: "Pourquoi la Suisse est-elle si riche ?", competence: "Mobiliser plusieurs facteurs de croissance pour expliquer un cas (10 à 15 lignes).",
    enonce: P("Au début du XIXe siècle, la Suisse était un pays pauvre et montagneux, sans charbon ni accès à la mer, dont beaucoup d’habitants émigraient. Elle compte aujourd’hui parmi les pays au revenu par habitant le plus élevé du monde.", "<b>Consigne :</b> expliquez cette réussite en mobilisant au moins trois facteurs de croissance étudiés en économie."),
    criteres: ["La réponse mobilise le capital humain : formation professionnelle duale, écoles polytechniques, niveau de qualification…", "Elle mobilise l’innovation et la spécialisation : horlogerie, machines, chimie et pharmacie, finance, recherche…", "Elle mobilise les institutions : stabilité politique, État de droit, fédéralisme, démocratie directe, protection de la propriété…", "Elle mobilise l’ouverture : commerce international, travailleurs et capitaux étrangers…", "Elle relie ces facteurs à la productivité et nuance (ressources naturelles absentes, rôle de l’histoire, limites)."],
    corrige: P("La richesse de la Suisse ne vient pas de ressources naturelles, mais de facteurs que les théories de la croissance jugent décisifs. D’abord le <b>capital humain</b> : l’apprentissage dual forme une main-d’œuvre très qualifiée, et les écoles polytechniques (EPFZ, fondée en 1855, et EPFL) nourrissent la recherche.", "Ensuite l’<b>innovation et la spécialisation</b> dans des produits à forte valeur ajoutée : horlogerie, machines, chimie et pharmacie, souvent nées de l’industrie textile, puis services financiers. La Suisse figure en tête des classements mondiaux de l’innovation.", "Enfin des <b>institutions</b> stables et inclusives, au sens d’Acemoglu : État de droit, fédéralisme, démocratie directe, protection de la propriété, et une forte <b>ouverture</b> aux échanges et aux travailleurs étrangers. Le tunnel du Gothard et l’hydroélectricité ont compensé l’absence de charbon. Ces facteurs se renforcent mutuellement et expliquent une productivité élevée.") },

  { id: "cr2-convergence", theme: "croissance", niveau: 2, type: "qcm", notion: "institutions-inclusives",
    titre: "Les pays pauvres rattrapent-ils les riches ?", competence: "Comprendre la convergence conditionnelle.",
    enonce: P("Le modèle de Solow prédit que les pays pauvres, qui ont peu de capital, devraient croître plus vite que les pays riches et les rattraper. Que montrent les données depuis 1960 ?"),
    options: ["Tous les pays pauvres ont rattrapé les pays riches.", "Aucun pays pauvre n’a rattrapé les pays riches.", "Le rattrapage s’observe entre pays aux institutions et aux politiques comparables, comme la Corée du Sud, mais pas partout.", "Les pays riches croissent toujours plus vite que les pays pauvres."], c: 2,
    explication: P("On observe une <b>convergence conditionnelle</b> : les pays rattrapent leur retard quand ils réunissent certaines conditions, comme l’éducation, l’épargne, l’ouverture et des institutions favorables. La Corée du Sud, Taïwan ou plus tard la Chine en sont des exemples. Beaucoup d’autres pays, en Afrique ou en Amérique latine, n’ont pas rattrapé leur retard.", "C’est l’une des raisons pour lesquelles les économistes se sont tournés vers les institutions (North, Acemoglu) pour expliquer les écarts de richesse.") },

  /* =========================== NIVEAU 3 : AVANCÉ =========================== */
  { id: "cr3-par-habitant", theme: "croissance", niveau: 3, type: "calcul", notion: "pib",
    titre: "Croissance totale et croissance par habitant", competence: "Distinguer croissance du PIB et du PIB par habitant.",
    gen: () => ({ g: pick([0.8, 1.2, 1.5, 2, 2.5, 3]), n: pick([0.3, 0.6, 0.8, 1, 1.2, 1.5]) }),
    enonce: (p) => P(`Le PIB réel d’un pays augmente de <b>${fmt(p.g)} %</b> et sa population de <b>${fmt(p.n)} %</b>.`, "De combien augmente le PIB réel par habitant ? Arrondissez à deux décimales (l’approximation est acceptée)."),
    champs: [{ label: "PIB par habitant", unite: "%", tol: 0.03 }],
    reponses: (p) => [Math.round(((1 + p.g / 100) / (1 + p.n / 100) - 1) * 10000) / 100],
    indice: "Croissance par habitant ≈ croissance du PIB − croissance de la population ; exact : (1 + g) ÷ (1 + n) − 1.",
    correction: (p) => { const v = ((1 + p.g / 100) / (1 + p.n / 100) - 1) * 100; return P(`Exact : ${fmt(1 + p.g / 100, 3)} ÷ ${fmt(1 + p.n / 100, 3)} − 1 ≈ <b>${fmt(v, 2)} %</b> (approximation : ${fmt(p.g - p.n, 2)} %).`, "En Suisse, une part importante de la croissance du PIB depuis les années 2000 vient de l’augmentation de la population. La croissance par habitant, qui mesure mieux l’évolution du niveau de vie moyen, est nettement plus faible, ce qui nourrit le débat politique sur l’immigration et la productivité."); } },

  { id: "cr3-deflateur", theme: "croissance", niveau: 3, type: "calcul", notion: "pib",
    titre: "Le déflateur du PIB", competence: "Calculer un indice de prix à partir du PIB nominal et réel.",
    gen: () => { const r0 = rnd(700, 800), gr = pick([1, 1.5, 2, 3]), d1 = pick([101, 102, 103, 104, 105]); const r1 = Math.round(r0 * (1 + gr / 100)); return { r0, r1, n0: r0, n1: Math.round(r1 * d1 / 100) }; },
    enonce: (p) => P(`Année de base : PIB nominal = PIB réel = <b>${p.n0} milliards</b>.`, `Année suivante : PIB nominal = <b>${p.n1} milliards</b>, PIB réel (aux prix de l’année de base) = <b>${p.r1} milliards</b>.`, "Calculez le déflateur du PIB de l’année suivante (base 100) et le taux d’inflation qu’il indique. Arrondissez à une décimale."),
    champs: [{ label: "Déflateur", unite: "", tol: 0.1 }, { label: "Inflation", unite: "%", tol: 0.1 }],
    reponses: (p) => [Math.round((p.n1 / p.r1) * 1000) / 10, Math.round((p.n1 / p.r1 - 1) * 1000) / 10],
    indice: "Déflateur = PIB nominal ÷ PIB réel × 100. L’année de base, il vaut 100.",
    correction: (p) => { const d = p.n1 / p.r1 * 100; return P(`Déflateur = ${p.n1} ÷ ${p.r1} × 100 ≈ <b>${fmt(d, 1)}</b>.`, `Il valait 100 l’année de base : les prix de l’ensemble de la production ont donc augmenté d’environ <b>${fmt(d - 100, 1)} %</b>.`, "Contrairement à l’IPC, qui mesure le prix d’un panier de consommation, le déflateur couvre toute la production du pays, y compris l’investissement et les exportations, mais pas les importations."); } },

  { id: "cr3-ppa", theme: "croissance", niveau: 3, type: "calcul", notion: "pib",
    titre: "Comparer les niveaux de vie en parité de pouvoir d’achat", competence: "Corriger un revenu des différences de prix entre pays.",
    gen: () => ({ ya: rnd(85, 105) * 1000, pa: rnd(130, 160), yb: rnd(40, 60) * 1000, pb: rnd(60, 90) }),
    enonce: (p) => P(`Converti en dollars, le PIB par habitant du pays A est de <b>${fmt(p.ya)} $</b>, et celui du pays B de <b>${fmt(p.yb)} $</b>. Mais le niveau des prix est de <b>${p.pa}</b> dans le pays A et de <b>${p.pb}</b> dans le pays B (base 100 = moyenne de référence).`, "Calculez le PIB par habitant de chaque pays en parité de pouvoir d’achat (PPA), c’est-à-dire corrigé du niveau des prix. Arrondissez au dollar."),
    champs: [{ label: "Pays A en PPA", unite: "$", tol: 2 }, { label: "Pays B en PPA", unite: "$", tol: 2 }],
    reponses: (p) => [Math.round(p.ya / (p.pa / 100)), Math.round(p.yb / (p.pb / 100))],
    indice: "Revenu en PPA = revenu ÷ (niveau des prix ÷ 100).",
    correction: (p) => { const a = p.ya / (p.pa / 100), b = p.yb / (p.pb / 100); return P(`Pays A : ${fmt(p.ya)} ÷ ${fmt(p.pa / 100, 2)} ≈ <b>${fmt(Math.round(a))} $</b>. Pays B : ${fmt(p.yb)} ÷ ${fmt(p.pb / 100, 2)} ≈ <b>${fmt(Math.round(b))} $</b>.`, `Au taux de change, A est ${fmt(p.ya / p.yb, 2)} fois plus riche que B ; en PPA, seulement ${fmt(a / b, 2)} fois.`, "La Suisse est dans le cas du pays A : son revenu par habitant est parmi les plus élevés du monde, mais ses prix aussi, de sorte que l’écart avec ses voisins est plus faible en parité de pouvoir d’achat."); } },

  { id: "cr3-coree", theme: "croissance", niveau: 3, type: "qcm", notion: "institutions-inclusives",
    titre: "Deux Corées, deux destins", competence: "Expliquer les écarts de richesse par les institutions.",
    enonce: P("Jusqu’en 1945, la Corée du Nord et la Corée du Sud partageaient la même histoire, la même langue et la même culture. Aujourd’hui, la Corée du Sud est un pays riche et la Corée du Nord l’un des plus pauvres du monde. Quelle explication privilégient Acemoglu et Robinson ?"),
    options: ["Le climat, plus favorable au Sud.", "Les ressources naturelles, plus abondantes au Sud.", "Les institutions : économie de marché et démocratie progressive au Sud, institutions extractives d’une dictature héréditaire au Nord.", "La culture, plus favorable au travail au Sud."], c: 2,
    explication: P("Pour Acemoglu et Robinson, c’est une sorte d’« expérience naturelle » : géographie, culture et histoire étaient semblables, seules les <b>institutions</b> ont divergé. Au Sud, des institutions de plus en plus <b>inclusives</b> ont encouragé l’investissement, l’éducation et l’innovation ; au Nord, des institutions <b>extractives</b> ont permis à une élite de capter les ressources, sans incitation à produire.", "Le Nord possède d’ailleurs davantage de ressources minières que le Sud, ce qui écarte l’explication par les ressources.") },

  { id: "cr3-solow-calc", theme: "croissance", niveau: 3, type: "calcul",
    titre: "L’état stationnaire de Solow", competence: "Calculer le revenu de long terme dans un modèle simple.",
    gen: () => ({ s: pick([0.15, 0.2, 0.25, 0.3, 0.35, 0.4]), nd: pick([0.05, 0.08, 0.1]) }),
    enonce: (p) => P("Dans une version simple du modèle de Solow, la production par travailleur est y = √k (k : capital par travailleur). Chaque année, on épargne et investit une part s de la production, et le capital par travailleur diminue au taux (n + δ), sous l’effet de la croissance de la population et de l’usure des machines.", `À l’état stationnaire, l’investissement compense exactement cette diminution : <b>s × √k = (n + δ) × k</b>. On a ici s = <b>${fmt(p.s, 2)}</b> et n + δ = <b>${fmt(p.nd, 2)}</b>.`, "Calculez le capital par travailleur et la production par travailleur à l’état stationnaire. Arrondissez à deux décimales."),
    champs: [{ label: "Capital k*", unite: "", tol: 0.02 }, { label: "Production y*", unite: "", tol: 0.011 }],
    reponses: (p) => [Math.round(Math.pow(p.s / p.nd, 2) * 100) / 100, Math.round((p.s / p.nd) * 100) / 100],
    indice: "Écrivez l’égalité de l’état stationnaire avec y = √k, puis cherchez comment isoler √k.",
    correction: (p) => { const y = p.s / p.nd; return P(`De s × √k = (n + δ) × k, on tire √k* = s ÷ (n + δ) = ${fmt(p.s, 2)} ÷ ${fmt(p.nd, 2)} = ${fmt(y, 2)}.`, `Donc k* = ${fmt(y, 2)}² ≈ <b>${fmt(y * y, 2)}</b>, et y* = √k* = <b>${fmt(y, 2)}</b>.`, "Un pays qui épargne davantage atteint un revenu par travailleur plus élevé, mais une fois à l’état stationnaire, sa croissance par habitant s’arrête : seul le progrès technique peut la relancer."); } },

  { id: "cr3-vf-ralentissement", theme: "croissance", niveau: 3, type: "vf", notion: "stagnation-seculaire",
    titre: "Le ralentissement de la croissance", competence: "Connaître les débats sur la croissance future des pays riches.",
    affirmations: [
      ["Robert Gordon soutient que les inventions récentes ont un effet sur la productivité comparable à celui de l’électricité ou du moteur à combustion.", false, "C’est l’inverse : selon Gordon, les grandes inventions de 1870-1970 avaient un impact sans équivalent, et les innovations numériques ont un effet plus limité."],
      ["En 1987, Robert Solow remarquait qu’on voyait les ordinateurs partout, sauf dans les statistiques de productivité.", true, "C’est le « paradoxe de la productivité ». Les gains liés à l’informatique sont finalement apparus aux États-Unis à la fin des années 1990, puis ont ralenti."],
      ["Selon la thèse de la stagnation séculaire, un excès d’épargne par rapport à l’investissement peut freiner durablement la croissance.", true, "C’est l’argument de Larry Summers (2013), repris d’Alvin Hansen (1938)."],
      ["Tous les économistes s’accordent à dire que l’intelligence artificielle augmentera fortement la croissance dès les prochaines années.", false, "Le débat est ouvert : certains attendent de forts gains de productivité, d’autres, comme Daron Acemoglu, des effets plus modestes à moyen terme."]
    ] },

  { id: "cr3-decroissance", theme: "croissance", niveau: 3, type: "redaction", notion: "pib",
    titre: "Croissance verte ou décroissance ?", competence: "Construire une argumentation sur les limites écologiques de la croissance (15 à 25 lignes).",
    enonce: P("Pour respecter l’Accord de Paris, la Suisse s’est engagée à atteindre zéro émission nette de gaz à effet de serre d’ici 2050. Certains pensent qu’on peut y parvenir en continuant à croître, grâce aux technologies propres ; d’autres jugent qu’il faudra réduire la production dans les pays riches.", "<b>Consigne :</b> la lutte contre le changement climatique est-elle compatible avec la poursuite de la croissance économique ? Présentez les deux positions, en utilisant au moins une notion d’économie, puis concluez."),
    criteres: ["La réponse présente la croissance verte : découplage entre production et émissions, innovation, énergies renouvelables, efficacité, taxe carbone…", "Elle présente la décroissance ou post-croissance : limites physiques, effet rebond, découplage trop lent, critique du PIB comme objectif…", "Elle utilise au moins une notion d’économie : PIB et ses limites, externalité, progrès technique, prix du carbone…", "Elle s’appuie sur au moins un exemple ou un fait : baisse des émissions en Suisse ou en Europe malgré la croissance, émissions importées, etc.", "Elle conclut de façon argumentée et nuancée."],
    corrige: P("<b>Croissance verte :</b> pour ses partisans, la croissance peut se poursuivre si l’on <b>découple</b> la production des émissions, grâce aux énergies renouvelables, à l’efficacité énergétique et à l’innovation. Les émissions de gaz à effet de serre sont une <b>externalité</b> : en leur donnant un prix, par une taxe carbone comme le propose William Nordhaus, on oriente les choix vers des solutions propres. Plusieurs pays européens, dont la Suisse, ont réduit leurs émissions territoriales tout en continuant à croître.", "<b>Décroissance :</b> pour d’autres, ce découplage est trop lent et partiel : les émissions liées aux importations restent élevées, et les gains d’efficacité sont souvent annulés par une consommation accrue (effet rebond). Ils jugent qu’il faudra réduire la production matérielle dans les pays riches et remplacer le PIB par d’autres objectifs de bien-être.", "<b>Conclusion :</b> la question n’est pas seulement de croître ou non, mais de savoir <b>quelle</b> croissance : une transformation rapide de l’énergie et des transports, un prix du carbone et une mesure du progrès qui ne se limite pas au PIB semblent nécessaires dans les deux visions.") },

  { id: "cr3-idh", theme: "croissance", niveau: 3, type: "document", notion: "capabilites",
    titre: "Le PIB et le développement humain", competence: "Comparer des pays avec plusieurs indicateurs.",
    enonce: P("Voici trois pays fictifs :") +
      `<table><thead><tr><th>Pays</th><th>PIB par habitant (PPA)</th><th>Espérance de vie</th><th>Durée moyenne de scolarisation</th></tr></thead><tbody>
      <tr><td>Arland</td><td>58 000 $</td><td>71 ans</td><td>8 ans</td></tr><tr><td>Belmont</td><td>34 000 $</td><td>82 ans</td><td>13 ans</td></tr><tr><td>Corvin</td><td>12 000 $</td><td>74 ans</td><td>10 ans</td></tr></tbody></table>` +
      P("Quelle conclusion est la plus juste ?"),
    options: ["Arland est le pays le plus développé, car il a le PIB par habitant le plus élevé.", "Belmont pourrait avoir un indice de développement humain supérieur à celui d’Arland, grâce à sa santé et à son éducation, malgré un revenu plus faible.", "Corvin a forcément le développement humain le plus faible dans tous les domaines.", "Le revenu n’a aucune importance pour le développement humain."], c: 1,
    explication: P("L’<b>indice de développement humain</b> (IDH), conçu en 1990 avec Amartya Sen et Mahbub ul Haq, combine trois dimensions : la santé (espérance de vie), l’éducation et le niveau de vie (revenu). Arland est le plus riche, mais Belmont fait beaucoup mieux en santé et en éducation : son IDH peut être plus élevé.", "Pour Sen, le revenu n’est qu’un moyen : ce qui compte, ce sont les <b>capabilités</b>, ce que les personnes peuvent réellement être et faire. Le revenu reste une dimension importante, et Corvin, plus pauvre, a ici une espérance de vie supérieure à celle d’Arland.") }
  ]);
})();
