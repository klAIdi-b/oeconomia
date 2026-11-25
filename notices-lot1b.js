/* Œconomia — notices longues, lot 1 (b) : théorie quantitative, destruction créatrice */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const arrow = (id) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-soft)"/></marker></defs>`;
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     3. THÉORIE QUANTITATIVE DE LA MONNAIE
     ===================================================================== */
  const equation = fig(230, `
    ${[["M", "masse monétaire", "note", 30], ["V", "vitesse de circulation", "gold", 180], ["P", "niveau des prix", "serial", 360], ["Q", "production réelle", "plum", 510]].map(([l, d, c, x]) => `
      <rect x="${x}" y="40" width="100" height="70" rx="10" style="fill:var(--card); stroke:var(--${c}); stroke-width:1.5"/>
      <text x="${x + 50}" y="84" text-anchor="middle" style="fill:var(--${c}); font:400 34px 'Instrument Serif', Georgia, serif">${l}</text>
      <text x="${x + 50}" y="128" text-anchor="middle" ${S}>${d}</text>`).join("")}
    <text x="155" y="84" text-anchor="middle" ${T}>×</text><text x="320" y="84" text-anchor="middle" style="fill:var(--ink); font:600 22px Manrope, sans-serif">=</text><text x="485" y="84" text-anchor="middle" ${T}>×</text>
    <text x="320" y="170" text-anchor="middle" ${T}>Une identité comptable devient une théorie avec deux hypothèses :</text>
    <text x="320" y="192" text-anchor="middle" ${S}>V est stable (habitudes de paiement) et Q dépend des capacités réelles, pas de la monnaie.</text>
    <text x="320" y="212" text-anchor="middle" ${S}>Alors, si M double, P double : toute création monétaire excédentaire finit en inflation.</text>`,
    "L’équation des échanges d’Irving Fisher (1911). La valeur des paiements (monnaie × nombre de fois où elle change de mains) égale la valeur des biens échangés (prix × quantités).",
    "Schéma de l’équation M fois V égale P fois Q");

  const weimar = fig(300, (() => {
    const pts = [["juil. 1914", 4.2], ["janv. 1922", 190], ["janv. 1923", 18000], ["juil. 1923", 353000], ["nov. 1923", 4.2e12]];
    const L = 80, R = 600, B = 250, Tp = 40, ly = (v) => B - (Math.log10(v) / 13) * (B - Tp);
    let s = "";
    for (let k = 0; k <= 12; k += 3) s += `<line x1="${L}" x2="${R}" y1="${ly(Math.pow(10, k))}" y2="${ly(Math.pow(10, k))}" style="stroke:var(--line)"/><text x="${L - 8}" y="${ly(Math.pow(10, k)) + 4}" text-anchor="end" ${M}>10^${k}</text>`;
    const xs = pts.map((p, i) => L + 20 + i * ((R - L - 40) / (pts.length - 1)));
    s += `<polyline points="${pts.map((p, i) => xs[i] + "," + ly(p[1])).join(" ")}" style="fill:none; stroke:var(--serial); stroke-width:2.5"/>`;
    const lab = (v) => v >= 1e12 ? "4 200 milliards" : v.toLocaleString("fr-CH");
    pts.forEach((p, i) => { s += `<circle cx="${xs[i]}" cy="${ly(p[1])}" r="5" style="fill:var(--serial)"/><text x="${xs[i]}" y="${B + 20}" text-anchor="middle" ${M}>${p[0]}</text><text x="${xs[i] + (i === 4 ? -8 : 8)}" y="${ly(p[1]) - 10}" text-anchor="${i === 4 ? "end" : "start"}" ${T}>${lab(p[1])}</text>`; });
    s += `<text x="${L}" y="22" ${T}>Prix d’un dollar américain en marks (échelle logarithmique)</text>`;
    return s;
  })(), "Le mark de Weimar. Chaque graduation multiplie par mille. Ordres de grandeur d’après les séries de l’Office statistique du Reich (Zahlen zur Geldentwertung, 1925) ; les valeurs intermédiaires sont arrondies.", "Graphique logarithmique du cours du dollar en marks de 1914 à 1923");

  OEC.notices["theorie-quantitative"] = {
    essentiel: [
      "La théorie quantitative affirme qu’à long terme, le niveau général des prix évolue en proportion de la quantité de monnaie en circulation : si l’on crée de la monnaie plus vite que l’économie ne produit de biens, les prix montent.",
      "Elle s’écrit M × V = P × Q. C’est d’abord une identité comptable ; elle devient une théorie si l’on suppose que la vitesse de circulation et la production réelle ne dépendent pas de la monnaie.",
      "Elle explique très bien les hyperinflations et les tendances de long terme. Elle fonctionne mal à court terme et dans les crises, quand la monnaie est thésaurisée : après 2008, une création monétaire massive n’a pas provoqué d’inflation pendant plus d’une décennie."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : un pain à 200 milliards de marks", html: `
<p>En janvier 1923, un pain coûte environ 250 marks à Berlin. En novembre, il en coûte environ 200 milliards. Les salaires sont versés deux fois par jour et dépensés aussitôt, avant que les prix ne montent encore ; des billets servent de papier peint ou de combustible. Le 20 novembre 1923, un dollar vaut 4 200 milliards de marks, contre 4,2 en 1914. Les imprimeries de la Reichsbank tournent jour et nuit.</p>
<p>Le lien entre la planche à billets et la hausse des prix paraît ici évident. Il a pourtant fallu des siècles pour le formuler, et il reste discuté pour les situations plus ordinaires. Au XVIe siècle déjà, les Européens s’interrogeaient sur la « révolution des prix » : les prix avaient été multipliés par trois ou quatre en un siècle, sans que personne comprenne pourquoi. La théorie quantitative est née de cette énigme.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Une intuition du XVIe siècle</h4>
<p>En 1566, le seigneur de Malestroit attribue la hausse des prix aux rognages et aux dévaluations des pièces. Jean Bodin lui répond en 1568 que la cause principale est ailleurs : l’abondance d’or et d’argent arrivés d’Amérique. Les théologiens de l’école de Salamanque, notamment Martín de Azpilcueta (1556), avaient fait une observation semblable : là où le métal abonde, comme en Espagne, les biens sont chers. Plus il y a de monnaie, moins chacune de ses unités achète de choses.</p>
<h4>2. L’équation des échanges</h4>
<p>En 1911, l’Américain Irving Fisher donne à cette intuition une forme précise. Sur une année, la valeur de tous les paiements est égale à la quantité de monnaie (M) multipliée par le nombre moyen de fois où chaque billet change de mains (V, la vitesse de circulation). Cette valeur est aussi égale à la valeur de tous les biens et services achetés : leur prix moyen (P) multiplié par leur quantité (Q).</p>
${equation}
<h4>3. De l’identité à la théorie</h4>
<p>L’égalité M × V = P × Q est toujours vraie, par construction. Elle devient une théorie avec deux hypothèses. D’abord, la vitesse de circulation est stable, car elle dépend d’habitudes de paiement qui évoluent lentement (la fréquence des salaires, l’usage des chèques ou des cartes). Ensuite, la production réelle dépend des travailleurs, des machines et des techniques, non de la quantité de monnaie. Si ces deux hypothèses tiennent, une hausse de M se traduit entièrement par une hausse de P. La monnaie est alors « neutre » : elle ne change que l’unité dans laquelle on compte, comme passer des francs aux centimes.</p>
<h4>4. La version de Cambridge</h4>
<p>À Cambridge, Alfred Marshall puis Arthur Pigou formulent la théorie autrement : les ménages et les entreprises souhaitent détenir une certaine fraction de leur revenu sous forme de monnaie, pour leurs transactions et par précaution. Si la banque centrale crée davantage de monnaie que ce que les gens veulent détenir, ils dépensent l’excédent, ce qui fait monter les prix jusqu’à ce que leur encaisse retrouve la proportion souhaitée. Cette version insiste sur la demande de monnaie, que <a href="#eco-keynes">Keynes</a>, élève de Marshall, transformera en <a href="#c-preference-liquidite">préférence pour la liquidité</a>.</p>
<h4>5. Neutre à long terme, pas à court terme</h4>
<p>Dès 1752, David Hume, qui défend la théorie quantitative, remarque que l’arrivée d’argent nouveau stimule d’abord l’activité : les marchands qui le reçoivent embauchent avant que les prix n’aient eu le temps de monter. La monnaie n’est neutre qu’une fois tous les prix ajustés. Cette distinction entre court et long terme est au cœur de la synthèse actuelle : la monnaie peut influencer la production pendant quelques années, mais pas durablement. <a href="#eco-friedman">Friedman</a> résume : la politique monétaire agit avec des délais longs et variables, et l’inflation est « toujours et partout un phénomène monétaire ».</p>
<h4>6. Qui crée la monnaie ?</h4>
<p>Aujourd’hui, l’essentiel de la monnaie est créé par les banques commerciales lorsqu’elles accordent des crédits : le prêt crée un dépôt sur le compte de l’emprunteur. La banque centrale influence cette création par ses taux d’intérêt, et crée elle-même la monnaie de banque centrale (billets et réserves des banques). Cette réalité, rappelée en 2014 par la Banque d’Angleterre dans un article qui a fait date, complique la théorie : la quantité de monnaie dépend en partie de la demande de crédit de l’économie elle-même.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Sur le long terme, une relation très forte</h4>
<p>Comparant 110 pays sur trente ans, George McCandless et Warren Weber (1995) trouvent une corrélation d’environ 0,95 entre la croissance de la masse monétaire et l’inflation. Les pays qui ont créé beaucoup de monnaie, comme le Brésil ou l’Argentine pendant certaines décennies, ont connu une forte inflation ; ceux qui en ont créé peu, comme la Suisse ou l’Allemagne, une inflation faible. C’est l’un des résultats empiriques les plus robustes de la macroéconomie.</p>
${weimar}
<h4>Dans les hyperinflations, une évidence</h4>
<p>En 1956, Phillip Cagan étudie sept hyperinflations européennes du XXe siècle (Allemagne, Autriche, Hongrie à deux reprises, Pologne, Russie, Grèce). Toutes sont précédées d’un financement massif des déficits publics par la création monétaire. Il montre aussi qu’au cours de l’hyperinflation, la vitesse de circulation explose : chacun se débarrasse de sa monnaie le plus vite possible, ce qui accélère encore la hausse des prix.</p>
<h4>Quand l’inflation est faible, une relation fragile</h4>
<p>Paul De Grauwe et Magdalena Polan (2005) montrent que la belle corrélation de long terme provient surtout des pays à forte inflation. Pour les pays où l’inflation est inférieure à environ 10 % par an, le lien entre monnaie et prix devient faible : la vitesse de circulation varie, et d’autres facteurs (salaires, énergie, anticipations) pèsent davantage. C’est l’une des raisons pour lesquelles les banques centrales ont abandonné les cibles de croissance monétaire au profit de cibles d’inflation.</p>` }
    ],
    cas: [
      { titre: "Weimar, 1923", html: `
<p>L’Allemagne a financé la Première Guerre mondiale surtout par l’emprunt et la création monétaire, en comptant sur la victoire pour rembourser. Après 1918, elle doit en outre payer des réparations. Les gouvernements de la République de Weimar, fragiles, ne parviennent pas à lever assez d’impôts et font financer les déficits par la Reichsbank. La dépréciation s’accélère en 1922, puis s’emballe en 1923, quand la France et la Belgique occupent la Ruhr et que le gouvernement finance la « résistance passive » des ouvriers en grève. La stabilisation de novembre 1923 réussit précisément parce qu’elle s’attaque à la cause : une nouvelle monnaie, le Rentenmark, dont l’émission est strictement limitée, et un budget rééquilibré. L’hyperinflation a ruiné l’épargne de la classe moyenne et laissé une mémoire collective qui explique en partie l’attachement allemand à une monnaie stable.</p>` },
      { titre: "Le Zimbabwe, 2007-2009", html: `
<p>Après une réforme agraire désorganisée qui fait chuter la production agricole et les exportations, le gouvernement de Robert Mugabe finance ses dépenses par la planche à billets. En novembre 2008, l’inflation mensuelle est estimée par l’économiste Steve Hanke à près de 80 milliards de pourcents, soit un doublement des prix environ toutes les vingt-cinq heures. La banque centrale émet en janvier 2009 un billet de 100 000 milliards de dollars zimbabwéens. L’hyperinflation ne cesse qu’avec l’abandon de la monnaie nationale au profit du dollar américain et du rand sud-africain. Le cas illustre les deux mécanismes : la production réelle (Q) s’effondre en même temps que la masse monétaire (M) explose.</p>` },
      { titre: "L’énigme de 2008-2020, puis le retour de l’inflation", html: `
<p>Après la faillite de Lehman Brothers, la Réserve fédérale, la Banque d’Angleterre, puis la BCE et la Banque nationale suisse créent de la monnaie à une échelle inédite. Le bilan de la Fed passe de moins de 1 000 milliards de dollars en 2008 à environ 4 500 milliards en 2015. Beaucoup d’observateurs annoncent une flambée des prix. Elle ne vient pas : l’inflation reste souvent sous 2 % pendant une décennie. L’explication est que la monnaie créée reste en grande partie dans les réserves des banques, et que la vitesse de circulation s’effondre : c’est la situation de <a href="#c-trappe-liquidite">trappe à liquidité</a> décrite par Keynes.</p>
<p>En 2020-2021, la situation change. Cette fois, la <dfn data-g=monnaie-endogene>création monétaire</dfn> accompagne des transferts directs aux ménages et aux entreprises : la masse monétaire américaine au sens large (M2) augmente d’environ un quart en un an. Combinée aux pénuries et à la flambée de l’énergie, cette injection est suivie d’une inflation de 9,1 % aux États-Unis en juin 2022. Les monétaristes y voient une revanche ; d’autres économistes soulignent le rôle des chocs d’offre. Les deux lectures ne s’excluent pas.</p>` }
    ],
    objections: `
<h4>1. La vitesse n’est pas stable</h4>
<p><a href="#eco-keynes">Keynes</a> objecte que la demande de monnaie varie fortement avec la confiance et les taux d’intérêt. En crise, chacun garde sa monnaie par précaution : V baisse, et une hausse de M peut ne rien faire aux prix. Les données de 2008-2020 lui donnent largement raison.</p>
<h4>2. La monnaie est endogène</h4>
<p>Pour les post-keynésiens, la causalité va souvent dans l’autre sens : ce sont l’activité et la demande de crédit qui déterminent la quantité de monnaie, créée par les banques à la demande. La masse monétaire suit l’économie plus qu’elle ne la précède.</p>
<h4>3. La loi de Goodhart</h4>
<p>En 1975, l’économiste de la Banque d’Angleterre Charles Goodhart observe que dès qu’un agrégat monétaire devient une cible officielle, les relations qui le liaient aux prix se dérèglent, car les banques et les marchés innovent pour le contourner. Les cibles monétaires adoptées dans les années 1970 et 1980 ont été abandonnées en partie pour cette raison.</p>
<h4>4. L’inflation peut venir d’ailleurs</h4>
<p>Chocs pétroliers, pénuries, spirales prix-salaires, pouvoir de marché des entreprises : l’inflation peut démarrer sans hausse préalable de la monnaie. La monnaie peut ensuite « valider » la hausse en s’adaptant, ce qui rend la distinction entre cause et accompagnement délicate.</p>
<h4>5. La théorie budgétaire du niveau des prix</h4>
<p>Christopher Sims (Nobel 2011) et Eric Leeper soutiennent que le niveau des prix dépend aussi de la crédibilité de la politique budgétaire : si les agents ne croient pas que l’État remboursera sa dette par des impôts futurs, ils anticipent qu’il le fera par l’inflation, quelle que soit la politique monétaire du moment.</p>`,
    ecoles: `
<p><b><a href="#eco-aristote">Aristote</a></b> et, au XIVe siècle, Nicole Oresme voient la monnaie comme une convention au service de la communauté ; Oresme condamne les manipulations monétaires des rois.</p>
<p><b><a href="#eco-ricardo">Ricardo</a></b> applique la théorie quantitative à la controverse du bullion (1810) : la hausse du prix de l’or révèle un excès d’émission de billets.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> accepte la théorie à long terme, mais insiste sur l’instabilité de la demande de monnaie et sur la trappe à liquidité.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> la réhabilite et en fait le fondement du monétarisme.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> et l’école autrichienne jugent l’agrégat trop grossier : ce qui compte, ce sont les effets inégaux de la monnaie nouvelle selon l’endroit où elle entre dans l’économie, une idée déjà formulée par Richard Cantillon vers 1730.</p>
<p><b>La théorie monétaire moderne</b> (Stephanie Kelton, Le Mythe du déficit, 2020) soutient qu’un État émettant sa propre monnaie n’est contraint que par l’inflation, et non par sa dette ; elle est très critiquée par la plupart des macroéconomistes.</p>`,
    source: {
      titre: "David Hume, « De la monnaie », Discours politiques, 1752",
      texte: "Bien que le prix élevé des marchandises soit la conséquence nécessaire de l’augmentation de l’or et de l’argent, il ne suit pas immédiatement cette augmentation ; il faut un certain temps avant que la monnaie circule à travers tout l’État et fasse sentir son effet sur toutes les classes de la population.",
      notes: `
<p><b>Le contexte.</b> Hume, philosophe et ami d’Adam Smith, écrit contre les mercantilistes qui voient dans l’accumulation d’or la source de la richesse. Si la monnaie n’est qu’un instrument d’échange, en avoir davantage ne rend pas un pays plus riche : cela rend seulement ses prix plus élevés.</p>
<p><b>La nuance décisive.</b> Hume ajoute aussitôt que la hausse des prix n’est pas immédiate. Dans l’intervalle, l’argent nouveau stimule l’industrie. C’est la distinction entre la neutralité de long terme et les effets réels de court terme, que la macroéconomie n’a jamais cessé de discuter.</p>
<p><b>Ce que le passage annonce.</b> L’idée que la monnaie passe d’abord par certaines mains avant d’atteindre « toutes les classes » rejoint l’effet Cantillon : ceux qui reçoivent la monnaie nouvelle en premier achètent avant la hausse des prix, et s’enrichissent aux dépens des autres.</p>`
    },
    quiz: [
      { q: "Dans M × V = P × Q, que représente V ?",
        o: ["La valeur des biens produits", "Le nombre moyen de fois où une unité de monnaie est dépensée sur une période", "Le taux d’intérêt", "La variation des prix"], c: 1,
        e: "V est la vitesse de circulation : si chaque franc sert en moyenne à cinq achats dans l’année, V = 5." },
      { q: "Si M augmente de 10 %, que V est stable et que Q augmente de 2 %, de combien augmentent environ les prix ?",
        o: ["10 %", "12 %", "8 %", "2 %"], c: 2,
        e: "En taux de variation, l’équation donne approximativement : variation de M + variation de V = variation de P + variation de Q. Donc 10 + 0 = P + 2, soit environ 8 %." },
      { q: "Pourquoi la forte création de monnaie de banque centrale de 2008-2015 n’a-t-elle pas provoqué d’inflation ?",
        o: ["Parce que la production a augmenté au même rythme que la monnaie", "Parce que la vitesse de circulation s’est effondrée, la monnaie restant dans les réserves des banques", "Parce que les banques centrales ont aussitôt relevé leurs taux", "Parce que la monnaie avait été détruite aussitôt"], c: 1,
        e: "La monnaie de banque centrale a fortement augmenté, mais elle est restée en grande partie dans les réserves des banques. La masse monétaire au sens large, celle que les ménages et les entreprises dépensent, a beaucoup moins augmenté, et sa vitesse de circulation a baissé. La dépense totale n’a donc pas suivi." },
      { q: "Que montre Phillip Cagan sur les hyperinflations ?",
        o: ["Qu’elles naissent de chocs pétroliers", "Qu’elles sont précédées d’un financement massif des déficits par la création monétaire, et que la vitesse y explose", "Qu’elles touchent surtout les pays riches", "Qu’elles se terminent toujours spontanément"], c: 1,
        e: "Dans les cas étudiés, l’État finance ses déficits par la planche à billets ; les gens se débarrassent de leur monnaie de plus en plus vite, ce qui accélère la hausse des prix." },
      { q: "Qu’énonce la loi de Goodhart ?",
        o: ["L’inflation est toujours monétaire", "Un indicateur cesse d’être fiable dès qu’il devient une cible de politique", "La monnaie est neutre à long terme", "Les banques créent la monnaie en accordant des crédits"], c: 1,
        e: "Dès qu’un agrégat monétaire est ciblé, les comportements s’adaptent et sa relation avec l’inflation se dérègle ; c’est l’une des raisons de l’abandon des cibles monétaires." }
    ],
    ouverte: {
      q: "Le franc suisse a perdu beaucoup moins de pouvoir d’achat que la plupart des monnaies depuis un siècle. Comment la théorie quantitative peut-elle l’expliquer, et que laisse-t-elle de côté ?",
      r: "La théorie quantitative suggère que la Banque nationale suisse a fait croître la monnaie à peu près au rythme de la production réelle, et que les finances publiques suisses, relativement saines, n’ont jamais exigé un financement monétaire des déficits. Mais d’autres éléments comptent : l’indépendance et la crédibilité de la BNS, qui ancrent les anticipations ; le statut de valeur refuge du franc, qui attire les capitaux et l’apprécie en période de crise, rendant les importations moins chères ; enfin, le fédéralisme et la démocratie directe, qui ont limité l’endettement public. La théorie quantitative décrit le résultat, mais les institutions expliquent pourquoi la monnaie a été gérée ainsi."
    },
    lectures: [
      ["Accessible", "Milton Friedman, Money Mischief: Episodes in Monetary History, 1992. Une série d’histoires monétaires racontées par le grand défenseur de la théorie."],
      ["Accessible", "Adam Fergusson, When Money Dies, 1975. Le récit de l’hyperinflation de Weimar à partir de témoignages."],
      ["Intermédiaire", "David Hume, « De la monnaie » et « De la balance du commerce », Discours politiques, 1752. Deux textes courts et fondateurs."],
      ["Intermédiaire", "Banque d’Angleterre, « Money Creation in the Modern Economy », Quarterly Bulletin, 2014. Comment les banques créent la monnaie, expliqué clairement."],
      ["Recherche", "Phillip Cagan, « The Monetary Dynamics of Hyperinflation », 1956 ; George McCandless et Warren Weber, « Some Monetary Facts », 1995 ; Paul De Grauwe et Magdalena Polan, « Is Inflation Always and Everywhere a Monetary Phenomenon? », 2005."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Un pain à 200 milliards</h3>
<p>En 1923, en Allemagne, le prix d’un pain passe d’environ 250 marks en janvier à 200 milliards en novembre. Le gouvernement imprime des billets pour payer ses dépenses, et plus il en imprime, plus les prix montent. C’est l’exemple extrême d’une idée ancienne : quand la quantité de monnaie augmente plus vite que la quantité de biens à acheter, chaque billet vaut moins.</p>
${weimar}
<h3>L’équation de Fisher</h3>
<p>L’économiste Irving Fisher l’a résumée en 1911 : <b>M × V = P × Q</b>. La quantité de monnaie (M), multipliée par le nombre de fois où elle change de mains (V), est égale aux prix (P) multipliés par la quantité de biens vendus (Q). Si V et Q ne bougent pas, doubler M revient à doubler les prix.</p>
<h3>Vrai à long terme, discuté à court terme</h3>
<p>Sur des décennies, les pays qui créent beaucoup de monnaie ont beaucoup d’inflation : la relation est très solide. Mais à court terme, les choses se compliquent. Après la crise de 2008, les banques centrales ont créé énormément de monnaie sans provoquer d’inflation, parce que cet argent est resté dans les banques au lieu d’être dépensé. En 2021-2022, au contraire, l’inflation est revenue, en partie à cause de la monnaie, en partie à cause des pénuries et de l’énergie.</p>
<h3>À retenir</h3>
<p>La monnaie ne crée pas de richesse par elle-même : à long terme, en imprimer trop fait monter les prix. Mais la vitesse à laquelle elle circule change avec la confiance, ce qui rend son effet difficile à prévoir. La notice complète présente les preuves et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Weimar en 1923 et la « révolution des prix » du XVIe siècle.",
      raisonnement: "De Bodin à Fisher, l’équation, Cambridge, Hume et la création monétaire par les banques.",
      preuves: "Une corrélation de 0,95 sur le long terme, les hyperinflations, la fragilité en inflation basse.",
      cas: "Weimar, le Zimbabwe, l’énigme de 2008-2020 et le retour de l’inflation.",
      objections: "Vitesse instable, monnaie endogène, loi de Goodhart, chocs d’offre, théorie budgétaire.",
      ecoles: "Aristote et Oresme, Ricardo, Keynes, Friedman, Hayek et Cantillon, la théorie monétaire moderne.",
      source: "Hume, 1752 : la hausse des prix ne suit pas immédiatement l’afflux de monnaie.",
      quiz: "Cinq questions corrigées, dont un calcul, et une question sur le franc suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     4. DESTRUCTION CRÉATRICE
     ===================================================================== */
  const cycle = fig(270, `${arrow("x1")}
    ${[["Innovation", "nouveau produit ou procédé", 250, 14, "note"], ["Profit temporaire", "position de monopole", 450, 100, "gold"], ["Imitation", "les concurrents arrivent", 250, 196, "plum"], ["Destruction", "anciennes entreprises évincées", 50, 100, "serial"]].map(([a, b, x, y, c]) => `
      <rect x="${x}" y="${y}" width="160" height="58" rx="10" style="fill:var(--card); stroke:var(--${c}); stroke-width:1.5"/>
      <text x="${x + 80}" y="${y + 26}" text-anchor="middle" ${T}>${a}</text><text x="${x + 80}" y="${y + 44}" text-anchor="middle" ${S}>${b}</text>`).join("")}
    <path d="M410,43 C470,43 530,60 530,97" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#x1)"/>
    <path d="M530,158 C530,195 470,225 412,225" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#x1)"/>
    <path d="M250,225 C190,225 130,195 130,160" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#x1)"/>
    <path d="M130,100 C130,60 190,43 248,43" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#x1)"/>
    <text x="330" y="134" text-anchor="middle" ${S}>Les ressources libérées</text><text x="330" y="150" text-anchor="middle" ${S}>financent la vague suivante</text>`,
    "Le cycle schumpétérien. Le profit de l’innovateur attire les imitateurs ; leur arrivée détruit à la fois sa rente et les anciennes activités, et libère capitaux et travailleurs pour de nouvelles innovations.",
    "Schéma circulaire : innovation, profit temporaire, imitation, destruction");

  const ladder = fig(260, (() => {
    let s = `<text x="20" y="26" ${T}>L’échelle de qualité (Aghion et Howitt, 1992)</text>`;
    const steps = [["Pellicule", "Kodak, 1900-2000"], ["Numérique", "appareils compacts"], ["Smartphone", "photo dans le téléphone"], ["Calcul", "photo computationnelle"]];
    steps.forEach(([a, b], i) => {
      const x = 40 + i * 145, y = 200 - i * 45;
      const last = i === steps.length - 1;
      s += `<rect x="${x}" y="${y}" width="135" height="40" rx="8" style="fill:${last ? "var(--note-soft)" : "var(--card)"}; stroke:var(--${last ? "note" : "line"})"/>`;
      s += `<text x="${x + 67}" y="${y + 18}" text-anchor="middle" ${T}>${a}</text><text x="${x + 67}" y="${y + 33}" text-anchor="middle" ${S}>${b}</text>`;
    });
    s += `<text x="620" y="252" text-anchor="end" ${S}>Chaque marche rend la précédente obsolète et en capte la rente.</text>`;
    return s;
  })(), "Dans les modèles schumpétériens de croissance, chaque innovation améliore la qualité et remplace la précédente. La croissance vient de cette succession ; elle a pour envers la disparition des entreprises dépassées. Exemple illustratif tiré de la photographie.", "Schéma en escalier de quatre générations de technologies photographiques");

  OEC.notices["destruction-creatrice"] = {
    essentiel: [
      "Pour Schumpeter, le capitalisme ne progresse pas par une concurrence de prix entre produits identiques, mais par l’innovation : de nouveaux produits, procédés, marchés et organisations qui rendent les anciens obsolètes.",
      "Cette « destruction créatrice » est la source principale de la hausse du niveau de vie sur deux siècles. Elle a pour envers la disparition d’entreprises, de métiers et parfois de régions entières.",
      "Ceux qu’elle menace cherchent souvent à la bloquer. Une grande partie des débats actuels, sur les géants du numérique, l’intelligence artificielle ou la politique industrielle, porte sur la manière de la favoriser tout en protégeant ceux qui en paient le prix."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : l’entreprise qui avait inventé ce qui l’a ruinée", html: `
<p>En 1975, un jeune ingénieur de Kodak, Steven Sasson, met au point le premier appareil photo numérique : un boîtier de près de quatre kilos qui enregistre une image en noir et blanc sur une cassette en vingt-trois secondes. Kodak domine alors le marché mondial de la pellicule, l’une des activités les plus rentables du monde. L’invention apparaît surtout comme une menace pour son cœur de métier. En janvier 2012, Kodak se place sous la protection de la loi américaine sur les faillites. Entre-temps, la photographie numérique, puis le smartphone, ont rendu la pellicule presque inutile.</p>
<p>Cette histoire résume l’idée de <a href="#eco-schumpeter">Joseph Schumpeter</a>. Le danger, pour une entreprise, ne vient pas d’un concurrent qui vend la même pellicule un peu moins cher, mais d’une innovation qui rend la pellicule elle-même obsolète. Et ce mouvement, qui ruine des entreprises prospères, est aussi celui par lequel nos niveaux de vie ont été multipliés.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le circuit sans innovation</h4>
<p>Dans sa Théorie de l’évolution économique (1911), Schumpeter imagine d’abord une économie sans innovation : chaque année, on produit les mêmes biens, avec les mêmes méthodes, pour les mêmes clients. La concurrence fait disparaître les profits au-delà de la rémunération normale du travail et du capital. L’économie tourne en rond ; c’est un « circuit ». Cette image correspond à l’équilibre stationnaire des économistes de son temps.</p>
<h4>2. L’entrepreneur rompt le circuit</h4>
<p>Ce qui fait bouger l’économie, c’est l’entrepreneur, qui réalise des « nouvelles combinaisons ». Schumpeter en distingue cinq : un bien nouveau, une méthode de production nouvelle, un marché nouveau, une nouvelle source de matières premières, une nouvelle organisation de l’industrie. L’entrepreneur n’est pas forcément l’inventeur, ni le propriétaire du capital : c’est celui qui met l’idée en œuvre contre la routine, les résistances et l’incertitude. Il obtient pour cela du crédit bancaire, qui lui permet d’acquérir des ressources avant d’avoir produit quoi que ce soit.</p>
<h4>3. Un profit temporaire</h4>
<p>L’innovateur réussi bénéficie d’un monopole temporaire et d’un profit élevé. C’est ce profit qui récompense le risque et motive l’innovation. Mais il attire des imitateurs, qui arrivent en grappes et font baisser les prix. Le profit disparaît, jusqu’à la prochaine innovation.</p>
${cycle}
<h4>4. La destruction créatrice</h4>
<p>Dans Capitalisme, socialisme et démocratie (1942), Schumpeter généralise. Le capitalisme est « par nature une méthode de transformation économique ». La concurrence qui compte n’est pas celle des prix entre produits identiques, que décrivent les manuels, mais celle de la marchandise nouvelle, de la technique nouvelle, de la source d’approvisionnement nouvelle, du nouveau type d’organisation. Elle frappe non les marges des entreprises existantes, mais leurs fondations et leur existence même. D’où un paradoxe : une grande entreprise en position dominante n’est jamais à l’abri, et un certain pouvoir de monopole peut même être nécessaire pour financer l’innovation.</p>
<h4>5. La croissance par l’échelle de qualité</h4>
<p>En 1992, Philippe Aghion et Peter Howitt formalisent cette intuition dans un modèle de croissance. Chaque innovation améliore la qualité d’un produit et remplace la génération précédente, dont le producteur perd sa rente. La croissance de long terme dépend du rythme de ces remplacements, donc des incitations à innover : protection de la propriété intellectuelle, concurrence, éducation, financement. Le modèle fait apparaître un effet surprenant : l’innovateur ne tient pas compte de la perte qu’il inflige au précédent, et la société peut donc innover trop ou trop peu selon les cas.</p>
${ladder}
<h4>6. Concurrence et innovation : une relation en U inversé</h4>
<p>La concurrence stimule-t-elle l’innovation ? Aghion et ses coauteurs montrent en 2005, sur des données britanniques, que la relation a la forme d’un U inversé. Quand la concurrence est faible, l’intensifier pousse les entreprises à innover pour lui échapper. Quand elle est déjà très forte, l’intensifier décourage l’innovation, car le profit espéré devient trop faible. D’où l’importance de la politique de la concurrence, qui doit éviter à la fois les monopoles installés et la concurrence qui ne laisse aucun profit à l’innovateur.</p>
<h4>7. Pourquoi on cherche à l’arrêter</h4>
<p>La destruction créatrice fait des perdants concentrés et visibles, et des gagnants dispersés et souvent futurs. Les entreprises en place, les métiers menacés, les régions spécialisées ont donc de fortes raisons de s’y opposer. Les historiens ont documenté de nombreux cas où les pouvoirs en place l’ont freinée, des corporations hostiles aux nouvelles machines aux empires autrichien et russe qui retardèrent le chemin de fer. <a href="#eco-acemoglu">Acemoglu</a> et Robinson en font l’une des clés de la pauvreté des nations (<a href="#c-institutions-inclusives">voir la notice sur les institutions</a>).</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Une économie en renouvellement permanent</h4>
<p>Les statistiques sur les flux d’emplois révèlent l’ampleur du phénomène. Aux États-Unis, l’enquête JOLTS du Bureau of Labor Statistics enregistre chaque mois plusieurs millions d’embauches et presque autant de départs. Derrière une variation nette de l’emploi de quelques dizaines de milliers de postes se cachent des millions de créations et de destructions. Steven Davis et John Haltiwanger ont montré que ce brassage est une caractéristique permanente des économies de marché, et non une particularité des crises.</p>
<h4>La réallocation, moteur de la productivité</h4>
<p>Lucia Foster, John Haltiwanger et C. J. Krizan (2001) décomposent la croissance de la productivité de l’industrie américaine. Une part importante, souvent de l’ordre de la moitié selon les secteurs et les périodes, provient non des gains réalisés au sein des entreprises existantes, mais de la réallocation : les entreprises les moins productives disparaissent, les plus productives grandissent, de nouvelles entrent. Dans le commerce de détail, cette part est encore plus grande, avec le remplacement des petits magasins indépendants par des chaînes plus productives.</p>
<h4>Un dynamisme en déclin ?</h4>
<p>Depuis les années 1980, plusieurs indicateurs de ce dynamisme baissent aux États-Unis : la part des jeunes entreprises dans l’emploi, le taux de création d’entreprises, la mobilité des travailleurs entre emplois. Ryan Decker et ses coauteurs l’ont documenté dans une série de travaux. Les explications discutées incluent la concentration croissante des marchés autour d’entreprises « superstars », le vieillissement de la population, la réglementation et les effets de réseau du numérique.</p>` }
    ],
    cas: [
      { titre: "La crise horlogère suisse et la Swatch", html: `
<p>Dans les années 1960, l’horlogerie suisse domine le monde avec ses montres mécaniques. À la fin de la décennie, des chercheurs suisses à Neuchâtel et l’entreprise japonaise Seiko mettent au point les premières montres à quartz, plus précises et bientôt bien moins chères. Les Japonais, puis les fabricants de Hong Kong, les industrialisent massivement. En une quinzaine d’années, l’emploi horloger suisse passe d’environ 90 000 personnes au début des années 1970 à environ un tiers de ce nombre au milieu des années 1980 ; des centaines d’entreprises disparaissent dans l’Arc jurassien.</p>
<p>La réponse vient d’une innovation à la fois technique et commerciale. Les ingénieurs d’ETA conçoivent une montre à quartz en plastique comportant beaucoup moins de pièces qu’une montre classique, assemblée de façon automatisée. Lancée en 1983, la Swatch, vendue comme un accessoire de mode, rencontre un succès mondial. Sous la direction de Nicolas G. Hayek, les groupes horlogers fusionnés deviennent le Swatch Group, tandis que le haut de gamme mécanique se repositionne sur le luxe. La destruction a été réelle et douloureuse, mais l’industrie s’est réinventée.</p>` },
      { titre: "Kodak et Fujifilm", html: `
<p>Kodak et le japonais Fujifilm affrontent la même menace numérique. Kodak investit dans le numérique, mais tarde à abandonner une pellicule encore très rentable, et ses tentatives de diversification échouent. Fujifilm, au contraire, réduit sa dépendance à la pellicule et réutilise ses compétences en chimie et en traitement des surfaces dans de nouveaux domaines : imagerie médicale, matériaux pour écrans, produits pharmaceutiques et même cosmétiques. Le cas montre que la destruction créatrice ne condamne pas mécaniquement les entreprises en place ; elle punit celles qui défendent leur ancienne rente au lieu de se transformer.</p>` },
      { titre: "Les luddites, 1811-1816", html: `
<p>Dans les Midlands et le nord de l’Angleterre, des artisans du textile détruisent des métiers mécaniques qui menacent leurs revenus et leur savoir-faire, en se réclamant d’un mythique « général Ludd ». Le Parlement fait de la destruction de machines un crime passible de la peine de mort en 1812, et l’armée est envoyée. Le mot « luddite » est resté pour désigner une hostilité aveugle au progrès. Les historiens nuancent ce jugement : les luddites ne rejetaient pas toutes les machines, mais celles qui servaient à contourner les règles de leur métier et à baisser les salaires. Leur crainte n’était pas absurde : les tisserands à bras ont vu leurs revenus s’effondrer pendant des décennies, ce que Ricardo lui-même reconnut en 1821.</p>` }
    ],
    objections: `
<h4>1. Les perdants ne sont pas ceux qui gagnent</h4>
<p>Les gains de la destruction créatrice profitent à l’ensemble des consommateurs et aux innovateurs ; les pertes se concentrent sur des travailleurs et des régions précis, qui retrouvent rarement une situation équivalente. Sans assurance chômage, formation et aides à la mobilité, l’argument du progrès global sonne creux pour eux.</p>
<h4>2. Les géants peuvent bloquer la destruction</h4>
<p>Schumpeter voyait dans la grande entreprise un moteur de l’innovation. Mais une entreprise dominante peut aussi racheter ses jeunes concurrents avant qu’ils ne la menacent, une pratique que des économistes ont appelée « acquisitions tueuses ». Le déclin du dynamisme américain et la concentration des marchés numériques nourrissent ce débat.</p>
<h4>3. La direction du progrès</h4>
<p><a href="#eco-acemoglu">Acemoglu</a> objecte que toutes les innovations ne se valent pas : certaines créent de nouvelles tâches pour les travailleurs, d’autres se contentent de les remplacer. La destruction créatrice n’est pas une force aveugle, et sa direction peut être influencée (<a href="#controverses" data-debat="acemoglu-schumpeter">voir son débat avec Schumpeter</a>).</p>
<h4>4. Destruction sans compte</h4>
<p>Les économistes de l’environnement soulignent que la croissance par l’innovation a aussi détruit des ressources naturelles que le marché ne valorisait pas. Pour eux, la question n’est pas seulement le rythme de l’innovation, mais son orientation, vers des technologies économes en énergie et en matières.</p>
<h4>5. Le capitalisme survivra-t-il ?</h4>
<p>Schumpeter lui-même était pessimiste : la routinisation de l’innovation dans les grandes entreprises rendrait l’entrepreneur superflu, et l’hostilité des intellectuels minerait les institutions du capitalisme. Ce pronostic ne s’est pas réalisé sous la forme qu’il imaginait, mais la question de la capacité des sociétés à accepter le changement reste ouverte.</p>`,
    ecoles: `
<p><b><a href="#eco-marx">Marx</a></b> avait décrit avant Schumpeter une bourgeoisie qui ne peut exister sans révolutionner constamment les instruments de production. Schumpeter lui consacre les premiers chapitres de son livre de 1942.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> voit dans la concurrence une « procédure de découverte » (1968) : elle révèle des possibilités que personne ne connaissait, ce qui rejoint l’idée de Schumpeter.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> s’inquiète en 1930 du « chômage technologique », tout en prédisant qu’à long terme la productivité libérera du temps.</p>
<p><b><a href="#eco-ricardo">Ricardo</a></b> admet en 1821 que les machines peuvent nuire durablement aux ouvriers.</p>
<p><b>Joel Mokyr</b>, Nobel 2025 avec Aghion et Howitt, explique pourquoi l’innovation est devenue continue en Europe à partir du XVIIIe siècle : une culture qui valorisait la connaissance utile et sa diffusion.</p>
<p><b><a href="#eco-acemoglu">Acemoglu</a> et Robinson</b> montrent que les élites extractives bloquent la destruction créatrice pour préserver leur pouvoir.</p>`,
    source: {
      titre: "Joseph Schumpeter, Capitalisme, socialisme et démocratie, 1942, chapitre 7",
      texte: "L’impulsion fondamentale qui met et maintient en mouvement la machine capitaliste vient des nouveaux biens de consommation, des nouvelles méthodes de production et de transport, des nouveaux marchés, des nouvelles formes d’organisation industrielle créées par l’entreprise capitaliste.",
      notes: `
<p><b>Le contexte.</b> Schumpeter écrit pendant la Seconde Guerre mondiale, à Harvard. Le capitalisme sort discrédité de la Grande Dépression, et beaucoup jugent la planification supérieure. Il défend l’efficacité du capitalisme sur un terrain inattendu : non l’équilibre des marchés, mais le changement.</p>
<p><b>La liste.</b> On y retrouve les « nouvelles combinaisons » de 1911. L’innovation n’est pas seulement technique : un nouveau marché ou une nouvelle organisation (la chaîne de montage, le libre-service, la plateforme numérique) peut être aussi révolutionnaire qu’une invention.</p>
<p><b>Le paradoxe.</b> Quelques chapitres plus loin, Schumpeter prédit que ce même capitalisme cédera la place au socialisme, non par échec, mais par succès : l’innovation deviendra la routine de grandes bureaucraties, et l’entrepreneur, figure héroïque du système, perdra sa raison d’être.</p>`
    },
    quiz: [
      { q: "Pour Schumpeter, quelle forme de concurrence compte vraiment ?",
        o: ["La baisse des prix entre produits identiques", "La concurrence des produits, techniques et organisations nouveaux", "La concurrence entre pays", "La concurrence entre travailleurs pour les emplois"], c: 1,
        e: "La concurrence par l’innovation menace l’existence même des entreprises en place, et non seulement leurs marges." },
      { q: "Qui est l’entrepreneur au sens de Schumpeter ?",
        o: ["Le propriétaire du capital", "L’inventeur d’une technique", "Celui qui met en œuvre de nouvelles combinaisons contre la routine", "Le dirigeant d’une grande entreprise"], c: 2,
        e: "L’entrepreneur n’est ni forcément l’inventeur, ni le capitaliste : c’est celui qui réalise l’innovation, souvent grâce au crédit." },
      { q: "Que montrent Foster, Haltiwanger et Krizan sur la productivité industrielle américaine ?",
        o: ["Qu’elle vient uniquement des grandes entreprises", "Qu’une part importante provient de la réallocation entre entreprises, entrées et sorties comprises", "Qu’elle a baissé depuis 1980", "Qu’elle dépend surtout des salaires"], c: 1,
        e: "Le remplacement des entreprises les moins productives par de plus productives explique une part importante, souvent de l’ordre de la moitié, des gains de productivité." },
      { q: "Selon Aghion et ses coauteurs (2005), comment la concurrence agit-elle sur l’innovation ?",
        o: ["Plus de concurrence augmente toujours l’innovation", "Plus de concurrence la réduit toujours", "La relation a une forme de U inversé", "Il n’y a aucun lien"], c: 2,
        e: "Une concurrence modérée pousse à innover pour s’en échapper ; une concurrence extrême réduit trop le profit espéré de l’innovation." },
      { q: "Pourquoi la destruction créatrice suscite-t-elle tant de résistances ?",
        o: ["Parce qu’elle réduit toujours le niveau de vie moyen", "Parce que les pertes sont concentrées et visibles, et les gains dispersés et futurs", "Parce que les nouvelles entreprises paient moins d’impôts que les anciennes", "Parce qu’elle ne concerne que les grandes entreprises"], c: 1,
        e: "Ceux qui perdent leur emploi ou leur rente sont identifiables et organisés ; les bénéficiaires sont nombreux, diffus, et souvent pas encore nés." }
    ],
    ouverte: {
      q: "La crise horlogère des années 1970-1980 a fait disparaître une grande partie des emplois de l’Arc jurassien, avant la renaissance de l’industrie. Que peut faire une région pour traverser une vague de destruction créatrice ?",
      r: "L’exemple suisse suggère plusieurs leviers. Conserver et transformer les compétences : le savoir-faire en micromécanique a servi à la Swatch, mais aussi aux technologies médicales et à la microtechnique. Favoriser la réorganisation industrielle, ici la fusion des groupes en difficulté et l’automatisation. Accompagner les travailleurs par l’assurance chômage, la formation continue et l’apprentissage, qui facilite les reconversions. Enfin, ne pas chercher à protéger l’ancien produit à tout prix : la renaissance est venue d’une innovation, non du sauvetage de la montre mécanique bon marché. Un sceptique rappellera que tous les travailleurs licenciés n’en ont pas profité, et que la reprise a pris plus d’une décennie."
    },
    lectures: [
      ["Accessible", "Philippe Aghion, Céline Antonin et Simon Bunel, Le Pouvoir de la destruction créatrice, 2020. Une synthèse claire par l’un des lauréats du Nobel 2025."],
      ["Accessible", "Thomas McCraw, Prophet of Innovation: Joseph Schumpeter and Creative Destruction, 2007. La biographie de référence."],
      ["Intermédiaire", "Joseph Schumpeter, Capitalisme, socialisme et démocratie (1942), chapitres 7 et 8 ; Théorie de l’évolution économique (1911), chapitre 2."],
      ["Intermédiaire", "Joel Mokyr, A Culture of Growth, 2016."],
      ["Recherche", "Philippe Aghion et Peter Howitt, « A Model of Growth through Creative Destruction », Econometrica, 1992 ; Aghion et al., « Competition and Innovation: An Inverted-U Relationship », Quarterly Journal of Economics, 2005."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Kodak, l’inventeur ruiné par son invention</h3>
<p>En 1975, un ingénieur de Kodak invente le premier appareil photo numérique. Kodak, qui gagne des fortunes avec la pellicule, ne veut pas menacer son propre marché. En 2012, l’entreprise fait faillite : le numérique, puis le smartphone, ont rendu la pellicule presque inutile.</p>
<h3>L’idée de Schumpeter</h3>
<p>Pour l’économiste <a href="#eco-schumpeter">Joseph Schumpeter</a>, c’est ainsi que progresse le capitalisme. Ce n’est pas la concurrence entre des produits identiques qui compte, mais l’arrivée de produits, de méthodes et d’organisations nouveaux. L’entreprise qui innove gagne beaucoup pendant un temps ; puis ses concurrents l’imitent, les anciennes entreprises disparaissent, et une nouvelle vague commence. Il appelle ce mouvement la <b>destruction créatrice</b>.</p>
${cycle}
<h3>Un progrès qui fait des perdants</h3>
<p>Ce processus explique une grande partie de la hausse de notre niveau de vie : l’électricité, l’automobile, l’ordinateur. Mais il fait aussi des victimes. Dans les années 1970, l’arrivée des montres à quartz a détruit une grande partie des emplois de l’horlogerie suisse, avant que la Swatch ne relance l’industrie en 1983. Ceux qui perdent leur emploi ne sont pas ceux qui profitent de l’innovation.</p>
<h3>À retenir, et à discuter</h3>
<p>La destruction créatrice est au cœur des débats actuels : les géants du numérique la freinent-ils en rachetant leurs jeunes concurrents ? L’intelligence artificielle va-t-elle créer plus d’emplois qu’elle n’en détruit ? La notice complète présente les preuves et ces débats.</p>`,
      quiz: [0, 4]
    },
    resumes: {
      depart: "Kodak, inventeur de l’appareil numérique qui a causé sa faillite.",
      raisonnement: "Sept étapes, du circuit sans innovation à l’échelle de qualité et aux résistances.",
      preuves: "Flux d’emplois, réallocation et productivité, déclin du dynamisme américain.",
      cas: "La crise horlogère suisse et la Swatch, Kodak et Fujifilm, les luddites.",
      objections: "Perdants concentrés, géants qui bloquent, direction du progrès, environnement, avenir du capitalisme.",
      ecoles: "Marx, Hayek, Keynes, Ricardo, Mokyr, Acemoglu et Robinson.",
      source: "Schumpeter, 1942 : l’impulsion fondamentale de la machine capitaliste.",
      quiz: "Cinq questions corrigées et une question sur l’Arc jurassien.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
