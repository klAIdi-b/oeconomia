/* Œconomia — notices longues, lot 4 (b) : rente différentielle, paradoxe de l'épargne */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     19. RENTE DIFFÉRENTIELLE
     ===================================================================== */
  const terres = fig(300, (() => {
    const lands = [["Terre A", 100], ["Terre B", 90], ["Terre C", 80]], L = 90, B = 240, sc = 1.7, w = 110;
    let s = `<text x="20" y="24" ${T}>Même travail et même capital sur trois terres de fertilité inégale (exemple de Ricardo)</text>`;
    lands.forEach(([n, q], i) => {
      const x = L + i * 170, hc = 80 * sc, hr = (q - 80) * sc;
      s += `<rect x="${x}" y="${B - hc}" width="${w}" height="${hc}" rx="4" style="fill:var(--note-soft); stroke:var(--note)"/>`;
      if (hr > 0) s += `<rect x="${x}" y="${B - hc - hr}" width="${w}" height="${hr}" rx="4" style="fill:var(--gold)"/>`;
      s += `<text x="${x + w / 2}" y="${B - hc - hr - 8}" text-anchor="middle" style="fill:var(--ink); font:600 12.5px 'JetBrains Mono', monospace">${q} quarters</text>`;
      s += `<text x="${x + w / 2}" y="${B + 18}" text-anchor="middle" ${T}>${n}</text>`;
      s += `<text x="${x + w / 2}" y="${B - hc / 2 + 4}" text-anchor="middle" ${S}>coût couvert</text>`;
      if (hr > 0) s += `<text x="${x + w / 2}" y="${B - hc - hr / 2 + 4}" text-anchor="middle" style="fill:var(--paper); font:700 12px Manrope, sans-serif">rente ${q - 80}</text>`;
    });
    s += `<line x1="${L - 10}" y1="${B}" x2="${L + 2 * 170 + w + 10}" y2="${B}" style="stroke:var(--line)"/>`;
    s += `<text x="20" y="284" ${S}>Le prix du blé couvre le coût sur la terre C, la moins fertile cultivée. Les terres A et B dégagent un surplus : la rente.</text>`;
    return s;
  })(), "La rente différentielle chez Ricardo (Principes, chapitre 2). Le prix est fixé par les conditions de production les plus défavorables ; la rente est l’avantage des meilleures terres. Si l’on met en culture une terre D encore moins fertile, toutes les rentes augmentent.", "Barres de production de trois terres avec la rente en surplus");

  const thunen = fig(260, (() => {
    const cx = 190, cy = 150;
    let s = `<text x="20" y="24" ${T}>La rente urbaine décroît avec la distance au centre (schéma d’après von Thünen et Alonso)</text>`;
    [[120, "var(--paper-2)", ""], [85, "var(--note-soft)", ""], [50, "color-mix(in srgb, var(--gold) 35%, transparent)", ""], [20, "var(--gold)", ""]].forEach(([r, f]) => (s += `<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:${f}; stroke:var(--line)"/>`));
    s += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" style="fill:var(--paper); font:700 11px Manrope, sans-serif">centre</text>`;
    s += `<text x="${cx + 135}" y="${cy - 60}" ${S}>Près du centre : accès à l’emploi et aux services,</text><text x="${cx + 135}" y="${cy - 44}" ${S}>forte demande, foncier rare, rente très élevée.</text>`;
    s += `<text x="${cx + 135}" y="${cy + 40}" ${S}>En périphérie : temps de transport plus long,</text><text x="${cx + 135}" y="${cy + 56}" ${S}>la rente baisse jusqu’au prix du terrain agricole.</text>`;
    return s;
  })(), "Le principe de la rente de situation. Johann Heinrich von Thünen (1826) l’applique aux cultures autour d’une ville ; William Alonso (1964) au logement urbain. Ce qui rend une parcelle précieuse, c’est son emplacement, qu’aucun travail du propriétaire n’a créé.", "Cercles concentriques autour d’un centre-ville");

  OEC.notices["rente"] = {
    essentiel: [
      "La rente différentielle est le revenu que procure une ressource rare et de qualité supérieure, terre fertile, emplacement central, gisement riche, sans effort supplémentaire de son propriétaire. Elle vient de l’écart entre cette ressource et la moins bonne qu’il faut encore utiliser.",
      "Chez Ricardo, ce n’est pas la rente qui rend le blé cher, c’est le blé cher qui crée la rente : le prix est fixé par le coût sur la terre la moins fertile, et les meilleures terres empochent la différence. Quand la population croît, la rente grandit aux dépens des profits.",
      "L’idée s’applique aujourd’hui surtout au foncier urbain et aux ressources naturelles. Elle fonde des propositions de taxation des plus-values foncières et des rentes minières, et la notion plus large de « recherche de rente » pour désigner la quête de privilèges."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi un mètre carré vaut-il dix fois plus à Zurich qu’à la campagne ?", html: `
<p>Construire un immeuble coûte à peu près la même chose au centre de Zurich ou de Genève et dans un village du Jura : mêmes matériaux, mêmes salaires, mêmes normes. Pourtant, un appartement au centre-ville se vend plusieurs fois plus cher. La différence ne tient pas au bâtiment, mais au terrain, ou plutôt à son emplacement : proximité des emplois, des transports, des écoles, des commerces. Le propriétaire n’a rien fait pour créer cette valeur ; elle vient de la ville qui s’est développée autour de lui.</p>
<p>Ce phénomène a été analysé il y a plus de deux siècles à propos de la terre agricole. En 1815, au moment du débat sur les droits de douane sur le blé, quatre auteurs, Thomas <a href="#eco-malthus">Malthus</a>, Edward West, Robert Torrens et David <a href="#eco-ricardo">Ricardo</a>, publient presque simultanément la théorie de la rente différentielle. Ricardo en fait l’un des piliers de son système.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Des terres inégales</h4>
<p>Supposons une économie où l’on cultive d’abord les meilleures terres. Tant qu’il y en a assez pour nourrir la population, personne ne paie pour les utiliser : comme l’air ou l’eau, elles sont abondantes et gratuites. Mais quand la population augmente, il faut mettre en culture des terres moins fertiles ou plus éloignées, qui produisent moins avec le même travail et le même capital.</p>
<h4>2. Le prix fixé à la marge</h4>
<p>Le blé produit sur la terre la moins fertile doit couvrir son coût de production, sinon personne ne la cultiverait. Ce coût fixe donc le prix du blé pour tous, car un même bien se vend au même prix sur un marché. Les terres plus fertiles, qui produisent davantage avec le même coût, dégagent alors un surplus. Le fermier qui les exploite le verse au propriétaire, car d’autres fermiers seraient prêts à payer pour y accéder : c’est la rente.</p>
${terres}
<h4>3. Le blé n’est pas cher parce qu’on paie une rente</h4>
<p>Ricardo en tire une conclusion contre-intuitive : « le blé n’est pas cher parce qu’on paie une rente, mais on paie une rente parce que le blé est cher ». Supprimer la rente, par exemple en la taxant, ne ferait pas baisser le prix du blé, qui reste fixé par les conditions de production sur la plus mauvaise terre. La rente est un surplus, pas un coût. C’est ce qui la rend, pour beaucoup d’économistes, idéale à taxer.</p>
<h4>4. La marge intensive</h4>
<p>On peut aussi produire davantage sur une même terre en y ajoutant du travail et du capital, mais chaque apport supplémentaire rapporte moins que le précédent : ce sont les rendements décroissants. La rente apparaît alors aussi sur une même parcelle, comme la différence entre le produit des premiers apports et celui du dernier.</p>
<h4>5. La rente contre les profits</h4>
<p>À mesure que la population augmente, on cultive des terres de plus en plus pauvres, le prix du blé monte, et la rente des bonnes terres augmente. Le salaire, qui doit permettre à l’ouvrier de se nourrir, augmente aussi. Le profit, coincé entre les deux, diminue. Pour Ricardo, l’intérêt des propriétaires fonciers s’oppose à celui de toutes les autres classes. Importer du blé étranger repousse ce mouvement : d’où son combat contre les Corn Laws.</p>
<h4>6. La rente de situation</h4>
<p>En 1826, l’Allemand Johann Heinrich von Thünen étend le raisonnement à la distance : autour d’une ville, les terres proches valent plus, car le transport des récoltes coûte moins. William Alonso applique le même principe à la ville moderne en 1964 : les ménages paient plus cher pour habiter près des emplois. La rente urbaine est aujourd’hui la forme la plus importante de rente foncière.</p>
${thunen}
<h4>7. De la rente foncière à la « recherche de rente »</h4>
<p><a href="#eco-marshall">Marshall</a> généralise la notion : tout revenu qui dépasse ce qui est nécessaire pour qu’une ressource soit utilisée est une rente, et il parle de « quasi-rente » pour les revenus temporaires des machines ou des compétences rares. En 1967, Gordon Tullock, puis Anne Krueger en 1974, analysent la « recherche de rente » : les ressources dépensées pour obtenir un privilège, licence, protection douanière, monopole, plutôt que pour produire. Ce gaspillage s’ajoute à la perte que cause le privilège lui-même.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le prix des logements, c’est le prix du sol</h4>
<p>Katharina Knoll, Moritz Schularick et Thomas Steger (2017) reconstruisent l’évolution des prix immobiliers dans quatorze pays depuis 1870. Les prix réels des logements, à peu près stables jusqu’au milieu du XXe siècle, ont fortement augmenté depuis 1950. Selon leurs estimations, cette hausse s’explique pour l’essentiel par la hausse du prix des terrains, et non par celle des coûts de construction. Ricardo et von Thünen retrouvent une actualité inattendue.</p>
<h4>Le capital, c’est surtout le logement</h4>
<p>La hausse du rapport entre patrimoine et revenu national documentée par Thomas Piketty tient en grande partie, selon Matthew Rognlie (2015), à la hausse de la valeur des logements, donc de la rente foncière (<a href="#c-r-g">voir r > g</a>). Edward Glaeser et Joseph Gyourko soulignent le rôle des règles d’urbanisme qui limitent la construction dans les villes attractives : en rendant le sol constructible plus rare, elles augmentent la rente des propriétaires existants.</p>
<h4>La malédiction des ressources</h4>
<p>Les pays riches en pétrole ou en minerais ont souvent connu une croissance plus faible que les autres, un résultat documenté par Jeffrey Sachs et Andrew Warner dans les années 1990 sous le nom de « malédiction des ressources ». La rente minière, concentrée et facile à capter, nourrit la corruption, les conflits et la négligence des autres secteurs. Des pays comme la Norvège ou le Botswana montrent que des institutions solides permettent d’éviter cette malédiction.</p>` }
    ],
    cas: [
      { titre: "Henry George et l’impôt unique", html: `
<p>En 1879, le journaliste américain Henry George publie Progrès et Pauvreté, l’un des livres d’économie les plus vendus du XIXe siècle. Il s’étonne que la pauvreté persiste au milieu de la richesse croissante de villes comme San Francisco, et en accuse la rente foncière : le progrès augmente la valeur du sol, que les propriétaires empochent sans rien faire. Il propose un impôt unique sur la valeur du sol, qui remplacerait tous les autres. Son influence est immense : des clubs « georgistes » se forment dans de nombreux pays, et des économistes de sensibilités très différentes, de Milton Friedman à Joseph Stiglitz, ont jugé que l’impôt foncier est l’un des moins mauvais impôts, car il ne décourage aucune activité productive.</p>` },
      { titre: "La taxe sur la plus-value foncière en Suisse", html: `
<p>Quand une commune suisse classe un terrain agricole en zone à bâtir, sa valeur peut être multipliée par dix ou davantage, du seul fait d’une décision publique. Depuis la révision de la loi fédérale sur l’aménagement du territoire, acceptée en votation en 2013 et entrée en vigueur en 2014, les cantons doivent prélever au moins 20 % de cette plus-value lors du classement en zone à bâtir. Les recettes servent notamment à indemniser les propriétaires de terrains déclassés. C’est une application directe de l’idée de Mill et de George : capter pour la collectivité une partie de la rente qu’elle a créée. Le taux minimal reste toutefois modeste par rapport à la plus-value, et son application varie selon les cantons.</p>` },
      { titre: "La Norvège et la rente pétrolière", html: `
<p>La Norvège découvre d’importants gisements de pétrole en mer du Nord à la fin des années 1960. Plutôt que de laisser la rente aux compagnies pétrolières, l’État la capte par une fiscalité spécifique, avec un taux marginal total de 78 % sur les bénéfices pétroliers, et par une participation directe dans l’exploitation. Les recettes alimentent un fonds souverain créé en 1990 et doté pour la première fois en 1996, aujourd’hui l’un des plus grands du monde, dont seul le rendement peut être dépensé chaque année. La Norvège évite ainsi en grande partie la « malédiction des ressources » et partage la rente entre les générations.</p>` }
    ],
    objections: `
<h4>1. La terre n’est pas si différente du capital</h4>
<p>Les économistes néoclassiques, comme John Bates Clark, contestent le statut particulier de la terre : la fertilité peut être améliorée par l’investissement, et le terrain urbain viabilisé incorpore beaucoup de capital. La frontière entre rente et rémunération du capital est floue.</p>
<h4>2. L’impôt foncier ne suffit pas</h4>
<p>Les critiques d’Henry George soulignent qu’un impôt unique sur le sol ne suffirait pas à financer un État moderne, et qu’évaluer la valeur du sol séparément de celle des bâtiments est techniquement difficile. Il serait aussi politiquement très délicat, car il frapperait des millions de petits propriétaires.</p>
<h4>3. La rente comme signal</h4>
<p>Pour les économistes libéraux, la rente élevée d’un emplacement signale qu’il est très demandé et incite à l’utiliser intensivement, en construisant plus haut ou plus dense. Taxer la rente est acceptable ; empêcher les prix d’augmenter, par exemple par le contrôle des loyers, priverait le marché de ce signal.</p>
<h4>4. Une notion devenue trop large</h4>
<p>L’usage du mot « rente » pour toute situation avantageuse, des salaires élevés des stars aux profits des grandes entreprises, lui fait perdre sa précision. Les économistes distinguent aujourd’hui la rente de rareté, la rente de monopole et la quasi-rente temporaire.</p>`,
    ecoles: `
<p><b><a href="#eco-quesnay">Quesnay</a></b> et les physiocrates voyaient dans le « produit net » de la terre la seule source de surplus.</p>
<p><b><a href="#eco-malthus">Malthus</a>, West et <a href="#eco-ricardo">Ricardo</a></b> formulent en 1815 la rente différentielle.</p>
<p><b><a href="#eco-mill">John Stuart Mill</a></b> propose de taxer l’« accroissement non gagné » de la valeur du sol.</p>
<p><b><a href="#eco-marx">Marx</a></b> distingue la rente différentielle et la rente absolue, que perçoit même la plus mauvaise terre parce que la propriété foncière est un monopole.</p>
<p><b><a href="#eco-marshall">Marshall</a></b> élargit la notion aux quasi-rentes.</p>
<p><b><a href="#eco-piketty">Piketty</a></b> et ses critiques retrouvent la rente foncière au cœur de la hausse des patrimoines.</p>`,
    source: {
      titre: "David Ricardo, Principes de l’économie politique et de l’impôt, 1817, chapitre 2",
      texte: "La rente est cette portion du produit de la terre que l’on paie au propriétaire pour avoir le droit d’exploiter les facultés productives originelles et impérissables du sol.",
      notes: `
<p><b>« Originelles et impérissables ».</b> Ricardo distingue la rente proprement dite du revenu des améliorations apportées au sol (drainage, bâtiments), qui rémunère un capital investi. La rente pure rémunère ce que personne n’a produit : la nature et l’emplacement.</p>
<p><b>Le contexte politique.</b> Cette définition sert un argument : si la rente ne correspond à aucun effort, l’intérêt des propriétaires fonciers à maintenir le blé cher par les Corn Laws est un privilège sans justification économique.</p>
<p><b>Ce que l’expression a perdu.</b> Aujourd’hui, on sait que la fertilité des sols peut s’épuiser, et que l’essentiel de la rente vient de l’emplacement plutôt que de la fertilité. Mais l’idée centrale demeure : une partie du revenu de la propriété ne rémunère aucune contribution productive.</p>`
    },
    quiz: [
      { q: "Dans l’exemple de Ricardo, qu’est-ce qui fixe le prix du blé ?",
        o: ["Le coût de production sur la terre la plus fertile du pays", "Le coût sur la terre la moins fertile encore cultivée", "La rente moyenne que versent les fermiers aux propriétaires", "Le coût moyen de production sur l’ensemble des terres cultivées"], c: 1,
        e: "Le blé doit couvrir le coût de production sur la plus mauvaise terre cultivée, sinon elle ne le serait pas ; ce coût fixe le prix pour tous." },
      { q: "Selon Ricardo, pourquoi paie-t-on une rente ?",
        o: ["Parce que la rente exigée par les propriétaires fait monter le prix du blé", "Parce que le blé est cher, ce qui donne un surplus aux meilleures terres", "Parce que les propriétaires prennent des risques en laissant la terre cultivée", "Parce que le propriétaire a amélioré la terre par son travail et ses capitaux"], c: 1,
        e: "Le prix élevé du blé crée la rente, et non l’inverse. C’est pourquoi taxer la rente ne fait pas monter le prix." },
      { q: "Trois terres produisent 100, 90 et 80 avec le même coût ; la terre à 80 couvre juste ses coûts. Quelle est la rente totale ?",
        o: ["10", "20", "30", "270"], c: 2,
        e: "La première terre dégage 100 − 80 = 20, la deuxième 90 − 80 = 10, la troisième 0. Total : 30." },
      { q: "Qu’est-ce que la « recherche de rente » au sens de Tullock et Krueger ?",
        o: ["Le placement de l’épargne dans des actifs qui rapportent un revenu régulier", "Les ressources dépensées pour obtenir un privilège au lieu de produire", "La gestion d’un patrimoine immobilier mis en location à des particuliers", "Le calcul de la rente que doit payer un fermier à son propriétaire"], c: 1,
        e: "Lobbying, démarches pour obtenir licences et protections : ces efforts coûtent sans rien produire, en plus de la perte causée par le privilège lui-même." },
      { q: "Que prévoit la loi suisse sur l’aménagement du territoire révisée en 2014 ?",
        o: ["L’interdiction de bâtir de nouveaux logements dans les communes rurales et de montagne", "Un prélèvement d’au moins 20 % de la plus-value d’un terrain classé à bâtir", "La reprise par la Confédération des terrains classés en zone à bâtir", "La suppression de l’impôt foncier pour encourager l’achat de terrains"], c: 1,
        e: "Les cantons doivent capter une partie de la plus-value créée par la décision publique de classement, une application de l’idée de Mill et de George." }
    ],
    transfert: { q: "Une nouvelle ligne de métro est construite par la ville. Les terrains proches des stations prennent fortement de la valeur. Que suggère l’analyse de la rente ?",
      o: ["Les propriétaires ont créé cette valeur en entretenant leurs terrains", "Ce gain ne récompense aucun effort des propriétaires, d’où l’idée de le taxer", "La valeur des terrains va retomber dès que le chantier sera terminé", "Le métro a fait baisser les loyers, car les habitants se sont dispersés"], c: 0,
      e: "Comme le proposait Henry George, la valeur créée par la collectivité peut lui revenir en partie." },
    ouverte: {
      q: "Faut-il, comme le proposait Henry George, taxer beaucoup plus fortement la valeur du sol, par exemple pour financer le logement abordable ?",
      r: "Plusieurs arguments plaident en ce sens : la valeur du sol vient largement de la collectivité (infrastructures, emplois, décisions d’urbanisme), un impôt sur le sol ne décourage ni le travail ni l’investissement productif, et il pourrait inciter à mieux utiliser les terrains constructibles laissés vides. Plusieurs pays appliquent déjà de tels instruments : le Danemark taxe la valeur des terrains, des villes de Pennsylvanie ont longtemps taxé davantage le sol que les bâtiments, et la Suisse prélève une partie de la plus-value lorsqu’un terrain devient constructible. Les objections sont réelles : beaucoup de propriétaires sont des ménages modestes ou des retraités dont le patrimoine est surtout immobilier, l’évaluation du sol séparément du bâti est complexe, et une hausse brutale ferait baisser les prix au détriment des propriétaires récents fortement endettés. Les économistes favorables proposent souvent une introduction progressive, compensée par des baisses d’autres impôts."
    },
    lectures: [
      ["Accessible", "Henry George, Progrès et Pauvreté, 1879, livres III et IV."],
      ["Accessible", "Josh Ryan-Collins, Toby Lloyd et Laurie Macfarlane, Rethinking the Economics of Land and Housing, 2017."],
      ["Intermédiaire", "David Ricardo, Principes de l’économie politique et de l’impôt (1817), chapitre 2."],
      ["Intermédiaire", "Johann Heinrich von Thünen, L’État isolé, 1826, première partie."],
      ["Recherche", "Katharina Knoll, Moritz Schularick et Thomas Steger, « No Price Like Home: Global House Prices, 1870-2012 », American Economic Review, 2017 ; Anne Krueger, « The Political Economy of the Rent-Seeking Society », American Economic Review, 1974."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi un appartement vaut-il beaucoup plus au centre d’une grande ville qu’à la campagne, à coût de construction égal ?",
          o: ["À cause de la valeur du terrain et de son emplacement", "Parce que les matériaux sont plus chers en ville", "Parce que les ouvriers sont mieux payés en ville", "Parce que l’appartement est plus solide"], c: 0,
          e: "Le propriétaire n’a rien fait pour créer cette valeur : c’est une rente." },
        { q: "Quelle est la conclusion surprenante de Ricardo sur la rente ?",
          o: ["La rente fait baisser le prix du blé, car elle pousse les fermiers à produire davantage", "La rente ne rend pas le blé cher, c’est le blé cher qui crée la rente", "Les propriétaires fixent le prix du blé en exigeant des rentes élevées", "La rente récompense le travail du propriétaire, qui améliore ses terres"], c: 0,
          e: "Le prix couvre le coût sur la plus mauvaise terre ; les meilleures dégagent un surplus." }
      ],
      duree: 5,
      html: `
<h3>Le prix d’un emplacement</h3>
<p>Construire un immeuble coûte à peu près la même chose au centre de Zurich et dans un village du Jura. Pourtant, un appartement en ville vaut plusieurs fois plus. La différence ne vient pas du bâtiment, mais du terrain et de son emplacement. Le propriétaire n’a rien fait pour créer cette valeur : elle vient de la ville qui s’est développée autour. Les économistes l’appellent la <b>rente</b>.</p>
<h3>L’idée de Ricardo</h3>
<p>En 1817, David <a href="#eco-ricardo">Ricardo</a> l’explique avec des terres agricoles. Quand la population augmente, il faut cultiver des terres moins fertiles. Le prix du blé doit couvrir le coût sur la plus mauvaise terre ; les meilleures terres produisent plus pour le même coût et dégagent un surplus, qui revient au propriétaire. Conclusion surprenante : ce n’est pas la rente qui rend le blé cher, c’est le blé cher qui crée la rente.</p>
${terres}
<h3>Aujourd’hui : le logement</h3>
<p>Depuis 1950, la forte hausse des prix des logements dans les pays riches vient surtout de la hausse du prix des terrains. C’est la rente de Ricardo, transposée aux villes. D’où l’idée, défendue par Henry George dès 1879, de taxer la valeur du sol, puisqu’elle ne récompense aucun effort. La Suisse prélève depuis 2014 au moins 20 % de la plus-value d’un terrain qui devient constructible.</p>
<h3>À retenir</h3>
<p>Une partie des revenus de la propriété ne rémunère aucun travail ni aucun investissement, mais la rareté et l’emplacement. La notice complète présente le raisonnement, les exemples et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Pourquoi un mètre carré vaut beaucoup plus à Zurich qu’à la campagne.",
      raisonnement: "Sept étapes, des terres inégales à la rente urbaine et à la recherche de rente.",
      preuves: "Le prix du sol dans les logements, le capital immobilier, la malédiction des ressources.",
      cas: "Henry George, la taxe suisse sur la plus-value foncière, la rente pétrolière norvégienne.",
      objections: "Terre et capital, limites de l’impôt foncier, la rente comme signal, une notion trop large.",
      ecoles: "Quesnay, Malthus-West-Ricardo, Mill, Marx, Marshall, Piketty.",
      source: "Ricardo, 1817 : les facultés productives originelles et impérissables du sol.",
      quiz: "Six questions corrigées, dont un calcul, et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     20. PARADOXE DE L'ÉPARGNE
     ===================================================================== */
  const paradoxe = fig(300, (() => {
    const L = 80, B = 245, sc = 0.24;
    let s = `<text x="20" y="24" ${T}>Les ménages veulent épargner 100 de plus (propension à dépenser 0,8, investissement inchangé)</text>`;
    const bars = [["Épargne voulue", 100, "var(--note)"], ["Baisse de la dépense", -100, "var(--serial)"], ["Baisse du revenu national", -500, "var(--serial)"], ["Épargne finale", 0, "var(--gold)"]];
    bars.forEach(([n, v, col], i) => {
      const x = L + i * 135, h = Math.abs(v) * sc, y = v >= 0 ? 120 - h : 120;
      s += `<rect x="${x}" y="${y}" width="90" height="${Math.max(h, 2)}" rx="4" style="fill:${col}; opacity:${v === 0 ? 0.8 : 1}"/>`;
      s += `<text x="${x + 45}" y="${v >= 0 ? y - 8 : y + h + 16}" text-anchor="middle" style="fill:var(--ink); font:700 12.5px 'JetBrains Mono', monospace">${v > 0 ? "+" : ""}${v}</text>`;
      s += `<text x="${x + 45}" y="${B + 30}" text-anchor="middle" ${S}>${n.split(" ").slice(0, 2).join(" ")}</text><text x="${x + 45}" y="${B + 44}" text-anchor="middle" ${S}>${n.split(" ").slice(2).join(" ")}</text>`;
    });
    s += `<line x1="${L - 10}" y1="120" x2="${L + 3 * 135 + 100}" y2="120" style="stroke:var(--ink-soft)"/>`;
    return s;
  })(), "Calcul keynésien simple. La baisse initiale de la dépense de 100 est amplifiée par le multiplicateur 1 / (1 − 0,8) = 5 : le revenu baisse de 500. Comme les ménages épargnent un cinquième de leur revenu, leur épargne baisse de 100 avec le revenu, ce qui annule la hausse voulue. L’épargne totale reste égale à l’investissement, inchangé.", "Barres montrant l’épargne voulue, la baisse du revenu et l’épargne finale inchangée");

  OEC.notices["paradoxe-epargne"] = {
    essentiel: [
      "Pour un ménage, épargner davantage est une vertu qui l’enrichit. Mais si tous les ménages et toutes les entreprises cherchent à épargner davantage en même temps, la dépense totale baisse, les revenus diminuent, et l’épargne globale peut ne pas augmenter, voire diminuer.",
      "C’est un sophisme de composition : ce qui est vrai pour chacun n’est pas vrai pour tous, parce que la dépense de l’un est le revenu de l’autre. Le mécanisme passe par le multiplicateur, qui amplifie la baisse initiale de la dépense.",
      "Le paradoxe ne vaut qu’en situation de sous-emploi, quand l’investissement ne vient pas absorber l’épargne supplémentaire. À long terme et au plein emploi, l’épargne finance l’investissement et la croissance."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : la ruche devenue vertueuse", html: `
<p>En 1714, le médecin hollandais installé à Londres Bernard Mandeville publie La Fable des abeilles. Une ruche prospère grâce aux vices de ses habitants : le luxe des riches fait vivre les artisans, la vanité nourrit le commerce, la fraude occupe les juges. Un jour, les abeilles, scandalisées par leur propre corruption, obtiennent des dieux de devenir vertueuses. Elles renoncent au luxe et vivent frugalement. La ruche s’effondre : les artisans n’ont plus de clients, le commerce dépérit, la population diminue. Le sous-titre résume la morale : « Les vices privés font le bien public ».</p>
<p>Le livre fait scandale. Deux siècles plus tard, <a href="#eco-keynes">Keynes</a> lui rend hommage au chapitre 23 de la Théorie générale : Mandeville avait compris, avant les économistes, qu’une épargne excessive peut appauvrir une société. Ce que Keynes appelle le « paradoxe de l’épargne » est l’une des idées les plus contre-intuitives de la macroéconomie.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La vertu individuelle</h4>
<p>Un ménage qui réduit ses dépenses et met de l’argent de côté s’enrichit : son patrimoine augmente, il sera mieux armé face aux imprévus et à la retraite. C’est vrai, et c’est une conduite raisonnable. Son revenu ne dépend pas de ses propres dépenses, mais de son travail.</p>
<h4>2. La dépense des uns est le revenu des autres</h4>
<p>Pour l’économie dans son ensemble, il en va autrement. Chaque franc dépensé par un ménage est un franc de recette pour une entreprise, qui paie avec lui des salaires, des fournisseurs et des dividendes. Si tous les ménages réduisent leurs dépenses en même temps, les entreprises vendent moins, produisent moins, et versent moins de revenus. Les ménages voient alors leur propre revenu baisser.</p>
<h4>3. L’égalité de l’épargne et de l’investissement</h4>
<p>Dans une économie fermée, sans État, l’épargne totale est par définition égale à l’investissement total : ce qui n’est pas consommé est soit investi, soit accumulé en stocks invendus, eux-mêmes comptés comme investissement. Si les ménages veulent épargner davantage sans que les entreprises veuillent investir davantage, quelque chose doit s’ajuster pour que l’égalité soit rétablie. Pour les classiques, c’est le taux d’intérêt, qui baisse et relance l’investissement. Pour Keynes, c’est le revenu, qui baisse jusqu’à ce que l’épargne, qui dépend du revenu, revienne au niveau de l’investissement.</p>
<h4>4. Le multiplicateur à l’envers</h4>
<p>La baisse de la dépense est amplifiée. Les entreprises qui vendent moins licencient ou réduisent les heures ; les salariés concernés dépensent moins à leur tour ; leurs fournisseurs vendent moins, et ainsi de suite. C’est le <a href="#c-multiplicateur">multiplicateur</a> qui joue en sens inverse. Avec une propension à dépenser de 0,8, une baisse initiale de 100 de la dépense réduit le revenu national de 500.</p>
${paradoxe}
<h4>5. Un résultat paradoxal</h4>
<p>Si l’investissement ne change pas, l’épargne totale finit au même niveau qu’au départ : chaque ménage a voulu épargner plus, mais la baisse des revenus a réduit l’épargne autant que l’effort l’a augmentée. Si, en plus, l’investissement des entreprises baisse quand les ventes reculent, ce qui est probable, l’épargne totale finit même plus basse qu’au départ. La société a voulu s’enrichir ; elle s’est appauvrie.</p>
<h4>6. Les conditions du paradoxe</h4>
<p>Le paradoxe suppose que l’épargne supplémentaire n’est pas absorbée par un investissement supplémentaire. C’est le cas quand l’économie est en sous-emploi et que les entreprises, pessimistes, n’investissent pas même si les taux baissent, ou quand les taux sont déjà à zéro (<a href="#c-trappe-liquidite">trappe à liquidité</a>). Au plein emploi, avec une banque centrale qui peut baisser ses taux, l’épargne supplémentaire finance davantage d’investissement, et la société s’enrichit à long terme : c’est le résultat classique, que la théorie de la croissance de Robert Solow confirme.</p>
<h4>7. Les soldes sectoriels</h4>
<p>L’économiste britannique Wynne Godley a popularisé une manière simple de visualiser ce raisonnement. Dans toute économie, la somme de l’excédent financier des ménages et entreprises (épargne moins investissement), du solde public et du solde extérieur est nulle. Si le secteur privé veut épargner davantage, il faut que l’État s’endette davantage ou que le pays exporte davantage d’épargne vers l’étranger, sinon les revenus s’ajustent à la baisse. C’est pourquoi l’austérité budgétaire et le désendettement privé simultanés sont particulièrement récessifs.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La récession de bilan japonaise</h4>
<p>Après l’éclatement de la bulle de 1990, les entreprises japonaises, lourdement endettées, consacrent pendant des années leurs profits au remboursement de leurs dettes plutôt qu’à l’investissement, même avec des taux d’intérêt proches de zéro. L’économiste Richard Koo appelle ce phénomène une « récession de bilan ». Le secteur privé devient massivement épargnant ; l’activité ne se maintient que grâce aux déficits publics, qui absorbent cette épargne. Sans eux, selon Koo, le Japon aurait connu une dépression comparable à celle des années 1930.</p>
<h4>L’Europe de 2010-2013</h4>
<p>Après la crise de 2008, ménages et entreprises de nombreux pays européens cherchent à se désendetter. À partir de 2010, les gouvernements réduisent aussi leurs déficits. Le secteur privé et le secteur public épargnent en même temps ; la zone euro retombe en récession en 2012. Dans plusieurs pays, le ratio de dette publique rapportée au PIB augmente malgré les coupes, car le PIB baisse plus vite que la dette. Le paradoxe de l’épargne s’applique ici aussi aux États.</p>
<h4>L’épargne forcée de la pandémie</h4>
<p>En 2020, les confinements empêchent les ménages de dépenser : l’épargne bondit dans tous les pays riches. Mais les revenus sont soutenus par l’État, chômage partiel, transferts, si bien que l’épargne accumulée devient une réserve. En 2021, sa dépense rapide contribue à une forte reprise, puis à l’inflation. L’épisode montre le paradoxe à l’envers : quand l’État maintient les revenus, l’épargne des ménages ne se traduit pas par une chute de l’activité.</p>` }
    ],
    cas: [
      { titre: "L’Allemagne et les excédents de la zone euro", html: `
<p>Depuis le milieu des années 2000, l’Allemagne affiche des excédents courants considérables, qui dépassent 7 % de son PIB certaines années : son épargne nationale est très supérieure à son investissement, et l’excédent est prêté au reste du monde. Pendant la crise de la zone euro, plusieurs économistes, dont Paul <a href="#eco-krugman">Krugman</a> et Martin Wolf, ont soutenu que cette épargne excessive, combinée à l’austérité imposée aux pays du Sud, avait privé la zone euro de la demande nécessaire à sa reprise. Les défenseurs du modèle allemand répondent que ces excédents reflètent la compétitivité de l’industrie et le vieillissement de la population, qui justifie une épargne élevée.</p>` },
      { titre: "La Suisse, pays d’épargnants", html: `
<p>La Suisse a l’un des taux d’épargne nationale les plus élevés du monde, porté par le deuxième pilier obligatoire et un niveau de revenu élevé, et un excédent courant important depuis des décennies. Le paradoxe de l’épargne n’y produit pas de récession, pour deux raisons : l’épargne excédentaire est placée à l’étranger, ce qui correspond à l’excédent courant, et les exportations soutiennent la demande. Mais ce modèle a un revers : l’afflux de capitaux vers le franc en période de crise et l’abondance de l’épargne ont contribué à des taux d’intérêt très bas, et la BNS a dû acheter des devises en masse pour limiter l’appréciation du franc.</p>` },
      { titre: "Mandeville et le scandale moral", html: `
<p>La Fable des abeilles est condamnée en 1723 par le grand jury du Middlesex comme une « nuisance publique ». Les moralistes reprochent à Mandeville de faire l’éloge du vice. Adam <a href="#eco-smith">Smith</a> lui répond dans la Théorie des sentiments moraux (1759), où il qualifie son système de « licencieux » tout en reconnaissant la force de certaines de ses observations. Dans la Richesse des nations (1776), il défend au contraire la frugalité comme source de l’accumulation du capital : « tout prodigue paraît être un ennemi public, et tout homme frugal un bienfaiteur public ». Le débat entre Mandeville et Smith préfigure celui entre Keynes et les classiques.</p>` }
    ],
    objections: `
<h4>1. L’épargne finance l’investissement</h4>
<p>Pour les économistes classiques et la plupart des économistes contemporains, l’épargne n’est pas une fuite : elle est prêtée, par les banques et les marchés, à ceux qui investissent. Le taux d’intérêt s’ajuste pour que l’investissement absorbe l’épargne. Le paradoxe n’apparaît que si ce mécanisme est bloqué, ce qui est l’exception plutôt que la règle.</p>
<h4>2. À long terme, l’épargne enrichit</h4>
<p>Les pays qui épargnent et investissent beaucoup, comme la Corée du Sud ou Singapour, ont connu une croissance rapide. Le modèle de croissance de Solow montre qu’un taux d’épargne plus élevé conduit à un niveau de revenu plus élevé à long terme. Le paradoxe est un phénomène de court terme.</p>
<h4>3. La banque centrale peut compenser</h4>
<p>Si l’épargne augmente, la banque centrale peut baisser ses taux pour relancer l’investissement et la consommation. Le paradoxe suppose donc que la politique monétaire soit impuissante ou trop lente, ce qui n’est le cas qu’en période de taux très bas.</p>
<h4>4. L’épargne de précaution est rationnelle</h4>
<p>Quand l’avenir est incertain, épargner davantage est une réaction raisonnable pour chaque ménage. Leur reprocher de ne pas dépenser revient à leur demander de prendre des risques pour le bien commun. D’où l’argument en faveur de politiques publiques, assurance chômage, garanties, relance, qui réduisent l’incertitude au lieu de culpabiliser l’épargne.</p>`,
    ecoles: `
<p><b>Bernard Mandeville</b> (1714) formule l’intuition sous forme de fable morale.</p>
<p><b><a href="#eco-smith">Smith</a></b> défend la frugalité comme source de l’accumulation du capital.</p>
<p><b><a href="#eco-malthus">Malthus</a></b> soutient que l’épargne poussée à l’excès détruit le motif de produire, contre <a href="#eco-ricardo">Ricardo</a> et <a href="#eco-say">Say</a>.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> nomme et systématise le paradoxe dans la Théorie générale.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> voit dans l’épargne volontaire la seule source saine de l’investissement, et dans la relance de la consommation une erreur.</p>
<p><b><a href="#eco-summers">Summers</a></b> et les théoriciens de la <a href="#c-stagnation-seculaire">stagnation séculaire</a> voient dans l’excès mondial d’épargne une cause des taux d’intérêt très bas.</p>`,
    source: {
      titre: "J. M. Keynes, Théorie générale de l’emploi, de l’intérêt et de la monnaie, 1936, chapitre 7",
      texte: "Bien que le montant de sa propre épargne n’ait guère d’influence notable sur son propre revenu, les réactions du montant de sa consommation sur les revenus des autres rendent impossible à tous les individus d’épargner simultanément des sommes données.",
      notes: `
<p><b>Le contexte.</b> Le chapitre 7 de la Théorie générale est consacré aux définitions de l’épargne et de l’investissement. Keynes y démontre que l’épargne totale est toujours égale à l’investissement total, et en tire cette conséquence.</p>
<p><b>Le cœur du raisonnement.</b> La phrase distingue deux niveaux : ce qui est vrai pour un individu (son épargne n’influence pas son revenu) et ce qui est vrai pour tous (la consommation de chacun fait le revenu des autres). C’est la définition même d’un sophisme de composition.</p>
<p><b>Ce que la phrase ne dit pas.</b> Elle ne dit pas que l’épargne est mauvaise. Elle dit que la volonté collective d’épargner ne peut se réaliser que si quelqu’un investit ou s’endette en contrepartie. Toute la politique keynésienne en découle : si le secteur privé ne le fait pas, l’État peut le faire.</p>`
    },
    quiz: [
      { q: "Pourquoi le paradoxe de l’épargne est-il un « sophisme de composition » ?",
        o: ["Parce que l’épargne est mauvaise pour chaque ménage pris isolément", "Parce que ce qui est vrai pour un ménage n’est pas vrai pour tous ensemble", "Parce que l’épargne fait mécaniquement baisser l’investissement des entreprises", "Parce que les banques gardent l’épargne au lieu de la prêter aux entreprises"], c: 1,
        e: "L’épargne d’un ménage ne réduit pas son revenu ; l’épargne de tous réduit la dépense, donc les revenus de tous." },
      { q: "Avec une propension à dépenser de 0,8 et un investissement inchangé, de combien baisse le revenu si les ménages veulent épargner 100 de plus ?",
        o: ["100", "80", "500", "Il ne baisse pas"], c: 2,
        e: "La baisse initiale de 100 est multipliée par 1 / (1 − 0,8) = 5 : le revenu baisse de 500, et l’épargne finale ne change pas." },
      { q: "Dans quelle situation le paradoxe de l’épargne a-t-il le plus de force ?",
        o: ["Au plein emploi, quand les taux sont élevés et que l’investissement est fort", "En sous-emploi, quand l’investissement ne répond pas et que les taux sont bas", "Quand l’inflation est forte et que les prix montent plus vite que les salaires", "Quand le pays importe beaucoup plus qu’il n’exporte, et se couvre de dettes"], c: 1,
        e: "Si l’épargne supplémentaire n’est pas absorbée par l’investissement, c’est le revenu qui s’ajuste à la baisse." },
      { q: "Qu’est-ce qu’une « récession de bilan » selon Richard Koo ?",
        o: ["Une récession provoquée par des erreurs de comptabilité dans les grandes entreprises cotées", "Une récession où les entreprises remboursent leurs dettes au lieu d’investir", "Une récession provoquée par la faillite de plusieurs grandes banques", "Une récession provoquée par une forte hausse des impôts sur les sociétés"], c: 1,
        e: "Le secteur privé épargne massivement pour réparer ses bilans, même à taux zéro ; seule la dépense publique empêche alors l’effondrement de la demande." },
      { q: "Pourquoi la forte épargne suisse ne provoque-t-elle pas de récession ?",
        o: ["Parce que la BNS compense en baissant ses taux chaque fois que l’épargne des ménages monte", "Parce que l’épargne part à l’étranger et que les exportations soutiennent la demande", "Parce que l’État dépense chaque année tout ce que les ménages épargnent", "Parce que les ménages suisses empruntent autant qu’ils épargnent chaque année"], c: 1,
        e: "L’excédent d’épargne correspond à l’excédent courant : la demande étrangère compense la faiblesse relative de la demande intérieure." }
    ],
    transfert: { q: "En 2010, plusieurs pays européens réduisent leurs dépenses publiques en même temps, alors que ménages et entreprises économisent déjà. Que prévoit le paradoxe de l’épargne ?",
      o: ["La demande baisse, les revenus diminuent et réduire la dette devient plus dur", "La croissance repart rapidement, car l’épargne finance de nouveaux investissements", "Les taux montent fortement parce que les États empruntent davantage", "Les exportations compensent la baisse de la demande dans tous ces pays"], c: 0,
      e: "Quand tout le monde économise en même temps, les revenus baissent pour tous." },
    ouverte: {
      q: "Plusieurs pays, comme l’Australie ou les Pays-Bas, obligent les salariés à épargner massivement pour leur retraite. Est-ce un problème au regard du paradoxe de l’épargne ?",
      r: "En période de plein emploi, non : cette épargne finance des investissements, dans le pays et à l’étranger, et assure les revenus futurs des retraités, ce qui est son objectif. Le paradoxe de l’épargne suggère cependant deux points d’attention. D’abord, en récession, une épargne obligatoire élevée réduit la consommation au moment où la demande manque, même si l’assurance chômage et le chômage partiel atténuent ce risque. Ensuite, à l’échelle mondiale, l’abondance d’épargne contribue aux taux d’intérêt très bas, qui ont à leur tour réduit le rendement des fonds de pension et donc les rentes : un cercle que les théoriciens de la stagnation séculaire décrivent. La réponse ne consiste pas à réduire l’épargne pour la retraite, mais à veiller à ce qu’elle trouve des investissements utiles et à ce que la demande soit soutenue en cas de crise."
    },
    lectures: [
      ["Accessible", "Bernard Mandeville, La Fable des abeilles, 1714, le poème initial, court et percutant."],
      ["Accessible", "Paul Krugman, Sortez-nous de cette crise… maintenant !, 2012, sur le désendettement simultané après 2008."],
      ["Intermédiaire", "J. M. Keynes, Théorie générale (1936), chapitres 7 et 23."],
      ["Intermédiaire", "Richard Koo, The Holy Grail of Macroeconomics: Lessons from Japan’s Great Recession, 2008."],
      ["Recherche", "Wynne Godley et Marc Lavoie, Monetary Economics: An Integrated Approach to Credit, Money, Income, Production and Wealth, 2007 ; Olivier Blanchard et Daniel Leigh, « Growth Forecast Errors and Fiscal Multipliers », 2013."]
    ],
    decouvrir: {
      questions: [
        { q: "Que raconte la fable des abeilles de Mandeville ?",
          o: ["Une ruche s’appauvrit quand toutes les abeilles se mettent à épargner", "Une ruche s’enrichit parce que chaque abeille met du miel de côté", "Les abeilles économes chassent les abeilles dépensières de la ruche", "Une ruche partage son miel avec les ruches voisines en temps de disette"], c: 0,
          e: "Quand tout le monde dépense moins, les artisans perdent leurs clients." },
        { q: "En temps normal, que devient l’épargne selon la notice ?",
          o: ["Elle est prêtée à ceux qui investissent, ce qui enrichit la société", "Elle sort de l’économie dès qu’elle est déposée dans une banque", "Elle provoque une crise dès que les ménages épargnent plus de 10 % de leur revenu", "Elle est prélevée par l’État pour rembourser la dette publique"], c: 0,
          e: "Le paradoxe joue surtout en crise, quand les entreprises n’osent pas investir." }
      ],
      duree: 5,
      html: `
<h3>La ruche vertueuse</h3>
<p>En 1714, Bernard Mandeville raconte l’histoire d’une ruche prospère grâce au luxe et aux dépenses de ses abeilles. Un jour, elles décident de devenir sobres et économes. Résultat : les artisans n’ont plus de clients, le commerce s’effondre, la ruche s’appauvrit. Cette fable illustre une idée que <a href="#eco-keynes">Keynes</a> appellera le <b>paradoxe de l’épargne</b>.</p>
<h3>Ce qui est vrai pour un, faux pour tous</h3>
<p>Pour une famille, épargner davantage est sage : elle s’enrichit. Mais si toutes les familles et toutes les entreprises épargnent davantage en même temps, elles dépensent moins. Les commerces vendent moins, licencient, et les revenus de tous baissent. Avec des revenus plus faibles, les familles n’arrivent finalement pas à épargner davantage. Chacune a voulu s’enrichir ; ensemble, elles se sont appauvries.</p>
${paradoxe}
<h3>Quand cela arrive-t-il ?</h3>
<p>Le paradoxe joue surtout en période de crise, quand les entreprises n’osent pas investir l’épargne disponible. Le Japon des années 1990 ou l’Europe des années 2010, où ménages, entreprises et États ont cherché à se désendetter en même temps, en sont des exemples. En temps normal, l’épargne est prêtée à ceux qui investissent, et elle enrichit la société à long terme.</p>
<h3>À retenir</h3>
<p>La dépense des uns est le revenu des autres. C’est pourquoi, en crise, l’État peut avoir intérêt à dépenser quand tout le monde économise. La notice complète présente le mécanisme, les exemples et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "La Fable des abeilles de Mandeville, 1714.",
      raisonnement: "Sept étapes, de la vertu individuelle aux soldes sectoriels de Godley.",
      preuves: "La récession de bilan japonaise, l’Europe de 2010-2013, l’épargne forcée de la pandémie.",
      cas: "Les excédents allemands, la Suisse pays d’épargnants, le scandale de Mandeville.",
      objections: "L’épargne finance l’investissement, l’épargne enrichit à long terme, la banque centrale, la précaution.",
      ecoles: "Mandeville, Smith, Malthus contre Ricardo et Say, Keynes, Hayek, Summers.",
      source: "Keynes, 1936 : pourquoi tous ne peuvent épargner simultanément.",
      quiz: "Six questions corrigées, dont un calcul, et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
