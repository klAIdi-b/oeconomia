/* Œconomia — portraits longs, lot 4 (a) : Aristote, Ibn Khaldoun */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const card = (x, y, w, h, t, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">${t}</text>`;
  const cards = (items, w, h, y0) => items.map(([n, d, c], i) => {
    const x = 20 + i * (w + 10);
    let s = `<rect x="${x}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y0 + 28}" text-anchor="middle" style="fill:${c}; font:700 13px Manrope, sans-serif">${n}</text>`;
    const words = d.split(" "); let line = "", ly = y0 + 56; const max = Math.floor(w / 6.6);
    words.forEach((wd) => { if ((line + wd).length > max) { s += `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
    return s + `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
  }).join("");

  /* =====================================================================
     ARISTOTE
     ===================================================================== */
  const vieAristote = lifeline(-384, -322, [
    [-384, "naissance à Stagire", true], [-367, "entre à l’Académie de Platon", false], [-347, "Assos et Lesbos", true], [-343, "précepteur d’Alexandre", false],
    [-335, "fonde le Lycée", true], [-323, "quitte Athènes", false], [-322, "mort à Chalcis", true]
  ], "Aristote, 384-322 avant notre ère", "Aristote passe vingt ans à l’Académie de Platon, enseigne au jeune Alexandre de Macédoine, puis fonde à Athènes sa propre école, le Lycée. Il écrit sur presque tous les savoirs de son temps, de la biologie à la politique.", (t) => `${-t} av.`);

  const deuxArts = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Deux manières d’acquérir selon Aristote (Politique, livre I)</text>`;
    s += `<text x="165" y="58" text-anchor="middle" style="fill:var(--note); font:700 13px Manrope, sans-serif">L’économie (oikonomia)</text>`;
    s += card(20, 76, 80, 44, "Bien", "var(--note)") + card(125, 76, 80, 44, "Monnaie", "var(--gold)") + card(230, 76, 80, 44, "Bien", "var(--note)");
    s += arrow(102, 98, 123, 98) + arrow(207, 98, 228, 98);
    s += `<text x="165" y="146" text-anchor="middle" ${S}>Gérer la maisonnée : acquérir ce dont</text><text x="165" y="162" text-anchor="middle" ${S}>on a besoin pour bien vivre. Limitée.</text>`;
    s += `<text x="480" y="58" text-anchor="middle" style="fill:var(--serial); font:700 13px Manrope, sans-serif">La chrématistique</text>`;
    s += card(335, 76, 80, 44, "Monnaie", "var(--gold)") + card(440, 76, 80, 44, "Bien", "var(--note)") + card(545, 76, 80, 44, "Plus", "var(--serial)");
    s += arrow(417, 98, 438, 98) + arrow(522, 98, 543, 98);
    s += `<text x="480" y="146" text-anchor="middle" ${S}>Accumuler la monnaie pour elle-même :</text><text x="480" y="162" text-anchor="middle" ${S}>un désir sans limite, jugé contre nature.</text>`;
    s += `<rect x="20" y="192" width="600" height="72" rx="8" style="fill:var(--paper-2); stroke:var(--line)"/>`;
    s += `<text x="320" y="218" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">Le cas extrême : le prêt à intérêt</text>`;
    s += `<text x="320" y="238" text-anchor="middle" ${S}>La monnaie y « engendre » de la monnaie, alors qu’elle n’a été inventée que pour l’échange.</text>`;
    s += `<text x="320" y="254" text-anchor="middle" ${S}>Le mot grec tokos désigne à la fois l’intérêt et la progéniture.</text>`;
    return s;
  })(), "Aristote distingue l’art d’acquérir naturel, qui sert la vie de la maisonnée et de la cité et connaît une limite, et la chrématistique, qui vise l’accumulation illimitée. Marx reprendra presque littéralement cette distinction, avec ses circuits marchandise-argent-marchandise et argent-marchandise-argent.", "Deux circuits comparés et la question de l’usure");

  const justices = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Les formes de la justice dans l’Éthique à Nicomaque (livre V)</text>`;
    s += cards([["Distributive", "Répartir les honneurs et les biens communs selon le mérite de chacun : une égalité proportionnelle.", "var(--plum)"], ["Corrective", "Réparer un tort dans les transactions : rétablir l’égalité arithmétique entre les parties.", "var(--note)"], ["Réciproque", "Dans l’échange, chacun reçoit l’équivalent de ce qu’il donne ; la monnaie sert de commune mesure.", "var(--gold)"]], 190, 190, 44);
    return s;
  })(), "La réflexion d’Aristote sur l’échange s’inscrit dans une théorie de la justice. Le problème est de rendre commensurables des choses très différentes, comme des chaussures et une maison : c’est le besoin qui les rend comparables, et la monnaie qui le mesure.", "Trois cartes décrivant trois formes de justice");

  OEC.portraits["aristote"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Aristote (384-322 avant notre ère), philosophe grec, élève de Platon et précepteur d’Alexandre le Grand, n’a pas écrit de traité d’économie. Mais ses réflexions sur la maisonnée, l’échange, la monnaie et la justice ont fondé la pensée économique occidentale pendant près de deux mille ans.",
      "Il distingue l’économie, art de gérer la maisonnée pour bien vivre, et la chrématistique, recherche illimitée de l’argent, qu’il juge contre nature. Il condamne le prêt à intérêt et pose la question de la commune mesure des biens échangés.",
      "Repris par les théologiens médiévaux, de Thomas d’Aquin aux scolastiques, son héritage nourrit la doctrine du juste prix et l’interdiction de l’usure. Marx le saluera comme le premier à avoir analysé la forme de la valeur."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Aristote naît en 384 avant notre ère à Stagire, petite cité grecque de Chalcidique, au nord de la mer Égée. Son père, Nicomaque, est médecin du roi de Macédoine Amyntas III, le grand-père d’Alexandre. Orphelin jeune, il part à dix-sept ans pour Athènes, où il entre à l’Académie de Platon. Il y reste vingt ans, comme élève puis comme enseignant, jusqu’à la mort de son maître en 347.</p>
<p>Il séjourne ensuite à Assos, en Asie Mineure, puis sur l’île de Lesbos, où il mène avec Théophraste des observations sur les animaux marins qui fondent la biologie. Vers 343, le roi Philippe II de Macédoine l’appelle pour être le précepteur de son fils, le futur Alexandre le Grand, alors âgé de treize ans.</p>
${vieAristote}
<p>En 335, il revient à Athènes et fonde sa propre école, le Lycée, où il enseigne en marchant sous les portiques, d’où le nom de « péripatéticiens » donné à ses disciples. Il y constitue une bibliothèque et fait rassembler les constitutions de 158 cités grecques. À la mort d’Alexandre, en 323, le sentiment antimacédonien se déchaîne à Athènes ; accusé d’impiété, Aristote quitte la ville, selon la tradition « pour ne pas laisser les Athéniens pécher une seconde fois contre la philosophie », allusion à la condamnation de Socrate. Il meurt l’année suivante à Chalcis, sur l’île d’Eubée.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Aristote vit à la fin de l’âge classique grec, dans un monde de cités indépendantes, bientôt dominées par la Macédoine. L’économie athénienne repose sur l’agriculture, l’artisanat, un commerce maritime actif et le travail d’un grand nombre d’esclaves. La monnaie d’argent, frappée depuis deux siècles, s’est généralisée, et des banquiers, souvent des métèques ou d’anciens esclaves, prêtent à intérêt.</p>
<p>Le mot « économie » vient du grec oikonomia, de oikos, la maison, et nomos, la règle : c’est l’art de bien gérer une maisonnée, avec sa famille, ses esclaves, ses terres et ses biens. Xénophon avait déjà écrit un Économique sur ce sujet. La question centrale n’est pas la croissance de la richesse, mais la bonne vie, individuelle et collective, dans la cité.</p>
<p>Aristote observe avec méfiance le développement du commerce et de la finance, qui permet à certains de s’enrichir sans limite. Il se demande quelle place donner à l’acquisition de richesses dans une vie bonne, et comment l’échange peut être juste entre des personnes et des choses très différentes.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La cité et la maisonnée</h4>
<p>Pour Aristote, l’homme est un « animal politique » : il ne peut réaliser sa nature que dans la cité. La maisonnée, l’oikos, est la cellule de base, qui pourvoit aux besoins de la vie. L’économie est l’art de gérer la maisonnée en vue de bien vivre, non de s’enrichir indéfiniment.</p>
<h4>2. Valeur d’usage et valeur d’échange</h4>
<p>Aristote remarque qu’une chaussure peut servir à être portée ou à être échangée. Les deux usages sont légitimes, mais le premier est propre à l’objet, le second non. C’est la première formulation de la distinction entre valeur d’usage et valeur d’échange (<a href="#c-valeur-usage">voir valeur d’usage</a>).</p>
<h4>3. Les deux arts d’acquérir</h4>
<p>Il existe un art d’acquérir naturel, qui procure les biens nécessaires à la maisonnée et à la cité, et qui a une limite : on n’a pas besoin d’une quantité infinie de biens pour bien vivre. Mais il existe aussi un art d’acquérir qui vise l’argent pour lui-même, la chrématistique, et qui n’a pas de limite. Aristote le juge contre nature, car il confond le moyen, l’argent, avec la fin, la vie bonne.</p>
${deuxArts}
<h4>4. La monnaie, convention et mesure</h4>
<p>La monnaie a été inventée pour faciliter les échanges entre cités éloignées. Elle sert de commune mesure : elle permet de comparer des choses très différentes, grâce au besoin qu’en ont les hommes. Son nom, nomisma, vient de nomos, la loi : elle existe par convention, non par nature, et la cité pourrait la changer (<a href="#c-fonctions-monnaie">voir fonctions de la monnaie</a>).</p>
<h4>5. La justice dans l’échange</h4>
<p>Dans le livre V de l’Éthique à Nicomaque, Aristote distingue la justice distributive, qui répartit les biens communs selon le mérite, et la justice corrective, qui répare les torts dans les transactions. Dans l’échange, la justice exige une réciprocité proportionnelle : le cordonnier et le bâtisseur doivent échanger selon le rapport de leurs travaux et des besoins.</p>
${justices}
<h4>6. La condamnation de l’usure</h4>
<p>Le prêt à intérêt est la forme la plus contre nature de la chrématistique : la monnaie, stérile par nature, y engendre de la monnaie. Le mot grec tokos désigne à la fois l’intérêt et le petit d’un animal. Cette condamnation traversera le Moyen Âge chrétien et islamique.</p>
<h4>7. La propriété et l’esclavage</h4>
<p>Contre Platon, qui imaginait pour ses gardiens une communauté des biens, Aristote défend la propriété privée : on prend mieux soin de ce qui nous appartient, et elle permet la générosité. Mais il justifie aussi l’esclavage, qu’il juge naturel pour certains hommes, une position qui pèse lourdement sur sa réputation morale.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Éthique à Nicomaque.</b> Un traité de morale consacré au bonheur et aux vertus. Le livre V, sur la justice, contient l’analyse de l’échange et de la monnaie qui a fondé la réflexion économique médiévale.</p>
<p><b>Politique.</b> Un traité sur la cité, ses formes de gouvernement et ses institutions. Le livre I traite de la maisonnée, de l’esclavage, de l’économie et de la chrématistique ; le livre II critique la communauté des biens de Platon.</p>
<p><b>Les Économiques.</b> Un petit ouvrage attribué à Aristote mais probablement écrit par ses disciples, consacré à la gestion de la maisonnée et aux finances publiques des cités et des royaumes.</p>
<p><b>Rhétorique.</b> On y trouve des réflexions sur ce qui fait la valeur des biens, la rareté et l’utilité, qui ont influencé les théories ultérieures de la valeur.</p>` }
    ],
    cas: [
      { titre: "Thalès et les pressoirs à olives", html: `
<p>Dans la Politique, Aristote raconte une anecdote sur le philosophe Thalès de Milet, à qui l’on reprochait sa pauvreté comme preuve de l’inutilité de la philosophie. Prévoyant grâce à l’astronomie une récolte d’olives abondante, Thalès loue pendant l’hiver, à bas prix, tous les pressoirs de Milet et de Chios. Quand la récolte arrive, il les sous-loue au prix qu’il veut et fait fortune. Il montre ainsi que les philosophes pourraient s’enrichir s’ils le voulaient, mais que ce n’est pas leur but. Aristote y voit la première description d’un monopole, et note que certaines cités en usent aussi pour remplir leur trésor.</p>` },
      { titre: "Thomas d’Aquin et le juste prix", html: `
<p>Au XIIIe siècle, les traductions latines d’Aristote bouleversent les universités européennes. Thomas d’Aquin intègre sa pensée à la théologie chrétienne et en tire une doctrine du « juste prix » et de la condamnation de l’usure. Les scolastiques, notamment l’école de Salamanque au XVIe siècle, affineront ces idées et reconnaîtront le rôle de la rareté et de l’estimation commune dans la formation des prix. Joseph Schumpeter les considérait comme de véritables précurseurs de l’économie moderne.</p>` },
      { titre: "La finance islamique", html: `
<p>L’interdiction de l’intérêt, la riba, est un principe central de la finance islamique, fondé sur le Coran. Elle rejoint par certains aspects la condamnation aristotélicienne de l’usure, transmise aussi par les philosophes arabes comme Averroès. La finance islamique contemporaine, qui représente des milliers de milliards de dollars, a développé des contrats de partage des profits et des pertes ou de vente à paiement différé pour respecter ce principe.</p>` },
      { titre: "Marx lecteur d’Aristote", html: `
<p>Dans le premier chapitre du Capital, <a href="#eco-marx">Marx</a> rend un hommage appuyé à Aristote, qu’il appelle « le grand penseur qui a analysé le premier la forme de la valeur ». Il explique que si Aristote n’a pas pu découvrir que le travail était la substance commune des marchandises, c’est parce que la société grecque reposait sur l’esclavage, et donc sur l’inégalité des travailleurs. La distinction aristotélicienne entre économie et chrématistique annonce directement celle de Marx entre circulation simple et circulation du capital.</p>` }
    ],
    objections: `
<h4>1. Une économie sans croissance</h4>
<p>Aristote pense dans un monde où la richesse totale progresse peu et où l’enrichissement des uns se fait souvent au détriment des autres. Il ne conçoit pas que le commerce et le crédit puissent accroître la production et le bien-être de tous, comme le montreront <a href="#eco-smith">Smith</a> et ses successeurs.</p>
<h4>2. Le prêt à intérêt n’est pas stérile</h4>
<p>Les économistes modernes rejettent l’idée que la monnaie soit stérile : prêter permet de financer des investissements productifs, et l’intérêt rémunère le renoncement à la liquidité, le risque et le temps (<a href="#c-preference-liquidite">voir préférence pour la liquidité</a>). La condamnation de l’usure a longtemps freiné le développement du crédit en Europe.</p>
<h4>3. L’esclavage naturel</h4>
<p>La justification de l’esclavage par Aristote est inacceptable pour la pensée moderne. Elle a été invoquée au XVIe siècle par Juan Ginés de Sepúlveda pour justifier la domination des Indiens d’Amérique, contre Bartolomé de las Casas.</p>
<h4>4. Une pensée toujours actuelle ?</h4>
<p>À l’inverse, des penseurs comme Karl Polanyi, Amartya <a href="#eco-sen">Sen</a> ou les économistes de la décroissance voient dans sa distinction entre économie et chrématistique une critique toujours pertinente d’une économie qui confond la richesse et la vie bonne.</p>`,
    ecoles: `
<p><b>Thomas d’Aquin</b> et les <b>scolastiques</b> en tirent la doctrine du juste prix et de l’usure.</p>
<p><b>L’école de Salamanque</b> prolonge ces analyses au XVIe siècle.</p>
<p><b><a href="#eco-marx">Marx</a></b> reprend la distinction entre valeur d’usage et valeur d’échange, et entre les deux circulations.</p>
<p><b>Karl Polanyi</b> s’appuie sur Aristote pour penser l’« encastrement » de l’économie dans la société.</p>
<p><b><a href="#eco-sen">Amartya Sen</a></b> et Martha Nussbaum fondent sur lui l’approche par les <a href="#c-capabilites">capabilités</a>.</p>
<p><b>Les économistes de la décroissance</b> redécouvrent l’idée d’une limite naturelle aux besoins.</p>`,
    source: {
      titre: "Aristote, Politique, livre I, chapitre 10",
      texte: "On a parfaitement raison de détester l’usure, parce qu’elle tire son profit de la monnaie elle-même, et non de ce pour quoi on l’a inventée. Car la monnaie a été faite pour l’échange, et l’intérêt la fait se multiplier elle-même.",
      notes: `
<p><b>La fin du livre I.</b> Ce passage conclut la réflexion d’Aristote sur l’art d’acquérir. L’usure est la forme la plus contraire à la nature de la chrématistique, parce qu’elle détourne la monnaie de sa fonction.</p>
<p><b>Le jeu de mots.</b> Aristote ajoute que l’intérêt s’appelle tokos, « progéniture », parce que les petits ressemblent à leurs parents : l’intérêt est de la monnaie née de la monnaie. C’est pourquoi ce mode d’acquisition est « le plus contraire à la nature ».</p>
<p><b>Une influence de deux millénaires.</b> Ce passage, repris par les Pères de l’Église et les scolastiques, fonde l’interdiction de l’usure dans le droit canonique, qui ne s’assouplira qu’à partir du XVIe siècle.</p>`
    },
    quiz: [
      { q: "D’où vient le mot « économie » ?",
        o: ["Du latin pecunia, l’argent", "Du grec oikos, la maison, et nomos, la règle", "Du grec chrema, la richesse", "Du latin oeconomia, la richesse publique"], c: 1,
        e: "C’est l’art de bien gérer la maisonnée." },
      { q: "Qu’est-ce que la chrématistique selon Aristote ?",
        o: ["La gestion de la maisonnée", "La recherche illimitée de l’argent pour lui-même", "La science des prix", "L’art de fixer le juste prix"], c: 1,
        e: "Aristote la juge contre nature, car elle n’a pas de limite." },
      { q: "Pourquoi Aristote condamne-t-il le prêt à intérêt ?",
        o: ["Parce qu’il est risqué", "Parce que la monnaie, faite pour l’échange, y engendre de la monnaie", "Parce que l’emprunteur est toujours pauvre", "Parce qu’il crée de l’inflation"], c: 1,
        e: "Le mot tokos désigne à la fois l’intérêt et la progéniture." },
      { q: "Que fait Thalès de Milet selon l’anecdote racontée par Aristote ?",
        o: ["Il invente la monnaie", "Il loue tous les pressoirs à olives avant une bonne récolte et s’enrichit", "Il fonde une banque", "Il prête de l’argent aux paysans avant la récolte"], c: 1,
        e: "Aristote y voit la première description d’un monopole." },
      { q: "Quel économiste salue Aristote comme le premier à avoir analysé la forme de la valeur ?",
        o: ["Smith", "Marx", "Keynes", "Walras"], c: 1,
        e: "Dans le premier chapitre du Capital." }
    ],
    ouverte: {
      q: "En Suisse, le taux d’intérêt des crédits à la consommation est plafonné par le Conseil fédéral, actuellement autour de 10 % pour les crédits au comptant. Aristote approuverait-il ce plafond ?",
      r: "Aristote condamnait tout prêt à intérêt, et un plafond, qui autorise l’intérêt tout en le limitant, lui paraîtrait sans doute insuffisant. Mais la logique du plafond rejoint en partie la sienne : il s’agit de protéger les emprunteurs, souvent dans une situation de besoin, contre une exploitation qui transformerait le prêt en source d’enrichissement sans limite pour le prêteur. Les économistes modernes, qui ne partagent pas la condamnation de principe d’Aristote, discutent l’efficacité de ces plafonds : trop bas, ils peuvent exclure du crédit légal les emprunteurs les plus risqués et les pousser vers des prêteurs illégaux ; adaptés, ils limitent le surendettement. La Suisse a abaissé ce plafond en 2016, en invoquant la baisse générale des taux, ce qui montre que la question n’est plus celle de la légitimité de l’intérêt, mais de son niveau acceptable."
    },
    lectures: [
      ["Accessible", "Pierre Pellegrin, Le Vocabulaire d’Aristote, Ellipses, entrées « économie » et « chrématistique »."],
      ["Accessible", "Karl Polanyi, « Aristote découvre l’économie », dans Les Systèmes économiques dans l’histoire et dans la théorie, 1957."],
      ["Intermédiaire", "Aristote, Politique, livre I, et Éthique à Nicomaque, livre V, chapitre 5."],
      ["Intermédiaire", "Scott Meikle, Aristotle’s Economic Thought, 1995."],
      ["Recherche", "Moses Finley, « Aristotle and Economic Analysis », Past & Present, 1970 ; Joseph Schumpeter, Histoire de l’analyse économique, 1954, partie II, chapitre 1."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Le philosophe qui a inventé le mot « économie »</h3>
<p>Aristote (384-322 avant notre ère), élève de Platon et précepteur d’Alexandre le Grand, a écrit sur presque tout : la logique, la biologie, la morale, la politique. Il n’a pas écrit de livre d’économie, mais ses idées sur l’échange et la monnaie ont guidé la pensée européenne pendant deux mille ans.</p>
${vieAristote}
<h3>Bien vivre ou s’enrichir ?</h3>
<p>Pour Aristote, l’économie est l’art de gérer sa maison pour bien vivre. Elle a une limite : on n’a pas besoin d’une quantité infinie de choses. Mais certains cherchent l’argent pour lui-même, sans limite : c’est la chrématistique, qu’il juge contre nature. Le pire est le prêt à intérêt, où l’argent « fait des petits ».</p>
${deuxArts}
<h3>Un héritage durable</h3>
<p>Ses idées ont inspiré l’interdiction de l’usure au Moyen Âge et la notion de juste prix. Il a aussi distingué la valeur d’usage d’un objet de sa valeur d’échange, une idée reprise par Smith et Marx. Mais il justifiait aussi l’esclavage, ce qui est inacceptable aujourd’hui.</p>
<h3>À retenir</h3>
<p>Aristote a posé la question de la place de l’argent dans une vie bonne. Le portrait complet présente sa vie, ses idées et leur postérité.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De Stagire à l’Académie, à la cour de Macédoine et au Lycée.",
      epoque: "Athènes, la maisonnée, la monnaie et les banquiers.",
      pensee: "Sept étapes, de la cité à la propriété et à l’esclavage.",
      livres: "L’Éthique à Nicomaque, la Politique, les Économiques, la Rhétorique.",
      cas: "Thalès et les pressoirs, Thomas d’Aquin, la finance islamique, Marx.",
      objections: "Une économie sans croissance, l’intérêt productif, l’esclavage, une pensée actuelle.",
      ecoles: "Les scolastiques, Salamanque, Marx, Polanyi, Sen et Nussbaum, la décroissance.",
      source: "Politique : on a raison de détester l’usure.",
      quiz: "Cinq questions corrigées et une question sur le plafond des taux en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     IBN KHALDOUN
     ===================================================================== */
  const vieKhaldoun = lifeline(1332, 1406, [
    [1332, "naissance à Tunis", true], [1349, "la peste emporte ses parents", false], [1364, "ambassadeur à Séville", true], [1375, "retraite à Qal’at Ibn Salama", false],
    [1377, "achève la Muqaddima", true], [1382, "s’installe au Caire", false], [1401, "rencontre Tamerlan", true], [1406, "mort au Caire", false]
  ], "Ibn Khaldoun, 1332-1406", "Homme de cour et de pouvoir autant que savant, Ibn Khaldoun sert les dynasties d’Afrique du Nord et d’Andalousie, connaît la prison, l’exil et le naufrage de sa famille, avant de finir sa vie comme grand juge au Caire.");

  const cycle = fig(300, (() => {
    const L = 70, R = 600, B = 230, X = (t) => L + t * (R - L) / 10, Y = (v) => B - v * 16;
    let s = `<text x="20" y="24" ${T}>Le cycle d’une dynastie selon la Muqaddima (schéma)</text>`;
    const f = (t) => t < 3 ? 2 + t * 3 : t < 5 ? 11 - (t - 3) * 0.3 : Math.max(1, 10.4 - (t - 5) * 1.9);
    let d = ""; for (let t = 0; t <= 10.001; t += 0.1) d += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(f(t))} `;
    s += `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="50" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L + 6}" y="58" ${M}>puissance et cohésion</text>`;
    s += `<path d="${d}" style="fill:none; stroke:var(--plum); stroke-width:2.8"/>`;
    [[1.2, "conquête", "‘asabiyya forte"], [4, "apogée", "luxe et villes"], [8, "déclin", "impôts, mercenaires"]].forEach(([t, a, b]) => (s += `<text x="${X(t)}" y="${B + 20}" text-anchor="middle" style="fill:var(--ink); font:700 11.5px Manrope, sans-serif">${a}</text><text x="${X(t)}" y="${B + 36}" text-anchor="middle" ${S}>${b}</text>`));
    s += `<text x="${X(9.9)}" y="${Y(2) - 14}" text-anchor="end" ${S}>un nouveau groupe soudé</text><text x="${X(9.9)}" y="${Y(2) + 2}" text-anchor="end" ${S}>prend le pouvoir</text>`;
    s += `<text x="20" y="290" ${S}>Trois ou quatre générations, environ cent vingt ans, de la conquête à l’effondrement.</text>`;
    return s;
  })(), "Un groupe venu du désert ou des montagnes, soudé par une forte solidarité, la ‘asabiyya, conquiert le pouvoir. Ses descendants s’installent en ville, s’habituent au luxe, perdent leur cohésion et recourent à des mercenaires et à des impôts croissants. Un nouveau groupe soudé les remplace.", "Courbe de montée, apogée et déclin d’une dynastie");

  const impot = fig(290, (() => {
    const L = 90, R = 560, Top = 50, B = 240, X = (t) => L + t * (R - L) / 100, Y = (v) => B - v * 1.6;
    let s = `<text x="20" y="24" ${T}>Taux d’imposition et recettes : l’intuition d’Ibn Khaldoun (schéma)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>recettes</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>taux d’imposition</text>`;
    let d = ""; for (let t = 0; t <= 100.001; t += 1) d += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(4 * t * (100 - t) / 100)} `;
    s += `<path d="${d}" style="fill:none; stroke:var(--gold); stroke-width:2.8"/>`;
    s += `<circle cx="${X(25)}" cy="${Y(75)}" r="6" style="fill:var(--note)"/><text x="${X(25) - 10}" y="${Y(75) - 12}" text-anchor="end" style="fill:var(--note); font:700 11.5px Manrope, sans-serif">début de dynastie</text>`;
    s += `<circle cx="${X(85)}" cy="${Y(51)}" r="6" style="fill:var(--serial)"/><text x="${X(85) + 10}" y="${Y(51) - 12}" style="fill:var(--serial); font:700 11.5px Manrope, sans-serif">fin de dynastie</text>`;
    s += `<text x="${X(25)}" y="${B + 36}" text-anchor="middle" ${S}>taux faibles, activité forte</text><text x="${X(85)}" y="${B + 36}" text-anchor="middle" ${S}>taux élevés, activité découragée</text>`;
    return s;
  })(), "Ibn Khaldoun observe qu’au début d’une dynastie, des impôts légers rapportent beaucoup parce que l’activité prospère, et qu’à la fin, des impôts lourds rapportent peu parce qu’ils découragent l’effort. Arthur Laffer et Ronald Reagan l’ont cité dans les années 1980. La forme exacte de la courbe reste très discutée.", "Courbe en cloche des recettes fiscales selon le taux");

  OEC.portraits["khaldoun"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Ibn Khaldoun (1332-1406), historien, juriste et homme d’État du Maghreb, est l’auteur de la Muqaddima (1377), l’introduction à une histoire universelle, souvent considérée comme une œuvre fondatrice de la sociologie, de l’histoire économique et de la philosophie de l’histoire.",
      "Il explique la montée et le déclin des dynasties par la ‘asabiyya, la solidarité de groupe, et analyse avec une étonnante modernité la division du travail, le rôle du travail dans la création de valeur, la croissance des villes et les effets des impôts sur l’activité.",
      "Longtemps peu connu en Europe, il est redécouvert au XIXe siècle et admiré au XXe par des historiens comme Arnold Toynbee et des économistes de tous bords, qui voient en lui un précurseur de Smith, de Marx ou de la courbe de Laffer."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Abd al-Rahman ibn Khaldoun naît à Tunis le 27 mai 1332, dans une famille de lettrés et de hauts fonctionnaires d’origine arabe, installée en Andalousie, à Séville, pendant des siècles, avant de fuir la Reconquista chrétienne pour l’Afrique du Nord. Il reçoit une éducation complète : Coran, droit, théologie, logique, philosophie. En 1348-1349, la peste noire tue ses parents et nombre de ses maîtres, une catastrophe qui marquera sa vision des sociétés.</p>
<p>Dès vingt ans, il entre au service des souverains du Maghreb. Sa carrière politique, brillante et tourmentée, le conduit à Fès, où il est un temps emprisonné pour intrigue, à Grenade, d’où il est envoyé en ambassade auprès du roi Pierre le Cruel de Castille à Séville en 1364, puis à Béjaïa, où il devient chambellan, et à Biskra, où il négocie avec les tribus. Il connaît les victoires, les disgrâces et les changements d’alliance qui rythment la vie politique de l’époque.</p>
${vieKhaldoun}
<p>Lassé de la politique, il se retire en 1375 avec sa famille dans la forteresse de Qal’at Ibn Salama, dans l’actuelle Algérie, sous la protection d’une tribu. En quelques mois, il y rédige la Muqaddima, achevée en 1377. En 1382, il s’installe au Caire, où il enseigne et devient à plusieurs reprises grand juge malékite. En 1384, sa femme et ses filles, qui venaient le rejoindre, périssent dans un naufrage. En 1401, lors du siège de Damas, il rencontre le conquérant Tamerlan, avec qui il s’entretient plusieurs semaines, et en laisse un récit. Il meurt au Caire le 17 mars 1406.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Ibn Khaldoun vit dans un Maghreb fragmenté entre plusieurs dynasties rivales, les Mérinides à Fès, les Hafsides à Tunis, les Abdalwadides à Tlemcen, qui se font la guerre, s’allient avec les tribus nomades et se succèdent rapidement. L’Andalousie musulmane recule devant les royaumes chrétiens. L’Égypte des Mamelouks, où il finit sa vie, est la grande puissance du monde arabe.</p>
<p>La peste noire du milieu du XIVe siècle a dévasté les villes, réduit la population et désorganisé l’économie. Ibn Khaldoun a le sentiment de vivre une époque de déclin, comme si le monde entier changeait. Il veut comprendre les lois qui gouvernent l’essor et la chute des sociétés et des États.</p>
<p>Il reproche aux historiens de son temps de compiler des récits sans les critiquer, en acceptant des chiffres invraisemblables. Il propose une « science de la civilisation », ilm al-‘umran, qui étudierait les faits sociaux selon leurs causes, pour distinguer le vrai du faux dans les récits historiques.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Une science nouvelle</h4>
<p>La Muqaddima commence par une critique de la méthode historique. Pour juger un récit, il faut connaître la nature des sociétés : leurs besoins, leur économie, leurs institutions. Ibn Khaldoun fonde ainsi une science sociale, qu’il juge sans précédent, et qui doit précéder l’écriture de l’histoire.</p>
<h4>2. La ‘asabiyya</h4>
<p>La force qui fonde les États est la ‘asabiyya, l’esprit de corps, la solidarité qui unit un groupe, née des liens du sang et de la vie commune, et renforcée par la religion. Elle est la plus forte chez les nomades et les montagnards, que la rudesse de la vie rend solidaires et courageux.</p>
<h4>3. Le cycle des dynasties</h4>
<p>Un groupe doté d’une forte ‘asabiyya conquiert le pouvoir et fonde une dynastie. Mais ses descendants, installés en ville, s’habituent au luxe et perdent leur solidarité ; le souverain s’entoure de clients et de mercenaires, et augmente les impôts. Au bout de trois ou quatre générations, environ cent vingt ans, la dynastie s’effondre et un nouveau groupe la remplace.</p>
${cycle}
<h4>4. Le travail, source de la richesse</h4>
<p>Ibn Khaldoun affirme que les gains et les richesses sont la valeur réalisée du travail humain. Même dans les biens qui semblent venir de la nature, comme les produits agricoles, le travail est la source principale de la valeur. On a vu dans ces passages une anticipation de la théorie de la valeur-travail de <a href="#eco-smith">Smith</a> et de <a href="#eco-ricardo">Ricardo</a> (<a href="#c-valeur-travail">voir valeur-travail</a>).</p>
<h4>5. La division du travail et les villes</h4>
<p>Un homme seul ne peut produire tout ce dont il a besoin : la coopération et la division du travail permettent de produire bien plus que le nécessaire. Les grandes villes, où le travail est plus divisé et la population plus dense, sont plus riches, les salaires y sont plus élevés et les métiers plus raffinés (<a href="#c-division-travail">voir division du travail</a>).</p>
<h4>6. L’offre, la demande et les prix</h4>
<p>Ibn Khaldoun explique que les prix des biens de luxe sont élevés dans les grandes villes parce que la demande y est forte, et que les prix alimentaires dépendent de l’abondance des récoltes et des stocks. Il observe que les prix trop bas ruinent les producteurs, et que les prix trop élevés nuisent aux acheteurs.</p>
<h4>7. L’impôt et l’État</h4>
<p>Au début d’une dynastie, les impôts sont légers et rapportent beaucoup, car l’activité prospère. À la fin, le luxe de la cour exige des impôts toujours plus lourds, qui découragent l’effort et réduisent les recettes. Pire, quand l’État se fait lui-même commerçant ou s’empare des biens des sujets, il ruine l’initiative. « L’injustice ruine la civilisation », écrit-il.</p>
${impot}` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>La Muqaddima (1377).</b> L’introduction et le premier livre de son histoire universelle, en six parties : la civilisation en général, la vie nomade, les dynasties et le pouvoir, la vie urbaine, l’économie et les métiers, les sciences. C’est elle qui fait sa célébrité.</p>
<p><b>Kitab al-‘Ibar, le Livre des exemples.</b> Son histoire universelle, centrée sur les Arabes, les Berbères et les peuples voisins, dont la Muqaddima est l’introduction. Les parties consacrées aux Berbères sont une source historique majeure.</p>
<p><b>Ta‘rif, son autobiographie.</b> L’un des rares récits autobiographiques détaillés de la littérature arabe médiévale, qui raconte sa carrière et sa rencontre avec Tamerlan.</p>` }
    ],
    cas: [
      { titre: "La rencontre avec Tamerlan", html: `
<p>En 1401, Ibn Khaldoun accompagne le sultan mamelouk en Syrie pour défendre Damas contre le conquérant turco-mongol Tamerlan. Le sultan repart au Caire ; les notables de la ville, assiégée, négocient. Ibn Khaldoun, alors âgé de soixante-neuf ans, se fait descendre par une corde le long des remparts pour rencontrer Tamerlan. Il passe plusieurs semaines dans son camp, discute avec lui d’histoire et de géographie, et rédige à sa demande une description du Maghreb. Damas est ensuite pillée. L’épisode montre le savant au contact direct de la puissance qu’il avait théorisée.</p>` },
      { titre: "Reagan cite Ibn Khaldoun", html: `
<p>En 1981, au cours d’une conférence de presse, le président Ronald Reagan cite Ibn Khaldoun pour justifier ses baisses d’impôts : au début d’une dynastie, des taux faibles produisent des recettes importantes ; à la fin, des taux élevés en produisent peu. L’économiste Arthur Laffer, inspirateur de la politique fiscale de Reagan, avait lui-même fait référence au penseur maghrébin. Les économistes rappellent que l’existence d’un taux au-delà duquel les recettes diminuent est admise, mais que les États-Unis de 1981 étaient probablement en dessous de ce seuil pour la plupart des contribuables.</p>` },
      { titre: "La redécouverte européenne", html: `
<p>Ibn Khaldoun est peu lu dans le monde arabe pendant plusieurs siècles, mais étudié par des historiens ottomans au XVIIe siècle. Les orientalistes européens le découvrent au début du XIXe siècle ; le baron de Slane publie une traduction française de la Muqaddima entre 1862 et 1868. Au XXe siècle, l’historien britannique Arnold Toynbee la qualifie de « sans doute la plus grande œuvre de ce genre jamais créée par un esprit, en aucun temps ni en aucun lieu ». Elle est aujourd’hui considérée comme un classique universel.</p>` },
      { titre: "Une famille engloutie", html: `
<p>En 1384, peu après sa nomination comme grand juge au Caire, Ibn Khaldoun fait venir de Tunis sa femme et ses enfants. Le navire qui les transporte fait naufrage au large d’Alexandrie, et toute sa famille périt. Il évoque ce drame en quelques lignes dans son autobiographie. La mort de ses parents par la peste, puis celle de sa famille, ont pu nourrir sa vision d’un monde où les fortunes et les États se défont aussi vite qu’ils se font.</p>` }
    ],
    objections: `
<h4>1. Un anachronisme fréquent</h4>
<p>Les historiens mettent en garde contre la tentation de faire d’Ibn Khaldoun un « premier économiste » ou un « premier sociologue » moderne. Sa pensée s’inscrit dans la tradition philosophique et juridique islamique, et ses concepts n’ont pas exactement le sens que leur donnent les théories modernes.</p>
<h4>2. Une théorie des cycles trop générale</h4>
<p>Le cycle des dynasties décrit bien l’histoire du Maghreb médiéval, marquée par l’opposition entre nomades et citadins. Il s’applique beaucoup moins bien à d’autres sociétés, comme les États européens modernes, dont la durée et les institutions sont différentes.</p>
<h4>3. Le recours abusif à la courbe de Laffer</h4>
<p>Les économistes critiquent l’usage d’Ibn Khaldoun pour justifier des baisses d’impôts quel que soit le niveau des taux. Ses observations portent sur des États prélevant des tributs sur des économies agraires, et ne disent rien du taux à partir duquel les recettes baissent dans une économie moderne.</p>
<h4>4. Le déterminisme</h4>
<p>Certains critiques lui reprochent une vision déterministe, où le climat, le mode de vie et les cycles naturels fixeraient le destin des peuples. Ses défenseurs soulignent au contraire l’importance qu’il accorde aux institutions, à la justice et aux choix politiques.</p>`,
    ecoles: `
<p><b>Les philosophes arabes</b>, comme Averroès, et la tradition juridique malékite forment son arrière-plan intellectuel.</p>
<p><b>Les historiens ottomans</b> du XVIIe siècle, comme Kâtip Çelebi, appliquent ses cycles à l’Empire ottoman.</p>
<p><b>Les orientalistes</b> du XIXe siècle, de Silvestre de Sacy au baron de Slane, le font connaître en Europe.</p>
<p><b>Arnold Toynbee</b> et les historiens des civilisations s’inspirent de sa vision cyclique.</p>
<p><b>Ernest Gellner</b> reprend sa théorie de la ‘asabiyya pour analyser les sociétés musulmanes.</p>
<p><b>Les économistes du développement</b> et des institutions, comme <a href="#eco-acemoglu">Acemoglu</a>, retrouvent chez lui le rôle de la justice et de la sécurité de la propriété.</p>`,
    source: {
      titre: "Ibn Khaldoun, Muqaddima, 1377, partie III",
      texte: "Il faut savoir qu’au début d’une dynastie, l’impôt rapporte beaucoup avec des taux faibles. À la fin de la dynastie, l’impôt rapporte peu avec des taux élevés.",
      notes: `
<p><b>Le raisonnement.</b> Ibn Khaldoun explique qu’au début, la dynastie suit les règles religieuses, qui limitent les impôts. Les sujets, peu taxés, travaillent avec ardeur, l’activité se développe et les recettes augmentent. Puis le luxe pousse le souverain à multiplier les taxes ; les gens se découragent, l’activité diminue, et les recettes baissent.</p>
<p><b>Le cercle vicieux.</b> Pour compenser la baisse des recettes, le souverain augmente encore les impôts, ou se fait lui-même commerçant, ce qui ruine les marchands. La dynastie s’affaiblit et finit par disparaître.</p>
<p><b>Une observation, non une loi universelle.</b> Le passage décrit la dynamique d’États prélevant des tributs sur des économies agraires. Les économistes modernes y voient une intuition remarquable, plutôt qu’une démonstration applicable telle quelle aux fiscalités contemporaines.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que la ‘asabiyya chez Ibn Khaldoun ?",
        o: ["Le pouvoir absolu du souverain", "La solidarité de groupe, l’esprit de corps", "La loi religieuse qui encadre le commerce", "Une école de droit"], c: 1,
        e: "C’est la force qui permet à un groupe de conquérir et de fonder un État." },
      { q: "Combien de temps dure environ une dynastie selon Ibn Khaldoun ?",
        o: ["Une génération", "Trois ou quatre générations, environ cent vingt ans", "Environ trois siècles", "Dix ans"], c: 1,
        e: "Le luxe et la perte de cohésion conduisent au déclin." },
      { q: "Quelle est pour Ibn Khaldoun la source principale des richesses ?",
        o: ["L’or", "Le travail humain", "La terre seule", "Le commerce lointain"], c: 1,
        e: "Une anticipation souvent relevée de la valeur-travail." },
      { q: "Que dit Ibn Khaldoun des impôts à la fin d’une dynastie ?",
        o: ["Ils sont faibles et rapportent beaucoup", "Ils sont élevés et rapportent peu", "Ils sont faibles et rapportent peu", "Ils sont payés en nature"], c: 1,
        e: "Des taux trop élevés découragent l’activité." },
      { q: "Quel président américain cite Ibn Khaldoun en 1981 ?",
        o: ["Jimmy Carter", "Ronald Reagan", "Bill Clinton", "Richard Nixon"], c: 1,
        e: "Pour justifier ses baisses d’impôts." }
    ],
    ouverte: {
      q: "En 2006, le canton d’Obwald a introduit des taux d’imposition dégressifs pour les très hauts revenus afin d’attirer des contribuables ; le Tribunal fédéral les a jugés contraires à la Constitution en 2007. Ibn Khaldoun aurait-il soutenu cette politique ?",
      r: "Ibn Khaldoun aurait reconnu l’intuition de départ : des impôts légers peuvent stimuler l’activité et, en attirant de nouveaux contribuables, augmenter les recettes. Obwald a d’ailleurs vu ses recettes fiscales progresser après ses baisses d’impôts, avant d’adopter un impôt à taux unique en 2008. Mais Ibn Khaldoun insistait aussi sur la justice : pour lui, « l’injustice ruine la civilisation », et un impôt qui favorise les plus riches au détriment de l’égalité devant la loi aurait pu lui paraître dangereux pour la cohésion sociale, sa ‘asabiyya. Le Tribunal fédéral a précisément jugé que des taux dégressifs violaient le principe constitutionnel de l’imposition selon la capacité économique. Enfin, la logique d’Ibn Khaldoun concernait un État qui écrase ses sujets ; dans le cas d’Obwald, il s’agit plutôt de concurrence fiscale entre cantons, où les gains de l’un peuvent être les pertes des autres."
    },
    lectures: [
      ["Accessible", "Robert Irwin, Ibn Khaldun: An Intellectual Biography, 2018."],
      ["Accessible", "Abdesselam Cheddadi, Ibn Khaldûn, l’homme et le théoricien de la civilisation, Gallimard, 2006."],
      ["Intermédiaire", "Ibn Khaldoun, Le Livre des exemples, tome I : Autobiographie, Muqaddima, Bibliothèque de la Pléiade, 2002."],
      ["Intermédiaire", "Yves Lacoste, Ibn Khaldoun : naissance de l’histoire, passé du tiers-monde, 1966."],
      ["Recherche", "Ibn Khaldoun, Muqaddima, parties III et V ; Jean David Boulakia, « Ibn Khaldun: A Fourteenth-Century Economist », Journal of Political Economy, 1971."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Un savant au cœur du pouvoir</h3>
<p>Ibn Khaldoun (1332-1406), né à Tunis dans une famille venue d’Andalousie, est à la fois juriste, diplomate et conseiller des princes. Il connaît la prison, l’exil, la peste qui tue ses parents et le naufrage qui emporte sa famille. Retiré dans une forteresse du désert algérien, il écrit en quelques mois la Muqaddima, une œuvre que beaucoup considèrent comme la naissance des sciences sociales.</p>
${vieKhaldoun}
<h3>Pourquoi les empires naissent et meurent</h3>
<p>Pour Ibn Khaldoun, un groupe soudé par une forte solidarité, la ‘asabiyya, conquiert le pouvoir. Mais ses descendants, installés en ville, s’amollissent dans le luxe, perdent leur cohésion et augmentent les impôts. Au bout de quatre générations, un nouveau groupe les remplace.</p>
${cycle}
<h3>Un économiste avant l’heure</h3>
<p>Il écrit que le travail est la source de la richesse, que la division du travail enrichit les villes, et que des impôts trop lourds découragent l’activité et finissent par rapporter moins. Ronald Reagan l’a cité en 1981 pour justifier ses baisses d’impôts.</p>
<h3>À retenir</h3>
<p>Ibn Khaldoun a cherché les lois qui gouvernent l’essor et le déclin des sociétés. Le portrait complet présente sa vie, sa pensée et sa redécouverte.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      vie: "De Tunis aux cours du Maghreb et d’Andalousie, puis au Caire.",
      epoque: "Un Maghreb fragmenté, la peste noire et une histoire sans critique.",
      pensee: "Sept étapes, de la science de la civilisation à l’impôt.",
      livres: "La Muqaddima, le Livre des exemples et l’autobiographie.",
      cas: "Tamerlan, Reagan, la redécouverte européenne, le naufrage.",
      objections: "L’anachronisme, des cycles trop généraux, l’usage de Laffer, le déterminisme.",
      ecoles: "La tradition arabe, les historiens ottomans, les orientalistes, Toynbee, Gellner, Acemoglu.",
      source: "Muqaddima : des taux faibles qui rapportent beaucoup.",
      quiz: "Cinq questions corrigées et une question sur la fiscalité d’Obwald.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
