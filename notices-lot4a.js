/* Œconomia — notices longues, lot 4 (a) : valeur-travail, prix naturel */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     17. VALEUR-TRAVAIL
     ===================================================================== */
  const incorporé = fig(250, `
    <rect x="20" y="40" width="170" height="60" rx="10" style="fill:var(--card); stroke:var(--gold)"/>
    <text x="105" y="66" text-anchor="middle" ${T}>Travail passé</text><text x="105" y="86" text-anchor="middle" ${S}>forger le filet : 6 h</text>
    <rect x="20" y="140" width="170" height="60" rx="10" style="fill:var(--card); stroke:var(--gold)"/>
    <text x="105" y="166" text-anchor="middle" ${T}>Usure du filet</text><text x="105" y="186" text-anchor="middle" ${S}>1/10 par journée = 0,6 h</text>
    <rect x="235" y="90" width="170" height="60" rx="10" style="fill:var(--card); stroke:var(--note)"/>
    <text x="320" y="116" text-anchor="middle" ${T}>Travail direct</text><text x="320" y="136" text-anchor="middle" ${S}>une journée de pêche : 8 h</text>
    <rect x="450" y="80" width="170" height="80" rx="10" style="fill:var(--note-soft); stroke:var(--note)"/>
    <text x="535" y="108" text-anchor="middle" ${T}>Valeur du poisson</text><text x="535" y="130" text-anchor="middle" style="fill:var(--note); font:700 14px 'JetBrains Mono', monospace">8 + 0,6 = 8,6 h</text>
    <line x1="190" y1="170" x2="232" y2="128" style="stroke:var(--ink-soft); stroke-width:1.5"/>
    <line x1="405" y1="120" x2="447" y2="120" style="stroke:var(--ink-soft); stroke-width:1.5"/>
    <line x1="105" y1="100" x2="105" y2="138" style="stroke:var(--line); stroke-dasharray:4 3"/>
    <text x="20" y="232" ${S}>Chez Ricardo, un bien incorpore le travail direct et la part usée du travail passé contenu dans les outils.</text>`,
    "Le calcul de la valeur-travail incorporée, sur un exemple simple inspiré de Ricardo (chiffres illustratifs).",
    "Schéma du travail direct et indirect incorporé dans un poisson");

  const transfo = fig(300, (() => {
    const rows = [["Industrie I", 80, 20], ["Industrie II", 50, 50], ["Industrie III", 20, 80]];
    let s = `<text x="20" y="24" ${T}>Le problème de la transformation (exemple chiffré, taux de plus-value de 100 %)</text>`;
    const cols = ["Branche", "Capital constant", "Salaires", "Plus-value", "Valeur", "Prix de prod."];
    const xs = [24, 150, 260, 350, 450, 540];
    s += `<rect x="16" y="40" width="608" height="30" rx="6" style="fill:var(--paper-2)"/>`;
    cols.forEach((c, i) => (s += `<text x="${xs[i]}" y="60" ${T}>${c}</text>`));
    let C = 0, V = 0;
    rows.forEach(([n, c, v], k) => {
      const y = 98 + k * 34, val = c + v + v; C += c; V += v;
      s += `<text x="${xs[0]}" y="${y}" ${T}>${n}</text>`;
      [c, v, v, val, (c + v) * 1.5].forEach((x, i) => (s += `<text x="${xs[i + 1]}" y="${y}" style="fill:${i === 4 ? "var(--plum)" : i === 3 ? "var(--note)" : "var(--ink-soft)"}; font:600 12.5px 'JetBrains Mono', monospace">${x}</text>`));
    });
    s += `<line x1="16" y1="182" x2="624" y2="182" style="stroke:var(--line)"/>`;
    s += `<text x="${xs[0]}" y="206" ${T}>Total</text>`;
    [C, V, V, C + 2 * V, (C + V) * 1.5].forEach((x, i) => (s += `<text x="${xs[i + 1]}" y="206" style="fill:var(--ink); font:700 12.5px 'JetBrains Mono', monospace">${x}</text>`));
    s += `<text x="20" y="244" ${S}>Taux de profit moyen = plus-value totale / capital total = 150 / 300 = 50 %. La concurrence égalise les profits :</text>`;
    s += `<text x="20" y="262" ${S}>chaque branche vend à (capital + salaires) × 1,5 : les prix (150) s’écartent des valeurs (120 à 180),</text>`;
    s += `<text x="20" y="280" ${S}>mais la somme des prix égale la somme des valeurs (450) et la somme des profits égale celle des plus-values (150).</text>`;
    return s;
  })(), "Exemple construit sur le modèle du livre III du Capital. C’est cette « transformation » des valeurs en prix de production que Böhm-Bawerk jugera contradictoire en 1896.", "Tableau en trois branches comparant valeurs et prix de production");

  OEC.notices["valeur-travail"] = {
    essentiel: [
      "La théorie de la valeur-travail affirme que la valeur d’échange d’un bien dépend de la quantité de travail nécessaire pour le produire, y compris le travail passé incorporé dans les outils et les matières.",
      "Esquissée par Locke et Smith, systématisée par Ricardo, elle devient chez Marx le fondement d’une théorie de l’exploitation. Elle se heurte cependant à une difficulté majeure : les prix réels ne sont pas proportionnels aux quantités de travail quand les industries utilisent des proportions différentes de capital.",
      "La révolution marginaliste l’a remplacée dans l’économie dominante par une théorie fondée sur l’utilité et la rareté. Elle reste discutée chez les économistes marxistes et sraffaiens, et la question qu’elle posait, ce que vaut le travail, n’a pas disparu."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : le castor et le daim", html: `
<p>Au chapitre 6 de la Richesse des nations, Adam <a href="#eco-smith">Smith</a> imagine une nation de chasseurs. S’il faut ordinairement deux fois plus de travail pour tuer un castor que pour tuer un daim, un castor devrait naturellement s’échanger contre deux daims. Personne n’accepterait de donner un castor contre un seul daim : il vaudrait mieux chasser soi-même le daim. Dans une société simple, sans capital ni propriété foncière, le travail semble donc la mesure naturelle de la valeur des choses.</p>
<p>L’idée n’est pas neuve. En 1690, John Locke justifie la propriété par le travail : en mêlant son travail à la terre, l’homme en fait sa propriété. William Petty cherchait déjà une mesure commune de la valeur dans le travail et la terre. Mais c’est l’économie politique classique, de Smith à Ricardo, qui fait du travail le principe central de la valeur. Et c’est <a href="#eco-marx">Marx</a> qui en tire les conséquences les plus radicales.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Deux définitions chez Smith</h4>
<p>Smith hésite entre deux idées. Tantôt la valeur d’un bien est la quantité de travail <i>incorporée</i> dans sa production ; tantôt c’est la quantité de travail qu’il permet de <i>commander</i>, c’est-à-dire d’acheter. Dans une société de chasseurs, les deux coïncident. Mais dès que le capital et la terre sont appropriés, le produit doit aussi payer un profit et une rente : la valeur d’un bien dépasse alors le travail qu’il a coûté. Smith en conclut que la valeur-travail ne vaut que pour l’« état primitif », et propose pour la société moderne une théorie du coût de production : salaire, profit et rente.</p>
<h4>2. Ricardo : le travail incorporé, direct et indirect</h4>
<p>Au chapitre 1 de ses Principes (1817), <a href="#eco-ricardo">Ricardo</a> rejette cette conclusion. La valeur d’un bien dépend de la quantité totale de travail nécessaire pour le produire, y compris le travail passé contenu dans les outils, les machines et les bâtiments, qui transmettent progressivement leur valeur au produit à mesure qu’ils s’usent. Le pêcheur qui utilise un filet incorpore dans son poisson à la fois son travail du jour et une part du travail qui a servi à fabriquer le filet.</p>
${incorporé}
<h4>3. La difficulté du capital</h4>
<p>Ricardo voit pourtant un problème. Supposons deux industries employant la même quantité de travail, mais l’une avec beaucoup de machines durables, l’autre presque sans. La concurrence égalise les taux de profit : l’industrie très capitalistique doit donc vendre plus cher pour rémunérer son capital, plus longtemps immobilisé. Les prix s’écartent alors des quantités de travail. Ricardo estime ces écarts faibles en pratique ; l’historien de la pensée George Stigler parlera en 1958 d’une « théorie de la valeur-travail à 93 % ». Mais Ricardo n’a jamais trouvé de solution théorique, et cherchait encore une « mesure invariable de la valeur » à sa mort.</p>
<h4>4. Marx : le travail socialement nécessaire</h4>
<p>Marx reprend la théorie en la précisant. La valeur ne dépend pas du travail effectivement dépensé par un producteur maladroit, mais du travail « socialement nécessaire », c’est-à-dire réalisé dans les conditions moyennes de productivité de l’époque. Le travail qualifié compte comme un multiple du travail simple. Et surtout, Marx distingue le travail de la <a href="#c-plus-value">force de travail</a>, ce qui lui permet d’expliquer le profit comme du travail non payé.</p>
<h4>5. Le problème de la transformation</h4>
<p>Marx affronte au livre III du Capital la difficulté vue par Ricardo. Si seul le travail vivant crée de la plus-value, les industries qui emploient beaucoup de salariés et peu de machines devraient être plus rentables, ce qui contredit l’égalisation des taux de profit. Sa réponse : les marchandises ne se vendent pas à leur valeur, mais à des « prix de production », égaux au coût plus un profit moyen. La plus-value totale est redistribuée entre branches au prorata du capital avancé. Au total, la somme des prix égale la somme des valeurs, et la somme des profits celle des plus-values.</p>
${transfo}
<h4>6. La controverse</h4>
<p>En 1896, l’Autrichien Eugen von Böhm-Bawerk publie « Karl Marx et la clôture de son système » : si les prix s’écartent des valeurs, la valeur ne sert plus à expliquer les prix, et le livre III contredit le livre I. En 1907, Ladislaus von Bortkiewicz montre que Marx a oublié de transformer aussi les coûts des intrants, et propose une correction mathématique. Mais avec la correction, les deux égalités de Marx ne peuvent pas être vérifiées en même temps. Le débat se poursuit tout au long du XXe siècle ; en 1971, Paul <a href="#eco-samuelson">Samuelson</a> conclut que le détour par les valeurs est inutile pour expliquer les prix. Les défenseurs contemporains de Marx proposent d’autres interprétations, dites « temporelles » ou « nouvelle interprétation ».</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Prix et quantités de travail</h4>
<p>À partir des tableaux entrées-sorties, qui décrivent ce que chaque branche achète aux autres, on peut calculer la quantité totale de travail direct et indirect incorporée dans la production de chaque secteur. Plusieurs économistes, comme Anwar Shaikh ou Paul Cockshott et Allin Cottrell, trouvent une corrélation très élevée entre ces quantités de travail et les prix observés, souvent supérieure à 0,9. Leurs critiques répondent que cette corrélation est en partie artificielle, car les grandes branches ont à la fois des prix totaux et des quantités de travail élevés ; une fois cet effet de taille corrigé, la relation est beaucoup moins nette.</p>
<h4>Le retour de Ricardo par Sraffa</h4>
<p>En 1960, Piero Sraffa, ancien ami de Keynes et éditeur des œuvres de Ricardo, publie Production de marchandises par des marchandises. Il montre qu’on peut déterminer les prix et la répartition à partir des seules conditions techniques de production et d’une variable de répartition (le salaire ou le taux de profit), sans recourir ni à l’utilité ni à la valeur-travail. Il construit une « marchandise étalon » qui répond au rêve ricardien d’une mesure invariable. Son livre ouvre une tradition néo-ricardienne qui critique à la fois l’économie marginaliste et la théorie de la valeur de Marx.</p>
<h4>Ce que retient l’économie dominante</h4>
<p>Depuis les années 1870, l’économie dominante explique les prix par l’offre et la demande, la valeur par l’<a href="#c-utilite-marginale">utilité marginale</a> et la rareté, et la rémunération du travail par sa productivité marginale. Dans ce cadre, le travail est un facteur de production parmi d’autres ; il n’a pas de statut particulier dans la formation de la valeur.</p>` }
    ],
    cas: [
      { titre: "Les bons de travail de Robert Owen", html: `
<p>En 1832, le réformateur gallois Robert Owen ouvre à Londres la « National Equitable Labour Exchange ». Les artisans y déposent leurs produits, dont la valeur est estimée en heures de travail, et reçoivent en échange des bons de travail qui leur permettent d’acheter d’autres produits déposés. L’idée applique directement la valeur-travail : échanger les biens selon le temps qu’ils ont coûté, sans profit ni intermédiaire. L’expérience attire d’abord du monde, puis s’effondre en 1834 : les produits demandés partent vite, les produits peu demandés s’accumulent, et l’évaluation du temps nécessaire se révèle très difficile. Marx jugera ces tentatives utopiques : le problème n’est pas la monnaie, mais les rapports de production.</p>` },
      { titre: "La Zeitvorsorge de Saint-Gall", html: `
<p>Les banques de temps, apparues dans de nombreux pays depuis les années 1980, reprennent une idée voisine : chaque heure de service rendu vaut une heure de service reçu, quelle que soit sa nature. À Saint-Gall, la Zeitvorsorge, soutenue par la ville depuis 2012, permet à des retraités en bonne santé d’aider des personnes âgées dans leurs tâches quotidiennes et d’accumuler des heures qu’ils pourront utiliser plus tard pour eux-mêmes. Ces dispositifs fonctionnent pour des services de proximité, où le temps est une mesure acceptée de tous. Ils montrent aussi les limites de l’idée : on les applique rarement à des services très qualifiés, dont l’heure vaudrait beaucoup plus sur le marché.</p>` },
      { titre: "La planification soviétique", html: `
<p>Les économies planifiées de type soviétique se réclamaient de Marx, mais elles n’ont jamais fixé leurs prix selon la valeur-travail. Les prix étaient fixés administrativement, souvent selon le coût moyen plus une marge, avec des subventions massives pour les biens de première nécessité et des prix élevés pour les biens jugés de luxe. Les débats des économistes soviétiques des années 1960, autour de Leonid Kantorovitch, prix Nobel 1975, portent au contraire sur l’introduction de prix reflétant la rareté des ressources, ce qui ressemble davantage aux « prix fictifs » de l’économie marginaliste qu’à la théorie de Marx.</p>` }
    ],
    objections: `
<h4>1. La valeur sans rareté</h4>
<p>Une bouteille de vin qui vieillit en cave prend de la valeur sans travail supplémentaire ; un tableau de maître se vend des millions bien qu’il n’ait coûté que quelques mois de travail ; une perle trouvée par hasard vaut autant qu’une perle cherchée longtemps. Les marginalistes en concluent que la valeur dépend du désir et de la rareté, non du travail.</p>
<h4>2. Le travail hétérogène</h4>
<p>Réduire une heure de chirurgien et une heure de manœuvre à une même unité suppose un taux de conversion. Marx propose de compter le travail qualifié comme un multiple du travail simple, mais ce multiple semble devoir être déduit des salaires, c’est-à-dire des prix que la théorie devait expliquer.</p>
<h4>3. La transformation</h4>
<p>Le problème de la transformation reste la principale difficulté logique : si les prix ne sont pas proportionnels aux valeurs, à quoi sert le détour par les valeurs ? Les défenseurs de la théorie y voient une question de niveau d’analyse, la valeur expliquant la répartition globale plutôt que les prix individuels.</p>
<h4>4. Le temps et le capital</h4>
<p>Böhm-Bawerk insiste sur le rôle du temps : un bien disponible aujourd’hui vaut plus qu’un bien disponible demain. Le profit rémunère cette attente, indépendamment de toute exploitation. Les marxistes répondent que l’attente ne produit rien par elle-même.</p>`,
    ecoles: `
<p><b>John Locke</b> fonde la propriété sur le travail (1690), ce qui donne à la valeur-travail une dimension morale.</p>
<p><b><a href="#eco-smith">Smith</a></b> l’esquisse pour l’état primitif et adopte ensuite une théorie du coût de production.</p>
<p><b><a href="#eco-ricardo">Ricardo</a></b> la systématise et en voit les limites.</p>
<p><b><a href="#eco-marx">Marx</a></b> en fait le fondement d’une théorie de l’exploitation et des crises.</p>
<p><b><a href="#eco-say">Say</a></b> et les marginalistes, Jevons, Menger, <a href="#eco-walras">Walras</a>, fondent la valeur sur l’utilité et la rareté.</p>
<p><b>Piero Sraffa</b> renoue avec les classiques sans passer par la valeur-travail et nourrit la critique de <a href="#eco-robinson">Joan Robinson</a>.</p>`,
    source: {
      titre: "Adam Smith, La Richesse des nations, 1776, livre I, chapitre 6",
      texte: "Dans cet état primitif de la société qui précède l’accumulation des capitaux et l’appropriation du sol, la seule circonstance qui puisse fournir quelque règle pour les échanges paraît être la quantité de travail nécessaire pour acquérir les différents objets. Si, par exemple, dans une nation de chasseurs, il en coûte habituellement deux fois plus de travail pour tuer un castor que pour tuer un daim, naturellement un castor s’échangera contre deux daims.",
      notes: `
<p><b>Le contexte.</b> Le passage ouvre le chapitre sur les « parties constituantes du prix ». Smith commence par une société imaginaire, sans capital ni propriété foncière, pour mieux montrer ce qui change ensuite.</p>
<p><b>La restriction décisive.</b> « Cet état primitif » : pour Smith, la règle du travail ne vaut que dans cette société. Dès que le capital et la terre sont appropriés, le prix doit aussi payer profit et rente. C’est exactement ce que Ricardo contestera.</p>
<p><b>Un exemple devenu célèbre.</b> Le castor et le daim sont repris par Ricardo, puis par Marx et par tous les manuels d’histoire de la pensée. L’exemple montre aussi la limite de la théorie : il suppose un seul facteur de production, et des chasseurs libres de choisir leur gibier.</p>`
    },
    quiz: [
      { q: "Dans l’exemple de Smith, pourquoi un castor s’échange-t-il contre deux daims ?",
        o: ["Parce que les castors sont plus utiles", "Parce qu’il faut deux fois plus de travail pour tuer un castor", "Parce que les daims sont plus nombreux", "Parce que la viande de castor est plus rare au marché"], c: 1,
        e: "Dans une société sans capital ni rente, les biens s’échangent selon le travail nécessaire pour les obtenir ; personne n’accepterait un échange moins favorable que ce qu’il obtiendrait en chassant lui-même." },
      { q: "Qu’ajoute Ricardo à la définition de Smith ?",
        o: ["La valeur dépend de l’utilité", "La valeur inclut le travail passé incorporé dans les outils et machines", "La valeur dépend de la rente", "La valeur dépend de l’offre et de la demande du moment"], c: 1,
        e: "Le bien incorpore le travail direct et la part de travail indirect transmise par l’usure des moyens de production." },
      { q: "Qu’est-ce que le « travail socialement nécessaire » chez Marx ?",
        o: ["Le travail imposé par l’État", "Le travail requis dans les conditions moyennes de productivité de l’époque", "Le travail des services publics", "Le travail non payé"], c: 1,
        e: "Un producteur lent ne crée pas plus de valeur : seul compte le temps moyen nécessaire avec les techniques courantes." },
      { q: "En quoi consiste le problème de la transformation ?",
        o: ["Transformer le travail en capital", "Expliquer comment des valeurs proportionnelles au travail deviennent des prix qui égalisent les taux de profit", "Convertir les monnaies", "Passer de l’agriculture à l’industrie"], c: 1,
        e: "Si seul le travail crée de la plus-value mais que les profits s’égalisent, les prix doivent s’écarter des valeurs ; la cohérence de ce passage est contestée depuis Böhm-Bawerk." },
      { q: "Pourquoi la National Equitable Labour Exchange d’Owen a-t-elle échoué ?",
        o: ["Parce que la police l’a fermée", "Parce que les produits peu demandés s’accumulaient et que le temps nécessaire était difficile à estimer", "Parce que les bons de travail étaient falsifiés", "Parce qu’elle ne vendait que de la nourriture"], c: 1,
        e: "Évaluer les biens en heures de travail ignore la demande : les produits recherchés disparaissaient vite, les autres s’entassaient." }
    ],
    ouverte: {
      q: "Une heure d’infirmière, d’enseignante et de banquier d’affaires sont rémunérées très différemment en Suisse. La théorie de la valeur-travail permet-elle de dire si ces écarts sont justes ?",
      r: "La valeur-travail, au sens de Marx, compterait le travail qualifié comme un multiple du travail simple, en fonction notamment du temps de formation ; elle pourrait justifier certains écarts, mais difficilement ceux observés, qui dépassent de loin les différences de formation. L’économie marginaliste répond que les salaires reflètent la productivité marginale et la rareté des compétences, ce qui expliquerait les écarts sans juger de leur justice. Plusieurs économistes contemporains objectent que les salaires dépendent aussi du pouvoir de négociation, des institutions et de la valeur sociale du travail, que le marché mesure mal, comme l’a montré la pandémie en révélant l’importance de métiers peu payés. Aucune théorie de la valeur ne tranche à elle seule la question morale ; elles aident à distinguer ce qui relève de la productivité, de la rareté et du rapport de force."
    },
    lectures: [
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitres sur Smith, Ricardo et Marx."],
      ["Accessible", "Karl Marx, Salaire, prix et profit, 1865, l’exposé le plus simple de sa théorie de la valeur."],
      ["Intermédiaire", "David Ricardo, Principes de l’économie politique et de l’impôt (1817), chapitre 1."],
      ["Intermédiaire", "Mark Blaug, La Pensée économique, chapitres sur Ricardo et Marx."],
      ["Recherche", "Eugen von Böhm-Bawerk, Karl Marx and the Close of His System, 1896 ; Piero Sraffa, Production de marchandises par des marchandises, 1960 ; Paul Samuelson, « Understanding the Marxian Notion of Exploitation », Journal of Economic Literature, 1971."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Le castor et le daim</h3>
<p>Imaginez une tribu de chasseurs. S’il faut deux fois plus de temps pour attraper un castor qu’un daim, personne n’échangera un castor contre un seul daim : il vaudrait mieux chasser le daim soi-même. Un castor vaudra donc deux daims. Cet exemple d’Adam <a href="#eco-smith">Smith</a> résume une idée centrale de l’économie classique : la valeur d’un bien dépend du <b>travail</b> qu’il a fallu pour le produire.</p>
<h3>Le travail visible et le travail caché</h3>
<p>David <a href="#eco-ricardo">Ricardo</a> précise l’idée : un poisson ne contient pas seulement le travail du pêcheur, mais aussi une part du travail qui a servi à fabriquer son filet. Tout bien incorpore du travail direct et du travail passé.</p>
${incorporé}
<h3>De Ricardo à Marx</h3>
<p>Karl <a href="#eco-marx">Marx</a> utilise cette théorie pour expliquer le profit : si seul le travail crée de la valeur, le profit du patron vient du travail que l’ouvrier fournit sans être payé. Mais une difficulté apparaît : les prix réels ne correspondent pas exactement aux quantités de travail, car les entreprises qui utilisent beaucoup de machines doivent aussi rémunérer leur capital.</p>
<h3>À retenir</h3>
<p>À partir des années 1870, la plupart des économistes abandonnent cette théorie : pour eux, la valeur dépend du désir qu’on a d’un bien et de sa rareté. Mais la question posée par la valeur-travail, ce que vaut le travail et comment on le rémunère, reste au cœur des débats. La notice complète présente le raisonnement et les controverses.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Le castor et le daim de Smith, et la propriété selon Locke.",
      raisonnement: "Six étapes, de Smith à Ricardo, Marx et le problème de la transformation.",
      preuves: "Prix et quantités de travail, le retour de Ricardo par Sraffa, l’économie dominante.",
      cas: "Les bons de travail d’Owen, la Zeitvorsorge de Saint-Gall, la planification soviétique.",
      objections: "La rareté, le travail hétérogène, la transformation, le temps et le capital.",
      ecoles: "Locke, Smith, Ricardo, Marx, les marginalistes, Sraffa et Robinson.",
      source: "Smith, 1776 : la règle du travail dans l’état primitif.",
      quiz: "Cinq questions corrigées et une question sur les écarts de salaires.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     18. PRIX NATUREL ET PRIX DE MARCHÉ
     ===================================================================== */
  const gravitation = fig(290, (() => {
    const L = 60, R = 610, mid = 150, amp = 90;
    let s = `<line x1="${L}" y1="${mid}" x2="${R}" y2="${mid}" style="stroke:var(--gold); stroke-width:2; stroke-dasharray:7 5"/>`;
    s += `<text x="${R}" y="${mid + 30}" text-anchor="end" style="fill:var(--gold); font:700 12px Manrope, sans-serif">prix naturel (coût de production)</text>`;
    const p = []; for (let x = 0; x <= 1; x += 0.005) { const y = mid - amp * Math.exp(-2.2 * x) * Math.sin(x * 18); p.push((L + x * (R - L)) + "," + y); }
    s += `<polyline points="${p.join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.5"/>`;
    s += `<text x="${L + 50}" y="${mid - 82}" style="fill:var(--note); font:600 12px Manrope, sans-serif">prix de marché</text>`;
    s += `<text x="${L + 160}" y="${mid - 98}" ${S}>pénurie : profits élevés,</text><text x="${L + 160}" y="${mid - 84}" ${S}>les capitaux affluent</text>`;
    s += `<text x="${L + 170}" y="${mid + 96}" ${S}>excès d’offre : pertes,</text><text x="${L + 170}" y="${mid + 110}" ${S}>les capitaux se retirent</text>`;
    s += `<text x="${L}" y="24" ${T}>La gravitation du prix de marché autour du prix naturel (schéma)</text>`;
    s += `<text x="${R}" y="${mid + 125}" text-anchor="end" ${M}>temps →</text>`;
    return s;
  })(), "Schéma sans données de la gravitation décrite par Smith. Quand le prix dépasse le coût, l’offre augmente ; quand il passe en dessous, elle diminue. Les écarts se réduisent si les capitaux se déplacent librement et si les coûts restent constants.", "Courbe oscillante qui converge vers une ligne horizontale");

  OEC.notices["prix-naturel"] = {
    essentiel: [
      "Chez Adam Smith, le prix d’un bien observé un jour donné, son prix de marché, dépend du rapport entre la quantité offerte et la demande. Mais il fluctue autour d’un prix naturel, qui couvre tout juste les salaires, les profits et les rentes aux taux ordinaires.",
      "Le mécanisme de rappel est la concurrence : si le prix dépasse le prix naturel, les profits élevés attirent capitaux et travailleurs, l’offre augmente et le prix baisse ; dans le cas inverse, ils se retirent.",
      "Cette idée de gravitation a été reprise par Ricardo et Marx, puis transformée par Marshall en équilibre de longue période. Elle suppose la libre circulation des capitaux et des coûts stables, conditions que les monopoles, les rendements croissants et les cycles de production viennent souvent contredire."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : le deuil public et le prix du drap noir", html: `
<p>Au chapitre 7 de la Richesse des nations, Adam <a href="#eco-smith">Smith</a> prend un exemple précis : un deuil public, après la mort d’un membre de la famille royale, fait monter brusquement le prix du drap noir, dont chacun a besoin en même temps. Les marchands qui en possèdent des stocks font de beaux profits ; les tailleurs, très demandés, voient leurs salaires augmenter. Mais cette hausse est temporaire. Quelques mois plus tard, le deuil terminé, le prix du drap noir revient à son niveau habituel, et c’est celui du drap de couleur qui a baissé pendant ce temps.</p>
<p>Derrière ces mouvements de court terme, Smith discerne un niveau de référence, vers lequel les prix reviennent toujours : il l’appelle le « prix naturel ». Comprendre ce qui fixe ce niveau et comment les prix y reviennent est l’un des premiers grands problèmes de la science économique.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Les taux naturels</h4>
<p>Dans chaque société et à chaque époque, observe Smith, il existe un taux ordinaire de salaire, de profit et de rente, déterminé par l’état général de l’économie : richesse ou pauvreté du pays, progrès ou déclin, institutions. Il appelle ces taux « naturels » au sens où ils sont habituels, non au sens d’une loi de la nature.</p>
<h4>2. Le prix naturel</h4>
<p>Le prix naturel d’une marchandise est celui qui suffit à payer, aux taux naturels, le salaire du travail, le profit du capital et la rente de la terre employés à la produire et à l’amener sur le marché. Au prix naturel, le producteur ne gagne ni plus ni moins que ce qu’il gagnerait ailleurs : il n’a ni raison d’augmenter, ni raison de réduire sa production.</p>
<h4>3. Le prix de marché et la demande effective</h4>
<p>Le prix de marché est celui auquel le bien se vend effectivement. Il dépend du rapport entre la quantité offerte et la « demande effective », c’est-à-dire la demande de ceux qui sont prêts à payer le prix naturel. Un mendiant peut désirer un carrosse à six chevaux ; sa demande n’est pas effective. Si l’offre est inférieure à la demande effective, les acheteurs se font concurrence et le prix monte ; si elle est supérieure, il baisse.</p>
${gravitation}
<h4>4. La gravitation</h4>
<p>Quand le prix de marché dépasse le prix naturel, les producteurs gagnent plus qu’ailleurs ; le capital et le travail affluent vers cette activité, l’offre augmente, et le prix redescend. Quand il est inférieur, ils se retirent, l’offre diminue, et le prix remonte. Le prix naturel est ainsi, selon Smith, « le prix central vers lequel gravitent continuellement les prix de toutes les marchandises ». Le mot est emprunté à la physique de Newton, que Smith admirait.</p>
<h4>5. Les obstacles</h4>
<p>Smith voit que la gravitation peut être empêchée. Un monopole peut maintenir le prix durablement au-dessus du prix naturel en limitant l’offre. Les corporations, les lois qui restreignent l’accès aux métiers, les secrets de fabrication ont le même effet. Certains biens rares, comme les vins de terroirs exceptionnels, peuvent se vendre durablement au-dessus de leur coût. Pour Smith, le rôle de la politique économique est d’abord de supprimer ces obstacles pour laisser jouer la concurrence.</p>
<h4>6. De Ricardo à Marshall</h4>
<p><a href="#eco-ricardo">Ricardo</a> reprend la distinction et précise que le prix naturel dépend des coûts de production sur la terre la moins fertile (<a href="#c-rente">voir la rente différentielle</a>). <a href="#eco-marx">Marx</a> en fait ses « prix de production », qui égalisent les taux de profit entre branches. <a href="#eco-marshall">Marshall</a> transforme l’idée en distinguant les prix de courte période, dominés par la demande, et les prix « normaux » de longue période, où les entreprises peuvent entrer et sortir du marché. En concurrence parfaite, le prix de longue période égale le coût moyen minimal de production : c’est la version moderne du prix naturel.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les cycles du porc et le théorème de la toile d’araignée</h4>
<p>Dans les années 1920, l’économiste allemand Arthur Hanau étudie le marché du porc et observe des cycles réguliers : quand le prix est élevé, les éleveurs augmentent leurs élevages ; un an plus tard, l’offre abondante fait chuter le prix ; ils réduisent alors leur production, et le prix remonte. En 1938, l’Américain Mordecai Ezekiel formalise ce « théorème de la toile d’araignée » : quand la production réagit avec retard aux prix, la gravitation peut produire des oscillations persistantes, voire croissantes, au lieu d’une convergence.</p>
<h4>L’égalisation des taux de profit</h4>
<p>La gravitation suppose que les taux de profit tendent à s’égaliser entre secteurs. Les études empiriques montrent des écarts persistants : certaines industries, protégées par des brevets, des économies d’échelle ou des marques, restent durablement plus rentables. Depuis les années 2000, plusieurs travaux, dont ceux de Jan De Loecker et Jan Eeckhout, documentent une hausse des marges des entreprises au-dessus de leurs coûts aux États-Unis, signe d’un affaiblissement de la concurrence.</p>
<h4>Les grands cycles des matières premières</h4>
<p>Les marchés des matières premières offrent des illustrations spectaculaires. Entre 2021 et 2022, le prix du carbonate de lithium, indispensable aux batteries, est multiplié par plus de dix en raison de la demande de voitures électriques. De nouvelles mines ouvrent en Australie, en Amérique du Sud et en Chine ; en 2023, le prix s’effondre de plus des trois quarts. La gravitation existe, mais elle passe par des excès dans les deux sens.</p>` }
    ],
    cas: [
      { titre: "Le fret maritime pendant la pandémie", html: `
<p>En 2021, la reprise brutale de la demande de biens, les fermetures de ports en Chine et la pénurie de conteneurs font exploser le prix du transport maritime. Le coût d’un conteneur de quarante pieds entre l’Asie et l’Europe est multiplié par cinq à dix selon les routes. Les armateurs réalisent des profits records et commandent massivement de nouveaux navires. En 2023, la demande s’est calmée, la capacité a augmenté, et les tarifs sont revenus près de leur niveau d’avant la crise. C’est presque exactement le mécanisme du drap noir de Smith, à l’échelle mondiale.</p>` },
      { titre: "Le prix des montres de luxe", html: `
<p>Certaines montres suisses de prestige se revendent sur le marché secondaire bien au-dessus de leur prix de catalogue, et les listes d’attente durent des années. Le prix de marché dépasse durablement le prix naturel au sens de Smith, sans que l’offre augmente pour autant. Les fabricants limitent volontairement leur production, car la rareté fait partie de la valeur de la marque. On retrouve ici les exceptions que Smith signalait déjà : le monopole et la rareté. Les biens de luxe illustrent aussi l’analyse de Veblen sur la <a href="#c-consommation-ostentatoire">consommation ostentatoire</a>.</p>` },
      { titre: "L’« îlot de cherté » suisse", html: `
<p>Les prix de nombreux biens de consommation sont nettement plus élevés en Suisse que dans les pays voisins, même pour des produits identiques fabriqués à l’étranger. Une partie de l’écart s’explique par des coûts plus élevés, salaires, loyers, logistique, ce qui est cohérent avec un prix naturel plus haut. Mais une autre partie tient à des obstacles à la concurrence : contrats de distribution exclusifs, différenciation des prix par les fournisseurs étrangers selon le pays, barrières techniques. La Suisse a adopté plusieurs mesures, comme le principe du « Cassis de Dijon » en 2010, qui admet certains produits conformes aux normes européennes, puis des règles contre le « pouvoir de marché relatif » des fournisseurs, entrées en vigueur en 2022.</p>` }
    ],
    objections: `
<h4>1. Les rendements croissants</h4>
<p>Si les coûts baissent quand la production augmente, il n’existe plus de prix naturel unique : l’entreprise qui grandit le plus vite peut réduire ses prix et évincer les autres, et le marché tend vers la concentration. En 1926, Piero Sraffa montre que la théorie de la concurrence de Marshall s’accorde mal avec les rendements croissants.</p>
<h4>2. Le pouvoir de marché</h4>
<p>Les marchés réels sont souvent dominés par quelques entreprises qui fixent leurs prix au-dessus du coût. La gravitation vers le prix naturel suppose une concurrence que la réalité ne garantit pas (<a href="#c-concurrence-imparfaite">voir monopole et oligopole</a>).</p>
<h4>3. Le temps de l’ajustement</h4>
<p>Comme le montrent les cycles du porc ou du lithium, l’ajustement peut prendre des années et produire des oscillations. Pendant ce temps, des entreprises font faillite, des travailleurs perdent leur emploi : la convergence à long terme ne dit rien des coûts du chemin.</p>
<h4>4. La demande compte aussi</h4>
<p>Chez Smith et Ricardo, le prix naturel dépend des coûts, la demande ne jouant que sur les écarts temporaires. Les marginalistes objectent que les coûts eux-mêmes dépendent de la demande, par l’intermédiaire du prix des facteurs. <a href="#eco-marshall">Marshall</a> réconcilie les deux points de vue avec ses ciseaux.</p>
<h4>5. L’école autrichienne</h4>
<p>Pour <a href="#eco-hayek">Hayek</a> et les Autrichiens, l’équilibre n’est jamais atteint : les prix sont des signaux dans un processus permanent de découverte, et parler d’un prix naturel fixe masque l’essentiel, la manière dont les acteurs apprennent et corrigent leurs erreurs.</p>`,
    ecoles: `
<p><b>Les scolastiques</b> discutaient du « juste prix », que les plus subtils rattachaient déjà à l’estimation commune du marché.</p>
<p><b>Richard Cantillon</b> distinguait vers 1730 la « valeur intrinsèque » d’un bien, fondée sur la terre et le travail, et son prix de marché.</p>
<p><b><a href="#eco-smith">Smith</a></b> formule la théorie de la gravitation.</p>
<p><b><a href="#eco-ricardo">Ricardo</a> et <a href="#eco-marx">Marx</a></b> la reprennent sous les noms de prix naturel et de prix de production.</p>
<p><b><a href="#eco-marshall">Marshall</a></b> la transforme en équilibre de longue période.</p>
<p><b><a href="#eco-walras">Walras</a></b> remplace la gravitation par l’équilibre simultané de tous les marchés, atteint par tâtonnement.</p>`,
    source: {
      titre: "Adam Smith, La Richesse des nations, 1776, livre I, chapitre 7",
      texte: "Le prix naturel est donc, pour ainsi dire, le prix central vers lequel gravitent continuellement les prix de toutes les marchandises. Différentes circonstances accidentelles peuvent quelquefois les tenir un certain temps élevés au-dessus, et quelquefois les forcer à descendre un peu au-dessous de ce prix. Mais, quels que soient les obstacles qui les empêchent de se fixer dans ce centre de repos et de permanence, ils tendent constamment vers lui.",
      notes: `
<p><b>Le vocabulaire de Newton.</b> « Graviter », « centre de repos » : Smith, qui a écrit une histoire de l’astronomie, emprunte le langage de la mécanique céleste. L’économie se présente comme la découverte d’un ordre caché derrière le désordre apparent des prix.</p>
<p><b>« Quels que soient les obstacles ».</b> Smith ne prétend pas que les prix soient toujours à leur niveau naturel ; il affirme seulement une tendance. La suite du chapitre est consacrée à ces obstacles, monopoles et privilèges.</p>
<p><b>Un héritage durable.</b> L’idée d’un équilibre vers lequel tend l’économie structure encore la plupart des modèles. Ses critiques, de Keynes aux Autrichiens, contestent justement que cette tendance soit assez forte et assez rapide pour guider l’analyse.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que le prix naturel chez Smith ?",
        o: ["Le prix fixé par l’État", "Le prix qui couvre salaires, profits et rentes aux taux ordinaires", "Le prix le plus bas possible", "Le prix moyen observé sur le marché pendant une année"], c: 1,
        e: "C’est le prix qui permet de payer tous les facteurs de production à leur rémunération habituelle, sans gain ni perte exceptionnels." },
      { q: "Que se passe-t-il quand le prix de marché dépasse durablement le prix naturel dans un marché concurrentiel ?",
        o: ["Les producteurs quittent le marché", "Les capitaux et le travail affluent, l’offre augmente et le prix baisse", "La demande disparaît", "L’État fixe un prix plafond"], c: 1,
        e: "Les profits supérieurs à la normale attirent de nouveaux producteurs jusqu’à ce que le prix revienne vers le prix naturel." },
      { q: "Qu’est-ce que la « demande effective » chez Smith ?",
        o: ["Toute envie d’un bien", "La demande de ceux qui sont prêts à payer le prix naturel", "La demande de l’État", "La demande totale de l’économie, au sens de Keynes"], c: 1,
        e: "Le désir sans les moyens de payer ne compte pas : le mendiant qui rêve d’un carrosse n’exprime pas une demande effective." },
      { q: "Que montre le théorème de la toile d’araignée ?",
        o: ["Que les prix convergent toujours rapidement", "Que si la production réagit avec retard, les prix peuvent osciller durablement", "Que les prix agricoles sont fixes", "Que l’offre réagit immédiatement aux variations de prix"], c: 1,
        e: "Les éleveurs produisent selon le prix de l’année précédente, ce qui crée des cycles de surproduction et de pénurie." },
      { q: "Pourquoi certaines montres de luxe se vendent-elles durablement au-dessus de leur prix de catalogue ?",
        o: ["Parce que leurs coûts de production augmentent", "Parce que les fabricants limitent volontairement l’offre et que la rareté fait partie de leur valeur", "Parce que leur prix de catalogue n’a pas suivi l’inflation", "Parce que la demande baisse"], c: 1,
        e: "C’est l’exception que Smith signalait : un monopole ou une rareté entretenue empêchent l’offre d’augmenter et le prix de redescendre." }
    ],
    ouverte: {
      q: "Pourquoi la concurrence ne fait-elle pas baisser les prix suisses au niveau de ceux des pays voisins pour des produits identiques ?",
      r: "Une partie de l’écart correspond à un prix naturel plus élevé : salaires, loyers et coûts logistiques sont plus hauts en Suisse, et les services liés à la vente (personnel, magasins) entrent dans le prix final. Mais la gravitation vers les prix étrangers est freinée par plusieurs obstacles que Smith aurait reconnus : des fournisseurs étrangers qui fixent des prix différents selon les pays et refusent de livrer les distributeurs suisses aux conditions européennes, des contrats de distribution exclusifs, des normes techniques ou d’étiquetage spécifiques, et une agriculture protégée par des droits de douane élevés. Les importations parallèles et les achats transfrontaliers jouent le rôle de la concurrence ; les règles adoptées en 2022 contre le pouvoir de marché relatif cherchent à les faciliter. Le débat porte sur la part respective des coûts réels et des obstacles à la concurrence."
    },
    lectures: [
      ["Accessible", "Adam Smith, La Richesse des nations (1776), livre I, chapitre 7, un chapitre court et limpide."],
      ["Accessible", "Bernard Guerrien, Dictionnaire d’analyse économique, articles « prix naturel » et « équilibre »."],
      ["Intermédiaire", "Alfred Marshall, Principes d’économie (1890), livre V."],
      ["Intermédiaire", "Mordecai Ezekiel, « The Cobweb Theorem », Quarterly Journal of Economics, 1938."],
      ["Recherche", "Piero Sraffa, « The Laws of Returns under Competitive Conditions », Economic Journal, 1926 ; Jan De Loecker, Jan Eeckhout et Gabriel Unger, « The Rise of Market Power and the Macroeconomic Implications », Quarterly Journal of Economics, 2020."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Le drap noir</h3>
<p>Quand un membre de la famille royale mourait, tout le monde devait porter le deuil en même temps, et le prix du drap noir montait brusquement. Quelques mois plus tard, il revenait à son niveau habituel. Adam <a href="#eco-smith">Smith</a> se demande en 1776 ce qu’est ce « niveau habituel » vers lequel les prix reviennent toujours.</p>
<h3>Prix de marché et prix naturel</h3>
<p>Smith distingue deux prix. Le <b>prix de marché</b> est celui qu’on observe un jour donné ; il monte quand le produit manque, baisse quand il abonde. Le <b>prix naturel</b> est celui qui couvre tout juste ce que coûte la production : salaires, profits normaux et loyers. C’est le niveau autour duquel le prix de marché tourne.</p>
${gravitation}
<h3>Le retour vers l’équilibre</h3>
<p>Si un produit se vend plus cher que ce qu’il coûte, ceux qui le fabriquent gagnent beaucoup ; d’autres se lancent, l’offre augmente, et le prix redescend. Si le prix tombe sous le coût, des producteurs abandonnent, l’offre diminue, et le prix remonte. En 2021, le prix du transport maritime a été multiplié par cinq ou plus ; deux ans plus tard, après la construction de nouveaux navires, il était revenu presque à la normale.</p>
<h3>À retenir</h3>
<p>Cette « gravitation » ne fonctionne que si la concurrence joue. Un monopole, une rareté organisée ou des obstacles au commerce peuvent maintenir les prix durablement trop hauts. La notice complète présente les exemples et les limites de cette idée.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Le deuil public et le prix du drap noir.",
      raisonnement: "Six étapes : taux naturels, prix naturel, demande effective, gravitation, obstacles, de Ricardo à Marshall.",
      preuves: "Les cycles du porc, l’égalisation des profits, les grands cycles des matières premières.",
      cas: "Le fret maritime en 2021, les montres de luxe, l’îlot de cherté suisse.",
      objections: "Rendements croissants, pouvoir de marché, temps de l’ajustement, demande, école autrichienne.",
      ecoles: "Scolastiques, Cantillon, Smith, Ricardo et Marx, Marshall, Walras.",
      source: "Smith, 1776 : le prix central vers lequel gravitent les prix.",
      quiz: "Cinq questions corrigées et une question sur les prix suisses.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
