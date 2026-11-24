/* Œconomia — portraits longs, lot 5 (a) : Ludwig von Mises, Thorstein Veblen */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;
  const cols = (left, right, lt, rt, lc, rc, foot) => {
    let s = `<rect x="20" y="46" width="290" height="160" rx="10" style="fill:var(--card); stroke:${lc}; stroke-width:2"/><text x="165" y="72" text-anchor="middle" style="fill:${lc}; font:700 13.5px Manrope, sans-serif">${lt}</text>`;
    s += `<rect x="330" y="46" width="290" height="160" rx="10" style="fill:var(--card); stroke:${rc}; stroke-width:2"/><text x="475" y="72" text-anchor="middle" style="fill:${rc}; font:700 13.5px Manrope, sans-serif">${rt}</text>`;
    left.forEach((t, i) => (s += `<text x="40" y="${100 + i * 22}" ${S}>${t}</text>`));
    right.forEach((t, i) => (s += `<text x="350" y="${100 + i * 22}" ${S}>${t}</text>`));
    return s + (foot ? `<text x="20" y="232" ${S}>${foot}</text>` : "");
  };

  /* =====================================================================
     LUDWIG VON MISES
     ===================================================================== */
  const vieMises = lifeline(1881, 1973, [
    [1881, "naissance à Lemberg", true], [1912, "Théorie de la monnaie et du crédit", false], [1920, "le calcul socialiste", true], [1934, "Genève", false],
    [1940, "exil à New York", true], [1949, "L’Action humaine", false], [1973, "mort à New York", true]
  ], "Ludwig von Mises, 1881-1973", "Économiste de la Chambre de commerce de Vienne plutôt que professeur titulaire, Mises enseigne surtout dans un séminaire privé. Chassé par la montée du nazisme, il passe six ans à Genève, puis trente-trois ans aux États-Unis.");

  const cycle = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>La théorie autrichienne du cycle selon Mises (schéma)</text>`;
    s += node(20, 46, 180, 56, "Expansion du crédit", "les banques prêtent plus", "var(--gold)");
    s += node(230, 46, 180, 56, "Taux trop bas", "sous le taux naturel", "var(--gold)");
    s += node(440, 46, 180, 56, "Investissements longs", "usines, immeubles, mines", "var(--note)");
    s += node(440, 146, 180, 56, "Boom", "emploi, prix, profits", "var(--note)");
    s += node(230, 146, 180, 56, "Pénurie de ressources", "l’épargne ne suit pas", "var(--serial)");
    s += node(20, 146, 180, 56, "Crise", "liquidation des erreurs", "var(--serial)");
    s += arrow(202, 74, 228, 74) + arrow(412, 74, 438, 74) + arrow(530, 104, 530, 144) + arrow(438, 174, 412, 174) + arrow(228, 174, 202, 174);
    s += `<text x="20" y="236" ${S}>Le boom repose sur des investissements que l’épargne réelle des ménages ne permet pas d’achever.</text>`;
    s += `<text x="20" y="254" ${S}>Prolonger le crédit retarde la crise mais l’aggrave ; la seule issue est de laisser se corriger les erreurs.</text>`;
    return s;
  })(), "Formulée dans la Théorie de la monnaie et du crédit (1912), puis développée par Hayek, la théorie explique la crise comme la conséquence nécessaire d’un boom artificiel créé par la banque centrale et les banques. Elle s’oppose à l’explication keynésienne par l’insuffisance de la demande.", "Cycle de six étapes du crédit à la crise");

  const calcul = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Le problème du calcul économique (Mises, 1920)</text>`;
    s += cols(["des milliers de biens et de techniques", "des prix de marché pour les facteurs", "le profit et la perte signalent", "les erreurs et les réussites"], ["l’État possède les moyens de production", "pas de marché, donc pas de prix", "pour les machines, les terres, les usines", "impossible de comparer les coûts"], "Économie de marché", "Socialisme intégral", "var(--note)", "var(--serial)", "Sans prix, impossible de savoir si l’acier ou le béton coûte le moins à la société.");
    return s;
  })(), "L’argument de 1920 : la propriété privée des moyens de production crée des marchés et des prix pour ces biens. Sans eux, il n’existe aucune mesure commune pour comparer les coûts de méthodes de production différentes, et le socialisme est condamné à « tâtonner dans l’obscurité ».", "Deux colonnes comparant marché et socialisme");

  OEC.portraits["mises"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Ludwig von Mises (1881-1973), économiste autrichien, est la figure centrale de l’école autrichienne au XXe siècle. Il a soutenu en 1920 qu’une économie socialiste ne peut pas calculer rationnellement, faute de prix de marché pour les moyens de production.",
      "Il a développé une théorie de la monnaie et du crédit qui explique les crises par l’expansion artificielle du crédit, et fondé l’économie sur une science déductive de l’action humaine, la « praxéologie ».",
      "Défenseur intransigeant du libéralisme classique, de l’étalon-or et du laissez-faire, il a été marginalisé par la profession, mais il a inspiré Hayek, le mouvement libertarien américain et l’école autrichienne contemporaine."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Ludwig Heinrich Edler von Mises naît le 29 septembre 1881 à Lemberg, aujourd’hui Lviv en Ukraine, alors en Galicie autrichienne, dans une famille juive anoblie, active dans les chemins de fer et la banque. Il étudie le droit et l’économie à l’université de Vienne, où il obtient son doctorat en 1906. Il participe au séminaire d’Eugen von Böhm-Bawerk, aux côtés de Joseph <a href="#eco-schumpeter">Schumpeter</a> et de marxistes comme Otto Bauer, avec qui il débat vivement.</p>
<p>En 1909, il entre à la Chambre de commerce de Vienne, où il travaille jusqu’en 1934 comme économiste et conseiller du gouvernement. Il publie en 1912 sa Théorie de la monnaie et du crédit, qui le fait connaître. Officier d’artillerie pendant la Première Guerre mondiale, il combat sur le front de l’Est. Après la guerre, il contribue à convaincre le gouvernement autrichien de stopper l’hyperinflation.</p>
${vieMises}
<p>Faute de chaire universitaire, en partie à cause de son libéralisme intransigeant et de l’antisémitisme ambiant, il anime de 1920 à 1934 un séminaire privé dans son bureau de la Chambre de commerce, où se forment Friedrich <a href="#eco-hayek">Hayek</a>, Gottfried Haberler, Fritz Machlup et Oskar Morgenstern. Il fonde en 1927 l’Institut autrichien de recherche conjoncturelle, dirigé par Hayek. En 1934, il accepte un poste à l’Institut universitaire de hautes études internationales de Genève. En 1940, face à l’avancée allemande, il fuit avec sa femme Margit à travers la France et l’Espagne vers New York. Il y enseigne à l’université de New York de 1945 à 1969, avec un salaire payé par des fondations privées, publie L’Action humaine en 1949 et meurt à New York le 10 octobre 1973.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Mises vit l’effondrement de l’Empire austro-hongrois, l’hyperinflation autrichienne de 1921-1922, la montée des partis socialistes et communistes, la révolution russe, la Grande Dépression, le nazisme et la guerre. Il voit dans tous ces événements les conséquences de l’abandon du libéralisme classique au profit de l’étatisme, du nationalisme et du socialisme.</p>
<p>À Vienne, la social-démocratie gouverne la ville, et le marxisme austro-marxiste domine une partie de la vie intellectuelle. Au début des années 1920, de nombreux économistes pensent qu’une économie planifiée, sans marché, pourrait être plus efficace et plus juste. L’expérience soviétique du « communisme de guerre » semble le tester.</p>
<p>Mises défend l’héritage de l’école autrichienne de Carl Menger et de Böhm-Bawerk, fondée sur l’utilité subjective, contre l’école historique allemande, qui refuse les théories générales, et contre l’économie mathématique de <a href="#eco-walras">Walras</a>, qu’il juge incapable de saisir l’action humaine dans le temps.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La valeur de la monnaie</h4>
<p>Dans la Théorie de la monnaie et du crédit (1912), Mises applique l’utilité marginale à la monnaie. Il explique pourquoi la monnaie a une valeur : elle est demandée parce qu’on s’attend à pouvoir l’échanger, et cette attente remonte, par un « théorème de régression », jusqu’à un temps où elle était une marchandise utile en elle-même, comme l’or (<a href="#c-fonctions-monnaie">voir fonctions de la monnaie</a>).</p>
<h4>2. Le crédit et le cycle</h4>
<p>Quand les banques créent du crédit au-delà de l’épargne disponible, les taux tombent sous leur niveau naturel. Les entreprises lancent des investissements longs que l’épargne réelle ne permet pas d’achever. Le boom finit en crise, qui est la liquidation nécessaire de ces erreurs (<a href="#c-cycles">voir cycles économiques</a>).</p>
${cycle}
<h4>3. Le calcul économique sous le socialisme</h4>
<p>En 1920, Mises publie un article qui fait date : sans propriété privée des moyens de production, il n’y a pas de marché pour ces biens, donc pas de prix, donc pas de calcul possible des coûts. Une économie socialiste ne peut pas savoir quelles méthodes de production sont efficaces. Ce « débat sur le calcul socialiste » mobilise les économistes pendant des décennies (<a href="#c-equilibre-general">voir équilibre général</a>).</p>
${calcul}
<h4>4. L’interventionnisme</h4>
<p>Mises soutient que les interventions partielles de l’État, contrôle des prix, salaires minimum, protections, produisent des effets contraires à leurs objectifs, qui appellent de nouvelles interventions. L’interventionnisme conduit ainsi, par étapes, au socialisme. Il n’y a pas, selon lui, de voie du milieu stable.</p>
<h4>5. La praxéologie</h4>
<p>Dans L’Action humaine (1949), Mises fonde l’économie sur un axiome : l’homme agit, c’est-à-dire qu’il utilise des moyens pour atteindre des fins. Toute la théorie économique se déduit logiquement de cet axiome, comme la géométrie. Elle est vraie a priori, sans pouvoir être vérifiée ou réfutée par l’expérience. Cette position méthodologique isole Mises de la plupart des économistes.</p>
<h4>6. Le subjectivisme</h4>
<p>Les valeurs sont subjectives : elles dépendent des préférences de chacun, qu’on ne peut ni mesurer ni comparer entre personnes. L’économiste ne doit pas juger les fins des individus, mais seulement analyser les moyens. C’est pourquoi Mises rejette les mathématiques et l’économétrie, qui supposent des grandeurs mesurables et constantes.</p>
<h4>7. Le libéralisme classique</h4>
<p>Mises défend la propriété privée, le marché libre, l’étalon-or, le libre-échange et la paix comme conditions de la prospérité et de la civilisation. Il juge que l’État doit se limiter à protéger la vie, la propriété et les contrats. Il est l’un des penseurs les plus intransigeants du libéralisme au XXe siècle.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Théorie de la monnaie et du crédit (1912).</b> L’application de l’utilité marginale à la monnaie et la première formulation de la théorie autrichienne du cycle.</p>
<p><b>« Le calcul économique en régime socialiste » (1920).</b> L’article qui lance le débat sur le calcul socialiste, développé en 1922 dans Le Socialisme.</p>
<p><b>Le Socialisme (1922).</b> Une critique systématique du socialisme sous toutes ses formes, économique, sociologique et morale.</p>
<p><b>Libéralisme (1927).</b> Un exposé accessible du libéralisme classique et de son programme.</p>
<p><b>L’Action humaine (1949).</b> Son traité, près de neuf cents pages, version américaine d’un livre publié à Genève en 1940, qui expose la praxéologie et l’ensemble de son système.</p>
<p><b>Théorie et histoire (1957).</b> Une réflexion sur la méthode des sciences humaines et une critique de l’historicisme et du marxisme.</p>` }
    ],
    cas: [
      { titre: "Les années genevoises", html: `
<p>En 1934, Mises quitte Vienne pour l’Institut universitaire de hautes études internationales de Genève, fondé en 1927 par William Rappard et Paul Mantoux. Il y retrouve Wilhelm Röpke et d’autres libéraux exilés. Ces six années, qu’il décrira comme parmi les plus heureuses de sa vie, lui permettent d’écrire en toute liberté son grand traité, Nationalökonomie, publié à Genève en 1940. Il épouse en 1938 Margit Sereny, actrice viennoise. En 1940, la Suisse lui paraît menacée par l’Allemagne nazie ; il part pour les États-Unis.</p>` },
      { titre: "Les archives de Moscou", html: `
<p>En 1938, après l’annexion de l’Autriche, la Gestapo saisit dans l’appartement viennois de Mises ses papiers, ses livres et sa correspondance. Mises les croyait perdus. En 1945, les archives saisies par les nazis tombent aux mains de l’Armée rouge et sont transportées à Moscou. Elles n’y sont redécouvertes qu’au milieu des années 1990, après la chute de l’Union soviétique, par l’historien Richard Ebeling. Ironie de l’histoire : les papiers du grand critique du socialisme ont passé un demi-siècle dans une archive secrète soviétique.</p>` },
      { titre: "« Une bande de socialistes »", html: `
<p>Lors de la réunion fondatrice de la Société du Mont-Pèlerin, en 1947, les participants débattent de la redistribution des revenus et du rôle de l’État. Selon un récit souvent rapporté, notamment par <a href="#eco-friedman">Milton Friedman</a>, Mises se lève et quitte la salle en lançant : « Vous êtes tous une bande de socialistes ! » L’anecdote illustre son intransigeance, y compris envers des libéraux qui acceptaient un minimum de protection sociale.</p>` },
      { titre: "Le séminaire privé de Vienne", html: `
<p>De 1920 à 1934, Mises réunit tous les quinze jours, dans son bureau de la Chambre de commerce, une vingtaine d’économistes, de philosophes et de sociologues. Après la séance, la discussion se poursuit au café Künstler. Plusieurs participants deviendront des économistes de premier plan : Hayek, Haberler, Machlup, Morgenstern, cofondateur de la théorie des jeux, ou le sociologue Alfred Schütz. Le séminaire est l’un des foyers intellectuels de la Vienne de l’entre-deux-guerres.</p>` }
    ],
    objections: `
<h4>1. Le socialisme de marché</h4>
<p>Oskar Lange et Abba Lerner répondent dans les années 1930 qu’un bureau central pourrait fixer des prix par tâtonnement, comme le crieur de Walras, et atteindre l’efficacité. Hayek déplacera le débat vers la question de la connaissance dispersée, plus convaincante.</p>
<h4>2. Une méthode irréfutable</h4>
<p>La praxéologie, qui prétend déduire toute l’économie d’axiomes vrais a priori, est rejetée par la plupart des économistes et des philosophes des sciences, comme Karl Popper, pour qui une théorie qui ne peut être réfutée par l’expérience n’est pas scientifique. Même des économistes libéraux, comme Friedman, la jugent dogmatique.</p>
<h4>3. La théorie du cycle contestée</h4>
<p>Les keynésiens jugent que la recommandation de laisser se liquider les erreurs pendant une dépression aggrave le chômage et la déflation. Friedman et Schwartz ont montré que la contraction monétaire de 1929-1933 avait aggravé la Grande Dépression, contrairement à l’idée d’une purge salutaire.</p>
<h4>4. L’interventionnisme n’est pas une pente fatale</h4>
<p>Les économies mixtes d’après-guerre, avec des interventions importantes de l’État, sont restées des économies de marché prospères et démocratiques. La pente vers le socialisme intégral que décrivait Mises ne s’est pas vérifiée dans les démocraties occidentales.</p>`,
    ecoles: `
<p><b>Carl Menger</b> et <b>Eugen von Böhm-Bawerk</b> sont ses maîtres de l’école autrichienne.</p>
<p><b><a href="#eco-hayek">Friedrich Hayek</a></b>, son élève, développe la théorie des cycles et de la connaissance.</p>
<p><b>Murray Rothbard</b> radicalise son libéralisme en anarcho-capitalisme.</p>
<p><b>Israel Kirzner</b> développe sa théorie de l’entrepreneur et du processus de marché.</p>
<p><b>Le Ludwig von Mises Institute</b>, fondé en 1982 en Alabama, diffuse son œuvre.</p>
<p><b>Les partisans des cryptomonnaies</b> et de l’étalon-or se réclament souvent de sa théorie de la monnaie.</p>`,
    source: {
      titre: "Ludwig von Mises, « Le calcul économique en régime socialiste », 1920",
      texte: "Là où il n’y a pas de marché libre, il n’y a pas de mécanisme des prix ; sans mécanisme des prix, il n’y a pas de calcul économique.",
      notes: `
<p><b>Le cœur de l’argument.</b> Mises ne dit pas que le socialisme est injuste ou impopulaire, mais qu’il est techniquement impossible de l’organiser rationnellement : sans prix, on ne peut pas comparer les coûts de méthodes de production qui utilisent des ressources différentes.</p>
<p><b>Les biens de consommation ne suffisent pas.</b> Mises admet qu’une société socialiste pourrait avoir des prix pour les biens de consommation. Le problème concerne les moyens de production, qui, possédés par l’État, ne s’échangent pas et n’ont donc pas de prix.</p>
<p><b>Une prophétie discutée.</b> L’économie soviétique a fonctionné pendant soixante-dix ans, en utilisant notamment les prix mondiaux comme repères, mais avec des gaspillages considérables. Ses défenseurs y voient une confirmation partielle de l’argument ; ses critiques, une réfutation de l’impossibilité absolue.</p>`
    },
    quiz: [
      { q: "Quel argument Mises avance-t-il en 1920 contre le socialisme ?",
        o: ["Il est injuste", "Sans prix de marché pour les moyens de production, le calcul économique rationnel est impossible", "Il est trop coûteux", "Il est impopulaire"], c: 1,
        e: "C’est le point de départ du débat sur le calcul socialiste." },
      { q: "Qu’est-ce qui provoque les crises selon la théorie autrichienne du cycle ?",
        o: ["L’insuffisance de la demande", "Une expansion du crédit qui maintient les taux sous leur niveau naturel", "Les syndicats", "Le commerce extérieur"], c: 1,
        e: "Le boom repose sur des investissements que l’épargne réelle ne permet pas d’achever." },
      { q: "Qu’est-ce que la praxéologie ?",
        o: ["Une méthode statistique", "Une science déductive de l’action humaine, fondée sur l’axiome que l’homme agit", "Une théorie de la monnaie", "Une école de droit"], c: 1,
        e: "Ses propositions seraient vraies a priori." },
      { q: "Dans quelle ville suisse Mises enseigne-t-il de 1934 à 1940 ?",
        o: ["Zurich", "Genève", "Bâle", "Lausanne"], c: 1,
        e: "À l’Institut universitaire de hautes études internationales." },
      { q: "Quel élève célèbre de Mises dirige l’Institut autrichien de recherche conjoncturelle ?",
        o: ["Schumpeter", "Hayek", "Keynes", "Friedman"], c: 1,
        e: "Fondé par Mises en 1927." }
    ],
    ouverte: {
      q: "En 2014, les Suisses ont rejeté à 77 % l’initiative « Sauvez l’or de la Suisse », qui voulait obliger la BNS à détenir au moins 20 % de ses actifs en or. Mises aurait-il soutenu cette initiative ?",
      r: "Mises était un partisan convaincu de l’étalon-or, qu’il voyait comme la meilleure protection contre l’inflation et contre la tentation des gouvernements de financer leurs dépenses par la création monétaire. Il aurait sans doute approuvé l’esprit de l’initiative, qui voulait renforcer le lien entre le franc et l’or et interdire à la BNS de vendre ses réserves. Mais l’initiative ne rétablissait pas un véritable étalon-or, avec la convertibilité des billets ; elle se contentait d’imposer une proportion minimale d’or dans le bilan de la BNS, ce qui aurait limité sa capacité à défendre le franc sans garantir la stabilité monétaire. Mises aurait aussi pu juger qu’une banque centrale, même adossée à l’or, reste un monopole public. La BNS et la majorité des économistes estimaient que l’initiative aurait réduit sa marge de manœuvre et exposé ses comptes à la volatilité du prix de l’or. Le franc suisse a d’ailleurs été lié à l’or par la Constitution jusqu’en 2000."
    },
    lectures: [
      ["Accessible", "Ludwig von Mises, Libéralisme, 1927."],
      ["Accessible", "Israel Kirzner, Ludwig von Mises: The Man and His Economics, 2001."],
      ["Intermédiaire", "Ludwig von Mises, « Le calcul économique en régime socialiste », 1920."],
      ["Intermédiaire", "Jörg Guido Hülsmann, Mises: The Last Knight of Liberalism, 2007."],
      ["Recherche", "Ludwig von Mises, L’Action humaine, 1949, parties I et IV ; Don Lavoie, Rivalry and Central Planning, 1985."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Le libéral intransigeant</h3>
<p>Ludwig von Mises (1881-1973), né à Lemberg dans l’Empire austro-hongrois, est l’un des grands noms de l’école autrichienne d’économie. À Vienne, il forme dans un séminaire privé des économistes comme Hayek. Chassé par la montée du nazisme, il enseigne six ans à Genève, puis s’exile à New York.</p>
${vieMises}
<h3>Pourquoi le socialisme ne peut pas calculer</h3>
<p>En 1920, Mises lance un défi aux socialistes : sans propriété privée des usines et des terres, il n’y a pas de marché pour ces biens, donc pas de prix. Comment savoir alors s’il vaut mieux construire en acier ou en béton ? Sans prix, l’économie planifiée navigue à l’aveugle.</p>
${calcul}
<h3>Le crédit et les crises</h3>
<p>Pour Mises, les crises viennent du crédit trop facile : les banques prêtent trop, les entreprises investissent dans des projets que l’épargne ne permet pas de terminer, et la crise finit par corriger ces erreurs. Partisan de l’étalon-or, il se méfie des banques centrales.</p>
<h3>À retenir</h3>
<p>Mises a posé une question décisive sur le rôle des prix. Le portrait complet présente sa vie, sa pensée et ses critiques.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      vie: "De Lemberg à Vienne, Genève et New York.",
      epoque: "L’effondrement de l’Empire, l’hyperinflation et la tentation socialiste.",
      pensee: "Sept étapes, de la valeur de la monnaie au libéralisme classique.",
      livres: "De la Théorie de la monnaie à L’Action humaine.",
      cas: "Les années genevoises, les archives de Moscou, le Mont-Pèlerin, le séminaire privé.",
      objections: "Le socialisme de marché, une méthode irréfutable, le cycle contesté, l’économie mixte.",
      ecoles: "Menger et Böhm-Bawerk, Hayek, Rothbard, Kirzner, le Mises Institute, les cryptomonnaies.",
      source: "Pas de marché, pas de prix, pas de calcul.",
      quiz: "Cinq questions corrigées et une question sur l’initiative sur l’or.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     THORSTEIN VEBLEN
     ===================================================================== */
  const vieVeblen = lifeline(1857, 1929, [
    [1857, "naissance dans le Wisconsin", true], [1884, "doctorat à Yale", false], [1892, "université de Chicago", true], [1899, "Théorie de la classe de loisir", false],
    [1904, "Théorie de l’entreprise", true], [1906, "Stanford, puis le Missouri", false], [1919, "New School de New York", true], [1929, "mort en Californie", false]
  ], "Thorstein Veblen, 1857-1929", "Fils d’immigrés norvégiens, Veblen mène une carrière universitaire chaotique, marquée par les scandales et les renvois. Il meurt en Californie en août 1929, moins de trois mois avant le krach qu’il avait, d’une certaine manière, annoncé.");

  const industrie = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Industrie et affaires selon Veblen (Théorie de l’entreprise, 1904)</text>`;
    s += cols(["ingénieurs, techniciens, ouvriers", "fabriquer des biens utiles", "« l’instinct du travail bien fait »", "efficacité, coopération, outillage"], ["financiers, hommes d’affaires", "gagner de l’argent", "propriété, crédit, spéculation", "parfois freiner la production"], "L’industrie", "Les affaires", "var(--note)", "var(--serial)", "Les profits des affaires peuvent exiger de limiter la production, comme le font les ententes et les monopoles.");
    return s;
  })(), "Veblen distingue la logique de la production, fondée sur l’efficacité technique, et celle des affaires, fondée sur le gain pécuniaire. Les deux ne coïncident pas : le « sabotage » de la production par les intérêts financiers est l’un de ses thèmes favoris.", "Deux colonnes comparant industrie et affaires");

  OEC.portraits["veblen"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Thorstein Veblen (1857-1929), économiste et sociologue américain d’origine norvégienne, est le fondateur de l’institutionnalisme. Il est célèbre pour La Théorie de la classe de loisir (1899), où il invente la notion de « consommation ostentatoire ».",
      "Il critique l’économie néoclassique, qui fait de l’homme un calculateur de plaisirs et de peines, et veut une économie évolutionniste, qui étudie comment les institutions, les habitudes et les techniques changent au fil du temps.",
      "Il oppose la logique de l’industrie, fondée sur l’efficacité technique, à celle des affaires, fondée sur le profit pécuniaire. Ironiste et non-conformiste, il a profondément influencé l’économie institutionnelle, la sociologie et la critique de la société de consommation."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Thorstein Bunde Veblen naît le 30 juillet 1857 dans le Wisconsin, sixième de douze enfants d’immigrés norvégiens, fermiers. Il grandit dans une ferme du Minnesota, dans une communauté qui parle norvégien et vit à l’écart de la société américaine. Il étudie au Carleton College, où il a pour professeur l’économiste John Bates Clark, puis à l’université Johns Hopkins et à Yale, où il obtient en 1884 un doctorat de philosophie consacré à Kant.</p>
<p>Ne trouvant pas de poste, en partie parce qu’il se déclare agnostique, il passe sept ans dans les fermes familiales, à lire. En 1891, il reprend des études d’économie à l’université Cornell, puis suit son professeur à la nouvelle université de Chicago, en 1892, où il dirige de fait le Journal of Political Economy. Il y publie en 1899 La Théorie de la classe de loisir, qui le rend célèbre.</p>
${vieVeblen}
<p>Sa carrière est ensuite chaotique. Ses liaisons et son mode de vie non conformiste l’obligent à quitter Chicago en 1906, puis l’université Stanford en 1909. Il enseigne à l’université du Missouri de 1911 à 1918, publie L’Instinct du travail bien fait (1914) et L’Allemagne impériale et la révolution industrielle (1915), travaille brièvement pour l’administration pendant la guerre, puis rejoint en 1919 la New School for Social Research de New York. Il se retire en Californie, où il meurt le 3 août 1929 dans une cabane près de Menlo Park.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Veblen observe les États-Unis du « Gilded Age », l’âge doré, entre la guerre de Sécession et le début du XXe siècle. Le pays s’industrialise à une vitesse spectaculaire ; des fortunes colossales se constituent dans les chemins de fer, l’acier, le pétrole et la finance, autour des Carnegie, Rockefeller, Vanderbilt et Morgan. Les grandes familles exhibent leur richesse dans des demeures somptueuses et des fêtes extravagantes.</p>
<p>C’est aussi l’époque des grands trusts, des fusions géantes et de la spéculation boursière, des luttes ouvrières et des crises financières, comme celles de 1893 et de 1907. L’économie néoclassique, qui s’impose à l’université avec John Bates Clark, explique que chacun est payé selon sa contribution productive, une vision que Veblen juge apologétique.</p>
<p>Lecteur de Darwin, Veblen pense que l’économie devrait étudier l’évolution des institutions humaines comme la biologie étudie l’évolution des espèces, au lieu de décrire un équilibre intemporel.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Une économie évolutionniste</h4>
<p>Dans un article de 1898, « Pourquoi l’économie n’est-elle pas une science évolutionniste ? », Veblen reproche à l’économie de son temps de se fonder sur une psychologie hédoniste et de rechercher des équilibres. Il veut une science qui étudie les processus cumulatifs de changement des institutions, des habitudes de pensée collectives.</p>
<h4>2. Les institutions</h4>
<p>Pour Veblen, les institutions sont des habitudes de pensée partagées, transmises et lentement transformées par les conditions matérielles, en particulier la technique. Elles retardent toujours sur les changements techniques, ce qui crée des tensions.</p>
<h4>3. La classe de loisir</h4>
<p>Dans les sociétés fondées sur la propriété, la richesse donne le statut, mais elle doit être montrée. La classe supérieure le fait par le « loisir ostentatoire », l’abstention de tout travail productif, et par la « consommation ostentatoire », la dépense visible et le gaspillage (<a href="#c-consommation-ostentatoire">voir consommation ostentatoire</a>).</p>
<h4>4. L’émulation pécuniaire</h4>
<p>Chaque classe imite la consommation de la classe supérieure, et les normes de dépense descendent l’échelle sociale. Cette course au statut explique une part importante des dépenses, et les biens dont le prix élevé fait l’attrait.</p>
<h4>5. Industrie et affaires</h4>
<p>Dans La Théorie de l’entreprise (1904), Veblen oppose l’industrie, la production efficace de biens par les techniciens et les ouvriers, et les affaires, la recherche du profit par les propriétaires et les financiers. Les intérêts financiers peuvent entrer en conflit avec la production : limiter l’offre pour maintenir les prix, manipuler les valeurs boursières.</p>
${industrie}
<h4>6. L’instinct du travail bien fait</h4>
<p>Veblen pense que l’homme possède un « instinct du travail bien fait », un goût pour l’efficacité et l’utile, et un « instinct parental », un souci du bien-être des autres. Ces instincts sont contrariés par les institutions prédatrices héritées des sociétés guerrières, qui valorisent l’exploit et la prise plutôt que la production.</p>
<h4>7. Les ingénieurs</h4>
<p>Dans Les Ingénieurs et le système des prix (1921), Veblen imagine que les ingénieurs, dépositaires de la connaissance technique, pourraient prendre le contrôle de la production et l’organiser au service de l’utilité, plutôt que du profit. Cette idée inspirera le mouvement « technocratique » des années 1930.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>La Théorie de la classe de loisir (1899).</b> Son livre le plus célèbre, une étude ironique des comportements de la classe aisée, de la mode au sport et à l’enseignement supérieur.</p>
<p><b>La Théorie de l’entreprise (1904).</b> Une analyse du capitalisme financier, du crédit, des fusions et des crises, fondée sur l’opposition entre industrie et affaires.</p>
<p><b>L’Instinct du travail bien fait et l’état des arts industriels (1914).</b> Le livre que Veblen jugeait son plus important, sur l’évolution de la technique et des institutions.</p>
<p><b>L’Allemagne impériale et la révolution industrielle (1915).</b> Une analyse comparée de l’industrialisation allemande et britannique, qui étudie les avantages du « retardataire ».</p>
<p><b>Le Savoir supérieur en Amérique (1918).</b> Une satire des universités dirigées par des hommes d’affaires.</p>
<p><b>La Propriété absente (1923).</b> Une critique de la séparation entre la propriété des entreprises et leur gestion, au profit des financiers.</p>` }
    ],
    cas: [
      { titre: "Le professeur qui décourageait les étudiants", html: `
<p>Veblen était, selon ses contemporains, un enseignant étrange : il parlait d’une voix basse et monotone, sans regarder son auditoire, et notait tous ses étudiants de la même façon, quel que soit leur travail. On raconte qu’il cherchait à réduire le nombre d’inscrits à ses cours, et que certaines années, il ne lui restait qu’une poignée d’étudiants, mais parmi eux de futurs économistes de premier plan, comme Wesley Mitchell, fondateur du National Bureau of Economic Research.</p>` },
      { titre: "Les universités et les hommes d’affaires", html: `
<p>Dans Le Savoir supérieur en Amérique (1918), Veblen raille les présidents d’universités, qu’il appelle des « capitaines d’érudition », qui gèrent les établissements comme des entreprises, multiplient les bâtiments prestigieux et les sports pour attirer les dons, au détriment de la recherche désintéressée. Il avait d’abord prévu un sous-titre provocateur : « une étude de la dégradation complète ». Le livre reste cité dans les débats sur la marchandisation de l’enseignement supérieur.</p>` },
      { titre: "Le mouvement technocratique", html: `
<p>Après la crise de 1929, un mouvement « technocratique », inspiré par Veblen et animé notamment par l’ingénieur Howard Scott, connaît un bref succès aux États-Unis. Il propose de confier la gestion de l’économie à des ingénieurs et de remplacer la monnaie par des certificats d’énergie. Le mouvement décline rapidement, mais l’idée que les experts techniques pourraient gérer l’économie plus rationnellement que les financiers reste une tentation récurrente.</p>` },
      { titre: "Les biens de Veblen", html: `
<p>En 1950, l’économiste Harvey Leibenstein appelle « effet Veblen » le phénomène par lequel la demande d’un bien augmente avec son prix, parce que ce prix signale la richesse de l’acheteur. Les « biens de Veblen », comme certaines montres de luxe, sacs de marque ou grands vins, sont devenus une catégorie classique des manuels de microéconomie, ce qui est une forme d’ironie pour un critique de l’économie standard.</p>` }
    ],
    objections: `
<h4>1. Un ironiste plus qu’un théoricien</h4>
<p>Les critiques de Veblen lui reprochent de préférer la satire à la démonstration, et de ne pas proposer de théorie alternative précise et testable. Son style ironique rend parfois difficile de savoir s’il décrit ou s’il dénonce.</p>
<h4>2. La consommation n’est pas que du statut</h4>
<p>Réduire les dépenses des classes aisées à la recherche du prestige néglige le goût, le plaisir et la qualité. L’économie moderne intègre les effets de statut, mais comme une motivation parmi d’autres.</p>
<h4>3. La technocratie et la démocratie</h4>
<p>L’idée de confier l’économie aux ingénieurs a été critiquée comme antidémocratique et naïve : les choix économiques impliquent des valeurs et des arbitrages que la technique ne peut pas trancher seule.</p>
<h4>4. Une psychologie datée</h4>
<p>Sa théorie des instincts, inspirée de la psychologie de son temps, est aujourd’hui largement abandonnée. Mais l’économie comportementale et l’économie institutionnelle moderne ont repris plusieurs de ses intuitions, sur les habitudes, les normes sociales et les institutions.</p>`,
    ecoles: `
<p><b>John R. Commons</b> et <b>Wesley Mitchell</b> fondent avec lui l’institutionnalisme américain.</p>
<p><b>Clarence Ayres</b> développe son opposition entre technique et institutions.</p>
<p><b><a href="#eco-galbraith">John Kenneth Galbraith</a></b> reprend sa critique de la grande entreprise et de la consommation.</p>
<p><b>Douglass North</b> et la nouvelle économie institutionnelle redonnent une place centrale aux institutions.</p>
<p><b>Pierre Bourdieu</b>, sociologue, prolonge son analyse de la distinction sociale.</p>
<p><b>Robert Frank</b> et l’économie comportementale formalisent ses idées sur les biens positionnels.</p>`,
    source: {
      titre: "Thorstein Veblen, « Why Is Economics Not an Evolutionary Science? », Quarterly Journal of Economics, 1898",
      texte: "La conception hédoniste de l’homme est celle d’un calculateur fulgurant de plaisirs et de peines, qui oscille comme un globule homogène de désir de bonheur sous l’impulsion des stimuli qui le déplacent dans l’espace, mais le laissent intact.",
      notes: `
<p><b>Une caricature célèbre.</b> Veblen se moque de l’homme de l’économie néoclassique, réduit à un calculateur passif, sans passé ni avenir, que les circonstances déplacent sans le transformer.</p>
<p><b>L’alternative.</b> Pour Veblen, l’homme est un être actif, façonné par ses habitudes et ses institutions, qui se transforment au fil de son expérience. L’économie doit étudier ce processus, à la manière de la biologie évolutionniste.</p>
<p><b>Une critique toujours vivante.</b> La phrase est citée par les économistes institutionnalistes, évolutionnistes et comportementaux, qui reprochent à la théorie standard de supposer des préférences fixes et une rationalité parfaite.</p>`
    },
    quiz: [
      { q: "Quel livre rend Veblen célèbre en 1899 ?",
        o: ["La Théorie de l’entreprise", "La Théorie de la classe de loisir", "Les Ingénieurs et le système des prix", "La Propriété absente"], c: 1,
        e: "Il y invente la notion de consommation ostentatoire." },
      { q: "Quelle école Veblen fonde-t-il ?",
        o: ["L’école autrichienne", "L’institutionnalisme", "L’école de Chicago", "Le monétarisme"], c: 1,
        e: "Avec Commons et Mitchell." },
      { q: "Quelle opposition Veblen fait-il dans La Théorie de l’entreprise ?",
        o: ["Entre travail et capital", "Entre l’industrie, logique de l’efficacité, et les affaires, logique du profit", "Entre ville et campagne", "Entre État et marché"], c: 1,
        e: "Les intérêts financiers peuvent freiner la production." },
      { q: "Comment Veblen caricature-t-il l’homme de l’économie néoclassique ?",
        o: ["Comme un guerrier", "Comme un calculateur fulgurant de plaisirs et de peines", "Comme un artiste", "Comme un paysan"], c: 1,
        e: "Dans son article de 1898." },
      { q: "Qu’est-ce qu’un « bien de Veblen » ?",
        o: ["Un bien produit par des ingénieurs", "Un bien dont la demande augmente avec le prix, car le prix signale la richesse", "Un bien gratuit", "Un bien agricole"], c: 1,
        e: "Le terme vient de Harvey Leibenstein (1950)." }
    ],
    ouverte: {
      q: "La place financière suisse représente une part importante de l’économie du pays. Veblen y verrait-il une activité « industrielle » ou une activité « d’affaires » ?",
      r: "Veblen aurait sans doute rangé une grande partie de la finance parmi les « affaires » : la gestion de fortune, le négoce de matières premières, les transactions financières visent d’abord le gain pécuniaire, et non la production directe de biens utiles. Il aurait été critique envers les activités spéculatives et les montages destinés à accroître les profits sans améliorer la production, et y aurait vu une forme de « propriété absente ». Mais la finance remplit aussi des fonctions que Veblen reconnaissait mal : financer l’investissement des entreprises industrielles, gérer l’épargne pour la retraite, assurer les risques. La crise de Credit Suisse, en 2023, aurait conforté sa méfiance envers une logique financière déconnectée de l’économie réelle. Un veblenien moderne insisterait sur la nécessité d’institutions, de règles et de normes qui orientent la finance vers le service de l’industrie plutôt que vers la spéculation."
    },
    lectures: [
      ["Accessible", "Thorstein Veblen, Théorie de la classe de loisir, 1899, chapitres 3 et 4."],
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitre sur Veblen."],
      ["Intermédiaire", "Thorstein Veblen, The Theory of Business Enterprise, 1904."],
      ["Intermédiaire", "John Patrick Diggins, Thorstein Veblen: Theorist of the Leisure Class, 1999."],
      ["Recherche", "Thorstein Veblen, « Why Is Economics Not an Evolutionary Science? », 1898 ; Geoffrey Hodgson, The Evolution of Institutional Economics, 2004."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Le fils de fermiers norvégiens</h3>
<p>Thorstein Veblen (1857-1929) grandit dans une ferme du Minnesota, dans une famille d’immigrés norvégiens. Docteur en philosophie, il ne trouve d’abord pas de travail, puis enseigne l’économie à Chicago. Sa vie non conformiste l’oblige à changer plusieurs fois d’université.</p>
${vieVeblen}
<h3>Montrer sa richesse</h3>
<p>Dans La Théorie de la classe de loisir (1899), Veblen observe les grandes fortunes américaines. Il explique que les riches ne dépensent pas seulement pour leur confort, mais pour montrer leur rang : c’est la « consommation ostentatoire ». Chaque classe sociale imite la classe au-dessus d’elle.</p>
<h3>Fabriquer ou gagner de l’argent ?</h3>
<p>Veblen oppose les ingénieurs et les ouvriers, qui cherchent à bien produire, aux financiers, qui cherchent le profit, quitte à freiner la production. Il critique aussi l’économie de son temps, qui fait de l’homme un simple calculateur de plaisirs, et veut une économie qui étudie l’évolution des habitudes et des institutions.</p>
${industrie}
<h3>À retenir</h3>
<p>Veblen est le fondateur de l’institutionnalisme et un grand critique de la société de consommation. Le portrait complet présente sa vie, ses idées et ses héritiers.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "Du Minnesota à Chicago, Stanford, le Missouri et New York.",
      epoque: "L’âge doré américain, les trusts et la spéculation.",
      pensee: "Sept étapes, de l’économie évolutionniste aux ingénieurs.",
      livres: "De la Théorie de la classe de loisir à La Propriété absente.",
      cas: "Le professeur, les universités, la technocratie, les biens de Veblen.",
      objections: "Un ironiste, la consommation, la technocratie, une psychologie datée.",
      ecoles: "Commons et Mitchell, Ayres, Galbraith, North, Bourdieu, Robert Frank.",
      source: "Un calculateur fulgurant de plaisirs et de peines.",
      quiz: "Cinq questions corrigées et une question sur la place financière suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
