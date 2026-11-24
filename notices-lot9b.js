/* Œconomia — notices longues, lot 9 (b) : travail non rémunéré, mode de régulation */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };
  const box = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  /* =====================================================================
     TRAVAIL NON RÉMUNÉRÉ
     ===================================================================== */
  const heures = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Suisse, 2020 : heures de travail en une année</text>`;
    const max = 10, L = 190, W = 400;
    [["Travail non rémunéré", 9.8, "var(--gold)"], ["Travail rémunéré", 7.6, "var(--note)"]].forEach(([n, v, c], i) => {
      const y = 60 + i * 70, w = (v / max) * W;
      s += `<text x="20" y="${y + 24}" style="fill:var(--ink); font:600 12.5px Manrope, sans-serif">${n}</text>`;
      s += `<rect x="${L}" y="${y}" width="${w}" height="38" rx="5" style="fill:${c}; opacity:.85"/>`;
      s += `<text x="${L + w + 8}" y="${y + 24}" style="fill:var(--ink); font:700 13px Manrope, sans-serif">${String(v).replace(".", ",")} milliards</text>`;
    });
    s += `<text x="20" y="220" ${S}>Valeur estimée du travail non rémunéré : 434 milliards de francs, dont environ 60 % assurés par des femmes.</text>`;
    return s;
  })(), "Source : OFS, compte satellite de production des ménages 2020 (communiqué du 5 décembre 2022), valeurs arrondies. On consacre en Suisse davantage d’heures au travail non payé qu’au travail payé ; le PIB n’en compte aucune.", "Diagramme comparant les heures de travail rémunéré et non rémunéré en Suisse en 2020");

  OEC.notices["travail-non-remunere"] = {
    essentiel: [
      "Le travail non rémunéré regroupe les tâches domestiques, les soins aux enfants et aux proches, et le bénévolat. Il produit des biens et des services utiles, mais comme il ne passe pas par un marché, le PIB ne le compte pas.",
      "En Suisse, on y consacre davantage d’heures qu’au travail payé : 9,8 milliards d’heures en 2020, pour une valeur estimée par l’OFS à 434 milliards de francs. Les femmes en assurent la plus grande part.",
      "Mis en lumière par Marilyn Waring en 1988, ce travail est aujourd’hui mesuré par de nombreux offices statistiques. Il touche les retraites, l’égalité salariale, l’accueil des enfants et le vieillissement de la population."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : que mesure le PIB ?", html: `
