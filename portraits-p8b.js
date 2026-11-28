/* Œconomia — portraits longs, lot 8 (b) : Thomas Piketty, Esther Duflo */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  /* =====================================================================
     THOMAS PIKETTY
     ===================================================================== */
  const viePiketty = lifeline(1971, 2025, [
    [1971, "naissance à Clichy", true], [1993, "doctorat à 22 ans", false], [1993, "enseigne au MIT", true], [2001, "Les Hauts Revenus en France", false],
    [2006, "École d’économie de Paris", true], [2013, "Le Capital au XXIe siècle", false], [2019, "Capital et idéologie", true], [2021, "Une brève histoire de l’égalité", false]
  ], "Thomas Piketty, né en 1971", "Directeur d’études à l’EHESS et professeur à l’École d’économie de Paris, Piketty a fait de l’histoire des inégalités un objet central de l’économie, grâce à des séries statistiques couvrant plus d’un siècle.");

  /* Courbe en U : part du décile supérieur dans le revenu national, valeurs arrondies d’après Le Capital au XXIe siècle */
  const courbeU = fig(290, (() => {
    const X = (a) => 70 + (a - 1910) * 5.3, Y = (v) => 240 - (v - 25) * 7.6;
    const us = [[1910, 41], [1920, 44], [1928, 49], [1940, 45], [1945, 36], [1950, 34], [1960, 34], [1970, 33], [1980, 35], [1990, 40], [2000, 46], [2010, 48]];
    const eu = [[1910, 46], [1920, 42], [1930, 41], [1940, 36], [1950, 31], [1960, 31], [1970, 30], [1980, 29], [1990, 31], [2000, 33], [2010, 34]];
    const pl = (d, c) => `<polyline points="${d.map(([a, v]) => `${X(a).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")}" style="fill:none; stroke:${c}; stroke-width:2.5"/>`;
    let s = `<text x="20" y="24" ${T}>La courbe en U : part des 10 % les plus aisés dans le revenu national</text>`;
    s += `<line x1="70" y1="40" x2="70" y2="240" style="stroke:var(--line); stroke-width:1.5"/><line x1="70" y1="240" x2="612" y2="240" style="stroke:var(--line); stroke-width:1.5"/>`;
    [30, 40, 50].forEach((v) => { s += `<line x1="70" y1="${Y(v)}" x2="612" y2="${Y(v)}" style="stroke:var(--line); stroke-width:0.6; stroke-dasharray:3 4"/><text x="62" y="${Y(v) + 4}" text-anchor="end" ${M}>${v} %</text>`; });
    [1910, 1930, 1950, 1970, 1990, 2010].forEach((a) => { s += `<text x="${X(a)}" y="258" text-anchor="middle" ${M}>${a}</text>`; });
    s += pl(us, "var(--serial)") + pl(eu, "var(--note)");
    s += `<text x="560" y="44" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">États-Unis</text>`;
    s += `<text x="604" y="198" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">Europe</text>`;
    return s;
  })(), "Valeurs arrondies d’après Le Capital au XXIe siècle (graphique 9.8) ; Europe : moyenne du Royaume-Uni, de la France, de l’Allemagne et de la Suède. Les inégalités, très fortes avant 1914, s’effondrent avec les guerres, la crise de 1929 et la fiscalité progressive, puis remontent depuis 1980, surtout aux États-Unis.", "Graphique de la part du décile supérieur, 1910-2010");

  const rg = fig(280, (() => {
    let s = `<text x="20" y="24" ${T}>La « contradiction centrale du capitalisme » : r &gt; g</text>`;
    s += node(20, 50, 280, 64, "r : rendement du capital", "environ 4 à 5 % par an sur longue période", "var(--gold)");
    s += node(340, 50, 280, 64, "g : croissance de l’économie", "souvent 1 à 2 % par an", "var(--note)");
    s += node(120, 150, 400, 64, "Les patrimoines hérités croissent plus vite", "que les revenus du travail et que l’économie", "var(--serial)");
    s += arrow(160, 116, 250, 148) + arrow(480, 116, 390, 148);
    s += `<text x="20" y="246" ${S}>Conséquence : la richesse se concentre, et l’héritage pèse de plus en plus. Remède proposé :</text>`;
    s += `<text x="20" y="264" ${S}>un impôt progressif sur le capital, idéalement coordonné au niveau international.</text>`;
    return s;
  })(), "Quand le rendement du capital dépasse durablement la croissance, il suffit aux détenteurs de patrimoine d’en réinvestir une partie pour que leur fortune croisse plus vite que l’économie. Les guerres et les impôts du XXe siècle ont interrompu ce mécanisme ; selon Piketty, rien ne garantit qu’il ne reprendra pas.", "Schéma de l’inégalité r supérieur à g");

  OEC.portraits["piketty"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Thomas Piketty, né en 1971, économiste français, a reconstitué avec de nombreux collègues l’histoire des inégalités de revenus et de patrimoines sur plus d’un siècle, à partir des données fiscales. Il a montré qu’elles ont suivi une courbe en U au XXe siècle.",
      "Dans Le Capital au XXIe siècle (2013), vendu à plus de deux millions et demi d’exemplaires, il soutient que lorsque le rendement du capital dépasse la croissance, r > g, la richesse héritée tend à se concentrer. Il propose un impôt progressif mondial sur le capital.",
      "Ses travaux ont remis la répartition au cœur de l’économie, contesté l’idée de Kuznets selon laquelle les inégalités baissent naturellement avec le développement, et nourri de vifs débats sur ses données et ses conclusions."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Thomas Piketty naît le 7 mai 1971 à Clichy, près de Paris. Ses parents, militants de l’extrême gauche dans leur jeunesse, se sont ensuite installés dans l’Aude pour élever des chèvres, avant de revenir à Paris. Brillant élève en mathématiques, il entre à dix-huit ans à l’École normale supérieure. Il soutient à vingt-deux ans, en 1993, une thèse sur la théorie de la redistribution des richesses, préparée entre l’EHESS et la London School of Economics.</p>
<p>Il enseigne ensuite deux ans au MIT, aux États-Unis. Il en revient déçu : les économistes américains lui semblent trop attachés aux modèles mathématiques et pas assez aux faits. De retour en France en 1995, il entre au CNRS, puis devient directeur d’études à l’EHESS en 2000. En 2001, il publie Les Hauts Revenus en France au XXe siècle, fondé sur les archives de l’impôt sur le revenu depuis 1915.</p>
${viePiketty}
<p>En 2006, il est le premier directeur de l’École d’économie de Paris, qu’il a contribué à fonder. Il reçoit en 2013 le prix Yrjö Jahnsson, décerné à un économiste européen de moins de quarante-cinq ans. La même année paraît Le Capital au XXIe siècle, dont la traduction anglaise, en 2014, devient un phénomène mondial. Il refuse la Légion d’honneur en 2015. Il codirige le Laboratoire sur les inégalités mondiales et la base de données World Inequality Database, et a conseillé plusieurs candidats de gauche en France.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Dans les années 1950, Simon Kuznets, qui avait lui-même étudié les données fiscales américaines, propose une hypothèse optimiste : les inégalités augmentent au début de l’industrialisation, puis diminuent naturellement avec le développement (<a href="#c-courbe-kuznets">voir courbe de Kuznets</a>). Cette idée, souvent présentée comme une loi, domine pendant des décennies.</p>
<p>Dans les années 1980 et 1990, la théorie économique s’intéresse peu à la répartition des richesses. Robert <a href="#eco-lucas">Lucas</a> écrit même en 2004 que se concentrer sur les questions de répartition est l’une des tendances les plus nuisibles pour une économie saine. Les inégalités sont surtout étudiées entre les salaires, à partir d’enquêtes qui saisissent mal les très hauts revenus et les patrimoines.</p>
<p>Pourtant, depuis 1980, les plus hauts revenus progressent fortement aux États-Unis et au Royaume-Uni. Piketty veut mesurer ces évolutions sur la longue durée, en revenant aux sources fiscales, qui couvrent le sommet de la distribution.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Les sources fiscales</h4>
<p><b>La question.</b> Comment mesurer ce que possèdent les plus riches ?</p>
<p><b>Son raisonnement.</b> Piketty utilise les déclarations d’impôt sur le revenu, disponibles depuis le début du XXe siècle, et sur les successions, qui remontent parfois au XIXe siècle, pour estimer la part des revenus et des patrimoines détenue par les plus riches, les 10 %, les 1 %, les 0,1 %. Avec Emmanuel Saez, il applique cette méthode aux États-Unis en 2003, puis un vaste réseau de chercheurs l’étend à des dizaines de pays.</p>
<p><b>Un exemple.</b> Les enquêtes auprès des ménages saisissent mal les très hauts revenus, car les plus riches y répondent peu. Les déclarations fiscales, elles, les enregistrent. Les séries obtenues sont aujourd’hui rassemblées dans une base de données mondiale en libre accès, la World Inequality Database.</p>
<h4>2. La courbe en U</h4>
<p><b>La question.</b> Les inégalités diminuent-elles naturellement avec le développement ?</p>
<p><b>Son raisonnement.</b> Les séries montrent que les inégalités étaient très fortes avant 1914, ont fortement baissé entre 1914 et 1945, sont restées faibles jusqu’aux années 1970, puis ont remonté. La baisse ne vient pas d’une loi naturelle du développement, comme le pensait Kuznets, mais des chocs des guerres, de la crise de 1929 et des politiques fiscales et sociales.</p>
<p><b>Un exemple.</b> En France, les 10 % les mieux payés recevaient environ 45 à 50 % des revenus avant 1914, et environ 30 à 35 % dans les années 1950 à 1970. Aux États-Unis, après une baisse comparable, leur part est remontée à près de la moitié des revenus.</p>
<p><a href="#c-courbe-kuznets">Pour aller plus loin, la notice « Courbe de Kuznets » →</a></p>
${courbeU}
<h4>3. Le retour du capital</h4>
<p><b>La question.</b> Le capital pèse-t-il plus qu’autrefois ?</p>
<p><b>Son raisonnement.</b> Piketty mesure le rapport entre le patrimoine privé total et le revenu national. En Europe, ce rapport valait six à sept années de revenu vers 1900, est tombé à deux ou trois après 1945, et est remonté à cinq ou six. Le capital, surtout immobilier et financier, retrouve un poids proche de celui de la Belle Époque.</p>
<p><b>Un exemple.</b> La hausse des prix de l’immobilier explique une grande partie de ce retour. Un appartement acheté dans une grande ville européenne dans les années 1990 vaut souvent aujourd’hui plusieurs fois son prix d’achat, bien plus que les salaires n’ont augmenté.</p>
<h4>4. r > g</h4>
<p><b>La question.</b> Pourquoi les fortunes héritées pèsent-elles de plus en plus ?</p>
<p><b>Son raisonnement.</b> Le rendement moyen du capital, r, a toujours été de l’ordre de 4 à 5 % par an, alors que la croissance, g, dépasse rarement 1 à 2 % sur longue période. Quand r est supérieur à g, les patrimoines existants croissent plus vite que l’économie, et l’héritage prend de plus en plus d’importance. Le XXe siècle, avec sa forte croissance et ses destructions, a été une exception.</p>
<p><b>Un exemple.</b> Avec un rendement de 5 % réinvesti, un patrimoine double en quatorze ans environ. Avec une croissance de 1 %, l’économie met environ soixante-dix ans à doubler. Il suffit de quelques générations pour que les héritiers prennent une place croissante.</p>
<p><a href="#c-r-g">Pour aller plus loin, la notice « r > g » →</a></p>
${rg}
<h4>5. Les « super-cadres »</h4>
<p><b>La question.</b> Pourquoi les très hauts salaires ont-ils explosé ?</p>
<p><b>Son raisonnement.</b> Aux États-Unis, la hausse des inégalités depuis 1980 vient d’abord des très hauts salaires des dirigeants. Piketty l’explique par la baisse des taux marginaux d’imposition, qui a encouragé les dirigeants à négocier des rémunérations plus élevées, plutôt que par une hausse de leur productivité.</p>
<p><b>Un exemple.</b> Le taux marginal supérieur de l’impôt fédéral sur le revenu dépasse 90 % aux États-Unis dans les années 1950. Il tombe à 28 % en 1988. Pour Piketty, quand un dollar de plus est presque entièrement taxé, personne ne se bat pour l’obtenir. Quand il ne l’est presque plus, la négociation en vaut la peine.</p>
<h4>6. L’impôt mondial sur le capital</h4>
<p><b>La question.</b> Comment limiter la concentration des patrimoines ?</p>
<p><b>Son raisonnement.</b> Piketty propose un impôt progressif annuel sur le patrimoine, coordonné au niveau international, ainsi qu’une fiscalité très progressive sur les hauts revenus et les successions. Il reconnaît lui-même que cet impôt mondial est une « utopie utile ».</p>
<p><b>Un exemple.</b> L’idée progresse. En 2024, sous présidence brésilienne, le G20 discute d’un impôt minimum d’environ 2 % sur le patrimoine des milliardaires, sur la base d’un rapport de l’économiste Gabriel Zucman, proche de Piketty.</p>
<h4>7. Les idéologies</h4>
<p><b>La question.</b> Pourquoi les sociétés acceptent-elles leurs inégalités ?</p>
<p><b>Son raisonnement.</b> Dans Capital et idéologie (2019), Piketty élargit l’analyse. Chaque société justifie ses inégalités par une idéologie, sociétés d’ordres, sociétés propriétaristes, colonialisme, communisme, hypercapitalisme. Ces idéologies peuvent changer, et les inégalités avec elles. Dans Une brève histoire de l’égalité (2021), il souligne la tendance de long terme vers plus d’égalité, obtenue par des luttes politiques.</p>
<p><b>Un exemple.</b> Lorsque le Royaume-Uni abolit l’esclavage dans ses colonies en 1833, il indemnise largement les propriétaires d’esclaves, et non les esclaves libérés. Pour Piketty, l’épisode montre jusqu’où peut aller la sacralisation de la propriété.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Les Hauts Revenus en France au XXe siècle (2001).</b> Le premier grand travail sur les séries fiscales, qui fonde sa méthode.</p>
<p><b>« Income Inequality in the United States, 1913-1998 » (2003), avec Emmanuel Saez.</b> L’article qui révèle l’ampleur de la hausse des hauts revenus américains.</p>
<p><b>Le Capital au XXIe siècle (2013).</b> Son grand livre, près de mille pages, devenu un succès mondial.</p>
<p><b>Capital et idéologie (2019).</b> Une histoire mondiale des régimes inégalitaires et de leurs justifications.</p>
<p><b>Une brève histoire de l’égalité (2021).</b> Une synthèse courte et accessible de ses travaux.</p>` }
    ],
    cas: [
      { titre: "Un best-seller inattendu", html: `
<p>En avril 2014, la traduction anglaise du Capital au XXIe siècle se hisse en tête des ventes d’Amazon aux États-Unis, fait rarissime pour un livre d’économie de près de sept cents pages en anglais. Piketty est reçu à la Maison-Blanche et au Trésor, et devient une célébrité. Les commentateurs relèvent toutefois qu’une étude des données de lecture électronique suggère que la plupart des acheteurs n’ont pas dépassé les premières dizaines de pages.</p>` },
      { titre: "La controverse du Financial Times", html: `
<p>En mai 2014, le Financial Times accuse Piketty d’erreurs dans ses données sur les patrimoines, notamment au Royaume-Uni, qui auraient exagéré la remontée des inégalités. Piketty répond point par point, en expliquant ses choix de sources. La plupart des économistes concluent que les critiques ne remettent pas en cause ses conclusions générales, mais l’épisode souligne la fragilité des données sur les patrimoines.</p>` },
      { titre: "Le refus de la Légion d’honneur", html: `
<p>Le 1er janvier 2015, Piketty apprend qu’il figure dans la promotion de la Légion d’honneur. Il refuse, en déclarant que ce n’est pas au gouvernement de décider qui est honorable, et qu’il ferait mieux de se consacrer à la relance de la croissance en France et en Europe. Ce geste est interprété comme une critique de la politique économique de François Hollande, dont il avait été proche.</p>` },
      { titre: "La base mondiale des inégalités", html: `
<p>Avec Facundo Alvaredo, Lucas Chancel, Emmanuel Saez, Gabriel Zucman et plus d’une centaine de chercheurs, Piketty a construit la World Inequality Database, en accès libre, qui rassemble des séries sur les revenus et les patrimoines de plus de cent pays. Le Rapport sur les inégalités mondiales, publié régulièrement depuis 2018, est devenu une référence pour les journalistes et les gouvernements.</p>` }
    ],
    objections: `
<h4>1. Le logement</h4>
<p>L’économiste Matthew Rognlie a montré en 2015 que l’essentiel de la hausse de la part du capital dans le revenu depuis 1950 vient du logement, c’est-à-dire de la hausse des prix immobiliers, et non d’une accumulation générale de capital productif.</p>
<h4>2. r > g n’est pas une loi</h4>
<p>Plusieurs économistes, dont Acemoglu et Robinson en 2015, contestent les « lois générales du capitalisme ». Le rendement du capital pourrait baisser à mesure que le capital s’accumule, et les inégalités dépendraient davantage des institutions politiques et des choix fiscaux que d’une formule. Piketty a d’ailleurs précisé que r > g n’était pas la cause principale de la hausse récente des inégalités.</p>
<h4>3. Les données américaines</h4>
<p>Gerald Auten et David Splinter estiment que la hausse des hauts revenus aux États-Unis est bien plus faible que chez Piketty et Saez, une fois pris en compte les transferts, les impôts et certains changements fiscaux. Le débat technique reste ouvert.</p>
<h4>4. L’impôt mondial sur le capital</h4>
<p>Beaucoup jugent l’impôt mondial sur le patrimoine irréaliste, ou dangereux pour l’investissement. Les impôts nationaux sur la fortune ont souvent été abandonnés, comme en France en 2018 pour les patrimoines financiers. La Suisse, qui en conserve un au niveau cantonal, est un cas souvent cité.</p>`,
    ecoles: `
<p><b>Karl <a href="#eco-marx">Marx</a></b> et <b>David <a href="#eco-ricardo">Ricardo</a></b> lui inspirent le titre et la question de la répartition, même s’il rejette leurs conclusions.</p>
<p><b>Simon Kuznets</b> est à la fois son modèle méthodologique et sa cible théorique.</p>
<p><b>Anthony Atkinson</b>, pionnier des inégalités, a été son mentor et collaborateur.</p>
<p><b>Emmanuel Saez</b>, <b>Gabriel Zucman</b> et <b>Lucas Chancel</b> prolongent ses travaux sur les revenus, les patrimoines et l’évasion fiscale.</p>
<p><b>Daron <a href="#eco-acemoglu">Acemoglu</a></b> lui oppose le rôle premier des institutions.</p>
<p><b>Branko Milanović</b> étudie les inégalités mondiales et la « courbe de l’éléphant ».</p>`,
    source: {
      titre: "Thomas Piketty, Le Capital au XXIe siècle, 2013, introduction",
      texte: "Lorsque le taux de rendement du capital dépasse durablement le taux de croissance de la production et du revenu, le capitalisme produit mécaniquement des inégalités arbitraires et insoutenables.",
      notes: `
<p><b>« Mécaniquement ».</b> Le mot signifie qu’il n’est pas besoin de supposer des imperfections de marché : il suffit que r reste supérieur à g pour que les patrimoines accumulés prennent le pas sur les revenus du travail.</p>
<p><b>« Arbitraires et insoutenables ».</b> Piketty ne critique pas toute inégalité, mais celles qui ne correspondent plus au mérite ou à l’utilité commune, comme les fortunes héritées. Il les juge contraires aux valeurs des sociétés démocratiques.</p>
<p><b>La suite de la phrase.</b> Il ajoute qu’il existe des moyens pour que la démocratie reprenne le contrôle du capitalisme, sans renoncer à l’ouverture économique : c’est le rôle de l’impôt progressif.</p>`
    },
    quiz: [
      { q: "Quelles sources Piketty utilise-t-il principalement ?",
        o: ["Des sondages réalisés auprès des ménages sur leur patrimoine", "Les données fiscales sur les revenus et les successions", "Les cours de la Bourse et les rendements des actions", "Les bilans comptables des grandes entreprises du pays"], c: 1,
        e: "Elles couvrent bien le sommet de la distribution, depuis le début du XXe siècle." },
      { q: "Quelle forme prend l’évolution des inégalités au XXe siècle ?",
        o: ["Une baisse continue, grâce à la croissance et à l’instruction", "Une courbe en U, forte baisse de 1914 à 1945 puis remontée", "Une hausse continue, au rythme de l’enrichissement des plus riches", "Une courbe en cloche, hausse jusqu’en 1945 puis baisse continue"], c: 1,
        e: "Ce qui contredit la courbe de Kuznets." },
      { q: "Que signifie l’inégalité r > g ?",
        o: ["Que les revenus augmentent plus vite que les patrimoines", "Que le capital rapporte plus que la croissance de l’économie", "Que les taux d’intérêt sont négatifs pour les épargnants", "Que le rendement du capital dépasse le taux d’intérêt officiel"], c: 1,
        e: "Les patrimoines hérités croissent alors plus vite que l’économie." },
      { q: "Selon Piketty, qu’est-ce qui explique la baisse des inégalités entre 1914 et 1945 ?",
        o: ["Une loi naturelle du développement, qui réduit les écarts", "Les guerres, la crise de 1929 et la fiscalité progressive", "Le progrès technique, qui a profité à tous les travailleurs", "Le recul de l’immigration, qui a fait monter les salaires"], c: 1,
        e: "Des chocs et des choix politiques, pas une loi automatique." },
      { q: "Quel remède principal Piketty propose-t-il ?",
        o: ["Un revenu universel versé à tous et financé par la TVA", "Un impôt progressif sur le capital, au niveau mondial", "La nationalisation des grandes banques et entreprises", "Une baisse de l’impôt sur le revenu des classes moyennes"], c: 1,
        e: "Il le qualifie lui-même d’« utopie utile »." }
    ],
    ouverte: {
      q: "La Suisse prélève un impôt cantonal sur la fortune, mais le patrimoine y reste très concentré. Le 30 novembre 2025, une initiative proposant de taxer à 50 % les successions de plus de 50 millions de francs a été rejetée par près de 80 % des votants. Que dirait Piketty du cas suisse ?",
      r: "Le cas suisse est intéressant pour Piketty, car il contredit en partie les adversaires de l’impôt sur la fortune : la Suisse en prélève un dans tous les cantons depuis longtemps, sans que cela l’empêche d’être riche et attractive. Mais les taux sont faibles, souvent inférieurs à 1 % par an, et certaines formes de patrimoine sont peu taxées. Les travaux de Reto Föllmi et Isabel Martínez montrent que les inégalités de revenus en Suisse ont moins varié au XXe siècle que dans d’autres pays, et que la concentration du patrimoine y est l’une des plus fortes d’Europe, avec une part importante d’héritages. Piketty y verrait la confirmation du poids croissant de l’héritage, et défendrait une fiscalité plus progressive des grandes successions, aujourd’hui exonérées pour les descendants directs dans la plupart des cantons. Le rejet massif de l’initiative de 2025 montre cependant que les électeurs suisses craignent le départ des grandes fortunes et leurs effets sur les recettes fiscales et les entreprises familiales. Il illustre la difficulté que Piketty reconnaît lui-même : sans coordination internationale, un pays seul hésite à taxer davantage les patrimoines mobiles."
    },
    lectures: [
      ["Accessible", "Thomas Piketty, Une brève histoire de l’égalité, 2021."],
      ["Accessible", "World Inequality Lab, Rapport sur les inégalités mondiales, résumé, en accès libre sur wid.world."],
      ["Intermédiaire", "Thomas Piketty, Le Capital au XXIe siècle, 2013, introduction et parties 2 et 3."],
      ["Intermédiaire", "Branko Milanović, Inégalités mondiales, 2016."],
      ["Recherche", "Thomas Piketty et Emmanuel Saez, « Income Inequality in the United States, 1913-1998 », Quarterly Journal of Economics, 2003 ; Daron Acemoglu et James Robinson, « The Rise and Decline of General Laws of Capitalism », Journal of Economic Perspectives, 2015."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi Piketty passe-t-il des années dans les archives de l’impôt ?",
          o: ["Pour mesurer les inégalités sur plus d’un siècle", "Pour calculer le montant de la dette publique de l’État", "Pour étudier l’ampleur de la fraude fiscale des plus riches", "Pour écrire l’histoire de l’impôt sur le revenu en France"], c: 0,
          e: "Il veut une économie qui s’appuie davantage sur les faits et l’histoire." },
        { q: "Selon Piketty, qu’est-ce qui a fait baisser les inégalités entre 1914 et 1945 ?",
          o: ["Des chocs et des choix politiques, guerres et impôts progressifs", "Une loi naturelle du développement, qui réduit les écarts", "Le progrès technique, qui a profité à tous les salariés du pays", "La baisse générale des salaires, qui a rapproché tous les revenus"], c: 0,
          e: "La baisse n’était donc pas automatique." }
      ],
      duree: 6,
      html: `
<h3>Le chercheur des archives fiscales</h3>
<p>Thomas Piketty, né en 1971 près de Paris, obtient son doctorat à vingt-deux ans. Après deux ans au MIT, il revient en France, convaincu que l’économie doit s’appuyer davantage sur les faits et l’histoire. Il passe des années dans les archives de l’impôt pour mesurer les inégalités sur plus d’un siècle.</p>
${viePiketty}
<h3>Une courbe en U</h3>
<p>Ses séries montrent que les inégalités étaient énormes avant 1914, ont fortement baissé avec les guerres, la crise de 1929 et les impôts progressifs, puis sont reparties à la hausse depuis 1980, surtout aux États-Unis. La baisse n’était donc pas automatique : elle venait de chocs et de choix politiques.</p>
${courbeU}
<h3>r > g</h3>
<p>Dans Le Capital au XXIe siècle (2013), Piketty explique que le capital rapporte souvent plus que la croissance de l’économie. Les grandes fortunes, souvent héritées, augmentent alors plus vite que les salaires. Il propose un impôt progressif sur le patrimoine, à l’échelle internationale.</p>
<h3>À retenir</h3>
<p>Piketty a remis la question des inégalités au centre de l’économie. Le portrait complet présente sa méthode, ses idées et les nombreuses critiques qu’elles ont suscitées.</p>`,
      quiz: [1, 2]
    },
    resumes: {
      vie: "De Clichy à l’ENS, au MIT, à l’EHESS et à l’École d’économie de Paris.",
      epoque: "La courbe de Kuznets et le désintérêt pour la répartition.",
      pensee: "Sept étapes, des sources fiscales aux idéologies.",
      livres: "Des Hauts Revenus en France à Une brève histoire de l’égalité.",
      cas: "Un best-seller, la controverse du Financial Times, la Légion d’honneur, la base mondiale.",
      objections: "Le logement, r > g n’est pas une loi, les données américaines, l’impôt mondial.",
      ecoles: "Marx et Ricardo, Kuznets, Atkinson, Saez et Zucman, Acemoglu, Milanović.",
      source: "Quand r dépasse g, des inégalités arbitraires et insoutenables.",
      quiz: "Cinq questions corrigées et une question sur la fiscalité suisse du patrimoine.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     ESTHER DUFLO
     ===================================================================== */
  const vieDuflo = lifeline(1972, 2026, [
    [1972, "naissance à Paris", true], [1999, "doctorat au MIT", false], [2003, "fondation de J-PAL", true], [2010, "médaille Clark", false],
    [2011, "Repenser la pauvreté", true], [2019, "prix Nobel", false], [2026, "université de Zurich", true]
  ], "Esther Duflo, née en 1972", "Normalienne, professeure au MIT pendant plus de vingt-cinq ans, Esther Duflo devient en 2019, à quarante-six ans, la plus jeune lauréate du prix Nobel d’économie et la deuxième femme à le recevoir.");

  const essai = fig(310, (() => {
    let s = `<text x="20" y="24" ${T}>L’essai randomisé contrôlé : la méthode</text>`;
    s += node(220, 40, 200, 58, "Villages comparables", "choisis pour l’étude", "var(--ink-soft)");
    s += node(40, 140, 240, 58, "Groupe traité", "reçoit le programme", "var(--note)");
    s += node(360, 140, 240, 58, "Groupe témoin", "ne le reçoit pas (encore)", "var(--line)");
    s += arrow(280, 100, 170, 138) + arrow(360, 100, 470, 138);
    s += `<text x="320" y="128" text-anchor="middle" style="fill:var(--gold); font:700 12px Manrope, sans-serif">tirage au sort</text>`;
    s += node(170, 236, 300, 58, "Comparer les résultats", "la différence mesure l’effet du programme", "var(--gold)");
    s += arrow(160, 200, 250, 234) + arrow(480, 200, 390, 234);
    return s;
  })(), "Comme dans un essai clinique, le tirage au sort garantit que les deux groupes ne diffèrent en moyenne que par le programme évalué. Toute différence de résultat peut donc lui être attribuée. Duflo et ses collègues ont fait de cette méthode, empruntée à la médecine, un outil central de l’économie du développement.", "Schéma d’un essai randomisé");

  const vaccins = fig(280, (() => {
    let s = `<text x="20" y="24" ${T}>Rajasthan (Inde) : part des enfants entièrement vaccinés</text>`;
    const base = 220;
    [["Villages témoins", 6, "var(--line)"], ["Camps de vaccination", 18, "var(--note)"], ["Camps + un sac de lentilles", 39, "var(--gold)"]].forEach(([n, v, c], i) => {
      const x = 90 + i * 170, h = v * 4;
      s += `<rect x="${x}" y="${base - h}" width="120" height="${h}" rx="4" style="fill:${c}; opacity:.85"/>`;
      s += `<text x="${x + 60}" y="${base - h - 8}" text-anchor="middle" style="fill:var(--ink); font:700 13px Manrope, sans-serif">${v} %</text>`;
      s += `<text x="${x + 60}" y="${base + 20}" text-anchor="middle" ${S}>${n}</text>`;
    });
    s += `<line x1="70" y1="${base}" x2="590" y2="${base}" style="stroke:var(--line); stroke-width:1.5"/>`;
    s += `<text x="20" y="266" ${S}>Une petite incitation, un kilo de lentilles par vaccination, double l’effet des camps.</text>`;
    return s;
  })(), "D’après Abhijit Banerjee, Esther Duflo, Rachel Glennerster et Dhruva Kothari, British Medical Journal, 2010 (valeurs arrondies). Le coût par enfant vacciné est même plus faible avec les lentilles, car les infirmières, payées de toute façon, vaccinent davantage d’enfants.", "Diagramme en barres de la vaccination selon le programme");

  OEC.portraits["duflo"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Esther Duflo, née en 1972 à Paris, professeure au MIT, prix Nobel 2019 avec Abhijit Banerjee et Michael Kremer, a transformé l’économie du développement en y introduisant à grande échelle les essais randomisés contrôlés, empruntés à la médecine.",
      "Plutôt que de chercher une grande théorie de la pauvreté, elle découpe le problème en questions précises : faut-il distribuer gratuitement les moustiquaires, comment réduire l’absentéisme des enseignants, comment encourager la vaccination ? Elle teste les réponses sur le terrain.",
      "Avec Banerjee, elle a fondé le laboratoire J-PAL, dont les évaluations ont influencé des programmes touchant des centaines de millions de personnes. Sa méthode a aussi suscité des critiques sur sa portée et son éthique."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Esther Duflo naît le 25 octobre 1972 à Paris. Sa mère est pédiatre et participe à des missions humanitaires, notamment au Salvador et au Rwanda ; son père est mathématicien. Enfant, elle est marquée par les récits de sa mère et par des livres sur la pauvreté dans le monde. Elle entre en 1992 à l’École normale supérieure, où elle étudie l’histoire et l’économie. Un séjour d’un an à Moscou, en 1993-1994, où elle observe les conseils de grands économistes au gouvernement russe, la convainc que l’économie peut avoir des effets concrets.</p>
<p>Elle part au MIT, où elle obtient son doctorat en 1999 sous la direction d’Abhijit Banerjee et de Joshua Angrist. Sa thèse étudie notamment l’effet d’un grand programme de construction d’écoles en Indonésie dans les années 1970. Elle est aussitôt recrutée comme professeure au MIT, un fait rare.</p>
${vieDuflo}
<p>En 2003, elle fonde avec Abhijit Banerjee et Sendhil Mullainathan le Laboratoire d’action contre la pauvreté, J-PAL, qui réunit aujourd’hui des centaines de chercheurs. Elle reçoit en 2010 la médaille John Bates Clark. En 2015, elle épouse Abhijit Banerjee, avec qui elle écrit Repenser la pauvreté (2011) et Économie utile pour des temps difficiles (2019). Le prix Nobel lui est attribué en 2019. Le couple a annoncé rejoindre en 2026 l’université de Zurich, pour y diriger un nouveau centre de recherche sur le développement et les politiques publiques.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Au début des années 2000, le débat sur la pauvreté mondiale oppose deux camps. Jeffrey Sachs soutient que les pays pauvres sont pris dans des « pièges à pauvreté » et qu’un grand effort d’aide internationale permettrait d’en sortir. William Easterly répond que l’aide a largement échoué, et que les solutions doivent venir des marchés et des initiatives locales.</p>
<p>Duflo et Banerjee jugent ce débat trop général : on ne peut pas savoir si « l’aide » marche en général. Il faut se demander quels programmes précis fonctionnent, pour qui et pourquoi. Or les évaluations sérieuses sont rares : on compare souvent les bénéficiaires d’un programme à d’autres personnes très différentes.</p>
<p>En 1997, le gouvernement mexicain a évalué par tirage au sort son grand programme de transferts sociaux, Progresa. Michael Kremer a mené au Kenya des essais sur l’éducation. Duflo s’inscrit dans ce mouvement et le transforme en programme de recherche mondial.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Découper la pauvreté en questions</h4>
<p><b>La question.</b> Comment faire reculer la pauvreté ?</p>
<p><b>Son raisonnement.</b> Pour Duflo, la lutte contre la pauvreté avance par une multitude de petites questions concrètes, auxquelles on peut répondre rigoureusement. Ces petits progrès, accumulés, finissent par faire une grande différence.</p>
<p><b>Un exemple.</b> Plutôt que de se demander si « l’aide au développement marche », on peut se demander si des moustiquaires distribuées gratuitement sont autant utilisées que des moustiquaires vendues. La réponse, établie au Kenya par Jessica Cohen et Pascaline Dupas, est oui. Duflo reçoit le prix Nobel en 2019 avec Abhijit Banerjee et Michael Kremer.</p>
<p><a href="#c-capabilites">Pour aller plus loin, la notice « Capabilités » →</a></p>
<h4>2. L’essai randomisé</h4>
<p><b>La question.</b> Comment savoir si un programme fonctionne vraiment ?</p>
<p><b>Son raisonnement.</b> Pour mesurer l’effet d’un programme, on tire au sort, parmi des villages, des écoles ou des personnes comparables, ceux qui en bénéficieront. Le hasard garantit que les deux groupes sont semblables en moyenne. La différence de résultats mesure donc l’effet du programme.</p>
<p><b>Un exemple.</b> À la fin des années 1990, le Mexique lance Progresa, qui verse de l’argent aux familles pauvres à condition que les enfants aillent à l’école et chez le médecin. Les villages qui en bénéficient en premier sont tirés au sort, ce qui permet de prouver que le programme augmente la scolarisation. Il est ensuite étendu à tout le pays et imité ailleurs.</p>
${essai}
<h4>3. Les petites incitations</h4>
<p><b>La question.</b> Pourquoi de petits détails changent-ils beaucoup les comportements ?</p>
<p><b>Son raisonnement.</b> Les expériences montrent que de petits obstacles ou de petites incitations ont souvent de grands effets. Une démarche reportée, une file d’attente, un moment mal choisi suffisent à faire renoncer, et un petit cadeau ou une offre faite au bon moment suffisent à faire agir.</p>
<p><b>Un exemple.</b> Au Rajasthan, offrir un sac de lentilles aux familles qui font vacciner leurs enfants fait passer la part d’enfants complètement vaccinés de 18 % à 39 %. Au Kenya, avec Michael Kremer et Jonathan Robinson, Duflo montre que proposer d’acheter de l’engrais juste après la récolte, quand les paysans ont de l’argent, augmente fortement son utilisation.</p>
<p><a href="#c-aversion-pertes">Pour aller plus loin, la notice « Aversion aux pertes », sur les biais étudiés par l’économie comportementale →</a></p>
${vaccins}
<h4>4. La psychologie des pauvres</h4>
<p><b>La question.</b> Les pauvres font-ils de mauvais choix ?</p>
<p><b>Son raisonnement.</b> Duflo et Banerjee insistent sur le fait que les pauvres ne sont ni plus ni moins rationnels que les autres, mais qu’ils doivent prendre beaucoup plus de décisions difficiles, sans filet de sécurité. Le manque d’assurance, de crédit et d’information pèse sur leurs choix.</p>
<p><b>Un exemple.</b> Dans un pays riche, l’eau du robinet est potable, les vaccins sont rappelés par le médecin et l’assurance maladie est souvent obligatoire. Un paysan pauvre doit décider lui-même, chaque jour, de traiter son eau, de vacciner ses enfants ou d’assurer sa récolte.</p>
<h4>5. Le microcrédit réévalué</h4>
<p><b>La question.</b> Le microcrédit sort-il les gens de la pauvreté ?</p>
<p><b>Son raisonnement.</b> Le microcrédit était présenté dans les années 2000 comme une solution miracle. Les essais randomisés menés à Hyderabad, en Inde, et dans plusieurs autres pays montrent des effets réels mais modestes. Il aide certains entrepreneurs, sans sortir massivement les ménages de la pauvreté.</p>
<p><b>Un exemple.</b> En 2006, le prix Nobel de la paix est attribué à Muhammad Yunus et à la Grameen Bank, pionniers du microcrédit au Bangladesh. Les évaluations publiées ensuite, dont celle de Duflo et Banerjee à Hyderabad, invitent à des attentes plus réalistes.</p>
<p><a href="#c-asymetrie-information">Pour aller plus loin, la notice « Asymétrie d’information », sur les difficultés du crédit aux pauvres →</a></p>
<h4>6. Du laboratoire à la politique</h4>
<p><b>La question.</b> Comment passer d’une expérience réussie à une politique ?</p>
<p><b>Son raisonnement.</b> Les programmes qui réussissent peuvent être étendus. L’approche « enseigner au bon niveau » de l’ONG indienne Pratham, qui regroupe les élèves selon leur niveau réel, a été évaluée par le laboratoire J-PAL, fondé en 2003 par Duflo, Banerjee et Sendhil Mullainathan, puis adoptée dans plusieurs pays.</p>
<p><b>Un exemple.</b> Duflo compare l’économiste à un « plombier », qui doit régler les détails concrets de la mise en œuvre. Une bonne idée échoue souvent pour une raison pratique, des cahiers qui n’arrivent pas ou des enseignants absents, que seul le terrain révèle.</p>
<h4>7. Une économie utile</h4>
<p><b>La question.</b> L’économie peut-elle éclairer les grands débats des pays riches ?</p>
<p><b>Son raisonnement.</b> Dans Économie utile pour des temps difficiles (2019), Duflo et Banerjee appliquent cette démarche à l’immigration, au commerce, à la croissance, aux inégalités et au climat. Ils plaident pour une économie modeste, attentive aux données et à la dignité des personnes.</p>
<p><b>Un exemple.</b> Sur l’immigration, ils rappellent les travaux de David Card sur l’arrivée soudaine de quelque 125 000 Cubains à Miami en 1980. Les salaires et l’emploi des habitants peu qualifiés n’en ont guère souffert, contrairement à ce que suggère l’intuition. George Borjas a contesté ce résultat en 2017, et le débat reste vif parmi les spécialistes.</p>` },
      { id: "livres", titre: "Les livres et articles qui comptent", html: `
<p><b>« Schooling and Labor Market Consequences of School Construction in Indonesia » (2001).</b> Sa thèse, qui mesure les effets d’un grand programme de construction d’écoles.</p>
<p><b>« Women as Policy Makers » (2004), avec Raghabendra Chattopadhyay.</b> En Inde, les villages où la présidence du conseil est réservée à une femme, par tirage au sort, investissent davantage dans l’eau potable.</p>
<p><b>Lutter contre la pauvreté (2010, deux tomes).</b> Ses leçons au Collège de France, où elle a occupé en 2008-2009 la chaire annuelle Savoirs contre pauvreté.</p>
<p><b>Repenser la pauvreté (2011), avec Abhijit Banerjee.</b> Son livre le plus lu, accessible à tous.</p>
<p><b>Économie utile pour des temps difficiles (2019), avec Abhijit Banerjee.</b> Les grands débats contemporains vus par les données.</p>` }
    ],
    cas: [
      { titre: "Les caméras des écoles d’Udaipur", html: `
<p>Dans les écoles rurales du Rajasthan gérées par une ONG, les enseignants étaient absents environ 40 % des jours d’école. Duflo, Rema Hanna et Stephen Ryan évaluent un programme simple : les enseignants doivent se photographier avec leurs élèves au début et à la fin de chaque journée, avec un appareil photo dont la date ne peut être modifiée, et leur salaire dépend des jours de présence. L’absentéisme diminue de moitié, et les résultats des élèves progressent.</p>` },
      { titre: "Les moustiquaires gratuites", html: `
<p>Faut-il faire payer les moustiquaires contre le paludisme, pour éviter qu’elles soient gaspillées ? Un essai mené au Kenya par Jessica Cohen et Pascaline Dupas, membres du réseau J-PAL, montre que même un prix modeste réduit fortement le nombre de familles qui en achètent, sans améliorer leur usage. La distribution gratuite est donc plus efficace. Ces résultats ont contribué au choix de la gratuité par les grandes organisations de santé.</p>` },
      { titre: "La plus jeune lauréate", html: `
<p>Le 14 octobre 2019, Esther Duflo reçoit le prix Nobel avec Abhijit Banerjee et Michael Kremer. À quarante-six ans, elle est la plus jeune lauréate de l’histoire du prix d’économie, et la deuxième femme après Elinor <a href="#eco-ostrom">Ostrom</a>. Elle déclare espérer que ce prix encouragera d’autres femmes à se lancer dans l’économie. Le couple verse l’argent du prix à un fonds de recherche sur la pauvreté.</p>` },
      { titre: "Le départ des États-Unis", html: `
<p>Après plus de vingt-cinq ans au MIT, Duflo et Banerjee annoncent qu’ils rejoindront l’université de Zurich, où un centre de recherche consacré au développement, à l’éducation et aux politiques publiques est créé pour eux grâce à une fondation privée. Ce départ fait de la Suisse l’un des nouveaux pôles de l’économie expérimentale du développement.</p>` }
    ],
    objections: `
<h4>1. La validité externe</h4>
<p>Angus Deaton, prix Nobel 2015, rappelle qu’un résultat obtenu dans un village du Kenya ne se transpose pas forcément ailleurs. Les essais mesurent l’effet moyen d’un programme dans un contexte précis, sans toujours expliquer pourquoi il fonctionne.</p>
<h4>2. Des questions trop petites</h4>
<p>Lant Pritchett et d’autres reprochent à l’approche de se concentrer sur des « petites » questions, alors que la sortie de la pauvreté de masse, en Chine ou en Corée du Sud, est venue de la croissance économique, de l’industrialisation et des institutions, qu’aucun essai randomisé ne peut évaluer (<a href="#eco-acemoglu">voir Acemoglu</a>).</p>
<h4>3. L’éthique</h4>
<p>Tirer au sort qui reçoit un programme utile pose des questions morales, surtout quand des chercheurs de pays riches mènent des expériences sur des populations pauvres. Les défenseurs de la méthode répondent que les ressources étant limitées, le tirage au sort est souvent le moyen le plus juste de répartir un programme qu’on ne peut pas offrir à tous immédiatement.</p>
<h4>4. Le poids des chercheurs</h4>
<p>Certains critiques estiment que les essais randomisés ont pris une place excessive dans l’économie du développement, au détriment d’autres méthodes, et donnent un pouvoir important aux grandes universités américaines dans le choix des politiques des pays pauvres.</p>`,
    ecoles: `
<p><b>Abhijit Banerjee</b> et <b>Michael Kremer</b> sont ses colauréats et compagnons de recherche.</p>
<p><b>Amartya <a href="#eco-sen">Sen</a></b> a ouvert la voie à une économie centrée sur la pauvreté concrète et les capabilités.</p>
<p><b>Joshua Angrist</b>, son codirecteur de thèse, a développé les méthodes de mesure des effets causaux.</p>
<p><b>Daniel <a href="#eco-kahneman">Kahneman</a></b> et l’économie comportementale éclairent ses résultats.</p>
<p><b>Pascaline Dupas</b>, <b>Rachel Glennerster</b> et le réseau J-PAL multiplient les évaluations dans le monde.</p>
<p><b>Angus Deaton</b> est son principal critique méthodologique.</p>`,
    source: {
      titre: "Esther Duflo, « The Economist as Plumber », conférence Richard T. Ely, American Economic Review, 2017",
      texte: "À mesure que les économistes aident les gouvernements à concevoir de nouvelles politiques, ils endossent une responsabilité supplémentaire : s’occuper des détails de leur mise en œuvre et, pour cela, adopter l’état d’esprit d’un plombier.",
      notes: `
<p><b>L’image du plombier.</b> Duflo compare l’économiste traditionnel à un ingénieur qui dessine les grands principes d’un système. Elle soutient qu’il doit aussi être un plombier, qui installe les tuyaux, repère les fuites et ajuste ce qui ne marche pas.</p>
<p><b>Les détails comptent.</b> Un programme bien conçu sur le papier peut échouer à cause d’un formulaire trop compliqué, d’un délai de paiement ou d’un agent mal informé. Ces détails, souvent ignorés par la théorie, déterminent le succès des politiques.</p>
<p><b>Une économie modeste.</b> Cette conférence résume sa vision : moins de grandes théories, davantage d’expérimentation, d’humilité et d’attention aux personnes concernées.</p>`
    },
    quiz: [
      { q: "Quelle méthode Duflo a-t-elle diffusée en économie du développement ?",
        o: ["La modélisation macroéconomique", "L’essai randomisé contrôlé", "L’analyse de la Bourse", "L’étude approfondie d’un seul village"], c: 1,
        e: "Empruntée aux essais cliniques en médecine." },
      { q: "Pourquoi tire-t-on au sort les bénéficiaires d’un programme dans un essai ?",
        o: ["Pour réduire les coûts de l’évaluation du programme sur le terrain", "Pour que les groupes se ressemblent et que l’écart mesure l’effet", "Pour gagner du temps lors du lancement du programme dans les villages", "Pour que les familles les plus pauvres soient servies en premier"], c: 1,
        e: "Le hasard élimine les autres différences entre les groupes." },
      { q: "Quel effet a eu l’offre d’un sac de lentilles au Rajasthan ?",
        o: ["Elle n’a eu aucun effet mesurable sur la vaccination des enfants", "Elle a fortement augmenté la part d’enfants entièrement vaccinés", "Elle a réduit la vaccination, les familles se méfiant du cadeau", "Elle a surtout amélioré la nutrition des enfants de la région"], c: 1,
        e: "De 18 % à 39 % d’enfants entièrement vaccinés." },
      { q: "Que reproche Angus Deaton aux essais randomisés ?",
        o: ["D’être trop chers pour être menés à grande échelle par les États", "Que leurs résultats ne valent pas forcément dans d’autres contextes", "D’être trop théoriques et trop éloignés des réalités du terrain", "D’être financés par des fondations privées, donc partiaux"], c: 1,
        e: "C’est le problème de la validité externe." },
      { q: "Qu’a montré l’évaluation du microcrédit ?",
        o: ["Qu’il sort massivement les ménages de la pauvreté", "Qu’il a des effets réels mais modestes", "Qu’il est nuisible", "Qu’il n’est jamais remboursé"], c: 1,
        e: "Il aide certains entrepreneurs, sans être une solution miracle." }
    ],
    ouverte: {
      q: "Esther Duflo et Abhijit Banerjee ont annoncé rejoindre l’université de Zurich. La Suisse, par sa coopération au développement, pourrait-elle davantage s’appuyer sur des évaluations rigoureuses de ses programmes ?",
      r: "La Direction du développement et de la coopération (DDC) et le Secrétariat d’État à l’économie (SECO) financent chaque année des programmes dans de nombreux pays, pour plusieurs milliards de francs. Ils évaluent déjà leurs projets, mais rarement par des essais randomisés. La démarche de Duflo suggère de tester davantage, avant de les étendre, les programmes dont l’effet est incertain, et de privilégier ceux dont l’efficacité est prouvée, comme certains programmes de santé ou d’éducation. Cette exigence est d’autant plus forte que le budget de la coopération suisse a été réduit ces dernières années : chaque franc doit être utilisé au mieux. Mais les critiques de Deaton et de Pritchett rappellent aussi les limites de la méthode : toutes les actions ne peuvent pas être tirées au sort, comme le soutien à la bonne gouvernance, à la paix ou aux réformes fiscales, et un résultat obtenu dans un pays ne vaut pas forcément ailleurs. La présence de J-PAL à Zurich pourrait faciliter ces collaborations entre chercheurs et coopération suisse."
    },
    lectures: [
      ["Accessible", "Abhijit Banerjee et Esther Duflo, Repenser la pauvreté, 2011."],
      ["Accessible", "Esther Duflo, conférence TED « Social experiments to fight poverty », 2010."],
      ["Intermédiaire", "Abhijit Banerjee et Esther Duflo, Économie utile pour des temps difficiles, 2019."],
      ["Intermédiaire", "Angus Deaton, « Instruments, Randomization, and Learning about Development », Journal of Economic Literature, 2010, pour la critique."],
      ["Recherche", "Esther Duflo, « The Economist as Plumber », American Economic Review, 2017 ; Esther Duflo, Rema Hanna et Stephen Ryan, « Incentives Work », American Economic Review, 2012."]
    ],
    decouvrir: {
      questions: [
        { q: "Comment Duflo mesure-t-elle l’effet réel d’un programme contre la pauvreté ?",
          o: ["En tirant au sort les villages aidés et en les comparant aux autres", "En interrogeant les responsables du programme sur ses résultats", "En comparant les pays riches et les pays pauvres sur vingt ans", "En calculant le coût total du programme pour chaque personne aidée"], c: 0,
          e: "C’est la méthode des essais cliniques appliquée à l’économie." },
        { q: "Qu’a montré l’expérience des moustiquaires au Kenya ?",
          o: ["Gratuites, elles touchent bien plus de familles et sont autant utilisées", "Les familles préfèrent les moustiquaires chères, jugées plus sûres", "Les moustiquaires n’ont eu aucun effet sur la santé des enfants", "Les moustiquaires gratuites sont presque toutes revendues au marché"], c: 0,
          e: "De petits détails peuvent avoir de grands effets. Un prix même modeste fait chuter la demande, et les familles qui les reçoivent gratuitement les utilisent tout autant (Cohen et Dupas, 2010)." }
      ],
      duree: 6,
      html: `
<h3>Une économiste de terrain</h3>
<p>Esther Duflo, née en 1972 à Paris, fille d’une pédiatre engagée dans l’humanitaire, étudie l’histoire et l’économie à l’École normale supérieure, puis devient professeure au MIT. En 2019, à quarante-six ans, elle reçoit le prix Nobel, la plus jeune lauréate de l’histoire du prix d’économie.</p>
${vieDuflo}
<h3>Tester comme en médecine</h3>
<p>Pour savoir si un programme contre la pauvreté marche, Duflo utilise la méthode des essais cliniques : on tire au sort les villages ou les écoles qui en bénéficient, et on compare avec les autres. Comme les deux groupes sont semblables, la différence mesure l’effet réel du programme.</p>
${essai}
<h3>De petits détails, de grands effets</h3>
<p>Ses expériences montrent que de petites choses comptent beaucoup. En Inde, offrir un sac de lentilles aux familles qui font vacciner leurs enfants double le taux de vaccination complète. Au Kenya, les moustiquaires gratuites sont bien plus utilisées que les moustiquaires vendues, même à bas prix.</p>
<h3>À retenir</h3>
<p>Duflo a fait de la lutte contre la pauvreté une science expérimentale. Le portrait complet présente sa vie, ses résultats et les critiques de sa méthode.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Paris à l’ENS, au MIT, au prix Nobel et à Zurich.",
      epoque: "Sachs contre Easterly : l’aide marche-t-elle ?",
      pensee: "Sept étapes, des petites questions à une économie utile.",
      livres: "De sa thèse sur l’Indonésie à Économie utile pour des temps difficiles.",
      cas: "Les caméras d’Udaipur, les moustiquaires, le Nobel, le départ pour Zurich.",
      objections: "La validité externe, des questions trop petites, l’éthique, le poids des chercheurs.",
      ecoles: "Banerjee et Kremer, Sen, Angrist, Kahneman, J-PAL, Deaton.",
      source: "L’économiste comme plombier.",
      quiz: "Cinq questions corrigées et une question sur la coopération suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
