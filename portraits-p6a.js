/* Œconomia — portraits longs, lot 6 (a) : Paul Samuelson, Hyman Minsky */
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
     PAUL SAMUELSON
     ===================================================================== */
  const vieSamuelson = lifeline(1915, 2009, [
    [1915, "naissance dans l’Indiana", true], [1932, "découvre l’économie à Chicago", false], [1940, "professeur au MIT", true], [1947, "Fondements de l’analyse économique", false],
    [1948, "le manuel L’Économique", true], [1961, "conseiller de Kennedy", false], [1970, "prix Nobel", true], [2009, "mort près de Boston", false]
  ], "Paul Samuelson, 1915-2009", "Premier Américain à recevoir le prix Nobel d’économie, Samuelson a passé presque toute sa carrière au MIT, dont il a fait l’un des grands centres mondiaux de l’économie. Son manuel a formé des millions d’étudiants.");

  const apports = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Quelques contributions de Samuelson, du consommateur au commerce mondial</text>`;
    s += cards([["Préférences", "révélées : déduire les goûts des choix observés (1938)", "var(--note)"], ["Cycles", "le multiplicateur et l’accélérateur (1939)", "var(--plum)"], ["Biens publics", "la règle de leur quantité efficace (1954)", "var(--gold)"], ["Commerce", "le théorème de Stolper-Samuelson sur les salaires (1941)", "var(--serial)"], ["Prix aléatoires", "les marchés bien informés (1965)", "var(--note)"]], 112, 200, 44);
    return s;
  })(), "Samuelson a contribué à presque tous les domaines de l’économie : théorie du consommateur, macroéconomie, finances publiques, commerce international, finance, générations imbriquées. Il a surtout imposé une méthode : formuler les problèmes économiques en termes mathématiques d’optimisation et d’équilibre.", "Cinq cartes de contributions");

  const synthese = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>La « synthèse néoclassique » de Samuelson</text>`;
    s += node(20, 50, 290, 100, "Court terme : Keynes", "chômage possible, demande insuffisante,", "var(--plum)") + `<text x="165" y="128" text-anchor="middle" ${S}>politique budgétaire et monétaire utiles</text>`;
    s += node(330, 50, 290, 100, "Plein emploi atteint : les classiques", "prix, offre et demande, allocation", "var(--note)") + `<text x="475" y="128" text-anchor="middle" ${S}>efficace par le marché</text>`;
    s += arrow(312, 100, 328, 100);
    s += `<text x="20" y="186" ${S}>Une fois le plein emploi rétabli par la politique keynésienne, la microéconomie classique redevient valable.</text>`;
    s += `<text x="20" y="204" ${S}>Cette combinaison domine l’enseignement et la politique économique des années 1950 aux années 1970.</text>`;
    return s;
  })(), "La synthèse, présentée dans son manuel de 1955, réconcilie Keynes et la théorie néoclassique. Les post-keynésiens, comme Joan Robinson, y voient une trahison de Keynes ; les monétaristes et les nouveaux classiques en contesteront les fondements dans les années 1970.", "Deux cases : court terme keynésien et plein emploi classique");

  OEC.portraits["samuelson"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Paul Samuelson (1915-2009), professeur au MIT et premier Américain à recevoir le prix Nobel d’économie (1970), a transformé l’économie en une discipline mathématique, fondée sur l’optimisation et l’équilibre, avec ses Fondements de l’analyse économique (1947).",
      "Son manuel, L’Économique (1948), le plus vendu de l’histoire de la discipline, a diffusé la « synthèse néoclassique », qui combine la macroéconomie de Keynes et la microéconomie classique.",
      "On lui doit des contributions majeures dans presque tous les domaines : préférences révélées, biens publics, commerce international, finance, générations imbriquées. Conseiller de Kennedy, il a débattu pendant des années avec Milton Friedman dans les colonnes de Newsweek."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Paul Anthony Samuelson naît le 15 mai 1915 à Gary, dans l’Indiana, ville de l’acier, dans une famille juive d’origine polonaise ; son père est pharmacien. La famille s’installe à Chicago, où il entre à l’université à seize ans. Il racontera être « né en tant qu’économiste » le 2 janvier 1932, à huit heures du matin, lors d’un cours sur Malthus. À Chicago, il suit les cours de Frank Knight, Jacob Viner et Henry Simons, puis part à Harvard, où il étudie avec <a href="#eco-schumpeter">Joseph Schumpeter</a>, Wassily Leontief et Alvin Hansen.</p>
<p>En 1940, Harvard ne lui offre qu’un poste d’instructeur, peut-être en raison de l’antisémitisme de l’époque. Il accepte un poste au Massachusetts Institute of Technology, à quelques kilomètres, où il restera toute sa vie et dont il fera, avec Robert Solow, l’un des meilleurs départements d’économie du monde. Sa thèse, publiée en 1947 sous le titre Fondements de l’analyse économique, révolutionne la discipline.</p>
${vieSamuelson}
<p>En 1948, il publie un manuel d’introduction, L’Économique, qui connaîtra dix-neuf éditions, d’abord seul puis avec William Nordhaus à partir de 1985, et sera traduit dans une quarantaine de langues. Conseiller de John F. Kennedy pendant sa campagne et sa présidence, il refuse cependant toute fonction officielle. De 1966 à 1981, il tient une chronique dans Newsweek, en alternance avec Milton <a href="#eco-friedman">Friedman</a>. Il reçoit le prix Nobel en 1970, deuxième année du prix, et meurt le 13 décembre 2009, près de Boston, à 94 ans.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Samuelson commence ses études en pleine Grande Dépression, au moment où l’économie libérale semble avoir échoué et où la Théorie générale de <a href="#eco-keynes">Keynes</a> bouleverse la discipline. Il devient l’un des premiers keynésiens américains, sous l’influence d’Alvin Hansen à Harvard.</p>
<p>L’économie de l’époque est encore largement littéraire : on raisonne avec des mots et quelques diagrammes. Samuelson, doué en mathématiques, pense que les grandes questions économiques ont une structure commune, celle de problèmes d’optimisation sous contrainte, et qu’on peut les résoudre avec les outils de la physique et des mathématiques.</p>
<p>Après la guerre, les États-Unis deviennent le centre mondial de la recherche économique. Les universités se développent, les gouvernements recrutent des économistes, et la discipline se professionnalise. Le manuel de Samuelson et ses travaux théoriques façonnent cette nouvelle économie scientifique.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’économie comme science mathématique</h4>
<p>Dans les Fondements (1947), Samuelson montre que des problèmes en apparence différents, le comportement du consommateur, de l’entreprise, l’équilibre des marchés, peuvent tous être formulés comme des problèmes de maximisation sous contrainte. Il en tire une méthode générale et des prédictions testables. Il introduit aussi le « principe de correspondance » entre la stabilité d’un équilibre et les effets d’un changement des conditions.</p>
<h4>2. Les préférences révélées</h4>
<p>En 1938, il propose de déduire les préférences des consommateurs de leurs choix observés, sans supposer une utilité mesurable. Si un consommateur choisit un panier alors qu’un autre était abordable, il « révèle » qu’il le préfère. Cette approche fonde l’analyse empirique de la demande.</p>
<h4>3. Le multiplicateur-accélérateur</h4>
<p>En 1939, il combine le <a href="#c-multiplicateur">multiplicateur</a> de Keynes et l’accélérateur, selon lequel l’investissement dépend de la croissance des ventes. Il montre que leur interaction peut produire des oscillations : une première explication mathématique des <a href="#c-cycles">cycles</a>.</p>
${apports}
<h4>4. Le commerce international</h4>
<p>Avec Wolfgang Stolper, en 1941, il montre que le libre-échange peut nuire au facteur de production relativement rare dans un pays : dans un pays riche en capital, les travailleurs peu qualifiés peuvent perdre au commerce avec des pays riches en main-d’œuvre. En 1948, il montre que le commerce tend à égaliser les rémunérations des facteurs entre pays. En 2004, il souligne encore que la délocalisation vers la Chine peut faire des perdants aux États-Unis.</p>
<h4>5. Les biens publics</h4>
<p>En 1954, dans un article de trois pages, il donne la définition moderne des <a href="#c-bien-public">biens publics</a>, non rivaux, et la règle de leur quantité efficace : la somme des dispositions à payer de tous doit égaler le coût.</p>
<h4>6. La synthèse néoclassique</h4>
<p>Samuelson réconcilie Keynes et la théorie néoclassique : à court terme, l’économie peut connaître un chômage durable, que la politique budgétaire et monétaire doit combattre ; une fois le plein emploi rétabli, les mécanismes de marché classiques s’appliquent. Avec Robert Solow, il présente en 1960 la <a href="#c-courbe-phillips">courbe de Phillips</a> comme un menu de choix entre inflation et chômage.</p>
${synthese}
<h4>7. La finance et les générations</h4>
<p>En 1958, il crée le modèle des « générations imbriquées », qui étudie les échanges entre jeunes et vieux et éclaire le financement des retraites. En 1965, il démontre que des prix correctement anticipés fluctuent de manière aléatoire, une base de la théorie des marchés efficients.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Fondements de l’analyse économique (1947).</b> Sa thèse de doctorat, qui fait de l’économie une discipline mathématique unifiée. C’est l’un des livres les plus influents de l’histoire de l’économie au XXe siècle.</p>
<p><b>L’Économique (1948).</b> Le manuel d’introduction le plus vendu de l’histoire, qui a formé des générations d’étudiants dans le monde entier et diffusé la synthèse néoclassique.</p>
<p><b>Programmation linéaire et analyse économique (1958), avec Robert Dorfman et Robert Solow.</b> Un ouvrage qui introduit les méthodes d’optimisation linéaire en économie.</p>
<p><b>Collected Scientific Papers (1966-2011).</b> Sept volumes réunissant près de six cents articles, témoignant d’une productivité exceptionnelle.</p>` }
    ],
    cas: [
      { titre: "Le manuel le plus vendu", html: `
<p>Le manuel L’Économique paraît en 1948, au moment où des milliers d’anciens combattants entrent à l’université. Clair, vivant et rigoureux, il vend des millions d’exemplaires et devient le modèle de tous les manuels d’introduction. Il est attaqué à ses débuts par des conservateurs américains, qui l’accusent de keynésianisme, voire de socialisme. Samuelson aurait déclaré : « Peu m’importe qui écrit les lois d’une nation, ou qui rédige ses traités, si je peux écrire ses manuels d’économie. »</p>` },
      { titre: "Le duel avec Friedman", html: `
<p>De 1966 à 1981, Samuelson et Milton <a href="#eco-friedman">Friedman</a> écrivent à tour de rôle une chronique dans le magazine Newsweek, l’un défendant un keynésianisme modéré, l’autre le monétarisme et le libre marché. Les deux hommes s’estiment malgré leurs désaccords profonds. Leurs débats, sur l’inflation, la politique monétaire, la réglementation ou le rôle de l’État, ont façonné l’opinion publique américaine pendant quinze ans.</p>` },
      { titre: "Le MIT, faute de Harvard", html: `
<p>En 1940, Harvard ne propose pas de poste permanent au brillant jeune Samuelson. Selon de nombreux témoignages, l’antisémitisme qui régnait dans une partie de l’université et la jalousie de certains collègues expliquent ce refus. Samuelson part au MIT, alors une école d’ingénieurs sans grande tradition économique. Il y attire Robert Solow, Franco Modigliani et d’autres futurs prix Nobel, et fait du département l’un des plus prestigieux du monde, longtemps devant Harvard.</p>` },
      { titre: "La controverse perdue", html: `
<p>Dans les années 1950 et 1960, Samuelson défend contre Joan <a href="#eco-robinson">Robinson</a> et les économistes de Cambridge, en Angleterre, l’usage d’un « capital » agrégé dans les modèles de croissance. En 1966, il reconnaît publiquement dans un article, « Un résumé », que ses adversaires ont raison sur le plan logique. C’est un rare exemple d’un grand économiste admettant par écrit une défaite théorique.</p>` }
    ],
    objections: `
<h4>1. La synthèse trahit Keynes</h4>
<p>Joan <a href="#eco-robinson">Robinson</a> et les post-keynésiens accusent la synthèse d’avoir réduit Keynes à un cas particulier de la théorie néoclassique, en évacuant l’incertitude et la monnaie. Robinson parle de « keynésianisme bâtard ».</p>
<h4>2. La courbe de Phillips</h4>
<p>Présenter la courbe de Phillips comme un menu stable entre inflation et chômage s’est révélé une erreur : <a href="#eco-friedman">Friedman</a> et Phelps ont montré que la relation dépendait des anticipations, et la stagflation des années 1970 l’a confirmé.</p>
<h4>3. Trop de mathématiques</h4>
<p>Les critiques de la mathématisation de l’économie, d’Hayek aux économistes hétérodoxes, reprochent à Samuelson d’avoir privilégié l’élégance formelle sur la compréhension des institutions et de l’histoire. L’économie serait devenue un exercice de modélisation détaché de la réalité.</p>
<h4>4. Les nouveaux classiques</h4>
<p>Robert <a href="#eco-lucas">Lucas</a> et ses collègues reprochent à la synthèse ses modèles macroéconomiques sans fondements microéconomiques rigoureux, sensibles à la critique des anticipations. Ils remplacent dans les années 1980 la synthèse par de nouveaux modèles.</p>`,
    ecoles: `
<p><b>Schumpeter</b>, <b>Hansen</b>, <b>Leontief</b> et <b>Edwin Wilson</b>, physicien mathématicien, sont ses maîtres à Harvard.</p>
<p><b>Robert Solow</b>, son collègue du MIT, développe la théorie de la croissance.</p>
<p><b>Les néokeynésiens</b> du MIT, comme Stanley Fischer et Olivier Blanchard, prolongent la synthèse.</p>
<p><b><a href="#eco-krugman">Paul Krugman</a></b>, docteur du MIT, applique ses méthodes au commerce international.</p>
<p><b>William Nordhaus</b>, coauteur de son manuel, développe l’économie du climat.</p>
<p><b>Les manuels contemporains</b>, de Mankiw à Krugman et Wells, suivent le modèle de L’Économique.</p>`,
    source: {
      titre: "Paul Samuelson, avant-propos à Phillip Saunders et William Walstad (dir.), The Principles of Economics Course, 1990",
      texte: "Peu m’importe qui écrit les lois d’une nation, ou qui rédige ses traités avancés, si je peux écrire ses manuels d’économie.",
      notes: `
<p><b>Le pouvoir des manuels.</b> Samuelson souligne que les idées enseignées aux étudiants en première année forment la manière de penser de générations entières de responsables, de journalistes et de citoyens, bien plus que les articles de recherche.</p>
<p><b>Une phrase à double sens.</b> La formule peut être lue comme une marque de fierté, ou comme un aveu de l’influence idéologique des manuels, qui présentent comme évidentes des conceptions discutables.</p>
<p><b>Un écho à Keynes.</b> La phrase rappelle celle de Keynes sur la puissance des idées des économistes, plus grande qu’on ne le croit (<a href="#eco-keynes">voir le portrait de Keynes</a>).</p>`
    },
    quiz: [
      { q: "Quel titre Samuelson est-il le premier à recevoir en 1970 ?",
        o: ["Le prix Nobel d’économie pour un Américain", "La médaille Fields, plus haute distinction en mathématiques", "Le prix Pulitzer, pour son manuel vendu à des millions", "La présidence de la Réserve fédérale, sous Kennedy"], c: 0,
        e: "C’est la deuxième année du prix." },
      { q: "Qu’est-ce que la synthèse néoclassique ?",
        o: ["Le rejet complet de Keynes au profit des anciens économistes classiques anglais", "La combinaison de Keynes à court terme et des classiques au plein emploi", "Une théorie de la monnaie qui relie la masse monétaire aux prix", "Une école marxiste qui réunit Marx et les économistes de Cambridge"], c: 1,
        e: "Keynes vaut à court terme, la théorie classique une fois le plein emploi atteint ; elle domine l’enseignement des années 1950 aux années 1970." },
      { q: "Que montre le théorème de Stolper-Samuelson ?",
        o: ["Que le libre-échange profite à tous les groupes de chaque pays", "Que le libre-échange peut nuire au facteur rare dans un pays", "Que le capital et le travail gagnent toujours autant à l’ouverture", "Que les droits de douane profitent toujours aux consommateurs"], c: 1,
        e: "Il s’agit du facteur relativement rare, par exemple les travailleurs peu qualifiés dans un pays riche en capital." },
      { q: "Avec qui Samuelson alterne-t-il dans les colonnes de Newsweek ?",
        o: ["John Kenneth Galbraith", "Milton Friedman", "Friedrich Hayek", "Paul Krugman"], c: 1,
        e: "De 1966 à 1981." },
      { q: "Dans quelle université Samuelson fait-il toute sa carrière ?",
        o: ["Harvard", "Le MIT", "Chicago", "Stanford"], c: 1,
        e: "Harvard ne lui avait pas offert de poste permanent." }
    ],
    ouverte: {
      q: "Les prix des services sont beaucoup plus élevés en Suisse que dans les pays voisins. L’effet Balassa-Samuelson suffit-il à expliquer cet « îlot de cherté » ?",
      r: "En grande partie. L’effet Balassa-Samuelson, formulé en 1964, explique que dans un pays où la productivité des secteurs exportateurs, industrie, pharmacie, finance, est très élevée, les salaires y sont élevés ; comme les travailleurs peuvent changer de secteur, les salaires montent aussi dans les services peu exposés à la concurrence internationale, coiffure, restauration, construction, dont la productivité n’a pas augmenté autant. Les prix de ces services sont donc élevés. Cela explique qu’une coupe de cheveux coûte bien plus cher à Zurich qu’à Lisbonne. Mais l’effet n’explique pas tout : une partie de l’îlot de cherté vient aussi de la protection agricole, de la concentration de certains marchés, des normes techniques propres à la Suisse et des prix plus élevés pratiqués par des fournisseurs étrangers pour le marché suisse. Les débats suisses sur les « suppléments suisses » portent précisément sur cette part non expliquée par la productivité."
    },
    lectures: [
      ["Accessible", "Paul Samuelson et William Nordhaus, Économie, édition récente, chapitres d’introduction."],
      ["Accessible", "Roger Backhouse, Founder of Modern Economics: Paul A. Samuelson, volume 1, 2017."],
      ["Intermédiaire", "Paul Samuelson, Fondements de l’analyse économique (1947), introduction."],
      ["Intermédiaire", "Paul Samuelson, « The Pure Theory of Public Expenditure », Review of Economics and Statistics, 1954."],
      ["Recherche", "Paul Samuelson, « Interactions between the Multiplier Analysis and the Principle of Acceleration », 1939 ; « Proof That Properly Anticipated Prices Fluctuate Randomly », 1965."]
    ],
    decouvrir: {
      questions: [
        { q: "Quelle méthode Samuelson a-t-il imposée à toute l’économie moderne ?",
          o: ["Formuler l’économie comme des problèmes mathématiques d’optimisation", "L’étude patiente des archives fiscales et des registres de prix", "Les expériences de laboratoire sur de petits groupes d’étudiants", "Les enquêtes de terrain menées dans les villages et les ateliers"], c: 0,
          e: "Chacun y fait au mieux avec des moyens limités ; Samuelson a contribué à presque tous les domaines de la discipline." },
        { q: "Que combine le manuel de Samuelson, L’Économique ?",
          o: ["Les idées de Keynes contre le chômage et celles des classiques sur les marchés", "Le marxisme et le monétarisme, pour opposer travail et monnaie", "La physiocratie et le mercantilisme, deux doctrines économiques du XVIIIe siècle", "La psychologie et la sociologie, pour décrire les comportements"], c: 0,
          e: "Il a été lu par des millions d’étudiants." }
      ],
      duree: 6,
      html: `
<h3>L’économiste des économistes</h3>
<p>Paul Samuelson (1915-2009) découvre l’économie à seize ans, à Chicago. Professeur au MIT pendant près de soixante-dix ans, il devient en 1970 le premier Américain à recevoir le prix Nobel d’économie. Il a contribué à presque tous les domaines de la discipline.</p>
${vieSamuelson}
<h3>L’économie en équations</h3>
<p>Samuelson montre que la plupart des questions économiques peuvent s’écrire comme des problèmes de mathématiques : chacun cherche à faire au mieux avec des moyens limités. Cette méthode est devenue celle de toute l’économie moderne. Il a aussi défini les biens publics et étudié les gagnants et les perdants du commerce international.</p>
${apports}
<h3>Le manuel du monde entier</h3>
<p>Son manuel, L’Économique (1948), a été lu par des millions d’étudiants. Il y combine les idées de Keynes, pour lutter contre le chômage, et celles des classiques, pour le fonctionnement des marchés. Pendant quinze ans, il débat avec Milton Friedman dans un grand magazine américain.</p>
<h3>À retenir</h3>
<p>Samuelson a façonné la manière dont on enseigne et pratique l’économie. Le portrait complet présente sa vie, ses idées et leurs critiques.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Gary à Chicago, Harvard et le MIT, du manuel au prix Nobel.",
      epoque: "La Grande Dépression, Keynes et la professionnalisation de l’économie.",
      pensee: "Sept étapes, de l’économie mathématique à la finance.",
      livres: "Des Fondements au manuel et aux Collected Scientific Papers.",
      cas: "Le manuel, le duel avec Friedman, le MIT, la controverse perdue.",
      objections: "La trahison de Keynes, la courbe de Phillips, les mathématiques, les nouveaux classiques.",
      ecoles: "Schumpeter et Hansen, Solow, les néokeynésiens, Krugman, Nordhaus, les manuels.",
      source: "Peu importe qui écrit les lois, si j’écris les manuels.",
      quiz: "Cinq questions corrigées et une question sur l’îlot de cherté suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     HYMAN MINSKY
     ===================================================================== */
  const vieMinsky = lifeline(1919, 1996, [
    [1919, "naissance à Chicago", true], [1941, "mathématiques à Chicago", false], [1954, "doctorat à Harvard", true], [1965, "Washington University", false],
    [1975, "John Maynard Keynes", true], [1986, "Stabiliser une économie instable", false], [1990, "Levy Institute", true], [1996, "mort", false]
  ], "Hyman Minsky, 1919-1996", "Professeur respecté mais marginal de son vivant, Minsky devient l’économiste le plus cité de la crise de 2008, douze ans après sa mort. Le « moment Minsky » entre alors dans le vocabulaire de la finance.");

  const cycleMinsky = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>« La stabilité est déstabilisante » : la dynamique de Minsky (schéma)</text>`;
    s += node(20, 46, 180, 56, "Période calme", "faibles défauts, profits", "var(--note)");
    s += node(230, 46, 180, 56, "Confiance", "on oublie les risques", "var(--note)");
    s += node(440, 46, 180, 56, "Endettement accru", "marges de sécurité réduites", "var(--gold)");
    s += node(440, 146, 180, 56, "Fragilité", "spéculation et « Ponzi »", "var(--serial)");
    s += node(230, 146, 180, 56, "Moment Minsky", "ventes forcées, krach", "var(--serial)");
    s += node(20, 146, 180, 56, "Crise", "faillites, récession", "var(--serial)");
    s += arrow(202, 74, 228, 74) + arrow(412, 74, 438, 74) + arrow(530, 104, 530, 144) + arrow(438, 174, 412, 174) + arrow(228, 174, 202, 174);
    s += `<path d="M 110 204 C 110 250, 20 250, 20 160 C 20 120, 60 110, 70 104" style="fill:none; stroke:var(--plum); stroke-width:1.6; stroke-dasharray:4 4"/>`;
    s += `<text x="140" y="246" ${S}>Après la crise, prudence retrouvée… jusqu’à ce que le calme revienne.</text>`;
    s += `<text x="20" y="282" ${S}>Le système passe de lui-même d’une structure financière robuste à une structure fragile.</text>`;
    return s;
  })(), "Pour Minsky, les crises financières ne sont pas des chocs venus de l’extérieur : elles naissent de la stabilité elle-même, qui encourage la prise de risque et l’endettement. L’intervention de la banque centrale et de l’État évite l’effondrement, mais valide après coup les comportements risqués.", "Cycle de six étapes de la stabilité à la crise");

  const regimes = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>Les trois postures de financement</text>`;
    s += cards([["Couverture", "Les revenus remboursent intérêts et capital. Robuste.", "var(--note)"], ["Spéculative", "Les revenus paient les intérêts ; le capital doit être refinancé.", "var(--gold)"], ["Ponzi", "Les revenus ne paient même pas les intérêts : on compte sur la hausse des prix.", "var(--serial)"]], 190, 180, 44);
    return s;
  })(), "Plus la part des emprunteurs spéculatifs et « Ponzi » augmente, plus l’économie est vulnérable à une hausse des taux ou à une baisse des prix des actifs. Voir aussi la notice sur l’instabilité financière.", "Trois cartes : couverture, spéculative, Ponzi");

  OEC.portraits["minsky"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Hyman Minsky (1919-1996), économiste américain post-keynésien, a formulé l’« hypothèse d’instabilité financière » : dans une économie capitaliste avec un système financier sophistiqué, les périodes de stabilité encouragent la prise de risque et l’endettement, jusqu’à rendre le système fragile et sujet aux crises.",
      "Il distingue trois postures de financement, couverture, spéculative et « Ponzi », et explique comment l’économie glisse de l’une à l’autre. « La stabilité est déstabilisante. »",
      "Marginal de son vivant, il est redécouvert lors de la crise de 2008, qui semble suivre son scénario point par point. Le « moment Minsky » désigne depuis le basculement brutal d’un marché euphorique dans la crise."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Hyman Philip Minsky naît le 23 septembre 1919 à Chicago, dans une famille d’immigrés juifs venus de Biélorussie, militants socialistes mencheviks. Il étudie les mathématiques à l’université de Chicago, où il suit les cours d’Oskar Lange et d’Henry Simons, qui l’orientent vers l’économie et lui transmettent un intérêt durable pour le système bancaire. Après le service militaire pendant la Seconde Guerre mondiale, il entreprend un doctorat à Harvard, sous la direction de <a href="#eco-schumpeter">Schumpeter</a>, puis de Wassily Leontief, et l’achève en 1954.</p>
<p>Il enseigne à l’université Brown, puis à Berkeley, et à partir de 1965 à la Washington University de Saint-Louis, où il reste jusqu’en 1990. Parallèlement, il siège au conseil d’administration d’une banque du Missouri, ce qui lui donne une connaissance concrète du fonctionnement du crédit. Il travaille aussi comme consultant pour la Réserve fédérale.</p>
${vieMinsky}
<p>Ses idées, jugées peu orthodoxes et peu formalisées, restent en marge de la profession dominée par l’économie néoclassique et les anticipations rationnelles. Il publie en 1975 un livre sur Keynes, en 1982 Est-ce que « cela » peut se reproduire ?, et en 1986 son ouvrage principal, Stabiliser une économie instable. En 1990, il rejoint le Levy Economics Institute du Bard College, dans l’État de New York, où il travaille jusqu’à sa mort, le 24 octobre 1996.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Minsky grandit pendant la Grande Dépression, qui marque profondément sa génération. Après la guerre, les États-Unis connaissent une longue période de stabilité financière : pas de crise bancaire majeure de 1945 au milieu des années 1960. Les économistes en concluent que les crises appartiennent au passé.</p>
<p>Minsky observe au contraire que, depuis le milieu des années 1960, les crises financières reviennent : crise du crédit de 1966, faillite de Penn Central en 1970, crise de 1974-1975, crise de la dette des pays en développement et des caisses d’épargne dans les années 1980, krach de 1987. Chaque fois, l’intervention de la banque centrale et de l’État évite une dépression, mais la fragilité se reconstitue.</p>
<p>Il juge que l’économie dominante, qui étudie des équilibres sans monnaie ni banques, est incapable de comprendre ces phénomènes. Il se réclame d’une lecture de <a href="#eco-keynes">Keynes</a> centrée sur l’incertitude, la finance et l’investissement, et de l’analyse des crises d’Irving Fisher.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Une économie de Wall Street</h4>
<p>Minsky propose d’étudier l’économie du point de vue d’un banquier de Wall Street : un réseau d’engagements financiers, où chaque agent doit faire face à des paiements futurs avec des revenus incertains. L’investissement, financé par la dette, est le moteur de l’économie et la source de son instabilité.</p>
<h4>2. Les trois postures de financement</h4>
<p>Un emprunteur en « couverture » peut rembourser intérêts et capital avec ses revenus. Un emprunteur « spéculatif » ne peut payer que les intérêts et doit refinancer le capital. Un emprunteur « Ponzi » ne peut même pas payer les intérêts : il compte sur la hausse de la valeur de ses actifs pour rembourser.</p>
${regimes}
<h4>3. La stabilité est déstabilisante</h4>
<p>Pendant une période calme, les défauts sont rares, les banques et les emprunteurs gagnent confiance, réduisent leurs marges de sécurité et s’endettent davantage. La part des postures spéculatives et Ponzi augmente, sans que personne ne le remarque, car tout semble bien se passer.</p>
<h4>4. Le moment Minsky</h4>
<p>Il suffit alors d’un choc modeste, une hausse des taux, une baisse des prix des actifs, pour que les emprunteurs Ponzi ne puissent plus payer. Ils doivent vendre leurs actifs, ce qui fait baisser les prix, met en difficulté d’autres emprunteurs, et déclenche une spirale de ventes forcées et de faillites (<a href="#c-instabilite-financiere">voir instabilité financière</a>).</p>
${cycleMinsky}
<h4>5. La grande banque et le grand État</h4>
<p>Pour Minsky, ce qui empêche les crises de dégénérer en dépressions, depuis 1945, c’est le « grand gouvernement », dont les déficits soutiennent les profits en récession, et la « grande banque », la banque centrale, qui agit comme <a href="#c-preteur-dernier-ressort">prêteur en dernier ressort</a>. Ces interventions sont indispensables.</p>
<h4>6. Le revers des sauvetages</h4>
<p>Mais en évitant les faillites, les interventions valident après coup les comportements risqués et encouragent de nouveaux endettements : c’est une forme d’<a href="#c-alea-moral">aléa moral</a>. Chaque crise évitée prépare la suivante, à une échelle plus grande. L’innovation financière, qui contourne sans cesse les règles, accentue ce processus.</p>
<h4>7. Stabiliser une économie instable</h4>
<p>Minsky propose de réguler fortement les banques, de limiter l’endettement, de préférer les investissements publics et les emplois garantis par l’État, l’« employeur en dernier ressort », plutôt que les transferts, et de réformer la fiscalité pour réduire l’incitation à l’endettement.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>John Maynard Keynes (1975).</b> Une relecture de Keynes centrée sur l’investissement, la finance et l’incertitude, contre la synthèse néoclassique.</p>
<p><b>Est-ce que « cela » peut se reproduire ? (1982).</b> Un recueil d’essais, dont le titre pose la question d’une nouvelle Grande Dépression.</p>
<p><b>Stabiliser une économie instable (1986).</b> Son ouvrage principal, qui expose l’hypothèse d’instabilité financière et ses propositions de réforme. Réédité en 2008, il devient un succès.</p>
<p><b>« The Financial Instability Hypothesis » (1992).</b> Un court article de synthèse, la meilleure introduction à sa pensée.</p>` }
    ],
    cas: [
      { titre: "Le moment Minsky de 2007-2008", html: `
<p>L’expression « moment Minsky » est inventée en 1998 par l’économiste Paul McCulley, de la société de gestion PIMCO, à propos de la crise russe. Elle devient célèbre en 2007-2008 : après des années de crédit immobilier facile, de nombreux emprunteurs américains ne pouvaient rembourser leurs prêts que si les prix des logements continuaient à monter, une position typiquement « Ponzi ». Quand les prix commencent à baisser, les défauts se multiplient, les banques vendent leurs actifs, et la crise devient mondiale. Le Wall Street Journal, le Financial Times et la Réserve fédérale citent Minsky. Janet Yellen lui rend hommage en 2009.</p>` },
      { titre: "L’administrateur de banque", html: `
<p>Pendant des années, Minsky siège au conseil d’administration de la Mark Twain Bank, une banque régionale du Missouri. Il y observe directement la manière dont les banquiers évaluent les risques, accordent des crédits et réagissent à la conjoncture. Cette expérience, rare chez un économiste théoricien, nourrit son approche « du point de vue du banquier » et sa conviction que les banques sont des entreprises qui cherchent le profit en innovant, et non de simples intermédiaires passifs.</p>` },
      { titre: "Le volant anticyclique suisse", html: `
<p>Après la crise de 2008, les autorités de nombreux pays adoptent des politiques « macroprudentielles », inspirées en partie des idées de Minsky : il s’agit de freiner l’endettement pendant les périodes d’euphorie. En Suisse, le Conseil fédéral active en 2013, sur proposition de la BNS, un « volant anticyclique de fonds propres », qui oblige les banques à détenir davantage de capital pour les crédits hypothécaires, face à la forte hausse des prix immobiliers. Le volant est désactivé en 2020 au début de la pandémie, puis réactivé en 2022.</p>` },
      { titre: "La redécouverte posthume", html: `
<p>De son vivant, Minsky publie peu dans les grandes revues et n’est guère cité par les économistes dominants, qui jugent ses idées peu formalisées. Ses livres sont épuisés. Après la crise de 2008, Stabiliser une économie instable est réédité, et les ventes de ses livres explosent. Des économistes comme Paul <a href="#eco-krugman">Krugman</a> reconnaissent avoir sous-estimé son œuvre. Les banques centrales intègrent désormais la stabilité financière dans leurs analyses.</p>` }
    ],
    objections: `
<h4>1. Une théorie peu formalisée</h4>
<p>Les économistes reprochent à Minsky de ne pas avoir traduit ses idées en un modèle rigoureux et testable. Depuis 2008, plusieurs chercheurs, comme Steve Keen, ont tenté de formaliser l’hypothèse d’instabilité financière.</p>
<h4>2. Toutes les périodes calmes ne finissent pas en crise</h4>
<p>Certaines expansions longues se terminent sans crise financière majeure, et certaines crises ont d’autres causes, comme des chocs pétroliers ou des pandémies. La théorie de Minsky décrit une tendance, non une loi inévitable.</p>
<h4>3. Les anticipations rationnelles</h4>
<p>Les économistes partisans des marchés efficients jugent qu’il est difficile d’expliquer pourquoi des investisseurs rationnels prendraient systématiquement trop de risques. L’économie comportementale et la théorie de l’aléa moral offrent cependant des réponses.</p>
<h4>4. Les remèdes discutés</h4>
<p>Ses propositions, comme l’emploi garanti par l’État, sont jugées coûteuses et difficiles à mettre en œuvre. Les régulateurs ont préféré des outils macroprudentiels, qui reprennent son diagnostic sans adopter tout son programme.</p>`,
    ecoles: `
<p><b><a href="#eco-keynes">Keynes</a></b> et <b>Irving Fisher</b>, avec sa théorie de la déflation par la dette, sont ses grandes sources.</p>
<p><b><a href="#eco-schumpeter">Schumpeter</a></b>, son directeur de thèse, lui transmet l’intérêt pour l’innovation financière.</p>
<p><b>Charles Kindleberger</b> s’appuie sur lui dans Manias, Panics, and Crashes (1978).</p>
<p><b>Les post-keynésiens</b>, comme L. Randall Wray, prolongent son œuvre et la théorie de l’emploi garanti.</p>
<p><b>Les régulateurs macroprudentiels</b> reprennent son diagnostic après 2008.</p>
<p><b><a href="#eco-krugman">Krugman</a></b> et des économistes dominants le redécouvrent après 2008.</p>`,
    source: {
      titre: "Hyman Minsky, « The Financial Instability Hypothesis: A Restatement », 1978",
      texte: "La stabilité, ou la tranquillité, dans un monde au passé cyclique et doté d’institutions financières capitalistes, est déstabilisante.",
      notes: `
<p><b>Le paradoxe central.</b> La formule résume l’hypothèse d’instabilité financière : ce n’est pas l’instabilité qui conduit aux crises, mais la stabilité, qui pousse à oublier les risques et à s’endetter davantage.</p>
<p><b>« Un passé cyclique ».</b> Minsky souligne que les agents gardent la mémoire des crises passées, mais que cette mémoire s’efface avec le temps et la prospérité. Chaque génération de financiers doit réapprendre le risque.</p>
<p><b>Une phrase reprise.</b> Elle est devenue une référence pour les régulateurs, qui cherchent à constituer des réserves pendant les périodes calmes pour faire face aux crises futures.</p>`
    },
    quiz: [
      { q: "Que signifie « la stabilité est déstabilisante » ?",
        o: ["Que les prix doivent varier pour que les marchés restent stables", "Que les périodes calmes encouragent le risque et l’endettement", "Que les banques centrales provoquent les crises en changeant leurs taux", "Que la monnaie est instable par nature et perd sa valeur sans cesse"], c: 1,
        e: "Le calme pousse au risque et à l’endettement jusqu’à la crise : c’est le cœur de l’hypothèse d’instabilité financière." },
      { q: "Qu’est-ce qu’un emprunteur « Ponzi » selon Minsky ?",
        o: ["Un fraudeur qui falsifie ses comptes pour attirer de nouveaux prêteurs ou associés", "Un emprunteur qui ne peut pas payer ses intérêts et mise sur la hausse des prix", "Un épargnant prudent qui n’emprunte que ce que ses revenus couvrent", "Un emprunteur dont les revenus couvrent les intérêts mais pas le capital"], c: 1,
        e: "Il est le plus vulnérable à une baisse des prix ou à une hausse des taux." },
      { q: "Qui invente l’expression « moment Minsky » ?",
        o: ["Minsky lui-même, dans son dernier livre", "Paul McCulley, gérant de PIMCO, en 1998", "Ben Bernanke, lors d’un discours de 2008", "Paul Krugman, dans une chronique de 2009"], c: 1,
        e: "À propos de la crise russe de 1998." },
      { q: "Qu’est-ce qui empêche les crises de devenir des dépressions depuis 1945, selon Minsky ?",
        o: ["Le libre-échange et l’ouverture des marchés financiers", "La « grande banque » et le « grand gouvernement »", "L’étalon-or et la discipline monétaire des banques", "La concurrence entre banques et la discipline des marchés"], c: 1,
        e: "Mais ces interventions valident les comportements risqués." },
      { q: "Quelle mesure suisse s’inspire de la logique macroprudentielle de Minsky ?",
        o: ["Le frein à l’endettement, qui plafonne les dépenses fédérales selon les recettes", "Le volant anticyclique de fonds propres sur les crédits hypothécaires", "Le salaire minimum cantonal, introduit à Neuchâtel et à Genève", "Le contrôle des loyers pratiqué dans plusieurs villes romandes"], c: 1,
        e: "Activé en 2013, désactivé en 2020, réactivé en 2022." }
    ],
    ouverte: {
      q: "Les ménages suisses sont parmi les plus endettés du monde par rapport à leur revenu, en raison surtout des hypothèques. Minsky y verrait-il un risque de fragilité financière ?",
      r: "Minsky aurait certainement été attentif à ce niveau d’endettement, l’un des plus élevés de l’OCDE, et à la longue période de taux très bas qui a favorisé la hausse des prix immobiliers : un contexte typique de « stabilité déstabilisante ». Mais plusieurs particularités suisses atténuent le risque. Beaucoup de ménages ne remboursent pas le capital de leur hypothèque pour des raisons fiscales, mais disposent en contrepartie d’une épargne importante, notamment dans le deuxième pilier. Les règles d’octroi, qui exigent un apport personnel d’au moins 20 % et calculent la capacité de remboursement avec un taux théorique élevé, autour de 5 %, limitent les positions « Ponzi ». Enfin, la BNS et la FINMA surveillent le marché, et le volant anticyclique a été activé. Minsky rappellerait pourtant que la stabilité passée ne garantit rien, et qu’une hausse brutale des taux ou une baisse des prix pourrait révéler des fragilités cachées."
    },
    lectures: [
      ["Accessible", "Hyman Minsky, « The Financial Instability Hypothesis », Levy Institute Working Paper 74, 1992."],
      ["Accessible", "Charles Kindleberger et Robert Aliber, Manias, Panics, and Crashes, édition récente."],
      ["Intermédiaire", "Hyman Minsky, Stabiliser une économie instable, 1986."],
      ["Intermédiaire", "L. Randall Wray, Why Minsky Matters, 2015."],
      ["Recherche", "Hyman Minsky, John Maynard Keynes, 1975 ; Irving Fisher, « The Debt-Deflation Theory of Great Depressions », Econometrica, 1933."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi Minsky est-il soudain cité partout en 2008 ?",
          o: ["Parce que la crise semble suivre le scénario qu’il avait décrit", "Parce que la Réserve fédérale adopte ses recommandations de 1986", "Parce qu’une réédition de ses cours devient un succès de librairie", "Parce qu’il reçoit à titre posthume une grande distinction académique"], c: 0,
          e: "De son vivant, ses idées intéressaient peu ses collègues." },
        { q: "Quel dilemme Minsky voit-il dans le sauvetage des crises par les banques centrales et les États ?",
          o: ["En évitant les catastrophes, ils encouragent de nouveaux excès", "Ils provoquent de l’hyperinflation en imprimant trop de monnaie", "Ils ruinent les épargnants en faisant chuter la valeur des dépôts bancaires", "Ils freinent la croissance en empêchant les entreprises d’investir"], c: 0,
          e: "D’où l’idée de freiner l’endettement pendant les périodes calmes." }
      ],
      duree: 6,
      html: `
<h3>Le prophète oublié de la crise</h3>
<p>Hyman Minsky (1919-1996), économiste américain, passe sa carrière à étudier les banques et les crises financières. De son vivant, ses idées intéressent peu ses collègues. En 2008, douze ans après sa mort, la crise financière mondiale semble suivre exactement son scénario, et tout le monde se met à le citer.</p>
${vieMinsky}
<h3>Quand le calme prépare la tempête</h3>
<p>Pour Minsky, les crises naissent de la stabilité. Quand tout va bien, les banques et les emprunteurs prennent confiance, oublient les risques et s’endettent de plus en plus. Certains finissent par emprunter en comptant seulement sur la hausse des prix pour rembourser. Le jour où les prix cessent de monter, tout s’effondre : c’est le « moment Minsky ».</p>
${cycleMinsky}
<h3>Sauver sans encourager</h3>
<p>Les banques centrales et les États évitent que les crises deviennent des catastrophes, mais en sauvant le système, ils encouragent de nouveaux excès. D’où l’idée, reprise après 2008, de freiner l’endettement pendant les périodes calmes, comme le font de nombreux pays avec le « volant anticyclique » de fonds propres imposé aux banques.</p>
<h3>À retenir</h3>
<p>« La stabilité est déstabilisante. » Le portrait complet présente la vie de Minsky, sa pensée et sa redécouverte.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Chicago à Harvard, Saint-Louis et le Levy Institute.",
      epoque: "La stabilité d’après-guerre et le retour des crises financières.",
      pensee: "Sept étapes, de l’économie de Wall Street à ses propositions de réforme.",
      livres: "De John Maynard Keynes à Stabiliser une économie instable.",
      cas: "Le moment Minsky de 2008, l’administrateur de banque, le volant suisse, la redécouverte.",
      objections: "Une théorie peu formalisée, des expansions sans crise, les anticipations, les remèdes.",
      ecoles: "Keynes et Fisher, Schumpeter, Kindleberger, les post-keynésiens, les régulateurs, Krugman.",
      source: "La stabilité est déstabilisante.",
      quiz: "Cinq questions corrigées et une question sur l’endettement des ménages suisses.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