<p>Un économiste britannique du début du XXe siècle, Arthur Pigou, aurait relevé un paradoxe : si un homme épouse sa gouvernante, le revenu national baisse, car le même travail, autrefois payé, devient gratuit. La production n’a pas changé ; seule la manière de la compter a changé.</p>
<p>Le <a href="#c-pib">PIB</a> mesure la production qui s’échange contre de l’argent, plus les services publics. Il laisse de côté la cuisine, le ménage, l’éducation des enfants, les soins aux parents âgés, l’aide aux voisins. En 1988, l’ancienne députée néo-zélandaise Marilyn <a href="#eco-waring">Waring</a> montre que cette convention n’est pas neutre : elle rend invisible la moitié du travail humain, surtout celui des femmes, et donc absente des politiques. La question devient : faut-il, et comment, compter ce travail ?</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Ce qu’on appelle travail non rémunéré</h4>
<p>On parle d’activités qui pourraient être confiées à quelqu’un d’autre contre paiement : cuisiner, nettoyer, s’occuper des enfants, soigner un proche, faire du bénévolat. Dormir ou se divertir n’en font pas partie : personne ne peut le faire à votre place.</p>
<h4>2. Le mesurer en temps</h4>
<p>La première étape consiste à mesurer le temps passé, par des enquêtes où des milliers de personnes décrivent leur emploi du temps. En Suisse, l’OFS le fait à partir de l’enquête sur la population active.</p>
${heures}
<h4>3. Lui donner une valeur</h4>
<p>On peut ensuite estimer sa valeur. Deux méthodes s’opposent. Le coût de remplacement : combien coûterait une personne payée pour faire le même travail, par exemple une aide ménagère ? Le coût d’opportunité : combien la personne aurait-elle gagné en travaillant contre salaire pendant ce temps ? Les résultats peuvent varier du simple au double.</p>
<h4>4. Pourquoi c’est important</h4>
<p>Ignorer ce travail fausse les décisions. Une coupe dans les crèches ou les soins à domicile semble faire des économies, alors qu’elle reporte du travail sur les familles. Une hausse du PIB peut simplement traduire le passage d’un travail gratuit à un travail payé, sans plus de production réelle.</p>
<h4>5. Une question d’égalité</h4>
<p>Le travail non payé est réparti de façon inégale. Les femmes en assurent la plus grande part, ce qui limite leur temps de travail rémunéré, leurs salaires, leur carrière et ensuite leur retraite (<a href="#c-capabilites">voir capabilités</a>).</p>
<h4>6. Une question d’avenir</h4>
<p>Avec le vieillissement de la population, les besoins de soins augmentent. Qui les assurera : les familles, des services publics, des entreprises privées ? Le travail non rémunéré se trouve au cœur des débats sur les soins, les retraites et l’immigration.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Plus d’heures que le travail payé</h4>
<p>Selon l’OFS, on a consacré en Suisse 9,8 milliards d’heures au travail non rémunéré en 2020, contre environ 7,6 milliards au travail rémunéré. Sa valeur est estimée à 434 milliards de francs. Environ 60 % de cette valeur correspond au travail des femmes.</p>
<h4>Dans le monde</h4>
<p>Selon l’Organisation internationale du travail (2018), les femmes assurent environ les trois quarts du travail de soin non rémunéré dans le monde. L’écart est le plus grand dans les pays à revenu faible, où s’ajoutent la collecte de l’eau et du bois de chauffe.</p>
<h4>La pandémie</h4>
<p>Pendant la fermeture des écoles et des crèches en 2020, de nombreuses enquêtes ont montré une forte hausse du travail domestique et éducatif, assurée en majorité par les mères. L’épisode a rendu visible ce que les comptes nationaux ignorent.</p>` }
    ],
    cas: [
      { titre: "Islande, 24 octobre 1975", html: `
<p>Ce jour-là, la grande majorité des Islandaises cessent tout travail, payé et non payé, pour montrer leur poids dans la vie du pays. Les écoles, les usines et les commerces tournent au ralenti ; des pères emmènent leurs enfants au bureau. L’événement, appelé « jour de congé des femmes », est resté un symbole mondial.</p>` },
      { titre: "Les grèves des femmes en Suisse", html: `
<p>Le 14 juin 1991, des centaines de milliers de femmes participent en Suisse à une grève nationale, dix ans après l’inscription de l’égalité dans la Constitution. Une nouvelle grève féministe a lieu le 14 juin 2019. Le partage du travail domestique et de soin y figure parmi les revendications centrales, aux côtés de l’égalité salariale.</p>` },
      { titre: "Les comptes satellites", html: `
<p>Le système de comptabilité nationale des Nations unies, révisé en 1993, prévoit des « comptes satellites » pour mesurer le travail domestique à côté du PIB. La commission Stiglitz-Sen-Fitoussi recommande en 2009 de les développer. L’OFS publie un compte satellite de production des ménages ; il montre que ce travail est l’un des plus grands « secteurs » de l’économie suisse.</p>` }
    ],
    objections: `
