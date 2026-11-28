/* Œconomia — portraits longs, lot 3 (b) : John Stuart Mill, Vilfredo Pareto */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const box = (x, y, w, h, t, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + 26}" text-anchor="middle" style="fill:${c}; font:700 13.5px Manrope, sans-serif">${t}</text>`;

  /* =====================================================================
     JOHN STUART MILL
     ===================================================================== */
  const vieMill = lifeline(1806, 1873, [
    [1806, "naissance à Londres", true], [1823, "Compagnie des Indes", false], [1826, "crise mentale", true], [1830, "rencontre Harriet Taylor", false],
    [1848, "Principes d’économie politique", true], [1859, "De la liberté", false], [1865, "député de Westminster", true], [1869, "L’Asservissement des femmes", false]
  ], "John Stuart Mill, 1806-1873", "Éduqué par son père comme un prodige, employé pendant trente-cinq ans à la Compagnie des Indes orientales, Mill est à la fois économiste, logicien, philosophe et homme politique. Il meurt à Avignon, où il s’était installé près de la tombe de sa femme Harriet.");

  const lois = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>La distinction de Mill (Principes, 1848, livre II)</text>`;
    s += box(20, 46, 290, 150, "Lois de la production", "var(--note)") + box(330, 46, 290, 150, "Lois de la répartition", "var(--plum)");
    ["semblables à des vérités physiques", "rendements décroissants de la terre,", "productivité, accumulation du capital", "on ne peut pas les changer à volonté"].forEach((t, i) => (s += `<text x="40" y="${96 + i * 22}" ${S}>${t}</text>`));
    ["« une affaire d’institution humaine »", "propriété, héritage, impôts, coutumes", "elles varient selon les sociétés", "on peut les réformer"].forEach((t, i) => (s += `<text x="350" y="${96 + i * 22}" ${S}>${t}</text>`));
    s += `<text x="20" y="232" ${S}>Une fois les choses produites, la société peut en disposer comme elle l’entend : la répartition est un choix politique.</text>`;
    return s;
  })(), "Cette distinction, controversée, fonde le réformisme de Mill : on ne peut pas abolir la rareté, mais on peut changer le droit de propriété, l’héritage, la fiscalité ou encourager les coopératives. Marx et les économistes ultérieurs ont contesté qu’on puisse séparer aussi nettement production et répartition.", "Deux colonnes : lois de la production et lois de la répartition");

  const harm = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>Le principe de non-nuisance (De la liberté, 1859)</text>`;
    s += box(20, 46, 290, 140, "Ce qui ne concerne que soi", "var(--note)") + box(330, 46, 290, 140, "Ce qui nuit à autrui", "var(--serial)");
    ["pensée, opinion, expression", "goûts, mode de vie, religion", "s’associer librement", "liberté absolue, même contre son bien"].forEach((t, i) => (s += `<text x="40" y="${94 + i * 22}" ${S}>${t}</text>`));
    ["la société peut intervenir", "par la loi ou par l’opinion", "pour protéger les autres", "et seulement pour cela"].forEach((t, i) => (s += `<text x="350" y="${94 + i * 22}" ${S}>${t}</text>`));
    s += `<text x="20" y="222" ${S}>Contraindre quelqu’un « pour son propre bien » n’est pas une raison suffisante, sauf pour les enfants.</text>`;
    return s;
  })(), "Le critère central de De la liberté. Mill l’applique à la liberté d’expression, qu’il défend presque sans limite, et à la vie privée. En économie, il en tire une présomption en faveur du laissez-faire, avec des exceptions pour l’éducation, le travail des enfants et les biens que le marché ne fournit pas.", "Deux colonnes : actions personnelles et actions nuisibles à autrui");

  OEC.portraits["mill"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "John Stuart Mill (1806-1873), philosophe et économiste anglais, a réalisé la grande synthèse de l’économie classique dans ses Principes d’économie politique (1848), le manuel de référence pendant un demi-siècle. Il est aussi l’un des plus grands penseurs libéraux, auteur de De la liberté (1859).",
      "Économiste réformateur, il distingue les lois de la production, quasi physiques, et celles de la répartition, qui dépendent des institutions. Il défend les coopératives ouvrières, la taxation des héritages et de la rente foncière, et imagine un « état stationnaire » où l’humanité se consacrerait à autre chose qu’à l’accumulation.",
      "Député, il est le premier à proposer au Parlement britannique le droit de vote des femmes, en 1867. Son œuvre réunit économie, éthique utilitariste, logique et défense des libertés individuelles."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>John Stuart Mill naît à Londres le 20 mai 1806. Son père, James Mill, philosophe et économiste, ami de Jeremy Bentham et de <a href="#eco-ricardo">Ricardo</a>, décide d’en faire un prodige et l’éduque lui-même, sans école ni camarades. L’enfant apprend le grec à trois ans, le latin à huit, lit Platon, Hérodote et la logique d’Aristote avant douze ans, et étudie l’économie politique à treize ans, en résumant chaque jour à son père les leçons tirées de Ricardo. Il passe un an en France, chez le frère de Bentham, et en garde un attachement durable à la culture française.</p>
<p>À dix-sept ans, il entre à la Compagnie des Indes orientales, où il travaille pendant trente-cinq ans, jusqu’en 1858, quand la Couronne retire à la compagnie le gouvernement de l’Inde. À vingt ans, en 1826, il traverse une profonde crise mentale : il se demande si la réalisation de toutes les réformes qu’on lui a appris à désirer le rendrait heureux, et répond non. Il en sort par la poésie, notamment celle de Wordsworth, et par la découverte des sentiments, que son éducation avait négligés.</p>
${vieMill}
<p>En 1830, il rencontre Harriet Taylor, femme mariée, intellectuelle brillante, avec qui il entretient pendant vingt ans une amitié intime et une collaboration étroite. Ils se marient en 1851, deux ans après la mort du mari d’Harriet. Mill publie le Système de logique (1843), les Principes d’économie politique (1848), puis, après la mort d’Harriet à Avignon en 1858, De la liberté (1859), qu’il lui dédie, L’Utilitarisme (1861) et Considérations sur le gouvernement représentatif (1861). Élu député de Westminster en 1865, il siège jusqu’en 1868. Il meurt à Avignon le 7 mai 1873.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Mill vit l’apogée de la révolution industrielle britannique. Le pays devient l’atelier du monde, le libre-échange triomphe avec l’abolition des Corn Laws en 1846, la richesse s’accroît. Mais les conditions de vie des ouvriers restent dures, et les années 1840, surnommées les « années de la faim », connaissent la famine irlandaise et l’agitation chartiste. 1848 est l’année des révolutions en Europe, et du Manifeste de <a href="#eco-marx">Marx</a> et Engels, publié la même année que les Principes de Mill.</p>
<p>L’économie politique classique, celle de <a href="#eco-smith">Smith</a>, de Ricardo et de <a href="#eco-malthus">Malthus</a>, est alors critiquée de toutes parts : par les socialistes, par les romantiques comme Thomas Carlyle, qui l’appelle la « science lugubre », par les conservateurs. Mill veut la défendre en la rendant plus humaine, et en montrant qu’elle est compatible avec de profondes réformes sociales.</p>
<p>Il est aussi marqué par la pensée française : les saint-simoniens, Auguste Comte, avec qui il correspond, et Alexis de Tocqueville, dont il admire De la démocratie en Amérique et dont il retient la crainte d’une « tyrannie de la majorité ».</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’utilitarisme revisité</h4>
<p><b>La question.</b> Tous les plaisirs se valent-ils ?</p>
<p><b>Son raisonnement.</b> Élevé dans l’utilitarisme de Bentham, pour qui le bien est ce qui maximise le bonheur du plus grand nombre, Mill le transforme. Il distingue des plaisirs supérieurs, intellectuels et moraux, et des plaisirs inférieurs. Le bonheur ne se mesure pas seulement à la quantité de plaisir.</p>
<p><b>Un exemple.</b> « Il vaut mieux être un humain insatisfait qu’un porc satisfait ; mieux vaut être Socrate insatisfait qu’un imbécile satisfait », écrit-il dans L’Utilitarisme (1861). Mill parle d’expérience. À vingt ans, après une éducation tout entière tournée vers le calcul, il traverse une grave dépression, dont il sort peu à peu, notamment grâce à la poésie de Wordsworth.</p>
<h4>2. Une science abstraite et hypothétique</h4>
<p><b>La question.</b> Peut-on étudier l’homme comme s’il ne voulait que s’enrichir ?</p>
<p><b>Son raisonnement.</b> Oui, à condition de savoir ce qu’on fait. Mill définit l’économie politique comme la science qui étudie l’homme en tant qu’être qui désire posséder la richesse, en laissant de côté ses autres motivations. Ses conclusions sont donc vraies « dans l’abstrait », sous conditions, et doivent être corrigées avant d’être appliquées. C’est l’origine de l’« homo œconomicus ».</p>
<p><b>Un exemple.</b> Un physicien calcule la chute des corps comme si l’air n’existait pas. Le résultat est juste pour une pierre, faux pour une plume. De même, la prédiction de l’économiste vaut d’autant mieux que l’intérêt pécuniaire domine la situation étudiée.</p>
<p><a href="#c-aversion-pertes">Pour aller plus loin, la notice « Aversion aux pertes », qui montre où l’homme économique se trompe →</a></p>
<h4>3. Production et répartition</h4>
<p><b>La question.</b> Les inégalités sont-elles une loi de la nature ?</p>
<p><b>Son raisonnement.</b> Non, répond Mill dans ses Principes (1848). Les lois de la production tiennent à la nature des choses, mais celles de la répartition dépendent des institutions humaines, que la société peut réformer. C’est l’idée centrale de son réformisme.</p>
<p><b>Un exemple.</b> Ce qu’un champ peut produire dépend du sol, du climat et des techniques. La façon de partager la récolte entre le fermier et le propriétaire dépend des lois, des contrats et des coutumes, que l’on peut changer.</p>
<p><a href="#c-r-g">Pour aller plus loin, la notice « r > g », qui reprend la question de la répartition au XXIe siècle →</a></p>
${lois}
<h4>4. La propriété, l’héritage et la terre</h4>
<p><b>La question.</b> Toute richesse est-elle méritée ?</p>
<p><b>Son raisonnement.</b> Mill défend la propriété privée comme garantie des fruits du travail, mais pas l’héritage illimité. Il propose de plafonner ce que chacun peut recevoir par héritage, pour que la richesse se répartisse entre plus de mains. Il propose aussi de taxer l’« accroissement non gagné » de la valeur du sol, dû au développement de la société et non au travail du propriétaire.</p>
<p><b>Un exemple.</b> Les grands propriétaires fonciers, écrit Mill, s’enrichissent pour ainsi dire en dormant, sans travailler ni risquer quoi que ce soit, simplement parce que la ville grandit autour de leurs terrains.</p>
<p><a href="#c-rente">Pour aller plus loin, la notice « Rente différentielle » →</a></p>
<h4>5. Les coopératives</h4>
<p><b>La question.</b> Le salariat est-il la seule façon d’organiser le travail ?</p>
<p><b>Son raisonnement.</b> Mill observe avec intérêt les associations ouvrières et les coopératives en France et en Angleterre. Il pense que l’avenir appartient à des associations de travailleurs, propriétaires ensemble de leur capital et élisant leurs dirigeants, en concurrence les unes avec les autres. C’est une voie entre le capitalisme salarial et le socialisme d’État.</p>
<p><b>Un exemple.</b> Il cite les associations ouvrières nées à Paris après la révolution de 1848. Les coopératives de travailleurs existent toujours, comme le groupe Mondragon au Pays basque, fondé en 1956, qui emploie des dizaines de milliers de personnes, dont une grande partie sont sociétaires. Les coopératives de consommateurs, comme Migros et Coop en Suisse, appartiennent à leurs clients et non à leurs employés.</p>
<h4>6. L’état stationnaire</h4>
<p><b>La question.</b> Une économie doit-elle croître toujours ?</p>
<p><b>Son raisonnement.</b> À la différence de ses prédécesseurs, qui le redoutaient, Mill accueille favorablement l’« état stationnaire », où le capital et la population cesseraient de croître. L’humanité pourrait alors se consacrer à la culture, aux relations humaines et à la nature, plutôt qu’à la course à la richesse.</p>
<p><b>Un exemple.</b> Il dit ne pas souhaiter un monde où chaque arpent serait cultivé, chaque fleur sauvage arrachée et chaque animal non domestique exterminé. Ce chapitre est souvent cité par les penseurs de l’écologie et de la décroissance.</p>
<p><a href="#c-pib">Pour aller plus loin, la notice « PIB et ses limites » →</a></p>
<h4>7. Le principe de non-nuisance</h4>
<p><b>La question.</b> Jusqu’où la société peut-elle contraindre un individu ?</p>
<p><b>Son raisonnement.</b> Dans De la liberté (1859), Mill pose un principe simple. La société ne peut contraindre un individu que pour l’empêcher de nuire à autrui. Il défend une liberté presque absolue d’opinion et d’expression, car la vérité ne s’établit que dans la confrontation des idées. En économie, il défend une présomption en faveur du laissez-faire, avec de nombreuses exceptions, l’éducation, la protection des enfants, les biens publics ou les industries naissantes.</p>
<p><b>Un exemple.</b> Selon ce principe, on peut interdire de fumer dans un restaurant, parce que la fumée gêne les autres clients, mais pas dans son propre jardin, où l’on ne nuit qu’à soi-même.</p>
<p><a href="#c-externalite">Pour aller plus loin, la notice « Externalité » →</a></p>
${harm}` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Système de logique (1843).</b> Un traité de logique et de méthode scientifique, qui le rend célèbre, et dont le livre VI porte sur la méthode des sciences sociales.</p>
<p><b>Principes d’économie politique (1848).</b> La grande synthèse de l’économie classique, enrichie de réflexions sociales, révisée jusqu’en 1871. Les chapitres sur la propriété, sur l’avenir probable des classes laborieuses et sur l’état stationnaire sont les plus originaux.</p>
<p><b>De la liberté (1859).</b> L’un des textes fondateurs du libéralisme politique, sur la liberté de pensée, l’individualité et les limites du pouvoir de la société sur l’individu.</p>
<p><b>L’Utilitarisme (1861).</b> Une défense et une reformulation de la morale utilitariste.</p>
<p><b>L’Asservissement des femmes (1869).</b> Un plaidoyer pour l’égalité complète des sexes, écrit en partie avec Harriet Taylor et sa fille Helen, très en avance sur son temps.</p>
<p><b>Autobiographie (1873).</b> Le récit de son éducation extraordinaire, de sa crise et de sa collaboration avec Harriet, un classique de la littérature anglaise.</p>` }
    ],
    cas: [
      { titre: "Le droit de vote des femmes, 1867", html: `
<p>Élu député de Westminster en 1865 sur un programme qui inclut le suffrage féminin, Mill dépose le 20 mai 1867 un amendement à la réforme électorale, proposant de remplacer le mot « homme » par « personne ». C’est la première fois que la question est débattue au Parlement britannique. L’amendement est rejeté par 196 voix contre 73, mais il lance le mouvement pour le suffrage des femmes. Les Britanniques obtiendront le droit de vote en 1918 et 1928.</p>` },
      { titre: "La crise de 1826", html: `
<p>Dans son Autobiographie, Mill raconte que, à l’automne 1826, il s’est soudain demandé : « Supposons que tous les objets de ta vie soient réalisés, que toutes les réformes que tu désires soient accomplies, cela te procurerait-il une grande joie, un grand bonheur ? » Une voix intérieure répond non, et il sombre dans une longue dépression. Il en sort en lisant les mémoires de Marmontel et la poésie de Wordsworth. Il en tire une conviction durable : le bonheur ne se trouve pas en le visant directement, et l’éducation doit cultiver les sentiments autant que l’analyse.</p>` },
      { titre: "Le revirement sur le fonds des salaires", html: `
<p>Les économistes classiques, Mill compris, soutenaient la doctrine du « fonds des salaires » : la somme destinée à payer les salaires étant fixée à l’avance, les syndicats ne pouvaient augmenter les salaires des uns qu’au détriment des autres. En 1869, dans un article sur un livre de William Thornton, Mill reconnaît publiquement que cette doctrine est fausse. Ce revirement, rare chez un économiste aussi influent, ouvre la voie à une vision plus favorable aux syndicats.</p>` },
      { titre: "L’employé de la Compagnie des Indes", html: `
<p>Pendant trente-cinq ans, Mill rédige la correspondance de la Compagnie des Indes orientales avec les États princiers de l’Inde. Ce penseur de la liberté défend pourtant la domination britannique sur l’Inde, au nom d’un « despotisme » éclairé jugé légitime pour des peuples considérés comme non encore prêts à se gouverner eux-mêmes. Cette contradiction est aujourd’hui au cœur des critiques adressées au libéralisme du XIXe siècle.</p>` }
    ],
    objections: `
<h4>1. Production et répartition inséparables</h4>
<p><a href="#eco-marx">Marx</a> et, plus tard, les économistes néoclassiques jugent artificielle la séparation de Mill : la manière dont on répartit les revenus influence les incitations à produire, et les rapports de production déterminent la répartition.</p>
<h4>2. L’homo œconomicus</h4>
<p>La définition de l’économie par un être qui ne désire que la richesse, même présentée par Mill comme une abstraction, a été critiquée par l’économie comportementale et par la sociologie, qui montrent la diversité des motivations humaines.</p>
<h4>3. Le paternalisme impérial</h4>
<p>Les historiens du colonialisme soulignent la contradiction entre sa défense de la liberté en Europe et sa justification du despotisme britannique en Inde, au nom du progrès de peuples jugés « arriérés ».</p>
<h4>4. Libéral ou socialiste ?</h4>
<p>Les libéraux lui reprochent ses concessions au socialisme, les socialistes sa défense de la propriété et de la concurrence. Mill se qualifiait lui-même, à la fin de sa vie, de « socialiste » au sens où il espérait une société de coopératives, ce qui reste discuté.</p>`,
    ecoles: `
<p><b>James Mill</b>, <b>Bentham</b> et <b><a href="#eco-ricardo">Ricardo</a></b> forment sa pensée de jeunesse.</p>
<p><b><a href="#eco-marshall">Marshall</a></b> part de ses Principes pour bâtir l’économie néoclassique anglaise.</p>
<p><b>Les fabiens</b> et le travaillisme britannique reprennent son réformisme social.</p>
<p><b>Les libéraux politiques</b>, d’Isaiah Berlin à John Rawls, discutent son principe de non-nuisance.</p>
<p><b>Les économistes de l’environnement</b> et de la décroissance redécouvrent l’état stationnaire.</p>
<p><b>Le mouvement féministe</b> fait de L’Asservissement des femmes un texte fondateur.</p>`,
    source: {
      titre: "John Stuart Mill, De la liberté, 1859, chapitre 1",
      texte: "La seule raison légitime que puisse avoir une communauté civilisée d’user de la force contre un de ses membres, contre sa propre volonté, est de l’empêcher de nuire aux autres. Son propre bien, physique ou moral, ne constitue pas une justification suffisante.",
      notes: `
<p><b>Le principe de non-nuisance.</b> Mill appelle ce principe « un principe très simple ». Il vise autant le pouvoir de l’État que celui de l’opinion publique, qu’il juge souvent plus oppressif, par sa capacité à imposer le conformisme.</p>
<p><b>Les exceptions.</b> Mill précise que le principe ne s’applique qu’aux adultes « dans la maturité de leurs facultés », et ni aux enfants, ni, selon lui, aux sociétés qu’il juge « arriérées ». Cette restriction est au cœur des critiques contemporaines.</p>
<p><b>Les usages actuels.</b> Le principe est invoqué dans les débats sur la liberté d’expression, la consommation de drogues, la vaccination ou les taxes sur le tabac, chacun discutant de ce qui relève de la nuisance à autrui.</p>`
    },
    quiz: [
      { q: "À quel âge Mill commence-t-il à apprendre le grec ?",
        o: ["Trois ans", "Huit ans", "Douze ans", "Seize ans"], c: 0,
        e: "Son père, James Mill, l’éduque lui-même comme un prodige." },
      { q: "Quelle distinction Mill fait-il dans ses Principes ?",
        o: ["Entre les biens matériels durables et les services immatériels rendus", "Entre les lois de la production, quasi physiques, et celles de la répartition", "Entre le court terme, où tout varie, et le long terme, où tout s’ajuste", "Entre la monnaie, qui circule, et le crédit, qui permet d’investir"], c: 1,
        e: "La répartition est un choix de société, donc réformable." },
      { q: "Comment Mill voit-il l’« état stationnaire » ?",
        o: ["Comme une catastrophe, qui condamne la société à la misère", "Comme une perspective favorable, qui libère du souci d’accumuler", "Comme une idée irréalisable, que le progrès technique écarte", "Comme une période de chômage massif, qui détruit les emplois"], c: 1,
        e: "Contrairement à Ricardo, qui le redoutait." },
      { q: "Que propose Mill au Parlement en 1867 ?",
        o: ["L’abolition de l’esclavage", "Le droit de vote des femmes", "L’impôt progressif sur le revenu", "L’indépendance de l’Inde"], c: 1,
        e: "Son amendement est rejeté par 196 voix contre 73." },
      { q: "Selon le principe de non-nuisance, quand la société peut-elle contraindre un individu ?",
        o: ["Pour son propre bien, s’il risque de se faire du mal", "Pour l’empêcher de nuire aux autres membres de la société", "Quand la majorité des citoyens le décide par un vote public", "Chaque fois qu’une loi du pays le prévoit"], c: 1,
        e: "Son propre bien n’est pas une justification suffisante." }
    ],
    ouverte: {
      q: "Les Suisses n’ont accordé le droit de vote aux femmes au niveau fédéral qu’en 1971, plus d’un siècle après l’amendement de Mill. Comment expliquer ce retard dans une démocratie aussi ancienne ?",
      r: "Le retard suisse tient en grande partie à la démocratie directe elle-même : le droit de vote des femmes nécessitait une modification de la Constitution, et donc l’accord des électeurs, tous des hommes. Une première votation, en 1959, est rejetée par deux tiers des votants ; il faut attendre 1971 pour qu’elle soit acceptée, et 1990 pour que le Tribunal fédéral impose le suffrage féminin au canton d’Appenzell Rhodes-Intérieures. Mill aurait vu dans cet épisode une illustration de sa crainte de la « tyrannie de la majorité » : une majorité peut maintenir une minorité, ou ici la moitié de la population, hors de la vie politique. Il aurait aussi souligné le rôle de l’opinion et des coutumes, qu’il jugeait souvent plus puissantes que la loi. Mais il aurait reconnu que le changement, une fois accepté par le peuple, gagne en légitimité. Le cas suisse montre que la démocratie directe peut à la fois retarder et consolider les réformes."
    },
    lectures: [
      ["Accessible", "John Stuart Mill, De la liberté, 1859."],
      ["Accessible", "Richard Reeves, John Stuart Mill: Victorian Firebrand, 2007."],
      ["Intermédiaire", "John Stuart Mill, Autobiographie, 1873."],
      ["Intermédiaire", "John Stuart Mill, Principes d’économie politique (1848), livre II, chapitre 1, et livre IV, chapitres 6 et 7."],
      ["Recherche", "John Stuart Mill, « On the Definition of Political Economy », 1836 ; Samuel Hollander, The Economics of John Stuart Mill, 1985."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Mill, qu’est-ce qui dépend des choix de la société ?",
          o: ["Le partage des richesses", "Les lois de la production", "Le climat", "La quantité de terres disponibles"], c: 0,
          e: "On peut taxer les héritages ou encourager les coopératives ouvrières." },
        { q: "Quelle société Mill imagine-t-il ?",
          o: ["Une société qui cesse de croître pour se tourner vers la culture", "Une société où l’État planifie la production de chaque entreprise", "Une société sans propriété privée, où tout appartient à tous", "Une société dont la production augmente chaque année plus vite"], c: 0,
          e: "C’est son « état stationnaire », vu comme une perspective favorable." }
      ],
      duree: 6,
      html: `
<h3>Un enfant prodige devenu penseur de la liberté</h3>
<p>John Stuart Mill (1806-1873) apprend le grec à trois ans, éduqué par son père, un philosophe ami de Ricardo. À vingt ans, il traverse une grave dépression et découvre l’importance des sentiments. Il devient l’un des plus grands penseurs du XIXe siècle, à la fois économiste, philosophe et député.</p>
${vieMill}
<h3>Un économiste réformateur</h3>
<p>Dans ses Principes d’économie politique (1848), Mill explique que la production obéit à des lois presque physiques, mais que le partage des richesses dépend des choix de la société : on peut taxer les héritages, encourager les coopératives ouvrières, imposer la hausse de valeur des terrains. Il imagine même une société qui cesserait de croître pour se consacrer à la culture et à la nature.</p>
<h3>La liberté</h3>
<p>Dans De la liberté (1859), il pose un principe simple : on ne peut contraindre quelqu’un que pour l’empêcher de nuire aux autres, jamais « pour son propre bien ». Député, il propose en 1867 le droit de vote des femmes au Parlement britannique, une première.</p>
${harm}
<h3>À retenir</h3>
<p>Mill a uni économie, morale et défense des libertés. Le portrait complet présente sa vie, ses livres et ses contradictions.</p>`,
      quiz: [1, 3]
    },
    resumes: {
      vie: "De l’éducation de prodige à la Compagnie des Indes, Harriet Taylor et le Parlement.",
      epoque: "L’Angleterre victorienne, 1848 et les critiques de l’économie classique.",
      pensee: "Sept étapes, de l’utilitarisme revisité au principe de non-nuisance.",
      livres: "De la Logique aux Principes, à De la liberté et à L’Asservissement des femmes.",
      cas: "Le vote des femmes, la crise de 1826, le fonds des salaires, la Compagnie des Indes.",
      objections: "Production et répartition, l’homo œconomicus, le paternalisme impérial, libéral ou socialiste.",
      ecoles: "James Mill et Bentham, Marshall, les fabiens, Berlin et Rawls, les écologistes, les féministes.",
      source: "De la liberté : empêcher de nuire aux autres.",
      quiz: "Cinq questions corrigées et une question sur le vote des femmes en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     VILFREDO PARETO
     ===================================================================== */
  const viePareto = lifeline(1848, 1923, [
    [1848, "naissance à Paris", true], [1870, "ingénieur à Turin", false], [1880, "dirige des aciéries", true], [1893, "chaire de Lausanne", false],
    [1896, "Cours d’économie politique", true], [1906, "Manuel d’économie politique", false], [1916, "Traité de sociologie", true], [1923, "mort à Céligny", false]
  ], "Vilfredo Pareto, 1848-1923", "Ingénieur et directeur d’entreprise avant de devenir économiste, Pareto succède à Walras à Lausanne. Il passe ses dernières années à Céligny, au bord du Léman, entouré de ses chats, dans une villa qu’il appelle « Villa Angora ».");

  const loi = fig(300, (() => {
    const L = 90, R = 580, Top = 50, B = 240, X = (v) => L + v * (R - L) / 5, Y = (v) => B - v * (B - Top) / 5;
    let s = `<text x="20" y="24" ${T}>La loi de Pareto : une droite en échelles logarithmiques (schéma)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L + 6}" y="${Top - 4}" ${M}>log du nombre de personnes dont le revenu dépasse x</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>log du revenu x</text>`;
    const cols = ["var(--note)", "var(--plum)", "var(--gold)"], off = [0, 0.25, -0.25];
    cols.forEach((c, k) => { for (let i = 0; i < 9; i++) { const xv = 0.5 + i * 0.5, yv = 4.6 - 0.95 * xv + off[k] + (((i * 7 + k * 3) % 5) - 2) * 0.05; s += `<circle cx="${X(xv)}" cy="${Y(yv)}" r="4" style="fill:${c}"/>`; } });
    s += `<line x1="${X(0.3)}" y1="${Y(4.6 - 0.95 * 0.3)}" x2="${X(4.8)}" y2="${Y(4.6 - 0.95 * 4.8)}" style="stroke:var(--ink-soft); stroke-dasharray:5 4"/>`;
    s += `<text x="${X(2.6)}" y="${Y(3.2)}" ${S}>Angleterre, Prusse, villes italiennes :</text><text x="${X(2.6)}" y="${Y(3.2) + 16}" ${S}>des pentes voisines, autour de 1,5</text>`;
    s += `<text x="20" y="282" ${S}>Peu de personnes ont de très hauts revenus, beaucoup ont des revenus modestes, selon une loi de puissance.</text>`;
    return s;
  })(), "En étudiant les statistiques fiscales de plusieurs pays et époques, Pareto observe que la distribution des hauts revenus suit une loi de puissance : en échelles logarithmiques, les points s’alignent sur une droite de pente voisine. Il en conclut, de façon contestée, que l’inégalité serait à peu près constante. Points illustratifs.", "Nuages de points alignés sur une droite descendante");

  const optimum = fig(300, (() => {
    const L = 90, R = 520, Top = 50, B = 250;
    let s = `<text x="20" y="24" ${T}>L’optimum de Pareto : deux personnes se partagent des ressources (schéma)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>Bob</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>Alice</text>`;
    s += `<path d="M ${L} ${Top + 10} Q ${L + 330} ${Top + 30}, ${R - 20} ${B}" style="fill:none; stroke:var(--plum); stroke-width:2.6"/>`;
    s += `<text x="${L + 300}" y="${Top + 12}" style="fill:var(--plum); font:700 12px Manrope, sans-serif">frontière : situations optimales</text>`;
    s += `<circle cx="${L + 140}" cy="${B - 80}" r="6" style="fill:var(--serial)"/><text x="${L + 128}" y="${B - 70}" text-anchor="end" ${S}>A : on peut faire mieux</text>`;
    s += arrow(L + 146, B - 86, L + 215, B - 140, "var(--serial)");
    s += `<circle cx="${L + 222}" cy="${B - 146}" r="6" style="fill:var(--note)"/><text x="${L + 232}" y="${B - 170}" ${S}>B : optimal</text>`;
    s += `<circle cx="${R - 60}" cy="${B - 60}" r="6" style="fill:var(--note)"/><text x="${R - 70}" y="${B - 50}" text-anchor="end" ${S}>C : optimal aussi, mais très inégal</text>`;
    s += `<text x="20" y="286" ${S}>Passer de A à B améliore le sort de chacun : c’est une amélioration de Pareto. B et C sont optimaux, mais différents.</text>`;
    return s;
  })(), "Une situation est optimale au sens de Pareto si l’on ne peut améliorer le sort de quelqu’un sans détériorer celui d’un autre. Le critère ne dit rien de la justice : une répartition très inégale peut être optimale. C’est l’une des notions les plus utilisées de l’économie du bien-être (voir optimum de Pareto).", "Frontière des utilités possibles avec trois points");

  OEC.portraits["pareto"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Vilfredo Pareto (1848-1923), ingénieur italien devenu économiste et sociologue, succède à Walras à Lausanne en 1893. Il donne son nom à l’optimum de Pareto, critère central de l’économie du bien-être, et à la loi de Pareto sur la répartition des revenus.",
      "Il refonde la théorie du choix du consommateur sur des courbes d’indifférence et une utilité simplement ordinale, débarrassant l’économie de l’hypothèse d’une utilité mesurable. Ses travaux sont à la base de la microéconomie moderne.",
      "Déçu par la politique et par la rationalité humaine, il se tourne vers la sociologie : son Traité (1916) étudie les actions non logiques et la « circulation des élites ». Ses dernières années, marquées par une sympathie initiale pour le fascisme, restent controversées."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Vilfredo Pareto naît à Paris le 15 juillet 1848, d’un père noble génois, ingénieur exilé pour ses idées républicaines mazziniennes, et d’une mère française. La famille rentre en Italie vers 1858. Pareto étudie les mathématiques et la physique, puis l’ingénierie à l’École polytechnique de Turin, où il soutient en 1870 une thèse sur l’équilibre des corps solides. Il devient ingénieur des chemins de fer, puis directeur d’une société sidérurgique à San Giovanni Valdarno, en Toscane.</p>
<p>Homme d’affaires, il est aussi un militant libéral ardent, défenseur du libre-échange, adversaire du protectionnisme, du militarisme et de la corruption du gouvernement italien. Il échoue aux élections législatives et publie des articles polémiques. Son ami l’économiste Maffeo Pantaleoni lui fait découvrir l’œuvre de <a href="#eco-walras">Walras</a> et l’économie mathématique.</p>
${viePareto}
<p>En 1893, sur la recommandation de Walras, il est nommé à la chaire d’économie politique de l’université de Lausanne. Il publie le Cours d’économie politique (1896-1897), puis le Manuel d’économie politique (1906 en italien, 1909 en français). En 1898, un héritage le rend riche ; il s’installe à Céligny, sur la rive genevoise du Léman. Sa femme, une Russe, le quitte en 1901 ; il vit ensuite avec Jeanne Régis, qu’il épouse peu avant sa mort. Il se consacre de plus en plus à la sociologie et publie en 1916 le Traité de sociologie générale. En 1923, le gouvernement de Mussolini le nomme sénateur du royaume d’Italie. Il meurt à Céligny le 19 août 1923.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Pareto vit l’unification de l’Italie, puis la vie politique agitée du jeune royaume : protectionnisme, scandales bancaires, crises sociales, aventures coloniales. Libéral convaincu, il assiste avec amertume à la montée du protectionnisme et de l’étatisme en Europe, puis à la Première Guerre mondiale et aux révolutions qui la suivent.</p>
<p>En économie, il hérite du système d’équilibre général de Walras, qu’il veut rendre plus général et plus rigoureux. Il cherche à fonder l’économie sur des choix observables, sans supposer que l’on puisse mesurer le plaisir ou la satisfaction, une hypothèse qu’il juge métaphysique.</p>
<p>Sa trajectoire intellectuelle suit sa désillusion politique. Convaincu au départ que la raison et la science pouvaient guider les sociétés, il finit par penser que les actions humaines sont largement guidées par des sentiments et des croyances non logiques, que les élites manipulent et que les théories rationalisent après coup.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’équilibre général</h4>
<p><b>La question.</b> Comment décrire une économie où tout dépend de tout ?</p>
<p><b>Son raisonnement.</b> Pareto reprend et généralise le système de Walras. Il le présente de manière plus élégante et insiste sur l’interdépendance de tous les phénomènes économiques, qu’il compare aux systèmes de la mécanique, où chaque pièce agit sur toutes les autres.</p>
<p><b>Un exemple.</b> Ingénieur des chemins de fer devenu économiste, Pareto succède à Walras en 1893 à l’université de Lausanne. À eux deux, ils forment ce qu’on appellera l’école de Lausanne.</p>
<p><a href="#c-equilibre-general">Pour aller plus loin, la notice « Équilibre général » →</a></p>
<h4>2. La loi de répartition des revenus</h4>
<p><b>La question.</b> Les inégalités de revenus suivent-elles une loi ?</p>
<p><b>Son raisonnement.</b> Dans le Cours d’économie politique (1896-1897), Pareto étudie les statistiques fiscales de nombreux pays et époques et observe une régularité. Les hauts revenus se répartissent selon une même forme mathématique, une loi de puissance. Il en conclut que l’inégalité dépend peu des institutions, une conclusion très contestée depuis.</p>
<p><b>Un exemple.</b> Sa découverte a donné son nom au « principe de Pareto », popularisé dans les années 1940, selon lequel une petite partie des causes produit l’essentiel des effets, par exemple 20 % des clients qui font 80 % du chiffre d’affaires. Pareto lui-même n’a jamais énoncé cette règle.</p>
<p><a href="#c-courbe-kuznets">Pour aller plus loin, la notice « Courbe de Kuznets », qui pense au contraire que les inégalités évoluent →</a></p>
${loi}
<h4>3. Les courbes d’indifférence et l’utilité ordinale</h4>
<p><b>La question.</b> Faut-il mesurer le plaisir pour expliquer les choix ?</p>
<p><b>Son raisonnement.</b> Reprenant un outil de l’Irlandais Francis Edgeworth, Pareto décrit les préférences par des courbes d’indifférence, des combinaisons de biens entre lesquelles le consommateur ne fait pas de différence. Il montre qu’il suffit de savoir classer les préférences, sans mesurer l’utilité. Cette « utilité ordinale » fonde la théorie moderne du consommateur.</p>
<p><b>Un exemple.</b> Il suffit de savoir que vous préférez deux cafés et un croissant à un café et deux croissants. Personne n’a besoin de savoir de combien, ni de mesurer votre plaisir en unités.</p>
<p><a href="#c-utilite-marginale">Pour aller plus loin, la notice « Utilité marginale » →</a></p>
<h4>4. L’optimum</h4>
<p><b>La question.</b> Quand une situation est-elle efficace ?</p>
<p><b>Son raisonnement.</b> Pareto appelle optimale une situation où l’on ne peut améliorer la satisfaction de quelqu’un sans diminuer celle d’un autre. Il soutient que la libre concurrence conduit à un tel état, ce que d’autres démontreront rigoureusement au XXe siècle. Ce critère ne compare pas les satisfactions entre personnes et ne dit rien de la justice de la répartition.</p>
<p><b>Un exemple.</b> Deux enfants se partagent des billes et des images. Si l’un préfère les images et l’autre les billes, un échange rend les deux plus contents, la situation n’était donc pas optimale. Mais un partage où l’un a tout et l’autre rien est aussi un optimum, puisqu’on ne peut rien donner au second sans prendre au premier.</p>
<p><a href="#c-optimum-pareto">Pour aller plus loin, la notice « Optimum de Pareto » →</a></p>
${optimum}
<h4>5. Les actions non logiques</h4>
<p><b>La question.</b> Les gens agissent-ils toujours de façon logique ?</p>
<p><b>Son raisonnement.</b> Dans le Traité de sociologie générale (1916), Pareto distingue les actions logiques, où les moyens sont adaptés aux fins, et les actions non logiques, guidées par des sentiments. L’économie étudie les premières. La sociologie doit étudier les secondes, qui dominent la vie sociale et politique.</p>
<p><b>Un exemple.</b> Pareto prend l’exemple des marins grecs qui offraient des sacrifices à Poséidon avant de prendre la mer. Pour les marins, sacrifier et bien ramer étaient deux moyens tout aussi logiques d’arriver au port. Pour l’observateur, seul le second l’est.</p>
<p><a href="#c-aversion-pertes">Pour aller plus loin, la notice « Aversion aux pertes », sur les biais étudiés aujourd’hui par l’économie comportementale →</a></p>
<h4>6. Résidus et dérivations</h4>
<p><b>La question.</b> Pourquoi justifions-nous nos choix après coup ?</p>
<p><b>Son raisonnement.</b> Les actions non logiques reposent sur des « résidus », des sentiments et des instincts assez constants, comme le goût des combinaisons nouvelles ou l’attachement à ce qui existe. Elles sont ensuite justifiées par des « dérivations », des théories, des idéologies et des raisonnements qui donnent une apparence logique à ce qui ne l’est pas.</p>
<p><b>Un exemple.</b> Quelqu’un adopte une opinion politique par fidélité à son milieu, puis trouve des arguments pour la défendre. Pour Pareto, les arguments changent d’une époque à l’autre, mais les sentiments qui les inspirent restent les mêmes.</p>
<h4>7. La circulation des élites</h4>
<p><b>La question.</b> Qui gouverne vraiment ?</p>
<p><b>Son raisonnement.</b> Toute société est gouvernée par une élite, qui se renouvelle sans cesse. Les élites fondées sur la ruse et la combinaison, les « renards », alternent avec celles qui recourent à la force, les « lions ». Quand une élite cesse de se renouveler, elle est renversée. « L’histoire est un cimetière d’aristocraties », écrit-il.</p>
<p><b>Un exemple.</b> Le fascisme italien se réclamera de cette théorie, et Mussolini fait nommer Pareto sénateur en 1923, quelques mois avant sa mort. Les historiens discutent encore de ce que Pareto pensait vraiment du régime naissant.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Cours d’économie politique (1896-1897).</b> Ses leçons de Lausanne, rédigées en français, qui présentent l’équilibre général et la loi de répartition des revenus.</p>
<p><b>Les Systèmes socialistes (1902-1903).</b> Une étude critique des doctrines socialistes, qui annonce son intérêt pour les croyances et les idéologies.</p>
<p><b>Manuel d’économie politique (1906, traduction française de 1909).</b> Son ouvrage économique le plus influent, qui introduit l’utilité ordinale, les courbes d’indifférence et la notion d’optimum.</p>
<p><b>Traité de sociologie générale (1916).</b> Une somme de plus de deux mille pages, foisonnante et érudite, sur les actions non logiques, les résidus, les dérivations et les élites.</p>` }
    ],
    cas: [
      { titre: "La Villa Angora de Céligny", html: `
<p>Grâce à un héritage reçu en 1898, Pareto s’installe dans une villa à Céligny, petite commune genevoise enclavée en territoire vaudois, au bord du Léman. Il la baptise « Villa Angora », en raison des nombreux chats angoras qu’il y élève. Il y vit retiré, recevant élèves et visiteurs, et y rédige son Traité de sociologie. Il y meurt en 1923 et est enterré au cimetière de Céligny. Ses archives sont aujourd’hui conservées en partie à l’université de Lausanne.</p>` },
      { titre: "La loi des 80/20", html: `
<p>Pareto aurait remarqué qu’environ 80 % des terres italiennes appartenaient à 20 % de la population, et que 20 % des cosses de pois de son jardin produisaient 80 % des pois. Dans les années 1940, l’ingénieur Joseph Juran, spécialiste de la qualité, popularise un « principe de Pareto » : une petite part des causes explique la plus grande part des effets. Ce principe, devenu un outil de gestion, est une vulgarisation assez libre de la loi de répartition de Pareto, qui ne mentionne pas ces chiffres précis.</p>` },
      { titre: "Pareto et le fascisme", html: `
<p>À la fin de sa vie, Pareto, hostile au parlementarisme et au socialisme, accueille avec une certaine sympathie l’arrivée au pouvoir de Mussolini en 1922, qui le nomme sénateur en 1923. Mussolini prétendra avoir suivi ses cours à Lausanne, où il vivait en exil vers 1902-1904, une affirmation difficile à vérifier. Pareto met pourtant en garde le régime : il réclame le maintien de la liberté de la presse, de l’enseignement et de la science. Il meurt quelques mois plus tard, avant la dérive dictatoriale du régime. Son rapport au fascisme reste débattu.</p>` },
      { titre: "Une succession à Lausanne", html: `
<p>En 1893, Walras, épuisé, recommande Pareto pour lui succéder. Les deux hommes partagent la théorie de l’équilibre général, mais pas les idées sociales : Pareto est un libéral intransigeant, hostile au projet de nationalisation des terres de Walras. Leurs relations se dégradent au fil des ans. Pareto n’en assure pas moins la continuité de l’école de Lausanne, qui attire des étudiants de toute l’Europe.</p>` }
    ],
    objections: `
<h4>1. L’optimum ne dit rien de la justice</h4>
<p>Le critère de Pareto est peu exigeant : une situation où une personne possède tout est optimale, puisqu’on ne peut améliorer le sort des autres sans réduire le sien. Amartya <a href="#eco-sen">Sen</a> souligne qu’un état peut être optimal au sens de Pareto et « parfaitement dégoûtant ».</p>
<h4>2. La loi des revenus n’est pas fixe</h4>
<p>Pareto concluait à une inégalité quasi constante. Les travaux de Thomas <a href="#eco-piketty">Piketty</a> et d’Emmanuel Saez montrent au contraire que le coefficient de Pareto varie fortement selon les pays et les époques, en fonction des institutions, de la fiscalité et des chocs historiques (<a href="#c-courbe-kuznets">voir courbe de Kuznets</a>).</p>
<h4>3. Une sociologie élitiste</h4>
<p>Sa théorie des élites, qui voit dans la démocratie une illusion, a été critiquée comme une justification des régimes autoritaires. Ses défenseurs y voient au contraire une analyse lucide du pouvoir, reprise par des politologues démocrates.</p>
<h4>4. Le paradoxe du libéral parétien</h4>
<p>Sen a démontré en 1970 qu’il est impossible de respecter à la fois le critère de Pareto et un minimum de libertés individuelles dans certains choix collectifs : le « paradoxe du libéral parétien ». Le critère de Pareto, apparemment anodin, entre en conflit avec d’autres valeurs.</p>`,
    ecoles: `
<p><b><a href="#eco-walras">Walras</a></b> est son prédécesseur à Lausanne ; <b>Edgeworth</b> lui fournit les courbes d’indifférence.</p>
<p><b>John Hicks</b> et <b>Roy Allen</b> (1934) reprennent l’utilité ordinale pour fonder la théorie moderne du consommateur.</p>
<p><b>Kenneth Arrow</b> et <b>Gérard Debreu</b> démontrent les théorèmes du bien-être fondés sur l’optimum de Pareto.</p>
<p><b><a href="#eco-sen">Amartya Sen</a></b> en critique les limites éthiques.</p>
<p><b>Les sociologues des élites</b>, comme Gaetano Mosca, Robert Michels et Raymond Aron, discutent sa théorie.</p>
<p><b>Les statisticiens des inégalités</b>, de Piketty à Saez, utilisent sa loi pour estimer les hauts revenus.</p>`,
    source: {
      titre: "Vilfredo Pareto, Traité de sociologie générale, 1916, paragraphe 2053",
      texte: "L’histoire est un cimetière d’aristocraties.",
      notes: `
<p><b>La circulation des élites.</b> La formule résume la théorie de Pareto : aucune élite ne dure. Les aristocraties déclinent, en nombre et en vigueur, et doivent se renouveler en intégrant les meilleurs éléments des classes inférieures, sinon elles sont renversées.</p>
<p><b>Un regard désenchanté.</b> Pareto ne juge pas ce mouvement bon ou mauvais : il le décrit comme une loi de l’histoire. Il juge illusoires les promesses démocratiques ou socialistes de supprimer la domination d’une élite.</p>
<p><b>Une postérité ambiguë.</b> La phrase a été citée aussi bien par des admirateurs des régimes autoritaires que par des politologues démocrates, attentifs au renouvellement des dirigeants et à la mobilité sociale.</p>`
    },
    quiz: [
      { q: "Quelle profession Pareto exerce-t-il avant de devenir économiste ?",
        o: ["Avocat plaidant devant les tribunaux de Florence", "Ingénieur, directeur d’une société sidérurgique", "Médecin dans un grand hôpital de Florence", "Journaliste dans un quotidien politique italien"], c: 1,
        e: "Il dirige une société sidérurgique en Toscane." },
      { q: "Qu’est-ce qu’un optimum de Pareto ?",
        o: ["La répartition la plus égale entre tous les membres de la société", "Une situation où améliorer un sort détériorerait celui d’un autre", "Le niveau de revenu maximal que puisse atteindre un pays", "Une situation où chacun reçoit selon ses besoins personnels"], c: 1,
        e: "Le critère ne dit rien de la justice de la répartition." },
      { q: "Qu’apporte l’utilité ordinale ?",
        o: ["Une mesure exacte du plaisir que procure chaque bien consommé par le ménage", "L’idée qu’il suffit de classer les préférences, sans les mesurer", "Une théorie de la monnaie fondée sur son pouvoir d’achat", "Une mesure de l’utilité en francs, d’après les prix payés"], c: 1,
        e: "Elle fonde la théorie moderne du consommateur." },
      { q: "Que signifie « l’histoire est un cimetière d’aristocraties » ?",
        o: ["Que les mêmes élites se transmettent le pouvoir de père en fils", "Que les élites se renouvellent et finissent par être remplacées", "Que la noblesse européenne a disparu avec la Révolution française", "Que la démocratie finit par l’emporter sur les aristocraties"], c: 1,
        e: "C’est la théorie de la circulation des élites." },
      { q: "Où Pareto passe-t-il ses dernières années ?",
        o: ["À Rome, à l’écart de la vie politique italienne", "À Céligny, près de Genève, au bord du Léman", "À Paris, la ville où il est né", "À Turin, dans la ville de ses études"], c: 1,
        e: "Dans la « Villa Angora », avec ses chats." }
    ],
    ouverte: {
      q: "Pareto pensait que l’inégalité des revenus était à peu près la même dans tous les pays. Les statistiques suisses lui donnent-elles raison ?",
      r: "En partie seulement. Les travaux de Reto Foellmi et Isabel Martínez montrent que la part des hauts revenus en Suisse est restée relativement stable sur longue période, bien plus qu’aux États-Unis ou au Royaume-Uni, ce qui pourrait sembler confirmer une forme de constance. Mais la comparaison entre pays contredit Pareto : la concentration des revenus varie fortement d’un pays à l’autre, et à l’intérieur d’un même pays selon les époques, sous l’effet des guerres, de la fiscalité, des institutions du marché du travail et de la finance. En Suisse même, la concentration du patrimoine est bien plus forte que celle des revenus. La loi de Pareto reste un outil statistique précieux, car les hauts revenus suivent souvent une loi de puissance, mais son coefficient change. L’idée d’une inégalité naturelle et immuable, indépendante des choix politiques, est aujourd’hui largement abandonnée."
    },
    lectures: [
      ["Accessible", "Raymond Aron, Les Étapes de la pensée sociologique, 1967, chapitre sur Pareto."],
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, passages sur Walras et Pareto."],
      ["Intermédiaire", "Vilfredo Pareto, Manuel d’économie politique (1909), chapitres 3, 4 et 6."],
      ["Intermédiaire", "Giovanni Busino, Introduction à une histoire de la sociologie de Pareto, 1968."],
      ["Recherche", "Vilfredo Pareto, Cours d’économie politique (1896-1897), tome II ; Amartya Sen, « The Impossibility of a Paretian Liberal », Journal of Political Economy, 1970."]
    ],
    decouvrir: {
      questions: [
        { q: "Qu’est-ce que Pareto découvre en étudiant les impôts de nombreux pays ?",
          o: ["Que les hauts revenus suivent une loi mathématique régulière", "Que les revenus sont à peu près égaux dans tous les pays", "Que les impôts ne modifient pas le comportement des contribuables", "Que les pauvres paient proportionnellement plus que les riches"], c: 0,
          e: "Il s’intéresse ensuite aux élites et à leur succession." },
        { q: "Qu’est-ce que Pareto montre à propos des choix des consommateurs ?",
          o: ["Qu’on peut les étudier en classant les préférences, sans mesurer le bonheur", "Qu’ils sont irrationnels et échappent à toute analyse sérieuse", "Qu’il faut mesurer leur bonheur en francs pour les expliquer", "Qu’ils s’expliquent par le seul prix des biens, sans rôle des goûts ni des habitudes"], c: 0,
          e: "C’est l’idée de l’utilité ordinale, base de la microéconomie moderne." }
      ],
      duree: 6,
      html: `
<h3>L’ingénieur de Lausanne</h3>
<p>Vilfredo Pareto (1848-1923), ingénieur italien né à Paris, dirige des aciéries avant de se passionner pour l’économie mathématique. En 1893, il succède à <a href="#eco-walras">Walras</a> à l’université de Lausanne. Il finit sa vie à Céligny, au bord du Léman, entouré de chats.</p>
${viePareto}
<h3>L’optimum</h3>
<p>Pareto a laissé son nom à une notion utilisée partout en économie : une situation est « optimale » si l’on ne peut améliorer le sort de quelqu’un sans aggraver celui d’un autre. Attention : une situation très injuste peut être optimale en ce sens. Il montre aussi qu’on peut étudier les choix des consommateurs sans mesurer leur bonheur, en se contentant de savoir ce qu’ils préfèrent.</p>
${optimum}
<h3>Les inégalités et les élites</h3>
<p>En étudiant les impôts de nombreux pays, Pareto découvre que les hauts revenus se répartissent selon une loi mathématique régulière. Déçu par la politique, il devient sociologue et décrit des élites qui se succèdent sans cesse : « l’histoire est un cimetière d’aristocraties ».</p>
<h3>À retenir</h3>
<p>Pareto a fondé la microéconomie moderne et posé des questions durables sur les inégalités et le pouvoir. Le portrait complet présente sa vie, ses idées et leurs controverses.</p>`,
      quiz: [1, 4]
    },
    resumes: {
      vie: "De Paris à Turin, aux aciéries de Toscane, à Lausanne et à Céligny.",
      epoque: "L’Italie unifiée, le protectionnisme et la désillusion libérale.",
      pensee: "Sept étapes, de l’équilibre général à la circulation des élites.",
      livres: "Du Cours au Manuel et au Traité de sociologie.",
      cas: "La Villa Angora, la loi des 80/20, le fascisme, la succession de Walras.",
      objections: "L’optimum et la justice, une loi des revenus qui varie, une sociologie élitiste, le paradoxe de Sen.",
      ecoles: "Walras et Edgeworth, Hicks et Allen, Arrow et Debreu, Sen, Mosca et Aron, Piketty et Saez.",
      source: "Traité de sociologie : un cimetière d’aristocraties.",
      quiz: "Cinq questions corrigées et une question sur les inégalités en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
