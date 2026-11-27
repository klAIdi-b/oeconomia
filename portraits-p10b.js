/* Œconomia — portraits longs, lot 10 (b) : Marilyn Waring, Stephanie Kelton */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  /* =====================================================================
     MARILYN WARING
     ===================================================================== */
  const vieWaring = lifeline(1952, 2026, [
    [1952, "naissance en Nouvelle-Zélande", true], [1975, "élue députée à 23 ans", false], [1984, "élections anticipées", true], [1988, "Counting for Nothing", false],
    [1989, "doctorat", true], [1995, "film « Who’s Counting? »", false], [2018, "Still Counting", true]
  ], "Marilyn Waring, née en 1952", "Députée à vingt-trois ans, puis chercheuse, Waring a passé sa vie à demander ce que les statistiques économiques oublient de compter.");

  const compte = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>Même travail, compté ou non</text>`;
    s += node(30, 50, 270, 64, "Garder un enfant contre un salaire", "compté dans le PIB", "var(--note)");
    s += node(340, 50, 270, 64, "Garder son propre enfant", "invisible dans le PIB", "var(--serial)");
    s += node(30, 140, 270, 64, "Cuisiner dans un restaurant", "compté dans le PIB", "var(--note)");
    s += node(340, 140, 270, 64, "Cuisiner pour sa famille", "invisible dans le PIB", "var(--serial)");
    s += `<text x="320" y="240" text-anchor="middle" style="fill:var(--ink); font:700 13px Manrope, sans-serif">Ce qui sépare les deux colonnes, ce n’est pas le travail, c’est le paiement.</text>`;
    s += `<text x="320" y="262" text-anchor="middle" ${S}>Et une forêt n’entre dans le PIB que lorsqu’on l’abat.</text>`;
    return s;
  })(), "D’après Counting for Nothing (1988), schéma. La comptabilité nationale ne compte que la production qui passe par un marché. Le travail domestique et les soins, assurés surtout par des femmes, restent hors des comptes, et donc souvent hors des politiques.", "Schéma comparant le travail payé et non payé dans le PIB");

  OEC.portraits["waring"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Marilyn Waring, née en 1952, ancienne députée néo-zélandaise devenue professeure, montre dans Counting for Nothing (1988) que la comptabilité nationale ignore le travail non payé, surtout celui des femmes, et la valeur de la nature.",
      "Pour elle, ce n’est pas un détail technique : ce que les statistiques ne voient pas, les politiques publiques ne le voient pas non plus. Les budgets, les retraites et les priorités en sont faussés.",
      "Son livre est souvent tenu pour le texte fondateur de l’économie féministe, même si d’autres l’ont précédée, comme Margaret Reid, qui mesurait la production domestique dès 1934, et si la discipline s’organise surtout à partir de 1992 avec l’Association internationale pour l’économie féministe. Il a contribué à faire mesurer le travail non rémunéré dans de nombreux pays, dont la Suisse."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Marilyn Waring naît en 1952 en Nouvelle-Zélande et grandit dans la région agricole du Waikato. Étudiante en sciences politiques à Wellington, elle est élue au Parlement en 1975, à vingt-trois ans, sous l’étiquette du Parti national, de centre droit. Elle y préside la commission des dépenses publiques, où elle découvre les comptes nationaux.</p>
<p>Députée indépendante d’esprit, elle soutient en 1984 une proposition de loi de l’opposition travailliste pour une Nouvelle-Zélande sans armes nucléaires. Le Premier ministre Robert Muldoon, qui ne dispose que d’une courte majorité, convoque alors des élections anticipées, qu’il perd. Waring quitte la politique.</p>
${vieWaring}
<p>Elle se consacre ensuite à la recherche. Elle publie en 1988 Counting for Nothing, paru aux États-Unis sous le titre If Women Counted, et obtient un doctorat en 1989. Le film documentaire « Who’s Counting? », que lui consacre l’Office national du film du Canada en 1995, fait connaître ses idées dans le monde entier. Professeure de politiques publiques à l’université de technologie d’Auckland, elle travaille aussi avec les Nations unies sur les droits humains et le travail de soin, et siège au Conseil de l’OMS sur l’économie de la santé pour tous.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Le système de comptabilité nationale des Nations unies, adopté en 1953 et révisé ensuite, sert à mesurer la production de tous les pays et à les comparer. Les gouvernements, les banques de développement et les organisations internationales s’en servent pour fixer leurs priorités et répartir leurs aides (<a href="#c-pib">voir PIB</a>).</p>
<p>Dans les années 1970 et 1980, les mouvements féministes ont déjà dénoncé le travail domestique « invisible ». Waring apporte un angle nouveau : elle examine les règles comptables elles-mêmes, ligne par ligne, pour montrer comment elles ont été écrites, par qui, et avec quelles conséquences.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Ce que le PIB compte</h4>
<p>Les comptes nationaux mesurent la production vendue sur un marché, plus les services des administrations. Une activité n’est « productive » que si elle donne lieu à un paiement.</p>
<h4>2. Ce qu’il oublie</h4>
<p>Cuisiner, nettoyer, élever des enfants, soigner un parent malade, aller chercher l’eau et le bois : ce travail, souvent plus long que le travail payé, n’entre pas dans les comptes quand il est fait gratuitement pour sa famille. Il est assuré en majorité par des femmes (<a href="#c-travail-non-remunere">voir travail non rémunéré</a>).</p>
${compte}
<h4>3. Ce qu’il compte à tort</h4>
<p>À l’inverse, le PIB augmente quand on abat une forêt, quand on répare les dégâts d’une marée noire ou quand on fabrique des armes. Il ne distingue pas ce qui améliore la vie de ce qui la détruit, et traite la nature comme gratuite (<a href="#c-externalite">voir externalité</a>).</p>
<h4>4. Invisible, donc absent des politiques</h4>
<p>Pour Waring, ces conventions ont des effets très concrets. Un projet d’aide qui fait gagner du temps aux femmes, comme un puits près du village, paraît sans valeur dans les comptes. Une coupe dans les services publics semble faire des économies, alors qu’elle reporte le travail sur les familles.</p>
<h4>5. Compter le temps</h4>
<p>Plutôt que d’attribuer à tout un prix, Waring propose de mesurer le temps : des enquêtes sur l’emploi du temps de chacun, payé ou non, et des comptes de l’état des ressources naturelles. Le temps, dit-elle, est la seule ressource que chacun possède en quantité égale.</p>` },
      { id: "livres", titre: "Les livres et le film qui comptent", html: `
<p><b>Counting for Nothing (1988), publié aux États-Unis sous le titre If Women Counted.</b> Le livre fondateur, accessible et souvent drôle.</p>
<p><b>« Who’s Counting? Marilyn Waring on Sex, Lies and Global Economics » (1995).</b> Le documentaire de Terre Nash, produit par l’Office national du film du Canada, qui a diffusé ses idées dans le monde entier.</p>
<p><b>Three Masquerades (1996).</b> Ses réflexions sur la politique, l’économie et les droits humains.</p>
<p><b>Still Counting (2018).</b> Un retour, trente ans plus tard, sur ce qui a changé dans la mesure du travail et de la nature.</p>` }
    ],
    cas: [
      { titre: "Le Premier ministre et la loi antinucléaire", html: `
<p>En juin 1984, Waring annonce qu’elle votera une proposition de loi de l’opposition pour interdire les armes nucléaires en Nouvelle-Zélande. Le Premier ministre Robert Muldoon, qui ne dispose plus d’une majorité sûre, convoque des élections anticipées, perdues par son parti. Le nouveau gouvernement travailliste fait de la Nouvelle-Zélande un pays sans armes nucléaires. Waring quitte le Parlement la même année.</p>` },
      { titre: "La jeune fille et le puits", html: `
<p>Waring raconte souvent la journée d’une jeune fille d’Afrique australe qui marche des heures pour aller chercher l’eau, ramasse le bois, garde ses frères et sœurs et travaille aux champs. Selon les comptes nationaux, elle est « inactive ». À l’inverse, un militaire en exercice est compté comme producteur. L’exemple, simple et frappant, a beaucoup fait pour populariser sa critique.</p>` },
      { titre: "Les comptes satellites", html: `
<p>La révision du système de comptabilité nationale de 1993 élargit la production à certaines activités domestiques, comme l’agriculture de subsistance, et prévoit des « comptes satellites » pour le travail non rémunéré et l’environnement. Waring y voit un progrès réel mais insuffisant, car ces comptes restent à côté du PIB, et non dedans. De nombreux offices statistiques, dont l’OFS en Suisse, publient désormais de tels comptes.</p>` }
    ],
    objections: `
<h4>1. Tout compter en argent ?</h4>
<p>Attribuer un prix au travail domestique pose des problèmes de méthode : faut-il le valoriser au salaire d’une aide ménagère, ou au salaire que la personne aurait gagné ailleurs ? Les résultats varient beaucoup. Waring elle-même préfère compter en temps.</p>
<h4>2. Le PIB n’a jamais prétendu tout mesurer</h4>
<p>Les comptables nationaux rappellent que le PIB mesure la production marchande, utile pour suivre la conjoncture et les recettes fiscales, et n’a jamais prétendu mesurer le bien-être. Pour eux, il faut d’autres indicateurs, plutôt que changer le PIB lui-même.</p>
<h4>3. Le risque de figer les rôles</h4>
<p>Certaines féministes craignent que rémunérer ou valoriser le travail domestique renforce l’idée qu’il revient aux femmes, au lieu d’encourager son partage. Waring répond que l’on ne peut pas partager un travail qu’on refuse de voir.</p>`,
    ecoles: `
<p><b>Les mouvements féministes des années 1970</b>, et la campagne pour un salaire du travail ménager, ont posé la question avant elle.</p>
<p><b>Amartya <a href="#eco-sen">Sen</a></b> et la commission Stiglitz-Sen-Fitoussi de 2009 reprennent la critique du PIB et recommandent de mesurer le travail domestique.</p>
<p><b>Nancy Folbre</b> et <b>Julie Nelson</b> développent l’économie féministe et l’économie du soin.</p>
<p><b>John Kenneth <a href="#eco-galbraith">Galbraith</a></b> salue son livre dès sa parution.</p>
<p><b>Les économistes écologiques</b> prolongent sa critique de la gratuité de la nature dans les comptes.</p>`,
    source: {
      titre: "Marilyn Waring, Counting for Nothing, 1988, sous-titre",
      texte: "Ce que les hommes valorisent et ce que valent les femmes.",
      notes: `
<p><b>Un titre programme.</b> Le sous-titre original, What Men Value and What Women Are Worth, joue sur deux sens de la valeur : ce que les règles comptables, écrites par des hommes, décident de valoriser, et ce que vaut réellement le travail des femmes.</p>
<p><b>Une question de pouvoir.</b> Pour Waring, la comptabilité nationale n’est pas une simple technique. Elle reflète les priorités de ceux qui l’ont conçue, pendant et après la Seconde Guerre mondiale, pour financer la guerre puis la reconstruction.</p>
<p><b>Ce qu’il en reste.</b> Les statistiques ont depuis fait une place au travail non rémunéré, mais à côté du PIB. Le débat sur ce que l’on compte, et donc sur ce que l’on finance, reste ouvert.</p>`
    },
    quiz: [
      { q: "Que reproche Waring à la comptabilité nationale ?",
        o: ["D’être trop compliquée pour être comprise par le public", "D’ignorer le travail non payé et la valeur de la nature", "De compter deux fois les impôts dans le revenu national", "De surestimer la production agricole des pays en développement"], c: 1,
        e: "Une activité n’y est productive que si elle est payée." },
      { q: "Pourquoi le même travail peut-il être compté ou non dans le PIB ?",
        o: ["Selon le nombre d’heures effectuées", "Selon qu’il est rémunéré ou non", "Selon le pays où il est effectué", "Selon le secteur d’activité concerné"], c: 1,
        e: "Garder un enfant contre un salaire est compté ; garder le sien ne l’est pas." },
      { q: "Que propose Waring pour mesurer ce qui est oublié ?",
        o: ["Ajouter au PIB une estimation unique du travail domestique", "Mesurer le temps passé à chaque activité et l’état de la nature", "Remplacer le PIB par le bonheur déclaré par les habitants", "Compter les exportations plutôt que la production intérieure"], c: 1,
        e: "Elle préfère compter en temps plutôt qu’en argent." },
      { q: "Quel événement politique a-t-elle provoqué en 1984 ?",
        o: ["Une réforme fiscale qui a bouleversé le budget de l’État", "Des élections anticipées, après son soutien à une loi antinucléaire", "Un référendum sur la monarchie, après son discours au Parlement", "La démission du gouverneur de la banque centrale, qu’elle a critiqué"], c: 1,
        e: "Le Premier ministre Muldoon a convoqué des élections anticipées." }
    ],
    ouverte: {
      q: "Selon l’OFS, on consacre en Suisse davantage d’heures au travail non rémunéré qu’au travail payé, et les femmes en assurent la plus grande part. Que dirait Waring des politiques suisses de la famille et des retraites ?",
      r: "Elle dirait que la Suisse fait partie des pays qui mesurent bien ce travail, grâce au compte satellite de production des ménages de l’OFS, mais qu’elle n’en tire pas toutes les conséquences. Le travail de soin non payé réduit le temps de travail rémunéré de beaucoup de femmes, souvent à temps partiel, ce qui pèse ensuite sur leur deuxième pilier et sur leur retraite. Les places d’accueil des enfants restent chères dans de nombreuses communes. La grève des femmes du 14 juin 1991, puis celle de 2019, ont mis ces questions sur la place publique. Waring proposerait de partir des enquêtes sur l’emploi du temps pour évaluer chaque réforme : une économie budgétaire qui reporte du travail sur les familles n’est pas une économie. On peut lui répondre que l’AVS tient déjà compte des années consacrées aux enfants par des bonifications pour tâches éducatives, et que le choix du temps partiel relève aussi de préférences personnelles. Le débat porte sur la part de choix et de contrainte dans ces décisions."
    },
    lectures: [
      ["Accessible", "Film « Who’s Counting? Marilyn Waring on Sex, Lies and Global Economics », Terre Nash, Office national du film du Canada, 1995."],
      ["Accessible", "OFS, « Compte satellite de production des ménages », dernière édition."],
      ["Intermédiaire", "Marilyn Waring, If Women Counted / Counting for Nothing, 1988."],
      ["Recherche", "Margunn Bjørnholt et Ailsa McKay (dir.), Counting on Marilyn Waring, 2014 ; Nancy Folbre, The Invisible Heart, 2001."]
    ],
    decouvrir: {
      questions: [
        { q: "Comment Marilyn Waring découvre-t-elle les limites des comptes nationaux ?",
          o: ["En présidant la commission des dépenses publiques du Parlement", "En travaillant comme économiste à la banque centrale du pays", "En étudiant l’économie à l’université de Harvard, aux États-Unis", "En dirigeant pendant dix ans une grande entreprise agricole"], c: 0,
          e: "Elle constate que les comptes ignorent une grande partie du travail qu’elle voit autour d’elle." },
        { q: "Selon Waring, pourquoi le travail domestique et les soins disparaissent-ils souvent des politiques ?",
          o: ["Parce qu’ils ne sont pas payés, donc pas comptés dans le PIB", "Parce qu’ils sont devenus inutiles avec les machines modernes", "Parce qu’ils sont déjà assurés par l’État et financés par l’impôt", "Parce qu’ils sont déjà très bien rémunérés sur le marché du travail"], c: 0,
          e: "Ce que l’on ne compte pas, on ne le voit pas, et on ne le finance pas." }
      ],
      duree: 5,
      html: `
<h3>Une députée qui lisait les comptes</h3>
<p>Marilyn Waring, née en 1952, est élue au Parlement néo-zélandais à vingt-trois ans. En présidant la commission des dépenses publiques, elle découvre que les comptes nationaux ignorent la plus grande partie du travail qu’elle voit autour d’elle.</p>
${vieWaring}
<h3>Ce que le PIB ne voit pas</h3>
<p>Le PIB ne compte que ce qui se paie. Garder un enfant contre un salaire est compté ; garder le sien ne l’est pas. Le travail domestique et les soins, assurés surtout par des femmes, disparaissent des statistiques, et donc souvent des politiques.</p>
${compte}
<h3>Compter autrement</h3>
<p>Waring propose de mesurer le temps passé à chaque activité, payée ou non, et l’état de la nature. Son livre de 1988 est souvent tenu pour le texte fondateur de l’économie féministe.</p>
<h3>À retenir</h3>
<p>Ce que l’on ne compte pas, on ne le voit pas, et on ne le finance pas. Le portrait complet présente ses idées et les débats qu’elles suscitent.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De la plus jeune députée de Nouvelle-Zélande à l’économie féministe.",
      epoque: "Les comptes nationaux et les mouvements féministes.",
      pensee: "Cinq étapes, de ce que le PIB compte à la mesure du temps.",
      livres: "De Counting for Nothing à Still Counting.",
      cas: "La loi antinucléaire, la jeune fille et le puits, les comptes satellites.",
      objections: "Tout compter en argent, le rôle du PIB, le risque de figer les rôles.",
      ecoles: "Les féministes des années 1970, Sen, Folbre et Nelson, Galbraith.",
      source: "Ce que les hommes valorisent et ce que valent les femmes.",
      quiz: "Quatre questions corrigées et une question sur le travail non payé en Suisse.",
      lectures: "Quatre lectures classées par niveau."
    }
  };

  /* =====================================================================
     STEPHANIE KELTON
     ===================================================================== */
  const vieKelton = lifeline(1969, 2026, [
    [1969, "naissance", true], [2001, "doctorat à la New School", false], [2015, "commission budgétaire du Sénat", true], [2016, "conseillère de Sanders", false],
    [2020, "Le Mythe du déficit", true], [2022, "retour de l’inflation", false]
  ], "Stephanie Kelton, née en 1969", "Professeure, conseillère au Sénat américain puis d’un candidat à la présidence, Kelton a fait sortir la théorie moderne de la monnaie des cercles universitaires.");

  const circuit = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>La dépense publique vue par la théorie moderne de la monnaie</text>`;
    s += node(230, 44, 180, 58, "L’État dépense", "il crée de la monnaie", "var(--note)");
    s += node(450, 140, 170, 58, "Ménages et entreprises", "revenus, épargne", "var(--gold)");
    s += node(230, 232, 180, 58, "L’impôt", "retire de la monnaie", "var(--note)");
    s += node(20, 140, 170, 58, "Vraie limite", "l’inflation, pas la dette", "var(--serial)");
    s += arrow(410, 84, 500, 136) + arrow(500, 202, 410, 248) + arrow(230, 258, 160, 202);
    s += `<text x="320" y="176" text-anchor="middle" ${S}>d’abord dépenser, ensuite prélever</text>`;
    return s;
  })(), "D’après Le Mythe du déficit (2020), schéma. Pour Kelton, un État qui émet sa propre monnaie ne collecte pas l’argent avant de le dépenser, comme un ménage : il le crée en dépensant, puis en retire une partie par l’impôt pour éviter l’inflation.", "Schéma du circuit de la dépense publique selon la théorie moderne de la monnaie");

  OEC.portraits["kelton"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Stephanie Kelton, née en 1969, économiste américaine, est la figure la plus connue de la théorie moderne de la monnaie, en anglais Modern Monetary Theory.",
      "Elle soutient qu’un État qui émet sa propre monnaie ne peut pas faire faillite dans cette monnaie, et que la vraie limite de ses dépenses n’est pas la dette, mais l’inflation, quand l’économie n’a plus de ressources disponibles.",
      "Très écoutée après 2008 et pendant la pandémie, sa thèse est vivement critiquée par des économistes comme Larry Summers, et la forte inflation de 2021-2022 a relancé le débat sur ses limites."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Stephanie Kelton naît le 10 octobre 1969 aux États-Unis. Elle étudie à l’université d’État de Californie à Sacramento, puis à Cambridge, en Angleterre, et obtient son doctorat à la New School for Social Research de New York, foyer de la pensée économique hétérodoxe. Elle y est marquée par les travaux d’Hyman <a href="#eco-minsky">Minsky</a> et de L. Randall Wray.</p>
<p>Elle enseigne ensuite à l’université du Missouri à Kansas City, qu’elle contribue à faire connaître comme le centre de la théorie moderne de la monnaie, et dirige le département d’économie. Fin 2014, elle devient économiste en chef de la minorité démocrate de la commission budgétaire du Sénat américain.</p>
${vieKelton}
<p>Elle quitte ce poste pour conseiller le sénateur Bernie Sanders pendant sa campagne pour l’investiture démocrate de 2016, puis de nouveau en 2020. Professeure à l’université de Stony Brook, dans l’État de New York, elle publie en juin 2020 Le Mythe du déficit, qui devient un succès de librairie et fait d’elle l’une des économistes les plus médiatisées du moment.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Après la crise de 2008, les déficits publics explosent. Aux États-Unis comme en Europe, les gouvernements adoptent rapidement des politiques d’austérité, au nom de la dette, alors que le chômage reste élevé et que les taux d’intérêt sont à zéro. Pour Kelton, cette peur de la dette repose sur une erreur : on raisonne sur l’État comme sur un ménage (<a href="#c-equivalence-ricardienne">voir équivalence ricardienne</a>).</p>
<p>La théorie moderne de la monnaie reprend des idées anciennes. Georg Friedrich Knapp soutenait dès 1905 que la monnaie est une création de l’État, qui l’impose en exigeant qu’on paie l’impôt avec elle. Abba Lerner proposait en 1943 une « finance fonctionnelle » : juger la dépense publique à ses effets sur l’emploi et les prix, et non à l’équilibre du budget. Dans les années 1990, l’investisseur Warren Mosler et l’économiste Randall Wray en tirent un ensemble cohérent.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’État n’est pas un ménage</h4>
<p>Un ménage doit gagner de l’argent avant de le dépenser. Un État qui émet sa propre monnaie, avec un taux de change flottant et une dette dans cette monnaie, est dans une situation différente : il crée la monnaie en dépensant. Il ne peut donc jamais être forcé à la faillite dans sa propre monnaie, contrairement à la Grèce dans la zone euro ou à un pays endetté en dollars.</p>
${circuit}
<h4>2. L’inflation, vraie limite</h4>
<p>Cela ne veut pas dire que l’État peut dépenser sans limite. S’il demande plus de travailleurs, de matériaux et d’énergie qu’il n’y en a de disponibles, les prix montent. La question à poser n’est donc pas « comment le payer ? », mais « avons-nous les ressources ? ».</p>
<h4>3. À quoi sert l’impôt</h4>
<p>Dans cette vision, l’impôt ne sert pas d’abord à financer l’État. Il crée une demande pour la monnaie, puisqu’il faut la posséder pour payer ses impôts, il retire de la monnaie quand l’économie chauffe, et il permet d’orienter les comportements, par exemple en taxant la pollution.</p>
<h4>4. Leur déficit est notre excédent</h4>
<p>Quand l’État dépense plus qu’il ne prélève, la différence reste dans les mains des ménages et des entreprises. Le déficit public est donc, en comptabilité, l’excédent du secteur privé. Réduire le déficit, c’est réduire l’épargne financière du privé.</p>
<h4>5. La garantie d’emploi</h4>
<p>Kelton propose que l’État offre un emploi à salaire fixe à toute personne qui en cherche un, dans des services utiles à la collectivité. Ce stock d’emplois grossirait en récession et se viderait en période de croissance, servant à la fois contre le chômage et contre l’inflation.</p>
<h4>6. La monnaie créée par le crédit</h4>
<p>Comme les post-keynésiens, Kelton considère que la monnaie est créée quand l’État dépense et quand les banques prêtent, et non fixée par la banque centrale (<a href="#c-monnaie-endogene">voir monnaie endogène</a>).</p>` },
      { id: "livres", titre: "Les livres et articles qui comptent", html: `
<p><b>Le Mythe du déficit (2020).</b> Son livre grand public, qui démonte six « mythes » sur la dette et le déficit.</p>
<p><b>« Can Taxes and Bonds Finance Government Spending? » (1998, sous son nom de naissance, Stephanie Bell).</b> Son article de recherche sur le circuit de la dépense publique.</p>
<p><b>Ses rapports pour la commission budgétaire du Sénat (2015).</b> Des analyses de la politique budgétaire américaine.</p>
<p><b>L. Randall Wray, Modern Money Theory (2012).</b> Le manuel de référence du courant, dont Kelton est proche.</p>` }
    ],
    cas: [
      { titre: "Le débat de 2019", html: `
<p>En 2019, de jeunes élus démocrates citent la théorie moderne de la monnaie pour financer un « Green New Deal ». Le débat sort des universités. En mars, Lawrence <a href="#eco-summers">Summers</a> publie dans le Washington Post une tribune intitulée « L’adhésion de la gauche à la MMT est la recette d’un désastre », où il juge la théorie fausse à plusieurs niveaux. Paul <a href="#eco-krugman">Krugman</a>, plus mesuré, en discute les hypothèses dans ses chroniques. Kelton répond dans la presse et sur les réseaux sociaux (<a href="#controverses" data-debat="kelton-summers">voir la controverse</a>).</p>` },
      { titre: "2020, l’année de tous les déficits", html: `
<p>Pendant la pandémie, les États-Unis votent des plans de soutien de plusieurs milliers de milliards de dollars, sans s’inquiéter de leur financement. Le Mythe du déficit paraît en juin 2020 et devient un succès de librairie. Pour ses partisans, les faits donnent raison à Kelton : les marchés n’ont pas paniqué, les taux sont restés bas.</p>` },
      { titre: "L’épreuve de l’inflation", html: `
<p>L’inflation américaine monte à partir de 2021 et dépasse 9 % en juin 2022. Pour ses critiques, c’est la preuve que les dépenses ont dépassé les capacités de l’économie, et qu’il est politiquement difficile d’augmenter les impôts à temps. Kelton répond que l’inflation venait surtout de chocs sur l’offre, la désorganisation des chaînes d’approvisionnement et la guerre en Ukraine, et qu’elle a reflué sans récession.</p>` }
    ],
    objections: `
<h4>1. La tentation politique</h4>
<p>Pour Lawrence <a href="#eco-summers">Summers</a> et de nombreux économistes, la théorie sous-estime la difficulté politique d’augmenter les impôts quand l’inflation monte : en pratique, les gouvernements dépenseraient trop et retireraient trop tard. L’histoire des hyperinflations, de l’Allemagne de 1923 au Zimbabwe, sert de mise en garde.</p>
<h4>2. Les taux d’intérêt et la confiance</h4>
<p>Même un État souverain paie des intérêts sur sa dette. Si les investisseurs perdent confiance, les taux et la monnaie peuvent décrocher, comme au Royaume-Uni en septembre 2022, quand un budget non financé a provoqué une crise sur les marchés obligataires.</p>
<h4>3. Rien de vraiment nouveau</h4>
<p>Paul <a href="#eco-krugman">Krugman</a> et d’autres keynésiens jugent que la théorie redit en termes nouveaux ce que la macroéconomie sait déjà : en récession, avec des taux à zéro, les déficits ne posent guère de problème ; au plein emploi, si. Le désaccord porterait surtout sur le vocabulaire et sur l’indépendance de la banque centrale.</p>
<h4>4. Un modèle pour les grands pays</h4>
<p>La thèse vaut surtout pour les pays dont la monnaie est très demandée dans le monde, comme les États-Unis. Un petit pays émergent qui créerait massivement de la monnaie verrait vite son taux de change s’effondrer et ses importations renchérir.</p>`,
    ecoles: `
<p><b>Georg Friedrich Knapp</b> et sa théorie de la monnaie comme création de l’État (1905) sont la source lointaine du courant.</p>
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> et <b>Abba Lerner</b>, avec la « finance fonctionnelle », sont ses références directes.</p>
<p><b>Hyman <a href="#eco-minsky">Minsky</a></b> lui inspire la garantie d’emploi et l’attention aux bilans.</p>
<p><b>Michał <a href="#eco-kalecki">Kalecki</a></b> lui fournit l’analyse des profits et des déficits.</p>
<p><b>L. Randall Wray</b> et <b>Warren Mosler</b> ont bâti la théorie avec elle.</p>
<p><b>Lawrence <a href="#eco-summers">Summers</a></b> est son principal contradicteur.</p>`,
    source: {
      titre: "Stephanie Kelton, Le Mythe du déficit, 2020, titre du chapitre 4",
      texte: "Leur déficit est notre excédent.",
      notes: `
<p><b>Une identité comptable.</b> Dans une économie, les dépenses des uns sont les revenus des autres. Quand l’État dépense plus qu’il ne prélève, la différence se retrouve dans les comptes des ménages et des entreprises.</p>
<p><b>Ce qu’elle en tire.</b> Réduire le déficit public, c’est réduire l’épargne financière du secteur privé. Une politique d’austérité peut donc appauvrir les ménages au moment où ils ont besoin d’épargner.</p>
<p><b>Ce qu’on lui répond.</b> L’identité est exacte, mais elle ne dit rien de l’inflation ni des taux d’intérêt. Ses critiques jugent que tout le débat porte justement sur ces deux points.</p>`
    },
    quiz: [
      { q: "Selon la théorie moderne de la monnaie, quelle est la vraie limite de la dépense d’un État qui émet sa propre monnaie ?",
        o: ["Le niveau de la dette publique, qui ne doit pas dépasser le PIB", "L’inflation, quand les ressources sont pleinement utilisées", "Le taux de change fixe, qui oblige à défendre la monnaie", "Le budget de l’année précédente, reconduit chaque année"], c: 1,
        e: "La question n’est pas « comment le payer ? », mais « avons-nous les ressources ? »." },
      { q: "À quoi sert l’impôt dans cette vision ?",
        o: ["À financer les dépenses de l’État avant qu’il puisse les engager", "À créer une demande pour la monnaie et à contenir l’inflation", "À rembourser à la banque centrale la monnaie qu’elle a créée", "À rembourser la dette publique accumulée au fil des années"], c: 1,
        e: "L’État dépense d’abord, puis prélève ; l’impôt oriente aussi les comportements." },
      { q: "Qu’est-ce que la garantie d’emploi proposée par Kelton ?",
        o: ["Une interdiction de licencier pendant les périodes de crise", "Un emploi public à salaire fixe offert à qui en cherche un", "Un revenu universel versé à chacun, sans contrepartie de travail", "Une subvention versée aux entreprises qui embauchent des chômeurs"], c: 1,
        e: "Le nombre de ces emplois varie avec la conjoncture." },
      { q: "Quel économiste a jugé en 2019 cette théorie « recette d’un désastre » ?",
        o: ["Paul Krugman", "Lawrence Summers", "Milton Friedman", "Joseph Stiglitz"], c: 1,
        e: "Dans une tribune du Washington Post, en mars 2019." }
    ],
    ouverte: {
      q: "La Suisse émet sa propre monnaie, a un taux de change flottant et s’endette en francs. Selon Kelton, elle pourrait donc dépenser davantage. Pourtant, elle applique depuis 2003 un frein à l’endettement. Qui a raison ?",
      r: "Kelton dirait que la Suisse remplit toutes les conditions de la souveraineté monétaire, et que sa vraie limite est l’inflation, très faible depuis des décennies. Le frein à l’endettement, en imposant l’équilibre sur le cycle, s’impose une contrainte qu’elle juge inutile : la Confédération pourrait investir davantage dans la transition énergétique, la formation ou les infrastructures sans risque de faillite. Elle noterait aussi que la BNS verse chaque année une partie de ses bénéfices à la Confédération et aux cantons, ce qui illustre le lien entre monnaie et finances publiques. Les défenseurs du frein répondent que la Suisse a fait l’expérience de déficits durables dans les années 1990, que la confiance dans le franc tient aussi à la rigueur budgétaire, et que la BNS, indépendante, a pour mission la stabilité des prix, non le financement de l’État. Ils rappellent enfin que le frein a été approuvé par 85 % des votants en 2001. Le débat oppose deux idées de la prudence : éviter la dette, ou éviter le sous-investissement."
    },
    lectures: [
      ["Accessible", "Stephanie Kelton, Le Mythe du déficit, 2020."],
      ["Intermédiaire", "Lawrence Summers, « The left’s embrace of modern monetary theory is a recipe for disaster », The Washington Post, mars 2019, pour la critique."],
      ["Intermédiaire", "L. Randall Wray, Modern Money Theory, 2012."],
      ["Recherche", "Abba Lerner, « Functional Finance and the Federal Debt », Social Research, 1943 ; Stephanie Bell, « Can Taxes and Bonds Finance Government Spending? », 1998."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Kelton, en quoi un État qui émet sa propre monnaie diffère-t-il d’un ménage ?",
          o: ["Il crée la monnaie en la dépensant, donc il ne peut pas faire faillite", "Il doit gagner de l’argent avant de pouvoir le dépenser, comme un ménage", "Il ne peut pas s’endetter, contrairement aux ménages et aux firmes", "Il dépend des banques privées pour obtenir la monnaie qu’il dépense"], c: 0,
          e: "C’est le point de départ de la théorie moderne de la monnaie." },
        { q: "Que reprochent ses critiques à la théorie défendue par Kelton ?",
          o: ["D’encourager les gouvernements à trop dépenser", "D’interdire toute dépense publique en période de crise", "De négliger le rôle de la monnaie dans l’économie", "De proposer de supprimer l’impôt sur les sociétés"], c: 0,
          e: "Elle répond qu’il faut surveiller l’inflation, pas la dette." }
      ],
      duree: 5,
      html: `
<h3>Une économiste au cœur du débat américain</h3>
<p>Stephanie Kelton, née en 1969, est professeure dans l’État de New York, ancienne économiste au Sénat américain et ancienne conseillère de Bernie Sanders. En 2020, son livre Le Mythe du déficit devient un succès de librairie.</p>
${vieKelton}
<h3>L’État n’est pas un ménage</h3>
<p>Un ménage doit gagner de l’argent avant de le dépenser. Un État qui émet sa propre monnaie, comme les États-Unis ou la Suisse, crée la monnaie en dépensant. Il ne peut pas faire faillite dans sa propre monnaie.</p>
${circuit}
<h3>La vraie limite : l’inflation</h3>
<p>L’État ne peut pas pour autant dépenser sans limite. S’il demande plus de travail et de ressources qu’il n’y en a, les prix montent. Pour Kelton, il faut surveiller l’inflation, pas la dette. Ses critiques jugent que cette idée encourage les gouvernements à trop dépenser.</p>
<h3>À retenir</h3>
<p>La théorie moderne de la monnaie déplace la question de la dette vers celle des ressources réelles. Le portrait complet présente ses arguments et ses critiques, de Summers à Krugman.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      vie: "De Sacramento à Cambridge, Kansas City, le Sénat et Stony Brook.",
      epoque: "L’austérité après 2008 et les racines de la théorie.",
      pensee: "Six étapes, de l’État qui n’est pas un ménage à la monnaie de crédit.",
      livres: "De l’article de 1998 au Mythe du déficit.",
      cas: "Le débat de 2019, la pandémie, l’épreuve de l’inflation.",
      objections: "La tentation politique, la confiance, rien de nouveau, les grands pays.",
      ecoles: "Knapp, Keynes et Lerner, Minsky, Kalecki, Wray et Mosler, Summers.",
      source: "Leur déficit est notre excédent.",
      quiz: "Quatre questions corrigées et une question sur le frein à l’endettement.",
      lectures: "Quatre lectures classées par niveau."
    }
  };
})();
