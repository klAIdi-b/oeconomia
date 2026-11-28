/* Œconomia — grandes questions en dossier complet, lot B : le commerce, les inégalités, l’État.
   Remplace le texte (html) des questions correspondantes de questions.js ; titres, chapôs, auteurs et liens sont conservés. */
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
     LE COMMERCE
     ===================================================================== */
  const figRicardo = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>L’exemple de Ricardo (1817) : heures de travail pour produire une unité</text>`;
    s += `<text x="250" y="58" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">Drap</text><text x="460" y="58" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">Vin</text>`;
    s += `<text x="40" y="96" style="fill:var(--ink); font:700 12px Manrope, sans-serif">Angleterre</text><text x="40" y="160" style="fill:var(--ink); font:700 12px Manrope, sans-serif">Portugal</text>`;
    const cell = (x, y, v, c, sub) => `<rect x="${x}" y="${y}" width="180" height="50" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + 90}" y="${y + 24}" text-anchor="middle" style="fill:var(--ink); font:700 15px Manrope, sans-serif">${v} heures</text><text x="${x + 90}" y="${y + 41}" text-anchor="middle" style="fill:var(--ink-soft); font:11px Manrope, sans-serif">${sub}</text>`;
    s += cell(160, 68, 100, "var(--gold)", "son avantage comparatif") + cell(370, 68, 120, "var(--line)", "");
    s += cell(160, 132, 90, "var(--line)", "") + cell(370, 132, 80, "var(--note)", "son avantage comparatif");
    s += `<text x="20" y="214" ${S}>Le Portugal est plus productif pour les deux biens. Mais, en Angleterre, un drap « coûte » 0,83 vin,</text>`;
    s += `<text x="20" y="232" ${S}>contre 1,125 vin au Portugal. Si l’Angleterre fait du drap et le Portugal du vin, puis qu’ils échangent,</text>`;
    s += `<text x="20" y="250" ${S}>les deux pays obtiennent plus de drap et plus de vin avec le même travail.</text>`;
    return s;
  })(), "Ce qui compte n’est pas l’avantage absolu, être le plus productif, mais l’avantage comparatif : se spécialiser là où l’on est relativement le meilleur, c’est-à-dire là où l’on renonce à le moins d’autres productions. Le simulateur de l’avantage comparatif permet de faire varier les chiffres.", "Tableau des heures de travail de l’exemple de Ricardo");

  const figGagnants = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>L’ouverture au commerce : un gain d’ensemble, mais des gagnants et des perdants</text>`;
    s += node(170, 44, 300, 56, "Ouverture au commerce", "prix plus bas, spécialisation, plus de choix", "var(--ink-soft)");
    s += node(20, 140, 290, 82, "Gagnants", "consommateurs, entreprises exportatrices", "var(--note)") + `<text x="165" y="214" text-anchor="middle" ${S}>facteur de production abondant</text>`;
    s += node(330, 140, 290, 82, "Perdants", "secteurs concurrencés, leurs régions", "var(--serial)") + `<text x="475" y="214" text-anchor="middle" ${S}>facteur de production rare</text>`;
    s += arrow(250, 102, 170, 138) + arrow(390, 102, 470, 138);
    s += `<text x="20" y="252" ${S}>En théorie, les gains des uns suffisent à compenser les pertes des autres. En pratique, cette</text>`;
    s += `<text x="20" y="270" ${S}>compensation a souvent manqué, ce qui explique le retour du protectionnisme dans le débat politique.</text>`;
    return s;
  })(), "D’après le théorème de Stolper et Samuelson (1941) et les travaux récents sur le « choc chinois ». Dans un pays riche en capital et en main-d’œuvre qualifiée, l’ouverture profite plutôt à ces facteurs, et pèse sur les travailleurs peu qualifiés des industries concurrencées.", "Schéma des gagnants et perdants de l’ouverture");

  set("commerce", `
