/* Œconomia — notices longues, lot 10 (b) : croissance et modèle de Solow */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:var(--ink-soft); stroke-width:1; stroke-dasharray:4 3"/>`;

  /* =====================================================================
     CROISSANCE ET MODÈLE DE SOLOW
     ===================================================================== */
  /* le diagramme de Solow : k en abscisse, de 0 à 10 */
  const diagramme = fig(330, (() => {
    const X = (k) => 70 + k * 52, Y = (v) => 280 - v * 24;
    const courbe = (a) => Array.from({ length: 51 }, (_, i) => { const k = i / 5; return `${X(k).toFixed(1)},${Y(a * Math.sqrt(k)).toFixed(1)}`; }).join(" ");
    let s = `<text x="20" y="22" ${T}>L’état stationnaire du modèle de Solow</text>`;
    s += `<line x1="70" y1="280" x2="70" y2="36" style="stroke:var(--ink); stroke-width:1.5"/><line x1="70" y1="280" x2="610" y2="280" style="stroke:var(--ink); stroke-width:1.5"/>`;
    s += `<text x="610" y="272" text-anchor="end" ${S}>capital par travailleur (k)</text>`;
    s += `<polyline points="${courbe(3)}" style="fill:none; stroke:var(--note); stroke-width:3"/>`;
    s += `<polyline points="${courbe(1.2)}" style="fill:none; stroke:var(--gold); stroke-width:3"/>`;
    s += `<line x1="70" y1="280" x2="${X(10)}" y2="${Y(6)}" style="stroke:var(--plum); stroke-width:3"/>`;
    s += `<text x="${X(10)}" y="${Y(9.49) - 10}" text-anchor="end" ${S}>production par travailleur</text>`;
    s += `<text x="${X(10)}" y="${Y(6) - 10}" text-anchor="end" ${S}>usure et dilution du capital</text>`;
    s += `<text x="${X(10)}" y="${Y(3.79) + 26}" text-anchor="end" ${S}>investissement (épargne)</text>`;
    s += dash(X(4), 280, X(4), Y(6)) + `<circle cx="${X(4)}" cy="${Y(2.4)}" r="5" style="fill:var(--ink)"/>`;
    s += `<text x="${X(4)}" y="296" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">k*</text>`;
    s += arrow(X(1), 314, X(3.4), 314, "var(--ink)") + arrow(X(8), 314, X(4.6), 314, "var(--ink)");
    s += `<text x="${X(1.2)}" y="306" ${S}>le capital s’accumule</text><text x="${X(7.8)}" y="306" text-anchor="end" ${S}>le capital s’use plus vite</text>`;
    return s;
  })(), "Schéma d’après Robert Solow (1956). À gauche de k*, l’investissement dépasse l’usure des machines et l’effet de la croissance de la population : le capital par travailleur augmente. À droite, c’est l’inverse. L’économie converge vers k*, où la croissance par habitant s’arrête, sauf si le progrès technique déplace la courbe de production vers le haut.", "Diagramme de Solow : courbe de production, courbe d’investissement et droite d’usure qui se croisent en k*");

  /* la décomposition de Solow (1957) */
  const residu = fig(170, (() => {
    let s = `<text x="20" y="22" ${T}>Aux États-Unis, 1909-1949 : d’où vient la hausse de la production par heure ?</text>`;
    s += `<rect x="40" y="50" width="70" height="46" rx="6" style="fill:var(--gold)"/><rect x="110" y="50" width="490" height="46" rx="6" style="fill:var(--note)"/>`;
    s += `<text x="75" y="78" text-anchor="middle" style="fill:var(--paper); font:700 12px Manrope, sans-serif">1/8</text>`;
    s += `<text x="355" y="78" text-anchor="middle" style="fill:var(--paper); font:700 13px Manrope, sans-serif">7/8 : le « progrès technique »</text>`;
    s += `<text x="40" y="120" ${S}>plus de capital par heure travaillée</text>`;
    s += `<text x="600" y="120" text-anchor="end" ${S}>tout le reste : techniques, organisation, savoir-faire</text>`;
    s += `<text x="320" y="150" text-anchor="middle" ${S}>La production par heure a environ doublé sur la période.</text>`;
    return s;
  })(), "D’après Robert Solow, « Technical Change and the Aggregate Production Function », Review of Economics and Statistics, 1957. La part attribuée au progrès technique est un « résidu » : ce que l’accumulation du capital n’explique pas.", "Barre montrant qu’un huitième de la hausse vient du capital et sept huitièmes du progrès technique");

  OEC.notices["modele-solow"] = {
    essentiel: [
      "Le modèle de Solow (1956) explique la croissance de long terme par trois éléments : l’accumulation du capital, la croissance de la population et le progrès technique. C’est le modèle de référence de la théorie de la croissance.",
      "Le capital a des rendements décroissants : chaque machine de plus rapporte un peu moins que la précédente. Un pays qui ne fait qu’accumuler finit par atteindre un état stationnaire où le revenu par habitant cesse de croître. À long terme, seul le progrès technique permet une croissance durable.",
      "Le modèle prédit que les pays pauvres, qui ont peu de capital, devraient croître plus vite et rattraper les pays riches. Ce rattrapage ne s’observe qu’entre pays aux conditions comparables, ce qui a conduit les économistes vers les théories de la croissance endogène et le rôle des institutions."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi certains pays deviennent-ils riches ?", html: `
<p>Un Suisse d’aujourd’hui produit en une heure bien plus qu’un Suisse de 1900. Cette hausse de la production par habitant, répétée année après année, a transformé les conditions de vie dans les pays industrialisés. D’où vient-elle ? De plus d’usines et de machines, d’une main-d’œuvre plus nombreuse ou mieux formée, ou de techniques plus efficaces ? Et pourquoi certains pays ont-ils connu cette croissance et d’autres non ?</p>
<p>Après la Seconde Guerre mondiale, les modèles de Roy Harrod et d’Evsey Domar, inspirés de <a href="#eco-keynes">Keynes</a>, laissent penser que la croissance est fragile et dépend surtout de l’investissement. En 1956, Robert Solow, professeur au MIT et collègue de Paul <a href="#eco-samuelson">Samuelson</a>, propose un modèle plus simple et plus stable. L’Australien Trevor Swan publie la même année une analyse très proche. Solow reçoit le prix Nobel d’économie en 1987.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Une fonction de production</h4>
<p>La production d’un pays dépend de deux facteurs : le capital (machines, bâtiments, infrastructures) et le travail. On raisonne par travailleur : la production par travailleur dépend du capital dont chaque travailleur dispose.</p>
<h4>2. Les rendements décroissants</h4>
<p>Donner un premier ordinateur à un employé de bureau augmente beaucoup sa production. Un deuxième aide un peu, un troisième presque plus. C’est la loi des rendements décroissants : chaque unité de capital supplémentaire rapporte moins que la précédente.</p>
<h4>3. Épargne et investissement</h4>
<p>Chaque année, une partie de la production est épargnée et investie : elle sert à construire de nouvelles machines. Plus le taux d’épargne est élevé, plus le capital s’accumule vite.</p>
<h4>4. Usure et dilution</h4>
<p>Dans le même temps, les machines s’usent et doivent être remplacées. Et si la population active augmente, le capital existant se répartit entre plus de travailleurs. Une partie de l’investissement sert seulement à maintenir le capital par travailleur.</p>
${diagramme}
<h4>5. L’état stationnaire</h4>
<p>Tant que l’investissement dépasse ce qu’il faut pour compenser l’usure et la dilution, le capital par travailleur augmente. Mais à cause des rendements décroissants, la production, donc l’investissement, augmente de moins en moins. Il arrive un moment où l’investissement compense tout juste l’usure : c’est l’état stationnaire. Le revenu par habitant y cesse de croître.</p>
<h4>6. Épargner plus élève le niveau, pas le rythme</h4>
<p>Un pays qui épargne davantage atteint un état stationnaire plus élevé : il est plus riche. Mais une fois arrivé, sa croissance par habitant s’arrête aussi. L’épargne influence le niveau de vie, pas le rythme de croissance à long terme. Edmund Phelps montre en 1961 qu’il existe même un taux d’épargne qui maximise la consommation : au-delà, on se prive pour accumuler des machines inutiles.</p>
<h4>7. Le progrès technique, seul moteur durable</h4>
<p>Pour que le revenu par habitant continue de croître, il faut que la même quantité de capital et de travail produise davantage : de meilleures techniques, une meilleure organisation, des connaissances nouvelles. Dans le modèle de Solow, ce progrès technique tombe du ciel : il n’est pas expliqué. Les théories de la croissance endogène chercheront à l’expliquer (<a href="#c-destruction-creatrice">voir destruction créatrice</a>).</p>
<h4>8. La convergence</h4>
<p>Un pays qui a peu de capital tire beaucoup de chaque nouvelle machine : il devrait croître plus vite qu’un pays riche, et le rattraper. C’est la prédiction de convergence du modèle.</p>
<p class="ex-revoir">Fiche méthode : <a href="#methode-interets">Intérêts composés, actualisation, règle de 70</a></p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le résidu de Solow</h4>
<p>En 1957, Solow mesure ce qu’explique l’accumulation du capital dans la croissance américaine de 1909 à 1949. La production par heure de travail a environ doublé, mais un huitième seulement de cette hausse vient d’un capital plus abondant. Le reste, sept huitièmes, est attribué au progrès technique. L’économiste Moses Abramovitz appellera ce résidu « la mesure de notre ignorance ».</p>
${residu}
<h4>Une convergence sous conditions</h4>
<p>Depuis 1960, la Corée du Sud, Taïwan, Singapour puis la Chine ont rattrapé une partie de leur retard, comme le prévoit le modèle. Mais beaucoup de pays d’Afrique ou d’Amérique latine ne l’ont pas fait. Les travaux de Robert Barro et Xavier Sala-i-Martin montrent que la convergence existe surtout entre pays aux caractéristiques comparables, à un rythme de l’ordre de 2 % de l’écart par an. On parle de convergence conditionnelle.</p>
<h4>Le capital humain</h4>
<p>En 1992, Gregory Mankiw, David Romer et David Weil ajoutent au modèle l’éducation, comme une forme de capital. Cette version élargie explique une grande partie des écarts de revenu entre pays. Elle confirme que l’épargne et la croissance de la population comptent, mais qu’investir dans les personnes compte autant qu’investir dans les machines.</p>` }
    ],
    cas: [
      { titre: "L’Union soviétique, une croissance par accumulation", html: `
<p>Des années 1930 aux années 1960, l’Union soviétique croît très vite en concentrant l’investissement sur l’industrie lourde et en déplaçant des millions de paysans vers les usines. Puis la croissance ralentit nettement à partir des années 1970. Le modèle de Solow donne une explication : accumuler du capital et mobiliser plus de travailleurs fonctionne un temps, mais sans progrès technique suffisant, les rendements décroissants finissent par l’emporter.</p>` },
      { titre: "Le « miracle » asiatique en débat", html: `
<p>En 1994, Paul <a href="#eco-krugman">Krugman</a> publie un article provocateur, « Le mythe du miracle asiatique ». S’appuyant sur les calculs d’Alwyn Young, il soutient que la croissance de Singapour ou de la Corée du Sud vient surtout d’une forte hausse de l’investissement, de la scolarisation et du travail des femmes, plus que du progrès technique, et qu’elle ralentira. D’autres économistes répondent que ces pays ont aussi beaucoup appris et innové. La Corée du Sud est aujourd’hui un pays riche, mais sa croissance a bien ralenti, comme celle de tous les pays qui ont rattrapé leur retard.</p>` },
      { titre: "La Suisse, entre population et productivité", html: `
<p>Depuis le début des années 2000, une part importante de la croissance du PIB suisse vient de l’augmentation de la population, notamment par l’immigration. Le PIB par habitant, lui, progresse plus lentement. Le modèle de Solow aide à lire cette différence : davantage de travailleurs augmente la production totale, mais seul un gain de productivité augmente durablement le revenu par habitant. D’où l’attention portée en Suisse à la formation, à la recherche et à l’innovation (<a href="#c-pib">voir PIB et ses limites</a>).</p>` }
    ],
    objections: `
<h4>1. Un progrès technique inexpliqué</h4>
<p>Le principal moteur de la croissance reste, dans le modèle, une donnée extérieure. Dans les années 1980, Paul Romer et Robert <a href="#eco-lucas">Lucas</a> construisent des modèles de croissance endogène, où le progrès technique vient de la recherche, de l’éducation et des connaissances, qui ne s’usent pas et se diffusent. Philippe Aghion et Peter Howitt y ajoutent la <a href="#c-destruction-creatrice">destruction créatrice</a> de Schumpeter. Romer reçoit le prix Nobel en 2018, Aghion et Howitt en 2025, avec l’historien Joel Mokyr.</p>
<h4>2. Les institutions oubliées</h4>
<p>Le modèle traite tous les pays comme s’ils pouvaient investir et innover dans les mêmes conditions. Pour Daron <a href="#eco-acemoglu">Acemoglu</a> et James Robinson, les écarts de richesse s’expliquent d’abord par les institutions, qui décident si épargner, investir et innover en vaut la peine (<a href="#c-institutions-inclusives">voir institutions inclusives</a>).</p>
<h4>3. La demande et les limites de la planète</h4>
<p>Les keynésiens rappellent que le modèle suppose que toute l’épargne est investie et que l’économie reste au plein emploi, ce qui n’est pas acquis (<a href="#c-stagnation-seculaire">voir stagnation séculaire</a>). Les économistes écologiques reprochent au modèle de ne pas tenir compte des ressources naturelles et de la pollution, et doutent qu’une croissance indéfinie soit possible sur une planète finie.</p>`,
    ecoles: `
<p><b>Roy Harrod</b> et <b>Evsey Domar</b> proposent, dans le sillage de <a href="#eco-keynes">Keynes</a>, les premiers modèles de croissance (1939 et 1946).</p>
<p><b>Robert Solow</b> et <b>Trevor Swan</b> fondent en 1956 le modèle néoclassique de croissance ; <a href="#eco-samuelson">Samuelson</a> l’intègre à la synthèse de l’après-guerre.</p>
<p><b>Edmund Phelps</b> formule en 1961 la règle d’or de l’accumulation.</p>
<p><b>Paul Romer</b> et Robert <a href="#eco-lucas">Lucas</a> expliquent le progrès technique par les connaissances et le capital humain.</p>
<p><b>Philippe Aghion</b> et <b>Peter Howitt</b> modélisent la croissance par l’innovation et la destruction créatrice de <a href="#eco-schumpeter">Schumpeter</a>.</p>
<p><b>Daron <a href="#eco-acemoglu">Acemoglu</a></b> met les institutions au centre de l’explication.</p>`,
    source: {
      titre: "Robert Solow, « Technical Change and the Aggregate Production Function », Review of Economics and Statistics, 1957",
      texte: "La production brute par heure de travail a doublé sur la période, 87,5 % de la hausse étant attribuables au progrès technique et les 12,5 % restants à un usage accru du capital.",
      notes: `
<p><b>Un résultat inattendu.</b> Solow pensait mesurer l’effet de l’accumulation du capital. Il découvre qu’elle n’explique qu’une petite partie de la hausse de la productivité américaine.</p>
<p><b>Une définition large du progrès technique.</b> Solow précise que ce terme désigne tout ce qui déplace la fonction de production : techniques nouvelles, mais aussi meilleure éducation de la main-d’œuvre ou meilleure organisation.</p>
<p><b>Sa postérité.</b> La « comptabilité de la croissance » qu’il inaugure est toujours pratiquée par les instituts statistiques, qui publient chaque année la contribution de la productivité globale des facteurs à la croissance.</p>`
    },
    quiz: [
      { q: "Pourquoi, dans le modèle de Solow, l’accumulation de capital ne peut-elle pas assurer une croissance indéfinie ?",
        o: ["Parce que l’épargne est interdite", "Parce que le capital a des rendements décroissants", "Parce que la population diminue toujours", "Parce que les machines ne s’usent pas"], c: 1,
        e: "Chaque machine de plus rapporte moins que la précédente, jusqu’à l’état stationnaire." },
      { q: "Que se passe-t-il à long terme dans un pays qui augmente son taux d’épargne ?",
        o: ["Sa croissance accélère pour toujours", "Il devient plus riche, mais sa croissance par habitant finit par revenir au même rythme", "Il s’appauvrit", "Rien ne change"], c: 1,
        e: "L’épargne élève le niveau du revenu, pas son rythme de croissance à long terme." },
      { q: "Selon le modèle, quel est le seul moteur d’une croissance durable du revenu par habitant ?",
        o: ["La hausse de la population", "Le progrès technique", "L’inflation", "Les dépenses publiques"], c: 1,
        e: "Il permet de produire davantage avec les mêmes moyens." },
      { q: "Qu’appelle-t-on le « résidu de Solow » ?",
        o: ["La dette laissée par la croissance", "La part de la croissance que n’expliquent ni le capital ni le travail", "Le capital usé chaque année", "L’épargne non investie"], c: 1,
        e: "On l’attribue au progrès technique ; Abramovitz l’appelait « la mesure de notre ignorance »." },
      { q: "Que signifie la « convergence conditionnelle » ?",
        o: ["Tous les pays finissent par avoir le même revenu", "Les pays pauvres rattrapent les riches quand leurs caractéristiques sont comparables", "Les pays riches croissent toujours plus vite", "Les monnaies convergent vers le dollar"], c: 1,
        e: "Le rattrapage dépend de l’éducation, de l’épargne et des institutions." }
    ],
    ouverte: {
      q: "Le PIB suisse augmente en grande partie grâce à la croissance de la population. Est-ce le signe d’une économie en bonne santé ?",
      r: "Le modèle de Solow invite à distinguer deux choses. La croissance du PIB total mesure la taille de l’économie : davantage de travailleurs produisent davantage, paient plus d’impôts et de cotisations, et répondent aux besoins des entreprises qui manquent de main-d’œuvre. La croissance du PIB par habitant mesure, elle, l’évolution du niveau de vie moyen, et dépend surtout de la productivité. Pour certains, une population en hausse est le signe d’un pays attractif, dont l’économie crée des emplois, et l’immigration aide à financer les retraites dans une population qui vieillit. Pour d’autres, une croissance qui vient surtout du nombre d’habitants exerce une pression sur le logement, les transports et l’environnement, sans enrichir beaucoup chacun. Le débat porte aussi sur les moyens d’augmenter la productivité : formation, recherche, concurrence, numérique. La réponse dépend de ce qu’on veut mesurer, et des valeurs qu’on donne à la croissance, à la qualité de vie et à l’ouverture du pays."
    },
    lectures: [
      ["Accessible", "Philippe Aghion, Céline Antonin et Simon Bunel, Le Pouvoir de la destruction créatrice, Odile Jacob, 2020."],
      ["Accessible", "Daron Acemoglu et James Robinson, Prospérité, puissance et pauvreté, Markus Haller, 2015."],
      ["Intermédiaire", "Charles I. Jones, Théorie de la croissance endogène, De Boeck."],
      ["Intermédiaire", "Philippe Aghion et Peter Howitt, L’Économie de la croissance, Economica, 2010."],
      ["Recherche", "Robert Solow, « A Contribution to the Theory of Economic Growth », Quarterly Journal of Economics, 1956."],
      ["Recherche", "Gregory Mankiw, David Romer et David Weil, « A Contribution to the Empirics of Economic Growth », Quarterly Journal of Economics, 1992."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Plus de machines, toujours plus riche ?</h3>
<p>Pour produire davantage, un pays peut construire plus d’usines et de machines. Mais chaque machine supplémentaire rapporte un peu moins que la précédente : un premier ordinateur change tout pour un employé, le troisième presque rien. C’est l’idée centrale du modèle de Robert Solow, en 1956.</p>
<h3>Le vrai moteur : le progrès technique</h3>
<p>À force d’accumuler, un pays atteint un plafond où la croissance du revenu par habitant s’arrête. Pour aller plus loin, il faut produire mieux avec les mêmes moyens : de nouvelles techniques, une meilleure organisation, des travailleurs mieux formés. Solow calcule qu’aux États-Unis, de 1909 à 1949, sept huitièmes de la hausse de la production par heure viennent de ce progrès.</p>
${residu}
<h3>À retenir</h3>
<p>Épargner et investir rend un pays plus riche, mais seul le progrès technique permet une croissance durable. La notice complète présente le raisonnement, la question du rattrapage des pays pauvres et les théories qui ont suivi.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "D’où vient la croissance ? De Harrod et Domar au modèle de 1956.",
      raisonnement: "Huit étapes, des rendements décroissants à la convergence.",
      preuves: "Le résidu de 1957, la convergence conditionnelle, le capital humain.",
      cas: "L’Union soviétique, le miracle asiatique, la Suisse entre population et productivité.",
      objections: "Un progrès inexpliqué, les institutions oubliées, la demande et les limites de la planète.",
      ecoles: "Harrod et Domar, Solow et Swan, Phelps, Romer et Lucas, Aghion et Howitt, Acemoglu.",
      source: "Sept huitièmes de la croissance viennent du progrès technique.",
      quiz: "Cinq questions corrigées et une question sur la croissance suisse.",
      lectures: "Six lectures classées par niveau."
    }
  };
})();
