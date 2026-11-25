/* Œconomia — notices longues, lot 6 (c) : courbe de Kuznets, consommation ostentatoire */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     33. COURBE DE KUZNETS
     ===================================================================== */
  const cloche = fig(300, (() => {
    const L = 90, R = 580, Top = 50, B = 240;
    let s = `<text x="20" y="24" ${T}>L’hypothèse de Kuznets (1955) : les inégalités montent, puis redescendent</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>inégalités</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>revenu par habitant</text>`;
    s += `<path d="M ${L + 20} ${B - 50} C ${L + 160} ${Top - 30}, ${L + 300} ${Top - 30}, ${R - 20} ${B - 60}" style="fill:none; stroke:var(--plum); stroke-width:3"/>`;
    const zones = [[L + 70, "Société agricole", "revenus bas et proches"], [L + 245, "Industrialisation", "écart ville-campagne"], [L + 420, "Société industrielle mûre", "éducation, syndicats, État social"]];
    zones.forEach(([x, a, b]) => (s += `<text x="${x}" y="${B + 40}" text-anchor="middle" style="fill:var(--ink); font:600 11.5px Manrope, sans-serif">${a}</text><text x="${x}" y="${B + 54}" text-anchor="middle" ${S}>${b}</text>`));
    s += `<line x1="${L + 160}" y1="${Top}" x2="${L + 160}" y2="${B}" style="stroke:var(--line); stroke-dasharray:4 4"/><line x1="${L + 330}" y1="${Top}" x2="${L + 330}" y2="${B}" style="stroke:var(--line); stroke-dasharray:4 4"/>`;
    return s;
  })(), "Le mécanisme de Kuznets : la population passe d’un secteur agricole pauvre et assez égalitaire à un secteur industriel plus riche et plus inégal. Pendant la transition, l’écart entre les deux secteurs augmente les inégalités totales ; quand presque tout le monde a rejoint le secteur moderne, elles diminuent.", "Courbe en cloche des inégalités selon le revenu");

  const enU = fig(280, (() => {
    const L = 80, R = 600, B = 220, X = (y) => L + (y - 1910) * (R - L) / 110, Y = (v) => B - (v - 25) * 6;
    const pts = [[1913, 41], [1920, 43], [1928, 47], [1935, 44], [1940, 45], [1945, 33], [1950, 33], [1960, 33], [1970, 33], [1980, 34], [1990, 39], [2000, 45], [2007, 49], [2012, 49], [2018, 48]];
    let s = `<text x="20" y="24" ${T}>Part du revenu national reçue par les 10 % les plus aisés, États-Unis (en %)</text>`;
    [30, 35, 40, 45, 50].forEach((v) => (s += `<line x1="${L}" y1="${Y(v)}" x2="${R}" y2="${Y(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end" ${M}>${v}</text>`));
    [1920, 1940, 1960, 1980, 2000, 2020].forEach((y) => (s += `<text x="${X(y)}" y="${B + 20}" text-anchor="middle" ${M}>${y}</text>`));
    s += `<polyline points="${pts.map(([y, v]) => `${X(y)},${Y(v)}`).join(" ")}" style="fill:none; stroke:var(--serial); stroke-width:2.6"/>`;
    s += `<rect x="${X(1953)}" y="${Y(50) - 6}" width="${X(1954) - X(1953) + 2}" height="${Y(30) - Y(50) + 6}" style="fill:var(--gold); opacity:.6"/>`;
    s += `<text x="${X(1955) + 4}" y="${Y(48)}" style="fill:var(--gold); font:600 11.5px Manrope, sans-serif">Kuznets écrit ici</text>`;
    s += `<text x="20" y="262" ${S}>Tracé schématique et arrondi d’après les séries de Thomas Piketty et Emmanuel Saez (revenus avant impôts).</text>`;
    return s;
  })(), "Kuznets observait la baisse des inégalités entre 1913 et 1950 et l’interprétait comme la phase descendante d’une loi du développement. Avec le recul, on voit plutôt une courbe en U, dont la remontée depuis 1980 contredit l’idée d’une baisse automatique.", "Courbe en U de la part du décile supérieur aux États-Unis");

  OEC.notices["courbe-kuznets"] = {
    essentiel: [
      "La courbe de Kuznets décrit l’hypothèse selon laquelle les inégalités de revenu augmentent au début du développement économique, puis diminuent une fois l’industrialisation avancée, ce qui donne une courbe en cloche, ou en U inversé.",
      "Simon Kuznets la propose en 1955 avec beaucoup de prudence, à partir de données très limitées. Elle devient ensuite une sorte de loi optimiste : la croissance finirait par réduire les inégalités d’elle-même.",
      "La remontée des inégalités dans les pays riches depuis 1980, documentée notamment par Thomas Piketty, a fortement remis en cause cette lecture. L’idée a aussi été transposée à l’environnement, avec des résultats inégaux selon les polluants."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : la croissance réduit-elle les inégalités ?", html: `
<p>En décembre 1954, Simon Kuznets, économiste américain né en 1901 dans l’actuelle Biélorussie, prononce son discours de président de l’American Economic Association. Kuznets est l’un des inventeurs de la comptabilité nationale moderne et du <a href="#c-pib">PIB</a>. Il s’interroge sur une question que presque personne n’a encore étudiée avec des chiffres : comment les inégalités de revenu évoluent-elles avec la croissance économique ?</p>
<p>Il dispose de séries pour les États-Unis, le Royaume-Uni et deux États allemands, ainsi que de quelques données sur l’Inde, Ceylan et Porto Rico. Il constate que les inégalités ont diminué dans les pays riches depuis le début du siècle, et qu’elles semblent plus fortes dans les pays pauvres que dans les pays riches. Il en tire une hypothèse : au cours du développement, les inégalités montent puis redescendent. Mais il avertit lui-même que son article repose peut-être sur « 5 % d’information empirique et 95 % de spéculation ».</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Deux secteurs</h4>
<p>Kuznets part d’une économie à deux secteurs. Le secteur agricole, où vit d’abord la majorité de la population, a des revenus bas et relativement proches les uns des autres. Le secteur industriel et urbain a des revenus plus élevés et plus dispersés : entrepreneurs, ouvriers qualifiés, manœuvres.</p>
<h4>2. La transition</h4>
<p>Au début de l’industrialisation, une partie de la population quitte les campagnes pour les villes. L’écart entre les revenus urbains et ruraux, ajouté aux inégalités propres au secteur industriel, augmente les inégalités totales. C’est la phase ascendante. L’économiste W. Arthur Lewis décrit le même mouvement en 1954 dans son modèle de développement à deux secteurs.</p>
<h4>3. La redescente</h4>
<p>Quand la majorité de la population a rejoint le secteur moderne, l’écart entre les secteurs compte moins. Par ailleurs, l’éducation se diffuse, les salariés s’organisent en syndicats, la démocratie conduit à des impôts progressifs et à la protection sociale, l’épargne des plus riches est en partie érodée par les guerres et l’inflation. Les inégalités diminuent.</p>
${cloche}
<h4>4. Une loi optimiste</h4>
<p>Dans le contexte de la guerre froide, l’hypothèse a une portée politique considérable. Elle suggère aux pays en développement que les inégalités initiales sont le prix normal et temporaire de la croissance, et que le capitalisme finit par les réduire de lui-même. Elle devient pendant des décennies un repère de l’économie du développement, souvent présentée plus affirmativement que Kuznets ne l’avait fait.</p>
<h4>5. Les tests en coupe</h4>
<p>Dans les années 1970, des économistes comme Montek Singh Ahluwalia comparent des dizaines de pays à un moment donné. Ils trouvent une courbe en cloche : les pays à revenu intermédiaire sont en moyenne plus inégaux que les pays pauvres et riches. Mais ce résultat tient beaucoup aux pays d’Amérique latine, à revenu intermédiaire et historiquement très inégaux pour des raisons propres, héritage colonial et concentration des terres.</p>
<h4>6. Les tests dans le temps</h4>
<p>Klaus Deininger et Lyn Squire (1998) suivent l’évolution des inégalités pays par pays, avec des données de meilleure qualité. Dans la grande majorité des pays, ils ne trouvent pas de courbe en cloche : les inégalités peuvent monter, baisser ou rester stables pendant la croissance. Les pays d’Asie de l’Est, comme la Corée du Sud et Taïwan, ont connu une croissance très rapide avec des inégalités modérées, en partie grâce à des réformes agraires et à l’éducation de masse.</p>
<h4>7. La courbe environnementale</h4>
<p>En 1991, Gene Grossman et Alan Krueger, étudiant l’impact de l’accord de libre-échange nord-américain, observent que certains polluants locaux, comme le dioxyde de soufre, augmentent puis diminuent avec le revenu par habitant. On parle de « courbe de Kuznets environnementale » : les pays pauvres polluent en s’industrialisant, puis, plus riches, exigent un air plus pur et en ont les moyens. La relation vaut pour plusieurs polluants locaux, beaucoup moins pour le CO₂, dont les dommages sont globaux et lointains.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La courbe en U des pays riches</h4>
<p>Thomas <a href="#eco-piketty">Piketty</a> et Emmanuel Saez reconstruisent à partir de 2003 l’évolution des hauts revenus à partir des données fiscales. Aux États-Unis, la part du revenu reçue par les 10 % les plus aisés passe d’environ 45 % dans les années 1920 à environ un tiers de 1945 à 1980, puis remonte autour de 48 % dans les années 2010. Kuznets avait observé la baisse ; il ne pouvait pas voir la remontée. Pour Piketty, la baisse s’explique surtout par les chocs des guerres, de la crise de 1929 et des politiques fiscales, et non par une loi naturelle du développement (<a href="#c-r-g">voir r > g</a>).</p>
${enU}
<h4>Les vagues de Milanović</h4>
<p>Branko Milanović propose en 2016 de parler de « vagues de Kuznets » : les inégalités montent et descendent à plusieurs reprises, sous l’effet de forces bénignes, comme l’éducation ou le vieillissement, et malignes, comme les guerres et les épidémies. La révolution technologique et la mondialisation depuis 1980 auraient lancé une seconde vague ascendante dans les pays riches.</p>
<h4>La Chine</h4>
<p>La Chine offre l’exemple le plus spectaculaire d’une évolution compatible avec Kuznets : avec l’exode rural et l’industrialisation, son coefficient de Gini passe d’environ 0,3 au début des années 1980 à près de 0,5 à la fin des années 2000, avant de baisser légèrement. Mais les causes sont multiples : écart ville-campagne, système d’enregistrement des résidents, ouverture inégale des régions, corruption.</p>` }
    ],
    cas: [
      { titre: "La Corée du Sud : croissance et égalité", html: `
<p>Après la guerre, la Corée du Sud mène, entre 1948 et 1950, une réforme agraire radicale qui redistribue les terres des grands propriétaires aux paysans. Elle investit massivement dans l’éducation primaire puis secondaire. Pendant les décennies de croissance rapide qui suivent, à plus de 7 % par an, les inégalités de revenu restent modérées. La Banque mondiale, dans son rapport sur le « miracle est-asiatique » en 1993, parle de « croissance partagée ». Le cas montre que la phase ascendante de la courbe de Kuznets n’est pas une fatalité : les politiques initiales, terre et éducation, comptent beaucoup.</p>` },
      { titre: "La Suisse : une stabilité relative", html: `
<p>Les travaux de Reto Foellmi et Isabel Martínez sur les revenus suisses à partir des données fiscales indiquent que la part des hauts revenus est restée relativement stable sur longue période, bien plus qu’aux États-Unis ou au Royaume-Uni, avec une hausse modérée des très hauts revenus depuis les années 1990. Les inégalités de patrimoine sont en revanche élevées, parmi les plus fortes des pays riches. Côté environnement, les émissions de gaz à effet de serre produites sur le territoire suisse ont nettement baissé depuis 1990 alors que le PIB augmentait, ce qui ressemble à une courbe de Kuznets environnementale. Mais selon l’Office fédéral de l’environnement, près des deux tiers de l’empreinte carbone de la consommation suisse sont émis à l’étranger, dans la production des biens importés.</p>` },
      { titre: "La pollution de l’air à Londres et à Pékin", html: `
<p>Au XIXe siècle et jusqu’au grand smog de décembre 1952, qui cause des milliers de morts, Londres est l’une des villes les plus polluées du monde. Le Clean Air Act de 1956 et le passage du charbon à d’autres énergies réduisent fortement la pollution. Pékin connaît au début des années 2010 des pics de pollution aux particules fines spectaculaires ; à partir de 2013, le gouvernement chinois lance un plan d’action qui réduit nettement les concentrations en quelques années. Les deux cas illustrent la courbe environnementale, mais aussi le rôle décisif des décisions politiques, et non d’une évolution automatique.</p>` }
    ],
    objections: `
<h4>1. Une généralisation hâtive</h4>
<p>Kuznets lui-même présentait son hypothèse comme très spéculative. Ses successeurs l’ont transformée en loi à partir de comparaisons entre pays, alors que les évolutions dans le temps ne la confirment pas. La courbe en coupe reflète surtout la géographie de l’inégalité, avec l’Amérique latine au milieu.</p>
<h4>2. Les inégalités dépendent des institutions</h4>
<p>Pour Piketty, Acemoglu ou Atkinson, les inégalités sont façonnées par les institutions et les politiques : fiscalité, éducation, droit du travail, protection sociale, règles financières. Le développement ne détermine pas mécaniquement leur évolution.</p>
<h4>3. Un argument pour l’attente</h4>
<p>L’hypothèse a pu servir à justifier l’inaction : si les inégalités baissent d’elles-mêmes avec la croissance, inutile de les combattre. Les critiques y voient une lecture de la guerre froide, qui promettait aux pays pauvres les bénéfices futurs du capitalisme.</p>
<h4>4. La courbe environnementale ne règle pas le climat</h4>
<p>Pour les pollutions globales, comme le CO₂, ou pour la biodiversité, il n’y a pas de baisse automatique avec la richesse, et la baisse observée dans certains pays riches s’explique en partie par la délocalisation des industries polluantes. Compter sur la croissance pour résoudre le problème climatique serait dangereux.</p>`,
    ecoles: `
<p><b>Simon Kuznets</b> (1955) formule l’hypothèse avec prudence.</p>
<p><b>W. Arthur Lewis</b> (1954) décrit le développement à deux secteurs qui la sous-tend.</p>
<p><b>Ahluwalia</b> et la Banque mondiale la popularisent dans les années 1970.</p>
<p><b>Deininger et Squire</b> la remettent en cause dans le temps.</p>
<p><b><a href="#eco-piketty">Piketty</a></b> et Saez montrent la remontée des inégalités depuis 1980 ; <b>Milanović</b> parle de vagues.</p>
<p><b>Grossman et Krueger</b> la transposent à l’environnement.</p>`,
    source: {
      titre: "Simon Kuznets, « Economic Growth and Income Inequality », American Economic Review, 1955",
      texte: "Cet article contient peut-être 5 % d’information empirique et 95 % de spéculation, dont une partie est peut-être entachée de vœux pieux.",
      notes: `
<p><b>Une prudence rare.</b> Kuznets termine son discours par cet avertissement. Il souligne que les données disponibles sont très insuffisantes, et qu’il faudrait des décennies de recherches pour confirmer ou infirmer ses hypothèses.</p>
<p><b>« Vœux pieux ».</b> Kuznets reconnaît que son espoir de voir les inégalités diminuer avec le développement a pu influencer son interprétation. C’est précisément ce que lui reprocheront plus tard ses critiques.</p>
<p><b>Un destin paradoxal.</b> L’article le plus prudent de Kuznets est devenu l’une de ses idées les plus citées, souvent sous une forme bien plus affirmative que la sienne. Piketty y voit un exemple de la manière dont une conjecture optimiste a pu s’imposer à cause de son contexte politique.</p>`
    },
    quiz: [
      { q: "Quelle forme a la courbe de Kuznets ?",
        o: ["Une droite montante", "Une cloche : les inégalités montent puis descendent avec le revenu", "Une droite descendante", "Un U : les inégalités baissent puis montent"], c: 1,
        e: "On parle aussi de U inversé." },
      { q: "Quel mécanisme explique la phase ascendante selon Kuznets ?",
        o: ["La hausse des impôts sur les hauts revenus", "Le passage de la population d’un secteur agricole pauvre et égalitaire à un secteur industriel plus riche et plus inégal", "La baisse des impôts", "Le commerce international"], c: 1,
        e: "L’écart entre les deux secteurs augmente les inégalités pendant la transition." },
      { q: "Qu’ont montré Piketty et Saez pour les États-Unis ?",
        o: ["Une baisse continue des inégalités", "Une courbe en U : baisse jusqu’aux années 1950, remontée depuis 1980", "Une stabilité parfaite", "Une hausse continue depuis 1900"], c: 1,
        e: "La part des 10 % les plus aisés passe d’environ 45 % à un tiers, puis remonte vers 48 %." },
      { q: "Qu’est-ce que la courbe de Kuznets environnementale ?",
        o: ["L’hypothèse que la pollution augmente sans fin avec le revenu", "L’hypothèse que certaines pollutions augmentent puis diminuent avec le revenu par habitant", "Un indice de biodiversité", "La relation entre inégalités et émissions de CO₂"], c: 1,
        e: "Elle se vérifie pour plusieurs polluants locaux, beaucoup moins pour le CO₂." },
      { q: "Pourquoi la baisse des émissions suisses depuis 1990 ne suffit-elle pas à confirmer la courbe environnementale ?",
        o: ["Parce qu’elle est fausse", "Parce qu’une grande partie de l’empreinte carbone suisse est émise à l’étranger, dans les biens importés", "Parce que les émissions suisses ont en réalité augmenté", "Parce que la population suisse a diminué"], c: 1,
        e: "Près des deux tiers de l’empreinte de la consommation suisse sont émis hors du pays." }
    ],
    ouverte: {
      q: "Les inégalités de revenu sont relativement stables en Suisse, mais les inégalités de patrimoine y sont parmi les plus élevées des pays riches. Faut-il s’en préoccuper ?",
      r: "Plusieurs facteurs expliquent cette concentration du patrimoine : les héritages, la forte valeur des entreprises familiales et de l’immobilier, la présence de nombreuses grandes fortunes venues de l’étranger, et le fait que l’épargne retraite du deuxième pilier n’est souvent pas comptée dans le patrimoine des ménages, ce qui sous-estime celui de la classe moyenne. Ceux qui s’en préoccupent soulignent que la concentration du patrimoine se transmet entre générations, qu’elle peut peser sur l’égalité des chances et sur l’influence politique, et que l’impôt sur les successions a été réduit ou supprimé pour les descendants directs dans la plupart des cantons. Ceux qui la relativisent rappellent que la Suisse prélève déjà un impôt sur la fortune dans tous les cantons, que les revenus restent assez égaux après impôts et transferts, et que la mobilité sociale y est plutôt bonne. Le peuple a refusé en 2015 un impôt fédéral sur les successions, et l’initiative de la Jeunesse socialiste sur les très grandes successions, qui a relancé le débat, a été très largement rejetée le 30 novembre 2025."
    },
    lectures: [
      ["Accessible", "Branko Milanović, Inégalités mondiales, 2016, chapitres 2 et 3."],
      ["Accessible", "Thomas Piketty, Une brève histoire de l’égalité, 2021."],
      ["Intermédiaire", "Simon Kuznets, « Economic Growth and Income Inequality », American Economic Review, 1955."],
      ["Intermédiaire", "Thomas Piketty, Le Capital au XXIe siècle, 2013, chapitre 1, section sur Kuznets."],
      ["Recherche", "Klaus Deininger et Lyn Squire, « New Ways of Looking at Old Issues: Inequality and Growth », Journal of Development Economics, 1998 ; Gene Grossman et Alan Krueger, « Economic Growth and the Environment », Quarterly Journal of Economics, 1995."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Une cloche pour les inégalités</h3>
<p>En 1955, l’économiste américain Simon Kuznets se demande comment les inégalités évoluent quand un pays s’enrichit. Son idée : au début de l’industrialisation, les inégalités augmentent, parce que les villes s’enrichissent plus vite que les campagnes. Puis, quand presque tout le monde a rejoint l’économie moderne, que l’école se diffuse et que l’État social se développe, elles diminuent. Dessinée, l’évolution a la forme d’une cloche : c’est la <b>courbe de Kuznets</b>.</p>
${cloche}
<h3>Une idée démentie ?</h3>
<p>Kuznets avait observé la baisse des inégalités dans les pays riches au début du XXe siècle. Mais depuis 1980, elles remontent, notamment aux États-Unis. Pour Thomas <a href="#eco-piketty">Piketty</a>, leur baisse passée s’expliquait surtout par les guerres, les crises et les impôts, pas par une loi naturelle.</p>
<h3>Et l’environnement ?</h3>
<p>On a appliqué la même idée à la pollution : les pays polluent en s’industrialisant, puis dépolluent en s’enrichissant. C’est vrai pour certaines pollutions locales, comme la fumée des usines, beaucoup moins pour le climat.</p>
<h3>À retenir</h3>
<p>La croissance ne réduit pas automatiquement les inégalités. La notice complète présente le raisonnement, les tests et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Le discours de Kuznets en 1954 : la croissance réduit-elle les inégalités ?",
      raisonnement: "Sept étapes, des deux secteurs à la courbe environnementale.",
      preuves: "La courbe en U des pays riches, les vagues de Milanović, la Chine.",
      cas: "La Corée du Sud, la Suisse, la pollution à Londres et Pékin.",
      objections: "Une généralisation hâtive, le rôle des institutions, un argument pour l’attente, le climat.",
      ecoles: "Kuznets, Lewis, Ahluwalia, Deininger et Squire, Piketty et Saez, Milanović, Grossman et Krueger.",
      source: "Kuznets, 1955 : 5 % d’information et 95 % de spéculation.",
      quiz: "Cinq questions corrigées et une question sur le patrimoine en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     34. CONSOMMATION OSTENTATOIRE
     ===================================================================== */
  const veblen = fig(300, (() => {
    const L = 90, R = 560, Top = 50, B = 250;
    let s = `<text x="20" y="24" ${T}>Un bien ordinaire et un bien de Veblen (schéma)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>prix</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>quantité demandée</text>`;
    s += `<line x1="${L + 30}" y1="${Top + 20}" x2="${R - 40}" y2="${B - 20}" style="stroke:var(--note); stroke-width:2.4"/>`;
    s += `<text x="${R - 40}" y="${B - 28}" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">bien ordinaire</text>`;
    s += `<path d="M ${L + 60} ${B - 30} C ${L + 140} ${B - 80}, ${L + 230} ${Top + 40}, ${L + 210} ${Top + 10}" style="fill:none; stroke:var(--gold); stroke-width:2.8"/>`;
    s += `<text x="${L + 220}" y="${Top + 14}" style="fill:var(--gold); font:700 12px Manrope, sans-serif">bien de Veblen</text>`;
    s += `<text x="${L + 160}" y="${B - 70}" ${S}>plus il est cher,</text><text x="${L + 160}" y="${B - 54}" ${S}>plus il est désiré</text>`;
    return s;
  })(), "Harvey Leibenstein (1950) distingue l’effet d’imitation, l’effet de snobisme et l’« effet Veblen », par lequel la demande d’un bien augmente avec son prix, parce que ce prix lui-même signale la richesse de l’acheteur. La courbe de demande peut alors être croissante sur une partie de son tracé.", "Deux courbes de demande, l’une décroissante, l’autre croissante");

  const course = fig(300, (() => {
    const x0 = 210, y0 = 70, cw = 200, ch = 90;
    let s = `<text x="20" y="24" ${T}>La course aux positions : deux voisins et leurs maisons (exemple)</text>`;
    s += `<text x="${x0 + cw / 2}" y="${y0 - 12}" text-anchor="middle" ${T}>B garde sa maison</text><text x="${x0 + cw * 1.5}" y="${y0 - 12}" text-anchor="middle" ${T}>B s’agrandit</text>`;
    s += `<text x="${x0 - 12}" y="${y0 + ch / 2 + 4}" text-anchor="end" ${T}>A garde sa maison</text><text x="${x0 - 12}" y="${y0 + ch * 1.5 + 4}" text-anchor="end" ${T}>A s’agrandit</text>`;
    const cells = [[0, 0, "A : 3   B : 3", "rang égal, budget libre", "var(--note)"], [1, 0, "A : 1   B : 4", "B dépasse A", "var(--line)"], [0, 1, "A : 4   B : 1", "A dépasse B", "var(--line)"], [1, 1, "A : 2   B : 2", "rang égal, budget épuisé", "var(--serial)"]];
    cells.forEach(([c, r, t, sub, col]) => {
      const x = x0 + c * cw, y = y0 + r * ch;
      s += `<rect x="${x + 4}" y="${y + 4}" width="${cw - 8}" height="${ch - 8}" rx="10" style="fill:var(--card); stroke:${col}; stroke-width:2"/>`;
      s += `<text x="${x + cw / 2}" y="${y + 42}" text-anchor="middle" style="fill:var(--ink); font:700 14px 'JetBrains Mono', monospace">${t}</text>`;
      s += `<text x="${x + cw / 2}" y="${y + 62}" text-anchor="middle" ${S}>${sub}</text>`;
    });
    s += `<text x="20" y="276" ${S}>Satisfaction sur 4. Chacun a intérêt à s’agrandir, mais tous deux finissent moins bien lotis.</text>`;
    return s;
  })(), "Robert Frank décrit la consommation de biens « positionnels » comme une course aux armements : quand la satisfaction dépend du rang, les dépenses de chacun annulent celles des autres. C’est un dilemme du prisonnier, qui peut justifier une intervention collective. Chiffres illustratifs.", "Matrice deux sur deux du dilemme de la consommation positionnelle");

  OEC.notices["consommation-ostentatoire"] = {
    essentiel: [
      "La consommation ostentatoire désigne l’achat de biens et de services destinés à montrer sa richesse et son rang social plutôt qu’à satisfaire un besoin pratique. Le terme est forgé par Thorstein Veblen en 1899 dans la Théorie de la classe de loisir.",
      "Elle implique que la satisfaction dépend aussi de ce que consomment les autres. Certains biens, dits de Veblen, sont même plus désirés quand leur prix augmente, et les dépenses de statut peuvent tourner à la course sans fin.",
      "L’idée a été prolongée par l’hypothèse du revenu relatif, les biens positionnels et l’économie du bonheur. Elle nourrit des propositions de taxation de la consommation de luxe et la critique de la croissance fondée sur la consommation."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi payer plus cher ce qui ne sert pas mieux ?", html: `
<p>Une montre à quartz bon marché donne l’heure plus précisément qu’une montre mécanique de luxe valant cent fois plus. Un sac de marque n’est pas plus pratique qu’un sac ordinaire de même qualité. Pourtant, ces objets se vendent, et leur prix élevé semble faire partie de leur attrait. La théorie économique classique, qui suppose que chacun cherche à satisfaire ses besoins au meilleur prix, a du mal à l’expliquer.</p>
<p>En 1899, Thorstein <a href="#eco-veblen">Veblen</a>, économiste américain d’origine norvégienne, au tempérament ironique et à la carrière universitaire chaotique, publie la Théorie de la classe de loisir. Observant les fortunes du « Gilded Age » américain, leurs demeures, leurs domestiques, leurs fêtes, il soutient que l’essentiel de leurs dépenses ne vise pas le confort, mais la démonstration de leur rang. Il invente l’expression de « consommation ostentatoire ».</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La richesse doit se voir</h4>
<p>Pour Veblen, dans une société où le statut dépend de la richesse, il ne suffit pas d’être riche : il faut le montrer, car l’estime des autres ne s’accorde qu’à ce qui se voit. Dans les petites communautés d’autrefois, chacun connaissait la fortune de ses voisins ; dans les grandes villes modernes, où l’on croise des inconnus, la consommation visible devient le principal moyen de signaler sa position.</p>
<h4>2. Le loisir ostentatoire</h4>
<p>Le premier moyen de montrer sa richesse est de ne pas travailler, ou du moins de ne pas faire de travail productif : c’est le « loisir ostentatoire ». Les classes aisées pratiquent des activités coûteuses en temps et sans utilité pratique, comme les langues mortes, les bonnes manières raffinées, les sports aristocratiques. Leur maîtrise prouve qu’on a pu consacrer des années à des occupations improductives.</p>
<h4>3. La consommation ostentatoire</h4>
<p>Le second moyen, de plus en plus important dans la société urbaine, est la dépense visible : demeures somptueuses, vêtements coûteux, domestiques en livrée. Veblen parle aussi de « consommation par procuration » : l’épouse et les domestiques d’un homme riche consomment pour lui et témoignent de sa fortune. Le gaspillage n’est pas un défaut de ces dépenses, c’en est la fonction : il prouve qu’on peut se permettre de gaspiller.</p>
<h4>4. L’émulation</h4>
<p>Chaque classe sociale imite les modes de consommation de la classe immédiatement supérieure. Les normes de « respectabilité » descendent ainsi l’échelle sociale, jusqu’aux plus modestes, qui se privent parfois du nécessaire pour maintenir les apparences. Veblen appelle ce mécanisme l’« émulation pécuniaire ».</p>
<h4>5. Les biens de Veblen</h4>
<p>Il en découle une conséquence surprenante : pour certains biens, la demande peut augmenter avec le prix. Un parfum, une montre ou un vin peu coûteux perdent leur attrait de signe de richesse. Harvey Leibenstein formalise en 1950 cet « effet Veblen », à côté de l’effet d’imitation, on achète ce que les autres achètent, et de l’effet de snobisme, on évite ce que tout le monde a.</p>
${veblen}
<h4>6. Le revenu relatif</h4>
<p>En 1949, James Duesenberry propose l’« hypothèse du revenu relatif » : la consommation d’un ménage dépend de son revenu comparé à celui des autres, et pas seulement de son revenu absolu. En 1974, Richard Easterlin constate que, dans un pays donné, les riches se disent plus heureux que les pauvres, mais que la satisfaction moyenne n’augmente guère quand le pays s’enrichit. C’est le « paradoxe d’Easterlin », souvent expliqué par l’importance des comparaisons sociales.</p>
<h4>7. Les biens positionnels</h4>
<p>Fred Hirsch, dans Les Limites sociales de la croissance (1976), distingue les biens dont la valeur dépend de leur rareté relative : la maison avec vue, le diplôme prestigieux, la place en tête. Si tout le monde s’enrichit, chacun ne peut pas avoir plus de ces biens. Robert Frank montre que la consommation positionnelle prend la forme d’une course aux armements : chacun dépense pour ne pas être distancé, et tous finissent par travailler et dépenser davantage sans être plus satisfaits.</p>
${course}` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les voisins comme référence</h4>
<p>Erzo Luttmer (2005) montre, à partir d’enquêtes américaines, qu’à revenu égal, les personnes dont les voisins gagnent davantage se déclarent moins heureuses. Peter Kuhn et ses coauteurs (2011) étudient une loterie néerlandaise où des codes postaux entiers sont tirés au sort : les voisins des gagnants, qui ne reçoivent rien, sont plus susceptibles d’acheter une nouvelle voiture dans les mois qui suivent. La consommation des uns entraîne celle des autres.</p>
<h4>La visibilité des dépenses</h4>
<p>Kerwin Charles, Erik Hurst et Nikolai Roussanov (2009) trouvent que, aux États-Unis, à revenu égal, les ménages appartenant à des groupes dont le revenu moyen est plus faible consacrent une part plus importante de leur budget aux biens visibles, vêtements, bijoux, voitures. Leur interprétation est que la consommation visible sert davantage de signal quand le groupe de référence est moins riche, conformément à la logique de Veblen.</p>
<h4>La consommation en cascade</h4>
<p>Marianne Bertrand et Adair Morse (2016) montrent que, dans les régions américaines où les revenus des plus riches ont fortement augmenté, les ménages de la classe moyenne ont aussi augmenté leur consommation, notamment de biens visibles, et se sont davantage endettés. Robert Frank parle de « cascades de dépenses » : les dépenses des plus riches redéfinissent les normes pour ceux qui sont juste en dessous, et ainsi de suite.</p>` }
    ],
    cas: [
      { titre: "La montre suisse de luxe", html: `
<p>L’horlogerie suisse est l’un des exemples les plus purs de bien de Veblen. Depuis la crise du quartz des années 1970, où les montres électroniques japonaises, plus précises et bien moins chères, ont fait disparaître une grande partie des emplois horlogers suisses, les marques suisses de haut de gamme se sont repositionnées sur le luxe. Leur valeur ne tient plus à la précision, mais à la marque, au savoir-faire visible, à la rareté. En 2021-2022, les prix de revente de certaines montres de prestige dépassaient largement leur prix neuf, avec des listes d’attente chez les détaillants. Les prix sur le marché secondaire ont ensuite nettement baissé. L’industrie illustre à la fois la logique de Veblen et sa fragilité, qui dépend des modes et des cycles de richesse.</p>` },
      { titre: "La taxe de luxe américaine de 1990", html: `
<p>En 1990, le Congrès américain instaure une taxe de 10 % sur la partie du prix dépassant certains seuils pour les bateaux de plaisance, les avions privés, les bijoux, les fourrures et les voitures de luxe. L’objectif est de faire contribuer les plus riches. Les ventes de yachts s’effondrent, en partie à cause de la récession, et les chantiers navals licencient. La taxe est supprimée dès 1993 pour la plupart des produits. Ses critiques y voient la preuve qu’on ne taxe pas facilement le luxe ; ses défenseurs, comme Robert Frank, proposent plutôt un impôt progressif sur la consommation totale, plus difficile à contourner.</p>` },
      { titre: "Le potlatch", html: `
<p>Chez les peuples de la côte nord-ouest du Pacifique, comme les Kwakwaka’wakw, le potlatch est une cérémonie où un chef distribue, voire détruit, de grandes quantités de biens pour affirmer son rang. L’anthropologue Franz Boas le décrit à la fin du XIXe siècle, et Marcel Mauss l’analyse dans son Essai sur le don (1925). Le gouvernement canadien l’interdit de 1884 à 1951. Veblen et les économistes y voient une forme extrême de consommation ostentatoire : le prestige se gagne en montrant qu’on peut se passer de richesses.</p>` }
    ],
    objections: `
<h4>1. Le goût n’est pas que du statut</h4>
<p>Beaucoup de biens chers sont achetés pour leur qualité, leur durabilité ou le plaisir esthétique qu’ils procurent, et pas seulement pour être vus. Réduire toute consommation de luxe au désir de paraître est une simplification.</p>
<h4>2. Le signal a une utilité</h4>
<p>Dans une société où l’information est imparfaite, signaler sa richesse ou sa fiabilité peut avoir une fonction utile, comme le montrent les théories du signal (<a href="#c-asymetrie-information">voir asymétrie d’information</a>). Un avocat bien habillé, une entreprise au siège prestigieux signalent leur réussite à des clients qui ne peuvent pas l’évaluer autrement.</p>
<h4>3. Le paternalisme</h4>
<p>Taxer ou critiquer la consommation de luxe suppose de juger ce qui est utile et ce qui est vain, ce que les économistes libéraux jugent arbitraire. Chacun est le meilleur juge de ses propres préférences, même lorsqu’elles incluent le désir de distinction.</p>
<h4>4. Un paradoxe d’Easterlin contesté</h4>
<p>Betsey Stevenson et Justin Wolfers (2008), avec des données plus nombreuses, trouvent que la satisfaction moyenne augmente bien avec le revenu, entre pays et dans le temps. Si le revenu absolu compte davantage que ne le pensait Easterlin, la course aux positions serait moins stérile qu’il n’y paraît.</p>`,
    ecoles: `
<p><b>Adam <a href="#eco-smith">Smith</a></b>, dans la Théorie des sentiments moraux, voit déjà dans le désir d’être remarqué un moteur de l’ambition.</p>
<p><b><a href="#eco-veblen">Veblen</a></b> (1899) forge le concept de consommation ostentatoire.</p>
<p><b>Duesenberry</b> et <b>Leibenstein</b> l’intègrent à la théorie de la demande.</p>
<p><b><a href="#eco-galbraith">Galbraith</a></b> critique la société d’abondance et la création des besoins par la publicité.</p>
<p><b>Pierre Bourdieu</b>, sociologue, analyse la distinction par les goûts culturels.</p>
<p><b>Hirsch, Easterlin</b> et <b>Robert Frank</b> développent les biens positionnels et l’économie du bonheur.</p>`,
    source: {
      titre: "Thorstein Veblen, Théorie de la classe de loisir, 1899, chapitre 4",
      texte: "La consommation ostentatoire de biens de valeur est un moyen d’acquérir de la considération pour le gentilhomme oisif.",
      notes: `
<p><b>La naissance du concept.</b> Le chapitre 4, intitulé « La consommation ostentatoire », suit un chapitre sur le « loisir ostentatoire ». Veblen y décrit comment la dépense remplace progressivement l’oisiveté comme preuve de richesse, à mesure que la société devient plus urbaine et anonyme.</p>
<p><b>Le style de Veblen.</b> Veblen écrit dans une langue volontairement savante et neutre, qui donne à ses descriptions des mœurs de la haute société une ironie mordante. Il décrit les riches comme un anthropologue décrirait une tribu lointaine.</p>
<p><b>Un regard évolutionniste.</b> Veblen voit dans ces comportements des survivances de stades anciens de la société, où les guerriers et les chasseurs exhibaient leurs trophées. Pour lui, la consommation ostentatoire est un instinct « prédateur » transposé dans la société industrielle.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que la consommation ostentatoire selon Veblen ?",
        o: ["L’achat de biens de première nécessité", "La dépense destinée à montrer sa richesse et son rang", "L’épargne des classes moyennes", "La consommation de biens durables, comme les voitures"], c: 1,
        e: "Le gaspillage visible prouve qu’on peut se permettre de gaspiller." },
      { q: "Qu’est-ce qu’un « bien de Veblen » ?",
        o: ["Un bien dont la demande diminue quand le revenu augmente", "Un bien dont la demande augmente avec le prix, car le prix signale la richesse", "Un bien de luxe vendu à prix réduit", "Un bien produit par des artisans de luxe"], c: 1,
        e: "Leibenstein formalise cet « effet Veblen » en 1950." },
      { q: "Que montre l’étude de la loterie néerlandaise par Kuhn et ses coauteurs ?",
        o: ["Que les gagnants épargnent tout", "Que les voisins des gagnants achètent plus souvent une nouvelle voiture", "Que les gagnants dépensent tout en quelques mois", "Que les gagnants déménagent"], c: 1,
        e: "La consommation visible des uns entraîne celle de leurs voisins." },
      { q: "Pourquoi la course aux biens positionnels est-elle un dilemme du prisonnier ?",
        o: ["Parce que chacun gagne à dépenser plus, et tous finissent mieux lotis", "Parce que chacun a intérêt à dépenser plus, mais que les dépenses s’annulent et que tous finissent moins bien lotis", "Parce que les biens positionnels sont rares", "Parce que les riches coopèrent"], c: 1,
        e: "Le rang relatif ne change pas, mais les ressources ont été dépensées." },
      { q: "Qu’affirme le paradoxe d’Easterlin (1974) ?",
        o: ["Les riches sont moins heureux que les pauvres", "Dans un pays, les riches se disent plus heureux, mais la satisfaction moyenne n’augmente guère quand le pays s’enrichit", "Le bonheur ne dépend pas du revenu", "La consommation rend toujours malheureux"], c: 1,
        e: "L’explication la plus courante est l’importance des comparaisons sociales ; le résultat est contesté par Stevenson et Wolfers." }
    ],
    ouverte: {
      q: "Faudrait-il remplacer une partie de l’impôt sur le revenu suisse par un impôt progressif sur la consommation, comme le propose Robert Frank ?",
      r: "L’idée de Frank est d’imposer non pas le revenu, mais la consommation totale de chaque ménage, calculée comme le revenu moins l’épargne, avec des taux faibles pour les premiers francs consommés et très élevés pour les grosses dépenses. La consommation positionnelle des plus riches deviendrait plus coûteuse, l’épargne serait encouragée, et la course aux dépenses se ralentirait sans que personne perde en rang relatif. La Suisse, qui impose déjà fortement la consommation par la TVA, mais à taux unique, et qui a un impôt sur la fortune, pourrait en théorie l’envisager. Les obstacles sont importants : il faudrait mesurer l’épargne de chaque ménage, éviter les contournements par les achats à l’étranger, et réformer un système fiscal fédéraliste, où les cantons fixent l’essentiel de l’impôt sur le revenu. Les partisans d’une simplification fiscale y voient une complication supplémentaire ; ceux qui s’inquiètent de la consommation de ressources et de l’endettement des ménages y voient une piste prometteuse."
    },
    lectures: [
      ["Accessible", "Thorstein Veblen, Théorie de la classe de loisir, 1899, chapitres 3 et 4."],
      ["Accessible", "Robert Frank, Falling Behind: How Rising Inequality Harms the Middle Class, 2007."],
      ["Intermédiaire", "Fred Hirsch, Les Limites sociales de la croissance, 1976."],
      ["Intermédiaire", "Harvey Leibenstein, « Bandwagon, Snob, and Veblen Effects in the Theory of Consumers’ Demand », Quarterly Journal of Economics, 1950."],
      ["Recherche", "Erzo Luttmer, « Neighbors as Negatives: Relative Earnings and Well-Being », Quarterly Journal of Economics, 2005 ; Marianne Bertrand et Adair Morse, « Trickle-Down Consumption », Review of Economics and Statistics, 2016."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Montrer qu’on peut se le permettre</h3>
<p>Pourquoi acheter une montre de luxe qui donne l’heure moins précisément qu’une montre bon marché ? En 1899, Thorstein <a href="#eco-veblen">Veblen</a> répond : parce qu’elle montre aux autres qu’on est riche. Il appelle cela la <b>consommation ostentatoire</b>. Ce qui compte n’est pas l’utilité de l’objet, mais ce qu’il dit de son propriétaire.</p>
<h3>Plus c’est cher, plus on en veut</h3>
<p>Pour certains biens, un prix élevé fait partie de l’attrait : un sac de luxe vendu à bas prix perdrait sa valeur de symbole. Ces biens, dont la demande augmente avec le prix, sont appelés des biens de Veblen.</p>
${veblen}
<h3>Une course sans fin</h3>
<p>Si chacun veut au moins égaler ses voisins, les dépenses des uns poussent celles des autres : une étude néerlandaise montre que les voisins des gagnants à la loterie achètent plus souvent une nouvelle voiture. Tout le monde dépense davantage, sans que personne ne gagne en rang. D’où l’idée, défendue par Robert Frank, de taxer davantage les grosses dépenses.</p>
<h3>À retenir</h3>
<p>Notre satisfaction dépend aussi de ce que possèdent les autres. La notice complète présente les théories, les preuves et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Pourquoi payer plus cher ce qui ne sert pas mieux ? Veblen et le Gilded Age.",
      raisonnement: "Sept étapes, du loisir ostentatoire aux biens positionnels.",
      preuves: "Les voisins comme référence, la visibilité des dépenses, les cascades de consommation.",
      cas: "La montre suisse de luxe, la taxe de luxe américaine, le potlatch.",
      objections: "Le goût, l’utilité du signal, le paternalisme, le paradoxe d’Easterlin contesté.",
      ecoles: "Smith, Veblen, Duesenberry et Leibenstein, Galbraith, Bourdieu, Hirsch, Easterlin et Frank.",
      source: "Veblen, 1899 : la consommation ostentatoire comme moyen de considération.",
      quiz: "Cinq questions corrigées et une question sur l’impôt progressif sur la consommation.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
