/* Œconomia — notices longues, lot 4 (c) : stagnation séculaire, asymétrie d'information */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     21. STAGNATION SÉCULAIRE
     ===================================================================== */
  const epargneInv = fig(340, (() => {
    const L = 90, R = 600, Top = 50, B = 270, X = (q) => L + q * (R - L) / 10, Y = (r) => 160 - r * 22;
    let s = `<text x="20" y="24" ${T}>Épargne et investissement désirés au plein emploi (schéma)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<line x1="${L}" y1="${Y(0)}" x2="${R}" y2="${Y(0)}" style="stroke:var(--ink-soft); stroke-dasharray:4 4"/>`;
    s += `<text x="${L - 8}" y="${Y(0) + 4}" text-anchor="end" ${M}>0 %</text>`;
    s += `<text x="${L - 8}" y="${Top + 6}" text-anchor="end" ${M}>taux</text><text x="${L - 8}" y="${Top + 20}" text-anchor="end" ${M}>réel</text>`;
    s += `<text x="${R}" y="${B + 30}" text-anchor="end" ${M}>montants épargnés et investis</text>`;
    s += `<line x1="${X(1)}" y1="${Y(-2)}" x2="${X(8)}" y2="${Y(4.5)}" style="stroke:var(--note); stroke-width:2.5; opacity:.35"/>`;
    s += `<line x1="${X(1)}" y1="${Y(4.5)}" x2="${X(8)}" y2="${Y(-2)}" style="stroke:var(--serial); stroke-width:2.5; opacity:.35"/>`;
    s += `<line x1="${X(3)}" y1="${Y(-2)}" x2="${X(10)}" y2="${Y(4.5)}" style="stroke:var(--note); stroke-width:2.5"/>`;
    s += `<line x1="${X(0.2)}" y1="${Y(3)}" x2="${X(7)}" y2="${Y(-3.4)}" style="stroke:var(--serial); stroke-width:2.5"/>`;
    s += `<line x1="${X(4.5)}" y1="${Y(1.25)}" x2="${X(4.5)}" y2="${Y(4.3)}" style="stroke:var(--ink-soft); stroke-dasharray:2 3"/>`;
    s += `<circle cx="${X(4.5)}" cy="${Y(1.25)}" r="5" style="fill:var(--ink-soft)"/>`;
    s += `<text x="${X(4.5)}" y="${Y(4.3) - 6}" text-anchor="middle" ${S}>avant : taux d’équilibre positif</text>`;
    s += `<line x1="${X(4.27)}" y1="${Y(-0.83)}" x2="${X(4.27)}" y2="${Y(-4.1)}" style="stroke:var(--gold); stroke-dasharray:2 3"/>`;
    s += `<circle cx="${X(4.27)}" cy="${Y(-0.83)}" r="6" style="fill:var(--gold)"/>`;
    s += `<text x="${X(4.27)}" y="${Y(-4.1) + 14}" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">aujourd’hui : taux d’équilibre négatif</text>`;
    s += `<text x="${X(8.6)}" y="${Y(4.5) - 6}" style="fill:var(--note); font:700 12px Manrope, sans-serif">Épargne →</text>`;
    s += `<text x="${X(0.3)}" y="${Y(3) - 8}" style="fill:var(--serial); font:700 12px Manrope, sans-serif">Investissement ←</text>`;
    s += `<text x="20" y="326" ${S}>Plus d’épargne (vieillissement, inégalités) et moins d’investissement font baisser le taux naturel.</text>`;
    return s;
  })(), "Le cœur de l’hypothèse de Summers. Si le taux d’intérêt qui égalise épargne et investissement au plein emploi devient négatif, et que la banque centrale ne peut pas descendre assez bas, l’économie reste en dessous du plein emploi, ou n’y arrive qu’au prix de bulles financières.", "Courbes d’épargne et d’investissement se croisant sous zéro");

  const rstar = fig(260, (() => {
    const L = 70, R = 610, B = 210, X = (y) => L + (y - 1990) * (R - L) / 33, Y = (v) => B - (v + 1) * 32;
    const pts = [[1990, 3.6], [1995, 3.2], [2000, 3], [2005, 2.3], [2008, 1.6], [2010, 0.7], [2013, 0.3], [2016, 0.2], [2019, 0.3], [2021, 0.1], [2023, 0.8]];
    let s = `<text x="20" y="24" ${T}>Ordre de grandeur du taux naturel réel estimé, États-Unis (en %)</text>`;
    [-1, 0, 1, 2, 3, 4].forEach((v) => (s += `<line x1="${L}" y1="${Y(v)}" x2="${R}" y2="${Y(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end" ${M}>${v}</text>`));
    [1990, 2000, 2010, 2020].forEach((y) => (s += `<text x="${X(y)}" y="${B + 22}" text-anchor="middle" ${M}>${y}</text>`));
    s += `<polyline points="${pts.map(([y, v]) => `${X(y)},${Y(v)}`).join(" ")}" style="fill:none; stroke:var(--plum); stroke-width:2.5"/>`;
    s += `<text x="${X(2011)}" y="${Y(2.4)}" ${S}>Estimations du type Laubach-Williams :</text><text x="${X(2011)}" y="${Y(2.4) + 15}" ${S}>forte baisse, puis légère remontée</text>`;
    return s;
  })(), "Tracé schématique, arrondi, d’après les estimations du modèle Laubach-Williams publiées par la Réserve fédérale de New York. Ces estimations sont très incertaines et révisées régulièrement ; c’est la tendance, non le niveau exact, qui compte.", "Courbe descendante du taux naturel de 1990 à 2023");

  OEC.notices["stagnation-seculaire"] = {
    essentiel: [
      "La stagnation séculaire désigne une situation durable où l’épargne désirée dépasse l’investissement désiré au plein emploi, de sorte que le taux d’intérêt d’équilibre, le « taux naturel », devient très bas, voire négatif.",
      "La banque centrale ne pouvant guère descendre sous zéro, l’économie reste alors durablement en dessous de son potentiel, ou n’atteint le plein emploi qu’au prix de bulles financières et d’un endettement croissant.",
      "Formulée par Alvin Hansen en 1938 et relancée par Larry Summers en 2013, l’hypothèse a structuré le débat macroéconomique des années 2010. Le retour de l’inflation et des taux en 2022 a relancé la discussion sur sa portée."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi la reprise ne vient-elle pas ?", html: `
<p>En décembre 1938, l’économiste de Harvard Alvin Hansen prononce son discours de président de l’American Economic Association. Les États-Unis sortent à peine d’une nouvelle récession, celle de 1937-1938, survenue avant même que l’économie ait retrouvé le plein emploi. Hansen avance une explication inquiétante : la croissance de la population ralentit, la frontière de l’Ouest est fermée, les grandes innovations consommatrices de capital, comme le chemin de fer, sont derrière nous. Les occasions d’investir se raréfient. Il parle de « reprises maladives qui meurent dans l’œuf ».</p>
<p>Soixante-quinze ans plus tard, en novembre 2013, Larry <a href="#eco-summers">Summers</a>, ancien secrétaire au Trésor, reprend l’expression lors d’une conférence du FMI. Cinq ans après la crise de 2008, malgré des taux d’intérêt nuls et des achats massifs de titres par les banques centrales, la reprise reste molle dans tous les pays riches. Summers observe que même avant la crise, pendant la bulle immobilière, la croissance n’avait pas été spectaculaire, et l’inflation était restée sage. Et si le problème était plus profond qu’une crise financière ?</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le taux naturel</h4>
<p>Le Suédois Knut Wicksell appelait, en 1898, « taux naturel » le taux d’intérêt qui égalise l’épargne et l’investissement au plein emploi, sans inflation ni déflation (<a href="#c-taux-naturel">voir taux naturel</a>). Si la banque centrale maintient son taux au-dessus, l’investissement est freiné, la demande manque, le chômage augmente. En dessous, l’économie surchauffe.</p>
<h4>2. Un taux naturel en baisse</h4>
<p>Depuis les années 1980, les taux d’intérêt réels à long terme ont baissé dans tous les pays riches, de plusieurs points de pourcentage. Les estimations du taux naturel, comme celles de Thomas Laubach et John Williams pour la Réserve fédérale, ou de Łukasz Rachel et Thomas Smith (2015) pour la Banque d’Angleterre, suggèrent qu’il est passé d’environ 3 % à moins de 1 % en termes réels, voire en dessous de zéro dans certaines régions.</p>
${rstar}
<h4>3. Pourquoi plus d’épargne ?</h4>
<p>Plusieurs forces ont poussé l’épargne désirée vers le haut. Le vieillissement de la population : les personnes de 40 à 65 ans, qui épargnent pour leur retraite, sont plus nombreuses, et l’allongement de l’espérance de vie oblige à épargner davantage. La hausse des inégalités : les ménages aisés épargnent une plus grande part de leur revenu. Ben Bernanke a ajouté en 2005 la « surabondance mondiale d’épargne » venue d’Asie et des pays pétroliers, qui accumulaient des réserves après les crises de la fin des années 1990.</p>
<h4>4. Pourquoi moins d’investissement ?</h4>
<p>De l’autre côté, la demande d’investissement a faibli. Le ralentissement de la croissance de la population active réduit les besoins en bâtiments et en équipements. Les biens d’équipement, surtout informatiques, sont devenus beaucoup moins chers. Les entreprises les plus valorisées, Google, Facebook, n’ont besoin que de peu de capital physique comparé aux grandes entreprises industrielles du passé.</p>
${epargneInv}
<h4>5. Le plancher des taux</h4>
<p>Si le taux naturel devient négatif, la banque centrale devrait fixer des taux réels encore plus bas. Avec une inflation faible, cela suppose des taux nominaux négatifs. Or il existe un plancher : si les taux deviennent trop négatifs, les épargnants retirent leur argent en billets, qui rapportent zéro. C’est la <a href="#c-trappe-liquidite">trappe à liquidité</a> de Keynes et Hicks, sous une forme moderne.</p>
<h4>6. Deux issues insatisfaisantes</h4>
<p>Summers en déduit que l’économie fait face à un dilemme. Soit la demande reste insuffisante, et la croissance et l’emploi restent en dessous de leur potentiel. Soit le plein emploi est atteint grâce à des taux très bas qui alimentent des bulles d’actifs et l’endettement, comme la bulle immobilière américaine des années 2000. Dans les deux cas, la politique monétaire seule ne suffit pas.</p>
<h4>7. Le rôle de la politique budgétaire</h4>
<p>La solution privilégiée par Summers est l’investissement public, financé par l’emprunt. Si l’État peut emprunter à des taux inférieurs à la croissance, comme le montre Olivier Blanchard dans son discours de président de l’American Economic Association en 2019, le coût budgétaire de la dette est faible, et l’investissement public peut absorber l’excès d’épargne sans créer de bulle (<a href="#c-r-g">voir r et g</a>).</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le précédent japonais</h4>
<p>Le Japon a connu, depuis les années 1990, presque tous les symptômes décrits par Summers : population vieillissante et déclinante, taux d’intérêt nuls puis négatifs, inflation proche de zéro, croissance faible, dette publique très élevée. Le pays a longtemps servi d’avertissement pour le reste du monde ; une partie des économistes y voient moins un échec qu’une adaptation à une démographie déclinante, puisque le PIB par personne en âge de travailler y a progressé à peu près comme ailleurs.</p>
<h4>Les taux négatifs</h4>
<p>Entre 2012 et 2022, la banque centrale du Danemark, la première, puis la Banque centrale européenne, la Banque nationale suisse, la banque centrale de Suède et la Banque du Japon ont fixé des taux directeurs négatifs, une première dans l’histoire. La BNS a maintenu un taux de −0,75 % de janvier 2015 à juin 2022. Des États, dont l’Allemagne et la Suisse, ont pu emprunter à dix ans à des taux négatifs : les investisseurs payaient pour leur prêter.</p>
<h4>Le retournement de 2022</h4>
<p>Avec le retour de l’inflation en 2021-2022, les banques centrales ont relevé leurs taux à un rythme inédit depuis les années 1980. Les taux à long terme ont fortement remonté. Ce retournement a été interprété de deux manières : pour certains, il réfute la stagnation séculaire ; pour d’autres, dont Summers lui-même, il montre surtout que de forts déficits publics et la transition énergétique ont augmenté la demande d’investissement, et que le taux naturel a peut-être remonté. La question reste ouverte.</p>` }
    ],
    cas: [
      { titre: "Hansen démenti par l’après-guerre", html: `
<p>Les craintes d’Alvin Hansen ont été balayées par les faits : après 1945, les États-Unis et l’Europe connaissent la plus forte croissance de leur histoire. La guerre a créé une demande massive, le baby-boom a relancé la croissance démographique, la reconstruction et les nouvelles industries (automobile, électroménager, aviation) ont absorbé une épargne considérable. Les critiques de Summers rappellent volontiers ce précédent : prédire l’épuisement des occasions d’investir s’est déjà révélé faux une fois.</p>` },
      { titre: "La Suisse et ses taux négatifs", html: `
<p>La Suisse a vécu de manière particulièrement aiguë les symptômes de la stagnation séculaire, combinés à l’attrait du franc comme valeur refuge. En janvier 2015, la BNS abandonne le cours plancher de 1,20 franc pour un euro et fixe son taux directeur à −0,75 %, le plus bas du monde. Les caisses de pension, qui doivent servir des rentes garanties, voient leurs rendements obligataires disparaître et réduisent progressivement les taux de conversion. Les prix immobiliers montent fortement, au point que la BNS active le volant anticyclique de fonds propres pour les banques. L’épisode illustre les effets secondaires des taux très bas sur l’épargne retraite et l’immobilier.</p>` },
      { titre: "L’offre contre la demande : Gordon", html: `
<p>Robert Gordon, de l’université Northwestern, propose une autre version de la stagnation séculaire, centrée sur l’offre. Dans The Rise and Fall of American Growth (2016), il soutient que les grandes inventions de 1870-1970, électricité, moteur à combustion, eau courante, téléphone, ont transformé la vie quotidienne bien plus profondément que l’informatique. La croissance de la productivité ralentit parce que les innovations les plus transformatrices sont derrière nous, et qu’il faut y ajouter des « vents contraires » : démographie, plafonnement de l’éducation, inégalités, dette. Pour Gordon, aucune politique de demande ne peut corriger ce ralentissement.</p>` }
    ],
    objections: `
<h4>1. Un cycle de dette, pas une stagnation</h4>
<p>Kenneth Rogoff a soutenu que la faiblesse des années 2010 s’explique par le « supercycle de la dette » qui suit toutes les grandes crises financières, et non par des forces durables. Une fois les bilans assainis, la croissance revient. Le retour de l’inflation en 2021-2022 va dans son sens.</p>
<h4>2. Les taux bas sont une cause, pas une conséquence</h4>
<p>La Banque des règlements internationales, avec Claudio Borio, conteste l’idée que le taux naturel soit fixé par l’épargne et l’investissement indépendamment de la politique monétaire. Des taux maintenus trop bas trop longtemps favoriseraient les cycles financiers, les bulles et le maintien d’entreprises peu productives, qui à leur tour ralentissent la croissance.</p>
<h4>3. Le taux naturel est inobservable</h4>
<p>Les estimations du taux naturel sont très imprécises, avec des intervalles de confiance de plusieurs points de pourcentage. Fonder la politique économique sur une variable aussi mal mesurée est risqué.</p>
<h4>4. L’innovation n’a pas dit son dernier mot</h4>
<p>Les optimistes technologiques, comme Erik Brynjolfsson et Andrew McAfee, jugent que les gains de productivité de l’informatique et de l’intelligence artificielle sont mal mesurés ou encore à venir. Le pessimisme de Gordon répéterait celui de Hansen, que l’après-guerre avait démenti.</p>`,
    ecoles: `
<p><b>Wicksell</b> définit le taux naturel en 1898.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> montre que l’économie peut rester durablement en sous-emploi.</p>
<p><b>Alvin Hansen</b>, principal diffuseur de Keynes aux États-Unis, formule la stagnation séculaire en 1938.</p>
<p><b><a href="#eco-summers">Summers</a></b> la relance en 2013 ; <a href="#eco-krugman">Krugman</a> la soutient.</p>
<p><b>Robert Gordon</b> en propose une version fondée sur l’offre et la productivité.</p>
<p><b>Rogoff</b> et la BRI la contestent, au nom du cycle de la dette ou des effets pervers des taux bas.</p>`,
    source: {
      titre: "Alvin Hansen, « Economic Progress and Declining Population Growth », American Economic Review, 1939",
      texte: "C’est là l’essence de la stagnation séculaire : des reprises maladives qui meurent dans l’œuf, et des dépressions qui se nourrissent d’elles-mêmes et laissent un noyau dur et apparemment inamovible de chômage.",
      notes: `
<p><b>Le contexte.</b> Le discours de Hansen est prononcé en décembre 1938, après la rechute de 1937-1938, et publié en mars 1939. Le chômage américain dépasse encore 15 %. Hansen, d’abord sceptique envers Keynes, est devenu son principal interprète aux États-Unis.</p>
<p><b>L’argument démographique.</b> Hansen attribue une part importante de l’investissement du XIXe siècle à la croissance de la population et à l’expansion territoriale. Leur ralentissement réduirait durablement les occasions d’investir.</p>
<p><b>Ce que Summers a repris.</b> Summers cite cette phrase pour décrire la reprise lente après 2008. Il y ajoute ce que Hansen ne pouvait pas voir : la contrainte du plancher des taux et le risque de bulles financières comme substitut à la demande manquante.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que la stagnation séculaire au sens de Summers ?",
        o: ["Une baisse durable de la population", "Une situation où le taux d’intérêt qui assure le plein emploi est très bas ou négatif", "Une inflation durable", "Un ralentissement des exportations"], c: 1,
        e: "L’excès d’épargne désirée sur l’investissement désiré pousse le taux naturel vers zéro ou en dessous." },
      { q: "Lequel de ces facteurs pousse l’épargne désirée à la hausse ?",
        o: ["La baisse de l’espérance de vie", "Le vieillissement de la population et la hausse des inégalités", "La baisse des revenus des plus riches", "La hausse des taux d’intérêt"], c: 1,
        e: "Les ménages proches de la retraite et les plus aisés épargnent davantage, ce qui augmente l’épargne totale." },
      { q: "Pourquoi la banque centrale ne peut-elle pas simplement fixer des taux très négatifs ?",
        o: ["C’est interdit par la constitution", "Parce que les épargnants retireraient leur argent en billets, qui rapportent zéro", "Parce que les banques refuseraient", "Parce que l’inflation l’empêche"], c: 1,
        e: "L’existence des billets crée un plancher aux taux nominaux, un peu en dessous de zéro." },
      { q: "Quelle est la version « par l’offre » de la stagnation séculaire défendue par Robert Gordon ?",
        o: ["Le manque de demande", "L’épuisement des grandes innovations transformatrices", "La hausse des impôts", "Le protectionnisme"], c: 1,
        e: "Pour Gordon, les inventions de 1870-1970 ont transformé la vie bien plus que l’informatique ; la productivité ralentit donc durablement." },
      { q: "Quel taux directeur la BNS a-t-elle appliqué de 2015 à 2022 ?",
        o: ["0 %", "−0,25 %", "−0,75 %", "−2 %"], c: 2,
        e: "Le taux de −0,75 %, l’un des plus bas du monde, a été maintenu de janvier 2015 à juin 2022." }
    ],
    ouverte: {
      q: "La Suisse, avec sa population vieillissante, son épargne élevée et sa faible dette publique, devrait-elle emprunter davantage pour investir, comme le recommande Summers ?",
      r: "Les arguments en faveur sont réels : la Confédération emprunte à des taux très bas, les besoins d’investissement sont importants (transition énergétique, transports, logement), et la dette publique suisse est parmi les plus faibles des pays riches. Mais le frein à l’endettement, accepté par 85 % des votants en 2001, oblige la Confédération à équilibrer ses comptes sur un cycle conjoncturel, et il jouit d’un large soutien. Ses défenseurs soulignent qu’il a protégé la Suisse des dérives budgétaires et que la remontée des taux depuis 2022 a réduit l’argument de la dette gratuite. Les économistes favorables à plus d’investissement proposent plutôt d’assouplir le frein pour les dépenses d’investissement, une « règle d’or », que de l’abandonner. Le débat suisse illustre bien la tension entre la prudence budgétaire et la théorie de la stagnation séculaire."
    },
    lectures: [
      ["Accessible", "Lawrence Summers, « The Age of Secular Stagnation », Foreign Affairs, mars-avril 2016."],
      ["Accessible", "Coen Teulings et Richard Baldwin (dir.), Secular Stagnation: Facts, Causes and Cures, livre électronique du CEPR, 2014, en accès libre."],
      ["Intermédiaire", "Robert Gordon, The Rise and Fall of American Growth, 2016, introduction et conclusion."],
      ["Intermédiaire", "Olivier Blanchard, « Public Debt and Low Interest Rates », American Economic Review, 2019."],
      ["Recherche", "Alvin Hansen, « Economic Progress and Declining Population Growth », American Economic Review, 1939 ; Łukasz Rachel et Thomas Smith, « Secular Drivers of the Global Real Interest Rate », Banque d’Angleterre, 2015."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Une reprise qui ne vient pas</h3>
<p>Après la crise de 2008, les banques centrales ont baissé leurs taux à zéro. Pourtant, la reprise est restée molle pendant des années dans tous les pays riches. En 2013, l’économiste américain Larry <a href="#eco-summers">Summers</a> propose une explication qu’un autre économiste, Alvin Hansen, avait déjà formulée en 1938 : la <b>stagnation séculaire</b>.</p>
<h3>Trop d’épargne, pas assez d’investissement</h3>
<p>L’idée est simple. Les ménages veulent épargner beaucoup, parce qu’ils vivent plus longtemps et que les plus riches épargnent davantage. Les entreprises, elles, investissent moins, parce que les machines et les ordinateurs coûtent moins cher et que la population active croît moins vite. Pour que toute cette épargne trouve preneur, le taux d’intérêt doit baisser, parfois en dessous de zéro.</p>
${epargneInv}
<h3>Le plancher des taux</h3>
<p>Une banque centrale ne peut pas descendre très en dessous de zéro, sinon les épargnants garderaient leurs billets. La Suisse a pourtant appliqué un taux de −0,75 % de 2015 à 2022. Selon Summers, quand cela ne suffit pas, l’économie reste au ralenti, ou ne se remet qu’en gonflant des bulles. Il recommande donc plus d’investissement public.</p>
<h3>À retenir</h3>
<p>L’idée reste débattue : la remontée de l’inflation et des taux depuis 2022 a relancé la discussion. La notice complète présente les causes, les chiffres et les objections.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Hansen en 1938, Summers en 2013 : pourquoi la reprise ne vient pas.",
      raisonnement: "Sept étapes, du taux naturel de Wicksell au rôle de l’investissement public.",
      preuves: "Le précédent japonais, les taux négatifs, le retournement de 2022.",
      cas: "Hansen démenti par l’après-guerre, la Suisse et ses taux négatifs, la version de Gordon.",
      objections: "Le cycle de la dette, la critique de la BRI, un taux inobservable, l’innovation à venir.",
      ecoles: "Wicksell, Keynes, Hansen, Summers et Krugman, Gordon, Rogoff et la BRI.",
      source: "Hansen, 1939 : des reprises maladives qui meurent dans l’œuf.",
      quiz: "Cinq questions corrigées et une question sur le frein à l’endettement.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     22. ASYMÉTRIE D'INFORMATION
     ===================================================================== */
  const spirale = fig(316, (() => {
    const L = 80, B = 240, w = 70;
    const rounds = [[0, 6000, "toutes les voitures"], [1, 4500, "les bonnes partent"], [2, 3375, ""], [3, 2531, ""], [4, 1898, "il ne reste que des citrons"]];
    let s = `<text x="20" y="24" ${T}>La spirale du marché des « citrons » (exemple chiffré simplifié)</text>`;
    rounds.forEach(([i, p, lab]) => {
      const x = L + i * 110, h = p / 6000 * 170;
      s += `<rect x="${x}" y="${B - h}" width="${w}" height="${h}" rx="4" style="fill:${i === 4 ? "var(--serial)" : "var(--note)"}; opacity:${1 - i * 0.12}"/>`;
      s += `<text x="${x + w / 2}" y="${B - h - 8}" text-anchor="middle" style="fill:var(--ink); font:600 12px 'JetBrains Mono', monospace">${p.toLocaleString("fr-CH")}</text>`;
      s += `<text x="${x + w / 2}" y="${B + 18}" text-anchor="middle" ${M}>tour ${i + 1}</text>`;
      if (lab) s += `<text x="${x + w / 2}" y="${B + 34}" text-anchor="middle" ${S}>${lab}</text>`;
    });
    s += `<text x="20" y="306" ${S}>Prix offert par l’acheteur (en francs) : à chaque tour, il ne paie que la valeur moyenne des voitures encore en vente.</text>`;
    return s;
  })(), "Exemple illustratif : l’acheteur offre la valeur moyenne des voitures en vente. Les vendeurs dont la voiture vaut plus se retirent ; la moyenne baisse ; l’acheteur baisse son prix (ici d’un quart à chaque tour), et ainsi de suite. Dans le cas extrême du modèle d’Akerlof, le marché disparaît entièrement.", "Barres décroissantes montrant le prix offert à chaque tour");

  const solutions = fig(250, (() => {
    const items = [["Signal", "Le mieux informé prouve sa qualité par un geste coûteux", "diplôme, garantie", "var(--note)"], ["Filtrage", "Le moins informé propose des choix qui font se révéler l’autre", "franchises", "var(--plum)"], ["Réputation", "Les échanges répétés rendent la tricherie coûteuse", "avis en ligne", "var(--gold)"], ["Obligation", "La loi impose l’information ou la participation", "LAMal", "var(--serial)"]];
    let s = `<text x="20" y="24" ${T}>Quatre manières de surmonter l’asymétrie d’information</text>`;
    items.forEach(([n, d, ex, col], i) => {
      const x = 20 + i * 155;
      s += `<rect x="${x}" y="44" width="145" height="180" rx="10" style="fill:var(--card); stroke:${col}; stroke-width:2"/>`;
      s += `<text x="${x + 72}" y="72" text-anchor="middle" style="fill:${col}; font:700 15px Manrope, sans-serif">${n}</text>`;
      const words = d.split(" "); let line = "", ly = 100;
      words.forEach((wd) => { if ((line + wd).length > 22) { s += `<text x="${x + 72}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 16; line = ""; } line += wd + " "; });
      s += `<text x="${x + 72}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
      s += `<text x="${x + 72}" y="206" text-anchor="middle" ${M}>${ex}</text>`;
    });
    return s;
  })(), "Spence (1973) a étudié le signal ; Rothschild et Stiglitz (1976) le filtrage ; la théorie des jeux répétés explique le rôle de la réputation ; l’obligation d’assurance répond à la sélection adverse quand les autres solutions échouent.", "Quatre cartes : signal, filtrage, réputation, obligation");

  OEC.notices["asymetrie-information"] = {
    essentiel: [
      "Il y a asymétrie d’information quand une partie à un échange en sait plus que l’autre : le vendeur d’une voiture d’occasion sur son état, l’assuré sur sa santé, l’emprunteur sur son projet, le salarié sur ses efforts.",
      "Elle provoque deux problèmes. La sélection adverse, avant le contrat : les « mauvais » risques ou produits chassent les bons, et le marché peut disparaître. L’aléa moral, après le contrat : la partie protégée change de comportement à l’insu de l’autre.",
      "George Akerlof, Michael Spence et Joseph Stiglitz ont reçu le prix Nobel en 2001 pour ces travaux. Ils expliquent l’existence des garanties, des diplômes, des franchises, des notes en ligne, et justifient certaines obligations légales comme l’assurance maladie obligatoire."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi une voiture presque neuve perd-elle tant de valeur ?", html: `
<p>Une voiture achetée neuve et revendue quelques semaines plus tard perd une part importante de son prix, alors qu’elle n’a presque pas roulé. Pourquoi ? Le jeune économiste George Akerlof, à Berkeley, propose une réponse à la fin des années 1960 : l’acheteur d’une voiture d’occasion ne peut pas savoir si elle est bonne ou si c’est un « citron », l’expression américaine pour une voiture défectueuse. Et il se demande pourquoi son propriétaire la revend si vite.</p>
<p>Son article, « The Market for “Lemons” », est refusé par trois revues. L’American Economic Review et la Review of Economic Studies le jugent trivial ; le Journal of Political Economy le rejette parce que, si l’argument était juste, l’économie ne serait plus la même. Il paraît finalement dans le Quarterly Journal of Economics en 1970. Il vaudra à son auteur le prix Nobel trente et un ans plus tard.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Une information inégale</h4>
<p>Dans le modèle de concurrence parfaite, acheteurs et vendeurs connaissent parfaitement la qualité des biens échangés. Akerlof relâche cette hypothèse sur un seul point : le vendeur d’une voiture d’occasion connaît son état, l’acheteur non. Ce petit changement suffit à bouleverser le résultat.</p>
<h4>2. Le prix moyen</h4>
<p>Ne pouvant distinguer les bonnes voitures des mauvaises, l’acheteur est prêt à payer la valeur moyenne des voitures en vente. Mais à ce prix, les propriétaires de bonnes voitures, qui valent plus que la moyenne, préfèrent les garder. Seules restent en vente les voitures de qualité inférieure à la moyenne.</p>
<h4>3. La spirale</h4>
<p>Les acheteurs, qui anticipent ce comportement, baissent leur prix. De nouveaux vendeurs se retirent, et la qualité moyenne baisse encore. Dans le cas extrême du modèle, le marché disparaît entièrement, alors que des échanges mutuellement avantageux étaient possibles. C’est la <b>sélection adverse</b> : les mauvais produits chassent les bons, comme la mauvaise monnaie chasse la bonne selon la loi de Gresham, qu’Akerlof cite.</p>
${spirale}
<h4>4. L’assurance</h4>
<p>Le même mécanisme s’applique à l’assurance. Si un assureur fixe une prime moyenne, ce sont surtout les personnes qui se savent à risque élevé qui s’assurent. Les primes doivent augmenter, ce qui chasse les personnes à faible risque, et ainsi de suite. Akerlof note que les personnes de plus de 65 ans avaient beaucoup de mal à s’assurer contre la maladie aux États-Unis avant la création de Medicare en 1965.</p>
<h4>5. Le signal</h4>
<p>Michael Spence (1973) étudie une réponse : la partie bien informée peut envoyer un signal coûteux qui prouve sa qualité. Son exemple est le diplôme. Même si les études n’augmentaient pas la productivité, elles serviraient à la signaler, à condition qu’elles soient plus faciles, donc moins coûteuses, pour les candidats les plus capables. Les garanties offertes par un vendeur jouent le même rôle : seul celui qui est sûr de son produit peut se permettre de le garantir.</p>
<h4>6. Le filtrage</h4>
<p>Michael Rothschild et Joseph <a href="#eco-stiglitz">Stiglitz</a> (1976) étudient la réponse de la partie mal informée : proposer plusieurs contrats conçus pour que chacun choisisse celui qui lui correspond, et révèle ainsi son type. Un assureur propose par exemple un contrat avec une franchise élevée et une prime basse, qui attire les personnes qui se savent en bonne santé, et un contrat sans franchise et plus cher, choisi par celles qui prévoient des dépenses.</p>
<h4>7. L’aléa moral</h4>
<p>Le second problème intervient après la signature du contrat : la partie protégée peut changer de comportement sans que l’autre puisse le vérifier (<a href="#c-alea-moral">voir aléa moral</a>). L’assuré contre le vol ferme moins bien sa porte ; le salarié payé à l’heure ralentit son effort ; la banque qui sait qu’elle sera sauvée prend plus de risques. Carl Shapiro et Joseph Stiglitz (1984) en tirent une explication du chômage : les entreprises paient des salaires supérieurs au salaire d’équilibre pour que la menace de licenciement dissuade les salariés de relâcher leur effort.</p>
<h4>8. Le rationnement du crédit</h4>
<p>Joseph Stiglitz et Andrew Weiss (1981) montrent qu’une banque n’a pas intérêt à augmenter ses taux pour équilibrer l’offre et la demande de crédit : des taux plus élevés attirent les emprunteurs aux projets les plus risqués et poussent tous les autres à prendre plus de risques. La banque préfère refuser certains crédits. Le marché du crédit peut donc rester durablement en déséquilibre.</p>
${solutions}` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les camionnettes d’occasion</h4>
<p>Le test empirique n’est pas facile, car il faut observer la qualité que les acheteurs ignorent. En 1982, Eric Bond étudie le marché des camionnettes d’occasion aux États-Unis et ne trouve pas que les véhicules revendus soient plus souvent réparés que les autres. Les mécanismes de garantie, de réputation des vendeurs et d’inspection semblent limiter le problème sur ce marché. Le modèle d’Akerlof décrit un risque, pas une fatalité.</p>
<h4>Les rentes viagères</h4>
<p>Amy Finkelstein et James Poterba (2004) étudient les rentes viagères vendues au Royaume-Uni. Les personnes qui achètent des rentes, qui paient tant que l’on vit, vivent effectivement plus longtemps que la moyenne, et celles qui choisissent des contrats plus protecteurs vivent encore plus longtemps. C’est la sélection adverse prévue par la théorie : chacun utilise ce qu’il sait de sa propre santé.</p>
<h4>La spirale de Harvard</h4>
<p>David Cutler et Sarah Reber (1998) documentent une spirale de sélection adverse dans l’assurance santé des employés de l’université Harvard. En 1995, l’université décide que les salariés paieront eux-mêmes la différence de prix entre les contrats. Les plus jeunes et les plus sains quittent le contrat le plus généreux, dont le prix augmente ; en trois ans, ce contrat disparaît. Le cas est devenu un exemple d’école.</p>` }
    ],
    cas: [
      { titre: "L’assurance maladie obligatoire en Suisse", html: `
<p>Jusqu’en 1995, l’assurance maladie était facultative en Suisse, même si la grande majorité de la population était assurée. Les caisses pouvaient refuser des personnes ou imposer des réserves pour les maladies existantes, et les primes augmentaient avec l’âge d’entrée. La loi sur l’assurance maladie (LAMal), acceptée en votation en 1994 et entrée en vigueur en 1996, rend l’assurance de base obligatoire, oblige les caisses à accepter tout le monde, et impose des primes identiques pour tous les adultes d’une même caisse et d’une même région. L’obligation empêche la spirale de sélection adverse ; la compensation des risques entre caisses, renforcée depuis, limite la chasse aux bons risques. Les franchises à option, de 300 à 2 500 francs, sont un mécanisme de filtrage à la Rothschild-Stiglitz.</p>` },
      { titre: "Les notes en ligne", html: `
<p>Comment acheter en confiance à un inconnu sur internet ? Dès ses débuts, eBay met en place un système d’évaluations publiques des vendeurs. Les recherches de Paul Resnick et Richard Zeckhauser montrent que les vendeurs bien notés vendent plus et, selon plusieurs études, à des prix un peu plus élevés. La réputation, accumulée au fil des échanges, remplace l’information qui manque. Le système a été généralisé par Airbnb, Uber ou les plateformes de livraison. Il a ses limites : notes gonflées, faux avis, difficultés pour les nouveaux vendeurs à se faire une réputation.</p>` },
      { titre: "La crise des subprimes", html: `
<p>La titrisation, qui consiste à regrouper des crédits et à les revendre sous forme de titres, a créé des asymétries d’information en cascade. Le courtier qui accordait un crédit immobilier ne gardait pas le risque, et avait donc peu d’intérêt à vérifier la solvabilité de l’emprunteur. Les acheteurs des titres ne pouvaient pas examiner les milliers de crédits qu’ils contenaient et se fiaient aux agences de notation, elles-mêmes payées par les émetteurs. Quand les défauts se sont multipliés, personne ne savait plus quels titres étaient sains : le marché s’est figé, comme le marché des citrons d’Akerlof.</p>` }
    ],
    objections: `
<h4>1. Le marché trouve souvent des solutions</h4>
<p>Les économistes de l’école de Chicago soulignent que garanties, marques, réputations, intermédiaires spécialisés et inspections indépendantes répondent largement au problème. Les marchés des voitures d’occasion n’ont pas disparu. L’asymétrie d’information n’est pas en soi une raison d’intervention publique.</p>
<h4>2. L’intervention publique a aussi ses asymétries</h4>
<p>L’État qui réglemente est lui-même moins bien informé que les entreprises réglementées, et peut être capturé par elles, comme l’a montré George Stigler. Corriger une asymétrie d’information par une réglementation peut en créer une autre.</p>
<h4>3. Le signal est-il un gaspillage ?</h4>
<p>Si les diplômes ne servent qu’à signaler les capacités, comme dans le modèle de Spence, une partie importante des dépenses d’éducation est socialement inutile. Bryan Caplan l’a soutenu en 2018. La plupart des études empiriques trouvent pourtant que l’éducation augmente vraiment la productivité ; la part du signal reste discutée.</p>
<h4>4. L’information n’est pas toujours le vrai problème</h4>
<p>L’économie comportementale montre que, même bien informés, les individus font des erreurs : ils sous-estiment les risques ou surestiment leur propre santé. Certaines sélections observées en assurance s’expliquent autant par l’aversion au risque que par l’information privée.</p>`,
    ecoles: `
<p><b>Kenneth Arrow</b> (1963) étudie le premier les problèmes d’information dans l’assurance santé.</p>
<p><b>George Akerlof</b> (1970) formalise la sélection adverse avec les « citrons ».</p>
<p><b>Michael Spence</b> (1973) étudie le signal.</p>
<p><b>Joseph Stiglitz</b>, avec Rothschild, Weiss et Shapiro, applique ces idées à l’assurance, au crédit et au chômage.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> voyait au contraire dans le marché le meilleur moyen de mobiliser l’information dispersée.</p>
<p><b>Jean Tirole</b> et la théorie des contrats et de la réglementation prolongent ces travaux.</p>`,
    source: {
      titre: "George Akerlof, « The Market for “Lemons”: Quality Uncertainty and the Market Mechanism », Quarterly Journal of Economics, 1970",
      texte: "La présence de personnes désireuses de proposer des marchandises de qualité inférieure tend à évincer le commerce légitime.",
      notes: `
<p><b>Le contexte.</b> Akerlof présente son modèle comme une explication de nombreuses institutions : garanties, marques, chaînes, licences professionnelles. Il les interprète comme des réponses du marché ou de la société à l’incertitude sur la qualité.</p>
<p><b>Le coût de la malhonnêteté.</b> La phrase souligne un point souvent oublié : le coût de la tromperie ne se limite pas à ce que perd l’acheteur trompé. Il inclut les échanges honnêtes qui n’ont pas lieu, parce que la méfiance chasse les vendeurs de qualité.</p>
<p><b>Les pays en développement.</b> Akerlof applique son modèle aux pays en développement, où le crédit et le commerce reposent souvent sur des liens de confiance familiaux ou communautaires faute d’institutions qui garantissent la qualité et l’honnêteté. Il rejoint là les travaux sur le rôle des <a href="#c-institutions-inclusives">institutions</a>.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que la sélection adverse ?",
        o: ["Le choix délibéré des pires produits", "Le mécanisme par lequel l’information cachée avant le contrat fait fuir les bons risques ou produits", "Un changement de comportement après le contrat", "Une sélection des candidats par diplôme"], c: 1,
        e: "Elle intervient avant le contrat : au prix moyen, les meilleurs se retirent et la qualité moyenne baisse." },
      { q: "Quelle est la différence entre sélection adverse et aléa moral ?",
        o: ["Il n’y en a pas", "La sélection adverse porte sur une information cachée avant le contrat, l’aléa moral sur un comportement caché après", "L’aléa moral concerne seulement les banques", "La sélection adverse concerne seulement les voitures"], c: 1,
        e: "Le type caché précède le contrat ; l’action cachée le suit." },
      { q: "Selon Spence, pourquoi un diplôme peut-il servir de signal ?",
        o: ["Parce qu’il est gratuit", "Parce qu’il est moins coûteux à obtenir pour les candidats les plus capables", "Parce que l’État l’exige", "Parce que les employeurs ne lisent pas les CV"], c: 1,
        e: "Un signal n’est crédible que s’il coûte davantage à ceux qui voudraient imiter les meilleurs." },
      { q: "Pourquoi la LAMal rend-elle l’assurance de base obligatoire ?",
        o: ["Pour augmenter les recettes fiscales", "Pour empêcher la spirale de sélection adverse qui chasserait les bons risques", "Pour réduire le nombre de caisses", "Pour fixer les salaires des médecins"], c: 1,
        e: "Si les personnes en bonne santé pouvaient renoncer à s’assurer, les primes augmenteraient pour les autres, en spirale." },
      { q: "Les franchises à option de la LAMal relèvent de quel mécanisme ?",
        o: ["Le signal", "Le filtrage", "La réputation", "La recherche de rente"], c: 1,
        e: "L’assureur propose des contrats différents ; chacun choisit selon ce qu’il sait de sa santé, ce qui révèle une partie de son information." }
    ],
    ouverte: {
      q: "Faut-il autoriser les caisses maladie suisses à utiliser des données de santé, par exemple des montres connectées, pour moduler les primes de l’assurance de base ?",
      r: "Du point de vue de la théorie de l’information, ces données réduiraient l’asymétrie entre assuré et assureur, et pourraient encourager des comportements plus sains, réduisant l’aléa moral. Mais l’assurance de base suisse repose sur un choix de solidarité : la prime ne dépend pas de l’état de santé. Moduler les primes selon les données reviendrait à faire payer davantage les malades et les personnes à risque, souvent pour des raisons génétiques ou sociales qu’elles ne contrôlent pas. C’est pourquoi la LAMal l’interdit dans l’assurance de base, alors que les assurances complémentaires peuvent sélectionner leurs clients. Le débat porte sur la frontière entre ces deux mondes, et sur la protection des données de santé."
    },
    lectures: [
      ["Accessible", "Tim Harford, The Undercover Economist, 2005, chapitre sur les voitures d’occasion et l’assurance."],
      ["Accessible", "George Akerlof et Robert Shiller, Marchés de dupes : l’économie de la tromperie et de la manipulation, 2015."],
      ["Intermédiaire", "Joseph Stiglitz, conférence Nobel « Information and the Change in the Paradigm in Economics », 2001."],
      ["Intermédiaire", "Amy Finkelstein, Moral Hazard in Health Insurance, 2015."],
      ["Recherche", "George Akerlof, « The Market for “Lemons” », Quarterly Journal of Economics, 1970 ; Michael Spence, « Job Market Signaling », Quarterly Journal of Economics, 1973 ; Michael Rothschild et Joseph Stiglitz, « Equilibrium in Competitive Insurance Markets », 1976."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Le vendeur en sait plus que vous</h3>
<p>Quand vous achetez une voiture d’occasion, le vendeur sait si elle est en bon état ; vous, non. Les économistes parlent d’<b>asymétrie d’information</b>. En 1970, George Akerlof montre que cette situation banale peut faire disparaître un marché entier. Son article, d’abord refusé par trois revues, lui a valu le prix Nobel.</p>
<h3>Les mauvais chassent les bons</h3>
<p>Comme vous ne savez pas distinguer une bonne voiture d’un « citron », vous ne proposez que le prix moyen. Les propriétaires de bonnes voitures refusent de vendre à ce prix. Il ne reste en vente que les mauvaises, vous baissez votre prix, et la spirale continue. C’est la <b>sélection adverse</b>.</p>
${spirale}
<h3>Les solutions</h3>
<p>Le marché et la société ont inventé des réponses : les garanties et les diplômes, qui servent de signaux, les notes en ligne, qui créent une réputation, les franchises au choix, qui font révéler son profil. Parfois, la loi impose une obligation : en Suisse, l’assurance maladie de base est obligatoire depuis 1996, pour que les personnes en bonne santé ne la quittent pas en laissant les malades payer seuls.</p>
<h3>À retenir</h3>
<p>Il existe aussi l’<b>aléa moral</b> : une fois protégé, on peut changer de comportement. La notice complète présente les deux mécanismes, les preuves et les débats.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      depart: "Akerlof et les voitures d’occasion, un article refusé trois fois.",
      raisonnement: "Huit étapes : sélection adverse, signal, filtrage, aléa moral, rationnement du crédit.",
      preuves: "Les camionnettes d’occasion, les rentes viagères, la spirale de Harvard.",
      cas: "La LAMal, les notes en ligne, la crise des subprimes.",
      objections: "Les solutions du marché, les asymétries de l’État, le signal comme gaspillage, les biais.",
      ecoles: "Arrow, Akerlof, Spence, Stiglitz, Hayek, Tirole.",
      source: "Akerlof, 1970 : la malhonnêteté évince le commerce légitime.",
      quiz: "Cinq questions corrigées et une question sur les données de santé.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
