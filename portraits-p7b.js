/* Œconomia — portraits longs, lot 7 (b) : Paul Krugman */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  const vieKrugman = lifeline(1953, 2025, [
    [1953, "naissance à Albany", true], [1977, "doctorat au MIT", false], [1979, "la nouvelle théorie du commerce", true], [1982, "conseiller sous Reagan", false],
    [1991, "la géographie économique", true], [2000, "Princeton et le New York Times", false], [2008, "prix Nobel", true], [2015, "City University of New York", false]
  ], "Paul Krugman, né en 1953", "Chercheur, auteur de manuels et chroniqueur, Krugman a enseigné au MIT, à Stanford, à Princeton et à la City University of New York. Il a tenu une chronique au New York Times de 2000 à 2024.");

  const intra = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>Le commerce intra-branche : échanger des voitures contre des voitures</text>`;
    s += node(20, 56, 200, 70, "Allemagne", "Volkswagen, BMW, Mercedes", "var(--note)");
    s += node(420, 56, 200, 70, "France", "Renault, Peugeot, Citroën", "var(--plum)");
    s += arrow(222, 78, 418, 78) + `<text x="320" y="70" text-anchor="middle" ${S}>voitures allemandes</text>`;
    s += arrow(418, 106, 222, 106) + `<text x="320" y="124" text-anchor="middle" ${S}>voitures françaises</text>`;
    s += `<text x="20" y="170" ${S}>Pourquoi ? Avec des rendements croissants, chaque firme produit en grand quelques modèles.</text>`;
    s += `<text x="20" y="188" ${S}>Comme les consommateurs aiment la variété, chaque pays exporte certains modèles</text>`;
    s += `<text x="20" y="206" ${S}>et importe les autres, même s’il n’a aucun avantage comparatif dans la branche.</text>`;
    return s;
  })(), "La théorie classique de Ricardo explique le commerce entre pays différents : du vin contre du drap. Mais l’essentiel du commerce mondial a lieu entre pays riches semblables, qui échangent des produits semblables. Krugman l’explique en 1979 et 1980 par les rendements croissants et le goût pour la variété.", "Schéma de l’échange de voitures entre l’Allemagne et la France");

  const centre = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>La géographie économique (1991) : comment naît un centre industriel</text>`;
    s += node(20, 50, 280, 62, "Plus d’entreprises", "s’installent dans la région A", "var(--note)");
    s += node(340, 50, 280, 62, "Plus d’emplois et de variétés", "les salaires réels y sont plus élevés", "var(--gold)");
    s += node(340, 164, 280, 62, "Les travailleurs arrivent", "ils quittent la région B", "var(--plum)");
    s += node(20, 164, 280, 62, "Un marché plus grand", "qui attire de nouvelles entreprises", "var(--serial)");
    s += arrow(302, 81, 338, 81) + arrow(480, 114, 480, 162) + arrow(338, 195, 302, 195) + arrow(160, 162, 160, 114);
    s += `<text x="320" y="142" text-anchor="middle" style="fill:var(--ink-soft); font:italic 600 12px Manrope, sans-serif">causalité cumulative</text>`;
    s += `<text x="20" y="256" ${S}>Une petite avance initiale suffit : l’industrie se concentre en A, et B devient une périphérie.</text>`;
    s += `<text x="20" y="274" ${S}>Tout dépend des coûts de transport : ni trop élevés, ni nuls.</text>`;
    return s;
  })(), "Dans « Increasing Returns and Economic Geography » (1991), Krugman montre comment deux régions identiques au départ peuvent devenir l’une un centre industriel, l’autre une périphérie agricole. L’histoire et le hasard décident du lieu, les rendements croissants font le reste.", "Boucle centre-périphérie en quatre étapes");

  OEC.portraits["krugman"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Paul Krugman, né en 1953, économiste américain, prix Nobel 2008, a expliqué pourquoi des pays semblables échangent des produits semblables, grâce aux rendements croissants et au goût pour la variété : c’est la « nouvelle théorie du commerce international ».",
      "Il a fondé la « nouvelle économie géographique », qui explique pourquoi l’activité se concentre dans certaines régions et certaines villes, et étudié les crises de change et la trappe à liquidité, notamment au Japon dans les années 1990.",
      "Keynésien, chroniqueur au New York Times pendant près de vingt-cinq ans, il est devenu l’un des économistes les plus lus et les plus polémiques de son temps, critique de l’austérité après 2008."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Paul Robin Krugman naît le 28 février 1953 à Albany, dans l’État de New York, et grandit à Merrick, dans la banlieue de New York, dans une famille de la classe moyenne d’origine juive russe. Adolescent, il lit la série Fondation d’Isaac Asimov, où un savant, Hari Seldon, invente la « psychohistoire », une science capable de prévoir l’évolution des sociétés. Il racontera que c’est ce qui l’a attiré vers l’économie, ce qui s’en rapproche le plus.</p>
<p>Il étudie à Yale, puis au MIT, où il obtient son doctorat en 1977 sous la direction de Rudiger Dornbusch. En 1978, il trouve presque par hasard l’idée qui fera sa réputation : un modèle simple du commerce international fondé sur les rendements croissants. En 1982-1983, il travaille un an au Conseil des conseillers économiques du président Reagan, comme spécialiste du commerce international, aux côtés de Lawrence <a href="#eco-summers">Summers</a>.</p>
${vieKrugman}
<p>Il enseigne au MIT, brièvement à Stanford, puis à Princeton de 2000 à 2015, et enfin à la City University of New York. Il reçoit en 1991 la médaille John Bates Clark, décernée au meilleur économiste américain de moins de quarante ans, et en 2008 le prix Nobel, « pour son analyse de la structure des échanges et de la localisation de l’activité économique ». De 2000 à 2024, il tient une chronique bihebdomadaire au New York Times, puis poursuit sur une lettre en ligne. Il est aussi l’auteur, avec Maurice Obstfeld et avec Robin Wells, son épouse, de manuels utilisés dans le monde entier.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>À la fin des années 1970, la théorie du commerce international repose sur l’<a href="#c-avantage-comparatif">avantage comparatif</a> de <a href="#eco-ricardo">Ricardo</a> et sur le modèle de Heckscher-Ohlin, enrichi par <a href="#eco-samuelson">Samuelson</a> : les pays échangent parce qu’ils sont différents, par leur technologie ou leurs ressources. Or l’essentiel du commerce mondial se fait entre pays riches et semblables, qui échangent des biens semblables : des voitures contre des voitures, des machines contre des machines.</p>
<p>Les économistes savent depuis longtemps que les <a href="#c-rendements-croissants">rendements croissants</a> jouent un rôle, mais ils ne savent pas les modéliser simplement, car ils supposent une <a href="#c-concurrence-imparfaite">concurrence imparfaite</a>. En 1977, Avinash Dixit et Joseph Stiglitz proposent un modèle maniable de concurrence entre produits différenciés. Krugman l’applique au commerce, puis à la géographie.</p>
<p>Dans les années 1990, ses intérêts se déplacent vers les crises : crises de change en Amérique latine et en Asie, stagnation du Japon. Après 2008, il devient l’un des principaux défenseurs des politiques keynésiennes de relance, contre l’austérité budgétaire.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La nouvelle théorie du commerce</h4>
<p><b>La question.</b> Pourquoi des pays semblables s’échangent-ils les mêmes produits ?</p>
<p><b>Son raisonnement.</b> Dans deux articles de 1979 et 1980, Krugman montre que, lorsque la production d’un bien bénéficie de rendements croissants, chaque entreprise a intérêt à produire en grande quantité un petit nombre de variétés. Comme les consommateurs aiment la variété, les pays échangent des variétés différentes d’un même produit. Le commerce existe donc même entre pays identiques, ce que l’avantage comparatif n’expliquait pas.</p>
<p><b>Un exemple.</b> La France vend des Renault et des Peugeot à l’Allemagne, qui lui vend des Volkswagen et des BMW. Chaque constructeur produit quelques modèles en grande série, et chaque client trouve un plus grand choix. Ces travaux valent à Krugman le prix Nobel en 2008.</p>
<p><a href="#c-rendements-croissants">Pour aller plus loin, la notice « Rendements croissants » →</a></p>
${intra}
<h4>2. Les gains du commerce</h4>
<p><b>La question.</b> Que gagne-t-on à commercer avec un pays qui nous ressemble ?</p>
<p><b>Son raisonnement.</b> Dans ce cadre, l’ouverture au commerce apporte des gains nouveaux. Un marché plus grand permet des séries plus longues, donc des coûts plus bas, et offre aux consommateurs un choix plus large. Le commerce entre produits semblables provoque aussi moins de conflits que le commerce classique, car il ne fait pas disparaître des branches entières.</p>
<p><b>Un exemple.</b> Après l’accord automobile de 1965 entre le Canada et les États-Unis, les usines canadiennes, qui fabriquaient auparavant de nombreux modèles en petites séries pour leur seul marché, se spécialisent dans quelques modèles vendus sur tout le continent. Leur productivité se rapproche de celle des usines américaines.</p>
<p><a href="#c-avantage-comparatif">Pour aller plus loin, la notice « Avantage comparatif », qui explique l’autre forme de commerce →</a></p>
<h4>3. L’effet du marché intérieur</h4>
<p><b>La question.</b> Où une entreprise a-t-elle intérêt à s’installer ?</p>
<p><b>Son raisonnement.</b> Avec des coûts de transport, les entreprises ont intérêt à s’installer près du plus grand marché, et à exporter de là vers les autres. Le pays qui a la plus forte demande pour un bien tend donc à en devenir exportateur. C’est l’« effet du marché intérieur ».</p>
<p><b>Un exemple.</b> Un fabricant qui ne peut ouvrir qu’une seule usine la place près du marché où il vend le plus, pour économiser les transports sur la plus grande partie de sa production, et il exporte de là vers les marchés plus petits.</p>
<h4>4. La géographie économique</h4>
<p><b>La question.</b> Pourquoi l’activité se concentre-t-elle dans certaines régions ?</p>
<p><b>Son raisonnement.</b> En 1991, Krugman étend ce raisonnement aux régions. Les entreprises attirent les travailleurs, qui forment un marché, qui attire d’autres entreprises, une causalité cumulative. Deux régions identiques peuvent ainsi devenir un centre et une périphérie. L’histoire et le hasard comptent, car une petite avance peut se renforcer d’elle-même.</p>
<p><b>Un exemple.</b> Krugman prend l’exemple de la « ceinture manufacturière » du nord-est des États-Unis, où l’industrie américaine s’est concentrée à la fin du XIXe siècle et est restée pendant des décennies, bien après que ses raisons de départ eurent disparu.</p>
<p><a href="#c-rendements-croissants">Pour aller plus loin, la notice « Rendements croissants » →</a></p>
${centre}
<h4>5. Les crises de change</h4>
<p><b>La question.</b> Pourquoi une monnaie peut-elle s’effondrer d’un coup ?</p>
<p><b>Son raisonnement.</b> Dès 1979, Krugman propose un modèle des crises de change. Un pays qui finance son déficit en créant de la monnaie perd peu à peu ses réserves s’il veut garder un taux de change fixe. Il subit, à un moment prévisible, une attaque spéculative soudaine. Les spéculateurs n’attendent pas que les réserves soient vides, ils les vident eux-mêmes d’un coup.</p>
<p><b>Un exemple.</b> En décembre 1994, le Mexique, dont les réserves de dollars fondent, doit laisser tomber le peso, qui perd plus de la moitié de sa valeur en trois mois. La crise mexicaine ressemble en partie à ce scénario, même si sa dette à court terme en dollars y a joué un grand rôle. Les crises asiatiques de 1997 suivront d’autres mécanismes, que des modèles plus récents chercheront à expliquer.</p>
<p><a href="#c-taux-de-change">Pour aller plus loin, la notice « Taux de change » →</a></p>
<h4>6. La trappe à liquidité</h4>
<p><b>La question.</b> Que faire quand les taux d’intérêt sont déjà à zéro ?</p>
<p><b>Son raisonnement.</b> En 1998, Krugman montre que le Japon est tombé dans une trappe à liquidité. Les taux d’intérêt sont à zéro, et la banque centrale ne peut plus les baisser. Il lui recommande de s’engager de façon crédible à laisser monter l’inflation, pour réduire les taux d’intérêt réels. Après 2008, il applique cette analyse aux États-Unis et à l’Europe, et plaide pour une relance budgétaire.</p>
<p><b>Un exemple.</b> Son article de 1998 s’intitule, en anglais, « Elle est de retour », la trappe à liquidité que l’on croyait disparue avec les années 1930. En 2013, la Banque du Japon adopte enfin un objectif d’inflation de 2 %.</p>
<p><a href="#c-trappe-liquidite">Pour aller plus loin, la notice « Trappe à liquidité » →</a></p>
<h4>7. La productivité et le refus de la « compétitivité »</h4>
<p><b>La question.</b> Les pays se font-ils concurrence comme des entreprises ?</p>
<p><b>Son raisonnement.</b> Krugman insiste sur le fait que le niveau de vie d’un pays dépend avant tout de sa productivité. Il critique l’idée que les pays se feraient concurrence comme des entreprises. Le commerce international n’est pas un jeu à somme nulle, et parler de « compétitivité » nationale est selon lui souvent trompeur.</p>
<p><b>Un exemple.</b> « La productivité n’est pas tout, mais à long terme, c’est presque tout », écrit-il en 1990. En 1994, il qualifie la compétitivité d’« obsession dangereuse », car un pays n’est pas une entreprise qui ferait faillite parce que ses voisins prospèrent.</p>
<p><a href="#c-pib">Pour aller plus loin, la notice « PIB et ses limites » →</a></p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>« Increasing Returns, Monopolistic Competition, and International Trade » (1979) et « Scale Economies, Product Differentiation, and the Pattern of Trade » (1980).</b> Les deux articles fondateurs de la nouvelle théorie du commerce.</p>
<p><b>Geography and Trade (1991).</b> Un petit livre de conférences, très clair, qui présente la nouvelle économie géographique.</p>
<p><b>La Mondialisation n’est pas coupable (1996).</b> Recueil d’essais contre les idées reçues sur le commerce et la compétitivité.</p>
<p><b>Pourquoi les crises reviennent toujours (1999, réédité en 2008).</b> Sur les crises asiatiques, le Japon et, dans sa réédition, la crise financière.</p>
<p><b>Sortez-nous de cette crise… maintenant ! (2012).</b> Un plaidoyer pour la relance après 2008.</p>
<p><b>Économie internationale, avec Maurice Obstfeld et Marc Melitz.</b> L’un des manuels de référence de la discipline.</p>` }
    ],
    cas: [
      { titre: "La psychohistoire d’Asimov", html: `
<p>Krugman a souvent raconté que sa vocation venait de la série Fondation d’Isaac Asimov. Dans ces romans, le mathématicien Hari Seldon prévoit la chute d’un empire galactique grâce à une science des comportements de masse, et tente d’en abréger les conséquences. Adolescent, Krugman rêve de devenir Seldon. Il constate plus tard que l’économie est ce qui s’en approche le plus, tout en reconnaissant qu’elle est loin de pouvoir prévoir l’avenir.</p>` },
      { titre: "Le mythe du miracle asiatique", html: `
<p>En 1994, en pleine admiration mondiale pour les « tigres » asiatiques, Krugman publie dans Foreign Affairs « Le mythe du miracle asiatique ». S’appuyant sur les travaux d’Alwyn Young, il soutient que la croissance de pays comme Singapour vient surtout de l’accumulation de capital et de travail, et non de gains de productivité, comme celle de l’Union soviétique autrefois : elle devrait donc ralentir. La crise asiatique de 1997, dont les causes étaient pourtant surtout financières, attire l’attention sur cet article. Les recherches ultérieures ont nuancé son diagnostic.</p>` },
      { titre: "Le Japon, laboratoire de la stagnation", html: `
<p>En 1998, dans un article intitulé « It’s Baaack », Krugman annonce le retour de la trappe à liquidité, que beaucoup croyaient une curiosité des années 1930. Il propose à la Banque du Japon de « promettre de manière crédible d’être irresponsable », c’est-à-dire de laisser durablement monter l’inflation. Dix ans plus tard, la plupart des banques centrales occidentales se retrouvent elles aussi avec des taux à zéro, et cet article devient une référence pour les politiques non conventionnelles.</p>` },
      { titre: "« J’avais tort sur l’inflation »", html: `
<p>En 2021, Krugman fait partie de ceux qui jugent la hausse de l’inflation américaine passagère, contre Lawrence <a href="#eco-summers">Summers</a>, qui avertit que le plan de relance du président Biden risque de surchauffer l’économie. L’inflation dépasse 9 % en 2022. En juillet 2022, Krugman publie une chronique intitulée « I Was Wrong About Inflation », où il reconnaît son erreur et en analyse les causes. Il soutiendra ensuite que la baisse rapide de l’inflation, sans récession, a donné en partie raison aux tenants d’un choc temporaire.</p>` }
    ],
    objections: `
<h4>1. Une géographie redécouverte</h4>
<p>Les géographes ont fait remarquer que les idées de la nouvelle économie géographique, causalité cumulative, rôle de l’histoire, centres et périphéries, se trouvaient déjà chez Gunnar Myrdal, Albert Hirschman ou dans la géographie régionale. Krugman l’a reconnu, et répondu que sa contribution était d’en donner un modèle rigoureux.</p>
<h4>2. Les effets de la mondialisation sous-estimés</h4>
<p>Les travaux sur le « choc chinois », menés notamment par David Autor, ont montré que les importations venues de Chine avaient détruit des emplois industriels et appauvri des régions entières aux États-Unis. En 2019, Krugman a admis que les économistes, lui compris, avaient sous-estimé ces effets locaux.</p>
<h4>3. Des prévisions malheureuses</h4>
<p>En 1998, il écrit qu’Internet n’aura pas sur l’économie un effet plus grand que le fax ; il dira plus tard qu’il s’agissait d’un texte volontairement provocateur. Son erreur sur l’inflation en 2021 est un autre exemple souvent cité.</p>
<h4>4. Un chroniqueur partisan</h4>
<p>Ses adversaires, à droite mais aussi parfois chez les économistes, lui reprochent un ton polémique et une hostilité systématique au Parti républicain, qui nuiraient à son autorité scientifique. Ses défenseurs soulignent qu’il a souvent eu raison sur les grands débats macroéconomiques après 2008, notamment sur la faiblesse de l’inflation et des taux d’intérêt.</p>`,
    ecoles: `
<p><b>David <a href="#eco-ricardo">Ricardo</a></b> et <b>Paul <a href="#eco-samuelson">Samuelson</a></b> représentent la théorie du commerce qu’il complète.</p>
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> et <b>John Hicks</b> inspirent ses travaux sur la trappe à liquidité.</p>
<p><b>Avinash Dixit</b> et <b>Joseph Stiglitz</b> lui fournissent l’outil de la concurrence monopolistique.</p>
<p><b>Elhanan Helpman</b>, <b>Masahisa Fujita</b> et <b>Anthony Venables</b> développent avec lui le commerce et la géographie.</p>
<p><b>Marc Melitz</b> prolonge la nouvelle théorie du commerce avec des entreprises hétérogènes.</p>
<p><b>Lawrence <a href="#eco-summers">Summers</a></b>, ancien collègue, est son allié sur la <a href="#c-stagnation-seculaire">stagnation séculaire</a> et son adversaire sur l’inflation de 2021.</p>`,
    source: {
      titre: "Paul Krugman, The Age of Diminished Expectations, 1990, chapitre 1",
      texte: "La productivité n’est pas tout, mais à long terme, elle est presque tout.",
      notes: `
<p><b>Le contexte.</b> Krugman écrit au début des années 1990, quand les États-Unis s’inquiètent du ralentissement de leur croissance et de la concurrence du Japon. Il veut ramener le débat à l’essentiel.</p>
<p><b>Le raisonnement.</b> La capacité d’un pays à améliorer son niveau de vie dépend presque entièrement de sa capacité à produire davantage par travailleur. Les déficits commerciaux ou les taux de change comptent beaucoup moins à long terme.</p>
<p><b>Une phrase devenue proverbiale.</b> Elle est citée dans de nombreux rapports de banques centrales et d’organisations internationales, et résume sa méfiance envers les discours sur la « compétitivité » des nations.</p>`
    },
    quiz: [
      { q: "Que cherche à expliquer la nouvelle théorie du commerce de Krugman ?",
        o: ["Le commerce de matières premières entre pays riches et pays pauvres", "Le commerce de produits semblables entre pays semblables", "Le protectionnisme des pays riches face aux économies émergentes", "Les variations des taux de change entre les grandes monnaies"], c: 1,
        e: "Comme l’échange de voitures entre l’Allemagne et la France." },
      { q: "Sur quels mécanismes repose-t-elle ?",
        o: ["L’avantage comparatif seul, tiré des écarts de productivité entre pays", "Les rendements croissants et le goût des consommateurs pour la variété", "Les droits de douane qui protègent les industries nationales naissantes", "La loi des débouchés, selon laquelle l’offre crée sa demande"], c: 1,
        e: "Chaque firme produit en grand quelques variétés." },
      { q: "Que décrit le modèle centre-périphérie (1991) ?",
        o: ["La colonisation", "La concentration cumulative de l’industrie dans une région", "La migration des capitaux vers les pays pauvres", "La dispersion de l’industrie quand les transports deviennent bon marché"], c: 1,
        e: "Une petite avance initiale peut se renforcer d’elle-même." },
      { q: "Que recommande Krugman au Japon en 1998 ?",
        o: ["Monter les taux d’intérêt pour attirer les capitaux étrangers", "S’engager de façon crédible à laisser monter l’inflation", "Quitter le libre-échange pour protéger l’industrie japonaise", "Réduire les dépenses publiques pour assainir les finances"], c: 1,
        e: "Pour sortir de la trappe à liquidité." },
      { q: "Que dit Krugman de la « compétitivité » des nations ?",
        o: ["Qu’elle est la clé de la prospérité des nations dans le commerce mondial", "Qu’elle est trompeuse, car un pays n’est pas une entreprise en concurrence", "Qu’elle exige des subventions à l’exportation pour les industries clés du pays", "Qu’elle dépend avant tout du taux de change de la monnaie nationale"], c: 1,
        e: "Les pays ne se concurrencent pas comme des entreprises. Article « Competitiveness: A Dangerous Obsession », 1994." }
    ],
    ouverte: {
      q: "La Suisse est régulièrement classée première ou presque dans les classements mondiaux de compétitivité, établis à Genève par le Forum économique mondial, jusqu’en 2019, et à Lausanne par l’IMD. Que dirait Krugman de ces classements ?",
      r: "Dans « Competitiveness: A Dangerous Obsession » (1994), Krugman soutient que les pays ne sont pas des entreprises : une entreprise qui n’est pas compétitive fait faillite, un pays non. Le commerce international n’est pas un jeu à somme nulle, et la prospérité de la Suisse ne se fait pas au détriment de l’Allemagne, de la France ou de l’Italie, qui figurent au contraire parmi ses principaux clients. Il dirait donc que le premier rang de la Suisse dans ces classements n’a de sens que s’il reflète sa productivité élevée, sa formation professionnelle, la qualité de ses institutions et de ses infrastructures, et non une « victoire » sur les autres. Il mettrait aussi en garde contre l’usage politique de ces palmarès pour justifier des subventions ou des baisses d’impôts ciblées. En revanche, sa géographie économique éclairerait bien certains traits suisses : la concentration de l’horlogerie dans l’Arc jurassien, de la pharmacie à Bâle ou de la finance à Zurich et Genève, qui s’expliquent par des avantages initiaux renforcés par une causalité cumulative."
    },
    lectures: [
      ["Accessible", "Paul Krugman, La Mondialisation n’est pas coupable, 1996."],
      ["Accessible", "Paul Krugman, « Competitiveness: A Dangerous Obsession », Foreign Affairs, 1994."],
      ["Intermédiaire", "Paul Krugman, Geography and Trade, 1991."],
      ["Intermédiaire", "Paul Krugman, Pourquoi les crises reviennent toujours, 2009."],
      ["Recherche", "Paul Krugman, « Increasing Returns and Economic Geography », Journal of Political Economy, 1991 ; « It’s Baaack », Brookings Papers on Economic Activity, 1998."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi l’Allemagne et la France échangent-elles des voitures, selon Krugman ?",
          o: ["Parce que produire en grand quelques modèles coûte moins, et que le choix plaît", "Parce que l’un des deux pays ne sait pas fabriquer certains modèles de voitures populaires", "Parce que les droits de douane imposent cet échange entre voisins", "Parce que le prix de l’essence est plus bas dans le pays voisin"], c: 0,
          e: "Chaque pays se spécialise dans certains modèles et achète les autres." },
        { q: "Qu’a rêvé de faire Krugman adolescent, en lisant un roman de science-fiction ?",
          o: ["Prévoir l’avenir des sociétés par les mathématiques", "Devenir astronaute et explorer d’autres planètes lointaines", "Diriger une grande banque centrale comme la Fed", "Écrire des romans de science-fiction à son tour"], c: 0,
          e: "Il deviendra économiste, puis prix Nobel en 2008." }
      ],
      duree: 6,
      html: `
<h3>Le lecteur d’Asimov</h3>
<p>Paul Krugman, né en 1953 près de New York, rêve adolescent de prévoir l’avenir des sociétés, comme le héros d’un roman de science-fiction. Il devient économiste, professeur au MIT puis à Princeton, chroniqueur au New York Times, et reçoit le prix Nobel en 2008.</p>
${vieKrugman}
<h3>Des voitures contre des voitures</h3>
<p>Pourquoi l’Allemagne et la France échangent-elles des voitures, alors qu’elles savent toutes les deux en fabriquer ? Krugman répond : parce qu’il est moins cher de produire en grand un petit nombre de modèles, et que les clients aiment avoir le choix. Chaque pays se spécialise dans certains modèles et achète les autres.</p>
${intra}
<h3>Pourquoi l’industrie se concentre</h3>
<p>Le même raisonnement explique pourquoi les entreprises se regroupent dans certaines régions : elles y trouvent des travailleurs et des clients, ce qui attire encore d’autres entreprises. Le cinéma à Hollywood, l’informatique dans la Silicon Valley ou la pharmacie à Bâle en sont des exemples.</p>
<h3>À retenir</h3>
<p>Krugman a renouvelé la théorie du commerce et de la géographie, puis défendu les idées keynésiennes après 2008. Le portrait complet présente sa vie, ses idées, ses erreurs reconnues et ses critiques.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "D’Albany au MIT, de Princeton au New York Times et au prix Nobel.",
      epoque: "Un commerce entre pays semblables que la théorie classique n’expliquait pas.",
      pensee: "Sept étapes, du commerce intra-branche à la productivité.",
      livres: "Des articles fondateurs aux manuels et aux essais.",
      cas: "Asimov, le miracle asiatique, le Japon, l’erreur sur l’inflation.",
      objections: "Une géographie redécouverte, le choc chinois, des prévisions ratées, un ton partisan.",
      ecoles: "Ricardo et Samuelson, Keynes et Hicks, Dixit-Stiglitz, Helpman, Melitz, Summers.",
      source: "La productivité n’est pas tout, mais presque tout.",
      quiz: "Cinq questions corrigées et une question sur les classements de compétitivité.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
