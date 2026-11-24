/* Œconomia — les économistes du Panthéon
   devise : une phrase qui situe l'apport ; idees : concepts et mécanismes ; bio : trajectoire et postérité. */
OEC.economists = [
  { id: "aristote", nom: "Aristote", ini: "Ar", vie: [-384, -322], pays: "Grèce antique", ecole: "antique", famille: "precurseurs",
    devise: "Distingue la gestion de la maisonnée, orientée vers les besoins, de l’acquisition illimitée de monnaie.",
    oeuvre: ["Politique, livre I ; Éthique à Nicomaque, livre V", "IVe s. av. J.-C."],
    idees: [
      "Valeur d’usage et valeur d’échange : une chaussure peut être portée ou troquée. Marx reprendra explicitement cette distinction.",
      "L’oikonomia vise des biens limités par les besoins d’une vie bonne ; la chrématistique marchande vise une richesse sans terme, ce qui la rend suspecte.",
      "La monnaie (nomisma) tient sa valeur de la convention (nomos) et non de la nature. Elle rend commensurables des biens hétérogènes et permet la justice dans l’échange.",
      "Le prêt à intérêt fait engendrer la monnaie par la monnaie (tokos signifie à la fois « intérêt » et « progéniture ») : c’est, pour lui, le mode d’acquisition le plus contraire à la nature."
    ],
    citation: "De tous les modes d’acquisition, l’usure est le plus contraire à la nature.", source: "Politique, livre I",
    bio: "Aristote écrit dans une Athènes où l’économie reste enchâssée dans la cité, la famille et l’esclavage, qu’il justifie. Sa question n’est pas de savoir comment produire davantage, mais quelle richesse convient à une vie accomplie. Repris par Thomas d’Aquin au XIIIe siècle, son argument contre l’usure structure la doctrine de l’Église ; ses notions de justice commutative et de juste prix nourrissent la scolastique jusqu’à l’école de Salamanque. Marx salue en lui « le grand penseur qui a le premier analysé la forme valeur ».",
    x: null, y: null },

  { id: "khaldoun", nom: "Ibn Khaldoun", ini: "IK", vie: [1332, 1406], pays: "Maghreb et Égypte", ecole: "antique", famille: "precurseurs",
    devise: "Explique l’essor et le déclin des dynasties par la cohésion sociale, la fiscalité et la vie urbaine.",
    oeuvre: ["Al-Muqaddima (Prolégomènes)", "1377"],
    idees: [
      "L’asabiyya, solidarité de groupe forgée dans la vie bédouine, fonde les dynasties ; le luxe urbain la dissout en trois ou quatre générations.",
      "Le travail humain est la source du gain et de la valeur ; l’or et l’argent n’en sont que la mesure et la réserve.",
      "Au début d’une dynastie, des taux d’imposition faibles produisent de fortes recettes ; à la fin, des taux élevés en produisent de faibles.",
      "Lorsque le souverain se fait lui-même marchand, il évince les commerçants, décourage l’activité et finit par ruiner ses propres recettes."
    ],
    citation: "Au début de la dynastie, l’impôt rapporte beaucoup avec de faibles taux ; à la fin, il rapporte peu avec des taux élevés.", source: "Al-Muqaddima",
    bio: "Né à Tunis dans une famille d’origine andalouse, Ibn Khaldoun sert successivement plusieurs cours du Maghreb et de Grenade, connaît la disgrâce et la prison, puis devient grand cadi malékite au Caire. Il rencontre Tamerlan devant Damas en 1401. Retiré dans la forteresse de Qal’at Ibn Salama, il rédige la Muqaddima, introduction à une histoire universelle où il fonde une « science de la civilisation » (’ilm al-’umrân) qui traite la société comme un objet d’étude à part entière. Redécouvert par les orientalistes du XIXe siècle, il est tenu par Arnold Toynbee pour l’auteur de la plus grande philosophie de l’histoire jamais écrite. Ronald Reagan le cite en 1981 pour défendre ses baisses d’impôts.",
    x: null, y: null },

  { id: "mun", nom: "Thomas Mun", ini: "TM", vie: [1571, 1641], pays: "Angleterre", ecole: "merc", famille: "precurseurs",
    devise: "Fait de la balance générale du commerce la mesure de la richesse et de la puissance d’un royaume.",
    oeuvre: ["England’s Treasure by Forraign Trade", "rédigé vers 1630, publié en 1664"],
    idees: [
      "Ce qui compte n’est pas chaque transaction mais la balance générale : exporter de l’argent vers l’Inde est justifié si les marchandises rapportées sont réexportées avec profit.",
      "Le trésor du royaume s’accroît par l’excédent commercial ; la richesse est encore pensée comme un stock de métal précieux.",
      "Frugalité intérieure, essor de la marine et de la pêche, transformation sur place des matières premières : une politique de puissance par le commerce."
    ],
    citation: "Le moyen ordinaire d’accroître notre richesse et notre trésor est le commerce extérieur, où nous devons toujours observer cette règle : vendre chaque année aux étrangers plus que nous ne consommons des leurs en valeur.", source: "England’s Treasure by Forraign Trade",
    bio: "Directeur de la Compagnie anglaise des Indes orientales, Mun écrit pour défendre celle-ci, accusée pendant la crise commerciale des années 1620 de vider le royaume de son numéraire. Son raisonnement, plus subtil que l’hostilité aux importations qu’on prête souvent aux mercantilistes, porte sur la balance d’ensemble. Publié par son fils en 1664, son traité devient la référence du « système mercantile » qu’Adam Smith attaque au livre IV de la Richesse des nations. Keynes, au chapitre 23 de la Théorie générale, réhabilite en partie les mercantilistes pour leur attention à la monnaie et à l’emploi.",
    x: null, y: null },

  { id: "quesnay", nom: "François Quesnay", ini: "FQ", vie: [1694, 1774], pays: "France", ecole: "merc", famille: "precurseurs",
    devise: "Représente pour la première fois l’économie comme un circuit de dépenses et de revenus entre classes sociales.",
    oeuvre: ["Tableau économique", "1758"],
    idees: [
      "Seule la terre dégage un « produit net » ; l’artisanat et le commerce, qu’il nomme « classe stérile », transforment sans créer de surplus.",
      "Le Tableau économique suit la circulation annuelle des avances et des revenus entre classe productive, propriétaires et classe stérile : l’ancêtre de la comptabilité nationale.",
      "Le « bon prix » du grain, garanti par la liberté de son commerce intérieur et extérieur, est la condition de la prospérité agricole.",
      "Un impôt unique, assis sur le produit net des terres, doit remplacer la mosaïque fiscale de l’Ancien Régime."
    ],
    citation: "Pauvres paysans, pauvre royaume ; pauvre royaume, pauvre roi.", source: "Maximes générales du gouvernement économique d’un royaume agricole, 1767",
    bio: "Chirurgien de formation, puis médecin de Madame de Pompadour et du roi, Quesnay se tourne vers l’économie après soixante ans. Avec le marquis de Mirabeau, il fonde l’école physiocratique, le « gouvernement de la nature ». Adam Smith le rencontre à Paris en 1766 et, selon son biographe Dugald Stewart, aurait voulu lui dédier la Richesse des nations. Marx voit dans le Tableau « l’idée la plus géniale dont l’économie politique se soit rendue coupable jusqu’alors » ; Wassily Leontief y reconnaîtra l’ancêtre de ses tableaux entrées-sorties.",
    x: -0.5, y: -0.3 },

  { id: "smith", nom: "Adam Smith", ini: "AS", vie: [1723, 1790], pays: "Écosse", ecole: "classique", famille: "classiques",
    devise: "Philosophe moral avant d’être économiste, il voit dans la division du travail et l’étendue du marché les causes de la richesse.",
    oeuvre: ["Recherches sur la nature et les causes de la richesse des nations", "1776"],
    idees: [
      "La division du travail multiplie la productivité ; elle est limitée par l’étendue du marché.",
      "Le prix de marché gravite autour d’un prix naturel, sous l’effet de la concurrence entre vendeurs et entre acheteurs.",
      "La richesse d’une nation est le flux annuel de biens produits par le travail, non le stock d’or : c’est le fond de sa critique du système mercantile.",
      "Le souverain a trois devoirs : la défense, la justice, et les ouvrages et institutions publiques que l’intérêt privé ne financerait pas, dont l’instruction du peuple."
    ],
    citation: "Ce n’est pas de la bienveillance du boucher, du brasseur ou du boulanger que nous attendons notre dîner, mais du soin qu’ils apportent à leurs intérêts.", source: "La Richesse des nations, livre I, chap. 2",
    bio: "Élève de Francis Hutcheson à Glasgow, ami intime de David Hume, Smith publie en 1759 une Théorie des sentiments moraux fondée sur la sympathie et la figure du « spectateur impartial ». Précepteur du jeune duc de Buccleuch, il séjourne en France de 1764 à 1766 et y fréquente Quesnay et Turgot. La Richesse des nations lui demande dix ans de travail. La question de la cohérence entre ses deux livres, l’un fondé sur la sympathie, l’autre sur l’intérêt, a reçu le nom de « problème Adam Smith ». Il finit sa vie commissaire des douanes à Édimbourg, chargé d’appliquer les droits qu’il avait critiqués.",
    x: -0.6, y: 0.3, debat: "smith-marx" },

  { id: "malthus", nom: "Thomas Malthus", ini: "TR", vie: [1766, 1834], pays: "Angleterre", ecole: "classique", famille: "classiques",
    devise: "Introduit la contrainte démographique en économie et soutient, contre Ricardo, qu’une surproduction générale est possible.",
    oeuvre: ["Essai sur le principe de population", "1798"],
    idees: [
      "Sans obstacle, la population tend à croître géométriquement et les subsistances arithmétiquement ; des « freins » ramènent l’équilibre.",
      "Freins positifs (famines, épidémies, guerres) et freins préventifs (mariage tardif, « contrainte morale »).",
      "Il théorise en 1815 la rente différentielle, en même temps qu’Edward West et Ricardo.",
      "La demande effective peut faire défaut : l’épargne poussée à l’excès détruit le motif de produire."
    ],
    citation: "La population, si elle ne rencontre aucun obstacle, s’accroît en progression géométrique. Les subsistances ne s’accroissent qu’en progression arithmétique.", source: "Essai sur le principe de population",
    bio: "Pasteur anglican, Malthus écrit son Essai pour réfuter l’optimisme de Godwin et de Condorcet sur la perfectibilité de la société. Il l’enrichit de données empiriques dans l’édition de 1803 et s’en sert pour critiquer les lois sur les pauvres. En 1805, il devient au collège de Haileybury le premier professeur d’économie politique d’Angleterre. Darwin et Wallace reconnaissent tous deux sa dette dans la découverte de la sélection naturelle. Sa loi de population a été démentie par la révolution agricole puis par la transition démographique ; sa théorie de la demande effective a été réhabilitée par Keynes.",
    x: -0.2, y: 0.0, debat: "ricardo-malthus" },

  { id: "say", nom: "Jean-Baptiste Say", ini: "JS", vie: [1767, 1832], pays: "France", ecole: "classique", famille: "classiques",
    devise: "Diffuse Smith sur le continent, fonde la valeur sur l’utilité et donne à l’entrepreneur sa place dans la théorie.",
    oeuvre: ["Traité d’économie politique", "1803"],
    idees: [
      "Loi des débouchés : les produits s’achètent avec des produits, la monnaie n’étant qu’un intermédiaire ; un engorgement sur un marché suppose une pénurie sur un autre.",
      "La valeur repose sur l’utilité, non sur la quantité de travail incorporée.",
      "L’entrepreneur, distinct du capitaliste, combine les facteurs de production et supporte le risque de l’entreprise.",
      "Les services sont des « produits immatériels » : la production ne se limite pas aux objets."
    ],
    citation: "Les échanges terminés, il se trouve toujours qu’on a payé des produits avec des produits.", source: "Traité d’économie politique, livre I, chap. 15, « Des débouchés »",
    bio: "Lecteur de Smith dès 1789, Say dirige La Décade philosophique puis siège au Tribunat. Il refuse de plier son Traité aux vues de Bonaparte, perd son siège et devient filateur de coton à Auchy, dans le Pas-de-Calais. Il occupe en 1820 la première chaire d’économie industrielle au Conservatoire des arts et métiers, puis en 1831 celle d’économie politique au Collège de France. Ses Lettres à Malthus (1820) défendent la loi des débouchés, que Keynes résumera, un peu injustement, en « l’offre crée sa propre demande ».",
    x: -0.8, y: -0.3 },

  { id: "ricardo", nom: "David Ricardo", ini: "DR", vie: [1772, 1823], pays: "Angleterre", ecole: "classique", famille: "classiques",
    devise: "Agent de change devenu théoricien, il donne à l’économie politique sa méthode déductive et ses grands modèles.",
    oeuvre: ["Des principes de l’économie politique et de l’impôt", "1817"],
    idees: [
      "Avantage comparatif : un pays gagne à se spécialiser selon ses coûts relatifs, même s’il est moins productif en tout.",
      "Rente différentielle : la mise en culture de terres moins fertiles élève la rente et comprime les profits, d’où une tendance à l’état stationnaire.",
      "La valeur d’échange dépend de la quantité de travail nécessaire, une thèse qu’il sait imparfaite dès qu’interviennent des capitaux de durées différentes.",
      "Il envisage qu’emprunt public et impôt aient des effets équivalents, avant d’en douter : Robert Barro relance l’idée en 1974, et James Buchanan la baptise « équivalence ricardienne » en 1976."
    ],
    citation: "Déterminer les lois qui règlent cette répartition est le principal problème de l’économie politique.", source: "Principes, préface",
    bio: "Fils d’un agent de change séfarade venu d’Amsterdam, Ricardo rompt avec sa famille en épousant une quaker et fait fortune à la Bourse de Londres, notamment sur les emprunts d’État au moment de Waterloo. Il découvre la Richesse des nations en 1799 dans une ville d’eaux et entre en économie par la controverse sur le prix de l’or (1809-1810). Député à partir de 1819, il combat les Corn Laws. Schumpeter appellera « vice ricardien » l’habitude d’appliquer directement à la politique des conclusions tirées de modèles très abstraits.",
    x: -0.7, y: -0.7, debat: "ricardo-malthus" },

  { id: "mill", nom: "John Stuart Mill", ini: "JM", vie: [1806, 1873], pays: "Angleterre", ecole: "classique", famille: "classiques",
    devise: "Dernier grand classique, il sépare les lois de la production, qu’il juge naturelles, des règles de répartition, qui relèvent du choix social.",
    oeuvre: ["Principes d’économie politique", "1848"],
    idees: [
      "Les lois de la production tiennent de la nature ; la répartition est « affaire d’institution humaine » et peut donc être réformée.",
      "L’homme économique est une abstraction méthodologique, qui isole le désir de richesse pour en étudier les effets.",
      "Exceptions au laissez-faire : éducation, protection temporaire des industries naissantes, réglementation du temps de travail.",
      "L’état stationnaire, une fois la pauvreté vaincue, pourrait être préférable à la course indéfinie à la croissance."
    ],
    citation: "La seule raison légitime d’user de la force contre un membre d’une communauté civilisée est de l’empêcher de nuire aux autres.", source: "De la liberté, 1859",
    bio: "Soumis par son père James Mill et par Jeremy Bentham à une éducation d’une intensité célèbre, grec à trois ans, latin à huit, Mill traverse à vingt ans une crise dépressive dont il sort par la poésie. Il travaille trente-cinq ans à la Compagnie des Indes orientales. Ses Principes dominent l’enseignement anglais pendant un demi-siècle. Influencé par Harriet Taylor, il publie L’Asservissement des femmes (1869) et dépose en 1867, comme député, le premier amendement réclamant le vote des femmes au Parlement britannique.",
    x: 0.0, y: 0.1 },

  { id: "marx", nom: "Karl Marx", ini: "KM", vie: [1818, 1883], pays: "Prusse / Angleterre", ecole: "marx", famille: "marxisme",
    devise: "Relit les classiques pour montrer que le profit naît d’un rapport social et que le capital est une dynamique historique.",
    oeuvre: ["Le Capital, livre I", "1867"],
    idees: [
      "L’ouvrier vend sa force de travail, non son travail : la différence entre la valeur produite et le salaire forme la plus-value.",
      "Concurrence et progrès technique poussent à l’accumulation, à la concentration et à la centralisation du capital.",
      "La hausse de la part du capital fixe tend à faire baisser le taux de profit (livre III), source de crises récurrentes.",
      "Le fétichisme de la marchandise : des rapports entre personnes prennent l’apparence de rapports entre choses."
    ],
    citation: "Les philosophes n’ont fait qu’interpréter le monde de différentes manières ; ce qui importe, c’est de le transformer.", source: "Thèses sur Feuerbach, 1845",
    bio: "Docteur en philosophie, journaliste à la Gazette rhénane, Marx est expulsé de Prusse, de France et de Belgique avant de s’installer à Londres en 1849. Il y vit pauvrement, perd trois de ses enfants, travaille à la bibliothèque du British Museum et écrit pour le New York Daily Tribune, soutenu par Engels. Seul le livre I du Capital paraît de son vivant ; Engels édite les livres II (1885) et III (1894) à partir de ses manuscrits. Ses prédictions sur la paupérisation et la révolution ont été démenties ; son analyse de la mondialisation, de la concentration du capital et des crises reste lue bien au-delà du marxisme.",
    x: 0.95, y: 0.6, debat: "smith-marx" },

  { id: "walras", nom: "Léon Walras", ini: "LW", vie: [1834, 1910], pays: "France / Suisse", ecole: "neoclass", famille: "neoclassiques",
    devise: "Formule le premier un système où les prix de tous les marchés se déterminent simultanément.",
    oeuvre: ["Éléments d’économie politique pure", "1874"],
    idees: [
      "Équilibre général : offres et demandes de tous les biens et services forment un système d’équations interdépendantes.",
      "Le tâtonnement, mené par un crieur fictif qui ajuste les prix tant que demandes et offres ne coïncident pas.",
      "La valeur dépend de la « rareté », c’est-à-dire de l’utilité de la dernière unité consommée.",
      "Partisan d’un socialisme foncier, il propose le rachat des terres par l’État, dont la rente financerait les dépenses publiques."
    ],
    citation: "L’économie politique pure est essentiellement la théorie de la détermination des prix sous un régime hypothétique de libre concurrence absolue.", source: "Éléments d’économie politique pure",
    bio: "Fils de l’économiste Auguste Walras, à qui il doit la notion de rareté, Léon échoue deux fois à Polytechnique, abandonne l’École des mines, s’essaie au roman, au journalisme et à la banque coopérative. Faute de poste en France, il obtient en 1870 la chaire d’économie politique créée par le canton de Vaud à l’Académie de Lausanne. Son système, longtemps peu lu, ne recevra une démonstration rigoureuse d’existence qu’en 1954 avec Kenneth Arrow et Gérard Debreu. Schumpeter le tenait pour « le plus grand de tous les économistes ».",
    x: 0.1, y: -0.95 },

  { id: "marshall", nom: "Alfred Marshall", ini: "AM", vie: [1842, 1924], pays: "Angleterre", ecole: "neoclass", famille: "neoclassiques",
    devise: "Fait de l’économie une discipline universitaire et lui donne ses outils de base : élasticité, surplus, équilibre partiel.",
    oeuvre: ["Principes d’économie", "1890"],
    idees: [
      "L’équilibre partiel : on étudie un marché en tenant les autres constants, « toutes choses égales par ailleurs ».",
      "Offre et demande déterminent le prix comme les deux lames d’une paire de ciseaux.",
      "Élasticité-prix, surplus du consommateur, distinction entre courte et longue période.",
      "Économies externes et districts industriels : dans certaines villes, « les secrets du métier cessent d’être des secrets ; ils sont pour ainsi dire dans l’air »."
    ],
    citation: "L’économie politique est l’étude de l’humanité dans les affaires ordinaires de la vie.", source: "Principes d’économie",
    bio: "Mathématicien brillant, Marshall vient à l’économie par l’éthique et le souci de la pauvreté ouvrière. Il obtient en 1903 la création à Cambridge d’un cursus d’économie séparé de l’histoire et des sciences morales, et forme Keynes et Pigou. Méfiant envers les abus du formalisme, il résume sa méthode dans une lettre de 1906 : utiliser les mathématiques comme sténographie, traduire le résultat en anglais, l’illustrer par des exemples réels, puis « brûler les mathématiques ».",
    x: -0.3, y: -0.5 },

  { id: "pareto", nom: "Vilfredo Pareto", ini: "VP", vie: [1848, 1923], pays: "Italie / Suisse", ecole: "neoclass", famille: "neoclassiques",
    devise: "Fonde l’économie du bien-être sur un critère d’efficacité qui se passe de toute comparaison entre individus.",
    oeuvre: ["Manuel d’économie politique", "1906"],
    idees: [
      "Une situation est optimale au sens de Pareto si l’on ne peut améliorer le sort de quelqu’un sans détériorer celui d’un autre.",
      "L’utilité n’a pas besoin d’être mesurable : un simple classement des préférences, représenté par des courbes d’indifférence, suffit.",
      "La répartition des revenus suit une loi de puissance remarquablement stable d’un pays à l’autre.",
      "Sociologue, il insiste sur les « actions non logiques » et sur la circulation des élites."
    ],
    citation: null, source: null,
    bio: "Né à Paris d’un père génois exilé, Pareto est d’abord ingénieur ferroviaire puis directeur d’une société métallurgique en Toscane. Libéral intransigeant, il combat le protectionnisme et le clientélisme de l’Italie unifiée. Il succède à Walras à Lausanne en 1893 et passe ses dernières années à Céligny, au bord du Léman. Le régime fasciste le nomme sénateur en 1923, quelques mois avant sa mort ; la nature de son rapport au fascisme reste discutée. Son critère d’efficacité, volontairement muet sur l’équité, structure encore l’économie publique.",
    x: -0.4, y: -0.8 },

  { id: "veblen", nom: "Thorstein Veblen", ini: "TV", vie: [1857, 1929], pays: "États-Unis", ecole: "hetero", famille: "institutionnalistes",
    devise: "Analyse la consommation comme un langage social et l’économie comme une évolution des institutions.",
    oeuvre: ["Théorie de la classe de loisir", "1899"],
    idees: [
      "Consommation et loisir ostentatoires : la dépense sert à signaler le rang, d’où des biens dont la demande peut croître avec le prix.",
      "Les institutions sont des habitudes de pensée partagées ; l’économie doit être une science évolutionniste.",
      "Opposition entre l’« industrie », celle des ingénieurs qui produisent, et les « affaires », celles de la finance qui captent la valeur.",
      "Critique de l’homo œconomicus, ce « calculateur éclair des plaisirs et des peines »."
    ],
    citation: "La consommation ostentatoire de biens de valeur est un moyen de respectabilité pour le gentleman oisif.", source: "Théorie de la classe de loisir",
    bio: "Fils d’immigrants norvégiens du Wisconsin et du Minnesota, docteur de Yale, Veblen enseigne à Chicago, à Stanford puis à la New School de New York, au gré d’une carrière accidentée. Sa prose, d’une ironie impassible, déroute les économistes et séduit les sociologues. Il fonde avec John Commons et Wesley Mitchell l’institutionnalisme américain. Il meurt en août 1929, quelques semaines avant le krach qui aurait illustré sa critique de la finance.",
    x: 0.4, y: 0.9 },

  { id: "mises", nom: "Ludwig von Mises", ini: "LM", vie: [1881, 1973], pays: "Autriche / États-Unis", ecole: "autrich", famille: "autrichiens",
    devise: "Soutient que, sans propriété privée des moyens de production, il n’y a pas de prix, et sans prix pas de calcul économique rationnel.",
    oeuvre: ["L’Action humaine", "1949"],
    idees: [
      "Le calcul économique en régime socialiste est impossible : sans marché des biens de production, le planificateur ne peut comparer les coûts.",
      "La monnaie s’insère dans la théorie de l’utilité marginale grâce à son « théorème de régression ».",
      "Le crédit bancaire créé au-delà de l’épargne fausse le taux d’intérêt et déclenche des cycles d’expansion et de crise.",
      "La praxéologie : l’économie se déduit a priori de l’axiome de l’action humaine intentionnelle."
    ],
    citation: null, source: null,
    bio: "Né à Lemberg (Lviv), Mises travaille à la Chambre de commerce de Vienne et anime un séminaire privé où se forment Hayek, Machlup et Morgenstern. Son article de 1920 ouvre le débat sur le calcul socialiste, auquel répondront Oskar Lange et Abba Lerner. De 1934 à 1940, il enseigne à l’Institut de hautes études internationales de Genève, puis s’exile à New York, où il professe à NYU sans y recevoir de salaire de l’université. Il est la principale référence du libertarianisme américain.",
    x: -0.95, y: -0.15 },

  { id: "schumpeter", nom: "Joseph Schumpeter", ini: "JS", vie: [1883, 1950], pays: "Autriche / États-Unis", ecole: "hetero", famille: "patrimoine",
    devise: "Pense le capitalisme comme un processus d’évolution porté par l’innovation, et non comme un état d’équilibre.",
    oeuvre: ["Capitalisme, socialisme et démocratie", "1942"],
    idees: [
      "L’entrepreneur réalise de « nouvelles combinaisons » : nouveau produit, nouvelle méthode, nouveau marché, nouvelle source de matières, nouvelle organisation.",
      "Le crédit bancaire, créé ex nihilo, finance l’innovation avant que l’épargne n’existe.",
      "Les innovations arrivent en grappes et rythment des cycles de durées différentes (Kitchin, Juglar, Kondratiev).",
      "Le capitalisme sera miné par ses succès : bureaucratisation de l’innovation, hostilité des intellectuels, érosion des institutions qui le soutiennent."
    ],
    citation: "Ce processus de destruction créatrice constitue la donnée fondamentale du capitalisme.", source: "Capitalisme, socialisme et démocratie, chap. 7",
    bio: "Né en Moravie, élève de Böhm-Bawerk à Vienne, Schumpeter publie à 28 ans sa Théorie de l’évolution économique. Ministre des Finances de la jeune République autrichienne en 1919, il préside ensuite une banque qui fait faillite en 1924, le laissant lourdement endetté. Il enseigne à Bonn puis, à partir de 1932, à Harvard. Son Histoire de l’analyse économique, parue après sa mort en 1954, reste une somme inégalée. Il disait avoir voulu être le plus grand économiste, le meilleur cavalier et le plus grand amant de Vienne, et n’avoir réussi que deux de ces ambitions.",
    x: -0.3, y: 0.7, debat: "acemoglu-schumpeter" },

  { id: "keynes", nom: "John Maynard Keynes", ini: "JK", vie: [1883, 1946], pays: "Angleterre", ecole: "keynes", famille: "patrimoine",
    devise: "Fonde la macroéconomie en montrant qu’une économie de marché peut se fixer durablement dans le sous-emploi.",
    oeuvre: ["Théorie générale de l’emploi, de l’intérêt et de la monnaie", "1936"],
    idees: [
      "La demande effective, celle que les entreprises anticipent, détermine la production et l’emploi ; le chômage involontaire peut persister.",
      "Le taux d’intérêt rémunère la renonciation à la liquidité, non l’épargne ; il peut rester trop élevé pour soutenir l’investissement.",
      "Face à l’incertitude radicale, l’investissement repose sur des conventions et sur les « esprits animaux ». La Bourse ressemble à un concours de beauté où l’on choisit ce que les autres vont choisir.",
      "Le multiplicateur, formalisé par Richard Kahn en 1931 : une dépense initiale engendre des revenus successifs plus importants qu’elle."
    ],
    citation: "À long terme, nous serons tous morts.", source: "La Réforme monétaire, 1923",
    bio: "Formé à Eton et à King’s College, Keynes publie en 1913 un livre sur la monnaie indienne, travaille au Trésor pendant la guerre et démissionne de la conférence de la paix en 1919. Les Conséquences économiques de la paix, qui prédisent l’échec des réparations imposées à l’Allemagne, le rendent célèbre. Il s’oppose en 1925 au retour de la livre à l’étalon-or. Proche du groupe de Bloomsbury, il épouse la danseuse Lydia Lopokova et gère avec succès le portefeuille de King’s College. À Bretton Woods, en 1944, son projet de monnaie internationale, le bancor, est écarté au profit du plan américain de Harry Dexter White.",
    x: 0.6, y: -0.1, debat: "keynes-hayek" },

  { id: "hayek", nom: "Friedrich Hayek", ini: "FH", vie: [1899, 1992], pays: "Autriche / Royaume-Uni", ecole: "autrich", famille: "autrichiens",
    devise: "Voit dans le marché un dispositif qui coordonne une connaissance que personne ne possède en entier.",
    oeuvre: ["La Route de la servitude", "1944"],
    idees: [
      "La connaissance des circonstances locales est dispersée ; les prix la condensent et la transmettent mieux que tout plan central.",
      "L’ordre spontané : marché, langage ou droit coutumier résultent de l’action humaine sans résulter d’un dessein humain.",
      "Le crédit trop bon marché provoque une « épargne forcée » et des investissements que la crise vient liquider.",
      "L’État de droit exige des règles générales et abstraites ; la « justice sociale » appliquée à un ordre de marché est pour lui un mirage."
    ],
    citation: "La curieuse tâche de l’économie est de démontrer aux hommes combien ils en savent peu sur ce qu’ils s’imaginent pouvoir concevoir.", source: "La Présomption fatale, 1988",
    bio: "Né à Vienne, cousin éloigné de Wittgenstein, Hayek combat sur le front italien en 1917-1918, puis dirige avec Mises l’Institut autrichien de recherche sur les cycles. Appelé à la London School of Economics en 1931, il perd la bataille des idées face à Keynes. La Route de la servitude, diffusée en version abrégée par le Reader’s Digest, fait de lui une figure publique. Il fonde en 1947 la Société du Mont-Pèlerin, près de Vevey, enseigne à Chicago puis à Fribourg-en-Brisgau, et reçoit le Nobel en 1974, partagé avec son adversaire intellectuel Gunnar Myrdal.",
    x: -0.85, y: 0.4, debat: "keynes-hayek" },

  { id: "robinson", nom: "Joan Robinson", ini: "JR", vie: [1903, 1983], pays: "Angleterre", ecole: "keynes", famille: "post-keynesiens",
    devise: "Théoricienne de la concurrence imparfaite, puis critique la plus redoutable de la théorie néoclassique du capital.",
    oeuvre: ["L’Économie de la concurrence imparfaite", "1933"],
    idees: [
      "La concurrence parfaite est un cas limite ; elle analyse les marchés dominés par quelques vendeurs ou par un seul acheteur.",
      "Le monopsone : un employeur dominant sur un marché du travail local peut payer moins que la productivité marginale.",
      "La controverse des deux Cambridge : le « capital » ne peut être agrégé en une quantité sans connaître déjà le taux de profit.",
      "Le temps historique, irréversible, ne se confond pas avec le temps logique des modèles d’équilibre."
    ],
    citation: "Étudier l’économie ne sert pas à acquérir un ensemble de réponses toutes faites, mais à apprendre à ne pas se laisser tromper par les économistes.", source: "Marx, Marshall and Keynes, conférence à Delhi, 1955",
    bio: "Membre du « Cirque » de Cambridge, le groupe de jeunes économistes qui discute en 1930-1931 le Traité sur la monnaie de Keynes, elle participe à l’élaboration de la Théorie générale. Elle prolonge ensuite Keynes vers la croissance et la répartition, en dialogue avec Kalecki et Sraffa. Dans la controverse des deux Cambridge, Paul Samuelson reconnaît en 1966 la validité de l’une de ses objections. Ses positions politiques, notamment son indulgence envers la Chine maoïste, ont terni sa réputation. Beaucoup la jugeaient digne du Nobel, qu’elle n’a jamais reçu.",
    x: 0.75, y: 0.3 },

  { id: "galbraith", nom: "John Kenneth Galbraith", ini: "JG", vie: [1908, 2006], pays: "Canada / États-Unis", ecole: "hetero", famille: "institutionnalistes",
    devise: "Décrit une économie dominée par la grande entreprise, ses contre-pouvoirs et sa capacité à façonner la demande.",
    oeuvre: ["L’Ère de l’opulence", "1958"],
    idees: [
      "Les contre-pouvoirs : syndicats et grands distributeurs font face au pouvoir des grandes firmes.",
      "Opulence privée, misère publique : la société d’abondance néglige écoles, transports et services collectifs.",
      "La « filière inversée » : la grande entreprise ne répond pas à la demande, elle la crée par la publicité.",
      "La technostructure : le pouvoir appartient aux équipes de spécialistes qui dirigent la firme plus qu’aux actionnaires."
    ],
    citation: "Entre changer d’avis et prouver qu’il n’en a pas besoin, presque tout le monde s’affaire à trouver la preuve.", source: "A Contemporary Guide to Economics, Peace and Laughter, chap. « How Keynes Came to America », 1971",
    bio: "Né dans une ferme de l’Ontario, formé à l’économie agricole, Galbraith dirige pendant la guerre le contrôle des prix américain, puis participe à l’enquête sur les bombardements stratégiques, qui conclut à leur effet limité sur la production allemande. Professeur à Harvard, conseiller de Kennedy, ambassadeur en Inde de 1961 à 1963, il écrit pour le grand public avec un humour rare. La Crise économique de 1929 (1955) est réédité après chaque krach. Il inventa l’expression « sagesse conventionnelle ».",
    x: 0.65, y: 0.75 },

  { id: "friedman", nom: "Milton Friedman", ini: "MF", vie: [1912, 2006], pays: "États-Unis", ecole: "chicago", famille: "monetaristes",
    devise: "Réhabilite la théorie quantitative de la monnaie et fait de la stabilité monétaire la priorité de la politique économique.",
    oeuvre: ["Une histoire monétaire des États-Unis, 1867-1960 (avec Anna Schwartz)", "1963"],
    idees: [
      "L’inflation est un phénomène monétaire ; la masse monétaire devrait croître à un rythme fixe et annoncé.",
      "La consommation dépend du revenu permanent, anticipé sur longue période, plus que du revenu courant.",
      "Il existe un taux de chômage naturel ; le maintenir artificiellement plus bas accélère l’inflation dès que les anticipations s’ajustent.",
      "Une théorie se juge à la qualité de ses prédictions, non au réalisme de ses hypothèses."
    ],
    citation: "L’inflation est toujours et partout un phénomène monétaire.", source: "The Counter-Revolution in Monetary Theory, 1970",
    bio: "Fils d’immigrés juifs de Brooklyn, Friedman travaille pendant la guerre au Trésor, où il contribue paradoxalement à mettre en place la retenue de l’impôt à la source. Professeur à Chicago de 1946 à 1977, il prédit la stagflation dès 1967. Avocat infatigable de l’impôt négatif sur le revenu, du chèque éducation et de l’armée de métier, il obtient le Nobel en 1976, au milieu de protestations liées à sa visite au Chili de Pinochet. La série télévisée La Liberté du choix (1980) fait de lui l’économiste le plus connu de son temps.",
    x: -0.75, y: -0.4, debat: "friedman-samuelson" },

  { id: "samuelson", nom: "Paul Samuelson", ini: "PS", vie: [1915, 2009], pays: "États-Unis", ecole: "keynes", famille: "neoclassiques",
    devise: "Fait des mathématiques la langue commune de l’économie et écrit le manuel qui forme des générations d’étudiants.",
    oeuvre: ["Les Fondements de l’analyse économique", "1947"],
    idees: [
      "Les Fondements reformulent la théorie économique comme un problème de maximisation sous contrainte et d’analyse de stabilité.",
      "La synthèse néoclassique : Keynes pour le court terme, l’équilibre de marché une fois le plein emploi rétabli.",
      "Biens publics : non rivaux et non excluables, ils ne peuvent être fournis efficacement par le marché.",
      "Théorème de Stolper-Samuelson : l’ouverture au commerce profite au facteur abondant et nuit au facteur rare."
    ],
    citation: "La Bourse a prévu neuf des cinq dernières récessions.", source: "Newsweek, 1966",
    bio: "Né à Gary, dans l’Indiana, Samuelson étudie à Chicago puis à Harvard, qui ne le retient pas ; il passe en 1940 au MIT, dont il fait le premier département d’économie du monde. Son manuel L’Économique (1948) connaît dix-neuf éditions et des traductions dans plus de quarante langues. Premier Américain à recevoir le Nobel d’économie, en 1970, il conseille John F. Kennedy. Il est l’oncle de Larry Summers.",
    x: 0.35, y: -0.8, debat: "friedman-samuelson" },

  { id: "minsky", nom: "Hyman Minsky", ini: "HM", vie: [1919, 1996], pays: "États-Unis", ecole: "keynes", famille: "post-keynesiens",
    devise: "Lit Keynes comme un théoricien de la finance et montre que l’instabilité naît des périodes de stabilité elles-mêmes.",
    oeuvre: ["Stabiliser une économie instable", "1986"],
    idees: [
      "Hypothèse d’instabilité financière : la confiance accumulée en période calme conduit à un endettement de plus en plus fragile.",
      "Trois régimes : financement couvert (les revenus remboursent la dette), spéculatif (ils ne paient que les intérêts), « Ponzi » (il faut emprunter pour payer les intérêts).",
      "Une économie capitaliste avancée a besoin d’un « gros gouvernement » et d’une « grosse banque centrale » pour borner les effondrements.",
      "L’économie doit être analysée depuis Wall Street : comme un réseau d’engagements financiers dans le temps."
    ],
    citation: "La stabilité, ou la tranquillité, dans un monde au passé cyclique et doté d’institutions financières capitalistes, est déstabilisante.", source: "« The Financial Instability Hypothesis: A Restatement », 1978",
    bio: "Né à Chicago dans une famille de militants socialistes, Minsky commence sa thèse à Harvard sous la direction de Schumpeter, puis de Leontief. Il enseigne à Berkeley et à l’université Washington de Saint-Louis, reste en marge de la profession et passe ses dernières années au Levy Economics Institute. L’expression « moment Minsky », forgée par l’analyste Paul McCulley en 1998, se répand à partir de 2007 pour désigner l’instant où un endettement intenable bascule en crise.",
    x: 0.6, y: 0.45 },

  { id: "ostrom", nom: "Elinor Ostrom", ini: "EO", vie: [1933, 2012], pays: "États-Unis", ecole: "hetero", famille: "empirique",
    devise: "Établit, sur des centaines de cas étudiés, que des communautés peuvent gouverner durablement des ressources communes.",
    oeuvre: ["La Gouvernance des biens communs", "1990"],
    idees: [
      "Entre le marché et l’État existe une troisième voie : l’auto-organisation des usagers.",
      "Huit principes communs aux réussites durables : limites claires, règles adaptées au lieu, participation, surveillance, sanctions graduées, résolution des conflits, reconnaissance, emboîtement des niveaux.",
      "La gouvernance polycentrique : plusieurs centres de décision autonomes, à différentes échelles, qui se surveillent et apprennent les uns des autres.",
      "Ses expériences en laboratoire montrent que la simple possibilité de communiquer réduit fortement la surexploitation."
    ],
    citation: "Il n’y a pas de panacée.", type: "formule", source: "« A Diagnostic Approach for Going beyond Panaceas », PNAS, 2007",
    bio: "Née à Los Angeles, Ostrom consacre sa thèse de science politique à la gestion des nappes phréatiques du sud de la Californie. Avec son mari Vincent Ostrom, elle fonde à l’université de l’Indiana un atelier de recherche où se croisent économie, science politique et anthropologie. Elle étudie les alpages de Törbel en Valais, les huertas de Valence, les forêts du Japon et les pêcheries de Turquie. En 2009, elle est la première femme à recevoir le Nobel d’économie, partagé avec Oliver Williamson.",
    x: -0.1, y: 0.85, debat: "ostrom-hardin" },

  { id: "sen", nom: "Amartya Sen", ini: "AS", vie: [1933, null], pays: "Inde / Royaume-Uni", ecole: "contemp", famille: "empirique",
    devise: "Réintroduit l’éthique, la liberté et la mesure du bien-être au cœur de l’analyse économique.",
    oeuvre: ["Un nouveau modèle économique (Development as Freedom)", "1999"],
    idees: [
      "L’approche par les capabilités : évaluer le bien-être par ce que les personnes sont réellement capables d’être et de faire.",
      "Les famines naissent moins d’un manque de nourriture que de l’effondrement des « droits d’accès » à celle-ci ; aucune n’a frappé une démocratie dotée d’une presse libre.",
      "Le théorème du « libéral parétien » montre qu’on ne peut toujours concilier respect des libertés individuelles et critère de Pareto.",
      "Avec Mahbub ul Haq, il inspire en 1990 l’Indice de développement humain du PNUD."
    ],
    citation: "Le développement peut être vu comme un processus d’expansion des libertés réelles dont jouissent les individus.", source: "Development as Freedom",
    bio: "Né à Santiniketan, dans l’université fondée par Rabindranath Tagore, qui lui a choisi son prénom, Sen assiste à neuf ans à la famine du Bengale de 1943, qui fait près de trois millions de morts alors que la production de riz n’avait pas fortement chuté. Il étudie à Cambridge sous la direction de Joan Robinson, enseigne à Delhi, à la LSE, à Oxford et à Harvard, et dirige le Trinity College de Cambridge de 1998 à 2004. Il reçoit le Nobel en 1998 pour ses travaux sur le choix social et l’économie du bien-être.",
    x: 0.4, y: 0.5 },

  { id: "kahneman", nom: "Daniel Kahneman", ini: "DK", vie: [1934, 2024], pays: "Israël / États-Unis", ecole: "contemp", famille: "empirique",
    devise: "Psychologue, il documente avec Amos Tversky les écarts systématiques entre le jugement humain et le modèle de l’agent rationnel.",
    oeuvre: ["« Prospect Theory » (avec A. Tversky), Econometrica", "1979"],
    idees: [
      "Heuristiques et biais : ancrage, disponibilité, représentativité produisent des erreurs prévisibles, non aléatoires.",
      "Théorie des perspectives : on évalue gains et pertes par rapport à un point de référence, et une perte pèse environ deux fois plus qu’un gain équivalent.",
      "Effets de cadrage : présenter le même choix en vies sauvées ou en vies perdues inverse les préférences.",
      "Distinction entre l’utilité vécue et l’utilité remémorée : le souvenir d’une expérience dépend surtout de son pic et de sa fin."
    ],
    citation: "Les pertes pèsent plus lourd que les gains.", source: "Kahneman et Tversky, 1979",
    bio: "Enfant juif dans la France occupée, Kahneman survit à la guerre avant d’émigrer en Palestine en 1948. Psychologue dans l’armée israélienne, il conçoit un entretien de recrutement utilisé pendant des décennies. Sa collaboration avec Amos Tversky, commencée en 1969 à l’Université hébraïque, est l’une des plus fécondes de l’histoire des sciences sociales. Tversky meurt en 1996 ; Kahneman reçoit seul le Nobel en 2002, sans avoir suivi de cours d’économie. Système 1 / Système 2 (2011) devient un succès mondial.",
    x: 0.1, y: 0.4 },

  { id: "lucas", nom: "Robert Lucas", ini: "RL", vie: [1937, 2023], pays: "États-Unis", ecole: "chicago", famille: "monetaristes",
    devise: "Impose à la macroéconomie des fondements microéconomiques et l’hypothèse d’anticipations rationnelles.",
    oeuvre: ["« Expectations and the Neutrality of Money »", "1972"],
    idees: [
      "Anticipations rationnelles : les agents utilisent au mieux l’information disponible et ne se trompent pas systématiquement.",
      "La critique de Lucas : les relations estimées sur le passé changent dès que la politique économique change, car les comportements s’adaptent.",
      "Seule la partie imprévue de la politique monétaire peut avoir des effets réels, et seulement de façon temporaire.",
      "Le capital humain, par ses effets d’entraînement, peut expliquer une croissance durable et les écarts de richesse entre pays."
    ],
    citation: "Une fois qu’on commence à réfléchir aux questions de croissance, il est difficile de penser à autre chose.", source: "« On the Mechanics of Economic Development », 1988",
    bio: "Formé d’abord en histoire, Lucas soutient sa thèse à Chicago, enseigne à Carnegie Mellon puis revient à Chicago, où il prend la tête de la « nouvelle économie classique ». Ses travaux transforment la manière de construire des modèles macroéconomiques. Il reçoit le Nobel en 1995 ; son divorce de 1989 prévoyait que son ex-épouse toucherait la moitié d’un Nobel obtenu avant fin 1995, clause qui fut honorée. En 2003, il affirme que le « problème central de la prévention des dépressions » est résolu, une phrase souvent rappelée après 2008.",
    x: -0.6, y: -0.95 },

  { id: "krugman", nom: "Paul Krugman", ini: "PK", vie: [1953, null], pays: "États-Unis", ecole: "keynes", famille: "nouveaux-keynesiens",
    devise: "Renouvelle la théorie du commerce et de la géographie économique, puis devient la voix keynésienne la plus lue des États-Unis.",
    oeuvre: ["« Increasing Returns and Economic Geography »", "1991"],
    idees: [
      "Nouvelle théorie du commerce : rendements croissants et goût pour la variété expliquent les échanges entre pays semblables.",
      "Nouvelle économie géographique : coûts de transport et économies d’échelle produisent des configurations centre-périphérie.",
      "Trappe à liquidité : quand les taux sont à zéro, la banque centrale doit s’engager de façon crédible à tolérer plus d’inflation, et la relance budgétaire redevient décisive.",
      "Modèle des crises de change : un régime de change fixe incompatible avec la politique budgétaire finit par une attaque spéculative."
    ],
    citation: "La productivité n’est pas tout, mais à long terme, elle est presque tout.", source: "The Age of Diminished Expectations, 1990",
    bio: "Formé à Yale et au MIT, Krugman travaille en 1982-1983 au Conseil des conseillers économiques de Ronald Reagan, puis enseigne au MIT, à Princeton et à la City University of New York. Il reçoit seul le Nobel en 2008 pour ses travaux sur le commerce et la localisation des activités. Chroniqueur au New York Times de 2000 à 2024, il défend après 2008 la relance contre l’austérité. Il reconnaît publiquement en 2019 avoir sous-estimé le « choc chinois » sur l’emploi industriel américain, puis en 2022 s’être trompé sur l’inflation.",
    x: 0.6, y: -0.3, debat: "summers-krugman" },

  { id: "summers", nom: "Larry Summers", ini: "LS", vie: [1954, null], pays: "États-Unis", ecole: "keynes", famille: "nouveaux-keynesiens",
    devise: "Théoricien de la stagnation séculaire et de l’hystérèse, il a occupé les plus hautes fonctions économiques à Washington.",
    oeuvre: ["« Secular Stagnation » (conférence au FMI)", "2013"],
    idees: [
      "Stagnation séculaire : un excès chronique d’épargne sur l’investissement maintient des taux d’intérêt très bas et une croissance faible.",
      "Hystérèse (avec Olivier Blanchard, 1986) : un chômage élevé et durable peut relever le chômage d’équilibre lui-même.",
      "Une relance doit être proportionnée à l’écart de production ; mal dimensionnée, elle produit de l’inflation plutôt que de l’emploi.",
      "Pendant la crise de 2008, il plaide pour une relance « rapide, ciblée et temporaire »."
    ],
    citation: "Des pressions inflationnistes d’un genre que nous n’avons pas connu depuis une génération.", source: "Washington Post, 4 février 2021",
    bio: "Neveu de Paul Samuelson et de Kenneth Arrow, Summers devient à 28 ans l’un des plus jeunes professeurs titulaires de l’histoire de Harvard. Économiste en chef de la Banque mondiale, puis secrétaire au Trésor de Bill Clinton (1999-2001), il préside Harvard de 2001 à 2006, poste qu’il quitte après une polémique sur ses propos concernant les femmes et les sciences. Directeur du Conseil économique national de Barack Obama en 2009-2010, il critique en 2021 l’ampleur du plan de relance de Joe Biden.",
    x: 0.3, y: -0.2, debat: "summers-krugman" },

  { id: "acemoglu", nom: "Daron Acemoglu", ini: "DA", vie: [1967, null], pays: "Turquie / États-Unis", ecole: "contemp", famille: "empirique",
    devise: "Explique la richesse des nations par leurs institutions et conteste l’idée que le progrès technique profite spontanément à tous.",
    oeuvre: ["Prospérité, puissance et pauvreté (Why Nations Fail, avec J. Robinson)", "2012"],
    idees: [
      "Les origines coloniales du développement : là où la mortalité des colons était élevée, les Européens ont implanté des institutions extractives qui pèsent encore sur la richesse.",
      "Institutions inclusives et extractives : les premières protègent la propriété du plus grand nombre et permettent la destruction créatrice, les secondes servent une élite.",
      "Le changement technique est « dirigé » : il peut automatiser des tâches ou en créer de nouvelles, selon les incitations et les rapports de force.",
      "Le « corridor étroit » : la liberté prospère quand un État fort reste contrôlé par une société forte."
    ],
    citation: "Les nations échouent aujourd’hui parce que leurs institutions économiques extractives ne créent pas les incitations nécessaires pour que les gens épargnent, investissent et innovent.", source: "Why Nations Fail, 2012",
    bio: "Né à Istanbul, formé à la London School of Economics, Acemoglu enseigne au MIT depuis 1993 et figure parmi les économistes les plus cités au monde. Avec Simon Johnson et James Robinson, il reçoit le Nobel en 2024 pour ses travaux sur la manière dont les institutions se forment et influencent la prospérité. Dans Pouvoir et progrès (2023), écrit avec Simon Johnson, il retrace mille ans d’histoire technologique pour montrer que les gains des innovations ont souvent été captés par une minorité.",
    x: 0.4, y: 0.6, debat: "acemoglu-schumpeter" },

  { id: "piketty", nom: "Thomas Piketty", ini: "TP", vie: [1971, null], pays: "France", ecole: "contemp", famille: "empirique",
    devise: "Replace la répartition des revenus et des patrimoines au centre de l’économie, à partir de séries historiques inédites.",
    oeuvre: ["Le Capital au XXIe siècle", "2013"],
    idees: [
      "Quand le rendement du capital (r) dépasse durablement la croissance (g), les patrimoines hérités tendent à dominer les revenus du travail.",
      "Les inégalités ont dessiné une courbe en U au XXe siècle : les guerres, l’inflation, la crise de 1929 et l’impôt progressif les ont réduites, avant leur remontée depuis les années 1980.",
      "Le rapport entre capital privé et revenu national est revenu en Europe à des niveaux proches de ceux de la Belle Époque.",
      "Dans Capital et idéologie (2019), il soutient que chaque société justifie ses inégalités par un récit politique, et que ce récit peut changer."
    ],
    citation: "Lorsque le taux de rendement du capital dépasse durablement le taux de croissance, le capitalisme produit mécaniquement des inégalités arbitraires et insoutenables.", source: "Le Capital au XXIe siècle",
    bio: "Normalien, docteur à 22 ans, Piketty enseigne deux ans au MIT (1993-1995) avant de revenir en France, au CNRS puis à l’EHESS, puis de fonder l’École d’économie de Paris en 2006. Son livre sur les hauts revenus en France (2001) lance, avec Emmanuel Saez, Anthony Atkinson et d’autres, la construction de la World Inequality Database à partir d’archives fiscales. Le Capital au XXIe siècle se vend à plus de deux millions d’exemplaires. Ses conclusions sont discutées : Matthew Rognlie souligne le poids du logement dans la hausse du capital, Acemoglu et Robinson contestent que r > g soit une loi générale.",
    x: 0.8, y: 0.7 },

  { id: "duflo", nom: "Esther Duflo", ini: "ED", vie: [1972, null], pays: "France / États-Unis", ecole: "contemp", famille: "empirique",
    devise: "Applique à la lutte contre la pauvreté la méthode des essais randomisés, en préférant les questions précises aux grandes théories.",
    oeuvre: ["Repenser la pauvreté (avec A. Banerjee)", "2011"],
    idees: [
      "Les essais randomisés contrôlés permettent de mesurer l’effet causal d’une politique en comparant des groupes tirés au sort.",
      "Au Rajasthan, offrir un kilo de lentilles lors des campagnes de vaccination a fait passer la vaccination complète des enfants d’environ 18 % à 39 %.",
      "Le microcrédit, présenté comme une révolution, a des effets réels mais modestes sur la sortie de la pauvreté.",
      "Les politiques échouent souvent sur des détails de mise en œuvre : l’économiste doit aussi être un « plombier »."
    ],
    citation: "Les économistes devraient se voir davantage comme des plombiers.", type: "formule", source: "« The Economist as Plumber », Richard T. Ely Lecture, 2017",
    bio: "Normalienne, formée en histoire et en économie, Duflo travaille à Moscou auprès de Jeffrey Sachs avant sa thèse au MIT. Elle cofonde en 2003 le laboratoire J-PAL avec Abhijit Banerjee et Sendhil Mullainathan, qui a depuis mené plus de mille évaluations dans le monde. Elle reçoit le Nobel en 2019 avec Banerjee et Michael Kremer ; à 46 ans, elle est la plus jeune lauréate de l’histoire du prix. Elle est titulaire d’une chaire au Collège de France depuis 2022.",
    x: 0.3, y: 0.35 },
  { id: "stiglitz", nom: "Joseph Stiglitz", ini: "JS", vie: [1943, null], pays: "États-Unis", ecole: "keynes", famille: "nouveaux-keynesiens",
    devise: "Montre que les marchés fonctionnent mal dès que l’information est inégalement répartie, et en tire une critique de la mondialisation et des inégalités.",
    oeuvre: ["La Grande Désillusion", "2002"],
    idees: [
      "Quand l’un des deux partenaires en sait plus que l’autre, le marché ne conduit plus à un résultat efficace : c’est le cas général, et non l’exception.",
      "Les banques rationnent le crédit plutôt que de relever leurs taux, car un taux élevé attire les emprunteurs les plus risqués (avec Andrew Weiss, 1981).",
      "Un assureur peut trier ses clients en leur proposant plusieurs contrats : chacun révèle son risque par son choix (avec Michael Rothschild, 1976).",
      "Les politiques imposées par le FMI aux pays en crise dans les années 1990, austérité et libéralisation rapide des capitaux, ont souvent aggravé leur situation."
    ],
    citation: "La main invisible d’Adam Smith est invisible, au moins en partie, parce qu’elle n’existe pas.",
    source: "« There Is No Invisible Hand », The Guardian, 20 décembre 2002",
    bio: "Né à Gary, dans l’Indiana, comme Paul Samuelson, Stiglitz obtient son doctorat au MIT en 1967 et devient professeur à Yale à vingt-sept ans. Il préside le Conseil des conseillers économiques de Bill Clinton de 1995 à 1997, puis devient économiste en chef de la Banque mondiale, qu’il quitte au début de l’année 2000 après avoir critiqué publiquement le FMI. Il reçoit le prix Nobel en 2001 avec George Akerlof et Michael Spence, et enseigne à l’université Columbia depuis 2001.",
    x: 0.7, y: -0.5 },
  { id: "mazzucato", nom: "Mariana Mazzucato", ini: "MM", vie: [1968, null], pays: "Italie / États-Unis / Royaume-Uni", ecole: "hetero", famille: "institutionnalistes",
    devise: "Soutient que l’État ne se borne pas à corriger les marchés : il prend les risques de long terme d’où sortent les grandes innovations.",
    oeuvre: ["L’État entrepreneur", "2013"],
    idees: [
      "Internet, le GPS, l’écran tactile et l’assistant vocal, qui font l’iPhone, sont issus de recherches financées par des fonds publics.",
      "L’État ne répare pas seulement les défaillances du marché : il crée et façonne des marchés, en investissant là où le privé juge le risque trop grand.",
      "Les risques de l’innovation sont pris collectivement, mais les gains sont privés : il faut aussi en partager les fruits.",
      "Des « missions » publiques, sur le modèle du programme Apollo, peuvent orienter l’innovation vers de grands défis comme le climat ou la santé."
    ],
    citation: "Il n’y a pas une seule technologie clé de l’iPhone qui n’ait été financée par l’État.",
    source: "L’État entrepreneur, chap. 5, 2013",
    bio: "Née à Rome, Mazzucato grandit à Princeton, aux États-Unis, où son père est physicien. Elle obtient son doctorat à la New School de New York, enseigne à l’Open University puis à l’université du Sussex, et fonde en 2017 à l’University College de Londres l’Institut pour l’innovation et l’intérêt public. Son rapport de 2018 pour la Commission européenne inspire les « missions » du programme de recherche Horizon Europe. Elle a présidé le Conseil de l’OMS sur l’économie de la santé pour tous.",
    x: 0.88, y: 0.42 },
  { id: "polanyi", nom: "Karl Polanyi", ini: "KP", vie: [1886, 1964], pays: "Autriche-Hongrie / Royaume-Uni / Canada", ecole: "hetero", famille: "institutionnalistes",
    devise: "Montre que le marché autorégulateur est une invention récente, qui menace la société quand il traite le travail, la terre et la monnaie comme des marchandises.",
    oeuvre: ["La Grande Transformation", "1944"],
    idees: [
      "Pendant la plus grande partie de l’histoire, l’économie était « encastrée » dans la société : la parenté, la religion et la politique réglaient la production et l’échange.",
      "Le travail, la terre et la monnaie sont des « marchandises fictives » : ils ne sont pas produits pour être vendus, et les livrer entièrement au marché détruit les liens sociaux et la nature.",
      "Chaque extension du marché provoque une réaction de protection de la société, syndicats, lois sociales, protectionnisme : c’est le « double mouvement ».",
      "L’effondrement de l’ordre libéral du XIXe siècle, avec l’étalon-or, explique selon lui la crise des années 1930 et la montée du fascisme."
    ],
    citation: "Le laissez-faire était planifié ; la planification ne l’était pas.",
    source: "La Grande Transformation, chap. 12, 1944",
    bio: "Né à Vienne et élevé à Budapest, docteur en droit, Polanyi fonde en 1908 le cercle Galilée, foyer de la jeunesse progressiste hongroise. Journaliste économique à Vienne dans les années 1920, il s’exile en Angleterre en 1933, où il enseigne aux ouvriers. Il écrit La Grande Transformation aux États-Unis, au Bennington College, puis enseigne à l’université Columbia. Son épouse, l’ancienne militante communiste Ilona Duczyńska, n’ayant pas le droit d’entrer aux États-Unis, le couple vit au Canada, où il meurt en 1964.",
    x: 0.7, y: 0.86 },
  { id: "kalecki", nom: "Michał Kalecki", ini: "MK", vie: [1899, 1970], pays: "Pologne", ecole: "keynes", famille: "post-keynesiens",
    devise: "Découvre avant Keynes le rôle de la demande effective, et montre que le plein emploi durable se heurte à des obstacles politiques.",
    oeuvre: ["Aspects politiques du plein emploi", "1943"],
    idees: [
      "Dès 1933, il montre que l’investissement détermine le niveau de l’activité et des profits : c’est la demande effective, trois ans avant la Théorie générale.",
      "Les profits dépendent des dépenses des capitalistes eux-mêmes : on résume souvent son idée par la formule « les capitalistes gagnent ce qu’ils dépensent, les travailleurs dépensent ce qu’ils gagnent ».",
      "Les grandes entreprises fixent leurs prix en ajoutant une marge à leurs coûts ; la répartition entre salaires et profits dépend de leur pouvoir de marché.",
      "Les chefs d’entreprise peuvent s’opposer au plein emploi durable, qui donne du pouvoir aux salariés : la politique économique suit alors un « cycle politique »."
    ],
    citation: "Dans un régime de plein emploi permanent, le renvoi cesserait de jouer son rôle de mesure disciplinaire.",
    source: "« Political Aspects of Full Employment », The Political Quarterly, 1943",
    bio: "Né à Łódź, Kalecki commence des études d’ingénieur qu’il ne peut achever et se forme seul à l’économie. Chercheur dans un institut de conjoncture à Varsovie, il publie en 1933 sa théorie du cycle. Réfugié en Angleterre, il travaille à l’Institut de statistique d’Oxford pendant la guerre, puis au secrétariat des Nations unies. Rentré en Pologne en 1955, il conseille la planification, avant de démissionner de ses fonctions lors de la campagne antisémite de 1968. Il meurt à Varsovie en 1970.",
    x: 0.85, y: -0.15 },
  { id: "aglietta", nom: "Michel Aglietta", ini: "MA", vie: [1938, 2025], pays: "France", ecole: "hetero", famille: "regulation",
    devise: "Fonde l’école française de la régulation : le capitalisme ne s’équilibre pas seul, mais grâce à des institutions qui durent un temps, puis entrent en crise.",
    oeuvre: ["Régulation et crises du capitalisme", "1976"],
    idees: [
      "Chaque grande période du capitalisme repose sur un ensemble cohérent d’institutions, salaires, concurrence, monnaie, État, qui assure sa stabilité : un « mode de régulation ».",
      "Le « fordisme » des Trente Glorieuses associe production de masse, hausse des salaires liée à la productivité et consommation de masse.",
      "Les grandes crises surviennent quand ce mode de régulation s’épuise, comme le fordisme dans les années 1970.",
      "La monnaie n’est pas une simple marchandise : c’est une institution sociale, fondée sur la confiance et la souveraineté (avec André Orléan)."
    ],
    citation: "Le capitalisme ne trouve pas en lui-même les conditions de sa stabilité ; il les reçoit d’institutions qui finissent par s’user.",
    type: "formule", source: "Régulation et crises du capitalisme, 1976",
    bio: "Né à Chambéry, polytechnicien, Aglietta est d’abord statisticien à l’INSEE. Sa thèse sur la croissance américaine de 1870 à 1970, soutenue en 1974 sous la direction de Raymond Barre, devient en 1976 Régulation et crises du capitalisme, livre fondateur de l’école de la régulation avec Robert Boyer. Professeur à l’université de Nanterre et conseiller au CEPII, il consacre ensuite de nombreux livres à la monnaie, à la finance et à la Chine. Il meurt à Paris en 2025.",
    x: 0.62, y: 0.76 },
  { id: "waring", nom: "Marilyn Waring", ini: "MW", vie: [1952, null], pays: "Nouvelle-Zélande", ecole: "hetero", famille: "feministe",
    devise: "Montre que la comptabilité nationale ignore le travail non payé des femmes et la valeur de la nature, dans un livre souvent tenu pour le texte fondateur de l’économie féministe.",
    oeuvre: ["Counting for Nothing (If Women Counted)", "1988"],
    idees: [
      "Le PIB ne compte que ce qui s’échange contre de l’argent : le travail domestique, les soins aux enfants et aux proches, l’agriculture de subsistance n’y figurent pas.",
      "Une activité invisible dans les statistiques est invisible dans les décisions publiques : ce qu’on ne compte pas, on ne le finance pas.",
      "À l’inverse, le PIB compte comme une richesse des activités nuisibles, comme la réparation de dégâts écologiques ou l’armement.",
      "Elle demande des comptes du temps passé et des comptes de l’environnement, à côté des comptes monétaires."
    ],
    citation: "Ce que les hommes valorisent et ce que valent les femmes.",
    source: "Counting for Nothing, sous-titre, 1988",
    bio: "Élue au Parlement néo-zélandais en 1975, à vingt-trois ans, Waring y préside la commission des dépenses publiques. En 1984, son soutien à une loi d’opposition pour une Nouvelle-Zélande sans armes nucléaires conduit le Premier ministre Robert Muldoon à convoquer des élections anticipées. Elle quitte alors la politique, obtient un doctorat et publie en 1988 un livre souvent tenu pour le texte fondateur de l’économie féministe. Professeure de politiques publiques à Auckland, elle a siégé au Conseil de l’OMS sur l’économie de la santé pour tous.",
    x: 0.55, y: 0.98 },
  { id: "kelton", nom: "Stephanie Kelton", ini: "SK", vie: [1969, null], pays: "États-Unis", ecole: "keynes", famille: "post-keynesiens",
    devise: "Porte la « théorie moderne de la monnaie » : un État qui émet sa propre monnaie ne peut pas faire faillite, et sa vraie limite est l’inflation, pas la dette.",
    oeuvre: ["Le Mythe du déficit", "2020"],
    idees: [
      "Un État qui émet sa propre monnaie, avec un taux de change flottant et une dette dans cette monnaie, ne peut pas être à court d’argent comme un ménage.",
      "La vraie limite de la dépense publique est l’inflation : elle apparaît quand l’État demande plus de travailleurs et de ressources qu’il n’y en a de disponibles.",
      "Les impôts ne servent pas d’abord à financer l’État, mais à retirer de la monnaie de l’économie pour contenir l’inflation et à orienter les comportements.",
      "Elle propose une garantie d’emploi : l’État offrirait un poste à salaire fixe à toute personne qui en cherche un."
    ],
    citation: "Leur déficit est notre excédent.",
    source: "Le Mythe du déficit, titre du chapitre 4, 2020",
    bio: "Formée à Cambridge et à la New School de New York, Kelton enseigne à l’université du Missouri à Kansas City, foyer de la théorie moderne de la monnaie, avant de rejoindre l’université de Stony Brook. Elle est économiste en chef de la minorité démocrate de la commission budgétaire du Sénat américain en 2015, puis conseillère économique des campagnes présidentielles de Bernie Sanders en 2016 et en 2020. Son livre Le Mythe du déficit, paru en 2020, devient un succès de librairie.",
    x: 0.86, y: -0.38 }
];
