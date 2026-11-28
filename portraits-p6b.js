/* Œconomia — portraits longs, lot 6 (b) : Robert Lucas, Daniel Kahneman */
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
     ROBERT LUCAS
     ===================================================================== */
  const vieLucas = lifeline(1937, 2023, [
    [1937, "naissance à Yakima", true], [1964, "doctorat à Chicago", false], [1972, "anticipations et monnaie", true], [1975, "professeur à Chicago", false],
    [1976, "la « critique de Lucas »", true], [1988, "la croissance", false], [1995, "prix Nobel", true], [2023, "mort à Chicago", false]
  ], "Robert Lucas, 1937-2023", "D’abord étudiant en histoire, Lucas devient le chef de file de la « nouvelle macroéconomie classique ». Il enseigne à Carnegie Mellon, puis à Chicago pendant près d’un demi-siècle.");

  const iles = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Le modèle des « îles » de Lucas (1972) : pourquoi la monnaie surprend (schéma)</text>`;
    s += node(230, 44, 180, 56, "Le prix du blé monte", "sur l’île du producteur", "var(--gold)");
    s += node(20, 140, 280, 84, "Le producteur se demande :", "hausse de la demande pour mon blé,", "var(--note)") + `<text x="160" y="214" text-anchor="middle" ${S}>ou hausse générale des prix ?</text>`;
    s += node(340, 140, 280, 84, "Il ne voit que son île :", "il attribue une partie de la hausse", "var(--plum)") + `<text x="480" y="214" text-anchor="middle" ${S}>à la demande, et produit plus</text>`;
    s += arrow(290, 102, 180, 138) + arrow(350, 102, 460, 138);
    s += `<text x="20" y="246" ${S}>Une création monétaire imprévue augmente donc la production. Mais si elle est systématique et anticipée,</text>`;
    s += `<text x="20" y="264" ${S}>les producteurs ne se trompent plus : seuls les prix montent. La politique monétaire perd son effet réel.</text>`;
    return s;
  })(), "Dans « Expectations and the Neutrality of Money » (1972), Lucas montre comment des agents aux anticipations rationnelles, mais mal informés de l’état général de l’économie, peuvent réagir à une surprise monétaire. Le modèle explique la courbe de Phillips de court terme sans supposer d’erreurs systématiques.", "Schéma du producteur qui interprète une hausse de prix");

  const paradoxe = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Le « paradoxe de Lucas » (1990) : pourquoi le capital ne va-t-il pas vers les pays pauvres ?</text>`;
    s += node(20, 60, 230, 70, "Pays riche", "beaucoup de capital : rendement faible", "var(--note)");
    s += node(390, 60, 230, 70, "Pays pauvre", "peu de capital : rendement élevé ?", "var(--gold)");
    s += `<line x1="252" y1="82" x2="388" y2="82" style="stroke:var(--line); stroke-width:2; stroke-dasharray:5 4"/><text x="320" y="74" text-anchor="middle" ${S}>ce que prévoit la théorie</text>`;
    s += arrow(388, 112, 252, 112, "var(--serial)") + `<text x="320" y="132" text-anchor="middle" style="fill:var(--serial); font:600 11.5px Manrope, sans-serif">ce que l’on observe souvent</text>`;
    s += `<text x="20" y="180" ${S}>Explications : capital humain plus élevé dans les pays riches, institutions et risque d’expropriation</text>`;
    s += `<text x="20" y="198" ${S}>dans les pays pauvres, imperfections des marchés financiers internationaux.</text>`;
    s += `<text x="20" y="222" ${S}>Lucas en tire l’importance du capital humain et des externalités de connaissance pour la croissance.</text>`;
    return s;
  })(), "Si le capital était rare dans les pays pauvres, son rendement devrait y être beaucoup plus élevé, et l’épargne mondiale devrait s’y diriger. Or c’est souvent l’inverse. Ce paradoxe a stimulé la recherche sur le capital humain et les institutions (voir institutions inclusives).", "Flux de capitaux théoriques et observés entre pays riche et pauvre");

  OEC.portraits["lucas"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Robert Lucas (1937-2023), professeur à l’université de Chicago et prix Nobel 1995, est le chef de file de la « nouvelle macroéconomie classique ». Il a introduit les anticipations rationnelles en macroéconomie et transformé la manière de construire les modèles économiques.",
      "Sa « critique » de 1976 montre que les relations statistiques observées dans le passé ne permettent pas de prévoir les effets d’une nouvelle politique, car les agents adaptent leurs comportements. Les modèles doivent reposer sur les choix des individus.",
      "Il a aussi relancé l’étude de la croissance de long terme, en insistant sur le capital humain. Son influence a été considérable, mais la crise de 2008 a ravivé les critiques contre la macroéconomie qu’il a contribué à fonder."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Robert Emerson Lucas Jr. naît le 15 septembre 1937 à Yakima, dans l’État de Washington. Ses parents, démocrates du New Deal, ouvrent un restaurant qui fait faillite pendant la crise de 1937. La famille s’installe à Seattle. Il étudie l’histoire à l’université de Chicago, puis entreprend une thèse d’histoire à Berkeley, où il découvre l’économie. Il revient à Chicago, où il obtient en 1964 un doctorat d’économie, influencé par Milton <a href="#eco-friedman">Friedman</a> et par la lecture des Fondements de Paul <a href="#eco-samuelson">Samuelson</a>.</p>
<p>Il enseigne de 1963 à 1974 à l’université Carnegie Mellon de Pittsburgh, où il travaille avec Edward Prescott et Leonard Rapping. Il y écrit ses articles les plus importants sur les anticipations rationnelles, la neutralité de la monnaie et l’évaluation des politiques. En 1975, il rejoint l’université de Chicago, où il enseigne jusqu’à sa retraite.</p>
${vieLucas}
<p>Il reçoit en 1995 le prix Nobel pour avoir « développé et appliqué l’hypothèse des anticipations rationnelles, et ainsi transformé l’analyse macroéconomique ». Président de l’American Economic Association en 2002, il y déclare dans son discours que le problème central de la prévention des dépressions a été résolu, en pratique, depuis des décennies. Il meurt à Chicago le 15 mai 2023.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Lucas commence sa carrière dans les années 1960, à l’apogée de la synthèse keynésienne. Les gouvernements utilisent de grands modèles macroéconométriques, comportant des centaines d’équations, pour prévoir l’économie et choisir leurs politiques. La courbe de Phillips semble offrir un arbitrage stable entre inflation et chômage.</p>
<p>Les années 1970 voient cet édifice vaciller : l’inflation monte avec le chômage, les modèles se trompent dans leurs prévisions (<a href="#c-stagflation">voir stagflation</a>). Friedman et Phelps ont montré l’importance des anticipations, mais avec des anticipations adaptatives qui laissent les gens se tromper longtemps.</p>
<p>Lucas pense que la macroéconomie doit reposer sur les mêmes principes que la microéconomie : des individus qui optimisent, des marchés qui s’équilibrent, et des anticipations cohérentes avec le fonctionnement réel de l’économie. Il s’appuie sur l’idée formulée par John Muth en 1961 (<a href="#c-anticipations-rationnelles">voir anticipations rationnelles</a>).</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Les anticipations rationnelles en macroéconomie</h4>
<p><b>La question.</b> Peut-on tromper durablement les gens avec une politique prévisible ?</p>
<p><b>Son raisonnement.</b> Lucas applique à la macroéconomie l’hypothèse proposée par John Muth en 1961. Les individus utilisent toute l’information disponible et ne se trompent pas systématiquement. Ils ne peuvent donc pas être durablement abusés par une politique prévisible.</p>
<p><b>Un exemple.</b> Si une banque centrale relance l’économie avant chaque élection, les syndicats et les entreprises finissent par le prévoir. Ils augmentent salaires et prix à l’avance, et la relance ne produit plus que de l’inflation.</p>
<p><a href="#c-anticipations-rationnelles">Pour aller plus loin, la notice « Anticipations rationnelles » →</a></p>
<h4>2. La neutralité de la monnaie</h4>
<p><b>La question.</b> Pourquoi une hausse surprise de la monnaie fait-elle produire davantage, pour un temps ?</p>
<p><b>Son raisonnement.</b> Dans son article de 1972, reprenant une image d’Edmund Phelps, Lucas imagine des producteurs dispersés sur des « îles », qui ne voient que le prix de leur propre produit. Quand ce prix monte, ils ne savent pas si c’est leur produit qui est plus demandé ou si tous les prix montent. Une création monétaire imprévue les pousse à produire davantage, une création monétaire anticipée n’a pas d’effet réel.</p>
<p><b>Un exemple.</b> Un vigneron voit le prix de son vin monter. S’il croit que son vin est plus apprécié, il en produit davantage. S’il découvre ensuite que tous les prix ont monté d’autant, il comprend qu’il s’est trompé et revient à sa production habituelle.</p>
<p><a href="#c-theorie-quantitative">Pour aller plus loin, la notice « Théorie quantitative de la monnaie » →</a></p>
${iles}
<h4>3. La critique de Lucas</h4>
<p><b>La question.</b> Peut-on prévoir l’effet d’une nouvelle politique à partir des données du passé ?</p>
<p><b>Son raisonnement.</b> En 1976, Lucas montre que les grands modèles de l’époque estiment des relations observées dans le passé et les utilisent pour prévoir l’effet de nouvelles politiques. Mais ces relations dépendent des politiques suivies. Si la politique change, les comportements changent, et les prévisions sont fausses. Il faut des modèles fondés sur des paramètres « profonds », les préférences et les techniques, qui ne changent pas avec la politique.</p>
<p><b>Un exemple.</b> Dans les années 1960, on croyait pouvoir « acheter » moins de chômage avec un peu plus d’inflation, en s’appuyant sur la courbe de Phillips observée. Dès que les gouvernements ont tenté de l’exploiter, la relation s’est déplacée, et les années 1970 ont connu à la fois plus d’inflation et plus de chômage.</p>
<p><a href="#c-courbe-phillips">Pour aller plus loin, la notice « Courbe de Phillips » →</a></p>
<h4>4. Les fondements microéconomiques</h4>
<p><b>La question.</b> La macroéconomie doit-elle partir des choix individuels ?</p>
<p><b>Son raisonnement.</b> Lucas en tire un programme, construire la macroéconomie à partir des choix optimaux de ménages et d’entreprises, en équilibre. Ce programme a été développé par Finn Kydland et Edward Prescott dans la théorie des cycles réels, puis par les modèles néokeynésiens d’équilibre général dynamique.</p>
<p><b>Un exemple.</b> Les banques centrales, dont la BCE, la Réserve fédérale et la BNS, utilisent aujourd’hui de tels modèles pour préparer leurs décisions. Kydland et Prescott reçoivent le prix Nobel en 2004.</p>
<p><a href="#c-cycles">Pour aller plus loin, la notice « Cycles économiques » →</a></p>
<h4>5. Les règles plutôt que la discrétion</h4>
<p><b>La question.</b> L’État doit-il intervenir à chaque ralentissement ?</p>
<p><b>Son raisonnement.</b> Si la politique n’a d’effet réel que par surprise, une politique de stabilisation active est inefficace, voire nuisible. Lucas défend des règles stables et prévisibles, plutôt que des interventions au cas par cas. Cette idée a contribué à l’indépendance des banques centrales et aux objectifs d’inflation.</p>
<p><b>Un exemple.</b> En 1997, le gouvernement britannique rend la Banque d’Angleterre indépendante pour fixer les taux d’intérêt, avec un objectif d’inflation annoncé. Beaucoup de pays ont fait de même, pour rendre la politique monétaire crédible.</p>
<p><a href="#c-politique-monetaire">Pour aller plus loin, la notice « Politique monétaire » →</a></p>
<h4>6. Le coût des cycles</h4>
<p><b>La question.</b> Les récessions coûtent-elles cher ?</p>
<p><b>Son raisonnement.</b> En 1987, Lucas calcule que les fluctuations de la consommation américaine d’après-guerre coûtent l’équivalent d’une fraction minime de la consommation. Il en conclut que les gains à attendre d’une meilleure politique de stabilisation sont faibles comparés à ceux d’une croissance plus rapide.</p>
<p><b>Un exemple.</b> Selon son calcul, supprimer toutes les fluctuations vaudrait à peine un vingtième de pour cent de la consommation. La crise de 2008 a relancé le débat, car des récessions profondes peuvent laisser des traces durables, avec du chômage de longue durée et des investissements perdus.</p>
<p><a href="#c-hysterese">Pour aller plus loin, la notice « Hystérèse du chômage » →</a></p>
<h4>7. La croissance et le capital humain</h4>
<p><b>La question.</b> Pourquoi certains pays croissent-ils plus vite que d’autres ?</p>
<p><b>Son raisonnement.</b> Dans « Sur la mécanique du développement économique » (1988), Lucas insiste sur le capital humain, l’éducation et les compétences, et sur ses effets externes, chacun étant plus productif entouré de personnes qualifiées. En 1990, il pose le « paradoxe de Lucas », le capital ne va pas des pays riches vers les pays pauvres autant que la théorie le prévoit.</p>
<p><b>Un exemple.</b> Une fois qu’on commence à penser aux écarts de croissance entre pays, écrit-il, il est difficile de penser à autre chose. Selon la théorie simple, le capital devrait rapporter des dizaines de fois plus en Inde qu’aux États-Unis, et pourtant il n’y afflue pas.</p>
<p><a href="#c-modele-solow">Pour aller plus loin, la notice « Croissance et modèle de Solow » →</a></p>
${paradoxe}` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>« Expectations and the Neutrality of Money » (1972).</b> L’article fondateur de la nouvelle macroéconomie classique, avec le modèle des îles.</p>
<p><b>« Econometric Policy Evaluation: A Critique » (1976).</b> La « critique de Lucas », l’un des articles les plus cités de la macroéconomie.</p>
<p><b>« Understanding Business Cycles » (1977).</b> Une définition des cycles comme des mouvements conjoints de nombreuses variables, à expliquer par un modèle d’équilibre.</p>
<p><b>Models of Business Cycles (1987).</b> Un petit livre de conférences qui présente son programme et son calcul du coût des cycles.</p>
<p><b>« On the Mechanics of Economic Development » (1988).</b> L’article qui relance l’étude de la croissance avec le capital humain.</p>
<p><b>« Macroeconomic Priorities » (2003).</b> Son discours présidentiel à l’American Economic Association.</p>` }
    ],
    cas: [
      { titre: "La clause du divorce", html: `
<p>En 1989, lors de son divorce, l’épouse de Lucas, Rita Cohen, fait inscrire dans l’accord une clause lui attribuant la moitié de tout prix Nobel qu’il recevrait avant le 31 octobre 1995. Lucas reçoit le prix en octobre 1995, quelques semaines avant l’échéance, et partage la somme comme convenu. L’anecdote a fait le tour du monde, avec un commentaire souvent repris : l’ex-épouse avait fait preuve d’anticipations parfaitement rationnelles.</p>` },
      { titre: "« Le problème est résolu »", html: `
<p>En janvier 2003, dans son discours présidentiel à l’American Economic Association, Lucas déclare que la macroéconomie a réussi dans sa mission initiale : le problème central de la prévention des dépressions a été résolu, pour toutes les questions pratiques, et ce depuis des décennies. Cinq ans plus tard, la crise financière de 2008 provoque la plus grave récession depuis les années 1930. La phrase est souvent citée pour illustrer l’excès de confiance de la macroéconomie d’avant la crise.</p>` },
      { titre: "« Il est difficile de penser à autre chose »", html: `
<p>Dans son article de 1988 sur le développement, Lucas observe que les écarts de revenu par habitant entre pays sont énormes, et que de petites différences de taux de croissance, cumulées sur des décennies, se traduisent par des différences considérables de niveau de vie. Il ajoute une phrase devenue célèbre : les conséquences pour le bien-être humain de ces questions sont si grandes qu’une fois qu’on commence à y penser, il est difficile de penser à autre chose.</p>` },
      { titre: "Le débat avec les keynésiens", html: `
<p>En 1979, avec Thomas Sargent, Lucas publie un article provocateur, « Après la macroéconomie keynésienne », qui déclare l’échec « spectaculaire » des modèles keynésiens face à la stagflation. Les keynésiens, comme Robert Solow, jugent ce programme irréaliste, notamment l’idée que le chômage des années 1930 aurait pu être volontaire. Ce débat structure la macroéconomie pendant vingt ans, jusqu’à la synthèse néokeynésienne.</p>` }
    ],
    objections: `
<h4>1. Le chômage involontaire</h4>
<p>Les keynésiens reprochent aux modèles d’équilibre de Lucas de traiter le chômage comme un choix, alors que la Grande Dépression ou la crise de 2008 ont vu des millions de personnes chercher en vain un emploi. Robert Solow a raillé l’idée d’un chômage de masse volontaire.</p>
<h4>2. L’agent représentatif</h4>
<p>Les modèles fondés sur un individu représentatif ignorent les inégalités, les contraintes de crédit et les différences entre agents, qui jouent un rôle important dans les crises. Les modèles récents, à agents hétérogènes, cherchent à corriger ce défaut.</p>
<h4>3. La crise de 2008</h4>
<p>Paul <a href="#eco-krugman">Krugman</a> et d’autres reprochent à la macroéconomie issue de Lucas d’avoir négligé la finance et l’instabilité, et de n’avoir pas vu venir la crise. Les défenseurs répondent qu’aucun modèle ne peut prévoir la date d’une crise, et que les modèles ont depuis intégré le secteur financier.</p>
<h4>4. Les anticipations réelles</h4>
<p>Les enquêtes et l’économie comportementale montrent que les anticipations des ménages et des entreprises s’écartent souvent de la rationalité supposée (<a href="#eco-kahneman">voir Kahneman</a>). La critique de Lucas reste valable, mais l’hypothèse des anticipations rationnelles est discutée comme description des comportements.</p>`,
    ecoles: `
<p><b>John Muth</b> lui fournit l’hypothèse des anticipations rationnelles ; <b><a href="#eco-friedman">Friedman</a></b> son monétarisme.</p>
<p><b>Thomas Sargent</b> et <b>Neil Wallace</b> développent avec lui la nouvelle macroéconomie classique.</p>
<p><b>Finn Kydland</b> et <b>Edward Prescott</b> en tirent la théorie des cycles réels.</p>
<p><b>Les néokeynésiens</b> adoptent ses méthodes en y ajoutant des rigidités de prix.</p>
<p><b>Paul Romer</b>, son ancien étudiant, développe la croissance endogène.</p>
<p><b>Les banques centrales</b> utilisent des modèles d’équilibre général issus de son programme.</p>`,
    source: {
      titre: "Robert Lucas, « On the Mechanics of Economic Development », Journal of Monetary Economics, 1988",
      texte: "Les conséquences pour le bien-être humain de questions comme celles-ci sont tout simplement stupéfiantes : dès qu’on commence à y penser, il est difficile de penser à autre chose.",
      notes: `
<p><b>Les questions en jeu.</b> Juste avant, Lucas se demande si le gouvernement de l’Inde pourrait prendre une mesure qui ferait croître son économie comme celle de l’Indonésie ou de l’Égypte, et ce qui, dans la nature de l’Inde, la fait croître lentement.</p>
<p><b>Un changement de priorité.</b> La phrase marque le passage de Lucas de l’étude des cycles à celle de la croissance de long terme, qu’il juge bien plus importante pour le bien-être humain.</p>
<p><b>Une postérité féconde.</b> L’article contribue à lancer la théorie de la croissance endogène et l’intérêt pour le capital humain, les institutions et la géographie du développement.</p>`
    },
    quiz: [
      { q: "Que dit la « critique de Lucas » (1976) ?",
        o: ["Que les modèles doivent reposer sur des données historiques abondantes et fiables", "Que les relations estimées dans le passé changent quand la politique change", "Que la politique budgétaire n’a pas d’effet sur l’emploi à court terme", "Que les impôts sont trop élevés pour encourager l’investissement"], c: 1,
        e: "Les agents adaptent leurs comportements à la politique ; les modèles doivent reposer sur des paramètres qui n’en dépendent pas." },
      { q: "Dans le modèle des îles, pourquoi une surprise monétaire augmente-t-elle la production ?",
        o: ["Parce que les producteurs savent que tous les prix montent en même temps partout", "Parce que les producteurs prennent la hausse de leur prix pour un signe de demande", "Parce que les salaires baissent pendant que les prix restent stables", "Parce que les importations augmentent et font baisser les coûts"], c: 1,
        e: "Les producteurs confondent en partie hausse générale des prix et hausse de la demande pour leur produit ; une création monétaire anticipée, en revanche, n’a pas d’effet réel." },
      { q: "Pour quelle contribution Lucas reçoit-il le prix Nobel en 1995 ?",
        o: ["La théorie des jeux appliquée aux marchés oligopolistiques", "L’hypothèse des anticipations rationnelles en macroéconomie", "Une théorie du commerce international fondée sur les économies d’échelle", "La finance comportementale et l’étude des biais des investisseurs"], c: 1,
        e: "Elle a transformé l’analyse macroéconomique." },
      { q: "Qu’est-ce que le « paradoxe de Lucas » ?",
        o: ["La monnaie est à la fois neutre à long terme et non neutre à court terme", "Le capital ne se dirige pas vers les pays pauvres, pourtant rentables", "Les riches épargnent une part plus faible de leur revenu que les pauvres", "Les prix baissent quand la demande monte, contre toute attente"], c: 1,
        e: "Les rendements attendus y sont plus élevés ; le capital humain et les institutions l’expliquent en partie." },
      { q: "Que déclare Lucas en 2003 à l’American Economic Association ?",
        o: ["Que la prochaine grande crise financière approche à grands pas", "Que le problème central de la prévention des dépressions est résolu", "Que Keynes avait raison sur le rôle de l’État dans les crises", "Que les crises financières resteront inévitables malgré la régulation"], c: 1,
        e: "Il juge ce problème résolu en pratique ; la crise de 2008 a rendu la phrase célèbre." }
    ],
    ouverte: {
      q: "La Suisse, pays riche, exporte chaque année une grande quantité de capitaux vers le reste du monde. Le paradoxe de Lucas éclaire-t-il ce phénomène ?",
      r: "En partie. Selon la théorie simple, le capital devrait aller là où il est rare et donc mieux rémunéré, c’est-à-dire vers les pays pauvres. Or l’épargne suisse, abondante en raison du deuxième pilier, du vieillissement et des revenus élevés, se place surtout dans d’autres pays riches, aux États-Unis et en Europe, plutôt que dans les pays en développement. C’est une illustration du paradoxe de Lucas : les investisseurs suisses recherchent la sécurité juridique, la stabilité des institutions et des marchés financiers profonds, que les pays pauvres offrent moins, et le capital humain y rend aussi le capital physique plus productif. Les caisses de pension suisses, tenues de gérer prudemment l’épargne des assurés, accentuent cette préférence. Le phénomène rappelle que les institutions, autant que la rareté du capital, déterminent où va l’épargne mondiale."
    },
    lectures: [
      ["Accessible", "Robert Lucas, conférence Nobel « Monetary Neutrality », 1995."],
      ["Accessible", "Michel De Vroey, A History of Macroeconomics from Keynes to Lucas and Beyond, 2016."],
      ["Intermédiaire", "Robert Lucas, Models of Business Cycles, 1987."],
      ["Intermédiaire", "Robert Lucas et Thomas Sargent, « After Keynesian Macroeconomics », 1979."],
      ["Recherche", "Robert Lucas, « Expectations and the Neutrality of Money », Journal of Economic Theory, 1972 ; « Econometric Policy Evaluation: A Critique », 1976."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Lucas, pourquoi une création de monnaie prévisible ne relance-t-elle pas l’économie ?",
          o: ["Parce que tout le monde s’y attend, et que seuls les prix montent", "Parce que la monnaie créée est détruite aussitôt par les banques commerciales", "Parce que les banques refusent de prêter davantage aux entreprises", "Parce que les salaires sont fixés par la loi à un niveau rigide"], c: 0,
          e: "Seules les surprises ont un effet, et on ne peut pas surprendre les gens tout le temps." },
        { q: "À quoi Lucas s’intéresse-t-il plus tard, qu’il juge bien plus important pour le bien-être que les cycles ?",
          o: ["La croissance et l’éducation", "Les taux de change", "La Bourse", "Les impôts sur les successions"], c: 0,
          e: "Il a refondé la macroéconomie sur les anticipations et les choix individuels." }
      ],
      duree: 6,
      html: `
<h3>L’homme qui a changé la macroéconomie</h3>
<p>Robert Lucas (1937-2023), d’abord étudiant en histoire, devient économiste à Chicago et reçoit le prix Nobel en 1995. Dans les années 1970, il remet en cause la manière dont les gouvernements utilisaient les modèles économiques pour décider de leurs politiques.</p>
${vieLucas}
<h3>On ne trompe pas les gens longtemps</h3>
<p>Pour Lucas, les gens anticipent intelligemment l’avenir. Si la banque centrale crée de la monnaie de façon prévisible pour relancer l’économie, tout le monde s’y attend et seuls les prix montent. Seules les surprises ont un effet, et on ne peut pas surprendre les gens tout le temps. D’où l’intérêt de règles claires et de banques centrales indépendantes.</p>
${iles}
<h3>La critique et la croissance</h3>
<p>Lucas montre aussi que les modèles fondés sur le passé ne peuvent pas prévoir l’effet de politiques nouvelles, car les gens changent de comportement. Plus tard, il s’intéresse à la croissance et à l’éducation, qu’il juge bien plus importantes pour le bien-être que les cycles.</p>
<h3>À retenir</h3>
<p>Lucas a refondé la macroéconomie sur les anticipations et les choix individuels. Le portrait complet présente sa vie, ses idées et leurs critiques, notamment après 2008.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De Yakima à Chicago, Carnegie Mellon et le prix Nobel.",
      epoque: "L’apogée des modèles keynésiens et la stagflation.",
      pensee: "Sept étapes, des anticipations rationnelles au capital humain.",
      livres: "Des îles de 1972 à « Macroeconomic Priorities » (2003).",
      cas: "La clause du divorce, « le problème est résolu », la croissance, le débat keynésien.",
      objections: "Le chômage involontaire, l’agent représentatif, 2008, les anticipations réelles.",
      ecoles: "Muth et Friedman, Sargent et Wallace, Kydland et Prescott, les néokeynésiens, Romer.",
      source: "Il est difficile de penser à autre chose.",
      quiz: "Cinq questions corrigées et une question sur les capitaux suisses.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     DANIEL KAHNEMAN
     ===================================================================== */
  const vieKahneman = lifeline(1934, 2024, [
    [1934, "naissance à Tel-Aviv", true], [1940, "enfance dans la France occupée", false], [1961, "doctorat à Berkeley", true], [1969, "rencontre Amos Tversky", false],
    [1979, "la théorie des perspectives", true], [1993, "Princeton", false], [2002, "prix Nobel", true], [2011, "Système 1, Système 2", false]
  ], "Daniel Kahneman, 1934-2024", "Psychologue et non économiste, Kahneman a pourtant reçu le prix Nobel d’économie. Son œuvre, menée en grande partie avec Amos Tversky, a fondé l’économie comportementale.");

  const systemes = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Les deux systèmes de la pensée (Système 1, Système 2, 2011)</text>`;
    s += cards([["Système 1", "Rapide, automatique, intuitif, sans effort. Reconnaît un visage, conduit sur une route vide, répond 2 + 2.", "var(--gold)"], ["Système 2", "Lent, délibéré, logique, coûteux en effort. Calcule 17 × 24, remplit une déclaration d’impôts.", "var(--note)"], ["Les biais", "Le Système 1 propose des réponses rapides que le Système 2, paresseux, accepte souvent sans les vérifier.", "var(--serial)"]], 190, 196, 44);
    return s;
  })(), "La distinction, empruntée aux psychologues Keith Stanovich et Richard West, est popularisée par Kahneman dans son livre de 2011. Elle résume des décennies de recherches : nos jugements reposent largement sur des raccourcis intuitifs, efficaces en général mais sources d’erreurs systématiques.", "Trois cartes : Système 1, Système 2 et les biais");

  const cadrage = fig(280, (() => {
    const L = 230, W = 330;
    let s = `<text x="20" y="24" ${T}>L’effet de cadrage : le problème de la « maladie asiatique » (1981)</text>`;
    s += `<text x="20" y="52" ${S}>600 personnes menacées. Programme A : sûr. Programme B : risqué. Mêmes résultats, présentés autrement.</text>`;
    const rows = [["« 200 personnes seront sauvées »", 72, "var(--note)"], ["« 400 personnes mourront »", 22, "var(--serial)"]];
    rows.forEach(([n, v, c], i) => {
      const y = 76 + i * 70, w = v / 100 * W;
      s += `<text x="${L - 12}" y="${y + 18}" text-anchor="end" ${T}>${n}</text>`;
      s += `<rect x="${L}" y="${y}" width="${w}" height="30" rx="4" style="fill:${c}"/>`;
      s += `<text x="${L + w + 8}" y="${y + 20}" style="fill:var(--ink); font:700 13px 'JetBrains Mono', monospace">${v} %</text>`;
      s += `<text x="${L - 12}" y="${y + 36}" text-anchor="end" ${M}>part choisissant le programme sûr</text>`;
    });
    s += `<text x="20" y="236" ${S}>Présentée en vies sauvées, l’option sûre séduit ; présentée en morts, les gens préfèrent prendre le risque.</text>`;
    s += `<text x="20" y="254" ${S}>Les choix dépendent de la formulation, ce qui contredit l’hypothèse de préférences stables.</text>`;
    return s;
  })(), "Résultats de l’expérience d’Amos Tversky et Daniel Kahneman, publiée dans Science en 1981, auprès d’étudiants. Les deux formulations décrivent exactement la même situation. L’effet de cadrage est l’une des démonstrations les plus frappantes de l’écart entre les choix réels et la rationalité supposée.", "Barres comparant les choix selon la formulation");

  OEC.portraits["kahneman"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Daniel Kahneman (1934-2024), psychologue israélo-américain, a reçu en 2002 le prix Nobel d’économie pour avoir intégré les apports de la psychologie à l’analyse économique, en particulier sur le jugement et la décision en situation d’incertitude.",
      "Avec Amos Tversky, il a montré que nos jugements reposent sur des raccourcis, les heuristiques, qui produisent des erreurs systématiques, et proposé la théorie des perspectives : nous évaluons les gains et les pertes par rapport à un point de référence, et les pertes pèsent plus que les gains.",
      "Ses travaux ont fondé l’économie comportementale, inspiré les « nudges » des politiques publiques et transformé la finance, le droit et la médecine. Son livre Système 1, Système 2 (2011) a été un succès mondial."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Daniel Kahneman naît le 5 mars 1934 à Tel-Aviv, alors en Palestine mandataire, où sa mère rendait visite à sa famille. Il grandit à Paris, où son père travaille pour une entreprise chimique. Pendant l’Occupation, la famille, juive, se cache dans le sud de la France ; son père meurt peu avant la Libération. Kahneman racontera souvent un souvenir d’enfance : un soldat SS qui, ignorant qu’il était juif, le serra dans ses bras et lui montra la photo de son propre fils. Il en tira l’idée que les gens sont infiniment compliqués et intéressants.</p>
<p>En 1948, la famille émigre en Palestine, peu avant la création de l’État d’Israël. Kahneman étudie la psychologie et les mathématiques à l’Université hébraïque de Jérusalem. Pendant son service militaire, il conçoit pour l’armée israélienne un système d’évaluation des recrues, fondé sur des critères simples et notés séparément, qui a été utilisé pendant des décennies. Il obtient son doctorat à Berkeley en 1961 et revient enseigner à Jérusalem.</p>
${vieKahneman}
<p>En 1969, il invite un jeune collègue, Amos Tversky, à intervenir dans son séminaire. Commence alors l’une des collaborations les plus fécondes de l’histoire des sciences sociales. Ils publient ensemble leurs articles sur les heuristiques (1974) et la théorie des perspectives (1979). Kahneman part ensuite au Canada, à Berkeley, puis à Princeton en 1993. Tversky meurt en 1996. Kahneman reçoit le prix Nobel en 2002, partagé avec Vernon Smith, en regrettant que son ami n’ait pu le recevoir avec lui. Il publie Système 1, Système 2 en 2011 et Noise en 2021. Il meurt le 27 mars 2024, à 90 ans.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Dans les années 1950 et 1960, l’économie repose sur l’hypothèse d’un individu rationnel, qui maximise son utilité espérée de manière cohérente, selon les axiomes de von Neumann et Morgenstern. Les psychologues, eux, étudient la perception, l’attention et la mémoire, sans grand lien avec l’économie.</p>
<p>Herbert Simon avait déjà proposé la notion de rationalité limitée, et Maurice Allais montré en 1953 un paradoxe dans les choix risqués. Mais les économistes considèrent ces anomalies comme marginales, compensées par le marché ou par l’apprentissage.</p>
<p>Kahneman et Tversky abordent les décisions en psychologues. Ils partent d’intuitions sur leurs propres erreurs, conçoivent des questions simples, les posent à des étudiants et à des experts, et montrent que les erreurs ne sont pas aléatoires, mais systématiques et prévisibles. Leur article de 1979 est publié dans Econometrica, la grande revue d’économie mathématique, ce qui lui donne un écho considérable chez les économistes.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Les heuristiques</h4>
<p><b>La question.</b> Comment jugeons-nous quand nous ne savons pas ?</p>
<p><b>Son raisonnement.</b> Face à l’incertitude, nous utilisons des raccourcis. L’heuristique de disponibilité nous fait juger un événement plus probable quand des exemples nous viennent facilement à l’esprit. L’heuristique de représentativité nous fait juger d’après la ressemblance à un stéréotype, en négligeant les probabilités de base. L’ancrage nous fait rester trop près d’un chiffre initial, même arbitraire.</p>
<p><b>Un exemple.</b> Dans une expérience de 1974, Kahneman et Tversky font tourner une roue truquée qui s’arrête sur 10 ou sur 65, puis demandent quelle part des pays de l’ONU est africaine. Ceux qui ont vu 10 répondent typiquement 25 %, ceux qui ont vu 65 répondent 45 %. Un chiffre tiré au hasard a pesé sur leur estimation.</p>
<h4>2. Le problème de Linda</h4>
<p><b>La question.</b> Nos intuitions respectent-elles les règles des probabilités ?</p>
<p><b>Son raisonnement.</b> Linda, 31 ans, célibataire, brillante, a milité contre la discrimination. Est-il plus probable qu’elle soit employée de banque, ou employée de banque et militante féministe ? La seconde réponse est forcément moins probable que la première, puisqu’elle ajoute une condition. La ressemblance avec un portrait l’emporte pourtant sur la logique.</p>
<p><b>Un exemple.</b> Dans les premières expériences, environ 85 % des étudiants interrogés choisissent la seconde réponse, y compris des étudiants qui connaissent la théorie des probabilités.</p>
<h4>3. La théorie des perspectives</h4>
<p><b>La question.</b> Pourquoi refusons-nous des paris pourtant favorables ?</p>
<p><b>Son raisonnement.</b> En 1979, Kahneman et Amos Tversky proposent une alternative à la théorie de l’utilité espérée. Nous évaluons les résultats comme des gains ou des pertes par rapport à un point de référence, nous sommes plus sensibles aux pertes qu’aux gains de même montant, et nous surestimons le poids des faibles probabilités.</p>
<p><b>Un exemple.</b> La plupart des gens refusent de jouer à pile ou face s’ils peuvent perdre 100 francs et gagner 150. Il faut en général promettre un gain d’environ 200 francs pour qu’ils acceptent, signe qu’une perte pèse à peu près deux fois plus qu’un gain. Ces travaux valent à Kahneman le prix Nobel en 2002, Tversky étant mort en 1996.</p>
<p><a href="#c-aversion-pertes">Pour aller plus loin, la notice « Aversion aux pertes » →</a></p>
<h4>4. L’effet de cadrage</h4>
<p><b>La question.</b> La façon de présenter un choix change-t-elle la décision ?</p>
<p><b>Son raisonnement.</b> La même situation, présentée en termes de gains ou de pertes, conduit à des choix différents. Cela contredit l’hypothèse selon laquelle les préférences ne dépendent pas de la manière dont les options sont décrites.</p>
<p><b>Un exemple.</b> Face à une épidémie qui menace 600 personnes, la plupart préfèrent un programme qui « sauve 200 personnes à coup sûr » à un pari risqué. Mais si l’on dit que le même programme « laisse mourir 400 personnes », la majorité choisit le pari. Les chiffres sont identiques, seul le cadrage a changé.</p>
${cadrage}
<h4>5. Les deux systèmes</h4>
<p><b>La question.</b> Pourquoi faisons-nous confiance à des réponses fausses ?</p>
<p><b>Son raisonnement.</b> Dans Système 1, Système 2 (2011), Kahneman distingue deux modes de pensée, un système rapide et intuitif, qui produit l’essentiel de nos jugements, et un système lent et délibéré, qui ne les vérifie que rarement. Les biais naissent de la confiance que nous accordons aux réponses du premier.</p>
<p><b>Un exemple.</b> Ce problème imaginé par le psychologue Shane Frederick est devenu célèbre. Une batte et une balle coûtent ensemble 1,10 franc, et la batte coûte 1 franc de plus que la balle. Combien coûte la balle ? La réponse qui vient spontanément est 10 centimes, la bonne est 5 centimes. Beaucoup d’étudiants de grandes universités se trompent, faute d’avoir vérifié.</p>
${systemes}
<h4>6. Le bien-être vécu et le bien-être remémoré</h4>
<p><b>La question.</b> Nous souvenons-nous fidèlement de ce que nous avons vécu ?</p>
<p><b>Son raisonnement.</b> Kahneman distingue l’expérience vécue, moment par moment, et le souvenir qu’on en garde. Le souvenir est dominé par le moment le plus intense et par la fin de l’épisode, la « règle du pic et de la fin », et néglige la durée. Il a aussi étudié la relation entre revenu et satisfaction, en distinguant le bonheur au quotidien et l’évaluation de sa vie.</p>
<p><b>Un exemple.</b> Des patients qui subissent un examen médical douloureux gardent un meilleur souvenir d’un examen plus long, si les dernières minutes sont moins pénibles. Sur le revenu, Kahneman et Angus Deaton concluent en 2010 que le bien-être quotidien cesse de progresser au-delà d’un certain revenu, avant de nuancer ce résultat en 2023 avec Matthew Killingsworth.</p>
<p><a href="#c-pib">Pour aller plus loin, la notice « PIB et ses limites » →</a></p>
<h4>7. Le bruit</h4>
<p><b>La question.</b> Deux experts face au même dossier rendent-ils le même jugement ?</p>
<p><b>Son raisonnement.</b> Dans Noise (2021), avec Olivier Sibony et Cass Sunstein, Kahneman étudie la variabilité injustifiée des jugements de professionnels face à des cas identiques, juges, médecins, assureurs. Ce « bruit » est souvent aussi coûteux que les biais, et peut être réduit par des procédures structurées.</p>
<p><b>Un exemple.</b> Dans une compagnie d’assurance, les dirigeants s’attendaient à des écarts d’environ 10 % entre les primes fixées par deux souscripteurs pour le même dossier. L’écart médian était d’environ 55 %.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>« Judgment under Uncertainty: Heuristics and Biases » (1974), avec Tversky.</b> L’article de Science qui présente la disponibilité, la représentativité et l’ancrage.</p>
<p><b>« Prospect Theory: An Analysis of Decision under Risk » (1979), avec Tversky.</b> L’un des articles les plus cités de l’histoire de l’économie, qui propose une théorie descriptive des choix risqués.</p>
<p><b>Attention and Effort (1973).</b> Son livre de psychologie de l’attention, qui annonce la distinction entre pensée automatique et pensée coûteuse.</p>
<p><b>Système 1, Système 2 : les deux vitesses de la pensée (2011).</b> Une synthèse grand public de ses recherches, vendue à des millions d’exemplaires.</p>
<p><b>Noise (2021), avec Olivier Sibony et Cass Sunstein.</b> Une étude des variations injustifiées des jugements professionnels.</p>` }
    ],
    cas: [
      { titre: "Le psychologue de l’armée israélienne", html: `
<p>À vingt et un ans, lieutenant dans l’armée israélienne, Kahneman est chargé d’améliorer la sélection des recrues. Les entretiens existants, fondés sur l’impression générale des examinateurs, prédisent mal la réussite. Il conçoit un entretien structuré, où six traits sont notés séparément, à partir de questions factuelles, avant tout jugement global. Le système prédit nettement mieux la réussite des soldats. Il est resté en usage, avec des modifications, pendant des décennies, et préfigure les recommandations de Noise.</p>` },
      { titre: "Amos Tversky, l’ami", html: `
<p>La collaboration entre Kahneman et Tversky est légendaire : ils passent des heures à parler, à rire et à écrire ensemble, au point de ne plus savoir lequel a eu quelle idée, et tirent leur ordre de signature à pile ou face. Le romancier Michael Lewis leur a consacré un livre, The Undoing Project (2016), qui raconte aussi les tensions qui ont fini par les éloigner. Tversky meurt d’un cancer en 1996, six ans avant le prix Nobel, qui n’est pas attribué à titre posthume.</p>` },
      { titre: "La crise de la réplication", html: `
<p>Dans Système 1, Système 2, Kahneman consacre un chapitre aux effets d’« amorçage », selon lesquels des stimuli subtils influenceraient fortement le comportement. À partir de 2012, de nombreuses tentatives de reproduire ces expériences échouent. Kahneman reconnaît publiquement qu’il a accordé trop de confiance à des études fragiles et appelle les chercheurs à vérifier leurs résultats. Ses propres travaux avec Tversky, sur les heuristiques et la théorie des perspectives, ont en revanche été largement confirmés.</p>` },
      { titre: "Les nudges et les politiques publiques", html: `
<p>Les travaux de Kahneman et Tversky ont inspiré Richard Thaler et Cass Sunstein, auteurs de Nudge (2008), qui proposent d’orienter les comportements en modifiant la présentation des choix, sans les contraindre. Les options par défaut, en particulier, ont un effet considérable : quand l’épargne retraite est automatique sauf refus, la participation augmente fortement. Plusieurs gouvernements, dont celui du Royaume-Uni, ont créé des équipes d’économistes comportementaux.</p>` }
    ],
    objections: `
<h4>1. Les erreurs de laboratoire</h4>
<p>Des économistes, comme Vernon Smith ou John List, soulignent que les biais observés en laboratoire avec des étudiants s’atténuent souvent sur les marchés réels, où les gens ont de l’expérience, des incitations et la possibilité d’apprendre.</p>
<h4>2. Des heuristiques rationnelles</h4>
<p>Le psychologue Gerd Gigerenzer soutient que les heuristiques ne sont pas des erreurs, mais des outils efficaces dans un monde incertain, souvent plus performants que des calculs complexes. Les « biais » viendraient de problèmes artificiels posés en laboratoire.</p>
<h4>3. La réplication</h4>
<p>Une partie des résultats de la psychologie sociale cités par Kahneman n’a pas résisté aux tentatives de reproduction. Il faut distinguer les résultats robustes, comme l’aversion aux pertes ou l’ancrage, des effets plus fragiles.</p>
<h4>4. Le paternalisme</h4>
<p>Les nudges inspirés de ses travaux sont critiqués comme une forme de manipulation par l’État, qui décide à la place des individus de ce qui est bon pour eux. Leurs défenseurs répondent qu’un choix doit toujours être présenté d’une manière ou d’une autre, et qu’il vaut mieux le faire dans l’intérêt des personnes.</p>`,
    ecoles: `
<p><b>Herbert Simon</b> et la rationalité limitée, <b>Maurice Allais</b> et son paradoxe, sont ses précurseurs.</p>
<p><b>Amos Tversky</b> est son partenaire de recherche pendant près de trente ans.</p>
<p><b>Richard Thaler</b>, prix Nobel 2017, fonde l’économie comportementale à partir de leurs travaux.</p>
<p><b>Robert Shiller</b> et la finance comportementale appliquent ces idées aux marchés.</p>
<p><b>Cass Sunstein</b> et les politiques de nudge en tirent des applications publiques.</p>
<p><b>Les économistes du bonheur</b>, comme Angus Deaton, prolongent ses travaux sur le bien-être.</p>`,
    source: {
      titre: "Daniel Kahneman, Système 1, Système 2 : les deux vitesses de la pensée, 2011, chapitre 38",
      texte: "Rien dans la vie n’est aussi important que vous le pensez au moment où vous y pensez.",
      notes: `
<p><b>L’illusion de focalisation.</b> La phrase résume une erreur fréquente : quand nous pensons à un aspect de notre vie, le climat de notre ville, notre revenu, notre voiture, nous en surestimons l’importance pour notre bonheur, parce qu’il occupe toute notre attention à ce moment-là.</p>
<p><b>Un exemple.</b> Kahneman et David Schkade ont montré que les étudiants pensent que les Californiens sont plus heureux que les habitants du Midwest à cause du climat, alors que les deux groupes déclarent une satisfaction semblable. Le climat compte peu au quotidien.</p>
<p><b>Les conséquences.</b> L’illusion de focalisation explique certaines décisions coûteuses, comme un déménagement ou un achat important, dont on surestime l’effet durable sur la satisfaction.</p>`
    },
    quiz: [
      { q: "Pourquoi Kahneman, psychologue, a-t-il reçu le prix Nobel d’économie ?",
        o: ["Pour une nouvelle théorie de la monnaie et de la politique monétaire des banques", "Pour avoir intégré la psychologie de la décision à l’analyse économique", "Pour ses travaux sur la croissance et le progrès technique", "Pour un modèle du commerce fondé sur les économies d’échelle"], c: 1,
        e: "Il a intégré la psychologie du jugement et de la décision ; le prix de 2002 est partagé avec Vernon Smith." },
      { q: "Que montre le problème de Linda ?",
        o: ["Que les gens calculent bien les probabilités quand l’enjeu est élevé pour eux", "Qu’une conjonction d’événements peut sembler plus probable qu’un seul", "Que les gens se fient trop à leurs souvenirs d’événements récents", "Que l’ancrage sur un premier chiffre n’influence pas le jugement"], c: 1,
        e: "Être employée de banque et féministe est forcément moins probable qu’être employée de banque." },
      { q: "Selon la théorie des perspectives, comment pèsent les pertes par rapport aux gains ?",
        o: ["Autant que les gains, puisque le calcul reste rationnel", "Plus lourdement que des gains de même montant", "Moins que les gains, car on s’habitue vite à perdre", "Elles sont ignorées tant que le montant reste modeste"], c: 1,
        e: "C’est l’aversion aux pertes." },
      { q: "Dans l’expérience de la « maladie asiatique », que change le cadrage ?",
        o: ["Le nombre réel de victimes que le programme permet d’éviter", "Les choix, selon qu’on parle de vies sauvées ou de morts", "Le coût des programmes de santé proposés aux participants", "La gravité de la maladie telle que l’annoncent les médecins"], c: 1,
        e: "La part qui choisit l’option sûre passe de 72 % à 22 %, pour des situations identiques." },
      { q: "Avec qui Kahneman a-t-il mené l’essentiel de ses recherches ?",
        o: ["Richard Thaler", "Amos Tversky", "Herbert Simon", "Milton Friedman"], c: 1,
        e: "Leur collaboration commence en 1969." }
    ],
    ouverte: {
      q: "En 2022, les Suisses ont accepté le passage au consentement présumé pour le don d’organes : chacun est considéré comme donneur, sauf refus exprimé. Que dirait l’économie comportementale de Kahneman de ce changement ?",
      r: "L’économie comportementale prédit qu’un tel changement d’option par défaut peut avoir un effet important. Les recherches d’Eric Johnson et Daniel Goldstein ont montré que les pays où le don d’organes est présumé ont des taux de donneurs potentiels bien plus élevés que ceux où il faut s’inscrire, parce que beaucoup de gens suivent l’option par défaut, par inertie, par manque d’attention ou parce qu’ils y voient une recommandation implicite. Kahneman y verrait l’exemple d’une décision où le Système 1, peu enclin à l’effort, accepte le cadre proposé. Mais l’effet réel sur le nombre de transplantations dépend aussi d’autres facteurs : l’organisation des hôpitaux, la consultation des proches, qui gardent en Suisse un rôle important, et la confiance dans le système. Le débat a aussi porté sur la liberté individuelle : faut-il présumer le consentement pour une décision aussi intime ? C’est la question classique du paternalisme des nudges."
    },
    lectures: [
      ["Accessible", "Daniel Kahneman, Système 1, Système 2 : les deux vitesses de la pensée, 2011."],
      ["Accessible", "Michael Lewis, The Undoing Project: A Friendship That Changed Our Minds, 2016."],
      ["Intermédiaire", "Richard Thaler, Misbehaving: Les découvertes de l’économie comportementale, 2015."],
      ["Intermédiaire", "Daniel Kahneman, Olivier Sibony et Cass Sunstein, Noise, 2021."],
      ["Recherche", "Daniel Kahneman et Amos Tversky, « Prospect Theory: An Analysis of Decision under Risk », Econometrica, 1979 ; Amos Tversky et Daniel Kahneman, « Judgment under Uncertainty: Heuristics and Biases », Science, 1974."]
    ],
    decouvrir: {
      questions: [
        { q: "Lequel de ces raccourcis mentaux Kahneman a-t-il décrits ?",
          o: ["Juger un risque plus probable si un exemple vient facilement à l’esprit", "Choisir l’option la moins chère dès que les prix sont affichés", "Calculer parfaitement les probabilités avant de prendre une décision", "Ignorer les chiffres entendus juste avant de faire une estimation"], c: 0,
          e: "Nous nous trompons souvent, et toujours de la même façon." },
        { q: "Que sont les « nudges » inspirés par ses travaux ?",
          o: ["De petites incitations, comme les options par défaut", "Des impôts sur les comportements risqués, comme le tabac et l’alcool", "Des interdictions légales visant les achats impulsifs", "Des subventions massives versées aux ménages modestes"], c: 0,
          e: "Utilisés notamment par les gouvernements, ils s’appuient sur nos biais au lieu de les ignorer." }
      ],
      duree: 6,
      html: `
<h3>Un psychologue chez les économistes</h3>
<p>Daniel Kahneman (1934-2024), né à Tel-Aviv et élevé à Paris, survit enfant à l’Occupation. Psychologue, il étudie comment nous prenons nos décisions. Avec son ami Amos Tversky, il montre que nous nous trompons souvent, et toujours de la même façon. En 2002, il reçoit le prix Nobel d’économie.</p>
${vieKahneman}
<h3>Nos raccourcis mentaux</h3>
<p>Pour décider vite, notre cerveau utilise des raccourcis. Nous jugeons un risque plus probable si un exemple nous vient facilement à l’esprit. Nous nous laissons influencer par un chiffre entendu juste avant. Et la même information, présentée autrement, nous fait changer d’avis : sauver 200 personnes sur 600 ou en laisser mourir 400, c’est pareil, mais nous ne choisissons pas de la même façon.</p>
${cadrage}
<h3>Perdre fait plus mal que gagner</h3>
<p>Kahneman et Tversky montrent aussi que perdre 100 francs nous affecte plus que gagner 100 francs ne nous réjouit. Ces découvertes ont fondé l’économie comportementale et inspiré les « nudges », des petites incitations utilisées par les gouvernements, comme les options par défaut.</p>
<h3>À retenir</h3>
<p>Nous ne sommes pas les calculateurs parfaits des manuels d’économie. Le portrait complet présente la vie de Kahneman, ses découvertes et leurs limites.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      vie: "De Tel-Aviv à Paris, Jérusalem, Berkeley et Princeton.",
      epoque: "L’homme rationnel des économistes et les premières anomalies.",
      pensee: "Sept étapes, des heuristiques au bruit.",
      livres: "Des articles avec Tversky à Système 1, Système 2 et Noise.",
      cas: "L’armée israélienne, Amos Tversky, la crise de la réplication, les nudges.",
      objections: "Le laboratoire, des heuristiques rationnelles, la réplication, le paternalisme.",
      ecoles: "Simon et Allais, Tversky, Thaler, Shiller, Sunstein, les économistes du bonheur.",
      source: "Rien dans la vie n’est aussi important que vous le pensez.",
      quiz: "Cinq questions corrigées et une question sur le don d’organes en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
