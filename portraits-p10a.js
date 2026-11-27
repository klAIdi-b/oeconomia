/* Œconomia — portraits longs, lot 10 (a) : Karl Polanyi, Michał Kalecki, Michel Aglietta */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  /* =====================================================================
     KARL POLANYI
     ===================================================================== */
  const viePolanyi = lifeline(1886, 1964, [
    [1886, "naissance à Vienne", true], [1908, "cercle Galilée à Budapest", false], [1919, "exil à Vienne", true], [1933, "exil en Angleterre", false],
    [1940, "Bennington College", true], [1944, "La Grande Transformation", false], [1947, "université Columbia", true], [1957, "Commerce et marché", false], [1964, "mort au Canada", true]
  ], "Karl Polanyi, 1886-1964", "Chassé deux fois par les bouleversements de l’Europe centrale, Polanyi a vécu à Budapest, Vienne, Londres, aux États-Unis et au Canada. Il écrit son grand livre pendant la guerre, à plus de cinquante ans.");

  const double = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Le double mouvement</text>`;
    s += node(30, 50, 260, 70, "Extension du marché", "travail, terre et monnaie mis en vente", "var(--gold)");
    s += node(350, 50, 260, 70, "Protection de la société", "lois sociales, syndicats, tarifs", "var(--note)");
    s += arrow(290, 74, 346, 74, "var(--ink-soft)") + arrow(350, 98, 294, 98, "var(--ink-soft)");
    s += `<text x="320" y="146" text-anchor="middle" ${S}>chaque avancée du marché appelle une réaction</text>`;
    s += node(170, 176, 300, 70, "Quand l’équilibre se rompt", "crise des années 1930, fin de l’étalon-or", "var(--serial)");
    s += arrow(160, 124, 250, 174) + arrow(480, 124, 390, 174);
    return s;
  })(), "D’après La Grande Transformation (1944), schéma. Pour Polanyi, le XIXe siècle est traversé par deux mouvements opposés. Quand la société ne parvient plus à se protéger dans le cadre libéral, l’ordre s’effondre, et des solutions autoritaires prennent la place.", "Schéma du double mouvement de Polanyi");

  OEC.portraits["polanyi"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Karl Polanyi (1886-1964), historien et anthropologue de l’économie d’origine austro-hongroise, montre dans La Grande Transformation (1944) que le marché autorégulateur n’a rien de naturel : il a été construit au XIXe siècle, en grande partie par l’État.",
      "Le travail, la terre et la monnaie ne sont pas des marchandises comme les autres. Les livrer entièrement au marché menace la société, qui réagit en se protégeant : c’est le « double mouvement ».",
      "Paru la même année que La Route de la servitude de Hayek, son livre en est le contrepoint : là où Hayek voit dans le recul du marché le chemin de la tyrannie, Polanyi voit dans le marché sans limites la cause de l’effondrement des années 1930."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Karl Polanyi naît à Vienne le 25 octobre 1886 et grandit à Budapest, dans une famille juive cultivée ; son frère cadet, Michael Polanyi, deviendra un chimiste et un philosophe des sciences reconnu. Docteur en droit, il fonde en 1908 le cercle Galilée, un mouvement d’étudiants progressistes. Il sert comme officier de cavalerie pendant la Première Guerre mondiale.</p>
<p>Après l’échec de la révolution hongroise de 1919, il s’installe à Vienne. Il y épouse Ilona Duczyńska, militante révolutionnaire, et devient journaliste au principal hebdomadaire économique autrichien. Il assiste aux débats de l’époque sur le socialisme et répond à Ludwig von <a href="#eco-mises">Mises</a> sur la possibilité d’une économie planifiée. Vienne la « rouge », avec ses logements sociaux et ses coopératives, le marque profondément.</p>
${viePolanyi}
<p>En 1933, la montée du fascisme le pousse à l’exil en Angleterre, où il enseigne l’histoire économique dans des cours du soir pour ouvriers. De 1940 à 1943, il est chercheur au Bennington College, dans le Vermont, où il écrit La Grande Transformation, publiée en 1944. Il enseigne ensuite à l’université Columbia, à New York. Son épouse, ancienne communiste, n’ayant pas le droit d’entrer aux États-Unis, le couple s’installe à Pickering, près de Toronto ; Polanyi fait les allers-retours. Il consacre ses dernières années à l’économie des sociétés anciennes et meurt au Canada le 23 avril 1964.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Polanyi a vu s’effondrer, en trente ans, presque tout ce qui semblait solide : l’Empire austro-hongrois, l’étalon-or, le libre-échange, la démocratie en Allemagne, en Autriche et en Italie. Il refuse d’y voir une suite d’accidents ou d’erreurs politiques.</p>
<p>Il remonte au XIXe siècle. L’Angleterre y a bâti une civilisation d’un type nouveau, fondée sur quatre piliers : l’équilibre des puissances, l’étalon-or, l’État libéral et, au centre, le marché autorégulateur. Pour la première fois, la subsistance de chacun dépend presque entièrement de ce qu’il peut vendre sur un marché. C’est ce système qui s’est défait dans les années 1930.</p>
<p>Polanyi écrit contre deux courants à la fois. Contre les libéraux comme <a href="#eco-hayek">Hayek</a> et Mises, qui voient dans l’intervention de l’État la cause des malheurs du siècle. Et contre un marxisme qui réduit tout aux intérêts de classe, alors que pour lui les sociétés défendent aussi des valeurs, des statuts et des modes de vie.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Une économie encastrée</h4>
<p>En s’appuyant sur l’histoire et l’anthropologie, Polanyi distingue trois grandes manières d’organiser l’économie : la réciprocité, des dons qui appellent des contre-dons ; la redistribution, par un centre qui collecte et répartit ; et l’échange marchand. Pendant la plus grande partie de l’histoire, le marché a existé, mais à la marge, et l’économie restait « encastrée » dans la société (<a href="#c-encastrement">voir encastrement</a>).</p>
<h4>2. Le marché autorégulateur, une invention</h4>
<p>Le XIXe siècle veut faire l’inverse : un système où tous les prix, y compris les salaires et les loyers de la terre, se fixent librement, et où la société s’adapte au marché. Polanyi souligne que ce système n’est pas né spontanément. Il a fallu des lois pour supprimer les protections anciennes, enclore les terres, créer un marché national du travail. D’où sa formule : « le laissez-faire était planifié ; la planification ne l’était pas ».</p>
<h4>3. Les marchandises fictives</h4>
<p>Le travail, la terre et la monnaie ne sont pas produits pour être vendus. Les traiter comme des marchandises, c’est accepter que des salaires tombent sous le minimum vital, que la nature soit épuisée, que la monnaie manque au pire moment. Aucune société ne le supporte longtemps.</p>
<h4>4. Le double mouvement</h4>
<p>Chaque avancée du marché provoque donc une réaction de protection, souvent sans plan d’ensemble : lois sur le travail des enfants, syndicats, tarifs agricoles, banques centrales. Ce ne sont pas des complots contre le marché, mais des réflexes d’autodéfense de la société.</p>
${double}
<h4>5. De l’étalon-or au fascisme</h4>
<p>Dans les années 1920 et 1930, ces deux mouvements deviennent incompatibles. L’étalon-or exige de baisser les salaires pour défendre la monnaie ; les démocraties ne le peuvent plus. Le blocage ouvre la voie à des solutions autoritaires. Pour Polanyi, le fascisme est l’une des issues, la pire, à la crise d’une société de marché.</p>
<h4>6. Après le marché autorégulateur</h4>
<p>Polanyi espère que l’après-guerre « réencastrera » l’économie : des marchés, mais sous le contrôle de la démocratie, avec des protections pour le travail, la terre et la monnaie. Il voit dans cette perspective un gain de liberté, et non une servitude.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>La Grande Transformation (1944).</b> Son chef-d’œuvre : l’histoire de la société de marché, de sa naissance en Angleterre à son effondrement dans les années 1930.</p>
<p><b>« Notre obsolète mentalité de marché » (1947).</b> Un article court qui résume sa pensée et plaide pour sortir de l’idée que l’économie se réduit au marché.</p>
<p><b>Commerce et marché dans les premiers empires (1957), avec Conrad Arensberg et Harry Pearson.</b> Les économies anciennes, de la Mésopotamie à l’Afrique, organisées sans marché autorégulateur.</p>
<p><b>Dahomey et la traite des esclaves (1966, posthume).</b> L’organisation économique d’un royaume africain du XVIIIe siècle.</p>` }
    ],
    cas: [
      { titre: "Speenhamland, 1795", html: `
<p>En 1795, des juges de Speenhamland, dans le Berkshire, décident de compléter les salaires des ouvriers agricoles en fonction du prix du pain et de la taille de leur famille. Ce système se répand dans le sud de l’Angleterre. Pour Polanyi, il illustre une société qui refuse encore de livrer le travail au marché. Il estime aussi que ce complément a tiré les salaires vers le bas. Sa suppression en 1834 ouvre la voie à un véritable marché du travail. Les historiens ont depuis nuancé son récit, en montrant que le système était moins répandu et moins nocif qu’il ne le pensait.</p>` },
      { titre: "1944, deux livres", html: `
<p>La même année paraissent La Grande Transformation et La Route de la servitude de Friedrich <a href="#eco-hayek">Hayek</a>. Les deux auteurs sont nés à Vienne, ont vécu les mêmes catastrophes et écrivent en exil. Ils en tirent des leçons opposées : pour Hayek, c’est l’intervention de l’État qui mène à la tyrannie ; pour Polanyi, c’est le marché sans limites qui a détruit la démocratie. Le livre de Hayek devient aussitôt un succès ; celui de Polanyi met des décennies à trouver son public (<a href="#controverses" data-debat="polanyi-hayek">voir la controverse</a>).</p>` },
      { titre: "Le retour de Polanyi", html: `
<p>Longtemps lu surtout par les anthropologues, Polanyi revient au premier plan à chaque crise de la mondialisation. En 2001, l’édition américaine de La Grande Transformation paraît avec une préface de Joseph <a href="#eco-stiglitz">Stiglitz</a>. Après 2008, puis avec la montée des mouvements populistes, de nombreux commentateurs relisent le « double mouvement » comme une clé pour comprendre la colère contre la mondialisation.</p>` }
    ],
    objections: `
<h4>1. Une histoire idéalisée</h4>
<p>Des historiens reprochent à Polanyi d’idéaliser les sociétés d’avant le marché, où la protection de la communauté allait souvent avec la domination des seigneurs, des castes ou des patriarches. Les marchés étaient aussi plus anciens et plus répandus qu’il ne le dit.</p>
<h4>2. La prospérité oubliée</h4>
<p>Les économistes libéraux rappellent que le XIXe siècle, malgré ses misères, a aussi vu le revenu moyen et l’espérance de vie progresser comme jamais auparavant. Pour <a href="#eco-hayek">Hayek</a>, les « protections » que décrit Polanyi sont souvent des privilèges défendus par des groupes organisés.</p>
<h4>3. Un concept flou</h4>
<p>La notion d’encastrement est critiquée pour son imprécision. Les sociologues qui l’ont reprise, comme Mark Granovetter, soutiennent que même les marchés modernes sont encastrés dans des réseaux sociaux, ce qui retire à l’opposition de Polanyi une partie de sa netteté.</p>`,
    ecoles: `
<p><b>Karl <a href="#eco-marx">Marx</a></b> et <b>Robert Owen</b> lui donnent sa critique de la société de marché, sans qu’il en partage le déterminisme.</p>
<p><b>Ludwig von <a href="#eco-mises">Mises</a></b> et <b>Friedrich <a href="#eco-hayek">Hayek</a></b> sont ses grands adversaires, depuis les débats viennois sur le socialisme.</p>
<p><b>La nouvelle sociologie économique</b>, de Mark Granovetter à Michel Callon, reprend l’idée d’encastrement.</p>
<p><b>John Ruggie</b> parle de « libéralisme encastré » pour décrire l’ordre économique d’après 1945.</p>
<p><b>Mariana <a href="#eco-mazzucato">Mazzucato</a></b> lui emprunte l’idée que les marchés sont construits par des décisions publiques.</p>
<p><b>Elinor <a href="#eco-ostrom">Ostrom</a></b> partage, par un autre chemin, l’attention aux institutions qui protègent les ressources communes.</p>`,
    source: {
      titre: "Karl Polanyi, La Grande Transformation, 1944, chapitre 12",
      texte: "Le laissez-faire était planifié ; la planification ne l’était pas.",
      notes: `
<p><b>Un renversement.</b> On présente souvent le marché libre comme spontané et l’intervention de l’État comme artificielle. Polanyi soutient l’inverse : il a fallu des lois, des administrations et parfois la force pour créer un marché du travail et de la terre.</p>
<p><b>La seconde moitié.</b> À l’inverse, les protections sociales du XIXe siècle n’ont pas été conçues selon un plan : elles sont nées une à une, en réaction à des problèmes concrets, souvent votées par des libéraux eux-mêmes.</p>
<p><b>La portée.</b> La formule vise directement l’idée, chère à <a href="#eco-hayek">Hayek</a>, d’un ordre de marché spontané. Pour Polanyi, le marché est une construction politique, et peut donc être réformé par la politique.</p>`
    },
    quiz: [
      { q: "Que signifie, pour Polanyi, une économie « encastrée » ?",
        o: ["Une économie fermée au commerce extérieur, qui vit en autarcie", "Une économie prise dans les relations sociales et religieuses", "Une économie planifiée par l’État, qui fixe les prix et la production", "Une économie sans monnaie, fondée sur le troc entre voisins"], c: 1,
        e: "Pendant la plus grande partie de l’histoire, la production et l’échange étaient réglés par la société." },
      { q: "Quelles sont les trois « marchandises fictives » ?",
        o: ["Les machines, les terres agricoles et l’or", "Le travail, la terre et la monnaie", "Le capital, l’entreprise et le savoir", "Les actions, les obligations et les devises"], c: 1,
        e: "Elles ne sont pas produites pour être vendues." },
      { q: "Qu’est-ce que le « double mouvement » ?",
        o: ["L’alternance régulière des crises et des reprises économiques", "L’extension du marché et la réaction protectrice de la société", "Le va-et-vient des capitaux entre les pays riches et les pays pauvres", "La hausse simultanée des prix et des salaires dans l’économie"], c: 1,
        e: "Chaque avancée du marché appelle une protection." },
      { q: "Quel livre paraît la même année que La Grande Transformation, avec une thèse opposée ?",
        o: ["La Théorie générale de Keynes", "La Route de la servitude de Hayek", "Le Capital de Marx", "Capitalisme et liberté de Friedman"], c: 1,
        e: "Les deux livres paraissent en 1944." }
    ],
    ouverte: {
      q: "En 2017, les Suisses ont inscrit dans la Constitution un article sur la sécurité alimentaire, et la Confédération verse chaque année des milliards de francs de paiements directs aux paysans. Est-ce un exemple du « double mouvement » de Polanyi ?",
      r: "Oui, en grande partie. Pour Polanyi, la terre n’est pas une marchandise comme les autres : elle est la nature, le paysage et la base de l’alimentation. La Suisse a fait le choix de ne pas la livrer entièrement au marché. Ses paysans ne pourraient pas affronter seuls la concurrence de pays où la terre et le travail coûtent beaucoup moins cher. Les paiements directs, les droits de douane agricoles, les règles sur l’aménagement du territoire et le droit foncier rural la protègent, au nom de la sécurité de l’approvisionnement, de l’entretien du paysage et de la vie des régions de montagne. C’est exactement le genre de protection que décrit Polanyi. Ses critiques répondent que cette protection a un coût élevé pour les consommateurs et les contribuables, qu’elle profite surtout à certaines exploitations, et qu’elle freine l’accès des pays pauvres au marché suisse. Le débat porte moins sur le principe, largement accepté par les votants, que sur le niveau et la forme de la protection."
    },
    lectures: [
      ["Accessible", "Karl Polanyi, « Notre obsolète mentalité de marché », 1947."],
      ["Accessible", "Karl Polanyi, La Grande Transformation, 1944, chapitres 1, 6 et 12."],
      ["Intermédiaire", "Fred Block et Margaret Somers, The Power of Market Fundamentalism: Karl Polanyi’s Critique, 2014."],
      ["Recherche", "Gareth Dale, Karl Polanyi: A Life on the Left, 2016 ; Mark Granovetter, « Economic Action and Social Structure: The Problem of Embeddedness », American Journal of Sociology, 1985."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi Polanyi écrit-il La Grande Transformation en 1944 ?",
          o: ["Pour comprendre l’effondrement de l’ordre européen qu’il a vécu", "Pour défendre le retour à l’étalon-or après la guerre", "Pour proposer un plan de reconstruction économique de l’Europe", "Pour répondre point par point à la Théorie générale de Keynes"], c: 0,
          e: "Exilé, il cherche à expliquer en trente ans l’effondrement de l’Empire austro-hongrois, de l’étalon-or et de la démocratie." },
        { q: "Selon Polanyi, d’où vient le système où tout, même le travail et la terre, s’achète et se vend ?",
          o: ["Il a été créé par des lois au XIXe siècle", "Il a toujours existé", "Il est né naturellement des échanges", "Il a été inventé par les marchands du Moyen Âge"], c: 0,
          e: "Pour Polanyi, le marché généralisé n’a rien de naturel." }
      ],
      duree: 5,
      html: `
<h3>Un exilé de l’Europe centrale</h3>
<p>Karl Polanyi, né à Vienne en 1886 et élevé à Budapest, voit s’effondrer en trente ans l’Empire austro-hongrois, l’étalon-or et la démocratie. Exilé en Angleterre puis aux États-Unis, il écrit en 1944 La Grande Transformation pour comprendre ce qui s’est passé.</p>
${viePolanyi}
<h3>Le marché n’a rien de naturel</h3>
<p>Pendant la plus grande partie de l’histoire, l’économie était prise dans la société : la famille, la religion et le pouvoir réglaient la production et l’échange. Le XIXe siècle invente un système où tout, même le travail et la terre, s’achète et se vend. Pour Polanyi, ce système a été créé par des lois, et non par la nature.</p>
<h3>La société se défend</h3>
<p>Livrer le travail, la terre et la monnaie au marché menace la société. Elle se protège alors : lois sociales, syndicats, tarifs. Quand cette protection devient impossible, comme dans les années 1930, l’ordre libéral s’effondre.</p>
${double}
<h3>À retenir</h3>
<p>Pour Polanyi, le marché est un outil précieux, mais il doit rester sous le contrôle de la société. Le portrait complet présente sa pensée, son face-à-face avec Hayek et les critiques qu’on lui adresse.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De Vienne et Budapest à l’exil en Angleterre, aux États-Unis et au Canada.",
      epoque: "L’effondrement de la civilisation libérale du XIXe siècle.",
      pensee: "Six étapes, de l’économie encastrée au réencastrement.",
      livres: "De La Grande Transformation aux économies anciennes.",
      cas: "Speenhamland, deux livres en 1944, le retour de Polanyi.",
      objections: "Une histoire idéalisée, la prospérité oubliée, un concept flou.",
      ecoles: "Marx et Owen, Mises et Hayek, la sociologie économique, Ruggie, Mazzucato.",
      source: "Le laissez-faire était planifié.",
      quiz: "Quatre questions corrigées et une question sur l’agriculture suisse.",
      lectures: "Quatre lectures classées par niveau."
    }
  };

  /* =====================================================================
     MICHAŁ KALECKI
     ===================================================================== */
  const vieKalecki = lifeline(1899, 1970, [
    [1899, "naissance à Łódź", true], [1929, "institut de conjoncture", false], [1933, "théorie du cycle", true], [1940, "Institut de statistique d’Oxford", false],
    [1943, "aspects politiques du plein emploi", true], [1946, "Nations unies", false], [1955, "retour en Pologne", true], [1968, "démission", false], [1970, "mort à Varsovie", true]
  ], "Michał Kalecki, 1899-1970", "Autodidacte, Kalecki a travaillé à Varsovie, Oxford, New York et de nouveau Varsovie. Ses travaux, publiés d’abord en polonais, ont longtemps été éclipsés par ceux de Keynes.");

  const cycle = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>Le cycle politique du plein emploi</text>`;
    const pts = [[50, 70, "Récession", "le chômage monte"], [380, 70, "Relance publique", "pression des électeurs"], [380, 210, "Plein emploi", "les salariés gagnent du pouvoir"], [50, 210, "Inquiétude des patrons", "appel à l’austérité"]];
    pts.forEach(([x, y, t, sub], i) => { s += node(x, y, 210, 60, t, sub, i === 2 ? "var(--note)" : i === 0 ? "var(--serial)" : "var(--gold)"); });
    s += arrow(264, 100, 376, 100) + arrow(485, 134, 485, 206) + arrow(376, 240, 264, 240) + arrow(155, 206, 155, 134);
    return s;
  })(), "D’après « Political Aspects of Full Employment » (1943), schéma. Kalecki ne nie pas que l’État sache rétablir le plein emploi. Il soutient que le plein emploi durable inquiète les chefs d’entreprise, qui poussent alors à l’austérité : la politique économique suit un cycle.", "Schéma du cycle politique de Kalecki");

  OEC.portraits["kalecki"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Michał Kalecki (1899-1970), économiste polonais autodidacte, découvre dès 1933, trois ans avant la Théorie générale de Keynes, que l’investissement commande le niveau de l’activité et de l’emploi : c’est la demande effective.",
      "Il montre que les profits naissent des dépenses des capitalistes eux-mêmes, et que la répartition entre salaires et profits dépend du pouvoir de marché des entreprises, qui fixent leurs prix en ajoutant une marge à leurs coûts.",
      "Dans un article célèbre de 1943, il avance que le plein emploi durable se heurte moins à des obstacles techniques qu’à l’opposition des chefs d’entreprise, qui y perdent un moyen de discipliner les salariés."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Michał Kalecki naît le 22 juin 1899 à Łódź, grande ville textile de la Pologne alors russe. Son père, petit industriel, est ruiné. Le jeune homme commence des études d’ingénieur à Varsovie, puis à Gdańsk, qu’il doit abandonner faute d’argent. Il ne suivra jamais de cours d’économie : il apprend seul, en lisant Marx, Rosa Luxemburg et Tougan-Baranovski, et en écrivant des notes de conjoncture pour gagner sa vie.</p>
<p>En 1929, il entre à l’Institut d’étude de la conjoncture et des prix, à Varsovie. Il y publie en 1933 un « essai sur la théorie du cycle économique », en polonais, qui contient l’essentiel de ce que Keynes publiera en 1936. Grâce à une bourse, il part en 1936 en Suède puis en Angleterre, où Joan <a href="#eco-robinson">Robinson</a> et Richard Kahn découvrent l’ampleur de son travail.</p>
${vieKalecki}
<p>Pendant la guerre, il travaille à l’Institut de statistique de l’université d’Oxford, sur le financement de l’effort de guerre et le rationnement. Il publie en 1943 son article sur les aspects politiques du plein emploi. De 1946 à 1954, il travaille au département économique des Nations unies, à New York, puis rentre en Pologne en 1955, où il conseille la planification. Lors de la campagne antisémite de 1968, plusieurs de ses collaborateurs sont chassés ; il démissionne de ses fonctions. Il meurt à Varsovie en avril 1970.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Au début des années 1930, la Grande Dépression frappe la Pologne avec une violence particulière : la production industrielle s’effondre, le chômage explose. La théorie dominante explique que les salaires devraient baisser jusqu’à ce que le plein emploi revienne. Kalecki constate que les baisses de salaires n’y changent rien.</p>
<p>À la différence de <a href="#eco-keynes">Keynes</a>, formé dans la tradition de <a href="#eco-marshall">Marshall</a>, Kalecki part de <a href="#eco-marx">Marx</a> et des marxistes polonais. Il voit l’économie comme le terrain d’un rapport de force entre capitalistes et salariés, et les entreprises comme des firmes puissantes qui fixent leurs prix, plutôt que comme les petites unités de la concurrence parfaite.</p>
<p>Plus tard, dans les années 1950 et 1960, il s’intéresse aux pays pauvres qui viennent d’accéder à l’indépendance, comme l’Inde, et aux difficultés de la planification dans les pays socialistes.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’investissement commande l’activité</h4>
<p>Dès 1933, Kalecki montre que la production et l’emploi dépendent de la dépense, et surtout de l’investissement, qui est la composante la plus instable (<a href="#c-demande-effective">voir demande effective</a>). Quand les entreprises cessent d’investir, les revenus et l’emploi chutent, sans retour automatique à l’équilibre.</p>
<h4>2. Les profits viennent des dépenses des capitalistes</h4>
<p>Dans une économie simplifiée où les salariés dépensent tout leur salaire, les profits sont égaux aux dépenses des capitalistes : leurs investissements et leur consommation. Ce ne sont pas les profits qui permettent d’investir, mais l’investissement qui crée les profits. Le déficit public et l’excédent commercial s’y ajoutent.</p>
<h4>3. Des prix fixés par une marge</h4>
<p>Dans l’industrie, les grandes entreprises fixent leurs prix en ajoutant une marge à leurs coûts. Cette marge dépend de leur « degré de monopole » : moins il y a de concurrence, plus elle est forte, et plus la part des profits dans le revenu national est élevée. La répartition des revenus devient ainsi une question de pouvoir de marché.</p>
<h4>4. Le cycle</h4>
<p>L’investissement d’aujourd’hui augmente la capacité de production de demain, ce qui finit par décourager de nouveaux investissements. Ce mécanisme, avec les délais entre la décision d’investir et la livraison des machines, produit des fluctuations régulières de l’activité (<a href="#c-cycles">voir cycles</a>).</p>
<h4>5. Les aspects politiques du plein emploi</h4>
<p>En 1943, alors que tout le monde parle de plein emploi pour l’après-guerre, Kalecki prévient : l’État sait le réaliser, en dépensant, mais les chefs d’entreprise s’y opposeront. Ils se méfient de l’intervention publique, des dépenses qui ne passent pas par eux, et surtout d’un plein emploi durable qui retire au licenciement son pouvoir de discipline. La politique économique suivra donc un « cycle politique » : relance en récession, austérité quand le plein emploi s’installe.</p>
${cycle}
<h4>6. Le développement</h4>
<p>Dans ses travaux pour les pays pauvres, Kalecki souligne que l’investissement y bute moins sur le manque d’épargne que sur le manque de nourriture : si l’agriculture ne suit pas, la relance fait monter les prix alimentaires et appauvrit les plus pauvres.</p>` },
      { id: "livres", titre: "Les livres et articles qui comptent", html: `
<p><b>« Essai sur la théorie du cycle économique » (1933, en polonais).</b> La demande effective et le cycle, trois ans avant Keynes.</p>
<p><b>Essais sur la théorie des fluctuations économiques (1939).</b> Sa première publication en anglais, avec la théorie des prix fondée sur le degré de monopole.</p>
<p><b>« Political Aspects of Full Employment » (1943).</b> Un article de quelques pages, souvent cité comme l’un des textes les plus clairvoyants de l’économie du XXe siècle.</p>
<p><b>Théorie de la dynamique économique (1954).</b> La synthèse de ses travaux sur les profits, les prix et le cycle.</p>
<p><b>Essais choisis sur la dynamique de l’économie capitaliste (1971).</b> Le recueil qui l’a fait connaître après sa mort.</p>` }
    ],
    cas: [
      { titre: "Trois ans avant Keynes", html: `
<p>Quand la Théorie générale paraît en 1936, Kalecki y reconnaît ses propres idées. Selon le récit de Joan <a href="#eco-robinson">Robinson</a>, il en aurait été un moment abattu, avant de se réjouir de voir les idées triompher. Robinson et d’autres post-keynésiens ont ensuite soutenu que sa version était plus solide que celle de Keynes, parce qu’elle partait de la concurrence imparfaite et des rapports de classe. Kalecki, lui, n’a jamais revendiqué la priorité de façon insistante.</p>` },
      { titre: "1968", html: `
<p>En mars 1968, le pouvoir communiste polonais lance une campagne « antisioniste » qui vise les intellectuels juifs. Plusieurs collaborateurs de Kalecki sont renvoyés ou poussés à l’exil. Il démissionne de ses fonctions de conseiller et se retire. Il meurt deux ans plus tard. Son œuvre, publiée en polonais puis traduite, sera rassemblée en sept volumes par son élève Jerzy Osiatyński.</p>` },
      { titre: "Le cycle politique, de 1943 à nos jours", html: `
<p>L’article de 1943 a connu une seconde vie. Les économistes y voient l’ancêtre de la théorie du « cycle politico-économique ». Après 2008, puis pendant la pandémie, de nombreux commentateurs l’ont relu pour expliquer pourquoi les plans de relance sont si vite suivis de politiques d’austérité, même quand le chômage reste élevé.</p>` }
    ],
    objections: `
<h4>1. Des hypothèses trop simples</h4>
<p>Son équation des profits suppose que les salariés n’épargnent pas et raisonne sur une économie fermée. Ses défenseurs répondent que le raisonnement s’élargit sans difficulté, comme l’ont montré Minsky et d’autres.</p>
<h4>2. Le cycle politique a changé de forme</h4>
<p>Les économistes de l’école des choix publics (<a href="#c-choix-public">voir choix public</a>) ont proposé une autre version du cycle politique : ce sont les gouvernements qui relancent avant les élections, pour être réélus. D’autres soulignent que les chefs d’entreprise ne forment pas un bloc uni et profitent aussi d’une forte demande.</p>
<h4>3. Le plein emploi et l’inflation</h4>
<p>Milton <a href="#eco-friedman">Friedman</a> et les monétaristes répondent qu’un plein emploi maintenu par la dépense publique finit par produire de l’inflation (<a href="#c-taux-naturel">voir taux de chômage naturel</a>). Kalecki l’admettait en partie, et recommandait des contrôles des prix.</p>`,
    ecoles: `
<p><b>Karl <a href="#eco-marx">Marx</a></b> et <b>Rosa Luxemburg</b> lui donnent son point de départ : la demande et les rapports de classe.</p>
<p><b>Joan <a href="#eco-robinson">Robinson</a></b>, <b>Richard Kahn</b> et <b>Nicholas Kaldor</b> font de lui une référence centrale de l’école post-keynésienne.</p>
<p><b>Hyman <a href="#eco-minsky">Minsky</a></b> reprend son équation des profits pour étudier l’instabilité financière.</p>
<p><b>Josef Steindl</b>, son collègue à Oxford, prolonge son analyse de la concentration industrielle.</p>
<p><b>Stephanie <a href="#eco-kelton">Kelton</a></b> et la théorie moderne de la monnaie s’appuient sur ses analyses du déficit et des profits.</p>`,
    source: {
      titre: "Michał Kalecki, « Political Aspects of Full Employment », The Political Quarterly, 1943",
      texte: "Dans un régime de plein emploi permanent, le renvoi cesserait de jouer son rôle de mesure disciplinaire.",
      notes: `
<p><b>Le contexte.</b> En 1943, alors que la guerre fait disparaître le chômage, les gouvernements alliés promettent le plein emploi pour la paix. Kalecki demande pourquoi, si l’on sait le réaliser, on ne l’a pas fait dans les années 1930.</p>
<p><b>L’argument.</b> Quand chacun peut retrouver un emploi facilement, la menace du licenciement perd son effet : les salariés négocient plus fermement, la discipline au travail se relâche. Les chefs d’entreprise préfèrent alors un peu de chômage à des profits plus élevés.</p>
<p><b>Ce qu’il en reste.</b> L’article ne dit pas que le plein emploi est impossible, mais qu’il demande un rapport de force politique. Les Trente Glorieuses, avec leur chômage très faible, puis le retour du chômage de masse, ont été lues à la lumière de cet argument.</p>`
    },
    quiz: [
      { q: "Qu’a découvert Kalecki dès 1933, avant Keynes ?",
        o: ["La loi des débouchés, selon laquelle l’offre crée sa demande", "Le rôle de la demande effective dans le niveau de l’activité", "L’avantage comparatif, qui pousse les pays à se spécialiser", "La théorie quantitative, qui lie les prix à la masse monétaire"], c: 1,
        e: "Il le publie en polonais, trois ans avant la Théorie générale." },
      { q: "Selon l’équation des profits de Kalecki, d’où viennent les profits dans une économie simplifiée ?",
        o: ["De l’épargne des ménages, que les banques placent dans les entreprises", "Des ventes aux marchés étrangers, qui rapportent des devises", "Des dépenses des capitalistes en investissement et consommation", "Des impôts prélevés par l’État sur les ménages et les firmes"], c: 2,
        e: "« Les capitalistes gagnent ce qu’ils dépensent. »" },
      { q: "Pourquoi les chefs d’entreprise pourraient-ils s’opposer au plein emploi durable ?",
        o: ["Parce qu’il fait mécaniquement baisser les profits des entreprises", "Parce qu’il retire au licenciement son pouvoir de discipline", "Parce qu’il oblige les entreprises à payer davantage d’impôts", "Parce qu’il fait baisser les prix et donc les marges des firmes"], c: 1,
        e: "C’est l’argument de l’article de 1943." },
      { q: "Comment les grandes entreprises fixent-elles leurs prix selon Kalecki ?",
        o: ["En ajoutant une marge à leurs coûts, selon leur pouvoir de marché", "Par des enchères entre acheteurs et vendeurs sur chaque marché", "En suivant le taux directeur que fixe la banque centrale chaque mois", "Au niveau où l’offre égale la demande sur un marché concurrentiel"], c: 0,
        e: "C’est le « degré de monopole »." }
    ],
    ouverte: {
      q: "La Suisse connaît depuis longtemps un chômage parmi les plus bas d’Europe. Contredit-elle l’idée de Kalecki selon laquelle le plein emploi durable inquiète les chefs d’entreprise ?",
      r: "Pas entièrement. La Suisse montre qu’un chômage très bas peut durer, mais elle l’a obtenu par des moyens que Kalecki aurait analysés avec intérêt. D’abord, la main-d’œuvre étrangère a longtemps servi de tampon : lors de la récession du milieu des années 1970, une grande partie des emplois supprimés concernait des travailleurs étrangers dont les permis n’ont pas été renouvelés, et le chômage officiel est resté faible. Ensuite, la « paix du travail », signée en 1937 dans l’industrie des machines, a remplacé les grèves par la négociation, ce qui a apaisé le rapport de force que Kalecki plaçait au centre. Enfin, la réduction de l’horaire de travail a permis de traverser les crises de 2009 et de 2020 sans licenciements massifs. Kalecki y verrait un compromis social particulier, plutôt qu’une réfutation : le plein emploi y est accepté parce qu’il s’accompagne d’une grande flexibilité et de syndicats peu conflictuels."
    },
    lectures: [
      ["Accessible", "Michał Kalecki, « Political Aspects of Full Employment », The Political Quarterly, 1943, quelques pages."],
      ["Intermédiaire", "Joan Robinson, « Kalecki and Keynes », 1964, repris dans ses Essais."],
      ["Intermédiaire", "Michał Kalecki, Essais choisis sur la dynamique de l’économie capitaliste, 1971."],
      ["Recherche", "Jan Toporowski, Michał Kalecki: An Intellectual Biography, deux volumes, 2013 et 2018."]
    ],
    decouvrir: {
      questions: [
        { q: "Qu’y a-t-il de remarquable dans le parcours de Kalecki ?",
          o: ["Autodidacte, il découvre dès 1933, en polonais, des idées proches de Keynes", "Il a été l’élève de Keynes à Cambridge, où il a préparé sa thèse de doctorat", "Il a dirigé la banque centrale polonaise dans l’entre-deux-guerres", "Il a reçu le prix Nobel pour ses travaux sur les cycles économiques"], c: 0,
          e: "C’est un autodidacte de génie." },
        { q: "Selon Kalecki, quel cycle la politique économique risque-t-elle de suivre ?",
          o: ["Relance quand le chômage monte, austérité quand il disparaît", "Croissance continue, sans crise, grâce à une politique stable", "Austérité permanente pour maintenir l’équilibre des comptes publics", "Une alternance d’inflation et de déflation, année après année"], c: 0,
          e: "Le plein emploi donne du pouvoir aux salariés, ce qui inquiète les chefs d’entreprise." }
      ],
      duree: 5,
      html: `
<h3>Un autodidacte de génie</h3>
<p>Michał Kalecki, né à Łódź en 1899, n’a jamais suivi de cours d’économie. En 1933, dans un article écrit en polonais, il découvre l’essentiel de ce que Keynes publiera trois ans plus tard : c’est la dépense, et surtout l’investissement, qui commande l’emploi.</p>
${vieKalecki}
<h3>Les profits viennent des dépenses</h3>
<p>Son idée la plus surprenante : dans une économie simplifiée, les profits ne viennent pas de l’épargne des entrepreneurs, mais de leurs dépenses. Quand ils investissent, ils créent les revenus qui reviennent sous forme de profits ; quand ils cessent, tout recule.</p>
<h3>Le plein emploi est aussi une affaire politique</h3>
<p>En 1943, il prévient que l’État sait créer le plein emploi, mais que les chefs d’entreprise s’y opposeront, car il donne du pouvoir aux salariés. La politique économique suivra un cycle : relance quand le chômage monte, austérité quand il disparaît.</p>
${cycle}
<h3>À retenir</h3>
<p>Kalecki relie l’économie et les rapports de force. Le portrait complet présente sa vie, ses idées et les critiques qu’elles suscitent.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De Łódź à Oxford, New York et Varsovie.",
      epoque: "La Grande Dépression vue depuis la Pologne et Marx.",
      pensee: "Six étapes, de la demande effective au développement.",
      livres: "De l’essai de 1933 aux essais choisis de 1971.",
      cas: "Trois ans avant Keynes, 1968, le cycle politique aujourd’hui.",
      objections: "Des hypothèses simples, un autre cycle politique, l’inflation.",
      ecoles: "Marx et Luxemburg, les post-keynésiens, Minsky, Steindl, Kelton.",
      source: "Le renvoi cesserait de jouer son rôle disciplinaire.",
      quiz: "Quatre questions corrigées et une question sur le chômage suisse.",
      lectures: "Quatre lectures classées par niveau."
    }
  };

  /* =====================================================================
     MICHEL AGLIETTA
     ===================================================================== */
  const vieAglietta = lifeline(1938, 2025, [
    [1938, "naissance à Chambéry", true], [1974, "thèse sur les États-Unis", false], [1976, "Régulation et crises", true], [1982, "La Violence de la monnaie", false],
    [1995, "Macroéconomie financière", true], [2016, "La Monnaie entre dettes et souveraineté", false], [2025, "mort à Paris", true]
  ], "Michel Aglietta, 1938-2025", "Polytechnicien et statisticien, Aglietta a fondé l’une des rares écoles économiques nées en France après 1945, puis consacré sa vie à la monnaie et à la finance.");

  const fordisme = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>Le cercle vertueux du fordisme</text>`;
    s += node(230, 44, 180, 58, "Production de masse", "gains de productivité", "var(--note)");
    s += node(450, 136, 170, 58, "Hausse des salaires", "conventions collectives", "var(--gold)");
    s += node(230, 226, 180, 58, "Consommation de masse", "voitures, électroménager", "var(--note)");
    s += node(20, 136, 170, 58, "Investissement", "débouchés assurés", "var(--gold)");
    s += arrow(410, 80, 500, 132) + arrow(500, 198, 410, 240) + arrow(230, 250, 140, 198) + arrow(140, 134, 230, 82);
    s += `<text x="320" y="170" text-anchor="middle" ${S}>l’État social et la monnaie stabilisent le cercle</text>`;
    return s;
  })(), "D’après Régulation et crises du capitalisme (1976), schéma. Après 1945, les gains de productivité sont partagés avec les salariés, qui achètent ce qu’ils produisent. Quand la productivité ralentit à la fin des années 1960, le cercle se rompt et la « grande crise » commence.", "Schéma du cercle du fordisme");

  OEC.portraits["aglietta"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Michel Aglietta (1938-2025), économiste français, fonde en 1976 l’école de la régulation : le capitalisme ne s’équilibre pas de lui-même, mais grâce à des institutions qui assurent sa stabilité pendant une période, puis s’usent.",
      "Il forge la notion de « fordisme » pour décrire la croissance des Trente Glorieuses, fondée sur le partage des gains de productivité entre profits et salaires, et explique la crise des années 1970 par son épuisement.",
      "Avec André Orléan, il montre que la monnaie n’est pas une simple marchandise, mais une institution sociale fondée sur la confiance et la souveraineté, une idée qu’il applique ensuite à l’euro, à la finance mondiale et à la Chine."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Michel Aglietta naît le 18 février 1938 à Chambéry, en Savoie. Il entre à l’École polytechnique, puis à l’École nationale de la statistique et de l’administration économique, et devient administrateur de l’INSEE. Il participe à la construction des modèles de prévision de l’économie française, et passe un temps aux États-Unis.</p>
<p>Il soutient en 1974, sous la direction de Raymond Barre, une thèse sur la croissance de l’économie américaine de 1870 à 1970. Publiée en 1976 sous le titre Régulation et crises du capitalisme, elle fait l’effet d’un manifeste. Avec Robert Boyer, Alain Lipietz et d’autres, elle donne naissance à l’école de la régulation.</p>
${vieAglietta}
<p>Professeur à l’université de Paris-Nanterre et conseiller scientifique au Centre d’études prospectives et d’informations internationales (CEPII), il consacre ensuite l’essentiel de son œuvre à la monnaie et à la finance, avec André Orléan, puis à l’économie chinoise. Membre du Haut Conseil des finances publiques, il intervient souvent dans le débat public sur l’euro et la finance. Il meurt à Paris le 24 avril 2025.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Au début des années 1970, la croissance rapide des pays riches s’arrête. Le chômage et l’inflation montent en même temps (<a href="#c-stagflation">voir stagflation</a>), ce que la synthèse keynésienne n’avait pas prévu. Les monétaristes accusent l’État et la monnaie ; les marxistes annoncent la fin du capitalisme.</p>
<p>Aglietta prend le problème par l’autre bout. Plutôt que de demander pourquoi la crise est arrivée, il demande pourquoi une croissance aussi forte et aussi stable a été possible pendant vingt-cinq ans, alors que le capitalisme avait connu tant de crises auparavant. Il emprunte à <a href="#eco-marx">Marx</a> l’attention aux rapports sociaux et à l’accumulation du capital, à <a href="#eco-keynes">Keynes</a> le rôle de la demande, et aux historiens le goût du temps long.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Pas d’équilibre naturel</h4>
<p>Pour Aglietta, le capitalisme est traversé de conflits, entre salariés et employeurs, entre entreprises concurrentes, entre créanciers et débiteurs. Rien ne garantit qu’ils se résolvent d’eux-mêmes en un équilibre. La stabilité, quand elle existe, doit être expliquée.</p>
<h4>2. Le mode de régulation</h4>
<p>Elle s’explique par un ensemble d’institutions qui se tiennent : la manière de fixer les salaires, les formes de la concurrence, le régime monétaire, le rôle de l’État, la place dans l’économie mondiale. Ensemble, elles forment un « mode de régulation » (<a href="#c-mode-regulation">voir mode de régulation</a>).</p>
<h4>3. Le fordisme</h4>
<p>Après 1945, ces institutions forment un cercle vertueux. La production de masse dégage de forts gains de productivité, partagés avec les salariés par des conventions collectives. Les salariés achètent ce qu’ils produisent, ce qui soutient l’investissement. Aglietta appelle ce système le « fordisme », en référence à Henry Ford, qui voulait que ses ouvriers puissent acheter ses voitures.</p>
${fordisme}
<h4>4. Les grandes crises</h4>
<p>À la fin des années 1960, la productivité ralentit, la concurrence internationale s’intensifie, les salariés résistent à la baisse de leur part. Le cercle se rompt : ce n’est pas une récession ordinaire, mais une « grande crise » du mode de régulation, qui ne se résout que par l’invention d’institutions nouvelles.</p>
<h4>5. La monnaie, institution sociale</h4>
<p>Avec André Orléan, Aglietta soutient que la monnaie n’est ni une marchandise ni un simple outil technique. Elle repose sur la confiance de tous dans le fait que les autres l’accepteront. Cette confiance est fragile : elle peut se rompre dans les crises, les hyperinflations ou les paniques bancaires. La monnaie est donc liée à la souveraineté politique (<a href="#c-fonctions-monnaie">voir fonctions de la monnaie</a>).</p>
<h4>6. Le capitalisme financiarisé</h4>
<p>Après les années 1980, un nouveau régime se met en place, dominé par la finance et la valeur pour l’actionnaire. Aglietta en étudie l’instabilité, de la crise de 2008 aux faiblesses de l’euro, une monnaie sans État complet. Il plaide pour des institutions capables de réguler la finance mondiale et de financer la transition écologique.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Régulation et crises du capitalisme (1976).</b> Le livre fondateur, à partir de l’histoire économique des États-Unis.</p>
<p><b>La Violence de la monnaie (1982), avec André Orléan.</b> La monnaie comme institution sociale, née de la violence et de la rivalité.</p>
<p><b>Macroéconomie financière (1995).</b> Un manuel souvent réédité sur la finance et ses crises.</p>
<p><b>La Monnaie entre dettes et souveraineté (2016).</b> Une grande synthèse historique sur la monnaie, des sociétés anciennes à l’euro.</p>
<p><b>Capitalisme : le temps des ruptures (2019), ouvrage collectif dirigé par lui.</b> Son analyse du capitalisme contemporain et des transitions à venir.</p>` }
    ],
    cas: [
      { titre: "Une école née en France", html: `
<p>Dans une discipline dominée par les universités américaines, l’école de la régulation est l’une des rares écoles de pensée économique nées en France après 1945. Elle se développe à partir de la fin des années 1970 autour d’Aglietta, de Robert Boyer et du CEPREMAP, un centre de recherche lié au Plan. Elle influence la science politique, la sociologie et la géographie bien au-delà de l’économie.</p>` },
      { titre: "L’euro, une monnaie inachevée", html: `
<p>Dès les années 1990, Aglietta souligne que l’euro est une monnaie sans État : une banque centrale commune, mais pas de budget commun ni de solidarité automatique entre pays. Pendant la crise de la zone euro, de 2010 à 2012, il défend une union budgétaire et un rôle accru de la Banque centrale européenne. Les décisions prises ensuite, comme la promesse de la BCE de 2012, vont en partie dans ce sens.</p>` },
      { titre: "La Chine", html: `
<p>À partir des années 2000, Aglietta consacre plusieurs livres à l’économie chinoise, qu’il analyse comme un mode de régulation original, où l’État garde la main sur la monnaie et le crédit. Il y voit une illustration de sa thèse : il n’existe pas un seul capitalisme, mais des capitalismes, organisés par des institutions différentes.</p>` }
    ],
    objections: `
<h4>1. Une théorie trop large</h4>
<p>On reproche à l’école de la régulation de décrire chaque période avec beaucoup de finesse, mais de mieux expliquer les crises passées que d’annoncer les suivantes. Les notions de mode de régulation et de régime d’accumulation sont difficiles à tester.</p>
<h4>2. Le fordisme idéalisé</h4>
<p>Des historiens soulignent que le « compromis fordiste » ne valait que pour une partie des salariés, surtout des hommes de l’industrie, et laissait de côté les femmes, les immigrés et les pays du Sud.</p>
<h4>3. Le poids des mathématiques</h4>
<p>Les économistes du courant dominant jugent ses modèles moins formalisés que les leurs. Aglietta répondait que la formalisation doit suivre les institutions, et non les ignorer.</p>`,
    ecoles: `
<p><b>Karl <a href="#eco-marx">Marx</a></b> et <b>John Maynard <a href="#eco-keynes">Keynes</a></b> sont ses deux sources principales.</p>
<p><b>Robert Boyer</b>, <b>Alain Lipietz</b> et <b>Benjamin Coriat</b> développent avec lui l’école de la régulation.</p>
<p><b>André Orléan</b> prolonge avec lui l’analyse de la monnaie et des marchés financiers comme institutions.</p>
<p><b>Les études des « variétés de capitalisme »</b> reprennent l’idée qu’il existe plusieurs capitalismes.</p>
<p><b>Karl <a href="#eco-polanyi">Polanyi</a></b> partage avec lui l’idée que les marchés reposent sur des institutions sociales.</p>`,
    source: {
      titre: "Michel Aglietta, Régulation et crises du capitalisme, 1976 (formule résumant la thèse du livre)",
      texte: "Le capitalisme ne trouve pas en lui-même les conditions de sa stabilité ; il les reçoit d’institutions qui finissent par s’user.",
      notes: `
<p><b>Une formule de synthèse.</b> Cette phrase résume l’idée centrale du livre ; ce n’est pas une citation mot pour mot.</p>
<p><b>Contre deux visions.</b> Elle s’oppose à la fois à l’idée d’un marché qui s’équilibre de lui-même et à l’idée d’un capitalisme condamné à l’effondrement. Le capitalisme dure, mais en changeant de forme.</p>
<p><b>Une leçon pour aujourd’hui.</b> Si la stabilité dépend d’institutions, chaque grande transition, numérique ou écologique, demande d’en inventer de nouvelles.</p>`
    },
    quiz: [
      { q: "Qu’appelle-t-on un « mode de régulation » ?",
        o: ["Une loi qui encadre la concurrence entre les entreprises", "Des institutions qui assurent la stabilité de la croissance", "Une règle que la banque centrale suit pour fixer ses taux d’intérêt", "Un modèle mathématique qui décrit l’équilibre du marché"], c: 1,
        e: "Salaires, concurrence, monnaie, État et insertion internationale." },
      { q: "Qu’est-ce que le fordisme ?",
        o: ["Une organisation du travail fondée sur l’artisanat et l’atelier", "Un régime de croissance associant production et consommation de masse", "Une théorie de la monnaie qui repose sur la rareté de l’or", "Une politique protectionniste qui ferme les frontières aux importations"], c: 1,
        e: "Le modèle des Trente Glorieuses, où les salaires montent avec la productivité." },
      { q: "Comment Aglietta explique-t-il la crise des années 1970 ?",
        o: ["Par une erreur de la banque centrale", "Par l’épuisement du fordisme", "Par une guerre", "Par la hausse excessive de la masse monétaire"], c: 1,
        e: "La productivité ralentit et le cercle vertueux se rompt." },
      { q: "Que soutiennent Aglietta et Orléan sur la monnaie ?",
        o: ["Qu’elle est une marchandise comme les autres, échangée sur un marché", "Qu’elle est une institution sociale fondée sur la confiance", "Qu’elle est neutre à long terme et sans effet sur l’économie réelle", "Qu’elle doit être adossée à l’or pour conserver sa valeur"], c: 1,
        e: "D’où le lien entre monnaie et souveraineté." }
    ],
    ouverte: {
      q: "En 1937, syndicats et patrons de l’industrie suisse des machines signent la « paix du travail » : ils renoncent à la grève et au lock-out et règlent leurs conflits par la négociation. Comment Aglietta lirait-il cet accord ?",
      r: "Il y verrait une pièce centrale du mode de régulation suisse. La convention de 1937, signée dans l’industrie des machines et des métaux, remplace l’affrontement par la négociation collective et l’arbitrage. Elle stabilise le rapport salarial, ce qu’Aglietta place au cœur de toute régulation : les salaires suivent la productivité, les conflits sont rares, les entreprises peuvent investir à long terme. Associée à une monnaie solide, à un État fédéral léger et à une forte insertion dans le commerce mondial, elle a contribué à la stabilité de la croissance suisse d’après-guerre. Aglietta ajouterait que ce compromis a ses conditions et ses limites : il s’est appuyé sur une main-d’œuvre étrangère dont les droits étaient restreints, et il est mis à l’épreuve par la financiarisation et la concurrence mondiale. Ses critiques libéraux y verraient plutôt l’effet de la liberté contractuelle entre partenaires sociaux, sans intervention de l’État."
    },
    lectures: [
      ["Accessible", "Robert Boyer, La Théorie de la régulation : les fondamentaux, La Découverte, 2004."],
      ["Intermédiaire", "Michel Aglietta, Régulation et crises du capitalisme, 1976, introduction et conclusion."],
      ["Intermédiaire", "Michel Aglietta, La Monnaie entre dettes et souveraineté, 2016."],
      ["Recherche", "Michel Aglietta et André Orléan, La Violence de la monnaie, 1982 ; La Monnaie entre violence et confiance, 2002."]
    ],
    decouvrir: {
      questions: [
        { q: "Quel livre d’Aglietta fonde l’école de la régulation en 1976 ?",
          o: ["Régulation et crises du capitalisme, de Michel Aglietta", "La Grande Transformation, de Karl Polanyi, paru en 1944", "Le Capital au XXIe siècle, de Thomas Piketty, paru en 2013", "La Théorie générale, de John Maynard Keynes, paru en 1936"], c: 0,
          e: "C’est l’une des rares écoles économiques nées en France après la guerre." },
        { q: "Pour Aglietta, qu’est-ce qui permet au capitalisme de tenir pendant des décennies ?",
          o: ["Des institutions qui règlent les salaires, la monnaie et l’État", "Les forces du marché, qui se corrigent d’elles-mêmes sans règles", "La découverte de nouvelles ressources naturelles à exploiter", "Un hasard historique que les économistes ne peuvent pas expliquer"], c: 0,
          e: "Quand ces institutions s’usent, une grande crise éclate." }
      ],
      duree: 5,
      html: `
<h3>Un statisticien devenu théoricien</h3>
<p>Michel Aglietta, né à Chambéry en 1938 et mort en 2025, est polytechnicien et statisticien. En 1976, son livre Régulation et crises du capitalisme fonde l’une des rares écoles économiques nées en France après la guerre.</p>
${vieAglietta}
<h3>Pourquoi le capitalisme tient, puis craque</h3>
<p>Pour Aglietta, le capitalisme ne s’équilibre pas tout seul. Il tient pendant des décennies grâce à des institutions : la manière de fixer les salaires, la monnaie, l’État. Quand ces institutions s’usent, une grande crise éclate.</p>
<h3>Le fordisme</h3>
<p>Après 1945, les ouvriers gagnent davantage à mesure qu’ils produisent plus, et achètent ce qu’ils fabriquent : voitures, réfrigérateurs, télévisions. Ce cercle vertueux s’arrête au début des années 1970.</p>
${fordisme}
<h3>À retenir</h3>
<p>Aglietta invite à regarder le capitalisme comme une histoire de périodes, chacune avec ses règles. Le portrait complet présente aussi ses travaux sur la monnaie et les critiques qu’on lui adresse.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Chambéry à l’INSEE, Nanterre et le CEPII.",
      epoque: "La fin des Trente Glorieuses et la stagflation.",
      pensee: "Six étapes, du mode de régulation à la finance.",
      livres: "De Régulation et crises à La Monnaie entre dettes et souveraineté.",
      cas: "Une école française, l’euro inachevé, la Chine.",
      objections: "Une théorie trop large, le fordisme idéalisé, les mathématiques.",
      ecoles: "Marx et Keynes, Boyer et Lipietz, Orléan, Polanyi.",
      source: "Le capitalisme reçoit sa stabilité d’institutions.",
      quiz: "Quatre questions corrigées et une question sur la paix du travail.",
      lectures: "Quatre lectures classées par niveau."
    }
  };
})();
