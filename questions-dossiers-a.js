/* Œconomia — grandes questions en dossier complet, lot A : la valeur, la monnaie, les crises.
   Remplace le texte (html) des questions correspondantes de questions.js ; titres, chapôs, auteurs et liens sont conservés. */
(function () {
  const { T, S, M, fig, arrow } = OEC.pfx;
  const set = (id, html) => { const q = OEC.questions.find((x) => x.id === id); if (q) q.html = html; };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;
  /* Boîte à trois lignes : titre en gras, puis deux lignes plus petites */
  const box3 = (x, y, w, h, [a, b, c], col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${col}; stroke-width:2"/><text x="${x + w / 2}" y="${y + 24}" text-anchor="middle" style="fill:${col}; font:700 12px Manrope, sans-serif">${a}</text><text x="${x + w / 2}" y="${y + 44}" text-anchor="middle" style="fill:var(--ink-soft); font:11px Manrope, sans-serif">${b}</text><text x="${x + w / 2}" y="${y + 60}" text-anchor="middle" style="fill:var(--ink-soft); font:11px Manrope, sans-serif">${c}</text>`;
  const table = (rows) => `<div class="tablewrap"><table class="positions"><thead><tr><th>Courant</th><th>Réponse</th><th>Auteurs</th></tr></thead><tbody>${rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table></div>`;
  const suisse = (titre, html) => `<div class="suisse"><span>Le cas suisse</span><h4>${titre}</h4>${html}</div>`;
  const essentiel = (pts) => `<div class="essentiel"><span>L’essentiel</span><ul>${pts.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;
  const retenir = (pts, liens) => `<div class="essentiel retenir"><span>À retenir</span><ul>${pts.map((p) => `<li>${p}</li>`).join("")}</ul><p class="plusloin"><b>Pour aller plus loin :</b> ${liens}</p></div>`;

  /* =====================================================================
     LA VALEUR
     ===================================================================== */
  const figUtilite = fig(270, (() => {
    const u = (x) => 60 + 155 * (1 - Math.exp(-(x - 80) / 90));
    const pts = []; for (let x = 80; x <= 600; x += 10) pts.push(`${x},${u(x).toFixed(1)}`);
    let s = `<text x="20" y="24" ${T}>Le paradoxe de l’eau et du diamant résolu par l’utilité marginale</text>`;
    s += `<line x1="70" y1="44" x2="70" y2="232" style="stroke:var(--line); stroke-width:1.5"/><line x1="70" y1="232" x2="612" y2="232" style="stroke:var(--line); stroke-width:1.5"/>`;
    s += `<text x="78" y="48" ${M}>utilité de la dernière unité</text><text x="608" y="252" text-anchor="end" ${M}>quantité disponible →</text>`;
    s += `<polyline points="${pts.join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.5"/>`;
    s += `<circle cx="110" cy="${u(110).toFixed(1)}" r="6" style="fill:var(--gold)"/><circle cx="520" cy="${u(520).toFixed(1)}" r="6" style="fill:var(--plum)"/>`;
    s += `<text x="124" y="98" style="fill:var(--gold); font:700 12px Manrope, sans-serif">Diamant : rare, la dernière pierre reste très désirée</text>`;
    s += `<text x="515" y="172" text-anchor="end" style="fill:var(--plum); font:700 12px Manrope, sans-serif">Eau : abondante, le dernier litre compte peu</text>`;
    return s;
  })(), "Chaque unité supplémentaire d’un bien satisfait un besoin un peu moins pressant que la précédente. L’eau est si abondante que son dernier litre a une utilité presque nulle, même si l’eau dans son ensemble est vitale. Le prix dépend de l’utilité de la dernière unité, donc de la rareté.", "Courbe d’utilité marginale décroissante avec les points eau et diamant");

  const figCiseaux = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Les « ciseaux » de Marshall : l’utilité et le coût fixent ensemble le prix</text>`;
    s += `<line x1="100" y1="44" x2="100" y2="232" style="stroke:var(--line); stroke-width:1.5"/><line x1="100" y1="232" x2="580" y2="232" style="stroke:var(--line); stroke-width:1.5"/>`;
    s += `<text x="108" y="48" ${M}>prix</text><text x="500" y="250" text-anchor="end" ${M}>quantité →</text>`;
    s += `<path d="M120,60 L520,220" style="fill:none; stroke:var(--note); stroke-width:2.5"/><path d="M120,220 L520,60" style="fill:none; stroke:var(--gold); stroke-width:2.5"/>`;
    s += `<text x="528" y="224" style="fill:var(--note); font:700 12px Manrope, sans-serif">Demande</text><text x="528" y="64" style="fill:var(--gold); font:700 12px Manrope, sans-serif">Offre</text>`;
    s += `<text x="528" y="80" ${S}>(coût)</text><text x="528" y="240" ${S}>(utilité)</text>`;
    s += `<circle cx="320" cy="140" r="6" style="fill:var(--serial)"/><text x="320" y="182" text-anchor="middle" style="fill:var(--serial); font:700 12px Manrope, sans-serif">Prix d’équilibre</text>`;
    return s;
  })(), "Demander si c’est l’utilité ou le coût qui fixe la valeur revient, selon Marshall (1890), à demander laquelle des deux lames d’une paire de ciseaux coupe le papier. À court terme, la demande pèse davantage ; à long terme, quand la production a le temps de s’adapter, le coût de production l’emporte.", "Courbes d’offre et de demande qui se croisent");

  set("valeur", `
${essentiel([
  "Pendant deux siècles, les économistes ont cherché la source de la valeur soit dans le <b>travail</b> nécessaire pour produire un bien (Smith, Ricardo, Marx), soit dans son <b>utilité</b> pour ceux qui le désirent (Condillac, Say, puis les marginalistes).",
  "Vers 1870, la notion d’<b>utilité marginale</b> résout le paradoxe de l’eau et du diamant : ce qui compte n’est pas l’utilité totale d’un bien, mais celle de sa dernière unité, qui dépend de sa rareté. Marshall réconcilie ensuite utilité et coût de production.",
  "Le débat n’est pas clos : la psychologie, la sociologie et la critique de la finance montrent que la valeur dépend aussi des références, du prestige et des institutions."
])}
<h3>Une distinction héritée d’Aristote</h3>
<p>Au livre I de la Politique, <a href="#eco-aristote">Aristote</a> observe qu’une chaussure peut servir à être portée ou à être échangée. Il distingue ainsi ce que l’on appellera la <dfn data-g="valeur-usage">valeur d’usage</dfn> et la valeur d’échange. Dans l’Éthique à Nicomaque, il ajoute que ce qui rend les biens échangeables, c’est le besoin que les gens en ont, et que la monnaie sert à mesurer ce besoin. Mais il ne propose pas de théorie générale des prix : sa question est d’abord morale. Qu’est-ce qu’un échange juste ?</p>
<p>Les théologiens médiévaux, de Thomas d’Aquin aux docteurs de l’école de Salamanque au XVIe siècle, en tirent une réflexion sur le « juste prix ». Les plus subtils, comme Luis de Molina ou Martín de Azpilcueta, le rattachent déjà à l’estimation commune du marché, qui varie avec l’abondance et la rareté, plutôt qu’au seul coût de fabrication. Un prix est juste s’il se forme librement, sans fraude ni monopole.</p>
<h3>L’énigme de l’eau et du diamant</h3>
<p>En 1776, <a href="#eco-smith">Adam Smith</a> formule l’énigme qui hantera ses successeurs : rien n’est plus utile que l’eau, et l’on ne peut presque rien obtenir en échange ; un diamant n’a guère d’utilité, et l’on peut l’échanger contre une quantité considérable d’autres biens. Smith en conclut que l’utilité ne peut expliquer la valeur d’échange, et cherche ailleurs.</p>
<p>D’autres auteurs avaient pourtant ouvert une autre piste. En 1751, l’abbé napolitain Ferdinando Galiani expliquait que la valeur dépend à la fois de l’utilité et de la rareté. En 1738, le mathématicien suisse Daniel Bernoulli avait montré, à propos des jeux de hasard, qu’un gain supplémentaire procure moins de satisfaction à un riche qu’à un pauvre : c’est la première formulation de l’utilité décroissante. En 1776, l’année même de La Richesse des nations, Condillac publiait Le Commerce et le gouvernement, où la valeur repose sur l’utilité et le besoin. Mais c’est la voie de Smith qui domine pendant un siècle.</p>
<h3>Le travail comme source et mesure de la valeur</h3>
<p>Pour Smith, « le travail a été le premier prix, la monnaie d’achat primitive payée pour toutes choses ». Dans une société de chasseurs, si tuer un castor demande deux fois plus de temps que tuer un daim, un castor s’échangera contre deux daims. Mais Smith hésite entre deux idées : la valeur comme quantité de travail <i>incorporée</i> dans un bien, et comme quantité de travail que ce bien permet de <i>commander</i>, c’est-à-dire d’acheter. Dans une économie avec des capitalistes et des propriétaires fonciers, il considère que le prix « naturel » se compose des salaires, des profits et des rentes (<a href="#c-prix-naturel">voir prix naturel</a>).</p>
<p><a href="#eco-ricardo">Ricardo</a> tranche en faveur de la première idée : la valeur d’échange d’un bien dépend du travail nécessaire pour le produire, y compris le travail passé incorporé dans les outils et les machines (<dfn data-g="valeur-travail">valeur-travail</dfn>). Il reconnaît pourtant une difficulté qu’il ne résoudra jamais : lorsque deux industries emploient des capitaux de durées différentes, les prix s’écartent des quantités de travail, car le profit rémunère aussi le temps. Le vin qui vieillit en cave prend de la valeur sans travail supplémentaire.</p>
<h3>Marx : le travail, la plus-value et l’exploitation</h3>
<p><a href="#eco-marx">Marx</a> reprend la théorie de la valeur-travail pour en tirer une conclusion que Ricardo n’avait pas vue. Si le travail crée la valeur, d’où vient le profit ? De ce que l’ouvrier vend non son travail, mais sa force de travail, payée à sa valeur de reproduction, c’est-à-dire ce qu’il faut pour vivre et élever des enfants. Or cette force de travail produit davantage qu’elle ne coûte. La différence est la <dfn data-g="plus-value">plus-value</dfn>, que s’approprie le capitaliste.</p>
<p>Marx précise que seul compte le travail « socialement nécessaire », celui qu’exige une production dans les conditions normales de son époque : un artisan lent ne crée pas plus de valeur qu’un artisan rapide. Le livre III du Capital, publié par Engels en 1894, tente de relier ces valeurs aux prix observés. En 1896, l’Autrichien Eugen von Böhm-Bawerk juge ce « problème de la transformation » insoluble. La controverse, très technique, se poursuit encore aujourd’hui chez les économistes marxistes.</p>
<h3>La révolution marginaliste</h3>
<p>Le paradoxe de l’eau et du diamant trouve sa solution au début des années 1870, presque simultanément et de façon indépendante, chez l’Anglais William Stanley Jevons (1871), l’Autrichien Carl Menger (1871) et le Français <a href="#eco-walras">Léon Walras</a> (1874), qui enseigne à Lausanne. Ce n’est pas l’utilité totale d’un bien qui fixe sa valeur, mais l’<dfn data-g="utilite-marginale">utilité marginale</dfn>, celle de la dernière unité disponible.</p>
${figUtilite}
<p>Menger l’illustre par l’exemple d’un paysan isolé qui possède cinq sacs de blé : le premier sert à se nourrir, le deuxième à reprendre des forces, le troisième à nourrir des volailles, le quatrième à faire de l’eau-de-vie, le cinquième à nourrir des perroquets. Si un sac est perdu, il renonce aux perroquets, et non à sa survie : la valeur de chaque sac est celle de l’usage le moins important.</p>
<p>Cette révolution change le regard sur l’économie. La valeur n’est plus une propriété objective des biens, liée à l’effort passé, mais une relation entre les biens et les désirs des personnes. Elle dépend de la rareté et des préférences. <a href="#eco-say">Say</a>, qui définissait déjà la production comme une création d’utilité, apparaît rétrospectivement comme un précurseur.</p>
<h3>Marshall et les deux lames des ciseaux</h3>
<p><a href="#eco-marshall">Alfred Marshall</a> réconcilie les deux traditions en 1890, dans ses Principes d’économie. La demande reflète l’utilité marginale pour les acheteurs ; l’offre reflète le coût de production pour les vendeurs. Le prix naît de leur rencontre (<a href="#c-offre-demande">voir offre et demande</a>).</p>
${figCiseaux}
<p>Marshall ajoute une dimension temporelle. Sur un marché de poissons, le matin, la quantité est fixée : seule la demande décide du prix. Sur plusieurs années, les pêcheurs peuvent acheter des bateaux ou changer de métier : le prix tend alors vers le coût de production. La théorie de la valeur-travail est ainsi absorbée dans une théorie plus générale, où le travail n’est qu’un coût parmi d’autres.</p>
<h3>Les positions en présence</h3>
${table([
  ["Valeur-travail classique", "La valeur d’échange dépend du travail nécessaire pour produire le bien.", `<a href="#eco-smith">Smith</a>, <a href="#eco-ricardo">Ricardo</a>`],
  ["Marxisme", "Le travail crée la valeur ; le profit vient du travail non payé, la plus-value.", `<a href="#eco-marx">Marx</a>`],
  ["Marginalisme", "La valeur dépend de l’utilité de la dernière unité, donc de la rareté et des préférences.", `Jevons, Menger, <a href="#eco-walras">Walras</a>`],
  ["Synthèse néoclassique", "Utilité et coût fixent ensemble le prix, comme les deux lames des ciseaux.", `<a href="#eco-marshall">Marshall</a>`],
  ["Approches critiques", "La valeur dépend aussi du statut social, des références psychologiques et des institutions.", `<a href="#eco-veblen">Veblen</a>, <a href="#eco-kahneman">Kahneman</a>, Mazzucato`]
])}
<h3>Ce qui reste du débat</h3>
<p>La théorie marginaliste est devenue celle des manuels, mais la question n’a pas disparu. En 1960, Piero Sraffa, ami de Keynes et de Wittgenstein, publie Production de marchandises par des marchandises, qui renoue avec l’approche classique des prix de production et nourrit la critique de <a href="#eco-robinson">Joan Robinson</a> contre la théorie néoclassique du capital.</p>
<p>D’autres approches montrent que la valeur dépend aussi de ce que les biens signifient. <a href="#eco-veblen">Veblen</a> rappelle en 1899 qu’un bien peut être désiré parce qu’il est cher et qu’il signale un rang social : c’est la <a href="#c-consommation-ostentatoire">consommation ostentatoire</a>. Le marché du diamant l’illustre bien : au XXe siècle, la société De Beers contrôle l’essentiel de l’offre mondiale et lance en 1947 le slogan « Un diamant est éternel ». Aujourd’hui, les diamants fabriqués en laboratoire, chimiquement identiques, coûtent beaucoup moins cher, et leur arrivée fait baisser le prix des pierres naturelles : la rareté et le prestige pèsent autant que l’utilité.</p>
<p><a href="#eco-kahneman">Kahneman</a> montre avec Jack Knetsch et Richard Thaler, en 1990, que la valeur que nous attribuons à un objet dépend d’un point de référence : des étudiants à qui l’on a donné une tasse exigent plus du double pour la céder que ce que d’autres sont prêts à payer pour l’acquérir (<a href="#c-aversion-pertes">voir aversion aux pertes</a>). Enfin, l’économiste Mariana Mazzucato, dans La Valeur de tout (2018), demande si tout ce qui a un prix crée réellement de la valeur, et si certaines activités financières ne se contentent pas de capter la valeur produite ailleurs.</p>
${suisse("Pourquoi une montre mécanique vaut-elle plus qu’une montre à quartz ?", `
<p>Dans les années 1970, les montres à quartz japonaises, plus précises et moins chères, plongent l’horlogerie suisse dans une crise profonde : le nombre d’emplois du secteur passe d’environ 90 000 en 1970 à environ 30 000 au milieu des années 1980. L’industrie se relève de deux façons : avec la Swatch, lancée en 1983, une montre à quartz bon marché et à la mode, et surtout avec la montre mécanique de luxe.</p>
<p>Le paradoxe rappelle celui de l’eau et du diamant. Une montre mécanique haut de gamme, moins précise qu’une montre à quartz à quelques francs, peut coûter des dizaines de milliers de francs. La valeur-travail l’explique en partie, par les centaines d’heures de travail qualifié. L’utilité marginale l’explique aussi, par la rareté de certains modèles. Mais Veblen apporte la pièce manquante : la montre de luxe vaut aussi par le prestige qu’elle confère et par la marque « Swiss made », protégée par la loi. Toutes les théories de la valeur ont ici leur part de vérité.</p>`)}
${retenir([
  "La valeur d’usage, l’utilité d’un bien, et la valeur d’échange, son prix, ne coïncident pas : c’est le paradoxe de l’eau et du diamant.",
  "Les classiques cherchent la valeur dans le travail ; Marx en tire la théorie de la plus-value ; les marginalistes la placent dans l’utilité de la dernière unité.",
  "Marshall montre que l’utilité et le coût fixent ensemble le prix, selon l’horizon de temps.",
  "La psychologie et la sociologie ajoutent que la valeur dépend aussi des références et du prestige."
], `<a href="#c-valeur-usage">valeur d’usage et d’échange</a>, <a href="#c-valeur-travail">valeur-travail</a>, <a href="#c-utilite-marginale">utilité marginale</a>, <a href="#c-plus-value">plus-value</a>, <a href="#c-offre-demande">offre et demande</a>, et les portraits de <a href="#eco-smith">Smith</a>, <a href="#eco-marx">Marx</a> et <a href="#eco-walras">Walras</a>.`)}`);

  /* =====================================================================
     LA MONNAIE
     ===================================================================== */
  const figRegimes = fig(230, (() => {
    let s = `<text x="20" y="24" ${T}>Comment la monnaie s’est détachée du métal</text>`;
    s += box3(20, 44, 145, 72, ["Avant 1870", "monnaie métallique", "or et argent"], "var(--gold)");
    s += box3(173, 44, 145, 72, ["1870-1914", "étalon-or", "billets convertibles"], "var(--plum)");
    s += box3(326, 44, 145, 72, ["1944-1971", "Bretton Woods", "dollar lié à l’or"], "var(--note)");
    s += box3(479, 44, 145, 72, ["Depuis 1971", "monnaie fiduciaire", "banques centrales"], "var(--serial)");
    s += arrow(20, 140, 620, 140);
    s += `<text x="20" y="174" ${S}>Les guerres mondiales suspendent la convertibilité ; en 1971, le président Nixon met fin à celle du dollar.</text>`;
    s += `<text x="20" y="192" ${S}>La valeur de la monnaie repose désormais sur la confiance dans les institutions qui l’émettent.</text>`;
    return s;
  })(), "La tendance de long terme est claire : la monnaie, d’abord faite de métal précieux, puis promesse de métal, devient une pure convention garantie par l’État et la banque centrale. Les adversaires de cette évolution, des partisans de l’étalon-or aux défenseurs des cryptomonnaies, y voient un risque d’inflation et d’arbitraire.", "Frise des régimes monétaires");

  const figCredit = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Les banques créent la monnaie en accordant des crédits</text>`;
    s += node(20, 46, 180, 64, "La banque accorde", "un crédit de 10 000 fr.", "var(--note)");
    s += node(230, 46, 180, 64, "Elle crédite le compte", "de l’emprunteur", "var(--gold)");
    s += node(440, 46, 180, 64, "Monnaie nouvelle", "10 000 fr. de dépôts", "var(--plum)");
    s += arrow(202, 78, 228, 78) + arrow(412, 78, 438, 78);
    s += node(120, 150, 400, 60, "Ce qui limite la création", "demande de crédit, solvabilité, règles, taux de la banque centrale", "var(--serial)");
    s += arrow(320, 112, 320, 148);
    s += `<text x="20" y="244" ${S}>Quand le crédit est remboursé, la monnaie correspondante disparaît.</text>`;
    return s;
  })(), "La plus grande partie de la monnaie que nous utilisons n’est pas faite de billets, mais de dépôts bancaires. Comme l’a rappelé la Banque d’Angleterre en 2014, ce sont les crédits qui font les dépôts : la banque n’attend pas d’avoir reçu de l’épargne pour prêter. La banque centrale influence cette création par ses taux et ses règles.", "Schéma de la création monétaire par le crédit");

  set("monnaie", `
