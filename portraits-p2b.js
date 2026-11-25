/* Œconomia — portraits longs, lot 2 (b) : Léon Walras, Alfred Marshall */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const cards = (items, w, h, y0) => items.map(([n, d, c], i) => {
    const x = 20 + i * (w + 10);
    let s = `<rect x="${x}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y0 + 28}" text-anchor="middle" style="fill:${c}; font:700 13px Manrope, sans-serif">${n}</text>`;
    const words = d.split(" "); let line = "", ly = y0 + 56; const max = Math.floor(w / 6.6);
    words.forEach((wd) => { if ((line + wd).length > max) { s += `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
    return s + `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
  }).join("");

  /* =====================================================================
     LÉON WALRAS
     ===================================================================== */
  const vieWalras = lifeline(1834, 1910, [
    [1834, "naissance à Évreux", true], [1858, "publie un roman", false], [1860, "congrès de l’impôt à Lausanne", true], [1868, "faillite de sa caisse coopérative", false],
    [1870, "professeur à Lausanne", true], [1874, "Éléments d’économie pure", false], [1892, "retraite, Pareto lui succède", true], [1910, "mort à Clarens", false]
  ], "Léon Walras, 1834-1910", "Un parcours d’échecs en France, puis vingt-deux ans d’enseignement à Lausanne, où il construit seul, dans un relatif isolement, la théorie de l’équilibre général. Il meurt à Clarens, près de Montreux, en janvier 1910.");

  const trois = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Les trois économies de Walras</text>`;
    s += cards([["Économie pure", "Une science, comme la physique : la théorie des prix dans un régime hypothétique de libre concurrence. Éléments (1874).", "var(--note)"], ["Économie appliquée", "Un art : comment organiser la production, la monnaie, le crédit, les banques. Études d’économie appliquée (1898).", "var(--gold)"], ["Économie sociale", "Une morale : la justice dans la répartition, la propriété, l’impôt, la terre. Études d’économie sociale (1896).", "var(--plum)"]], 190, 200, 44);
    return s;
  })(), "Walras distingue ce qui est (la science), ce qui doit être fait pour l’efficacité (l’art) et ce qui doit être fait pour la justice (la morale). Il voulait consacrer un livre à chacune ; seule l’économie pure a été pleinement développée, et c’est elle qui a fait sa postérité.", "Trois cartes : économie pure, appliquée et sociale");

  const inconnues = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Compter les équations et les inconnues (schéma d’après les Éléments)</text>`;
    s += `<rect x="20" y="46" width="290" height="150" rx="10" style="fill:var(--card); stroke:var(--note); stroke-width:2"/><text x="165" y="72" text-anchor="middle" style="fill:var(--note); font:700 13px Manrope, sans-serif">Inconnues</text>`;
    ["les prix des n biens", "les quantités demandées", "les quantités offertes"].forEach((t, i) => (s += `<text x="40" y="${100 + i * 24}" ${S}>• ${t}</text>`));
    s += `<rect x="330" y="46" width="290" height="150" rx="10" style="fill:var(--card); stroke:var(--plum); stroke-width:2"/><text x="475" y="72" text-anchor="middle" style="fill:var(--plum); font:700 13px Manrope, sans-serif">Équations</text>`;
    ["chaque demande dépend de tous les prix", "chaque offre dépend de tous les prix", "offre = demande sur chaque marché"].forEach((t, i) => (s += `<text x="350" y="${100 + i * 24}" ${S}>• ${t}</text>`));
    s += `<text x="20" y="222" ${S}>Un bien sert de numéraire, et une équation découle des autres (loi de Walras) : autant d’équations que d’inconnues.</text>`;
    s += `<text x="20" y="240" ${S}>Walras en conclut qu’une solution existe ; la démonstration rigoureuse ne viendra qu’en 1954.</text>`;
    return s;
  })(), "L’argument de Walras, simplifié. Compter les équations ne suffit pas à garantir une solution économiquement acceptable, avec des prix positifs. Arrow et Debreu l’établiront avec des outils de topologie. Walras a cependant posé le problème avec une clarté qui a fondé l’économie mathématique.", "Deux colonnes comparant inconnues et équations");

  OEC.portraits["walras"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Léon Walras (1834-1910), économiste français qui a fait toute sa carrière à Lausanne, est le fondateur de la théorie de l’équilibre général : il a décrit l’économie comme un système de marchés interdépendants, où tous les prix se déterminent ensemble.",
      "Il est, avec Jevons et Menger, l’un des trois découvreurs de l’utilité marginale dans les années 1870, et le pionnier de l’économie mathématique. Joseph Schumpeter le jugeait le plus grand de tous les économistes pour la théorie pure.",
      "Il se voulait aussi un réformateur social, partisan de la libre concurrence et de la nationalisation des terres, dont la rente devait financer l’État. Incompris en France, il a fait de Lausanne un centre mondial de la théorie économique."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Marie-Esprit Léon Walras naît à Évreux, en Normandie, le 16 décembre 1834. Son père, Auguste Walras, est un professeur de philosophie passionné d’économie, qui a défendu l’idée que la valeur vient de la rareté et que la terre devrait appartenir à l’État. Léon échoue deux fois au concours d’entrée de l’École polytechnique, entre à l’École des mines, qu’il délaisse pour la littérature. Il publie en 1858 un roman, Francis Sauveur, qui passe inaperçu.</p>
<p>À vingt-quatre ans, il promet à son père de se consacrer à l’économie. Mais la France du Second Empire ne lui ouvre aucune porte : l’économie libérale officielle se méfie de ses mathématiques et de ses idées sociales. Il est tour à tour journaliste, employé de chemin de fer, administrateur d’une caisse de crédit aux associations coopératives, qui fait faillite en 1868. En 1860, il présente au Congrès international de l’impôt, à Lausanne, un mémoire remarqué par un jeune homme politique vaudois, Louis Ruchonnet.</p>
${vieWalras}
<p>Dix ans plus tard, Ruchonnet, devenu responsable de l’instruction publique du canton de Vaud, fait créer une chaire d’économie politique à l’Académie de Lausanne et la propose à Walras. Il y enseigne de 1870 à 1892, publie les Éléments d’économie politique pure en deux fascicules, en 1874 et 1877, et correspond avec les économistes du monde entier pour faire connaître ses idées. Épuisé et souffrant, il prend sa retraite en 1892 ; Vilfredo <a href="#eco-pareto">Pareto</a> lui succède. Il meurt à Clarens le 5 janvier 1910, peu après que l’Université de Lausanne a célébré son jubilé scientifique.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Walras vit en France sous la monarchie de Juillet, la révolution de 1848, le Second Empire et la Troisième République. La question sociale est au centre des débats : misère ouvrière, socialisme, coopératives. L’économie politique officielle, celle de Jean-Baptiste <a href="#eco-say">Say</a> et de ses disciples, défend un libéralisme orthodoxe et se méfie des mathématiques, jugées étrangères à une science morale.</p>
<p>Walras veut réconcilier la science et la justice. Il pense que seule une théorie rigoureuse de la libre concurrence peut montrer ses avantages, et indiquer où l’État doit intervenir. Il admire la mécanique céleste et veut faire de l’économie une science aussi exacte que la physique, en appliquant les mathématiques à des grandeurs comme l’utilité et la rareté.</p>
<p>En Suisse, il trouve un environnement plus ouvert, une université récente qui accueille les idées nouvelles, et un canton dirigé par des radicaux réformateurs. C’est depuis Lausanne qu’il découvre, en 1874, que l’Anglais William Stanley Jevons a publié des idées voisines en 1871, puis que l’Autrichien Carl Menger a fait de même : l’utilité marginale a été découverte trois fois, indépendamment.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Science, art et morale</h4>
<p>Walras distingue trois économies : l’économie pure, science de la détermination des prix, l’économie appliquée, art d’organiser la production, et l’économie sociale, réflexion sur la justice dans la répartition.</p>
${trois}
<h4>2. La rareté</h4>
<p>Reprenant l’idée de son père, Walras fonde la valeur d’échange sur la « rareté », qu’il définit comme l’intensité du dernier besoin satisfait par une quantité consommée, c’est-à-dire l’<a href="#c-utilite-marginale">utilité marginale</a>. À l’équilibre, chaque consommateur répartit ses dépenses de façon que les raretés soient proportionnelles aux prix.</p>
<h4>3. L’interdépendance des marchés</h4>
<p>L’originalité décisive de Walras est de considérer tous les marchés à la fois : marchés des produits, des services producteurs (travail, terre, capital), du capital et de la monnaie. La demande de chaque bien dépend de tous les prix, et les revenus dépendent des prix des services (<a href="#c-equilibre-general">voir équilibre général</a>).</p>
${inconnues}
<h4>4. Le tâtonnement</h4>
<p>Pour décrire comment le marché trouve les prix d’équilibre, Walras imagine un processus de « tâtonnement » : on crie des prix, on relève ceux des biens trop demandés et on baisse ceux des biens trop offerts, jusqu’à l’équilibre. Il s’inspire de la Bourse de Paris, où des agents ajustent les cours selon les ordres reçus.</p>
<h4>5. L’entrepreneur qui ne fait ni bénéfice ni perte</h4>
<p>À l’équilibre de libre concurrence, l’entrepreneur, qui achète des services producteurs et vend des produits, ne fait ni bénéfice ni perte : le prix de vente égale le coût. Il est un simple coordinateur. Cette vision statique sera critiquée par <a href="#eco-schumpeter">Schumpeter</a>, qui fera au contraire de l’entrepreneur le moteur du changement.</p>
<h4>6. La monnaie et le crédit</h4>
<p>Walras consacre de longs développements à la monnaie, défend un bimétallisme corrigé, avec une « monnaie régulatrice » en argent pour stabiliser les prix, et critique la création excessive de monnaie par les banques. Il est l’un des premiers à proposer une politique monétaire visant explicitement la stabilité des prix.</p>
<h4>7. Le socialisme libéral</h4>
<p>Walras se dit « socialiste scientifique » : il veut que l’État rachète progressivement les terres pour en percevoir la rente, ce qui permettrait de supprimer les impôts sur le travail, puisque la valeur du sol, due au progrès collectif, appartient à la société (<a href="#c-rente">voir rente</a>). Il défend la libre concurrence là où elle est possible, et le monopole public, pour les chemins de fer par exemple, là où elle ne l’est pas.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Éléments d’économie politique pure, ou théorie de la richesse sociale (1874-1877).</b> Son chef-d’œuvre, révisé jusqu’à l’édition définitive de 1926. Il expose successivement la théorie de l’échange, de la production, de la capitalisation et de la monnaie. Les leçons 1 à 12 contiennent l’essentiel.</p>
<p><b>Théorie mathématique de la richesse sociale (1883).</b> Un recueil de mémoires présentant ses théories aux mathématiciens et aux savants.</p>
<p><b>Études d’économie sociale (1896).</b> Ses écrits sur la justice, la propriété, la terre et l’impôt, où il expose son socialisme libéral.</p>
<p><b>Études d’économie politique appliquée (1898).</b> Ses écrits sur la monnaie, les banques, les chemins de fer et le monopole.</p>
<p><b>Correspondance.</b> Publiée en 1965 par William Jaffé, elle montre l’immense effort de Walras pour diffuser ses idées et ses échanges avec Jevons, Menger, Edgeworth et Pareto.</p>` }
    ],
    cas: [
      { titre: "Ruchonnet et la chaire de Lausanne", html: `
<p>En 1860, à vingt-cinq ans, Walras participe au concours ouvert par le canton de Vaud sur la question de l’impôt, et présente ses idées au congrès de Lausanne. Il n’obtient que le quatrième prix, mais il impressionne Louis Ruchonnet, jeune avocat radical. En 1870, Ruchonnet, devenu conseiller d’État chargé de l’instruction publique, fait créer à l’Académie une chaire d’économie politique et pense à Walras. Le jury hésite, certains se méfient de ses idées sociales ; il est nommé de justesse. Ruchonnet deviendra conseiller fédéral. Sans ce hasard, la théorie de l’équilibre général aurait peut-être été écrite ailleurs, ou jamais.</p>` },
      { titre: "Lausanne, capitale de la théorie", html: `
<p>Walras puis <a href="#eco-pareto">Pareto</a> font de la petite Académie, devenue université en 1890, l’un des centres mondiaux de l’économie mathématique. On parle de l’« école de Lausanne ». Pareto y développe la notion d’optimum, les courbes d’indifférence et la loi de répartition des revenus qui porte son nom. L’Université de Lausanne rend hommage à Walras en 1909 lors d’un jubilé, puis par une plaque. La faculté des hautes études commerciales y perpétue aujourd’hui sa mémoire.</p>` },
      { titre: "Le prix Nobel de la paix", html: `
<p>À la fin de sa vie, Walras espère obtenir le prix Nobel de la paix, créé en 1901. Il soutient que la libre concurrence, le libre-échange et la justice sociale, tels qu’il les a théorisés, sont les conditions d’une paix durable entre les nations. Il fait circuler un mémoire, « La paix par la justice sociale et le libre-échange » (1907). Le prix ne lui est pas attribué. L’épisode montre combien il considérait son œuvre scientifique comme inséparable d’un projet de réforme.</p>` },
      { titre: "La découverte simultanée", html: `
<p>En 1874, Walras présente ses idées à l’Académie des sciences morales et politiques de Paris, où elles sont mal accueillies. Peu après, il reçoit une lettre de Jevons, qui lui signale sa Théorie de l’économie politique de 1871, aux idées voisines. Walras reconnaît la priorité de Jevons pour l’utilité marginale, tout en revendiquant la sienne pour l’équilibre général. Il découvrira ensuite les travaux de Menger, et les prédécesseurs oubliés, comme Gossen et Cournot. Ces découvertes simultanées marquent la « révolution marginaliste ».</p>` }
    ],
    objections: `
<h4>1. Un modèle irréaliste</h4>
<p>Les critiques de l’équilibre général, des économistes autrichiens aux post-keynésiens, reprochent au modèle de Walras de décrire un monde sans temps, sans incertitude, sans monnaie véritable, où personne n’échange avant que les prix d’équilibre soient trouvés. L’économie réelle serait un processus de déséquilibre permanent.</p>
<h4>2. Le crieur fictif</h4>
<p>Le tâtonnement suppose un crieur que personne n’incarne dans la réalité. Les théoriciens ont montré que le processus peut ne pas converger (<a href="#c-equilibre-general">voir équilibre général</a>). Walras ne dit pas vraiment comment des millions d’agents décentralisés trouvent les prix d’équilibre.</p>
<h4>3. L’entrepreneur réduit à rien</h4>
<p><a href="#eco-schumpeter">Schumpeter</a>, pourtant grand admirateur de Walras, juge que son équilibre ne peut pas expliquer le développement économique, qui vient des déséquilibres créés par l’innovation.</p>
<h4>4. Marshall et l’équilibre partiel</h4>
<p>Les économistes anglais, autour de <a href="#eco-marshall">Marshall</a>, préfèrent étudier un marché à la fois, plus maniable et plus proche des données. Walras jugeait cette approche insuffisante. Le débat entre équilibre partiel et général reste ouvert selon les questions étudiées.</p>`,
    ecoles: `
<p><b>Auguste Walras</b>, son père, et <b>Antoine-Augustin Cournot</b> sont ses principaux inspirateurs.</p>
<p><b><a href="#eco-pareto">Pareto</a></b> lui succède à Lausanne et prolonge l’équilibre général.</p>
<p><b>Gustav Cassel</b> diffuse une version simplifiée de son système dans les années 1920.</p>
<p><b>Kenneth Arrow</b>, <b>Gérard Debreu</b> et <b>Lionel McKenzie</b> en démontrent rigoureusement l’existence (1954).</p>
<p><b>Oskar Lange</b> l’utilise pour défendre la possibilité d’un socialisme de marché.</p>
<p><b>Les modèles d’équilibre général calculable</b>, utilisés pour évaluer les politiques publiques, en sont les héritiers.</p>`,
    source: {
      titre: "Joseph Schumpeter, Histoire de l’analyse économique, 1954, partie IV, chapitre 7",
      texte: "En ce qui concerne la théorie pure, Walras est à mon avis le plus grand de tous les économistes. Son système d’équilibre économique, qui unit la qualité de la créativité révolutionnaire à celle de la synthèse classique, est la seule œuvre d’un économiste qui supporte la comparaison avec les réalisations de la physique théorique.",
      notes: `
<p><b>Un hommage de poids.</b> Schumpeter n’était pas un disciple de Walras : il en critiquait l’absence de dynamique. Son jugement porte sur la puissance théorique du système, qu’il considère comme la « Grande Charte » de l’économie exacte.</p>
<p><b>La comparaison avec la physique.</b> C’était l’ambition même de Walras, grand admirateur de la mécanique de Newton et de Laplace, que de donner à l’économie la rigueur d’une science physique.</p>
<p><b>Une reconnaissance tardive.</b> De son vivant, Walras a souffert de l’indifférence de ses contemporains, surtout en France. La reconnaissance de son œuvre est venue au XXe siècle, avec l’essor de l’économie mathématique.</p>`
    },
    quiz: [
      { q: "Dans quelle ville Walras a-t-il enseigné et construit sa théorie ?",
        o: ["Paris", "Lausanne", "Genève", "Évreux"], c: 1,
        e: "Il occupe la chaire d’économie politique de l’Académie de Lausanne de 1870 à 1892." },
      { q: "Quelle est l’originalité principale de Walras ?",
        o: ["La théorie de la valeur-travail", "L’étude de tous les marchés ensemble, avec leurs interdépendances", "La défense du protectionnisme", "L’étude des cycles"], c: 1,
        e: "C’est la théorie de l’équilibre général." },
      { q: "Qu’appelle Walras la « rareté » ?",
        o: ["Le manque de ressources naturelles", "L’intensité du dernier besoin satisfait, c’est-à-dire l’utilité marginale", "Le prix d’un bien", "La quantité totale d’un bien disponible"], c: 1,
        e: "Il reprend l’idée de son père Auguste Walras." },
      { q: "Que propose Walras dans son économie sociale ?",
        o: ["La suppression de la propriété privée", "Le rachat progressif des terres par l’État pour en percevoir la rente", "L’impôt unique sur le revenu", "La fin de la concurrence"], c: 1,
        e: "La rente du sol, due au progrès collectif, devrait financer l’État." },
      { q: "Qui succède à Walras à Lausanne en 1893 ?",
        o: ["Schumpeter", "Vilfredo Pareto", "Marshall", "Jevons"], c: 1,
        e: "Ensemble, ils forment l’école de Lausanne." }
    ],
    ouverte: {
      q: "En 2016, le canton de Bâle-Ville a accepté une initiative qui lui interdit en principe de vendre ses terrains, désormais cédés en droit de superficie. Walras aurait-il approuvé ?",
      r: "Cette politique se rapproche nettement de son économie sociale. Walras voulait que l’État devienne propriétaire du sol et en perçoive la rente, parce que la valeur des terrains provient du développement de la collectivité plutôt que du travail des propriétaires. En conservant ses terrains et en les louant par des droits de superficie, le canton perçoit une rente régulière et garde la maîtrise de l’usage du sol à long terme. Walras aurait sans doute apprécié cette démarche progressive, par rachat ou conservation plutôt que par expropriation, qui était aussi la sienne. Ses critiques libéraux répondraient que la gestion publique du sol peut être moins efficace et soumise à des pressions politiques, et que le marché foncier oriente mieux les terrains vers leurs usages les plus productifs. Le débat sur la politique foncière publique, très vif dans les villes suisses, prolonge directement la réflexion de Walras."
    },
    lectures: [
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitre sur les marginalistes."],
      ["Accessible", "Jean-Pierre Potier, Léon Walras, économiste et socialiste libéral, Classiques Garnier, 2019."],
      ["Intermédiaire", "Léon Walras, Éléments d’économie politique pure (1874), leçons 1 à 12."],
      ["Intermédiaire", "Donald Walker, Walras’s Market Models, 1996."],
      ["Recherche", "William Jaffé (dir.), Correspondence of Léon Walras and Related Papers, 1965 ; Kenneth Arrow et Gérard Debreu, « Existence of an Equilibrium for a Competitive Economy », Econometrica, 1954."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi Walras s’installe-t-il à Lausanne ?",
          o: ["Parce que la France n’a pas de place pour lui et que le canton de Vaud lui offre une chaire en 1870", "Parce qu’il y est né", "Pour diriger une banque", "Pour fuir une guerre"], c: 0,
          e: "Il y écrit l’une des œuvres les plus importantes de l’histoire de l’économie." },
        { q: "Selon Walras, comment l’État devrait-il se financer pour ne pas taxer le travail ?",
          o: ["En possédant les terres et en vivant de leurs loyers", "En imprimant de la monnaie", "En taxant les importations", "En empruntant sans limite"], c: 0,
          e: "Walras était aussi un réformateur social." }
      ],
      duree: 6,
      html: `
<h3>Un Français à Lausanne</h3>
<p>Léon Walras (1834-1910) échoue à entrer à Polytechnique, écrit un roman, travaille dans une banque coopérative qui fait faillite. La France n’a pas de place pour lui. C’est le canton de Vaud qui lui offre en 1870 une chaire d’économie à Lausanne. Il y écrit l’une des œuvres les plus importantes de l’histoire de l’économie.</p>
${vieWalras}
<h3>Tous les marchés à la fois</h3>
<p>Walras a une idée nouvelle : étudier tous les marchés ensemble. Le prix du pain dépend du prix du blé, des salaires, des loyers, qui dépendent eux-mêmes d’autres prix. Il décrit l’économie par des équations et montre qu’il peut exister des prix pour lesquels l’offre égale la demande partout. C’est la théorie de l’équilibre général.</p>
<h3>Un savant et un réformateur</h3>
<p>Walras est aussi l’un des trois découvreurs de l’utilité marginale, en même temps que Jevons et Menger. Et il veut une société plus juste : selon lui, l’État devrait posséder les terres et vivre de leurs loyers, pour ne pas taxer le travail. Après lui, Pareto continue son œuvre à Lausanne.</p>
<h3>À retenir</h3>
<p>Walras a fondé l’économie mathématique et fait de Lausanne un centre mondial de la théorie. Le portrait complet présente sa vie, ses idées et sa postérité.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "D’Évreux à Lausanne : échecs en France, chaire vaudoise, retraite à Clarens.",
      epoque: "La question sociale, l’économie officielle et la découverte simultanée de l’utilité marginale.",
      pensee: "Sept étapes, de la rareté au socialisme libéral.",
      livres: "Des Éléments aux Études d’économie sociale et appliquée.",
      cas: "Ruchonnet, l’école de Lausanne, le Nobel de la paix, la découverte simultanée.",
      objections: "Un modèle irréaliste, le crieur fictif, l’entrepreneur, Marshall.",
      ecoles: "Auguste Walras et Cournot, Pareto, Cassel, Arrow-Debreu, Lange, les modèles calculables.",
      source: "Schumpeter : le plus grand de tous les économistes pour la théorie pure.",
      quiz: "Cinq questions corrigées et une question sur la politique foncière bâloise.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     ALFRED MARSHALL
     ===================================================================== */
  const vieMarshall = lifeline(1842, 1924, [
    [1842, "naissance à Londres", true], [1865, "second au concours de mathématiques", false], [1877, "épouse Mary Paley", true], [1885, "professeur à Cambridge", false],
    [1890, "Principes d’économie", true], [1903, "crée le cursus d’économie", false], [1908, "retraite, Pigou lui succède", true], [1924, "mort à Cambridge", false]
  ], "Alfred Marshall, 1842-1924", "Mathématicien devenu économiste par souci des pauvres, Marshall domine l’économie britannique pendant quarante ans. Ses Principes (1890) connaissent huit éditions de son vivant et forment des générations d’étudiants, dont Keynes et Pigou.");

  const periodes = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>Le rôle du temps : la même hausse de la demande, trois horizons (schéma)</text>`;
    const panel = (x0, title, supply, sub) => {
      const L = x0 + 20, R = x0 + 180, Top = 60, B = 220;
      let p = `<text x="${x0 + 100}" y="48" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">${title}</text>`;
      p += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
      p += `<line x1="${L + 10}" y1="${Top + 30}" x2="${R - 30}" y2="${B - 10}" style="stroke:var(--serial); stroke-width:2; opacity:.45"/>`;
      p += `<line x1="${L + 40}" y1="${Top + 10}" x2="${R}" y2="${B - 30}" style="stroke:var(--serial); stroke-width:2.4"/>`;
      p += supply(L, R, Top, B);
      p += `<text x="${x0 + 100}" y="${B + 22}" text-anchor="middle" ${S}>${sub[0]}</text><text x="${x0 + 100}" y="${B + 38}" text-anchor="middle" ${S}>${sub[1]}</text>`;
      return p;
    };
    s += panel(20, "Le jour du marché", (L, R, Top, B) => `<line x1="${L + 80}" y1="${Top}" x2="${L + 80}" y2="${B}" style="stroke:var(--note); stroke-width:2.6"/>`, ["quantité fixe :", "seul le prix monte"]);
    s += panel(225, "Courte période", (L, R, Top, B) => `<line x1="${L + 30}" y1="${B - 10}" x2="${R - 10}" y2="${Top + 20}" style="stroke:var(--note); stroke-width:2.6"/>`, ["on pêche davantage :", "prix et quantité montent"]);
    s += panel(430, "Longue période", (L, R, Top, B) => `<line x1="${L}" y1="${Top + 95}" x2="${R}" y2="${Top + 75}" style="stroke:var(--note); stroke-width:2.6"/>`, ["nouveaux bateaux :", "le prix revient vers le coût"]);
    return s;
  })(), "L’exemple du marché aux poissons dans les Principes (livre V). Plus l’horizon est long, plus l’offre s’adapte, et plus le prix dépend du coût de production plutôt que de la demande. Cette distinction réconcilie la théorie classique, centrée sur les coûts, et la théorie marginaliste, centrée sur l’utilité. En rouge la demande avant et après, en vert l’offre.", "Trois petits graphiques d’offre et de demande selon l’horizon");

  const outils = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>La boîte à outils de Marshall</text>`;
    s += cards([["Élasticité", "de combien la demande réagit au prix", "var(--note)"], ["Surplus", "ce que l’acheteur gagne au-delà du prix payé", "var(--note)"], ["Quasi-rente", "le revenu temporaire d’un équipement", "var(--gold)"], ["Districts", "les économies externes du regroupement", "var(--gold)"], ["Ceteris paribus", "toutes choses égales : isoler un effet", "var(--plum)"]], 112, 200, 44);
    return s;
  })(), "Des notions toujours enseignées dans les cours d’introduction, que Marshall a créées ou popularisées. Elles reflètent sa méthode : des outils simples, applicables aux données, plutôt qu’un grand système abstrait.", "Cinq cartes présentant les outils de Marshall");

  OEC.portraits["marshall"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Alfred Marshall (1842-1924), professeur à Cambridge, est le grand architecte de l’économie néoclassique anglaise. Ses Principes d’économie politique (1890) réconcilient la théorie classique des coûts et la théorie marginaliste de l’utilité dans le modèle de l’offre et de la demande.",
      "On lui doit l’élasticité, le surplus du consommateur, la distinction entre courte et longue période, la quasi-rente et les économies externes des districts industriels. Il a fait de l’économie une discipline universitaire autonome à Cambridge.",
      "Il voulait une économie utile, au service de l’amélioration de la condition des pauvres, prudente dans l’usage des mathématiques et attentive aux faits. Il a formé Keynes et Pigou, et son influence a dominé l’enseignement de l’économie pendant un demi-siècle."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Alfred Marshall naît le 26 juillet 1842 à Bermondsey, quartier populaire du sud de Londres. Son père, caissier à la Banque d’Angleterre, est un homme sévère et profondément évangélique, qui le destine au clergé et le fait travailler tard le soir sur l’hébreu. Le jeune Alfred préfère les mathématiques. Grâce au prêt d’un oncle, il étudie au St John’s College de Cambridge et sort en 1865 second au célèbre concours de mathématiques, le Mathematical Tripos.</p>
<p>Il s’oriente d’abord vers la philosophie morale et la psychologie, puis vers l’économie, à la suite d’une crise religieuse et d’une découverte de la misère : il visite les quartiers les plus pauvres des villes industrielles et se demande si la pauvreté est inévitable. Il lit Mill et Ricardo et entreprend de traduire leurs raisonnements en mathématiques.</p>
${vieMarshall}
<p>En 1877, il épouse Mary Paley, l’une des premières étudiantes de Cambridge, avec qui il écrit The Economics of Industry (1879). Le mariage l’oblige à quitter son poste de fellow, réservé aux célibataires ; il devient le premier directeur du University College de Bristol, puis enseigne brièvement à Oxford. En 1885, il revient à Cambridge comme professeur d’économie politique. Ses Principes d’économie politique paraissent en 1890 et font de lui l’économiste le plus influent de son pays. En 1903, il obtient la création d’un cursus d’économie indépendant, l’Economics Tripos. Il prend sa retraite en 1908, publie encore Industrie et commerce (1919) et Monnaie, crédit et commerce (1923), et meurt à Cambridge le 13 juillet 1924.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Marshall vit dans la Grande-Bretagne victorienne, première puissance industrielle et commerciale du monde. La prospérité générale coexiste avec une pauvreté massive dans les grandes villes, décrite par les enquêtes de Charles Booth à Londres. Les syndicats se développent, le droit de vote s’élargit, la question sociale devient centrale. À partir des années 1870, l’Allemagne et les États-Unis rattrapent l’industrie britannique.</p>
<p>Sur le plan intellectuel, l’économie classique de <a href="#eco-ricardo">Ricardo</a> et de <a href="#eco-mill">Mill</a> est contestée. Jevons, en 1871, l’attaque au nom de l’utilité marginale ; l’école historique allemande lui reproche son abstraction. Marshall, qui avait élaboré ses idées dès les années 1860, veut montrer que l’héritage classique et les idées marginalistes peuvent être réconciliés.</p>
<p>Marshall veut aussi une économie utile, qui aide à comprendre comment améliorer la vie des travailleurs. Sa leçon inaugurale de 1885 se termine par un appel aux étudiants : avoir « une tête froide mais un cœur chaud », et consacrer leurs forces à combattre la souffrance sociale.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’économie, étude de l’homme dans les affaires ordinaires</h4>
<p>Marshall définit l’économie comme l’étude de l’humanité dans les affaires ordinaires de la vie. Elle s’appuie sur la mesure des motivations par l’argent, qui est le moyen de mesurer la force des désirs, sans supposer que les hommes ne soient mus que par l’argent.</p>
<h4>2. Les ciseaux de l’offre et de la demande</h4>
<p>À la querelle entre ceux qui fondent la valeur sur le coût et ceux qui la fondent sur l’utilité, Marshall répond par l’image des ciseaux : les deux lames coupent ensemble. La demande dépend de l’utilité, l’offre du coût, et le prix de leur rencontre (<a href="#c-offre-demande">voir offre et demande</a>).</p>
<h4>3. Toutes choses égales par ailleurs</h4>
<p>Pour étudier un problème complexe, Marshall l’isole : il étudie un marché à la fois, en supposant que le reste ne change pas, ceteris paribus. C’est l’équilibre partiel, plus modeste que l’équilibre général de <a href="#eco-walras">Walras</a>, mais plus maniable et plus proche des données.</p>
<h4>4. Le rôle du temps</h4>
<p>Marshall distingue le jour du marché, la courte période et la longue période. Plus l’horizon est long, plus l’offre peut s’adapter, et plus le prix dépend du coût de production. C’est la clé de la réconciliation entre classiques et marginalistes.</p>
${periodes}
<h4>5. L’élasticité et le surplus</h4>
<p>Marshall formalise l’élasticité de la demande, qui mesure la sensibilité de la quantité demandée au prix, et le <a href="#c-surplus">surplus du consommateur</a>, la différence entre ce qu’on serait prêt à payer et ce qu’on paie. Ces outils permettent d’analyser les taxes et les monopoles.</p>
${outils}
<h4>6. Les économies externes et les districts industriels</h4>
<p>Marshall observe que les entreprises d’une même industrie gagnent à se regrouper dans une région : main-d’œuvre qualifiée, fournisseurs spécialisés, circulation des idées. Ces économies externes expliquent les districts industriels de Sheffield ou du Lancashire, et annoncent l’économie géographique moderne (<a href="#c-rendements-croissants">voir rendements croissants</a>).</p>
<h4>7. Les mathématiques comme langage auxiliaire</h4>
<p>Mathématicien de formation, Marshall relègue les équations en notes et en annexe. Il veut que les Principes soient lisibles par les hommes d’affaires et les responsables publics. Les mathématiques servent à vérifier un raisonnement ; elles doivent ensuite être traduites en langage ordinaire et illustrées par des exemples réels.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>The Economics of Industry (1879), avec Mary Paley Marshall.</b> Un manuel destiné aux cours populaires, qui contient déjà l’essentiel de ses idées. Marshall le retirera ensuite de la vente, le jugeant trop simple.</p>
<p><b>Principes d’économie politique (1890).</b> Son œuvre majeure, révisée jusqu’en 1920. Le livre III sur la demande, le livre IV sur la production et l’organisation industrielle, et le livre V sur l’équilibre de l’offre et de la demande sont les plus importants.</p>
<p><b>Industrie et commerce (1919).</b> Une vaste étude comparée de l’organisation industrielle britannique, allemande, américaine et française, fruit de décennies d’observation.</p>
<p><b>Monnaie, crédit et commerce (1923).</b> Ses idées sur la monnaie, élaborées dès les années 1870 et transmises oralement à ses élèves, notamment la version de la théorie quantitative dite « de Cambridge ».</p>` }
    ],
    cas: [
      { titre: "Les six règles des mathématiques", html: `
<p>En 1906, Marshall écrit au statisticien Arthur Bowley une lettre devenue célèbre. Il y décrit sa règle de travail : utiliser les mathématiques comme un langage abrégé plutôt que comme un moteur de recherche ; les conserver jusqu’à ce que le raisonnement soit terminé ; le traduire en anglais ; l’illustrer par des exemples importants de la vie réelle ; brûler les mathématiques ; et si l’on ne réussit pas à trouver d’exemples, brûler aussi l’anglais. Il ajoute qu’il a souvent dû recourir à la dernière étape. La lettre est encore citée dans les débats sur la place des mathématiques en économie.</p>` },
      { titre: "Mary Paley Marshall", html: `
<p>Mary Paley fait partie des cinq premières étudiantes du Newnham College, à Cambridge, au début des années 1870. Elle est l’une des premières femmes à enseigner l’économie à Cambridge, et coécrit avec Alfred The Economics of Industry. Après leur mariage, elle s’efface au profit de l’œuvre de son mari, dont elle relit et corrige les travaux. Keynes, dans la notice qu’il lui consacre en 1944, souligne son rôle discret mais réel.</p>` },
      { titre: "Marshall contre les diplômes des femmes", html: `
<p>En 1897, l’université de Cambridge vote sur l’attribution de diplômes complets aux femmes. Marshall, dont la femme avait enseigné l’économie, s’y oppose, au nom d’une conception très traditionnelle des rôles des sexes. La proposition est rejetée ; les femmes n’obtiendront des diplômes complets à Cambridge qu’en 1948. L’épisode est souvent cité pour montrer les limites du réformisme victorien de Marshall.</p>` },
      { titre: "Le maître de Keynes et de Pigou", html: `
<p>Marshall repère très tôt le talent du jeune John Maynard <a href="#eco-keynes">Keynes</a>, fils de son collègue John Neville Keynes, et l’encourage à se consacrer à l’économie, lui offrant même sur ses propres deniers un poste de chargé de cours. Arthur Cecil Pigou, son successeur, développera l’économie du bien-être et la théorie des <a href="#c-externalite">externalités</a>. Pendant des décennies, l’économie de Cambridge sera marshallienne, jusqu’à ce que Keynes, son élève le plus brillant, s’en émancipe avec la Théorie générale.</p>` }
    ],
    objections: `
<h4>1. Sraffa et les rendements croissants</h4>
<p>En 1926, Piero Sraffa montre que l’analyse de Marshall, qui combine concurrence et rendements croissants, est logiquement fragile : si les coûts baissent avec la taille, la concurrence parfaite ne peut pas subsister. La critique ouvre la voie aux théories de la <a href="#c-concurrence-imparfaite">concurrence imparfaite</a>.</p>
<h4>2. L’équilibre partiel insuffisant</h4>
<p>Les héritiers de Walras jugent que l’analyse marché par marché ignore les répercussions entre marchés, essentielles pour les grandes questions comme le chômage ou la monnaie.</p>
<h4>3. Keynes contre Marshall</h4>
<p><a href="#eco-keynes">Keynes</a>, son élève, rompt en 1936 avec la tradition marshallienne, qui supposait que l’économie tend vers le plein emploi. La Théorie générale se présente comme une critique de la « théorie classique », dont Marshall est le principal représentant.</p>
<h4>4. Une prudence qui confine à l’ambiguïté</h4>
<p>Les critiques reprochent à Marshall de multiplier les nuances et les exceptions, au point de rendre ses positions difficiles à tester. « Tout est dans Marshall », disait-on à Cambridge, ce qui pouvait être un compliment ou un reproche.</p>`,
    ecoles: `
<p><b><a href="#eco-mill">Mill</a></b> et <b><a href="#eco-ricardo">Ricardo</a></b>, qu’il traduit en mathématiques, et <b>Cournot</b> sont ses grandes sources.</p>
<p><b>Arthur Cecil Pigou</b>, son successeur, fonde l’économie du bien-être.</p>
<p><b><a href="#eco-keynes">Keynes</a></b>, son élève, s’en émancipe ; <b><a href="#eco-robinson">Joan Robinson</a></b> et <b>Sraffa</b> en critiquent les fondements.</p>
<p><b>L’économie industrielle</b> et l’économie géographique moderne, avec <a href="#eco-krugman">Krugman</a>, redécouvrent ses économies externes.</p>
<p><b>Les manuels d’introduction</b>, de Samuelson à aujourd’hui, reprennent ses diagrammes d’offre et de demande.</p>
<p><b>Les économistes du développement local</b> s’inspirent de ses districts industriels, notamment en Italie.</p>`,
    source: {
      titre: "Alfred Marshall, lettre à Arthur Bowley, 27 février 1906",
      texte: "(1) Utiliser les mathématiques comme un langage abrégé plutôt que comme un moteur de recherche. (2) Les conserver jusqu’à ce que l’on ait fini. (3) Traduire en anglais. (4) Puis illustrer par des exemples importants tirés de la vie réelle. (5) Brûler les mathématiques. (6) Si l’on ne réussit pas en 4, brûler 3.",
      notes: `
<p><b>Le contexte.</b> Marshall répond au statisticien Arthur Bowley, qui s’intéressait à l’usage des mathématiques en économie. Il lui confie qu’il a de plus en plus le sentiment qu’un bon théorème mathématique portant sur des hypothèses économiques a peu de chances d’être de la bonne économie.</p>
<p><b>Une méthode.</b> La règle n’exprime pas un rejet des mathématiques, que Marshall maîtrisait parfaitement, mais l’exigence que tout raisonnement soit compréhensible en langage ordinaire et confirmé par des exemples réels.</p>
<p><b>Un débat toujours actuel.</b> La lettre est citée par ceux qui jugent l’économie contemporaine trop mathématisée, comme par ceux qui y voient un rappel de la discipline nécessaire pour relier modèles et réalité.</p>`
    },
    quiz: [
      { q: "Quelle image Marshall utilise-t-il pour réconcilier coût et utilité ?",
        o: ["Le pendule", "Les deux lames d’une paire de ciseaux", "La main invisible", "La balance"], c: 1,
        e: "L’offre et la demande coupent ensemble." },
      { q: "Que signifie « toutes choses égales par ailleurs » ?",
        o: ["Que l’on tient compte de tous les facteurs à la fois", "Isoler un effet en supposant que les autres facteurs ne changent pas", "Que les prix sont égaux", "Que l’offre égale la demande"], c: 1,
        e: "C’est la méthode de l’équilibre partiel." },
      { q: "Pourquoi le prix dépend-il davantage du coût à long terme ?",
        o: ["Parce que la demande disparaît", "Parce que l’offre a le temps de s’adapter, par exemple en construisant de nouveaux bateaux", "Parce que les goûts des consommateurs ne changent jamais", "Parce que les coûts baissent toujours"], c: 1,
        e: "C’est la distinction entre jour du marché, courte et longue période." },
      { q: "Que conseille Marshall de faire des mathématiques une fois le raisonnement traduit et illustré ?",
        o: ["Les publier en premier", "Les brûler", "Les enseigner", "Les vérifier par ordinateur"], c: 1,
        e: "Elles doivent rester un langage auxiliaire." },
      { q: "Lequel de ces économistes fut l’élève de Marshall ?",
        o: ["Walras", "Keynes", "Marx", "Hayek"], c: 1,
        e: "Keynes, puis Pigou, son successeur à Cambridge." }
    ],
    ouverte: {
      q: "Marshall jugeait que l’éducation et la formation des travailleurs étaient la clé pour vaincre la pauvreté. Le système suisse d’apprentissage correspond-il à son idéal ?",
      r: "Sur bien des points, oui. Marshall insistait sur l’investissement dans les capacités des travailleurs, qu’il considérait comme le plus précieux de tous les capitaux, et sur l’importance de la formation technique liée à l’industrie, qu’il admirait en Allemagne. Le système dual suisse, qui combine formation en entreprise et école professionnelle, forme une main-d’œuvre qualifiée et réduit le chômage des jeunes, ce que Marshall aurait salué. Il correspond aussi à ses économies externes : les entreprises d’une région profitent d’un réservoir de compétences commun. Mais Marshall voulait aussi élever le caractère et la culture des travailleurs, au-delà des seules compétences professionnelles, et il valorisait l’éducation générale. Il aurait sans doute apprécié la perméabilité du système suisse, qui permet de passer de l’apprentissage aux hautes écoles, et se serait inquiété d’une spécialisation trop précoce qui enfermerait les jeunes dans un métier."
    },
    lectures: [
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitre sur le monde victorien."],
      ["Accessible", "J. M. Keynes, « Alfred Marshall, 1842-1924 », Economic Journal, 1924, repris dans Essais biographiques."],
      ["Intermédiaire", "Alfred Marshall, Principes d’économie politique (1890), livres I, III et V."],
      ["Intermédiaire", "Peter Groenewegen, A Soaring Eagle: Alfred Marshall, 1842-1924, 1995."],
      ["Recherche", "Piero Sraffa, « The Laws of Returns under Competitive Conditions », Economic Journal, 1926 ; Alfred Marshall, Industry and Trade, 1919."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi Marshall décide-t-il de consacrer sa vie à l’économie ?",
          o: ["En visitant les quartiers pauvres, il veut comprendre comment améliorer la condition des travailleurs", "Pour faire fortune en Bourse", "Parce que son père était économiste", "Pour conseiller la Banque d’Angleterre"], c: 0,
          e: "Le mathématicien de Cambridge veut une économie utile." },
        { q: "Selon Marshall, qu’est-ce qui compte le plus pour fixer le prix à long terme ?",
          o: ["Le coût de production", "La demande", "L’humeur des acheteurs", "Le prix fixé par l’État"], c: 0,
          e: "À court terme, c’est la demande qui compte le plus." }
      ],
      duree: 6,
      html: `
<h3>Le mathématicien qui voulait aider les pauvres</h3>
<p>Alfred Marshall (1842-1924), fils d’un caissier de la Banque d’Angleterre, devient un brillant mathématicien à Cambridge. En visitant les quartiers pauvres des villes industrielles, il décide de consacrer sa vie à l’économie, pour comprendre comment améliorer la condition des travailleurs.</p>
${vieMarshall}
<h3>L’offre et la demande</h3>
<p>Dans ses Principes (1890), il réconcilie deux camps : ceux qui pensaient que le prix dépend du coût, et ceux qui pensaient qu’il dépend de l’utilité. Pour Marshall, les deux comptent, comme les deux lames d’une paire de ciseaux. Il ajoute le rôle du temps : à court terme, la demande compte le plus ; à long terme, le coût de production.</p>
${periodes}
<h3>Un maître</h3>
<p>Marshall invente des outils toujours enseignés, comme l’élasticité et le surplus du consommateur, et décrit les régions industrielles où les entreprises gagnent à être proches. Il forme Keynes et Pigou. Mathématicien, il conseille pourtant de traduire tout raisonnement en langage simple et de « brûler les mathématiques » si l’on ne trouve pas d’exemple réel.</p>
<h3>À retenir</h3>
<p>Marshall a fait de l’économie une discipline universitaire utile et concrète. Le portrait complet présente sa vie, sa méthode et sa postérité.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De Bermondsey à Cambridge : mathématicien, professeur, fondateur d’un cursus.",
      epoque: "La Grande-Bretagne victorienne, la pauvreté et la contestation de l’économie classique.",
      pensee: "Sept étapes, des ciseaux aux mathématiques comme langage auxiliaire.",
      livres: "De The Economics of Industry aux Principes et à Industrie et commerce.",
      cas: "Les six règles, Mary Paley Marshall, les diplômes des femmes, Keynes et Pigou.",
      objections: "Sraffa, l’équilibre partiel, Keynes, une prudence ambiguë.",
      ecoles: "Mill, Ricardo et Cournot, Pigou, Keynes, l’économie géographique, les manuels.",
      source: "La lettre à Bowley : brûler les mathématiques.",
      quiz: "Cinq questions corrigées et une question sur l’apprentissage suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
