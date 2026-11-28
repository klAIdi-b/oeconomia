/* Œconomia — notices longues, lot 3 (a) : préférence pour la liquidité, aversion aux pertes */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     11. PRÉFÉRENCE POUR LA LIQUIDITÉ ET TRAPPE À LIQUIDITÉ
     ===================================================================== */
  const motifs = fig(230, `
    ${[["Transaction", "payer les dépenses", "courantes", "note", 20], ["Précaution", "faire face", "aux imprévus", "gold", 225], ["Spéculation", "attendre que les titres", "deviennent moins chers", "plum", 430]].map(([a, b, c, col, x]) => `
      <rect x="${x}" y="30" width="190" height="100" rx="10" style="fill:var(--card); stroke:var(--${col}); stroke-width:1.5"/>
      <text x="${x + 95}" y="60" text-anchor="middle" style="fill:var(--${col}); font:700 15px Manrope, sans-serif">${a}</text>
      <text x="${x + 95}" y="88" text-anchor="middle" ${S}>${b}</text><text x="${x + 95}" y="106" text-anchor="middle" ${S}>${c}</text>`).join("")}
    <text x="320" y="170" text-anchor="middle" ${T}>Pourquoi garder de la monnaie qui ne rapporte rien ?</text>
    <text x="320" y="194" text-anchor="middle" ${S}>Le taux d’intérêt est le prix à payer pour s’en séparer : plus l’incertitude est grande,</text>
    <text x="320" y="212" text-anchor="middle" ${S}>plus il faut offrir un intérêt élevé pour convaincre les gens de renoncer à leur liquidité.</text>`,
    "Les trois motifs de détention de la monnaie selon Keynes (Théorie générale, chapitres 13 et 15).",
    "Schéma des trois motifs de préférence pour la liquidité");

  const trappe = fig(312, (() => {
    const L = 70, R = 600, B = 250, Tp = 40, sx = (m) => L + (m / 100) * (R - L), sy = (i) => B - (i / 8) * (B - Tp);
    let s = `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--line)"/><line x1="${L}" y1="${B}" x2="${L}" y2="${Tp - 10}" style="stroke:var(--line)"/>`;
    const p = []; for (let m = 8; m <= 100; m += 2) { const i = Math.max(0.15, 7.5 * Math.exp(-m / 18)); p.push(sx(m) + "," + sy(i)); }
    s += `<polyline points="${p.join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.5"/>`;
    s += `<rect x="${sx(58)}" y="${sy(0.9)}" width="${sx(100) - sx(58)}" height="${sy(0) - sy(0.9)}" style="fill:var(--serial); opacity:.12"/>`;
    s += `<text x="${sx(79)}" y="${sy(0.9) - 10}" text-anchor="middle" style="fill:var(--serial); font:700 12px Manrope, sans-serif">trappe à liquidité</text>`;
    [[30, "M1"], [55, "M2"], [85, "M3"]].forEach(([m, l]) => { s += `<line x1="${sx(m)}" y1="${B}" x2="${sx(m)}" y2="${Tp}" style="stroke:var(--plum); stroke-dasharray:5 4"/><text x="${sx(m)}" y="${B + 18}" text-anchor="middle" style="fill:var(--plum); font:600 11px 'JetBrains Mono', monospace">${l}</text>`; });
    s += `<text x="${L - 8}" y="${Tp}" text-anchor="end" ${M}>taux</text><text x="${R}" y="${B + 34}" text-anchor="end" ${M}>quantité de monnaie →</text>`;
    s += `<text x="${L + 10}" y="24" ${T}>Demande de monnaie et taux d’intérêt (schéma)</text>`;
    s += `<text x="${L}" y="${B + 54}" ${S}>De M1 à M2, plus de monnaie fait baisser le taux ; de M2 à M3, presque plus rien.</text>`;
    return s;
  })(), "Schéma de la trappe à liquidité. Quand le taux d’intérêt est déjà très bas, toute monnaie supplémentaire est conservée plutôt que prêtée ou dépensée : la courbe de demande de monnaie devient presque horizontale, et la banque centrale ne parvient plus à faire baisser les taux ni à relancer l’économie.", "Courbe de demande de monnaie qui devient horizontale à taux très bas");

  OEC.notices["preference-liquidite"] = {
    essentiel: [
      "Pour Keynes, le taux d’intérêt ne rémunère pas l’épargne, mais la renonciation à la liquidité : on garde de la monnaie pour payer ses dépenses, par précaution et par spéculation, et il faut être payé pour s’en séparer.",
      "En période d’incertitude, la préférence pour la liquidité augmente : chacun veut détenir de la monnaie, le taux d’intérêt reste trop élevé pour l’investissement, ou la monnaie nouvelle créée par la banque centrale est simplement thésaurisée.",
      "Dans une « trappe à liquidité », les taux sont déjà proches de zéro et la politique monétaire classique perd son efficacité. Le Japon depuis les années 1990, puis les grands pays après 2008, ont dû inventer d’autres instruments : rachats massifs de titres, taux négatifs, engagements sur les taux futurs."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : quand baisser les taux ne sert plus à rien", html: `
<p>En février 1999, la Banque du Japon abaisse son taux directeur pratiquement à zéro. L’économie japonaise stagne depuis l’éclatement de la bulle immobilière et boursière du début de la décennie, les prix commencent à baisser, les banques sont fragilisées. Selon les manuels, un argent aussi bon marché devrait inciter les entreprises à investir et les ménages à dépenser. Rien de tel ne se produit. La banque centrale lance en 2001 un programme de création monétaire massive ; la monnaie s’accumule dans les réserves des banques, mais les prix continuent de baisser.</p>
<p>En 1998, Paul <a href="#eco-krugman">Krugman</a> publie un article au titre provocateur, « It’s Baaack », pour annoncer le retour d’un phénomène que l’on croyait disparu depuis les années 1930 : la trappe à liquidité. L’idée vient de <a href="#eco-keynes">Keynes</a>, qui avait fondé sa théorie du taux d’intérêt sur la <a href="#c-preference-liquidite">préférence pour la liquidité</a>. Dix ans plus tard, après la crise de 2008, les États-Unis, l’Europe et la Suisse se retrouvent dans la même situation.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La théorie classique du taux d’intérêt</h4>
<p>Pour les économistes classiques, le taux d’intérêt est le prix qui égalise l’épargne et l’investissement. Si les ménages veulent épargner davantage, l’offre de fonds prêtables augmente, le taux baisse, et l’investissement augmente d’autant. L’épargne ne peut donc jamais rester inutilisée : elle se transforme automatiquement en investissement. C’est l’un des piliers de la <a href="#c-loi-debouches">loi des débouchés</a>.</p>
<h4>2. Pourquoi détenir de la monnaie ?</h4>
<p>Keynes part d’une question simple : pourquoi quelqu’un garderait-il de la monnaie, qui ne rapporte rien, plutôt que des obligations, qui rapportent un intérêt ? Il distingue trois motifs. Le motif de <b>transaction</b> : il faut de la monnaie pour payer ses achats courants. Le motif de <b>précaution</b> : on en garde pour faire face aux imprévus. Le motif de <b>spéculation</b> : si l’on pense que les taux vont monter, donc que le prix des obligations va baisser, mieux vaut attendre en gardant de la monnaie.</p>
${motifs}
<h4>3. Le taux d’intérêt, prix de la liquidité</h4>
<p>Le taux d’intérêt n’est donc pas la récompense de l’épargne, écrit Keynes au chapitre 13 de la Théorie générale, mais la récompense de la renonciation à la liquidité pendant une période donnée. Il se fixe sur le marché de la monnaie, là où la demande de liquidité rencontre la quantité de monnaie disponible. Conséquence décisive : si les ménages épargnent davantage, rien ne garantit que le taux baisse assez pour que l’investissement absorbe cette épargne. L’épargne peut rester stérile, et la demande globale insuffisante.</p>
<h4>4. L’incertitude</h4>
<p>La préférence pour la liquidité dépend de la confiance. En période calme, on se contente de peu de liquidités. En période de crise, chacun veut pouvoir disposer immédiatement de ses fonds, quitte à renoncer à tout rendement. Keynes voit dans ce désir de liquidité une réaction rationnelle à une incertitude que l’on ne peut mesurer : la monnaie est un abri contre un avenir inconnu. C’est aussi ce qui rend les crises financières si brutales : tout le monde cherche la liquidité au même moment.</p>
<h4>5. La trappe à liquidité</h4>
<p>Normalement, la banque centrale peut faire baisser les taux en créant de la monnaie : les banques prêtent davantage, les taux diminuent, l’investissement repart. Mais quand le taux est déjà très bas, presque personne n’est disposé à acheter des obligations qui ne rapportent presque rien et risquent de perdre de la valeur si les taux remontent. Toute monnaie supplémentaire est alors conservée telle quelle. La banque centrale peut en créer autant qu’elle veut : le taux ne baisse plus, la dépense ne repart pas. Keynes évoque cette possibilité au chapitre 15 tout en notant qu’il n’en connaît pas d’exemple ; c’est le Britannique Dennis Robertson qui lui donne son nom.</p>
${trappe}
<h4>6. Comment sortir de la trappe</h4>
<p>Plusieurs réponses ont été proposées. La relance budgétaire, privilégiée par Keynes, contourne le problème en dépensant directement. Krugman propose en 1998 que la banque centrale s’engage de façon crédible à laisser l’inflation monter à l’avenir, ce qui réduit le taux d’intérêt réel même si le taux nominal ne peut plus baisser. Après 2008, les banques centrales recourent à des achats massifs d’obligations à long terme (« assouplissement quantitatif »), à des engagements explicites sur les taux futurs (« guidage prospectif ») et, dans plusieurs pays européens, à des taux négatifs, possibles parce que détenir des billets en grande quantité a un coût de stockage et d’assurance.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La vitesse de circulation s’effondre</h4>
<p>Entre 2008 et 2015, la base monétaire américaine est multipliée par plus de quatre, sans provoquer l’inflation que certains annonçaient. La vitesse de circulation de la monnaie, c’est-à-dire le nombre de fois où elle est dépensée dans l’année, chute fortement. Les banques gardent l’essentiel de la monnaie de banque centrale sous forme de réserves, et la demande de crédit reste faible. C’est la signature d’une forte préférence pour la liquidité, compatible avec l’analyse keynésienne.</p>
<h4>Les taux négatifs</h4>
<p>Le Danemark introduit des taux négatifs en 2012, la Banque centrale européenne en juin 2014, la Suisse et la Suède en 2015, le Japon en 2016. Cette expérience montre que la « borne zéro » n’est pas absolue : les taux peuvent descendre un peu sous zéro avant que les épargnants ne retirent massivement leurs billets. Elle montre aussi ses limites : les banques hésitent à appliquer des taux négatifs aux dépôts des particuliers, ce qui comprime leurs marges, et l’effet sur le crédit reste discuté.</p>
<h4>L’efficacité de l’assouplissement quantitatif</h4>
<p>Les achats massifs de titres ont fait baisser les taux à long terme et soutenu les prix des actifs, selon la plupart des études. Leur effet sur l’activité réelle et l’inflation est plus difficile à mesurer. Ben Bernanke, qui a mis en œuvre ces programmes à la Réserve fédérale, résumait en 2014 : l’assouplissement quantitatif « fonctionne en pratique, mais pas en théorie », signe que les économistes peinent encore à expliquer précisément par quels canaux il agit.</p>` }
    ],
    cas: [
      { titre: "Le Japon, de la bulle à la « décennie perdue »", html: `
<p>Après l’éclatement de la bulle de 1990, la Banque du Japon baisse ses taux trop lentement au goût de nombreux économistes, puis atteint zéro en 1999. Les prix baissent légèrement mais durablement à partir de la fin des années 1990 : ménages et entreprises, anticipant une baisse des prix, reportent leurs achats et leurs investissements, ce qui entretient la stagnation. La Banque du Japon expérimente l’assouplissement quantitatif dès 2001, puis, à partir de 2013 sous Haruhiko Kuroda, un programme d’achats d’actifs d’une ampleur sans précédent, complété par des taux légèrement négatifs en 2016 et un contrôle de la courbe des taux. L’inflation ne remonte durablement au-dessus de 2 % qu’à partir de 2022, sous l’effet des prix mondiaux de l’énergie.</p>` },
      { titre: "La Suisse, le franc fort et les taux négatifs", html: `
<p>Pendant la crise de la zone euro, les capitaux affluent vers le franc suisse, valeur refuge, et l’appréciation menace l’industrie d’exportation et fait craindre une baisse des prix. Les taux étant déjà proches de zéro, la Banque nationale suisse ne peut plus utiliser son instrument habituel. Le 6 septembre 2011, elle annonce qu’elle ne tolérera pas un cours inférieur à 1,20 franc pour un euro, et achète des devises en quantités considérables pour défendre ce plancher. Le 15 janvier 2015, elle l’abandonne brusquement et introduit en même temps un taux directeur de −0,75 %, qui restera en vigueur jusqu’en juin 2022. Le cas suisse illustre une sortie particulière de la trappe : quand les taux ne peuvent plus baisser, le taux de change devient le principal instrument d’une petite économie ouverte.</p>` },
      { titre: "Les États-Unis après 2008", html: `
<p>En décembre 2008, la Réserve fédérale abaisse son taux directeur dans une fourchette de 0 à 0,25 %, où il restera jusqu’en décembre 2015. Elle lance trois programmes successifs d’achats de titres, qui portent son bilan d’environ 900 milliards de dollars avant la crise à quelque 4 500 milliards. Elle s’engage aussi publiquement à maintenir des taux bas aussi longtemps que nécessaire. Le chômage, monté à 10 % en octobre 2009, redescend lentement, et l’inflation reste la plupart du temps sous l’objectif de 2 %. Les économistes débattent encore de ce qu’aurait été la situation sans ces mesures, et du rôle de la relance budgétaire, jugée par beaucoup trop modeste et trop vite retirée.</p>` }
    ],
    objections: `
<h4>1. La politique monétaire n’est jamais impuissante</h4>
<p>Milton <a href="#eco-friedman">Friedman</a> et les monétaristes contestent l’idée d’une impuissance monétaire. Une banque centrale peut toujours acheter d’autres actifs que les titres à court terme, obligations longues, devises, actions, et créer assez de monnaie pour finir par faire monter les prix. Ben Bernanke rappelait en 2002 que le gouvernement dispose d’une « planche à billets » et peut toujours, en dernier ressort, provoquer de l’inflation. L’expérience japonaise montre cependant que cela peut prendre très longtemps.</p>
<h4>2. L’effet de richesse de Pigou</h4>
<p>Arthur Pigou objecte à Keynes que si les prix baissent, la valeur réelle de la monnaie détenue augmente : les ménages se sentent plus riches et dépensent davantage, ce qui finit par relancer l’économie. Keynes et ses successeurs répondent que cet effet est faible et lent, et que la baisse des prix alourdit en même temps le poids réel des dettes, ce qui produit l’effet inverse : c’est la « déflation par la dette » décrite par Irving Fisher en 1933.</p>
<h4>3. Une trappe ou une demande faible ?</h4>
<p>Pour certains économistes, le problème après 2008 n’était pas tant une trappe au sens strict qu’une demande de crédit très faible : les ménages et les entreprises surendettés cherchaient à rembourser plutôt qu’à emprunter, quel que soit le taux. Richard Koo a appelé ce phénomène une « récession de bilan », en s’appuyant sur l’expérience japonaise.</p>
<h4>4. Les effets secondaires des taux très bas</h4>
<p>Les critiques de la politique de taux zéro soulignent ses effets pervers : bulles sur l’immobilier et les actions, enrichissement des détenteurs d’actifs au détriment des épargnants modestes, survie d’entreprises non rentables (« entreprises zombies »), difficultés des caisses de pension. Ces critiques rejoignent <a href="#eco-hayek">Hayek</a> et <a href="#eco-minsky">Minsky</a> sur les dangers d’un crédit durablement bon marché.</p>`,
    ecoles: `
<p><b><a href="#eco-keynes">Keynes</a></b> fonde la théorie dans la Théorie générale (1936) et voit dans la préférence pour la liquidité la clé de l’instabilité de l’investissement.</p>
<p><b>John Hicks</b> traduit en 1937 cette théorie dans le modèle IS-LM, qui deviendra pour des décennies le cœur de l’enseignement macroéconomique ; la trappe y apparaît comme une portion horizontale de la courbe LM.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> préfère la théorie quantitative et juge que la demande de monnaie est stable.</p>
<p><b><a href="#eco-krugman">Krugman</a></b> réhabilite la trappe en 1998 et en tire des recommandations pour le Japon puis pour les États-Unis après 2008.</p>
<p><b><a href="#eco-minsky">Minsky</a></b> et les post-keynésiens insistent sur la dimension financière : la liquidité est un enjeu de survie pour les banques et les entreprises endettées.</p>
<p><b><a href="#eco-summers">Summers</a></b> relie la trappe à la <a href="#c-stagnation-seculaire">stagnation séculaire</a> : si le taux d’intérêt d’équilibre est durablement négatif, l’économie risque de rester dans cette situation.</p>`,
    source: {
      titre: "J. M. Keynes, Théorie générale de l’emploi, de l’intérêt et de la monnaie, 1936, chapitre 13",
      texte: "Le taux d’intérêt n’est pas la récompense de l’épargne ou de l’attente comme telle. […] Il est la récompense de la renonciation à la liquidité pendant une période déterminée.",
      notes: `
<p><b>Le contexte.</b> Keynes écrit contre la théorie classique, qu’il attribue à Marshall et à Pigou, selon laquelle le taux d’intérêt équilibre l’épargne et l’investissement. C’est l’un des passages où il marque le plus nettement sa rupture.</p>
<p><b>L’enjeu.</b> Si le taux d’intérêt rémunère l’épargne, une hausse de l’épargne fait baisser les taux et relance l’investissement. S’il rémunère la renonciation à la liquidité, une hausse de l’épargne peut au contraire réduire la demande sans faire baisser les taux. Toute la possibilité d’un chômage durable en dépend.</p>
<p><b>L’héritage.</b> Les manuels contemporains combinent souvent les deux approches : à court terme, la banque centrale fixe le taux sur le marché monétaire ; à long terme, l’épargne et l’investissement pèsent sur le niveau des taux d’équilibre. Le débat de Keynes avec les classiques se prolonge dans celui sur le « taux naturel » et la stagnation séculaire.</p>`
    },
    quiz: [
      { q: "Selon Keynes, que rémunère le taux d’intérêt ?",
        o: ["L’attente du consommateur qui reporte ses achats à plus tard", "La renonciation à la liquidité pendant une période donnée", "Le travail fourni par les banquiers pour gérer les dépôts", "Le risque que l’inflation fasse perdre de la valeur à la monnaie"], c: 1,
        e: "Pour Keynes, l’intérêt est le prix payé pour convaincre quelqu’un de se séparer de sa monnaie, actif parfaitement liquide." },
      { q: "Quel motif conduit à garder de la monnaie quand on anticipe une hausse des taux ?",
        o: ["Le motif de transaction", "Le motif de précaution", "Le motif de spéculation", "Le motif fiscal"], c: 2,
        e: "Si les taux montent, le prix des obligations baisse : mieux vaut garder de la monnaie et acheter les titres plus tard, moins cher." },
      { q: "Qu’est-ce qu’une trappe à liquidité ?",
        o: ["Une situation où la banque centrale n’a plus assez de monnaie à prêter", "Une situation où les taux sont si bas que la monnaie créée reste inutilisée", "Une situation où les taux sont si élevés que plus personne n’emprunte", "Une situation où les banques prêtent moins parce que leurs clients sont endettés"], c: 1,
        e: "Quand les taux sont déjà proches de zéro, créer davantage de monnaie ne fait plus baisser les taux ni relancer la dépense." },
      { q: "Pourquoi les taux d’intérêt peuvent-ils descendre légèrement sous zéro ?",
        o: ["Parce que l’État taxe l’épargne et reverse l’argent aux emprunteurs", "Parce que garder de gros montants de billets coûte en stockage et en assurance", "Parce que la banque centrale rémunère les épargnants pour qu’ils dépensent", "Parce que l’inflation est négative et que les prix des biens baissent peu à peu"], c: 1,
        e: "Tant que garder des billets coûte plus cher que d’accepter un taux légèrement négatif, les épargnants ne retirent pas massivement leurs fonds." },
      { q: "Comment la BNS a-t-elle réagi en 2011 alors que ses taux étaient déjà proches de zéro ?",
        o: ["Elle a relevé ses taux", "Elle a fixé un cours plancher de 1,20 franc pour un euro", "Elle a acheté massivement des obligations de la Confédération", "Elle a cessé toute intervention"], c: 1,
        e: "Le taux de change est devenu son principal instrument : elle a acheté massivement des devises pour empêcher le franc de s’apprécier au-delà du plancher." }
    ],
    transfert: { q: "En 2020, les taux sont déjà proches de zéro dans la zone euro, et les entreprises hésitent à investir malgré l’argent bon marché. Quelle conclusion tirerait Keynes ?",
      o: ["La banque centrale ne suffit plus, la dépense publique doit prendre le relais", "Il faut relever fortement les taux pour encourager les placements", "Les entreprises vont investir d’elles-mêmes dès que le crédit sera encore moins cher", "Il faut supprimer l’argent liquide pour que chacun dépense davantage"], c: 0,
      e: "Dans une trappe à liquidité, la politique monétaire perd son efficacité : c’est l’argument pour la relance budgétaire." },
    ouverte: {
      q: "Entre 2014 et 2022, plusieurs banques centrales, dont la BCE, la Banque du Japon et la banque centrale de Suède, ont appliqué des taux négatifs. Qui en a profité et qui en a souffert ?",
      r: "Les gagnants principaux sont les emprunteurs, notamment les propriétaires immobiliers dont les prêts à taux bas ont coûté peu, les États, qui ont emprunté à des taux nuls ou négatifs, les entreprises exportatrices, protégées d’une appréciation de leur monnaie, et les détenteurs d’actifs dont la valeur a augmenté. Les perdants sont les épargnants, dont les comptes ne rapportaient rien, les caisses de pension et les assureurs, qui ont peiné à obtenir le rendement nécessaire pour financer les rentes, et les jeunes ménages, confrontés à la hausse des prix immobiliers. Les banques ont vu leurs marges comprimées, même si les banques centrales ont exempté une partie de leurs réserves. Le bilan dépend du point de comparaison : sans taux négatifs, la croissance aurait sans doute été plus faible et le risque de déflation plus élevé."
    },
    lectures: [
      ["Accessible", "Paul Krugman, Pourquoi les crises reviennent toujours (The Return of Depression Economics), 2009."],
      ["Accessible", "Richard Koo, The Holy Grail of Macroeconomics: Lessons from Japan’s Great Recession, 2008."],
      ["Intermédiaire", "J. M. Keynes, Théorie générale (1936), chapitres 13 et 15."],
      ["Intermédiaire", "Ben Bernanke, The Courage to Act, 2015, mémoires sur la politique de la Fed après 2008."],
      ["Recherche", "Paul Krugman, « It’s Baaack: Japan’s Slump and the Return of the Liquidity Trap », Brookings Papers on Economic Activity, 1998 ; John Hicks, « Mr. Keynes and the “Classics” », Econometrica, 1937."]
    ],
    decouvrir: {
      questions: [
        { q: "Pour Keynes, pourquoi garde-t-on de l’argent qui ne rapporte rien ?",
          o: ["Pour payer ses achats, faire face aux imprévus ou attendre l’occasion de placer", "Parce que la loi oblige les ménages à conserver une réserve en monnaie", "Parce que les billets prennent de la valeur en vieillissant, comme les pièces rares", "Parce que les banques refusent les dépôts des petits épargnants et des entreprises"], c: 0,
          e: "Ce goût pour l’argent disponible est la préférence pour la liquidité." },
        { q: "Pourquoi créer davantage de monnaie ne sert-il presque plus à rien dans une trappe à liquidité ?",
          o: ["Parce que la monnaie reste dans les banques au lieu d’être prêtée ou dépensée", "Parce que les prix montent aussitôt et annulent l’effet de la création monétaire", "Parce que la monnaie créée est détruite par la banque centrale chaque soir", "Parce que les taux d’intérêt sont trop élevés pour que les entreprises empruntent"], c: 0,
          e: "Quand les taux sont à zéro et que la confiance manque, la monnaie ne circule plus." }
      ],
      duree: 5,
      html: `
<h3>Pourquoi garder de l’argent qui ne rapporte rien ?</h3>
<p>Un billet ne rapporte aucun intérêt. Pourtant, chacun en garde : pour payer ses courses, pour faire face aux imprévus, ou pour attendre une meilleure occasion de placer son argent. Pour <a href="#eco-keynes">Keynes</a>, ce goût pour l’argent disponible, la <b>préférence pour la liquidité</b>, explique le taux d’intérêt : c’est le prix qu’il faut payer pour convaincre quelqu’un de prêter son argent plutôt que de le garder.</p>
${motifs}
<h3>Quand la peur fige l’argent</h3>
<p>En temps de crise, tout le monde veut garder de l’argent disponible, au cas où. Les entreprises et les ménages dépensent et investissent moins. La banque centrale peut baisser ses taux pour encourager le crédit, mais il arrive un moment où ils sont déjà à zéro. Créer davantage de monnaie ne sert alors presque plus à rien : elle reste dans les banques au lieu d’être prêtée ou dépensée. C’est la <b>trappe à liquidité</b>.</p>
<h3>Le Japon, puis le monde</h3>
<p>Le Japon a connu cette situation dès la fin des années 1990, puis les États-Unis, l’Europe et la Suisse après 2008. Les banques centrales ont dû inventer d’autres méthodes : acheter massivement des obligations, promettre de garder les taux bas longtemps, et même appliquer des taux négatifs. La Banque nationale suisse a maintenu un taux de −0,75 % de 2015 à 2022.</p>
<h3>À retenir</h3>
<p>Quand la confiance disparaît, la monnaie ne circule plus, et la banque centrale seule ne suffit pas toujours à relancer l’économie. La notice complète présente les expériences et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Le Japon à taux zéro et le retour de la trappe à liquidité.",
      raisonnement: "Six étapes, de la théorie classique de l’intérêt aux moyens de sortir de la trappe.",
      preuves: "L’effondrement de la vitesse de circulation, les taux négatifs, l’assouplissement quantitatif.",
      cas: "Le Japon, la Suisse et son franc fort, les États-Unis après 2008.",
      objections: "Friedman, l’effet Pigou, la récession de bilan, les effets secondaires des taux bas.",
      ecoles: "Keynes, Hicks, Friedman, Krugman, Minsky, Summers.",
      source: "Keynes, 1936 : l’intérêt, récompense de la renonciation à la liquidité.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     12. AVERSION AUX PERTES ET THÉORIE DES PERSPECTIVES
     ===================================================================== */
  const valeur = fig(330, (() => {
    const cx = 320, cy = 125, sx = 2.6, sy = 1.8, a = 0.88, lam = 2.25;
    const v = (x) => x >= 0 ? Math.pow(x, a) : -lam * Math.pow(-x, a);
    let s = `<line x1="40" y1="${cy}" x2="600" y2="${cy}" style="stroke:var(--line)"/><line x1="${cx}" y1="20" x2="${cx}" y2="320" style="stroke:var(--line)"/>`;
    const pts = []; for (let x = -100; x <= 100; x += 2) { const y = cy - v(x) * sy; if (y > 18 && y < 322) pts.push((cx + x * sx) + "," + y); }
    s += `<polyline points="${pts.join(" ")}" style="fill:none; stroke:var(--plum); stroke-width:3"/>`;
    s += `<line x1="${cx + 50 * sx}" y1="${cy}" x2="${cx + 50 * sx}" y2="${cy - v(50) * sy}" style="stroke:var(--note); stroke-width:2"/><circle cx="${cx + 50 * sx}" cy="${cy - v(50) * sy}" r="5" style="fill:var(--note)"/>`;
    s += `<line x1="${cx - 50 * sx}" y1="${cy}" x2="${cx - 50 * sx}" y2="${cy - v(-50) * sy}" style="stroke:var(--serial); stroke-width:2"/><circle cx="${cx - 50 * sx}" cy="${cy - v(-50) * sy}" r="5" style="fill:var(--serial)"/>`;
    s += `<text x="${cx + 50 * sx + 10}" y="${cy - v(50) * sy + 18}" style="fill:var(--note); font:600 12px Manrope, sans-serif">gain de 50 : +${v(50).toFixed(0)}</text>`;
    s += `<text x="${cx - 50 * sx - 8}" y="${cy - v(-50) * sy + 16}" text-anchor="end" style="fill:var(--serial); font:600 12px Manrope, sans-serif">perte de 50 : ${v(-50).toFixed(0)}</text>`;
    s += `<text x="596" y="${cy - 8}" text-anchor="end" ${M}>gains →</text><text x="44" y="${cy - 8}" ${M}>← pertes</text>`;
    s += `<text x="${cx + 8}" y="32" ${M}>valeur ressentie</text><text x="${cx + 8}" y="${cy + 16}" ${M}>point de référence</text>`;
    return s;
  })(), "La fonction de valeur de Kahneman et Tversky, tracée avec les paramètres qu’ils ont estimés en 1992 (courbure 0,88, coefficient d’aversion aux pertes 2,25). Elle est concave pour les gains, convexe pour les pertes, et deux fois plus pentue du côté des pertes.", "Courbe en S asymétrique de la fonction de valeur");

  OEC.notices["aversion-pertes"] = {
    essentiel: [
      "Nous n’évaluons pas les résultats en richesse totale, comme le suppose la théorie économique classique, mais en gains et en pertes par rapport à un point de référence, souvent la situation actuelle ou ce que nous attendions.",
      "Une perte nous affecte environ deux fois plus qu’un gain de même montant. Cette aversion aux pertes explique l’attachement aux objets que l’on possède, la difficulté à vendre un placement en perte, ou la puissance d’un choix présenté comme une perte plutôt que comme un gain.",
      "Formulée par Daniel Kahneman et Amos Tversky dans la théorie des perspectives (1979), elle a fondé l’économie comportementale. Son ampleur exacte et sa généralité sont aujourd’hui discutées, mais l’asymétrie elle-même est l’un des résultats les plus robustes de la psychologie économique."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : la même décision, deux réponses opposées", html: `
<p>En 1981, Amos Tversky et Daniel <a href="#eco-kahneman">Kahneman</a> soumettent à des étudiants le problème suivant. Une maladie inconnue menace de tuer 600 personnes. Deux programmes sont possibles. Avec le programme A, 200 personnes seront sauvées. Avec le programme B, il y a une chance sur trois que les 600 soient sauvées et deux chances sur trois que personne ne le soit. Environ 72 % choisissent le programme A, la certitude.</p>
<p>À un autre groupe, ils présentent exactement les mêmes options, formulées autrement. Avec le programme C, 400 personnes mourront. Avec le programme D, il y a une chance sur trois que personne ne meure et deux chances sur trois que les 600 meurent. Cette fois, environ 78 % choisissent le programme D, le pari. Or A et C sont identiques, comme B et D. Seule la présentation a changé : vies sauvées dans un cas, vies perdues dans l’autre. Pour la théorie économique classique, c’est impossible. Pour Kahneman et Tversky, c’est la clé du comportement humain face au risque.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. L’utilité espérée</h4>
<p>Depuis Daniel Bernoulli (1738), puis John von Neumann et Oskar Morgenstern (1944), la théorie économique suppose qu’une personne face au risque choisit l’option qui maximise son utilité espérée : la moyenne des satisfactions procurées par chaque issue, pondérées par leurs probabilités. L’utilité dépend de la richesse finale. Comme l’<a href="#c-utilite-marginale">utilité marginale</a> de la richesse diminue, on est en général prudent : on préfère 1 000 francs sûrs à une chance sur deux d’en gagner 2 000.</p>
<h4>2. Les anomalies</h4>
<p>Dès 1953, l’économiste français Maurice Allais montre par des choix simples que beaucoup de personnes, y compris des économistes, violent les axiomes de l’utilité espérée : elles accordent un poids disproportionné à la certitude. Dans les années 1970, Kahneman et Tversky multiplient les expériences qui révèlent des écarts systématiques, et donc prévisibles, avec la théorie.</p>
<h4>3. Le point de référence</h4>
<p>Leur premier principe est que nous évaluons les résultats comme des changements par rapport à un point de référence, et non comme des niveaux de richesse. Un salaire de 8 000 francs réjouit celui qui en gagnait 6 000 et déçoit celui qui en attendait 10 000. Le point de référence est souvent le statu quo, mais il peut être une attente, une norme sociale ou un objectif.</p>
<h4>4. L’aversion aux pertes</h4>
<p>Le deuxième principe est que les pertes pèsent plus lourd que les gains. Proposez à quelqu’un un pari à pile ou face où il gagne 150 francs ou perd 100 francs : la plupart refusent, alors que le gain espéré est positif. Pour accepter, il faut en moyenne que le gain potentiel soit environ le double de la perte potentielle. En 1992, Tversky et Kahneman estiment ce coefficient d’aversion aux pertes à 2,25.</p>
<h4>5. La sensibilité décroissante</h4>
<p>Le troisième principe est que la différence entre 0 et 100 francs paraît plus grande que celle entre 1 100 et 1 200 francs, dans les gains comme dans les pertes. La courbe de valeur est donc concave pour les gains, ce qui rend prudent, et convexe pour les pertes, ce qui pousse à prendre des risques pour éviter une perte certaine. C’est ce qui explique le problème de la maladie : présentées comme des gains, les options poussent à la prudence ; présentées comme des pertes, elles poussent au pari.</p>
${valeur}
<h4>6. La pondération des probabilités</h4>
<p>Enfin, nous ne traitons pas les probabilités de façon linéaire : nous surestimons les événements rares et sous-pondérons les événements très probables mais pas certains. Ce biais explique à la fois que l’on achète des billets de loterie, en surestimant une chance minuscule de gagner, et que l’on s’assure contre des risques improbables, en surestimant une petite probabilité de perte.</p>
<h4>7. Les effets de cadrage</h4>
<p>Comme l’évaluation dépend du point de référence, la manière de présenter un choix, son « cadrage », peut le modifier. Une remise pour paiement comptant est mieux acceptée qu’un supplément pour paiement par carte, alors que l’écart de prix est le même. Les responsables politiques, les publicitaires et les concepteurs de politiques publiques utilisent ces effets, ce qui pose des questions éthiques.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>L’effet de dotation</h4>
<p>En 1990, Kahneman, Jack Knetsch et Richard Thaler distribuent des tasses à la moitié des étudiants d’une classe, puis organisent un marché. Ceux qui ont reçu une tasse demandent en moyenne plus du double pour la céder que ceux qui n’en ont pas ne sont prêts à payer pour l’acquérir. Posséder un objet le fait entrer dans le point de référence : s’en séparer devient une perte. L’effet a été reproduit de nombreuses fois, avec des objets variés.</p>
<h4>Les investisseurs gardent leurs perdants</h4>
<p>Terrance Odean (1998) analyse les comptes de 10 000 investisseurs particuliers américains. Ils vendent beaucoup plus volontiers les actions qui ont gagné que celles qui ont perdu, alors que la fiscalité les inciterait à faire l’inverse. Vendre une action en perte, c’est rendre la perte définitive ; on préfère attendre qu’elle « revienne ». C’est l’effet de disposition, conforme à la théorie des perspectives.</p>
<h4>Les golfeurs et le par</h4>
<p>Devin Pope et Maurice Schweitzer (2011) étudient plus de deux millions de coups roulés de golfeurs professionnels. À distance égale, les joueurs réussissent mieux leurs coups pour faire le par, le score de référence, que pour faire un birdie, un coup de mieux. Rater le par est vécu comme une perte, rater le birdie comme un gain manqué. Même des professionnels très bien payés et très entraînés montrent l’asymétrie.</p>` }
    ],
    cas: [
      { titre: "Épargner plus demain", html: `
<p>Beaucoup de salariés américains épargnent trop peu pour leur retraite, et l’on sait que leur demander de réduire leur salaire disponible est vécu comme une perte. En 2004, Richard Thaler et Shlomo Benartzi proposent le programme « Save More Tomorrow » : les salariés s’engagent à affecter à l’épargne une partie de leurs futures augmentations de salaire, et non de leur salaire actuel. Leur revenu disponible ne baisse jamais, il augmente simplement moins vite. Dans la première entreprise étudiée, le taux d’épargne des participants passe d’environ 3,5 % à 13,6 % en un peu plus de trois ans. Thaler reçoit le Nobel en 2017, notamment pour ces applications.</p>` },
      { titre: "Des primes payées à l’avance aux enseignants", html: `
<p>En 2010, à Chicago Heights, Roland Fryer et ses coauteurs testent deux manières de récompenser les enseignants selon les progrès de leurs élèves. Le premier groupe reçoit une prime en fin d’année si les résultats s’améliorent. Le second reçoit la même prime au début de l’année, avec l’obligation de la rembourser si les objectifs ne sont pas atteints. Le montant attendu est identique. Seul le second groupe obtient une amélioration nette des résultats des élèves : la perte possible d’une somme déjà reçue motive davantage que le gain possible de la même somme.</p>` },
      { titre: "La prime de risque des actions", html: `
<p>Sur longue période, les actions ont rapporté bien plus que les obligations, un écart si grand que la théorie classique ne parvient pas à l’expliquer : c’est l’« énigme de la prime de risque ». En 1995, Shlomo Benartzi et Richard Thaler proposent une explication fondée sur l’aversion aux pertes combinée à une évaluation fréquente des portefeuilles, qu’ils appellent l’« aversion myope aux pertes ». Si l’on regarde son portefeuille chaque année, les actions affichent souvent des pertes, douloureuses ; il faut donc un rendement élevé pour convaincre de les détenir. L’explication reste discutée, mais elle a eu une grande influence sur les conseils de placement à long terme.</p>` }
    ],
    objections: `
<h4>1. L’aversion aux pertes est-elle si grande ?</h4>
<p>En 2018, David Gal et Derek Rucker publient un article intitulé « The Loss of Loss Aversion », qui soutient que de nombreux résultats attribués à l’aversion aux pertes s’expliquent autrement, par exemple par une préférence pour le statu quo ou par l’inertie. D’autres travaux montrent que le coefficient varie selon les montants et les contextes, et peut être proche de un pour de petites sommes. Le débat porte sur l’ampleur et la généralité du phénomène plus que sur son existence.</p>
<h4>2. L’expérience corrige les biais</h4>
<p>John List (2003) observe que les marchands expérimentés de cartes de sport montrent un effet de dotation beaucoup plus faible que les amateurs. Les marchés et l’expérience pourraient discipliner les comportements, ce qui limiterait l’importance des biais pour l’économie dans son ensemble.</p>
<h4>3. La crise de la réplication</h4>
<p>Une partie des résultats de la psychologie sociale popularisés dans les années 2000, notamment sur l’« amorçage », n’a pas résisté aux tentatives de réplication, ce que Kahneman a lui-même reconnu publiquement. Le noyau de la théorie des perspectives, en revanche, a été très largement reproduit.</p>
<h4>4. L’éthique des « nudges »</h4>
<p>Utiliser les biais pour orienter les comportements, même vers des objectifs jugés bons, pose la question de la manipulation. Les défenseurs du « paternalisme libertaire » de Thaler et Cass Sunstein répondent que tout choix est présenté d’une manière ou d’une autre, et qu’il vaut mieux le faire dans l’intérêt des personnes ; leurs critiques demandent que ces techniques restent transparentes et contrôlées.</p>`,
    ecoles: `
<p><b>Daniel Bernoulli</b> (1738) avait introduit l’utilité décroissante de la richesse pour résoudre le paradoxe de Saint-Pétersbourg.</p>
<p><b>Maurice Allais</b> (Nobel 1988) a montré dès 1953 les violations de l’utilité espérée.</p>
<p><b>Herbert Simon</b> (Nobel 1978) avait proposé la notion de rationalité limitée : les agents cherchent une solution satisfaisante plutôt qu’optimale.</p>
<p><b>Richard Thaler</b> (Nobel 2017) a fait de l’économie comportementale un champ à part entière et l’a appliquée aux politiques publiques.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> défendait une méthode où le réalisme des hypothèses importe peu si les prédictions sont bonnes, ce que l’économie comportementale conteste.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> avait insisté sur les conventions et les « esprits animaux » dans les décisions d’investissement, une intuition que l’économie comportementale a en partie formalisée.</p>`,
    source: {
      titre: "Daniel Kahneman et Amos Tversky, « Prospect Theory: An Analysis of Decision under Risk », Econometrica, 1979",
      texte: "Les pertes pèsent plus lourd que les gains.",
      notes: `
<p><b>Une phrase devenue proverbe.</b> En anglais, « losses loom larger than gains ». Elle résume un article technique de trente pages, publié dans la revue d’économétrie la plus prestigieuse, et devenu l’un des plus cités de toute l’économie.</p>
<p><b>Pourquoi Econometrica ?</b> Les auteurs, psychologues, choisissent délibérément une revue d’économistes, parce qu’ils veulent contester la théorie de la décision sur son propre terrain. Kahneman racontera que ce choix a beaucoup compté dans l’influence de leurs travaux.</p>
<p><b>Ce que la phrase ne dit pas.</b> Elle n’affirme pas que les gens sont irrationnels en tout, ni que les marchés ne fonctionnent pas. Elle décrit une asymétrie précise, mesurable, qui permet des prédictions : c’est ce qui a convaincu les économistes.</p>`
    },
    quiz: [
      { q: "Selon la théorie des perspectives, comment évaluons-nous un résultat ?",
        o: ["En richesse totale finale, une fois tous les gains et pertes additionnés", "En gain ou en perte par rapport à un point de référence", "En fonction du prix de marché de ce qu’on obtient ou perd", "En fonction de l’avis des autres personnes concernées par le choix"], c: 1,
        e: "C’est le premier principe de Kahneman et Tversky : la référence, souvent le statu quo ou une attente, détermine si un résultat est vécu comme un gain ou une perte." },
      { q: "Un pari à pile ou face : gagner 120 francs ou perdre 100 francs. Avec un coefficient d’aversion aux pertes de 2, le pari paraît-il attractif ?",
        o: ["Oui, car le gain possible de 120 dépasse la perte possible de 100", "Non, car la perte de 100 pèse comme 200, plus que le gain de 120", "Oui, car pile ou face est un jeu équitable et on est indifférent au risque", "Impossible à dire, car le résultat dépend de la fortune du joueur"], c: 1,
        e: "Le gain espéré monétaire est de +10, mais en valeur ressentie : 0,5 × 120 − 0,5 × 200 = −40. La plupart refusent ce type de pari." },
      { q: "Qu’est-ce que l’effet de dotation ?",
        o: ["La tendance à donner une part de ses revenus à des œuvres caritatives", "Exiger plus pour céder un objet que ce qu’on paierait pour l’acquérir", "La préférence pour les biens de luxe dès que le revenu d’un ménage augmente", "La part de patrimoine qu’une personne reçoit de ses parents à leur décès"], c: 1,
        e: "Une fois possédé, l’objet fait partie du point de référence ; le céder est vécu comme une perte." },
      { q: "Pourquoi les investisseurs vendent-ils plus volontiers leurs actions gagnantes que leurs perdantes ?",
        o: ["Pour payer moins d’impôts", "Parce que vendre une action en perte rend la perte définitive", "Parce que les actions perdantes remontent toujours", "Parce que les actions gagnantes ont atteint leur valeur maximale"], c: 1,
        e: "C’est l’effet de disposition, documenté par Odean (1998) : on préfère attendre que la perte se résorbe plutôt que de la réaliser." },
      { q: "Comment le programme « Save More Tomorrow » contourne-t-il l’aversion aux pertes ?",
        o: ["En obligeant les salariés à épargner une part fixe de leur salaire actuel", "En réservant une part des futures augmentations, sans baisse du salaire net", "En offrant une prime à ceux qui augmentent leur taux d’épargne chaque mois", "En prélevant l’épargne sur le salaire dès le premier mois, avant toute augmentation"], c: 1,
        e: "Le revenu disponible ne baisse jamais ; il augmente simplement moins vite. L’épargne n’est donc pas vécue comme une perte." }
    ],
    transfert: { q: "Un magasin en ligne présente la même offre de deux façons : « 10 euros de réduction si vous payez en avance » ou « 10 euros de frais si vous payez à la livraison ». Selon l’économie comportementale, laquelle pousse le plus à payer en avance ?",
      o: ["Les frais, car éviter une perte motive davantage qu’obtenir un gain", "La réduction, car les gains comptent davantage que les pertes", "Les deux ont le même effet, puisque le montant en jeu est identique", "Aucune, car les clients ne lisent pas les conditions de paiement"], c: 0,
      e: "Les deux présentations sont équivalentes en argent, mais la perte pèse plus lourd." },
    ouverte: {
      q: "Dans plusieurs pays, comme le Royaume-Uni ou les Pays-Bas, les futurs retraités peuvent toucher tout ou partie de leur épargne retraite en capital plutôt qu’en rente. Comment l’aversion aux pertes et le cadrage peuvent-ils influencer ce choix ?",
      r: "Le capital apparaît souvent comme un gain tangible, une somme que l’on possède, tandis que la rente peut être perçue comme une perte si l’on meurt tôt (« j’aurai cotisé pour rien »), ce qui pousse vers le capital. À l’inverse, présenter la rente comme une assurance contre le risque de manquer d’argent en vivant très longtemps peut la rendre plus attractive. La façon dont la caisse de pension présente les options, l’ordre des informations et l’option par défaut influencent donc fortement le résultat. Un économiste classique comparerait la valeur actuelle des deux options selon l’espérance de vie, les taux et la fiscalité ; un économiste comportemental ajouterait qu’il faut aider les assurés à éviter les biais, par exemple en présentant les deux options de manière symétrique, en termes de revenu mensuel et de risque."
    },
    lectures: [
      ["Accessible", "Daniel Kahneman, Système 1 / Système 2 : les deux vitesses de la pensée, 2011."],
      ["Accessible", "Michael Lewis, The Undoing Project, 2016, le récit de l’amitié entre Kahneman et Tversky."],
      ["Intermédiaire", "Richard Thaler, Misbehaving : les découvertes de l’économie comportementale, 2015."],
      ["Intermédiaire", "Richard Thaler et Cass Sunstein, Nudge, 2008."],
      ["Recherche", "Daniel Kahneman et Amos Tversky, « Prospect Theory », Econometrica, 1979 ; Daniel Kahneman, Jack Knetsch et Richard Thaler, « Experimental Tests of the Endowment Effect and the Coase Theorem », Journal of Political Economy, 1990."]
    ],
    decouvrir: {
      questions: [
        { q: "Dans l’exemple de la maladie qui menace 600 personnes, qu’est-ce qui change la décision des gens ?",
          o: ["La présentation du même choix, en vies sauvées ou en morts", "Le nombre réel de malades concernés dans chaque programme", "Le coût du programme de soins pour la collectivité et les assurances", "L’avis des médecins qui présentent les programmes aux patients"], c: 0,
          e: "C’est l’effet de cadrage, mis en évidence par Kahneman et Tversky." },
        { q: "Pourquoi la plupart des gens refusent-ils de jouer à pile ou face pour gagner 150 francs ou en perdre 100 ?",
          o: ["Parce qu’une perte pèse environ deux fois plus qu’un gain de même montant", "Parce que le pari fait perdre de l’argent en moyenne sur plusieurs parties", "Parce que les jeux d’argent sont interdits dans la plupart des pays", "Parce qu’ils comprennent mal les probabilités de gagner ou de perdre"], c: 0,
          e: "Le pari est pourtant avantageux en moyenne : c’est l’aversion aux pertes." }
      ],
      duree: 5,
      html: `
<h3>Même choix, réponses opposées</h3>
<p>Une maladie menace 600 personnes. Si on vous dit qu’un programme « sauvera 200 personnes », vous le choisirez probablement plutôt qu’un pari risqué. Si on vous dit qu’il « laissera mourir 400 personnes », vous choisirez probablement le pari. Pourtant, c’est exactement la même chose. Les psychologues Daniel <a href="#eco-kahneman">Kahneman</a> et Amos Tversky ont montré que la façon de présenter un choix change nos décisions.</p>
<h3>Perdre fait plus mal que gagner ne fait plaisir</h3>
<p>Leur découverte principale : nous jugeons les résultats en gains ou en pertes par rapport à une référence, et une perte nous fait environ deux fois plus d’effet qu’un gain de même montant. C’est pourquoi la plupart des gens refusent de jouer à pile ou face pour gagner 150 francs ou en perdre 100, même si le pari est avantageux en moyenne.</p>
${valeur}
<h3>Dans la vie de tous les jours</h3>
<p>On demande plus cher pour revendre un objet qu’on ne l’aurait payé. On garde trop longtemps une action qui a perdu de la valeur pour ne pas « réaliser » la perte. On épargne plus facilement si l’épargne est prélevée sur une augmentation future plutôt que sur le salaire actuel. Toutes ces observations s’expliquent par l’aversion aux pertes.</p>
<h3>À retenir</h3>
<p>Nous ne sommes pas les calculateurs parfaitement rationnels des modèles économiques classiques. Cette découverte a valu le Nobel 2002 à Kahneman et a fondé l’économie comportementale. La notice complète présente les expériences et les débats sur l’ampleur de cet effet.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Le problème de la maladie : vies sauvées ou vies perdues.",
      raisonnement: "Sept étapes, de l’utilité espérée aux effets de cadrage.",
      preuves: "L’effet de dotation, les investisseurs qui gardent leurs perdants, les golfeurs et le par.",
      cas: "Save More Tomorrow, les primes des enseignants de Chicago Heights, la prime de risque des actions.",
      objections: "L’ampleur de l’effet, l’expérience qui corrige, la crise de réplication, l’éthique des nudges.",
      ecoles: "Bernoulli, Allais, Simon, Thaler, Friedman, Keynes.",
      source: "Kahneman et Tversky, 1979 : les pertes pèsent plus lourd que les gains.",
      quiz: "Six questions corrigées, dont un calcul, et une question sur le deuxième pilier.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
