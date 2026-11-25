/* Œconomia — notices longues, lot 10 (e) : équilibre de Nash */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     ÉQUILIBRE DE NASH
     ===================================================================== */
  /* une matrice de gains 2 × 2 ; eq = liste des cases [ligne, colonne] qui sont des équilibres */
  const matrice = (titre, lignes, colonnes, gains, eq, note, label, caption) => fig(300, (() => {
    let s = `<text x="20" y="22" ${T}>${titre}</text>`;
    const x0 = 210, y0 = 80, w = 180, h = 74;
    s += `<text x="${x0 + w}" y="50" text-anchor="middle" style="fill:var(--plum); font:700 12px Manrope, sans-serif">${colonnes[2]}</text>`;
    s += `<text x="${x0 - 14}" y="${y0 - 10}" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">${lignes[2]}</text>`;
    [0, 1].forEach((j) => { s += `<text x="${x0 + w * j + w / 2}" y="${y0 - 10}" text-anchor="middle" ${S}>${colonnes[j]}</text>`; });
    [0, 1].forEach((i) => { s += `<text x="${x0 - 14}" y="${y0 + h * i + h / 2 + 4}" text-anchor="end" ${S}>${lignes[i]}</text>`; });
    [0, 1].forEach((i) => [0, 1].forEach((j) => {
      const x = x0 + w * j, y = y0 + h * i, on = eq.some((c) => c[0] === i && c[1] === j), g = gains[i][j];
      s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" style="fill:${on ? "var(--gold)" : "var(--card)"}; fill-opacity:${on ? 0.22 : 1}; stroke:${on ? "var(--gold)" : "var(--line)"}; stroke-width:${on ? 3 : 1.5}"/>`;
      s += `<text x="${x + w / 2 - 34}" y="${y + h / 2 + 5}" text-anchor="middle" style="fill:var(--note); font:700 14px Manrope, sans-serif">${g[0]}</text>`;
      s += `<text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" ${S}>|</text>`;
      s += `<text x="${x + w / 2 + 34}" y="${y + h / 2 + 5}" text-anchor="middle" style="fill:var(--plum); font:700 14px Manrope, sans-serif">${g[1]}</text>`;
    }));
    s += `<text x="320" y="270" text-anchor="middle" ${S}>${note}</text>`;
    return s;
  })(), caption, label);

  const dilemme = matrice("Deux stations-service voisines choisissent leur prix",
    ["Prix élevé", "Prix bas", "Station A"], ["Prix élevé", "Prix bas", "Station B"],
    [[[900, 900], [300, 1200]], [[1200, 300], [500, 500]]], [[1, 1]],
    "Bénéfice par jour en francs : A à gauche, B à droite. La case encadrée est l’équilibre de Nash.",
    "Matrice de gains d’un dilemme du prisonnier entre deux stations-service",
    "Schéma (chiffres fictifs). Quoi que fasse l’autre, chaque station gagne plus en baissant son prix : 1200 au lieu de 900, ou 500 au lieu de 300. Les deux baissent donc leur prix et gagnent 500 chacune, alors qu’elles auraient gagné 900 en restant chères. C’est la structure du dilemme du prisonnier.");

  const coordination = matrice("Rouler à gauche ou à droite ?",
    ["À gauche", "À droite", "Conducteur A"], ["À gauche", "À droite", "Conducteur B"],
    [[[1, 1], ["−10", "−10"]], [["−10", "−10"], [1, 1]]], [[0, 0], [1, 1]],
    "Deux équilibres encadrés : tous à gauche ou tous à droite. Seule la convention permet de choisir.",
    "Matrice d’un jeu de coordination à deux équilibres",
    "Schéma. Dans un jeu de coordination, il existe plusieurs équilibres de Nash : rouler à gauche est aussi stable que rouler à droite, pourvu que tout le monde fasse de même. La théorie ne dit pas lequel s’impose ; c’est l’histoire, la loi ou une convention qui tranche. La Suède est passée de la gauche à la droite en une nuit, le 3 septembre 1967.");

  OEC.notices["equilibre-nash"] = {
    essentiel: [
      "Un équilibre de Nash est une situation où aucun des acteurs ne peut améliorer son sort en changeant seul de stratégie, compte tenu de ce que font les autres. Chacun joue la meilleure réponse aux choix des autres.",
      "Cet équilibre n’est pas forcément le meilleur pour tous. Dans le dilemme du prisonnier, chacun a intérêt à trahir, et tous finissent moins bien lotis que s’ils avaient coopéré. Cette tension entre intérêt individuel et intérêt collectif éclaire les cartels, la course aux armements ou la lutte contre le changement climatique.",
      "John Nash démontre en 1950 qu’un tel équilibre existe dans tous les jeux comportant un nombre fini de joueurs et de stratégies. La théorie des jeux est devenue un outil central de l’économie, de la science politique et de la biologie."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : que faire quand le résultat dépend aussi des autres ?", html: `
<p>Dans un marché parfaitement concurrentiel, chaque entreprise est trop petite pour influencer les autres : elle prend le prix du marché comme une donnée. Mais une station-service qui fait face à une seule concurrente, deux pays qui négocient un accord commercial ou deux joueurs d’échecs ne peuvent pas décider sans se demander ce que l’autre va faire. Leur résultat dépend de leur choix et de celui de l’autre.</p>
<p>Antoine Augustin Cournot étudie dès 1838 un marché à deux producteurs. En 1944, le mathématicien John von Neumann et l’économiste Oskar Morgenstern publient Théorie des jeux et comportement économique. Mais c’est un étudiant de 21 ans à Princeton, John Nash, qui propose en 1950 la notion d’équilibre qui porte son nom. Il reçoit le prix Nobel d’économie en 1994, avec John Harsanyi et Reinhard Selten. Sa vie inspire le film Un homme d’exception (2001).</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Joueurs, stratégies, gains</h4>
<p>Un jeu, au sens des économistes, se décrit par trois éléments : les joueurs, les stratégies dont chacun dispose, et les gains que chacun obtient pour chaque combinaison de choix. On les présente souvent dans un tableau, appelé matrice des gains.</p>
<h4>2. La meilleure réponse</h4>
<p>Pour chaque choix possible de l’autre, un joueur cherche la stratégie qui lui rapporte le plus : c’est sa meilleure réponse. Si l’autre station garde un prix élevé, ai-je intérêt à faire de même ou à baisser mon prix ? Et si elle le baisse ?</p>
<h4>3. L’équilibre</h4>
<p>Un équilibre de Nash est une combinaison de stratégies où chacun joue sa meilleure réponse à ce que font les autres. Personne n’a de raison de changer seul de stratégie : la situation est stable. Cela ne veut pas dire que chacun est satisfait, seulement que personne ne peut faire mieux en changeant seul.</p>
${dilemme}
<h4>4. Le dilemme du prisonnier</h4>
<p>Le jeu ci-dessus a la structure la plus célèbre de la théorie des jeux, étudiée en 1950 par Merrill Flood et Melvin Dresher et baptisée par Albert Tucker. Deux suspects interrogés séparément ont chacun intérêt à dénoncer l’autre, quoi que l’autre fasse ; ensemble, ils écopent d’une peine plus lourde que s’ils s’étaient tus. L’équilibre de Nash est inefficace : il existe une issue meilleure pour les deux, mais elle n’est pas stable (<a href="#c-optimum-pareto">voir optimum de Pareto</a>).</p>
<h4>5. Plusieurs équilibres</h4>
<p>Certains jeux ont plusieurs équilibres. Dans un jeu de coordination, chacun veut simplement faire comme les autres. Thomas Schelling montre que les gens s’accordent alors souvent sur un « point focal », une solution qui paraît évidente à tous, comme se retrouver à midi sous l’horloge de la gare.</p>
${coordination}
<h4>6. Les stratégies mixtes</h4>
<p>Dans certains jeux, la meilleure stratégie est d’être imprévisible. Un tireur de penalty qui viserait toujours le même côté serait vite repéré par le gardien. Nash montre qu’en autorisant ce type de stratégie, qui consiste à choisir au hasard selon certaines probabilités, tout jeu fini possède au moins un équilibre.</p>
<h4>7. Le jeu répété</h4>
<p>Quand le même jeu se répète indéfiniment, la coopération peut devenir stable : celui qui trahit aujourd’hui sait qu’il sera puni demain. Deux stations-service voisines depuis des années peuvent ainsi maintenir des prix élevés sans jamais se parler. C’est pourquoi les autorités de la concurrence surveillent de près les marchés où quelques entreprises se font face longtemps (<a href="#c-concurrence-imparfaite">voir monopole et oligopole</a>).</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le tournoi d’Axelrod</h4>
<p>Vers 1980, le politologue Robert Axelrod invite des chercheurs à proposer des programmes informatiques pour jouer au dilemme du prisonnier répété. La stratégie gagnante est l’une des plus simples, « donnant-donnant » : coopérer au premier tour, puis imiter le dernier coup de l’adversaire. Elle est bienveillante, punit la trahison, mais pardonne vite.</p>
<h4>Les tirs au but</h4>
<p>En 2003, l’économiste Ignacio Palacios-Huerta analyse plus de mille penalties tirés dans des championnats européens. Tireurs et gardiens choisissent leur côté de manière très proche de ce que prédit l’équilibre en stratégies mixtes : leurs chances de réussite sont à peu près les mêmes quel que soit le côté choisi, et leurs choix successifs semblent bien imprévisibles.</p>
<h4>Les expériences en laboratoire</h4>
<p>Quand on fait jouer des volontaires au dilemme du prisonnier une seule fois, une part importante d’entre eux coopère, contrairement à la prédiction. Dans le jeu de l’ultimatum, où un joueur propose de partager une somme et l’autre peut refuser, ce qui ne laisse rien à personne, beaucoup refusent des offres jugées injustes, même s’ils y perdent. L’équité et la réciprocité comptent, à côté de l’intérêt personnel.</p>
<h4>Les enchères de fréquences</h4>
<p>À partir des années 1990, les États vendent des fréquences de téléphonie mobile aux enchères, selon des règles conçues par des spécialistes de la théorie des jeux. Au Royaume-Uni, la vente des licences de troisième génération rapporte environ 22 milliards de livres en 2000, bien plus que prévu.</p>` }
    ],
    cas: [
      { titre: "Le programme de clémence contre les cartels", html: `
<p>Les membres d’un cartel ont intérêt à s’entendre sur les prix, mais chacun a aussi intérêt à tricher. Depuis la révision de la loi sur les cartels entrée en vigueur en 2004, la Suisse, comme l’Union européenne et les États-Unis, applique un programme de clémence : la première entreprise qui dénonce le cartel auquel elle participe peut échapper à l’amende. Le cartel devient un dilemme du prisonnier : chacun craint d’être dénoncé par l’autre et a intérêt à parler le premier. En 2018, la Commission de la concurrence sanctionne ainsi des entreprises de construction de Basse-Engadine qui s’étaient entendues pendant des années sur les marchés publics.</p>` },
      { titre: "L’OPEP et les quotas", html: `
<p>Les pays de l’Organisation des pays exportateurs de pétrole fixent des quotas de production pour soutenir les prix. Mais chaque pays a intérêt à produire un peu plus que son quota pour profiter des prix élevés. Quand trop de membres trichent, les prix chutent, comme au milieu des années 1980. La difficulté de l’OPEP à faire respecter ses quotas illustre la fragilité des cartels.</p>` },
      { titre: "Le climat, un dilemme mondial", html: `
<p>Chaque pays profite de la réduction des émissions des autres, mais supporte seul le coût de ses propres efforts. Chacun a donc intérêt à en faire moins, même si tous gagneraient à agir ensemble (<a href="#c-externalite">voir externalité</a>). L’accord de Paris de 2015 cherche à contourner ce dilemme par des engagements nationaux révisés régulièrement et rendus publics. L’économiste William Nordhaus propose plutôt des « clubs climatiques », dont les membres taxeraient les importations venues des pays qui n’agissent pas.</p>` }
    ],
    objections: `
<h4>1. Des joueurs vraiment rationnels ?</h4>
<p>L’équilibre de Nash suppose que chacun calcule parfaitement et sait que les autres en font autant. Les expériences montrent que les gens raisonnent souvent moins loin, se trompent ou tiennent compte de l’équité. L’économie comportementale de Daniel <a href="#eco-kahneman">Kahneman</a> et de ses successeurs propose des modèles plus réalistes (<a href="#c-aversion-pertes">voir aversion aux pertes</a>).</p>
<h4>2. Que prédire quand il y a plusieurs équilibres ?</h4>
<p>Beaucoup de jeux ont plusieurs équilibres, parfois une infinité dans les jeux répétés. La théorie dit alors ce qui est stable, mais pas ce qui va se produire. Les économistes ont proposé de nombreux « raffinements » pour trancher, sans solution universelle.</p>
<h4>3. Les dilemmes ne sont pas une fatalité</h4>
<p>Elinor <a href="#eco-ostrom">Ostrom</a> montre que des communautés de pêcheurs, de paysans ou d’éleveurs parviennent à gérer durablement des ressources communes, grâce à des règles qu’elles se donnent, à la surveillance mutuelle et à des sanctions graduées. Là où la théorie prédit la défection, la confiance et les institutions locales rendent la coopération possible (<a href="#c-biens-communs">voir biens communs</a>).</p>`,
    ecoles: `
<p><b>Antoine Augustin Cournot</b> décrit en 1838 l’équilibre d’un duopole, qu’on reconnaîtra plus tard comme un équilibre de Nash.</p>
<p><b>John von Neumann</b> et <b>Oskar Morgenstern</b> fondent la théorie des jeux en 1944.</p>
<p><b>John Nash</b> définit en 1950 l’équilibre qui porte son nom et démontre son existence.</p>
<p><b>Thomas Schelling</b> applique la théorie aux conflits et à la dissuasion nucléaire ; il reçoit le prix Nobel en 2005 avec Robert Aumann.</p>
<p><b>Jean Tirole</b> en fait l’outil central de l’analyse des marchés concentrés ; prix Nobel 2014.</p>
<p><b>Elinor <a href="#eco-ostrom">Ostrom</a></b> et <b>Daniel <a href="#eco-kahneman">Kahneman</a></b> en montrent les limites, par l’étude des institutions et des comportements réels.</p>`,
    source: {
      titre: "John Nash, « Equilibrium Points in n-Person Games », Proceedings of the National Academy of Sciences, 1950",
      texte: "Un point d’équilibre est un ensemble de stratégies tel que la stratégie de chaque joueur maximise son gain lorsque les stratégies des autres sont tenues pour fixes.",
      notes: `
<p><b>Un article d’une page.</b> Nash publie son résultat en une seule page, avant de le développer dans sa thèse l’année suivante. C’est l’un des textes les plus courts et les plus cités de l’histoire de l’économie.</p>
<p><b>Ce qu’il change.</b> Von Neumann et Morgenstern avaient surtout étudié les jeux où ce que l’un gagne, l’autre le perd. Nash traite tous les jeux, y compris ceux où les joueurs peuvent tous gagner ou tous perdre, ce qui correspond à la plupart des situations économiques.</p>
<p><b>Ce qu’il ne dit pas.</b> La définition décrit une situation stable, pas la façon d’y arriver. Comment les joueurs trouvent l’équilibre, et lequel quand il y en a plusieurs, reste un champ de recherche.</p>`
    },
    quiz: [
      { q: "Qu’est-ce qu’un équilibre de Nash ?",
        o: ["La situation qui maximise le gain total", "Une situation où personne ne peut améliorer son sort en changeant seul de stratégie", "Un accord signé entre les joueurs", "La stratégie qui garantit au joueur le gain le plus élevé possible"], c: 1,
        e: "Chacun joue la meilleure réponse aux choix des autres." },
      { q: "Pourquoi le dilemme du prisonnier est-il un dilemme ?",
        o: ["Parce qu’il n’a pas d’équilibre", "Parce que l’équilibre est moins bon pour tous qu’une autre issue possible", "Parce que les joueurs coopèrent toujours", "Parce que chacun a intérêt à coopérer, quoi que fasse l’autre"], c: 1,
        e: "Chacun a intérêt à trahir, et tous y perdent." },
      { q: "Pourquoi la coopération peut-elle devenir stable dans un jeu répété ?",
        o: ["Parce que les joueurs oublient le passé", "Parce que celui qui trahit aujourd’hui peut être puni demain", "Parce que les gains de la trahison diminuent à chaque tour", "Parce que les gains augmentent toujours"], c: 1,
        e: "La perspective de l’avenir discipline les comportements, comme dans la stratégie donnant-donnant." },
      { q: "Qu’est-ce qu’un jeu de coordination, comme le choix de rouler à gauche ou à droite ?",
        o: ["Un jeu sans équilibre", "Un jeu à plusieurs équilibres, où chacun veut faire comme les autres", "Un jeu où l’un gagne ce que l’autre perd", "Un jeu où chaque joueur a une stratégie dominante"], c: 1,
        e: "Une convention ou une loi désigne l’équilibre retenu." },
      { q: "Comment un programme de clémence fragilise-t-il les cartels ?",
        o: ["En augmentant les amendes de tous", "En offrant l’immunité au premier qui dénonce, ce qui pousse chacun à parler avant les autres", "En autorisant les cartels déclarés", "En interdisant aux entreprises de répondre aux appels d’offres"], c: 1,
        e: "Le cartel devient un dilemme du prisonnier." }
    ],
    transfert: { q: "Deux pays voisins pêchent dans le même lac. Chacun gagne à pêcher davantage, mais si les deux le font, le stock de poissons s’effondre. De quel type de situation s’agit-il ?",
      o: ["Un dilemme du prisonnier : l’intérêt de chacun conduit à une issue mauvaise pour les deux", "Un jeu de coordination à plusieurs équilibres", "Un monopole", "Une situation sans interaction entre les deux pays"], c: 0,
      e: "Chacun a intérêt à pêcher plus quoi que fasse l’autre, et tous deux y perdent : seul un accord surveillé peut l’éviter." },
    ouverte: {
      q: "Un petit pays qui émet une part infime des gaz à effet de serre mondiaux a-t-il intérêt à réduire ses émissions si les grands pays ne le font pas ?",
      r: "La théorie des jeux éclaire le dilemme. Si chaque pays raisonne seul, il a intérêt à laisser les autres faire l’effort : la réduction d’un petit pays ne change presque rien au climat, et lui coûte. Si tous raisonnent ainsi, personne n’agit et tous en souffrent. Plusieurs arguments plaident pourtant pour l’action. Les engagements internationaux reposent sur la réciprocité : un pays qui n’agit pas affaiblit la confiance et la pression sur les autres. Beaucoup de petits pays sont très exposés au réchauffement, des îles du Pacifique aux pays de montagne, et leur empreinte réelle est souvent plus élevée si l’on compte les émissions liées aux biens importés. Agir tôt peut aussi développer des technologies et des savoir-faire exportables, comme l’éolien au Danemark. D’autres soulignent le coût pour l’économie et les ménages, le risque de déplacer la production polluante à l’étranger, et l’intérêt d’agir là où chaque euro réduit le plus d’émissions. La réponse dépend de la confiance accordée à la coopération internationale et de la responsabilité qu’on attribue aux pays riches."
    },
    lectures: [
      ["Accessible", "Robert Axelrod, Comment réussir dans un monde d’égoïstes, Odile Jacob, 1992."],
      ["Accessible", "Avinash Dixit et Barry Nalebuff, The Art of Strategy, Norton, 2008."],
      ["Intermédiaire", "Thomas Schelling, La Stratégie du conflit, PUF, 1986."],
      ["Intermédiaire", "Gaël Giraud, La Théorie des jeux, Flammarion, coll. Champs, 2000."],
      ["Recherche", "John Nash, « Equilibrium Points in n-Person Games », Proceedings of the National Academy of Sciences, 1950."],
      ["Recherche", "John von Neumann et Oskar Morgenstern, Theory of Games and Economic Behavior, Princeton University Press, 1944."]
    ],
    decouvrir: {
      questions: [
        { q: "Deux stations-service gagneraient toutes deux à garder des prix élevés. Pourquoi finissent-elles par les baisser ?",
          o: ["Parce que chacune peut attirer tous les clients en baissant seule, et craint que l’autre le fasse", "Parce que la loi les y oblige", "Parce que leurs coûts ont baissé", "Parce que les clients exigent un prix unique"], c: 0,
          e: "C’est la logique du dilemme du prisonnier : l’intérêt de chacun mène à une issue moins bonne pour les deux." },
        { q: "Qu’est-ce qui permet parfois de sortir d’un dilemme du prisonnier ?",
          o: ["La répétition du jeu, la confiance et des règles communes", "Le hasard seulement", "Le fait de ne jouer qu’une seule fois", "Des prix imposés par les clients"], c: 0,
          e: "Quand on se retrouve souvent, la trahison d’aujourd’hui peut être punie demain." }
      ],
      duree: 5,
      html: `
<h3>Quand votre choix dépend de celui des autres</h3>
<p>Deux stations-service se font face au même carrefour. Si les deux gardent des prix élevés, elles gagnent bien leur vie. Mais si l’une baisse son prix, elle attire tous les clients. Chacune a donc intérêt à baisser, et les deux finissent par gagner moins. C’est le dilemme du prisonnier, le jeu le plus célèbre de la théorie des jeux.</p>
${dilemme}
<h3>L’équilibre de Nash</h3>
<p>En 1950, le mathématicien John Nash définit une situation stable : chacun fait de son mieux compte tenu de ce que font les autres, et personne n’a intérêt à changer seul. Cet équilibre n’est pas toujours le meilleur pour tous, ce qui explique pourquoi il est si difficile de coopérer pour le climat ou de faire tenir un cartel.</p>
<h3>À retenir</h3>
<p>Quand le résultat dépend des choix de chacun, l’intérêt individuel peut conduire à une issue mauvaise pour tous. La répétition, la confiance et les règles permettent parfois d’en sortir. La notice complète présente le raisonnement, les expériences et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Que faire quand le résultat dépend aussi des autres ? De Cournot à Nash.",
      raisonnement: "Sept étapes, de la meilleure réponse au jeu répété.",
      preuves: "Le tournoi d’Axelrod, les tirs au but, les expériences, les enchères de fréquences.",
      cas: "Le programme de clémence, l’OPEP, le climat.",
      objections: "Des joueurs moins rationnels, plusieurs équilibres, les communs d’Ostrom.",
      ecoles: "Cournot, von Neumann et Morgenstern, Nash, Schelling, Tirole, Ostrom et Kahneman.",
      source: "La définition de Nash, en une page.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Six lectures classées par niveau."
    }
  };
})();