<h4>1. Des chiffres fragiles</h4>
<p>La valeur dépend beaucoup de la méthode choisie et des salaires de référence. Pour ses critiques, ces estimations donnent une fausse précision à une réalité difficile à mesurer.</p>
<h4>2. Le PIB n’a pas à tout mesurer</h4>
<p>Les comptables nationaux rappellent que le PIB sert à suivre la production marchande, la conjoncture et les recettes fiscales. L’élargir brouillerait ces usages ; mieux vaut des indicateurs à côté, comme le font les comptes satellites.</p>
<h4>3. Des choix personnels</h4>
<p>Une partie de la répartition du travail domestique relève de préférences et d’arrangements au sein des couples. Ses critiques jugent que les politiques publiques n’ont pas à les orienter ; ses défenseurs répondent que ces choix sont contraints par les salaires, les horaires et le coût de la garde des enfants.</p>
<h4>4. Compter, ou partager ?</h4>
<p>Certaines féministes craignent que valoriser le travail domestique renforce l’idée qu’il revient aux femmes. Elles préfèrent des politiques qui encouragent son partage, comme le congé parental pour les deux parents.</p>`,
    ecoles: `
<p><b>Marilyn <a href="#eco-waring">Waring</a></b> pose la question dans Counting for Nothing (1988).</p>
<p><b>Margaret Reid</b> mesure dès 1934, aux États-Unis, la production des ménages.</p>
<p><b>Gary Becker</b> et la « nouvelle économie des ménages » analysent l’allocation du temps au sein des familles.</p>
<p><b>Amartya <a href="#eco-sen">Sen</a></b> et la commission Stiglitz-Sen-Fitoussi recommandent de le mesurer.</p>
<p><b>Nancy Folbre</b> et <b>Julie Nelson</b> développent l’économie du soin.</p>`,
    source: {
      titre: "Rapport de la commission Stiglitz-Sen-Fitoussi, 2009, recommandation 5",
      texte: "Élargir les indicateurs de revenus aux activités non marchandes.",
      notes: `
