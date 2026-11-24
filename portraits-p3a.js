/* Œconomia — portraits longs, lot 3 (a) : Thomas Malthus, Jean-Baptiste Say */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };

  /* =====================================================================
     THOMAS MALTHUS
     ===================================================================== */
  const vieMalthus = lifeline(1766, 1834, [
    [1766, "naissance dans le Surrey", true], [1788, "Cambridge, mathématiques", false], [1789, "pasteur anglican", true], [1798, "Essai sur la population", false],
    [1803, "deuxième édition", true], [1805, "premier professeur d’économie", false], [1820, "Principes d’économie", true], [1834, "mort à Bath", false]
  ], "Thomas Robert Malthus, 1766-1834", "Pasteur de l’Église anglicane, puis premier professeur d’économie politique d’Angleterre au collège de la Compagnie des Indes orientales, Malthus révise son Essai six fois en trente ans, en l’enrichissant de données venues du monde entier.");

  const progressions = fig(300, (() => {
    const L = 80, B = 240, w = 34, sc = 3.2;
    const pop = [1, 2, 4, 8, 16, 32, 64], sub = [1, 2, 3, 4, 5, 6, 7];
    let s = `<text x="20" y="24" ${T}>Les deux progressions de Malthus, par périodes de 25 ans (indice 1 au départ)</text>`;
    pop.forEach((p, i) => {
      const x = L + i * 76, hp = Math.min(p, 60) * sc, hs = sub[i] * sc;
      s += `<rect x="${x}" y="${B - hp}" width="${w}" height="${hp}" rx="3" style="fill:var(--serial)"/>`;
      s += `<rect x="${x + w + 4}" y="${B - hs}" width="${w}" height="${hs}" rx="3" style="fill:var(--note)"/>`;
      s += `<text x="${x + w / 2}" y="${B - hp - 6}" text-anchor="middle" style="fill:var(--serial); font:700 11px 'JetBrains Mono', monospace">${p}</text>`;
      s += `<text x="${x + w * 1.5 + 4}" y="${B - hs - 6}" text-anchor="middle" style="fill:var(--note); font:700 11px 'JetBrains Mono', monospace">${sub[i]}</text>`;
      s += `<text x="${x + w + 2}" y="${B + 18}" text-anchor="middle" ${M}>${i * 25} ans</text>`;
    });
    s += `<rect x="${L}" y="40" width="12" height="12" style="fill:var(--serial)"/><text x="${L + 18}" y="50" ${S}>population sans frein : progression géométrique</text>`;
    s += `<rect x="${L}" y="58" width="12" height="12" style="fill:var(--note)"/><text x="${L + 18}" y="68" ${S}>subsistances : progression arithmétique</text>`;
    s += `<text x="20" y="286" ${S}>Après 150 ans, 64 contre 7 : l’écart doit être comblé par des « freins », la misère ou la contrainte morale.</text>`;
    return s;
  })(), "Le raisonnement de l’Essai de 1798, sous forme chiffrée. Malthus s’appuie sur l’exemple des colonies américaines, où la population doublait en vingt-cinq ans. La progression arithmétique des subsistances est une hypothèse plus qu’une observation ; la dernière barre de population est tronquée pour rester dans le cadre.", "Barres comparant croissance géométrique de la population et arithmétique des subsistances");

  const transition = fig(290, (() => {
    const L = 70, R = 600, B = 220, X = (t) => L + t * (R - L) / 10, Y = (v) => B - v * 4;
    let s = `<text x="20" y="24" ${T}>La transition démographique, que Malthus n’a pas vue venir (schéma)</text>`;
    const nat = (t) => t < 4 ? 40 : t < 8 ? 40 - (t - 4) * 7 : 12;
    const mort = (t) => t < 2 ? 38 : t < 6 ? 38 - (t - 2) * 7 : 10;
    let d1 = "", d2 = ""; for (let t = 0; t <= 10.001; t += 0.1) { d1 += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(nat(t))} `; d2 += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(mort(t))} `; }
    s += `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<path d="${d1}" style="fill:none; stroke:var(--note); stroke-width:2.6"/><path d="${d2}" style="fill:none; stroke:var(--serial); stroke-width:2.6; stroke-dasharray:6 4"/>`;
    s += `<text x="${X(0.2)}" y="${Y(40) - 10}" style="fill:var(--note); font:700 12px Manrope, sans-serif">natalité</text>`;
    s += `<text x="${X(0.2)}" y="${Y(38) + 22}" style="fill:var(--serial); font:700 12px Manrope, sans-serif">mortalité</text>`;
    [[1, "1. régime ancien"], [4, "2. la mortalité baisse"], [7, "3. la natalité suit"], [9.2, "4. régime moderne"]].forEach(([t, l]) => (s += `<text x="${X(t)}" y="${B + 20}" text-anchor="middle" ${S}>${l}</text>`));
    s += `<text x="20" y="270" ${S}>Entre les deux courbes, la population croît vite ; puis la croissance ralentit quand les familles ont moins d’enfants.</text>`;
    return s;
  })(), "Les pays européens, puis la plupart des pays du monde, ont connu cette transition : la mortalité baisse d’abord, grâce à l’alimentation et à l’hygiène, puis la natalité baisse à son tour, avec l’urbanisation, l’éducation des femmes et la contraception. La population se stabilise sans passer par la misère généralisée que Malthus annonçait.", "Deux courbes de natalité et de mortalité qui baissent successivement");

  OEC.portraits["malthus"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Thomas Robert Malthus (1766-1834), pasteur anglican et premier professeur d’économie politique d’Angleterre, est célèbre pour son Essai sur le principe de population (1798) : la population tend à croître plus vite que les subsistances, et cet écart est corrigé par la misère et le vice, ou par la « contrainte morale ».",
      "Il est aussi un économiste original, qui défend contre Ricardo la possibilité d’une insuffisance générale de la demande. Keynes verra en lui un précurseur de la demande effective.",
      "Ses prédictions démographiques ont été démenties par la révolution agricole et la transition démographique, mais le « malthusianisme » reste une référence dans les débats sur la population, les ressources et l’environnement. Darwin a trouvé chez lui l’idée de la sélection naturelle."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Thomas Robert Malthus naît le 13 février 1766 au Rookery, une maison de campagne près de Dorking, dans le Surrey. Son père, Daniel Malthus, est un gentleman cultivé, admirateur de Rousseau, qu’il a reçu chez lui, et passionné par les idées de progrès des Lumières. Le jeune Robert, né avec un bec-de-lièvre qui gênera toujours son élocution, est éduqué à domicile puis à l’académie dissidente de Warrington. Il étudie les mathématiques au Jesus College de Cambridge, dont il sort brillamment en 1788.</p>
<p>Ordonné pasteur de l’Église anglicane, il devient vicaire à Okewood, dans le Surrey, où il observe la pauvreté rurale. Dans ses conversations avec son père, il conteste l’optimisme des penseurs qui, comme William Godwin en Angleterre et Condorcet en France, annoncent une perfectibilité indéfinie de l’humanité. Il rassemble ses objections dans un essai publié anonymement en 1798 : Essai sur le principe de population. Le livre fait scandale et le rend célèbre.</p>
${vieMalthus}
<p>Il voyage ensuite en Scandinavie et en Russie pour rassembler des données, puis en France et en Suisse, et publie en 1803 une deuxième édition, très augmentée, qui ajoute la « contrainte morale » parmi les freins à la population. En 1804, il épouse Harriet Eckersall, avec qui il a trois enfants. En 1805, il devient professeur d’histoire et d’économie politique au collège de la Compagnie des Indes orientales, à Haileybury, le premier poste de ce genre en Angleterre. Il publie en 1820 ses Principes d’économie politique, débat pendant des années avec son ami <a href="#eco-ricardo">Ricardo</a>, participe à la fondation du Political Economy Club en 1821, et meurt à Bath le 29 décembre 1834.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Malthus écrit au lendemain de la Révolution française, dans une Angleterre inquiète. La population augmente rapidement, les mauvaises récoltes de la fin des années 1790 font flamber le prix du pain, et les guerres contre la France pèsent sur l’économie. Les dépenses d’assistance aux pauvres, financées par les paroisses dans le cadre des « lois sur les pauvres », augmentent fortement, notamment avec le système de Speenhamland, qui complète les salaires selon le prix du pain et la taille des familles.</p>
<p>Les penseurs radicaux, Godwin et Condorcet, soutiennent que la misère vient des mauvaises institutions, et qu’une société plus juste l’abolirait. Malthus répond qu’une loi naturelle, la tendance de la population à dépasser les subsistances, rendrait toute société égalitaire instable : sans propriété et sans responsabilité familiale, la population exploserait et la misère reviendrait.</p>
<p>Malthus écrit aussi au moment où commence la révolution industrielle. Ses contemporains ne savent pas encore que la productivité agricole et industrielle va augmenter comme jamais auparavant. Les données qu’il rassemble décrivent des sociétés où, pendant des siècles, le niveau de vie de la majorité est resté proche de la subsistance.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Deux postulats</h4>
<p>L’Essai part de deux postulats : la nourriture est nécessaire à l’existence de l’homme, et la passion entre les sexes est nécessaire et restera à peu près ce qu’elle est. Il en tire un « principe de population » : la capacité de la population à s’accroître est infiniment plus grande que celle de la terre à produire des subsistances.</p>
<h4>2. Les deux progressions</h4>
<p>Non freinée, la population croît selon une progression géométrique, doublant tous les vingt-cinq ans, comme dans les colonies américaines. Les subsistances, au mieux, croissent selon une progression arithmétique, car les terres fertiles sont limitées et les rendements décroissants (<a href="#c-rente">voir rente</a>).</p>
${progressions}
<h4>3. Les freins</h4>
<p>L’écart entre population et subsistances est comblé par des « freins ». Les freins positifs augmentent la mortalité : famines, épidémies, guerres, misère. Les freins préventifs réduisent la natalité : dans la première édition, le vice ; à partir de 1803, la « contrainte morale », c’est-à-dire le mariage tardif et la chasteté avant le mariage. Malthus, en pasteur, rejette la contraception.</p>
<h4>4. La critique des lois sur les pauvres</h4>
<p>Pour Malthus, l’assistance aux pauvres, en leur permettant de nourrir des familles plus nombreuses, augmente la population sans augmenter la nourriture, et fait finalement monter le prix du pain pour tous. Il propose d’abolir progressivement le droit à l’assistance pour les enfants nés après une certaine date. Ces idées influenceront la réforme de la loi sur les pauvres de 1834, qui crée les sinistres « workhouses ».</p>
<h4>5. La rente et les Corn Laws</h4>
<p>Malthus formule en 1815, en même temps que Ricardo, la théorie de la rente différentielle. Mais il en tire une conclusion opposée : il défend les Corn Laws, au nom de la sécurité alimentaire et de la dépense des propriétaires fonciers, qui soutient la demande.</p>
<h4>6. La demande effective</h4>
<p>Dans ses Principes (1820), Malthus soutient, contre Ricardo et <a href="#eco-say">Say</a>, qu’une surproduction générale est possible : si les capitalistes épargnent trop, la demande ne suffit plus à acheter la production. La consommation des propriétaires fonciers et les dépenses publiques jouent un rôle utile (<a href="#c-loi-debouches">voir loi des débouchés</a>). <a href="#eco-keynes">Keynes</a> regrettera en 1933 que Ricardo l’ait emporté sur ce point.</p>
<h4>7. Ce que Malthus n’a pas vu</h4>
<p>Malthus décrit bien les sociétés préindustrielles, où les gains de productivité se transformaient en hausse de la population plutôt qu’en hausse durable du niveau de vie. Mais il n’a pas anticipé la révolution agricole et industrielle, qui a permis de nourrir une population multipliée, ni la transition démographique, qui a fait baisser la natalité volontairement.</p>
${transition}` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Essai sur le principe de population (1798).</b> La première édition, anonyme, courte et polémique, écrite contre Godwin et Condorcet. C’est la plus lue et la plus vivante.</p>
<p><b>Essai sur le principe de population, deuxième édition (1803).</b> Un ouvrage presque nouveau, quatre fois plus long, nourri d’observations historiques et géographiques sur de nombreux pays, qui ajoute la contrainte morale. Malthus le révisera jusqu’à la sixième édition, en 1826.</p>
<p><b>Recherches sur la nature et le progrès de la rente (1815).</b> Une brochure où il formule la théorie de la rente différentielle.</p>
<p><b>Principes d’économie politique (1820).</b> Son traité, où il défend la possibilité de la surproduction générale et le rôle de la demande. Il a été longtemps négligé avant que Keynes ne le réhabilite.</p>
<p><b>Définitions en économie politique (1827).</b> Un petit livre sur la nécessité de définir rigoureusement les termes économiques, qui témoigne de son souci de méthode.</p>` }
    ],
    cas: [
      { titre: "Darwin lit Malthus", html: `
<p>En septembre 1838, Charles Darwin lit « pour se distraire » l’Essai sur le principe de population. Il est frappé par l’idée que les êtres vivants produisent beaucoup plus de descendants que les ressources ne peuvent en nourrir, et en tire l’intuition de la sélection naturelle : dans cette lutte pour l’existence, les variations favorables tendent à être préservées. Alfred Russel Wallace, codécouvreur de la sélection naturelle, a la même révélation en se souvenant de Malthus. Un essai d’économie politique est ainsi à l’origine de l’une des plus grandes théories scientifiques.</p>` },
      { titre: "Le piège malthusien dans l’histoire", html: `
<p>Les historiens de l’économie, comme Gregory Clark dans A Farewell to Alms (2007), soutiennent que Malthus a très bien décrit le monde d’avant 1800. Pendant des millénaires, le revenu moyen par habitant est resté à peu près stable : chaque progrès technique ou chaque bonne récolte se traduisait par une hausse de la population, qui ramenait le niveau de vie vers la subsistance. Après la peste noire de 1348, qui tue un tiers de la population européenne, les salaires réels augmentent fortement, faute de bras. Ce « piège malthusien » n’est rompu qu’avec la révolution industrielle.</p>` },
      { titre: "L’initiative Ecopop, 2014", html: `
<p>En novembre 2014, les Suisses votent sur l’initiative « Halte à la surpopulation – Oui à la préservation durable des ressources naturelles », dite Ecopop. Elle voulait limiter l’accroissement de la population résidente dû à l’immigration à 0,2 % par an, et consacrer une partie de l’aide au développement à la planification familiale volontaire. Ses promoteurs invoquaient la pression sur les paysages, les ressources et le climat, dans une logique proche du néo-malthusianisme. L’initiative est rejetée par environ 74 % des votants et par tous les cantons.</p>` },
      { titre: "La « bombe P » et la révolution verte", html: `
<p>En 1968, le biologiste américain Paul Ehrlich publie La Bombe P, qui annonce des famines massives dans les années 1970 et 1980 à cause de la surpopulation. Ses prédictions ne se réalisent pas : la « révolution verte », avec des variétés de blé et de riz à haut rendement développées notamment par Norman Borlaug, prix Nobel de la paix 1970, multiplie la production agricole. En 1980, l’économiste Julian Simon parie avec Ehrlich que le prix de cinq métaux baissera en dix ans ; Simon gagne. Le débat entre malthusiens et optimistes se poursuit aujourd’hui à propos du climat.</p>` }
    ],
    objections: `
<h4>1. Le progrès technique</h4>
<p>La production agricole a augmenté bien plus vite que la progression arithmétique supposée par Malthus, grâce à la mécanisation, aux engrais et à la sélection des semences. La population mondiale a été multipliée par huit depuis 1800, tandis que la nourriture disponible par personne a augmenté.</p>
<h4>2. La transition démographique</h4>
<p>Contrairement à ce que prévoyait Malthus, l’enrichissement a conduit à une baisse de la natalité. Dans les pays riches, et désormais dans une grande partie du monde, la fécondité est inférieure au seuil de remplacement des générations, et le problème est devenu le vieillissement.</p>
<h4>3. Marx et la critique sociale</h4>
<p><a href="#eco-marx">Marx</a> qualifie Malthus de « plagiaire » et d’apologiste des classes dominantes : la misère ne viendrait pas d’une loi naturelle, mais du capitalisme, qui crée une armée de réserve de chômeurs. La critique malthusienne des aides aux pauvres a servi à justifier des politiques dures.</p>
<h4>4. Le néo-malthusianisme contesté</h4>
<p>Les politiques de contrôle des naissances inspirées du malthusianisme ont parfois été coercitives, comme les stérilisations forcées en Inde dans les années 1970 ou la politique de l’enfant unique en Chine. Amartya <a href="#eco-sen">Sen</a> soutient que le développement, l’éducation des femmes et la démocratie réduisent la natalité plus efficacement et plus humainement que la contrainte.</p>`,
    ecoles: `
<p><b><a href="#eco-ricardo">Ricardo</a></b> intègre le principe de population à sa théorie des salaires et de la rente.</p>
<p><b>Charles Darwin</b> et <b>Alfred Russel Wallace</b> en tirent l’idée de la sélection naturelle.</p>
<p><b>Les néo-malthusiens</b> du XIXe siècle, comme Francis Place, défendent la contraception, que Malthus rejetait.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> le réhabilite comme précurseur de la demande effective.</p>
<p><b>Le Club de Rome</b> et Les Limites à la croissance (1972) prolongent ses inquiétudes sur les ressources.</p>
<p><b>Les historiens de la croissance</b>, comme Oded Galor et Gregory Clark, utilisent le « piège malthusien » pour expliquer l’économie préindustrielle.</p>`,
    source: {
      titre: "Thomas Malthus, Essai sur le principe de population, 1798, chapitre 1",
      texte: "La population, lorsqu’elle n’est pas freinée, s’accroît selon une progression géométrique. Les subsistances ne s’accroissent que selon une progression arithmétique.",
      notes: `
<p><b>Un raisonnement plus qu’une observation.</b> Malthus présente ces deux progressions comme évidentes pour quiconque connaît un peu les nombres. Mais si la première est appuyée sur l’exemple américain, la seconde est une hypothèse, que les faits n’ont pas confirmée.</p>
<p><b>La conclusion.</b> Malthus en tire que la puissance de la population est infiniment plus grande que celle de la terre, et que leurs effets ne peuvent être maintenus égaux que par des freins puissants et constants sur la population.</p>
<p><b>Une phrase devenue proverbiale.</b> Elle a résumé pendant deux siècles la crainte de la surpopulation, des débats sur la loi des pauvres jusqu’aux discussions sur le climat et les ressources.</p>`
    },
    quiz: [
      { q: "Contre quels penseurs Malthus écrit-il son Essai de 1798 ?",
        o: ["Smith et Hume", "Godwin et Condorcet, partisans d’une perfectibilité indéfinie", "Marx et Engels", "Ricardo et Say"], c: 1,
        e: "Il conteste leur optimisme sur la possibilité d’une société sans misère." },
      { q: "Selon Malthus, comment croissent la population et les subsistances ?",
        o: ["Toutes deux géométriquement", "La population géométriquement, les subsistances arithmétiquement", "La population arithmétiquement, les subsistances géométriquement", "Au même rythme"], c: 1,
        e: "D’où un écart croissant que les freins doivent combler." },
      { q: "Qu’est-ce que la « contrainte morale » ajoutée en 1803 ?",
        o: ["La contraception", "Le mariage tardif et la chasteté avant le mariage", "La guerre", "L’émigration"], c: 1,
        e: "C’est un frein préventif ; Malthus, pasteur, rejette la contraception." },
      { q: "Pourquoi Keynes admire-t-il Malthus ?",
        o: ["Pour sa théorie de la population", "Pour avoir défendu, contre Ricardo, la possibilité d’une insuffisance générale de la demande", "Pour sa défense des Corn Laws", "Pour ses statistiques"], c: 1,
        e: "Il y voit un précurseur de la demande effective." },
      { q: "Quel savant a trouvé chez Malthus l’intuition de la sélection naturelle ?",
        o: ["Newton", "Charles Darwin", "Lavoisier", "Pasteur"], c: 1,
        e: "Darwin lit l’Essai en septembre 1838." }
    ],
    ouverte: {
      q: "La fécondité en Suisse est d’environ 1,3 enfant par femme, bien en dessous du seuil de remplacement. Le problème de la Suisse est-il devenu l’inverse de celui que craignait Malthus ?",
      r: "Pour la natalité, oui : la Suisse, comme la plupart des pays riches, connaît une fécondité très inférieure aux 2,1 enfants par femme nécessaires au renouvellement des générations, ce qui entraîne un vieillissement de la population et pèse sur le financement des retraites, comme l’AVS. Ce n’est pas la surpopulation qui menace l’économie suisse, mais plutôt le manque de main-d’œuvre, compensé en partie par l’immigration. Mais une inquiétude d’inspiration malthusienne persiste sous une autre forme : celle des limites des ressources naturelles, du sol, du paysage et du climat, comme l’a montré l’initiative Ecopop. Le débat suisse oppose ainsi la crainte d’une croissance démographique trop rapide, alimentée par l’immigration, et celle d’un vieillissement qui exige de nouveaux travailleurs. Malthus aurait sans doute été surpris de voir une société riche limiter volontairement sa natalité sans contrainte morale, grâce à la contraception qu’il réprouvait."
    },
    lectures: [
      ["Accessible", "Robert Mayhew, Malthus: The Life and Legacies of an Untimely Prophet, 2014."],
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitre sur Malthus et Ricardo."],
      ["Intermédiaire", "Thomas Malthus, Essai sur le principe de population (1798), chapitres 1 à 7."],
      ["Intermédiaire", "Gregory Clark, A Farewell to Alms: A Brief Economic History of the World, 2007."],
      ["Recherche", "Thomas Malthus, Principes d’économie politique (1820), livre II ; J. M. Keynes, « Robert Malthus », dans Essais biographiques, 1933."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Le pasteur pessimiste</h3>
<p>Thomas Robert Malthus (1766-1834) est un pasteur anglais passionné de mathématiques. En 1798, il publie un livre qui fait scandale : Essai sur le principe de population. Contre ceux qui annoncent un avenir radieux pour l’humanité, il soutient que la pauvreté a une cause naturelle.</p>
${vieMalthus}
<h3>Trop de bouches à nourrir</h3>
<p>Selon Malthus, la population, si rien ne la freine, double tous les vingt-cinq ans, alors que la production de nourriture n’augmente que lentement. L’écart est comblé par la misère, les famines et les épidémies, à moins que les gens ne se marient plus tard et aient moins d’enfants. Il en conclut que l’aide aux pauvres ne fait qu’augmenter le nombre de pauvres.</p>
${progressions}
<h3>Démenti, mais pas oublié</h3>
<p>Malthus n’a pas prévu que l’agriculture deviendrait beaucoup plus productive, ni que les familles feraient volontairement moins d’enfants en s’enrichissant. Mais ses idées ont inspiré Darwin et les débats sur les ressources et l’environnement. Et l’économiste Keynes l’admirait pour avoir compris que la demande peut manquer.</p>
<h3>À retenir</h3>
<p>Malthus a posé la question des limites de la croissance face aux ressources. Le portrait complet présente sa vie, sa pensée et ses héritiers.</p>`,
      quiz: [1, 4]
    },
    resumes: {
      vie: "Du Surrey à Cambridge, à l’Église anglicane et au collège de la Compagnie des Indes.",
      epoque: "La Révolution française, la cherté du pain et les lois sur les pauvres.",
      pensee: "Sept étapes, des deux postulats à la transition démographique qu’il n’a pas vue.",
      livres: "Les éditions de l’Essai, la rente, les Principes et les Définitions.",
      cas: "Darwin, le piège malthusien, l’initiative Ecopop, la bombe P.",
      objections: "Le progrès technique, la transition démographique, Marx, les politiques coercitives.",
      ecoles: "Ricardo, Darwin et Wallace, les néo-malthusiens, Keynes, le Club de Rome, Galor et Clark.",
      source: "Essai de 1798 : les deux progressions.",
      quiz: "Cinq questions corrigées et une question sur la natalité suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     JEAN-BAPTISTE SAY
     ===================================================================== */
  const vieSay = lifeline(1767, 1832, [
    [1767, "naissance à Lyon", true], [1785, "séjour en Angleterre", false], [1794, "journaliste, La Décade", true], [1803, "Traité d’économie politique", false],
    [1804, "écarté par Napoléon", true], [1805, "filature dans le Pas-de-Calais", false], [1820, "Conservatoire des arts et métiers", true], [1831, "Collège de France", false]
  ], "Jean-Baptiste Say, 1767-1832", "Journaliste, homme politique, industriel du coton puis professeur, Say a connu l’économie de l’intérieur avant de l’enseigner. Il meurt à Paris en 1832, un an après avoir obtenu la première chaire d’économie politique du Collège de France.");

  const facteurs = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>L’entrepreneur au centre de la production selon Say (schéma)</text>`;
    const box = (x, y, w, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="54" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + 23}" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + 41}" text-anchor="middle" ${S}>${sub}</text>`;
    s += box(20, 50, 170, "Travailleurs", "louent leur industrie", "var(--note)") + box(235, 50, 170, "Capitalistes", "prêtent leurs capitaux", "var(--gold)") + box(450, 50, 170, "Propriétaires", "louent leurs terres", "var(--plum)");
    s += box(220, 150, 200, "L’entrepreneur", "combine et dirige", "var(--serial)");
    s += arrow(105, 106, 260, 148) + arrow(320, 106, 320, 148) + arrow(535, 106, 380, 148);
    s += box(220, 230, 200, "Le produit", "vendu aux consommateurs", "var(--ink-soft)");
    s += arrow(320, 206, 320, 228);
    s += `<text x="20" y="180" ${S}>salaires</text><text x="20" y="196" ${S}>intérêts</text><text x="20" y="212" ${S}>fermages</text>`;
    s += `<text x="470" y="180" ${S}>son propre revenu :</text><text x="470" y="196" ${S}>le profit d’entreprise,</text><text x="470" y="212" ${S}>prix de son talent et du risque</text>`;
    return s;
  })(), "Say est l’un des premiers à distinguer clairement l’entrepreneur du capitaliste. L’entrepreneur réunit les « services productifs » des trois facteurs, en supporte les risques et en tire un revenu propre. Cette figure annonce celle de Schumpeter, avec moins d’accent sur l’innovation.", "Schéma des trois facteurs combinés par l’entrepreneur");

  OEC.portraits["say"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Jean-Baptiste Say (1767-1832), économiste français, a diffusé et systématisé la pensée d’Adam Smith sur le continent. Son Traité d’économie politique (1803) a été le manuel de référence de l’économie libérale en Europe et en Amérique pendant un demi-siècle.",
      "Il est célèbre pour la loi des débouchés, selon laquelle la production crée les moyens d’acheter d’autres produits, si bien qu’une surproduction générale est impossible. Il a aussi mis en valeur le rôle de l’entrepreneur et fondé la valeur sur l’utilité.",
      "Industriel du coton avant d’être professeur, il défend la liberté d’entreprendre, la production et l’instruction industrielle. Keynes en fera sa cible en 1936, au prix d’une simplification que les historiens ont depuis corrigée."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Jean-Baptiste Say naît à Lyon le 5 janvier 1767, dans une famille de négociants protestants dont les ancêtres, originaires de Nîmes, s’étaient réfugiés à Genève après la révocation de l’édit de Nantes. Il étudie dans une pension près de Lyon, puis séjourne à partir de 1785 en Angleterre, à Croydon et à Londres, où il apprend l’anglais et observe une économie en pleine industrialisation. De retour à Paris, il entre dans une compagnie d’assurances dirigée par Étienne Clavière, futur ministre des Finances, qui lui fait lire la Richesse des nations d’Adam <a href="#eco-smith">Smith</a>. C’est une révélation.</p>
<p>Pendant la Révolution, il est journaliste, puis cofonde en 1794 et dirige La Décade philosophique, revue des « Idéologues » républicains. En 1799, Bonaparte le nomme au Tribunat, l’une des assemblées du Consulat. Il y publie en 1803 son Traité d’économie politique. Napoléon lui demande de réécrire certains chapitres pour soutenir sa politique de guerre et de protection ; Say refuse et est écarté du Tribunat en 1804.</p>
${vieSay}
<p>Il devient alors industriel : il apprend le métier de filateur et fonde une filature de coton à Auchy, dans le Pas-de-Calais, qui emploie plusieurs centaines d’ouvriers. Il la revend en 1813, quand le blocus continental et la conjoncture rendent l’affaire difficile. Après la chute de l’Empire, il publie une deuxième édition du Traité (1814), effectue une mission d’observation en Grande-Bretagne et rencontre <a href="#eco-ricardo">Ricardo</a>, <a href="#eco-malthus">Malthus</a> et Bentham. Il enseigne à partir de 1820 l’économie industrielle au Conservatoire national des arts et métiers, publie un Cours complet d’économie politique pratique (1828-1829), et obtient en 1831 la première chaire d’économie politique du Collège de France. Il meurt à Paris le 15 novembre 1832.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Say traverse la fin de l’Ancien Régime, la Révolution, le Consulat, l’Empire et la Restauration. La France sort d’un siècle de mercantilisme et de réglementations corporatives, que la Révolution a supprimées en 1791. Mais l’Empire impose le blocus continental contre l’Angleterre, des droits de douane élevés, et dirige l’économie au service de la guerre.</p>
<p>Say veut faire de l’économie politique une science utile aux citoyens et aux producteurs, et non un savoir réservé aux gouvernants. Il admire l’industrie anglaise, qu’il a vue de près, et pense que la prospérité de la France dépend de la liberté d’entreprendre, de l’instruction technique et de la paix.</p>
<p>Après 1815, l’Angleterre connaît des crises commerciales et des invendus. Beaucoup y voient une surproduction générale due aux machines. Say répond par sa loi des débouchés, qui suscite une controverse européenne avec Malthus et le Genevois Sismondi.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Une science d’observation</h4>
<p>Say veut une économie fondée sur l’observation des faits, à la manière des sciences physiques, mais il se méfie des mathématiques, qu’il juge mal adaptées à des phénomènes trop variables. Il organise la discipline en trois parties devenues classiques : la production, la répartition et la consommation des richesses.</p>
<h4>2. La valeur fondée sur l’utilité</h4>
<p>Contrairement à Smith et à Ricardo, qui fondent la valeur sur le travail, Say la fonde sur l’utilité : produire, c’est créer de l’utilité. Le prix reflète l’utilité que les acheteurs attribuent aux biens, compte tenu des frais de production. Cette approche annonce la tradition française et les marginalistes (<a href="#c-utilite-marginale">voir utilité marginale</a>).</p>
<h4>3. Les services sont productifs</h4>
<p>Smith jugeait improductif le travail des médecins, des avocats ou des artistes, qui ne laisse pas d’objet durable. Say le conteste : ces « produits immatériels » ont une utilité et une valeur, et sont donc productifs. L’économie moderne, où les services dominent, lui donne raison.</p>
<h4>4. L’entrepreneur</h4>
<p>Say distingue trois « services productifs » : l’industrie humaine, le capital et la terre, rémunérés par les salaires, les intérêts et les fermages. Il met au centre l’entrepreneur, qui les combine, dirige la production et en supporte les risques. Le profit de l’entrepreneur rémunère son talent, distinct de l’intérêt du capitaliste.</p>
${facteurs}
<h4>5. La loi des débouchés</h4>
<p>Pour Say, les produits s’échangent contre des produits : chaque production fournit les moyens d’acheter d’autres produits. Une surabondance de certains biens est possible, mais elle correspond à une insuffisance d’autres biens ; une surproduction générale est impossible. La prospérité d’un pays dépend donc de la production, et chaque pays a intérêt à la prospérité de ses voisins (<a href="#c-loi-debouches">voir loi des débouchés</a>).</p>
<h4>6. La liberté et l’instruction</h4>
<p>Say défend la liberté du travail, du commerce et de l’industrie, et critique les privilèges, les douanes et les dépenses de guerre. Mais il insiste aussi sur l’instruction : l’ingéniosité des entrepreneurs et l’habileté des ouvriers sont des sources essentielles de richesse, et il consacre la fin de sa vie à l’enseignement de l’économie industrielle.</p>
<h4>7. Les impôts et l’État</h4>
<p>Say se méfie des dépenses publiques, qu’il juge improductives quand elles ne créent pas d’utilité durable. Il formule un principe souvent cité : le meilleur de tous les plans de finances est de dépenser peu, et le meilleur de tous les impôts est le plus petit. Il reconnaît cependant l’utilité des dépenses pour l’instruction, les routes et la sécurité.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Traité d’économie politique (1803).</b> Son grand ouvrage, clair et ordonné, réédité et enrichi jusqu’à la cinquième édition (1826). Traduit en anglais, en allemand et dans de nombreuses langues, il est le manuel de référence en Europe et aux États-Unis, où Thomas Jefferson le recommande.</p>
<p><b>Catéchisme d’économie politique (1815).</b> Une présentation de l’économie sous forme de questions et réponses, destinée au grand public, et l’un des premiers ouvrages de vulgarisation économique.</p>
<p><b>De l’Angleterre et des Anglais (1815).</b> Le compte rendu de sa mission d’observation de l’industrie britannique.</p>
<p><b>Lettres à M. Malthus (1820).</b> Sa réponse aux objections de Malthus sur la loi des débouchés, où il précise et nuance sa position.</p>
<p><b>Cours complet d’économie politique pratique (1828-1829).</b> Ses leçons du Conservatoire, plus concrètes, consacrées à l’industrie, au commerce et aux institutions.</p>` }
    ],
    cas: [
      { titre: "Le refus de Napoléon", html: `
<p>Après la publication du Traité en 1803, Bonaparte, qui prépare la guerre et le blocus, reçoit Say et lui demande de modifier son livre pour justifier la politique de l’Empire, notamment le protectionnisme et le financement de la guerre. Say refuse. Il est écarté du Tribunat en 1804, et la deuxième édition de son Traité est interdite par la censure impériale. Il se tourne vers l’industrie. L’épisode a fait de lui une figure de l’indépendance intellectuelle face au pouvoir.</p>` },
      { titre: "La filature d’Auchy", html: `
<p>Entre 1804 et 1813, Say dirige une filature de coton qu’il a fondée à Auchy, dans le Pas-de-Calais, en installant des machines venues d’Angleterre dans une ancienne abbaye. Il y emploie plusieurs centaines d’ouvriers, organise le travail et fait face aux difficultés d’approvisionnement en coton dues au blocus. Cette expérience nourrit sa théorie de l’entrepreneur : il sait d’expérience ce que signifie combiner travail, capital et risques.</p>` },
      { titre: "La controverse avec Sismondi", html: `
<p>Le Genevois Jean Charles Léonard Simonde de Sismondi, d’abord disciple de Smith, publie en 1819 les Nouveaux Principes d’économie politique, où il conteste la loi des débouchés : les ouvriers, mal payés, ne peuvent racheter ce qu’ils produisent, et la concurrence pousse à produire au-delà de ce que le marché peut absorber. Il en tire la nécessité d’une intervention publique pour protéger les ouvriers. La polémique entre Say et Sismondi, puis Malthus, est l’un des premiers grands débats européens sur les crises et la demande.</p>` },
      { titre: "L’invention du mot « entrepreneur »", html: `
<p>Le mot existait avant Say, et l’économiste franco-irlandais Richard Cantillon avait dès les années 1730 décrit l’entrepreneur comme celui qui achète à prix certain pour vendre à prix incertain. Mais c’est Say qui en fait une figure centrale de l’économie, distincte du capitaliste et de l’ouvrier. Le mot passe en anglais tel quel, « entrepreneur », en grande partie grâce aux traductions de son Traité.</p>` }
    ],
    objections: `
<h4>1. Malthus, Sismondi et la surproduction</h4>
<p>Dès les années 1820, <a href="#eco-malthus">Malthus</a> et Sismondi contestent la loi des débouchés. <a href="#eco-marx">Marx</a> montre que la monnaie peut rompre la chaîne des échanges, et <a href="#eco-keynes">Keynes</a> fait en 1936 du rejet de la loi de Say le point de départ de sa Théorie générale.</p>
<h4>2. Une caricature ?</h4>
<p>Plusieurs historiens, comme Steven Kates ou Thomas Sowell, soutiennent que Keynes a caricaturé Say : celui-ci admettait des crises liées à la confiance et au crédit, et voulait surtout montrer que la prospérité dépend de la production.</p>
<h4>3. Un vulgarisateur plus qu’un théoricien</h4>
<p>Marx le traite de « vulgarisateur » sans profondeur, et les économistes anglais du XIXe siècle le jugent moins rigoureux que Ricardo. Ses défenseurs soulignent au contraire sa clarté, son sens des faits et ses intuitions sur l’utilité, les services et l’entrepreneur.</p>
<h4>4. La méfiance envers l’État</h4>
<p>Son libéralisme et sa méfiance envers les dépenses publiques sont critiqués par ceux qui voient dans l’État un acteur nécessaire de l’investissement et de la protection sociale. Ses défenseurs rappellent qu’il écrivait contre un État de guerre et de privilèges.</p>`,
    ecoles: `
<p><b><a href="#eco-smith">Smith</a></b> est son maître ; <b>Cantillon</b> et <b>Turgot</b> sont ses précurseurs français.</p>
<p><b>Frédéric Bastiat</b>, <b>Charles Dunoyer</b> et l’école libérale française prolongent son œuvre.</p>
<p><b><a href="#eco-walras">Walras</a></b> reprend, par son père, la tradition française de la valeur-utilité.</p>
<p><b><a href="#eco-schumpeter">Schumpeter</a></b> fait de l’entrepreneur le moteur du changement économique.</p>
<p><b>Les économistes de l’offre</b> des années 1970 et 1980 se réclament de la loi de Say.</p>
<p><b>Son fils Horace Say</b> et <b>son petit-fils Léon Say</b>, ministre des Finances, perpétuent la tradition familiale.</p>`,
    source: {
      titre: "Jean-Baptiste Say, Traité d’économie politique, 1803 (édition de 1814), livre I, chapitre « Des débouchés »",
      texte: "C’est la production qui ouvre des débouchés aux produits.",
      notes: `
<p><b>Le cœur de la loi.</b> Say explique que l’argent n’est qu’un intermédiaire : celui qui produit et vend obtient les moyens d’acheter. Plus un pays produit, plus il offre de débouchés aux autres producteurs.</p>
<p><b>Les conséquences pratiques.</b> Say en tire qu’il ne faut pas encourager la consommation pour elle-même, mais la production ; que chaque nation a intérêt à la prospérité des autres ; et que les mauvaises récoltes ou les guerres, en réduisant la production, réduisent aussi les débouchés.</p>
<p><b>Ce que Say admettait.</b> Dans les éditions ultérieures et les Lettres à Malthus, Say reconnaît des engorgements temporaires, liés à des erreurs de production, aux obstacles au commerce ou à la défiance. La formule est plus nuancée que le résumé qu’en donnera Keynes.</p>`
    },
    quiz: [
      { q: "Quel livre fait découvrir l’économie politique à Say ?",
        o: ["Le Tableau économique de Quesnay", "La Richesse des nations d’Adam Smith", "Les Principes de Ricardo", "L’Essai de Malthus"], c: 1,
        e: "Son employeur Étienne Clavière le lui fait lire." },
      { q: "Pourquoi Say est-il écarté du Tribunat en 1804 ?",
        o: ["Pour corruption", "Pour avoir refusé de modifier son Traité en faveur de la politique de Napoléon", "Pour royalisme", "Pour avoir fait faillite"], c: 1,
        e: "Il devient alors industriel du coton." },
      { q: "Sur quoi Say fonde-t-il la valeur ?",
        o: ["Sur le travail", "Sur l’utilité", "Sur l’or", "Sur la rente"], c: 1,
        e: "Produire, c’est créer de l’utilité." },
      { q: "Quel rôle Say donne-t-il à l’entrepreneur ?",
        o: ["Aucun", "Il combine les services productifs, dirige la production et en supporte les risques", "Il prête son capital", "Il fixe les impôts"], c: 1,
        e: "Il le distingue clairement du capitaliste." },
      { q: "Quel économiste genevois conteste la loi des débouchés en 1819 ?",
        o: ["Necker", "Sismondi", "Walras", "Rousseau"], c: 1,
        e: "Dans les Nouveaux Principes d’économie politique." }
    ],
    ouverte: {
      q: "Say fondait la prospérité sur l’entrepreneur et l’instruction industrielle. La Suisse, avec ses PME et sa formation professionnelle, est-elle un pays « sayien » ?",
      r: "À bien des égards, oui. Say insistait sur trois sources de prospérité : la liberté d’entreprendre, le talent des entrepreneurs et l’habileté des ouvriers, acquise par l’instruction technique. Le tissu de petites et moyennes entreprises suisses, souvent familiales et très spécialisées, et le système de formation professionnelle, qui transmet des savoir-faire en entreprise, correspondent bien à cette vision. Say aurait aussi apprécié la prudence budgétaire suisse, conforme à son principe selon lequel le meilleur impôt est le plus petit. Mais la Suisse ne suit pas Say sur tout : elle protège fortement son agriculture, et sa prospérité doit beaucoup à des facteurs qu’il considérait peu, comme la stabilité monétaire, la place financière et l’ouverture aux capitaux étrangers. Et la loi des débouchés n’a pas protégé la Suisse des crises de demande, comme dans les années 1930 ou 1990."
    },
    lectures: [
      ["Accessible", "Jean-Baptiste Say, Catéchisme d’économie politique, 1815, un petit livre accessible."],
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, passages sur Say et la loi des débouchés."],
      ["Intermédiaire", "Jean-Baptiste Say, Traité d’économie politique (1803), discours préliminaire et livre I, chapitres 1 et 15."],
      ["Intermédiaire", "Évelyn Forget, The Social Economics of Jean-Baptiste Say, 1999."],
      ["Recherche", "Thomas Sowell, Say’s Law: An Historical Analysis, 1972 ; Steven Kates (dir.), Two Hundred Years of Say’s Law, 2003."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Journaliste, industriel, professeur</h3>
<p>Jean-Baptiste Say (1767-1832), né à Lyon, découvre l’économie en lisant Adam <a href="#eco-smith">Smith</a>. Journaliste pendant la Révolution, il publie en 1803 un Traité d’économie politique. Napoléon lui demande de le réécrire pour soutenir sa politique ; il refuse et devient industriel du coton, avant de terminer sa vie professeur au Collège de France.</p>
${vieSay}
<h3>L’entrepreneur</h3>
<p>Say met au centre de l’économie l’entrepreneur, qui réunit travail, capital et terre pour produire, et qui prend des risques. Il pense aussi que la valeur des biens vient de leur utilité, et que les services, comme ceux des médecins, sont aussi productifs que les objets.</p>
${facteurs}
<h3>La loi des débouchés</h3>
<p>Son idée la plus célèbre : en produisant et en vendant, on gagne de quoi acheter autre chose. On peut produire trop de certains biens, mais pas trop de tout. Keynes contestera vivement cette idée en 1936, en montrant que la demande peut manquer quand on garde son argent.</p>
<h3>À retenir</h3>
<p>Say a fait connaître Smith en Europe et placé la production et l’entrepreneur au cœur de l’économie. Le portrait complet présente sa vie, ses idées et les débats qu’il a suscités.</p>`,
      quiz: [1, 3]
    },
    resumes: {
      vie: "De Lyon à l’Angleterre, au Tribunat, à la filature d’Auchy et au Collège de France.",
      epoque: "La Révolution, l’Empire, le blocus et les crises d’après 1815.",
      pensee: "Sept étapes, de la science d’observation à l’impôt le plus petit.",
      livres: "Du Traité au Catéchisme, aux Lettres à Malthus et au Cours complet.",
      cas: "Le refus de Napoléon, la filature d’Auchy, Sismondi, le mot « entrepreneur ».",
      objections: "La surproduction, la caricature de Keynes, le vulgarisateur, la méfiance envers l’État.",
      ecoles: "Smith, Cantillon et Turgot, Bastiat, Walras, Schumpeter, l’économie de l’offre, la famille Say.",
      source: "C’est la production qui ouvre des débouchés aux produits.",
      quiz: "Cinq questions corrigées et une question sur la Suisse et l’entrepreneur.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