${essentiel([
  "Les <b>mercantilistes</b> voyaient le commerce comme une rivalité : il fallait exporter plus qu’importer pour accumuler de l’or. Smith et Ricardo ont montré que l’échange peut enrichir tous les partenaires, grâce à la division du travail et à l’<b>avantage comparatif</b>.",
  "Les pays qui se sont industrialisés tard, des États-Unis à la Corée du Sud, ont souvent protégé leurs industries naissantes. Le libre-échange profite à l’ensemble, mais il fait aussi des perdants, concentrés dans certains secteurs et certaines régions.",
  "Depuis les années 2010, le « choc chinois », les tensions géopolitiques et le retour des droits de douane américains ont rouvert un débat que beaucoup croyaient clos."
])}
<h3>Le temps des marchands</h3>
<p>Pour les mercantilistes, de <a href="#eco-mun">Thomas Mun</a> en Angleterre à Colbert en France, la puissance d’un État se mesure à son stock de métaux précieux, et le commerce extérieur est le moyen de l’accroître. Dans Le Trésor de l’Angleterre par le commerce extérieur, publié en 1664, Mun écrit que la règle est de vendre chaque année aux étrangers davantage que ce qu’on leur achète. Il faut exporter des produits finis, importer des matières premières, protéger les manufactures et développer la marine.</p>
<p>Le commerce est alors pensé comme une rivalité : ce que l’un gagne, l’autre le perd. Cette vision accompagne la construction des grands États et des empires coloniaux, les compagnies à monopole comme la Compagnie des Indes orientales et les guerres commerciales entre l’Angleterre, la France et les Provinces-Unies.</p>
<h3>La critique classique</h3>
<p>David Hume montre en 1752 que l’accumulation d’or est autodestructrice : elle fait monter les prix intérieurs, réduit les exportations et provoque le départ du métal. <a href="#eco-smith">Adam Smith</a> déplace la question : la richesse d’une nation n’est pas son stock d’or, mais le produit annuel de son travail. L’échange, en élargissant le marché, permet d’approfondir la <a href="#c-division-travail">division du travail</a> et d’accroître la productivité. Il est absurde, écrit Smith, de fabriquer chez soi ce qu’on peut acheter moins cher ailleurs : aucun chef de famille ne tente de faire lui-même ce qui lui coûterait plus cher que de l’acheter. Le mercantilisme est, pour lui, la doctrine de marchands qui ont su faire passer leur intérêt pour celui de la nation.</p>
<h3>L’avantage comparatif</h3>
<p>En 1817, <a href="#eco-ricardo">Ricardo</a> va plus loin avec l’<dfn data-g="avantage-comparatif">avantage comparatif</dfn>. Même si le Portugal produit drap et vin avec moins de travail que l’Angleterre, les deux pays gagnent à se spécialiser selon leurs coûts relatifs. Le résultat est contre-intuitif : un pays moins productif en tout a toujours sa place dans l’échange (<a href="#labo" data-lab="2">le vérifier avec le simulateur</a>).</p>
${figRicardo}
<p>Samuelson racontera qu’un mathématicien lui avait demandé un jour de citer une proposition des sciences sociales à la fois vraie et non triviale ; il répondit par l’avantage comparatif. L’abrogation des Corn Laws en 1846, qui supprime les droits de douane sur les céréales au Royaume-Uni, marque le triomphe politique de cette idée. Elle profite aux industriels et aux ouvriers, qui paient leur pain moins cher, aux dépens des propriétaires fonciers.</p>
<h3>Le protectionnisme éducateur</h3>
<p>Les pays qui s’industrialisent après l’Angleterre se méfient de ce libre-échange qui convient si bien au premier arrivé. Alexander Hamilton aux États-Unis (1791), puis Friedrich List en Allemagne (1841), défendent une protection temporaire des industries naissantes, le temps qu’elles atteignent la taille et l’expérience de leurs concurrentes. List compare l’Angleterre à celui qui, arrivé en haut, retire l’échelle pour empêcher les autres de monter. <a href="#eco-mill">John Stuart Mill</a> admet cet argument comme une exception légitime.</p>
<p>L’histoire lui donne en partie raison : les États-Unis restent très protectionnistes tout au long du XIXe siècle, l’Allemagne protège son industrie à partir de 1879, et le Japon puis la Corée du Sud s’industrialisent après 1950 derrière des protections et avec un fort soutien de l’État. Mais beaucoup d’autres pays, en Amérique latine notamment, ont protégé pendant des décennies des industries qui ne sont jamais devenues compétitives. La protection éducative ne réussit que si elle est temporaire et accompagnée d’une forte exigence d’exportation.</p>
<h3>Les années 1930 et la construction du libre-échange</h3>
<p>En 1930, les États-Unis adoptent le tarif Smoot-Hawley, qui relève fortement les droits de douane. Les autres pays répliquent, et le commerce mondial s’effondre d’environ deux tiers en valeur entre 1929 et 1933, sous l’effet conjoint de la crise et des représailles. <a href="#eco-keynes">Keynes</a> lui-même, libre-échangiste dans sa jeunesse, écrit en 1933 que les idées et l’art devraient être internationaux, mais que les biens devraient être produits chez soi « chaque fois que c’est raisonnablement possible ».</p>
<p>Tirant les leçons de cette période, les pays occidentaux signent en 1947 l’Accord général sur les tarifs douaniers et le commerce (GATT). Les droits de douane sur les produits industriels baissent par cycles de négociation, et l’Organisation mondiale du commerce (OMC) naît en 1995. L’entrée de la Chine à l’OMC en 2001 marque l’apogée de cette mondialisation.</p>
<h3>Qui gagne, qui perd</h3>
<p>Au XXe siècle, les Suédois Eli Heckscher et Bertil Ohlin expliquent le commerce par les dotations en facteurs : chaque pays exporte les biens qui utilisent intensivement ce dont il dispose en abondance, terres, capital ou main-d’œuvre qualifiée. <a href="#eco-samuelson">Samuelson</a> en tire avec Wolfgang Stolper en 1941 une conséquence politique : l’ouverture profite au facteur abondant et nuit au facteur rare. Le gain national s’accompagne donc de perdants.</p>
${figGagnants}
<p><a href="#eco-krugman">Krugman</a> montre à partir de 1979 que les <a href="#c-rendements-croissants">rendements croissants</a> expliquent l’essentiel du commerce entre pays riches, qui échangent des produits semblables : des voitures contre des voitures. Ce commerce intra-branche fait moins de perdants, car il ne supprime pas des secteurs entiers.</p>
<p>Depuis les années 2010, les travaux de David Autor, David Dorn et Gordon Hanson sur le « choc chinois » ont montré que les pertes d’emplois industriels américaines liées aux importations chinoises ont été concentrées dans certaines régions, durables, et mal compensées. Ces régions ont connu une baisse des salaires, une hausse de la pauvreté et parfois une radicalisation politique. Le retour des droits de douane américains en 2018, puis à grande échelle en 2025, a rouvert un débat que beaucoup croyaient clos. S’y ajoutent les préoccupations géopolitiques : dépendance aux matières premières critiques, aux puces électroniques ou aux médicaments produits par un petit nombre de pays.</p>
<h3>Les positions en présence</h3>
${table([
  ["Mercantilisme", "Le commerce est une rivalité ; il faut des excédents pour accumuler la richesse.", `<a href="#eco-mun">Mun</a>, Colbert`],
  ["Libre-échange classique", "L’échange enrichit tous les partenaires grâce à la spécialisation.", `<a href="#eco-smith">Smith</a>, <a href="#eco-ricardo">Ricardo</a>`],
  ["Protection éducatrice", "Les industries naissantes doivent être protégées temporairement.", `Hamilton, List, <a href="#eco-mill">Mill</a>`],
  ["Économie internationale moderne", "Le commerce est globalement bénéfique, mais il faut compenser les perdants.", `<a href="#eco-samuelson">Samuelson</a>, <a href="#eco-krugman">Krugman</a>`],
  ["Critiques contemporaines", "La mondialisation a eu des coûts locaux sous-estimés et crée des dépendances stratégiques.", "Autor, Rodrik"]
])}
${suisse("Une petite économie très ouverte", `
<p>La Suisse vit largement de ses échanges : ses exportations de biens et de services représentent plus des deux tiers de son produit intérieur brut. Elle est liée à l’Union européenne, son premier partenaire, par un accord de libre-échange de 1972 et par les accords bilatéraux conclus à partir de 1999. En 2014, elle devient l’un des premiers pays européens à appliquer un accord de libre-échange avec la Chine. Depuis le 1er janvier 2024, elle a même supprimé unilatéralement ses droits de douane sur les produits industriels.</p>
<p>Elle n’est pourtant pas libre-échangiste en tout : son agriculture est l’une des plus protégées du monde, par des droits de douane élevés et des subventions, au nom de la sécurité alimentaire, de l’entretien des paysages et du soutien aux régions de montagne. En août 2025, les États-Unis imposent des droits de douane de 39 % sur de nombreux produits suisses, l’un des taux les plus élevés appliqués à un pays développé, ce qui frappe notamment l’horlogerie et les machines ; un accord annoncé en novembre 2025 prévoit de les ramener à 15 %. Cet épisode montre qu’une petite économie ouverte dépend des règles du commerce mondial qu’elle ne peut pas fixer seule.</p>`)}
${retenir([
  "Pour les mercantilistes, le commerce est une rivalité ; pour Smith et Ricardo, il enrichit tous les partenaires.",
  "L’avantage comparatif montre qu’un pays moins productif en tout gagne quand même à échanger.",
  "Le libre-échange fait des gagnants et des perdants ; la question est de savoir s’ils sont compensés.",
  "Le protectionnisme peut aider des industries naissantes, mais les guerres commerciales des années 1930 ont montré ses dangers."
], `<a href="#c-avantage-comparatif">avantage comparatif</a>, <a href="#c-division-travail">division du travail</a>, <a href="#c-rendements-croissants">rendements croissants</a>, le <a href="#labo" data-lab="2">simulateur de l’avantage comparatif</a> et les portraits de <a href="#eco-ricardo">Ricardo</a>, <a href="#eco-mun">Mun</a> et <a href="#eco-krugman">Krugman</a>.`)}`);

  /* =====================================================================
     LES INÉGALITÉS
     ===================================================================== */
  const figLorenz = fig(300, (() => {
    const X = (p) => 120 + p * 220, Y = (v) => 260 - v * 220;
    const pts = []; for (let p = 0; p <= 1.0001; p += 0.05) pts.push(`${X(p).toFixed(1)},${Y(Math.pow(p, 2.2)).toFixed(1)}`);
    let s = `<text x="20" y="24" ${T}>La courbe de Lorenz et le coefficient de Gini</text>`;
    s += `<line x1="120" y1="40" x2="120" y2="260" style="stroke:var(--line); stroke-width:1.5"/><line x1="120" y1="260" x2="340" y2="260" style="stroke:var(--line); stroke-width:1.5"/>`;
    s += `<polygon points="${pts.join(" ")}" style="fill:color-mix(in srgb, var(--gold) 22%, transparent); stroke:none"/>`;
    s += `<path d="M120,260 L340,40" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5; stroke-dasharray:5 4"/>`;
    s += `<polyline points="${pts.join(" ")}" style="fill:none; stroke:var(--serial); stroke-width:2.5"/>`;
    s += `<text x="112" y="44" text-anchor="end" ${M}>100 %</text><text x="112" y="264" text-anchor="end" ${M}>0</text><text x="340" y="280" text-anchor="middle" ${M}>100 %</text>`;
    s += `<text x="116" y="296" ${M}>part de la population, des plus pauvres aux plus riches</text>`;
    s += `<text x="372" y="70" style="fill:var(--ink-soft); font:700 12px Manrope, sans-serif">Diagonale : égalité parfaite</text>`;
    s += `<text x="372" y="88" ${S}>chacun reçoit la même part du revenu</text>`;
    s += `<text x="372" y="134" style="fill:var(--serial); font:700 12px Manrope, sans-serif">Courbe de Lorenz</text>`;
    s += `<text x="372" y="152" ${S}>les 50 % les plus pauvres reçoivent</text><text x="372" y="168" ${S}>ici environ 22 % du revenu</text>`;
    s += `<text x="372" y="214" style="fill:var(--gold); font:700 12px Manrope, sans-serif">Coefficient de Gini</text>`;
    s += `<text x="372" y="232" ${S}>surface colorée rapportée au triangle :</text><text x="372" y="248" ${S}>de 0 (égalité) à 1 (une personne a tout)</text>`;
    return s;
  })(), "Exemple schématique. Plus la courbe s’éloigne de la diagonale, plus la répartition est inégale. Le coefficient de Gini du revenu disponible, après impôts et prestations, est d’environ 0,25 dans les pays nordiques, 0,30 en Suisse, 0,39 aux États-Unis et dépasse 0,50 en Afrique du Sud ou au Brésil.", "Courbe de Lorenz avec la diagonale d’égalité");

  const figKuznets = fig(270, (() => {
    const X = (a) => 80 + (a - 1900) * 4.8;
    let s = `<text x="20" y="24" ${T}>Deux récits de l’évolution des inégalités dans les pays riches (schéma)</text>`;
    s += `<line x1="70" y1="40" x2="70" y2="220" style="stroke:var(--line); stroke-width:1.5"/><line x1="70" y1="220" x2="600" y2="220" style="stroke:var(--line); stroke-width:1.5"/>`;
    s += `<text x="78" y="44" ${M}>inégalités</text>`;
    [1900, 1950, 2000].forEach((a) => { s += `<text x="${X(a)}" y="238" text-anchor="middle" ${M}>${a}</text>`; });
    s += `<path d="M${X(1900)},150 C${X(1930)},70 ${X(1950)},70 ${X(1990)},190 L${X(2020)},205" style="fill:none; stroke:var(--note); stroke-width:2.5; stroke-dasharray:7 5"/>`;
    s += `<path d="M${X(1900)},70 C${X(1925)},75 ${X(1940)},175 ${X(1960)},180 C${X(1975)},182 ${X(1985)},175 ${X(2020)},95" style="fill:none; stroke:var(--serial); stroke-width:2.5"/>`;
    s += `<text x="${X(1931)}" y="58" style="fill:var(--note); font:700 12px Manrope, sans-serif">Kuznets (1955) : la croissance finit par réduire les inégalités</text>`;
    s += `<text x="${X(2008)}" y="80" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">Séries fiscales : courbe en U</text>`;
    return s;
  })(), "Schéma sans échelle. Simon Kuznets disposait de données allant jusqu’aux années 1950, qui montraient une baisse des inégalités. Les séries reconstituées depuis les années 2000 par Piketty, Saez et Atkinson montrent que cette baisse a été suivie d’une remontée depuis 1980 : elle n’était pas le produit naturel du développement.", "Comparaison de la courbe de Kuznets et de la courbe en U");

  set("inegalites", `
${essentiel([
  "Pour les classiques, la répartition du produit entre salaires, profits et rentes est au cœur de l’économie. Au XXe siècle, la question passe au second plan, avec l’idée que la croissance finirait par réduire les inégalités (Kuznets).",
  "Le débat est aussi moral : pour Rawls, les inégalités ne sont justes que si elles profitent aux plus défavorisés ; pour Hayek, la « justice sociale » n’a pas de sens dans une économie de marché ; pour Sen, il faut se demander « l’égalité de quoi ? ».",
  "Depuis les années 2000, les données fiscales ont montré une forte remontée des inégalités depuis 1980, surtout aux États-Unis. Leurs causes et leurs effets sur la croissance font débat."
])}
<h3>La répartition au cœur de l’économie classique</h3>
<p>Pour les classiques, l’économie est d’abord une affaire de partage entre classes sociales. <a href="#eco-smith">Smith</a> observe que les maîtres s’entendent pour contenir les salaires, alors que les ouvriers sont interdits de coalition, et juge qu’aucune société ne peut être florissante et heureuse si la plupart de ses membres sont pauvres et misérables. <a href="#eco-ricardo">Ricardo</a> écrit en 1817 que déterminer les lois qui règlent la répartition est « le principal problème de l’économie politique ». Il analyse le partage du produit entre <a href="#c-rente">rente</a>, profit et salaire, et prédit que la rente des propriétaires fonciers grandira aux dépens des profits, à mesure qu’il faudra cultiver des terres moins fertiles.</p>
<p><a href="#eco-mill">John Stuart Mill</a> affirme en 1848 que si les lois de la production s’imposent comme des lois physiques, la répartition relève des institutions humaines et peut être réformée par l’impôt sur les héritages, l’éducation ou les coopératives. <a href="#eco-marx">Marx</a> fait de l’exploitation, l’appropriation de la <a href="#c-plus-value">plus-value</a> par les capitalistes, le ressort même du système, et annonce une polarisation croissante entre une bourgeoisie de plus en plus riche et un prolétariat de plus en plus nombreux.</p>
<h3>Mesurer les inégalités</h3>
<p>Au début du XXe siècle, les statisticiens inventent des outils pour mesurer les inégalités. L’Américain Max Lorenz propose en 1905 une courbe qui représente la part du revenu reçue par chaque fraction de la population ; l’Italien Corrado Gini en tire en 1912 un indicateur unique, le coefficient qui porte son nom. On utilise aussi des rapports simples, comme le revenu des 10 % les plus riches divisé par celui des 10 % les plus pauvres, ou la part du revenu reçue par le 1 % le plus aisé.</p>
${figLorenz}
<p>Il faut distinguer les inégalités de revenus, celles de patrimoines, toujours beaucoup plus fortes, et les inégalités avant et après impôts et prestations sociales. Il faut aussi distinguer les inégalités à l’intérieur des pays et entre les pays. Depuis 1980, les premières ont souvent augmenté, alors que les secondes ont diminué avec l’essor de la Chine et de l’Inde. L’économiste Branko Milanović l’a résumé par sa « courbe de l’éléphant » : entre 1988 et 2008, les classes moyennes asiatiques et les plus riches du monde ont vu leurs revenus progresser fortement, tandis que les classes moyennes et populaires des pays riches stagnaient.</p>
<h3>Une loi naturelle ?</h3>
<p>À la fin du XIXe siècle, <a href="#eco-pareto">Pareto</a> observe, à Lausanne, que la distribution des hauts revenus suit dans tous les pays et à toutes les époques étudiées une même loi mathématique, et en conclut que les réformes y changent peu. Son critère d’<dfn data-g="optimum-pareto">optimum</dfn>, qui écarte toute comparaison entre individus, permet à l’économie du bien-être de se tenir à distance de la question de l’équité : une situation peut être efficace et très inégale.</p>
<p>En 1955, Simon Kuznets avance que les inégalités augmentent dans les premières phases de l’industrialisation, quand une partie de la population quitte l’agriculture pour des emplois mieux payés, puis diminuent quand la majorité a rejoint les secteurs modernes et que l’éducation se diffuse (<a href="#c-courbe-kuznets">voir courbe de Kuznets</a>). La croissance finirait par résoudre le problème qu’elle a créé. Kuznets lui-même présentait son hypothèse avec prudence, mais elle devient pendant des décennies une sorte de loi.</p>
<h3>Le dilemme entre égalité et efficacité ?</h3>
<p>En 1975, l’économiste américain Arthur Okun publie Égalité et efficacité : le grand compromis. Il compare la redistribution à un « seau percé » : en transférant de l’argent des riches vers les pauvres, une partie se perd en route, à cause des coûts administratifs et de la baisse des incitations à travailler et à investir. La question est de savoir quelle perte on accepte pour plus d’égalité.</p>
<p>Des travaux plus récents nuancent ce dilemme. Des études du Fonds monétaire international, à partir de 2014, suggèrent que des inégalités élevées peuvent freiner la croissance, en empêchant les enfants des familles modestes d’accéder à l’éducation, en fragilisant la demande ou en favorisant l’endettement et l’instabilité politique. Les données de l’économiste Miles Corak ont donné la « courbe de Gatsby le Magnifique », ainsi baptisée par Alan Krueger en 2012 : les pays les plus inégaux sont aussi ceux où la position sociale se transmet le plus d’une génération à l’autre.</p>
<h3>Justice sociale ou mirage ?</h3>
<p>En 1971, le philosophe John Rawls propose dans sa Théorie de la justice un critère : derrière un « voile d’ignorance », sans savoir quelle place on occupera dans la société, des personnes raisonnables choisiraient des règles où les inégalités ne sont acceptées que si elles profitent aux plus défavorisés. <a href="#eco-hayek">Hayek</a> répond que, dans un ordre de marché, la répartition résulte de décisions dont aucune ne vise un résultat d’ensemble ; parler de justice sociale à son propos n’a pas plus de sens que de parler de la justice du climat. Robert Nozick ajoute qu’une répartition est juste si elle résulte d’échanges libres à partir de possessions légitimes, quelle qu’en soit la forme.</p>
<p><a href="#eco-sen">Amartya Sen</a> déplace le débat en demandant : l’égalité de quoi ? Ce qui importe n’est pas le revenu en lui-même, mais les <dfn data-g="capabilites">capabilités</dfn>, c’est-à-dire ce que chacun est réellement en mesure d’être et de faire. Une personne handicapée a besoin de plus de ressources qu’une autre pour atteindre les mêmes libertés.</p>
<h3>Le retour des données</h3>
<p>À partir des années 2000, <a href="#eco-piketty">Thomas Piketty</a>, Emmanuel Saez, Anthony Atkinson et leurs collègues reconstituent des séries de revenus et de patrimoines sur un siècle à partir des archives fiscales. Elles dessinent une courbe en U : forte concentration à la Belle Époque, réduction brutale entre 1914 et 1945 sous l’effet des guerres, de l’inflation et de l’impôt progressif, puis remontée depuis 1980, très marquée aux États-Unis. Piketty en propose une explication : lorsque <dfn data-g="r-g">r > g</dfn>, les patrimoines hérités dominent. La courbe de Kuznets apparaît comme le produit d’une période exceptionnelle.</p>
${figKuznets}
<p>Ces travaux sont discutés : la hausse du capital tient beaucoup au logement, et <a href="#eco-acemoglu">Daron Acemoglu</a> et James Robinson contestent que r > g soit une loi générale. Pour eux, ce sont les <a href="#c-institutions-inclusives">institutions</a> qui déterminent si la richesse se transforme en pouvoir politique et verrouille la société. Acemoglu insiste aussi sur la direction du progrès technique, qui peut accroître ou réduire la part des travailleurs (<a href="#controverses" data-debat="acemoglu-schumpeter">voir son débat avec Schumpeter</a>). D’autres explications de la hausse récente sont avancées : le progrès technique favorable aux plus qualifiés, la mondialisation, l’affaiblissement des syndicats, la baisse des impôts sur les hauts revenus, et les marchés où « le gagnant rafle tout ». <a href="#eco-duflo">Esther Duflo</a>, enfin, rappelle qu’au-delà des grandes tendances, la pauvreté se combat aussi par des politiques précises dont on peut mesurer l’effet.</p>
<h3>Les positions en présence</h3>
${table([
  ["Économie classique", "La répartition entre classes est le problème central de l’économie.", `<a href="#eco-ricardo">Ricardo</a>, <a href="#eco-mill">Mill</a>`],
  ["Marxisme", "Les inégalités naissent de l’exploitation et s’aggravent avec l’accumulation.", `<a href="#eco-marx">Marx</a>`],
  ["Optimisme de la croissance", "Les inégalités reculent naturellement avec le développement.", "Kuznets"],
  ["Libéralisme", "La justice tient aux règles et aux échanges libres, pas aux résultats.", `<a href="#eco-hayek">Hayek</a>, Nozick`],
  ["Égalitarisme libéral et capabilités", "Les inégalités doivent profiter aux plus défavorisés ; il faut égaliser les libertés réelles.", `Rawls, <a href="#eco-sen">Sen</a>`],
  ["Nouvelle économie des inégalités", "Les inégalités dépendent de l’impôt, des institutions et du poids du patrimoine.", `<a href="#eco-piketty">Piketty</a>, Saez, <a href="#eco-acemoglu">Acemoglu</a>`]
])}
${suisse("Peu d’inégalités de revenus, beaucoup d’inégalités de patrimoine", `
<p>Mesurées par le coefficient de Gini du revenu disponible, les inégalités de revenus en Suisse sont proches de la moyenne européenne, autour de 0,30, et ont relativement peu varié depuis plusieurs décennies, selon les travaux de Reto Föllmi et Isabel Martínez. En revanche, le patrimoine y est l’un des plus concentrés d’Europe, notamment à cause des héritages et des grandes fortunes familiales.</p>
<p>Le peuple suisse a été souvent consulté sur ces questions. En 2013, l’initiative « 1:12 », qui voulait limiter le salaire le plus élevé d’une entreprise à douze fois le plus bas, est rejetée par environ 65 % des votants. En 2014, un salaire minimum national de 4 000 francs par mois est rejeté par environ 76 %. Mais plusieurs cantons ont adopté leur propre salaire minimum, Neuchâtel en premier en 2017, puis Genève en 2020, avec l’un des montants les plus élevés du monde. En 2024, les votants acceptent une 13e rente de l’AVS, contre l’avis du Conseil fédéral. Ces votes montrent une préférence pour des mesures ciblées plutôt que pour des plafonds généraux.</p>`)}
${retenir([
  "Pour les classiques, la répartition est le problème central de l’économie ; elle a ensuite été longtemps négligée.",
  "On mesure les inégalités avec la courbe de Lorenz, le coefficient de Gini ou la part des plus riches, en distinguant revenus et patrimoines.",
  "L’idée que la croissance réduit naturellement les inégalités (Kuznets) a été contredite par leur remontée depuis 1980.",
  "Le débat est autant moral qu’économique : faut-il juger les résultats, les règles ou les libertés réelles ?"
], `<a href="#c-courbe-kuznets">courbe de Kuznets</a>, <a href="#c-r-g">r > g</a>, <a href="#c-capabilites">capabilités</a>, <a href="#c-optimum-pareto">optimum de Pareto</a>, <a href="#c-rente">rente</a>, et les portraits de <a href="#eco-piketty">Piketty</a>, <a href="#eco-sen">Sen</a> et <a href="#eco-hayek">Hayek</a>.`)}`);

  /* =====================================================================
     L’ÉTAT
     ===================================================================== */
  const figDepenses = fig(290, (() => {
    const d = [[1870, 10.7], [1913, 13.1], [1920, 19.6], [1937, 23.8], [1960, 28.0], [1980, 43.1], [1990, 44.8], [1996, 45.6]];
    const X = (a) => 80 + (a - 1870) * 4.0, Y = (v) => 240 - v * 4.0;
    let s = `<text x="20" y="24" ${T}>Les dépenses publiques en % du PIB, moyenne des pays industrialisés</text>`;
    s += `<line x1="70" y1="40" x2="70" y2="240" style="stroke:var(--line); stroke-width:1.5"/><line x1="70" y1="240" x2="600" y2="240" style="stroke:var(--line); stroke-width:1.5"/>`;
    [10, 20, 30, 40].forEach((v) => { s += `<line x1="70" y1="${Y(v)}" x2="600" y2="${Y(v)}" style="stroke:var(--line); stroke-width:0.6; stroke-dasharray:3 4"/><text x="62" y="${Y(v) + 4}" text-anchor="end" ${M}>${v} %</text>`; });
    [1870, 1913, 1937, 1960, 1980, 1996].forEach((a) => { s += `<text x="${X(a)}" y="258" text-anchor="middle" ${M}>${a}</text>`; });
    s += `<polyline points="${d.map(([a, v]) => `${X(a)},${Y(v)}`).join(" ")}" style="fill:none; stroke:var(--plum); stroke-width:2.5"/>`;
    d.forEach(([a, v]) => { s += `<circle cx="${X(a)}" cy="${Y(v)}" r="4" style="fill:var(--plum)"/>`; });
    s += `<text x="${X(1870) + 6}" y="${Y(10.7) - 12}" style="fill:var(--plum); font:700 12px Manrope, sans-serif">11 %</text>`;
    s += `<text x="${X(1996) - 4}" y="${Y(45.6) - 12}" text-anchor="end" style="fill:var(--plum); font:700 12px Manrope, sans-serif">46 %</text>`;
    s += `<text x="${X(1925)}" y="${Y(36)}" ${S}>guerres, crise de 1929,</text><text x="${X(1925)}" y="${Y(36) + 16}" ${S}>État-providence après 1945</text>`;
    return s;
  })(), "D’après Vito Tanzi et Ludger Schuknecht, Public Spending in the 20th Century (2000), moyenne de dix-sept pays industrialisés. En un siècle, la part des dépenses publiques a plus que quadruplé, surtout à cause des retraites, de la santé, de l’éducation et des transferts sociaux. Elle varie aujourd’hui d’environ un tiers du PIB en Suisse à plus de la moitié en France.", "Graphique de la hausse des dépenses publiques de 1870 à 1996");

  const figDefaillances = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Trois diagnostics, trois réponses</text>`;
    s += cards([
      ["Défaillances du marché", "Externalités, biens publics, monopoles, information inégale, chômage de masse. Réponse : taxes, régulation, services publics, relance.", "var(--note)"],
      ["Défaillances de l’État", "Information dispersée, intérêts particuliers, groupes de pression, bureaucratie. Réponse : règles simples, concurrence, décentralisation.", "var(--serial)"],
      ["Ni l’un ni l’autre", "Communautés d’usagers, coopératives, gouvernance à plusieurs niveaux. Réponse : laisser les usagers s’organiser.", "var(--gold)"]
    ], 190, 200, 44);
    return s;
  })(), "Les économistes ne débattent plus vraiment entre marché pur et État total, mais sur le diagnostic de chaque situation : qui échoue le moins, et à quel coût ? Le choix dépend du bien en question, de l’information disponible et de la qualité des institutions.", "Trois cartes : défaillances du marché, de l’État, et troisième voie");

  set("etat", `