<p><b>Une commission officielle.</b> Réunie à la demande du président français, présidée par Joseph <a href="#eco-stiglitz">Stiglitz</a>, avec Amartya <a href="#eco-sen">Sen</a> pour conseiller, elle examine les limites du PIB comme mesure du progrès.</p>
<p><b>Ce que dit la recommandation.</b> Elle demande de mesurer la production domestique et le temps de loisir, pour comparer correctement les niveaux de vie entre pays et entre époques, notamment quand des services passent de la famille au marché.</p>
<p><b>Sa portée.</b> La recommandation reprend, vingt ans plus tard, la critique de Marilyn Waring, et a encouragé de nombreux offices statistiques à publier des comptes du travail non rémunéré.</p>`
    },
    quiz: [
      { q: "Pourquoi le travail domestique n’entre-t-il pas dans le PIB ?",
        o: ["Parce qu’il est inutile", "Parce qu’il ne donne pas lieu à un paiement sur un marché", "Parce qu’il est trop rare", "Parce qu’il est interdit"], c: 1,
        e: "Le même travail, payé, entrerait dans le PIB." },
      { q: "En Suisse, en 2020, consacrait-on plus d’heures au travail non rémunéré ou au travail rémunéré ?",
        o: ["Au travail rémunéré", "Au travail non rémunéré", "Autant aux deux", "On ne le sait pas"], c: 1,
        e: "Environ 9,8 milliards d’heures contre 7,6 milliards, selon l’OFS." },
      { q: "Qu’est-ce que la méthode du coût de remplacement ?",
        o: ["Estimer ce qu’aurait gagné la personne en travaillant ailleurs", "Estimer ce que coûterait une personne payée pour faire le même travail", "Compter le temps de sommeil", "Additionner les impôts"], c: 1,
        e: "L’autre méthode est le coût d’opportunité." },
      { q: "Quelle valeur l’OFS attribue-t-il au travail non rémunéré en 2020 ?",
        o: ["4 milliards de francs", "434 milliards de francs", "43 000 milliards de francs", "Aucune"], c: 1,
        e: "Environ 60 % correspond au travail des femmes." },
      { q: "Que sont les « comptes satellites » ?",
        o: ["Des comptes bancaires à l’étranger", "Des comptes statistiques tenus à côté du PIB pour mesurer, par exemple, le travail domestique", "Des comptes de la banque centrale", "Des comptes en cryptomonnaie"], c: 1,
        e: "Ils sont prévus par le système de comptabilité nationale depuis 1993." }
    ],
    ouverte: {
      q: "Faudrait-il tenir compte du travail non rémunéré dans le calcul des retraites suisses ?",
      r: "C’est déjà en partie le cas. Depuis la dixième révision de l’AVS, entrée en vigueur en 1997, des bonifications pour tâches éducatives et pour tâches d’assistance augmentent la rente des personnes qui ont élevé des enfants ou soigné des proches, et les revenus des couples sont partagés pendant le mariage. En revanche, le deuxième pilier, la prévoyance professionnelle, dépend du salaire : les personnes qui ont réduit leur temps de travail pour s’occuper des enfants, en majorité des femmes, reçoivent des rentes nettement plus faibles. Les partisans d’une meilleure prise en compte proposent d’abaisser le seuil d’entrée du deuxième pilier ou de créer des bonifications comparables à celles de l’AVS. Leurs contradicteurs répondent que le deuxième pilier est une épargne individuelle liée au salaire, et que la solution passe plutôt par l’accès aux crèches et le partage des tâches, pour que chacun puisse travailler davantage. Le débat porte sur la place que l’on veut donner au travail invisible dans la protection sociale."
    },
    lectures: [
      ["Accessible", "OFS, « Compte satellite de production des ménages », dernière édition."],
      ["Accessible", "Film « Who’s Counting? Marilyn Waring on Sex, Lies and Global Economics », 1995."],
      ["Intermédiaire", "Marilyn Waring, Counting for Nothing / If Women Counted, 1988."],
      ["Intermédiaire", "Joseph Stiglitz, Amartya Sen et Jean-Paul Fitoussi, Richesse des nations et bien-être des individus, 2009."],
      ["Recherche", "Organisation internationale du travail, Care Work and Care Jobs for the Future of Decent Work, 2018 ; Nancy Folbre, The Invisible Heart, 2001."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Un travail que personne ne compte</h3>
<p>Faire la cuisine, laver le linge, s’occuper des enfants, aider un parent âgé : ces tâches demandent du temps et de l’effort. Pourtant, quand on les fait pour sa famille sans être payé, le PIB ne les compte pas. Faites le même travail chez des voisins contre un salaire, et il entre dans les statistiques.</p>
${heures}
<h3>Plus que le travail payé</h3>
<p>En Suisse, on passe davantage d’heures au travail non rémunéré qu’au travail rémunéré. L’OFS estime sa valeur à 434 milliards de francs en 2020. Les femmes en assurent la plus grande part.</p>
<h3>Pourquoi c’est important</h3>
<p>Ce qui n’est pas compté pèse moins dans les décisions. Une économie budgétaire qui reporte du travail sur les familles peut sembler gratuite, alors qu’elle ne l’est pas. Les retraites des personnes qui ont réduit leur travail payé pour s’occuper des autres en dépendent aussi.</p>
<h3>À retenir</h3>
<p>Le travail non rémunéré est l’un des plus grands secteurs de l’économie, et l’un des moins visibles. La notice complète présente les méthodes de mesure, les débats et les politiques.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Que mesure le PIB ? Le paradoxe de la gouvernante et la critique de Waring.",
      raisonnement: "Six étapes, de la définition à la question du vieillissement.",
      preuves: "Les heures en Suisse, la part des femmes dans le monde, la pandémie.",
      cas: "L’Islande en 1975, les grèves des femmes en Suisse, les comptes satellites.",
      objections: "Des chiffres fragiles, le rôle du PIB, des choix personnels, compter ou partager.",
      ecoles: "Waring, Margaret Reid, Gary Becker, Sen, Folbre et Nelson.",
      source: "Élargir les indicateurs de revenus aux activités non marchandes.",
      quiz: "Cinq questions corrigées et une question sur les retraites suisses.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     MODE DE RÉGULATION
     ===================================================================== */
  const formes = fig(320, (() => {
    let s = `<text x="20" y="24" ${T}>Les cinq formes institutionnelles</text>`;
    s += `<rect x="220" y="130" width="200" height="66" rx="12" style="fill:var(--note-soft); stroke:var(--note); stroke-width:2"/>`;
    s += `<text x="320" y="158" text-anchor="middle" style="fill:var(--ink); font:700 13px Manrope, sans-serif">Régime d’accumulation</text><text x="320" y="176" text-anchor="middle" ${S}>croissance stable ou crise</text>`;
    const f = [[20, 46, "Rapport salarial", "fixation des salaires"], [440, 46, "Concurrence", "forme des marchés"], [20, 236, "Régime monétaire", "monnaie et crédit"], [440, 236, "État", "impôts, dépenses, droit"], [230, 236, "Insertion internationale", "échanges et capitaux"]];
    f.forEach(([x, y, t, sub]) => { s += box(x, y, 180, 56, t, sub, "var(--gold)"); });
    s += arrow(200, 80, 252, 128) + arrow(460, 80, 388, 128) + arrow(200, 262, 252, 198) + arrow(460, 262, 388, 198) + arrow(320, 234, 320, 200);
    return s;
  })(), "D’après Robert Boyer, La Théorie de la régulation (2004), schéma. Quand ces cinq ensembles d’institutions sont cohérents, ils assurent pendant des décennies une croissance stable ; quand ils ne le sont plus, une grande crise éclate.", "Schéma des cinq formes institutionnelles de l’école de la régulation");

  OEC.notices["mode-regulation"] = {
    essentiel: [
      "Un mode de régulation est, pour l’école française de la régulation fondée par Michel Aglietta en 1976, l’ensemble des institutions qui assure pendant une période la stabilité de la croissance capitaliste : la fixation des salaires, la concurrence, la monnaie, l’État et l’insertion dans l’économie mondiale.",
      "Après 1945, le « fordisme » associe production de masse, partage des gains de productivité par les conventions collectives et consommation de masse. Son épuisement explique, selon cette école, la grande crise des années 1970.",
      "La notion invite à voir le capitalisme comme une succession de périodes, chacune avec ses règles, plutôt que comme un système qui tendrait naturellement vers un équilibre."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi la croissance a-t-elle été si stable ?", html: `