${essentiel([
  "La monnaie remplit trois fonctions : unité de compte, moyen d’échange et réserve de valeur. Elle a longtemps été faite de métal précieux ; elle repose aujourd’hui sur la confiance dans les banques et la banque centrale.",
  "La <b>théorie quantitative</b>, de Bodin à Friedman, soutient qu’un excès de monnaie fait monter les prix. Keynes répond que la monnaie n’est pas neutre : on la conserve par précaution, et elle influence l’emploi.",
  "Le débat porte aujourd’hui sur l’indépendance et le rôle des banques centrales, la <dfn data-g=monnaie-endogene>création monétaire</dfn> massive après 2008, le retour de l’inflation et les nouvelles formes de monnaie."
])}
<h3>Convention ou marchandise</h3>
<p><a href="#eco-aristote">Aristote</a> remarquait déjà que la monnaie (nomisma) tire sa valeur de la loi (nomos) et non de la nature. Elle sert de mesure commune aux biens et permet de différer les échanges. Pendant des siècles pourtant, la monnaie est faite de métal précieux, et l’on discute de sa valeur comme de celle de toute marchandise. La tension entre ces deux conceptions, l’une métalliste, l’autre conventionnelle ou étatique, traverse toute l’histoire monétaire (<a href="#c-fonctions-monnaie">voir les fonctions de la monnaie</a>).</p>
<p>Les princes du Moyen Âge en jouent : en réduisant le poids d’or ou d’argent des pièces, ils financent leurs guerres. Vers 1360, l’évêque Nicole Oresme écrit un Traité des monnaies, où il soutient que la monnaie appartient à la communauté et non au prince, et que ses manipulations sont une forme d’impôt déguisé.</p>
<h3>La quantité de monnaie et le niveau des prix</h3>
<p>Au XVIe siècle, l’afflux d’argent américain fait monter les prix dans toute l’Europe. En 1556, le théologien de Salamanque Martín de Azpilcueta observe que l’argent vaut moins là où il abonde. En 1568, Jean Bodin répond au seigneur de Malestroit, qui accusait les rognages de monnaie, que la cause principale est l’abondance d’or et d’argent : c’est l’une des premières formulations de la <dfn data-g="theorie-quantitative">théorie quantitative</dfn>.</p>
<p>En 1752, David Hume en tire une conséquence redoutable pour le mercantilisme : un pays qui accumule l’or voit ses prix monter, ses exportations reculer, et le métal repartir. Vouloir thésauriser par le commerce est vain. Hume ajoute une nuance importante : pendant la période où la nouvelle monnaie se diffuse, avant que les prix ne s’ajustent, elle stimule l’activité. Cette idée d’effets de court terme réels et d’effets de long terme sur les seuls prix restera au cœur du débat.</p>
<h3>Papier-monnaie et banques</h3>
<p>L’expérience de John Law, entre 1716 et 1720, montre les promesses et les dangers du papier-monnaie : il ranime un temps le commerce français, puis s’effondre lorsque l’émission sert à soutenir le cours des actions de sa Compagnie du Mississippi (<a href="#crises" data-crisis="law">voir la crise</a>). La France en garde pour longtemps une méfiance envers les billets et les banques.</p>
<p>Pendant les guerres napoléoniennes, l’Angleterre suspend de 1797 à 1821 la convertibilité de la livre en or. La « controverse du bullion » oppose ceux qui, comme <a href="#eco-ricardo">Ricardo</a> en 1810, attribuent la hausse du prix de l’or à l’excès d’émission de la Banque d’Angleterre, et ceux qui jugent que les billets émis pour répondre aux besoins du commerce ne peuvent pas être excessifs. Le débat se prolonge entre la « currency school » et la « banking school », et aboutit en 1844 à une loi qui limite strictement l’émission de billets. En 1873, Walter Bagehot ajoute que, pendant une panique, la banque centrale doit prêter largement aux banques solides : c’est le rôle de <a href="#c-preteur-dernier-ressort">prêteur en dernier ressort</a>.</p>
${figRegimes}
<h3>Qui crée la monnaie ?</h3>
<p>Aujourd’hui, les billets et les pièces ne représentent qu’une petite partie de la monnaie. L’essentiel est constitué de dépôts sur des comptes bancaires. Contrairement à une idée répandue, les banques ne se contentent pas de prêter l’épargne de leurs clients : en accordant un crédit, elles créent un dépôt nouveau, donc de la monnaie. Cette création est limitée par la demande de crédit, par la solvabilité des emprunteurs, par les règles de solvabilité et de liquidité, et par les taux fixés par la banque centrale.</p>
${figCredit}
<p>Dès 1905, l’Allemand Georg Friedrich Knapp soutenait que la monnaie est une création de l’État, qui l’impose en acceptant de la recevoir en paiement des impôts. Cette « théorie étatique » inspire aujourd’hui la « théorie monétaire moderne », qui affirme qu’un État émettant sa propre monnaie ne peut pas faire faillite, et que la seule limite à ses dépenses est l’inflation. La plupart des économistes la jugent dangereuse, car elle sous-estime ce risque.</p>
<h3>Keynes : la monnaie n’est pas un voile</h3>
<p>Pour les classiques, la monnaie ne fait que faciliter les échanges ; elle n’affecte pas durablement la production. <a href="#eco-keynes">Keynes</a> rompt avec cette idée. La monnaie est aussi une réserve de valeur que l’on détient par précaution face à l’incertitude. Cette <dfn data-g="preference-liquidite">préférence pour la liquidité</dfn> détermine le taux d’intérêt, qui peut rester trop élevé pour que l’investissement assure le plein emploi. Dans une <dfn data-g="trappe-liquidite">trappe à liquidité</dfn>, la banque centrale a beau créer de la monnaie, celle-ci est conservée plutôt que dépensée. Il faut alors que l’État dépense lui-même.</p>
<h3>La contre-révolution monétariste</h3>
<p><a href="#eco-friedman">Milton Friedman</a> et Anna Schwartz réhabilitent en 1963 la théorie quantitative, en montrant que la Grande Dépression a été aggravée par la chute d’environ un tiers de la masse monétaire américaine entre 1929 et 1933. Pour Friedman, « l’inflation est toujours et partout un phénomène monétaire ». La politique monétaire agit avec des délais longs et variables, et une règle de croissance fixe de la masse monétaire vaut mieux que le pilotage au jugé. La stagflation des années 1970 et le tournant de Paul Volcker en 1979, qui porte les taux américains au-delà de 15 % pour casser l’inflation, lui donnent un large crédit.</p>
<p><a href="#eco-lucas">Robert Lucas</a> pousse le raisonnement plus loin : si les agents forment des <dfn data-g="anticipations-rationnelles">anticipations rationnelles</dfn>, seule une politique monétaire imprévue peut avoir des effets réels. D’où l’importance de la crédibilité : une banque centrale dont on croit l’engagement contre l’inflation peut la réduire à moindre coût.</p>
<p>La règle de Friedman est abandonnée dans les années 1980, car la demande de monnaie se révèle instable. Mais l’idée d’une banque centrale indépendante, chargée d’abord de la stabilité des prix, s’impose : la Nouvelle-Zélande adopte la première cible d’inflation explicite en 1990, et la Banque centrale européenne naît en 1998 sur ce modèle, avant l’introduction de l’euro en 1999.</p>
<h3>Les positions en présence</h3>
${table([
  ["Métallisme", "La monnaie doit être liée à un métal précieux, pour échapper à l’arbitraire des gouvernants.", "Partisans de l’étalon-or"],
  ["Théorie quantitative et monétarisme", "Un excès de monnaie provoque l’inflation ; il faut une règle stricte et une banque centrale crédible.", `Bodin, Hume, <a href="#eco-friedman">Friedman</a>`],
  ["Keynésianisme", "La monnaie influence l’emploi ; dans une trappe à liquidité, la politique budgétaire doit prendre le relais.", `<a href="#eco-keynes">Keynes</a>, <a href="#eco-krugman">Krugman</a>`],
  ["École autrichienne", "La monnaie gérée par l’État provoque crédit artificiel et cycles ; il faut la concurrence des monnaies.", `<a href="#eco-mises">Mises</a>, <a href="#eco-hayek">Hayek</a>`],
  ["Théorie étatique", "La monnaie est une création de l’État ; son seul frein est l’inflation.", "Knapp, théorie monétaire moderne"]
])}
<h3>Questions ouvertes</h3>
<p><a href="#eco-hayek">Hayek</a> proposait en 1976 de mettre fin au monopole d’émission des États et de laisser des monnaies privées se concurrencer ; le bitcoin, lancé en 2009, a ravivé cette idée. Mais sa valeur très instable en fait jusqu’ici davantage un actif spéculatif qu’une monnaie au sens plein. Les banques centrales étudient de leur côté des monnaies numériques publiques.</p>
<p>Après 2008, les banques centrales ont créé de la monnaie à une échelle inédite, en achetant massivement des titres, sans provoquer d’inflation pendant une décennie, ce qui semblait donner raison à Keynes sur la trappe à liquidité. Le retour de l’inflation en 2021-2022 a relancé le débat entre <a href="#eco-summers">Summers</a> et <a href="#eco-krugman">Krugman</a> sur la part respective de la monnaie, du budget et des chocs d’offre (<a href="#controverses" data-debat="summers-krugman">voir leur débat</a>).</p>
${suisse("Le franc, l’or et les votations monétaires", `
<p>Le franc suisse naît en 1850, deux ans après la création de l’État fédéral, en remplacement de dizaines de monnaies cantonales. La Banque nationale suisse (BNS) commence ses activités en 1907 et reçoit le monopole des billets. Pendant près d’un siècle, le franc reste lié à l’or : ce n’est qu’avec la nouvelle Constitution de 1999 et une loi entrée en vigueur en 2000 que ce lien est supprimé.</p>
<p>La monnaie est en Suisse un sujet de votations populaires. En 2014, l’initiative « Sauvez l’or de la Suisse », qui voulait obliger la BNS à détenir au moins 20 % de ses actifs en or, est rejetée par environ 77 % des votants. En 2018, l’initiative « Monnaie pleine », qui voulait retirer aux banques commerciales le pouvoir de créer de la monnaie par le crédit, est rejetée par environ 76 %. Entre 2011 et 2015, la BNS impose un cours plancher de 1,20 franc pour un euro, en créant des francs pour acheter des devises, afin de freiner la hausse du franc, valeur refuge. Enfin, la banque WIR, fondée en 1934 pendant la crise, fait circuler une monnaie complémentaire entre petites et moyennes entreprises, toujours utilisée aujourd’hui.</p>`)}
${retenir([
  "La monnaie est passée du métal précieux à la confiance dans les institutions ; la plus grande partie est créée par les banques quand elles accordent des crédits.",
  "La théorie quantitative lie l’excès de monnaie à l’inflation ; Keynes montre que la monnaie peut aussi influencer l’emploi.",
  "Depuis les années 1990, des banques centrales indépendantes visent la stabilité des prix ; leur rôle s’est élargi après 2008.",
  "Les débats actuels portent sur l’inflation, la création monétaire massive et les nouvelles formes de monnaie."
], `<a href="#c-fonctions-monnaie">fonctions de la monnaie</a>, <a href="#c-theorie-quantitative">théorie quantitative</a>, <a href="#c-preference-liquidite">préférence pour la liquidité</a>, <a href="#c-trappe-liquidite">trappe à liquidité</a>, <a href="#c-preteur-dernier-ressort">prêteur en dernier ressort</a>, et les portraits de <a href="#eco-keynes">Keynes</a> et <a href="#eco-friedman">Friedman</a>.`)}`);

  /* =====================================================================
     LES CRISES
     ===================================================================== */
  const figPhases = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>L’anatomie d’une crise financière selon Kindleberger (1978)</text>`;
    const P = [["Déplacement", "choc ou innovation", "nouveaux profits"], ["Essor", "crédit abondant", "prix en hausse"], ["Euphorie", "« cette fois, c’est", "différent »"], ["Retournement", "les initiés vendent", "les prix stagnent"], ["Panique", "ventes forcées", "faillites"]];
    const C = ["var(--note)", "var(--gold)", "var(--gold)", "var(--plum)", "var(--serial)"];
    P.forEach((p, i) => { s += box3(20 + i * 122, 46, 112, 72, p, C[i]); if (i < 4) s += arrow(133 + i * 122, 82, 141 + i * 122, 82); });
    s += `<text x="20" y="160" ${S}>Le même enchaînement se retrouve dans des crises très éloignées : les tulipes (1637), John Law (1720),</text>`;
    s += `<text x="20" y="178" ${S}>le krach de 1929, la bulle Internet (2000) ou les subprimes (2008). Le crédit en est presque toujours le moteur.</text>`;
    return s;
  })(), "L’historien Charles Kindleberger s’appuie sur Minsky pour décrire les grandes crises financières comme une suite de phases qui se répètent. Le schéma n’annonce pas la date d’une crise, mais aide à reconnaître une bulle en formation.", "Les cinq phases d’une crise financière");

  const figFisher = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>La spirale dette-déflation d’Irving Fisher (1933)</text>`;
    s += node(20, 50, 280, 62, "Des dettes trop élevées", "les emprunteurs vendent pour rembourser", "var(--serial)");
    s += node(340, 50, 280, 62, "Des ventes forcées", "les prix des biens et des actifs baissent", "var(--gold)");
    s += node(340, 164, 280, 62, "La déflation", "le poids réel des dettes augmente", "var(--plum)");
    s += node(20, 164, 280, 62, "Faillites en chaîne", "les banques prêtent moins", "var(--note)");
    s += arrow(302, 81, 338, 81) + arrow(480, 114, 480, 162) + arrow(338, 195, 302, 195) + arrow(160, 162, 160, 114);
    s += `<text x="320" y="142" text-anchor="middle" style="fill:var(--ink-soft); font:italic 600 12px Manrope, sans-serif">cercle vicieux</text>`;
    s += `<text x="20" y="256" ${S}>« Plus les débiteurs remboursent, plus ils doivent » : en essayant chacun de se désendetter,</text>`;
    s += `<text x="20" y="274" ${S}>ils font baisser les prix et rendent la dette de tous plus lourde.</text>`;
    return s;
  })(), "Ruiné par le krach de 1929, l’économiste américain Irving Fisher explique en 1933 que la combinaison d’un endettement excessif et d’une baisse des prix transforme une récession en dépression. Sa leçon a guidé les banques centrales en 2008 : empêcher à tout prix la déflation.", "Boucle de la déflation par la dette");

  set("crises", `
