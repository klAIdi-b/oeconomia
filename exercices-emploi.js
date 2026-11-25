/* Œconomia — Entraînement : thème « Emploi et chômage » (24 exercices, trois niveaux). */
(function () {
  const X = OEC.exo, { rnd, pick, fmt } = X;
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");

  X.theme({ id: "emploi", nom: "Emploi et chômage",
    intro: "Comment mesure-t-on le chômage, pourquoi existe-t-il même quand l’économie va bien, et que peuvent faire les politiques publiques ? Ces exercices vous entraînent à calculer des taux, à raisonner sur les flux du marché du travail et à confronter les grandes explications du chômage.",
    notions: ["taux-naturel", "hysterese", "demande-effective", "courbe-phillips", "concurrence-imparfaite", "destruction-creatrice"] });

  X.add([
  /* =========================== NIVEAU 1 : DÉCOUVERTE =========================== */
  { id: "em1-bit", theme: "emploi", niveau: 1, type: "qcm", notion: "taux-naturel",
    titre: "Qui est chômeur ?", competence: "Appliquer la définition du chômage du Bureau international du travail.",
    enonce: P("Selon la définition du Bureau international du travail (BIT), laquelle de ces personnes est au chômage ?"),
    options: ["Lucie, 20 ans, étudiante à plein temps, qui ne cherche pas d’emploi.", "Paul, 66 ans, retraité.", "Sara, 34 ans, licenciée il y a deux mois, qui envoie des candidatures et pourrait commencer dès demain.", "Marc, 45 ans, qui travaille à 50 % et voudrait travailler davantage."], c: 2, pourquoi: ["Lucie ne cherche pas d’emploi : elle est inactive, pas au chômage.", "Paul est retraité et ne cherche pas d’emploi : il est inactif.", null, "Marc a un emploi : il est en sous-emploi, mesuré à part, pas au chômage."],
    explication: P("Pour le BIT, est chômeur celui qui, à la fois, <b>n’a pas d’emploi</b>, <b>cherche activement</b> un emploi et est <b>disponible</b> pour travailler rapidement. C’est le cas de Sara.", "Lucie et Paul sont <b>inactifs</b> : ils ne cherchent pas d’emploi. Marc a un emploi : il est en <b>sous-emploi</b>, une situation que les statistiques mesurent à part.") },

  { id: "em1-taux", theme: "emploi", niveau: 1, type: "calcul", notion: "taux-naturel",
    titre: "Calculer un taux de chômage", competence: "Calculer le taux de chômage à partir de la population active.",
    gen: () => ({ occ: rnd(180, 260) * 1000, ch: rnd(5, 18) * 1000 }),
    enonce: (p) => P(`Dans un canton, <b>${fmt(p.occ)}</b> personnes ont un emploi et <b>${fmt(p.ch)}</b> sont au chômage.`, "Calculez la population active, puis le taux de chômage (arrondi à une décimale)."),
    champs: [{ label: "Population active", unite: "personnes", tol: 0.5 }, { label: "Taux de chômage", unite: "%", tol: 0.1 }],
    reponses: (p) => [p.occ + p.ch, Math.round((p.ch / (p.occ + p.ch)) * 1000) / 10],
    indice: "Population active = personnes en emploi + chômeurs. Taux de chômage = chômeurs ÷ population active × 100.",
    correction: (p) => { const a = p.occ + p.ch; return P(`Population active = ${fmt(p.occ)} + ${fmt(p.ch)} = <b>${fmt(a)}</b> personnes.`, `Taux de chômage = ${fmt(p.ch)} ÷ ${fmt(a)} × 100 ≈ <b>${fmt(100 * p.ch / a, 1)} %</b>.`, "Attention : on divise par la population <b>active</b>, et non par la population totale, qui comprend aussi les enfants, les étudiants et les retraités."); } },

  { id: "em1-points", theme: "emploi", niveau: 1, type: "calcul", notion: "taux-naturel",
    titre: "Points de pourcentage ou pourcentage ?", competence: "Distinguer un écart en points d’un écart en pourcentage.",
    gen: () => ({ a: pick([3.8, 4.2, 4.6, 5.1, 5.3, 6.0]), b: pick([2.0, 2.4, 2.7, 3.0]) }),
    enonce: (p) => P(`Le taux de chômage est de <b>${fmt(p.a, 1)} %</b> dans un canton et de <b>${fmt(p.b, 1)} %</b> en moyenne suisse.`, "Calculez l’écart en points de pourcentage, puis de combien de pour cent le taux du canton est supérieur à la moyenne (arrondi à l’unité)."),
    champs: [{ label: "Écart", unite: "points", tol: 0.05 }, { label: "Plus élevé de", unite: "%", tol: 1 }],
    reponses: (p) => [Math.round((p.a - p.b) * 10) / 10, Math.round(((p.a - p.b) / p.b) * 100)],
    indice: "Écart en points = différence des deux taux. Écart en % = différence ÷ taux de référence × 100.",
    correction: (p) => P(`Écart en points : ${fmt(p.a, 1)} − ${fmt(p.b, 1)} = <b>${fmt(p.a - p.b, 1)} points de pourcentage</b>.`, `Écart relatif : ${fmt(p.a - p.b, 1)} ÷ ${fmt(p.b, 1)} × 100 ≈ <b>${fmt(100 * (p.a - p.b) / p.b, 0)} %</b>.`, `Les deux affirmations sont justes, mais elles ne disent pas la même chose : « le chômage est plus élevé de ${fmt(p.a - p.b, 1)} points » et « le chômage est ${fmt(100 * (p.a - p.b) / p.b, 0)} % plus élevé ». Les confondre est une erreur fréquente dans les médias.`) },

  { id: "em1-vf-types", theme: "emploi", niveau: 1, type: "vf", notion: "taux-naturel",
    titre: "Les formes de chômage", competence: "Associer une situation à une forme de chômage.",
    affirmations: [
      ["Une ingénieure qui a démissionné et prend trois mois pour trouver un poste qui lui convient est en chômage frictionnel.", true, "Le chômage frictionnel correspond au temps nécessaire pour passer d’un emploi à un autre."],
      ["Un ouvrier du textile qui ne trouve pas de travail parce que les entreprises de sa région cherchent des informaticiens est en chômage conjoncturel.", false, "C’est du chômage <b>structurel</b> : ses compétences ne correspondent pas aux emplois disponibles. Le chômage conjoncturel vient d’un manque général de demande."],
      ["Pendant une récession, quand les entreprises vendent moins et licencient, le chômage keynésien augmente.", true, "Le manque de débouchés pousse les entreprises à réduire leur production et leurs effectifs."],
      ["Même dans une économie en très bonne santé, le chômage ne descend jamais à zéro.", true, "Il reste toujours du chômage frictionnel et structurel : c’est l’idée du taux de chômage naturel."]
    ] },

  { id: "em1-seco-bit", theme: "emploi", niveau: 1, type: "qcm", notion: "taux-naturel",
    titre: "Deux façons de compter les chômeurs", competence: "Comprendre pourquoi deux statistiques du chômage diffèrent.",
    enonce: P("En Suisse, le SECO publie chaque mois un taux de chômage d’environ 2 à 3 %, tandis que l’Office fédéral de la statistique publie un taux au sens du BIT d’environ 4 à 5 %. Pourquoi cette différence ?"),
    options: ["L’un des deux chiffres est faux.", "Le SECO compte les personnes inscrites dans un office régional de placement ; le BIT, mesuré par une enquête, inclut aussi les chômeurs qui ne sont pas inscrits.", "Le SECO compte aussi les retraités.", "Le BIT ne compte que les jeunes."], c: 1, pourquoi: ["Les deux chiffres sont justes : ils ne mesurent pas la même chose.", null, "Le SECO ne compte que des personnes inscrites qui cherchent un emploi : les retraités n’en font pas partie.", "Le taux au sens du BIT couvre toutes les personnes en âge de travailler, pas seulement les jeunes."],
    explication: P("Le taux du <b>SECO</b> repose sur les personnes <b>inscrites</b> dans un office régional de placement (ORP). Le taux au sens du <b>BIT</b>, calculé par l’OFS à partir de l’Enquête suisse sur la population active, compte toutes les personnes sans emploi qui cherchent et sont disponibles, <b>inscrites ou non</b> : par exemple celles qui n’ont pas droit aux indemnités ou ne s’inscrivent pas.", "Le chiffre du BIT permet les comparaisons internationales ; celui du SECO est publié plus rapidement et en détail par canton.") },

  { id: "em1-keynes", theme: "emploi", niveau: 1, type: "qcm", notion: "demande-effective",
    titre: "Le chômage selon Keynes", competence: "Identifier l’explication keynésienne du chômage.",
    enonce: P("Pendant la Grande Dépression, certains économistes recommandaient de baisser les salaires pour réduire le chômage. Quelle est la réponse de Keynes ?"),
    options: ["Il s’y oppose : baisser les salaires réduit aussi les revenus et la consommation, donc les débouchés des entreprises ; il faut relancer la demande.", "Il approuve : des salaires plus bas rendent l’embauche plus rentable.", "Il propose d’interdire les licenciements.", "Il estime que le chômage disparaîtra de lui-même en quelques semaines."], c: 0, pourquoi: [null, "C’était la position de ses adversaires. Pour Keynes, baisser les salaires réduit aussi le pouvoir d’achat, donc les ventes des entreprises.", "Keynes ne propose pas d’interdire les licenciements : il veut soutenir la demande pour que les entreprises aient de nouveau besoin d’embaucher.", "C’est précisément ce que Keynes conteste : une économie peut rester longtemps avec un chômage élevé si la demande manque."],
    explication: P("Pour <b>Keynes</b>, les entreprises n’embauchent pas parce qu’elles ne vendent pas : le chômage vient d’une <b>demande effective</b> insuffisante. Baisser les salaires, c’est aussi baisser le pouvoir d’achat des salariés, donc la demande, ce qui peut aggraver la situation.", "Il recommande de soutenir la demande, si nécessaire par des dépenses publiques, dont l’effet est amplifié par le multiplicateur.") },

  { id: "em1-rht", theme: "emploi", niveau: 1, type: "qcm", notion: "hysterese",
    titre: "La réduction de l’horaire de travail", competence: "Comprendre un instrument suisse de politique de l’emploi.",
    enonce: P("Pendant la pandémie de 2020, des centaines de milliers de salariés suisses ont été placés en « réduction de l’horaire de travail » (RHT) : l’assurance chômage compensait une grande partie des heures non travaillées. Quel était l’objectif principal ?"),
    options: ["Réduire les salaires de façon permanente.", "Éviter les licenciements pendant une baisse temporaire d’activité, pour que les entreprises gardent leurs employés et leurs compétences.", "Obliger les salariés à changer de métier.", "Augmenter les bénéfices des entreprises."], c: 1, pourquoi: ["La RHT est temporaire : elle compense les heures perdues, et le travail reprend normalement quand l’activité revient.", null, "La RHT sert au contraire à garder les salariés dans leur emploi et dans leur entreprise.", "La RHT ne vise pas les bénéfices : elle évite des licenciements et préserve les compétences pendant une crise passagère."],
    explication: P("La RHT permet à une entreprise touchée par une baisse <b>temporaire</b> d’activité de réduire le temps de travail plutôt que de licencier. Les salariés gardent leur emploi et leurs liens avec l’entreprise ; l’entreprise conserve ses compétences et peut redémarrer vite.", "Elle limite ainsi l’<b>hystérèse</b> : le risque qu’un chômage temporaire devienne durable. Son inconvénient est de pouvoir maintenir trop longtemps des emplois dans des activités qui déclinent.") },

  { id: "em1-tableau", theme: "emploi", niveau: 1, type: "document", notion: "taux-naturel",
    titre: "Lire des statistiques de chômage", competence: "Lire et comparer des taux de chômage.",
    enonce: P("Taux de chômage au sens du SECO, fin octobre 2026 (personnes inscrites) :") +
      `<table><thead><tr><th>Suisse</th><th>Genève</th><th>Jeunes de 15 à 24 ans (Suisse)</th></tr></thead><tbody><tr><td>3,0 %</td><td>5,3 %</td><td>3,2 %</td></tr></tbody></table>` +
      P("Source : SECO, « La situation sur le marché du travail en octobre 2026 ». Quelle affirmation est correcte ?"),
    options: ["Genève compte 5,3 % de chômeurs de plus que la Suisse.", "Le taux genevois est supérieur de 2,3 points à la moyenne suisse, soit plus de 75 % de plus.", "Les jeunes ont un taux de chômage plus faible que l’ensemble de la population.", "Le taux suisse inclut les personnes qui ne sont pas inscrites dans un office de placement."], c: 1, pourquoi: ["5,3 % est le taux genevois, pas l’écart. L’écart est de 5,3 − 3,0 = 2,3 points.", null, "3,2 % est plus élevé que 3,0 % : les jeunes ont un taux un peu plus haut que l’ensemble.", "C’est l’inverse : le taux du SECO ne compte que les personnes inscrites ; le taux au sens du BIT inclut aussi les autres."],
    explication: P("5,3 − 3,0 = <b>2,3 points</b> de pourcentage ; en termes relatifs, 2,3 ÷ 3,0 ≈ 77 % de plus. Les jeunes ont un taux légèrement <b>plus élevé</b> (3,2 %) que l’ensemble. Le taux du SECO ne compte que les personnes <b>inscrites</b> ; le taux au sens du BIT est plus élevé.", "Ces chiffres sont aussi présentés dans la rubrique « Actualité » du site.") },

  /* =========================== NIVEAU 2 : INTERMÉDIAIRE =========================== */
  { id: "em2-flux", theme: "emploi", niveau: 2, type: "calcul", notion: "taux-naturel",
    titre: "Les flux du chômage", competence: "Calculer l’évolution du chômage à partir des entrées et des sorties.",
    gen: () => { const u0 = rnd(100, 160) * 1000, ent = rnd(20, 35) * 1000, sor = rnd(18, 36) * 1000, pa = rnd(48, 52) * 100000; return { u0, ent, sor, pa }; },
    enonce: (p) => P(`Au début du mois, un pays compte <b>${fmt(p.u0)}</b> chômeurs. Pendant le mois, <b>${fmt(p.ent)}</b> personnes deviennent chômeuses et <b>${fmt(p.sor)}</b> sortent du chômage. La population active est de <b>${fmt(p.pa)}</b> personnes.`, "Combien y a-t-il de chômeurs à la fin du mois, et quel est le taux de chômage (arrondi à deux décimales) ?"),
    champs: [{ label: "Chômeurs", unite: "personnes", tol: 0.5 }, { label: "Taux", unite: "%", tol: 0.011 }],
    reponses: (p) => { const u = p.u0 + p.ent - p.sor; return [u, Math.round((u / p.pa) * 10000) / 100]; },
    indice: "Chômeurs en fin de mois = chômeurs au début + entrées − sorties.",
    correction: (p) => { const u = p.u0 + p.ent - p.sor; return P(`Chômeurs en fin de mois = ${fmt(p.u0)} + ${fmt(p.ent)} − ${fmt(p.sor)} = <b>${fmt(u)}</b>.`, `Taux = ${fmt(u)} ÷ ${fmt(p.pa)} × 100 ≈ <b>${fmt(100 * u / p.pa, 2)} %</b>.`, `Le solde (${fmt(p.ent - p.sor)}) est petit comparé aux flux : chaque mois, des dizaines de milliers de personnes entrent au chômage et en sortent. Le taux de chômage n’est que le résultat de ce mouvement permanent.`); } },

  { id: "em2-okun", theme: "emploi", niveau: 2, type: "calcul", notion: "demande-effective",
    titre: "La loi d’Okun", competence: "Relier croissance et variation du chômage.",
    gen: () => ({ g: pick([-3, -1, 0, 1, 1.5, 2, 3, 4]) }),
    enonce: (p) => P("Dans un pays, la loi d’Okun est estimée ainsi : <b>variation du taux de chômage = −0,5 × (croissance du PIB − 2)</b>, en points de pourcentage. Autrement dit, il faut une croissance de 2 % pour que le chômage reste stable.", `Cette année, la croissance est de <b>${fmt(p.g)} %</b>. De combien de points le taux de chômage varie-t-il ? (Signe moins s’il baisse.)`),
    champs: [{ label: "Variation", unite: "points", tol: 0.01 }],
    reponses: (p) => [-0.5 * (p.g - 2)],
    indice: "Remplacez la croissance dans la formule et faites attention aux signes.",
    correction: (p) => { const v = -0.5 * (p.g - 2); return P(`Variation = −0,5 × (${fmt(p.g)} − 2) = −0,5 × (${fmt(p.g - 2)}) = <b>${fmt(v)} point${Math.abs(v) > 1 ? "s" : ""}</b>.`, v > 0 ? "La croissance est inférieure à 2 % : elle ne suffit pas à absorber la hausse de la productivité et de la population active, et le chômage augmente." : v < 0 ? "La croissance dépasse 2 % : les entreprises embauchent davantage, et le chômage baisse." : "La croissance est juste suffisante pour maintenir le chômage stable.", "L’économiste Arthur Okun a mis en évidence cette relation aux États-Unis en 1962. Ses coefficients varient selon les pays et les époques."); } },

  { id: "em2-salaire-min", theme: "emploi", niveau: 2, type: "qcm", notion: "concurrence-imparfaite",
    titre: "Le salaire minimum dans le modèle concurrentiel", competence: "Appliquer le raisonnement d’offre et de demande au marché du travail.",
    enonce: P("Sur un marché du travail parfaitement concurrentiel, le salaire d’équilibre des serveurs est de 21 francs de l’heure. Le canton fixe un salaire minimum de 24 francs. Que prévoit le modèle ?"),
    options: ["Le nombre de personnes prêtes à travailler augmente et les employeurs veulent embaucher moins : un chômage apparaît.", "L’emploi augmente, car les salariés dépensent plus.", "Rien ne change, car le salaire minimum est inférieur à l’équilibre.", "Le salaire de marché redescend à 21 francs."], c: 0,
    explication: P("Dans le modèle concurrentiel, le salaire minimum est un <b>prix plancher</b> au-dessus de l’équilibre : plus de personnes veulent travailler, mais les employeurs demandent moins de travail. L’écart est du chômage.", "Les études empiriques nuancent cette prédiction : quand les employeurs ont un pouvoir de marché (<b>monopsone</b>), un salaire minimum modéré peut ne pas réduire l’emploi, voire l’augmenter. Genève et Neuchâtel ont des salaires minimaux cantonaux parmi les plus élevés du monde.") },

  { id: "em2-vf-hysterese", theme: "emploi", niveau: 2, type: "vf", notion: "hysterese",
    titre: "Le chômage de longue durée", competence: "Comprendre pourquoi le chômage peut devenir persistant.",
    affirmations: [
      ["Plus une personne reste longtemps au chômage, plus il lui est difficile de retrouver un emploi.", true, "Elle perd des compétences, des contacts professionnels et parfois confiance ; certains employeurs se méfient des longues interruptions."],
      ["Selon la théorie de l’hystérèse, une récession ne peut avoir que des effets temporaires sur le chômage.", false, "C’est l’inverse : selon Blanchard et Summers (1986), une récession peut laisser des traces durables, car le chômage d’aujourd’hui augmente le chômage de demain."],
      ["Les chômeurs de longue durée pèsent peu sur les négociations salariales.", true, "Ils sont moins considérés comme des concurrents par les salariés en place (les « insiders »), qui peuvent obtenir des hausses de salaires malgré le chômage."],
      ["Des politiques de formation et d’accompagnement peuvent réduire le chômage de longue durée.", true, "C’est le rôle des mesures actives du marché du travail, comme celles proposées par les offices régionaux de placement en Suisse."]
    ] },

  { id: "em2-appariement", theme: "emploi", niveau: 2, type: "qcm", notion: "taux-naturel",
    titre: "Des chômeurs et des postes vacants", competence: "Expliquer la coexistence de chômage et d’emplois non pourvus.",
    enonce: P("En Suisse, de nombreux employeurs disent ne pas trouver de personnel, par exemple dans les soins, l’informatique ou la construction, alors que plus de 100 000 personnes sont inscrites au chômage. Comment l’expliquer ?"),
    options: ["C’est impossible : s’il y a des postes libres, il ne peut pas y avoir de chômeurs.", "Les chômeurs refusent tous de travailler.", "Les compétences, les régions ou les conditions de travail des postes ne correspondent pas toujours à celles des chômeurs, et la rencontre prend du temps.", "Les entreprises inventent des postes vacants."], c: 2,
    explication: P("C’est un problème d’<b>appariement</b> : les postes vacants et les chômeurs ne se correspondent pas toujours, par la qualification, le lieu, les horaires ou le salaire, et il faut du temps pour qu’ils se trouvent. Diamond, Mortensen et Pissarides ont reçu le Nobel en 2010 pour l’analyse de ces frictions.", "Les remèdes sont la formation, la mobilité, de meilleurs services de placement, et parfois l’amélioration des conditions de travail dans les métiers en pénurie.") },

  { id: "em2-duree", theme: "emploi", niveau: 2, type: "calcul", notion: "hysterese",
    titre: "La durée moyenne du chômage", competence: "Relier un taux de sortie à une durée moyenne.",
    gen: () => ({ s: pick([10, 12.5, 15, 20, 25, 30, 40]) }),
    enonce: (p) => P(`Chaque mois, <b>${fmt(p.s)} %</b> des chômeurs retrouvent un emploi (ou sortent du chômage). On suppose que cette probabilité est la même pour tous.`, "Quelle est la durée moyenne d’un épisode de chômage, en mois ? (Elle est égale à l’inverse de la probabilité mensuelle de sortie.)"),
    champs: [{ label: "Durée moyenne", unite: "mois", tol: 0.05 }],
    reponses: (p) => [Math.round((100 / p.s) * 10) / 10],
    indice: "Durée moyenne = 1 ÷ probabilité de sortie (exprimée en fraction, pas en %).",
    correction: (p) => P(`Durée moyenne = 1 ÷ ${fmt(p.s / 100, 3)} = <b>${fmt(100 / p.s, 1)} mois</b>.`, "Si la probabilité de sortie baisse, par exemple pendant une récession, la durée moyenne du chômage s’allonge et le risque de chômage de longue durée augmente. En réalité, la probabilité de sortie diminue souvent avec l’ancienneté au chômage, ce qui aggrave l’hystérèse.") },

  { id: "em2-jeunes", theme: "emploi", niveau: 2, type: "redaction", notion: "taux-naturel",
    titre: "Le chômage des jeunes en Suisse", competence: "Expliquer une différence entre pays (10 à 15 lignes).",
    enonce: P("Dans plusieurs pays européens, comme l’Espagne, l’Italie ou la France, le chômage des 15-24 ans dépasse souvent 15 ou 20 %. En Suisse, il reste nettement plus bas.", "<b>Consigne :</b> proposez une explication de cette différence en mobilisant au moins deux facteurs, et montrez par quel mécanisme ils réduisent le chômage des jeunes."),
    criteres: ["La réponse mobilise la formation professionnelle duale (apprentissage en entreprise et à l’école).", "Elle explique le mécanisme : expérience professionnelle, compétences adaptées aux besoins des entreprises, transition directe vers l’emploi, réseau…", "Elle cite au moins un autre facteur : marché du travail flexible, bonne conjoncture, faible chômage général, partenariat social…", "Elle mentionne une limite ou une nuance : différences de mesure (SECO, BIT), jeunes sans formation, difficultés après l’apprentissage…", "La réponse est structurée et conclut."],
    corrige: P("Le principal facteur est la <b>formation professionnelle duale</b> : environ deux tiers des jeunes Suisses suivent un apprentissage, partagé entre l’entreprise et l’école professionnelle. Ils acquièrent une expérience reconnue et des compétences adaptées aux besoins des employeurs, et beaucoup sont engagés par leur entreprise formatrice. La transition entre l’école et l’emploi, très difficile dans d’autres pays, est ainsi facilitée.", "D’autres facteurs jouent : un marché du travail plutôt flexible, qui facilite l’embauche, un chômage général faible et une économie prospère, ainsi qu’un partenariat social qui associe les entreprises à l’organisation des formations.", "Il faut toutefois nuancer : selon la définition du BIT, le chômage des jeunes est plus élevé que selon les chiffres du SECO, et les jeunes sans formation après l’école obligatoire restent nettement plus exposés.") },

  { id: "em2-nairu", theme: "emploi", niveau: 2, type: "qcm", notion: "courbe-phillips",
    titre: "Relancer au-delà du chômage naturel", competence: "Appliquer l’analyse de Friedman et Phelps.",
    enonce: P("Le taux de chômage d’un pays est égal à son taux de chômage naturel, estimé à 4 %. Le gouvernement veut le faire descendre à 2 % par une forte relance de la demande. Selon Friedman et Phelps, que va-t-il se passer ?"),
    options: ["Le chômage restera durablement à 2 %, sans autre effet.", "Le chômage baissera temporairement, mais l’inflation accélérera, puis le chômage reviendra vers 4 % quand les salariés anticiperont l’inflation.", "Le chômage augmentera immédiatement.", "L’inflation baissera, car la production augmente."], c: 1,
    explication: P("À court terme, la relance peut réduire le chômage, car les salaires et les anticipations ne s’ajustent pas tout de suite. Mais quand les salariés constatent l’inflation, ils réclament des hausses de salaires, et l’embauche revient à son niveau initial : le chômage retourne vers son <b>taux naturel</b>, avec une inflation plus élevée.", "Pour réduire durablement le chômage naturel, il faut agir sur ses causes structurelles : formation, appariement, règles du marché du travail.") },

  /* =========================== NIVEAU 3 : AVANCÉ =========================== */
  { id: "em3-equilibre", theme: "emploi", niveau: 3, type: "calcul", notion: "taux-naturel",
    titre: "Le chômage d’équilibre des flux", competence: "Calculer le taux de chômage stationnaire à partir des taux de transition.",
    gen: () => ({ s: pick([0.8, 1, 1.2, 1.5, 2, 2.5]), f: pick([15, 20, 25, 30, 40]) }),
    enonce: (p) => P(`Chaque mois, <b>${fmt(p.s)} %</b> des personnes en emploi perdent leur emploi (taux de séparation s), et <b>${fmt(p.f)} %</b> des chômeurs en retrouvent un (taux de retour à l’emploi f).`, "À long terme, le chômage se stabilise quand les entrées égalent les sorties. Le taux de chômage d’équilibre vaut alors <b>u* = s ÷ (s + f)</b>. Calculez-le (arrondi à deux décimales)."),
    champs: [{ label: "u*", unite: "%", tol: 0.011 }],
    reponses: (p) => [Math.round((p.s / (p.s + p.f)) * 10000) / 100],
    indice: "Utilisez s et f sous la même forme (en % ou en fraction), puis multipliez par 100.",
    correction: (p) => { const u = p.s / (p.s + p.f); return P(`À l’équilibre, s × emploi = f × chômage. Avec emploi = 1 − u, on obtient u* = s ÷ (s + f).`, `u* = ${fmt(p.s)} ÷ (${fmt(p.s)} + ${fmt(p.f)}) ≈ <b>${fmt(100 * u, 2)} %</b>.`, "Pour réduire ce chômage, il faut soit réduire les séparations (stabilité de l’emploi), soit accélérer le retour à l’emploi (placement, formation, incitations). C’est l’intuition de la théorie de la recherche d’emploi."); } },

  { id: "em3-okun-inverse", theme: "emploi", niveau: 3, type: "calcul", notion: "demande-effective",
    titre: "Quelle croissance pour réduire le chômage ?", competence: "Utiliser la loi d’Okun à l’envers.",
    gen: () => ({ d: pick([0.25, 0.5, 0.75, 1, 1.5]), k: pick([0.4, 0.5]), seuil: pick([1.5, 2, 2.5]) }),
    enonce: (p) => P(`Dans un pays, <b>variation du chômage = −${fmt(p.k)} × (croissance − ${fmt(p.seuil)})</b>, en points.`, `Le gouvernement veut faire baisser le taux de chômage de <b>${fmt(p.d)} point</b> en un an. Quelle croissance du PIB faut-il ?`),
    champs: [{ label: "Croissance nécessaire", unite: "%", tol: 0.01 }],
    reponses: (p) => [Math.round((p.seuil + p.d / p.k) * 100) / 100],
    indice: "Posez −" + "k × (g − seuil) = −Δ, puis isolez g.",
    correction: (p) => { const g = p.seuil + p.d / p.k; return P(`On veut −${fmt(p.k)} × (g − ${fmt(p.seuil)}) = −${fmt(p.d)}, donc g − ${fmt(p.seuil)} = ${fmt(p.d)} ÷ ${fmt(p.k)} = ${fmt(p.d / p.k)}.`, `Croissance nécessaire : g = ${fmt(p.seuil)} + ${fmt(p.d / p.k)} = <b>${fmt(g)} %</b>.`, "Une baisse rapide du chômage demande une croissance nettement supérieure à la croissance « normale », ce qui est rarement durable sans tension sur les prix."); } },

  { id: "em3-monopsone", theme: "emploi", niveau: 3, type: "calcul", notion: "concurrence-imparfaite",
    titre: "Le monopsone", competence: "Calculer l’emploi et le salaire d’un employeur dominant.",
    gen: () => { const b = pick([0.5, 1]); const Lm = rnd(10, 30) * (b === 0.5 ? 2 : 1); const a = rnd(8, 14); const v = a + 2 * b * Lm; return { a, b, Lm, v }; },
    enonce: (p) => P(`Un hôpital régional est le seul grand employeur d’infirmiers de sa vallée. Pour attirer L infirmiers, il doit payer un salaire horaire <b>w = ${p.a} + ${fmt(p.b)}L</b> à tous. Chaque infirmier rapporte à l’hôpital <b>${p.v} francs</b> de l’heure (productivité en valeur).`, `Embaucher un infirmier de plus coûte le salaire de ce nouvel infirmier, plus la hausse de salaire accordée à tous les autres : le coût marginal du travail vaut <b>${p.a} + ${fmt(2 * p.b)}L</b>. Combien d’infirmiers l’hôpital embauche-t-il, et à quel salaire ?`),
    champs: [{ label: "Emploi L", unite: "personnes", tol: 0.05 }, { label: "Salaire w", unite: "fr./h", tol: 0.05 }],
    reponses: (p) => [p.Lm, p.a + p.b * p.Lm],
    indice: "Le monopsone embauche jusqu’à ce que le coût marginal du travail soit égal à ce que rapporte un travailleur.",
    correction: (p) => { const Lc = (p.v - p.a) / p.b; return P(`Condition : ${p.a} + ${fmt(2 * p.b)}L = ${p.v}, donc L = (${p.v} − ${p.a}) ÷ ${fmt(2 * p.b)} = <b>${p.Lm} infirmiers</b>.`, `Salaire : w = ${p.a} + ${fmt(p.b)} × ${p.Lm} = <b>${fmt(p.a + p.b * p.Lm)} francs</b> de l’heure, bien en dessous de ce que rapporte un infirmier (${p.v} francs).`, `En concurrence, le salaire serait égal à ${p.v} francs et l’emploi à (${p.v} − ${p.a}) ÷ ${fmt(p.b)} = ${fmt(Lc)} infirmiers. Un salaire minimum fixé entre ${fmt(p.a + p.b * p.Lm)} et ${p.v} francs augmenterait à la fois les salaires et l’emploi : c’est l’argument de Joan Robinson.`); } },

  { id: "em3-card-krueger", theme: "emploi", niveau: 3, type: "qcm", notion: "concurrence-imparfaite",
    titre: "Une expérience naturelle", competence: "Comprendre la méthode des doubles différences.",
    enonce: P("En 1992, le New Jersey augmente son salaire minimum, mais pas la Pennsylvanie voisine. David Card et Alan Krueger comparent l’emploi dans les fast-foods des deux côtés de la frontière, avant et après la hausse. Pourquoi comparer avec la Pennsylvanie, plutôt que d’observer seulement le New Jersey ?"),
    options: ["Parce que les fast-foods de Pennsylvanie sont plus nombreux.", "Pour isoler l’effet du salaire minimum : la Pennsylvanie montre ce qui se serait passé sans la hausse, par exemple à cause de la conjoncture.", "Parce que la loi les y obligeait.", "Pour mesurer l’effet du salaire minimum sur les prix en Pennsylvanie."], c: 1,
    explication: P("L’emploi au New Jersey a pu évoluer pour bien d’autres raisons que le salaire minimum : conjoncture, saison, goûts des consommateurs. La Pennsylvanie, très semblable mais sans hausse, sert de <b>groupe de contrôle</b>. L’effet estimé est la différence entre l’évolution au New Jersey et l’évolution en Pennsylvanie : c’est la méthode des <b>doubles différences</b>.", "Card et Krueger n’ont pas trouvé de baisse de l’emploi. Card a reçu le Nobel en 2021 pour ces méthodes, qui permettent de tirer des conclusions causales d’« expériences naturelles ».") },

  { id: "em3-vf-theories", theme: "emploi", niveau: 3, type: "vf", notion: "taux-naturel",
    titre: "Les théories du marché du travail", competence: "Maîtriser plusieurs explications des salaires et du chômage.",
    affirmations: [
      ["Selon la théorie du salaire d’efficience, une entreprise peut avoir intérêt à payer plus que le salaire du marché.", true, "Un salaire plus élevé motive, fidélise et attire de meilleurs candidats. Henry Ford a ainsi doublé le salaire de ses ouvriers en 1914."],
      ["Selon la théorie des « insiders-outsiders », les chômeurs font fortement baisser les salaires des salariés en place.", false, "C’est l’inverse : les salariés en place (insiders) ont un pouvoir de négociation, car les remplacer coûte cher, et peuvent maintenir des salaires élevés malgré la présence de chômeurs (outsiders)."],
      ["Le modèle danois de « flexicurité » combine licenciements faciles, indemnisation généreuse et accompagnement intensif des chômeurs.", true, "Il vise à concilier la flexibilité pour les entreprises et la sécurité pour les travailleurs."],
      ["Une assurance chômage plus généreuse ne peut avoir que des effets négatifs sur l’emploi.", false, "Elle peut allonger la durée du chômage, mais elle permet aussi de chercher un emploi mieux adapté à ses compétences, ce qui améliore l’appariement et la productivité."]
    ] },

  { id: "em3-indemnite", theme: "emploi", niveau: 3, type: "calcul", notion: "hysterese",
    titre: "L’indemnité de chômage en Suisse", competence: "Appliquer une règle de calcul d’une assurance sociale (version simplifiée).",
    gen: () => ({ sal: pick([3500, 4800, 6200, 7500, 9000, 11000, 13500, 15000]), enfants: pick([true, false]) }),
    enonce: (p) => P("Version simplifiée de la règle suisse : l’assurance chômage verse <b>70 %</b> du salaire assuré, ou <b>80 %</b> pour les personnes qui ont des enfants à charge (ou un salaire bas, ce qu’on ignore ici). Le salaire assuré est plafonné à <b>12 350 francs</b> par mois.", `Une personne gagnait <b>${fmt(p.sal)} francs</b> par mois et ${p.enfants ? "<b>a des enfants à charge</b>" : "<b>n’a pas d’enfant à charge</b>"}. Quelle est son indemnité mensuelle, et quel pourcentage de son ancien salaire représente-t-elle (arrondi à l’unité) ?`),
    champs: [{ label: "Indemnité", unite: "fr.", tol: 1 }, { label: "Part de l’ancien salaire", unite: "%", tol: 1 }],
    reponses: (p) => { const t = p.enfants ? 0.8 : 0.7, ind = t * Math.min(p.sal, 12350); return [Math.round(ind), Math.round((ind / p.sal) * 100)]; },
    indice: "Prenez d’abord le salaire assuré (le salaire, ou 12 350 francs s’il est plus élevé), puis appliquez le taux.",
    correction: (p) => { const t = p.enfants ? 0.8 : 0.7, base = Math.min(p.sal, 12350), ind = t * base; return P(`Salaire assuré : ${p.sal > 12350 ? `le salaire dépasse le plafond, on retient 12 350 francs` : `${fmt(p.sal)} francs (sous le plafond)`}.`, `Indemnité : ${fmt(t * 100)} % × ${fmt(base)} = <b>${fmt(Math.round(ind))} francs</b>, soit <b>${fmt(Math.round(100 * ind / p.sal))} %</b> de l’ancien salaire.`, "Ce rapport s’appelle le <b>taux de remplacement</b>. Le plafond le réduit pour les hauts salaires. Dans la réalité, l’indemnité est calculée par jour, sa durée dépend de l’âge et de la durée de cotisation, et des cotisations sociales en sont déduites."); } },

  { id: "em3-ia", theme: "emploi", niveau: 3, type: "redaction", notion: "destruction-creatrice",
    titre: "L’intelligence artificielle va-t-elle créer un chômage de masse ?", competence: "Construire une argumentation sur le progrès technique et l’emploi (15 à 25 lignes).",
    enonce: P("Les outils d’intelligence artificielle savent désormais rédiger, traduire, programmer ou analyser des documents, des tâches réservées jusqu’ici à des emplois qualifiés. Certains annoncent un chômage de masse ; d’autres rappellent que les révolutions techniques passées ont finalement créé plus d’emplois qu’elles n’en ont détruits.", "<b>Consigne :</b> l’intelligence artificielle va-t-elle provoquer un chômage de masse ? Présentez les arguments des deux camps, en mobilisant au moins une notion d’économie, puis concluez."),
    criteres: ["La réponse présente l’argument optimiste : destruction créatrice, nouveaux métiers, gains de productivité, hausse des revenus et de la demande, précédents historiques…", "Elle présente l’argument pessimiste : rapidité du changement, tâches cognitives touchées, inégalités, chômage structurel de transition, difficulté de reconversion…", "Elle mobilise au moins une notion : destruction créatrice (Schumpeter), chômage structurel, productivité, complémentarité ou substitution du travail…", "Elle évoque des politiques publiques possibles : formation continue, assurance chômage, fiscalité, orientation de la technologie (Acemoglu)…", "Elle conclut de façon argumentée et nuancée."],
    corrige: P("<b>Les optimistes</b> rappellent que chaque grande innovation, de la machine à vapeur à l’informatique, a détruit des emplois mais en a créé davantage : c’est la <b>destruction créatrice</b> décrite par Schumpeter. L’IA peut augmenter la productivité, faire baisser les prix et donc augmenter le pouvoir d’achat et la demande d’autres biens et services. Elle peut aussi <b>compléter</b> le travail humain plutôt que le remplacer.", "<b>Les pessimistes</b> soulignent que l’IA touche des tâches intellectuelles qu’on croyait protégées, et qu’elle se diffuse très vite. Même si de nouveaux emplois apparaissent, les personnes qui perdent le leur ne pourront pas toutes se reconvertir : on risque un <b>chômage structurel</b> de transition et une hausse des inégalités. Daron Acemoglu insiste sur le fait que l’effet dépend de l’orientation donnée à la technologie : automatiser ou aider les travailleurs.", "<b>Conclusion :</b> un chômage de masse durable n’est pas inévitable, mais la transition peut être douloureuse. Tout dépend des politiques d’accompagnement : formation continue, assurance chômage, fiscalité, et choix collectifs sur l’usage de l’IA.") },

  { id: "em3-deux-pays", theme: "emploi", niveau: 3, type: "document", notion: "hysterese",
    titre: "Deux marchés du travail après une crise", competence: "Interpréter des indicateurs du chômage.",
    enonce: P("Deux pays fictifs ont connu la même récession il y a cinq ans. Voici leur situation aujourd’hui :") +
      `<table><thead><tr><th></th><th>Pays A</th><th>Pays B</th></tr></thead><tbody>
      <tr><td>Taux de chômage avant la crise</td><td>5 %</td><td>5 %</td></tr><tr><td>Taux de chômage aujourd’hui</td><td>5,2 %</td><td>8,5 %</td></tr>
      <tr><td>Part des chômeurs depuis plus d’un an</td><td>18 %</td><td>52 %</td></tr><tr><td>Recours au chômage partiel pendant la crise</td><td>massif</td><td>faible</td></tr></tbody></table>` +
      P("Quelle interprétation est la plus cohérente avec ces données ?"),
    options: ["Le pays B a mieux résisté, car son chômage était moins élevé pendant la crise.", "Le pays B semble subir une hystérèse : la récession a laissé un chômage durable, dominé par le chômage de longue durée ; le chômage partiel a pu aider le pays A à l’éviter.", "Les deux pays sont dans la même situation, car leur chômage d’avant la crise était identique.", "Le chômage du pays A est plus préoccupant, car il est supérieur à 5 %."], c: 1,
    explication: P("Dans le pays B, le chômage reste bien plus élevé qu’avant la crise, et plus de la moitié des chômeurs le sont depuis plus d’un an : la récession a laissé des « cicatrices », c’est l’<b>hystérèse</b>. Dans le pays A, le chômage est presque revenu à son niveau initial.", "Le recours massif au chômage partiel a pu permettre au pays A de garder les travailleurs dans l’emploi pendant la crise, évitant la perte de compétences et de liens avec les entreprises. Ces données suggèrent un lien, mais ne le prouvent pas à elles seules : d’autres différences entre les pays peuvent jouer.") }
  ]);
})();
