/* Œconomia — notices longues, lot 7 (c) : équilibre général, valeur d'usage */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };
  const node = (x, y, w, t, c) => `<rect x="${x - w / 2}" y="${y - 18}" width="${w}" height="36" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x}" y="${y + 4}" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">${t}</text>`;

  /* =====================================================================
     39. ÉQUILIBRE GÉNÉRAL
     ===================================================================== */
  const reseau = fig(320, (() => {
    let s = `<text x="20" y="24" ${T}>Un choc sur un marché se propage à tous les autres (exemple : le pétrole renchérit)</text>`;
    const N = { pet: [320, 70, "Pétrole", "var(--serial)"], tra: [130, 150, "Transports", "var(--gold)"], pla: [320, 150, "Plastiques, engrais", "var(--gold)"], ele: [510, 150, "Électricité", "var(--gold)"], ali: [130, 235, "Alimentation", "var(--plum)"], vel: [320, 235, "Vélos, isolation", "var(--note)"], sal: [510, 235, "Salaires, revenus", "var(--plum)"] };
    const E = [["pet", "tra"], ["pet", "pla"], ["pet", "ele"], ["tra", "ali"], ["pla", "ali"], ["tra", "vel"], ["ele", "vel"], ["ele", "sal"], ["pla", "sal"]];
    E.forEach(([a, b]) => { const [x1, y1] = N[a], [x2, y2] = N[b]; s += arrow(x1, y1 + 18, x2, y2 - 20); });
    s += `<path d="M 510 253 C 560 300, 120 300, 130 253" style="fill:none; stroke:var(--plum); stroke-width:1.6; stroke-dasharray:4 4"/>`;
    s += `<text x="320" y="300" text-anchor="middle" ${S}>revenus plus faibles : moins de demande partout</text>`;
    Object.values(N).forEach(([x, y, t, c]) => (s += node(x, y, 150, t, c)));
    return s;
  })(), "En équilibre partiel, on étudie un marché en supposant les autres fixes. Walras montre qu’ils sont tous liés : le renchérissement du pétrole modifie les coûts des transports et de l’électricité, les prix des aliments, la demande de vélos et d’isolation, les revenus réels, qui modifient à leur tour la demande de pétrole.", "Réseau de marchés reliés par des flèches à partir du pétrole");

  const tatonnement = fig(290, (() => {
    const L = 80, R = 600, B = 230, X = (t) => L + t * (R - L) / 8, Y = (p) => B - p * 25;
    const pts = [2, 7.4, 3.9, 6.1, 4.4, 5.6, 4.7, 5.2, 5];
    let s = `<text x="20" y="24" ${T}>Le tâtonnement de Walras : le prix s’ajuste à l’excès de demande</text>`;
    [0, 2, 4, 6].forEach((v) => (s += `<line x1="${L}" y1="${Y(v)}" x2="${R}" y2="${Y(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end" ${M}>${v}</text>`));
    s += `<line x1="${L}" y1="${Y(5)}" x2="${R}" y2="${Y(5)}" style="stroke:var(--gold); stroke-dasharray:5 4"/><text x="${R}" y="${Y(5) - 6}" text-anchor="end" style="fill:var(--gold); font:600 11.5px Manrope, sans-serif">prix d’équilibre</text>`;
    s += `<polyline points="${pts.map((p, t) => `${X(t)},${Y(p)}`).join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.4"/>`;
    pts.forEach((p, t) => (s += `<circle cx="${X(t)}" cy="${Y(p)}" r="4" style="fill:var(--note)"/>`));
    for (let t = 0; t <= 8; t++) s += `<text x="${X(t)}" y="${B + 18}" text-anchor="middle" ${M}>${t}</text>`;
    s += `<text x="${R}" y="${B + 34}" text-anchor="end" ${M}>« criée » successive</text>`;
    s += `<text x="${X(0.2)}" y="${Y(2) + 18}" ${S}>trop bas : demande > offre</text>`;
    s += `<text x="${X(1.2)}" y="${Y(7.4) - 8}" ${S}>trop haut : offre > demande</text>`;
    return s;
  })(), "Walras imagine un crieur qui annonce des prix ; tant que l’offre et la demande ne s’égalisent pas, aucun échange n’a lieu et le crieur corrige les prix. Ce processus converge ici. Herbert Scarf a montré en 1960 qu’avec plusieurs marchés, il peut aussi tourner indéfiniment sans jamais atteindre l’équilibre. Valeurs illustratives.", "Trajectoire de prix oscillant vers l’équilibre");

  OEC.notices["equilibre-general"] = {
    essentiel: [
      "La théorie de l’équilibre général étudie tous les marchés d’une économie en même temps, en tenant compte de leurs interdépendances : le prix de chaque bien dépend des prix de tous les autres, des revenus qu’ils procurent et des choix de tous les agents.",
      "Formulée par Léon Walras à Lausanne en 1874, elle est démontrée rigoureusement par Kenneth Arrow et Gérard Debreu en 1954. Elle fonde les théorèmes du bien-être, selon lesquels un équilibre concurrentiel est efficace au sens de Pareto.",
      "Elle est à la fois le sommet de la théorie économique et l’une de ses cibles favorites : l’existence d’un équilibre est démontrée, mais pas sa stabilité ni la manière dont l’économie y parviendrait. Ses versions chiffrées servent pourtant à évaluer les accords commerciaux et les réformes fiscales."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : comment des millions de décisions peuvent-elles être cohérentes ?", html: `
<p>Chaque jour, des millions de personnes décident, sans se concerter, ce qu’elles vont acheter, produire, offrir comme travail, épargner. Personne ne coordonne l’ensemble. Pourtant, les rayons des magasins sont remplis, les usines trouvent leurs fournisseurs, la plupart des gens trouvent un emploi. Comment cet ensemble de décisions décentralisées peut-il aboutir à un résultat cohérent, plutôt qu’au chaos ?</p>
<p>Adam <a href="#eco-smith">Smith</a> avait parlé d’une « main invisible ». En 1874, Léon <a href="#eco-walras">Walras</a>, professeur d’économie politique à l’Académie de Lausanne depuis 1870, entreprend de le démontrer mathématiquement dans ses Éléments d’économie politique pure. Il écrit un système d’équations décrivant tous les marchés à la fois, et cherche à montrer qu’il existe un ensemble de prix pour lequel l’offre égale la demande partout. Joseph <a href="#eco-schumpeter">Schumpeter</a> le qualifiera de plus grand de tous les économistes.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Tout dépend de tout</h4>
<p>L’analyse de <a href="#eco-marshall">Marshall</a> étudie un marché à la fois, en supposant que le reste ne change pas : c’est l’équilibre partiel. C’est souvent suffisant pour un petit marché. Mais pour le pétrole, le travail ou le crédit, les répercussions sur les autres marchés sont trop importantes pour être ignorées. Le prix du pétrole affecte les coûts de presque tout, les revenus de chacun, et donc la demande de pétrole elle-même.</p>
${reseau}
<h4>2. Les équations de Walras</h4>
<p>Walras décrit l’économie par des équations : pour chaque bien, la demande dépend de tous les prix et des revenus ; l’offre dépend aussi de tous les prix. L’équilibre est un ensemble de prix pour lequel toutes les demandes égalent toutes les offres. Il compte autant d’équations que d’inconnues, ce qui lui paraît garantir une solution, un argument que les mathématiciens jugeront insuffisant.</p>
<h4>3. Le numéraire et la loi de Walras</h4>
<p>Seuls les prix relatifs comptent : on peut exprimer tous les prix dans l’unité d’un bien, le « numéraire ». Walras remarque aussi que si tous les marchés sauf un sont en équilibre, le dernier l’est forcément, puisque chacun ne peut dépenser que ce qu’il gagne. C’est la « loi de Walras », qui joue un rôle central dans le débat sur la <a href="#c-loi-debouches">loi des débouchés</a>.</p>
<h4>4. Le tâtonnement</h4>
<p>Comment l’économie trouve-t-elle les prix d’équilibre ? Walras imagine un « crieur » qui annonce des prix, recueille les offres et les demandes, et relève les prix des biens trop demandés, baisse ceux des biens trop offerts, sans qu’aucun échange n’ait lieu avant que l’équilibre soit atteint. Ce processus, le tâtonnement, est une fiction : aucun crieur n’existe dans la réalité.</p>
${tatonnement}
<h4>5. La démonstration d’Arrow et Debreu</h4>
<p>En 1954, Kenneth Arrow et Gérard Debreu, et indépendamment Lionel McKenzie, démontrent rigoureusement l’existence d’un équilibre général, sous des hypothèses précises : préférences et techniques « convexes », absence de rendements croissants, marchés complets pour tous les biens, à toutes les dates et dans toutes les circonstances possibles. Ils utilisent des théorèmes de point fixe empruntés à la topologie. Debreu publie en 1959 la Théorie de la valeur, une centaine de pages d’une rigueur axiomatique sans précédent en économie.</p>
<h4>6. Les théorèmes du bien-être</h4>
<p>La théorie montre aussi que tout équilibre concurrentiel est un <a href="#c-optimum-pareto">optimum de Pareto</a> : on ne peut améliorer la situation de personne sans détériorer celle d’un autre. C’est la formalisation de la main invisible. Le second théorème ajoute que tout optimum peut être atteint par le marché, si l’on redistribue au préalable les ressources initiales. Ces résultats supposent l’absence d’<a href="#c-externalite">externalités</a>, de pouvoir de marché et d’asymétries d’information.</p>
<h4>7. Existence n’est pas stabilité</h4>
<p>Démontrer qu’un équilibre existe ne dit pas que l’économie y parvient. En 1960, Herbert Scarf construit un exemple simple où le tâtonnement tourne indéfiniment autour de l’équilibre sans l’atteindre. Au début des années 1970, Hugo Sonnenschein, Rolf Mantel et Gérard Debreu montrent que les hypothèses habituelles sur les individus n’imposent presque aucune contrainte sur le comportement global des marchés : l’équilibre peut être multiple et instable. Ce résultat a profondément ébranlé les espoirs de fonder la macroéconomie sur l’équilibre général.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les tableaux entrée-sortie de Leontief</h4>
<p>En 1941, Wassily Leontief, d’origine russe et installé à Harvard, construit un tableau de l’économie américaine qui décrit ce que chaque secteur achète à tous les autres. Ces tableaux entrée-sortie, version simplifiée et chiffrée de l’interdépendance walrasienne, permettent de calculer l’effet d’une hausse de la demande d’un secteur sur tous les autres. Leontief reçoit le prix Nobel en 1973 ; les offices statistiques, dont l’Office fédéral de la statistique, publient aujourd’hui de tels tableaux.</p>
<h4>Les modèles d’équilibre général calculable</h4>
<p>Depuis les travaux du Norvégien Leif Johansen en 1960, les économistes construisent des modèles d’équilibre général chiffrés, calibrés sur les données d’un pays, pour simuler les effets d’une réforme fiscale, d’un accord de libre-échange ou d’une taxe carbone. Ils sont devenus des outils standards de l’analyse des politiques commerciales. Leurs résultats dépendent cependant fortement des hypothèses retenues, comme les élasticités de substitution entre produits.</p>
<h4>L’expérience de la planification</h4>
<p>Les économies planifiées ont tenté de coordonner la production par le calcul plutôt que par les prix. Leur échec, marqué par des pénuries chroniques et des excédents de biens inutiles, a souvent été interprété comme une confirmation de la difficulté du problème que résolvent, imparfaitement, les marchés.</p>` }
    ],
    cas: [
      { titre: "L’école de Lausanne", html: `
<p>Né à Évreux en 1834, Léon Walras ne trouve pas de poste en France, où ses idées et ses mathématiques déconcertent. En 1870, il est élu à la nouvelle chaire d’économie politique de l’Académie de Lausanne, créée à l’initiative du canton de Vaud. Il y développe toute son œuvre. Lorsqu’il prend sa retraite en 1892, l’Italien Vilfredo <a href="#eco-pareto">Pareto</a> lui succède et prolonge son travail, notamment avec la notion d’optimum qui porte son nom. On parle de l’« école de Lausanne ». En 1909, l’Université de Lausanne célèbre le jubilé scientifique de Walras, qui meurt l’année suivante à Clarens, près de Montreux. Lausanne a ainsi été, au tournant du XXe siècle, l’un des grands centres mondiaux de la théorie économique.</p>` },
      { titre: "Le débat sur le calcul socialiste", html: `
<p>En 1920, Ludwig von <a href="#eco-mises">Mises</a> soutient qu’une économie socialiste, sans propriété privée des moyens de production ni prix de marché, ne peut pas calculer rationnellement. En 1936-1937, l’économiste polonais Oskar Lange répond en utilisant l’équilibre général : un bureau central pourrait jouer le rôle du crieur de Walras, fixer des prix, observer les pénuries et les excédents, et ajuster par tâtonnement. Friedrich <a href="#eco-hayek">Hayek</a> réplique en 1945 que le problème n’est pas de résoudre des équations, mais de rassembler une connaissance dispersée entre des millions de personnes, que seuls les prix de marché permettent de transmettre. Le débat a beaucoup influencé la compréhension du rôle des prix.</p>` },
      { titre: "L’ALENA à l’épreuve des faits", html: `
<p>Avant l’entrée en vigueur de l’accord de libre-échange nord-américain, en 1994, plusieurs équipes utilisent des modèles d’équilibre général calculable pour en prévoir les effets sur les États-Unis, le Canada et le Mexique. Ils prévoient des gains modestes pour les États-Unis et plus importants pour le Mexique. En 2005, l’économiste Timothy Kehoe compare ces prévisions aux résultats observés : les modèles ont bien vu la direction des effets, mais ils ont fortement sous-estimé la croissance du commerce dans les produits qui s’échangeaient peu avant l’accord. La leçon : ces modèles éclairent les effets en chaîne d’une réforme, mais ils peinent à prévoir l’apparition d’échanges nouveaux.</p>` }
    ],
    objections: `
<h4>1. Des hypothèses irréalistes</h4>
<p>L’existence de l’équilibre suppose des marchés complets pour tous les biens futurs et tous les états du monde, l’absence de rendements croissants, une information parfaite. Aucune économie réelle ne les remplit. Pour beaucoup de critiques, la théorie décrit un monde idéal plutôt que le monde réel.</p>
<h4>2. Le temps et la monnaie absents</h4>
<p>Dans le modèle d’Arrow-Debreu, tous les échanges sont décidés une fois pour toutes, au début, et la monnaie n’a pas de rôle. Les keynésiens et les post-keynésiens jugent qu’une théorie sans monnaie, sans incertitude radicale et sans temps historique ne peut pas expliquer le chômage ni les crises.</p>
<h4>3. L’équilibre comme fiction</h4>
<p>Les économistes autrichiens, comme <a href="#eco-hayek">Hayek</a>, et les évolutionnistes, comme <a href="#eco-schumpeter">Schumpeter</a>, jugent plus important le processus de découverte et de déséquilibre permanent que l’état d’équilibre. L’économie réelle n’est jamais à l’équilibre ; ce qui compte, c’est comment elle s’adapte.</p>
<h4>4. Un idéal utile malgré tout</h4>
<p>Les défenseurs de la théorie répondent qu’elle n’a jamais prétendu décrire l’économie réelle, mais fournir un point de référence rigoureux : elle montre précisément quelles conditions sont nécessaires pour que le marché fonctionne bien, et donc où chercher ses défaillances. Arrow lui-même l’utilisait pour identifier les cas où le marché échoue.</p>`,
    ecoles: `
<p><b><a href="#eco-quesnay">Quesnay</a></b> représente dès 1758 l’économie comme un circuit entre classes.</p>
<p><b><a href="#eco-walras">Walras</a></b> (1874) formule le système d’équilibre général à Lausanne ; <b><a href="#eco-pareto">Pareto</a></b> le prolonge.</p>
<p><b>Arrow, Debreu</b> et <b>McKenzie</b> (1954) démontrent l’existence de l’équilibre.</p>
<p><b>Leontief</b> et <b>Johansen</b> en font des outils chiffrés.</p>
<p><b>Scarf, Sonnenschein, Mantel</b> et <b>Debreu</b> en montrent les limites.</p>
<p><b><a href="#eco-mises">Mises</a></b>, <b><a href="#eco-hayek">Hayek</a></b> et les post-keynésiens en contestent la pertinence.</p>`,
    source: {
      titre: "Léon Walras, Éléments d’économie politique pure, 1874, première section",
      texte: "L’économie politique pure est essentiellement la théorie de la détermination des prix sous un régime hypothétique de libre concurrence absolue.",
      notes: `
<p><b>« Hypothétique ».</b> Walras ne prétend pas décrire l’économie réelle. Il construit, comme un physicien, un modèle idéal dont l’étude doit précéder celle des réalités plus complexes.</p>
<p><b>Économie pure, appliquée et sociale.</b> Walras distinguait l’économie pure, science des prix, l’économie appliquée, art de la production, et l’économie sociale, réflexion morale sur la répartition. Socialiste libéral, il défendait la nationalisation des terres, dont la rente devait financer l’État (<a href="#c-rente">voir rente</a>).</p>
<p><b>Un isolement.</b> Walras a longtemps souffert d’être incompris, notamment en France. Son œuvre n’est pleinement reconnue qu’au XXe siècle, quand les économistes mathématiciens en font la base de la théorie moderne.</p>`
    },
    quiz: [
      { q: "Quelle est la différence entre équilibre partiel et équilibre général ?",
        o: ["L’équilibre partiel concerne le court terme, l’équilibre général le long terme", "L’équilibre partiel isole un marché, l’équilibre général étudie tous les marchés ensemble", "L’équilibre partiel étudie une entreprise, l’équilibre général un pays entier", "L’équilibre général décrit une économie planifiée, l’équilibre partiel une économie de marché"], c: 1,
        e: "Marshall raisonne en équilibre partiel, Walras en équilibre général." },
      { q: "Où Walras a-t-il développé sa théorie ?",
        o: ["À Paris, à la Sorbonne, à partir de 1870", "À l’Académie de Lausanne, à partir de 1870", "À Cambridge, aux côtés d’Alfred Marshall, à partir de 1870", "À Vienne, à l’université, à partir de 1870"], c: 1,
        e: "Il y fonde l’école de Lausanne, que Pareto prolonge." },
      { q: "Qu’est-ce que le tâtonnement chez Walras ?",
        o: ["Une méthode de calcul de l’impôt fondée sur les revenus des ménages", "Un processus fictif où un crieur ajuste les prix avant tout échange", "Des échanges successifs à des prix déséquilibrés, corrigés jour après jour", "Une forme de troc pratiquée avant l’apparition de la monnaie"], c: 1,
        e: "Les prix montent si la demande dépasse l’offre et baissent dans le cas contraire." },
      { q: "Qu’ont démontré Arrow et Debreu en 1954 ?",
        o: ["Que l’équilibre est stable, les prix y revenant après chaque choc", "L’existence d’un équilibre général sous des hypothèses précises", "Que les marchés échouent en l’absence d’intervention de l’État", "Que la monnaie est neutre et n’influence pas les prix relatifs"], c: 1,
        e: "Ils utilisent des théorèmes de point fixe ; la stabilité reste un autre problème." },
      { q: "Quel argument Hayek oppose-t-il à Lange dans le débat sur le calcul socialiste ?",
        o: ["Que les planificateurs seraient corrompus et détourneraient les ressources à leur profit", "Que la connaissance est dispersée, et que seuls les prix de marché la transmettent", "Que le socialisme est immoral et contraire à la liberté individuelle", "Que l’équilibre général est introuvable, faute de démonstration mathématique"], c: 1,
        e: "Pour Hayek, les prix sont un système de communication de l’information." }
    ],
    transfert: { q: "Un pays impose une forte taxe sur l’acier importé. Pourquoi une analyse d’équilibre général est-elle utile pour en mesurer les effets ?",
      o: ["Parce que la taxe touche aussi les fabricants de voitures, la construction et les salaires", "Parce que seul le marché de l’acier est touché et que son prix suffit à tout dire aux autorités", "Parce que les taxes n’ont pas d’effet sur les autres marchés, qui sont indépendants", "Parce que l’acier importé ne sert qu’aux exportateurs et pas aux industries locales"], c: 0,
      e: "Étudier un marché isolément peut faire oublier les effets en chaîne sur tous les autres." },
    ouverte: {
      q: "Les modèles d’équilibre général calculable servent à évaluer des choix politiques majeurs, comme les accords commerciaux ou la sortie du Royaume-Uni de l’Union européenne. Faut-il leur faire confiance ?",
      r: "Ces modèles ont un avantage décisif : ils tiennent compte des effets en cascade entre secteurs, que les analyses partielles ignorent, et ils imposent une cohérence comptable, chaque euro dépensé étant un revenu quelque part. Ils permettent de comparer des scénarios de manière transparente. Mais leurs résultats dépendent fortement d’hypothèses difficiles à vérifier : élasticités de substitution entre produits nationaux et étrangers, réaction des migrations, effets sur la productivité et l’innovation, souvent mal représentés. Ils supposent aussi en général que l’économie retrouve le plein emploi. Comme l’a montré l’évaluation de l’ALENA, ils peuvent bien prévoir la direction des effets tout en se trompant sur leur ampleur. Les chiffres doivent donc être lus comme des ordres de grandeur conditionnels, et comparés à d’autres méthodes. Le danger est de présenter un chiffre précis de perte de PIB comme une certitude, alors qu’il résulte de choix de modélisation."
    },
    lectures: [
      ["Accessible", "Bernard Guerrien, L’Économie néo-classique, collection Repères, chapitres sur l’équilibre général."],
      ["Accessible", "Friedrich Hayek, « L’utilisation de la connaissance dans la société », 1945, article court."],
      ["Intermédiaire", "Léon Walras, Éléments d’économie politique pure (1874), leçons 1 à 12."],
      ["Intermédiaire", "Kenneth Arrow, conférence Nobel « General Economic Equilibrium: Purpose, Analytic Techniques, Collective Choice », 1972."],
      ["Recherche", "Kenneth Arrow et Gérard Debreu, « Existence of an Equilibrium for a Competitive Economy », Econometrica, 1954 ; Gérard Debreu, Théorie de la valeur, 1959."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi une hausse du prix du pétrole ne touche-t-elle pas seulement l’essence ?",
          o: ["Parce que les transports, l’électricité, les engrais et les plastiques en dépendent", "Parce que l’État augmente automatiquement tous les prix quand le pétrole monte, par décret", "Parce que l’essence est le seul produit concerné, les autres prix restant stables", "Parce que les salaires montent aussitôt de la même façon que le prix du pétrole"], c: 0,
          e: "C’est pourquoi il faut parfois étudier tous les marchés ensemble." },
        { q: "Que cherchait à montrer Walras avec ses équations ?",
          o: ["Qu’il existe des prix qui égalisent l’offre et la demande sur tous les marchés", "Que les marchés sont en crise permanente et ne trouvent pas d’équilibre", "Que l’État doit fixer les prix pour que les marchés s’équilibrent entre eux", "Que la monnaie ne sert à rien dans une économie d’échange développée"], c: 0,
          e: "Une version mathématique de la « main invisible », démontrée rigoureusement en 1954." }
      ],
      duree: 5,
      html: `
<h3>Tout est lié</h3>
<p>Quand le prix du pétrole augmente, ce n’est pas seulement l’essence qui coûte plus cher : les transports, l’électricité, les engrais, les aliments, les plastiques suivent, les revenus des ménages baissent, et la demande de tout le reste change. Étudier un marché isolément ne suffit pas. La théorie de l’<b>équilibre général</b> étudie tous les marchés ensemble.</p>
${reseau}
<h3>Une théorie née à Lausanne</h3>
<p>Elle est formulée en 1874 par Léon <a href="#eco-walras">Walras</a>, un Français devenu professeur à Lausanne. Il cherche à montrer, avec des équations, qu’il existe des prix pour lesquels l’offre égale la demande sur tous les marchés à la fois : une version mathématique de la « main invisible » d’Adam Smith. Il faudra attendre 1954 pour que Kenneth Arrow et Gérard Debreu le démontrent rigoureusement.</p>
<h3>Une belle construction, discutée</h3>
<p>Cette théorie suppose des conditions très idéales, et rien ne garantit que l’économie atteigne vraiment l’équilibre. Ses versions chiffrées servent pourtant à évaluer les accords commerciaux, de l’accord nord-américain de 1994 aux relations entre la Suisse et l’Union européenne.</p>
<h3>À retenir</h3>
<p>L’équilibre général est le cadre le plus ambitieux de la théorie économique. La notice complète présente la construction, les débats et les usages.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Comment des millions de décisions peuvent-elles être cohérentes ? Walras à Lausanne.",
      raisonnement: "Sept étapes, de l’interdépendance à la question de la stabilité.",
      preuves: "Les tableaux de Leontief, les modèles calculables, l’expérience de la planification.",
      cas: "L’école de Lausanne, le calcul socialiste, l’ALENA à l’épreuve des faits.",
      objections: "Hypothèses irréalistes, temps et monnaie absents, équilibre comme fiction, idéal utile.",
      ecoles: "Quesnay, Walras et Pareto, Arrow-Debreu-McKenzie, Leontief, Scarf et SMD, Mises et Hayek.",
      source: "Walras, 1874 : la théorie des prix sous une libre concurrence hypothétique.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     40. VALEUR D'USAGE
     ===================================================================== */
  const paradoxe = fig(320, (() => {
    const L = 80, R = 600, Top = 60, B = 250;
    let s = `<text x="20" y="24" ${T}>Le paradoxe de l’eau et du diamant résolu par l’utilité marginale (schéma)</text>`;
    s += `<line x1="${L}" y1="${Top - 10}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top - 4}" text-anchor="end" ${M}>utilité</text><text x="${L - 8}" y="${Top + 8}" text-anchor="end" ${M}>marginale</text>`;
    s += `<text x="${R}" y="${B + 20}" text-anchor="end" ${M}>quantité disponible</text>`;
    s += `<path d="M ${L + 10} ${Top + 4} C ${L + 80} ${B - 40}, ${L + 200} ${B - 18}, ${R - 20} ${B - 12}" style="fill:none; stroke:var(--note); stroke-width:2.6"/>`;
    s += `<text x="${L + 150}" y="${Top + 30}" style="fill:var(--note); font:700 12px Manrope, sans-serif">eau</text>`;
    s += `<path d="M ${L + 10} ${Top + 30} C ${L + 30} ${Top + 60}, ${L + 50} ${Top + 85}, ${L + 90} ${Top + 110}" style="fill:none; stroke:var(--gold); stroke-width:2.6"/>`;
    s += `<text x="${L + 40}" y="${Top + 120}" style="fill:var(--gold); font:700 12px Manrope, sans-serif">diamants</text>`;
    s += `<line x1="${L + 60}" y1="${Top + 70}" x2="${L + 60}" y2="${B}" style="stroke:var(--gold); stroke-dasharray:3 3"/><circle cx="${L + 60}" cy="${Top + 72}" r="5" style="fill:var(--gold)"/>`;
    s += `<line x1="${R - 60}" y1="${B - 13}" x2="${R - 60}" y2="${B}" style="stroke:var(--note); stroke-dasharray:3 3"/><circle cx="${R - 60}" cy="${B - 13}" r="5" style="fill:var(--note)"/>`;
    s += `<text x="${L + 70}" y="${Top + 60}" style="fill:var(--ink); font:600 11.5px Manrope, sans-serif">peu de diamants : la dernière unité vaut beaucoup</text>`;
    s += `<text x="${R - 20}" y="${B - 50}" text-anchor="end" style="fill:var(--ink); font:600 11.5px Manrope, sans-serif">beaucoup d’eau : le dernier litre vaut presque rien</text>`;
    s += `<text x="20" y="292" ${S}>L’utilité totale de l’eau est immense (l’aire sous la courbe) ; son prix reflète la valeur du dernier litre.</text>`;
    s += `<text x="20" y="308" ${S}>Le diamant, rare, est payé selon l’utilité élevée de chaque unité supplémentaire.</text>`;
    return s;
  })(), "La solution des marginalistes de 1871 : le prix ne dépend pas de l’utilité totale d’un bien, mais de l’utilité de la dernière unité disponible. Cette utilité « marginale » diminue avec la quantité. Dans le désert, l’eau redeviendrait plus précieuse que les diamants.", "Deux courbes d’utilité marginale pour l’eau et les diamants");

  const frise = fig(250, (() => {
    const L = 40, R = 600, y = 110;
    const ev = [["Aristote", "IVe s. av. J.-C.", "usage et échange", 0], ["Galiani", "1751", "utilité et rareté", 1], ["Smith", "1776", "le paradoxe", 0], ["Ricardo, Marx", "1817-1867", "le travail", 1], ["Jevons, Menger, Walras", "1871-1874", "l’utilité marginale", 0], ["Marshall", "1890", "offre et demande", 1]];
    let s = `<text x="20" y="24" ${T}>Deux mille ans de débats sur la valeur</text>`;
    s += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" style="stroke:var(--ink-soft); stroke-width:2"/>`;
    ev.forEach(([n, d, t, up], i) => {
      const x = L + 30 + i * ((R - L - 60) / 5), yy = up ? y + 40 : y - 40;
      s += `<circle cx="${x}" cy="${y}" r="6" style="fill:var(--plum)"/><line x1="${x}" y1="${y}" x2="${x}" y2="${up ? yy - 14 : yy + 4}" style="stroke:var(--line)"/>`;
      s += `<text x="${x}" y="${up ? yy : yy - 32}" text-anchor="middle" style="fill:var(--ink); font:700 11.5px Manrope, sans-serif">${n}</text>`;
      s += `<text x="${x}" y="${up ? yy + 15 : yy - 17}" text-anchor="middle" ${M}>${d}</text>`;
      s += `<text x="${x}" y="${up ? yy + 30 : yy - 2}" text-anchor="middle" ${S}>${t}</text>`;
    });
    s += `<text x="20" y="232" ${S}>La valeur d’usage passe du rôle de condition de la valeur à celui de source de la valeur, à travers l’utilité marginale.</text>`;
    return s;
  })(), "Les classiques jugent que l’utilité est nécessaire pour qu’une chose ait une valeur d’échange, mais qu’elle ne la mesure pas ; ils cherchent la mesure dans le travail. Les marginalistes renversent la perspective : la valeur vient de l’utilité, appréciée à la marge.", "Frise chronologique des théories de la valeur");

  OEC.notices["valeur-usage"] = {
    essentiel: [
      "La valeur d’usage est l’utilité concrète d’un bien, sa capacité à satisfaire un besoin : l’eau désaltère, un manteau protège du froid. Elle se distingue de la valeur d’échange, la quantité d’autres biens ou de monnaie qu’on obtient en le cédant.",
      "Aristote distingue déjà les deux usages d’une chaussure : la porter ou l’échanger. Adam Smith en tire le paradoxe de l’eau et du diamant : l’eau, très utile, ne vaut presque rien ; le diamant, peu utile, vaut une fortune. Le paradoxe sera résolu en 1871 par l’utilité marginale.",
      "La distinction reste actuelle : le PIB mesure les valeurs d’échange et ignore une grande partie des valeurs d’usage, comme les services gratuits, le travail domestique ou les services rendus par la nature."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi l’eau vaut-elle moins que les diamants ?", html: `
<p>Rien n’est plus utile que l’eau : sans elle, on meurt en quelques jours. Un diamant, au contraire, ne sert presque à rien, sinon à orner. Pourtant, un litre d’eau du robinet coûte une fraction de centime, et un petit diamant plusieurs milliers de francs. Comment l’utilité et le prix peuvent-ils être à ce point déconnectés ?</p>
<p>Adam <a href="#eco-smith">Smith</a> pose la question en 1776, au chapitre 4 du premier livre de la Richesse des nations, à propos de la distinction entre « valeur en usage » et « valeur en échange ». D’autres l’avaient remarqué avant lui, comme John Law en 1705. Mais c’est la formulation de Smith qui fixera le problème pour un siècle, et sa résolution marquera la naissance de l’économie moderne.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Les deux usages d’une chaussure</h4>
<p>Au IVe siècle avant notre ère, <a href="#eco-aristote">Aristote</a> remarque dans la Politique qu’une chaussure peut servir à être portée ou à être échangée. Les deux usages sont légitimes, mais le premier est propre à l’objet, le second non : la chaussure n’a pas été faite pour l’échange. Aristote se méfie de l’activité qui vise l’échange pour l’accumulation d’argent, la « chrématistique », qu’il oppose à l’économie domestique tournée vers la satisfaction des besoins.</p>
<h4>2. Utilité et rareté</h4>
<p>Au XVIIIe siècle, l’Italien Ferdinando Galiani (1751) et le Français Étienne Bonnot de Condillac (1776) soutiennent que la valeur dépend à la fois de l’utilité et de la rareté. L’air est très utile mais si abondant qu’il ne vaut rien ; l’or est rare et désiré. Ils frôlent la solution moderne, mais leur influence reste limitée face à celle de Smith.</p>
<h4>3. Le paradoxe de Smith</h4>
<p>Smith conclut de l’exemple de l’eau et du diamant que la valeur d’usage ne peut pas expliquer la valeur d’échange. Il cherche donc la mesure de la valeur ailleurs, dans le travail nécessaire pour produire ou obtenir un bien. Pour les classiques, la valeur d’usage est une condition nécessaire, une chose inutile ne s’échange pas, mais elle ne détermine pas le prix.</p>
<h4>4. Valeur d’usage et valeur chez Marx</h4>
<p>Karl <a href="#eco-marx">Marx</a> ouvre Le Capital par cette distinction. La marchandise a une valeur d’usage, liée à ses propriétés concrètes, et une valeur d’échange, qui exprime une quantité de travail social. Dans le capitalisme, la production vise la valeur d’échange et le profit, et non la satisfaction des besoins. La force de travail elle-même devient une marchandise, dont la valeur d’usage particulière est de créer plus de valeur qu’elle n’en coûte (<a href="#c-plus-value">voir plus-value</a>).</p>
<h4>5. La solution marginaliste</h4>
<p>En 1871, l’Anglais William Stanley Jevons et l’Autrichien Carl Menger, puis Léon <a href="#eco-walras">Walras</a> en 1874, résolvent le paradoxe indépendamment. La valeur dépend de l’utilité, non pas totale, mais de la dernière unité disponible. Comme l’eau est abondante, le dernier litre sert à des usages secondaires, laver la voiture, arroser, et vaut très peu. Les diamants sont rares, et chaque unité supplémentaire reste très désirée (<a href="#c-utilite-marginale">voir utilité marginale</a>). Daniel Bernoulli avait formulé l’idée d’une utilité décroissante dès 1738 à propos du risque.</p>
${paradoxe}
<h4>6. Le surplus, trace de la valeur d’usage</h4>
<p>La valeur d’usage ne disparaît pas de la théorie moderne : elle se retrouve dans le <a href="#c-surplus">surplus du consommateur</a>, la différence entre ce qu’on serait prêt à payer et ce qu’on paie. Pour l’eau, ce surplus est immense : nous paierions énormément pour les premiers litres, et nous les obtenons presque gratuitement. Le prix mesure la valeur à la marge ; le surplus mesure ce que le prix ne dit pas.</p>
<h4>7. Ce que le PIB ne compte pas</h4>
<p>Le <a href="#c-pib">PIB</a> additionne des valeurs d’échange, les prix payés. Il ignore les valeurs d’usage sans prix : le travail domestique et bénévole, les services numériques gratuits, la beauté d’un paysage, l’air pur. Depuis les années 1970, de nombreux travaux cherchent à mesurer ces valeurs, par des comptes satellites ou des indicateurs de bien-être, comme ceux recommandés par la commission Stiglitz-Sen-Fitoussi en 2009.</p>
${frise}` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La valeur des services de la nature</h4>
<p>En 1997, l’écologue Robert Costanza et ses coauteurs publient dans Nature une estimation de la valeur des services rendus chaque année par les écosystèmes : pollinisation, régulation du climat, purification de l’eau, protection contre les crues. Ils obtiennent environ 33 000 milliards de dollars par an, plus que le PIB mondial de l’époque, d’environ 18 000 milliards. Le chiffre a été vivement discuté, car additionner des valeurs d’usage vitales n’a guère de sens, mais il a contribué à faire entrer la nature dans les calculs économiques.</p>
<h4>Le travail domestique</h4>
<p>Les offices statistiques qui mesurent le temps consacré aux tâches domestiques et familiales trouvent qu’il est du même ordre de grandeur que le temps de travail rémunéré. En Suisse, l’Office fédéral de la statistique publie régulièrement un compte satellite du <dfn data-g=travail-non-remunere>travail non rémunéré</dfn>, dont la valeur estimée atteint plusieurs centaines de milliards de francs par an, réalisé en majorité par des femmes. Cette valeur d’usage considérable n’apparaît pas dans le PIB.</p>
<h4>L’eau, quand elle devient rare</h4>
<p>Dans les régions où l’eau devient rare, comme la Californie pendant les sécheresses des années 2010 ou certaines régions d’Australie, les marchés de droits d’eau voient leurs prix s’envoler. La valeur d’échange de l’eau rejoint alors une partie de sa valeur d’usage, exactement comme le prévoit la théorie marginaliste : c’est l’abondance, pas l’utilité, qui rendait l’eau bon marché.</p>` }
    ],
    cas: [
      { titre: "La redevance hydraulique suisse", html: `
<p>En Suisse, les cantons et communes de montagne perçoivent une redevance sur l’utilisation de l’eau par les centrales hydroélectriques, le « Wasserzins ». Le droit fédéral en fixe le plafond, actuellement 110 francs par kilowatt de puissance brute, jusqu’en 2030. Le débat oppose régulièrement les cantons alpins, qui estiment que l’eau de leurs montagnes a une grande valeur et doit être rémunérée, et les entreprises électriques, qui soulignent que la redevance pèse sur la rentabilité quand les prix de l’électricité sont bas. Au fond, il s’agit de partager la <a href="#c-rente">rente</a> d’une ressource naturelle dont la valeur d’usage pour la production d’électricité est considérable.</p>` },
      { titre: "« A diamond is forever »", html: `
<p>Les diamants ne sont pas aussi rares qu’on le croit. Leur prix élevé tient beaucoup à l’organisation du marché par la société De Beers, qui a longtemps contrôlé l’essentiel de l’offre mondiale et régulé les quantités mises en vente. En 1947, son agence publicitaire lance le slogan « A diamond is forever », qui associe le diamant à l’amour éternel et décourage la revente. Depuis les années 2010, les diamants de synthèse, chimiquement identiques et produits en laboratoire, font baisser fortement les prix. Le cas montre que la valeur d’échange dépend autant de la rareté organisée et des croyances que de la valeur d’usage.</p>` },
      { titre: "L’économie de la gratuité", html: `
<p>Les moteurs de recherche, les encyclopédies en ligne, les cartes et les messageries gratuites ont une valeur d’usage considérable pour leurs utilisateurs, mais un prix nul. Les études de disposition à payer, comme celles d’Erik Brynjolfsson, montrent qu’il faudrait payer des milliers de dollars par an à certains utilisateurs pour qu’ils renoncent à ces services. Leur diffusion a pu faire baisser certaines composantes du PIB, comme les ventes d’encyclopédies, de cartes routières ou d’appareils photo, alors que le bien-être augmentait. L’écart entre valeur d’usage et valeur d’échange n’a jamais été aussi visible.</p>` }
    ],
    objections: `
<h4>1. Une notion trop vague</h4>
<p>Les économistes néoclassiques jugent la valeur d’usage trop vague pour être utile : elle n’est pas mesurable, et seules les préférences révélées par les choix ont un contenu scientifique. C’est pourquoi l’économie moderne a remplacé la valeur d’usage par l’utilité, puis par les préférences.</p>
<h4>2. La valeur d’usage est sociale</h4>
<p>Les sociologues et les anthropologues soulignent que l’utilité d’un objet n’est pas seulement physique : elle dépend des significations sociales. Un vêtement protège du froid, mais il signale aussi un statut, une appartenance (<a href="#c-consommation-ostentatoire">voir consommation ostentatoire</a>). Séparer valeur d’usage et valeur symbolique est artificiel.</p>
<h4>3. Ne pas tout monétiser</h4>
<p>À l’inverse, des philosophes et écologistes jugent dangereux de vouloir mesurer en francs la valeur d’usage de la nature ou des relations humaines : certaines choses n’ont pas de prix, et leur en donner un risque de les rendre échangeables. Michael Sandel a développé cette critique dans Ce que l’argent ne saurait acheter (2012).</p>
<h4>4. La solution marginaliste ne règle pas tout</h4>
<p>Les critiques marxistes et post-keynésiens jugent que l’utilité marginale explique les prix à court terme, mais pas les rapports sociaux de production ni la répartition des revenus entre salaires et profits, que la distinction entre valeur d’usage et valeur d’échange éclairait.</p>`,
    ecoles: `
<p><b><a href="#eco-aristote">Aristote</a></b> distingue les deux usages des biens.</p>
<p><b>Galiani</b> et <b>Condillac</b> fondent la valeur sur l’utilité et la rareté.</p>
<p><b><a href="#eco-smith">Smith</a></b> formule le paradoxe de l’eau et du diamant.</p>
<p><b><a href="#eco-ricardo">Ricardo</a></b> et <b><a href="#eco-marx">Marx</a></b> cherchent la mesure de la valeur dans le travail.</p>
<p><b>Jevons, Menger</b> et <b><a href="#eco-walras">Walras</a></b> résolvent le paradoxe par l’utilité marginale.</p>
<p><b>Costanza</b>, <b>Stiglitz</b> et <b><a href="#eco-sen">Sen</a></b> cherchent à mesurer ce que les prix ignorent.</p>`,
    source: {
      titre: "Adam Smith, Recherches sur la nature et les causes de la richesse des nations, 1776, livre I, chapitre 4",
      texte: "Il n’y a rien de plus utile que l’eau, mais elle ne peut presque rien acheter ; à peine y a-t-il moyen de rien avoir en échange. Un diamant, au contraire, n’a presque aucune valeur quant à l’usage, mais on trouvera fréquemment à l’échanger contre une très grande quantité d’autres marchandises.",
      notes: `
<p><b>La distinction.</b> Juste avant, Smith écrit que le mot valeur a deux sens : l’utilité d’un objet particulier, la « valeur en usage », et la faculté que donne sa possession d’acheter d’autres marchandises, la « valeur en échange ».</p>
<p><b>Une conclusion qui oriente un siècle de recherches.</b> Smith en tire que l’utilité ne peut pas fonder les prix, et cherche dans les chapitres suivants une mesure de la valeur dans le travail. Cette orientation conduit à Ricardo et à Marx.</p>
<p><b>Ce que Smith n’a pas vu.</b> Les marginalistes montreront qu’il compare l’utilité totale de l’eau à l’utilité d’un diamant isolé. En comparant l’utilité de la dernière unité de chacun, le paradoxe disparaît.</p>`
    },
    quiz: [
      { q: "Quelle est la différence entre valeur d’usage et valeur d’échange ?",
        o: ["La valeur d’usage concerne les services, la valeur d’échange les biens", "La valeur d’usage est l’utilité d’un bien, la valeur d’échange son pouvoir d’échange", "La valeur d’usage est le prix de gros, la valeur d’échange le prix de détail", "La valeur d’échange est l’utilité du bien, la valeur d’usage son prix de vente"], c: 1,
        e: "Une chaussure se porte (usage) ou s’échange (échange), disait déjà Aristote." },
      { q: "Comment les marginalistes résolvent-ils le paradoxe de l’eau et du diamant ?",
        o: ["En montrant que l’utilité totale de l’eau est faible, d’où son prix bas", "En montrant que le prix dépend de l’utilité de la dernière unité consommée", "Par le coût du travail, plus élevé pour le diamant que pour l’eau, selon les classiques", "Par la rareté des mines de diamants, qui en augmente le coût d’extraction"], c: 1,
        e: "C’est l’utilité marginale, et non l’utilité totale, qui détermine le prix." },
      { q: "Pour Marx, quelle est la valeur d’usage particulière de la force de travail ?",
        o: ["Elle s’use moins vite que les machines", "Elle crée plus de valeur qu’elle n’en coûte", "Elle produit exactement la valeur de son salaire", "Elle remplace les machines"], c: 1,
        e: "C’est l’origine de la plus-value dans la théorie de Marx." },
      { q: "Pourquoi le PIB ignore-t-il une grande partie des valeurs d’usage ?",
        o: ["Parce qu’il ne compte que les biens matériels et pas les services", "Parce qu’il additionne des prix payés, et ignore ce qui n’a pas de prix", "Parce que les valeurs d’usage sont trop faibles pour compter dans le total", "Parce qu’il ne compte que la production de l’industrie, pas celle des ménages"], c: 1,
        e: "Le travail domestique, les services gratuits et ceux de la nature n’y figurent pas." },
      { q: "Qu’est-ce que le « Wasserzins » en Suisse ?",
        o: ["Un impôt cantonal sur l’eau potable consommée par les ménages de montagne", "Une redevance versée par les centrales hydroélectriques pour l’eau qu’elles utilisent", "Une taxe fédérale sur l’eau minérale importée et vendue en bouteille dans les commerces", "Une subvention versée aux agriculteurs pour l’irrigation de leurs cultures"], c: 1,
        e: "Son plafond fédéral, de 110 francs par kilowatt, partage la rente de l’eau entre cantons et producteurs." }
    ],
    transfert: { q: "Un moteur de recherche en ligne est gratuit pour ses utilisateurs, qui s’en servent pourtant chaque jour. Que montre cet exemple ?",
      o: ["Qu’un service peut être très utile sans prix payé, et échapper ainsi en partie au PIB", "Que ce service n’a presque aucune valeur, puisque ses utilisateurs ne le paient pas", "Que le PIB mesure fidèlement le bien-être, puisqu’il compte tous les services", "Que les utilisateurs paient en réalité un prix très élevé, qu’ils ne voient pas"], c: 0,
      e: "Beaucoup de choses très utiles n’ont pas de prix : c’est pourquoi on cherche d’autres mesures du bien-être." },
    ouverte: {
      q: "Faudrait-il inclure dans les statistiques officielles la valeur du travail domestique non rémunéré, à côté du PIB ?",
      r: "Plusieurs instituts statistiques publient déjà un compte satellite de ce travail, comme ceux du Royaume-Uni, des États-Unis ou de la Suisse, qui montrent son importance considérable, comparable en heures au travail rémunéré. Les partisans d’une plus grande visibilité soulignent que l’ignorer conduit à sous-estimer la contribution des femmes, qui en effectuent la majorité, et à mal évaluer certaines politiques : par exemple, l’ouverture de crèches fait augmenter le PIB, car un travail auparavant gratuit devient rémunéré, sans que la production réelle de soins aux enfants change autant. Les sceptiques rappellent que la valorisation de ce travail dépend de conventions discutables, comme le salaire d’un professionnel ou le salaire auquel renonce la personne, et que l’intégrer au PIB brouillerait la mesure de l’activité marchande. La solution la plus répandue consiste à publier ces comptes à côté du PIB, plutôt qu’à les y fusionner, ce qui permet de voir ce que chaque mesure éclaire."
    },
    lectures: [
      ["Accessible", "Mariana Mazzucato, La Valeur de tout, 2018, chapitres 1 et 2."],
      ["Accessible", "Michael Sandel, Ce que l’argent ne saurait acheter, 2012."],
      ["Intermédiaire", "Adam Smith, Richesse des nations (1776), livre I, chapitres 4 à 7."],
      ["Intermédiaire", "Karl Marx, Le Capital (1867), livre I, chapitre 1."],
      ["Recherche", "Robert Costanza et al., « The Value of the World’s Ecosystem Services and Natural Capital », Nature, 1997 ; Carl Menger, Principes d’économie politique, 1871, chapitres 2 et 3."]
    ],
    decouvrir: {
      questions: [
        { q: "Quelle distinction Adam Smith tire-t-il du paradoxe de l’eau et du diamant ?",
          o: ["Entre la valeur d’usage, soit l’utilité, et la valeur d’échange, soit le prix obtenu", "Entre les biens publics, utilisés par tous, et les biens privés, payés par chacun", "Entre l’offre, qui vient des vendeurs, et la demande, qui vient des acheteurs", "Entre le travail, source de la valeur, et le capital, qui ne fait que la transférer"], c: 0,
          e: "Les deux valeurs peuvent être très différentes." },
        { q: "Pourquoi, dans le désert, l’eau pourrait-elle valoir plus que les diamants ?",
          o: ["Parce que l’eau y devient rare, et que le dernier litre est vital", "Parce que les diamants y sont plus abondants que partout ailleurs", "Parce que l’eau coûte beaucoup plus de travail à produire dans le désert", "Parce que l’État fixe le prix de l’eau au-dessus de celui des diamants"], c: 0,
          e: "Ce qui compte pour le prix, c’est l’utilité de la dernière unité, qui dépend de la rareté." }
      ],
      duree: 5,
      html: `
<h3>L’eau et le diamant</h3>
<p>Rien n’est plus utile que l’eau, et pourtant elle ne coûte presque rien. Un diamant ne sert presque à rien, et il vaut une fortune. En 1776, Adam <a href="#eco-smith">Smith</a> en tire une distinction : la <b>valeur d’usage</b>, l’utilité d’une chose, et la valeur d’échange, ce qu’on obtient en la vendant. Les deux peuvent être très différentes.</p>
<h3>La solution de 1871</h3>
<p>Un siècle plus tard, trois économistes trouvent l’explication : ce qui compte pour le prix, ce n’est pas l’utilité de toute l’eau, mais celle du dernier litre. Comme l’eau est abondante, le dernier litre sert à laver la voiture et vaut peu. Les diamants sont rares, et chacun reste très désiré. Dans le désert, l’eau vaudrait plus que les diamants.</p>
${paradoxe}
<h3>Ce que les prix ne disent pas</h3>
<p>Beaucoup de choses très utiles n’ont pas de prix : le travail domestique, les services gratuits sur internet, l’air pur, la pollinisation par les abeilles. Le PIB, qui additionne les prix, les ignore. C’est pourquoi on cherche aujourd’hui d’autres mesures du bien-être.</p>
<h3>À retenir</h3>
<p>L’utilité et le prix ne se confondent pas. La notice complète présente l’histoire du paradoxe, sa solution et ses prolongements actuels.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Pourquoi l’eau vaut-elle moins que les diamants ? Le paradoxe de Smith.",
      raisonnement: "Sept étapes, d’Aristote à ce que le PIB ne compte pas.",
      preuves: "La valeur des services de la nature, le travail domestique, l’eau qui devient rare.",
      cas: "La redevance hydraulique suisse, les diamants De Beers, l’économie de la gratuité.",
      objections: "Une notion vague, une valeur sociale, ne pas tout monétiser, les limites du marginalisme.",
      ecoles: "Aristote, Galiani et Condillac, Smith, Ricardo et Marx, les marginalistes, Costanza, Stiglitz et Sen.",
      source: "Smith, 1776 : rien de plus utile que l’eau, mais elle ne peut presque rien acheter.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