${essentiel([
  "Depuis Smith, presque tous les économistes reconnaissent à l’État des fonctions essentielles : défense, justice, infrastructures, éducation. Le désaccord porte sur tout le reste.",
  "Au XXe siècle, on a identifié les <b>défaillances du marché</b> (externalités, biens publics, chômage), qui justifient l’intervention publique, puis les <b>défaillances de l’État</b> (manque d’information, intérêts particuliers), qui la limitent.",
  "Les dépenses publiques sont passées d’environ 10 % du PIB en 1870 à plus de 40 % dans les pays riches. Elinor Ostrom a montré qu’il existe aussi des solutions qui ne relèvent ni du marché ni de l’État."
])}
<h3>Laisser faire, mais pas tout</h3>
<p>La formule « laissez faire, laissez passer », attribuée à l’intendant du commerce Vincent de Gournay, est popularisée par les physiocrates de <a href="#eco-quesnay">Quesnay</a>, qui réclament la liberté du commerce des grains contre les réglementations héritées de Colbert. <a href="#eco-smith">Smith</a> assigne au souverain trois devoirs : la défense, la justice, et les ouvrages publics que nul intérêt privé ne financerait, comme les routes, les ponts ou l’instruction du peuple. Smith se méfie autant des marchands qui cherchent des monopoles que de l’État qui les leur accorde.</p>
<p><a href="#eco-mill">Mill</a> allonge en 1848 la liste des exceptions : éducation des enfants, protection des industries naissantes, limitation du temps de travail, aide aux pauvres. Il pose pourtant le principe que le laisser-faire doit rester la règle, et toute dérogation être justifiée par un bien important. Au même moment, la Prusse puis l’Allemagne de Bismarck créent les premières assurances sociales obligatoires, dans les années 1880, contre la maladie, les accidents du travail et la vieillesse.</p>
<h3>Les défaillances du marché</h3>
<p>Au XXe siècle, l’économie formalise les raisons pour lesquelles le marché peut échouer. Arthur Pigou, successeur de Marshall à Cambridge, montre en 1920 que les <dfn data-g="externalite">externalités</dfn>, comme la fumée d’une usine, justifient taxes et subventions. <a href="#eco-samuelson">Samuelson</a> définit en 1954 les <dfn data-g="bien-public">biens publics</dfn>, comme la défense ou l’éclairage public, dont personne ne peut être exclu et que le marché ne peut fournir correctement. Kenneth Arrow et George Akerlof montrent que l’<a href="#c-asymetrie-information">information inégale</a> entre acheteurs et vendeurs peut empêcher des marchés de fonctionner, celui de l’assurance santé par exemple.</p>
<p><a href="#eco-keynes">Keynes</a> confie à l’État la stabilisation de l’activité, par la dépense publique et le <a href="#c-multiplicateur">multiplicateur</a>. Le rapport Beveridge de 1942 pose les bases de l’État-providence britannique, qui veut protéger chacun « du berceau à la tombe ». <a href="#eco-galbraith">Galbraith</a> dénonce en 1958 une société d’opulence privée et de misère publique, où les ménages ont des voitures puissantes mais roulent sur des routes mal entretenues.</p>
${figDepenses}
<h3>Les défaillances de l’État</h3>
<p>Dès 1920, <a href="#eco-mises">Mises</a> soutient qu’une économie planifiée ne peut calculer rationnellement faute de prix. <a href="#eco-hayek">Hayek</a> élargit l’argument : la connaissance nécessaire est dispersée et ne peut être centralisée, et chaque intervention en appelle une autre. Dans La Route de la servitude (1944), il avertit que la planification économique menace les libertés politiques (<a href="#controverses" data-debat="keynes-hayek">voir son débat avec Keynes</a>).</p>
<p><a href="#eco-friedman">Friedman</a> défend des solutions de marché à des problèmes publics, comme l’impôt négatif, une allocation versée aux bas revenus à la place de nombreuses aides, ou le chèque éducation, qui permettrait aux familles de choisir leur école. L’école du <a href="#c-choix-public">choix public</a> de James Buchanan, Nobel en 1986, applique aux hommes politiques et aux fonctionnaires l’hypothèse d’intérêt personnel qu’on applique aux entreprises : l’État n’est pas un planificateur bienveillant. Les élus cherchent à être réélus, les administrations à grandir, et les groupes de pression organisés obtiennent des avantages payés par tous. George Stigler ajoute que les régulateurs finissent souvent par être « capturés » par les entreprises qu’ils sont censés surveiller.</p>
<p>À partir des années 1980, ces idées inspirent les politiques de Margaret Thatcher et de Ronald Reagan : privatisations, déréglementation, baisse des impôts. La chute des économies planifiées d’Europe de l’Est en 1989-1991 semble confirmer les critiques de Mises et Hayek. Mais la crise de 2008 et la pandémie de 2020 voient à nouveau les États intervenir massivement.</p>
<h3>Ni le marché ni l’État</h3>
<p>En 1968, Garrett Hardin affirme qu’une ressource commune est condamnée à la surexploitation, sauf à la privatiser ou à la confier à l’État. <a href="#eco-ostrom">Elinor Ostrom</a> lui oppose des centaines de cas où des usagers ont su s’organiser eux-mêmes pendant des siècles, des alpages de Törbel en Valais aux canaux d’irrigation de Valence (<a href="#controverses" data-debat="ostrom-hardin">voir leur débat</a>, <a href="#labo" data-lab="4">tenter l’expérience</a>). La gestion des <dfn data-g="biens-communs">biens communs</dfn> devient un troisième terme entre marché et État.</p>
${figDefaillances}
<p><a href="#eco-acemoglu">Daron Acemoglu</a> et James Robinson proposent en 2019 une autre manière de poser la question. La liberté et la prospérité prospèrent dans un « corridor étroit », où un État assez fort pour faire respecter la loi reste contrôlé par une société assez forte pour l’empêcher d’abuser de son pouvoir. La question n’est plus seulement de savoir jusqu’où va l’État, mais qui le contrôle.</p>
<h3>Les débats d’aujourd’hui</h3>
<p>Plusieurs questions restent ouvertes. Jusqu’où l’État peut-il s’endetter, et la dette d’aujourd’hui pèse-t-elle sur les générations futures, ou peut-elle financer des investissements utiles à tous (<a href="#c-equivalence-ricardienne">voir équivalence ricardienne</a>) ? Faut-il une politique industrielle pour la transition énergétique et les technologies stratégiques, comme les États-Unis et l’Europe en ont relancé depuis 2020 ? L’économiste Mariana Mazzucato souligne le rôle de l’« État entrepreneur » dans des innovations comme Internet ou le GPS, financées d’abord par la recherche publique. Ses critiques rappellent que l’État choisit souvent mal les gagnants.</p>
<p>Le vieillissement de la population pose enfin la question du financement des retraites et de la santé, qui représentent une part croissante des dépenses publiques dans tous les pays riches.</p>
<h3>Les positions en présence</h3>
${table([
  ["Libéralisme classique", "L’État assure la défense, la justice et quelques ouvrages publics ; le reste revient au marché.", `<a href="#eco-smith">Smith</a>, <a href="#eco-mill">Mill</a>`],
  ["Économie du bien-être et keynésianisme", "L’État corrige les défaillances du marché et stabilise l’activité.", `Pigou, <a href="#eco-keynes">Keynes</a>, <a href="#eco-samuelson">Samuelson</a>`],
  ["Critique de l’État", "L’État manque d’information et sert des intérêts particuliers ; il faut le limiter.", `<a href="#eco-hayek">Hayek</a>, <a href="#eco-friedman">Friedman</a>, Buchanan`],
  ["Institutionnalisme", "Les solutions dépendent des institutions ; les usagers peuvent gérer eux-mêmes certaines ressources.", `<a href="#eco-ostrom">Ostrom</a>, <a href="#eco-acemoglu">Acemoglu</a>`],
  ["État stratège", "L’État doit orienter l’innovation et la transition écologique.", `<a href="#eco-galbraith">Galbraith</a>, Mazzucato`]
])}
${suisse("Un État plus léger, partagé et contrôlé par les citoyens", `
<p>Les dépenses publiques de la Suisse, Confédération, cantons, communes et assurances sociales comprises, représentent environ un tiers du PIB, nettement moins que la moyenne de l’Union européenne. Plusieurs traits expliquent cette particularité. Le fédéralisme répartit les tâches entre la Confédération, vingt-six cantons et plus de deux mille communes, qui fixent une grande partie de leurs impôts et se font concurrence. La démocratie directe permet aux citoyens de refuser des dépenses ou des impôts nouveaux par référendum.</p>
<p>En 2001, 85 % des votants acceptent le « frein à l’endettement », qui oblige la Confédération à équilibrer son budget sur l’ensemble du cycle conjoncturel ; il est appliqué depuis 2003, et la dette fédérale a fortement diminué. Certaines tâches sociales sont aussi confiées à des acteurs privés sous contrainte légale : l’assurance maladie, obligatoire depuis 1996, est gérée par des caisses privées ; la prévoyance professionnelle, le deuxième pilier, par des caisses de pension. La Suisse illustre ainsi une voie intermédiaire, avec un État moins dépensier mais des obligations légales fortes et un contrôle citoyen étroit.</p>`)}
${retenir([
  "Depuis Smith, l’État a des fonctions reconnues ; le débat porte sur leur étendue.",
  "Les défaillances du marché justifient l’intervention publique ; les défaillances de l’État en montrent les limites.",
  "La part des dépenses publiques a été multipliée par quatre en un siècle dans les pays riches.",
  "Entre marché et État, Ostrom a montré que des communautés peuvent gérer elles-mêmes certaines ressources."
], `<a href="#c-externalite">externalités</a>, <a href="#c-bien-public">biens publics</a>, <a href="#c-biens-communs">biens communs</a>, <a href="#c-choix-public">choix public</a>, <a href="#c-asymetrie-information">asymétrie d’information</a>, et les portraits de <a href="#eco-keynes">Keynes</a>, <a href="#eco-hayek">Hayek</a> et <a href="#eco-ostrom">Ostrom</a>.`)}`);
})();