${essentiel([
  "Les économistes se divisent depuis deux siècles : les crises sont-elles des accidents venus de l’extérieur, des erreurs de politique, ou une propriété du capitalisme lui-même ?",
  "La Grande Dépression a fait naître plusieurs explications rivales : effondrement de la demande (Keynes), liquidation d’investissements erronés (Hayek), déflation par la dette (Fisher), erreur de la banque centrale (Friedman).",
  "La crise de 2008 a remis au premier plan l’instabilité financière décrite par Minsky et le rôle des banques, longtemps négligés par les modèles dominants."
])}
<h3>Une surproduction générale est-elle possible ?</h3>
<p>Pour <a href="#eco-say">Say</a> et <a href="#eco-ricardo">Ricardo</a>, la production crée les revenus qui permettent de l’acheter : il peut y avoir trop d’un bien particulier, jamais trop de tout (<a href="#c-loi-debouches">voir loi des débouchés</a>). Une crise ne peut être qu’un déséquilibre passager entre secteurs. <a href="#eco-malthus">Malthus</a> et le Genevois Jean-Charles Simonde de Sismondi, dans ses Nouveaux principes d’économie politique (1819), soutiennent au contraire que la demande peut durablement manquer, notamment lorsque les salaires sont trop faibles pour absorber la production (<a href="#controverses" data-debat="ricardo-malthus">voir leur débat</a>).</p>
<p>Sismondi, témoin des premières crises industrielles en Angleterre, en 1815 et 1825, est l’un des premiers à décrire les crises de surproduction, le chômage et la misère ouvrière qui les accompagnent. La position de Say domine pourtant le XIXe siècle, et les crises sont souvent expliquées par des causes extérieures : mauvaises récoltes, guerres, spéculation, et même, chez Jevons, les taches solaires qui influenceraient les récoltes.</p>
<h3>Les crises comme propriété du système</h3>
<p>Pour <a href="#eco-marx">Marx</a>, les crises ne sont pas des accidents : elles naissent de la course à l’accumulation, de la tendance à produire au-delà de ce que les salariés peuvent acheter, et de la baisse tendancielle du taux de profit. Elles sont aussi le moyen par lequel le système se purge, en détruisant des capitaux et en faisant baisser les salaires, avant de recommencer.</p>
<p>En 1862, le médecin français Clément Juglar montre, statistiques à l’appui, que les crises commerciales reviennent périodiquement, tous les sept à onze ans environ. D’autres économistes repèrent des cycles plus courts, de trois à quatre ans, liés aux stocks (Joseph Kitchin), ou beaucoup plus longs, d’environ cinquante ans (Nikolaï Kondratiev). <a href="#eco-schumpeter">Schumpeter</a> rattache ces cycles à l’arrivée des innovations en grappes, qui bouleversent les structures existantes : la crise fait partie de la <a href="#c-destruction-creatrice">destruction créatrice</a> (<a href="#c-cycles">voir les cycles</a>).</p>
<h3>1929 : quatre explications rivales</h3>
<p>La Grande Dépression oblige la discipline à se réinventer. Entre 1929 et 1933, la production industrielle américaine chute de près de moitié, et le chômage dépasse 20 %. <a href="#eco-keynes">Keynes</a> l’explique par l’effondrement de la <dfn data-g="demande-effective">demande effective</dfn> : quand les entrepreneurs n’anticipent plus de débouchés, ils cessent d’investir, et la baisse des salaires aggrave la situation au lieu de la corriger. Le <dfn data-g="multiplicateur">multiplicateur</dfn> amplifie la chute dans un sens, et pourrait amplifier la relance dans l’autre.</p>
<p><a href="#eco-hayek">Hayek</a> y voit au contraire la liquidation d’investissements erronés, financés par le crédit trop facile des années 1920. Vouloir l’empêcher, c’est prolonger le mal (<a href="#controverses" data-debat="keynes-hayek">voir leur débat</a>). Irving Fisher, ruiné par le krach, décrit en 1933 la spirale de la <dfn data-g="deflation">déflation</dfn> par la dette.</p>
${figFisher}
<p>Trente ans plus tard, <a href="#eco-friedman">Friedman</a> et Anna Schwartz accusent la Réserve fédérale d’avoir laissé fondre la masse monétaire et les faillites bancaires se multiplier (<a href="#crises" data-crisis="krach29">voir le krach</a>). En 2002, lors des quatre-vingt-dix ans de Friedman, Ben Bernanke, futur président de la Réserve fédérale, lui déclare : « Vous avez raison, nous l’avons fait. Nous sommes vraiment désolés. Grâce à vous, nous ne le referons pas. » Bernanke a lui-même montré en 1983 que les faillites bancaires avaient aggravé la crise en coupant le crédit aux entreprises et aux ménages.</p>
<h3>Les Trente Glorieuses et l’illusion de la fin des crises</h3>
<p>Après 1945, les économies occidentales connaissent trois décennies de croissance sans crise majeure. Les politiques keynésiennes, la régulation stricte des banques et le système de Bretton Woods semblent avoir dompté les cycles. Les chocs pétroliers des années 1970 et la stagflation mettent fin à cette confiance, mais pas à l’idée que les grandes crises appartiennent au passé.</p>
<p>Les modèles macroéconomiques dominants, de <a href="#eco-lucas">Lucas</a> aux modèles des « cycles réels » de Finn Kydland et Edward Prescott (1982), traitent les récessions comme des réponses rationnelles à des chocs extérieurs, technologiques notamment. Les banques et la finance y jouent un rôle mineur. En 2003, Lucas déclare que le problème central de la prévention des dépressions est « résolu, à toutes fins pratiques ».</p>
<h3>L’instabilité née de la stabilité</h3>
<p><a href="#eco-minsky">Hyman Minsky</a>, longtemps marginal, soutient au contraire que les périodes de calme poussent emprunteurs et prêteurs à prendre des risques croissants, jusqu’à rendre le système fragile : la stabilité est déstabilisante (<a href="#c-instabilite-financiere">voir instabilité financière</a>). L’historien Charles Kindleberger en tire en 1978 une anatomie des bulles financières, qui montre que les grandes crises se ressemblent.</p>
${figPhases}
<p>La crise de 2008 a donné à Minsky une célébrité posthume (<a href="#crises" data-crisis="subprimes">voir la crise des subprimes</a>). En novembre 2008, en visite à la London School of Economics, la reine Élisabeth II demande pourquoi personne ne l’avait vue venir. En 2009, <a href="#eco-krugman">Paul Krugman</a> publie dans le New York Times Magazine un article intitulé « Comment les économistes ont-ils pu se tromper à ce point ? ». La même année, Carmen Reinhart et Kenneth Rogoff publient Cette fois, c’est différent, une histoire de huit siècles de crises financières, qui montre que les crises bancaires sont fréquentes et suivies de récessions longues.</p>
<p>En 2022, le Nobel récompense Ben Bernanke, Douglas Diamond et Philip Dybvig pour leurs travaux sur le rôle des banques dans les crises : en transformant des dépôts disponibles à tout moment en prêts à long terme, les banques sont utiles, mais exposées aux paniques. L’instabilité financière est revenue au cœur de la macroéconomie, et avec elle la question de l’<a href="#c-alea-moral">aléa moral</a> : sauver les banques aujourd’hui ne les encourage-t-il pas à prendre trop de risques demain ?</p>
<h3>Peut-on prévenir les crises ?</h3>
<p>Depuis 2008, les économistes s’accordent sur un point : surveiller l’inflation et la croissance ne suffit pas, il faut aussi surveiller le crédit et l’endettement. Les accords internationaux dits de Bâle III, adoptés à partir de 2010, obligent les banques à détenir davantage de fonds propres et de liquidités, pour mieux résister aux pertes et aux retraits. Les autorités disposent aussi d’outils « macroprudentiels » : exiger des réserves supplémentaires quand le crédit croît trop vite, limiter la part d’un logement qu’on peut financer par l’emprunt, soumettre les banques à des tests de résistance.</p>
<p>Face à une crise déclarée, trois leçons des années 1930 sont désormais largement partagées. La banque centrale doit fournir des liquidités sans limite aux banques solides, comme le recommandait Bagehot. Elle doit éviter la déflation, comme l’enseigne Fisher. Et l’État doit laisser jouer les « stabilisateurs automatiques », baisse des recettes fiscales et hausse des allocations de chômage, qui soutiennent la demande sans décision nouvelle. Le débat reste vif, en revanche, sur l’ampleur des plans de relance, sur la durée des taux d’intérêt très bas, et sur le risque qu’en sauvant les banques et les marchés à chaque crise, on prépare la suivante.</p>
<p>Les économistes restent enfin modestes sur la prévision. Les crises financières naissent de comportements collectifs, de confiance et de panique, difficiles à anticiper. Comme le montrent Reinhart et Rogoff, chaque génération est tentée de croire que « cette fois, c’est différent ». L’histoire économique, en rappelant les crises passées, est l’un des meilleurs remèdes contre cette illusion.</p>
<h3>Les positions en présence</h3>
${table([
  ["Classiques", "Pas de surproduction générale ; les crises sont des déséquilibres passagers ou viennent de l’extérieur.", `<a href="#eco-say">Say</a>, <a href="#eco-ricardo">Ricardo</a>`],
  ["Marxisme", "Les crises sont inhérentes à l’accumulation capitaliste et reviennent nécessairement.", `<a href="#eco-marx">Marx</a>`],
  ["Keynésianisme", "La demande peut s’effondrer durablement ; l’État doit la soutenir.", `<a href="#eco-keynes">Keynes</a>, <a href="#eco-krugman">Krugman</a>`],
  ["École autrichienne", "Le crédit artificiel crée des investissements erronés ; la crise les corrige.", `<a href="#eco-mises">Mises</a>, <a href="#eco-hayek">Hayek</a>`],
  ["Monétarisme", "Les grandes crises viennent d’erreurs de la banque centrale.", `<a href="#eco-friedman">Friedman</a>, Bernanke`],
  ["Instabilité financière", "La stabilité engendre la prise de risque et l’endettement, puis la crise.", `<a href="#eco-minsky">Minsky</a>, Kindleberger`]
])}
${suisse("Des années 1990 à Credit Suisse", `
<p>La Suisse a connu sa propre crise immobilière au début des années 1990. Après une forte hausse des prix à la fin des années 1980, alimentée par le crédit, la remontée des taux d’intérêt provoque l’effondrement du marché. En 1991, la Spar- und Leihkasse de Thoune est la première banque fermée par les autorités depuis des décennies ; de nombreuses banques régionales disparaissent. L’économie stagne pendant plusieurs années et le chômage, presque inexistant auparavant, dépasse 5 % en 1997.</p>
<p>En octobre 2008, la Confédération et la BNS sauvent UBS, exposée aux subprimes américains : la Confédération apporte 6 milliards de francs et la BNS reprend des actifs toxiques dans un fonds spécial. La loi « too big to fail » de 2011 impose ensuite davantage de fonds propres aux grandes banques. Pourtant, en mars 2023, Credit Suisse, fragilisée par des scandales et des retraits massifs, doit être reprise par UBS en un week-end, avec des garanties de la Confédération et des liquidités massives de la BNS. Cet épisode relance le débat sur l’aléa moral et sur la taille de la seule grande banque suisse restante.</p>`)}
${retenir([
  "Les classiques jugeaient une surproduction générale impossible ; Malthus, Sismondi et Marx pensaient le contraire.",
  "La Grande Dépression a suscité plusieurs explications rivales, qui inspirent encore des politiques différentes face aux crises.",
  "Minsky et Kindleberger montrent que les crises financières naissent souvent de périodes de calme et d’endettement croissant.",
  "Depuis 2008, la finance et les banques sont revenues au cœur de la macroéconomie, avec la question des sauvetages et de l’aléa moral."
], `<a href="#c-cycles">cycles</a>, <a href="#c-demande-effective">demande effective</a>, <a href="#c-instabilite-financiere">instabilité financière</a>, <a href="#c-preteur-dernier-ressort">prêteur en dernier ressort</a>, <a href="#c-alea-moral">aléa moral</a>, la page <a href="#crises">Crises</a> et les portraits de <a href="#eco-minsky">Minsky</a> et <a href="#eco-hayek">Hayek</a>.`)}`);
})();
