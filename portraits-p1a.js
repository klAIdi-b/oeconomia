/* Œconomia — portraits longs, lot 1 (a) : Adam Smith, David Ricardo */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const box = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + (sub ? h / 2 - 3 : h / 2 + 5)}" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">${t}</text>${sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>` : ""}`;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };

  /* =====================================================================
     ADAM SMITH
     ===================================================================== */
  const vieSmith = lifeline(1723, 1790, [
    [1723, "naissance à Kirkcaldy", true], [1737, "université de Glasgow", false], [1740, "Oxford", true], [1751, "professeur à Glasgow", false],
    [1759, "Théorie des sentiments moraux", true], [1764, "voyage en France et à Genève", false], [1776, "Richesse des nations", true], [1778, "commissaire des douanes", false]
  ], "Adam Smith, 1723-1790", "Une vie d’universitaire écossais, presque sans événements extérieurs, à l’exception d’un long voyage en France et en Suisse. Smith meurt à Édimbourg en 1790, après avoir fait brûler la plupart de ses manuscrits inachevés.");

  const livres = fig(290, (() => {
    const items = [["Livre I", "Productivité, division du travail, prix, salaires, profits, rente", "var(--note)"], ["Livre II", "Le capital, l’épargne et l’accumulation", "var(--note)"], ["Livre III", "L’histoire de la richesse en Europe", "var(--gold)"], ["Livre IV", "La critique du mercantilisme et des physiocrates", "var(--serial)"], ["Livre V", "Les dépenses et les revenus de l’État", "var(--plum)"]];
    let s = `<text x="20" y="24" ${T}>Le plan de la Richesse des nations (1776)</text>`;
    items.forEach(([n, d, c], i) => {
      const x = 20 + i * 122;
      s += `<rect x="${x}" y="44" width="112" height="200" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/>`;
      s += `<text x="${x + 56}" y="72" text-anchor="middle" style="fill:${c}; font:700 13.5px Manrope, sans-serif">${n}</text>`;
      const words = d.split(" "); let line = "", ly = 102;
      words.forEach((wd) => { if ((line + wd).length > 15) { s += `<text x="${x + 56}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
      s += `<text x="${x + 56}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
    });
    s += `<text x="20" y="274" ${S}>Plus de mille pages, qui vont de l’atelier d’épingles aux finances publiques de l’Europe entière.</text>`;
    return s;
  })(), "Smith part de la production (livre I), passe à l’accumulation (II), à l’histoire (III), à la critique des politiques de son temps (IV), et termine par le rôle de l’État (V). Le livre IV, contre le « système mercantile », a fait sa réputation de champion du libre-échange.", "Cinq cartes décrivant les cinq livres de la Richesse des nations");

  const etat = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>Les trois devoirs du souverain selon Smith (livre V)</text>`;
    s += box(20, 50, 190, 120, "La défense", "protéger contre", "var(--plum)") + `<text x="115" y="146" text-anchor="middle" ${S}>les autres nations</text>`;
    s += box(225, 50, 190, 120, "La justice", "protéger chacun contre", "var(--gold)") + `<text x="320" y="146" text-anchor="middle" ${S}>l’injustice des autres</text>`;
    s += box(430, 50, 190, 120, "Les ouvrages publics", "routes, ponts, canaux,", "var(--note)") + `<text x="525" y="146" text-anchor="middle" ${S}>éducation du peuple</text>`;
    s += `<text x="20" y="206" ${S}>Pour le reste, le « système de la liberté naturelle » laisse chacun poursuivre son intérêt, dans les limites de la justice.</text>`;
    s += `<text x="20" y="224" ${S}>Smith admet de nombreuses exceptions : réglementation bancaire, taux d’intérêt maximal, actes de navigation.</text>`;
    return s;
  })(), "Smith n’est pas l’avocat d’un État minimal au sens moderne : ses ouvrages publics comprennent l’éducation élémentaire, et il accepte plusieurs réglementations quand la sécurité de la société l’exige. Mais il se méfie des privilèges accordés aux marchands et aux corporations.", "Trois cases : défense, justice, ouvrages publics");

  OEC.portraits["smith"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Adam Smith (1723-1790), philosophe écossais, est souvent présenté comme le père de l’économie politique. Sa Richesse des nations (1776) explique la prospérité par la division du travail, l’échange et l’accumulation du capital, et critique les privilèges et le protectionnisme du « système mercantile ».",
      "Il était d’abord un philosophe moral : sa Théorie des sentiments moraux (1759) étudie la sympathie, l’imagination de l’autre, comme fondement de la vie sociale. L’intérêt personnel qu’il décrit dans le commerce s’inscrit dans une société de règles, de justice et de vertus.",
      "Récupéré au XXe siècle comme l’apôtre du laissez-faire, il était plus nuancé : méfiant envers les marchands, soucieux des travailleurs, partisan de l’éducation publique. Les historiens ont largement réhabilité cette complexité."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Adam Smith est baptisé le 5 juin 1723 à Kirkcaldy, petit port écossais sur le Firth of Forth. Son père, contrôleur des douanes, est mort quelques mois avant sa naissance ; il est élevé par sa mère, à laquelle il restera attaché toute sa vie. À quatorze ans, il entre à l’université de Glasgow, où l’enseignement du philosophe Francis Hutcheson le marque profondément. Il passe ensuite six ans au Balliol College d’Oxford, dont il gardera un souvenir sévère : les professeurs, écrira-t-il, y avaient depuis longtemps renoncé jusqu’à faire semblant d’enseigner.</p>
<p>Revenu en Écosse, il donne des conférences publiques à Édimbourg, puis devient en 1751 professeur à l’université de Glasgow, d’abord de logique, puis de philosophie morale. Son cours couvre la théologie naturelle, l’éthique, le droit et ce que l’on appelle alors la « police », l’économie. Il se lie d’une amitié profonde avec le philosophe David Hume. En 1759, il publie la Théorie des sentiments moraux, qui le rend célèbre en Europe.</p>
${vieSmith}
<p>En 1764, il quitte sa chaire pour accompagner un jeune aristocrate, le duc de Buccleuch, dans un voyage de formation. Il passe dix-huit mois à Toulouse, séjourne à Genève, où il rend visite à Voltaire, puis à Paris, où il rencontre les physiocrates, <a href="#eco-quesnay">Quesnay</a> et Turgot. La pension généreuse que lui verse le duc lui permet ensuite de se consacrer pendant dix ans à son grand livre. Recherches sur la nature et les causes de la richesse des nations paraît le 9 mars 1776. En 1778, ironie souvent relevée, ce critique des droits de douane devient commissaire des douanes d’Écosse à Édimbourg, poste qu’il occupe jusqu’à sa mort, le 17 juillet 1790.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Smith vit au cœur des Lumières écossaises, un foyer intellectuel exceptionnel où se côtoient Hume, l’historien William Robertson, le philosophe Adam Ferguson, le chimiste Joseph Black, l’ingénieur James Watt, qu’il fait accueillir à l’université de Glasgow. Glasgow est alors un port en plein essor, enrichi par le commerce du tabac avec l’Amérique. Mais la révolution industrielle n’en est qu’à ses débuts : Smith décrit un monde d’ateliers, de manufactures et de commerce, non encore d’usines.</p>
<p>La pensée économique dominante est le mercantilisme. Les États européens cherchent à accumuler or et argent, à exporter plus qu’ils n’importent, à protéger leurs manufactures par des droits de douane, à accorder des monopoles à des compagnies de commerce, comme la Compagnie des Indes orientales, et à réserver le commerce de leurs colonies à leurs propres marchands. Smith appelle ce système le « système mercantile », et lui consacre l’essentiel de son livre IV.</p>
<p>La Richesse des nations paraît la même année que la Déclaration d’indépendance américaine. Smith y consacre de longues pages aux colonies, et suggère que la Grande-Bretagne aurait intérêt à se séparer volontairement des colonies américaines, dont le monopole commercial lui coûte plus qu’il ne rapporte.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La sympathie</h4>
<p><b>La question.</b> D’où viennent nos jugements moraux, s’ils ne viennent ni de la religion ni du seul intérêt ?</p>
<p><b>Son raisonnement.</b> Nous sommes capables d’imaginer ce que ressentent les autres. Cette « sympathie » nous pousse à juger nos propres actes comme le ferait un « spectateur impartial », un témoin bien informé et sans parti pris que chacun porte en soi. La morale naît ainsi des relations sociales, pas d’un calcul égoïste.</p>
<p><b>Un exemple.</b> La Théorie des sentiments moraux s’ouvre sur une scène simple. Quand nous voyons un coup sur le point de frapper la jambe de quelqu’un, nous retirons instinctivement la nôtre. Ce réflexe montre que nous éprouvons, en imagination, ce qui arrive aux autres.</p>
<h4>2. La richesse, c’est le travail productif</h4>
<p><b>La question.</b> Qu’est-ce qui rend une nation riche ?</p>
<p><b>Son raisonnement.</b> Les mercantilistes répondaient l’or et l’argent, qu’il fallait accumuler en exportant plus qu’on n’importait. Smith répond que la richesse est la masse des biens utiles que produit le travail des habitants. Elle augmente quand chaque travailleur produit davantage, et quand une plus grande part de la population travaille.</p>
<p><b>Un exemple.</b> L’Espagne et le Portugal reçoivent l’or et l’argent des mines d’Amérique, observe Smith, et restent pourtant parmi les pays les plus pauvres d’Europe. Posséder de l’or ne suffit pas, il faut produire.</p>
<p><a href="#c-pib">Pour aller plus loin, la notice « PIB et ses limites », qui mesure aujourd’hui cette production →</a></p>
<h4>3. La division du travail</h4>
<p><b>La question.</b> Pourquoi le travail devient-il plus productif ?</p>
<p><b>Son raisonnement.</b> Quand on se partage les tâches, chacun devient plus habile, perd moins de temps à passer d’une activité à l’autre, et les gestes simples peuvent être confiés à des machines. Mais pour se spécialiser, il faut pouvoir vendre ce qu’on produit. La division du travail est donc limitée par l’étendue du marché.</p>
<p><b>Un exemple.</b> Dans une manufacture d’épingles, dix ouvriers qui se partagent dix-huit opérations fabriquent environ 48 000 épingles par jour, soit 4 800 chacun. Seul, un ouvrier en ferait à peine vingt. À l’inverse, dans un hameau isolé des Highlands écossais, chaque paysan doit être son propre boucher, boulanger et brasseur, faute de clients pour un spécialiste.</p>
<p><a href="#c-division-travail">Pour aller plus loin, la notice « Division du travail » →</a></p>
${livres}
<h4>4. L’échange et l’intérêt personnel</h4>
<p><b>La question.</b> Comment des millions d’inconnus arrivent-ils à coopérer ?</p>
<p><b>Son raisonnement.</b> Dans une grande société, nous dépendons de personnes que nous ne connaîtrons jamais. Nous ne pouvons pas compter sur leur bienveillance, mais nous pouvons leur proposer un échange qui les avantage aussi. Le marché permet ainsi de coopérer sans se connaître.</p>
<p><b>Un exemple.</b> « Ce n’est pas de la bienveillance du boucher, du marchand de bière ou du boulanger que nous attendons notre dîner, mais du soin qu’ils apportent à leurs intérêts. » Le pain du matin mobilise un agriculteur, un meunier, un transporteur et un boulanger, sans que personne n’organise l’ensemble.</p>
<p><a href="#c-surplus">Pour aller plus loin, la notice « Surplus du consommateur et perte sèche », qui mesure ce que chacun gagne à l’échange →</a></p>
<h4>5. La main invisible</h4>
<p><b>La question.</b> L’intérêt de chacun peut-il servir l’intérêt de tous ?</p>
<p><b>Son raisonnement.</b> Parfois, répond Smith. En cherchant son propre gain, l’individu contribue souvent à l’intérêt de la société sans le vouloir, « conduit par une main invisible ». Mais l’expression n’apparaît qu’une fois dans la Richesse des nations, et une fois dans la Théorie des sentiments moraux. Smith n’en fait pas une loi générale, et il connaît bien les cas où l’intérêt privé nuit au public, comme les ententes entre marchands.</p>
<p><b>Un exemple.</b> Le passage porte sur un cas précis. Un marchand préfère placer son capital dans son propre pays, où il le surveille mieux, plutôt qu’à l’étranger. Sans le chercher, il soutient ainsi l’activité nationale. C’est la postérité qui a fait de cette image le symbole de l’efficacité des marchés.</p>
<p><a href="#c-optimum-pareto">Pour aller plus loin, la notice « Optimum de Pareto », qui en donne la version moderne et ses conditions →</a></p>
<h4>6. Les prix et la répartition</h4>
<p><b>La question.</b> Qu’est-ce qui fixe le prix d’une marchandise ?</p>
<p><b>Son raisonnement.</b> Smith distingue le prix de marché, qui varie chaque jour avec l’offre et la demande, du prix naturel, qui paie juste les salaires, les profits et la rente à leur taux ordinaire. Le prix de marché « gravite » autour du prix naturel. Smith étudie aussi la répartition du revenu entre trois classes, les travailleurs, les capitalistes et les propriétaires fonciers.</p>
<p><b>Un exemple.</b> Un deuil public, note Smith, fait monter le prix du drap noir, soudain demandé par tous, et les salaires des ouvriers tailleurs. L’écart est passager. Quand des profits ou des salaires dépassent leur taux ordinaire, de nouveaux producteurs se tournent vers ce métier, et le prix revient vers son niveau naturel.</p>
<p><a href="#c-prix-naturel">Pour aller plus loin, la notice « Prix naturel et prix de marché » →</a></p>
<h4>7. Le système de la liberté naturelle et le rôle de l’État</h4>
<p><b>La question.</b> Que doit faire l’État ?</p>
<p><b>Son raisonnement.</b> Smith veut supprimer les privilèges, les monopoles et les protections qui faussent la concurrence, pour laisser jouer le « système simple et évident de la liberté naturelle ». L’État garde pourtant trois devoirs, la défense, la justice et les ouvrages publics que l’intérêt privé ne financerait pas, comme les routes, les ponts et l’éducation du peuple.</p>
<p><b>Un exemple.</b> Smith craint que la division du travail abrutisse l’ouvrier qui répète toute sa vie quelques gestes simples. Il propose donc, dans chaque paroisse, une petite école en partie payée par l’État, sur le modèle écossais, où les enfants du peuple apprendraient à lire, à écrire et à compter.</p>
<p><a href="#c-bien-public">Pour aller plus loin, la notice « Bien public » →</a></p>
${etat}` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Théorie des sentiments moraux (1759).</b> Le livre que Smith considérait peut-être comme le plus important, révisé jusqu’à sa mort. Il fonde la morale sur la sympathie et le spectateur impartial. La sixième édition, de 1790, ajoute une partie sur la vertu et la corruption des sentiments moraux par l’admiration des riches.</p>
<p><b>Recherches sur la nature et les causes de la richesse des nations (1776).</b> L’œuvre fondatrice de l’économie politique classique. Ses cinq livres vont de la division du travail aux finances publiques. Les chapitres 1 à 3 et 7 du livre I, le chapitre 2 du livre IV et la troisième partie du chapitre 1 du livre V sont les plus lus.</p>
<p><b>Leçons sur la jurisprudence.</b> Des notes d’étudiants de ses cours de Glasgow, découvertes au XIXe et au XXe siècle, qui montrent l’élaboration de ses idées économiques dans le cadre d’une réflexion sur le droit et l’histoire des sociétés.</p>
<p><b>Essais sur des sujets philosophiques (1795).</b> Publiés après sa mort, dont une étonnante histoire de l’astronomie, qui montre son intérêt pour la manière dont les théories scientifiques naissent pour apaiser la surprise de l’esprit.</p>` }
    ],
    cas: [
      { titre: "Genève et Voltaire, 1765", html: `
<p>Pendant son voyage de 1764-1766, Smith passe deux mois à Genève avec le duc de Buccleuch. Il y rencontre à plusieurs reprises Voltaire, alors installé à Ferney, juste de l’autre côté de la frontière, et dont il admirera toute sa vie l’esprit. Dans la Richesse des nations, il cite aussi la Suisse à plusieurs reprises : il évoque les milices suisses, qui avaient battu les armées autrichiennes et bourguignonnes, et l’administration économe du canton de Berne, l’un des rares États européens à avoir accumulé un trésor public plutôt que des dettes.</p>` },
      { titre: "Le « problème Adam Smith »", html: `
<p>Au XIXe siècle, des universitaires allemands parlent du « problème Adam Smith » : comment le même auteur a-t-il pu fonder la morale sur la sympathie en 1759, et l’économie sur l’intérêt personnel en 1776 ? Les spécialistes contemporains jugent ce problème mal posé. La sympathie et l’intérêt personnel coexistent chez Smith : l’intérêt est une motivation légitime dans le commerce, qui s’exerce dans un cadre de justice et de normes sociales décrit par la Théorie des sentiments moraux. Smith a d’ailleurs révisé les deux livres jusqu’à sa mort.</p>` },
      { titre: "Le billet de 20 livres", html: `
<p>De 2007 à 2020, Adam Smith figure sur le billet de 20 livres de la Banque d’Angleterre, avec une illustration de la manufacture d’épingles et la mention de la division du travail. Il était le premier Écossais à figurer sur un billet de la Banque d’Angleterre. Le choix a été commenté, Smith ayant été plutôt critique envers certaines pratiques bancaires de son temps et favorable à une réglementation des banques.</p>` },
      { titre: "Le critique des marchands", html: `
<p>Smith n’épargne pas les marchands et les manufacturiers. Il les accuse de chercher toujours à restreindre la concurrence et à tromper le public, et recommande d’examiner leurs propositions de loi avec la plus grande méfiance. Il défend des salaires élevés, qui rendent les travailleurs plus vigoureux et plus actifs, et observe que, dans les conflits salariaux, la loi et le gouvernement prennent presque toujours le parti des maîtres.</p>` }
    ],
    objections: `
<h4>1. Une théorie de la valeur confuse</h4>
<p>Les économistes ultérieurs, de <a href="#eco-ricardo">Ricardo</a> à <a href="#eco-marx">Marx</a> et aux marginalistes, ont reproché à Smith d’hésiter entre plusieurs théories de la valeur : le travail incorporé, le travail commandé, la somme des revenus. Son paradoxe de l’eau et du diamant ne sera résolu qu’en 1871 (<a href="#c-valeur-usage">voir valeur d’usage</a>).</p>
<h4>2. Le travail productif et improductif</h4>
<p>Smith juge improductif le travail des domestiques, des fonctionnaires, des artistes et des médecins, qui ne laisse pas d’objet durable. Cette distinction a été abandonnée par l’économie moderne, qui compte tous les services dans la production.</p>
<h4>3. La récupération libérale</h4>
<p>Des historiens comme Emma Rothschild ou Gavin Kennedy montrent que la lecture de Smith comme prophète du marché autorégulateur, très répandue au XXe siècle, simplifie fortement sa pensée. La « main invisible » est un passage marginal, et Smith accepte de nombreuses interventions publiques.</p>
<h4>4. Les angles morts</h4>
<p>Smith condamne l’esclavage comme inefficace et moralement odieux, mais certains critiques soulignent qu’il sous-estime la violence coloniale sur laquelle reposait une partie de la prospérité britannique. D’autres relèvent la place modeste qu’il accorde au travail des femmes et au foyer, qu’Adam Smith lui-même n’a jamais eu à gérer, vivant avec sa mère.</p>`,
    ecoles: `
<p><b><a href="#eco-ricardo">Ricardo</a></b>, <b><a href="#eco-malthus">Malthus</a></b> et <b><a href="#eco-say">Say</a></b> prolongent et systématisent son œuvre ; Say la diffuse en France.</p>
<p><b><a href="#eco-mill">John Stuart Mill</a></b> en fait la synthèse au milieu du XIXe siècle.</p>
<p><b><a href="#eco-marx">Marx</a></b> reprend sa théorie de la valeur et de la répartition pour en tirer une critique du capitalisme.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> et <b><a href="#eco-friedman">Friedman</a></b> voient en lui le fondateur de la tradition libérale.</p>
<p><b><a href="#eco-sen">Amartya Sen</a></b> et les philosophes contemporains redécouvrent la Théorie des sentiments moraux.</p>
<p><b>Les économistes comportementaux</b>, comme Vernon Smith, y voient une anticipation de leurs travaux sur la réciprocité.</p>`,
    source: {
      titre: "Adam Smith, Recherches sur la nature et les causes de la richesse des nations, 1776, livre I, chapitre 2",
      texte: "Ce n’est pas de la bienveillance du boucher, du marchand de bière ou du boulanger que nous attendons notre dîner, mais du soin qu’ils apportent à leurs intérêts. Nous ne nous adressons pas à leur humanité, mais à leur amour d’eux-mêmes.",
      notes: `
<p><b>Le contexte.</b> Le passage explique pourquoi l’échange est si répandu : dans une société où chacun a besoin de la coopération d’innombrables personnes, la bienveillance ne suffit pas. On propose à l’autre un marché qui sert aussi son intérêt.</p>
<p><b>Ce que le passage ne dit pas.</b> Smith ne dit pas que les hommes ne sont mus que par l’intérêt, ni que l’égoïsme est une vertu. Il décrit une sphère particulière, le commerce, où l’intérêt bien compris permet la coopération entre inconnus.</p>
<p><b>La phrase suivante.</b> Smith ajoute que seul un mendiant choisit de dépendre principalement de la bienveillance de ses concitoyens, et que même lui ne le fait pas entièrement. L’échange est une manière de traiter l’autre en égal.</p>`
    },
    quiz: [
      { q: "Quel livre Smith publie-t-il en 1759 ?",
        o: ["La Richesse des nations", "La Théorie des sentiments moraux", "Le Tableau économique", "Les Principes d’économie politique"], c: 1,
        e: "Il y fonde la morale sur la sympathie et le spectateur impartial." },
      { q: "Pour Smith, d’où vient la richesse d’une nation ?",
        o: ["De l’accumulation d’or et d’argent par les marchands et l’État", "Du travail productif de ses habitants et de sa productivité", "Du nombre de colonies que le pays parvient à contrôler", "De la part des exportations dans ce qu’il produit"], c: 1,
        e: "Contre les mercantilistes, il place la production au centre." },
      { q: "Combien de fois l’expression « main invisible » apparaît-elle dans la Richesse des nations ?",
        o: ["Une seule fois", "Une dizaine de fois", "À chaque chapitre", "Jamais"], c: 0,
        e: "Elle concerne le choix d’investir dans son propre pays ; c’est la postérité qui en a fait un symbole." },
      { q: "Quels sont les trois devoirs du souverain selon Smith ?",
        o: ["Monnaie, commerce extérieur et colonies", "Défense, justice et ouvrages publics", "Impôt, douane et armée permanente", "Éducation, santé et pensions de retraite"], c: 1,
        e: "Les ouvrages publics comprennent l’éducation élémentaire du peuple." },
      { q: "Quel personnage Smith rencontre-t-il lors de son séjour à Genève ?",
        o: ["Rousseau", "Voltaire", "Diderot", "Necker"], c: 1,
        e: "Voltaire vivait alors à Ferney, tout près de Genève." }
    ],
    ouverte: {
      q: "Smith admirait les milices suisses, mais jugeait qu’une armée de métier était supérieure dans les sociétés commerciales. Que dirait-il de l’armée de milice suisse d’aujourd’hui ?",
      r: "Smith défend la division du travail jusque dans le domaine militaire : dans une société commerciale, où chacun est absorbé par son métier, une armée professionnelle, entraînée en permanence, est plus efficace qu’une milice de citoyens. Il reconnaît pourtant que les milices suisses ont battu de grandes armées, et il craint qu’une société commerciale perde l’esprit martial et civique de ses citoyens. Il recommande d’ailleurs des exercices militaires pour entretenir le courage du peuple. L’armée de milice suisse correspond à cette double préoccupation : elle maintient le lien entre citoyens et défense, mais son coût d’opportunité, les jours de travail perdus, et sa spécialisation limitée sont les arguments que Smith aurait mis en avant. Il aurait probablement jugé la question selon les circonstances, comme il le fait souvent, plutôt qu’au nom d’un principe absolu."
    },
    lectures: [
      ["Accessible", "Jesse Norman, Adam Smith: What He Thought, and Why It Matters, 2018."],
      ["Accessible", "Nicholas Phillipson, Adam Smith: An Enlightened Life, 2010, la biographie de référence récente."],
      ["Intermédiaire", "Adam Smith, Théorie des sentiments moraux (1759), première partie."],
      ["Intermédiaire", "Emma Rothschild, Economic Sentiments: Adam Smith, Condorcet, and the Enlightenment, 2001."],
      ["Recherche", "Adam Smith, Richesse des nations (1776), livres I, IV et V, dans l’édition de Glasgow ; Donald Winch, Riches and Poverty, 1996."]
    ],
    decouvrir: {
      questions: [
        { q: "Qu’est-ce qui fait augmenter la richesse d’un pays, selon Smith ?",
          o: ["La division du travail et l’échange", "L’accumulation d’or et d’argent dans le pays", "La conquête de nouvelles colonies lointaines", "La hausse des impôts prélevés par l’État"], c: 0,
          e: "L’exemple de la manufacture d’épingles en est l’illustration." },
        { q: "De quoi Smith se méfie-t-il surtout ?",
          o: ["Des marchands qui s’entendent sur les prix et des privilèges d’État", "De l’éducation élémentaire du peuple financée par l’État", "Des routes et des ponts construits par l’État pour le commerce", "De la concurrence entre petits artisans d’une même ville"], c: 0,
          e: "Smith est bien plus nuancé que son image de champion du laissez-faire." }
      ],
      duree: 6,
      html: `
<h3>Un philosophe écossais</h3>
<p>Adam Smith (1723-1790) est un professeur de philosophie morale à Glasgow, ami du philosophe David Hume. Il publie d’abord, en 1759, un livre sur la morale, la Théorie des sentiments moraux, puis, en 1776, après un voyage en France et à Genève, où il rencontre Voltaire, l’ouvrage qui le rend immortel : la Richesse des nations.</p>
${vieSmith}
<h3>Ses grandes idées</h3>
<p>Pour Smith, la richesse d’un pays n’est pas son or, mais ce que produit le travail de ses habitants. Elle augmente avec la division du travail, comme dans la manufacture d’épingles, et avec l’échange. Chacun, en poursuivant son intérêt, sert souvent la société sans le vouloir : c’est la fameuse « main invisible », une expression qu’il n’emploie pourtant qu’une seule fois dans ce livre.</p>
<h3>Plus nuancé qu’on ne le dit</h3>
<p>Smith n’est pas l’ennemi de l’État : il lui confie la défense, la justice, les routes et l’éducation du peuple. Il se méfie surtout des marchands qui s’entendent pour faire monter les prix et des privilèges accordés par les gouvernements. Et il fonde la vie sociale sur la sympathie, notre capacité à nous mettre à la place des autres.</p>
<h3>À retenir</h3>
<p>Smith est le fondateur de l’économie politique, et un penseur bien plus complexe que son image de champion du laissez-faire. Le portrait complet présente sa vie, ses livres et ses héritiers.</p>`,
      quiz: [1, 2]
    },
    resumes: {
      vie: "De Kirkcaldy à Glasgow, Toulouse, Genève et Paris, puis aux douanes d’Édimbourg.",
      epoque: "Les Lumières écossaises, le mercantilisme et l’indépendance américaine.",
      pensee: "Sept étapes, de la sympathie au système de la liberté naturelle.",
      livres: "La Théorie des sentiments moraux, la Richesse des nations, les leçons et les essais.",
      cas: "Genève et Voltaire, le « problème Adam Smith », le billet de 20 livres, le critique des marchands.",
      objections: "Valeur confuse, travail improductif, récupération libérale, angles morts.",
      ecoles: "Ricardo, Malthus et Say, Mill, Marx, Hayek et Friedman, Sen, les comportementalistes.",
      source: "Le boucher, le marchand de bière et le boulanger.",
      quiz: "Cinq questions corrigées et une question sur l’armée de milice.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     DAVID RICARDO
     ===================================================================== */
  const vieRicardo = lifeline(1772, 1823, [
    [1772, "naissance à Londres", true], [1793, "mariage, rupture familiale", false], [1799, "lit Adam Smith", true], [1809, "articles sur l’or", false],
    [1815, "fortune et Essai sur les profits", true], [1817, "Principes", false], [1819, "député", true], [1823, "mort à 51 ans", false]
  ], "David Ricardo, 1772-1823", "Ricardo n’a pas fait d’études universitaires. Agent de change à quatorze ans, il fait fortune à la Bourse de Londres avant de se consacrer à l’économie politique, qu’il découvre par hasard en lisant Adam Smith en vacances.");

  const systeme = fig(310, (() => {
    let s = `<text x="20" y="24" ${T}>Le système de Ricardo : vers l’état stationnaire (schéma)</text>`;
    const nodes = [[20, 46, "Population et capital augmentent", "var(--ink-soft)"], [230, 46, "On cultive des terres moins fertiles", "var(--gold)"], [440, 46, "Le prix du blé monte", "var(--gold)"], [440, 150, "La rente augmente", "var(--plum)"], [230, 150, "Les salaires nominaux montent", "var(--plum)"], [20, 150, "Les profits baissent", "var(--serial)"]];
    nodes.forEach(([x, y, t, c]) => (s += `<rect x="${x}" y="${y}" width="180" height="58" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/>` + (() => { const w = t.split(" "); const half = Math.ceil(w.length / 2); return `<text x="${x + 90}" y="${y + 26}" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">${w.slice(0, half).join(" ")}</text><text x="${x + 90}" y="${y + 43}" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">${w.slice(half).join(" ")}</text>`; })()));
    s += arrow(202, 75, 228, 75) + arrow(412, 75, 438, 75) + arrow(530, 106, 530, 148) + arrow(438, 179, 412, 179) + arrow(228, 179, 202, 179);
    s += arrow(110, 210, 110, 238, "var(--serial)");
    s += `<rect x="20" y="240" width="380" height="40" rx="8" style="fill:var(--paper-2); stroke:var(--line)"/><text x="210" y="265" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">l’accumulation ralentit : état stationnaire</text>`;
    s += `<text x="420" y="256" ${S}>Remède : importer du blé</text><text x="420" y="272" ${S}>en abolissant les Corn Laws.</text>`;
    return s;
  })(), "Le raisonnement des Principes (1817), simplifié. Les rendements décroissants de la terre font monter la rente et les salaires nominaux, ce qui comprime les profits, moteur de l’accumulation. Le libre-échange du blé repousse cette évolution en donnant accès aux terres fertiles étrangères.", "Cycle reliant population, terres, prix du blé, rente, salaires et profits");

  OEC.portraits["ricardo"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "David Ricardo (1772-1823), agent de change devenu économiste, a donné à l’économie politique sa première forme rigoureuse et abstraite. Ses Principes de l’économie politique et de l’impôt (1817) cherchent les lois qui gouvernent la répartition du revenu entre rente, profits et salaires.",
      "On lui doit la théorie de la rente différentielle, une version élaborée de la valeur-travail, la théorie de l’avantage comparatif, et la défense du libre-échange du blé contre les Corn Laws. Sa méthode, raisonner sur des modèles simplifiés, a durablement marqué la discipline.",
      "Député à la fin de sa vie, il meurt à 51 ans. Son œuvre nourrit à la fois les libéraux, par sa défense du libre-échange, et les socialistes, par sa théorie de la valeur et du conflit de répartition, jusqu’à Marx et Sraffa."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>David Ricardo naît à Londres le 18 avril 1772, troisième des dix-sept enfants d’une famille juive séfarade venue d’Amsterdam. Son père est agent de change à la Bourse de Londres. Le jeune David reçoit une éducation pratique, en partie aux Pays-Bas, et entre à quatorze ans dans les affaires paternelles. À vingt et un ans, il épouse une quakeresse, Priscilla Anne Wilkinson, et se convertit au christianisme unitarien. Sa famille rompt avec lui ; sa mère ne le reverra plus.</p>
<p>Ricardo s’installe à son compte avec un capital modeste et fait rapidement fortune comme agent de change et comme souscripteur d’emprunts publics, très nombreux pendant les guerres contre la France. En 1799, en vacances dans la ville d’eaux de Bath, il tombe sur la Richesse des nations d’Adam <a href="#eco-smith">Smith</a> et se passionne pour l’économie politique.</p>
${vieRicardo}
<p>Ses premiers écrits, en 1809-1810, portent sur la monnaie : il attribue la hausse du prix de l’or à l’émission excessive de billets par la Banque d’Angleterre depuis la suspension de leur convertibilité en 1797. Il se lie avec James Mill, qui l’encourage à écrire, et avec Thomas <a href="#eco-malthus">Malthus</a>, avec qui il entretient une correspondance amicale et une controverse permanente. Enrichi notamment par les emprunts de la fin des guerres napoléoniennes, il se retire des affaires, achète le domaine de Gatcombe Park et publie en 1817 ses Principes. En 1819, il entre au Parlement en achetant un siège de « bourg pourri » irlandais, Portarlington, où il défend le libre-échange et la réforme monétaire. Il meurt le 11 septembre 1823, à cinquante et un ans, d’une infection de l’oreille.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Ricardo écrit dans une Grande-Bretagne transformée par vingt ans de guerre contre la France et par la révolution industrielle. Pendant la guerre, le blocus continental et les mauvaises récoltes font monter le prix du blé, et les propriétaires fonciers s’enrichissent. Quand la paix revient en 1815, le Parlement, dominé par ces propriétaires, vote les Corn Laws, qui interdisent l’importation de blé tant que son prix intérieur ne dépasse pas un niveau élevé.</p>
<p>Pour Ricardo, cette loi sacrifie l’intérêt de toute la société à celui des propriétaires. Elle maintient le pain cher, donc les salaires élevés, ce qui réduit les profits des industriels et freine l’accumulation du capital et la croissance. Sa théorie de la répartition est d’abord une arme dans ce combat politique.</p>
<p>La question monétaire est l’autre grand débat de son temps. Depuis 1797, la Banque d’Angleterre n’est plus tenue de convertir ses billets en or. Ricardo, partisan d’un retour à la convertibilité, inspire le rapport du comité sur les lingots de 1810 et le retour à l’étalon-or, décidé en 1819, pour lequel il propose un ingénieux système de convertibilité en lingots plutôt qu’en pièces.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Le problème de la répartition</h4>
<p>Dans la préface de ses Principes, Ricardo affirme que le problème principal de l’économie politique est de déterminer les lois qui règlent la répartition du produit de la terre entre les propriétaires fonciers, les capitalistes et les travailleurs, sous forme de rente, de profits et de salaires.</p>
<h4>2. La valeur-travail</h4>
<p>Ricardo cherche une mesure de la valeur indépendante de la répartition. Il la trouve, en première approximation, dans la quantité de travail nécessaire pour produire un bien, y compris le travail incorporé dans les outils et les machines (<a href="#c-valeur-travail">voir valeur-travail</a>). Il sait que la durée d’immobilisation du capital crée des écarts, qu’il juge faibles en pratique, et cherchera jusqu’à sa mort une « mesure invariable de la valeur ».</p>
<h4>3. La rente différentielle</h4>
<p>La rente n’est pas une rémunération de la terre en général, mais de la qualité supérieure de certaines terres par rapport à la moins bonne qu’il faut encore cultiver. Le blé n’est pas cher parce qu’on paie une rente ; on paie une rente parce que le blé est cher (<a href="#c-rente">voir rente</a>).</p>
<h4>4. Salaires et profits</h4>
<p>À long terme, le salaire tend vers le niveau qui permet aux travailleurs de subsister et de se reproduire, un niveau qui dépend des habitudes et du prix des subsistances, surtout du blé. Si le blé renchérit, les salaires nominaux montent ; comme la valeur du produit est partagée entre salaires et profits, une fois la rente prélevée, les profits baissent.</p>
${systeme}
<h4>5. L’état stationnaire</h4>
<p>Avec la croissance de la population, il faut cultiver des terres de plus en plus pauvres. La rente et les salaires nominaux augmentent, les profits diminuent, et l’accumulation finit par s’arrêter : c’est l’état stationnaire. Seuls le progrès technique dans l’agriculture et l’importation de blé peuvent le repousser.</p>
<h4>6. L’avantage comparatif</h4>
<p>Dans le chapitre 7, Ricardo montre avec l’exemple du vin et du drap que deux pays ont intérêt à échanger même si l’un est plus efficace dans les deux productions : chacun doit se spécialiser là où son avantage relatif est le plus grand (<a href="#c-avantage-comparatif">voir avantage comparatif</a>). C’est l’un des résultats les plus contre-intuitifs et les plus durables de l’économie.</p>
<h4>7. La méthode abstraite</h4>
<p>Ricardo raisonne sur des cas simplifiés, en isolant quelques variables et en supposant les autres constantes, pour en tirer des conclusions tranchées. Joseph <a href="#eco-schumpeter">Schumpeter</a> parlera du « vice ricardien » : appliquer directement à la politique des conclusions tirées de modèles très simplifiés. C’est aussi ce qui a fait de lui le modèle de l’économiste théoricien.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Le Haut Prix du lingot, preuve de la dépréciation des billets de banque (1810).</b> Son premier ouvrage, qui fait de lui une figure du débat monétaire et pose les bases d’une théorie quantitative de la monnaie (<a href="#c-theorie-quantitative">voir théorie quantitative</a>).</p>
<p><b>Essai sur l’influence d’un bas prix du blé sur les profits du capital (1815).</b> Une brochure écrite contre les Corn Laws, qui présente déjà la théorie de la rente et de la baisse des profits.</p>
<p><b>Des principes de l’économie politique et de l’impôt (1817).</b> Son grand ouvrage, aride mais d’une rigueur nouvelle. La troisième édition, en 1821, ajoute un chapitre 31 « Des machines », où Ricardo reconnaît que la mécanisation peut nuire durablement aux travailleurs, contrairement à ce qu’il pensait.</p>
<p><b>Essai sur le système de financement (1820).</b> Un article où il examine le financement des dépenses publiques par l’impôt ou par la dette (<a href="#c-equivalence-ricardienne">voir équivalence ricardienne</a>).</p>
<p><b>Plan pour l’établissement d’une banque nationale (1824).</b> Publié après sa mort, il propose de confier l’émission de la monnaie à une institution publique indépendante, une idée qui annonce les banques centrales modernes.</p>` }
    ],
    cas: [
      { titre: "La fortune de Waterloo", html: `
<p>Une légende tenace raconte que Ricardo aurait fait fortune grâce à la bataille de Waterloo, en juin 1815. Il est vrai qu’il avait souscrit une part importante d’un grand emprunt public lancé quelques jours avant la bataille, et que la victoire en a fait monter la valeur. Ses gains ont été considérables. Mais il n’a pas spéculé sur une information secrète, comme le veut une autre légende attribuée aux Rothschild : il a pris le risque de garder ses titres. Il quitte les affaires peu après, l’un des hommes les plus riches d’Angleterre.</p>` },
      { titre: "L’amitié avec Malthus", html: `
<p>Ricardo et Malthus échangent pendant douze ans des centaines de lettres, en désaccord sur presque tout : la rente, la valeur, la possibilité d’une surproduction générale (<a href="#c-loi-debouches">voir loi des débouchés</a>), les Corn Laws, que Malthus défend. Leur amitié reste pourtant intacte. Ricardo écrit à Malthus peu avant sa mort qu’il ne l’aimerait pas plus s’il partageait ses opinions. Keynes admirera la correspondance et regrettera que Ricardo l’ait emporté, la pensée de Malthus sur la demande lui paraissant plus proche de la réalité.</p>` },
      { titre: "Le chapitre sur les machines", html: `
<p>Dans la troisième édition des Principes, en 1821, Ricardo ajoute un chapitre où il revient publiquement sur son opinion. Il pensait que les machines profitaient à toutes les classes ; il admet désormais que la substitution des machines au travail peut réduire la demande de travail et nuire aux travailleurs, et que l’opinion des ouvriers à ce sujet n’est pas fondée sur un préjugé. C’est un exemple rare d’un grand économiste qui change d’avis par écrit, et un texte cité dans tous les débats sur l’automatisation.</p>` },
      { titre: "L’abolition des Corn Laws", html: `
<p>Ricardo meurt sans voir l’abolition des Corn Laws, pour laquelle il a combattu. Mais ses arguments sont repris par l’Anti-Corn Law League de Richard Cobden et John Bright, et les lois sont abrogées en 1846 par le gouvernement conservateur de Robert Peel. Le Royaume-Uni entre dans une longue période de libre-échange, qui durera jusqu’aux années 1930.</p>` }
    ],
    objections: `
<h4>1. Malthus et la demande</h4>
<p>Malthus reproche à Ricardo de négliger la demande et la possibilité d’une surproduction générale. Ricardo l’emporte au XIXe siècle, mais <a href="#eco-keynes">Keynes</a> donnera raison à Malthus en 1936.</p>
<h4>2. Les marginalistes et la valeur</h4>
<p>Jevons, en 1871, accuse Ricardo d’avoir « détourné l’économie sur une mauvaise voie » avec sa théorie de la valeur-travail. Pour les marginalistes, la valeur dépend de l’utilité à la marge et de la rareté, non du travail.</p>
<h4>3. Le vice ricardien</h4>
<p>Schumpeter critique la tendance de Ricardo à tirer des conclusions politiques tranchées de modèles très abstraits, en supposant constants des éléments qui ne le sont pas. Le reproche s’adresse à toute une tradition de l’économie théorique.</p>
<h4>4. Des prédictions démenties</h4>
<p>L’état stationnaire n’est pas venu : le progrès technique dans l’agriculture et l’industrie, ainsi que les importations, ont fait baisser le prix relatif des aliments. La part de la rente foncière agricole dans le revenu national a fortement diminué au XIXe siècle, contrairement à ce que prévoyait Ricardo, même si la rente urbaine a pris le relais.</p>`,
    ecoles: `
<p><b>James Mill</b> et <b>John Ramsay McCulloch</b> popularisent un « ricardianisme » simplifié.</p>
<p><b><a href="#eco-mill">John Stuart Mill</a></b> en fait la base de ses Principes (1848).</p>
<p><b>Les socialistes ricardiens</b>, comme Thomas Hodgskin, et surtout <b><a href="#eco-marx">Marx</a></b> tirent de sa théorie de la valeur une théorie de l’exploitation.</p>
<p><b>Piero Sraffa</b> publie ses œuvres complètes (1951-1973) et relance une économie néo-ricardienne.</p>
<p><b>La théorie du commerce international</b>, de Heckscher et Ohlin à <a href="#eco-krugman">Krugman</a>, part de l’avantage comparatif.</p>
<p><b>Robert Barro</b> relance en 1974 l’idée que James Buchanan baptise en 1976 « équivalence ricardienne ».</p>`,
    source: {
      titre: "David Ricardo, Des principes de l’économie politique et de l’impôt, 1817, préface",
      texte: "Déterminer les lois qui règlent cette distribution, voilà le principal problème en économie politique.",
      notes: `
<p><b>Le contexte.</b> Juste avant, Ricardo explique que le produit de la terre se partage entre trois classes : le propriétaire, le possesseur du capital, et les travailleurs. Les proportions de ce partage varient selon les stades de la société.</p>
<p><b>Un changement de question.</b> Smith demandait ce qui cause la richesse des nations. Ricardo demande comment elle est partagée. Ce déplacement fait de la répartition, et donc du conflit entre classes, le cœur de l’économie politique classique.</p>
<p><b>La postérité.</b> Marx reprendra cette question ; l’économie néoclassique la reléguera au second plan ; Piketty et les économistes des inégalités l’ont remise au centre au XXIe siècle.</p>`
    },
    quiz: [
      { q: "Comment Ricardo a-t-il découvert l’économie politique ?",
        o: ["Pendant ses études d’économie à l’université d’Oxford", "En lisant la Richesse des nations d’Adam Smith à Bath", "Grâce à son père, agent de change réputé de la City", "En siégeant au Parlement, avant de devenir agent de change"], c: 1,
        e: "Agent de change sans formation universitaire, il découvre Smith en 1799." },
      { q: "Quel est pour Ricardo le principal problème de l’économie politique ?",
        o: ["La croissance de la population et ses effets sur les subsistances", "La répartition du produit entre rente, profits et salaires", "La stabilité de la monnaie et le niveau général des prix", "Le commerce colonial et les profits qu’en retirent les marchands"], c: 1,
        e: "C’est l’affirmation de la préface des Principes." },
      { q: "Pourquoi Ricardo combat-il les Corn Laws ?",
        o: ["Parce qu’elles réduisent les recettes fiscales de l’État britannique", "Parce que le blé cher fait monter rente et salaires et baisser les profits", "Parce qu’elles favorisent les ouvriers au détriment des industriels", "Parce qu’elles nuisent à la monnaie et provoquent des fuites d’or"], c: 1,
        e: "Elles sacrifient la croissance à l’intérêt des propriétaires fonciers." },
      { q: "Que reconnaît Ricardo dans son chapitre « Des machines » (1821) ?",
        o: ["Que les machines profitent toujours immédiatement aux ouvriers", "Que la mécanisation peut nuire durablement aux travailleurs", "Que les machines doivent être interdites", "Que les machines font monter la rente"], c: 1,
        e: "Il revient publiquement sur son opinion antérieure." },
      { q: "Qu’est-ce que le « vice ricardien » selon Schumpeter ?",
        o: ["La spéculation boursière à laquelle il doit sa fortune d’agent de change", "Tirer des conclusions politiques tranchées de modèles très simplifiés", "Le refus du libre-échange au profit des droits de douane", "La défense des propriétaires fonciers contre les industriels"], c: 1,
        e: "Le reproche vise la méthode abstraite de Ricardo et de ses successeurs." }
    ],
    ouverte: {
      q: "La Suisse protège fortement son agriculture par des droits de douane et des paiements directs. Ricardo la condamnerait-il comme il condamnait les Corn Laws ?",
      r: "Le raisonnement de Ricardo s’applique en partie : la protection agricole maintient les prix alimentaires suisses parmi les plus élevés d’Europe, ce qui réduit le pouvoir d’achat des ménages et profite surtout aux propriétaires de terres agricoles, dont la valeur incorpore une partie de la protection. Ricardo y verrait un transfert vers les détenteurs de rente. Mais la situation diffère de celle de 1815 sur plusieurs points. L’alimentation ne représente plus qu’une petite part des dépenses des ménages et n’influence guère les salaires ; la Suisse importe déjà une grande partie de sa nourriture ; et les paiements directs rémunèrent aussi des prestations que le marché ne paie pas, comme l’entretien du paysage, la biodiversité et la sécurité de l’approvisionnement, que la Constitution suisse mentionne explicitement. Un ricardien moderne critiquerait surtout les droits de douane, qui renchérissent les aliments, plutôt que les paiements liés à des prestations écologiques."
    },
    lectures: [
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, 1953, chapitre sur Malthus et Ricardo."],
      ["Accessible", "Mark Blaug, La Pensée économique, chapitre sur Ricardo."],
      ["Intermédiaire", "David Ricardo, Principes de l’économie politique et de l’impôt (1817), préface et chapitres 1, 2, 7 et 31."],
      ["Intermédiaire", "Murray Milgate et Shannon Stimson, Ricardian Politics, 1991."],
      ["Recherche", "Piero Sraffa (dir.), The Works and Correspondence of David Ricardo, 11 volumes, 1951-1973, notamment l’introduction de Sraffa au volume 1."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Ricardo, que se passe-t-il quand la population augmente et qu’il faut cultiver des terres moins fertiles ?",
          o: ["Le blé devient plus cher, la rente augmente et les profits baissent", "Le blé devient moins cher, et la rente des propriétaires baisse", "Les profits des industriels augmentent, et la rente reste stable", "Les salaires réels augmentent fortement, au détriment des rentiers"], c: 0,
          e: "C’est pourquoi il combat les lois qui interdisaient d’importer du blé bon marché." },
        { q: "Que dit l’idée d’avantage comparatif de Ricardo ?",
          o: ["Deux pays gagnent à commercer même si l’un produit tout mieux, chacun se spécialisant", "Seul le pays le plus productif tire profit du commerce, l’autre s’appauvrit faute de pouvoir se protéger", "Chaque pays s’enrichit en produisant lui-même tout ce qu’il consomme", "Le commerce international appauvrit les pays riches au profit des pays pauvres"], c: 0,
          e: "Cette idée reste au cœur des débats sur le commerce mondial." }
      ],
      duree: 6,
      html: `
<h3>L’agent de change qui lisait Adam Smith</h3>
<p>David Ricardo (1772-1823) n’a jamais étudié à l’université. Fils d’une famille juive d’Amsterdam installée à Londres, il travaille à la Bourse dès quatorze ans et fait fortune. En 1799, il découvre par hasard la Richesse des nations d’Adam <a href="#eco-smith">Smith</a> et se passionne pour l’économie. Retiré des affaires, il publie en 1817 ses Principes, puis devient député.</p>
${vieRicardo}
<h3>Qui reçoit quoi ?</h3>
<p>Ricardo s’intéresse au partage des richesses entre propriétaires fonciers, capitalistes et travailleurs. Selon lui, quand la population augmente, il faut cultiver des terres moins fertiles : le blé devient plus cher, les propriétaires touchent plus de rente, et les profits des industriels baissent, ce qui freine la croissance. D’où son combat contre les lois qui interdisaient d’importer du blé bon marché.</p>
<h3>Le libre-échange</h3>
<p>Son idée la plus célèbre est l’avantage comparatif : deux pays gagnent à commercer même si l’un est meilleur dans tout, à condition que chacun se spécialise là où il est relativement le plus fort. Cette idée reste au cœur des débats sur le commerce mondial.</p>
<h3>À retenir</h3>
<p>Ricardo a donné à l’économie sa méthode abstraite et ses grands débats sur la répartition. Le portrait complet présente sa vie, sa pensée et ses héritiers, de Marx à Krugman.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De la Bourse de Londres au Parlement, en passant par la lecture d’Adam Smith.",
      epoque: "Les guerres napoléoniennes, les Corn Laws et la question de l’or.",
      pensee: "Sept étapes, de la répartition à la méthode abstraite.",
      livres: "Des écrits sur l’or aux Principes et au projet de banque nationale.",
      cas: "La fortune de Waterloo, l’amitié avec Malthus, les machines, l’abolition des Corn Laws.",
      objections: "Malthus, les marginalistes, le vice ricardien, des prédictions démenties.",
      ecoles: "James Mill, John Stuart Mill, Marx, Sraffa, la théorie du commerce, Barro.",
      source: "La préface des Principes : les lois de la distribution.",
      quiz: "Cinq questions corrigées et une question sur la protection agricole suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
