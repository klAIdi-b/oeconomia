/* Œconomia — Entraînement : thème « Autres visions de l’économie » (18 exercices, trois niveaux).
   Polanyi, Kalecki, Aglietta, Waring, Kelton : encastrement, monnaie endogène, travail non rémunéré, mode de régulation. */
(function () {
  const X = OEC.exo, { rnd, pick, fmt } = X;
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");

  X.theme({ id: "visions", nom: "Autres visions de l’économie",
    intro: "Le courant dominant n’est pas la seule manière de penser l’économie. Ces exercices vous font manipuler les idées des économistes hétérodoxes : l’économie encastrée dans la société, la monnaie créée par le crédit, le travail que le PIB ne compte pas, les institutions qui stabilisent le capitalisme.",
    notions: ["encastrement", "monnaie-endogene", "travail-non-remunere", "mode-regulation"] });

  X.add([
  /* =========================== NIVEAU 1 : DÉCOUVERTE =========================== */
  { id: "vi1-familles", theme: "visions", niveau: 1, type: "qcm", notion: "mode-regulation",
    titre: "Orthodoxe ou hétérodoxe ?", competence: "Situer un courant de pensée par rapport au courant dominant.",
    enonce: P("Laquelle de ces idées est défendue par un courant <b>hétérodoxe</b>, c’est-à-dire en marge du courant dominant ?"),
    options: ["Les individus comparent les coûts et les avantages avant de choisir.", "Un État qui émet sa propre monnaie ne peut pas faire faillite dans cette monnaie ; sa vraie limite est l’inflation.", "Un prix plafond inférieur au prix d’équilibre provoque une pénurie.", "Le commerce international repose sur l’avantage comparatif."], c: 1, pourquoi: ["Comparer coûts et avantages est le cœur du raisonnement du courant dominant.", null, "Le prix plafond et la pénurie font partie du modèle d’offre et de demande enseigné dans tous les manuels.", "L’avantage comparatif de Ricardo est enseigné par le courant dominant."],
    explication: P("C’est la thèse de la <b>théorie moderne de la monnaie</b>, portée par Stephanie Kelton, un courant post-keynésien hétérodoxe. Les trois autres idées sont enseignées dans tous les manuels.", "Voir la page <a href=\"#familles\">Les familles de pensée</a>.") },

  { id: "vi1-vf-polanyi", theme: "visions", niveau: 1, type: "vf", notion: "encastrement",
    titre: "Polanyi et le marché", competence: "Comprendre les notions d’encastrement et de marchandise fictive.",
    affirmations: [
      ["Pour Polanyi, l’économie a longtemps été « encastrée » dans les relations sociales, religieuses et politiques.", true, "Pendant la plus grande partie de l’histoire, la parenté, la coutume ou le pouvoir réglaient la production et l’échange."],
      ["Polanyi soutient qu’il faut supprimer les marchés.", false, "Il ne rejette pas le marché, mais l’idée qu’il puisse régler seul toute la société."],
      ["Le travail, la terre et la monnaie sont pour lui des « marchandises fictives ».", true, "Ils ne sont pas produits pour être vendus : le travail est la vie humaine, la terre est la nature, la monnaie une institution."],
      ["Selon Polanyi, le marché autorégulateur du XIXe siècle est né spontanément, sans intervention de l’État.", false, "Au contraire : « le laissez-faire était planifié ». Il a fallu des lois pour créer un marché du travail et de la terre."]
    ] },

  { id: "vi1-pib", theme: "visions", niveau: 1, type: "qcm", notion: "travail-non-remunere",
    titre: "Ce que le PIB compte", competence: "Distinguer travail rémunéré et non rémunéré dans le PIB.",
    enonce: P("Laquelle de ces activités est comptée dans le PIB ?"),
    options: ["Un père prépare le repas de ses enfants.", "Une femme soigne sa mère âgée à domicile.", "Une aide ménagère payée nettoie un appartement.", "Un voisin répare bénévolement le vélo d’un enfant."], c: 2, pourquoi: ["Le repas est préparé gratuitement pour sa famille : ce travail n’entre pas dans le PIB.", "Les soins sont donnés sans paiement : ce travail non rémunéré n’est pas compté dans le PIB.", null, "La réparation est bénévole : sans paiement, rien n’entre dans le PIB."],
    explication: P("Seule l’activité <b>payée</b> entre dans le PIB. Le même travail fait gratuitement pour sa famille ou ses voisins n’y figure pas : c’est le <b>travail non rémunéré</b>, mis en lumière par Marilyn Waring.", "Selon l’OFS, on y consacre en Suisse davantage d’heures qu’au travail payé.") },

  { id: "vi1-part-heures", theme: "visions", niveau: 1, type: "calcul", notion: "travail-non-remunere",
    titre: "La part du travail invisible", competence: "Calculer une part en pourcentage.",
    gen: () => { const u = rnd(80, 110) / 10, r = rnd(65, 85) / 10; return { u, r }; },
    enonce: (p) => P(`Dans un pays fictif, on consacre en une année <b>${fmt(p.u, 1)} milliards d’heures</b> au travail non rémunéré et <b>${fmt(p.r, 1)} milliards d’heures</b> au travail rémunéré.`, "Quelle part du travail total est non rémunérée ? Arrondissez à une décimale."),
    champs: [{ label: "Part non rémunérée", unite: "%", tol: 0.1 }],
    reponses: (p) => [Math.round((p.u / (p.u + p.r)) * 1000) / 10],
    indice: "Part = travail non rémunéré ÷ (travail non rémunéré + travail rémunéré) × 100.",
    correction: (p) => P(`Part = ${fmt(p.u, 1)} ÷ (${fmt(p.u, 1)} + ${fmt(p.r, 1)}) × 100 = ${fmt(p.u, 1)} ÷ ${fmt(p.u + p.r, 1)} × 100 ≈ <b>${fmt((p.u / (p.u + p.r)) * 100, 1)} %</b>.`, "Plus de la moitié du travail échappe au PIB. En Suisse, en 2020, l’OFS comptait 9,8 milliards d’heures non rémunérées contre environ 7,6 milliards rémunérées.") },

  { id: "vi1-pret", theme: "visions", niveau: 1, type: "qcm", notion: "monnaie-endogene",
    titre: "Un prêt crée-t-il de la monnaie ?", competence: "Comprendre la création monétaire par le crédit.",
    enonce: P("Une banque accorde à une entreprise un prêt de 50 000 francs, versé sur le compte de l’entreprise. Que devient la quantité de monnaie dans l’économie ?"),
    options: ["Elle ne change pas : la banque a seulement prêté l’argent de ses déposants.", "Elle augmente de 50 000 francs : la banque a créé un dépôt nouveau.", "Elle baisse de 50 000 francs.", "Elle double."], c: 1, pourquoi: ["C’est la présentation des anciens manuels. En pratique, la banque crédite le compte de l’entreprise sans retirer l’argent des autres déposants : elle crée de la monnaie.", null, "Le prêt ajoute un dépôt sur le compte de l’entreprise : la monnaie augmente. Elle baissera seulement au remboursement.", "La monnaie augmente du montant du prêt, 50 000 francs, pas du double de toute la monnaie existante."],
    explication: P("« Les crédits font les dépôts » : en accordant le prêt, la banque inscrit 50 000 francs sur le compte de l’entreprise. Cette monnaie n’existait pas auparavant. Elle disparaîtra quand le prêt sera remboursé.", "Voir la notice <a href=\"#c-monnaie-endogene\">Monnaie endogène</a>.") },

  { id: "vi1-vf-kalecki", theme: "visions", niveau: 1, type: "vf", notion: "mode-regulation",
    titre: "Kalecki et le plein emploi", competence: "Connaître les idées principales de Kalecki.",
    affirmations: [
      ["Kalecki a découvert le rôle de la demande effective avant que Keynes ne publie sa Théorie générale.", true, "Dès 1933, dans un article en polonais."],
      ["Pour Kalecki, l’État ne sait pas comment créer le plein emploi.", false, "Il pense que l’État sait le faire en dépensant, mais que les chefs d’entreprise s’y opposeront."],
      ["Selon lui, un plein emploi durable retire au licenciement son pouvoir de discipline.", true, "C’est l’argument central de son article de 1943."],
      ["Kalecki pense que les grandes entreprises fixent leurs prix en ajoutant une marge à leurs coûts.", true, "Cette marge dépend de leur pouvoir de marché, le « degré de monopole »."]
    ] },

  /* =========================== NIVEAU 2 : INTERMÉDIAIRE =========================== */
  { id: "vi2-remplacement", theme: "visions", niveau: 2, type: "calcul", notion: "travail-non-remunere",
    titre: "Donner une valeur au travail domestique", competence: "Estimer une valeur par la méthode du coût de remplacement.",
    gen: () => ({ h: rnd(14, 30), w: rnd(26, 36) }),
    enonce: (p) => P(`Une personne consacre <b>${p.h} heures par semaine</b> au ménage, aux repas et à la garde des enfants. Une aide à domicile serait payée <b>${p.w} francs de l’heure</b>.`, "Selon la méthode du coût de remplacement, quelle est la valeur annuelle de ce travail (52 semaines) ? Arrondissez au franc."),
    champs: [{ label: "Valeur annuelle", unite: "francs", tol: 1 }],
    reponses: (p) => [p.h * p.w * 52],
    indice: "Valeur = heures par semaine × salaire horaire de remplacement × 52.",
    correction: (p) => P(`Valeur = ${p.h} × ${p.w} × 52 = <b>${fmt(p.h * p.w * 52)} francs</b> par an.`, "Ce travail ne figure dans aucun compte de revenus, ni dans le PIB. Les statisticiens l’estiment à part, dans des « comptes satellites ».") },

  { id: "vi2-profits", theme: "visions", niveau: 2, type: "calcul", notion: "mode-regulation",
    titre: "L’équation des profits de Kalecki", competence: "Appliquer une identité macroéconomique.",
    gen: () => ({ i: rnd(70, 120), c: rnd(30, 50), d: rnd(10, 40), x: rnd(-10, 25), s: rnd(5, 20) }),
    enonce: (p) => P("Dans la version élargie de Kalecki : profits = investissement + consommation des capitalistes + déficit public + excédent commercial − épargne des salariés.", `Dans un pays, en milliards : investissement <b>${p.i}</b>, consommation des capitalistes <b>${p.c}</b>, déficit public <b>${p.d}</b>, solde commercial <b>${p.x}</b>, épargne des salariés <b>${p.s}</b>.`, "Calculez les profits."),
    champs: [{ label: "Profits", unite: "milliards", tol: 0 }],
    reponses: (p) => [p.i + p.c + p.d + p.x - p.s],
    indice: "Additionnez les quatre premiers termes (le solde commercial peut être négatif), puis retirez l’épargne des salariés.",
    correction: (p) => P(`Profits = ${p.i} + ${p.c} + ${p.d} ${p.x < 0 ? "− " + -p.x : "+ " + p.x} − ${p.s} = <b>${p.i + p.c + p.d + p.x - p.s} milliards</b>.`, "Ce sont les dépenses, et non l’épargne, qui créent les profits. Un déficit public plus élevé augmente donc les profits ; l’épargne des salariés les réduit.") },

  { id: "vi2-fordisme", theme: "visions", niveau: 2, type: "qcm", notion: "mode-regulation",
    titre: "Le cercle du fordisme", competence: "Expliquer un enchaînement macroéconomique.",
    enonce: P("Quel enchaînement décrit le mieux le « fordisme » des Trente Glorieuses, selon l’école de la régulation ?"),
    options: ["Baisse des salaires → baisse des prix → hausse des exportations → croissance.", "Gains de productivité → hausse des salaires négociée → consommation de masse → investissement → nouveaux gains de productivité.", "Création monétaire → inflation → croissance.", "Hausse des impôts → baisse de la dette → croissance."], c: 1, pourquoi: ["Le fordisme repose sur la hausse des salaires, qui soutient la consommation, et non sur leur baisse.", null, "La croissance fordiste vient des gains de productivité partagés, pas de la création monétaire.", "Le fordisme est un régime de croissance fondé sur la consommation de masse, pas sur le désendettement."],
    explication: P("Les gains de productivité de la production de masse sont partagés avec les salariés par les conventions collectives. Les salariés achètent ce qu’ils produisent, ce qui soutient l’investissement. Le cercle se rompt à la fin des années 1960, quand la productivité ralentit.", "Voir la notice <a href=\"#c-mode-regulation\">Mode de régulation</a>.") },

  { id: "vi2-vf-monnaie", theme: "visions", niveau: 2, type: "vf", notion: "monnaie-endogene",
    titre: "Monnaie endogène", competence: "Distinguer deux explications de la création monétaire.",
    affirmations: [
      ["Quand un prêt est remboursé, la monnaie correspondante disparaît.", true, "Le dépôt et la créance s’annulent ensemble."],
      ["Selon la thèse de la monnaie endogène, la banque centrale fixe directement la quantité de monnaie en circulation.", false, "Elle agit surtout par le taux d’intérêt ; la quantité de monnaie suit la demande de crédit."],
      ["Après 2008, la forte hausse des réserves bancaires n’a pas fait exploser la masse monétaire.", true, "Les banques prêtent selon la demande d’emprunteurs solvables, pas selon leurs réserves."],
      ["En 2018, les Suisses ont accepté de réserver la création monétaire à la BNS.", false, "L’initiative « Monnaie pleine » a été rejetée par environ 76 % des votants."]
    ] },

  { id: "vi2-kelton", theme: "visions", niveau: 2, type: "qcm", notion: "monnaie-endogene",
    titre: "La limite de la dépense publique", competence: "Comprendre la thèse de la théorie moderne de la monnaie.",
    enonce: P("Selon Stephanie Kelton, qu’est-ce qui limite vraiment les dépenses d’un État qui émet sa propre monnaie ?"),
    options: ["Le niveau de sa dette publique", "La quantité d’or détenue par la banque centrale", "L’inflation, quand l’État demande plus de travail et de ressources qu’il n’y en a de disponibles", "Le budget de l’année précédente"], c: 2, pourquoi: ["Pour la théorie moderne de la monnaie, un État qui émet sa monnaie peut toujours payer sa dette dans cette monnaie : le niveau de la dette n’est pas la vraie limite.", "Les monnaies actuelles ne sont plus convertibles en or : les réserves d’or ne limitent pas la dépense.", null, "Le budget passé n’est pas une contrainte économique : seule compte la disponibilité des ressources réelles."],
    explication: P("Pour la théorie moderne de la monnaie, la question n’est pas « comment le payer ? », mais « avons-nous les ressources ? ». Ses critiques, comme Lawrence Summers, répondent qu’il est politiquement difficile d’augmenter les impôts à temps pour contenir l’inflation.", "Voir le duel <a href=\"#controverses\" data-debat=\"kelton-summers\">Kelton contre Summers</a>.") },

  { id: "vi2-red-pib", theme: "visions", niveau: 2, type: "redaction", notion: "travail-non-remunere",
    titre: "Faut-il compter le travail domestique dans le PIB ?", competence: "Argumenter sur un indicateur économique (10 à 15 lignes).",
    enonce: P("En Suisse, on consacre davantage d’heures au travail non rémunéré qu’au travail rémunéré, mais le PIB n’en compte aucune.", "<b>Consigne :</b> présentez au moins deux arguments pour intégrer ce travail dans la mesure de la richesse, et au moins deux arguments contre, puis concluez."),
    criteres: ["La réponse explique pourquoi le travail domestique n’est pas compté : il ne passe pas par un marché.", "Elle donne au moins deux arguments pour : invisibilité dans les politiques, égalité entre femmes et hommes, comparaisons faussées entre pays ou entre époques, retraites…", "Elle donne au moins deux arguments contre : difficulté de lui donner un prix, usage du PIB pour la conjoncture et les impôts, existence des comptes satellites…", "Elle conclut de façon nuancée, par exemple en proposant des indicateurs à côté du PIB."],
    corrige: P("Le PIB ne compte que la production payée. Le travail domestique et de soin, assuré surtout par des femmes, en est donc absent, alors qu’il représente en Suisse plus d’heures que le travail rémunéré.", "<b>Pour l’intégrer</b>, on peut dire que ce qui n’est pas compté pèse moins dans les décisions : une coupe dans les crèches paraît faire des économies, alors qu’elle reporte du travail sur les familles. Le PIB fausse aussi les comparaisons : quand un service passe de la famille au marché, le PIB augmente sans que la production réelle change.", "<b>Contre</b>, on peut répondre que donner un prix à ce travail est difficile et que les résultats varient beaucoup selon la méthode ; et que le PIB sert surtout à suivre la conjoncture et les recettes fiscales, ce qu’un indicateur élargi brouillerait.", "<b>Conclusion :</b> la solution retenue par les statisticiens est de mesurer ce travail à côté du PIB, dans des comptes satellites, comme le fait l’OFS. Le débat porte sur la place que ces chiffres prennent dans les décisions publiques.") },

  /* =========================== NIVEAU 3 : AVANCÉ =========================== */
  { id: "vi3-creation", theme: "visions", niveau: 3, type: "calcul", notion: "monnaie-endogene",
    titre: "Création et destruction de monnaie", competence: "Raisonner sur les flux de crédit.",
    gen: () => { const m = rnd(400, 700), n = rnd(60, 120), r = rnd(40, 110); return { m, n, r }; },
    enonce: (p) => P(`Les dépôts bancaires d’un pays s’élèvent à <b>${p.m} milliards</b> au début de l’année. Pendant l’année, les banques accordent <b>${p.n} milliards</b> de nouveaux crédits et reçoivent <b>${p.r} milliards</b> de remboursements.`, "En supposant que rien d’autre ne change, quel est le montant des dépôts à la fin de l’année, et de combien de pour cent ont-ils varié (une décimale) ?"),
    champs: [{ label: "Dépôts en fin d’année", unite: "milliards", tol: 0 }, { label: "Variation", unite: "%", tol: 0.1 }],
    reponses: (p) => [p.m + p.n - p.r, Math.round(((p.n - p.r) / p.m) * 1000) / 10],
    indice: "Les nouveaux crédits créent des dépôts, les remboursements en détruisent.",
    correction: (p) => P(`Dépôts en fin d’année = ${p.m} + ${p.n} − ${p.r} = <b>${p.m + p.n - p.r} milliards</b>.`, `Variation = (${p.n} − ${p.r}) ÷ ${p.m} × 100 ≈ <b>${fmt(((p.n - p.r) / p.m) * 100, 1)} %</b>.`, p.n >= p.r ? "Les crédits nouveaux dépassent les remboursements : la monnaie augmente." : "Les remboursements dépassent les crédits nouveaux : la monnaie diminue, ce qui arrive quand l’économie se désendette.") },

  { id: "vi3-deux-methodes", theme: "visions", niveau: 3, type: "calcul", notion: "travail-non-remunere",
    titre: "Deux méthodes, deux valeurs", competence: "Comparer deux méthodes d’évaluation.",
    gen: () => ({ h: rnd(800, 1400), w: rnd(26, 34), W: rnd(40, 60) }),
    enonce: (p) => P(`Une ingénieure consacre <b>${fmt(p.h)} heures par an</b> au travail domestique. Une aide à domicile coûterait <b>${p.w} francs de l’heure</b> ; dans son métier, elle gagne <b>${p.W} francs de l’heure</b>.`, "Calculez la valeur de ce travail selon la méthode du coût de remplacement, puis selon celle du coût d’opportunité."),
    champs: [{ label: "Coût de remplacement", unite: "francs", tol: 1 }, { label: "Coût d’opportunité", unite: "francs", tol: 1 }],
    reponses: (p) => [p.h * p.w, p.h * p.W],
    indice: "Remplacement : ce que coûterait une personne payée pour le faire. Opportunité : ce qu’elle aurait gagné en travaillant pendant ce temps.",
    correction: (p) => P(`Coût de remplacement = ${fmt(p.h)} × ${p.w} = <b>${fmt(p.h * p.w)} francs</b>.`, `Coût d’opportunité = ${fmt(p.h)} × ${p.W} = <b>${fmt(p.h * p.W)} francs</b>.`, `La seconde méthode donne une valeur ${fmt((p.W / p.w), 1)} fois plus élevée : le choix de la méthode change beaucoup le résultat, c’est l’une des critiques adressées à ces estimations.`) },

  { id: "vi3-part-salaires", theme: "visions", niveau: 3, type: "calcul", notion: "mode-regulation",
    titre: "Productivité, salaires et partage", competence: "Relier productivité, salaire réel et part des salaires.",
    gen: () => { const q = pick([2, 2.5, 3, 3.5, 4]), w = pick([0.5, 1, 1.5, 2, 2.5, 3]); return { q, w }; },
    enonce: (p) => P(`Pendant une année, la productivité du travail augmente de <b>${fmt(p.q, 1)} %</b> et le salaire réel moyen de <b>${fmt(p.w, 1)} %</b>.`, "Comment évolue la part des salaires dans la valeur ajoutée ? Donnez la variation en pourcentage (deux décimales, signe moins s’il s’agit d’une baisse)."),
    champs: [{ label: "Variation de la part des salaires", unite: "%", tol: 0.02 }],
    reponses: (p) => [Math.round(((1 + p.w / 100) / (1 + p.q / 100) - 1) * 10000) / 100],
    indice: "La part des salaires évolue comme le rapport (1 + croissance du salaire réel) ÷ (1 + croissance de la productivité).",
    correction: (p) => { const v = ((1 + p.w / 100) / (1 + p.q / 100) - 1) * 100; return P(`Variation = (1 + ${fmt(p.w / 100, 3)}) ÷ (1 + ${fmt(p.q / 100, 3)}) − 1 ≈ <b>${fmt(v, 2)} %</b>.`, "Quand les salaires réels progressent moins vite que la productivité, la part des salaires baisse. Sous le fordisme, les deux progressaient à peu près ensemble ; depuis les années 1980, la part des salaires a reculé dans de nombreux pays avancés."); } },

  { id: "vi3-vf-polanyi-hayek", theme: "visions", niveau: 3, type: "vf", notion: "encastrement",
    titre: "Polanyi contre Hayek", competence: "Distinguer deux visions opposées du marché.",
    affirmations: [
      ["La Grande Transformation de Polanyi et La Route de la servitude de Hayek paraissent la même année.", true, "Toutes deux en 1944, écrites en exil par deux auteurs nés à Vienne."],
      ["Pour Hayek, chaque intervention de l’État en appelle une autre et mène vers la planification.", true, "C’est l’argument de « la route de la servitude »."],
      ["Pour Polanyi, la crise des années 1930 vient d’un excès d’intervention publique.", false, "Pour lui, elle vient de l’utopie d’un marché autorégulateur, et de l’étalon-or qui exigeait de baisser les salaires."],
      ["Hayek défend que les prix transmettent une information dispersée qu’aucun planificateur ne peut rassembler.", true, "C’est l’idée de son article de 1945 sur l’utilisation de la connaissance."]
    ] },

  { id: "vi3-souverainete", theme: "visions", niveau: 3, type: "qcm", notion: "monnaie-endogene",
    titre: "Qui est souverain sur sa monnaie ?", competence: "Appliquer une notion à des cas concrets.",
    enonce: P("Selon la théorie moderne de la monnaie, lequel de ces États dispose de la plus grande marge pour dépenser sans risque de faillite ?"),
    options: ["La Grèce, qui utilise l’euro", "Un pays émergent endetté en dollars américains", "La Suisse, qui émet le franc, laisse flotter son change et s’endette en francs", "Un pays dont la monnaie est fixée à l’or"], c: 2, pourquoi: ["La Grèce n’émet pas l’euro : elle peut manquer de monnaie pour rembourser, comme en 2010-2012.", "Un pays endetté en dollars doit gagner ou acheter des dollars pour rembourser : il peut faire faillite.", null, "Avec l’étalon-or, la création monétaire est limitée par le stock d’or : la marge de dépense est réduite."],
    explication: P("Un État souverain sur sa monnaie, avec un change flottant et une dette dans sa propre monnaie, ne peut pas être forcé à la faillite. La Grèce ne contrôle pas l’euro ; un pays endetté en dollars doit gagner des dollars ; l’étalon-or limite la création monétaire.", "La Suisse remplit ces conditions, mais elle s’impose un frein à l’endettement, accepté par 85 % des votants en 2001. Voir le portrait de <a href=\"#eco-kelton\">Stephanie Kelton</a>.") },

  { id: "vi3-red-frein", theme: "visions", niveau: 3, type: "redaction", notion: "monnaie-endogene",
    titre: "Le frein à l’endettement face à la théorie moderne de la monnaie", competence: "Confronter deux positions de politique économique (15 à 25 lignes).",
    enonce: P("Depuis 2003, la Confédération applique un frein à l’endettement : les dépenses doivent être couvertes par les recettes sur l’ensemble du cycle conjoncturel. Pour Stephanie Kelton, un État qui émet sa propre monnaie n’a pas besoin d’une telle règle.", "<b>Consigne :</b> présentez la position de Kelton et celle des défenseurs du frein, en utilisant au moins deux notions économiques, puis donnez votre avis argumenté."),
    criteres: ["La réponse présente correctement la thèse de Kelton : souveraineté monétaire, pas de faillite dans sa propre monnaie, inflation comme vraie limite.", "Elle présente les arguments des défenseurs du frein : confiance dans le franc, expérience des déficits des années 1990, risque politique de trop dépenser, indépendance de la BNS.", "Elle mobilise au moins deux notions : inflation, dette publique, monnaie endogène, multiplicateur, taux d’intérêt…", "Elle conclut par un avis personnel argumenté et nuancé."],
    corrige: P("Pour <b>Kelton</b>, la Suisse remplit toutes les conditions de la souveraineté monétaire : elle émet le franc, laisse flotter son change et s’endette en francs. Elle ne peut donc pas faire faillite, et sa vraie limite est l’inflation, très faible depuis des décennies. Le frein l’empêcherait d’investir davantage dans la transition énergétique ou la formation, alors que les ressources existent.", "Les <b>défenseurs du frein</b> répondent que la Suisse a connu des déficits durables dans les années 1990, que la confiance dans le franc repose aussi sur la rigueur budgétaire, et que les gouvernements ont tendance à dépenser volontiers et à augmenter les impôts trop tard. La BNS, indépendante, a pour mission la stabilité des prix, non le financement de l’État.", "<b>Avis :</b> on peut par exemple défendre un frein assoupli pour certains investissements publics, comme le proposent les partisans d’une « règle d’or », tout en conservant une discipline sur les dépenses courantes.") },
  { id: "vi1-fait-valeur", theme: "visions", niveau: 1, type: "vf", typeLib: "Constat ou jugement de valeur", etiquettes: ["Constat", "Jugement de valeur"],
    titre: "Constat ou jugement de valeur ?", competence: "Distinguer un constat, que l’on peut vérifier, d’un jugement de valeur, qui dit ce qui devrait être.",
    enonce: P("Pour chaque affirmation, dites s’il s’agit d’un <b>constat</b>, que l’on peut vérifier avec des données, même s’il se révèle faux, ou d’un <b>jugement de valeur</b>, qui dit ce qui devrait être."),
    affirmations: [
      ["Selon l’OFS, on consacre en Suisse davantage d’heures au travail non rémunéré qu’au travail payé.", true, "On peut le vérifier avec des données : l’OFS publie un compte satellite du travail non rémunéré."],
      ["Le travail domestique devrait être rémunéré.", false, "Il dit ce qui devrait être. Des faits peuvent éclairer le débat, mais pas le trancher : « devrait » signale un choix de société."],
      ["Une banque crée de la monnaie quand elle accorde un crédit.", true, "On peut le vérifier avec des données : c’est ainsi que les banques comptabilisent un prêt, comme l’expliquent les banques centrales elles-mêmes."],
      ["Les courants hétérodoxes méritent autant de place que le courant dominant dans les cours d’économie.", false, "Il dit ce qui devrait être. Des faits peuvent éclairer le débat, mais pas le trancher : la place à leur donner dépend de ce que l’on attend d’un cours."]] },
  ]);
})();
