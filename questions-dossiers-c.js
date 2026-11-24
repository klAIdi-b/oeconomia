/* Œconomia — grandes questions en dossier complet, lot C : la croissance, le chômage, la finance.
   Remplace le texte (html) des questions correspondantes de questions2.js ; titres, chapôs, auteurs et liens sont conservés. */
(function () {
  const { T, S, M, fig, arrow } = OEC.pfx;
  const set = (id, html) => { const q = OEC.questions.find((x) => x.id === id); if (q) q.html = html; };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;
  const cards = (items, w, h, y0) => items.map(([n, d, c], i) => {
    const x = 20 + i * (w + 10);
    let s = `<rect x="${x}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y0 + 28}" text-anchor="middle" style="fill:${c}; font:700 13px Manrope, sans-serif">${n}</text>`;
    const words = d.split(" "); let line = "", ly = y0 + 56; const max = Math.floor(w / 6.6);
    words.forEach((wd) => { if ((line + wd).length > max) { s += `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
    return s + `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
  }).join("");
  const table = (rows) => `<div class="tablewrap"><table class="positions"><thead><tr><th>Courant</th><th>Réponse</th><th>Auteurs</th></tr></thead><tbody>${rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table></div>`;
  const suisse = (titre, html) => `<div class="suisse"><span>Le cas suisse</span><h4>${titre}</h4>${html}</div>`;
  const essentiel = (pts) => `<div class="essentiel"><span>L’essentiel</span><ul>${pts.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;
  const retenir = (pts, liens) => `<div class="essentiel retenir"><span>À retenir</span><ul>${pts.map((p) => `<li>${p}</li>`).join("")}</ul><p class="plusloin"><b>Pour aller plus loin :</b> ${liens}</p></div>`;

  /* =====================================================================
     LA CROISSANCE
     ===================================================================== */
  const figCrosse = fig(280, (() => {
    const d = [[1000, 450], [1500, 565], [1600, 595], [1700, 615], [1820, 667], [1870, 873], [1913, 1526], [1950, 2111], [1973, 4091], [2003, 6516]];
    const X = (a) => 80 + (a - 1000) * 0.5, Y = (v) => 240 - v * 0.028;
    let s = `<text x="20" y="24" ${T}>Le revenu moyen par habitant dans le monde depuis l’an 1000</text>`;
    s += `<line x1="70" y1="40" x2="70" y2="240" style="stroke:var(--line); stroke-width:1.5"/><line x1="70" y1="240" x2="600" y2="240" style="stroke:var(--line); stroke-width:1.5"/>`;
    [2000, 4000, 6000].forEach((v) => { s += `<line x1="70" y1="${Y(v)}" x2="600" y2="${Y(v)}" style="stroke:var(--line); stroke-width:0.6; stroke-dasharray:3 4"/><text x="62" y="${Y(v) + 4}" text-anchor="end" ${M}>${v}</text>`; });
    [1000, 1200, 1400, 1600, 1800, 2000].forEach((a) => { s += `<text x="${X(a)}" y="258" text-anchor="middle" ${M}>${a}</text>`; });
    s += `<polyline points="${d.map(([a, v]) => `${X(a)},${Y(v).toFixed(1)}`).join(" ")}" style="fill:none; stroke:var(--gold); stroke-width:2.5"/>`;
    s += `<text x="120" y="166" style="fill:var(--ink-soft); font:700 12px Manrope, sans-serif">Huit siècles de quasi-stagnation : le piège malthusien</text>`;
    s += `<text x="${X(2003) - 10}" y="${Y(6516) + 4}" text-anchor="end" style="fill:var(--gold); font:700 12px Manrope, sans-serif">6 500 $ en 2003</text>`;
    s += `<text x="${X(1820) - 8}" y="${Y(667) - 24}" text-anchor="end" style="fill:var(--gold); font:700 12px Manrope, sans-serif">670 $ en 1820</text>`;
    return s;
  })(), "D’après Angus Maddison, en dollars internationaux de 1990, valeurs arrondies. Le revenu moyen progresse à peine pendant des siècles, puis décolle avec la révolution industrielle. Les historiens parlent de « crosse de hockey ». La forme de la courbe compte davantage que la précision des chiffres anciens, qui restent des estimations.", "Graphique du revenu par habitant mondial, de l’an 1000 à 2003");

  const figSolow = fig(280, (() => {
    const f = (x, a) => 240 - a * Math.sqrt((x - 80) / 480);
    const p = (a) => { const q = []; for (let x = 80; x <= 560; x += 10) q.push(`${x},${f(x, a).toFixed(1)}`); return q.join(" "); };
    let s = `<text x="20" y="24" ${T}>Le modèle de Solow (1956) : rendements décroissants et progrès technique</text>`;
    s += `<line x1="80" y1="40" x2="80" y2="240" style="stroke:var(--line); stroke-width:1.5"/><line x1="80" y1="240" x2="600" y2="240" style="stroke:var(--line); stroke-width:1.5"/>`;
    s += `<text x="88" y="48" ${M}>production par travailleur</text><text x="596" y="258" text-anchor="end" ${M}>capital par travailleur →</text>`;
    s += `<polyline points="${p(140)}" style="fill:none; stroke:var(--note); stroke-width:2.5"/><polyline points="${p(190)}" style="fill:none; stroke:var(--gold); stroke-width:2.5"/>`;
    s += arrow(480, 108, 480, 74, "var(--serial)");
    s += `<text x="380" y="68" text-anchor="end" style="fill:var(--gold); font:700 12px Manrope, sans-serif">Après un progrès technique</text>`;
    s += `<text x="400" y="176" style="fill:var(--note); font:700 12px Manrope, sans-serif">Technologie initiale</text>`;
    s += `<text x="400" y="194" ${S}>chaque machine en plus</text><text x="400" y="210" ${S}>rapporte un peu moins</text>`;
    return s;
  })(), "Accumuler du capital fait monter la production, mais de moins en moins : la courbe s’aplatit. À long terme, seul le progrès technique, qui déplace toute la courbe vers le haut, permet au revenu par habitant de continuer à croître. Les théories de la croissance endogène cherchent à expliquer d’où vient ce progrès.", "Deux courbes de production concaves, l’une au-dessus de l’autre");

  set("croissance", `
${essentiel([
  "Pendant des millénaires, le revenu moyen a très peu progressé : chaque gain de productivité se traduisait par une hausse de la population. Depuis la révolution industrielle, il a été multiplié par plus de dix.",
  "Les économistes ont d’abord attribué la croissance à la division du travail et à l’accumulation du capital. Le modèle de Solow (1956) montre que le capital seul ne suffit pas : à long terme, tout dépend du <b>progrès technique</b>.",
  "D’où vient ce progrès ? Les réponses mettent en avant l’innovation, le capital humain, les idées et les institutions. La question des limites écologiques de la croissance est désormais centrale."
])}
<h3>Le monde malthusien</h3>
<p>Avant la révolution industrielle, les gains de productivité se traduisaient surtout par une hausse de la population plutôt que du niveau de vie : c’est ce que les historiens appellent le « piège malthusien ». <a href="#eco-malthus">Malthus</a> décrit précisément ce mécanisme en 1798, au moment même où l’Angleterre commence à en sortir : quand les récoltes s’améliorent, les familles nourrissent plus d’enfants, la population augmente, et le revenu par tête retombe. Les estimations de l’historien Angus Maddison suggèrent que le revenu moyen mondial a progressé de moins de moitié entre l’an 1 et 1820, avant d’être multiplié par plus de dix au cours des deux siècles suivants.</p>
${figCrosse}
<p>Pourquoi ce décollage a-t-il eu lieu en Angleterre, à la fin du XVIIIe siècle ? Les historiens avancent de nombreuses explications : le charbon abondant et accessible, des salaires élevés qui rendaient les machines rentables, selon Robert Allen ; l’accès aux ressources des colonies et du commerce atlantique, selon Kenneth Pomeranz ; des institutions politiques favorables aux entrepreneurs après 1688 ; ou une culture de l’innovation et du savoir utile, selon Joel Mokyr. Le débat sur cette « grande divergence » entre l’Europe et l’Asie reste ouvert.</p>
<h3>Division du travail, capital et rendements décroissants</h3>
<p>Pour <a href="#eco-smith">Smith</a>, la croissance vient de l’approfondissement de la <dfn data-g="division-travail">division du travail</dfn>, permis par l’extension des marchés et l’accumulation du capital. Dans sa célèbre manufacture d’épingles, dix ouvriers spécialisés produisent quarante-huit mille épingles par jour, alors qu’un ouvrier seul en ferait à peine vingt.</p>
<p><a href="#eco-ricardo">Ricardo</a> est plus pessimiste : à mesure que la population augmente, il faut cultiver des terres moins fertiles ; la <dfn data-g="rente">rente</dfn> foncière absorbe une part croissante du produit, comprime les profits et conduit à l’état stationnaire. <a href="#eco-marx">Marx</a> voit dans l’accumulation du capital le moteur du système, mais aussi la source de sa crise, par la baisse tendancielle du taux de profit. <a href="#eco-mill">Mill</a>, lui, accueille l’état stationnaire avec sérénité : une fois les besoins essentiels satisfaits, une société pourrait se consacrer à l’amélioration de la vie plutôt qu’à l’accumulation.</p>
<h3>Le modèle de Solow</h3>
<p>En 1956, Robert Solow, collègue de <a href="#eco-samuelson">Samuelson</a> au MIT, propose le modèle de croissance qui servira de référence. Accumuler du capital augmente la production, mais avec des rendements décroissants : chaque machine supplémentaire rapporte un peu moins que la précédente. À long terme, l’accumulation seule ne peut entretenir la croissance du revenu par habitant.</p>
${figSolow}
<p>En 1957, Solow mesure ce que l’accumulation du capital et du travail explique dans la croissance américaine de 1909 à 1949. Le reste, qu’il attribue au « progrès technique », représente l’essentiel de la hausse de la production par heure de travail. Moses Abramovitz appelle ce résidu « la mesure de notre ignorance ». Le modèle a une autre prédiction : les pays pauvres, qui ont peu de capital, devraient croître plus vite que les pays riches et les rattraper. Cette « convergence » ne s’observe que parmi des pays aux institutions semblables.</p>
<h3>L’innovation au cœur de la croissance</h3>
<p><a href="#eco-schumpeter">Schumpeter</a> avait placé l’innovation et l’entrepreneur au centre de la dynamique capitaliste dès 1911 : de nouveaux produits, procédés et organisations remplacent les anciens, dans un processus de <dfn data-g="destruction-creatrice">destruction créatrice</dfn>. À partir de la fin des années 1980, les théories de la croissance endogène l’intègrent dans des modèles formels. <a href="#eco-lucas">Lucas</a> insiste sur le capital humain, c’est-à-dire les compétences accumulées par l’éducation. Paul Romer (Nobel 2018) souligne le rôle des idées, qui ne s’usent pas quand on les partage : une recette ou un logiciel peuvent être utilisés par tous en même temps.</p>
<p>Philippe Aghion et Peter Howitt modélisent la destruction créatrice : chaque innovation rend la précédente obsolète, ce qui stimule la croissance mais crée aussi des perdants. Aghion et Howitt reçoivent en 2025 le Nobel avec l’historien Joel Mokyr, qui a montré comment la culture scientifique et technique de l’Europe des Lumières a rendu possible une innovation continue. Ces travaux soulignent l’importance de la concurrence, de la recherche, de l’éducation et de la protection, mais pas excessive, de la propriété intellectuelle.</p>
<h3>Pourquoi tous les pays ne croissent-ils pas ?</h3>
<p>Si la technologie circule, pourquoi les écarts de revenu entre pays restent-ils si grands ? Les explications par la géographie (climat, maladies, accès à la mer), défendues par Jeffrey Sachs ou Jared Diamond, s’opposent à celles par les institutions, défendues par Douglass North puis <a href="#eco-acemoglu">Daron Acemoglu</a> et James Robinson : là où les <a href="#c-institutions-inclusives">institutions</a> protègent la propriété du plus grand nombre et laissent jouer la concurrence, l’innovation prospère (<a href="#controverses" data-debat="acemoglu-schumpeter">voir le débat</a>).</p>
<p>Les « miracles » asiatiques, du Japon à la Corée du Sud puis à la Chine, ont alimenté un autre débat, sur le rôle de l’État dans le rattrapage industriel. Entre 1960 et 2020, le revenu par habitant de la Corée du Sud a été multiplié par plus de vingt. La Chine, depuis les réformes de 1978, a sorti des centaines de millions de personnes de l’extrême pauvreté. Ces réussites associent une forte épargne, l’éducation de masse, l’ouverture aux exportations et une intervention publique active.</p>
<h3>Mesurer la croissance</h3>
<p>La croissance se mesure par la hausse du produit intérieur brut (<dfn data-g="pib">PIB</dfn>), la valeur de tout ce qui est produit dans un pays en un an, corrigée de la hausse des prix. Simon Kuznets, qui a contribué à construire les comptes nationaux américains dans les années 1930, avertissait déjà que le bien-être d’une nation ne peut guère se déduire de la mesure de son revenu. Le PIB ignore le <dfn data-g=travail-non-remunere>travail domestique</dfn>, les loisirs, la qualité de l’environnement et la répartition des revenus. En 2009, le rapport de Joseph Stiglitz, Amartya <a href="#eco-sen">Sen</a> et Jean-Paul Fitoussi recommande de le compléter par des indicateurs de bien-être et de soutenabilité.</p>
<h3>La croissance en question</h3>
<p>Depuis les années 1970, la croissance des pays riches ralentit. Robert Gordon soutient que les grandes inventions du passé, électricité, moteur à combustion, eau courante, avaient un impact sans équivalent ; Larry <a href="#eco-summers">Summers</a> évoque une <dfn data-g="stagnation-seculaire">stagnation séculaire</dfn>. D’autres attendent de l’intelligence artificielle une nouvelle vague de gains de productivité, que les premiers chiffres ne montrent pas encore clairement.</p>
<p>En parallèle, le rapport du Club de Rome, Les Limites à la croissance (1972), puis le changement climatique ont relancé une question que Mill posait déjà : une croissance indéfinie est-elle possible, et souhaitable, sur une planète finie ? Les partisans de la « croissance verte » pensent qu’on peut découpler la production des émissions de gaz à effet de serre grâce aux énergies renouvelables et à l’efficacité. Les partisans de la « décroissance » ou de la « post-croissance » jugent ce découplage trop lent et appellent à réduire la production dans les pays riches. William Nordhaus, Nobel 2018, propose une voie intermédiaire : intégrer le coût du climat dans les prix, par une taxe carbone.</p>
<h3>Les positions en présence</h3>
${table([
  ["Économie classique", "La croissance vient de la division du travail et du capital, mais menace de buter sur l’état stationnaire.", `<a href="#eco-smith">Smith</a>, <a href="#eco-ricardo">Ricardo</a>, <a href="#eco-malthus">Malthus</a>`],
  ["Modèle néoclassique", "Le capital a des rendements décroissants ; à long terme, seul le progrès technique compte.", "Solow"],
  ["Croissance endogène", "Le progrès technique dépend de l’éducation, des idées, de la recherche et de la concurrence.", `<a href="#eco-schumpeter">Schumpeter</a>, <a href="#eco-lucas">Lucas</a>, Romer, Aghion`],
  ["Institutionnalisme", "Les institutions inclusives expliquent pourquoi certains pays croissent et d’autres non.", `North, <a href="#eco-acemoglu">Acemoglu</a>`],
  ["Critiques écologiques", "Une croissance indéfinie est incompatible avec les limites de la planète.", `<a href="#eco-mill">Mill</a>, Club de Rome`]
])}
${suisse("Un pays riche sans ressources naturelles", `
<p>Au début du XIXe siècle, la Suisse est un pays pauvre et montagneux, d’où beaucoup émigrent. Sans charbon ni accès à la mer, elle s’industrialise pourtant tôt, grâce au textile, à l’horlogerie, puis aux machines, à la chimie et à la pharmacie, souvent nées de l’industrie textile bâloise. Le tunnel du Gothard, ouvert en 1882, et l’énergie hydraulique, puis hydroélectrique, compensent l’absence de charbon. Elle est aujourd’hui l’un des pays au revenu par habitant le plus élevé du monde.</p>
<p>Les théories de la croissance éclairent ce succès : un capital humain élevé, avec la formation professionnelle duale et des écoles polytechniques comme l’EPFZ (1855) et l’EPFL ; une forte capacité d’innovation, la Suisse figurant chaque année en tête de l’indice mondial de l’innovation de l’Organisation mondiale de la propriété intellectuelle à Genève ; des institutions stables ; et l’ouverture aux échanges et aux travailleurs étrangers. Mais sa croissance du PIB par habitant est modeste depuis les années 1990, une part importante de la croissance totale venant de l’augmentation de la population, ce qui alimente un débat politique récurrent sur l’immigration et la densité.</p>`)}
${retenir([
  "Pendant des siècles, le niveau de vie a stagné ; il a décollé avec la révolution industrielle.",
  "Le capital seul ne suffit pas : à long terme, la croissance dépend du progrès technique.",
  "Ce progrès naît de l’innovation, de l’éducation, des idées et d’institutions favorables.",
  "Le ralentissement de la croissance et les limites écologiques posent la question de son avenir et de sa mesure."
], `<a href="#c-destruction-creatrice">destruction créatrice</a>, <a href="#c-division-travail">division du travail</a>, <a href="#c-pib">PIB</a>, <a href="#c-institutions-inclusives">institutions inclusives</a>, <a href="#c-stagnation-seculaire">stagnation séculaire</a>, et les portraits de <a href="#eco-schumpeter">Schumpeter</a>, <a href="#eco-malthus">Malthus</a> et <a href="#eco-acemoglu">Acemoglu</a>.`)}`);

  /* =====================================================================
     LE CHÔMAGE
     ===================================================================== */
  const figTypes = fig(280, (() => {
    let s = `<text x="20" y="24" ${T}>Quatre formes de chômage, quatre remèdes</text>`;
    s += cards([
      ["Frictionnel", "Le temps de trouver un emploi qui convient. Remède : information, placement efficace.", "var(--note)"],
      ["Structurel", "Les compétences ou les régions ne correspondent pas aux emplois. Remède : formation, mobilité.", "var(--plum)"],
      ["Keynésien", "Les entreprises ne vendent pas assez pour embaucher. Remède : relance de la demande.", "var(--gold)"],
      ["Classique", "Le coût du travail dépasse ce qu’il rapporte. Remède : baisse du coût, productivité.", "var(--serial)"]
    ], 145, 210, 44);
    return s;
  })(), "Ces formes de chômage coexistent. Le désaccord entre économistes porte sur leur poids respectif à un moment donné : face à un même taux de chômage, un keynésien verra d’abord un manque de demande, un classique un coût du travail trop élevé, un spécialiste du marché du travail des difficultés d’appariement.", "Quatre cartes : chômage frictionnel, structurel, keynésien et classique");

  const figFlux = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Le marché du travail en mouvement permanent</text>`;
    s += node(20, 90, 170, 64, "Emploi", "salariés, indépendants", "var(--note)");
    s += node(235, 90, 170, 64, "Chômage", "sans emploi, cherche", "var(--serial)");
    s += node(450, 90, 170, 64, "Inactivité", "études, retraite, foyer", "var(--line)");
    s += arrow(192, 108, 233, 108) + arrow(233, 136, 192, 136) + arrow(407, 108, 448, 108) + arrow(448, 136, 407, 136);
    s += `<text x="212" y="76" text-anchor="middle" ${S}>licenciements</text><text x="212" y="176" text-anchor="middle" ${S}>embauches</text>`;
    s += `<text x="428" y="76" text-anchor="middle" ${S}>découragement</text><text x="428" y="176" text-anchor="middle" ${S}>reprise de recherche</text>`;
    s += `<text x="20" y="218" ${S}>Chaque mois, une part importante des chômeurs retrouve un emploi, tandis que d’autres le perdent.</text>`;
    s += `<text x="20" y="236" ${S}>Le taux de chômage n’est que le solde de ces flux, beaucoup plus importants que sa variation.</text>`;
    return s;
  })(), "D’après l’approche par les flux et la recherche d’emploi de Diamond, Mortensen et Pissarides (Nobel 2010). Pour comprendre le chômage, il faut regarder non seulement combien de personnes sont au chômage, mais aussi combien y entrent et en sortent, et pendant combien de temps elles y restent.", "Schéma des flux entre emploi, chômage et inactivité");

  set("chomage", `
${essentiel([
  "Est chômeur, selon le Bureau international du travail, celui qui n’a pas d’emploi, en cherche activement un et est disponible pour travailler. Le chômage n’est pas seulement un manque de revenu : il touche la santé, la confiance et les liens sociaux.",
  "Les économistes en proposent plusieurs explications : un coût du travail trop élevé (classiques), un manque de demande (Keynes), des institutions et des frictions qui fixent un chômage « naturel » (Friedman, Phelps), ou le temps nécessaire pour trouver un emploi (théorie de la recherche).",
  "Le débat sur le salaire minimum montre comment les méthodes empiriques modernes ont fait évoluer des convictions anciennes."
])}
<h3>Une invention du XIXe siècle</h3>
<p>Le mot « chômage » désigne d’abord les jours où l’on ne travaille pas, fêtes ou intempéries. Le chômage au sens moderne, la situation de salariés qui cherchent un emploi sans en trouver, apparaît avec l’industrialisation et le salariat de masse. Dans les campagnes, le sous-emploi existait, mais il se confondait avec la pauvreté. En 1909, le Britannique William Beveridge publie Le Chômage, un problème de l’industrie, et propose des bourses du travail pour mettre en relation chômeurs et employeurs. Les premières assurances chômage obligatoires apparaissent au Royaume-Uni en 1911.</p>
<p><a href="#eco-marx">Marx</a> avait proposé une lecture plus sombre : l’« armée industrielle de réserve » des chômeurs n’est pas un accident, elle discipline les salariés et pèse sur les salaires. Elle grossit dans les crises et se résorbe dans les phases d’expansion, mais ne disparaît jamais.</p>
<h3>Le chômage classique : un prix trop élevé</h3>
<p>Pour les économistes classiques et néoclassiques, le chômage durable signale un salaire trop élevé : syndicats, salaire minimum ou règles empêchent le prix du travail de baisser jusqu’à l’équilibre entre l’offre et la demande. Arthur Pigou défend encore cette thèse en 1933, en pleine Dépression. Le remède est alors la flexibilité salariale. Cette analyse garde une part de vérité pour certains groupes, comme les jeunes peu qualifiés dans les pays où le salaire minimum est élevé par rapport au salaire médian, ou lorsque le coût du travail augmente beaucoup plus vite que la productivité.</p>
<h3>Le chômage keynésien : un manque de débouchés</h3>
<p><a href="#eco-keynes">Keynes</a> rompt avec cette vision. Les entreprises n’embauchent pas parce qu’elles ne vendent pas : le chômage est « involontaire » et dû à une <dfn data-g="demande-effective">demande effective</dfn> insuffisante. Baisser les salaires ne résout rien, car c’est aussi baisser les revenus et donc la demande. Il faut relancer la dépense, publique si nécessaire, et le <dfn data-g="multiplicateur">multiplicateur</dfn> amplifie l’effet (<a href="#labo" data-lab="1">le simuler</a>). Le succès des politiques de plein emploi après 1945, où le chômage descend sous 3 % dans de nombreux pays occidentaux, semble lui donner raison.</p>
${figTypes}
<h3>Le chômage naturel et les institutions</h3>
<p>À la fin des années 1950, la courbe de Phillips montre qu’un chômage bas s’accompagne d’une inflation élevée, et inversement. <a href="#eco-friedman">Friedman</a> et Edmund Phelps répondent à la fin des années 1960 que cet arbitrage n’est que temporaire. Il existe un <dfn data-g="taux-naturel">taux de chômage naturel</dfn>, déterminé par les structures du marché du travail. On ne peut le réduire durablement par la relance sans accélérer l’inflation. La stagflation des années 1970, chômage et inflation à la fois, leur donne raison (<a href="#c-courbe-phillips">voir courbe de Phillips</a>).</p>
<p>Les théories du chômage d’équilibre des années 1980 et 1990, notamment celles de Richard Layard, Stephen Nickell et Richard Jackman, expliquent pourquoi il est plus élevé en Europe qu’aux États-Unis : pouvoir de négociation des salariés en place, indemnisation longue, protection de l’emploi qui freine les licenciements mais aussi les embauches. <a href="#eco-summers">Summers</a> et Olivier Blanchard montrent qu’un chômage durable peut lui-même s’autoentretenir par <dfn data-g="hysterese">hystérèse</dfn> : les chômeurs de longue durée perdent leurs compétences et leurs réseaux, et pèsent moins sur les salaires.</p>
<p>D’autres théories expliquent pourquoi les salaires ne baissent pas même en présence de chômage. Selon la théorie du « salaire d’efficience », les entreprises paient volontairement plus que le salaire du marché pour motiver leurs employés, les fidéliser et attirer les meilleurs. Henry Ford double ainsi le salaire de ses ouvriers en 1914, à cinq dollars par jour, pour réduire un absentéisme et une rotation du personnel considérables.</p>
<h3>Chercher un emploi prend du temps</h3>
<p>Peter Diamond, Dale Mortensen et Christopher Pissarides (Nobel 2010) analysent le chômage comme le résultat d’un processus de recherche : il faut du temps pour que les chômeurs et les postes vacants se trouvent. Même dans une économie en bonne santé, des emplois disparaissent et apparaissent chaque jour par millions. Cette approche explique la coexistence de chômage et d’offres d’emploi non pourvues, et éclaire le rôle de l’assurance chômage et des agences de placement.</p>
${figFlux}
<p>L’assurance chômage pose ainsi un dilemme. Elle protège les revenus et permet de chercher un emploi qui correspond à ses compétences, plutôt que d’accepter le premier venu. Mais une indemnisation très longue peut ralentir le retour à l’emploi. Le modèle danois de « flexicurité », qui combine licenciements faciles, indemnisation généreuse et accompagnement intensif, a été présenté comme un compromis efficace.</p>
<h3>Le salaire minimum, un débat exemplaire</h3>
<p>La question du salaire minimum illustre ces divergences. Le modèle concurrentiel prédit qu’il détruit des emplois. <a href="#eco-robinson">Joan Robinson</a> avait montré en 1933 qu’en situation de monopsone, quand un employeur domine le marché du travail local, il peut au contraire en créer, en obligeant l’employeur à payer davantage sans l’inciter à embaucher moins. En 1994, David Card et Alan Krueger comparent les fast-foods du New Jersey, où le salaire minimum augmente, et de Pennsylvanie, où il reste stable, et ne trouvent pas d’effet négatif sur l’emploi.</p>
<p>Card reçoit le Nobel en 2021 pour cette « révolution de la crédibilité » des méthodes empiriques, dont les essais randomisés d’<a href="#eco-duflo">Esther Duflo</a> sont une autre branche. Le consensus actuel est que des hausses modérées ont peu d’effet sur l’emploi ; l’effet de hausses fortes reste discuté (<a href="#controverses">voir la table ronde</a>).</p>
<h3>Les positions en présence</h3>
${table([
  ["Classiques et néoclassiques", "Le chômage durable vient d’un coût du travail trop élevé ou de rigidités.", "Pigou"],
  ["Keynésianisme", "Le chômage vient d’une demande insuffisante ; il faut la relancer.", `<a href="#eco-keynes">Keynes</a>`],
  ["Marxisme", "Le chômage est une armée de réserve qui pèse sur les salaires.", `<a href="#eco-marx">Marx</a>`],
  ["Chômage naturel", "Les institutions du marché du travail fixent un chômage d’équilibre que la relance ne peut réduire.", `<a href="#eco-friedman">Friedman</a>, Phelps, Layard`],
  ["Théorie de la recherche", "Il faut du temps pour que chômeurs et emplois se rencontrent.", "Diamond, Mortensen, Pissarides"],
  ["Économie empirique", "Il faut mesurer l’effet réel de chaque politique, comme le salaire minimum.", `Card, Krueger, <a href="#eco-duflo">Duflo</a>`]
])}
${suisse("Un chômage parmi les plus bas d’Europe", `
<p>La Suisse a longtemps presque ignoré le chômage : jusqu’à la fin des années 1980, il touchait moins de 1 % de la population active, en partie parce que de nombreux travailleurs étrangers, au statut précaire, devaient quitter le pays lorsqu’ils perdaient leur emploi. L’assurance chômage n’est devenue obligatoire qu’en 1977, et sa loi actuelle date de 1982. La crise des années 1990 fait monter le chômage au-delà de 5 % en 1997, un choc pour le pays.</p>
<p>Depuis, il reste généralement bas, entre 2 % et 3,5 % selon les chiffres du Secrétariat d’État à l’économie, qui comptent les personnes inscrites dans les offices régionaux de placement. Selon la définition internationale, qui inclut les non-inscrits, il est un peu plus élevé, autour de 4 % à 5 %. Plusieurs facteurs l’expliquent : la formation professionnelle duale, qui facilite l’entrée des jeunes sur le marché du travail ; un marché du travail assez flexible ; et la réduction de l’horaire de travail, qui permet aux entreprises de réduire temporairement le temps de travail plutôt que de licencier, et qui a protégé des centaines de milliers d’emplois pendant la pandémie de 2020.</p>`)}
${retenir([
  "Le chômage est apparu comme problème avec le salariat de masse ; on le mesure selon la définition du Bureau international du travail.",
  "Plusieurs explications coexistent : coût du travail, manque de demande, institutions, temps de recherche.",
  "Face à un même chômage, les remèdes proposés dépendent du diagnostic : relance, flexibilité, formation ou placement.",
  "Les études empiriques ont nuancé des certitudes anciennes, notamment sur le salaire minimum."
], `<a href="#c-demande-effective">demande effective</a>, <a href="#c-multiplicateur">multiplicateur</a>, <a href="#c-taux-naturel">taux de chômage naturel</a>, <a href="#c-courbe-phillips">courbe de Phillips</a>, <a href="#c-hysterese">hystérèse</a>, et les portraits de <a href="#eco-keynes">Keynes</a>, <a href="#eco-friedman">Friedman</a> et <a href="#eco-robinson">Robinson</a>.`)}`);

  /* =====================================================================
     LA FINANCE
     ===================================================================== */
  const figInterm = fig(280, (() => {
    let s = `<text x="20" y="24" ${T}>La finance relie ceux qui épargnent et ceux qui investissent</text>`;
    s += node(20, 100, 170, 64, "Épargnants", "ménages, caisses de pension", "var(--note)");
    s += node(235, 50, 170, 64, "Banques", "dépôts transformés en crédits", "var(--gold)");
    s += node(235, 150, 170, 64, "Marchés financiers", "actions et obligations", "var(--plum)");
    s += node(450, 100, 170, 64, "Emprunteurs", "entreprises, État, ménages", "var(--serial)");
    s += arrow(192, 120, 233, 90) + arrow(192, 146, 233, 176) + arrow(407, 90, 448, 120) + arrow(407, 176, 448, 146);
    s += `<text x="20" y="248" ${S}>Ses fonctions : transformer l’épargne en investissement, partager les risques, fournir des moyens</text>`;
    s += `<text x="20" y="266" ${S}>de paiement, et produire de l’information sur la valeur des entreprises et des projets.</text>`;
    return s;
  })(), "La finance indirecte passe par les banques, qui prêtent et portent le risque ; la finance directe passe par les marchés, où les entreprises vendent des actions ou des obligations aux investisseurs. En Europe continentale, les banques dominent ; aux États-Unis, les marchés jouent un rôle plus important.", "Schéma des épargnants, des banques, des marchés et des emprunteurs");

  const figVisions = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Trois visions des marchés financiers</text>`;
    s += cards([
      ["Marchés efficients", "Les prix reflètent toute l’information disponible. On ne peut battre le marché durablement que par chance.", "var(--note)"],
      ["Finance comportementale", "Les biais psychologiques et le mimétisme écartent les prix de la valeur réelle et créent des bulles.", "var(--gold)"],
      ["Instabilité financière", "Les périodes de calme encouragent l’endettement et préparent les crises : la finance est instable par nature.", "var(--serial)"]
    ], 190, 200, 44);
    return s;
  })(), "Eugene Fama, Robert Shiller et Hyman Minsky représentent ces trois visions. Elles ne s’excluent pas entièrement : il est très difficile de prévoir les prix à court terme, ce qui donne raison à Fama, mais les prix peuvent s’écarter longtemps de la valeur des entreprises, ce qui donne raison à Shiller.", "Trois cartes : marchés efficients, finance comportementale, instabilité financière");

  set("finance", `
${essentiel([
  "La finance remplit des fonctions indispensables : elle transforme l’épargne en investissement, permet de partager les risques et finance l’innovation. Les historiens montrent que la révolution financière a précédé la révolution industrielle.",
  "Mais elle est sujette aux bulles, aux paniques et aux crises. Le débat oppose ceux qui jugent les marchés efficients (Fama) et ceux qui insistent sur les biais et l’instabilité (Keynes, Shiller, Minsky).",
  "Depuis 2008, la question centrale est celle de la régulation : comment rendre les banques plus solides sans étouffer le financement de l’économie, et sans encourager les prises de risque par la promesse de sauvetages ?"
])}
<h3>Une fonction indispensable</h3>
<p>Un ménage épargne pour sa retraite, une entreprise a besoin de fonds pour construire une usine qui ne rapportera que dans dix ans. La finance met en relation ces besoins : les banques transforment des dépôts à court terme en crédits à long terme, les marchés d’actions et d’obligations permettent de partager les risques et d’en changer de mains. Elle produit aussi de l’information : les prix des actions et les taux d’intérêt signalent quels projets semblent prometteurs.</p>
${figInterm}
<p><a href="#eco-schumpeter">Schumpeter</a> voyait dans le crédit bancaire le levier qui permet à l’entrepreneur d’innover avant que l’épargne n’existe. Les historiens de l’économie montrent que la révolution financière néerlandaise puis anglaise a précédé et facilité la révolution industrielle : la Bourse d’Amsterdam, la Compagnie néerlandaise des Indes orientales, première grande société par actions en 1602, puis la Banque d’Angleterre en 1694 et un marché de la dette publique fiable. Les travaux de Ross Levine et d’autres montrent que les pays dont le système financier est plus développé croissent en moyenne plus vite, jusqu’à un certain point : au-delà, une finance trop grande peut freiner la croissance en attirant les talents et en multipliant les crises.</p>
<h3>Le concours de beauté</h3>
<p><a href="#eco-keynes">Keynes</a>, lui-même spéculateur averti, qui gère la fortune du King’s College de Cambridge, se méfie de la Bourse. Au chapitre 12 de la Théorie générale, il la compare à un concours de beauté organisé par un journal, où il faut choisir non le visage le plus joli, mais celui que les autres participants trouveront le plus joli. L’investisseur professionnel cherche moins à estimer la valeur à long terme d’une entreprise qu’à deviner l’opinion moyenne du marché sur ce qu’en pensera l’opinion moyenne. « Quand le développement du capital d’un pays devient un sous-produit des activités d’un casino, le travail risque d’être mal fait. »</p>
<p>Keynes insiste sur l’incertitude radicale : on ne peut pas calculer la probabilité d’événements lointains et uniques. Les décisions d’investissement reposent alors sur des conventions et sur les « esprits animaux », l’optimisme spontané qui pousse à agir. Quand la confiance s’effondre, l’investissement s’arrête.</p>
<h3>L’hypothèse des marchés efficients</h3>
<p>À l’opposé, Eugene Fama formule dans les années 1960 l’hypothèse des marchés efficients : les prix des actifs reflètent à chaque instant toute l’information disponible. Il est donc impossible de battre durablement le marché, sinon par chance. <a href="#eco-samuelson">Samuelson</a> en avait donné une version théorique en 1965. Dès 1900, le Français Louis Bachelier avait montré que les cours de la Bourse de Paris évoluaient comme une « marche au hasard ».</p>
<p>L’hypothèse a une conséquence pratique majeure, la gestion indicielle, qui consiste à acheter tout le marché à bas coût. John Bogle lance en 1976 le premier fonds indiciel grand public. L’hypothèse a reçu un soutien empirique important : la plupart des gestionnaires actifs font moins bien que leur indice sur longue période, une fois leurs frais déduits. <a href="#eco-friedman">Friedman</a> ajoutait que la spéculation est stabilisante : les spéculateurs qui achètent cher et vendent bon marché perdent de l’argent et disparaissent.</p>
<h3>Bulles, biais et instabilité</h3>
<p>Robert Shiller montre pourtant dès 1981 que les cours des actions varient bien plus que les dividendes qu’ils sont censés anticiper, et avertit en 2000 puis en 2005 contre les bulles boursière et immobilière, peu avant qu’elles n’éclatent. En 2013, Fama et Shiller partagent le Nobel, avec Lars Peter Hansen : le comité reconnaît que les prix sont difficiles à prévoir à court terme, mais en partie prévisibles à long terme.</p>
${figVisions}
<p>Les travaux de <a href="#eco-kahneman">Kahneman</a> sur les biais de jugement, excès de confiance, mimétisme, <dfn data-g="aversion-pertes">aversion aux pertes</dfn>, fondent la finance comportementale. Andrei Shleifer montre que les investisseurs rationnels ne peuvent pas toujours corriger les erreurs des autres, car parier contre une bulle est risqué : comme le dit une formule attribuée à Keynes, le marché peut rester irrationnel plus longtemps que vous ne pouvez rester solvable. <a href="#eco-minsky">Minsky</a> va plus loin : l’<dfn data-g="instabilite-financiere">instabilité financière</dfn> est endogène, et les périodes de calme préparent les crises (<a href="#crises" data-crisis="subprimes">voir la crise des subprimes</a>). <a href="#eco-galbraith">Galbraith</a>, dans sa Brève histoire de l’euphorie financière (1990), souligne que chaque génération oublie les leçons de la précédente.</p>
<h3>Réguler sans étouffer</h3>
<p>Après 1929, les États-Unis séparent banques de dépôt et banques d’investissement (loi Glass-Steagall, 1933) et créent l’assurance des dépôts, qui met fin aux paniques bancaires de détail. La déréglementation des années 1980 et 1990, qui abroge Glass-Steagall en 1999, accompagne l’essor de la finance et de ses crises : la part du secteur financier dans l’économie américaine double entre 1950 et 2007.</p>
<p>Après 2008, les accords de Bâle III renforcent les fonds propres des banques, et les banques centrales se dotent d’instruments macroprudentiels pour freiner le crédit en période d’euphorie. Le débat porte sur l’équilibre entre stabilité et financement de l’économie, sur l’<dfn data-g="alea-moral">aléa moral</dfn> des banques trop grandes pour faire faillite, et sur le rôle du <dfn data-g="preteur-dernier-ressort">prêteur en dernier ressort</dfn>, qui a été au cœur du sauvetage de Credit Suisse en 2023. Des économistes comme Anat Admati et Martin Hellwig plaident pour des fonds propres beaucoup plus élevés, de 20 à 30 % du bilan, contre quelques pour cent avant 2008.</p>
<p>De nouvelles questions apparaissent : le poids croissant de la « finance de l’ombre », fonds et institutions non bancaires moins régulés ; les cryptoactifs ; et le rôle de la finance dans la transition climatique, que certains veulent orienter par des règles de « finance durable ».</p>
<h3>Les positions en présence</h3>
${table([
  ["Finance et croissance", "La finance est indispensable pour transformer l’épargne en investissement et financer l’innovation.", `<a href="#eco-schumpeter">Schumpeter</a>, Levine`],
  ["Marchés efficients", "Les prix reflètent l’information ; la spéculation est plutôt stabilisante.", `Fama, <a href="#eco-samuelson">Samuelson</a>, <a href="#eco-friedman">Friedman</a>`],
  ["Keynésianisme", "Les marchés reposent sur des conventions fragiles ; la Bourse peut devenir un casino.", `<a href="#eco-keynes">Keynes</a>`],
  ["Finance comportementale", "Les biais et le mimétisme créent des bulles durables.", `Shiller, <a href="#eco-kahneman">Kahneman</a>, Shleifer`],
  ["Instabilité financière", "La stabilité engendre l’endettement et la crise ; il faut une régulation forte.", `<a href="#eco-minsky">Minsky</a>, <a href="#eco-galbraith">Galbraith</a>`]
])}
${suisse("Une place financière au cœur de l’économie", `
<p>La finance représente environ un dixième de la valeur ajoutée de la Suisse. Le pays est la première place mondiale de la gestion de fortune transfrontalière, c’est-à-dire de fortunes placées en Suisse par des clients étrangers. Ce succès s’est longtemps appuyé sur le secret bancaire, inscrit dans la loi en 1934, qui a aussi permis l’évasion fiscale à grande échelle. Sous la pression des États-Unis et de l’Union européenne, la Suisse y a renoncé pour les clients étrangers, en adoptant en 2017 l’échange automatique de renseignements fiscaux.</p>
<p>Le pays a aussi connu les dérives de la finance. La crise d’UBS en 2008, puis la disparition de Credit Suisse en 2023, ont montré le risque que représente une banque trop grande par rapport à l’économie nationale : le bilan d’UBS après la reprise dépasse le double du PIB suisse. Le Conseil fédéral a proposé de durcir les exigences de fonds propres, ce que la banque conteste. Par ailleurs, les caisses de pension du deuxième pilier gèrent plus de mille milliards de francs, ce qui fait des Suisses, souvent sans le savoir, de grands investisseurs sur les marchés financiers.</p>`)}
${retenir([
  "La finance transforme l’épargne en investissement, partage les risques et finance l’innovation.",
  "Pour Fama, les marchés sont efficients ; pour Keynes, Shiller et Minsky, ils sont sujets aux bulles et aux crises.",
  "Les biais psychologiques et le mimétisme peuvent écarter durablement les prix de la valeur réelle.",
  "La régulation cherche un équilibre entre stabilité, financement de l’économie et lutte contre l’aléa moral."
], `<a href="#c-instabilite-financiere">instabilité financière</a>, <a href="#c-alea-moral">aléa moral</a>, <a href="#c-preteur-dernier-ressort">prêteur en dernier ressort</a>, <a href="#c-aversion-pertes">aversion aux pertes</a>, la page <a href="#crises">Crises</a>, et les portraits de <a href="#eco-minsky">Minsky</a>, <a href="#eco-keynes">Keynes</a> et <a href="#eco-kahneman">Kahneman</a>.`)}`);
})();
