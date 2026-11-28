/* Œconomia — portraits longs, lot 7 (a) : Elinor Ostrom, Amartya Sen */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;
  const cards = (items, w, h, y0) => items.map(([n, d, c], i) => {
    const x = 20 + i * (w + 10);
    let s = `<rect x="${x}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y0 + 28}" text-anchor="middle" style="fill:${c}; font:700 13px Manrope, sans-serif">${n}</text>`;
    const words = d.split(" "); let line = "", ly = y0 + 56; const max = Math.floor(w / 6.6);
    words.forEach((wd) => { if ((line + wd).length > max) { s += `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
    return s + `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
  }).join("");

  /* =====================================================================
     ELINOR OSTROM
     ===================================================================== */
  const vieOstrom = lifeline(1933, 2012, [
    [1933, "naissance à Los Angeles", true], [1965, "doctorat à UCLA", false], [1965, "Indiana University", true], [1973, "fonde l’Atelier avec Vincent", false],
    [1990, "La Gouvernance des biens communs", true], [2009, "prix Nobel", false], [2012, "mort à Bloomington", true]
  ], "Elinor Ostrom, 1933-2012", "Politologue plutôt qu’économiste de formation, Elinor Ostrom devient en 2009 la première femme à recevoir le prix Nobel d’économie. Elle mène toute sa carrière à l’université de l’Indiana, avec son mari, le politologue Vincent Ostrom.");

  const voies = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Trois réponses à la « tragédie des communs »</text>`;
    s += cards([["L’État", "Nationaliser la ressource et imposer des règles d’en haut. Risque : règles mal adaptées, mal surveillées.", "var(--plum)"], ["Le marché", "Privatiser la ressource en parcelles. Risque : impossible pour l’eau, les poissons, l’air.", "var(--gold)"], ["La communauté", "Les usagers fixent, surveillent et font respecter leurs propres règles. La voie étudiée par Ostrom.", "var(--note)"]], 190, 200, 44);
    return s;
  })(), "Garrett Hardin, en 1968, ne voyait que deux solutions pour éviter la surexploitation des ressources partagées : l’État ou la propriété privée. Ostrom montre, par des centaines d’études de cas, qu’il existe une troisième voie, souvent la plus efficace, à condition que certaines règles soient respectées.", "Trois cartes : l’État, le marché, la communauté");

  const torbel = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>La règle d’hiver de Törbel (Valais) : un exemple étudié par Ostrom</text>`;
    s += node(20, 50, 180, 70, "Pâturage d’alpage", "propriété commune", "var(--note)");
    s += node(230, 50, 180, 70, "Règle de 1517", "autant de vaches en été", "var(--gold)").replace(/y="(\d+)" text-anchor="middle" style="fill:var\(--ink\)/, 'y="72" text-anchor="middle" style="fill:var(--ink)').replace(/y="100" text-anchor/, 'y="92" text-anchor') + `<text x="320" y="110" text-anchor="middle" ${S}>qu’on peut nourrir l’hiver</text>`;
    s += node(440, 50, 180, 70, "Prés privés", "foin récolté en été", "var(--plum)");
    s += arrow(202, 85, 228, 85) + arrow(438, 85, 412, 85);
    s += node(130, 156, 380, 56, "Surveillance par les usagers", "amendes, assemblée des propriétaires de droits", "var(--serial)");
    s += arrow(320, 122, 320, 154);
    s += `<text x="20" y="242" ${S}>Le nombre de bêtes sur l’alpage dépend du foin que chaque famille récolte sur ses prés :</text>`;
    s += `<text x="20" y="260" ${S}>personne ne peut surcharger le pâturage. Le système fonctionne depuis plus de cinq siècles,</text>`;
    s += `<text x="20" y="278" ${S}>sans privatisation ni contrôle étatique.</text>`;
    return s;
  })(), "D’après les travaux de l’anthropologue Robert Netting, repris par Ostrom dans La Gouvernance des biens communs (1990). Les villageois de Törbel gèrent en commun leurs alpages, leurs forêts et leurs canaux d’irrigation depuis le Moyen Âge, selon des règles écrites qu’ils adaptent eux-mêmes.", "Schéma de la règle d’hiver liant alpage commun et prés privés");

  OEC.portraits["ostrom"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Elinor Ostrom (1933-2012), politologue américaine, a montré que des communautés d’usagers peuvent gérer durablement des ressources partagées, pâturages, forêts, pêcheries, nappes d’eau, sans privatisation ni contrôle de l’État, contrairement à la « tragédie des communs » annoncée par Garrett Hardin.",
      "À partir de centaines d’études de cas dans le monde entier, dont les alpages de Törbel en Valais, elle a dégagé huit principes communs aux institutions durables, et développé une méthode d’analyse des institutions fondée sur l’observation, l’expérimentation et la comparaison.",
      "Première femme à recevoir le prix Nobel d’économie, en 2009, elle a renouvelé l’étude de l’action collective et défendu une gouvernance « polycentrique », à plusieurs niveaux, sans solution unique."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Elinor Claire Awan naît le 7 août 1933 à Los Angeles. Ses parents se séparent tôt ; elle grandit avec sa mère dans des conditions modestes, pendant la Grande Dépression. Elle étudie les sciences politiques à l’université de Californie à Los Angeles, et doit se battre pour être admise en doctorat : on lui déconseille l’économie, faute de bases mathématiques, et on doute qu’une femme puisse faire carrière dans l’université.</p>
<p>Sa thèse, soutenue en 1965, porte sur la gestion des nappes d’eau souterraines du sud de la Californie, menacées par l’eau de mer à cause des pompages excessifs. Elle y observe que les usagers ont réussi à s’organiser, à négocier des règles et à créer des institutions pour limiter les prélèvements. C’est le point de départ de toute son œuvre. En 1963, elle épouse le politologue Vincent Ostrom, avec qui elle partage sa vie et son travail.</p>
${vieOstrom}
<p>En 1965, le couple s’installe à l’université de l’Indiana, à Bloomington, où Elinor commence par des cours à horaires difficiles, refusés par ses collègues. Dans les années 1970, elle étudie l’organisation des services de police dans les grandes villes américaines, et montre que les petites polices de quartier sont souvent plus efficaces que les grands services centralisés. En 1973, les Ostrom fondent l’« Atelier de théorie politique et d’analyse des politiques », un centre de recherche interdisciplinaire. Elle publie en 1990 La Gouvernance des biens communs. Elle reçoit le prix Nobel en 2009, partagé avec Oliver Williamson, et meurt d’un cancer le 12 juin 2012 ; Vincent meurt dix-sept jours plus tard.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>En 1968, le biologiste Garrett Hardin publie dans Science un article célèbre, « La tragédie des communs ». Il imagine un pâturage ouvert à tous : chaque éleveur a intérêt à ajouter une bête, car il en tire tout le bénéfice et ne supporte qu’une petite part du coût de la surexploitation. Le pâturage est inévitablement détruit. Hardin conclut qu’il faut soit privatiser, soit confier la ressource à l’État.</p>
<p>Cette conclusion inspire de nombreuses politiques, notamment dans les pays en développement, où des forêts, des pêcheries et des pâturages gérés traditionnellement par des communautés sont nationalisés ou privatisés. Les résultats sont souvent désastreux : les règles locales sont détruites, et l’État n’a pas les moyens de faire respecter les siennes.</p>
<p>Ostrom constate un décalage entre la théorie et ce qu’elle observe sur le terrain : de nombreuses communautés gèrent leurs ressources depuis des siècles sans les détruire. Elle se demande pourquoi certaines réussissent et d’autres échouent, et refuse les solutions uniques, qu’elle appelle les « panacées ».</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Les ressources communes</h4>
<p><b>La question.</b> Que devient une ressource que tout le monde peut utiliser, mais que chaque usage épuise ?</p>
<p><b>Son raisonnement.</b> Ostrom étudie les ressources à la fois rivales, ce que l’un prélève manque aux autres, et difficiles à clôturer, comme les nappes d’eau, les pêcheries, les forêts ou les pâturages. Elles sont menacées de surexploitation, car chacun a intérêt à prélever un peu plus avant que les autres ne le fassent.</p>
<p><b>Un exemple.</b> Sur un lac ouvert à tous, chaque pêcheur gagne à prendre un poisson de plus, alors que le coût de l’épuisement est partagé entre tous. Si chacun raisonne ainsi, les poissons disparaissent. C’est la « tragédie des communs » que décrit l’écologue Garrett Hardin en 1968.</p>
<p><a href="#c-biens-communs">Pour aller plus loin, la notice « Biens communs » →</a></p>
<h4>2. Une troisième voie</h4>
<p><b>La question.</b> Faut-il choisir entre le marché et l’État ?</p>
<p><b>Son raisonnement.</b> Hardin ne voyait que deux solutions, partager la ressource en propriétés privées ou la confier à l’État. Ostrom montre qu’il en existe une troisième. Les usagers peuvent créer eux-mêmes des institutions, c’est-à-dire des règles, une surveillance et des sanctions, qui empêchent la surexploitation. Ces institutions ne sont ni privées ni publiques au sens habituel.</p>
<p><b>Un exemple.</b> À Alanya, sur la côte turque, les pêcheurs tirent au sort chaque automne les emplacements de pêche, puis s’y succèdent à tour de rôle pendant la saison. La règle évite à la fois les conflits et la course aux meilleurs coins.</p>
<p><a href="#c-externalite">Pour aller plus loin, la notice « Externalité », qui explique pourquoi l’usage de chacun pèse sur les autres →</a></p>
${voies}
<h4>3. Les huit principes</h4>
<p><b>La question.</b> Pourquoi certaines communautés réussissent-elles là où d’autres échouent ?</p>
<p><b>Son raisonnement.</b> En comparant des dizaines de cas, Ostrom dégage huit principes communs aux institutions durables. Des limites claires sur qui a droit à quoi. Des règles adaptées aux conditions locales. La participation des usagers à l’élaboration des règles. Une surveillance par des personnes responsables devant les usagers. Des sanctions graduées. Des moyens rapides et peu coûteux de régler les conflits. La reconnaissance de ces droits par les autorités. Et, pour les grandes ressources, des niveaux d’organisation emboîtés.</p>
<p><b>Un exemple.</b> Les sanctions graduées montrent l’esprit de ces principes. Une première faute vaut un avertissement ou une petite amende, la récidive une sanction plus lourde. Celui qui triche une fois par erreur n’est pas exclu, mais la règle reste crédible.</p>
<h4>4. L’exemple de Törbel</h4>
<p><b>La question.</b> Une gestion commune peut-elle tenir pendant des siècles ?</p>
<p><b>Son raisonnement.</b> Parmi ses exemples, Ostrom cite le village de Törbel, dans le Valais, étudié par l’anthropologue Robert Netting. Depuis le Moyen Âge, les villageois gèrent en commun leurs alpages et leurs forêts, avec des règles qu’ils ont fixées eux-mêmes et qu’ils font respecter.</p>
<p><b>Un exemple.</b> La règle principale est simple et facile à contrôler. Nul ne peut envoyer sur l’alpage plus de vaches qu’il ne peut en nourrir pendant l’hiver avec son propre foin. Elle lie l’usage du bien commun à ce que chacun produit chez lui, et chaque voisin peut compter les bêtes.</p>
${torbel}
<h4>5. Les expériences</h4>
<p><b>La question.</b> La théorie qui prédit l’échec se vérifie-t-elle en laboratoire ?</p>
<p><b>Son raisonnement.</b> Avec Roy Gardner et James Walker, Ostrom fait jouer des volontaires à gérer une ressource commune pour de l’argent réel. Quand ils ne peuvent pas communiquer, ils surexploitent la ressource, comme le prédit la théorie standard. Quand ils peuvent se parler, et plus encore se sanctionner, la coopération augmente fortement.</p>
<p><b>Un exemple.</b> Quelques minutes de discussion suffisent souvent pour qu’un groupe s’accorde sur un prélèvement raisonnable, alors que, selon la théorie, de simples promesses sans contrainte ne devraient rien changer. La confiance et la parole donnée comptent.</p>
<p><a href="#c-equilibre-nash">Pour aller plus loin, la notice « Équilibre de Nash », qui présente la prédiction standard que ces expériences mettent à l’épreuve →</a></p>
<h4>6. Le polycentrisme</h4>
<p><b>La question.</b> À quelle échelle faut-il décider ?</p>
<p><b>Son raisonnement.</b> Avec Vincent Ostrom, elle défend une gouvernance « polycentrique ». Plusieurs centres de décision, à différentes échelles, communes, régions, États, associations d’usagers, se coordonnent et se font concurrence. Ce système s’adapte mieux et résiste mieux aux erreurs qu’une autorité unique.</p>
<p><b>Un exemple.</b> Sa thèse porte sur les nappes d’eau souterraines de la région de Los Angeles. Des associations d’usagers, des communes et des agences de l’eau y ont fini par limiter ensemble le pompage, sans autorité unique, et ont arrêté l’intrusion de l’eau de mer dans les nappes.</p>
<h4>7. Pas de panacée</h4>
<p><b>La question.</b> Existe-t-il une bonne solution pour tous les cas ?</p>
<p><b>Son raisonnement.</b> Ostrom met en garde contre les solutions universelles, qu’il s’agisse du marché, de l’État ou de la communauté. Les institutions doivent être adaptées à chaque ressource et à chaque communauté. Elle développe pour cela un cadre d’analyse détaillé, qui décompose chaque situation en règles, en acteurs et en résultats.</p>
<p><b>Un exemple.</b> Ses principes valent d’abord pour des ressources locales, où les usagers se connaissent. Pour le climat, partagé par des milliards de personnes, elle propose en 2009 de combiner plusieurs niveaux d’action, des accords internationaux aux initiatives des villes et des régions.</p>
<p><a href="#c-bien-public">Pour aller plus loin, la notice « Bien public » →</a></p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>La Gouvernance des biens communs (1990).</b> Son livre majeur, qui analyse des cas en Suisse, au Japon, en Espagne, aux Philippines, en Californie, en Turquie et au Sri Lanka, et propose les huit principes.</p>
<p><b>Rules, Games, and Common-Pool Resources (1994), avec Roy Gardner et James Walker.</b> Les expériences de laboratoire et les études de terrain sur la gestion des ressources communes.</p>
<p><b>Understanding Institutional Diversity (2005).</b> Son cadre d’analyse des institutions, plus technique.</p>
<p><b>Working Together (2010), avec Amy Poteete et Marco Janssen.</b> Une réflexion sur les méthodes, mêlant études de cas, expériences et modélisation.</p>
<p><b>Conférence Nobel « Au-delà des marchés et des États » (2009).</b> Une synthèse accessible de son parcours et de sa pensée.</p>` }
    ],
    cas: [
      { titre: "La police des petites villes", html: `
<p>Dans les années 1970, Ostrom et ses collègues étudient l’organisation des services de police aux États-Unis, à une époque où l’on recommande de fusionner les petites polices locales en grands services métropolitains. En comparant des quartiers semblables, elle montre que les petites polices de quartier sont souvent plus efficaces et mieux appréciées des habitants. Elle souligne le rôle des citoyens dans la « coproduction » de la sécurité. Ces travaux, moins connus, annoncent sa défense des systèmes polycentriques.</p>` },
      { titre: "Le tribunal des eaux de Valence", html: `
<p>Depuis le Moyen Âge, les agriculteurs de la plaine de Valence, en Espagne, se partagent l’eau des canaux d’irrigation selon des règles précises. Chaque jeudi, le Tribunal des eaux se réunit devant la porte de la cathédrale pour juger publiquement, oralement et sans appel, les conflits entre irrigants. Ostrom en fait l’un de ses exemples de réussite : des règles claires, une surveillance mutuelle et une résolution rapide des conflits. Le tribunal est inscrit au patrimoine culturel immatériel de l’UNESCO.</p>` },
      { titre: "La première femme Nobel d’économie", html: `
<p>Le 12 octobre 2009, Elinor Ostrom apprend qu’elle reçoit le prix Nobel d’économie, la première femme en quarante ans d’existence du prix. Certains économistes s’étonnent : elle est politologue et peu connue dans la discipline. Ses défenseurs y voient la reconnaissance d’une économie ouverte aux autres sciences sociales et au terrain. Elle verse l’argent du prix à son centre de recherche.</p>` },
      { titre: "Les pêcheurs de homard du Maine", html: `
<p>Sur les côtes du Maine, aux États-Unis, les pêcheurs de homard ont développé des « territoires » informels, transmis par les familles et défendus collectivement contre les intrus. Ils limitent aussi d’eux-mêmes les prises, en relâchant les femelles porteuses d’œufs. Ces règles, étudiées par l’anthropologue James Acheson et citées par Ostrom, ont contribué au maintien d’une pêcherie prospère, alors que d’autres pêcheries de la côte atlantique se sont effondrées.</p>` }
    ],
    objections: `
<h4>1. Des cas trop petits</h4>
<p>Les réussites étudiées par Ostrom concernent souvent des communautés petites, stables et homogènes. Il est plus difficile d’appliquer ses principes à des ressources mondiales, comme le climat ou les océans, où les usagers sont des milliards et ne se connaissent pas.</p>
<h4>2. L’exclusion</h4>
<p>La gestion communautaire suppose des « limites claires » sur qui a droit à la ressource. Elle peut donc exclure les nouveaux venus, les pauvres ou les femmes, et reproduire les hiérarchies locales. Les communs ne sont pas forcément justes.</p>
<h4>3. La pression des marchés</h4>
<p>Quand une ressource locale prend de la valeur sur les marchés mondiaux, ou quand la population augmente, les institutions traditionnelles peuvent être débordées. Plusieurs cas étudiés par Ostrom ont connu des difficultés de ce type.</p>
<h4>4. Une méthode peu formalisée</h4>
<p>Certains économistes ont jugé ses travaux trop descriptifs. Ses défenseurs soulignent qu’elle a combiné études de terrain, expériences contrôlées et modélisation, et que la diversité des institutions résiste à une théorie unique.</p>`,
    ecoles: `
<p><b>Vincent Ostrom</b>, son mari, et l’école de Bloomington partagent son approche.</p>
<p><b>James Buchanan</b> et la <a href="#c-choix-public">théorie des choix publics</a> influencent sa méthode, sans partager toutes ses conclusions.</p>
<p><b>Douglass North</b> et <b>Oliver Williamson</b>, son colauréat de 2009, renouvellent l’économie des institutions.</p>
<p><b>Les économistes de l’environnement</b> appliquent ses principes à la gestion des pêcheries et des forêts.</p>
<p><b>Les mouvements des « communs »</b>, des logiciels libres aux communs urbains, se réclament d’elle.</p>
<p><b>Les économistes expérimentaux</b> prolongent ses travaux sur la coopération et les sanctions.</p>`,
    source: {
      titre: "Elinor Ostrom, conférence Nobel « Au-delà des marchés et des États », 2009",
      texte: "Un objectif central des politiques publiques devrait être de faciliter le développement d’institutions qui font ressortir ce qu’il y a de meilleur chez les êtres humains.",
      notes: `
<p><b>Contre une vision pessimiste.</b> Ostrom conclut sa conférence en critiquant les politiques fondées sur l’idée que les individus sont des égoïstes incapables de coopérer, et qui ne peuvent être contrôlés que par l’État ou par le marché.</p>
<p><b>La complexité.</b> Elle insiste sur le fait que les humains ont des motivations complexes, et qu’ils peuvent apprendre à coopérer quand les institutions encouragent la confiance, la communication et la réciprocité.</p>
<p><b>Une conclusion de terrain.</b> La phrase résume quarante ans d’observations : les institutions les plus durables sont celles que les usagers ont contribué à créer et qu’ils estiment légitimes.</p>`
    },
    quiz: [
      { q: "Que soutenait Garrett Hardin dans « La tragédie des communs » (1968) ?",
        o: ["Que les communautés gèrent bien leurs ressources sans intervention", "Que les ressources partagées sont inévitablement surexploitées", "Que l’État doit privatiser toutes les ressources pour les protéger", "Que les usagers doivent gérer eux-mêmes les ressources communes"], c: 1,
        e: "Hardin ne voit d’issue que dans la privatisation ou le contrôle de l’État ; Ostrom a montré qu’une troisième voie existe." },
      { q: "Quelle est la règle d’hiver de Törbel ?",
        o: ["Interdire l’accès à l’alpage dès les premières neiges de l’automne", "Ne pas envoyer sur l’alpage plus de vaches qu’on ne peut en nourrir l’hiver", "Verser à la commune une taxe pour chaque vache envoyée à l’alpage en été", "Tirer au sort chaque année les pâturages attribués aux familles"], c: 1,
        e: "Chacun doit pouvoir nourrir ses vaches l’hiver avec son propre foin : elle lie l’usage du commun aux ressources privées de chacun." },
      { q: "Que montrent les expériences d’Ostrom en laboratoire ?",
        o: ["Que la communication entre joueurs n’a pas d’effet sur leurs choix", "Que communiquer et se sanctionner mutuellement augmente la coopération", "Que les participants coopèrent spontanément, sans règles ni échanges préalables", "Que l’argent gagné reste la seule motivation des participants"], c: 1,
        e: "Sans communication, la ressource est surexploitée." },
      { q: "Qu’est-ce que la gouvernance « polycentrique » ?",
        o: ["Un gouvernement mondial unique qui impose les mêmes règles à tous les pays", "Plusieurs centres de décision à différentes échelles qui se coordonnent", "Une décision prise par un seul centre, l’État fédéral, pour tous", "Un marché sans autorité, où seuls les prix coordonnent les acteurs"], c: 1,
        e: "Elle est jugée plus adaptable qu’une autorité unique." },
      { q: "Quelle distinction Ostrom reçoit-elle en 2009 ?",
        o: ["La médaille Fields, pour ses travaux mathématiques sur les jeux", "Le prix Nobel d’économie, première femme à l’obtenir", "Le prix Pulitzer, pour son livre sur les pâturages alpins", "Le prix Nobel de la paix, pour son action auprès des communautés"], c: 1,
        e: "Partagé avec Oliver Williamson." }
    ],
    ouverte: {
      q: "En Suisse, des bourgeoisies, des corporations et des consortages gèrent encore aujourd’hui des forêts, des alpages et des bisses. Le modèle d’Ostrom peut-il s’appliquer à des défis plus vastes, comme le climat ?",
      r: "Les institutions communautaires suisses, comme celles de Törbel ou les consortages qui entretiennent les bisses valaisans, illustrent bien les principes d’Ostrom : des usagers identifiés, des règles adaptées, une surveillance mutuelle et une reconnaissance par les autorités. Elles montrent que la gestion locale peut être durable pendant des siècles. Mais le climat pose des difficultés d’une autre échelle : les émetteurs sont des milliards de personnes et des centaines d’États, les effets sont lointains et diffus, et la confiance entre participants est faible. Ostrom elle-même ne proposait pas de transposer simplement les solutions locales. Elle défendait une approche polycentrique : au lieu d’attendre un accord mondial unique, encourager les actions de nombreux acteurs à différents niveaux, villes, cantons, entreprises, communautés, qui expérimentent, apprennent les uns des autres et construisent la confiance. La politique climatique suisse, qui combine engagements internationaux, lois fédérales, programmes cantonaux et initiatives communales, correspond en partie à cette vision."
    },
    lectures: [
      ["Accessible", "Elinor Ostrom, conférence Nobel « Beyond Markets and States », 2009."],
      ["Accessible", "Garrett Hardin, « The Tragedy of the Commons », Science, 1968, un article court."],
      ["Intermédiaire", "Elinor Ostrom, La Gouvernance des biens communs, 1990, chapitres 1, 3 et 5."],
      ["Intermédiaire", "Robert Netting, Balancing on an Alp, 1981, sur Törbel."],
      ["Recherche", "Elinor Ostrom, Understanding Institutional Diversity, 2005 ; Elinor Ostrom, Roy Gardner et James Walker, Rules, Games, and Common-Pool Resources, 1994."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi déconseille-t-on l’économie à Elinor Ostrom au début de sa carrière ?",
          o: ["Faute de mathématiques", "Parce qu’elle est trop jeune", "Parce qu’elle vit à Los Angeles", "Parce qu’elle étudie déjà la médecine"], c: 0,
          e: "Politologue, elle reçoit pourtant le Nobel d’économie en 2009." },
        { q: "Selon Ostrom, à quelles conditions les communautés gèrent-elles bien une ressource commune ?",
          o: ["Des droits clairs, des règles fixées par les usagers, une surveillance mutuelle", "Une privatisation complète de la ressource au profit de quelques propriétaires", "Une gestion entièrement confiée à l’État et à ses fonctionnaires locaux", "Un accès libre pour tous, sans règle ni contrôle exercé par les usagers"], c: 0,
          e: "Elles ajoutent des sanctions progressives et la reconnaissance par les autorités. C’est une troisième voie entre l’État et le marché." }
      ],
      duree: 6,
      html: `
<h3>La politologue qui a reçu le Nobel d’économie</h3>
<p>Elinor Ostrom (1933-2012) grandit modestement à Los Angeles. On lui déconseille l’économie, faute de mathématiques. Elle devient politologue, passe sa carrière à l’université de l’Indiana avec son mari Vincent, et reçoit en 2009 le prix Nobel d’économie, la première femme à l’obtenir.</p>
${vieOstrom}
<h3>Les communs ne sont pas condamnés</h3>
<p>En 1968, un biologiste soutient que tout pâturage partagé finira détruit, car chacun a intérêt à y mettre une bête de plus. Ostrom montre le contraire : partout dans le monde, des communautés gèrent depuis des siècles leurs pâturages, leurs forêts, leurs pêcheries ou leur eau, en se donnant leurs propres règles, sans privatiser ni confier la ressource à l’État.</p>
${torbel}
<h3>Les conditions du succès</h3>
<p>Ces communautés réussissent quand les droits de chacun sont clairs, quand les usagers fixent eux-mêmes les règles, se surveillent et sanctionnent progressivement les tricheurs, et quand les autorités reconnaissent leurs droits. Le village valaisan de Törbel en est un exemple célèbre.</p>
<h3>À retenir</h3>
<p>Entre l’État et le marché, il existe une troisième voie : l’organisation des usagers. Le portrait complet présente la vie d’Ostrom, ses découvertes et leurs limites.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Los Angeles à Bloomington, de la thèse sur l’eau au prix Nobel.",
      epoque: "La « tragédie des communs » et les politiques qu’elle a inspirées.",
      pensee: "Sept étapes, des ressources communes au refus des panacées.",
      livres: "De La Gouvernance des biens communs à la conférence Nobel.",
      cas: "La police, le tribunal des eaux de Valence, le Nobel, les homards du Maine.",
      objections: "Des cas trop petits, l’exclusion, la pression des marchés, une méthode descriptive.",
      ecoles: "Vincent Ostrom, Buchanan, North et Williamson, l’environnement, les communs, l’économie expérimentale.",
      source: "Des institutions qui font ressortir le meilleur des humains.",
      quiz: "Cinq questions corrigées et une question sur les communs suisses et le climat.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     AMARTYA SEN
     ===================================================================== */
  const vieSen = lifeline(1933, 2025, [
    [1933, "naissance à Santiniketan", true], [1943, "la famine du Bengale", false], [1959, "doctorat à Cambridge", true], [1970, "Choix collectif et bien-être social", false],
    [1981, "Pauvreté et famines", true], [1990, "indice de développement humain", false], [1998, "prix Nobel", true], [2009, "L’Idée de justice", false]
  ], "Amartya Sen, né en 1933", "Économiste et philosophe indien, Sen a enseigné à Calcutta, Delhi, Londres, Oxford, Cambridge et Harvard. Ses travaux sur les famines, la pauvreté et la justice ont transformé l’économie du développement.");

  const famine = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Une famine sans pénurie : l’approche par les « droits d’accès » (Bengale, 1943)</text>`;
    s += node(20, 50, 290, 64, "Ce que l’on croyait", "pas assez de nourriture disponible", "var(--line)");
    s += node(330, 50, 290, 64, "Ce que montre Sen", "la production n’a pas vraiment chuté", "var(--note)");
    s += node(20, 150, 180, 64, "Inflation de guerre", "les prix du riz flambent", "var(--gold)");
    s += node(230, 150, 180, 64, "Salaires ruraux bloqués", "les journaliers s’appauvrissent", "var(--serial)");
    s += node(440, 150, 180, 64, "Perte d’accès", "ils ne peuvent plus acheter", "var(--serial)");
    s += arrow(202, 182, 228, 182) + arrow(412, 182, 438, 182);
    s += `<text x="20" y="250" ${S}>Les victimes sont surtout les ouvriers agricoles, les pêcheurs et les artisans, dont le revenu ne suit pas les prix.</text>`;
    s += `<text x="20" y="268" ${S}>La famine est une crise du pouvoir d’achat et des droits, plus que de la disponibilité totale de nourriture.</text>`;
    return s;
  })(), "Dans Pauvreté et famines (1981), Sen montre que la famine du Bengale, qui fait environ trois millions de morts, survient alors que la production de riz n’est pas exceptionnellement faible. Ce qui s’effondre, c’est la capacité de certains groupes à obtenir de la nourriture, leurs « entitlements » ou droits d’accès.", "Schéma de la famine du Bengale vue par Sen");

  const idh = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>L’indice de développement humain (PNUD, 1990), conçu avec Mahbub ul Haq</text>`;
    s += cards([["Santé", "espérance de vie à la naissance", "var(--note)"], ["Éducation", "durée de scolarisation attendue et moyenne", "var(--gold)"], ["Niveau de vie", "revenu national par habitant, en parité de pouvoir d’achat", "var(--plum)"]], 190, 170, 44);
    return s;
  })(), "L’indice complète le PIB par d’autres dimensions du développement. Sen jugeait l’indice trop grossier, mais l’a soutenu parce qu’il attirait l’attention sur ce que le PIB ignore. La Suisse se classe régulièrement dans le peloton de tête du classement mondial.", "Trois cartes : santé, éducation, niveau de vie");

  OEC.portraits["sen"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Amartya Sen, né en 1933, économiste et philosophe indien, prix Nobel 1998, a placé l’éthique, la pauvreté et la justice au cœur de l’économie. Il a montré que les famines viennent moins d’un manque de nourriture que d’une perte de « droits d’accès » de certains groupes.",
      "Il a fondé l’approche par les capabilités : le développement doit se mesurer à l’élargissement des libertés réelles des personnes, ce qu’elles peuvent être et faire, et non seulement au revenu. Cette approche a inspiré l’indice de développement humain.",
      "Il a aussi renouvelé la théorie du choix social, montré l’ampleur des « femmes manquantes » dans le monde, et défendu le rôle de la démocratie et de la presse libre dans la prévention des famines."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Amartya Kumar Sen naît le 3 novembre 1933 à Santiniketan, au Bengale, dans le campus de l’université fondée par le poète Rabindranath Tagore, qui lui donne son prénom, « immortel ». Son grand-père enseigne le sanskrit ; son père, la chimie. En 1943, à neuf ans, il assiste à la famine du Bengale, qui fait environ trois millions de morts. Il remarque que personne de son entourage, ni de sa classe sociale, n’en souffre : seuls les plus pauvres meurent.</p>
<p>En 1944, pendant les violences entre hindous et musulmans qui précèdent la partition, il voit un journalier musulman, Kader Mia, poignardé, entrer dans le jardin familial. L’homme était venu chercher du travail dans un quartier hostile, parce que sa famille n’avait rien à manger. Sen en tire une leçon durable sur les liens entre pauvreté, identité et violence. Il étudie au Presidency College de Calcutta, survit à un cancer de la bouche à dix-huit ans, puis part au Trinity College de Cambridge, où il obtient son doctorat en 1959, auprès de Joan <a href="#eco-robinson">Robinson</a>, Piero Sraffa et Maurice Dobb.</p>
${vieSen}
<p>Il enseigne à l’université de Jadavpur, à la Delhi School of Economics, à la London School of Economics, à Oxford, puis à Harvard à partir de 1987. Il est maître du Trinity College de Cambridge de 1998 à 2004, le premier Asiatique à diriger un collège d’Oxford ou de Cambridge. Il reçoit le prix Nobel en 1998 pour ses contributions à l’économie du bien-être. Il continue d’enseigner et d’écrire, et intervient régulièrement dans le débat public indien et international.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Sen grandit dans une Inde coloniale, puis indépendante à partir de 1947, marquée par une pauvreté de masse, les famines et les divisions religieuses. L’économie du développement des années 1950 et 1960 s’intéresse surtout à la croissance du produit national, à l’industrialisation et à l’investissement.</p>
<p>La théorie économique du bien-être, de son côté, s’appuie sur l’<a href="#c-optimum-pareto">optimum de Pareto</a> et sur l’utilité, et refuse souvent de comparer le bien-être entre personnes. Kenneth Arrow a démontré en 1951 son « théorème d’impossibilité » : aucune règle de choix collectif ne satisfait à la fois quelques conditions démocratiques élémentaires. L’économie semble ainsi incapable de dire quoi que ce soit sur la justice.</p>
<p>Sen veut réintroduire l’éthique et la philosophie dans l’économie, sans renoncer à la rigueur. Il travaille à la frontière entre les deux disciplines, en dialogue avec des philosophes comme John Rawls et Martha Nussbaum.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Le choix social</h4>
<p><b>La question.</b> Peut-on additionner les préférences de chacun pour prendre une décision collective ?</p>
<p><b>Son raisonnement.</b> Kenneth Arrow avait montré en 1951 qu’aucune règle de vote ne peut respecter à la fois quelques conditions simples et raisonnables. Dans Choix collectif et bien-être social (1970), Sen montre qu’on peut sortir de cette impasse si l’on accepte de comparer le bien-être entre personnes, en utilisant davantage d’informations. Il démontre aussi le « paradoxe du libéral parétien », respecter à la fois le critère de Pareto et des libertés individuelles minimales peut être impossible.</p>
<p><b>Un exemple.</b> Sen illustre son paradoxe avec un livre jugé scandaleux, L’Amant de Lady Chatterley, et deux lecteurs, un prude et un libertin. Respecter la liberté de chacun de lire ou non et respecter leurs préférences communes conduit à une contradiction.</p>
<p><a href="#c-optimum-pareto">Pour aller plus loin, la notice « Optimum de Pareto » →</a></p>
<h4>2. La mesure de la pauvreté</h4>
<p><b>La question.</b> Suffit-il de compter les pauvres ?</p>
<p><b>Son raisonnement.</b> Sen critique les mesures de la pauvreté qui se contentent de compter les pauvres, et propose en 1976 un indice qui tient compte de la profondeur de la pauvreté et des inégalités entre les pauvres.</p>
<p><b>Un exemple.</b> Un gouvernement qui aide seulement ceux qui sont juste sous le seuil de pauvreté fait baisser le nombre de pauvres, alors que les plus démunis ne reçoivent rien. L’indice de Sen évite ce piège, car il compte aussi l’écart au seuil.</p>
<h4>3. Les famines et les droits d’accès</h4>
<p><b>La question.</b> Les famines viennent-elles d’un manque de nourriture ?</p>
<p><b>Son raisonnement.</b> Dans Pauvreté et famines (1981), Sen étudie les famines du Bengale (1943), d’Éthiopie (1973-1974), du Sahel et du Bangladesh (1974). Il montre qu’elles surviennent souvent sans baisse majeure de la nourriture disponible. Ce qui change, c’est la capacité de certains groupes à obtenir de la nourriture, par leur travail, leur production ou leurs échanges.</p>
<p><b>Un exemple.</b> Au Bengale en 1943, la récolte n’est pas catastrophique, mais l’inflation de guerre fait flamber le prix du riz. Les ouvriers agricoles et les pêcheurs, dont les revenus ne suivent pas, ne peuvent plus en acheter. La famine tue entre deux et trois millions de personnes. Sen, alors âgé de neuf ans, en a été le témoin.</p>
${famine}
<h4>4. La démocratie contre la famine</h4>
<p><b>La question.</b> Pourquoi les démocraties ne connaissent-elles pas de grandes famines ?</p>
<p><b>Son raisonnement.</b> Sen observe qu’aucune famine majeure ne s’est produite dans un pays démocratique doté d’une presse relativement libre. Les gouvernements qui doivent rendre des comptes aux électeurs et à la presse ont intérêt à agir vite.</p>
<p><b>Un exemple.</b> L’Inde indépendante n’a plus connu de grande famine. Lors de la sécheresse du Maharashtra en 1972-1973, des travaux publics ont donné un revenu à des millions de personnes. À l’inverse, la famine du Grand Bond en avant en Chine, de 1958 à 1961, a pu tuer des dizaines de millions de personnes dans le silence.</p>
<p><a href="#c-institutions-inclusives">Pour aller plus loin, la notice « Institutions inclusives et extractives » →</a></p>
<h4>5. Les capabilités</h4>
<p><b>La question.</b> Comment mesurer le développement ?</p>
<p><b>Son raisonnement.</b> Pour Sen, le développement se mesure non au revenu ou à l’utilité, mais aux « capabilités », les libertés réelles dont disposent les personnes de mener la vie qu’elles ont des raisons de valoriser, être en bonne santé, instruit, participer à la vie sociale. Le revenu n’est qu’un moyen, et deux personnes au même revenu peuvent avoir des possibilités très différentes.</p>
<p><b>Un exemple.</b> Sen compare souvent l’État indien du Kerala, longtemps pauvre mais doté de bonnes écoles et de bons dispensaires, à des régions plus riches où l’on vivait moins longtemps. Ces idées inspirent l’indice de développement humain du PNUD, créé en 1990 avec l’économiste pakistanais Mahbub ul Haq.</p>
<p><a href="#c-capabilites">Pour aller plus loin, la notice « Capabilités » →</a></p>
<h4>6. Les femmes manquantes</h4>
<p><b>La question.</b> Pourquoi manque-t-il des femmes dans certains pays ?</p>
<p><b>Son raisonnement.</b> En 1990, Sen calcule que plus de cent millions de femmes « manquent » dans le monde, principalement en Asie. Compte tenu du rapport normal entre les sexes, elles auraient dû être vivantes. Ce déficit résulte de la négligence des filles dans l’alimentation et les soins, puis des avortements sélectifs. C’est l’un de ses travaux les plus cités.</p>
<p><b>Un exemple.</b> Il naît normalement environ 105 garçons pour 100 filles. En Chine, au milieu des années 2000, on comptait près de 120 garçons pour 100 filles à la naissance, un écart qui s’explique surtout par la sélection.</p>
<h4>7. Le développement comme liberté</h4>
<p><b>La question.</b> À quoi sert le développement ?</p>
<p><b>Son raisonnement.</b> Dans Un nouveau modèle économique (1999), Sen fait de la liberté à la fois la fin et le moyen du développement. Il insiste sur l’éducation, la santé, la démocratie et l’égalité des femmes comme moteurs du progrès. Dans L’Idée de justice (2009), il propose une approche comparative, qui cherche à réduire les injustices manifestes plutôt qu’à définir une société parfaitement juste.</p>
<p><b>Un exemple.</b> Le prix Nobel lui est attribué en 1998 pour ses travaux sur l’économie du bien-être. Son approche se lit aujourd’hui dans les objectifs de développement durable de l’ONU, qui mesurent la santé, l’éducation et l’égalité autant que le revenu.</p>
<p><a href="#c-pib">Pour aller plus loin, la notice « PIB et ses limites » →</a></p>
${idh}` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Choix collectif et bien-être social (1970).</b> Son ouvrage fondateur sur la théorie du choix social, qui renouvelle le débat après Arrow.</p>
<p><b>Pauvreté et famines (1981).</b> L’étude des famines par l’approche des droits d’accès, qui a transformé leur compréhension et leur prévention.</p>
<p><b>Commodities and Capabilities (1985).</b> La première formulation complète de l’approche par les capabilités.</p>
<p><b>Un nouveau modèle économique : développement, justice, liberté (1999).</b> Son livre le plus lu, issu de conférences à la Banque mondiale.</p>
<p><b>Identité et violence (2006).</b> Une réflexion sur les identités multiples et les dangers de réduire les personnes à une seule appartenance.</p>
<p><b>L’Idée de justice (2009).</b> Sa grande synthèse philosophique, en dialogue critique avec John Rawls.</p>` }
    ],
    cas: [
      { titre: "Le nom donné par Tagore", html: `
<p>Sen naît sur le campus de Santiniketan, l’université fondée par Rabindranath Tagore, premier Asiatique prix Nobel de littérature en 1913. C’est Tagore qui choisit son prénom, Amartya, « celui qui ne meurt pas ». Sen fait ses études dans l’école de Tagore, ouverte, sans examens rigides, où l’on enseigne en plein air et où l’on s’intéresse à la culture du monde entier. Il en garde un attachement à une éducation libérale et cosmopolite.</p>` },
      { titre: "L’Inde et la Chine", html: `
<p>Sen compare souvent l’Inde et la Chine. L’Inde démocratique n’a plus connu de grande famine depuis l’indépendance, alors que la Chine a subi celle du Grand Bond en avant. Mais la Chine a fait bien plus que l’Inde pour l’éducation et la santé de base, ce qui lui a donné une avance pour la croissance. Avec Jean Drèze, Sen critique dans Splendeurs et misères de l’Inde (2013) l’insuffisance des investissements indiens dans la santé, l’éducation et la nutrition, malgré une croissance rapide.</p>` },
      { titre: "L’indice de développement humain", html: `
<p>En 1990, l’économiste pakistanais Mahbub ul Haq, ami de Sen depuis Cambridge, lance au Programme des Nations unies pour le développement un Rapport sur le développement humain, avec un indice qui combine santé, éducation et revenu. Sen, d’abord réticent à réduire le développement à un chiffre unique, l’aide à le concevoir, car il reconnaît qu’un indice simple peut concurrencer le PIB dans l’attention publique. L’indice est publié chaque année depuis.</p>` },
      { titre: "La commission Stiglitz-Sen-Fitoussi", html: `
<p>En 2008, Sen est le conseiller principal d’une commission présidée par Joseph Stiglitz et coordonnée par Jean-Paul Fitoussi, sur la mesure des performances économiques et du progrès social. Le rapport de 2009 recommande de dépasser le PIB, de mesurer le bien-être dans ses multiples dimensions et la soutenabilité. Il a influencé les statistiques de nombreux pays et de l’OCDE (<a href="#c-pib">voir PIB</a>).</p>` }
    ],
    objections: `
<h4>1. Une liste ouverte</h4>
<p>Sen refuse de fixer une liste précise de capabilités essentielles, laissant ce choix au débat démocratique. La philosophe Martha Nussbaum, sa collaboratrice, juge au contraire nécessaire une liste de capabilités centrales. Les économistes reprochent à l’approche d’être difficile à mesurer.</p>
<h4>2. Les famines et la nourriture</h4>
<p>Certains chercheurs, comme l’économiste agricole Peter Bowbrick, ont contesté son analyse de la famine du Bengale, en soutenant que la production avait bien diminué. Le débat porte sur les données, mais l’idée que la répartition et le pouvoir d’achat jouent un rôle central est largement acceptée.</p>
<h4>3. La démocratie et la famine</h4>
<p>Des chercheurs ont nuancé l’affirmation selon laquelle aucune famine ne survient en démocratie, en évoquant des cas de malnutrition grave et persistante dans des démocraties, dont l’Inde, qui ne prennent pas la forme spectaculaire de famines.</p>
<h4>4. Le libéralisme contre la justice</h4>
<p>Les libéraux, comme Robert Nozick, rejettent l’idée que la justice se mesure aux résultats et aux capacités des personnes, plutôt qu’au respect des droits et des procédures. Sen répond que les libertés formelles ne suffisent pas sans les moyens de les exercer.</p>`,
    ecoles: `
<p><b>Adam <a href="#eco-smith">Smith</a></b>, lu comme philosophe moral, et <b>Aristote</b> sont des références constantes de Sen.</p>
<p><b>Kenneth Arrow</b> et <b>John Rawls</b> sont ses grands interlocuteurs en choix social et en justice.</p>
<p><b>Martha Nussbaum</b> développe avec lui l’approche par les capabilités.</p>
<p><b>Mahbub ul Haq</b> en fait l’indice de développement humain.</p>
<p><b>Jean Drèze</b> collabore avec lui sur la faim et le développement en Inde.</p>
<p><b><a href="#eco-duflo">Esther Duflo</a></b> et les économistes du développement contemporains partagent son attention à la pauvreté concrète.</p>`,
    source: {
      titre: "Amartya Sen, Un nouveau modèle économique : développement, justice, liberté, 1999, chapitre 7",
      texte: "Aucune famine substantielle ne s’est jamais produite dans un pays indépendant et démocratique doté d’une presse relativement libre.",
      notes: `
<p><b>Le raisonnement.</b> Les gouvernements démocratiques, soumis aux élections et aux critiques de l’opposition et de la presse, ont de fortes incitations à prévenir les famines, qui sont faciles à éviter avec des moyens modestes, comme des emplois publics temporaires.</p>
<p><b>L’information.</b> La presse libre joue aussi un rôle d’alerte : elle fait connaître les premières difficultés, que les gouvernements autoritaires ignorent ou cachent, parfois sans même les connaître eux-mêmes.</p>
<p><b>Les limites.</b> Sen reconnaît que la démocratie prévient mieux les famines spectaculaires que la malnutrition chronique, moins visible, qui reste massive dans certains pays démocratiques comme l’Inde.</p>`
    },
    quiz: [
      { q: "Selon Sen, qu’est-ce qui provoque le plus souvent les famines ?",
        o: ["Une baisse générale de la production de nourriture dans l’ensemble du pays", "La perte par certains groupes de leurs « droits d’accès » à la nourriture", "L’augmentation rapide de la population dans les régions pauvres", "Le manque de terres cultivables dans les régions touchées"], c: 1,
        e: "Le Bengale de 1943 n’a pas connu une chute majeure de la production." },
      { q: "Qu’appelle Sen les « capabilités » ?",
        o: ["Les compétences professionnelles acquises par la formation et l’expérience", "Les libertés réelles de mener la vie qu’on a des raisons de valoriser", "Le revenu disponible une fois les impôts et les loyers payés", "Les capacités de production d’un pays, mesurées par son industrie"], c: 1,
        e: "Le revenu n’est qu’un moyen parmi d’autres." },
      { q: "Pourquoi les démocraties préviennent-elles mieux les famines selon Sen ?",
        o: ["Parce qu’elles sont plus riches et disposent de plus de réserves de céréales", "Parce que les dirigeants doivent répondre devant les électeurs et la presse", "Parce qu’elles importent davantage de nourriture en cas de pénurie", "Parce qu’elles produisent assez de nourriture pour tout le monde"], c: 1,
        e: "La presse joue aussi un rôle d’alerte." },
      { q: "Que désigne l’expression « femmes manquantes » ?",
        o: ["Les femmes ayant émigré vers les grandes villes ou à l’étranger pour travailler", "Les femmes qui devraient vivre si le rapport entre les sexes était normal", "Les femmes absentes des recensements officiels tenus par l’État", "Les femmes sans emploi déclaré dans l’économie du pays"], c: 1,
        e: "Sen en estimait le nombre à plus de cent millions en 1990." },
      { q: "Quelles dimensions combine l’indice de développement humain ?",
        o: ["Revenu, inflation, chômage", "Santé, éducation et niveau de vie", "PIB, exportations et investissement", "Bonheur déclaré et liberté politique"], c: 1,
        e: "Conçu avec Mahbub ul Haq en 1990." }
    ],
    ouverte: {
      q: "La Suisse figure régulièrement dans le peloton de tête de l’indice de développement humain. L’approche par les capabilités de Sen invite-t-elle pourtant à regarder au-delà de ce classement ?",
      r: "Oui. Le rang de la Suisse, première des rapports de 2022 et 2024 et deuxième en 2025 derrière l’Islande, reflète une espérance de vie parmi les plus élevées du monde, une scolarisation longue et un revenu par habitant très élevé. Mais l’approche par les capabilités invite à regarder la répartition de ces libertés, et non seulement les moyennes. Elle pose par exemple la question des personnes aux revenus modestes qui renoncent à des soins pour des raisons financières, des inégalités de chances scolaires selon l’origine sociale ou migratoire, de la conciliation entre vie familiale et vie professionnelle, qui limite les possibilités de beaucoup de femmes, ou de la participation politique des résidents étrangers, qui forment environ un quart de la population sans droit de vote au niveau fédéral. Sen ne nierait pas la réussite suisse, mais il rappellerait que le développement se juge à la liberté réelle de chacun de mener la vie qu’il valorise, y compris des moins favorisés."
    },
    lectures: [
      ["Accessible", "Amartya Sen, Un nouveau modèle économique : développement, justice, liberté, 1999."],
      ["Accessible", "Amartya Sen, Home in the World, mémoires, 2021."],
      ["Intermédiaire", "Amartya Sen, Pauvreté et famines, 1981."],
      ["Intermédiaire", "Amartya Sen, « More Than 100 Million Women Are Missing », New York Review of Books, 1990."],
      ["Recherche", "Amartya Sen, Choix collectif et bien-être social, 1970 ; L’Idée de justice, 2009."]
    ],
    decouvrir: {
      questions: [
        { q: "Pendant la famine du Bengale de 1943, qui meurt, selon le souvenir de Sen ?",
          o: ["Surtout les plus pauvres, comme les journaliers agricoles", "Toute la population de la région, riches comme pauvres", "Surtout les habitants des villes aisées et les fonctionnaires", "Surtout les paysans propriétaires de grandes terres"], c: 0,
          e: "Leurs salaires ne suivaient pas la flambée des prix." },
        { q: "Qu’observe Sen à propos des démocraties et des famines ?",
          o: ["Aucune grande famine n’a frappé une démocratie dotée d’une presse libre", "Les démocraties connaissent davantage de famines que les autres régimes", "Les famines frappent de la même façon tous les régimes politiques", "Les démocraties produisent plus de nourriture que tous les autres régimes"], c: 0,
          e: "Les gouvernements doivent rendre des comptes." }
      ],
      duree: 6,
      html: `
<h3>Un enfant devant la famine</h3>
<p>Amartya Sen, né en 1933 au Bengale, reçoit son prénom du poète Rabindranath Tagore. À neuf ans, il voit la famine de 1943 tuer trois millions de personnes, mais aucune de son entourage : seuls les plus pauvres meurent. Devenu économiste et philosophe, professeur à Cambridge et à Harvard, il reçoit le prix Nobel en 1998.</p>
${vieSen}
<h3>Une famine sans manque de riz</h3>
<p>Sen montre que la famine du Bengale n’est pas due à un manque de riz : la production n’avait pas vraiment baissé. Les prix ont flambé pendant la guerre, et les journaliers agricoles, dont les salaires ne suivaient pas, n’ont plus pu acheter de quoi manger. Il observe aussi qu’aucune grande famine n’a eu lieu dans une démocratie avec une presse libre.</p>
${famine}
<h3>Le développement comme liberté</h3>
<p>Pour Sen, le développement ne se mesure pas seulement au revenu, mais à ce que les gens peuvent réellement être et faire : être en bonne santé, instruits, libres de participer à la vie sociale. Cette idée a inspiré l’indice de développement humain des Nations unies, où la Suisse figure souvent au premier rang.</p>
<h3>À retenir</h3>
<p>Sen a remis l’éthique et la pauvreté au centre de l’économie. Le portrait complet présente sa vie, ses idées et les débats qu’elles suscitent.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De Santiniketan à Calcutta, Cambridge, Harvard et Trinity.",
      epoque: "L’Inde pauvre, la croissance comme seul objectif et l’impossibilité d’Arrow.",
      pensee: "Sept étapes, du choix social à l’idée de justice.",
      livres: "De Choix collectif à L’Idée de justice.",
      cas: "Tagore, l’Inde et la Chine, l’IDH, la commission Stiglitz-Sen-Fitoussi.",
      objections: "Une liste ouverte, les données du Bengale, la malnutrition, Nozick.",
      ecoles: "Smith et Aristote, Arrow et Rawls, Nussbaum, Mahbub ul Haq, Drèze, Duflo.",
      source: "Pas de famine en démocratie avec une presse libre.",
      quiz: "Cinq questions corrigées et une question sur la Suisse et l’IDH.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
