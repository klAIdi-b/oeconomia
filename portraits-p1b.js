/* Œconomia — portraits longs, lot 1 (b) : Karl Marx, Friedrich Hayek */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const card = (x, y, w, h, t, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" style="fill:var(--ink); font:700 13px Manrope, sans-serif">${t}</text>`;

  /* =====================================================================
     KARL MARX
     ===================================================================== */
  const vieMarx = lifeline(1818, 1883, [
    [1818, "naissance à Trèves", true], [1841, "doctorat de philosophie", false], [1844, "rencontre Engels à Paris", true], [1848, "Manifeste du parti communiste", false],
    [1849, "exil à Londres", true], [1864, "Première Internationale", false], [1867, "Le Capital, livre I", true], [1883, "mort à Londres", false]
  ], "Karl Marx, 1818-1883", "Une vie d’exil et de pauvreté, de Trèves à Cologne, Paris, Bruxelles puis Londres, où Marx passe ses trente-quatre dernières années, en grande partie dans la salle de lecture du British Museum. Engels publiera après sa mort les livres II et III du Capital.");

  const circuits = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Deux circuits de l’échange selon Marx</text>`;
    s += `<text x="160" y="58" text-anchor="middle" style="fill:var(--note); font:700 13px Manrope, sans-serif">Vendre pour acheter : M – A – M</text>`;
    s += card(20, 76, 80, 44, "M", "var(--note)") + card(120, 76, 80, 44, "A", "var(--gold)") + card(220, 76, 80, 44, "M′", "var(--note)");
    s += arrow(102, 98, 118, 98) + arrow(202, 98, 218, 98);
    s += `<text x="160" y="146" text-anchor="middle" ${S}>Le tisserand vend sa toile pour acheter</text><text x="160" y="162" text-anchor="middle" ${S}>du pain : le but est la valeur d’usage.</text>`;
    s += `<text x="480" y="58" text-anchor="middle" style="fill:var(--serial); font:700 13px Manrope, sans-serif">Acheter pour vendre : A – M – A′</text>`;
    s += card(340, 76, 80, 44, "A", "var(--gold)") + card(440, 76, 80, 44, "M", "var(--note)") + card(540, 76, 80, 44, "A′ > A", "var(--serial)");
    s += arrow(422, 98, 438, 98) + arrow(522, 98, 538, 98);
    s += `<text x="480" y="146" text-anchor="middle" ${S}>Le capitaliste avance de l’argent pour</text><text x="480" y="162" text-anchor="middle" ${S}>en récupérer davantage : c’est le capital.</text>`;
    s += `<rect x="20" y="190" width="600" height="72" rx="8" style="fill:var(--paper-2); stroke:var(--line)"/>`;
    s += `<text x="320" y="216" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">D’où vient le surplus A′ − A, si les échanges se font à leur valeur ?</text>`;
    s += `<text x="320" y="238" text-anchor="middle" ${S}>Réponse de Marx : d’une marchandise particulière, la force de travail,</text>`;
    s += `<text x="320" y="254" text-anchor="middle" ${S}>qui produit plus de valeur qu’elle n’en coûte. C’est la plus-value.</text>`;
    return s;
  })(), "M désigne la marchandise, A l’argent. Le Capital (livre I, chapitres 4 à 6) part de cette énigme : dans une économie où tout s’échange à sa valeur, comment l’argent peut-il s’accroître ? Marx en tire sa théorie de l’exploitation (voir plus-value).", "Deux circuits d’échange comparés");

  OEC.portraits["marx"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Karl Marx (1818-1883), philosophe, journaliste et économiste allemand, a voulu montrer que le capitalisme repose sur l’exploitation du travail salarié et qu’il est traversé de contradictions qui le conduiront à être dépassé. Le Capital (1867) en est l’œuvre centrale.",
      "Il reprend la théorie classique de la valeur-travail pour en tirer une théorie de la plus-value, et propose une conception matérialiste de l’histoire, où les rapports de production et les luttes de classes expliquent les transformations des sociétés.",
      "Son influence politique a été immense, des partis socialistes aux régimes communistes du XXe siècle. Ses prédictions centrales ont été démenties, mais son analyse de l’accumulation, de la concentration et des crises du capitalisme continue d’inspirer économistes et historiens."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Karl Marx naît le 5 mai 1818 à Trèves, en Rhénanie, alors prussienne, dans une famille juive convertie au protestantisme ; son père est avocat. Il étudie le droit à Bonn puis la philosophie à Berlin, où il fréquente les « jeunes hégéliens », disciples critiques du philosophe Hegel. Il obtient en 1841 un doctorat de philosophie sur Démocrite et Épicure, mais la carrière universitaire lui est fermée en raison de ses idées radicales. Il devient journaliste, rédacteur en chef de la Gazette rhénane, interdite en 1843.</p>
<p>Il épouse Jenny von Westphalen, fille d’un haut fonctionnaire, et s’installe à Paris, où il découvre l’économie politique et rencontre en 1844 Friedrich Engels, fils d’un industriel du textile, qui sera son ami, son collaborateur et son soutien financier toute sa vie. Expulsé de France, il vit à Bruxelles, où il rédige avec Engels le Manifeste du parti communiste, publié en février 1848, à la veille des révolutions qui secouent l’Europe.</p>
${vieMarx}
<p>Après l’échec des révolutions, il s’exile en 1849 à Londres, qu’il ne quittera plus. Il y vit longtemps dans une grande pauvreté, dans un petit logement de Soho ; trois de ses enfants y meurent. Il écrit des articles pour le New York Daily Tribune, passe ses journées à la salle de lecture du British Museum, et travaille à sa critique de l’économie politique. Il participe à la fondation de l’Association internationale des travailleurs en 1864. Le premier livre du Capital paraît en 1867. Malade, il ne termine jamais les suivants. Il meurt le 14 mars 1883, un an après sa femme, et est enterré au cimetière de Highgate.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Marx écrit au moment où la révolution industrielle transforme l’Angleterre, puis le continent. Les usines textiles de Manchester, que décrit Engels dans La Situation de la classe laborieuse en Angleterre (1845), emploient hommes, femmes et enfants pour des journées de douze à quatorze heures. Les villes industrielles grandissent dans l’insalubrité. Les rapports des inspecteurs des fabriques britanniques, que Marx cite abondamment, documentent ces conditions.</p>
<p>C’est aussi l’époque des premières crises industrielles périodiques, en 1825, 1836, 1847, 1857, et des premiers mouvements ouvriers : le chartisme anglais, les révoltes des canuts de Lyon, les révolutions de 1848. Le socialisme existe déjà sous diverses formes, de Robert Owen à Proudhon et Saint-Simon, que Marx critique comme « utopiques ».</p>
<p>Sur le plan intellectuel, Marx réunit trois sources, selon une formule que reprendra Lénine : la philosophie allemande, surtout Hegel et sa dialectique ; l’économie politique anglaise, de <a href="#eco-smith">Smith</a> et <a href="#eco-ricardo">Ricardo</a> ; et le socialisme français.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Le matérialisme historique</h4>
<p>Pour Marx, la manière dont une société produit ses moyens d’existence, ses « forces productives » et ses « rapports de production », forme la base sur laquelle s’élèvent le droit, la politique, la religion et les idées. L’histoire est une succession de modes de production, esclavagiste, féodal, capitaliste, chacun marqué par des luttes entre classes. « L’histoire de toute société jusqu’à nos jours est l’histoire de luttes de classes », proclame le Manifeste.</p>
<h4>2. La marchandise et la valeur</h4>
<p>Le Capital commence par la marchandise, qui a une valeur d’usage et une valeur d’échange (<a href="#c-valeur-usage">voir valeur d’usage</a>). Reprenant Ricardo, Marx fonde la valeur sur le temps de travail socialement nécessaire pour la produire (<a href="#c-valeur-travail">voir valeur-travail</a>). Il analyse le « fétichisme de la marchandise » : les rapports entre personnes apparaissent comme des rapports entre choses.</p>
<h4>3. La plus-value et l’exploitation</h4>
<p>Le salarié vend sa force de travail, sa capacité de travailler, à sa valeur, ce qu’il faut pour la reproduire. Mais il travaille plus longtemps que le temps nécessaire pour produire l’équivalent de son salaire. Le surplus, la plus-value, revient au capitaliste. C’est l’exploitation, qui n’a rien d’un vol au sens juridique : elle découle des règles mêmes de l’échange marchand (<a href="#c-plus-value">voir plus-value</a>).</p>
${circuits}
<h4>4. L’accumulation et l’armée de réserve</h4>
<p>La concurrence oblige chaque capitaliste à réinvestir ses profits et à mécaniser. La mécanisation remplace des travailleurs, ce qui forme une « armée industrielle de réserve » de chômeurs qui pèse sur les salaires. Le capital se concentre dans des entreprises de plus en plus grandes.</p>
<h4>5. La baisse tendancielle du taux de profit</h4>
<p>Comme seul le travail vivant crée de la plus-value, et que la part du capital investie en machines augmente, le taux de profit tend à baisser à long terme, même si des contre-tendances peuvent le freiner. Cette loi est, pour Marx, une source fondamentale des crises.</p>
<h4>6. Les crises</h4>
<p>Le capitalisme est sujet à des crises périodiques de surproduction : les capitalistes produisent au-delà de ce que les travailleurs, mal payés, peuvent acheter, et la monnaie permet de suspendre les achats (<a href="#c-loi-debouches">voir loi des débouchés</a>). Les crises détruisent du capital et rétablissent temporairement la rentabilité.</p>
<h4>7. Le dépassement du capitalisme</h4>
<p>Marx pense que ces contradictions conduiront au dépassement du capitalisme par un mode de production collectif, où les travailleurs associés contrôleraient la production. Il en dit très peu sur le fonctionnement concret de cette société future, qu’il refuse de décrire en détail, à la différence des socialistes « utopiques ».</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Manuscrits de 1844.</b> Publiés seulement en 1932, ils développent la théorie de l’aliénation du travail : le travailleur est séparé du produit de son travail, de son activité et des autres hommes. Ils ont inspiré une lecture humaniste de Marx au XXe siècle.</p>
<p><b>Manifeste du parti communiste (1848), avec Engels.</b> Un texte court et flamboyant, qui fait aussi un éloge saisissant de la puissance transformatrice de la bourgeoisie et de la mondialisation. C’est l’un des textes politiques les plus lus de l’histoire.</p>
<p><b>Le 18 Brumaire de Louis Bonaparte (1852).</b> Une analyse du coup d’État de Louis-Napoléon Bonaparte, qui commence par la formule célèbre sur l’histoire qui se répète, « la première fois comme tragédie, la seconde fois comme farce ».</p>
<p><b>Le Capital, livre I (1867).</b> L’œuvre centrale : marchandise, monnaie, plus-value, journée de travail, machinisme, accumulation. Les livres II (1885) et III (1894), édités par Engels à partir des brouillons, traitent de la circulation du capital et de la formation des prix et des profits.</p>
<p><b>Critique du programme de Gotha (1875).</b> Une lettre polémique où figure la formule « de chacun selon ses capacités, à chacun selon ses besoins », pour décrire une phase avancée du communisme.</p>` }
    ],
    cas: [
      { titre: "Genève 1866 et Saint-Imier 1872 : l’Internationale en Suisse", html: `
<p>Le premier congrès de l’Association internationale des travailleurs se tient à Genève en septembre 1866, sur la base de statuts rédigés par Marx. La Suisse, terre d’asile pour de nombreux réfugiés politiques, joue un rôle central dans l’histoire du mouvement ouvrier. Mais c’est aussi en Suisse que se forme l’opposition à Marx : les horlogers du Jura, organisés dans la Fédération jurassienne, se rallient à l’anarchiste russe Mikhaïl Bakounine. Après l’exclusion de Bakounine au congrès de La Haye en 1872, les anti-autoritaires se réunissent à Saint-Imier et fondent une Internationale rivale. Le conflit oppose deux visions du socialisme : l’action politique et l’État pour Marx, l’autonomie et le refus de l’État pour les anarchistes.</p>` },
      { titre: "La pauvreté de Soho", html: `
<p>Dans les années 1850, la famille Marx vit dans deux pièces au 28 Dean Street, à Soho. Un rapport d’un espion prussien décrit un logement délabré, encombré de manuscrits, où Marx reçoit ses visiteurs avec une grande cordialité. Trois des enfants du couple meurent en bas âge ou dans l’enfance. Marx survit grâce aux articles qu’il écrit pour la presse américaine et à l’argent qu’Engels lui envoie de Manchester, où il travaille dans l’entreprise familiale qu’il déteste.</p>` },
      { titre: "La Commune de Paris, 1871", html: `
<p>Au printemps 1871, Paris se soulève et établit pendant deux mois un gouvernement révolutionnaire, la Commune, écrasé dans le sang lors de la « semaine sanglante ». Marx, qui avait jugé l’insurrection imprudente, rédige pour l’Internationale La Guerre civile en France, où il voit dans la Commune la première forme de gouvernement de la classe ouvrière. Le texte rend Marx célèbre en Europe et fait de lui, aux yeux des gouvernements, le chef d’une conspiration mondiale.</p>` },
      { titre: "Le Capital et ses lecteurs", html: `
<p>Le premier tirage allemand du Capital, de mille exemplaires, met quatre ans à s’écouler. La traduction russe, en 1872, est autorisée par la censure, qui la juge trop difficile pour être dangereuse. La traduction française, publiée en livraisons à partir de 1872, a été revue par Marx lui-même. Au XXe siècle, Le Capital devient l’un des livres les plus traduits au monde, souvent plus cité que lu.</p>` }
    ],
    objections: `
<h4>1. Le problème de la transformation</h4>
<p>En 1896, l’économiste autrichien Eugen von Böhm-Bawerk montre que le livre III du Capital, où les prix s’écartent des valeurs, contredit la théorie de la valeur du livre I. Le débat sur la « transformation des valeurs en prix de production » durera tout le XXe siècle (<a href="#c-valeur-travail">voir valeur-travail</a>).</p>
<h4>2. Des prédictions démenties</h4>
<p>Marx prévoyait l’appauvrissement croissant des travailleurs et la polarisation de la société en deux classes. Dans les pays capitalistes, les salaires réels ont fortement augmenté depuis le XIXe siècle et une large classe moyenne s’est développée. Les révolutions se sont produites dans des pays agricoles, comme la Russie et la Chine, et non dans les pays industriels avancés.</p>
<h4>3. La critique de Popper</h4>
<p>Le philosophe Karl Popper reproche au marxisme d’être devenu infalsifiable : ses défenseurs réinterprètent chaque fait contraire pour le rendre compatible avec la théorie. Il voit aussi dans la prétention à prédire le cours de l’histoire une erreur, qu’il appelle « historicisme ».</p>
<h4>4. Le calcul économique socialiste</h4>
<p>Ludwig von <a href="#eco-mises">Mises</a> et Friedrich <a href="#eco-hayek">Hayek</a> soutiennent qu’une économie sans propriété privée et sans prix de marché ne peut pas allouer rationnellement les ressources. L’échec économique des régimes communistes au XXe siècle est souvent présenté comme une confirmation, même si Marx n’avait guère décrit l’organisation d’une société socialiste.</p>`,
    ecoles: `
<p><b>Friedrich Engels</b> édite et diffuse son œuvre ; <b>Karl Kautsky</b> et la social-démocratie allemande en font une doctrine.</p>
<p><b>Lénine</b>, puis les partis communistes, en tirent une théorie de la révolution et de l’impérialisme ; <b>Rosa Luxemburg</b> en propose une lecture critique.</p>
<p><b><a href="#eco-schumpeter">Schumpeter</a></b> admire en lui le théoricien de la dynamique du capitalisme, tout en rejetant ses conclusions.</p>
<p><b><a href="#eco-robinson">Joan Robinson</a></b> et <b>Michał Kalecki</b> rapprochent Marx et Keynes ; <b>Sraffa</b> renouvelle la théorie de la valeur.</p>
<p><b>L’école de Francfort</b> et le marxisme occidental développent sa critique culturelle.</p>
<p><b><a href="#eco-piketty">Piketty</a></b>, sans être marxiste, reprend la question de l’accumulation et de la concentration du capital.</p>`,
    source: {
      titre: "Karl Marx, Thèses sur Feuerbach, 1845, thèse 11",
      texte: "Les philosophes n’ont fait qu’interpréter le monde de différentes manières ; ce qui importe, c’est de le transformer.",
      notes: `
<p><b>Un texte de jeunesse.</b> Les onze thèses sont des notes rédigées à Bruxelles en 1845, publiées par Engels en 1888. Elles critiquent le matérialisme du philosophe Ludwig Feuerbach, jugé trop contemplatif.</p>
<p><b>Le sens de la formule.</b> Marx ne rejette pas la pensée : il affirme que la théorie doit être liée à la pratique, et que la vérité d’une idée se vérifie dans l’action. C’est le programme de toute son œuvre, qui mêle science et engagement politique.</p>
<p><b>Une épitaphe.</b> La phrase est gravée sur sa tombe au cimetière de Highgate, à Londres, avec la dernière ligne du Manifeste : « Prolétaires de tous les pays, unissez-vous ! »</p>`
    },
    quiz: [
      { q: "Avec qui Marx rédige-t-il le Manifeste du parti communiste (1848) ?",
        o: ["Pierre-Joseph Proudhon", "Friedrich Engels", "Mikhaïl Bakounine", "Ferdinand Lassalle"], c: 1,
        e: "Engels est son ami, collaborateur et soutien financier." },
      { q: "D’où vient la plus-value selon Marx ?",
        o: ["D’un vol du capitaliste, qui paie le travail sous sa valeur", "De l’écart entre la valeur créée par le travail et le salaire versé", "Du commerce international, qui permet d’acheter bas et vendre haut", "De la rente foncière que les propriétaires prélèvent sur le produit"], c: 1,
        e: "L’exploitation découle des règles mêmes de l’échange marchand." },
      { q: "Qu’est-ce que l’« armée industrielle de réserve » ?",
        o: ["Une milice ouvrière que les syndicats arment en cas de grève", "Les chômeurs créés par la mécanisation, qui pèsent sur les salaires", "Les ouvriers les plus qualifiés, gardés en réserve par les patrons", "Les syndicats de métier, qui négocient les salaires pour tous"], c: 1,
        e: "Elle résulte de l’accumulation et de la mécanisation." },
      { q: "Où se tient le premier congrès de l’Association internationale des travailleurs, en 1866 ?",
        o: ["À Londres", "À Genève", "À Paris", "À Berlin"], c: 1,
        e: "La Suisse a joué un rôle central dans l’histoire de l’Internationale." },
      { q: "Quelle critique Böhm-Bawerk adresse-t-il au Capital en 1896 ?",
        o: ["Qu’il surestime le rôle de la monnaie dans la formation des prix", "Que le livre III, où les prix s’écartent des valeurs, contredit le livre I", "Qu’il néglige la concurrence entre capitalistes dans le livre III, pourtant essentielle", "Qu’il ignore le rôle de l’entrepreneur dans la production de valeur"], c: 1,
        e: "C’est le « problème de la transformation »." }
    ],
    ouverte: {
      q: "La « paix du travail » suisse, conclue en 1937 entre patronat et syndicats de la métallurgie, et la culture du compromis social démentent-elles l’analyse de Marx sur la lutte des classes ?",
      r: "La paix du travail, par laquelle syndicats et employeurs renoncent à la grève et au lock-out au profit de la négociation, et le partenariat social qui en a découlé ont effectivement conduit la Suisse à connaître très peu de conflits sociaux ouverts au XXe siècle. Pour les critiques de Marx, c’est la preuve que le capitalisme peut intégrer les travailleurs par la négociation, la hausse des salaires et la démocratie, au lieu de les pousser à la révolution. Une lecture marxiste répondrait que le conflit de répartition n’a pas disparu, mais qu’il a été institutionnalisé : les salaires, la durée du travail et les retraites restent des enjeux de rapports de force, simplement réglés par la négociation et la démocratie directe plutôt que par la grève. Elle soulignerait aussi le rôle de la main-d’œuvre étrangère, longtemps soumise à des statuts précaires, dans cet équilibre. La grève générale de 1918, juste avant, montre d’ailleurs que la Suisse n’a pas toujours échappé aux conflits de classes."
    },
    lectures: [
      ["Accessible", "Francis Wheen, Karl Marx, 1999, une biographie vivante."],
      ["Accessible", "Karl Marx et Friedrich Engels, Manifeste du parti communiste, 1848."],
      ["Intermédiaire", "Gareth Stedman Jones, Karl Marx: Greatness and Illusion, 2016."],
      ["Intermédiaire", "David Harvey, Pour lire Le Capital, 2010."],
      ["Recherche", "Karl Marx, Le Capital, livre I (1867), sections 1 à 4 et chapitre 25 ; Eugen von Böhm-Bawerk, Karl Marx and the Close of His System, 1896."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Marx, à quoi la concurrence entre capitalistes conduit-elle ?",
          o: ["À mécaniser, ce qui crée du chômage et provoque des crises", "À relever les salaires pour attirer la main-d’œuvre qualifiée", "À supprimer les profits en faisant baisser tous les prix", "À abandonner les machines pour revenir au travail artisanal"], c: 0,
          e: "Marx y voit des contradictions qui transformeront la société." },
        { q: "Comment la notice juge-t-elle l’héritage de Marx ?",
          o: ["Immense mais contesté, car plusieurs prédictions étaient fausses", "Confirmé par l’histoire, car ses prédictions se sont réalisées", "Négligeable au XXe siècle, car les États l’ont écarté", "Limité à l’Allemagne, car ses idées n’ont pas traversé le Rhin"], c: 0,
          e: "Ses idées ont inspiré les partis socialistes et des révolutions aux résultats souvent tragiques." }
      ],
      duree: 6,
      html: `
<h3>Un exilé au British Museum</h3>
<p>Karl Marx (1818-1883), né en Allemagne, est philosophe et journaliste. Chassé de plusieurs pays pour ses idées révolutionnaires, il s’installe à Londres en 1849 et y passe le reste de sa vie, souvent dans la pauvreté, aidé par son ami Friedrich Engels. Avec lui, il écrit en 1848 le Manifeste du parti communiste, puis publie en 1867 son grand livre, Le Capital.</p>
${vieMarx}
<h3>Ses idées</h3>
<p>Pour Marx, le capitalisme repose sur l’exploitation : le salarié produit plus de valeur qu’il n’en reçoit en salaire, et la différence, la plus-value, revient au capitaliste. La concurrence pousse à mécaniser, crée du chômage et provoque des crises. Marx pense que ces contradictions conduiront à une société où les travailleurs contrôleraient la production.</p>
<h3>Un héritage immense et contesté</h3>
<p>Ses idées ont inspiré les partis socialistes et les révolutions communistes du XXe siècle, avec des résultats souvent tragiques. Plusieurs de ses prédictions se sont révélées fausses, mais ses analyses de la concentration du capital et des crises restent discutées. En Suisse, Genève accueille en 1866 le premier congrès de l’Internationale ouvrière.</p>
<h3>À retenir</h3>
<p>Marx a fait du conflit entre capital et travail le cœur de l’économie. Le portrait complet présente sa vie, ses livres, ses critiques et ses héritiers.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Trèves à Londres : philosophe, journaliste, exilé, auteur du Capital.",
      epoque: "La révolution industrielle, les crises et les premiers mouvements ouvriers.",
      pensee: "Sept étapes, du matérialisme historique au dépassement du capitalisme.",
      livres: "Des Manuscrits de 1844 au Capital et à la Critique du programme de Gotha.",
      cas: "L’Internationale en Suisse, la pauvreté de Soho, la Commune, les lecteurs du Capital.",
      objections: "La transformation, les prédictions démenties, Popper, le calcul socialiste.",
      ecoles: "Engels, Lénine et Luxemburg, Schumpeter, Robinson et Kalecki, Francfort, Piketty.",
      source: "Thèses sur Feuerbach : interpréter ou transformer le monde.",
      quiz: "Cinq questions corrigées et une question sur la paix du travail.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     FRIEDRICH HAYEK
     ===================================================================== */
  const vieHayek = lifeline(1899, 1992, [
    [1899, "naissance à Vienne", true], [1931, "London School of Economics", false], [1944, "La Route de la servitude", true], [1947, "Mont-Pèlerin, Vaud", false],
    [1950, "Chicago", true], [1962, "Fribourg-en-Brisgau", false], [1974, "prix Nobel", true], [1992, "mort à Fribourg", false]
  ], "Friedrich Hayek, 1899-1992", "Une longue vie entre Vienne, Londres, Chicago, Fribourg-en-Brisgau et Salzbourg. Marginalisé pendant les années de domination keynésienne, Hayek retrouve une influence considérable après son prix Nobel de 1974.");

  const etain = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>L’exemple de l’étain (Hayek, 1945) : le prix comme signal</text>`;
    s += card(20, 50, 180, 50, "Une mine s’épuise", "var(--serial)");
    s += card(230, 50, 180, 50, "L’étain se raréfie", "var(--serial)");
    s += card(440, 50, 180, 50, "Son prix monte", "var(--gold)");
    s += arrow(202, 75, 228, 75) + arrow(412, 75, 438, 75);
    const users = [[20, "Le fabricant de boîtes", "passe à l’aluminium"], [230, "Le soudeur", "économise l’étain"], [440, "Un prospecteur", "rouvre une vieille mine"]];
    users.forEach(([x, a, b]) => (s += `<rect x="${x}" y="150" width="180" height="62" rx="10" style="fill:var(--card); stroke:var(--note); stroke-width:2"/><text x="${x + 90}" y="176" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${a}</text><text x="${x + 90}" y="196" text-anchor="middle" ${S}>${b}</text>`));
    s += arrow(530, 102, 110, 148, "var(--gold)") + arrow(530, 102, 320, 148, "var(--gold)") + arrow(530, 102, 530, 148, "var(--gold)");
    s += `<text x="20" y="246" ${S}>Aucun d’eux ne sait pourquoi l’étain est devenu rare, et aucun n’a besoin de le savoir.</text>`;
    s += `<text x="20" y="264" ${S}>Le prix transmet l’information essentielle, et chacun agit dans le bon sens.</text>`;
    s += `<text x="20" y="282" ${S}>Aucun planificateur ne pourrait rassembler toute la connaissance dispersée nécessaire.</text>`;
    return s;
  })(), "Dans « L’utilisation de la connaissance dans la société » (1945), Hayek décrit le système des prix comme un mécanisme de communication. Il transmet à chacun, sous une forme condensée, l’information dont il a besoin pour ajuster ses décisions, sans que personne ne connaisse l’ensemble.", "Schéma de la transmission d’un signal de prix");

  OEC.portraits["hayek"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Friedrich Hayek (1899-1992), économiste et philosophe autrichien, a défendu toute sa vie le marché et l’État de droit contre la planification. Pour lui, les prix sont un système de communication qui coordonne une connaissance dispersée entre des millions de personnes, qu’aucune autorité centrale ne pourrait rassembler.",
      "Adversaire de Keynes dans les années 1930, auteur de La Route de la servitude (1944), fondateur de la Société du Mont-Pèlerin en Suisse en 1947, il reçoit le prix Nobel en 1974. Son œuvre s’étend de la théorie des cycles à la psychologie, au droit et à la philosophie politique.",
      "Marginalisé pendant les Trente Glorieuses, il inspire ensuite les politiques libérales de Margaret Thatcher et le renouveau du libéralisme. Il reste l’une des figures les plus admirées et les plus contestées du XXe siècle."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Friedrich August von Hayek naît à Vienne le 8 mai 1899, dans une famille de scientifiques et d’universitaires ; le philosophe Ludwig Wittgenstein est un cousin éloigné. Il sert dans l’artillerie austro-hongroise sur le front italien à la fin de la Première Guerre mondiale, puis étudie le droit et les sciences politiques à l’université de Vienne, tout en s’intéressant à la psychologie. Il fréquente le séminaire privé de Ludwig von <a href="#eco-mises">Mises</a>, qui le convertit au libéralisme, et dirige à partir de 1927 l’Institut autrichien de recherche conjoncturelle.</p>
<p>En 1931, l’économiste Lionel Robbins l’invite à la London School of Economics, où ses conférences sur les prix et la production font sensation. Il y devient professeur et engage une controverse célèbre avec <a href="#eco-keynes">Keynes</a> sur les causes des crises. La Théorie générale de 1936 l’emporte largement, et Hayek perd une partie de son influence parmi les économistes.</p>
${vieHayek}
<p>Pendant la guerre, il publie La Route de la servitude (1944), qui devient un succès mondial, notamment dans sa version abrégée du Reader’s Digest aux États-Unis. En 1947, il réunit à l’hôtel du Parc, au Mont-Pèlerin, au-dessus de Vevey, une trentaine d’intellectuels libéraux pour fonder la Société du Mont-Pèlerin. Il enseigne ensuite à Chicago, au Comité de pensée sociale, puis à Fribourg-en-Brisgau en Allemagne et à Salzbourg. Le prix Nobel, partagé en 1974 avec le Suédois Gunnar Myrdal, aux idées très opposées, relance sa carrière. Il meurt à Fribourg le 23 mars 1992, quelques mois après la dissolution de l’Union soviétique.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Hayek grandit dans la Vienne brillante et inquiète de la fin de l’Empire austro-hongrois. Après 1918, l’Autriche connaît une hyperinflation, l’effondrement de son empire, des conflits politiques violents entre socialistes et conservateurs. Vienne la rouge, gouvernée par les sociaux-démocrates, construit de grands programmes de logements municipaux. Le débat sur la possibilité d’une économie socialiste est au cœur de la vie intellectuelle viennoise.</p>
<p>Les années 1930 et 1940 voient le triomphe de la planification sous toutes ses formes : plans quinquennaux soviétiques, économie dirigée nazie, New Deal américain, économie de guerre britannique. Beaucoup d’intellectuels occidentaux pensent alors que l’avenir appartient à une économie planifiée et que le marché a fait faillite pendant la Grande Dépression.</p>
<p>Hayek écrit contre ce courant. Il est convaincu que le nazisme et le communisme, loin d’être opposés, ont une racine commune : la volonté de diriger consciemment toute la société selon un plan, qui conduit selon lui inévitablement à la concentration du pouvoir et à la perte des libertés.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La théorie autrichienne des cycles</h4>
<p>Dans Prix et production (1931), Hayek explique les crises par le crédit : quand les banques prêtent à des taux inférieurs au taux naturel, les entreprises investissent dans des projets longs que l’épargne réelle ne peut pas soutenir. Le boom est artificiel ; la crise est la liquidation nécessaire de ces erreurs. Relancer la demande ne ferait que prolonger le déséquilibre (<a href="#c-cycles">voir cycles économiques</a>).</p>
<h4>2. La connaissance dispersée</h4>
<p>Dans un article de 1945, « L’utilisation de la connaissance dans la société », Hayek soutient que le problème économique central n’est pas d’allouer des ressources connues, mais d’utiliser une connaissance dispersée entre des millions de personnes : connaissance des circonstances particulières de temps et de lieu, souvent tacite, que personne ne peut centraliser.</p>
<h4>3. Les prix comme système d’information</h4>
<p>Le système des prix résout ce problème. Un prix qui monte signale une rareté, et chacun ajuste ses décisions sans connaître la cause. C’est pourquoi la planification centrale est condamnée à l’échec : elle prive l’économie de ce système de communication (<a href="#c-equilibre-general">voir le débat sur le calcul socialiste</a>).</p>
${etain}
<h4>4. La route de la servitude</h4>
<p>Dans son livre de 1944, Hayek soutient que la planification économique, même entreprise avec de bonnes intentions démocratiques, conduit à la concentration du pouvoir : pour réaliser un plan, il faut imposer des priorités communes, ce qui oblige à restreindre les libertés et favorise l’ascension de ceux qui sont prêts à user de la contrainte. Il ne rejette pas toute intervention de l’État : il accepte un revenu minimum, une assurance contre certains risques, des règles sanitaires.</p>
<h4>5. L’ordre spontané</h4>
<p>Hayek distingue deux types d’ordre : l’ordre construit, organisé par une volonté, comme une entreprise ou une armée, et l’ordre spontané, issu des actions de nombreux individus suivant des règles, sans plan d’ensemble, comme le langage, le droit coutumier ou le marché. Les sociétés complexes reposent sur des ordres spontanés, que la raison humaine ne peut pas maîtriser entièrement.</p>
<h4>6. L’État de droit</h4>
<p>Dans La Constitution de la liberté (1960) et Droit, législation et liberté (1973-1979), Hayek défend un État de droit fondé sur des règles générales, abstraites et connues à l’avance, s’appliquant à tous, plutôt que sur des décisions discrétionnaires. Il se méfie de la « justice sociale », qu’il juge dénuée de sens dans un ordre de marché, où les revenus ne résultent de la volonté de personne.</p>
<h4>7. La monnaie concurrentielle</h4>
<p>Dans La Dénationalisation de la monnaie (1976), Hayek propose de supprimer le monopole des banques centrales et de laisser des banques privées émettre des monnaies concurrentes : les meilleures, les plus stables, s’imposeraient. L’idée a été relancée par les partisans des cryptomonnaies (<a href="#c-fonctions-monnaie">voir fonctions de la monnaie</a>).</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Prix et production (1931).</b> Ses conférences de la London School of Economics, qui exposent la théorie autrichienne des cycles. Elles ont rendu Hayek célèbre parmi les économistes en un an.</p>
<p><b>La Route de la servitude (1944).</b> Un essai polémique écrit pour le grand public, dédié « aux socialistes de tous les partis ». Il a fait de Hayek une figure politique mondiale.</p>
<p><b>« L’utilisation de la connaissance dans la société » (1945).</b> Un article de quelques pages de l’American Economic Review, devenu l’un des plus cités de l’histoire de l’économie.</p>
<p><b>L’Ordre sensoriel (1952).</b> Un ouvrage de psychologie théorique sur le fonctionnement du cerveau, issu de ses travaux de jeunesse, qui anticipe certaines idées des neurosciences.</p>
<p><b>La Constitution de la liberté (1960).</b> Sa grande synthèse de philosophie politique libérale. Margaret Thatcher l’aurait un jour posé sur une table en déclarant : « Voici ce que nous croyons. »</p>
<p><b>Droit, législation et liberté (1973-1979).</b> Une trilogie sur l’ordre spontané, le droit et une constitution limitant les pouvoirs de la majorité.</p>
<p><b>La Présomption fatale (1988).</b> Son dernier livre, une critique du socialisme comme erreur intellectuelle, préparé avec l’aide de William Bartley.</p>` }
    ],
    cas: [
      { titre: "Mont-Pèlerin, avril 1947", html: `
<p>En avril 1947, Hayek réunit pendant dix jours à l’hôtel du Parc, au Mont-Pèlerin, au-dessus de Vevey, trente-neuf économistes, historiens et philosophes libéraux, dont Ludwig von <a href="#eco-mises">Mises</a>, Milton <a href="#eco-friedman">Friedman</a>, Karl Popper, Wilhelm Röpke, alors professeur à Genève, et Maurice Allais. Le financement est en partie assuré par des milieux d’affaires suisses. Ils fondent la Société du Mont-Pèlerin, pour défendre et renouveler le libéralisme dans un monde dominé par le keynésianisme et la planification. La société, qui existe toujours, a compté parmi ses membres de nombreux prix Nobel et a joué un rôle important dans la diffusion des idées libérales après les années 1970.</p>` },
      { titre: "La controverse avec Keynes", html: `
<p>En 1931, Hayek publie une critique sévère du Traité sur la monnaie de Keynes dans la revue Economica. Keynes répond vivement, et s’attaque au livre de Hayek, Prix et production. Le débat, auquel participent leurs élèves, oppose deux explications de la crise : excès de crédit et d’investissement pour Hayek, insuffisance de la demande pour Keynes. Quand Keynes publie la Théorie générale en 1936, Hayek ne répond pas en détail, ce qu’il regrettera. Les deux hommes restent pourtant en bons termes : pendant la guerre, ils font ensemble la garde contre les incendies sur le toit du King’s College de Cambridge (<a href="#controverses">voir le débat Keynes-Hayek</a>).</p>` },
      { titre: "Le Chili de Pinochet", html: `
<p>Hayek se rend au Chili en 1977 et en 1981, sous la dictature militaire du général Pinochet, dont les politiques économiques sont inspirées par des économistes formés à Chicago. Dans un entretien au journal El Mercurio en 1981, il déclare préférer un dictateur libéral à un gouvernement démocratique sans libéralisme. Ces propos ont durablement terni son image auprès de nombreux critiques, qui y voient une contradiction avec sa défense de la liberté ; ses défenseurs soulignent qu’il voyait la dictature comme une transition provisoire.</p>` },
      { titre: "Thatcher et la Constitution de la liberté", html: `
<p>Selon un récit souvent rapporté, Margaret Thatcher, alors chef de l’opposition conservatrice dans les années 1970, aurait interrompu un exposé sur la voie du milieu en sortant de son sac La Constitution de la liberté et en déclarant : « Voici ce que nous croyons. » Devenue Première ministre en 1979, elle mène des privatisations, réduit le pouvoir des syndicats et le rôle de l’État dans l’économie. Hayek, qui la rencontre et correspond avec elle, devient une référence de la révolution conservatrice.</p>` }
    ],
    objections: `
<h4>1. Keynes et la Grande Dépression</h4>
<p>Pour <a href="#eco-keynes">Keynes</a> et ses héritiers, la théorie des cycles de Hayek recommandait de laisser la crise suivre son cours au moment où un quart de la population active américaine était au chômage. La liquidation prônée par les autrichiens aurait aggravé la dépression.</p>
<h4>2. La route de la servitude n’a pas eu lieu</h4>
<p>Les critiques, comme l’économiste Herman Finer ou plus tard Paul Samuelson, observent que les États-providence scandinaves et européens d’après-guerre, avec des interventions publiques massives, sont restés des démocraties libérales. La pente glissante décrite par Hayek ne s’est pas vérifiée.</p>
<h4>3. La justice sociale</h4>
<p>John Rawls, Amartya <a href="#eco-sen">Sen</a> et de nombreux philosophes rejettent l’idée que la justice sociale soit dénuée de sens. Même si les revenus de marché ne résultent de la volonté de personne, les règles qui les produisent, droit de propriété, fiscalité, héritage, sont des choix collectifs que l’on peut juger justes ou injustes.</p>
<h4>4. Les marchés aussi échouent</h4>
<p>L’économie de l’information, avec <a href="#c-asymetrie-information">Stiglitz et Akerlof</a>, montre que les prix ne transmettent pas toujours l’information correctement, et les crises financières, comme celle de 2008, que les marchés peuvent se tromper massivement. La confiance de Hayek dans les ordres spontanés serait excessive.</p>`,
    ecoles: `
<p><b>Carl Menger</b> et <b><a href="#eco-mises">Ludwig von Mises</a></b> sont ses maîtres dans l’école autrichienne.</p>
<p><b><a href="#eco-friedman">Milton Friedman</a></b> et l’école de Chicago partagent son libéralisme, mais non sa théorie des cycles.</p>
<p><b>James Buchanan</b> et la <a href="#c-choix-public">théorie des choix publics</a> prolongent sa méfiance envers l’action de l’État.</p>
<p><b>Les néo-autrichiens</b>, comme Israel Kirzner, développent sa théorie de l’entrepreneur et du processus de marché.</p>
<p><b><a href="#eco-ostrom">Elinor Ostrom</a></b> reprend, dans un autre esprit, son intérêt pour les ordres spontanés et les règles.</p>
<p><b>Vernon Smith</b>, prix Nobel 2002, cite Hayek comme une inspiration de l’économie expérimentale.</p>`,
    source: {
      titre: "Friedrich Hayek, La Présomption fatale, 1988, chapitre 5",
      texte: "La tâche curieuse de l’économie est de démontrer aux hommes combien ils savent peu de choses sur ce qu’ils s’imaginent pouvoir concevoir.",
      notes: `
<p><b>La connaissance limitée.</b> La phrase résume la pensée de Hayek : la société est trop complexe pour être conçue et dirigée par une intelligence, même collective. Le rôle de l’économiste est de montrer les limites de la raison planificatrice.</p>
<p><b>Le « constructivisme ».</b> Hayek appelle ainsi l’illusion selon laquelle les institutions humaines pourraient être conçues rationnellement de bout en bout. Il l’oppose à l’évolution culturelle, qui sélectionne les règles efficaces sans que personne les ait inventées.</p>
<p><b>Une phrase à double tranchant.</b> Les critiques de Hayek retournent la formule : les économistes libéraux qui ont conçu certaines réformes de marché rapides, comme dans la Russie des années 1990, auraient eux aussi surestimé ce qu’ils pouvaient concevoir.</p>`
    },
    quiz: [
      { q: "Où Hayek fonde-t-il la Société du Mont-Pèlerin en 1947 ?",
        o: ["À Vienne, la ville où il a fait ses études", "Au Mont-Pèlerin, au-dessus de Vevey, en Suisse", "À Chicago, où il enseignait alors à l’université", "À Londres, à la London School of Economics"], c: 1,
        e: "Trente-neuf intellectuels libéraux s’y réunissent pendant dix jours." },
      { q: "Quel est le rôle du système des prix selon Hayek ?",
        o: ["Garantir une répartition juste des revenus entre les citoyens", "Transmettre une information dispersée que personne ne peut centraliser", "Fixer le niveau des salaires de chaque métier de manière équitable", "Remplacer l’État dans ses fonctions de défense et de justice"], c: 1,
        e: "C’est l’argument de son article de 1945, avec l’exemple de l’étain." },
      { q: "Selon la théorie autrichienne des cycles, qu’est-ce qui provoque les crises ?",
        o: ["Une demande globale insuffisante face à la production", "Un crédit trop abondant qui fausse l’investissement", "La force excessive des syndicats sur les salaires", "La concurrence internationale, qui détruit les emplois"], c: 1,
        e: "La crise est la liquidation des investissements que l’épargne ne pouvait soutenir." },
      { q: "Avec qui Hayek partage-t-il le prix Nobel de 1974 ?",
        o: ["John Kenneth Galbraith", "Gunnar Myrdal", "Milton Friedman", "Paul Samuelson"], c: 1,
        e: "Myrdal, aux idées très opposées, défendait l’État-providence." },
      { q: "Qu’est-ce qu’un « ordre spontané » ?",
        o: ["Un ordre imposé par une autorité centrale qui décide de tout à l’avance", "Un ordre né d’individus suivant des règles, sans plan d’ensemble", "Un ordre né du hasard, sans règle, que personne ne peut comprendre", "Un ordre voté par le parlement pour organiser la vie économique"], c: 1,
        e: "Le langage, le droit coutumier et le marché en sont des exemples." }
    ],
    ouverte: {
      q: "Le fédéralisme suisse, avec ses vingt-six cantons en concurrence fiscale, correspond-il à l’idéal de Hayek ?",
      r: "Hayek voyait d’un bon œil le fédéralisme : des unités politiques plus petites, en concurrence, permettent d’expérimenter des règles différentes, de comparer les résultats, et limitent le pouvoir de chaque gouvernement, puisque les citoyens et les entreprises peuvent partir. La Suisse, avec ses cantons autonomes, ses impôts différenciés et sa démocratie directe, est souvent citée par les libéraux comme une illustration de ces avantages. Mais le fédéralisme suisse comporte aussi une forte péréquation financière entre cantons riches et pauvres, une coordination intercantonale, et des politiques sociales fédérales importantes, comme l’AVS, qui relèvent de la solidarité plutôt que de la concurrence. Les critiques de la concurrence fiscale soulignent qu’elle peut favoriser les contribuables les plus mobiles et réduire la capacité redistributive. La Suisse apparaît ainsi comme un compromis entre l’idéal de Hayek et la recherche de cohésion qu’il jugeait souvent suspecte."
    },
    lectures: [
      ["Accessible", "Friedrich Hayek, La Route de la servitude, 1944."],
      ["Accessible", "Nicholas Wapshott, Keynes Hayek: The Clash that Defined Modern Economics, 2011."],
      ["Intermédiaire", "Friedrich Hayek, « L’utilisation de la connaissance dans la société », American Economic Review, 1945."],
      ["Intermédiaire", "Bruce Caldwell, Hayek’s Challenge: An Intellectual Biography of F. A. Hayek, 2004."],
      ["Recherche", "Friedrich Hayek, La Constitution de la liberté, 1960 ; Bruce Caldwell et Hansjörg Klausinger, Hayek: A Life, 1899-1950, 2022."]
    ],
    decouvrir: {
      questions: [
        { q: "Dans l’exemple de Hayek, que se passe-t-il quand l’étain devient rare ?",
          o: ["Son prix monte, et chacun l’économise sans même savoir pourquoi", "Le gouvernement le rationne pour en garantir la répartition", "Son prix baisse, car les producteurs cherchent à l’écouler", "Personne ne s’en aperçoit tant que les stocks ne sont pas épuisés"], c: 0,
          e: "Les prix transmettent une information dispersée entre des millions de personnes." },
        { q: "À partir des années 1970, qui les idées de Hayek inspirent-elles ?",
          o: ["Margaret Thatcher et le renouveau du libéralisme", "Les partis communistes d’Europe occidentale", "Les défenseurs du New Deal et de l’État-providence", "Les planificateurs soviétiques et leur économie dirigée"], c: 0,
          e: "Dans les années 1930, c’est Keynes qui l’avait emporté dans leur débat." }
      ],
      duree: 6,
      html: `
<h3>Un Viennois contre la planification</h3>
<p>Friedrich Hayek (1899-1992) naît à Vienne, enseigne à Londres, Chicago et en Allemagne, et reçoit le prix Nobel en 1974. Toute sa vie, il défend la liberté économique contre ceux qui veulent diriger l’économie selon un plan. En 1947, il fonde au Mont-Pèlerin, au-dessus de Vevey, une association d’intellectuels libéraux qui existe toujours.</p>
${vieHayek}
<h3>Les prix, un système d’information</h3>
<p>Son idée la plus célèbre : personne ne peut connaître tout ce qu’il faudrait savoir pour diriger une économie. Les informations sont dispersées entre des millions de personnes. Les prix les transmettent : quand l’étain devient rare, son prix monte, et chacun l’économise sans même savoir pourquoi. Un planificateur central ne pourrait jamais faire aussi bien.</p>
${etain}
<h3>Un adversaire de Keynes</h3>
<p>Dans les années 1930, Hayek débat avec <a href="#eco-keynes">Keynes</a> sur les causes des crises. Keynes l’emporte alors. Mais à partir des années 1970, les idées de Hayek inspirent Margaret Thatcher et le renouveau du libéralisme. Elles restent très discutées, notamment sur la justice sociale et les crises financières.</p>
<h3>À retenir</h3>
<p>Pour Hayek, la société est trop complexe pour être planifiée. Le portrait complet présente sa vie, ses livres, ses combats et ses critiques.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Vienne à Londres, Chicago, Fribourg et au prix Nobel.",
      epoque: "La Vienne d’après 1918 et le triomphe de la planification.",
      pensee: "Sept étapes, de la théorie des cycles à la monnaie concurrentielle.",
      livres: "De Prix et production à La Présomption fatale.",
      cas: "Le Mont-Pèlerin, la controverse avec Keynes, le Chili, Thatcher.",
      objections: "Keynes, la servitude qui n’est pas venue, la justice sociale, les défaillances des marchés.",
      ecoles: "Menger et Mises, Friedman, Buchanan, les néo-autrichiens, Ostrom, Vernon Smith.",
      source: "La Présomption fatale : combien les hommes savent peu.",
      quiz: "Cinq questions corrigées et une question sur le fédéralisme suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
