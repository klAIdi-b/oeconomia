/* Œconomia — notices longues, lot 2 (a) : instabilité financière, plus-value */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     5. INSTABILITÉ FINANCIÈRE (MINSKY)
     ===================================================================== */
  const regimes = fig(250, `
    ${[["Couvert", "Les revenus remboursent", "intérêts et capital", "note", 20], ["Spéculatif", "Les revenus paient les intérêts ;", "le capital doit être refinancé", "gold", 225], ["Ponzi", "Il faut emprunter ou vendre", "pour payer les intérêts", "serial", 430]].map(([a, b, c, col, x]) => `
      <rect x="${x}" y="30" width="190" height="96" rx="10" style="fill:var(--card); stroke:var(--${col}); stroke-width:1.5"/>
      <text x="${x + 95}" y="58" text-anchor="middle" style="fill:var(--${col}); font:700 15px Manrope, sans-serif">${a}</text>
      <text x="${x + 95}" y="84" text-anchor="middle" ${S}>${b}</text><text x="${x + 95}" y="100" text-anchor="middle" ${S}>${c}</text>`).join("")}
    <line x1="30" y1="160" x2="610" y2="160" style="stroke:var(--ink-soft); stroke-width:1.5"/>
    <path d="M600,154 L610,160 L600,166" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5"/>
    <text x="30" y="184" ${T}>Années calmes, confiance croissante, marges de sécurité qui s’amenuisent</text>
    <text x="30" y="206" ${S}>Un choc modeste (taux, prix des actifs) provoque alors des ventes forcées en cascade :</text>
    <text x="30" y="224" style="fill:var(--serial); font:700 12.5px Manrope, sans-serif">le « moment Minsky ».</text>`,
    "Les trois régimes de financement de Minsky. Plus la période de stabilité dure, plus la part des positions spéculatives et Ponzi augmente dans l’économie.",
    "Schéma des trois régimes de financement couvert, spéculatif et Ponzi");

  const sawtooth = fig(260, (() => {
    const L = 50, R = 610, B = 210, pts = [];
    const ys = [0.25, 0.32, 0.42, 0.55, 0.7, 0.86, 0.3, 0.36, 0.45, 0.58, 0.74, 0.9, 0.35];
    ys.forEach((v, i) => pts.push([L + i * ((R - L) / (ys.length - 1)), B - v * 160]));
    let s = `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--line)"/><line x1="${L}" y1="40" x2="${L}" y2="${B}" style="stroke:var(--line)"/>`;
    s += `<polyline points="${pts.map((p) => p.join(",")).join(" ")}" style="fill:none; stroke:var(--plum); stroke-width:2.5"/>`;
    [5, 11].forEach((i) => { s += `<circle cx="${pts[i][0]}" cy="${pts[i][1]}" r="6" style="fill:var(--serial)"/><text x="${pts[i][0]}" y="${pts[i][1] - 12}" text-anchor="middle" style="fill:var(--serial); font:700 12px Manrope, sans-serif">crise</text>`; });
    s += `<text x="${L + 6}" y="48" ${M}>fragilité</text><text x="${R}" y="${B + 22}" text-anchor="end" ${M}>temps</text>`;
    s += `<text x="${L + 10}" y="32" ${T}>Profil illustratif d’un cycle financier selon Minsky</text>`;
    return s;
  })(), "Schéma illustratif, sans données : la fragilité financière (endettement, prise de risque) monte progressivement pendant les années calmes, puis chute brutalement lors de la crise, avant de recommencer.", "Schéma en dents de scie de la fragilité financière au fil du temps");

  OEC.notices["instabilite-financiere"] = {
    essentiel: [
      "Pour Hyman Minsky, les crises financières ne viennent pas de chocs extérieurs à un système stable : elles naissent du fonctionnement normal d’une économie où l’on investit à crédit.",
      "Les périodes de calme rendent prêteurs et emprunteurs confiants ; ils s’endettent davantage, avec des marges de sécurité plus faibles, jusqu’à ce que l’économie devienne fragile. La stabilité est déstabilisante.",
      "Ces idées, longtemps marginales, sont devenues après 2008 une référence pour les banques centrales, qui cherchent désormais à freiner le crédit pendant les booms, et non seulement à réparer après les krachs."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi les crises surprennent-elles toujours ?", html: `
<p>En 2004, Ben Bernanke, alors gouverneur de la Réserve fédérale, prononce un discours sur la « grande modération » : depuis le milieu des années 1980, les fluctuations de la production et de l’inflation ont nettement diminué dans les pays riches. Les banques centrales semblent avoir appris à piloter l’économie. En 2003, <a href="#eco-lucas">Robert Lucas</a> affirme que le problème central de la prévention des dépressions est résolu. Quatre ans plus tard commence la plus grave crise financière depuis 1929.</p>
<p>Comment des économistes aussi compétents ont-ils pu se tromper à ce point ? Une réponse avait été donnée bien avant par un économiste peu connu, <a href="#eco-minsky">Hyman Minsky</a>. Selon lui, c’est précisément parce que tout semblait stable que la crise se préparait. Les années calmes ne sont pas une preuve de solidité ; elles sont la période pendant laquelle la fragilité s’accumule.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Une économie de dettes</h4>
<p>Minsky part d’une observation que les modèles dominants négligeaient : dans une économie capitaliste moderne, l’investissement est financé à crédit. Une entreprise qui construit une usine, un ménage qui achète un logement, une banque qui prête : tous prennent des engagements de paiement futurs, adossés à des revenus futurs incertains. L’économie est un réseau de bilans, et chaque acteur doit chaque mois trouver de quoi honorer ses dettes.</p>
<h4>2. Trois manières de se financer</h4>
<p>Minsky classe les emprunteurs selon leur capacité à faire face à leurs engagements. En financement <b>couvert</b>, les revenus attendus suffisent à rembourser intérêts et capital. En financement <b>spéculatif</b>, ils ne couvrent que les intérêts ; le capital doit être refinancé à l’échéance, ce qui suppose que les prêteurs restent disposés à prêter. En financement <b>Ponzi</b>, du nom d’un escroc des années 1920, les revenus ne couvrent même pas les intérêts : il faut emprunter davantage ou compter sur la hausse du prix des actifs pour payer.</p>
${regimes}
<h4>3. La stabilité est déstabilisante</h4>
<p>Après une crise, les souvenirs sont frais : prêteurs et emprunteurs sont prudents, le financement couvert domine. Les années passent sans incident, les défauts sont rares, les prix des actifs montent. Les banques assouplissent leurs critères, car leurs concurrents le font et leurs modèles de risque, fondés sur le passé récent, signalent peu de danger. Les emprunteurs s’endettent davantage, car l’endettement a été payant. La part des positions spéculatives et Ponzi augmente. Chacun agit de façon rationnelle compte tenu de l’expérience récente ; c’est l’ensemble qui devient fragile.</p>
<h4>4. Le moment Minsky</h4>
<p>Il suffit alors d’un choc modeste, une hausse des taux d’intérêt ou un retournement du marché immobilier, pour que les unités en financement Ponzi ne puissent plus payer. Elles doivent vendre leurs actifs ; les prix baissent ; les unités spéculatives, qui comptaient sur le refinancement, voient leurs prêteurs se retirer ; les ventes forcées se multiplient. La spirale rejoint la « déflation par la dette » décrite par Irving Fisher en 1933 : en vendant pour rembourser, chacun fait baisser les prix, ce qui alourdit le poids réel des dettes de tous. L’expression « moment Minsky » est forgée en 1998 par l’analyste Paul McCulley, à propos de la crise russe.</p>
${sawtooth}
<h4>5. Le rôle de l’État</h4>
<p>Minsky en tire deux conclusions. D’abord, une économie capitaliste avancée a besoin d’un « gros gouvernement », dont les déficits soutiennent les revenus et les profits pendant la crise, et d’une « grosse banque centrale », prête à agir en <a href="#c-preteur-dernier-ressort">prêteur en dernier ressort</a> pour éviter l’effondrement. Ensuite, ces interventions ont un coût : en sauvant le système, elles valident les comportements risqués et préparent la prochaine phase d’euphorie. D’où l’importance de la régulation pendant les années calmes, et non seulement après la crise.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les booms de crédit annoncent les crises</h4>
<p>Moritz Schularick et Alan Taylor ont reconstitué en 2012 les séries de crédit de quatorze pays riches depuis 1870. Ils montrent qu’une croissance rapide du crédit bancaire est le meilleur indicateur avancé des crises financières, bien plus que la dette publique ou l’inflation. Avec Òscar Jordà, ils établissent ensuite que les récessions précédées d’un boom de crédit, surtout immobilier, sont plus profondes et plus longues que les autres. C’est une confirmation statistique directe de l’intuition de Minsky.</p>
<h4>Huit siècles de folie financière</h4>
<p>Carmen Reinhart et Kenneth Rogoff, dans Cette fois, c’est différent (2009), recensent les crises bancaires, de change et de dette sur huit siècles et dans des dizaines de pays. Leur titre résume un constat : à chaque époque, les acteurs se persuadent que les règles anciennes ne s’appliquent plus, grâce à une innovation financière, à une politique monétaire plus habile ou à une « nouvelle économie ». Les mêmes enchaînements se reproduisent pourtant.</p>
<h4>L’apport de Kindleberger</h4>
<p>L’historien Charles Kindleberger s’appuie sur Minsky pour décrire, dans Manias, Panics, and Crashes (1978), une séquence commune aux bulles : un « déplacement » qui ouvre de nouvelles opportunités, un essor alimenté par le crédit, l’euphorie, la prise de bénéfices des initiés, puis la panique (<a href="#crises">voir l’anatomie des krachs</a>).</p>` }
    ],
    cas: [
      { titre: "La crise immobilière suisse des années 1990", html: `
<p>À la fin des années 1980, les prix de l’immobilier suisse s’envolent, portés par des taux bas, une concurrence vive entre banques et l’anticipation de hausses continues. Les banques régionales et cantonales prêtent largement sur la valeur des immeubles. En 1989-1990, la Banque nationale relève fortement ses taux pour combattre l’inflation ; les prix immobiliers se retournent et baissent pendant plusieurs années. De nombreux emprunteurs ne peuvent plus payer, les garanties perdent leur valeur. Plusieurs banques régionales disparaissent, dont la Spar- und Leihkasse de Thoune, fermée en 1991, et les pertes du secteur bancaire se chiffrent en dizaines de milliards de francs au cours de la décennie. La séquence est minskienne : endettement croissant pendant le boom, hausse des taux, ventes forcées, chute des prix.</p>` },
      { titre: "Le Japon de la bulle et de la « décennie perdue »", html: `
<p>Dans la seconde moitié des années 1980, les prix des actions et des terrains japonais atteignent des niveaux extraordinaires, alimentés par un crédit bancaire abondant garanti par l’immobilier. L’indice Nikkei culmine fin décembre 1989 près de 39 000 points. Le resserrement monétaire de 1989-1990 fait éclater la bulle. Les banques, chargées de créances douteuses, tardent à les reconnaître et continuent de prêter à des entreprises insolvables pour éviter d’enregistrer des pertes. Le Japon connaît alors une longue période de croissance faible et de baisse des prix. Le cas montre la seconde moitié du cycle de Minsky : quand les bilans sont endommagés, la reprise peut prendre une décennie.</p>` },
      { titre: "Les subprimes et la faillite de Lehman", html: `
<p>Les crédits immobiliers américains des années 2000 suivent presque à la lettre la typologie de Minsky. Les prêts traditionnels, remboursés par le revenu de l’emprunteur, sont complétés par des prêts à taux d’appel, puis par des prêts sans apport ni vérification de revenus, qui ne peuvent être remboursés que si les prix continuent de monter pour permettre un refinancement. Les banques financent ces portefeuilles avec de la dette à très court terme. Quand les prix baissent en 2006-2007, l’édifice s’effondre (<a href="#crises" data-crisis="subprimes">voir la crise</a>). Les économistes et les journalistes redécouvrent alors Minsky, mort en 1996 ; ses livres, épuisés, sont réédités.</p>` }
    ],
    objections: `
<h4>1. Une théorie difficile à tester</h4>
<p>Minsky décrit une dynamique, mais il ne dit pas quand la crise survient ni quelle ampleur elle aura. Les économistes de la tradition dominante lui ont longtemps reproché de ne pas proposer de modèle formel permettant des prédictions précises. Des chercheurs ont depuis construit des modèles « minskiens » (Steve Keen, Gennaro Zezza), mais sans consensus.</p>
<h4>2. Toutes les périodes calmes ne finissent pas en crise</h4>
<p>Beaucoup de booms de crédit se terminent sans crise grave. Gary Gorton et Guillermo Ordoñez ont distingué les « bons » et les « mauvais » booms selon que la productivité progresse ou non en parallèle. La théorie doit expliquer pourquoi certains cycles basculent et d’autres non.</p>
<h4>3. L’aléa moral des sauvetages</h4>
<p>Si la banque centrale et l’État interviennent systématiquement, comme le recommande Minsky, les acteurs financiers apprennent qu’ils seront sauvés, ce qui encourage la prise de risque. Minsky voyait le problème ; ses critiques jugent qu’il le sous-estimait.</p>
<h4>4. La réponse macroprudentielle est-elle suffisante ?</h4>
<p>Depuis 2008, les régulateurs ont développé des instruments pour freiner le crédit pendant les booms. Mais la finance se déplace vers des acteurs moins régulés, fonds d’investissement, assureurs, plateformes, ce que l’on appelle la « finance de l’ombre ». La faillite de Credit Suisse en 2023 a montré que même une grande banque soumise aux règles renforcées peut perdre la confiance en quelques jours.</p>`,
    ecoles: `
<p><b><a href="#eco-keynes">Keynes</a></b> est la source principale de Minsky, qui le lit comme un théoricien de l’incertitude et de la finance, contre la version simplifiée de la synthèse néoclassique.</p>
<p><b>Irving Fisher</b> a décrit en 1933 la déflation par la dette, que Minsky intègre comme phase finale de son cycle.</p>
<p><b><a href="#eco-schumpeter">Schumpeter</a></b>, son premier directeur de thèse, insistait sur le crédit comme moteur de l’innovation et des cycles.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> et l’école autrichienne attribuent aussi les crises au crédit excessif, mais en accusent la banque centrale qui maintient les taux trop bas, alors que Minsky voit dans l’instabilité une propriété du marché lui-même.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> partage avec Minsky la conviction qu’il faut un prêteur en dernier ressort, mais pas sa méfiance envers les marchés financiers.</p>
<p><b>Ben Bernanke</b>, Douglas Diamond et Philip Dybvig, Nobel 2022, ont montré par d’autres voies le rôle central des banques et des paniques dans les crises.</p>`,
    source: {
      titre: "Hyman Minsky, « The Financial Instability Hypothesis », 1992",
      texte: "Au cours de périodes de prospérité prolongées, l’économie passe de relations financières qui la rendent stable à des relations financières qui la rendent instable.",
      notes: `
<p><b>Le contexte.</b> Ce texte de quelques pages, rédigé à la fin de sa carrière pour le Levy Economics Institute, résume en termes simples l’œuvre de toute une vie. Il paraît dans l’indifférence quasi générale de la profession.</p>
<p><b>Le mot clé : « prolongées ».</b> Ce n’est pas la prospérité qui est dangereuse, mais sa durée. Plus elle dure, plus la mémoire des crises s’efface et plus les marges de sécurité diminuent.</p>
<p><b>Une économie qui change de nature.</b> Minsky ne parle pas d’un choc qui frappe un système stable, mais d’un système dont la structure financière se transforme de l’intérieur. C’est ce qui distingue sa théorie des modèles où les crises viennent de l’extérieur.</p>`
    },
    quiz: [
      { q: "Qu’est-ce qui distingue un financement « spéculatif » au sens de Minsky ?",
        o: ["L’emprunteur achète des actions", "Les revenus couvrent les intérêts mais pas le capital, qui doit être refinancé", "L’emprunteur ne paie aucun intérêt", "Les revenus couvrent à la fois les intérêts et le remboursement du capital"], c: 1,
        e: "En financement spéculatif, l’emprunteur dépend de la disposition des prêteurs à refinancer le capital à l’échéance." },
      { q: "Pourquoi, selon Minsky, la stabilité est-elle déstabilisante ?",
        o: ["Parce que les banques centrales relèvent les taux pendant les périodes calmes", "Parce que la confiance accumulée pousse à s’endetter davantage avec des marges plus faibles", "Parce que les épargnants retirent leur argent", "Parce que l’inflation augmente toujours"], c: 1,
        e: "Les années sans incident encouragent prêteurs et emprunteurs à prendre plus de risques, ce qui accroît la fragilité de l’ensemble." },
      { q: "Qu’ont montré Schularick et Taylor sur 14 pays depuis 1870 ?",
        o: ["Que la dette publique annonce les crises", "Qu’une croissance rapide du crédit bancaire est le meilleur signal avancé des crises financières", "Que les crises sont imprévisibles", "Que l’inflation précède toujours les krachs"], c: 1,
        e: "Le boom du crédit, en particulier immobilier, précède la plupart des crises financières et les rend plus graves." },
      { q: "Que désigne l’expression « moment Minsky » ?",
        o: ["Le début d’une période d’euphorie sur les marchés", "L’instant où des emprunteurs trop endettés doivent vendre leurs actifs, déclenchant une spirale de baisse", "Le moment où la banque centrale baisse ses taux", "La fin d’une récession"], c: 1,
        e: "Forgée par Paul McCulley en 1998, l’expression désigne le basculement d’un boom fondé sur la dette en ventes forcées et en effondrement des prix." },
      { q: "Quelle est la principale critique adressée aux recommandations de Minsky ?",
        o: ["Elles ignorent le rôle des banques", "Les sauvetages systématiques peuvent encourager la prise de risque (aléa moral)", "Elles accordent un rôle trop faible à la politique budgétaire", "Elles supposent des agents parfaitement rationnels"], c: 1,
        e: "Si l’État et la banque centrale sauvent toujours le système, les acteurs financiers anticipent ce soutien et prennent davantage de risques." }
    ],
    transfert: { q: "Pendant dix ans, les prix des logements montent chaque année dans un pays, et les banques acceptent des prêts de plus en plus élevés par rapport aux revenus. Que dirait Minsky ?",
      o: ["Le risque de crise augmente justement parce que la période a été calme", "Le marché est sûr, puisque les prix montent depuis longtemps", "Les banques sont devenues plus prudentes", "Seule une hausse des salaires pourrait provoquer une crise"], c: 0,
      e: "La confiance accumulée pousse à s’endetter davantage avec des marges plus faibles." },
    ouverte: {
      q: "Depuis 2013, la Suisse peut activer un « volant anticyclique de fonds propres » qui oblige les banques à détenir plus de capital pour leurs crédits hypothécaires quand l’immobilier s’emballe. En quoi cet outil s’inspire-t-il de Minsky, et quelles sont ses limites ?",
      r: "L’outil est directement minskien : il agit pendant la phase de confiance, quand la fragilité s’accumule, en rendant le crédit un peu plus coûteux et en constituant des réserves qui serviront lors du retournement. La Suisse l’a activé dès 2013 sur les prêts hypothécaires, l’a relevé en 2014, suspendu pendant la pandémie, puis réactivé en 2022. Ses limites sont toutefois réelles : il est difficile de savoir quand une hausse des prix devient une bulle ; un supplément de fonds propres de quelques pourcents ne suffit pas à arrêter un emballement nourri par des taux très bas ; enfin, le crédit peut passer par des prêteurs non bancaires, comme les assurances ou les caisses de pension, qui ne sont pas concernés. L’outil réduit le risque sans supprimer le cycle."
    },
    lectures: [
      ["Accessible", "Charles Kindleberger et Robert Aliber, Manias, Panics, and Crashes, 7e éd., 2015. Le grand récit des crises financières, nourri par Minsky."],
      ["Accessible", "Carmen Reinhart et Kenneth Rogoff, Cette fois, c’est différent : huit siècles de folie financière, 2009."],
      ["Intermédiaire", "Hyman Minsky, « The Financial Instability Hypothesis », 1992, une dizaine de pages accessibles en ligne."],
      ["Intermédiaire", "Hyman Minsky, Stabilizing an Unstable Economy, 1986, rééd. 2008."],
      ["Recherche", "Moritz Schularick et Alan Taylor, « Credit Booms Gone Bust », American Economic Review, 2012 ; Òscar Jordà, Moritz Schularick et Alan Taylor, « When Credit Bites Back », Journal of Money, Credit and Banking, 2013."]
    ],
    decouvrir: {
      questions: [
        { q: "Parmi les trois types d’emprunteurs de Minsky, lequel est le plus fragile ?",
          o: ["Celui qui ne peut même pas payer les intérêts et parie sur la hausse des prix", "Celui qui rembourse tout avec ses revenus", "Celui qui paie les intérêts et refinance le reste", "Ils sont tous aussi fragiles"], c: 0,
          e: "Il dépend entièrement de la hausse des prix de ce qu’il a acheté." },
        { q: "Selon la notice, quel événement peut faire basculer une économie très endettée ?",
          o: ["Une hausse des taux ou une baisse des prix de l’immobilier", "Une baisse des impôts", "Une hausse des salaires", "Une bonne récolte"], c: 0,
          e: "Les emprunteurs fragiles doivent vendre, les prix chutent, et la panique se propage." }
      ],
      duree: 5,
      html: `
<h3>Le calme avant la tempête</h3>
<p>En 2004, les économistes se félicitent : depuis vingt ans, les crises semblent devenues rares. Trois ans plus tard éclate la plus grave crise financière depuis 1929. L’économiste américain <a href="#eco-minsky">Hyman Minsky</a> avait expliqué pourquoi bien avant : c’est justement quand tout va bien que les crises se préparent.</p>
<h3>Trois manières d’emprunter</h3>
<p>Minsky distingue trois types d’emprunteurs. Ceux qui peuvent tout rembourser avec leurs revenus. Ceux qui ne peuvent payer que les intérêts et comptent sur un nouveau prêt pour rembourser le reste. Et ceux qui ne peuvent même pas payer les intérêts, et parient sur la hausse des prix de ce qu’ils ont acheté pour s’en sortir.</p>
${regimes}
<h3>Pourquoi la confiance devient dangereuse</h3>
<p>Après une crise, tout le monde est prudent. Puis les années passent, les prix montent, les défauts de paiement sont rares. Les banques prêtent plus facilement, les emprunteurs s’endettent davantage. Petit à petit, la part des emprunteurs fragiles augmente. Il suffit alors d’une hausse des taux ou d’une baisse des prix de l’immobilier pour que tout bascule : ceux qui ne peuvent plus payer vendent, les prix chutent, et la panique se propage.</p>
<h3>À retenir</h3>
<p>« La stabilité est déstabilisante. » Cette idée a été redécouverte après la crise de 2008 et inspire aujourd’hui les règles qui obligent les banques à mettre de l’argent de côté quand le crédit s’emballe. La notice complète présente les preuves historiques et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "La « grande modération » et la crise que personne n’avait vue venir.",
      raisonnement: "Cinq étapes : dettes, trois régimes de financement, stabilité déstabilisante, moment Minsky, rôle de l’État.",
      preuves: "Les booms de crédit depuis 1870, huit siècles de crises, l’anatomie de Kindleberger.",
      cas: "La crise immobilière suisse des années 1990, la bulle japonaise, les subprimes.",
      objections: "Une théorie difficile à tester, les bons booms, l’aléa moral, la finance de l’ombre.",
      ecoles: "Keynes, Fisher, Schumpeter, Hayek, Friedman, Bernanke, Diamond et Dybvig.",
      source: "Minsky, 1992 : comment la prospérité prolongée transforme la structure financière.",
      quiz: "Six questions corrigées et une question sur le volant anticyclique suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     6. PLUS-VALUE (MARX)
     ===================================================================== */
  const journee = fig(250, (() => {
    const L = 40, W = 560, y = 70, h = 46, hour = W / 12;
    let s = `<text x="${L}" y="34" ${T}>La journée de travail de 12 heures dans l’exemple de Marx</text>`;
    s += `<rect x="${L}" y="${y}" width="${hour * 6}" height="${h}" rx="6" style="fill:var(--note-soft); stroke:var(--note)"/>`;
    s += `<rect x="${L + hour * 6}" y="${y}" width="${hour * 6}" height="${h}" rx="6" style="fill:color-mix(in srgb, var(--serial) 14%, transparent); stroke:var(--serial)"/>`;
    s += `<text x="${L + hour * 3}" y="${y + 29}" text-anchor="middle" ${T}>Travail nécessaire : 6 h</text>`;
    s += `<text x="${L + hour * 9}" y="${y + 29}" text-anchor="middle" ${T}>Surtravail : 6 h</text>`;
    for (let i = 0; i <= 12; i += 2) s += `<text x="${L + i * hour}" y="${y + h + 18}" text-anchor="middle" ${M}>${i} h</text>`;
    s += `<text x="${L + hour * 3}" y="${y + h + 44}" text-anchor="middle" ${S}>produit l’équivalent du salaire</text>`;
    s += `<text x="${L + hour * 9}" y="${y + h + 44}" text-anchor="middle" ${S}>produit la plus-value</text>`;
    s += `<text x="${L}" y="226" ${S}>Taux de plus-value = surtravail / travail nécessaire = 6 / 6 = 100 %.</text><text x="${L}" y="242" ${S}>Allonger la journée ou réduire le travail nécessaire l’augmente.</text>`;
    return s;
  })(), "Schéma de l’exemple de Marx (Le Capital, livre I). Le salaire paie la valeur de la force de travail ; la valeur produite au-delà revient au capitaliste.", "Barre représentant une journée de 12 heures divisée en travail nécessaire et surtravail");

  const deux = fig(230, `
    <rect x="20" y="30" width="290" height="180" rx="10" style="fill:var(--card); stroke:var(--note)"/>
    <text x="165" y="58" text-anchor="middle" style="fill:var(--note); font:700 14px Manrope, sans-serif">Plus-value absolue</text>
    <text x="165" y="86" text-anchor="middle" ${S}>On allonge la journée de travail</text>
    <rect x="50" y="110" width="140" height="22" rx="4" style="fill:var(--note-soft)"/><rect x="190" y="110" width="70" height="22" rx="4" style="fill:color-mix(in srgb, var(--serial) 14%, transparent)"/>
    <rect x="50" y="146" width="140" height="22" rx="4" style="fill:var(--note-soft)"/><rect x="190" y="146" width="100" height="22" rx="4" style="fill:color-mix(in srgb, var(--serial) 20%, transparent)"/>
    <text x="165" y="196" text-anchor="middle" ${S}>Limite : la fatigue, la loi, la résistance ouvrière</text>
    <rect x="330" y="30" width="290" height="180" rx="10" style="fill:var(--card); stroke:var(--plum)"/>
    <text x="475" y="58" text-anchor="middle" style="fill:var(--plum); font:700 14px Manrope, sans-serif">Plus-value relative</text>
    <text x="475" y="86" text-anchor="middle" ${S}>Les biens de l’ouvrier deviennent moins chers</text>
    <rect x="360" y="110" width="140" height="22" rx="4" style="fill:var(--note-soft)"/><rect x="500" y="110" width="70" height="22" rx="4" style="fill:color-mix(in srgb, var(--serial) 14%, transparent)"/>
    <rect x="360" y="146" width="95" height="22" rx="4" style="fill:var(--note-soft)"/><rect x="455" y="146" width="115" height="22" rx="4" style="fill:color-mix(in srgb, var(--serial) 20%, transparent)"/>
    <text x="475" y="196" text-anchor="middle" ${S}>Moteur : le progrès technique et la productivité</text>`,
    "Les deux manières d’accroître la plus-value. En vert, le travail nécessaire ; en rouge, le surtravail. À gauche, la journée s’allonge ; à droite, elle garde la même durée mais le travail nécessaire se réduit.",
    "Comparaison schématique de la plus-value absolue et de la plus-value relative");

  OEC.notices["plus-value"] = {
    essentiel: [
      "Pour Marx, le profit ne vient pas d’un échange inégal sur le marché, mais de la production : l’ouvrier vend sa force de travail à sa valeur, mais travaille plus longtemps qu’il ne faut pour produire l’équivalent de son salaire.",
      "Ce surtravail produit la plus-value, que le capitaliste s’approprie. Elle augmente si l’on allonge la journée (plus-value absolue) ou si le progrès technique rend moins chers les biens que consomme l’ouvrier (plus-value relative).",
      "La théorie repose sur la valeur-travail, que l’économie dominante a abandonnée ; mais la question qu’elle pose, celle du partage de la valeur ajoutée entre salaires et profits, reste au cœur des débats économiques."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : d’où vient le profit, si tout s’échange à sa valeur ?", html: `
<p>Un fabricant de fil achète du coton, loue des machines, embauche des ouvriers. Il paie chacun au prix du marché : le coton à son cours, les machines à leur valeur, les ouvriers au salaire courant. Il vend ensuite son fil, lui aussi au prix du marché. Et pourtant, il termine l’année avec plus d’argent qu’il n’en avait avancé. D’où vient ce surplus ?</p>
<p>Les économistes classiques l’attribuaient à la « productivité du capital » ou à la récompense de l’abstinence du capitaliste qui renonce à consommer. <a href="#eco-marx">Marx</a> juge ces réponses insuffisantes. Si chacun achète et vend à la valeur, l’échange ne peut créer de valeur nouvelle : ce que l’un gagne, l’autre le perd. Le profit doit donc naître ailleurs, dans la production elle-même. La réponse qu’il donne au livre I du Capital (1867) est au cœur de toute sa théorie : la plus-value.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Travail et force de travail</h4>
<p>Marx reprend à <a href="#eco-ricardo">Ricardo</a> l’idée que la valeur d’une marchandise dépend du <a href="#c-valeur-travail">travail socialement nécessaire</a> à sa production. Il introduit ensuite une distinction décisive. L’ouvrier ne vend pas son travail, qui n’existe pas encore au moment de l’embauche : il vend sa <b>force de travail</b>, sa capacité à travailler pendant une journée. Comme toute marchandise, la force de travail a une valeur : celle des biens nécessaires pour la produire et la reproduire, c’est-à-dire nourrir, loger et entretenir l’ouvrier et sa famille, selon les normes sociales de l’époque.</p>
<h4>2. Une marchandise qui crée plus de valeur qu’elle n’en coûte</h4>
<p>La force de travail a une propriété unique : son usage, le travail, crée de la valeur. Supposons que la valeur des biens nécessaires à l’ouvrier pour une journée représente six heures de travail. Le capitaliste paie donc l’équivalent de six heures. Mais il a acheté la force de travail pour une journée entière, disons douze heures. Pendant les six premières, l’ouvrier produit l’équivalent de son salaire : c’est le <b>travail nécessaire</b>. Pendant les six suivantes, il produit une valeur supplémentaire, que le capitaliste s’approprie sans rien payer : c’est le <b>surtravail</b>, qui produit la plus-value.</p>
${journee}
<h4>3. Capital constant et capital variable</h4>
<p>Marx distingue deux parts du capital. Le capital <b>constant</b> (c) sert à acheter machines et matières premières : il transmet sa valeur au produit sans l’accroître. Le capital <b>variable</b> (v) sert à acheter la force de travail : c’est la seule partie qui crée une valeur nouvelle, supérieure à son coût. La valeur du produit s’écrit donc c + v + pl, où pl est la plus-value. Le rapport pl/v est le <b>taux de plus-value</b>, ou taux d’exploitation ; le rapport pl/(c + v) est le <b>taux de profit</b>.</p>
<h4>4. Plus-value absolue et relative</h4>
<p>Le capitaliste peut accroître la plus-value de deux façons. Il peut allonger la journée de travail : c’est la plus-value <b>absolue</b>. Marx consacre un long chapitre aux luttes autour de la durée du travail en Angleterre, des journées de quinze heures dans les filatures à la loi des dix heures de 1847. Il peut aussi, à durée égale, réduire le temps de travail nécessaire : si le progrès technique fait baisser le prix du pain, des vêtements et du logement, la valeur de la force de travail diminue, et le surtravail augmente. C’est la plus-value <b>relative</b>, liée à la productivité.</p>
${deux}
<h4>5. De la plus-value aux crises</h4>
<p>La concurrence pousse chaque capitaliste à introduire des machines pour réduire ses coûts. Mais les machines ne créent pas de plus-value ; seul le travail vivant le fait. À mesure que la part du capital constant augmente, le taux de profit tend à baisser, à taux de plus-value donné : c’est la « loi de la baisse tendancielle du taux de profit », exposée au livre III. Marx y voit l’une des sources des crises récurrentes du capitalisme, même s’il énumère aussi de nombreuses « causes contraires ».</p>
<h4>6. Le problème de la transformation</h4>
<p>Une difficulté apparaît. Si seul le travail crée de la plus-value, les industries qui emploient beaucoup de travailleurs et peu de machines devraient être plus rentables. Or la concurrence égalise les taux de profit entre secteurs. Marx répond au livre III que les prix de marché s’écartent des valeurs : les « prix de production » redistribuent la plus-value totale entre secteurs selon le capital avancé. En 1896, Eugen von Böhm-Bawerk juge cette solution contradictoire, et la controverse sur ce « problème de la transformation » dure encore.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le partage de la valeur ajoutée</h4>
<p>Si la théorie de la plus-value ne se teste pas directement, la question qu’elle pose se mesure : quelle part de la valeur ajoutée revient aux salaires, et quelle part aux profits ? Pendant longtemps, cette part a semblé remarquablement stable dans les pays riches, autour des deux tiers pour les salaires : l’économiste Nicholas Kaldor en avait fait l’un de ses « faits stylisés » en 1961. Depuis les années 1980, elle a baissé dans de nombreux pays. Loukas Karabarbounis et Brent Neiman (2014) estiment cette baisse à environ cinq points de pourcentage au niveau mondial, et l’attribuent en partie à la baisse du prix des équipements, qui pousse à remplacer le travail par du capital.</p>
<h4>Les entreprises « superstars »</h4>
<p>David Autor et ses coauteurs (2020) montrent que la baisse de la part salariale aux États-Unis vient surtout de la montée de grandes entreprises très productives, qui emploient relativement peu de salariés par rapport à leur chiffre d’affaires. Marx aurait vu dans ce mouvement une illustration de la concentration du capital ; les économistes contemporains l’expliquent plutôt par le numérique, les effets de réseau et la concurrence imparfaite.</p>
<h4>Le théorème d’Okishio</h4>
<p>En 1961, l’économiste japonais Nobuo Okishio, sympathisant marxiste, démontre qu’une innovation adoptée par des capitalistes parce qu’elle réduit leurs coûts ne peut pas, à salaire réel constant, faire baisser le taux de profit général. Ce théorème a fragilisé la loi de la baisse tendancielle et suscité un long débat parmi les économistes marxistes eux-mêmes.</p>` }
    ],
    cas: [
      { titre: "La bataille pour la journée de dix heures", html: `
<p>Au début du XIXe siècle, dans les filatures anglaises, des enfants de sept ou huit ans travaillent souvent douze à quatorze heures par jour. Les inspecteurs des fabriques, créés par la loi de 1833, documentent ces conditions dans des rapports que Marx exploite abondamment. Après des décennies de mobilisation ouvrière et philanthropique, la loi de 1847 limite à dix heures par jour le travail des femmes et des adolescents dans le textile. Marx y voit la première victoire de l’économie politique de la classe ouvrière sur celle de la bourgeoisie, et la preuve que la durée de la journée, donc la plus-value absolue, est l’enjeu d’un rapport de force et non une donnée naturelle.</p>` },
      { titre: "Ford et la journée à cinq dollars", html: `
<p>En janvier 1914, Henry Ford annonce qu’il doublera presque le salaire de ses ouvriers, à cinq dollars par jour, et réduira la journée à huit heures. La chaîne de montage, introduite l’année précédente, a fait chuter le temps de fabrication d’une Ford T, mais le travail est si pénible que la rotation du personnel est énorme. Le cas illustre la plus-value relative : la productivité permet à la fois des salaires plus élevés et des profits considérables, tandis que la baisse du prix de l’automobile en fait un bien accessible aux ouvriers eux-mêmes. Antonio Gramsci, marxiste italien, forgera le terme de « <dfn data-g=mode-regulation>fordisme</dfn> » pour désigner ce compromis entre production de masse et consommation de masse.</p>` },
      { titre: "La part des salaires depuis 1980", html: `
<p>Dans la plupart des pays riches, la part des salaires dans la valeur ajoutée a reculé depuis les années 1980, de façon particulièrement nette aux États-Unis à partir des années 2000. Les explications avancées sont multiples : progrès technique favorable au capital, mondialisation et concurrence des pays à bas salaires, affaiblissement des syndicats, concentration des marchés, financiarisation. Les héritiers de Marx y voient une hausse du taux d’exploitation ; la plupart des économistes y voient un ensemble de causes qui ne nécessitent pas la théorie de la valeur-travail pour être analysées. Mais tous reconnaissent que la répartition, que les classiques plaçaient au centre de l’économie politique, est redevenue une question majeure.</p>` }
    ],
    objections: `
<h4>1. La théorie de la valeur-travail</h4>
<p>Toute la construction repose sur l’idée que seul le travail crée de la valeur. Les marginalistes ont fondé la valeur sur l’utilité et la rareté ; la théorie moderne explique les prix par l’offre et la demande de tous les facteurs, sans privilégier le travail. Dans ce cadre, le profit rémunère le capital, le risque et le temps, et la notion de surtravail perd son sens.</p>
<h4>2. Le problème de la transformation</h4>
<p>Le passage des valeurs aux prix observés reste controversé. Des économistes comme Paul Samuelson (1971) ont jugé que les valeurs étaient un « détour inutile » pour expliquer les prix. Les marxistes ont proposé de nombreuses solutions, sans consensus.</p>
<h4>3. Le rôle de l’entrepreneur et du risque</h4>
<p><a href="#eco-schumpeter">Schumpeter</a> et l’école autrichienne objectent que le profit récompense l’innovation, la coordination et la prise de risque, que la théorie de Marx ignore ou réduit à du travail de supervision.</p>
<h4>4. Les prédictions démenties</h4>
<p>Marx annonçait une paupérisation croissante de la classe ouvrière. Les salaires réels ont pourtant fortement augmenté dans les pays industrialisés depuis le milieu du XIXe siècle. Ses défenseurs répondent qu’il parlait de paupérisation relative, ou que ces hausses sont le fruit des luttes sociales et non d’une tendance spontanée.</p>`,
    ecoles: `
<p><b><a href="#eco-smith">Smith</a> et <a href="#eco-ricardo">Ricardo</a></b> ont fourni à Marx la théorie de la valeur-travail ; Ricardo voyait déjà le conflit de répartition entre salaires et profits.</p>
<p><b>Les « socialistes ricardiens »</b>, comme Thomas Hodgskin dans les années 1820, avaient tiré de Ricardo l’idée que le travailleur devrait recevoir tout le produit de son travail.</p>
<p><b>Les marginalistes</b>, notamment John Bates Clark (1899), répondent que dans un marché concurrentiel chaque facteur est payé selon sa productivité marginale : il n’y a pas d’exploitation.</p>
<p><b><a href="#eco-robinson">Joan Robinson</a></b> réinterprète l’exploitation comme l’écart entre salaire et productivité dû au pouvoir de marché des employeurs, sans recourir à la valeur-travail.</p>
<p><b>Piero Sraffa</b> (1960) reconstruit une théorie des prix à partir des conditions de production, qui renoue avec les classiques sans passer par les valeurs-travail.</p>
<p><b><a href="#eco-piketty">Piketty</a></b> reprend la question de la répartition entre capital et travail, avec des données historiques et sans la théorie de la plus-value.</p>`,
    source: {
      titre: "Karl Marx, Le Capital, livre I, 1867, section sur la journée de travail",
      texte: "Le capital est du travail mort qui, semblable au vampire, ne s’anime qu’en suçant le travail vivant, et sa vie est d’autant plus allègre qu’il en pompe davantage.",
      notes: `
<p><b>Le contexte.</b> La phrase figure dans les premières pages du chapitre sur la journée de travail, le plus empirique du livre, nourri des rapports des inspecteurs des fabriques anglaises sur les enfants des filatures, les boulangers épuisés, les couturières mortes de surmenage.</p>
<p><b>Ce que dit l’image.</b> Le « travail mort », ce sont les machines et matières premières, fruit du travail passé. Elles ne produisent rien par elles-mêmes : il leur faut du travail vivant pour transmettre leur valeur et en créer une nouvelle. Le capital a donc intérêt à absorber le plus de travail vivant possible, c’est-à-dire à allonger la journée.</p>
<p><b>Le style de Marx.</b> Le Capital mêle démonstration abstraite, histoire sociale et images littéraires. Cette écriture explique en partie son influence bien au-delà des économistes, et aussi les critiques qui lui reprochent de mêler analyse et indignation morale.</p>`
    },
    quiz: [
      { q: "Selon Marx, que vend l’ouvrier au capitaliste ?",
        o: ["Son travail", "Sa force de travail, pour une durée donnée", "Le produit de son travail", "Son temps libre"], c: 1,
        e: "La distinction entre travail et force de travail est la clé : le capitaliste paie la valeur de la force de travail, mais utilise celle-ci pour produire davantage de valeur." },
      { q: "Si le travail nécessaire est de 4 heures et la journée de 10 heures, quel est le taux de plus-value ?",
        o: ["40 %", "60 %", "150 %", "250 %"], c: 2,
        e: "Le surtravail est de 10 − 4 = 6 heures. Taux de plus-value = 6 / 4 = 150 %." },
      { q: "Qu’est-ce que la plus-value relative ?",
        o: ["La plus-value obtenue en allongeant la journée", "La plus-value obtenue en réduisant le temps de travail nécessaire grâce aux gains de productivité", "La plus-value réalisée à l’étranger", "La part de la plus-value versée aux actionnaires"], c: 1,
        e: "Si les biens de l’ouvrier deviennent moins chers à produire, la valeur de sa force de travail baisse, et le surtravail augmente à journée constante." },
      { q: "Pourquoi le capital constant ne crée-t-il pas de plus-value selon Marx ?",
        o: ["Parce qu’il est financé par l’emprunt", "Parce que les machines et matières premières ne font que transmettre leur valeur au produit", "Parce que les machines remplacent les ouvriers", "Parce qu’il s’use trop vite"], c: 1,
        e: "Seul le travail vivant crée une valeur nouvelle. Les machines transmettent au produit la valeur qu’elles ont coûtée, au fur et à mesure de leur usure." },
      { q: "Quelle est la principale objection de l’économie dominante à la théorie de la plus-value ?",
        o: ["Elle ignore les machines", "Elle repose sur la valeur-travail, alors que les prix s’expliquent par l’offre, la demande et la rareté de tous les facteurs", "Elle surestime les salaires", "Elle sous-estime le rôle des syndicats dans la fixation des salaires"], c: 1,
        e: "Depuis la révolution marginaliste, la valeur n’est plus rattachée au seul travail ; le profit est vu comme la rémunération du capital, du risque et du temps." }
    ],
    transfert: { q: "Un pays ramène la journée de travail de 12 à 8 heures sans changer les salaires, qui correspondent toujours à six heures de travail. Selon le raisonnement de Marx, qu’arrive-t-il à la plus-value par ouvrier ?",
      o: ["Elle diminue, car le surtravail passe de six à deux heures", "Elle augmente", "Elle ne change pas", "Elle disparaît entièrement"], c: 0,
      e: "C’est pourquoi la durée de la journée a été au cœur des luttes ouvrières du XIXe siècle." },
    ouverte: {
      q: "Dans une économie de services comme la Suisse, où une grande partie de la valeur vient de la banque, de la pharmacie ou du conseil, la notion de plus-value garde-t-elle un sens ?",
      r: "On peut défendre les deux positions. Un marxiste soulignera que le salarié d’une banque ou d’un laboratoire produit aussi plus de valeur qu’il n’en reçoit, et que la part élevée des profits dans ces secteurs illustre l’appropriation du surtravail ; il notera aussi que la Suisse capte une partie de la valeur produite ailleurs, par le négoce et la finance. Un critique répondra que la valeur d’un médicament tient à la recherche, aux brevets, au capital investi et au risque, et qu’il est impossible de la mesurer en heures de travail ; la notion de plus-value devient alors une métaphore plus qu’un outil. Entre les deux, beaucoup d’économistes retiennent la question posée par Marx, le partage de la valeur ajoutée entre salaires et profits, tout en la mesurant avec d’autres outils."
    },
    lectures: [
      ["Accessible", "Karl Marx, Salaire, prix et profit, 1865. Une conférence devant des ouvriers, l’introduction la plus claire à sa théorie."],
      ["Accessible", "David Harvey, A Companion to Marx’s Capital, 2010. Un guide de lecture du livre I, chapitre par chapitre."],
      ["Intermédiaire", "Karl Marx, Le Capital, livre I (1867), sections III à V."],
      ["Intermédiaire", "Gareth Stedman Jones, Karl Marx: Greatness and Illusion, 2016, pour situer l’œuvre dans son époque."],
      ["Recherche", "Loukas Karabarbounis et Brent Neiman, « The Global Decline of the Labor Share », Quarterly Journal of Economics, 2014 ; Nobuo Okishio, « Technical Changes and the Rate of Profit », 1961."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Marx, l’ouvrier produit l’équivalent de son salaire en six heures et travaille douze heures. Que produit-il pendant les six autres ?",
          o: ["Une valeur que le patron garde sans la payer : la plus-value", "Rien, puisqu’il est déjà payé", "Un second salaire, qui lui est versé", "Des impôts pour l’État"], c: 0,
          e: "C’est le surtravail, source du profit selon Marx." },
        { q: "Selon la notice, quelle question posée par Marx reste centrale aujourd’hui ?",
          o: ["Comment la richesse produite se partage entre salaires et profits", "Comment fixer le prix de l’or", "Comment supprimer la monnaie", "Comment augmenter la population"], c: 0,
          e: "Depuis les années 1980, la part des salaires a baissé dans de nombreux pays." }
      ],
      duree: 5,
      html: `
<h3>D’où vient le profit ?</h3>
<p>Un patron achète du coton, des machines et le travail de ses ouvriers au prix du marché. Il vend son fil au prix du marché. Pourtant, il gagne de l’argent. Pour <a href="#eco-marx">Karl Marx</a>, ce profit ne peut pas venir du commerce, puisque tout s’y échange à sa valeur. Il doit venir du travail lui-même.</p>
<h3>Le surtravail</h3>
<p>Marx distingue le travail et la <b>force de travail</b>, c’est-à-dire la capacité de travailler. Le salaire paie ce qu’il faut à l’ouvrier pour vivre. Supposons que cela corresponde à six heures de travail. Mais l’ouvrier travaille douze heures. Pendant les six premières, il produit l’équivalent de son salaire ; pendant les six suivantes, il produit une valeur que le patron garde sans la payer. C’est la <b>plus-value</b>.</p>
${journee}
<h3>Deux façons de l’augmenter</h3>
<p>Le patron peut allonger la journée de travail, ce qui a provoqué au XIXe siècle de longues luttes pour la limiter à dix, puis huit heures. Il peut aussi, grâce aux machines, rendre moins chers les produits que consomme l’ouvrier : son salaire couvre alors ses besoins en moins d’heures, et le reste de la journée produit davantage de plus-value.</p>
<h3>À retenir, et à discuter</h3>
<p>Cette théorie repose sur l’idée que seul le travail crée de la valeur, que la plupart des économistes ont abandonnée. Mais la question qu’elle pose reste centrale : comment se partage la richesse produite entre les salaires et les profits ? Depuis les années 1980, la part des salaires a baissé dans de nombreux pays. La notice complète présente le raisonnement et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Si tout s’échange à sa valeur, d’où vient le profit du fabricant ?",
      raisonnement: "Six étapes, de la force de travail au problème de la transformation.",
      preuves: "Le partage salaires-profits, les entreprises superstars, le théorème d’Okishio.",
      cas: "La loi des dix heures de 1847, la journée à cinq dollars de Ford, la part des salaires depuis 1980.",
      objections: "La valeur-travail, la transformation, l’entrepreneur et le risque, les prédictions démenties.",
      ecoles: "Smith et Ricardo, les socialistes ricardiens, Clark, Robinson, Sraffa, Piketty.",
      source: "Marx et l’image du capital vampire.",
      quiz: "Six questions corrigées, dont un calcul, et une question sur l’économie suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