<p>Au milieu des années 1970, la croissance rapide des pays riches s’interrompt, et le chômage monte en même temps que l’inflation (<a href="#c-stagflation">voir stagflation</a>). Les économistes cherchent la cause de la crise. Michel <a href="#eco-aglietta">Aglietta</a> pose la question à l’envers : comment expliquer que, pendant vingt-cinq ans, une économie capitaliste ait pu croître aussi vite et aussi régulièrement, sans grande crise, alors que le XIXe siècle et l’entre-deux-guerres en avaient connu tant ?</p>
<p>Dans Régulation et crises du capitalisme, en 1976, il répond par une étude de l’économie américaine de 1870 à 1970. La stabilité ne vient pas d’une loi naturelle, mais d’institutions construites dans l’histoire, qui encadrent les conflits et orientent les comportements. Avec Robert Boyer et d’autres, il fonde ainsi l’école de la régulation.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le capitalisme n’a pas d’équilibre naturel</h4>
<p>Pour les régulationnistes, l’économie est traversée de conflits : entre salariés et employeurs, entre entreprises, entre créanciers et débiteurs. Rien ne garantit qu’ils se règlent d’eux-mêmes. La stabilité est donc une exception à expliquer.</p>
<h4>2. Cinq formes institutionnelles</h4>
<p>Elle s’explique par cinq ensembles d’institutions : le rapport salarial, c’est-à-dire la manière de fixer les salaires et d’organiser le travail ; la forme de la concurrence ; le régime monétaire ; le rôle de l’État ; et l’insertion dans l’économie mondiale.</p>
${formes}
<h4>3. Le régime d’accumulation</h4>
<p>Quand ces institutions sont cohérentes entre elles, elles permettent un « régime d’accumulation » durable : une manière régulière d’investir, de produire et de répartir les revenus.</p>
<h4>4. Le fordisme</h4>
<p>Après 1945, la production de masse dégage de forts gains de productivité. Les conventions collectives les partagent avec les salariés, qui achètent ce qu’ils produisent. L’État social, une monnaie gérée et des échanges internationaux encadrés complètent le système. Le terme « fordisme » vient d’Henry Ford, qui voulait que ses ouvriers puissent acheter ses voitures.</p>
<h4>5. Petites crises et grandes crises</h4>
<p>Les récessions ordinaires se règlent à l’intérieur d’un mode de régulation. Une grande crise survient quand le mode de régulation lui-même ne fonctionne plus : à la fin des années 1960, la productivité ralentit, la concurrence internationale s’intensifie, le partage des gains devient conflictuel. Il faut alors inventer de nouvelles institutions (<a href="#c-cycles">voir cycles</a>).</p>
<h4>6. Après le fordisme</h4>
<p>Depuis les années 1980, un régime dominé par la finance se met en place : la valeur pour l’actionnaire, la mondialisation des capitaux, la modération salariale. Pour Aglietta et Boyer, il est plus instable, comme l’a montré la crise de 2008, et la transition écologique pourrait appeler un nouveau mode de régulation.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Productivité et salaires</h4>
<p>Aux États-Unis, la productivité du travail et la rémunération des salariés progressent à peu près ensemble de la fin de la guerre au début des années 1970. Ensuite, la productivité continue de croître plus vite que le salaire du salarié typique. Les régulationnistes y voient la fin du compromis fordiste.</p>
<h4>La part des salaires</h4>
<p>Le Fonds monétaire international constate en 2017 que la part du revenu national qui revient au travail a baissé dans de nombreux pays avancés depuis les années 1980, sous l’effet de la technologie et de la mondialisation. C’est l’un des traits du régime qui a succédé au fordisme.</p>
<h4>Des capitalismes différents</h4>
<p>Les travaux sur les « variétés de capitalisme », comme ceux de Peter Hall et David Soskice (2001), montrent que des pays également riches organisent très différemment leurs marchés du travail, leurs banques et leur formation professionnelle. C’est une confirmation de l’idée régulationniste : il n’existe pas un seul capitalisme.</p>` }
    ],
    cas: [
      { titre: "Ford et le salaire de cinq dollars, 1914", html: `
