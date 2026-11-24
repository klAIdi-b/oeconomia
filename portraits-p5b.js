/* Œconomia — portraits longs, lot 5 (b) : Joan Robinson, John Kenneth Galbraith */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  /* =====================================================================
     JOAN ROBINSON
     ===================================================================== */
  const vieRobinson = lifeline(1903, 1983, [
    [1903, "naissance à Camberley", true], [1922, "étudiante à Girton", false], [1930, "le « cirque » de Cambridge", true], [1933, "Concurrence imparfaite", false],
    [1942, "Essai sur Marx", true], [1956, "L’Accumulation du capital", false], [1965, "enfin professeure", true], [1983, "mort à Cambridge", false]
  ], "Joan Robinson, 1903-1983", "Figure majeure de l’école de Cambridge pendant un demi-siècle, Joan Robinson n’obtient une chaire qu’en 1965, à soixante-deux ans. Polémiste redoutable, elle n’a jamais reçu le prix Nobel, que beaucoup lui prédisaient.");

  const monopsone = fig(320, (() => {
    const L = 90, R = 560, Top = 50, B = 260, X = (l) => L + l * (R - L) / 14, Y = (w) => B - w * 17;
    let s = `<text x="20" y="24" ${T}>Le monopsone : un seul employeur fixe des salaires plus bas (schéma chiffré)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>salaire</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>emploi</text>`;
    s += `<line x1="${X(0)}" y1="${Y(2)}" x2="${X(14)}" y2="${Y(9)}" style="stroke:var(--note); stroke-width:2.4"/>`;
    s += `<line x1="${X(0)}" y1="${Y(2)}" x2="${X(9.5)}" y2="${Y(11.5)}" style="stroke:var(--note); stroke-width:2; stroke-dasharray:6 4"/>`;
    s += `<line x1="${X(0)}" y1="${Y(12)}" x2="${X(14)}" y2="${Y(5)}" style="stroke:var(--serial); stroke-width:2.4"/>`;
    s += `<text x="${X(14)}" y="${Y(9) - 8}" text-anchor="end" style="fill:var(--note); font:700 11.5px Manrope, sans-serif">offre de travail</text>`;
    s += `<text x="${X(9.7)}" y="${Y(11.5) + 4}" style="fill:var(--note); font:600 11px Manrope, sans-serif">coût d’un salarié de plus</text>`;
    s += `<text x="${X(14)}" y="${Y(5) + 18}" text-anchor="end" style="fill:var(--serial); font:700 11.5px Manrope, sans-serif">valeur produite</text>`;
    s += `<circle cx="${X(6.67)}" cy="${Y(5.33)}" r="5" style="fill:var(--gold)"/><line x1="${X(6.67)}" y1="${Y(8.67)}" x2="${X(6.67)}" y2="${B}" style="stroke:var(--gold); stroke-dasharray:3 3"/>`;
    s += `<line x1="${L}" y1="${Y(5.33)}" x2="${X(6.67)}" y2="${Y(5.33)}" style="stroke:var(--gold); stroke-dasharray:3 3"/>`;
    s += `<circle cx="${X(10)}" cy="${Y(7)}" r="5" style="fill:var(--plum)"/><line x1="${X(10)}" y1="${Y(7)}" x2="${X(10)}" y2="${B}" style="stroke:var(--plum); stroke-dasharray:3 3"/>`;
    s += `<text x="${L - 8}" y="${Y(5.33) + 4}" text-anchor="end" ${M}>5,3</text><text x="${L - 8}" y="${Y(7) + 4}" text-anchor="end" ${M}>7</text>`;
    s += `<text x="${X(6.67)}" y="${B + 16}" text-anchor="middle" ${M}>6,7</text><text x="${X(10)}" y="${B + 16}" text-anchor="middle" ${M}>10</text>`;
    s += `<text x="20" y="300" ${S}>Monopsone : 6,7 emplois payés 5,3. Concurrence, ou salaire minimum fixé à 7 : 10 emplois payés 7.</text>`;
    return s;
  })(), "Le cas étudié par Robinson en 1933. L’employeur unique sait que pour embaucher un salarié de plus, il doit augmenter le salaire de tous ; il embauche donc moins et paie moins qu’un marché concurrentiel. Un salaire minimum bien choisi peut alors augmenter à la fois les salaires et l’emploi. Chiffres illustratifs.", "Graphique du monopsone avec offre de travail et valeur produite");

  const cambridges = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>La controverse des deux Cambridge sur le capital (années 1950-1960)</text>`;
    s += `<rect x="20" y="46" width="290" height="160" rx="10" style="fill:var(--card); stroke:var(--plum); stroke-width:2"/><text x="165" y="72" text-anchor="middle" style="fill:var(--plum); font:700 13px Manrope, sans-serif">Cambridge, Angleterre</text>`;
    ["Joan Robinson, Piero Sraffa, Kaldor", "le « capital » est un ensemble", "de machines hétérogènes : on ne peut", "le mesurer sans connaître le taux", "de profit, qu’il est censé expliquer"].forEach((t, i) => (s += `<text x="40" y="${98 + i * 20}" ${S}>${t}</text>`));
    s += `<rect x="330" y="46" width="290" height="160" rx="10" style="fill:var(--card); stroke:var(--note); stroke-width:2"/><text x="475" y="72" text-anchor="middle" style="fill:var(--note); font:700 13px Manrope, sans-serif">Cambridge, Massachusetts</text>`;
    ["Paul Samuelson, Robert Solow (MIT)", "une fonction de production agrégée", "relie capital, travail et production ;", "le profit rémunère la productivité", "marginale du capital"].forEach((t, i) => (s += `<text x="350" y="${98 + i * 20}" ${S}>${t}</text>`));
    s += `<text x="20" y="232" ${S}>En 1966, Samuelson donne raison aux Anglais sur le plan logique ; les modèles restent utilisés.</text>`;
    return s;
  })(), "La controverse porte sur un point technique aux conséquences profondes : peut-on expliquer le profit par la productivité d’un « capital » mesuré en une seule quantité ? Le phénomène du « retour des techniques », démontré par Sraffa et ses élèves, montre que non dans le cas général.", "Deux colonnes opposant les deux Cambridge");

  OEC.portraits["robinson"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Joan Robinson (1903-1983), économiste britannique de Cambridge, est l’une des figures les plus originales et les plus combatives du XXe siècle. Elle a fondé la théorie de la concurrence imparfaite, inventé le mot « monopsone » et participé à l’élaboration de la Théorie générale de Keynes.",
      "Elle a ensuite cherché à prolonger Keynes dans le long terme, en étudiant l’accumulation et la croissance, et à réconcilier Keynes et Marx. Elle a mené contre les économistes du MIT la « controverse des deux Cambridge » sur la mesure du capital.",
      "Figure de proue du post-keynésianisme, critique acerbe de l’économie dominante, elle reste aussi controversée pour son admiration de la Chine maoïste. Beaucoup jugent qu’elle aurait mérité le prix Nobel."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Joan Violet Maurice naît le 31 octobre 1903 à Camberley, dans le Surrey, dans une famille de la haute société britannique. Son père, le général Frederick Maurice, provoque en 1918 une crise politique en accusant publiquement le Premier ministre Lloyd George d’avoir trompé le Parlement sur l’état des forces britanniques ; il est mis à la retraite d’office. Joan en retient le goût de la vérité dite au pouvoir. Elle étudie l’économie au Girton College de Cambridge à partir de 1922, à une époque où les femmes ne reçoivent pas de diplôme complet.</p>
<p>En 1926, elle épouse l’économiste Austin Robinson, avec qui elle passe deux ans en Inde. De retour à Cambridge, elle participe au « cirque » de Cambridge, un groupe de jeunes économistes, Richard Kahn, Piero Sraffa, James Meade et Austin Robinson, qui discutent en 1930-1931 le Traité sur la monnaie de <a href="#eco-keynes">Keynes</a> et contribuent à l’élaboration de la Théorie générale.</p>
${vieRobinson}
<p>En 1933, elle publie L’Économie de la concurrence imparfaite, qui la fait connaître. Après la guerre, elle devient l’une des principales figures de Cambridge, publie un Essai sur l’économie marxiste (1942), L’Accumulation du capital (1956) et mène la controverse sur le capital contre Paul <a href="#eco-samuelson">Samuelson</a> et Robert Solow. Elle n’obtient une chaire qu’en 1965. Elle voyage beaucoup, en Inde, en Chine, en Corée du Nord, au Sri Lanka. Elle meurt à Cambridge le 5 août 1983.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Joan Robinson commence sa carrière dans les années 1930, pendant la Grande Dépression, quand l’économie de Cambridge est dominée par l’héritage de <a href="#eco-marshall">Marshall</a> et bouleversée par Keynes. Le modèle de la concurrence parfaite paraît de plus en plus éloigné d’une économie dominée par de grandes entreprises, des marques et des cartels.</p>
<p>Après la guerre, l’économie occidentale connaît une croissance rapide, et les économistes se tournent vers les théories de la croissance. Aux États-Unis, une « synthèse néoclassique » combine Keynes à court terme et l’équilibre néoclassique à long terme. Robinson juge que cette synthèse trahit Keynes, en évacuant l’incertitude, le temps historique et les questions de répartition.</p>
<p>C’est aussi l’époque de la décolonisation et de la guerre froide. Robinson s’intéresse aux économies en développement et aux expériences socialistes, en Inde, en Chine, à Cuba, qu’elle juge souvent avec une sympathie que l’histoire n’a pas confirmée.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La concurrence imparfaite</h4>
<p>En 1933, en même temps que l’Américain Edward Chamberlin, Robinson rompt avec le modèle de la concurrence parfaite. Elle étudie les entreprises qui ont un pouvoir sur leurs prix, avec des outils comme la recette marginale, et montre qu’elles produisent moins et vendent plus cher qu’en concurrence (<a href="#c-concurrence-imparfaite">voir concurrence imparfaite</a>).</p>
<h4>2. Le monopsone</h4>
<p>Robinson étudie aussi le cas symétrique : un acheteur unique, par exemple le seul employeur d’une ville. Elle invente pour le désigner le mot « monopsone », suggéré par un collègue helléniste. L’employeur paie des salaires inférieurs à la valeur de ce que produisent les salariés, ce qu’elle appelle une « exploitation » au sens technique.</p>
${monopsone}
<h4>3. Avec Keynes</h4>
<p>Membre du « cirque » de Cambridge, elle participe à la critique et à la relecture des épreuves de la Théorie générale, puis en devient l’une des grandes vulgarisatrices, avec son Introduction à la théorie de l’emploi (1937). Elle insiste sur ce que la synthèse oubliera : l’incertitude, les anticipations, le temps historique irréversible.</p>
<h4>4. Keynes et Marx</h4>
<p>Dans son Essai sur l’économie marxiste (1942), Robinson lit <a href="#eco-marx">Marx</a> en économiste keynésienne. Elle rejette la théorie de la valeur-travail, qu’elle juge métaphysique, mais retient l’analyse de l’accumulation, de la répartition et des crises. Elle estime que Marx et Keynes posent les mêmes questions sur la dynamique du capitalisme.</p>
<h4>5. L’accumulation du capital</h4>
<p>Dans L’Accumulation du capital (1956), elle cherche à étendre l’analyse de Keynes au long terme, en étudiant la croissance, l’investissement, la répartition entre salaires et profits et le progrès technique. Elle développe avec Nicholas Kaldor une théorie post-keynésienne de la répartition, où le taux de profit dépend du taux d’accumulation.</p>
<h4>6. La controverse sur le capital</h4>
<p>Robinson pose en 1953 une question simple en apparence : en quelle unité mesure-t-on le « capital » dans les fonctions de production néoclassiques ? Pour additionner des machines différentes, il faut leurs prix, qui dépendent du taux de profit, que le capital est censé expliquer. Ce raisonnement circulaire ouvre la controverse des deux Cambridge.</p>
${cambridges}
<h4>7. Le temps historique</h4>
<p>Robinson reproche à l’économie dominante de raisonner en « temps logique », en comparant des équilibres, comme si l’on pouvait revenir en arrière. Dans le temps historique, les décisions sont irréversibles et prises dans l’incertitude ; l’équilibre est une fiction dangereuse. Cette critique est au cœur du post-keynésianisme.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>L’Économie de la concurrence imparfaite (1933).</b> Le livre qui la rend célèbre, consacré au monopole, à la discrimination par les prix et au monopsone.</p>
<p><b>Essai sur l’économie marxiste (1942).</b> Une lecture de Marx par une économiste keynésienne, qui fait scandale à Cambridge.</p>
<p><b>L’Accumulation du capital (1956).</b> Sa grande tentative de théorie de la croissance post-keynésienne.</p>
<p><b>Hérésies économiques (1971).</b> Un recueil d’essais critiques sur l’économie dominante, accessible et polémique.</p>
<p><b>Introduction à l’économie moderne (1973), avec John Eatwell.</b> Un manuel alternatif aux manuels néoclassiques, qui n’a pas eu le succès espéré.</p>` }
    ],
    cas: [
      { titre: "Le « cirque » de Cambridge", html: `
<p>En 1930-1931, cinq jeunes économistes de Cambridge, Richard Kahn, Joan et Austin Robinson, Piero Sraffa et James Meade, se réunissent pour discuter le Traité sur la monnaie de Keynes. Kahn transmet leurs objections à Keynes. Ce « cirque » contribue à le convaincre de chercher une théorie du niveau de la production et de l’emploi. Joan Robinson relit ensuite les épreuves de la Théorie générale. Elle racontera plus tard avoir eu du mal à faire comprendre à Keynes certaines implications de sa propre théorie.</p>` },
      { titre: "Samuelson reconnaît sa défaite", html: `
<p>En 1966, dans un article du Quarterly Journal of Economics intitulé « Un résumé », Paul Samuelson reconnaît que les critiques de Cambridge en Angleterre ont raison sur le plan logique : le « retour des techniques » est possible, et il n’existe pas en général de relation simple entre l’abondance du capital et le taux de profit. C’est l’un des rares aveux publics de ce genre dans l’histoire de l’économie. Mais les économistes continuent à utiliser des fonctions de production agrégées, jugées commodes en pratique.</p>` },
      { titre: "La Chine et la Corée du Nord", html: `
<p>Robinson se rend plusieurs fois en Chine populaire et publie en 1969 un livre favorable à la Révolution culturelle, dont elle ignore ou minimise les violences. En 1965, elle publie un article sur le « miracle coréen » à propos de la Corée du Nord, qu’elle juge plus dynamique que le Sud. L’histoire a cruellement démenti ces jugements. Ces engagements, souvent rappelés par ses critiques, ont contribué à expliquer qu’elle n’ait jamais reçu le prix Nobel.</p>` },
      { titre: "Le Nobel manqué", html: `
<p>En 1975, l’année internationale de la femme, la presse spécule sur l’attribution du prix Nobel d’économie à Joan Robinson. Le prix va finalement au Soviétique Leonid Kantorovitch et à l’Américain Tjalling Koopmans. Robinson ne le recevra jamais. Il faudra attendre 2009 pour qu’une femme, Elinor <a href="#eco-ostrom">Ostrom</a>, obtienne ce prix.</p>` }
    ],
    objections: `
<h4>1. Une critique sans alternative</h4>
<p>Ses adversaires reconnaissent la force de ses critiques, mais lui reprochent de ne pas avoir proposé de théorie alternative complète et utilisable. Le post-keynésianisme est resté une école minoritaire.</p>
<h4>2. Le monopsone, cas rare ?</h4>
<p>Pendant longtemps, les économistes ont jugé le monopsone marginal, limité aux villes mono-industrielles. Les travaux récents d’Alan Manning et de Card et Krueger ont au contraire montré que le pouvoir des employeurs sur les salaires est répandu, donnant raison à Robinson.</p>
<h4>3. Les jugements politiques</h4>
<p>Son admiration pour la Chine maoïste et la Corée du Nord est un point noir de sa réputation. Ses critiques y voient la preuve que son anticapitalisme l’aveuglait ; ses défenseurs soulignent que de nombreux intellectuels de son époque ont commis des erreurs semblables.</p>
<h4>4. La controverse oubliée</h4>
<p>Malgré la victoire logique des Anglais dans la controverse sur le capital, l’économie dominante a continué comme si de rien n’était. Les héritiers de Robinson y voient un aveuglement de la discipline ; les autres, la preuve que les modèles simplifiés restent utiles malgré leurs limites théoriques.</p>`,
    ecoles: `
<p><b><a href="#eco-marshall">Marshall</a></b> et <b>Pigou</b> forment l’héritage qu’elle conteste ; <b><a href="#eco-keynes">Keynes</a></b> est son grand maître.</p>
<p><b>Richard Kahn</b>, <b>Nicholas Kaldor</b>, <b>Piero Sraffa</b> et <b>Michał Kalecki</b> forment avec elle le cœur du post-keynésianisme.</p>
<p><b>Les post-keynésiens</b>, comme Paul Davidson ou Marc Lavoie, prolongent son œuvre.</p>
<p><b><a href="#eco-minsky">Hyman Minsky</a></b> partage son insistance sur l’incertitude et l’instabilité.</p>
<p><b>Alan Manning</b> et l’économie du travail moderne redécouvrent le monopsone.</p>
<p><b>Amartya <a href="#eco-sen">Sen</a></b>, son ancien étudiant, garde sa critique de l’économie étroite.</p>`,
    source: {
      titre: "Joan Robinson, Marx, Marshall and Keynes, 1955",
      texte: "Le but de l’étude de l’économie n’est pas d’acquérir un ensemble de réponses toutes faites aux questions économiques, mais d’apprendre à ne pas se laisser tromper par les économistes.",
      notes: `
<p><b>Une conférence à Delhi.</b> Robinson prononce cette phrase lors d’une conférence à la Delhi School of Economics. Elle invite les étudiants indiens à ne pas importer sans esprit critique les théories occidentales.</p>
<p><b>Une économie critique.</b> La phrase résume sa conception du métier : l’économie est un champ de controverses, où les théories servent aussi des intérêts et des idéologies. L’économiste doit savoir les démonter.</p>
<p><b>Une devise populaire.</b> La formule est devenue l’une des citations les plus reprises par les étudiants et les enseignants qui défendent le pluralisme en économie.</p>`
    },
    quiz: [
      { q: "Quel mot Joan Robinson a-t-elle inventé ?",
        o: ["Oligopole", "Monopsone", "Stagflation", "Multiplicateur"], c: 1,
        e: "Pour désigner un marché avec un seul acheteur, comme un employeur unique." },
      { q: "Dans le schéma chiffré, quel est l’effet d’un salaire minimum fixé à 7 face à un monopsone ?",
        o: ["L’emploi baisse", "Le salaire et l’emploi augmentent", "Rien ne change", "L’entreprise ferme"], c: 1,
        e: "L’emploi passe de 6,7 à 10, le salaire de 5,3 à 7." },
      { q: "Quel groupe a contribué à l’élaboration de la Théorie générale de Keynes ?",
        o: ["La Société du Mont-Pèlerin", "Le « cirque » de Cambridge", "L’école de Chicago", "Le Club de Rome"], c: 1,
        e: "Kahn, les Robinson, Sraffa et Meade, en 1930-1931." },
      { q: "Sur quoi porte la controverse des deux Cambridge ?",
        o: ["Sur la monnaie", "Sur la mesure du capital et l’explication du profit", "Sur le commerce international", "Sur la population"], c: 1,
        e: "Samuelson reconnaît en 1966 que les critiques ont raison sur le plan logique." },
      { q: "Quelle femme a reçu la première le prix Nobel d’économie, en 2009 ?",
        o: ["Joan Robinson", "Elinor Ostrom", "Esther Duflo", "Claudia Goldin"], c: 1,
        e: "Robinson ne l’a jamais reçu." }
    ],
    ouverte: {
      q: "Plusieurs cantons suisses, comme Neuchâtel, Genève ou le Jura, ont introduit un salaire minimum, alors que les Suisses ont refusé un salaire minimum national en 2014. L’analyse du monopsone de Joan Robinson plaide-t-elle pour ces salaires minimum ?",
      r: "En partie. Si les employeurs disposent d’un pouvoir sur les salaires, parce que les travailleurs ont peu d’alternatives, changent difficilement d’emploi ou de région, un salaire minimum modéré peut augmenter les salaires sans réduire l’emploi, voire en l’augmentant, comme le montre le schéma de Robinson. Les études sur les salaires minimum cantonaux suisses, comme à Neuchâtel, n’ont pas montré de baisse marquée de l’emploi. Mais l’argument dépend du niveau : un salaire minimum trop élevé, au-dessus de la valeur produite par les travailleurs les moins qualifiés, peut réduire l’emploi. Les opposants soulignent aussi que le marché du travail suisse est en général dynamique, que les conventions collectives fixent déjà des minimums dans de nombreuses branches, et qu’un salaire minimum unique ne tient pas compte des différences régionales de coût de la vie. Les salaires minimum cantonaux, adaptés aux réalités locales, peuvent être vus comme un compromis."
    },
    lectures: [
      ["Accessible", "Joan Robinson, Hérésies économiques, 1971."],
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, édition récente, passages sur Cambridge."],
      ["Intermédiaire", "Joan Robinson, L’Économie de la concurrence imparfaite (1933), chapitres sur le monopsone."],
      ["Intermédiaire", "Geoffrey Harcourt et Prue Kerr, Joan Robinson, 2009."],
      ["Recherche", "Joan Robinson, « The Production Function and the Theory of Capital », Review of Economic Studies, 1953 ; Avi Cohen et Geoffrey Harcourt, « Whatever Happened to the Cambridge Capital Theory Controversies? », Journal of Economic Perspectives, 2003."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Une femme dans le cercle de Keynes</h3>
<p>Joan Robinson (1903-1983) étudie l’économie à Cambridge à une époque où les femmes ne reçoivent pas de diplôme complet. Elle fait partie du petit groupe de jeunes économistes qui aide Keynes à élaborer sa Théorie générale. Elle devient l’une des économistes les plus brillantes et les plus combatives de son siècle.</p>
${vieRobinson}
<h3>Quand un seul employeur fixe les salaires</h3>
<p>En 1933, elle montre que les entreprises qui dominent leur marché vendent plus cher et produisent moins. Elle invente aussi le mot « monopsone » : quand un seul employeur domine une ville, il peut payer moins que ce que produisent ses salariés. Un salaire minimum bien choisi peut alors augmenter à la fois les salaires et l’emploi.</p>
${monopsone}
<h3>Une critique infatigable</h3>
<p>Elle mène une longue bataille contre les économistes américains du MIT sur la mesure du capital, qu’ils finissent par reconnaître perdue en théorie. Mais ses jugements politiques, favorables à la Chine de Mao, lui sont reprochés, et elle n’a jamais reçu le prix Nobel.</p>
<h3>À retenir</h3>
<p>« Le but de l’étude de l’économie est d’apprendre à ne pas se laisser tromper par les économistes. » Le portrait complet présente sa vie, ses idées et ses controverses.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Camberley à Girton, au cirque de Cambridge et à la chaire de 1965.",
      epoque: "La Grande Dépression, la synthèse néoclassique et la décolonisation.",
      pensee: "Sept étapes, de la concurrence imparfaite au temps historique.",
      livres: "De la Concurrence imparfaite aux Hérésies économiques.",
      cas: "Le cirque de Cambridge, l’aveu de Samuelson, la Chine, le Nobel manqué.",
      objections: "Une critique sans alternative, le monopsone, les jugements politiques, la controverse oubliée.",
      ecoles: "Keynes, Kahn, Kaldor, Sraffa et Kalecki, les post-keynésiens, Minsky, Manning, Sen.",
      source: "Ne pas se laisser tromper par les économistes.",
      quiz: "Cinq questions corrigées, dont un calcul, et une question sur les salaires minimum cantonaux.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     JOHN KENNETH GALBRAITH
     ===================================================================== */
  const vieGalbraith = lifeline(1908, 2006, [
    [1908, "naissance en Ontario", true], [1934, "doctorat à Berkeley", false], [1941, "contrôle des prix", true], [1958, "L’Ère de l’opulence", false],
    [1961, "ambassadeur en Inde", true], [1967, "Le Nouvel État industriel", false], [1977, "L’Ère de l’incertitude", true], [2006, "mort à Cambridge", false]
  ], "John Kenneth Galbraith, 1908-2006", "Canadien devenu Américain, professeur à Harvard, conseiller de Roosevelt, de Kennedy et de Johnson, ambassadeur, auteur de best-sellers et vedette de la télévision, Galbraith a été l’économiste le plus lu de son temps.");

  const sequence = fig(280, (() => {
    let s = `<text x="20" y="24" ${T}>La « filière inversée » selon Galbraith (Le Nouvel État industriel, 1967)</text>`;
    s += `<text x="165" y="56" text-anchor="middle" style="fill:var(--note); font:700 12.5px Manrope, sans-serif">Filière classique</text>`;
    s += node(20, 70, 130, 54, "Consommateur", "exprime ses goûts", "var(--note)") + node(180, 70, 130, 54, "Marché", "prix et quantités", "var(--note)");
    s += node(20, 150, 290, 54, "Entreprise", "produit ce qui est demandé", "var(--note)");
    s += arrow(152, 97, 178, 97, "var(--note)") + arrow(245, 126, 200, 148, "var(--note)");
    s += `<text x="475" y="56" text-anchor="middle" style="fill:var(--serial); font:700 12.5px Manrope, sans-serif">Filière inversée</text>`;
    s += node(330, 70, 130, 54, "Technostructure", "planifie la production", "var(--serial)") + node(490, 70, 130, 54, "Publicité", "crée la demande", "var(--gold)");
    s += node(330, 150, 290, 54, "Consommateur", "achète ce qui a été planifié", "var(--plum)");
    s += arrow(462, 97, 488, 97, "var(--serial)") + arrow(555, 126, 520, 148, "var(--gold)");
    s += `<text x="20" y="242" ${S}>Les grandes entreprises ne se contentent pas de répondre à la demande : elles la façonnent pour garantir</text>`;
    s += `<text x="20" y="260" ${S}>le succès d’investissements lourds et de longue durée. Le marché perd une partie de son rôle de guide.</text>`;
    return s;
  })(), "Pour Galbraith, la grande entreprise moderne est dirigée par une « technostructure » d’ingénieurs, de gestionnaires et de spécialistes, qui cherche d’abord la sécurité et la croissance de l’entreprise. Elle planifie et influence la demande par la publicité, au lieu de s’y soumettre.", "Deux filières comparées : classique et inversée");

  OEC.portraits["galbraith"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "John Kenneth Galbraith (1908-2006), économiste américain d’origine canadienne, professeur à Harvard, a été l’un des économistes les plus lus et les plus influents du XXe siècle, par ses livres pour le grand public, son style ironique et ses fonctions politiques.",
      "Il a décrit une économie dominée par les grandes entreprises, dirigées par une « technostructure », qui façonnent la demande par la publicité, et dénoncé dans L’Ère de l’opulence (1958) le contraste entre l’opulence privée et la misère des services publics.",
      "Keynésien de gauche, critique de l’économie néoclassique et de la « sagesse conventionnelle », il a été conseiller de présidents démocrates et ambassadeur en Inde. Ses idées ont été contestées par les économistes, mais elles ont marqué durablement le débat public."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>John Kenneth Galbraith naît le 15 octobre 1908 à Iona Station, en Ontario, dans une famille de fermiers d’origine écossaise, libéraux en politique. Il étudie l’agriculture à l’Ontario Agricultural College, puis l’économie agricole à l’université de Californie à Berkeley, où il obtient son doctorat en 1934. Il enseigne à Harvard et à Princeton, découvre Keynes lors d’un séjour à Cambridge en 1937, et devient citoyen américain la même année. Il mesure plus de deux mètres, ce qui ajoutera à sa légende.</p>
<p>Pendant la Seconde Guerre mondiale, il dirige le contrôle des prix au sein de l’Office of Price Administration, une fonction qui lui vaut de nombreuses inimitiés et qu’il quitte en 1943. En 1945, il participe à l’enquête américaine sur les effets des bombardements stratégiques en Allemagne, qui conclut que les bombardements ont beaucoup moins réduit la production allemande que prévu. Il est ensuite rédacteur au magazine Fortune, puis professeur à Harvard à partir de 1949.</p>
${vieGalbraith}
<p>Ses livres, Le Capitalisme américain (1952), La Crise économique de 1929 (1955), L’Ère de l’opulence (1958), Le Nouvel État industriel (1967), sont des succès considérables. Conseiller de John F. Kennedy, il est ambassadeur des États-Unis en Inde de 1961 à 1963, puis conseiller de Lyndon Johnson, avec qui il rompt à cause de la guerre du Vietnam. En 1977, il présente sur la BBC une série télévisée, L’Ère de l’incertitude. Président de l’American Economic Association en 1972, il meurt à Cambridge, dans le Massachusetts, le 29 avril 2006, à 97 ans.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Galbraith observe l’économie américaine des Trente Glorieuses. Les États-Unis sont devenus la société la plus riche de l’histoire. Les grandes entreprises, General Motors, General Electric, US Steel, dominent l’industrie, investissent massivement et emploient des centaines de milliers de salariés. La publicité télévisée se développe, la consommation de masse s’impose.</p>
<p>La pensée économique enseignée dans les manuels repose toujours sur l’image d’un marché concurrentiel où le consommateur est souverain. Galbraith juge cette image dépassée : elle correspond à une économie de petites entreprises, non à celle des géants industriels. Il appelle « sagesse conventionnelle » les idées admises par confort plutôt que par vérification.</p>
<p>Il s’inquiète aussi des priorités d’une société riche, qui produit toujours plus de biens privés, voitures, téléviseurs, gadgets, mais néglige les écoles, les parcs, les transports publics et l’environnement.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Le pouvoir compensateur</h4>
<p>Dans Le Capitalisme américain (1952), Galbraith soutient que la concurrence entre petites entreprises a laissé place à de grandes organisations. Ce qui limite leur pouvoir, ce n’est plus la concurrence, mais le « pouvoir compensateur » d’autres grandes organisations : syndicats face aux employeurs, grande distribution face aux producteurs, État face aux uns et aux autres.</p>
<h4>2. La sagesse conventionnelle</h4>
<p>Galbraith forge l’expression de « sagesse conventionnelle » pour désigner les idées acceptées parce qu’elles sont familières, commodes et rassurantes, plutôt que vraies. Les économistes, comme les hommes politiques, y sont particulièrement sujets.</p>
<h4>3. L’ère de l’opulence</h4>
<p>Dans L’Ère de l’opulence (1958), il observe que la production de biens de consommation reste l’objectif central de la politique économique, alors que les besoins essentiels sont satisfaits dans une société riche. Il dénonce le déséquilibre entre « l’opulence privée et la misère publique » : des voitures de luxe circulant dans des villes sales, sur des routes mal entretenues.</p>
<h4>4. L’effet de dépendance</h4>
<p>Dans une société riche, les besoins ne précèdent pas la production : ils sont créés par la production elle-même, à travers la publicité et l’émulation. C’est l’« effet de dépendance ». Il est donc absurde de justifier la croissance de la production privée par la satisfaction de besoins qu’elle a elle-même suscités (<a href="#c-consommation-ostentatoire">voir consommation ostentatoire</a>).</p>
<h4>5. La technostructure</h4>
<p>Dans Le Nouvel État industriel (1967), Galbraith explique que le pouvoir dans la grande entreprise n’appartient plus aux actionnaires ni même aux dirigeants, mais à la « technostructure », l’ensemble des spécialistes qui prennent les décisions collectivement. Son objectif est moins le profit maximal que la sécurité et la croissance de l’entreprise.</p>
<h4>6. La filière inversée</h4>
<p>Pour sécuriser des investissements lourds et longs, la grande entreprise planifie : elle contrôle ses prix, ses approvisionnements et sa demande. La publicité permet de façonner les goûts des consommateurs. La souveraineté du consommateur est en partie une fiction : c’est la « filière inversée ».</p>
${sequence}
<h4>7. Le rôle de l’État</h4>
<p>Galbraith en tire un programme keynésien et social : investissement public dans l’éducation, la santé, les transports et l’environnement ; contrôle des prix et des salaires dans les secteurs concentrés pour lutter contre l’inflation ; réglementation de la grande entreprise. Il défend une économie mixte, où l’État équilibre le pouvoir des grandes organisations.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Le Capitalisme américain : le concept de pouvoir compensateur (1952).</b> Une description de l’économie américaine dominée par de grandes organisations qui se font contrepoids.</p>
<p><b>La Crise économique de 1929 (1955).</b> Un récit vivant et ironique du krach et de la spéculation qui l’a précédé, toujours réédité, notamment après chaque crise boursière.</p>
<p><b>L’Ère de l’opulence (1958).</b> Son livre le plus influent, sur les priorités d’une société riche et le déséquilibre entre biens privés et services publics.</p>
<p><b>Le Nouvel État industriel (1967).</b> Une théorie de la grande entreprise moderne, de la technostructure et de la filière inversée.</p>
<p><b>L’Ère de l’incertitude (1977).</b> Le livre tiré de sa série télévisée, une histoire des idées économiques pour le grand public.</p>
<p><b>Les Mensonges de l’économie (2004).</b> Son dernier livre, une critique des idées reçues sur le marché et l’entreprise.</p>` }
    ],
    cas: [
      { titre: "Le contrôle des prix pendant la guerre", html: `
<p>En 1941, Galbraith, à trente-deux ans, devient l’un des responsables du contrôle des prix aux États-Unis. Il doit fixer les prix de milliers de produits pour éviter l’inflation pendant l’effort de guerre. Il découvre que les prix sont plus faciles à contrôler dans les secteurs dominés par quelques grandes entreprises que dans ceux où les producteurs sont nombreux, une observation qui nourrira sa théorie. Attaqué par les milieux d’affaires et le Congrès, il démissionne en 1943. L’inflation américaine est restée modérée pendant la guerre.</p>` },
      { titre: "L’enquête sur les bombardements", html: `
<p>En 1945, Galbraith dirige la division économique du Strategic Bombing Survey, chargé d’évaluer les effets des bombardements alliés sur l’Allemagne. Les économistes de l’enquête concluent que la production d’armements allemande a continué d’augmenter jusqu’en 1944 malgré les bombardements massifs, les Allemands ayant dispersé et réorganisé leurs usines. Ces conclusions, gênantes pour l’armée de l’air, renforcent son scepticisme envers les certitudes officielles.</p>` },
      { titre: "L’ambassadeur en Inde", html: `
<p>Nommé par John F. Kennedy, Galbraith est ambassadeur des États-Unis en Inde de 1961 à 1963. Il se lie avec le Premier ministre Nehru, soutient l’aide américaine au développement indien et joue un rôle de médiateur pendant la guerre sino-indienne de 1962. Il écrit régulièrement à Kennedy des lettres pleines d’humour et de conseils, et tient un journal publié en 1969 sous le titre Journal d’un ambassadeur.</p>` },
      { titre: "La télévision et le grand public", html: `
<p>En 1977, la BBC diffuse L’Ère de l’incertitude, une série en treize épisodes où Galbraith raconte l’histoire des idées économiques, de Smith à Keynes, en voyageant sur les lieux de cette histoire. La série est un succès mondial. Elle suscite une réponse directe : en 1980, Milton <a href="#eco-friedman">Friedman</a> présente sur la télévision américaine sa propre série, La Liberté du choix. Les deux séries incarnent l’affrontement entre deux visions de l’économie.</p>` }
    ],
    objections: `
<h4>1. Les économistes sceptiques</h4>
<p>La plupart des économistes universitaires jugeaient les thèses de Galbraith brillantes mais peu rigoureuses, rarement formalisées ni testées. Robert Solow, dans une recension célèbre du Nouvel État industriel, conteste l’idée que les grandes entreprises ne cherchent pas le profit et qu’elles contrôlent leur demande.</p>
<h4>2. La publicité ne crée pas tout</h4>
<p>De nombreux produits massivement promus échouent, ce qui montre que les consommateurs ne sont pas aussi manipulables que le suggère la filière inversée. Les entreprises doivent toujours satisfaire des besoins réels, et la concurrence reste vive.</p>
<h4>3. Le contrôle des prix</h4>
<p>Les économistes libéraux, comme <a href="#eco-friedman">Friedman</a>, critiquent sa défense du contrôle des prix et des salaires, qui a échoué aux États-Unis en 1971-1974 et crée pénuries et distorsions.</p>
<h4>4. Une description datée ?</h4>
<p>Les géants industriels stables des années 1960 ont été bousculés par la mondialisation, la finance et les nouvelles technologies : beaucoup ont disparu. Mais l’essor des géants du numérique et de la publicité ciblée a redonné une actualité à ses analyses sur le pouvoir des grandes entreprises et la fabrication de la demande.</p>`,
    ecoles: `
<p><b><a href="#eco-veblen">Thorstein Veblen</a></b> et les institutionnalistes sont ses grands prédécesseurs.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> lui inspire sa défense de la demande et de l’intervention publique.</p>
<p><b>Adolf Berle et Gardiner Means</b> avaient montré en 1932 la séparation de la propriété et du contrôle.</p>
<p><b>James K. Galbraith</b>, son fils, poursuit son œuvre en économie des inégalités.</p>
<p><b>Les économistes de la concurrence</b> contemporains, inquiets de la concentration, retrouvent ses thèmes.</p>
<p><b>Les critiques de la croissance</b> et de la société de consommation se réclament de L’Ère de l’opulence.</p>`,
    source: {
      titre: "John Kenneth Galbraith, L’Ère de l’opulence, 1958, chapitre 18",
      texte: "La famille qui part en promenade dans son automobile mauve et cerise, climatisée, à direction et freins assistés, traverse des villes mal pavées, enlaidies par les détritus, les immeubles délabrés et les panneaux d’affichage.",
      notes: `
<p><b>Le déséquilibre social.</b> Le passage illustre ce que Galbraith appelle le déséquilibre entre biens privés et biens publics. La suite décrit la famille pique-niquant au bord d’une rivière polluée, dans un parc qui menace la santé publique.</p>
<p><b>Une question de priorités.</b> Galbraith ne condamne pas la richesse privée, mais la manière dont la société riche continue d’accorder la priorité à la production de biens de consommation, tout en jugeant les dépenses publiques comme un fardeau.</p>
<p><b>Une image durable.</b> La formule « opulence privée et misère publique » est devenue un lieu commun du débat sur les services publics, l’environnement et la fiscalité.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que le « pouvoir compensateur » selon Galbraith ?",
        o: ["La concurrence entre petites entreprises", "Le contrepoids exercé par de grandes organisations sur d’autres, comme les syndicats face aux employeurs", "Le pouvoir de la banque centrale", "La publicité"], c: 1,
        e: "Il remplace la concurrence comme limite au pouvoir des grandes entreprises." },
      { q: "Que dénonce Galbraith dans L’Ère de l’opulence ?",
        o: ["La pauvreté générale", "Le contraste entre l’opulence privée et la misère des services publics", "L’inflation", "Les impôts trop élevés"], c: 1,
        e: "Des voitures de luxe dans des villes sales et mal entretenues." },
      { q: "Qu’est-ce que la « technostructure » ?",
        o: ["Une machine", "L’ensemble des spécialistes qui prennent collectivement les décisions dans la grande entreprise", "Un ministère", "Un syndicat"], c: 1,
        e: "Son objectif est la sécurité et la croissance de l’entreprise." },
      { q: "Que signifie la « filière inversée » ?",
        o: ["Le consommateur dicte la production", "La grande entreprise planifie sa production et façonne la demande par la publicité", "L’État produit tout", "Les prix baissent toujours"], c: 1,
        e: "La souveraineté du consommateur serait en partie une fiction." },
      { q: "Quelle fonction diplomatique Galbraith a-t-il occupée ?",
        o: ["Ambassadeur en France", "Ambassadeur des États-Unis en Inde", "Secrétaire d’État", "Représentant à l’ONU"], c: 1,
        e: "De 1961 à 1963, nommé par Kennedy." }
    ],
    ouverte: {
      q: "Migros et Coop, deux coopératives, dominent la grande distribution suisse. Sont-elles un exemple du « pouvoir compensateur » de Galbraith, ou un problème de concentration ?",
      r: "Les deux lectures sont possibles. Dans l’esprit de Galbraith, les deux grandes coopératives exercent un pouvoir compensateur face aux grands fournisseurs, notamment les multinationales de l’alimentation : leur taille leur permet de négocier des prix plus bas, en principe au bénéfice des consommateurs, et leur statut coopératif, avec des millions de membres, les distingue d’entreprises orientées vers les actionnaires. Migros a d’ailleurs été fondée en 1925 par Gottlieb Duttweiler précisément pour casser les prix pratiqués par les commerçants établis. Mais leur position dominante pose aussi des questions de concurrence : face à des producteurs, notamment agricoles, plus petits, elles exercent un pouvoir d’achat important, et leur duopole peut limiter la concurrence sur les prix pour les consommateurs. L’arrivée des discounters allemands, Aldi et Lidl, depuis 2005, a d’ailleurs fait baisser certains prix. Galbraith y aurait vu un rappel que le pouvoir compensateur doit lui-même être surveillé."
    },
    lectures: [
      ["Accessible", "John Kenneth Galbraith, La Crise économique de 1929, 1955."],
      ["Accessible", "John Kenneth Galbraith, L’Ère de l’opulence, 1958."],
      ["Intermédiaire", "John Kenneth Galbraith, Le Nouvel État industriel, 1967."],
      ["Intermédiaire", "Richard Parker, John Kenneth Galbraith: His Life, His Politics, His Economics, 2005."],
      ["Recherche", "Robert Solow, « The New Industrial State or Son of Affluence », The Public Interest, 1967 ; Adolf Berle et Gardiner Means, The Modern Corporation and Private Property, 1932."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Le géant de Harvard</h3>
<p>John Kenneth Galbraith (1908-2006), fils de fermiers canadiens, mesure plus de deux mètres. Professeur à Harvard, conseiller de Roosevelt et de Kennedy, ambassadeur en Inde, auteur de best-sellers et présentateur d’une série télévisée, il a été l’économiste le plus lu de son époque.</p>
${vieGalbraith}
<h3>Riches en voitures, pauvres en écoles</h3>
<p>Dans L’Ère de l’opulence (1958), Galbraith observe que l’Amérique produit toujours plus de voitures et de gadgets, mais néglige ses écoles, ses parcs et ses rues. Il parle d’« opulence privée et de misère publique ». Il remarque aussi que la publicité crée les besoins qu’elle prétend satisfaire.</p>
<h3>Le pouvoir des grandes entreprises</h3>
<p>Pour Galbraith, l’économie moderne est dominée par de grandes entreprises dirigées par des équipes de spécialistes, la « technostructure ». Elles ne se contentent pas de répondre aux désirs des consommateurs : elles les façonnent par la publicité. L’État doit donc équilibrer leur pouvoir.</p>
${sequence}
<h3>À retenir</h3>
<p>Galbraith a mis le pouvoir et les priorités de la société au centre de l’économie. Le portrait complet présente sa vie, ses livres et ses critiques.</p>`,
      quiz: [1, 3]
    },
    resumes: {
      vie: "De l’Ontario à Harvard, au contrôle des prix, à l’ambassade en Inde et à la BBC.",
      epoque: "Les Trente Glorieuses, les grandes entreprises et la consommation de masse.",
      pensee: "Sept étapes, du pouvoir compensateur au rôle de l’État.",
      livres: "Du Capitalisme américain aux Mensonges de l’économie.",
      cas: "Le contrôle des prix, les bombardements, l’Inde, la télévision.",
      objections: "Les économistes sceptiques, la publicité, le contrôle des prix, une description datée.",
      ecoles: "Veblen, Keynes, Berle et Means, James K. Galbraith, la concurrence, la critique de la croissance.",
      source: "L’automobile mauve et cerise dans des villes mal pavées.",
      quiz: "Cinq questions corrigées et une question sur Migros et Coop.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
