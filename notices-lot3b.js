/* Œconomia — notices longues, lot 3 (b) : taux de chômage naturel, utilité marginale */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     13. TAUX DE CHÔMAGE NATUREL ET HYSTÉRÈSE
     ===================================================================== */
  const beveridge = fig(300, (() => {
    const L = 70, R = 600, B = 250, Tp = 40, sx = (u) => L + (u / 12) * (R - L), sy = (v) => B - (v / 6) * (B - Tp);
    let s = `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--line)"/><line x1="${L}" y1="${B}" x2="${L}" y2="${Tp - 10}" style="stroke:var(--line)"/>`;
    const curve = (k, col, dash) => { const p = []; for (let u = 1.5; u <= 11.5; u += 0.25) { const v = k / u; if (v <= 6) p.push(sx(u) + "," + sy(v)); } return `<polyline points="${p.join(" ")}" style="fill:none; stroke:var(--${col}); stroke-width:2.5${dash ? "; stroke-dasharray:6 4" : ""}"/>`; };
    s += curve(9, "note") + curve(18, "serial", true);
    s += `<text x="${sx(2.2)}" y="${sy(4.1)}" style="fill:var(--note); font:600 12px Manrope, sans-serif">marché du travail efficace</text>`;
    s += `<text x="${sx(6.8)}" y="${sy(3.3)}" style="fill:var(--serial); font:600 12px Manrope, sans-serif">appariement dégradé</text>`;
    s += `<line x1="${sx(9 / 3)}" y1="${sy(3)}" x2="${sx(18 / 3)}" y2="${sy(3)}" style="stroke:var(--ink-soft); stroke-width:1.5"/><path d="M${sx(6) - 8},${sy(3) - 5} L${sx(6)},${sy(3)} L${sx(6) - 8},${sy(3) + 5}" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5"/>`;
    s += `<text x="${sx(5.8)}" y="${sy(5.4)}" ${S}>La flèche : même nombre d’emplois</text><text x="${sx(5.8)}" y="${sy(5.4) + 15}" ${S}>vacants, mais plus de chômeurs.</text>`;
    s += `<text x="${R}" y="${B + 20}" text-anchor="end" ${M}>taux de chômage →</text><text x="${L - 6}" y="${Tp - 18}" ${M}>emplois vacants</text>`;
    s += `<text x="${L}" y="${B + 40}" ${S}>Schéma : quand la courbe s’éloigne de l’origine, le chômage « naturel » augmente.</text>`;
    return s;
  })(), "La courbe de Beveridge (schéma). Chaque point combine un taux de chômage et un taux d’emplois vacants. Les mouvements le long d’une courbe reflètent la conjoncture ; un déplacement de toute la courbe vers l’extérieur signale que chômeurs et emplois se rencontrent plus mal, donc un chômage naturel plus élevé.", "Deux courbes de Beveridge, l’une proche de l’origine, l’autre décalée");

  const hysterese = fig(270, (() => {
    const L = 60, R = 610, B = 220, sy = (u) => B - (u / 12) * 180;
    const naive = [4, 4, 4, 9, 9.5, 7, 5.5, 4.5, 4.2, 4, 4], hyst = [4, 4, 4, 9, 9.5, 9, 8.5, 8, 7.8, 7.6, 7.5];
    const sx = (i) => L + i * ((R - L) / 10);
    let s = `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--line)"/>`;
    s += `<rect x="${sx(2.5)}" y="${sy(12)}" width="${sx(4.5) - sx(2.5)}" height="${B - sy(12)}" style="fill:var(--serial); opacity:.08"/><text x="${sx(3.5)}" y="${sy(11.4)}" text-anchor="middle" style="fill:var(--serial); font:600 11.5px Manrope, sans-serif">récession</text>`;
    s += `<polyline points="${naive.map((u, i) => sx(i) + "," + sy(u)).join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.5"/>`;
    s += `<polyline points="${hyst.map((u, i) => sx(i) + "," + sy(u)).join(" ")}" style="fill:none; stroke:var(--plum); stroke-width:2.5; stroke-dasharray:7 5"/>`;
    s += `<text x="${sx(10) - 4}" y="${sy(4) + 18}" text-anchor="end" style="fill:var(--note); font:600 12px Manrope, sans-serif">sans hystérèse : retour au niveau initial</text>`;
    s += `<text x="${sx(10) - 4}" y="${sy(7.5) - 8}" text-anchor="end" style="fill:var(--plum); font:600 12px Manrope, sans-serif">avec hystérèse : le chômage reste élevé</text>`;
    s += `<text x="${L}" y="24" ${T}>Deux trajectoires du chômage après une récession (schéma)</text>`;
    s += `<text x="${R}" y="${B + 20}" text-anchor="end" ${M}>années →</text>`;
    return s;
  })(), "Illustration de l’hystérèse selon Blanchard et Summers (1986). Sans hystérèse, le chômage revient à son niveau naturel une fois la récession passée ; avec hystérèse, le niveau « naturel » lui-même a augmenté. Schéma sans données.", "Deux courbes de chômage après une récession, l’une revenant au niveau initial, l’autre restant haute");

  OEC.notices["taux-naturel"] = {
    essentiel: [
      "Le taux de chômage naturel est le niveau de chômage vers lequel l’économie tend lorsque l’inflation est stable. Il ne dépend pas de la politique monétaire, mais du fonctionnement du marché du travail : rencontre entre chômeurs et emplois, qualifications, négociation salariale, institutions.",
      "Tenter de maintenir le chômage en dessous de ce niveau par la relance provoque une inflation croissante ; le réduire durablement passe par des réformes du marché du travail, de la formation ou de l’assurance chômage.",
      "Ce taux n’est pas fixe ni « naturel » au sens d’immuable : il s’estime avec une grande marge d’erreur, et une longue période de chômage élevé peut l’augmenter durablement, c’est l’hystérèse."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi le chômage européen ne baissait-il plus ?", html: `
<p>Jusqu’au début des années 1970, le chômage en Europe occidentale est faible, souvent plus bas qu’aux États-Unis. Après les chocs pétroliers et les politiques de désinflation, il monte fortement des deux côtés de l’Atlantique. Mais à partir du milieu des années 1980, une différence frappante apparaît : aux États-Unis, le chômage redescend lors des reprises ; dans une grande partie de l’Europe, il reste durablement proche de 10 %, même quand la croissance revient. Pourquoi une économie en croissance garde-t-elle des millions de chômeurs ?</p>
<p>La réponse des économistes passe par une notion introduite à la fin des années 1960 par Milton <a href="#eco-friedman">Friedman</a> et Edmund Phelps : le <a href="#c-taux-naturel">taux de chômage naturel</a>. Elle a profondément changé la manière de penser le chômage, en distinguant ce que la politique de la demande peut faire et ce qui relève des structures du marché du travail.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Un chômage qui ne disparaît jamais</h4>
<p>Même dans une économie en pleine santé, il y a toujours des chômeurs. Chaque mois, des entreprises ferment et d’autres ouvrent, des salariés démissionnent pour chercher mieux, des jeunes entrent sur le marché du travail. Il faut du temps pour qu’un chômeur trouve un emploi qui corresponde à ses compétences et qu’une entreprise trouve le bon candidat. Ce chômage « frictionnel » est inévitable. S’y ajoute un chômage « structurel », quand les qualifications des chômeurs ou leur localisation ne correspondent pas aux emplois disponibles.</p>
<h4>2. La définition de Friedman</h4>
<p>Dans son discours de 1967, Friedman définit le taux naturel comme celui que produirait le système d’équilibre général, compte tenu des caractéristiques réelles du marché du travail : imperfections, coûts de recherche d’emploi, mobilité, salaire minimum, syndicats. Il le distingue clairement du chômage dû à une demande insuffisante, que la politique monétaire peut réduire temporairement. Le terme « naturel » ne signifie pas souhaitable ni immuable ; il veut dire indépendant de la politique monétaire.</p>
<h4>3. Le lien avec l’inflation</h4>
<p>Si le chômage descend en dessous de son niveau naturel, les entreprises se disputent les travailleurs, les salaires accélèrent, puis les prix. Une fois que les salariés anticipent cette inflation, ils réclament des hausses encore plus fortes. Maintenir le chômage sous ce niveau suppose donc une inflation toujours croissante. C’est pourquoi on parle aussi de NAIRU, sigle anglais du taux de chômage qui n’accélère pas l’inflation, introduit par Franco Modigliani et Lucas Papademos en 1975 (<a href="#c-courbe-phillips">voir la courbe de Phillips</a>).</p>
<h4>4. Ce qui détermine le taux naturel</h4>
<p>Les économistes ont identifié de nombreux déterminants. L’efficacité de la rencontre entre chômeurs et emplois, analysée par Peter Diamond, Dale Mortensen et Christopher Pissarides (Nobel 2010). Le système de négociation salariale : selon Richard Layard, Stephen Nickell et Richard Jackman (1991), si les salariés en place obtiennent des salaires élevés sans tenir compte des chômeurs, le chômage d’équilibre augmente. La durée et le montant de l’assurance chômage, qui influencent l’intensité de la recherche d’emploi. Le niveau du salaire minimum par rapport au salaire médian. La fiscalité du travail. La formation et l’apprentissage. La démographie : les jeunes changent plus souvent d’emploi.</p>
${beveridge}
<h4>5. La courbe de Beveridge</h4>
<p>Un outil simple aide à distinguer chômage conjoncturel et structurel : la courbe de Beveridge, qui met en relation le taux de chômage et le taux d’emplois vacants. En récession, le chômage monte et les emplois vacants baissent : on se déplace le long de la courbe. Si, en revanche, le chômage et les emplois vacants augmentent en même temps, la courbe s’est déplacée vers l’extérieur : les chômeurs et les emplois se rencontrent moins bien, et le chômage naturel a augmenté.</p>
<h4>6. L’hystérèse</h4>
<p>En 1986, Olivier Blanchard et Larry <a href="#eco-summers">Summers</a> proposent une explication de la persistance du chômage européen : le taux naturel lui-même dépend de l’histoire du chômage. Assar Lindbeck et Dennis Snower développent la même année l’idée d’« insiders » et d’« outsiders » : les salariés en place négocient pour eux-mêmes, sans se soucier des chômeurs. Les chômeurs de longue durée perdent leurs compétences, leurs réseaux et leur motivation ; les employeurs s’en méfient. Une récession longue peut donc relever durablement le chômage d’équilibre. C’est l’<a href="#c-hysterese">hystérèse</a>.</p>
${hysterese}` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Chocs et institutions</h4>
<p>Olivier Blanchard et Justin Wolfers (2000) cherchent à expliquer la divergence entre pays européens. Ni les chocs communs (pétrole, ralentissement de la productivité, taux d’intérêt élevés), ni les institutions seules ne suffisent : ce sont leurs interactions qui comptent. Des institutions rigides transforment un choc temporaire en chômage durable, tandis que des marchés du travail plus flexibles l’absorbent plus vite.</p>
<h4>Un taux difficile à estimer</h4>
<p>Douglas Staiger, James Stock et Mark Watson (1997) montrent que les estimations du NAIRU américain sont extrêmement imprécises : l’intervalle de confiance couvre plusieurs points de pourcentage. Dans les années 1990, le chômage américain descend sous 5 %, en dessous de la plupart des estimations, sans que l’inflation accélère. Alan Greenspan, président de la Fed, parie sur des gains de productivité et refuse de relever fortement les taux ; il a raison.</p>
<h4>Les cicatrices de la Grande Récession</h4>
<p>Laurence Ball (2009) montre que les pays où le chômage a augmenté le plus longtemps dans les années 1980 et 1990 sont aussi ceux où le NAIRU estimé a le plus augmenté, ce qui confirme l’hystérèse. Danny Yagan (2019) compare des régions américaines inégalement touchées par la crise de 2008 et trouve que les travailleurs des régions les plus frappées ont un taux d’emploi plus bas plusieurs années après, même une fois la reprise venue.</p>` }
    ],
    cas: [
      { titre: "La « flexicurité » danoise", html: `
<p>Au début des années 1990, le Danemark connaît un chômage de plus de 10 %. Les réformes de 1994 et des années suivantes combinent trois éléments : une protection de l’emploi faible, qui permet aux entreprises d’embaucher et de licencier facilement ; une assurance chômage généreuse ; et des politiques actives obligeant les chômeurs à suivre des formations ou des stages, avec une durée d’indemnisation progressivement raccourcie. Le chômage tombe à environ 4 % avant la crise de 2008. Le modèle suscite l’intérêt de toute l’Europe, même si sa réussite tient aussi à un niveau élevé de confiance sociale et à des dépenses publiques importantes, difficiles à transposer.</p>` },
      { titre: "Les réformes Hartz en Allemagne", html: `
<p>Au début des années 2000, l’Allemagne est surnommée « l’homme malade de l’Europe » ; le chômage enregistré dépasse 11 % en 2005. Le gouvernement de Gerhard Schröder adopte entre 2003 et 2005 les réformes dites Hartz, du nom du directeur des ressources humaines de Volkswagen qui avait présidé la commission : réorganisation des agences pour l’emploi, réduction de la durée d’indemnisation des chômeurs de longue durée, développement des petits emplois à temps partiel. Le chômage baisse ensuite fortement, jusqu’à environ 5 % à la fin des années 2010. Les économistes discutent encore de la part des réformes dans ce succès, par rapport à la modération salariale négociée par les syndicats et au boom des exportations, et de leur coût : l’essor d’un secteur à bas salaires et la hausse de la pauvreté laborieuse.</p>` },
      { titre: "La Suisse et l’apprentissage", html: `
<p>La Suisse a durablement l’un des taux de chômage les plus faibles d’Europe, et un chômage des jeunes particulièrement bas. Les explications avancées incluent un marché du travail relativement flexible, un partenariat social qui négocie au niveau des branches, et surtout le système de formation professionnelle duale : environ deux tiers des jeunes suivent un apprentissage, partagé entre l’entreprise et l’école professionnelle. Le passage de l’école à l’emploi se fait ainsi progressivement, avec des qualifications reconnues par les employeurs. Selon les termes de la théorie, ce système améliore l’appariement entre compétences et emplois et réduit le chômage naturel. Il a cependant un coût pour les entreprises formatrices, et sa capacité à s’adapter aux métiers du numérique fait débat.</p>` }
    ],
    objections: `
<h4>1. Un concept inobservable</h4>
<p>Le taux naturel n’est pas mesuré, il est estimé à partir de modèles, avec de larges marges d’erreur, et révisé après coup. Une banque centrale qui fonde ses décisions sur une estimation erronée risque soit de laisser l’inflation s’installer, soit de maintenir inutilement un chômage élevé. Jerome Powell, président de la Fed, a comparé en 2018 ces estimations à des étoiles qui guident la navigation mais dont la position est incertaine.</p>
<h4>2. Le mot « naturel » est trompeur</h4>
<p>Les critiques, notamment keynésiennes, soulignent que le terme suggère une fatalité ou une situation optimale, alors qu’il s’agit d’un produit d’institutions et de politiques. Il peut servir à justifier un chômage élevé comme inévitable.</p>
<h4>3. La demande compte aussi à long terme</h4>
<p>Si l’hystérèse existe, la distinction entre demande (court terme) et offre (long terme) perd de sa netteté : une politique de demande trop restrictive peut augmenter durablement le chômage naturel. C’est l’un des arguments en faveur de relances énergiques lors des récessions, comme en 2020.</p>
<h4>4. Les réformes ont des coûts</h4>
<p>Réduire l’assurance chômage ou assouplir la protection de l’emploi peut faire baisser le chômage mesuré tout en augmentant la précarité, les inégalités ou la pauvreté au travail. Le taux de chômage n’est pas le seul indicateur de bien-être du marché du travail.</p>`,
    ecoles: `
<p><b><a href="#eco-friedman">Friedman</a> et Edmund Phelps</b> introduisent la notion en 1967-1968 ; tous deux reçoivent le Nobel.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> distinguait déjà le chômage frictionnel du chômage involontaire dû à l’insuffisance de la demande ; la synthèse a retenu les deux.</p>
<p><b>Diamond, Mortensen et Pissarides</b> fondent la théorie moderne de la recherche d’emploi, qui explique la coexistence de chômage et d’emplois vacants.</p>
<p><b><a href="#eco-summers">Summers</a> et Blanchard</b> introduisent l’hystérèse, qui relie court et long terme.</p>
<p><b><a href="#eco-lucas">Lucas</a></b> et la nouvelle économie classique considèrent une partie du chômage comme le résultat de choix rationnels de recherche ou de loisir, une interprétation très contestée.</p>
<p><b>Les post-keynésiens</b> rejettent la notion d’un taux d’équilibre indépendant de la demande et voient dans le chômage un phénomène largement déterminé par la dépense globale.</p>`,
    source: {
      titre: "Milton Friedman, « The Role of Monetary Policy », American Economic Review, 1968",
      texte: "Le « taux naturel de chômage » est le niveau que produirait le système walrasien d’équations d’équilibre général, compte tenu des caractéristiques structurelles réelles des marchés du travail et des biens.",
      notes: `
<p><b>Le contexte.</b> Friedman explique ce que la politique monétaire peut et ne peut pas faire. Elle ne peut pas, dit-il, fixer durablement le taux de chômage ni le taux d’intérêt réel : ces grandeurs dépendent de forces réelles.</p>
<p><b>Le choix du mot.</b> Friedman reconnaît dans le même texte qu’il emprunte l’expression par analogie avec le « taux d’intérêt naturel » de l’économiste suédois Knut Wicksell. Le mot désigne un niveau d’équilibre, non un état de nature.</p>
<p><b>Ce que la définition contient.</b> La suite du passage énumère les « caractéristiques structurelles » : imperfections du marché, variabilité de l’offre et de la demande, coût de l’information sur les emplois, coûts de mobilité. Friedman ajoute que beaucoup d’entre elles sont le produit de l’action humaine et de la politique, et peuvent donc changer.</p>`
    },
    quiz: [
      { q: "Que désigne le taux de chômage naturel ?",
        o: ["Un chômage nul", "Le niveau de chômage compatible avec une inflation stable, déterminé par les structures du marché du travail", "Le chômage des personnes qui ne veulent pas travailler", "Le chômage des pays riches"], c: 1,
        e: "C’est le niveau vers lequel l’économie tend à inflation stable ; il dépend de la rencontre entre chômeurs et emplois, des qualifications et des institutions." },
      { q: "Que se passe-t-il si une politique de relance maintient le chômage en dessous de son niveau naturel ?",
        o: ["Le chômage reste bas sans conséquence", "L’inflation accélère de façon croissante", "Les prix baissent", "La productivité augmente automatiquement"], c: 1,
        e: "Les salaires accélèrent, puis les anticipations d’inflation s’ajustent ; il faut une inflation toujours plus forte pour maintenir le chômage aussi bas." },
      { q: "Que signale un déplacement vers l’extérieur de la courbe de Beveridge ?",
        o: ["Une récession ordinaire", "Une dégradation de la rencontre entre chômeurs et emplois, donc un chômage naturel plus élevé", "Une baisse de la population", "Une hausse des salaires"], c: 1,
        e: "Si chômage et emplois vacants augmentent ensemble, les chômeurs et les postes se rencontrent moins bien : le problème est structurel." },
      { q: "Qu’est-ce que l’hystérèse du chômage ?",
        o: ["Le chômage saisonnier", "Le fait qu’un chômage élevé et durable augmente le chômage naturel lui-même", "L’effet du salaire minimum", "La baisse du chômage en période de croissance"], c: 1,
        e: "Les chômeurs de longue durée perdent compétences et contacts, les insiders négocient sans eux : le chômage d’équilibre s’élève." },
      { q: "Quel est le principal déterminant du faible chômage des jeunes en Suisse avancé dans cette notice ?",
        o: ["L’absence de salaire minimum national", "Le système de formation professionnelle duale", "Le franc fort", "L’émigration des jeunes"], c: 1,
        e: "L’apprentissage, qui combine entreprise et école professionnelle, facilite le passage de la formation à l’emploi et améliore l’appariement." }
    ],
    ouverte: {
      q: "Si le chômage naturel dépend des institutions, pourquoi tous les pays n’adoptent-ils pas les institutions des pays où il est le plus bas, comme la Suisse ou le Danemark ?",
      r: "D’abord parce que les institutions forment des ensembles cohérents : la flexicurité danoise suppose une assurance chômage généreuse financée par des impôts élevés et un haut niveau de confiance ; l’apprentissage suisse suppose des entreprises disposées à former et des branches organisées. Importer un élément isolé peut échouer. Ensuite parce que chaque réforme fait des perdants identifiables, souvent les salariés en place ou les chômeurs actuels, qui s’y opposent. Enfin parce que les sociétés n’ont pas les mêmes préférences : certaines acceptent un chômage plus élevé en échange d’une protection plus forte de l’emploi ou d’inégalités plus faibles. L’économie peut éclairer ces arbitrages, pas les trancher seule."
    },
    lectures: [
      ["Accessible", "Olivier Blanchard, Macroéconomie (manuel), chapitres sur le marché du travail et le taux naturel."],
      ["Accessible", "Pierre Cahuc et André Zylberberg, Le Chômage, fatalité ou nécessité ?, 2004."],
      ["Intermédiaire", "Milton Friedman, « The Role of Monetary Policy », American Economic Review, 1968."],
      ["Intermédiaire", "Richard Layard, Stephen Nickell et Richard Jackman, Unemployment: Macroeconomic Performance and the Labour Market, 1991."],
      ["Recherche", "Olivier Blanchard et Lawrence Summers, « Hysteresis and the European Unemployment Problem », NBER Macroeconomics Annual, 1986 ; Olivier Blanchard et Justin Wolfers, « The Role of Shocks and Institutions in the Rise of European Unemployment », Economic Journal, 2000."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Il y a toujours des chômeurs</h3>
<p>Même quand l’économie va très bien, des gens cherchent un emploi : des jeunes qui sortent de l’école, des salariés qui changent de métier, des personnes dont l’entreprise a fermé. Trouver le bon poste prend du temps. Il existe donc un niveau de chômage qu’on ne peut pas faire disparaître simplement en relançant l’économie : c’est le <b>taux de chômage naturel</b>.</p>
<h3>Ce qu’on ne peut pas forcer</h3>
<p>Pour <a href="#eco-friedman">Milton Friedman</a>, si l’on essaie de faire descendre le chômage en dessous de ce niveau en injectant de l’argent dans l’économie, les entreprises se disputent les travailleurs, les salaires et les prix montent de plus en plus vite. On obtient de l’inflation, pas d’emplois durables. Pour réduire vraiment le chômage, il faut agir sur le marché du travail : formation, rencontre entre chômeurs et entreprises, règles d’embauche, assurance chômage.</p>
<h3>Quand le chômage s’installe</h3>
<p>Ce niveau n’est pas fixé une fois pour toutes. Après une longue crise, les chômeurs de longue durée perdent leurs compétences et leurs contacts, et les employeurs hésitent à les embaucher. Le chômage reste alors élevé même quand la croissance revient. C’est ce qu’on appelle l’<b>hystérèse</b>, observée en Europe dans les années 1980.</p>
${hysterese}
<h3>À retenir</h3>
<p>La Suisse, avec son système d’apprentissage, ou le Danemark, avec sa « flexicurité », ont un chômage durablement bas. Mais leurs recettes reposent sur des ensembles d’institutions difficiles à copier. La notice complète présente les théories et les débats.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      depart: "Pourquoi le chômage européen restait-il élevé malgré la croissance ?",
      raisonnement: "Six étapes : frictions, définition, lien avec l’inflation, déterminants, courbe de Beveridge, hystérèse.",
      preuves: "Chocs et institutions, un taux difficile à estimer, les cicatrices de 2008.",
      cas: "La flexicurité danoise, les réformes Hartz, l’apprentissage suisse.",
      objections: "Un concept inobservable, un mot trompeur, la demande à long terme, le coût des réformes.",
      ecoles: "Friedman et Phelps, Keynes, Diamond-Mortensen-Pissarides, Blanchard et Summers, Lucas, post-keynésiens.",
      source: "Friedman, 1968 : la définition du taux naturel.",
      quiz: "Cinq questions corrigées et une question sur les modèles nationaux.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     14. UTILITÉ MARGINALE ET RÉVOLUTION MARGINALISTE
     ===================================================================== */
  const verres = fig(300, (() => {
    const mu = [10, 7, 5, 3.5, 2.2, 1.2, 0.5], L = 70, B = 240, w = 54, gap = 18, sc = 16;
    let s = `<text x="${L}" y="24" ${T}>Utilité de chaque verre d’eau supplémentaire pour un randonneur assoiffé</text>`;
    let tot = 0;
    mu.forEach((m, i) => {
      const x = L + i * (w + gap); tot += m;
      s += `<rect x="${x}" y="${B - m * sc}" width="${w}" height="${m * sc}" rx="4" style="fill:var(--note)"/>`;
      s += `<text x="${x + w / 2}" y="${B - m * sc - 6}" text-anchor="middle" ${M}>${String(m).replace(".", ",")}</text>`;
      s += `<text x="${x + w / 2}" y="${B + 18}" text-anchor="middle" ${M}>${i === 0 ? "1er" : (i + 1) + "e"}</text>`;
    });
    s += `<line x1="${L - 6}" y1="${B}" x2="${L + 7 * (w + gap)}" y2="${B}" style="stroke:var(--line)"/>`;
    s += `<text x="${L}" y="${B + 44}" ${S}>Utilité totale des sept verres : ${String(tot.toFixed(1)).replace(".", ",")}. Le premier vaut beaucoup, le septième presque rien.</text>`;
    return s;
  })(), "Utilité marginale décroissante (valeurs illustratives). Ce n’est pas l’utilité totale de l’eau qui fixe ce qu’on est prêt à payer pour un verre de plus, mais l’utilité du dernier verre : l’utilité marginale.", "Barres décroissantes représentant l’utilité de verres d’eau successifs");

  OEC.notices["utilite-marginale"] = {
    essentiel: [
      "L’utilité marginale est la satisfaction supplémentaire apportée par la dernière unité consommée d’un bien. Elle diminue généralement à mesure que l’on en consomme davantage : le premier verre d’eau vaut beaucoup plus que le dixième.",
      "Ce principe, découvert simultanément par Jevons, Menger et Walras au début des années 1870, résout le paradoxe de l’eau et du diamant et fonde la valeur sur l’utilité et la rareté plutôt que sur le travail. C’est la « révolution marginaliste ».",
      "Le raisonnement « à la marge » s’est étendu à toute l’économie (coût marginal, productivité marginale), mais il suscite des débats sur la mesure du bien-être, la comparaison entre personnes et la rationalité des choix."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : l’eau et le diamant", html: `
<p>En 1776, Adam <a href="#eco-smith">Smith</a> formule une énigme qui va tourmenter les économistes pendant un siècle. Rien n’est plus utile que l’eau, et pourtant on ne peut presque rien obtenir en échange ; un diamant n’a guère d’usage, et l’on peut l’échanger contre une grande quantité d’autres biens. Smith en conclut que l’utilité ne peut expliquer la valeur d’échange, et cherche ailleurs, dans le travail.</p>
<p>La solution existait pourtant déjà, ignorée de tous. En 1854, un fonctionnaire prussien, Hermann Heinrich Gossen, publie à ses frais un traité où il énonce le principe de l’utilité décroissante. Le livre ne se vend pas ; Gossen, découragé, retire les exemplaires restants et meurt quatre ans plus tard dans l’anonymat. Vingt ans après, trois économistes qui ne se connaissent pas, l’Anglais William Stanley Jevons, l’Autrichien Carl Menger et le Français installé à Lausanne Léon <a href="#eco-walras">Walras</a>, redécouvrent la même idée. Jevons découvrira le livre de Gossen en 1878 et lui rendra hommage.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Utilité totale et utilité marginale</h4>
<p>L’utilité totale d’un bien est la satisfaction qu’apporte toute la quantité consommée. L’utilité marginale est celle qu’apporte la dernière unité. Pour un randonneur assoiffé, le premier verre d’eau est vital, le deuxième très agréable, le cinquième à peine utile, le dixième superflu. L’utilité totale continue d’augmenter, mais de moins en moins vite : l’utilité marginale décroît.</p>
${verres}
<h4>2. La solution du paradoxe</h4>
<p>Ce qui détermine le prix qu’on est prêt à payer pour un bien n’est pas son utilité totale, mais l’utilité de la dernière unité dont on dispose. L’eau est si abondante dans la plupart des pays que le dernier litre ne sert qu’à des usages secondaires ; son utilité marginale est faible, et son prix aussi. Les diamants sont si rares que le dernier disponible reste très désiré. Dans le désert, les rôles s’inversent : un voyageur assoiffé donnerait volontiers son diamant pour un verre d’eau.</p>
<h4>3. Le principe d’égalisation</h4>
<p>Gossen énonce un second principe : un consommateur qui dispose d’un budget limité le répartit entre les biens de telle sorte que le dernier franc dépensé lui apporte la même satisfaction dans tous les usages. Si le dernier franc consacré aux livres apporte plus que le dernier franc consacré aux restaurants, il vaut mieux déplacer un peu de dépense des restaurants vers les livres. Ce principe explique la forme des courbes de demande : quand le prix d’un bien baisse, il devient intéressant d’en acheter davantage, jusqu’à ce que son utilité marginale par franc rejoigne celle des autres biens.</p>
<h4>4. Une révolution dans la théorie de la valeur</h4>
<p>Pour les classiques, la valeur d’un bien dépend de ce qu’il a coûté à produire, notamment en travail. Pour les marginalistes, elle dépend de ce qu’il apporte à ceux qui le désirent, compte tenu de sa rareté. Menger va plus loin : la valeur des facteurs de production eux-mêmes, terres, machines, travail, dérive de la valeur des biens de consommation qu’ils permettent de produire. La valeur remonte de la consommation vers la production, et non l’inverse.</p>
<h4>5. La généralisation du raisonnement à la marge</h4>
<p>Le raisonnement à la marge devient la méthode générale de l’économie. Une entreprise produit une unité de plus tant que la recette de cette unité dépasse son coût marginal. Elle embauche un salarié de plus tant que ce qu’il produit dépasse son salaire : c’est la théorie de la productivité marginale, développée par John Bates Clark en 1899, selon laquelle chaque facteur est payé selon sa contribution à la marge. Le calcul différentiel devient l’outil naturel de la discipline.</p>
<h4>6. De l’utilité mesurable à l’utilité ordinale</h4>
<p>Jevons pensait pouvoir mesurer l’utilité comme une quantité de plaisir. <a href="#eco-pareto">Pareto</a> montre que ce n’est pas nécessaire : il suffit de savoir qu’un panier de biens est préféré à un autre, sans dire de combien. John Hicks et Roy Allen reformulent en 1934 la théorie du consommateur sur cette base ; Paul <a href="#eco-samuelson">Samuelson</a> propose en 1938 la théorie des « préférences révélées », qui déduit les préférences des choix observés. L’utilité marginale devient une propriété des préférences plutôt qu’une sensation mesurable.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Une révolution simultanée</h4>
<p>Pourquoi trois auteurs découvrent-ils la même idée en même temps ? Les historiens de la pensée, comme Mark Blaug dans un article de 1972 intitulé « Was There a Marginal Revolution? », soulignent que le changement a été plus progressif qu’on ne le dit : les livres de Jevons et de Menger ont été peu lus au départ, et la nouvelle théorie ne s’impose qu’avec Marshall dans les années 1890. Elle répond aussi à un contexte : la théorie de la valeur-travail était devenue, avec Marx, une arme politique, et les économistes cherchaient un fondement différent.</p>
<h4>Revenu et bien-être</h4>
<p>Si l’utilité marginale de la richesse décroît, un franc supplémentaire devrait apporter moins de satisfaction à un riche qu’à un pauvre. Les enquêtes de satisfaction de vie le confirment : Angus Deaton (2008), Betsey Stevenson et Justin Wolfers (2008) montrent que la satisfaction augmente à peu près proportionnellement au logarithme du revenu, c’est-à-dire qu’une même hausse en pourcentage apporte un gain semblable, quel que soit le niveau. Doubler un revenu de 2 000 francs a autant d’effet que doubler un revenu de 20 000 francs.</p>
<h4>Les prix de l’eau</h4>
<p>De nombreuses villes appliquent à l’eau des tarifs progressifs par tranches : les premiers mètres cubes, nécessaires à la vie, sont peu chers ; les suivants, consacrés à l’arrosage ou aux piscines, beaucoup plus. Ces tarifs reflètent exactement l’idée que l’utilité marginale de l’eau diminue avec la quantité consommée.</p>` }
    ],
    cas: [
      { titre: "Le diamant et la rareté organisée", html: `
<p>L’exemple du diamant cache une ironie. Pendant la plus grande partie du XXe siècle, la société De Beers contrôle l’essentiel de l’offre mondiale de diamants bruts, stocke une partie de la production et limite les ventes pour maintenir des prix élevés. En 1947, son agence de publicité lance le slogan « A diamond is forever », qui associe le diamant aux fiançailles et décourage la revente. La rareté du diamant, qui explique son prix selon les marginalistes, est en partie organisée. Le cas montre que l’utilité et la rareté ne sont pas toujours des données naturelles : elles peuvent être façonnées par le pouvoir de marché et la publicité, ce que <a href="#eco-veblen">Veblen</a> et <a href="#eco-galbraith">Galbraith</a> ont souligné.</p>` },
      { titre: "L’impôt progressif et le « sacrifice égal »", html: `
<p>À la fin du XIXe siècle, l’économiste Francis Ysidro Edgeworth tire de l’utilité marginale décroissante un argument en faveur de l’impôt progressif : si un franc prélevé coûte moins de satisfaction à un riche qu’à un pauvre, répartir la charge fiscale de manière à minimiser la perte totale de bien-être implique de taxer davantage les hauts revenus. Le principe du « sacrifice égal » a nourri la création des impôts progressifs sur le revenu au début du XXe siècle, en Europe comme en Suisse. Les critiques objectent que cet argument suppose de pouvoir comparer les satisfactions de personnes différentes, ce que Pareto et ses successeurs jugent impossible.</p>` },
      { titre: "Les prix de la dernière heure", html: `
<p>Le raisonnement marginal éclaire de nombreuses décisions quotidiennes. Une compagnie aérienne vend à prix réduit les derniers sièges d’un vol presque plein : le coût marginal d’un passager supplémentaire est quasi nul, et toute recette est bonne à prendre. Un restaurant ouvre le dimanche si la recette de ce jour dépasse ses coûts supplémentaires, même s’il ne couvre pas sa part des frais fixes. Un étudiant décide de réviser une heure de plus si le gain attendu sur sa note vaut le sommeil perdu. Dans tous ces cas, ce sont les grandeurs à la marge, et non les moyennes, qui guident la bonne décision.</p>` }
    ],
    objections: `
<h4>1. Peut-on mesurer l’utilité ?</h4>
<p>Les premiers marginalistes parlaient d’utilité comme d’une quantité mesurable. Les économistes ont largement abandonné cette ambition au profit des préférences ordinales. Mais alors, comparer les satisfactions de personnes différentes devient impossible, ce qui rend difficile toute conclusion sur la justice de la répartition (<a href="#c-optimum-pareto">voir l’optimum de Pareto</a>).</p>
<h4>2. La critique marxiste</h4>
<p>Pour les héritiers de <a href="#eco-marx">Marx</a>, la théorie subjective de la valeur détourne l’attention de la production et des rapports sociaux vers les préférences individuelles, et naturalise la répartition des revenus en la présentant comme la rémunération de contributions marginales.</p>
<h4>3. Les préférences ne sont pas données</h4>
<p><a href="#eco-veblen">Veblen</a> et <a href="#eco-galbraith">Galbraith</a> rappellent que les désirs sont façonnés par la société, le statut et la publicité : la valeur d’un bien peut augmenter avec son prix, ce que la théorie standard ne prévoit pas.</p>
<h4>4. La rationalité en question</h4>
<p>L’économie comportementale montre que les choix réels s’écartent souvent du principe d’égalisation : nous raisonnons par « comptes mentaux » séparés, sommes sensibles au cadrage et aux pertes (<a href="#c-aversion-pertes">voir l’aversion aux pertes</a>). La théorie marginaliste décrit plutôt un idéal de décision qu’un comportement observé.</p>
<h4>5. La critique de Sraffa</h4>
<p>Piero Sraffa (1960) montre qu’on peut construire une théorie cohérente des prix à partir des seules conditions de production, sans recourir à l’utilité, et que la théorie marginaliste de la répartition se heurte à des difficultés logiques dans la mesure du capital, au cœur de la controverse des deux Cambridge.</p>`,
    ecoles: `
<p><b><a href="#eco-aristote">Aristote</a></b> distinguait déjà valeur d’usage et valeur d’échange.</p>
<p><b><a href="#eco-say">Say</a></b> et, avant lui, Condillac fondaient la valeur sur l’utilité et annonçaient le marginalisme.</p>
<p><b>Jevons, Menger et <a href="#eco-walras">Walras</a></b> forment le trio de la révolution marginaliste.</p>
<p><b><a href="#eco-marshall">Marshall</a></b> réconcilie utilité et coût de production dans l’image des ciseaux.</p>
<p><b><a href="#eco-mises">Mises</a></b> et l’école autrichienne prolongent l’approche subjective de Menger et en font la base de leur théorie du calcul économique.</p>
<p><b><a href="#eco-kahneman">Kahneman</a></b> distingue l’« utilité de décision » qui guide les choix et l’« utilité vécue » qu’ils procurent, et montre qu’elles ne coïncident pas toujours.</p>`,
    source: {
      titre: "William Stanley Jevons, The Theory of Political Economy, 1871, chapitre 1",
      texte: "Une réflexion et des recherches répétées m’ont conduit à l’opinion assez nouvelle que la valeur dépend entièrement de l’utilité.",
      notes: `
<p><b>Le contexte.</b> Jevons, mathématicien et logicien, veut faire de l’économie une science exacte, comparable à la mécanique. Il écrit contre la tradition de Ricardo et de Mill, qui dominait l’enseignement britannique.</p>
<p><b>« Assez nouvelle ».</b> Jevons a conscience de rompre avec un siècle d’économie politique, même s’il découvrira plus tard que Gossen, Cournot et d’autres l’avaient précédé. La modestie de la formule contraste avec l’ampleur de la rupture.</p>
<p><b>« Entièrement ».</b> C’est le mot le plus contestable. Marshall, vingt ans plus tard, rétablira le rôle du coût de production : la valeur dépend à la fois de l’utilité et du coût, comme les deux lames d’une paire de ciseaux.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que l’utilité marginale ?",
        o: ["La satisfaction totale procurée par un bien", "La satisfaction supplémentaire apportée par la dernière unité consommée", "Le prix d’un bien", "Le coût de production d’un bien"], c: 1,
        e: "C’est l’utilité de l’unité supplémentaire. Elle diminue en général quand la quantité consommée augmente." },
      { q: "Comment l’utilité marginale résout-elle le paradoxe de l’eau et du diamant ?",
        o: ["L’eau est inutile", "L’eau, abondante, a une utilité marginale faible ; le diamant, rare, une utilité marginale élevée", "Le diamant coûte plus de travail", "Les prix sont fixés par l’État"], c: 1,
        e: "Ce n’est pas l’utilité totale qui fixe le prix, mais celle de la dernière unité disponible, qui dépend de la rareté." },
      { q: "Selon le principe d’égalisation de Gossen, quand un consommateur a-t-il bien réparti son budget ?",
        o: ["Quand il dépense autant pour chaque bien", "Quand le dernier franc dépensé apporte la même satisfaction dans tous les usages", "Quand il achète les biens les moins chers", "Quand il épargne la moitié de son revenu"], c: 1,
        e: "Si un usage rapportait plus à la marge, il serait avantageux d’y déplacer une partie de la dépense." },
      { q: "Quels économistes ont découvert simultanément le principe marginaliste au début des années 1870 ?",
        o: ["Smith, Ricardo et Malthus", "Jevons, Menger et Walras", "Keynes, Hayek et Friedman", "Marx, Engels et Lassalle"], c: 1,
        e: "Jevons (1871), Menger (1871) et Walras (1874), sans se connaître, fondent la valeur sur l’utilité marginale." },
      { q: "Quel argument Edgeworth tire-t-il de l’utilité marginale décroissante ?",
        o: ["Il faut supprimer l’impôt", "Un impôt progressif minimise la perte totale de bien-être", "Les riches doivent payer moins", "L’impôt doit être le même pour tous"], c: 1,
        e: "Si un franc coûte moins de satisfaction à un riche qu’à un pauvre, taxer davantage les hauts revenus réduit le sacrifice total ; l’argument suppose cependant des comparaisons entre personnes." }
    ],
    ouverte: {
      q: "De nombreuses communes suisses facturent l’eau selon un tarif unique par mètre cube. Faudrait-il, au regard de l’utilité marginale, adopter des tarifs progressifs par tranches ?",
      r: "L’utilité marginale décroissante plaide pour une tarification par tranches : les premiers mètres cubes, essentiels, peuvent être bon marché, tandis que les usages moins nécessaires (arrosage, piscines) sont facturés plus cher, ce qui encourage les économies là où elles coûtent le moins de bien-être. La Suisse étant riche en eau, l’enjeu de rareté est cependant moins fort que dans les régions sèches, même si les sécheresses estivales récentes l’ont rendu plus visible. Plusieurs objections apparaissent : les tarifs par ménage pénalisent les familles nombreuses si l’on ne tient pas compte de la taille du foyer ; le coût du réseau est essentiellement fixe, ce qui justifie une taxe de base ; et la complexité administrative a un coût. Un économiste conclura que la tarification doit refléter à la fois la valeur marginale de l’eau, son coût et des considérations d’équité."
    },
    lectures: [
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitre sur le monde victorien et l’économie marginaliste."],
      ["Accessible", "Bernard Guerrien, Dictionnaire d’analyse économique, articles « utilité » et « marginalisme »."],
      ["Intermédiaire", "W. S. Jevons, The Theory of Political Economy (1871), chapitres 1 à 3 ; Carl Menger, Principes d’économie politique (1871), chapitres 2 et 3."],
      ["Intermédiaire", "Mark Blaug, La Pensée économique, chapitres sur la révolution marginaliste."],
      ["Recherche", "Mark Blaug, « Was There a Marginal Revolution? », History of Political Economy, 1972 ; Betsey Stevenson et Justin Wolfers, « Economic Growth and Subjective Well-Being », Brookings Papers, 2008."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>L’eau et le diamant</h3>
<p>Pourquoi l’eau, indispensable à la vie, ne coûte-t-elle presque rien, alors qu’un diamant, qui ne sert à rien de vital, vaut une fortune ? Adam <a href="#eco-smith">Smith</a> se posait déjà la question en 1776, sans trouver de réponse satisfaisante.</p>
<h3>Le dernier verre</h3>
<p>La réponse vient un siècle plus tard. Imaginez un randonneur assoiffé : le premier verre d’eau lui est vital, le deuxième très agréable, le cinquième à peine utile. La satisfaction apportée par chaque verre supplémentaire diminue. Les économistes l’appellent l’<b>utilité marginale</b>. Ce qui fixe le prix, ce n’est pas l’utilité de toute l’eau, mais celle du dernier verre. Comme l’eau est abondante, le dernier verre vaut peu ; comme les diamants sont rares, le dernier diamant vaut beaucoup.</p>
${verres}
<h3>Une révolution</h3>
<p>Trois économistes, Jevons en Angleterre, Menger en Autriche et <a href="#eco-walras">Walras</a> en Suisse, découvrent cette idée en même temps, vers 1871-1874. Elle change toute l’économie : la valeur d’un bien ne dépend plus du travail qu’il a coûté, mais du désir qu’on en a et de sa rareté. Et l’on prend l’habitude de raisonner « à la marge » : faut-il produire une unité de plus, embaucher une personne de plus, réviser une heure de plus ?</p>
<h3>À retenir</h3>
<p>Ce sont les comparaisons à la marge, et non les moyennes, qui guident les bonnes décisions. La notice complète présente l’histoire de cette idée, ses applications et ses critiques.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Le paradoxe de l’eau et du diamant, et le génie oublié de Gossen.",
      raisonnement: "Six étapes, de l’utilité décroissante à l’utilité ordinale.",
      preuves: "Une révolution simultanée, revenu et bien-être, les prix de l’eau.",
      cas: "Le diamant et la rareté organisée, l’impôt progressif, les décisions à la marge.",
      objections: "La mesure de l’utilité, la critique marxiste, les préférences façonnées, la rationalité, Sraffa.",
      ecoles: "Aristote, Say, Jevons-Menger-Walras, Marshall, Mises, Kahneman.",
      source: "Jevons, 1871 : la valeur dépend entièrement de l’utilité.",
      quiz: "Cinq questions corrigées et une question sur la tarification de l’eau.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