<p>En janvier 1914, Henry Ford double le salaire journalier de ses ouvriers, à cinq dollars, et réduit la journée à huit heures. Il veut surtout réduire l’énorme rotation du personnel sur ses chaînes de montage. La mesure devient le symbole d’un capitalisme où les salariés deviennent aussi des consommateurs, l’idée au cœur du fordisme.</p>` },
      { titre: "La paix du travail, 1937", html: `
<p>En juillet 1937, syndicats et patrons de l’industrie suisse des machines et des métaux signent une convention : ils renoncent à la grève et au lock-out et règlent leurs différends par la négociation et l’arbitrage. Ce compromis, étendu ensuite à d’autres branches par les conventions collectives, est l’une des pièces du mode de régulation suisse.</p>` },
      { titre: "La financiarisation", html: `
<p>Dans les années 1980 et 1990, les entreprises sont de plus en plus jugées sur leur rentabilité pour les actionnaires. Les rachats d’actions, la rémunération des dirigeants en actions et la mondialisation des capitaux transforment le rapport salarial. Aglietta parle d’un régime d’accumulation « à dominante financière », dont la crise de 2008 a montré la fragilité.</p>` }
    ],
    objections: `
<h4>1. Une explication après coup</h4>
<p>On reproche à l’école de la régulation de décrire très bien les périodes passées, mais de mal annoncer les suivantes. Le régime « post-fordiste » a reçu plusieurs noms successifs, signe d’une difficulté à le caractériser.</p>
<h4>2. Un compromis idéalisé</h4>
<p>Le fordisme ne concernait qu’une partie des salariés, surtout des hommes de la grande industrie. Les femmes, les immigrés et les pays du Sud en étaient largement exclus.</p>
<h4>3. Difficile à tester</h4>
<p>Les économistes du courant dominant jugent les notions de mode de régulation et de régime d’accumulation trop larges pour être vérifiées par des données. Les régulationnistes répondent qu’ils combinent statistiques, histoire et comparaison internationale.</p>
<h4>4. La lecture libérale</h4>
<p>Pour les économistes libéraux, la croissance d’après-guerre s’explique surtout par le rattrapage technologique de l’Europe et du Japon sur les États-Unis, et son ralentissement par la fin de ce rattrapage, plutôt que par des institutions.</p>`,
    ecoles: `
