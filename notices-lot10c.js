/* Œconomia — notices longues, lot 10 (c) : politique monétaire */
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
     POLITIQUE MONÉTAIRE
     ===================================================================== */
  const transmission = fig(330, (() => {
    let s = `<text x="20" y="22" ${T}>Quand la BNS relève son taux directeur</text>`;
    s += box(220, 40, 200, 52, "Taux directeur ↑", "décision trimestrielle de la BNS", "var(--gold)");
    const canaux = [[12, "Crédits plus chers", "hypothèques, prêts"], [168, "Franc plus fort", "prix importés en baisse"], [324, "Épargne plus rentable", "on consomme moins"], [480, "Anticipations", "on croit à la stabilité"]];
    canaux.forEach(([x, t, sub]) => { s += box(x, 132, 148, 52, t, sub, "var(--note)"); s += arrow(320, 92, x + 74, 128); });
    s += box(170, 230, 300, 52, "Demande et prix importés ↓", "la hausse des prix ralentit", "var(--plum)");
    canaux.forEach(([x]) => { s += arrow(x + 74, 184, 320 + (x + 74 - 320) * 0.35, 226); });
    s += `<text x="320" y="314" text-anchor="middle" ${S}>Les effets prennent en général un à deux ans pour se faire pleinement sentir.</text>`;
    return s;
  })(), "Schéma des canaux de transmission. La banque centrale ne fixe pas les prix : elle agit sur le coût de l’argent, qui se transmet à l’économie par le crédit, le taux de change, l’épargne et les anticipations. En Suisse, le canal du taux de change est particulièrement important.", "Schéma des quatre canaux par lesquels une hausse du taux directeur freine l’inflation");

  /* taux directeur de la BNS, 2015-2025 */
  const tauxBNS = fig(260, (() => {
    const X = (t) => 60 + (t - 2015) * 52, Y = (v) => 150 - v * 50;
    const pts = [[2015.04, -0.75], [2022.46, -0.25], [2022.72, 0.5], [2022.96, 1.0], [2023.22, 1.5], [2023.46, 1.75], [2024.22, 1.5], [2024.47, 1.25], [2024.72, 1.0], [2024.96, 0.5], [2025.22, 0.25], [2025.47, 0.0], [2025.9, 0.0]];
    let s = `<text x="20" y="22" ${T}>Taux directeur de la BNS, en %</text>`;
    [-0.75, 0, 1, 2].forEach((v) => { s += `<line x1="60" y1="${Y(v)}" x2="${X(2026)}" y2="${Y(v)}" style="stroke:var(--line); stroke-width:${v === 0 ? 1.5 : 1}"/><text x="52" y="${Y(v) + 4}" text-anchor="end" ${S}>${String(v).replace(".", ",")}</text>`; });
    for (let a = 2015; a <= 2025; a += 2) s += `<text x="${X(a)}" y="210" text-anchor="middle" ${S}>${a}</text>`;
    let d = `M${X(pts[0][0])},${Y(pts[0][1])}`;
    for (let i = 1; i < pts.length; i++) d += ` H${X(pts[i][0]).toFixed(1)} V${Y(pts[i][1]).toFixed(1)}`;
    s += `<path d="${d}" style="fill:none; stroke:var(--gold); stroke-width:3"/>`;
    s += `<text x="${X(2016)}" y="${Y(-0.75) - 10}" ${S}>taux négatif de −0,75 % pendant plus de sept ans</text>`;
    s += `<text x="${X(2021.6)}" y="${Y(1.75) - 2}" text-anchor="end" ${S}>inflation à 3,5 % en août 2022 :</text><text x="${X(2021.6)}" y="${Y(1.75) + 14}" text-anchor="end" ${S}>hausse rapide jusqu’à 1,75 %</text>`;
    s += `<text x="${X(2025.9)}" y="${Y(0) + 18}" text-anchor="end" ${S}>retour à 0 % en 2025</text>`;
    s += `<text x="60" y="240" ${S}>Valeurs après chaque décision trimestrielle.</text>`;
    return s;
  })(), "Source : Banque nationale suisse, décisions de politique monétaire, 2015-2025. Le taux négatif, introduit avec l’abandon du cours plancher en janvier 2015, visait à rendre le franc moins attrayant ; la remontée de 2022-2023 répondait au retour de l’inflation.", "Graphique en escalier du taux directeur de la BNS de 2015 à 2025");

  OEC.notices["politique-monetaire"] = {
    essentiel: [
      "La politique monétaire est l’action de la banque centrale sur le coût et la quantité de monnaie, dans le but principal de garder des prix stables. Son instrument principal est le taux directeur, qui influence tous les autres taux d’intérêt de l’économie.",
      "Quand l’inflation monte, la banque centrale relève son taux : le crédit devient plus cher, la demande ralentit, la monnaie s’apprécie, et la hausse des prix se calme, avec un délai d’un à deux ans. Quand l’économie faiblit, elle baisse son taux. En Suisse, la BNS agit aussi sur le cours du franc.",
      "Le débat porte sur les objectifs (les prix seulement, ou aussi l’emploi et la stabilité financière), sur l’indépendance des banques centrales, et sur les instruments exceptionnels utilisés depuis 2008 : taux négatifs, achats massifs de titres, interventions sur les devises."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : qui doit veiller à la valeur de la monnaie ?", html: `
<p>Une monnaie n’est utile que si l’on peut lui faire confiance : si un franc achète demain à peu près ce qu’il achète aujourd’hui (<a href="#c-fonctions-monnaie">voir fonctions de la monnaie</a>). L’histoire est pleine de monnaies ruinées par des gouvernements qui ont créé trop d’argent pour financer leurs dépenses, de l’Allemagne de 1923 au Zimbabwe des années 2000.</p>
<p>Au XXe siècle, la plupart des pays confient donc la monnaie à une banque centrale. En Suisse, la Banque nationale suisse (BNS), créée en 1907, conduit la politique monétaire de manière indépendante : ni le Conseil fédéral ni le Parlement ne peuvent lui donner d’instructions. La loi lui fixe un objectif principal, la stabilité des prix, qu’elle définit comme une hausse annuelle des prix à la consommation inférieure à 2 %, sans baisse durable.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le taux directeur</h4>
<p>La banque centrale est la banque des banques. Elle fixe le taux auquel les banques peuvent se procurer des liquidités auprès d’elle ou y placer les leurs. Ce taux directeur se répercute sur les taux auxquels les banques prêtent entre elles, puis sur les taux des crédits, des hypothèques et de l’épargne.</p>
<h4>2. Freiner ou stimuler</h4>
<p>Une hausse du taux rend l’emprunt plus cher et l’épargne plus attrayante : ménages et entreprises dépensent moins, la demande ralentit, et les prix montent moins vite. Une baisse produit l’effet inverse. La banque centrale ne fixe aucun prix elle-même : elle agit sur la demande globale.</p>
${transmission}
<h4>3. Le canal du taux de change</h4>
<p>Un taux plus élevé attire les placements en francs, ce qui renforce le franc. Les importations deviennent moins chères, ce qui fait baisser l’inflation, mais les exportateurs souffrent. Dans une petite économie ouverte comme la Suisse, ce canal est essentiel, et la BNS intervient parfois directement en achetant ou en vendant des devises.</p>
<h4>4. Des effets lents et incertains</h4>
<p>Milton <a href="#eco-friedman">Friedman</a> parlait de délais « longs et variables » : une décision prise aujourd’hui produit l’essentiel de ses effets dans un an ou deux. La banque centrale doit donc agir sur la base de prévisions. La BNS publie chaque trimestre une prévision d’inflation, établie en supposant que le taux reste inchangé.</p>
<h4>5. Les anticipations</h4>
<p>Si les ménages et les entreprises sont convaincus que l’inflation restera faible, ils fixent les salaires et les prix en conséquence, ce qui aide à la maintenir faible. La crédibilité de la banque centrale est donc un instrument en soi (<a href="#c-anticipations-rationnelles">voir anticipations rationnelles</a>). C’est l’un des principaux arguments en faveur de son indépendance.</p>
<h4>6. Une règle pour guider les décisions</h4>
<p>En 1993, John Taylor montre que la politique de la Réserve fédérale américaine peut être décrite par une règle simple : relever le taux quand l’inflation dépasse la cible ou que l’économie tourne au-delà de ses capacités, le baisser dans le cas contraire. Aucune banque centrale ne suit mécaniquement cette règle, mais elle sert de point de repère.</p>
<h4>7. Quand le taux ne suffit plus</h4>
<p>Quand les taux sont déjà proches de zéro, la banque centrale ne peut plus guère les baisser (<a href="#c-trappe-liquidite">voir trappe à liquidité</a>). Depuis 2008, elle a recouru à d’autres instruments : achats massifs de titres (assouplissement quantitatif), taux négatifs, annonces sur sa politique future, et, en Suisse, interventions sur le marché des changes.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le choc Volcker</h4>
<p>À la fin des années 1970, l’inflation américaine dépasse 13 %. Le président de la Réserve fédérale, Paul Volcker, relève fortement les taux à partir de 1979 ; le taux directeur approche 20 % en 1980-1981. L’inflation recule à environ 3 % en 1983, au prix d’une récession sévère et d’un chômage proche de 11 %. L’épisode montre à la fois l’efficacité de la politique monétaire contre l’inflation et son coût (<a href="#c-stagflation">voir stagflation</a>).</p>
<h4>Indépendance et inflation</h4>
<p>Dans les années 1990, des études comparatives montrent que les pays dont la banque centrale est plus indépendante ont en moyenne connu une inflation plus faible, sans croissance moindre. Ces résultats ont inspiré la vague de réformes qui a rendu indépendantes la plupart des banques centrales du monde. Ils sont toutefois discutés : les pays qui choisissent l’indépendance sont peut-être déjà ceux qui détestent le plus l’inflation.</p>
<h4>2022 : le retour de l’inflation</h4>
<p>Après la pandémie et l’invasion de l’Ukraine, l’inflation atteint environ 10 % dans la zone euro en 2022. En Suisse, elle culmine à 3,5 % en août 2022. Le franc fort, qui rend les importations moins chères, et une hausse rapide du taux directeur expliquent en partie cette différence.</p>
${tauxBNS}` }
    ],
    cas: [
      { titre: "Le cours plancher et les taux négatifs, 2011-2022", html: `
<p>Pendant la crise de la zone euro, les investisseurs se réfugient dans le franc, qui s’apprécie fortement et menace l’industrie d’exportation et le tourisme. En septembre 2011, la BNS fixe un cours plancher de 1,20 franc pour un euro et s’engage à acheter des devises en quantité illimitée pour le défendre. Le 15 janvier 2015, elle l’abandonne par surprise : le franc s’envole. Elle introduit en même temps un taux négatif de −0,75 %, maintenu jusqu’en juin 2022, pour rendre les placements en francs moins attrayants. Ces achats de devises ont fait gonfler son bilan à plusieurs centaines de milliards de francs.</p>` },
      { titre: "Les bénéfices et les pertes de la BNS", html: `
<p>Avec un bilan aussi grand, placé en grande partie en devises et en actions étrangères, le résultat de la BNS dépend fortement des marchés. Certaines années, elle réalise des dizaines de milliards de bénéfices, en partie versés à la Confédération et aux cantons. En 2022, elle subit une perte d’environ 130 milliards de francs, et ne verse rien pour cet exercice. Le débat sur l’usage de ses bénéfices, par exemple pour l’AVS, revient régulièrement, alors que la BNS rappelle que sa mission n’est pas de faire des profits.</p>` },
      { titre: "L’hypothèque et la décision trimestrielle", html: `
<p>Les décisions de la BNS touchent directement les ménages. Le taux de référence qui sert à adapter les loyers suit le taux moyen des hypothèques, lui-même influencé par la politique monétaire. Après la remontée des taux de 2022-2023, le taux de référence augmente en 2023 pour la première fois depuis son introduction en 2008, ce qui permet aux bailleurs de demander des hausses de loyer. Une décision de politique monétaire se retrouve ainsi, avec retard, dans le budget de nombreux locataires.</p>` }
    ],
    objections: `
<h4>1. Indépendance et démocratie</h4>
<p>Des décisions qui pèsent sur l’emploi, les loyers et les finances publiques sont prises par quelques personnes non élues. Les défenseurs de l’indépendance répondent qu’elle protège la monnaie de la tentation de créer de l’inflation avant les élections, et que la banque centrale rend des comptes au Parlement et au public. Ses critiques demandent un mandat plus large, ou un contrôle plus étroit.</p>
<h4>2. Les prix seulement, ou aussi l’emploi et le climat ?</h4>
<p>La Réserve fédérale américaine a un double mandat : stabilité des prix et plein emploi. La BNS et la Banque centrale européenne ont un mandat centré sur les prix. Certains souhaitent que les banques centrales tiennent davantage compte de l’emploi, des inégalités ou du climat ; d’autres craignent qu’en multipliant les objectifs, elles perdent en efficacité et en crédibilité.</p>
<h4>3. Des effets secondaires</h4>
<p>Des taux très bas pendant longtemps font monter le prix des logements et des actions, ce qui profite surtout à ceux qui en possèdent déjà, et pèsent sur le rendement des caisses de pension. Ils peuvent aussi encourager l’endettement et les bulles (<a href="#c-instabilite-financiere">voir instabilité financière</a>). Les post-keynésiens rappellent de leur côté que la banque centrale ne contrôle pas directement la quantité de monnaie, créée surtout par le crédit (<a href="#c-monnaie-endogene">voir monnaie endogène</a>).</p>
<h4>4. Règles ou discrétion ?</h4>
<p>Friedman voulait une règle fixe de croissance de la monnaie ; Finn Kydland et Edward Prescott montrent en 1977 qu’une autorité libre de changer d’avis à tout moment est moins crédible. D’autres répondent qu’une règle rigide empêche de réagir aux crises imprévues, comme en 2008 ou en 2020.</p>`,
    ecoles: `
<p><b>Knut Wicksell</b> distingue dès 1898 le taux d’intérêt du marché et le taux « naturel » qui équilibre l’économie.</p>
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> voit dans le taux d’intérêt un levier pour soutenir l’investissement, tout en doutant de son efficacité en crise profonde.</p>
<p><b>Milton <a href="#eco-friedman">Friedman</a></b> et les monétaristes défendent une croissance régulière de la monnaie et mettent en garde contre l’activisme.</p>
<p><b>Robert <a href="#eco-lucas">Lucas</a></b>, <b>Finn Kydland</b> et <b>Edward Prescott</b> placent les anticipations et la crédibilité au centre.</p>
<p><b>John Taylor</b> propose en 1993 une règle de taux d’intérêt ; <b>Ben Bernanke</b>, président de la Réserve fédérale pendant la crise de 2008, développe les instruments non conventionnels.</p>
<p><b>Stephanie <a href="#eco-kelton">Kelton</a></b> et la théorie moderne de la monnaie veulent subordonner la politique monétaire aux objectifs d’emploi de l’État.</p>`,
    source: {
      titre: "Loi fédérale sur la Banque nationale suisse (LBN), 2003, article 5, alinéa 1",
      texte: "La Banque nationale conduit la politique monétaire dans l’intérêt général du pays. Elle assure la stabilité des prix. Ce faisant, elle tient compte de l’évolution de la conjoncture.",
      notes: `
<p><b>Un objectif principal.</b> La stabilité des prix vient en premier. La loi ne fixe pas de chiffre : c’est la BNS qui la définit comme une hausse annuelle des prix à la consommation inférieure à 2 %.</p>
<p><b>Une marge d’appréciation.</b> La mention de la conjoncture permet à la BNS de ne pas viser la stabilité des prix à tout prix, par exemple en pleine récession. Elle ne crée pas pour autant un double mandat comme celui de la Réserve fédérale.</p>
<p><b>L’intérêt général du pays.</b> La formule reprend l’article 99 de la Constitution. Elle rappelle que la BNS, indépendante, n’est pas pour autant au service d’une région, d’une branche ou du budget de l’État.</p>`
    },
    quiz: [
      { q: "Quel est l’objectif principal que la loi fixe à la BNS ?",
        o: ["Le plein emploi", "La stabilité des prix, en tenant compte de la conjoncture", "Un franc faible", "La stabilité du franc face à l’euro"], c: 1,
        e: "La BNS la définit comme une inflation annuelle inférieure à 2 %." },
      { q: "Face à une inflation trop élevée, que fait en général une banque centrale ?",
        o: ["Elle baisse son taux directeur", "Elle relève son taux directeur", "Elle achète davantage de titres publics", "Elle imprime plus de billets"], c: 1,
        e: "Le crédit devient plus cher, la demande ralentit et la hausse des prix se calme." },
      { q: "Pourquoi le canal du taux de change est-il si important en Suisse ?",
        o: ["Parce que les prix suisses sont fixés en euros", "Parce que c’est une petite économie très ouverte, qui importe et exporte beaucoup", "Parce que le franc est rattaché à l’euro", "Parce que la BNS ne peut pas modifier ses taux"], c: 1,
        e: "Un franc plus fort rend les importations moins chères et freine l’inflation." },
      { q: "Que signifie l’expression « délais longs et variables » ?",
        o: ["Que la BNS se réunit rarement", "Que les effets d’une décision monétaire mettent un à deux ans à se faire sentir, de façon incertaine", "Que les crédits durent longtemps", "Que les taux changent lentement et rarement"], c: 1,
        e: "D’où l’importance des prévisions dans les décisions." },
      { q: "Pourquoi la BNS a-t-elle appliqué un taux négatif de 2015 à 2022 ?",
        o: ["Pour réduire la dette des cantons", "Pour rendre les placements en francs moins attrayants et freiner la hausse du franc", "Pour financer la Confédération", "Pour provoquer de l’inflation élevée"], c: 1,
        e: "Le franc, valeur refuge, menaçait les exportations et poussait les prix à la baisse." }
    ],
    transfert: { q: "En 2022, l’inflation atteint environ 8 % aux États-Unis. Quelle réaction de la Réserve fédérale correspond au raisonnement de la notice ?",
      o: ["Une forte hausse de ses taux, au risque de ralentir l’économie", "Une baisse de ses taux pour soutenir la consommation", "Un gel des prix par décret", "Des achats massifs d’actions"], c: 0,
      e: "La Réserve fédérale a relevé son taux de près de zéro à plus de 5 % entre mars 2022 et l’été 2023." },
    ouverte: {
      q: "Les taux négatifs appliqués par la BNS de 2015 à 2022 ont-ils été une bonne politique pour la Suisse ?",
      r: "Le bilan est discuté. Pour la BNS et une partie des économistes, les taux négatifs, combinés aux interventions sur les devises, ont empêché une appréciation encore plus forte du franc après l’abandon du cours plancher. Ils ont protégé l’industrie d’exportation et le tourisme, et évité une baisse durable des prix qui aurait pesé sur l’économie. Leurs critiques soulignent les effets secondaires : des rendements très faibles pour les caisses de pension et les épargnants, des banques dont les marges se sont réduites, et une forte hausse des prix de l’immobilier, encouragée par des hypothèques bon marché (<a href=\"#c-instabilite-financiere\">voir instabilité financière</a>). D’autres rappellent que la Suisse n’avait guère le choix, dans un monde où la BCE appliquait elle aussi des taux négatifs. La réponse dépend du poids qu’on accorde à la protection de l’industrie, aux intérêts des épargnants et des locataires, et aux risques à long terme pour la stabilité financière."
    },
    lectures: [
      ["Accessible", "Banque nationale suisse, « La BNS en bref », brochure publiée chaque année, et le matériel pédagogique Iconomix."],
      ["Accessible", "Ben Bernanke, Courage to Act, 2015, récit de la crise de 2008 vu de la Réserve fédérale."],
      ["Intermédiaire", "Frederic Mishkin, Monnaie, banque et marchés financiers, Pearson."],
      ["Intermédiaire", "Ben Bernanke, 21st Century Monetary Policy, 2022."],
      ["Recherche", "Milton Friedman, « The Role of Monetary Policy », American Economic Review, 1968."],
      ["Recherche", "John Taylor, « Discretion versus Policy Rules in Practice », Carnegie-Rochester Conference Series on Public Policy, 1993."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi une hausse du taux directeur freine-t-elle la hausse des prix ?",
          o: ["Parce qu’emprunter coûte plus cher, qu’on dépense moins et que la demande ralentit", "Parce que les commerçants sont obligés de baisser leurs prix", "Parce que les salaires sont gelés par la loi", "Parce que les banques ferment leurs guichets"], c: 0,
          e: "La banque centrale ne fixe pas les prix : elle agit sur le coût de l’argent, donc sur la demande." },
        { q: "Que signifie, pour une monnaie, être une « valeur refuge » ?",
          o: ["En temps de crise, les investisseurs l’achètent, ce qui la fait monter", "Elle est garantie par de l’or", "Elle ne peut jamais perdre de valeur", "Elle ne sert qu’aux touristes"], c: 0,
          e: "C’est le cas du franc suisse, du dollar ou du yen." }
      ],
      duree: 5,
      html: `
<h3>Le thermostat de l’économie</h3>
<p>La Banque nationale suisse a une mission principale : garder des prix stables, c’est-à-dire une hausse des prix inférieure à 2 % par an. Son outil principal est le taux directeur. Quand les prix montent trop vite, elle le relève : emprunter coûte plus cher, on dépense moins, et la hausse des prix ralentit. Quand l’économie faiblit, elle le baisse.</p>
${transmission}
<h3>Une particularité suisse : le franc</h3>
<p>Le franc est une valeur refuge : en temps de crise, les investisseurs l’achètent, et il s’apprécie. Pour protéger les exportateurs, la BNS a appliqué de 2015 à 2022 un taux négatif et acheté d’énormes quantités de devises. Quand l’inflation est revenue en 2022, elle a relevé son taux jusqu’à 1,75 %.</p>
<h3>À retenir</h3>
<p>La banque centrale agit sur le coût de l’argent, avec un délai d’un à deux ans. La notice complète présente les canaux de transmission, les instruments exceptionnels et le débat sur son indépendance.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Pourquoi confier la monnaie à une banque centrale indépendante ?",
      raisonnement: "Sept étapes, du taux directeur aux instruments non conventionnels.",
      preuves: "Le choc Volcker, indépendance et inflation, l’inflation de 2022 et le taux de la BNS.",
      cas: "Le cours plancher et les taux négatifs, les bénéfices de la BNS, le taux de référence des loyers.",
      objections: "Indépendance et démocratie, mandat étroit ou large, effets secondaires, règles ou discrétion.",
      ecoles: "Wicksell, Keynes, Friedman, Lucas, Kydland et Prescott, Taylor et Bernanke, Kelton.",
      source: "Le mandat de la BNS dans la loi.",
      quiz: "Six questions corrigées et une question sur les taux négatifs.",
      lectures: "Six lectures classées par niveau."
    }
  };
})();
