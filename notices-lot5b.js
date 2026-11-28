/* Œconomia — notices longues, lot 5 (b) : trappe à liquidité, anticipations rationnelles */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     25. TRAPPE À LIQUIDITÉ
     ===================================================================== */
  const lm = fig(300, (() => {
    const L = 80, R = 600, Top = 50, B = 250;
    let s = `<text x="20" y="24" ${T}>La demande de monnaie et le plancher des taux (d’après Keynes et Hicks)</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>taux</text>`;
    s += `<text x="${R}" y="${B + 20}" text-anchor="end" ${M}>quantité de monnaie détenue</text>`;
    s += `<path d="M ${L + 30} ${Top + 10} C ${L + 120} ${B - 60}, ${L + 200} ${B - 32}, ${L + 290} ${B - 30} L ${R - 20} ${B - 30}" style="fill:none; stroke:var(--plum); stroke-width:2.6"/>`;
    s += `<text x="${L + 300}" y="${B - 40}" style="fill:var(--plum); font:700 12px Manrope, sans-serif">trappe : la courbe devient horizontale</text>`;
    [[L + 130, "var(--ink-soft)"], [L + 230, "var(--note)"], [L + 400, "var(--gold)"]].forEach(([x, c], i) => {
      s += `<line x1="${x}" y1="${Top + 20}" x2="${x}" y2="${B}" style="stroke:${c}; stroke-dasharray:4 4"/>`;
      s += `<text x="${x}" y="${Top + 14}" text-anchor="middle" ${M}>offre ${i + 1}</text>`;
    });
    s += `<text x="${L + 140}" y="${Top + 70}" ${S}>Plus de monnaie :</text><text x="${L + 140}" y="${Top + 86}" ${S}>le taux baisse.</text>`;
    s += `<text x="${L + 410}" y="${Top + 70}" ${S}>Encore plus de monnaie :</text><text x="${L + 410}" y="${Top + 86}" ${S}>le taux ne bouge plus.</text>`;
    s += `<text x="${L - 8}" y="${B - 26}" text-anchor="end" ${M}>≈ 0</text>`;
    return s;
  })(), "Quand le taux est déjà très bas, détenir de la monnaie ne coûte presque rien et les titres ne rapportent presque plus : le public absorbe toute la monnaie supplémentaire sans la dépenser ni la prêter. La banque centrale peut augmenter l’offre de monnaie, le taux ne baisse plus.", "Courbe de demande de monnaie qui devient horizontale près de zéro");

  const periodes = fig(250, (() => {
    const L = 140, R = 610, X = (y) => L + (y - 1995) * (R - L) / 30;
    const rows = [["Japon", [[1999, 2006], [2008, 2024]], "var(--serial)"], ["États-Unis", [[2008, 2015.9], [2020.2, 2022.2]], "var(--note)"], ["Zone euro", [[2012.5, 2022.6]], "var(--plum)"], ["Suisse", [[2011.6, 2022.7]], "var(--gold)"]];
    let s = `<text x="20" y="24" ${T}>Périodes où le taux directeur était à zéro ou en dessous (arrondies)</text>`;
    [1995, 2000, 2005, 2010, 2015, 2020, 2025].forEach((y) => (s += `<line x1="${X(y)}" y1="44" x2="${X(y)}" y2="204" style="stroke:var(--line)"/><text x="${X(y)}" y="222" text-anchor="middle" ${M}>${y}</text>`));
    rows.forEach(([n, ps, c], i) => {
      const y = 56 + i * 38;
      s += `<text x="${L - 12}" y="${y + 15}" text-anchor="end" ${T}>${n}</text>`;
      ps.forEach(([a, b]) => (s += `<rect x="${X(a)}" y="${y}" width="${X(b) - X(a)}" height="22" rx="4" style="fill:${c}"/>`));
    });
    return s;
  })(), "Taux nuls ou négatifs (moins de 0,25 % environ). Le Japon a ouvert la voie en 1999 ; il ne sort des taux négatifs qu’en mars 2024. La Suisse a appliqué −0,75 % de janvier 2015 à juin 2022. Dates arrondies, à titre d’ordre de grandeur.", "Frise de quatre pays montrant les périodes de taux nuls");

  OEC.notices["trappe-liquidite"] = {
    essentiel: [
      "Il y a trappe à liquidité quand les taux d’intérêt sont si bas que la banque centrale ne peut plus les faire baisser : la monnaie qu’elle crée est conservée au lieu d’être prêtée ou dépensée, et la politique monétaire classique perd son efficacité.",
      "Keynes en évoque la possibilité en 1936 tout en disant n’en connaître aucun exemple. L’idée reste une curiosité théorique jusqu’au Japon des années 1990, puis devient centrale après 2008, quand les grandes banques centrales atteignent toutes le plancher des taux.",
      "Pour en sortir, les banques centrales ont inventé des outils non conventionnels : promesses sur les taux futurs, achats massifs de titres, taux négatifs, cours plancher en Suisse. Beaucoup d’économistes y ajoutent la relance budgétaire, plus efficace dans ces circonstances."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : que faire quand les taux sont déjà à zéro ?", html: `
<p>Le remède classique contre une récession est connu : la banque centrale baisse ses taux d’intérêt. Les crédits deviennent moins chers, les entreprises investissent, les ménages empruntent pour acheter un logement ou une voiture, la demande repart. Mais que se passe-t-il quand les taux sont déjà à zéro et que l’économie reste déprimée ?</p>
<p>Pendant des décennies, la question paraît purement théorique. Puis, en février 1999, la Banque du Japon abaisse son taux directeur à zéro, après presque dix ans de stagnation consécutive à l’éclatement de sa bulle financière. L’économie ne repart pas. En 1998 déjà, Paul <a href="#eco-krugman">Krugman</a> avait publié un article au titre provocateur : « Elle est de retour : la crise japonaise et le retour de la trappe à liquidité ». Dix ans plus tard, après la faillite de Lehman Brothers, la Réserve fédérale, la Banque d’Angleterre, puis la BCE et la BNS se retrouvent toutes dans la même situation.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Pourquoi détient-on de la monnaie ?</h4>
<p>Chez <a href="#eco-keynes">Keynes</a>, on garde de la monnaie pour effectuer ses transactions, par précaution, et par spéculation : si l’on pense que les taux d’intérêt vont monter, mieux vaut ne pas acheter d’obligations, dont le prix baisserait. C’est la <a href="#c-preference-liquidite">préférence pour la liquidité</a>. Le taux d’intérêt est la récompense de ceux qui renoncent à la liquidité.</p>
<h4>2. Comment la banque centrale agit-elle ?</h4>
<p>Normalement, en créant davantage de monnaie, la banque centrale fait baisser les taux : le public, qui a plus de monnaie qu’il n’en souhaite, achète des titres, dont le prix monte et le rendement baisse. Les crédits deviennent moins chers, l’investissement augmente.</p>
<h4>3. Le plancher</h4>
<p>Mais quand les taux sont déjà très bas, détenir de la monnaie ne coûte presque rien, et les titres ne rapportent presque plus rien, avec un risque de perte si les taux remontent. Le public est alors prêt à absorber toute la monnaie supplémentaire sans rien acheter d’autre. Keynes écrit au chapitre 15 de la Théorie générale que la préférence pour la liquidité peut devenir « virtuellement absolue ». John Hicks traduit l’idée dans son célèbre schéma de 1937 : la courbe LM devient horizontale aux taux très bas.</p>
${lm}
<h4>4. Pourquoi pas des taux négatifs ?</h4>
<p>Une banque centrale peut fixer des taux légèrement négatifs, comme la BCE, la BNS ou la Banque du Japon l’ont fait. Mais pas très négatifs : il existe les billets de banque, qui rapportent zéro. Si les dépôts coûtaient trop cher, les épargnants et les entreprises retireraient leur argent en billets et le stockeraient dans des coffres. Le plancher effectif se situe donc un peu en dessous de zéro, à un niveau qui dépend du coût de stockage et d’assurance des billets.</p>
<h4>5. Le piège de la déflation</h4>
<p>Le problème s’aggrave si les prix baissent. Avec un taux nominal nul et des prix qui baissent de 2 % par an, le taux réel, celui qui compte pour l’emprunteur, est de 2 % : trop élevé pour une économie déprimée. La déflation pousse à reporter les achats et alourdit les dettes. Une économie peut ainsi rester coincée dans une stagnation déflationniste, ce que la <a href="#c-stagnation-seculaire">stagnation séculaire</a> décrit à plus long terme.</p>
<h4>6. La promesse d’être irresponsable</h4>
<p>Krugman propose en 1998 une solution paradoxale : la banque centrale doit promettre de manière crédible de laisser l’inflation monter à l’avenir, une fois la reprise venue. Si le public y croit, les taux réels baissent dès aujourd’hui, même avec un taux nominal nul. Krugman résume : la banque centrale doit « promettre de manière crédible d’être irresponsable ». C’est l’idée qui inspire le « forward guidance », les engagements sur les taux futurs, adopté par la Réserve fédérale après 2008.</p>
<h4>7. Les autres outils</h4>
<p>Les banques centrales ont développé tout un arsenal. L’assouplissement quantitatif : acheter massivement des obligations d’État et d’entreprises pour faire baisser les taux à long terme. Les taux négatifs. Les prêts ciblés aux banques. La politique de change, pour un petit pays ouvert : Lars Svensson avait proposé en 2001 de déprécier délibérément la monnaie pour sortir de la trappe. Enfin, la politique budgétaire : plusieurs travaux, comme ceux de Lawrence Christiano, Martin Eichenbaum et Sergio Rebelo (2011), montrent que le <a href="#c-multiplicateur">multiplicateur</a> des dépenses publiques est nettement plus élevé quand les taux sont bloqués à zéro.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les années 1930</h4>
<p>Aux États-Unis, les taux des bons du Trésor à court terme tombent pratiquement à zéro à partir de 1932 et y restent jusqu’à la Seconde Guerre mondiale. Les banques accumulent des réserves excédentaires considérables au lieu de prêter. Pour beaucoup d’économistes, c’est la première trappe à liquidité de l’histoire moderne, même si Keynes ne l’avait pas identifiée comme telle.</p>
<h4>Le Japon, laboratoire du monde</h4>
<p>Le Japon expérimente presque tous les outils : taux zéro dès 1999, assouplissement quantitatif de 2001 à 2006, puis à partir de 2013 l’« Abenomics » et des achats massifs de titres par la Banque du Japon sous la direction de Haruhiko Kuroda, et enfin des taux négatifs en 2016. La déflation a cessé, mais l’inflation est restée durablement inférieure à l’objectif de 2 % jusqu’au choc mondial de 2022.</p>
${periodes}
<h4>Après 2008</h4>
<p>La Réserve fédérale maintient son taux entre 0 et 0,25 % de décembre 2008 à décembre 2015, et achète plusieurs milliers de milliards de dollars de titres. L’inflation reste faible malgré l’énorme création de monnaie de banque centrale, ce qui confirme l’intuition de la trappe : la monnaie créée a été conservée sous forme de réserves bancaires. Les études concluent en général que l’assouplissement quantitatif a fait baisser les taux à long terme, mais son effet sur l’activité reste débattu.</p>` }
    ],
    cas: [
      { titre: "Le Japon et les « Abenomics », 2013", html: `
<p>Après quinze ans de prix stagnants ou en baisse, le Japon lance en 2013 une politique de choc. La Banque du Japon se fixe un objectif d’inflation de 2 % et promet de doubler la base monétaire en deux ans, en achetant massivement des obligations d’État ; elle introduit en 2016 un taux légèrement négatif. Les résultats sont mitigés : le yen baisse, les profits des entreprises et l’emploi progressent, mais l’inflation reste longtemps sous l’objectif. Il faudra le choc mondial de 2022 pour qu’elle le dépasse durablement, et la Banque du Japon ne sortira des taux négatifs qu’en mars 2024. L’épisode montre à la fois les ressources et les limites d’une banque centrale prise dans la trappe.</p>` },
      { titre: "Le débat sur la suppression des billets", html: `
<p>Puisque ce sont les billets qui empêchent les taux de descendre très en dessous de zéro, certains économistes ont proposé de les limiter. Kenneth Rogoff, dans The Curse of Cash (2016), propose de supprimer progressivement les grosses coupures, qui servent aussi à l’évasion fiscale et aux trafics. La BCE a cessé d’émettre le billet de 500 euros en 2019. La Suisse a fait le choix inverse : le billet de 1 000 francs, l’un des plus élevés en valeur au monde, reste émis, et l’attachement des Suisses à l’argent liquide est fort. Le plancher des taux y est donc probablement plus bas qu’ailleurs, mais une suppression des billets n’y est pas à l’ordre du jour.</p>` },
      { titre: "Keynes et l’investissement public", html: `
<p>Keynes ne comptait pas sur la politique monétaire pour sortir de la dépression. Dans une lettre ouverte au président Roosevelt publiée dans le New York Times en décembre 1933, il recommande avant tout des dépenses publiques financées par l’emprunt. Il ajoute que la baisse des taux à long terme pourrait aider, mais qu’elle ne suffira pas. La comparaison célèbre qu’on lui attribue souvent, selon laquelle la politique monétaire en dépression revient à « pousser sur une ficelle », illustre cette asymétrie : on peut tirer sur une ficelle pour freiner l’économie, pas pousser pour l’accélérer.</p>` }
    ],
    objections: `
<h4>1. La trappe n’existe pas vraiment</h4>
<p>Milton <a href="#eco-friedman">Friedman</a> et les monétaristes soutiennent qu’une banque centrale résolue peut toujours relancer les dépenses en créant assez de monnaie, en achetant n’importe quel actif. Friedman accusait la Réserve fédérale des années 1930 de ne pas avoir créé assez de monnaie. Pour lui, la trappe est un manque de volonté, pas une impossibilité.</p>
<h4>2. Les outils non conventionnels ont fonctionné</h4>
<p>Ben Bernanke, président de la Réserve fédérale de 2006 à 2014, estime que l’assouplissement quantitatif et les engagements sur les taux futurs ont fourni l’équivalent de plusieurs points de baisse de taux. Le plancher limite la politique monétaire, mais ne la rend pas impuissante.</p>
<h4>3. Les effets secondaires</h4>
<p>Les taux nuls ou négatifs pendant des années ont des effets secondaires : hausse du prix des actifs et de l’immobilier, difficultés des caisses de pension et des assureurs, survie d’entreprises peu productives, marges réduites des banques. La Banque des règlements internationales a souvent mis en garde contre ces risques.</p>
<h4>4. Un phénomène peut-être révolu</h4>
<p>Avec le retour de l’inflation en 2021-2022, les banques centrales ont relevé leurs taux bien au-dessus de zéro. Pour certains, la trappe à liquidité était liée à des circonstances exceptionnelles ; pour d’autres, elle reviendra à la prochaine grande récession si les taux naturels restent bas.</p>`,
    ecoles: `
<p><b><a href="#eco-keynes">Keynes</a></b> en évoque la possibilité en 1936 ; Hicks la formalise en 1937 ; Robertson la nomme.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> et les monétaristes en contestent la portée.</p>
<p><b><a href="#eco-krugman">Krugman</a></b> la remet au premier plan en 1998 avec le Japon.</p>
<p><b>Bernanke</b>, Svensson et Woodford conçoivent les politiques non conventionnelles.</p>
<p><b><a href="#eco-summers">Summers</a></b> l’intègre dans la théorie de la stagnation séculaire.</p>
<p><b>Rogoff</b> propose de repousser le plancher en limitant les billets.</p>`,
    source: {
      titre: "J. M. Keynes, Théorie générale de l’emploi, de l’intérêt et de la monnaie, 1936, chapitre 15",
      texte: "Il est possible qu’après que le taux de l’intérêt est tombé à un certain niveau, la préférence pour la liquidité devienne virtuellement absolue.",
      notes: `
<p><b>La suite du passage.</b> Keynes précise qu’il ne connaît pas d’exemple de cette situation, mais que si elle se produisait, l’autorité monétaire perdrait le contrôle effectif du taux d’intérêt. Il s’agit pour lui d’un cas limite.</p>
<p><b>« Un certain niveau ».</b> Keynes ne parle pas de taux nul : il pensait que le plancher pouvait être positif, de l’ordre de 2 %, en raison du risque de perte sur les obligations à long terme. L’expérience récente a montré que le plancher pouvait se situer sous zéro.</p>
<p><b>Ce que le chapitre veut montrer.</b> Le taux d’intérêt est un phénomène monétaire et psychologique, qui dépend des anticipations sur les taux futurs. Il ne s’ajuste pas automatiquement pour égaliser épargne et investissement, contrairement à ce que pensaient les classiques.</p>`
    },
    quiz: [
      { q: "Qu’est-ce qu’une trappe à liquidité ?",
        o: ["Une situation où la banque centrale n’a plus les moyens de créer de monnaie", "Une situation où les taux sont si bas que la monnaie créée est conservée, non dépensée", "Une situation où les taux sont trop élevés pour que l’on emprunte", "Un excès d’inflation qui pousse chacun à dépenser avant la hausse des prix"], c: 1,
        e: "La banque centrale ne peut plus faire baisser les taux, et la politique monétaire classique perd son effet." },
      { q: "Pourquoi les taux ne peuvent-ils pas descendre très en dessous de zéro ?",
        o: ["Parce que l’inflation deviendrait incontrôlable pour la banque centrale", "Parce que l’on peut garder son argent en billets, qui rapportent zéro", "Parce que les banques feraient faillite en cascade dans tout le pays", "Parce que les banques centrales n’ont pas le droit de perdre de l’argent"], c: 1,
        e: "Si les dépôts coûtaient trop cher, on retirerait son argent en billets." },
      { q: "Avec un taux nominal nul et des prix qui baissent de 2 % par an, quel est le taux réel ?",
        o: ["−2 %", "0 %", "+2 %", "+4 %"], c: 2,
        e: "Taux réel ≈ taux nominal − inflation = 0 − (−2) = +2 %. La déflation rend le crédit plus cher." },
      { q: "Que propose Krugman en 1998 pour sortir le Japon de la trappe ?",
        o: ["Que l’État augmente les impôts pour assainir ses finances publiques", "Que la banque centrale promette de façon crédible une inflation plus élevée", "Que le Japon revienne à l’étalon-or pour stabiliser sa monnaie et ses prix", "Que l’État rembourse rapidement sa dette pour rassurer les marchés"], c: 1,
        e: "Si le public anticipe plus d’inflation, le taux réel baisse même avec un taux nominal nul." },
      { q: "Que promet la Banque du Japon en 2013 pour sortir de la trappe à liquidité ?",
        o: ["De doubler la base monétaire, avec un objectif d’inflation de 2 %", "De relever fortement ses taux directeurs pour renforcer la valeur du yen", "De rattacher le yen au dollar à un taux de change fixe pour stabiliser le commerce", "De supprimer les billets de 10 000 yens pour décourager la thésaurisation"], c: 0,
        e: "La Banque du Japon a promis de doubler la base monétaire par des achats massifs d’obligations. Les résultats ont été mitigés : l’inflation est restée longtemps sous l’objectif." }
    ],
    transfert: { q: "Un pays a ramené ses taux à zéro il y a trois ans. Les prix baissent légèrement, et le crédit ne repart pas malgré la création de monnaie. Quelle politique les économistes keynésiens recommanderaient-ils en priorité ?",
      o: ["Une relance par la dépense publique, la politique monétaire ayant perdu sa force", "Une hausse des taux d’intérêt pour restaurer la confiance des épargnants", "Une réduction de la dépense publique pour rassurer les créanciers de l’État", "Une hausse des impôts sur la consommation pour réduire les déficits de l’État"], c: 0,
      e: "À taux zéro, la banque centrale ne peut plus guère stimuler la demande : l’État prend le relais." },
    ouverte: {
      q: "Faudrait-il supprimer les grosses coupures, comme le billet de 500 euros ou de 1 000 francs, pour permettre aux banques centrales de descendre plus bas en taux négatifs ?",
      r: "Les partisans de la suppression, dans la ligne de Kenneth Rogoff, font valoir deux arguments : elle permettrait aux banques centrales de descendre plus bas en taux négatifs en cas de crise grave, et elle compliquerait l’évasion fiscale et le blanchiment. La BCE a d’ailleurs cessé d’émettre le billet de 500 euros en 2019, surtout pour ce second motif. Les opposants rappellent que l’argent liquide reste apprécié dans de nombreux pays, comme l’Allemagne ou la Suisse, pour des raisons de protection de la vie privée, de résilience en cas de panne des systèmes de paiement, et de confiance. Du point de vue de la politique monétaire, les banques centrales ont pu gérer des taux légèrement négatifs avec les billets existants, en exonérant une partie des dépôts bancaires. La question ne devient pressante que si l’on pense qu’une crise future exigerait des taux beaucoup plus négatifs."
    },
    lectures: [
      ["Accessible", "Paul Krugman, Pourquoi les crises reviennent toujours, 2009, chapitre sur le Japon."],
      ["Accessible", "Ben Bernanke, 21st Century Monetary Policy, 2022, chapitres sur l’assouplissement quantitatif."],
      ["Intermédiaire", "J. M. Keynes, Théorie générale (1936), chapitres 13 et 15."],
      ["Intermédiaire", "Kenneth Rogoff, The Curse of Cash, 2016."],
      ["Recherche", "Paul Krugman, « It’s Baaack: Japan’s Slump and the Return of the Liquidity Trap », Brookings Papers on Economic Activity, 1998 ; Lars Svensson, « The Zero Bound in an Open Economy: A Foolproof Way of Escaping from a Liquidity Trap », 2001."]
    ],
    decouvrir: {
      questions: [
        { q: "Quand les taux sont nuls, pourquoi la monnaie créée par la banque centrale reste-t-elle immobile ?",
          o: ["Parce que garder de l’argent ne coûte rien et que le placer rapporte à peine", "Parce que la banque centrale interdit aux banques de la prêter à l’économie", "Parce que les prix montent trop vite et découragent les achats des ménages", "Parce que les banques ont fermé leurs guichets pendant la crise financière"], c: 0,
          e: "Banques, entreprises et ménages la gardent en réserve." },
        { q: "Quels outils les banques centrales ont-elles inventés face à la trappe à liquidité ?",
          o: ["Des achats massifs d’obligations et des taux légèrement négatifs", "La suppression des billets de banque pour obliger à dépenser", "Le retour à l’étalon-or pour ancrer la valeur de la monnaie", "Le contrôle des prix pour empêcher toute baisse du niveau général"], c: 0,
          e: "Beaucoup d’économistes recommandent aussi une relance par la dépense publique." }
      ],
      duree: 5,
      html: `
<h3>Le remède qui ne marche plus</h3>
<p>En temps de crise, la banque centrale baisse ses taux d’intérêt : emprunter devient moins cher, on investit et on consomme davantage. Mais que faire quand les taux sont déjà à zéro et que l’économie ne repart pas ? C’est la situation que <a href="#eco-keynes">Keynes</a> appelait, en 1936, une préférence absolue pour la liquidité, et que l’on nomme la <b>trappe à liquidité</b>.</p>
<h3>Pourquoi l’argent reste immobile</h3>
<p>Quand les taux sont nuls, garder de l’argent ne coûte rien, et le placer ne rapporte presque rien. La banque centrale peut créer autant de monnaie qu’elle veut : banques, entreprises et ménages la gardent en réserve, au lieu de la prêter ou de la dépenser. Et les taux ne peuvent pas descendre très en dessous de zéro, sinon chacun garderait ses billets.</p>
${periodes}
<h3>D’abord le Japon, puis tout le monde</h3>
<p>Le Japon y est entré à la fin des années 1990, les États-Unis et l’Europe après la crise de 2008. La Banque centrale européenne, la Banque du Japon, la Suède, le Danemark et la Suisse ont même appliqué des taux négatifs. Les banques centrales ont inventé de nouveaux outils, comme les achats massifs d’obligations, et beaucoup d’économistes recommandent alors une relance par la dépense publique.</p>
<h3>À retenir</h3>
<p>À taux zéro, la politique monétaire classique perd sa force. La notice complète présente le mécanisme, les outils et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Que faire quand les taux sont à zéro ? Le Japon de 1999 et le monde de 2008.",
      raisonnement: "Sept étapes, de la préférence pour la liquidité aux outils non conventionnels.",
      preuves: "Les années 1930, le laboratoire japonais, la Réserve fédérale après 2008.",
      cas: "Les « Abenomics » au Japon, le débat sur les billets, Keynes et l’investissement public.",
      objections: "Friedman, l’efficacité des outils non conventionnels, les effets secondaires, un phénomène révolu ?",
      ecoles: "Keynes et Hicks, Friedman, Krugman, Bernanke et Svensson, Summers, Rogoff.",
      source: "Keynes, 1936 : une préférence pour la liquidité virtuellement absolue.",
      quiz: "Six questions corrigées, dont un calcul, et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     26. ANTICIPATIONS RATIONNELLES
     ===================================================================== */
  const trois = fig(310, (() => {
    const L = 80, R = 600, B = 262, X = (t) => L + t * (R - L) / 10, Y = (v) => B - v * 25;
    const real = [2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    const naive = [2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6];
    const adapt = [2, 2]; for (let t = 2; t <= 10; t++) adapt.push(adapt[t - 1] + 0.5 * (real[t - 1] - adapt[t - 1]));
    const rat = [2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    const line = (arr, col, dash, w) => `<polyline points="${arr.map((v, t) => `${X(t)},${Y(v)}`).join(" ")}" style="fill:none; stroke:${col}; stroke-width:${w}; ${dash ? "stroke-dasharray:" + dash : ""}"/>`;
    let s = `<text x="20" y="24" ${T}>L’inflation passe durablement de 2 % à 6 % : trois façons de l’anticiper</text>`;
    [0, 2, 4, 6, 8].forEach((v) => (s += `<line x1="${L}" y1="${Y(v)}" x2="${R}" y2="${Y(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end" ${M}>${v} %</text>`));
    for (let t = 0; t <= 10; t += 2) s += `<text x="${X(t)}" y="${B + 20}" text-anchor="middle" ${M}>année ${t}</text>`;
    s += line(real, "var(--ink)", "", 5).replace("stroke-width:5", "stroke-width:7; opacity:.15");
    s += line(naive, "var(--serial)", "6 4", 2.2) + line(adapt, "var(--note)", "", 2.6) + line(rat, "var(--gold)", "2 3", 3);
    const leg = [["Anticipation naïve : l’an passé", "var(--serial)"], ["Adaptative : on corrige la moitié de l’erreur", "var(--note)"], ["Rationnelle : le changement est compris aussitôt", "var(--gold)"]];
    leg.forEach(([t, c], i) => (s += `<rect x="${X(4.6)}" y="${Y(3.6) + i * 18 - 9}" width="14" height="4" style="fill:${c}"/><text x="${X(4.6) + 20}" y="${Y(3.6) + i * 18 - 4}" ${S}>${t}</text>`));
    s += `<text x="${X(5)}" y="${Y(6) - 10}" ${S}>inflation effective (en gris)</text>`;
    return s;
  })(), "Exemple chiffré. Avec des anticipations adaptatives (Cagan, Friedman), les agents se trompent systématiquement dans le même sens pendant plusieurs années. Avec des anticipations rationnelles (Muth, Lucas), ils comprennent le changement de régime dès qu’il est connu, et ne font plus que des erreurs imprévisibles.", "Trois courbes d’anticipation face à une hausse d’inflation");

  const toile = fig(300, (() => {
    const L = 90, R = 560, Top = 50, B = 250, X = (q) => L + q * (R - L) / 10, Y = (p) => B - p * 19;
    const dem = (q) => 8 - 0.6 * q, off = (q) => 0.8 * q + 0.5;
    let s = `<text x="20" y="24" ${T}>Le cycle du porc : quand les éleveurs se fient au prix de l’an passé</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>prix</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>quantité</text>`;
    s += `<line x1="${X(0.5)}" y1="${Y(dem(0.5))}" x2="${X(10)}" y2="${Y(dem(10))}" style="stroke:var(--serial); stroke-width:2.4"/>`;
    s += `<line x1="${X(0.5)}" y1="${Y(off(0.5))}" x2="${X(10)}" y2="${Y(off(10))}" style="stroke:var(--note); stroke-width:2.4"/>`;
    s += `<text x="${X(9.4)}" y="${Y(dem(9.4)) - 8}" style="fill:var(--serial); font:700 12px Manrope, sans-serif">demande</text>`;
    s += `<text x="${X(9.2)}" y="${Y(off(9.2)) - 8}" style="fill:var(--note); font:700 12px Manrope, sans-serif">offre</text>`;
    let q = 2.5, pts = [];
    for (let i = 0; i < 6; i++) { const p = dem(q); pts.push([q, p]); const q2 = (p - 0.5) / 0.8; pts.push([q2, p]); q = q2; }
    let path = `M ${X(2.5)} ${Y(off(2.5))}`;
    let cq = 2.5;
    for (let i = 0; i < 5; i++) { const p = dem(cq); path += ` L ${X(cq)} ${Y(p)}`; const nq = (p - 0.5) / 0.8; path += ` L ${X(nq)} ${Y(p)}`; cq = nq; }
    s += `<path d="${path}" style="fill:none; stroke:var(--gold); stroke-width:1.8"/>`;
    s += `<text x="${X(2.5) + 6}" y="${Y(off(2.5)) + 16}" ${S}>départ</text>`;
    s += `<text x="${X(3)}" y="${Top + 12}" ${S}>Prix élevé → on élève beaucoup →</text><text x="${X(3)}" y="${Top + 28}" ${S}>prix bas → on élève peu → prix élevé…</text>`;
    return s;
  })(), "Le modèle de la « toile d’araignée », étudié par Mordecai Ezekiel en 1938. Si les producteurs décident aujourd’hui en fonction du prix d’hier, les prix oscillent. John Muth (1961) montre que des producteurs qui anticipent rationnellement le prix futur supprimeraient ces cycles prévisibles, ou presque.", "Diagramme en toile d’araignée entre offre et demande");

  OEC.notices["anticipations-rationnelles"] = {
    essentiel: [
      "L’hypothèse des anticipations rationnelles suppose que les agents économiques forment leurs prévisions en utilisant toute l’information disponible et une bonne compréhension du fonctionnement de l’économie. Ils peuvent se tromper, mais pas systématiquement dans le même sens.",
      "Proposée par John Muth en 1961, elle est appliquée à la macroéconomie par Robert Lucas, Thomas Sargent et Neil Wallace dans les années 1970. Elle conduit à douter de la capacité des politiques de relance à réduire durablement le chômage, et fonde la « critique de Lucas ».",
      "Elle a transformé la politique monétaire : indépendance des banques centrales, crédibilité, communication, ciblage de l’inflation. Elle reste discutée, car les prévisions réelles des ménages et des entreprises s’en écartent souvent."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : peut-on tromper les gens indéfiniment ?", html: `
<p>Dans les années 1960, beaucoup d’économistes pensent qu’on peut réduire durablement le chômage en acceptant un peu plus d’inflation : c’est la <a href="#c-courbe-phillips">courbe de Phillips</a>. En 1968, Milton <a href="#eco-friedman">Friedman</a> objecte que cela ne marche que tant que les salariés ne se sont pas aperçus que les prix montent. Une fois qu’ils l’ont compris, ils réclament des hausses de salaires, et le chômage revient à son niveau <a href="#c-taux-naturel">naturel</a>. Mais Friedman suppose que les gens apprennent lentement, en corrigeant leurs erreurs passées.</p>
<p>Robert <a href="#eco-lucas">Lucas</a>, à Chicago, pousse l’argument plus loin. Pourquoi les gens se laisseraient-ils tromper pendant des années par une politique qui suit une règle connue ? S’ils comprennent comment la banque centrale réagit, ils anticiperont l’inflation dès que la politique change. Il s’appuie sur une idée formulée en 1961 par un économiste discret, John Muth, dans un article de la revue Econometrica que presque personne n’avait remarqué.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Les anticipations comptent</h4>
<p>Presque toutes les décisions économiques dépendent de l’avenir. Un salarié négocie son salaire en fonction de l’inflation qu’il prévoit ; une entreprise investit selon les ventes qu’elle attend ; un éleveur décide du nombre de bêtes en fonction du prix qu’il espère. La façon dont on modélise ces anticipations change profondément les conclusions.</p>
<h4>2. Les anticipations naïves et le cycle du porc</h4>
<p>La façon la plus simple de prévoir est de supposer que demain ressemblera à aujourd’hui. Les économistes des années 1930 ont étudié le « cycle du porc » : si les éleveurs décident de leur production en fonction du prix actuel, un prix élevé les pousse à élever beaucoup, ce qui fait baisser le prix l’année suivante, ce qui les pousse à élever peu, et ainsi de suite.</p>
${toile}
<h4>3. Les anticipations adaptatives</h4>
<p>Dans les années 1950, Phillip Cagan et Milton Friedman proposent une règle plus raffinée : chacun corrige sa prévision d’une fraction de l’erreur qu’il vient de commettre. Les anticipations finissent par rattraper la réalité, mais avec retard. Pendant ce temps, les agents se trompent toujours dans le même sens, ce qui permet à une politique de les « surprendre » durablement.</p>
<h4>4. L’idée de Muth</h4>
<p>John Muth objecte en 1961 qu’il est étrange de supposer que les agents ignorent ce que l’économiste, lui, sait. Si l’économiste peut prévoir l’erreur des éleveurs, ceux-ci peuvent le faire aussi, et en profiteraient. Il propose de supposer que les anticipations des agents sont, en moyenne, celles que prédit la théorie économique elle-même. Cela ne signifie pas que chacun connaît l’avenir, mais que les erreurs ne sont pas systématiques : elles sont imprévisibles et se compensent en moyenne.</p>
${trois}
<h4>5. L’inefficacité des politiques systématiques</h4>
<p>Thomas Sargent et Neil Wallace en tirent en 1975 une conclusion frappante : si la banque centrale suit une règle connue, par exemple relancer quand le chômage monte, les agents l’anticipent et ajustent leurs prix et leurs salaires en conséquence. La politique n’a alors aucun effet sur la production et l’emploi ; elle ne fait que modifier l’inflation. Seules les surprises ont un effet réel, et l’on ne peut pas surprendre les gens de manière systématique.</p>
<h4>6. La critique de Lucas</h4>
<p>En 1976, Lucas formule une critique devenue classique contre les grands modèles économétriques de l’époque. Ces modèles estiment des relations observées dans le passé, comme la courbe de Phillips, et les utilisent pour prévoir les effets d’une nouvelle politique. Mais si la politique change, les agents changent leur comportement, et les relations estimées ne tiennent plus. Pour évaluer une politique, il faut des modèles fondés sur le comportement des agents et leurs anticipations, et non sur de simples régularités statistiques.</p>
<h4>7. La crédibilité et l’incohérence temporelle</h4>
<p>Finn Kydland et Edward Prescott montrent en 1977 un problème plus subtil. Un gouvernement peut annoncer une inflation faible, puis être tenté, une fois les salaires fixés, de relancer l’économie par une inflation surprise. Les agents, qui le savent, n’y croient pas, et l’inflation est finalement élevée sans aucun gain d’emploi. La solution : confier la politique monétaire à une banque centrale indépendante, avec un objectif clair, qui n’aura pas cette tentation. C’est la base de l’indépendance des banques centrales et du ciblage de l’inflation adoptés dans le monde entier depuis 1990.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La fin des hyperinflations</h4>
<p>En 1982, Thomas Sargent étudie la fin des hyperinflations en Autriche, en Hongrie, en Pologne et en Allemagne au début des années 1920. Dans chaque cas, l’inflation s’arrête brutalement, en quelques semaines, dès qu’un changement de régime crédible est mis en place : banque centrale indépendante, budget équilibré, fin du financement monétaire du déficit. Le coût en chômage est bien plus faible que ne le prévoyaient les modèles à anticipations adaptatives. C’est un argument fort en faveur du rôle des anticipations.</p>
<h4>La désinflation de Volcker</h4>
<p>À l’inverse, quand Paul Volcker, président de la Réserve fédérale à partir de 1979, fait monter les taux à près de 20 % pour casser l’inflation, les États-Unis connaissent deux récessions et un chômage proche de 11 % fin 1982. Si les anticipations avaient été parfaitement rationnelles et la politique crédible, la désinflation aurait dû être presque indolore. Les défenseurs de l’hypothèse répondent que la politique de Volcker n’était pas crédible au départ, après des années d’échecs ; ses critiques y voient la preuve que les anticipations s’ajustent lentement.</p>
<h4>Les enquêtes d’anticipations</h4>
<p>Les enquêtes auprès des ménages et des entreprises, étudiées notamment par Olivier Coibion et Yuriy Gorodnichenko, montrent que les anticipations d’inflation sont souvent mal informées, dispersées et lentes à réagir. Les ménages surestiment fréquemment l’inflation et se fondent sur les prix qu’ils voient souvent, comme l’essence et l’alimentation. Ces résultats ne réfutent pas l’hypothèse comme outil de modélisation, mais montrent ses limites comme description des comportements.</p>` }
    ],
    cas: [
      { titre: "La Nouvelle-Zélande et le ciblage de l’inflation", html: `
<p>En 1989, la Nouvelle-Zélande adopte une loi qui donne à sa banque centrale un objectif unique : la stabilité des prix, précisée par un accord avec le ministre des Finances. Le gouverneur peut être révoqué s’il ne le respecte pas. C’est le premier régime de ciblage de l’inflation au monde, directement inspiré par les travaux sur la crédibilité et les anticipations. L’inflation, qui dépassait 15 % au milieu des années 1980, tombe à moins de 2 % au début des années 1990. Le modèle est adopté par le Canada, le Royaume-Uni, la Suède, puis la plupart des banques centrales.</p>` },
      { titre: "La BNS et le 15 janvier 2015", html: `
<p>Depuis 2000, la BNS définit la stabilité des prix comme une inflation inférieure à 2 % et publie une prévision d’inflation conditionnelle, ce qui aide le public à anticiper sa politique. Le 15 janvier 2015, elle abandonne pourtant sans préavis le cours plancher de 1,20 franc pour un euro, quelques jours après que l’un de ses dirigeants l’a encore présenté comme une pierre angulaire de sa politique. Le franc s’apprécie de près de 20 % en quelques minutes. La BNS justifie la surprise : annoncer la fin du plancher à l’avance aurait provoqué des achats spéculatifs massifs de francs. L’épisode illustre la tension entre la transparence, qui guide les anticipations, et la nécessité de surprendre les marchés dans certains cas.</p>` },
      { titre: "Le prix Nobel et la controverse", html: `
<p>Les travaux sur les anticipations ont été récompensés par plusieurs prix Nobel : Lucas en 1995, Kydland et Prescott en 2004, Sargent et Christopher Sims en 2011. Mais la crise de 2008 a ravivé la controverse. Des économistes comme Paul <a href="#eco-krugman">Krugman</a> ont reproché aux modèles fondés sur ces hypothèses de n’avoir pas vu venir la crise et d’avoir sous-estimé l’instabilité financière. Leurs défenseurs répondent qu’aucun modèle ne peut prédire une crise dont la date est par nature imprévisible, et que les modèles ont depuis intégré le secteur financier.</p>` }
    ],
    objections: `
<h4>1. La rationalité limitée</h4>
<p>Herbert Simon, prix Nobel 1978, souligne que les individus n’ont ni le temps ni les capacités de traiter toute l’information disponible. Ils utilisent des règles simples. Les travaux de Daniel <a href="#eco-kahneman">Kahneman</a> et Amos Tversky montrent des biais systématiques dans les prévisions, ce que l’hypothèse exclut.</p>
<h4>2. L’incertitude radicale</h4>
<p><a href="#eco-keynes">Keynes</a> distinguait le risque, qu’on peut mesurer, de l’incertitude, qu’on ne peut pas. Face à un avenir réellement inconnu, il n’existe pas de « bon modèle » sur lequel fonder des anticipations rationnelles ; les décisions dépendent des conventions et des « esprits animaux ».</p>
<h4>3. Les rigidités de prix</h4>
<p>Même avec des anticipations rationnelles, la politique monétaire a des effets réels si les prix et les salaires ne s’ajustent pas immédiatement, par exemple à cause de contrats pluriannuels. Stanley Fischer et John Taylor l’ont montré dès 1977. C’est la base de la synthèse néokeynésienne, qui combine anticipations rationnelles et rigidités.</p>
<h4>4. L’apprentissage</h4>
<p>George Evans et Seppo Honkapohja proposent de remplacer l’hypothèse par des modèles où les agents apprennent progressivement. Les anticipations peuvent alors converger vers les anticipations rationnelles, ou au contraire dériver, ce qui permet d’expliquer des bulles et des épisodes d’instabilité.</p>`,
    ecoles: `
<p><b>John Muth</b> (1961) formule l’hypothèse en microéconomie.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> et Cagan avaient introduit les anticipations adaptatives.</p>
<p><b><a href="#eco-lucas">Lucas</a></b>, Sargent et Wallace fondent la nouvelle macroéconomie classique.</p>
<p><b>Kydland et Prescott</b> en tirent la théorie de la crédibilité et de l’incohérence temporelle.</p>
<p><b>Fischer, Taylor</b> et les néokeynésiens les combinent avec la rigidité des prix.</p>
<p><b>Simon</b>, <a href="#eco-kahneman">Kahneman</a> et les économistes comportementaux en contestent le réalisme.</p>`,
    source: {
      titre: "John F. Muth, « Rational Expectations and the Theory of Price Movements », Econometrica, 1961",
      texte: "Les anticipations, puisqu’elles sont des prédictions informées d’événements futurs, sont pour l’essentiel les mêmes que les prédictions de la théorie économique pertinente.",
      notes: `
<p><b>Une hypothèse de cohérence.</b> Muth ne prétend pas décrire la psychologie des agents. Il demande que le modèle de l’économiste ne suppose pas des agents plus bêtes que l’économiste lui-même.</p>
<p><b>« Pour l’essentiel ».</b> Muth précise qu’il ne s’agit pas de prévisions parfaites : les erreurs existent, mais elles ne sont pas prévisibles à partir de l’information disponible.</p>
<p><b>Une réception tardive.</b> L’article reste presque ignoré pendant dix ans, avant que Lucas en fasse le fondement de la nouvelle macroéconomie classique. Muth lui-même s’est ensuite intéressé à la rationalité limitée, en partie en réaction à l’usage fait de son idée.</p>`
    },
    quiz: [
      { q: "Que suppose l’hypothèse des anticipations rationnelles ?",
        o: ["Que chacun connaît d’avance l’avenir de l’économie et prévoit à coup sûr", "Que les agents exploitent l’information disponible sans erreur systématique", "Que les agents suivent le prix de l’an passé pour fixer leurs prévisions", "Que les agents se fient surtout à l’avis des experts et des journaux"], c: 1,
        e: "Les erreurs existent, mais elles sont imprévisibles et se compensent en moyenne." },
      { q: "Avec des anticipations adaptatives, que se passe-t-il quand l’inflation augmente durablement ?",
        o: ["Les agents l’anticipent aussitôt et ajustent immédiatement leurs prix", "Ils se trompent dans le même sens pendant plusieurs périodes", "Ils prévoient une baisse de l’inflation dès la période suivante", "L’inflation disparaît d’elle-même au bout de quelques mois"], c: 1,
        e: "Ils ne corrigent qu’une partie de leur erreur à chaque période, ce qui crée un retard systématique." },
      { q: "Que dit la « critique de Lucas » (1976) ?",
        o: ["Que la monnaie est neutre et n’agit pas sur l’économie réelle, même à court terme", "Que les relations estimées dans le passé changent quand la politique change", "Que les modèles doivent se fonder sur de longues séries de données historiques", "Que la politique budgétaire est sans effet sur la production et l’emploi"], c: 1,
        e: "On ne peut pas évaluer une nouvelle politique avec des régularités observées sous l’ancienne." },
      { q: "Quelle solution découle des travaux de Kydland et Prescott sur l’incohérence temporelle ?",
        o: ["Laisser le gouvernement ajuster la politique monétaire au cas par cas selon la conjoncture", "Confier la politique monétaire à une banque indépendante, à objectif clair", "Confier la politique monétaire à un comité d’élus renouvelé à chaque législature", "Changer souvent d’objectif pour surprendre les marchés et les salariés"], c: 1,
        e: "Une banque centrale indépendante n’a pas la tentation de créer de l’inflation surprise, ce qui rend son objectif crédible." },
      { q: "Que montre Sargent en étudiant la fin des hyperinflations des années 1920 ?",
        o: ["Que l’inflation diminue lentement, au rythme des réformes budgétaires", "Qu’un changement de régime crédible peut stopper l’inflation vite, à coût limité", "Qu’il faut plusieurs années de chômage élevé pour parvenir à l’arrêter", "Qu’une forte baisse des salaires est nécessaire pour l’arrêter, au prix d’une récession"], c: 1,
        e: "Dès que la réforme est crédible, les anticipations changent et l’inflation s’arrête en quelques semaines." }
    ],
    transfert: { q: "Un gouvernement annonce chaque année qu’il va relancer l’économie en créant un peu d’inflation « surprise ». Selon les anticipations rationnelles, que se passe-t-il au bout de quelques années ?",
      o: ["Elle est anticipée et intégrée aux prix et aux salaires, sans gain d’emploi", "L’emploi augmente chaque année davantage grâce à ces relances répétées", "L’inflation disparaît parce que les entreprises cessent d’augmenter leurs prix", "Les salaires baissent en termes réels chaque année et l’emploi progresse"], c: 0,
      e: "On ne surprend pas les gens indéfiniment : la relance permanente ne fait qu’augmenter l’inflation." },
    ouverte: {
      q: "La BNS avait-elle raison de surprendre complètement les marchés le 15 janvier 2015, alors que sa crédibilité repose sur des anticipations bien guidées ?",
      r: "Du point de vue de la théorie des anticipations, une banque centrale crédible doit être prévisible, car ses annonces guident les comportements. La surprise de janvier 2015 a donc eu un coût : des entreprises exportatrices et des ménages endettés en devises ont subi des pertes brutales, et une partie du public s’est sentie trompée. Mais la BNS fait valoir qu’un abandon annoncé à l’avance, ou même laissé entrevoir, aurait déclenché des achats spéculatifs massifs de francs qu’elle aurait dû contrer en achetant encore plus d’euros, avec des pertes considérables. Une politique de change est particulièrement vulnérable aux anticipations, car les marchés peuvent parier contre elle. La plupart des économistes jugent que la décision était défendable, mais que la communication des jours précédents a nui à la crédibilité. La BNS a depuis évité de présenter ses instruments comme permanents."
    },
    lectures: [
      ["Accessible", "Robert Lucas, conférence Nobel « Monetary Neutrality », 1995."],
      ["Accessible", "Michel De Vroey, A History of Macroeconomics from Keynes to Lucas and Beyond, 2016, chapitres sur Lucas."],
      ["Intermédiaire", "Thomas Sargent, « The Ends of Four Big Inflations », dans R. Hall (dir.), Inflation: Causes and Effects, 1982."],
      ["Intermédiaire", "Finn Kydland et Edward Prescott, « Rules Rather than Discretion », Journal of Political Economy, 1977."],
      ["Recherche", "John Muth, « Rational Expectations and the Theory of Price Movements », Econometrica, 1961 ; Robert Lucas, « Econometric Policy Evaluation: A Critique », 1976."]
    ],
    decouvrir: {
      questions: [
        { q: "Si l’on prévoit simplement que demain sera comme hier, que se passe-t-il quand l’inflation monte durablement ?",
          o: ["On se trompe longtemps dans le même sens, par sous-estimation", "On prévoit juste dès que l’inflation commence à monter, sans retard", "On surestime l’inflation et l’on prévoit une baisse des prix à venir", "On ne peut plus rien prévoir du tout, faute d’information utilisable"], c: 0,
          e: "C’est la limite des anticipations fondées sur le passé." },
        { q: "Pourquoi les banques centrales annoncent-elles un objectif d’inflation clair ?",
          o: ["Pour que chacun anticipe leur politique, ce qui renforce leur crédibilité", "Pour surprendre les marchés et obtenir un effet plus fort sur les prix", "Parce que la loi leur interdit de changer de taux avant la fin de l’année", "Pour fixer elles-mêmes les salaires et éviter les conflits sociaux"], c: 0,
          e: "Si l’on ne peut pas tromper les gens durablement, la crédibilité devient un instrument." }
      ],
      duree: 5,
      html: `
<h3>On ne trompe pas les gens indéfiniment</h3>
<p>Imaginez un gouvernement qui crée un peu d’inflation pour relancer l’économie. Au début, les salariés ne s’en rendent pas compte et acceptent leurs salaires ; les entreprises embauchent. Mais combien de temps cela peut-il durer ? Pour Robert <a href="#eco-lucas">Lucas</a> et les tenants des <b>anticipations rationnelles</b>, pas longtemps : les gens comprennent vite ce qui se passe.</p>
<h3>Trois façons de prévoir</h3>
<p>On peut prévoir que demain sera comme hier, ou corriger peu à peu ses erreurs. Dans ces deux cas, on se trompe longtemps dans le même sens. L’hypothèse des anticipations rationnelles, proposée par John Muth en 1961, suppose que les gens utilisent toute l’information disponible : ils se trompent parfois, mais pas toujours dans le même sens.</p>
${trois}
<h3>Ce que cela a changé</h3>
<p>Si l’on ne peut pas surprendre les gens systématiquement, une politique de relance permanente ne fait qu’augmenter l’inflation. D’où l’importance de la crédibilité : depuis les années 1990, les banques centrales, comme la BNS, sont indépendantes et annoncent un objectif d’inflation clair, pour que chacun puisse anticiper leur politique.</p>
<h3>À retenir</h3>
<p>L’idée reste discutée : dans la réalité, les ménages prévoient souvent mal l’inflation. La notice complète présente le raisonnement, les preuves et les critiques.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      depart: "De Friedman à Lucas : peut-on tromper les gens indéfiniment ?",
      raisonnement: "Sept étapes, du cycle du porc à l’incohérence temporelle.",
      preuves: "La fin des hyperinflations, la désinflation de Volcker, les enquêtes d’anticipations.",
      cas: "Le ciblage d’inflation néo-zélandais, la BNS le 15 janvier 2015, Nobel et controverse.",
      objections: "Rationalité limitée, incertitude radicale, rigidités de prix, apprentissage.",
      ecoles: "Muth, Friedman et Cagan, Lucas et Sargent, Kydland et Prescott, néokeynésiens, comportementalistes.",
      source: "Muth, 1961 : les anticipations sont les prédictions de la théorie pertinente.",
      quiz: "Six questions corrigées et une question sur la surprise de la BNS.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