<p><b>Michel <a href="#eco-aglietta">Aglietta</a></b> fonde l’école en 1976.</p>
<p><b>Robert Boyer</b>, <b>Alain Lipietz</b> et <b>Benjamin Coriat</b> la développent en France.</p>
<p><b>Karl <a href="#eco-marx">Marx</a></b> et <b>John Maynard <a href="#eco-keynes">Keynes</a></b> en sont les deux sources principales.</p>
<p><b>Antonio Gramsci</b> emploie le mot « fordisme » dès les années 1930.</p>
<p><b>Peter Hall</b> et <b>David Soskice</b> prolongent la comparaison des capitalismes.</p>`,
    source: {
      titre: "Henry Ford, Ma vie et mon œuvre, 1922",
      texte: "Le paiement de cinq dollars pour une journée de huit heures fut l’une des meilleures mesures d’économie que nous ayons jamais prises.",
      notes: `
<p><b>Un paradoxe apparent.</b> Doubler les salaires pour faire des économies : Ford explique que la hausse a réduit la rotation du personnel, les absences et le coût de formation, tout en augmentant la productivité.</p>
<p><b>Ce qu’en retiennent les régulationnistes.</b> Pour eux, l’intérêt de Ford annonce le compromis d’après-guerre : des salaires élevés qui stabilisent le travail et soutiennent la demande.</p>
<p><b>Les limites.</b> Le salaire de Ford était soumis à des conditions de conduite contrôlées par un « département sociologique » de l’entreprise. Le compromis fordiste allait aussi avec une discipline du travail très stricte.</p>`
    },
    quiz: [
      { q: "Qu’est-ce qu’un mode de régulation ?",
        o: ["Une loi sur la concurrence", "Un ensemble d’institutions qui assure pendant une période la stabilité de la croissance", "Un modèle mathématique", "Une décision de la banque centrale"], c: 1,
        e: "Salaires, concurrence, monnaie, État et insertion internationale." },
      { q: "Quelles sont les cinq formes institutionnelles ?",
        o: ["Offre, demande, prix, salaire, profit", "Rapport salarial, concurrence, régime monétaire, État, insertion internationale", "Agriculture, industrie, services, commerce, finance", "Épargne, investissement, impôt, dette, inflation"], c: 1,
        e: "Leur cohérence permet un régime d’accumulation durable." },
      { q: "Que désigne le fordisme ?",
        o: ["Une marque de voitures", "Un régime associant production de masse, partage des gains de productivité et consommation de masse", "Une théorie de la monnaie", "Une politique protectionniste"], c: 1,
        e: "C’est le modèle des Trente Glorieuses." },
      { q: "Qu’est-ce qu’une « grande crise » pour les régulationnistes ?",
        o: ["Une récession ordinaire", "Une crise du mode de régulation lui-même, qui oblige à inventer de nouvelles institutions", "Une crise boursière d’un jour", "Une hausse des taux"], c: 1,
        e: "Comme celle des années 1970." },
      { q: "Pourquoi Henry Ford a-t-il doublé les salaires en 1914 ?",
        o: ["Par obligation légale", "Surtout pour réduire la rotation du personnel et augmenter la productivité", "Pour baisser ses prix", "À cause d’une grève générale"], c: 1,
        e: "Il y voyait une mesure d’économie." }
    ],
    ouverte: {
      q: "La Suisse a-t-elle un mode de régulation propre, et lequel ?",
      r: "Un régulationniste répondrait oui, en décrivant un ensemble d’institutions qui se tiennent. Le rapport salarial repose sur le partenariat social, la paix du travail et des conventions collectives négociées par branche, avec peu de grèves. La formation professionnelle duale, l’apprentissage, fournit une main-d’œuvre qualifiée et relie les entreprises aux écoles. La concurrence combine des secteurs exportateurs très ouverts, horlogerie, pharmacie, machines, et des secteurs intérieurs longtemps protégés, comme l’agriculture. Le régime monétaire s’appuie sur un franc fort et une banque centrale crédible. L’État est fédéral, léger au niveau national, et soumis à la démocratie directe et au frein à l’endettement. Enfin, l’insertion internationale passe par les accords bilatéraux avec l’Union européenne et une main-d’œuvre étrangère importante. Les critiques de cette lecture rappellent que ce modèle a aussi reposé sur la place financière et le secret bancaire, aujourd’hui abandonné pour les non-résidents, et que le franc fort met régulièrement l’industrie sous pression. La question est de savoir si ce compromis résistera aux transitions numérique et écologique."
    },
    lectures: [
      ["Accessible", "Robert Boyer, La Théorie de la régulation : les fondamentaux, 2004."],
      ["Intermédiaire", "Michel Aglietta, Régulation et crises du capitalisme, 1976, introduction."],
      ["Intermédiaire", "Peter Hall et David Soskice (dir.), Varieties of Capitalism, 2001."],
      ["Intermédiaire", "Fonds monétaire international, Perspectives de l’économie mondiale, avril 2017, chapitre 3 sur la part du travail."],
      ["Recherche", "Robert Boyer et Yves Saillard (dir.), Théorie de la régulation : l’état des savoirs, 1995."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Pourquoi l’économie tient, puis craque</h3>
<p>Après 1945, les pays riches connaissent vingt-cinq ans de croissance rapide et presque sans crise. Puis, dans les années 1970, tout se dérègle. L’économiste français Michel Aglietta propose une explication : la croissance stable reposait sur un ensemble de règles qui s’accordaient bien entre elles. Il l’appelle un « mode de régulation ».</p>
${formes}
<h3>Le fordisme</h3>
<p>Après la guerre, les ouvriers gagnent davantage à mesure qu’ils produisent plus, grâce aux conventions collectives. Ils achètent ce qu’ils fabriquent, ce qui soutient les ventes et l’investissement. Ce cercle vertueux porte le nom d’Henry Ford, qui voulait que ses ouvriers puissent acheter ses voitures.</p>
<h3>Quand les règles s’usent</h3>
<p>À la fin des années 1960, la productivité ralentit et la concurrence internationale augmente. Le cercle se rompt : c’est une « grande crise », qui oblige à inventer de nouvelles règles. Depuis les années 1980, la finance occupe une place centrale.</p>
<h3>À retenir</h3>
<p>Le capitalisme change de forme au fil de l’histoire, et chaque période a ses propres règles. La notice complète présente le raisonnement, les faits et les critiques.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Pourquoi la croissance d’après-guerre a-t-elle été si stable ? Aglietta en 1976.",
      raisonnement: "Six étapes, des cinq formes institutionnelles au régime financier.",
      preuves: "Productivité et salaires, la part des salaires, les variétés de capitalisme.",
      cas: "Le salaire de Ford, la paix du travail, la financiarisation.",
      objections: "Une explication après coup, un compromis idéalisé, difficile à tester, la lecture libérale.",
      ecoles: "Aglietta, Boyer, Lipietz et Coriat, Marx et Keynes, Gramsci, Hall et Soskice.",
      source: "Ford : cinq dollars par jour, une mesure d’économie.",
      quiz: "Cinq questions corrigées et une question sur le modèle suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
