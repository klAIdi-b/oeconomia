/* Œconomia — portraits longs, lot 2 (a) : Milton Friedman, Joseph Schumpeter */
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
     MILTON FRIEDMAN
     ===================================================================== */
  const vieFriedman = lifeline(1912, 2006, [
    [1912, "naissance à Brooklyn", true], [1932, "Chicago, rencontre Rose Director", false], [1946, "professeur à Chicago", true], [1962, "Capitalisme et liberté", false],
    [1963, "Histoire monétaire", true], [1968, "le taux naturel", false], [1976, "prix Nobel", true], [1980, "La Liberté du choix", false]
  ], "Milton Friedman, 1912-2006", "Fils d’immigrés juifs venus de Ruthénie subcarpatique, alors hongroise, Friedman passe l’essentiel de sa carrière à l’université de Chicago, puis à la Hoover Institution de Stanford. Il meurt à San Francisco en 2006, à 94 ans.");

  const phillipsLT = fig(300, (() => {
    const L = 90, R = 560, Top = 50, B = 250, X = (u) => L + (u - 2) * (R - L) / 8, Y = (p) => B - p * 22;
    let s = `<text x="20" y="24" ${T}>La courbe de Phillips selon Friedman : courte et longue période (schéma)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>inflation</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>chômage</text>`;
    const curve = (shift, c, op) => { let d = ""; for (let u = 3; u <= 9.001; u += 0.1) d += `${u === 3 ? "M" : "L"} ${X(u)} ${Y(shift + 6 / (u - 1.5) - 1)} `; return `<path d="${d}" style="fill:none; stroke:${c}; stroke-width:2.4; opacity:${op}"/>`; };
    s += curve(0, "var(--note)", 1) + curve(3, "var(--serial)", 1);
    s += `<line x1="${X(6)}" y1="${Top}" x2="${X(6)}" y2="${B}" style="stroke:var(--gold); stroke-width:3"/>`;
    s += `<text x="${X(6) + 8}" y="${Top + 12}" style="fill:var(--gold); font:700 12px Manrope, sans-serif">long terme : verticale</text><text x="${X(6) + 8}" y="${Top + 28}" ${S}>au taux de chômage naturel</text>`;
    s += `<text x="${X(8.6)}" y="${Y(1.3) + 18}" text-anchor="end" style="fill:var(--note); font:600 11.5px Manrope, sans-serif">inflation anticipée : 2 %</text>`;
    s += `<text x="${X(8.6)}" y="${Y(4.3) - 8}" text-anchor="end" style="fill:var(--serial); font:600 11.5px Manrope, sans-serif">inflation anticipée : 5 %</text>`;
    s += `<text x="20" y="286" ${S}>Sous le taux naturel, le gain ne dure pas : les anticipations s’ajustent.</text>`;
    return s;
  })(), "Le cœur du discours présidentiel de 1967 à l’American Economic Association. Chaque courbe de court terme correspond à une inflation anticipée donnée. À long terme, quand les anticipations rattrapent la réalité, il n’y a plus d’arbitrage entre inflation et chômage. La stagflation des années 1970 lui a donné raison.", "Deux courbes de Phillips décalées et une verticale de long terme");

  const masse = fig(260, (() => {
    const L = 90, B = 200, w = 74, sc = 3.2;
    const data = [["1929", 46], ["1930", 45], ["1931", 42], ["1932", 35], ["1933", 31]];
    let s = `<text x="20" y="24" ${T}>Masse monétaire américaine pendant la Grande Contraction (milliards de dollars, arrondis)</text>`;
    data.forEach(([y, v], i) => {
      const x = L + i * 100, h = v * sc;
      s += `<rect x="${x}" y="${B - h}" width="${w}" height="${h}" rx="4" style="fill:${i > 2 ? "var(--serial)" : "var(--note)"}"/>`;
      s += `<text x="${x + w / 2}" y="${B - h - 6}" text-anchor="middle" style="fill:var(--ink); font:700 12px 'JetBrains Mono', monospace">${v}</text>`;
      s += `<text x="${x + w / 2}" y="${B + 18}" text-anchor="middle" ${M}>${y}</text>`;
    });
    s += `<text x="20" y="244" ${S}>Baisse d’environ un tiers en quatre ans, pendant que des milliers de banques font faillite.</text>`;
    return s;
  })(), "Ordre de grandeur de la masse monétaire au sens large (M2), d’après Friedman et Schwartz (1963). Pour eux, la Réserve fédérale aurait pu et dû empêcher cette chute en jouant son rôle de prêteur en dernier ressort. La Grande Dépression devient une faute de politique monétaire plutôt qu’un échec du capitalisme.", "Barres décroissantes de la masse monétaire de 1929 à 1933");

  OEC.portraits["friedman"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Milton Friedman (1912-2006), figure de l’école de Chicago et prix Nobel 1976, a mené la contre-révolution monétariste contre le keynésianisme. Pour lui, la monnaie compte avant tout : l’inflation est un phénomène monétaire, et la Grande Dépression est d’abord une faute de la banque centrale.",
      "On lui doit aussi la théorie du revenu permanent, la critique de la courbe de Phillips et la notion de taux de chômage naturel, qui ont transformé la macroéconomie et la politique monétaire.",
      "Grand vulgarisateur, défenseur du libre marché, des changes flexibles, des chèques éducation et de l’impôt négatif sur le revenu, il a exercé une influence politique considérable, de Reagan à Thatcher, et suscité de vives controverses, notamment pour ses liens avec le Chili de Pinochet."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Milton Friedman naît le 31 juillet 1912 à Brooklyn, quatrième enfant d’immigrés juifs pauvres venus de Ruthénie subcarpatique. La famille s’installe à Rahway, dans le New Jersey, où sa mère tient une petite mercerie. Boursier à l’université Rutgers, il y étudie les mathématiques et l’économie, et rencontre Arthur Burns, futur président de la Réserve fédérale. En 1932, en pleine dépression, il choisit l’économie, qui lui paraît la discipline la plus utile, et part à Chicago, où il rencontre Rose Director, qui deviendra sa femme et sa coautrice.</p>
<p>Pendant le New Deal, il travaille à Washington sur une grande enquête sur la consommation des ménages, puis, pendant la guerre, au Trésor, où il participe à la conception du prélèvement de l’impôt à la source, ce qu’il regrettera plus tard. Il soutient sa thèse à Columbia en 1946 et devient la même année professeur à l’université de Chicago, où il enseigne pendant trente ans et forme des générations d’économistes.</p>
${vieFriedman}
<p>Ses travaux théoriques et empiriques, sur la consommation, la monnaie et l’inflation, lui valent le prix Nobel en 1976. Parallèlement, il devient un intellectuel public de premier plan, chroniqueur à Newsweek, conseiller de candidats républicains, auteur de best-sellers et d’une série télévisée, La Liberté du choix (1980). Retiré à la Hoover Institution de Stanford en 1977, il continue d’écrire et de débattre jusqu’à sa mort, le 16 novembre 2006, à San Francisco.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Friedman commence sa carrière au moment où le keynésianisme s’impose. Après la guerre, la plupart des économistes pensent que la politique budgétaire peut assurer le plein emploi, que la monnaie compte peu, et que l’on peut choisir une combinaison d’inflation et de chômage le long de la <a href="#c-courbe-phillips">courbe de Phillips</a>. L’État intervient massivement : contrôle des prix pendant la guerre, réglementations, protection sociale.</p>
<p>Friedman nage à contre-courant. Il rassemble pendant des décennies des données sur la monnaie et les prix, convaincu que l’histoire monétaire réfute l’idée que la monnaie ne compte pas. Ses idées restent minoritaires jusqu’aux années 1960.</p>
<p>Les années 1970 changent tout. L’inflation monte dans tous les pays occidentaux en même temps que le chômage, ce que la courbe de Phillips n’explique pas (<a href="#c-stagflation">voir stagflation</a>). Les prévisions de Friedman semblent confirmées. Les banques centrales adoptent des objectifs de croissance de la masse monétaire, et les gouvernements Thatcher et Reagan se réclament de ses idées.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La méthode : juger une théorie à ses prédictions</h4>
<p>Dans un essai de 1953, « La méthodologie de l’économie positive », Friedman soutient que le réalisme des hypothèses importe peu : une théorie doit être jugée sur la justesse de ses prédictions. Un joueur de billard expert joue comme s’il calculait les trajectoires, même s’il ne connaît pas la physique. L’essai a influencé et divisé des générations d’économistes.</p>
<h4>2. Le revenu permanent</h4>
<p>Dans Une théorie de la fonction de consommation (1957), il montre que les ménages règlent leur consommation sur leur revenu attendu à long terme, le « revenu permanent », plutôt que sur leur revenu du moment. Une hausse temporaire de revenu est largement épargnée. Cela réduit l’efficacité des relances budgétaires temporaires (<a href="#c-multiplicateur">voir multiplicateur</a>).</p>
<h4>3. La monnaie compte</h4>
<p>Avec Anna Schwartz, il publie en 1963 Une histoire monétaire des États-Unis, 1867-1960, qui montre le lien étroit entre la masse monétaire, l’activité et les prix sur près d’un siècle. Le chapitre sur la « Grande Contraction » de 1929-1933 attribue la gravité de la Dépression à la chute d’un tiers de la masse monétaire, que la Réserve fédérale a laissé se produire (<a href="#c-preteur-dernier-ressort">voir prêteur en dernier ressort</a>).</p>
${masse}
<h4>4. L’inflation, phénomène monétaire</h4>
<p>Friedman reprend et modernise la <a href="#c-theorie-quantitative">théorie quantitative</a> : à long terme, une croissance de la monnaie plus rapide que celle de la production se traduit par de l’inflation. Il en tire que la responsabilité de l’inflation incombe à la banque centrale, et non aux syndicats, au pétrole ou aux entreprises.</p>
<h4>5. Le taux de chômage naturel</h4>
<p>En 1967, devant l’American Economic Association, il soutient, en même temps qu’Edmund Phelps, qu’il existe un taux de chômage « naturel », déterminé par les institutions du marché du travail. Une politique qui cherche à le réduire durablement par l’inflation ne fonctionne que tant que l’inflation n’est pas anticipée ; ensuite, elle produit seulement plus d’inflation (<a href="#c-taux-naturel">voir taux naturel</a>).</p>
${phillipsLT}
<h4>6. Des règles plutôt que de la discrétion</h4>
<p>Méfiant envers la capacité des banques centrales à piloter finement l’économie, car leurs actions agissent avec des délais longs et variables, Friedman propose une règle simple : faire croître la masse monétaire à un taux constant, de l’ordre de 3 à 5 % par an, quelle que soit la conjoncture. Cette règle a été abandonnée parce que la demande de monnaie s’est révélée instable, mais l’idée de règles et de crédibilité a profondément marqué les banques centrales.</p>
<h4>7. Le libéralisme économique et politique</h4>
<p>Dans Capitalisme et liberté (1962), Friedman soutient que la liberté économique est une condition de la liberté politique. Il propose des changes flexibles, des chèques éducation permettant aux familles de choisir leur école, un impôt négatif sur le revenu pour remplacer les aides sociales, la fin de la conscription, la suppression de nombreuses licences professionnelles. Plusieurs de ces idées, longtemps jugées extravagantes, ont été appliquées.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Essais d’économie positive (1953).</b> Un recueil qui contient l’essai méthodologique et un plaidoyer précoce pour les changes flexibles, vingt ans avant la fin du système de Bretton Woods.</p>
<p><b>Une théorie de la fonction de consommation (1957).</b> Le livre que de nombreux économistes considèrent comme son meilleur travail scientifique, fondé sur l’hypothèse du revenu permanent.</p>
<p><b>Capitalisme et liberté (1962).</b> Un manifeste libéral accessible, écrit avec Rose Friedman, vendu à des centaines de milliers d’exemplaires.</p>
<p><b>Une histoire monétaire des États-Unis, 1867-1960 (1963), avec Anna Schwartz.</b> Près de neuf cents pages de données et d’analyses, qui ont changé l’interprétation de la Grande Dépression.</p>
<p><b>« The Role of Monetary Policy » (1968).</b> Son discours présidentiel, l’un des articles les plus influents de la macroéconomie d’après-guerre.</p>
<p><b>La Liberté du choix (1980), avec Rose Friedman.</b> Le livre tiré de la série télévisée, best-seller mondial, qui popularise ses idées auprès du grand public.</p>` }
    ],
    cas: [
      { titre: "La fin de la conscription", html: `
<p>En 1969, le président Nixon crée une commission sur l’armée de volontaires, dont Friedman est l’un des membres les plus actifs. Il défend l’idée qu’une armée professionnelle, payée au prix du marché, est plus efficace et plus juste que la conscription, qui fait payer aux appelés un impôt caché. Lors d’un débat, un général lui reproche de vouloir une armée de mercenaires ; Friedman lui demande s’il préfère commander une armée d’esclaves, et ajoute que lui-même est un général mercenaire, comme son interlocuteur. La conscription prend fin aux États-Unis en 1973. Friedman considérait ce succès comme l’une de ses contributions les plus importantes.</p>` },
      { titre: "Le Chili et le prix Nobel", html: `
<p>En mars 1975, Friedman se rend au Chili pour une série de conférences et rencontre le général Pinochet, à qui il recommande un « traitement de choc » contre l’inflation. Plusieurs ministres chiliens ont été formés à Chicago, d’où le nom de « Chicago Boys ». Lors de la remise du prix Nobel en 1976, des manifestants protestent contre ces liens. Friedman répond qu’il a aussi donné des conférences dans des pays communistes sans être accusé de les soutenir, et que la libéralisation économique conduirait, selon lui, à la liberté politique. Le Chili est revenu à la démocratie en 1990, mais le débat sur cet épisode reste vif.</p>` },
      { titre: "La responsabilité sociale de l’entreprise", html: `
<p>Le 13 septembre 1970, Friedman publie dans le New York Times Magazine un article au titre provocateur : la responsabilité sociale de l’entreprise est d’augmenter ses profits. Les dirigeants, soutient-il, sont les mandataires des actionnaires ; s’ils dépensent l’argent de l’entreprise pour des causes sociales, ils lèvent un impôt sans mandat démocratique. L’article est devenu la référence centrale du débat sur la valeur actionnariale, et la cible de tous les défenseurs de la responsabilité sociale et environnementale des entreprises.</p>` },
      { titre: "La BNS et les objectifs monétaires", html: `
<p>En 1975, deux ans après l’abandon des changes fixes, la Banque nationale suisse devient l’une des premières banques centrales à annoncer un objectif de croissance de la masse monétaire, dans l’esprit de Friedman. L’inflation suisse, proche de 10 % en 1974, redescend rapidement. La BNS conserve des objectifs monétaires jusqu’à la fin des années 1990, avant d’adopter en 2000 une nouvelle stratégie, fondée sur une définition de la stabilité des prix et une prévision d’inflation. La Suisse a souvent été citée comme l’un des exemples les plus réussis de la politique monétariste.</p>` }
    ],
    objections: `
<h4>1. La demande de monnaie instable</h4>
<p>Dans les années 1980, la relation entre la masse monétaire et l’activité devient instable, en raison des innovations financières. Les banques centrales qui avaient adopté des objectifs monétaires les abandonnent progressivement. Le gouverneur de la Banque du Canada Gerald Bouey résume : « Nous n’avons pas abandonné les agrégats monétaires, ce sont eux qui nous ont abandonnés. »</p>
<h4>2. La méthode contestée</h4>
<p>L’idée qu’une théorie peut reposer sur des hypothèses irréalistes si ses prédictions sont bonnes est critiquée par de nombreux philosophes et économistes, comme Paul <a href="#eco-samuelson">Samuelson</a>. Elle aurait encouragé une économie détachée de la réalité des comportements.</p>
<h4>3. Les keynésiens et la Grande Dépression</h4>
<p>Les keynésiens jugent que Friedman exagère le rôle de la monnaie dans la Dépression, et que la chute de la masse monétaire était autant une conséquence de l’effondrement de l’activité qu’une cause. Ben Bernanke, tout en reconnaissant la dette envers Friedman, a ajouté le rôle de l’effondrement du crédit et des faillites bancaires.</p>
<h4>4. Le libéralisme et ses coûts</h4>
<p>Ses critiques reprochent aux politiques inspirées de Friedman, privatisations, dérégulation, priorité à l’inflation sur l’emploi, d’avoir accru les inégalités et la précarité. La doctrine de la valeur actionnariale est accusée d’avoir encouragé une vision court-termiste de l’entreprise.</p>`,
    ecoles: `
<p><b>Frank Knight</b>, <b>Jacob Viner</b> et <b>Henry Simons</b>, ses maîtres de Chicago, lui transmettent le libéralisme et la théorie des prix.</p>
<p><b>Anna Schwartz</b>, <b>Karl Brunner</b> et <b>Allan Meltzer</b> développent le monétarisme.</p>
<p><b><a href="#eco-lucas">Robert Lucas</a></b> et les nouveaux classiques radicalisent sa critique de la courbe de Phillips.</p>
<p><b>Ben Bernanke</b> applique en 2008 sa leçon sur la Grande Dépression, et le lui dit dès 2002 : « Vous avez raison, nous l’avons fait. Nous sommes désolés. »</p>
<p><b>Les banques centrales indépendantes</b> et le ciblage d’inflation héritent de son insistance sur la stabilité des prix.</p>
<p><b><a href="#eco-hayek">Hayek</a></b>, qu’il rencontre au Mont-Pèlerin en 1947, partage son libéralisme mais non sa théorie monétaire.</p>`,
    source: {
      titre: "Milton Friedman, The Counter-Revolution in Monetary Theory, conférence Wincott, Londres, 1970",
      texte: "L’inflation est toujours et partout un phénomène monétaire, en ce sens qu’elle n’est et ne peut être produite que par une augmentation plus rapide de la quantité de monnaie que de la production.",
      notes: `
<p><b>La formule la plus célèbre de Friedman.</b> Elle résume la conclusion de ses travaux historiques : dans tous les pays et à toutes les époques étudiées, les périodes d’inflation durable s’accompagnent d’une croissance rapide de la monnaie.</p>
<p><b>Les nuances.</b> Friedman reconnaît que d’autres facteurs, comme un choc pétrolier, peuvent faire monter les prix temporairement. Mais une hausse durable et générale des prix ne peut se maintenir que si la monnaie l’accompagne. La responsabilité revient donc à la banque centrale.</p>
<p><b>Le débat actuel.</b> L’inflation de 2021-2023, qui a suivi une forte croissance de la masse monétaire pendant la pandémie, a relancé l’intérêt pour cette formule, même si la plupart des économistes y voient aussi le rôle des chocs d’offre.</p>`
    },
    quiz: [
      { q: "Selon l’hypothèse du revenu permanent, comment les ménages réagissent-ils à une hausse temporaire de revenu ?",
        o: ["Ils la dépensent entièrement", "Ils en épargnent une grande partie", "Ils augmentent leur consommation du même montant", "Ils empruntent davantage"], c: 1,
        e: "La consommation dépend du revenu attendu à long terme." },
      { q: "À quoi Friedman et Schwartz attribuent-ils la gravité de la Grande Dépression ?",
        o: ["À la spéculation", "À la chute d’un tiers de la masse monétaire, que la Réserve fédérale a laissé se produire", "Aux syndicats", "Au protectionnisme"], c: 1,
        e: "Une faute de politique monétaire plutôt qu’un échec du capitalisme." },
      { q: "Que devient la courbe de Phillips à long terme selon Friedman ?",
        o: ["Elle disparaît", "Elle devient verticale au taux de chômage naturel", "Elle devient horizontale", "Elle s’inverse"], c: 1,
        e: "Quand les anticipations s’ajustent, il n’y a plus d’arbitrage entre inflation et chômage." },
      { q: "Quelle règle monétaire Friedman propose-t-il ?",
        o: ["Fixer les taux à zéro", "Faire croître la masse monétaire à un taux constant", "Revenir à l’étalon-or", "Suivre le chômage"], c: 1,
        e: "Une croissance de 3 à 5 % par an, quelle que soit la conjoncture." },
      { q: "Quelle banque centrale adopte dès 1975 un objectif de croissance de la masse monétaire ?",
        o: ["La Réserve fédérale", "La Banque nationale suisse", "La Banque de France", "La Banque du Japon"], c: 1,
        e: "Elle est l’une des premières, et l’inflation suisse baisse rapidement." }
    ],
    ouverte: {
      q: "La BNS a abandonné les objectifs de masse monétaire en 1999. Friedman avait-il tort, ou la politique monétaire suisse reste-t-elle fidèle à son esprit ?",
      r: "Friedman avait tort sur un point précis : la relation entre la masse monétaire et les prix s’est révélée trop instable à court et moyen terme pour qu’un objectif de croissance monétaire puisse guider la politique au jour le jour, notamment à cause des innovations financières et, en Suisse, des grands mouvements de capitaux liés au franc refuge. C’est pourquoi la BNS est passée en 2000 à une stratégie fondée sur une définition de la stabilité des prix, moins de 2 % d’inflation, et une prévision d’inflation. Mais l’esprit de Friedman reste présent : la priorité à la stabilité des prix, la responsabilité de la banque centrale dans l’inflation, l’importance de la crédibilité et des règles annoncées, et l’attention portée aux agrégats monétaires, que la BNS continue de suivre. Le succès suisse en matière d’inflation, y compris en 2022, doit beaucoup à cette tradition."
    },
    lectures: [
      ["Accessible", "Milton et Rose Friedman, La Liberté du choix, 1980."],
      ["Accessible", "Lanny Ebenstein, Milton Friedman: A Biography, 2007."],
      ["Intermédiaire", "Milton Friedman, Capitalisme et liberté, 1962, chapitres 1, 3 et 6."],
      ["Intermédiaire", "Jennifer Burns, Milton Friedman: The Last Conservative, 2023."],
      ["Recherche", "Milton Friedman, « The Role of Monetary Policy », American Economic Review, 1968 ; Milton Friedman et Anna Schwartz, A Monetary History of the United States, 1867-1960, 1963, chapitre 7."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Friedman, d’où vient toujours l’inflation ?",
          o: ["D’une création de monnaie trop rapide", "De la hausse des salaires", "Des chocs pétroliers", "Des impôts trop élevés"], c: 0,
          e: "Pour lui, la monnaie est la clé de l’économie." },
        { q: "Lequel de ces combats Friedman a-t-il mené ?",
          o: ["La fin du service militaire obligatoire aux États-Unis", "La nationalisation des banques", "Le retour à l’étalon-or", "Le contrôle des prix"], c: 0,
          e: "Il défendait aussi les changes flexibles et des chèques pour choisir son école." }
      ],
      duree: 6,
      html: `
<h3>L’homme qui a défié Keynes</h3>
<p>Milton Friedman (1912-2006), fils d’immigrés pauvres de Brooklyn, devient le chef de file de l’école de Chicago et reçoit le prix Nobel en 1976. Pendant que la plupart des économistes suivent <a href="#eco-keynes">Keynes</a>, il soutient que la monnaie est la clé de l’économie.</p>
${vieFriedman}
<h3>La monnaie compte</h3>
<p>Avec Anna Schwartz, il montre que la Grande Dépression a été aggravée par la banque centrale américaine, qui a laissé la quantité de monnaie baisser d’un tiers. Pour lui, l’inflation vient toujours d’une création de monnaie trop rapide. Et on ne peut pas réduire durablement le chômage en acceptant plus d’inflation : les gens finissent par l’anticiper. La stagflation des années 1970 lui donne raison.</p>
<h3>Un libéral engagé</h3>
<p>Friedman défend le libre marché, les changes flexibles, la fin du service militaire obligatoire aux États-Unis et des chèques pour choisir son école. Ses idées inspirent Reagan et Thatcher, mais ses liens avec le Chili de Pinochet lui sont vivement reprochés. En Suisse, la BNS adopte dès 1975 une politique monétaire dans son esprit.</p>
<h3>À retenir</h3>
<p>Friedman a remis la monnaie et la lutte contre l’inflation au centre de la politique économique. Le portrait complet présente sa vie, ses idées, ses combats et ses critiques.</p>`,
      quiz: [1, 2]
    },
    resumes: {
      vie: "De Brooklyn à Chicago, au prix Nobel et à la télévision.",
      epoque: "Le triomphe keynésien, puis la stagflation des années 1970.",
      pensee: "Sept étapes, de la méthode positive au libéralisme politique.",
      livres: "Des Essais d’économie positive à La Liberté du choix.",
      cas: "La fin de la conscription, le Chili, la responsabilité sociale de l’entreprise, la BNS.",
      objections: "La demande de monnaie instable, la méthode, la Grande Dépression, les coûts du libéralisme.",
      ecoles: "Knight et Simons, les monétaristes, Lucas, Bernanke, les banques centrales, Hayek.",
      source: "L’inflation est toujours et partout un phénomène monétaire.",
      quiz: "Cinq questions corrigées et une question sur la BNS.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     JOSEPH SCHUMPETER
     ===================================================================== */
  const vieSchumpeter = lifeline(1883, 1950, [
    [1883, "naissance en Moravie", true], [1911, "Théorie de l’évolution économique", false], [1919, "ministre des Finances", true], [1924, "faillite de sa banque", false],
    [1926, "deuils", true], [1932, "Harvard", false], [1942, "Capitalisme, socialisme et démocratie", true], [1950, "mort", false]
  ], "Joseph Schumpeter, 1883-1950", "Né la même année que Keynes, Schumpeter a été professeur, ministre, banquier ruiné, puis l’une des figures de Harvard. Sa monumentale Histoire de l’analyse économique paraît après sa mort, éditée par sa troisième femme, l’économiste Elizabeth Boody.");

  const innovations = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Les cinq formes de l’innovation selon Schumpeter (1911)</text>`;
    s += cards([["Produit", "un bien nouveau ou une qualité nouvelle", "var(--note)"], ["Procédé", "une nouvelle méthode de production", "var(--note)"], ["Marché", "l’ouverture d’un débouché nouveau", "var(--gold)"], ["Ressource", "une nouvelle source de matières premières", "var(--gold)"], ["Organisation", "une nouvelle structure, comme un monopole ou sa rupture", "var(--plum)"]], 112, 200, 44);
    return s;
  })(), "L’innovation, pour Schumpeter, n’est pas l’invention : c’est la « réalisation de nouvelles combinaisons » par un entrepreneur. Elle peut porter sur bien plus que la technique. Le chemin de fer, la grande distribution ou l’ouverture d’un nouveau marché d’exportation sont autant d’innovations.", "Cinq cartes décrivant les formes d’innovation");

  const montres = fig(260, (() => {
    const L = 90, B = 200, w = 70, sc = 1.6;
    const data = [["1970", 90], ["1975", 70], ["1980", 45], ["1984", 32], ["1990", 34], ["2019", 57]];
    let s = `<text x="20" y="24" ${T}>Emplois dans l’horlogerie suisse (milliers, ordre de grandeur)</text>`;
    data.forEach(([y, v], i) => {
      const x = L + i * 88, h = v * sc;
      s += `<rect x="${x}" y="${B - h}" width="${w}" height="${h}" rx="4" style="fill:${i === 3 ? "var(--serial)" : i === 5 ? "var(--gold)" : "var(--note)"}"/>`;
      s += `<text x="${x + w / 2}" y="${B - h - 6}" text-anchor="middle" style="fill:var(--ink); font:700 12px 'JetBrains Mono', monospace">${v}</text>`;
      s += `<text x="${x + w / 2}" y="${B + 18}" text-anchor="middle" ${M}>${y}</text>`;
    });
    s += `<text x="20" y="244" ${S}>La montre à quartz détruit les deux tiers des emplois ; la Swatch (1983) et le luxe reconstruisent l’industrie.</text>`;
    return s;
  })(), "Ordres de grandeur d’après les statistiques de la Convention patronale de l’industrie horlogère suisse. La « crise du quartz » est un exemple type de destruction créatrice : une innovation venue d’ailleurs détruit une industrie, qui renaît sous une autre forme grâce à de nouvelles combinaisons.", "Barres de l’emploi horloger suisse de 1970 à 2019");

  OEC.portraits["schumpeter"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Joseph Schumpeter (1883-1950), économiste autrichien installé à Harvard, a fait de l’innovation et de l’entrepreneur le moteur du capitalisme. Celui-ci est pour lui un processus de « destruction créatrice », qui renouvelle sans cesse les produits, les techniques et les entreprises.",
      "Il explique les cycles économiques par des vagues d’innovations, souligne le rôle du crédit bancaire dans le financement des nouveautés, et prédit dans Capitalisme, socialisme et démocratie (1942) que le capitalisme pourrait être victime de ses propres succès.",
      "Longtemps éclipsé par Keynes, il est aujourd’hui l’un des économistes les plus cités dans les débats sur l’innovation, la croissance et la concurrence, et l’inspirateur de la théorie de la croissance d’Aghion et Howitt, récompensée par le prix Nobel en 2025."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Joseph Alois Schumpeter naît le 8 février 1883 à Triesch, en Moravie, alors dans l’Empire austro-hongrois, aujourd’hui en République tchèque. Son père, industriel du textile, meurt quand il a quatre ans. Sa mère épouse en secondes noces un général de haut rang, ce qui permet au jeune Joseph d’entrer au Theresianum de Vienne, l’école de l’aristocratie impériale. Il étudie le droit et l’économie à l’université de Vienne, auprès d’Eugen von Böhm-Bawerk, et brille dans un séminaire où figurent aussi Ludwig von <a href="#eco-mises">Mises</a> et le futur théoricien marxiste Otto Bauer.</p>
<p>Après un séjour en Angleterre et un passage comme avocat au tribunal mixte du Caire, il devient professeur à Czernowitz, aux confins de l’Empire, puis à Graz. Il publie à vingt-huit ans sa Théorie de l’évolution économique (1911). En 1919, il devient ministre des Finances de la jeune république autrichienne, mais son gouvernement de coalition le renvoie au bout de sept mois. Il prend ensuite la présidence d’une banque privée, la Biedermann Bank, qui fait faillite en 1924, le laissant lourdement endetté pendant des années.</p>
${vieSchumpeter}
<p>En 1925, il devient professeur à Bonn. L’année suivante, il perd en quelques semaines sa mère et sa jeune épouse, Annie, morte en couches avec leur enfant. Il ne s’en remettra jamais tout à fait. En 1932, il rejoint l’université Harvard, où il enseigne jusqu’à sa mort, influence de nombreux étudiants, dont Paul <a href="#eco-samuelson">Samuelson</a>, et publie Business Cycles (1939) et Capitalisme, socialisme et démocratie (1942). Il meurt le 8 janvier 1950, en laissant inachevée son Histoire de l’analyse économique.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Schumpeter grandit à Vienne, capitale d’un empire en plein essor industriel, où l’électricité, le chemin de fer et la chimie transforment l’économie. L’école autrichienne de Menger et de Böhm-Bawerk domine l’université, mais Schumpeter est aussi fasciné par l’équilibre général de <a href="#eco-walras">Walras</a>, qu’il juge la plus grande réalisation de la théorie économique. Il est également un lecteur attentif de <a href="#eco-marx">Marx</a>, dont il admire la vision dynamique du capitalisme.</p>
<p>Le problème qui l’occupe est le suivant : la théorie de l’équilibre décrit une économie qui se reproduit à l’identique, un « circuit », où les profits tendent vers zéro. Or le capitalisme réel est en mouvement permanent, avec des booms, des crises, des produits nouveaux et des fortunes qui se font et se défont. Il faut une théorie du changement économique venu de l’intérieur.</p>
<p>Plus tard, Schumpeter vit l’effondrement de l’Empire, l’hyperinflation autrichienne, la Grande Dépression et la montée des économies dirigées. Son livre de 1942 se demande si le capitalisme peut survivre, et répond, de façon provocatrice, qu’il ne le pense pas.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Le circuit et l’évolution</h4>
<p>Schumpeter part d’une économie stationnaire, le « circuit », où chaque année se répète à l’identique : on produit les mêmes biens avec les mêmes méthodes. Il n’y a pas de véritable profit, seulement la rémunération des facteurs. Le développement économique ne vient pas de l’accumulation progressive, mais de ruptures introduites par des innovations.</p>
<h4>2. L’innovation et l’entrepreneur</h4>
<p>L’innovation consiste à réaliser de « nouvelles combinaisons » : un produit, un procédé, un marché, une source de matières premières, une organisation. Celui qui les réalise est l’entrepreneur, qu’il distingue de l’inventeur, du gestionnaire et du capitaliste. Il est mû par le désir de fonder un royaume privé, la volonté de vaincre et la joie de créer, plus que par le seul calcul.</p>
${innovations}
<h4>3. Le crédit et le banquier</h4>
<p>L’entrepreneur n’a en général pas les ressources pour réaliser ses projets. C’est le banquier qui les lui donne, en créant du crédit. Schumpeter fait ainsi du crédit bancaire, création de pouvoir d’achat nouveau, une condition essentielle de l’innovation, et du banquier « l’éphore » de l’économie de marché.</p>
<h4>4. Le profit et la destruction créatrice</h4>
<p>L’innovateur réalise un profit temporaire, une sorte de monopole, jusqu’à ce que les imitateurs le rattrapent. Les entreprises et les produits anciens sont éliminés. C’est la <a href="#c-destruction-creatrice">destruction créatrice</a>, que Schumpeter appelle « le fait essentiel du capitalisme ». La concurrence qui compte n’est pas celle des prix entre produits identiques, mais celle des nouveaux produits et des nouvelles techniques.</p>
<h4>5. Les cycles</h4>
<p>Les innovations n’arrivent pas de manière régulière, mais par grappes : une innovation majeure en entraîne d’autres. Il en résulte des booms, suivis de dépressions pendant lesquelles l’économie absorbe et digère les nouveautés. Schumpeter combine dans Business Cycles (1939) des cycles de durées différentes, jusqu’aux ondes longues de Kondratiev (<a href="#c-cycles">voir cycles économiques</a>).</p>
<h4>6. La grande entreprise et la fin de l’entrepreneur</h4>
<p>Dans Capitalisme, socialisme et démocratie (1942), Schumpeter observe que l’innovation est de plus en plus routinisée dans les laboratoires des grandes entreprises. Il défend les grandes entreprises, accusées de monopole, comme les principaux moteurs du progrès. Mais l’entrepreneur héroïque perd son rôle, et avec lui disparaît la justification sociale de la bourgeoisie.</p>
<h4>7. Le capitalisme peut-il survivre ?</h4>
<p>Schumpeter répond : non, mais pas pour les raisons de Marx. Le capitalisme ne s’effondrera pas sous le poids de ses échecs, mais de ses succès : il crée une classe d’intellectuels critiques, affaiblit les institutions qui le protégeaient et rend l’entrepreneur superflu. Il pourrait céder la place à une forme de socialisme bureaucratique. Il propose aussi une théorie de la démocratie comme concurrence entre élites pour obtenir les votes, qui influencera la science politique.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Théorie de l’évolution économique (1911).</b> Son premier grand livre, qui pose l’innovation, l’entrepreneur et le crédit au cœur du développement capitaliste. Le chapitre 2 est le plus important.</p>
<p><b>Business Cycles (1939).</b> Deux volumes de théorie et d’histoire des cycles depuis le XVIIIe siècle, qui ont déçu à leur sortie, éclipsés par la Théorie générale de Keynes.</p>
<p><b>Capitalisme, socialisme et démocratie (1942).</b> Son livre le plus lu, brillant et provocateur, qui contient le célèbre chapitre 7 sur la destruction créatrice et une théorie de la démocratie.</p>
<p><b>Histoire de l’analyse économique (1954).</b> Une somme posthume de plus de mille pages, encore inégalée par son érudition, qui couvre la pensée économique depuis les Grecs.</p>` }
    ],
    cas: [
      { titre: "Le banquier ruiné", html: `
<p>En 1921, Schumpeter obtient une licence bancaire et devient président de la Biedermann Bank, à Vienne. Il investit aussi personnellement dans des entreprises, avec de l’argent emprunté. La stabilisation de la couronne en 1924 provoque un krach à la Bourse de Vienne : la banque fait faillite, et Schumpeter se retrouve avec des dettes considérables, qu’il remboursera pendant de longues années avec ses honoraires de conférences et d’articles. Le théoricien de l’entrepreneur a fait l’expérience personnelle de la destruction.</p>` },
      { titre: "Les trois ambitions", html: `
<p>Selon une anecdote souvent rapportée, Schumpeter aurait déclaré dans sa jeunesse qu’il voulait devenir le plus grand économiste du monde, le meilleur cavalier d’Autriche et le plus grand amant de Vienne. Plus tard, il aurait ajouté qu’il n’avait réalisé que deux de ces trois ambitions, sans préciser lesquelles. L’anecdote reflète son goût de la provocation et de l’élégance, qui contrastait avec le sérieux de ses collègues de Harvard.</p>` },
      { titre: "La crise du quartz et la Swatch", html: `
<p>À la fin des années 1960, des montres électroniques à quartz, développées en partie en Suisse mais industrialisées par des entreprises japonaises et américaines, deviennent bien plus précises et moins chères que les montres mécaniques. L’industrie horlogère suisse s’effondre : l’emploi passe d’environ 90 000 personnes en 1970 à environ 30 000 au milieu des années 1980. Sous l’impulsion de Nicolas G. Hayek, les deux principaux groupes fusionnent et lancent en 1983 la Swatch, une montre à quartz bon marché fabriquée de manière très automatisée, puis réorientent l’industrie vers le luxe. C’est une illustration presque parfaite de la destruction créatrice et des nouvelles combinaisons de Schumpeter.</p>` },
      { titre: "Le duel avec Keynes", html: `
<p>Schumpeter et Keynes sont nés la même année, en 1883. Mais en 1936, la Théorie générale éclipse tout, y compris Business Cycles, publié trois ans plus tard. Schumpeter reproche à Keynes une théorie de court terme, centrée sur la demande, qui ignore l’innovation et le changement. Dans sa notice nécrologique de Keynes, il lui rend hommage tout en critiquant le « vice ricardien » de ses conclusions politiques. La rivalité entre la vision de la demande et celle de l’innovation structure encore la macroéconomie.</p>` }
    ],
    objections: `
<h4>1. L’innovation est aussi le fait des petites entreprises</h4>
<p>Le jeune Schumpeter de 1911 voyait dans l’entrepreneur individuel le moteur du progrès ; celui de 1942 voit les grandes entreprises. Les études empiriques ne tranchent pas : les grandes entreprises dépensent plus en recherche, mais les innovations radicales viennent souvent de nouvelles entreprises, comme dans l’informatique.</p>
<h4>2. Une prédiction démentie</h4>
<p>Le capitalisme n’a pas cédé la place au socialisme. Au contraire, l’entrepreneur est revenu au centre de l’économie avec la révolution numérique, et les économies planifiées se sont effondrées. Schumpeter a sous-estimé la capacité de renouvellement du capitalisme, qu’il décrivait pourtant mieux que quiconque.</p>
<h4>3. Le coût humain de la destruction</h4>
<p>La destruction créatrice a des perdants : travailleurs licenciés, régions industrielles en déclin. Schumpeter s’intéresse peu à leur sort. Les études sur les travailleurs licenciés montrent des pertes de revenus durables (<a href="#c-hysterese">voir hystérèse</a>).</p>
<h4>4. Une théorie difficile à formaliser</h4>
<p>Les économistes ont longtemps négligé Schumpeter parce que ses idées se prêtaient mal aux modèles mathématiques. Il a fallu attendre les années 1990 pour que Philippe Aghion et Peter Howitt en proposent une formalisation rigoureuse.</p>`,
    ecoles: `
<p><b>Böhm-Bawerk</b> et <b><a href="#eco-walras">Walras</a></b> sont ses grandes références ; il dialogue toute sa vie avec <b><a href="#eco-marx">Marx</a></b>.</p>
<p><b>Les économistes évolutionnistes</b>, Richard Nelson et Sidney Winter (1982), développent une théorie néo-schumpetérienne du changement technique.</p>
<p><b>Philippe Aghion</b> et <b>Peter Howitt</b> formalisent la croissance par destruction créatrice (1992) ; leurs travaux sont récompensés par le prix Nobel en 2025.</p>
<p><b>Christopher Freeman</b> et <b>Carlota Perez</b> reprennent les ondes longues liées aux révolutions technologiques.</p>
<p><b>Les théoriciens de la démocratie</b>, comme Anthony Downs, s’inspirent de sa conception de la démocratie comme compétition.</p>
<p><b>Les politiques d’innovation</b>, des agences de soutien aux start-up aux politiques de concurrence, se réclament souvent de lui.</p>`,
    source: {
      titre: "Joseph Schumpeter, Capitalisme, socialisme et démocratie, 1942, chapitre 7",
      texte: "Ce processus de destruction créatrice constitue la donnée fondamentale du capitalisme : c’est en elle que consiste, en dernière analyse, le capitalisme, et toute entreprise capitaliste doit, bon gré mal gré, s’y adapter.",
      notes: `
<p><b>Le contexte.</b> Juste avant, Schumpeter décrit l’histoire des révolutions industrielles, du rouet à la filature mécanique, de la diligence à l’avion. Le capitalisme est par nature une forme de changement économique, qui ne peut jamais être stationnaire.</p>
<p><b>Contre la concurrence des manuels.</b> Schumpeter en tire que les économistes regardent la mauvaise concurrence : celle des prix entre produits identiques. La concurrence qui compte vient de la marchandise nouvelle, de la technique nouvelle, de la source d’approvisionnement nouvelle, qui frappe non les marges, mais l’existence même des entreprises.</p>
<p><b>Une expression empruntée.</b> L’idée de destruction créatrice a des antécédents chez Marx et chez le sociologue Werner Sombart, mais c’est Schumpeter qui en a fait le concept central d’une théorie du capitalisme.</p>`
    },
    quiz: [
      { q: "Quelle différence Schumpeter fait-il entre invention et innovation ?",
        o: ["L’invention est le fait des entreprises, l’innovation celui des savants", "L’innovation est la mise en œuvre de nouvelles combinaisons par un entrepreneur, l’invention une découverte", "L’innovation concerne seulement les produits", "L’invention est plus importante"], c: 1,
        e: "Un inventeur n’est pas forcément un entrepreneur." },
      { q: "Quel rôle Schumpeter donne-t-il au banquier ?",
        o: ["Il prête l’épargne des ménages aux entreprises existantes", "Il crée le crédit qui permet aux entrepreneurs de réaliser leurs projets", "Il fixe les prix", "Il dirige lui-même les innovations"], c: 1,
        e: "Le crédit bancaire est la condition de l’innovation." },
      { q: "Pourquoi le capitalisme pourrait-il disparaître selon Capitalisme, socialisme et démocratie ?",
        o: ["À cause de ses échecs et de la misère ouvrière", "À cause de ses succès, qui rendent l’entrepreneur superflu et affaiblissent ses soutiens", "À cause des guerres", "À cause de l’inflation"], c: 1,
        e: "Une réponse provocatrice, différente de celle de Marx." },
      { q: "Quelle fonction Schumpeter a-t-il exercée en Autriche en 1919 ?",
        o: ["Chancelier", "Ministre des Finances", "Gouverneur de la banque centrale", "Ambassadeur"], c: 1,
        e: "Pendant sept mois, dans un gouvernement de coalition." },
      { q: "Quel produit lancé en 1983 symbolise la renaissance de l’horlogerie suisse après la crise du quartz ?",
        o: ["La Rolex Submariner", "La Swatch", "La montre à quartz Beta 21", "La montre de poche"], c: 1,
        e: "Une montre à quartz bon marché, fabriquée de manière très automatisée." }
    ],
    ouverte: {
      q: "La Suisse est classée depuis des années en tête des indices mondiaux d’innovation. Est-ce le fait de grands groupes, comme le pensait le Schumpeter de 1942, ou d’entrepreneurs, comme celui de 1911 ?",
      r: "Les deux, ce qui donne raison aux deux Schumpeter. Une grande partie des dépenses de recherche et des brevets suisses vient de grands groupes, notamment dans la pharmacie, la chimie, l’alimentation et la machine, qui disposent de laboratoires puissants et routinisent l’innovation. Mais la Suisse compte aussi un tissu dense de petites et moyennes entreprises très spécialisées, souvent leaders mondiaux de niches, et un nombre croissant de jeunes entreprises issues des écoles polytechniques fédérales de Zurich et de Lausanne. Les indices d’innovation mesurent surtout les dépenses de recherche, les brevets, la qualité des universités et l’environnement institutionnel, des forces où la Suisse excelle. Le point faible souvent relevé est la difficulté pour les jeunes entreprises suisses de grandir et de trouver du capital-risque, ce qui rejoint l’importance que Schumpeter accordait au crédit et au financement des entrepreneurs."
    },
    lectures: [
      ["Accessible", "Thomas McCraw, Prophet of Innovation: Joseph Schumpeter and Creative Destruction, 2007."],
      ["Accessible", "Philippe Aghion, Céline Antonin et Simon Bunel, Le Pouvoir de la destruction créatrice, 2020."],
      ["Intermédiaire", "Joseph Schumpeter, Capitalisme, socialisme et démocratie, 1942, chapitres 5 à 8 et 22."],
      ["Intermédiaire", "Richard Swedberg, Schumpeter: A Biography, 1991."],
      ["Recherche", "Joseph Schumpeter, Théorie de l’évolution économique, 1911, chapitre 2 ; Philippe Aghion et Peter Howitt, « A Model of Growth through Creative Destruction », Econometrica, 1992."]
    ],
    decouvrir: {
      questions: [
        { q: "Pour Schumpeter, qu’est-ce qui compte avant tout dans l’économie ?",
          o: ["L’innovation", "La demande des ménages", "La quantité de monnaie", "Les droits de douane"], c: 0,
          e: "Né la même année que Keynes, il propose une vision très différente de la sienne." },
        { q: "Dans la destruction créatrice, que se passe-t-il après les profits de l’entrepreneur innovant ?",
          o: ["D’autres l’imitent, et les anciennes entreprises disparaissent", "Il garde son avantage pour toujours", "L’État nationalise son entreprise", "Les prix montent sans fin"], c: 0,
          e: "C’est, selon lui, « le fait essentiel du capitalisme »." }
      ],
      duree: 6,
      html: `
<h3>Un aristocrate de l’économie</h3>
<p>Joseph Schumpeter (1883-1950), né en Moravie, a été professeur à Vienne et à Graz, ministre des Finances de l’Autriche, banquier ruiné, puis professeur à Harvard. Né la même année que Keynes, il propose une vision très différente de l’économie : ce qui compte, ce n’est pas la demande, mais l’innovation.</p>
${vieSchumpeter}
<h3>L’entrepreneur et la destruction créatrice</h3>
<p>Pour Schumpeter, l’économie avance par ruptures. Un entrepreneur lance un nouveau produit, une nouvelle méthode ou un nouveau marché, souvent grâce au crédit d’une banque. Il fait des profits, puis d’autres l’imitent, et les anciennes entreprises disparaissent. C’est la destruction créatrice, « le fait essentiel du capitalisme ».</p>
${montres}
<h3>Un exemple suisse</h3>
<p>Dans les années 1970, la montre à quartz fait disparaître les deux tiers des emplois de l’horlogerie suisse. L’industrie renaît grâce à de nouvelles combinaisons, la Swatch puis le luxe. Schumpeter y aurait reconnu sa théorie.</p>
<h3>À retenir</h3>
<p>Schumpeter est le penseur de l’innovation et du changement. Le portrait complet présente sa vie, ses livres, ses prédictions et ses héritiers.</p>`,
      quiz: [0, 4]
    },
    resumes: {
      vie: "De Moravie à Harvard : professeur, ministre, banquier ruiné.",
      epoque: "Vienne, l’équilibre de Walras et la question du changement.",
      pensee: "Sept étapes, du circuit à la survie du capitalisme.",
      livres: "De la Théorie de l’évolution économique à l’Histoire de l’analyse économique.",
      cas: "Le banquier ruiné, les trois ambitions, la crise du quartz, le duel avec Keynes.",
      objections: "Petites ou grandes entreprises, une prédiction démentie, les perdants, la formalisation.",
      ecoles: "Böhm-Bawerk, Walras et Marx, les évolutionnistes, Aghion et Howitt, Freeman et Perez.",
      source: "La destruction créatrice, donnée fondamentale du capitalisme.",
      quiz: "Cinq questions corrigées et une question sur l’innovation en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
  // la figure de l’horlogerie figure aussi dans les épisodes
  OEC.portraits["schumpeter"].cas[2].html += montres;
})();
