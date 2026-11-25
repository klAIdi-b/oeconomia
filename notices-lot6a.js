/* Œconomia — notices longues, lot 6 (a) : multiplicateur, stagflation */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     29. MULTIPLICATEUR
     ===================================================================== */
  const vagues = fig(300, (() => {
    const L = 60, B = 230, w = 44, gap = 10, sc = 1.5;
    const rounds = [100, 80, 64, 51.2, 41, 32.8, 26.2, 21, 16.8];
    let s = `<text x="20" y="24" ${T}>Une dépense de 100 se propage : chaque bénéficiaire en dépense 80 %</text>`;
    let cum = 0;
    rounds.forEach((v, i) => {
      const x = L + i * (w + gap), h = v * sc; cum += v;
      s += `<rect x="${x}" y="${B - h}" width="${w}" height="${h}" rx="3" style="fill:${i === 0 ? "var(--gold)" : "var(--note)"}; opacity:${1 - i * 0.07}"/>`;
      s += `<text x="${x + w / 2}" y="${B - h - 6}" text-anchor="middle" ${M}>${Math.round(v)}</text>`;
      s += `<text x="${x + w / 2}" y="${B + 16}" text-anchor="middle" ${M}>${i + 1}</text>`;
    });
    const xe = L + 9 * (w + gap);
    s += `<text x="${xe + 4}" y="${B - 40}" ${S}>… et ainsi</text><text x="${xe + 4}" y="${B - 24}" ${S}>de suite</text>`;
    s += `<text x="${L}" y="${B + 36}" ${M}>vague de dépense</text>`;
    s += `<text x="20" y="288" ${S}>Total : 100 + 80 + 64 + 51 + … = 100 × 1 / (1 − 0,8) = 500. Les neuf premières vagues font déjà ${Math.round(cum)}.</text>`;
    return s;
  })(), "Le mécanisme décrit par Richard Kahn (1931) et Keynes (1936). Une dépense devient le revenu de quelqu’un, qui en dépense une partie, qui devient le revenu d’un autre, et ainsi de suite. La somme d’une suite géométrique de raison 0,8 vaut cinq fois le premier terme.", "Barres décroissantes des vagues successives de dépense");

  const fuites = fig(270, (() => {
    const L = 230, W = 360;
    const rows = [["Économie fermée", 5, "1 / (1 − 0,8)", "var(--note)"], ["Avec impôts (30 %)", 2.27, "1 / (1 − 0,8 × 0,7)", "var(--plum)"], ["Impôts et importations", 1.35, "1 / (1 − 0,56 + 0,3)", "var(--serial)"]];
    let s = `<text x="20" y="24" ${T}>Les fuites réduisent le multiplicateur (calcul simplifié)</text>`;
    rows.forEach(([n, v, f, c], i) => {
      const y = 52 + i * 62, w = v / 5 * W;
      s += `<text x="${L - 12}" y="${y + 16}" text-anchor="end" ${T}>${n}</text>`;
      s += `<text x="${L - 12}" y="${y + 32}" text-anchor="end" ${M}>${f}</text>`;
      s += `<rect x="${L}" y="${y}" width="${w}" height="34" rx="4" style="fill:${c}"/>`;
      s += `<text x="${L + w + 8}" y="${y + 22}" style="fill:var(--ink); font:700 13px 'JetBrains Mono', monospace">${v.toLocaleString("fr-CH")}</text>`;
    });
    s += `<text x="20" y="252" ${S}>Une économie très ouverte, comme la Suisse, a donc un multiplicateur faible.</text>`;
    return s;
  })(), "Chaque franc qui part en impôts, en épargne ou en achats à l’étranger interrompt la chaîne de dépenses dans le pays. Les chiffres sont illustratifs ; les estimations empiriques du multiplicateur budgétaire se situent le plus souvent entre 0,5 et 2 selon les pays et les circonstances.", "Trois barres de multiplicateur décroissant");

  OEC.notices["multiplicateur"] = {
    essentiel: [
      "Le multiplicateur mesure de combien le revenu national augmente quand une dépense, publique ou privée, augmente d’un franc. Parce que la dépense de l’un est le revenu de l’autre, une dépense initiale se propage en vagues successives.",
      "Dans le modèle le plus simple, il vaut 1 / (1 − c), où c est la part du revenu supplémentaire que les ménages dépensent. Les impôts, l’épargne et les importations sont des « fuites » qui le réduisent.",
      "Sa valeur réelle est l’un des débats les plus disputés de la macroéconomie : elle dépend de l’ouverture de l’économie, de la réaction de la banque centrale, de l’état du cycle et des anticipations. Elle semble nettement plus forte en récession, quand les taux sont bloqués à zéro."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : combien d’emplois crée un chantier public ?", html: `
<p>En 1929, l’Angleterre compte plus d’un million de chômeurs. Le Parti libéral de Lloyd George propose un vaste programme de travaux publics, routes, logements, téléphone, pour les remettre au travail. Le Trésor britannique objecte que ces dépenses ne feraient que détourner des capitaux du secteur privé, sans créer d’emplois nets. <a href="#eco-keynes">Keynes</a> et Hubert Henderson répondent dans une brochure, Can Lloyd George Do It ?, que les ouvriers employés sur les chantiers dépenseront leurs salaires, ce qui créera d’autres emplois, mais sans pouvoir encore chiffrer cet effet.</p>
<p>C’est un jeune économiste de Cambridge, élève de Keynes, Richard Kahn, qui en donne la mesure en 1931 dans un article de l’Economic Journal. Il calcule que chaque emploi « primaire » créé sur un chantier engendre une série d’emplois « secondaires », dont le total est fini et calculable. Keynes reprend l’idée au chapitre 10 de la Théorie générale sous le nom de multiplicateur. Elle deviendra l’un des outils centraux de la politique économique d’après-guerre.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La dépense des uns est le revenu des autres</h4>
<p>Supposons que l’État dépense 100 millions de francs pour construire une école. Cette somme devient le revenu des entreprises de construction, de leurs salariés et de leurs fournisseurs. C’est le premier effet, direct.</p>
<h4>2. Les vagues suivantes</h4>
<p>Ceux qui ont reçu ces 100 millions en dépensent une partie, disons 80 %, et épargnent le reste. Ces 80 millions deviennent le revenu des commerçants, des restaurateurs, des artisans, qui en dépensent à leur tour 80 %, soit 64 millions, et ainsi de suite. Chaque vague est plus petite que la précédente.</p>
${vagues}
<h4>3. La formule</h4>
<p>La somme de toutes ces vagues est une suite géométrique : 100 + 80 + 64 + 51,2 + … = 100 × 1 / (1 − 0,8) = 500. Le multiplicateur vaut 1 / (1 − c), où c est la « propension marginale à consommer », la part d’un franc supplémentaire de revenu qui est dépensée. Plus les gens dépensent, plus le multiplicateur est élevé. Le même mécanisme joue à la baisse : c’est le <a href="#c-paradoxe-epargne">paradoxe de l’épargne</a>.</p>
<h4>4. Les fuites</h4>
<p>Le calcul simple surestime fortement l’effet. À chaque vague, une partie du revenu part en impôts, en cotisations, en épargne, et une partie de la dépense va à des produits importés, qui créent des revenus à l’étranger. Plus ces fuites sont importantes, plus la chaîne s’interrompt vite. Une économie petite et très ouverte, comme la Suisse ou la Belgique, a un multiplicateur beaucoup plus faible qu’une grande économie peu ouverte comme les États-Unis.</p>
${fuites}
<h4>5. L’éviction</h4>
<p>Les économistes classiques et monétaristes objectent que la dépense publique peut « évincer » la dépense privée. Si l’État emprunte pour dépenser, il peut faire monter les taux d’intérêt, ce qui réduit l’investissement privé ; si la banque centrale juge que l’économie surchauffe, elle relève ses taux. Le multiplicateur dépend donc de la réaction de la politique monétaire : il est faible au plein emploi, quand la banque centrale freine, et plus élevé en récession, quand elle laisse les taux bas.</p>
<h4>6. Les anticipations</h4>
<p>Robert Barro relance en 1974 un argument de Ricardo : si les ménages savent que la dette publique d’aujourd’hui sera remboursée par des impôts demain, ils épargnent pour les payer, et la dépense publique ne relance rien (<a href="#c-equivalence-ricardienne">voir équivalence ricardienne</a>). À l’inverse, une relance peut rassurer les entreprises et les ménages, et donc augmenter leur dépense au-delà de l’effet mécanique. Les anticipations peuvent réduire ou amplifier le multiplicateur.</p>
<h4>7. Le multiplicateur et l’accélérateur</h4>
<p>En 1939, Paul <a href="#eco-samuelson">Samuelson</a> combine le multiplicateur avec l’« accélérateur » : quand les ventes augmentent, les entreprises investissent pour accroître leurs capacités, ce qui augmente encore la demande. L’interaction des deux mécanismes peut produire des oscillations, ce qui fournit une première explication mathématique des <a href="#c-cycles">cycles économiques</a>.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Une mesure difficile</h4>
<p>Mesurer le multiplicateur est difficile, parce que les dépenses publiques réagissent elles-mêmes à la conjoncture : les gouvernements dépensent davantage en récession. Les économistes cherchent donc des variations de dépense indépendantes de l’état de l’économie. Robert Barro et Charles Redlick utilisent les dépenses militaires liées aux guerres et trouvent des multiplicateurs inférieurs à 1. Valerie Ramey, dans une synthèse de 2019, conclut que la plupart des estimations se situent entre 0,6 et 1 en temps normal.</p>
<h4>Plus fort en récession</h4>
<p>Alan Auerbach et Yuriy Gorodnichenko (2012) trouvent que le multiplicateur est nettement plus élevé en récession qu’en expansion. Emi Nakamura et Jón Steinsson (2014) comparent les États américains selon les dépenses militaires fédérales qu’ils reçoivent et estiment un multiplicateur régional d’environ 1,5. Les travaux théoriques de Christiano, Eichenbaum et Rebelo (2011) prédisent des multiplicateurs de 2 ou plus quand les taux d’intérêt sont bloqués à zéro.</p>
<h4>L’erreur du FMI</h4>
<p>En janvier 2013, Olivier Blanchard, économiste en chef du FMI, et Daniel Leigh publient une étude qui fait date. Ils montrent que les prévisions de croissance pour les pays européens qui ont mené une austérité budgétaire en 2010-2011 se sont systématiquement révélées trop optimistes, et d’autant plus que l’austérité était forte. Les prévisions supposaient un multiplicateur d’environ 0,5 ; les erreurs suggèrent qu’il se situait plutôt entre 0,9 et 1,7. L’austérité avait coûté beaucoup plus de croissance que prévu, ce qui a pesé dans le débat européen.</p>` }
    ],
    cas: [
      { titre: "Le plan de relance américain de 2009", html: `
<p>En février 2009, le Congrès américain adopte l’American Recovery and Reinvestment Act, un plan d’environ 800 milliards de dollars mêlant baisses d’impôts, aides aux États, prolongation des allocations chômage et investissements dans les infrastructures. Le Bureau du budget du Congrès estime alors des multiplicateurs allant de 0,5 à 2,5 selon les mesures, les plus élevés pour les dépenses directes et les aides aux chômeurs, qui dépensent presque tout ce qu’ils reçoivent, les plus faibles pour les baisses d’impôts des ménages aisés. Les évaluations ultérieures concluent généralement que le plan a réduit le chômage, mais le débat sur son ampleur, jugée trop faible par Paul <a href="#eco-krugman">Krugman</a> et trop coûteuse par d’autres, n’a jamais cessé.</p>` },
      { titre: "La Suisse, petite économie ouverte", html: `
<p>Les économistes suisses ont longtemps été sceptiques sur les plans de relance, pour une raison liée au multiplicateur : dans une économie où les importations représentent une part importante du PIB, une grande partie de toute dépense supplémentaire profite aux producteurs étrangers. Lors de la crise de 2008-2009, la Confédération adopte des mesures de stabilisation en trois phases, d’un montant modeste par rapport à d’autres pays. La Suisse compte davantage sur les « stabilisateurs automatiques », l’assurance chômage et la réduction de l’horaire de travail, qui soutiennent les revenus sans décision politique. En 2020, le chômage partiel a protégé plus d’un million de salariés au plus fort de la pandémie.</p>` },
      { titre: "Le programme de travaux de 1929", html: `
<p>La brochure de Keynes et Henderson, en 1929, est l’un des premiers documents de campagne électorale fondés sur un raisonnement macroéconomique. Lloyd George perd pourtant les élections. Le Trésor maintient sa « vue du Trésor », selon laquelle la dépense publique évince la dépense privée franc pour franc. Il faudra la guerre et le réarmement pour que le chômage britannique disparaisse, ce que beaucoup d’économistes interprètent comme une démonstration à grande échelle du multiplicateur.</p>` }
    ],
    objections: `
<h4>1. L’éviction au plein emploi</h4>
<p>Quand l’économie tourne à pleine capacité, une dépense publique supplémentaire ne peut pas augmenter la production : elle prend des ressources au secteur privé ou fait monter les prix. Le multiplicateur est alors proche de zéro, voire négatif si les dépenses sont inefficaces.</p>
<h4>2. L’équivalence ricardienne</h4>
<p>Si les ménages anticipent les impôts futurs nécessaires au remboursement de la dette, ils épargnent davantage aujourd’hui. Cet argument, défendu par Barro, est rarement vérifié intégralement, mais il réduit l’effet des baisses d’impôts temporaires.</p>
<h4>3. La qualité de la dépense</h4>
<p>Le multiplicateur ne dit rien de l’utilité des dépenses. Creuser des trous et les reboucher a, à court terme, le même effet sur le revenu que construire une école. Mais à long terme, seule l’école augmente la capacité de production. Les critiques reprochent aux plans de relance de favoriser des dépenses rapides plutôt qu’utiles.</p>
<h4>4. La dette</h4>
<p>Si la relance augmente fortement la dette publique, elle peut inquiéter les marchés et faire monter les taux, comme dans les pays de la zone euro en 2010-2012. Le multiplicateur d’un pays très endetté peut donc être faible, voire négatif. C’est l’argument des partisans de l’« austérité expansionniste », comme Alberto Alesina, très discuté après 2010.</p>`,
    ecoles: `
<p><b>Richard Kahn</b> (1931) formule le multiplicateur d’emploi.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> en fait un pilier de la Théorie générale.</p>
<p><b><a href="#eco-samuelson">Samuelson</a></b> le combine à l’accélérateur et l’enseigne à des générations d’étudiants.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> et les monétaristes insistent sur l’éviction.</p>
<p><b>Barro</b> l’attaque au nom de l’équivalence ricardienne.</p>
<p><b><a href="#eco-krugman">Krugman</a></b>, Blanchard et les néokeynésiens le réhabilitent pour les situations de taux zéro.</p>`,
    source: {
      titre: "J. M. Keynes, Théorie générale de l’emploi, de l’intérêt et de la monnaie, 1936, chapitre 10",
      texte: "Si la Trésorerie remplissait de vieilles bouteilles de billets de banque, les enterrait à des profondeurs convenables dans des mines de charbon désaffectées, […] et laissait à l’entreprise privée le soin de les déterrer, le chômage pourrait disparaître.",
      notes: `
<p><b>Une provocation.</b> Le passage est souvent cité pour ridiculiser Keynes, comme s’il recommandait des dépenses inutiles. C’est un contresens : il veut montrer qu’en situation de chômage massif, même une dépense absurde créerait des revenus, ce que niait la « vue du Trésor ».</p>
<p><b>La phrase suivante.</b> Keynes ajoute aussitôt qu’il serait « plus sensé » de construire des maisons ou autre chose d’utile. Les obstacles politiques et pratiques à la dépense utile ne doivent pas faire croire que toute dépense est inutile.</p>
<p><b>L’analogie de l’or.</b> Keynes compare ensuite son exemple à l’extraction de l’or, qui consiste précisément à creuser des trous pour en sortir un métal qu’on enfouit ensuite dans les coffres des banques centrales.</p>`
    },
    quiz: [
      { q: "Si les ménages dépensent 75 % de tout revenu supplémentaire, quel est le multiplicateur simple ?",
        o: ["1,33", "2", "4", "7,5"], c: 2,
        e: "1 / (1 − 0,75) = 1 / 0,25 = 4." },
      { q: "Qui a publié en 1931 l’article qui fait connaître le multiplicateur d’emploi ?",
        o: ["Keynes", "Richard Kahn", "Samuelson", "Friedman"], c: 1,
        e: "Kahn, élève de Keynes, calcule les emplois secondaires créés par un emploi sur un chantier public. Des calculs voisins existaient déjà, par exemple en Australie à la fin des années 1920." },
      { q: "Pourquoi le multiplicateur est-il plus faible en Suisse qu’aux États-Unis ?",
        o: ["Parce que les Suisses épargnent moins", "Parce qu’une grande part de la dépense part en importations", "Parce que la dette publique suisse est très élevée", "Parce que les taux d’intérêt suisses sont très élevés"], c: 1,
        e: "Les importations sont une fuite : la dépense crée des revenus à l’étranger plutôt que dans le pays." },
      { q: "Qu’ont montré Blanchard et Leigh en 2013 ?",
        o: ["Que l’austérité relance la croissance", "Que les multiplicateurs en Europe en 2010-2011 étaient plus élevés que supposé, donc l’austérité plus coûteuse", "Que le multiplicateur est nul", "Que le multiplicateur était plus faible en récession"], c: 1,
        e: "Les prévisions supposaient environ 0,5 ; les erreurs indiquent plutôt 0,9 à 1,7." },
      { q: "Dans quelle situation le multiplicateur est-il le plus élevé ?",
        o: ["Au plein emploi avec une banque centrale qui relève ses taux", "En récession, avec des taux bloqués à zéro", "En période d’inflation forte", "Quand la dette publique est très élevée"], c: 1,
        e: "Sans éviction par les taux et avec des ressources inemployées, la dépense se propage pleinement." }
    ],
    transfert: { q: "Deux pays lancent le même plan de relance. Le premier importe la moitié de ce qu’il consomme, le second un dixième. Dans lequel le multiplicateur sera-t-il probablement le plus faible ?",
      o: ["Dans le premier, car une grande partie de la dépense profite aux producteurs étrangers", "Dans le second, car il produit davantage lui-même", "Il sera identique dans les deux", "Dans le second, car ses importations sont plus chères"], c: 0,
      e: "Plus une économie est ouverte, plus les fuites vers l’étranger sont importantes." },
    ouverte: {
      q: "En cas de forte récession, la Suisse devrait-elle lancer un grand plan de relance budgétaire, malgré son multiplicateur faible ?",
      r: "Le faible multiplicateur suisse, dû à l’ouverture de l’économie, réduit l’efficacité d’une relance par la dépense : une partie importante soutient l’activité des pays voisins. C’est un argument pour privilégier les stabilisateurs automatiques et le chômage partiel, qui ont fait leurs preuves en 2009 et en 2020, plutôt que des programmes d’investissement lancés dans l’urgence. Mais deux nuances s’imposent. D’abord, certaines dépenses ont un contenu local élevé, comme la construction, les services ou la rénovation énergétique des bâtiments, et donc un multiplicateur plus fort. Ensuite, si toute l’Europe est en récession, une relance coordonnée bénéficie à chacun, car les dépenses des voisins soutiennent aussi les exportations suisses. Le frein à l’endettement laisse d’ailleurs une marge en récession, puisqu’il autorise des déficits conjoncturels."
    },
    lectures: [
      ["Accessible", "Paul Krugman, Sortez-nous de cette crise… maintenant !, 2012, chapitres sur la relance."],
      ["Accessible", "J. M. Keynes et H. Henderson, Can Lloyd George Do It ?, 1929, brochure courte."],
      ["Intermédiaire", "J. M. Keynes, Théorie générale (1936), chapitre 10."],
      ["Intermédiaire", "Valerie Ramey, « Ten Years After the Financial Crisis: What Have We Learned from the Renaissance in Fiscal Research? », Journal of Economic Perspectives, 2019."],
      ["Recherche", "Richard Kahn, « The Relation of Home Investment to Unemployment », Economic Journal, 1931 ; Olivier Blanchard et Daniel Leigh, « Growth Forecast Errors and Fiscal Multipliers », American Economic Review, 2013."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi une dépense publique de 100 millions peut-elle augmenter le revenu du pays de plus de 100 millions ?",
          o: ["Parce que ceux qui la reçoivent en dépensent une partie, qui devient le revenu d’autres, et ainsi de suite", "Parce que l’État rembourse deux fois la somme", "Parce que les prix montent", "Parce que les impôts baissent automatiquement"], c: 0,
          e: "C’est le multiplicateur." },
        { q: "Qu’est-ce qui réduit le multiplicateur ?",
          o: ["Les « fuites » : impôts, épargne et achats de produits étrangers", "La hausse de la consommation", "Les grands travaux", "Le chômage"], c: 0,
          e: "À chaque étape, une partie de l’argent ne circule plus dans le pays." }
      ],
      duree: 5,
      html: `
<h3>Une dépense qui fait des petits</h3>
<p>Quand l’État construit une école pour 100 millions de francs, cet argent devient le salaire des maçons et le chiffre d’affaires des fournisseurs. Ceux-ci en dépensent une partie au restaurant ou dans les magasins, dont les propriétaires dépensent à leur tour, et ainsi de suite. Au total, le revenu du pays augmente de plus que les 100 millions de départ. C’est le <b>multiplicateur</b>, découvert par Richard Kahn en 1931 et popularisé par <a href="#eco-keynes">Keynes</a>.</p>
${vagues}
<h3>Les fuites</h3>
<p>Mais à chaque étape, une partie de l’argent ne circule plus dans le pays : elle part en impôts, en épargne, ou en achats de produits étrangers. Dans un petit pays très ouvert, comme la Suisse, l’Irlande ou la Belgique, une grande partie de la dépense profite aux pays voisins, et le multiplicateur est faible.</p>
<h3>Un débat sans fin</h3>
<p>Combien vaut vraiment le multiplicateur ? Les économistes l’estiment le plus souvent entre 0,5 et 2. Il est plus fort en période de crise, quand beaucoup de gens et de machines sont inoccupés. En 2013, le FMI a reconnu l’avoir sous-estimé pendant l’austérité européenne.</p>
<h3>À retenir</h3>
<p>La dépense de l’un est le revenu de l’autre. La notice complète présente le calcul, les limites et les preuves.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Le chômage anglais de 1929 et l’article de Richard Kahn.",
      raisonnement: "Sept étapes, des vagues de dépense à l’accélérateur de Samuelson.",
      preuves: "Une mesure difficile, plus fort en récession, l’erreur du FMI.",
      cas: "Le plan américain de 2009, la petite économie suisse, les travaux de 1929.",
      objections: "Éviction, équivalence ricardienne, qualité de la dépense, dette.",
      ecoles: "Kahn, Keynes, Samuelson, Friedman, Barro, Krugman et Blanchard.",
      source: "Keynes, 1936 : les bouteilles de billets enterrées.",
      quiz: "Six questions corrigées, dont un calcul, et une question sur une relance suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     30. STAGFLATION
     ===================================================================== */
  const offre = fig(310, (() => {
    const L = 90, R = 560, Top = 50, B = 260, X = (q) => L + q * (R - L) / 10, Y = (p) => B - p * 20;
    let s = `<text x="20" y="24" ${T}>Un choc d’offre : la production baisse et les prix montent en même temps</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>prix</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>production</text>`;
    s += `<line x1="${X(1)}" y1="${Y(9)}" x2="${X(9.5)}" y2="${Y(1)}" style="stroke:var(--serial); stroke-width:2.4"/>`;
    s += `<text x="${X(9.5)}" y="${Y(1) - 8}" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">demande</text>`;
    s += `<line x1="${X(1.5)}" y1="${Y(1.5)}" x2="${X(9.5)}" y2="${Y(8.5)}" style="stroke:var(--note); stroke-width:2.4; opacity:.4"/>`;
    s += `<line x1="${X(0.2)}" y1="${Y(2.8)}" x2="${X(7.2)}" y2="${Y(9.6)}" style="stroke:var(--note); stroke-width:2.6"/>`;
    s += `<text x="${X(9.5)}" y="${Y(8.5) + 18}" text-anchor="end" style="fill:var(--note); font:600 11.5px Manrope, sans-serif; opacity:.7">offre avant</text>`;
    s += `<text x="${X(7.2) + 6}" y="${Y(9.6) + 4}" style="fill:var(--note); font:700 12px Manrope, sans-serif">offre après le choc</text>`;
    const a = [5.37, 4.89], b = [3.84, 6.33];
    s += `<circle cx="${X(a[0])}" cy="${Y(a[1])}" r="5" style="fill:var(--ink-soft)"/><circle cx="${X(b[0])}" cy="${Y(b[1])}" r="6" style="fill:var(--gold)"/>`;
    s += `<line x1="${X(a[0])}" y1="${Y(a[1])}" x2="${X(a[0])}" y2="${B}" style="stroke:var(--ink-soft); stroke-dasharray:3 3"/><line x1="${X(b[0])}" y1="${Y(b[1])}" x2="${X(b[0])}" y2="${B}" style="stroke:var(--gold); stroke-dasharray:3 3"/>`;
    s += `<line x1="${L}" y1="${Y(a[1])}" x2="${X(a[0])}" y2="${Y(a[1])}" style="stroke:var(--ink-soft); stroke-dasharray:3 3"/><line x1="${L}" y1="${Y(b[1])}" x2="${X(b[0])}" y2="${Y(b[1])}" style="stroke:var(--gold); stroke-dasharray:3 3"/>`;
    s += `<text x="${X(b[0]) - 8}" y="${B - 8}" text-anchor="end" style="fill:var(--gold); font:600 11px Manrope, sans-serif">moins de production</text>`;
    s += `<text x="${L + 6}" y="${Y(b[1]) - 6}" style="fill:var(--gold); font:600 11px Manrope, sans-serif">prix plus élevés</text>`;
    s += `<text x="20" y="300" ${S}>Le pétrole renchérit : produire coûte plus cher à tous les niveaux de prix, l’offre recule.</text>`;
    return s;
  })(), "Schéma offre et demande globales. Une hausse de la demande fait monter à la fois la production et les prix ; un choc d’offre défavorable, comme le quadruplement du prix du pétrole en 1973-1974, les fait varier en sens contraire. C’est la stagflation : stagnation et inflation ensemble.", "Déplacement de la courbe d’offre globale vers la gauche");

  const misere = fig(270, (() => {
    const L = 90, B = 210, w = 64, sc = 6.5;
    const data = [["1965", 1.6, 4.5], ["1970", 5.7, 4.9], ["1975", 9.1, 8.5], ["1980", 13.5, 7.1], ["1985", 3.6, 7.2]];
    let s = `<text x="20" y="24" ${T}>« Indice de misère » aux États-Unis : inflation + chômage (en %, ordre de grandeur)</text>`;
    data.forEach(([y, inf, ch], i) => {
      const x = L + i * 100, h1 = inf * sc, h2 = ch * sc;
      s += `<rect x="${x}" y="${B - h2}" width="${w}" height="${h2}" style="fill:var(--note)"/>`;
      s += `<rect x="${x}" y="${B - h2 - h1}" width="${w}" height="${h1}" style="fill:var(--serial)"/>`;
      s += `<text x="${x + w / 2}" y="${B - h1 - h2 - 6}" text-anchor="middle" style="fill:var(--ink); font:700 12px 'JetBrains Mono', monospace">${(inf + ch).toFixed(1).replace(".", ",")}</text>`;
      s += `<text x="${x + w / 2}" y="${B + 18}" text-anchor="middle" ${M}>${y}</text>`;
    });
    s += `<rect x="480" y="40" width="12" height="12" style="fill:var(--serial)"/><text x="498" y="50" ${S}>inflation</text>`;
    s += `<rect x="480" y="60" width="12" height="12" style="fill:var(--note)"/><text x="498" y="70" ${S}>chômage</text>`;
    s += `<text x="20" y="252" ${S}>Moyennes annuelles arrondies (inflation des prix à la consommation, taux de chômage).</text>`;
    return s;
  })(), "L’« indice de misère », popularisé par l’économiste Arthur Okun, additionne inflation et chômage. Dans les années 1960, la courbe de Phillips laissait espérer qu’on pouvait réduire l’un en acceptant un peu plus de l’autre. Dans les années 1970, les deux montent ensemble.", "Barres empilées inflation et chômage pour cinq années");

  OEC.notices["stagflation"] = {
    essentiel: [
      "La stagflation est la combinaison d’une croissance faible ou négative, d’un chômage élevé et d’une forte inflation. Le mot, formé de « stagnation » et d’« inflation », apparaît au milieu des années 1960 au Royaume-Uni.",
      "Elle s’explique surtout par des chocs d’offre, comme les chocs pétroliers de 1973 et 1979, qui renchérissent la production, et par des anticipations d’inflation devenues autonomes, qui entretiennent une spirale des prix et des salaires.",
      "Elle a ébranlé le consensus keynésien d’après-guerre, fondé sur la courbe de Phillips, et ouvert la voie au monétarisme et à l’indépendance des banques centrales. Elle met les politiques face à un dilemme : relancer aggrave l’inflation, freiner aggrave le chômage."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : comment l’inflation et le chômage peuvent-ils monter ensemble ?", html: `
<p>Dans les années 1960, la plupart des économistes pensent que l’inflation et le chômage évoluent en sens inverse. Quand l’économie tourne à plein, les entreprises se disputent les salariés, les salaires montent, les prix suivent ; quand elle ralentit, le chômage augmente mais l’inflation se calme. La <a href="#c-courbe-phillips">courbe de Phillips</a> semble offrir aux gouvernements un menu : un peu plus d’inflation contre un peu moins de chômage.</p>
<p>En novembre 1965, à la Chambre des communes, le porte-parole conservateur Iain Macleod décrit pourtant une situation déroutante : le Royaume-Uni connaît à la fois l’inflation et la stagnation, « une sorte de situation de stagflation ». Le mot fait fortune une décennie plus tard. En 1974-1975, après le premier choc pétrolier, les pays riches subissent leur plus forte récession depuis la guerre, et l’inflation dépasse 10 % dans la plupart d’entre eux. Le menu de Phillips a disparu.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Chocs de demande et chocs d’offre</h4>
<p>Une hausse de la demande, dépenses publiques, crédit facile, exportations, fait monter à la fois la production et les prix. Une baisse de la demande les fait baisser ensemble. C’est le monde de la courbe de Phillips. Mais un choc d’offre défavorable, qui renchérit la production, fait monter les prix tout en réduisant la production. Prix et production évoluent alors en sens contraire.</p>
${offre}
<h4>2. Le choc pétrolier</h4>
<p>En octobre 1973, pendant la guerre du Kippour, les pays arabes de l’OPEP décrètent un embargo et réduisent leur production. En quelques mois, le prix du baril de pétrole est multiplié par quatre. Le pétrole entre dans presque toutes les productions : transports, chauffage, plastiques, engrais. Les coûts des entreprises augmentent partout, les prix suivent, et le pouvoir d’achat des ménages des pays importateurs diminue, ce qui réduit la demande. Le second choc, en 1979, après la révolution iranienne, double encore le prix.</p>
<h4>3. Les anticipations</h4>
<p>Milton <a href="#eco-friedman">Friedman</a> et Edmund Phelps avaient prévenu dès 1967-1968 : la courbe de Phillips ne tient que si les anticipations d’inflation restent stables. Si l’inflation dure, salariés et entreprises s’y attendent et l’intègrent dans leurs contrats. L’inflation continue alors même quand le chômage revient à son <a href="#c-taux-naturel">taux naturel</a>, voire au-dessus. À la fin des années 1960, les politiques de plein emploi avaient déjà laissé s’installer une inflation chronique ; le choc pétrolier frappe des économies où elle était ancrée dans les esprits.</p>
<h4>4. La spirale prix-salaires</h4>
<p>Dans beaucoup de pays, les salaires sont indexés sur les prix, par la loi ou par les conventions collectives, comme l’« échelle mobile » italienne. Quand le pétrole fait monter les prix, les salaires suivent automatiquement, ce qui augmente les coûts des entreprises, qui relèvent leurs prix, et ainsi de suite. Le choc initial, qui aurait pu rester ponctuel, se transforme en inflation durable.</p>
<h4>5. Le dilemme</h4>
<p>Face à la stagflation, la politique économique est prise en tenaille. Relancer la demande pour combattre le chômage alimente l’inflation. Freiner la demande pour combattre l’inflation aggrave le chômage. Beaucoup de gouvernements choisissent d’abord d’« accommoder » le choc par une politique monétaire souple, ce qui limite le chômage à court terme mais laisse l’inflation s’enraciner. D’autres, comme l’Allemagne et la Suisse, choisissent plus tôt la rigueur.</p>
<h4>6. Le tournant de Volcker</h4>
<p>En octobre 1979, Paul Volcker, nouveau président de la Réserve fédérale, change radicalement de politique : il restreint la croissance de la monnaie, quitte à laisser les taux d’intérêt monter à près de 20 %. Les États-Unis connaissent deux récessions, en 1980 et en 1981-1982, et le chômage dépasse 10 %. Mais l’inflation, qui avait atteint 13,5 % en 1980, tombe autour de 3 % en 1983. Le prix a été très lourd, mais la crédibilité de la lutte contre l’inflation est rétablie pour des décennies.</p>
${misere}
<h4>7. Les leçons institutionnelles</h4>
<p>La stagflation a laissé une empreinte durable. Elle a discrédité l’idée qu’on pouvait acheter durablement l’emploi par l’inflation, et favorisé le monétarisme, puis la théorie des <a href="#c-anticipations-rationnelles">anticipations rationnelles</a>. Elle a conduit à confier la politique monétaire à des banques centrales indépendantes, avec un objectif de stabilité des prix. Elle a aussi montré l’importance des politiques d’offre et d’énergie : économies d’énergie, diversification des sources, réformes du marché du travail.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les années 1970 dans les pays riches</h4>
<p>Au Royaume-Uni, l’inflation dépasse 25 % sur un an en 1975, avec un chômage en hausse. Aux États-Unis, l’inflation atteint environ 11 % en 1974 et 13,5 % en 1980, tandis que le chômage approche 9 % en 1975. Les pays qui sortent le plus vite de la stagflation, l’Allemagne et la Suisse, sont ceux dont les banques centrales ont réagi le plus tôt et le plus fermement à l’inflation, et où les syndicats ont modéré leurs revendications salariales.</p>
<h4>La part de l’offre et celle de la monnaie</h4>
<p>La part respective des chocs pétroliers et des erreurs de politique monétaire reste discutée. Robert Barsky et Lutz Kilian (2001) soutiennent que l’inflation des années 1970 doit davantage à une politique monétaire trop laxiste qu’au pétrole, dont la hausse aurait elle-même été favorisée par l’expansion monétaire mondiale. Alan Blinder et d’autres insistent au contraire sur le rôle des chocs d’offre, pétrole et alimentation.</p>
<h4>Le retour de 2021-2023</h4>
<p>Après la pandémie, les ruptures d’approvisionnement, la forte demande soutenue par les plans de relance, puis la guerre en Ukraine et la flambée des prix de l’énergie en Europe font remonter l’inflation à des niveaux inconnus depuis quarante ans : plus de 9 % aux États-Unis en juin 2022, plus de 10 % dans la zone euro en octobre 2022. Le spectre de la stagflation revient. Mais le chômage reste bas, et l’inflation reflue en 2023-2024 après la hausse rapide des taux : l’épisode ressemble moins aux années 1970 que beaucoup le craignaient, en partie parce que les anticipations d’inflation sont restées mieux ancrées.</p>` }
    ],
    cas: [
      { titre: "La Suisse en 1974-1976", html: `
<p>La Suisse est frappée de plein fouet par la stagflation : l’inflation approche 10 % en 1974, et en 1975 le PIB recule de plus de 6 %, l’une des récessions les plus profondes de l’OCDE. Pourtant, le chômage enregistré reste très faible. La raison est particulière : des centaines de milliers d’emplois disparaissent, mais beaucoup de travailleurs étrangers, titulaires de permis saisonniers ou annuels, quittent le pays, et de nombreuses femmes se retirent du marché du travail sans s’inscrire au chômage. La Suisse « exporte » ainsi une partie de son chômage. Sur le plan monétaire, la BNS, libérée du taux de change fixe en janvier 1973, devient l’une des premières banques centrales à annoncer un objectif de croissance de la masse monétaire, pour 1975. L’inflation retombe autour de 1 à 2 % dès 1976-1977.</p>` },
      { titre: "L’échelle mobile italienne", html: `
<p>En 1975, les syndicats et le patronat italiens renforcent la « scala mobile », un mécanisme qui ajuste automatiquement les salaires à l’inflation, tous les trois mois, avec une compensation particulièrement forte pour les bas salaires. Le système protège le pouvoir d’achat, mais il propage chaque hausse des prix aux salaires, puis aux coûts. L’inflation italienne dépasse 20 % en 1980. Le mécanisme est réduit en 1984 par un décret du gouvernement Craxi, confirmé par référendum en 1985, puis supprimé en 1992. L’épisode illustre le rôle de l’indexation dans l’enracinement de la stagflation.</p>` },
      { titre: "Le Royaume-Uni et l’« hiver du mécontentement »", html: `
<p>Après avoir dû solliciter un prêt du FMI en 1976, le gouvernement travailliste britannique tente de contenir l’inflation par une politique des revenus, en limitant les hausses de salaires négociées avec les syndicats. À l’hiver 1978-1979, des grèves massives éclatent dans les services publics et les transports : c’est l’« hiver du mécontentement ». Les ordures s’accumulent dans les rues, certains morts restent sans sépulture. Quelques mois plus tard, Margaret Thatcher remporte les élections avec un programme de lutte contre l’inflation par le contrôle de la monnaie et la réduction du pouvoir syndical.</p>` }
    ],
    objections: `
<h4>1. La stagflation, produit de la politique keynésienne</h4>
<p>Pour Friedman et les monétaristes, la stagflation n’est pas une fatalité venue du pétrole, mais le résultat de vingt ans de politiques de demande trop expansionnistes, qui ont installé des anticipations d’inflation. Le choc pétrolier n’aurait fait que révéler et aggraver ce problème.</p>
<h4>2. Le keynésianisme n’était pas désarmé</h4>
<p>Des keynésiens comme James Tobin ou Robert Solow répondent que le modèle keynésien, complété par les chocs d’offre et les anticipations, explique très bien la stagflation. Le problème n’était pas la théorie, mais la tentative de maintenir le plein emploi à tout prix face à un appauvrissement réel causé par le pétrole.</p>
<h4>3. Le coût de la désinflation</h4>
<p>Les critiques de Volcker et de Thatcher rappellent le coût humain de la désinflation : chômage massif, désindustrialisation, régions sinistrées. Une désinflation plus graduelle, accompagnée d’une politique des revenus négociée, comme en Autriche ou en Suisse, aurait pu être moins coûteuse.</p>
<h4>4. La politique des revenus</h4>
<p>Le contrôle des prix et des salaires, tenté par Richard Nixon en 1971 et par plusieurs pays européens, a souvent échoué : il crée des pénuries et l’inflation repart dès qu’il est levé. Mais les pays où les partenaires sociaux négocient de manière centralisée et responsable, comme la Suisse, l’Autriche ou l’Allemagne, ont mieux traversé la période.</p>`,
    ecoles: `
<p><b>Les keynésiens</b> de la synthèse, comme <a href="#eco-samuelson">Samuelson</a> et Solow, avaient fait de la courbe de Phillips un outil de politique économique.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> et Phelps prévoient son effondrement dès 1968.</p>
<p><b><a href="#eco-lucas">Lucas</a></b> et les nouveaux classiques en tirent la critique des politiques de demande.</p>
<p><b><a href="#eco-galbraith">Galbraith</a></b> et des post-keynésiens défendent le contrôle des prix et des revenus.</p>
<p><b>Les banquiers centraux</b>, de Volcker à la BNS et à la Bundesbank, font de la stabilité des prix leur priorité.</p>`,
    source: {
      titre: "Iain Macleod, discours à la Chambre des communes, 17 novembre 1965",
      texte: "Nous avons maintenant le pire des deux mondes : non pas seulement l’inflation d’un côté ou la stagnation de l’autre, mais les deux ensemble. Nous connaissons une sorte de situation de « stagflation ».",
      notes: `
<p><b>La naissance d’un mot.</b> Macleod, porte-parole conservateur pour les finances, critique la politique du gouvernement travailliste de Harold Wilson. Le néologisme passe d’abord presque inaperçu, avant de devenir d’usage courant dans les années 1970.</p>
<p><b>Avant le pétrole.</b> La phrase est prononcée huit ans avant le premier choc pétrolier. Elle montre que la combinaison d’une croissance faible et d’une inflation persistante était déjà perceptible au Royaume-Uni, dont la productivité progressait lentement et où les conflits salariaux étaient fréquents.</p>
<p><b>« Le pire des deux mondes ».</b> L’expression résume le dilemme qui sera celui des années 1970 : aucune des deux politiques habituelles, la relance et la rigueur, ne résout les deux problèmes à la fois.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que la stagflation ?",
        o: ["Une croissance forte sans inflation", "La combinaison d’une croissance faible, d’un chômage élevé et d’une forte inflation", "Une baisse générale des prix", "Une inflation forte accompagnée d’une croissance rapide"], c: 1,
        e: "Le mot combine stagnation et inflation." },
      { q: "Pourquoi un choc pétrolier peut-il provoquer une stagflation ?",
        o: ["Parce qu’il augmente la demande", "Parce qu’il renchérit la production, ce qui fait monter les prix et baisser la production", "Parce qu’il pousse la banque centrale à baisser ses taux", "Parce qu’il fait baisser les salaires"], c: 1,
        e: "C’est un choc d’offre : prix et production évoluent en sens contraire." },
      { q: "Quel rôle jouent les anticipations dans la stagflation selon Friedman et Phelps ?",
        o: ["Aucun", "Quand l’inflation est anticipée, elle persiste même si le chômage augmente", "Elles font baisser les prix", "Elles font disparaître le chômage naturel"], c: 1,
        e: "L’inflation anticipée est intégrée dans les contrats et continue indépendamment du chômage." },
      { q: "Avec une inflation de 13,5 % et un chômage de 7,1 %, quel est l’indice de misère ?",
        o: ["6,4", "13,5", "20,6", "95,9"], c: 2,
        e: "L’indice de misère additionne les deux taux : 13,5 + 7,1 = 20,6." },
      { q: "Pourquoi le chômage enregistré est-il resté faible en Suisse malgré la récession de 1975 ?",
        o: ["Parce que l’économie n’a pas reculé", "Parce que beaucoup de travailleurs étrangers ont quitté le pays et que de nombreuses femmes se sont retirées du marché du travail", "Parce que l’industrie horlogère a continué à embaucher", "Parce que la Suisse a fermé ses frontières aux importations"], c: 1,
        e: "La Suisse a « exporté » une partie de son chômage, un phénomène lié au statut des permis de travail de l’époque." }
    ],
    transfert: { q: "En 2022, la guerre en Ukraine fait flamber le prix du gaz en Europe. Pourquoi ce choc fait-il craindre une stagflation ?",
      o: ["Parce que l’énergie plus chère fait monter les prix tout en freinant la production", "Parce que le gaz plus cher fait baisser les prix", "Parce qu’il augmente la demande des ménages", "Parce qu’il fait disparaître le chômage"], c: 0,
      e: "Comme en 1973, un choc sur le coût de l’énergie pousse les prix à la hausse et la production à la baisse." },
    ouverte: {
      q: "La Suisse a mieux traversé l’inflation de 2022 que la plupart des pays européens. Est-ce le fruit de sa politique monétaire, de la force du franc ou de son mix énergétique ?",
      r: "Les trois facteurs ont joué. L’inflation suisse a culminé autour de 3,5 % en 2022, contre plus de 10 % dans la zone euro. La force du franc a réduit le prix des importations, notamment de l’énergie, et la BNS a laissé le franc s’apprécier tout en relevant ses taux dès juin 2022, avant la BCE. La structure énergétique suisse, avec beaucoup d’hydroélectricité et de nucléaire et une part limitée du gaz, a amorti le choc. Les prix réglementés de l’électricité, fixés une fois par an, ont retardé la répercussion des hausses. Enfin, la crédibilité de la BNS, construite depuis les années 1970, a contribué à garder les anticipations d’inflation basses. La leçon de la stagflation des années 1970 reste valable : la crédibilité de la politique monétaire et la diversification énergétique réduisent fortement le coût d’un choc d’offre."
    },
    lectures: [
      ["Accessible", "Alan Blinder, A Monetary and Fiscal History of the United States, 1961-2021, 2022, chapitres sur les années 1970."],
      ["Accessible", "Daniel Yergin, Les Hommes du pétrole, 1991, chapitres sur 1973 et 1979."],
      ["Intermédiaire", "Milton Friedman, « The Role of Monetary Policy », American Economic Review, 1968."],
      ["Intermédiaire", "Michael Bruno et Jeffrey Sachs, Economics of Worldwide Stagflation, 1985."],
      ["Recherche", "Robert Barsky et Lutz Kilian, « Do We Really Know that Oil Caused the Great Stagflation? », NBER Macroeconomics Annual, 2001 ; Edmund Phelps, « Phillips Curves, Expectations of Inflation and Optimal Unemployment over Time », Economica, 1967."]
    ],
    decouvrir: {
      questions: [
        { q: "Que désigne le mot « stagflation » ?",
          o: ["La combinaison d’une économie qui stagne et d’une forte inflation", "Une croissance très forte", "Une baisse générale des prix", "Une hausse des exportations"], c: 0,
          e: "Contraction de stagnation et inflation, le mot date de 1965." },
        { q: "Pourquoi sortir de la stagflation est-il si difficile ?",
          o: ["Parce que relancer l’économie aggrave l’inflation et la freiner aggrave le chômage", "Parce que les prix du pétrole sont fixés par l’État", "Parce que les banques centrales n’existent pas", "Parce que les salaires baissent trop vite"], c: 0,
          e: "Les États-Unis ont choisi après 1979 de freiner fortement, au prix d’un chômage élevé." }
      ],
      duree: 5,
      html: `
<h3>Le pire des deux mondes</h3>
<p>Dans les années 1960, on pensait que l’inflation et le chômage évoluaient en sens inverse : quand l’un monte, l’autre baisse. Dans les années 1970, les deux montent ensemble, et la croissance s’arrête. Un mot inventé en 1965 décrit cette situation : la <b>stagflation</b>, contraction de stagnation et inflation.</p>
<h3>Le choc pétrolier</h3>
<p>En 1973, le prix du pétrole est multiplié par quatre en quelques mois. Tout coûte plus cher à produire et à transporter : les prix montent, mais les entreprises produisent moins et licencient. Comme beaucoup de salaires suivent automatiquement les prix, l’inflation s’emballe.</p>
${offre}
<h3>Comment en sortir ?</h3>
<p>Relancer l’économie aggrave l’inflation ; la freiner aggrave le chômage. Les États-Unis choisissent à partir de 1979 une politique très dure, avec des taux d’intérêt proches de 20 % : l’inflation tombe, mais au prix d’un chômage supérieur à 10 %. La Suisse et l’Allemagne, qui avaient agi plus tôt, s’en sortent plus vite.</p>
<h3>À retenir</h3>
<p>La stagflation a changé la politique économique : depuis, les banques centrales sont indépendantes et chargées de garder l’inflation basse. La notice complète présente le mécanisme, l’histoire et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "La courbe de Phillips et le mot de Macleod en 1965.",
      raisonnement: "Sept étapes, des chocs d’offre au tournant de Volcker.",
      preuves: "Les années 1970, offre ou monnaie, le retour de 2021-2023.",
      cas: "La Suisse en 1974-1976, l’échelle mobile italienne, l’hiver du mécontentement.",
      objections: "Le procès du keynésianisme, sa défense, le coût de la désinflation, la politique des revenus.",
      ecoles: "Synthèse keynésienne, Friedman et Phelps, Lucas, Galbraith, banquiers centraux.",
      source: "Macleod, 1965 : le pire des deux mondes.",
      quiz: "Six questions corrigées, dont un calcul, et une question sur l’inflation suisse de 2022.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
