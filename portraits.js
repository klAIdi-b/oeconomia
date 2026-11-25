/* Œconomia — portraits longs des économistes (format leçon, deux niveaux de lecture) */
OEC.portraits = OEC.portraits || {};
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };
  /* Frise de vie : events = [[année, libellé, au-dessus ?]] */
  /* Chaque étiquette prend la première rangée libre de son côté (trois rangées au-dessus, trois en dessous). */
  const lifeline = (a, b, events, title, caption, fmt = (t) => t) => fig(300, (() => {
    const L = 40, R = 600, y = 150, X = (t) => L + (t - a) * (R - L) / (b - a);
    const rows = { true: [[], [], []], false: [[], [], []] };
    let s = `<text x="20" y="24" ${T}>${title}</text>`;
    s += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" style="stroke:var(--ink-soft); stroke-width:2"/>`;
    events.forEach(([t, lab, up]) => {
      const x = X(t), w = Math.max(lab.length * 6.1, 30) + 10;
      const anchor = x - w / 2 < 8 ? "start" : x + w / 2 > 632 ? "end" : "middle";
      const x0 = anchor === "start" ? x - 4 : anchor === "end" ? x - w + 4 : x - w / 2, x1 = x0 + w;
      const side = rows[up]; let lv = side.findIndex((r) => r.every(([p, q]) => x1 < p || x0 > q)); if (lv < 0) lv = 2;
      side[lv].push([x0, x1]);
      const yy = up ? y - 30 - lv * 34 : y + 36 + lv * 34;
      const tx = anchor === "start" ? x - 4 : anchor === "end" ? x + 4 : x;
      s += `<circle cx="${x}" cy="${y}" r="5" style="fill:var(--plum)"/><line x1="${x}" y1="${y}" x2="${x}" y2="${up ? yy + 4 : yy - 14}" style="stroke:var(--line)"/>`;
      s += `<text x="${tx}" y="${up ? yy - 14 : yy}" text-anchor="${anchor}" style="fill:var(--ink); font:700 11px 'JetBrains Mono', monospace">${fmt(t)}</text>`;
      s += `<text x="${tx}" y="${up ? yy : yy + 14}" text-anchor="${anchor}" ${S}>${lab}</text>`;
    });
    return s;
  })(), caption, title);
  /* Outils partagés avec les fichiers portraits-*.js */
  OEC.pfx = { T, S, M, fig, arrow, lifeline };

  /* =====================================================================
     KEYNES
     ===================================================================== */
  const vieKeynes = lifeline(1883, 1946, [
    [1883, "naissance à Cambridge", true], [1906, "India Office", false], [1919, "quitte Versailles", true], [1925, "épouse Lydia Lopokova", false],
    [1930, "Traité sur la monnaie", true], [1936, "Théorie générale", false], [1940, "Comment payer la guerre", true], [1944, "Bretton Woods", false]
  ], "John Maynard Keynes, 1883-1946", "Une vie partagée entre Cambridge, le Trésor britannique, les milieux artistiques de Bloomsbury et les grandes négociations internationales. Keynes meurt d’une crise cardiaque en avril 1946, épuisé par les négociations du prêt américain au Royaume-Uni.");

  const chaine = fig(300, (() => {
    const box = (x, y, w, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="54" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + 23}" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + 41}" text-anchor="middle" ${S}>${sub}</text>`;
    let s = `<text x="20" y="24" ${T}>La chaîne de la Théorie générale (schéma)</text>`;
    s += box(20, 44, 180, "Incertitude", "l’avenir est inconnaissable", "var(--plum)");
    s += box(230, 44, 180, "Préférence pour la liquidité", "on garde de la monnaie", "var(--plum)");
    s += box(440, 44, 180, "Taux d’intérêt", "fixé sur le marché de la monnaie", "var(--gold)");
    s += box(440, 140, 180, "Investissement", "taux contre profits espérés", "var(--note)");
    s += box(230, 140, 180, "Multiplicateur", "la dépense se propage", "var(--note)");
    s += box(20, 140, 180, "Production et emploi", "fixés par la demande effective", "var(--serial)");
    s += arrow(202, 71, 228, 71) + arrow(412, 71, 438, 71) + arrow(530, 100, 530, 138) + arrow(438, 167, 412, 167) + arrow(228, 167, 202, 167);
    s += `<text x="530" y="222" text-anchor="middle" ${S}>« esprits animaux » :</text><text x="530" y="238" text-anchor="middle" ${S}>la confiance des entrepreneurs</text>`;
    s += arrow(530, 210, 530, 196, "var(--note)");
    s += `<text x="110" y="222" text-anchor="middle" ${S}>Rien ne garantit</text><text x="110" y="238" text-anchor="middle" ${S}>le plein emploi</text>`;
    s += `<text x="20" y="282" ${S}>Baisser les salaires ne suffit pas : cela réduit aussi les revenus et donc la demande.</text>`;
    return s;
  })(), "Le raisonnement central de 1936, simplifié. L’investissement, instable parce qu’il dépend d’anticipations incertaines, détermine avec la consommation le niveau de la production. L’économie peut se stabiliser durablement avec du chômage involontaire, sans force automatique pour l’en sortir.", "Six cases reliées décrivant la chaîne keynésienne");

  const chomageUK = fig(260, (() => {
    const L = 80, B = 200, w = 70, sc = 6.5;
    const data = [["1913", 2], ["1921", 17], ["1925", 11], ["1929", 10], ["1932", 22], ["1937", 11]];
    let s = `<text x="20" y="24" ${T}>Chômage des salariés assurés au Royaume-Uni (en %, ordre de grandeur)</text>`;
    data.forEach(([y, v], i) => {
      const x = L + i * 88, h = v * sc;
      s += `<rect x="${x}" y="${B - h}" width="${w}" height="${h}" rx="4" style="fill:${v >= 15 ? "var(--serial)" : "var(--note)"}"/>`;
      s += `<text x="${x + w / 2}" y="${B - h - 6}" text-anchor="middle" style="fill:var(--ink); font:700 12px 'JetBrains Mono', monospace">${v}</text>`;
      s += `<text x="${x + w / 2}" y="${B + 18}" text-anchor="middle" ${M}>${y}</text>`;
    });
    s += `<text x="20" y="246" ${S}>Le chômage ne redescend jamais sous 10 % entre les deux guerres : c’est le problème que Keynes veut expliquer.</text>`;
    return s;
  })(), "Taux de chômage parmi les salariés couverts par l’assurance chômage britannique, arrondis. Le retour à l’étalon-or à l’ancienne parité en 1925, que Keynes combat, maintient la livre trop chère et pèse sur les industries exportatrices.", "Barres du chômage britannique de 1913 à 1937");

  OEC.portraits["keynes"] = {
    portrait: true,
    labels: { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" },
    essentiel: [
      "John Maynard Keynes (1883-1946) a fondé la macroéconomie moderne. Sa Théorie générale (1936) montre qu’une économie de marché peut rester durablement en sous-emploi, parce que la demande globale peut être insuffisante, et qu’aucun mécanisme automatique ne garantit le retour au plein emploi.",
      "Il n’était pas seulement un théoricien : haut fonctionnaire du Trésor, négociateur à Versailles et à Bretton Woods, investisseur, mécène des arts, polémiste brillant. Sa pensée s’est construite dans l’action et contre l’orthodoxie de son temps.",
      "Ses idées ont inspiré les politiques de plein emploi de l’après-guerre, ont été vivement contestées dans les années 1970, puis sont revenues au premier plan avec la crise de 2008 et la pandémie."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>John Maynard Keynes naît à Cambridge le 5 juin 1883, dans une famille de la bourgeoisie intellectuelle. Son père, John Neville Keynes, est économiste et administrateur de l’université ; sa mère, Florence Ada, sera maire de Cambridge. Boursier à Eton, il étudie les mathématiques au King’s College de Cambridge, où il suit aussi les cours d’Alfred <a href="#eco-marshall">Marshall</a>, qui le pousse vers l’économie. Il fréquente les Apôtres, une société de discussion d’étudiants brillants, et se lie avec les écrivains et artistes qui formeront le groupe de Bloomsbury : Virginia Woolf, Lytton Strachey, le peintre Duncan Grant.</p>
<p>Après deux ans à l’India Office, il revient à Cambridge en 1908 et publie en 1913 un livre sur la monnaie indienne. Pendant la Première Guerre mondiale, il entre au Trésor, où il gère le financement de la guerre et les dettes entre alliés. En 1919, il fait partie de la délégation britannique à la conférence de paix de Paris. Convaincu que les réparations exigées de l’Allemagne sont impossibles à payer et ruineront l’Europe, il démissionne et publie quelques mois plus tard Les Conséquences économiques de la paix, qui fait de lui une célébrité mondiale.</p>
${vieKeynes}
<p>Dans les années 1920, il enseigne à Cambridge, dirige les finances du King’s College, spécule en bourse et sur les devises, écrit dans la presse, conseille les gouvernements. En 1925, il épouse la danseuse russe Lydia Lopokova, étoile des Ballets russes. Il combat le retour de la livre à l’étalon-or, puis cherche, à travers le Traité sur la monnaie (1930) et surtout la Théorie générale (1936), à comprendre pourquoi le chômage ne disparaît pas. Victime d’une grave crise cardiaque en 1937, il retourne pourtant au Trésor pendant la Seconde Guerre mondiale, devient lord Keynes en 1942, conduit la délégation britannique à Bretton Woods en 1944, puis négocie un prêt américain vital pour le Royaume-Uni. Il meurt le 21 avril 1946, à 62 ans.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Keynes appartient à une génération qui voit s’effondrer le monde stable d’avant 1914 : libre-échange, étalon-or, prospérité britannique. Après la guerre, le Royaume-Uni connaît un chômage persistant, qui reste, de 1921 à 1939, autour de 10 % des salariés assurés ou au-dessus, alors que la théorie économique de l’époque considère qu’un chômage durable est impossible dans une économie de marché : les salaires devraient baisser jusqu’à ce que tout le monde trouve un emploi.</p>
${chomageUK}
<p>En 1925, le chancelier de l’Échiquier Winston Churchill rétablit la convertibilité de la livre en or à sa parité d’avant-guerre. Keynes y voit une erreur grave, qui rend les exportations britanniques trop chères et oblige à baisser les salaires, au prix de conflits sociaux : il le dit dans un pamphlet, Les Conséquences économiques de M. Churchill. La grève générale de 1926 lui donne raison sur le plan social. Puis vient la Grande Dépression, à partir de 1929, qui touche le monde entier.</p>
<p>Face à la crise, l’orthodoxie, celle du Trésor britannique, recommande l’équilibre budgétaire et la patience : les dépenses publiques ne feraient que détourner des capitaux du secteur privé. Keynes s’y oppose dès 1929 en soutenant le programme de travaux publics de Lloyd George. Mais il sent qu’il lui manque une théorie pour convaincre. La Théorie générale sera, selon ses propres mots, une longue lutte pour échapper aux modes de pensée habituels.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. De la monnaie à l’emploi</h4>
<p>Le jeune Keynes est un économiste monétaire dans la tradition de Marshall. Dans La Réforme monétaire (1923), il défend la stabilité des prix intérieurs plutôt que celle du change, et lance la formule célèbre : « À long terme, nous serons tous morts », pour reprocher aux économistes de se contenter de dire qu’après la tempête, la mer redeviendra calme. Le Traité sur la monnaie (1930) étudie les déséquilibres entre épargne et investissement. La Théorie générale franchit un pas décisif : elle cherche ce qui détermine le niveau de la production et de l’emploi dans son ensemble.</p>
<h4>2. La demande effective</h4>
<p>Les entreprises produisent ce qu’elles pensent pouvoir vendre. La production totale dépend donc de la dépense attendue des ménages et des entreprises. Or les ménages ne dépensent pas tout leur revenu supplémentaire, et rien ne garantit que l’investissement viendra combler la différence. L’économie peut se stabiliser à un niveau de production où une partie des travailleurs reste sans emploi, sans le vouloir (<a href="#c-demande-effective">voir demande effective</a>). La <a href="#c-loi-debouches">loi des débouchés</a> de Say, selon laquelle l’offre crée sa propre demande, est rejetée.</p>
<h4>3. L’incertitude et les esprits animaux</h4>
<p>L’investissement dépend de profits futurs que personne ne peut calculer. Keynes distingue le risque mesurable de l’incertitude radicale. Face à l’inconnu, les entrepreneurs suivent des conventions et leurs « esprits animaux », un besoin spontané d’agir plutôt que de rester inactif. Quand la confiance s’effondre, l’investissement chute, quelle que soit la logique des calculs.</p>
<h4>4. La monnaie et le taux d’intérêt</h4>
<p>Le taux d’intérêt n’est pas, comme le pensaient les classiques, le prix qui égalise l’épargne et l’investissement. Il récompense le fait de renoncer à la liquidité. Quand l’avenir est inquiétant, chacun veut garder de la monnaie, et le taux d’intérêt peut rester trop élevé pour que l’investissement assure le plein emploi (<a href="#c-preference-liquidite">voir préférence pour la liquidité</a>). Dans les cas extrêmes, même une monnaie abondante ne fait plus baisser les taux (<a href="#c-trappe-liquidite">voir trappe à liquidité</a>).</p>
${chaine}
<h4>5. Le multiplicateur</h4>
<p>Reprenant l’idée de son élève Richard Kahn, Keynes montre qu’une variation de l’investissement entraîne une variation plus forte du revenu, car chaque dépense devient le revenu de quelqu’un qui en dépense à son tour une partie (<a href="#c-multiplicateur">voir multiplicateur</a>). Ce mécanisme amplifie les récessions, mais il rend aussi efficace la dépense publique en période de chômage.</p>
<h4>6. Pourquoi baisser les salaires ne suffit pas</h4>
<p>Pour les classiques, le chômage vient de salaires trop élevés. Keynes répond qu’une baisse générale des salaires réduit aussi les revenus des ménages et donc la demande. Elle peut faire baisser les prix sans augmenter l’emploi, et alourdir le poids réel des dettes. Les salariés ne peuvent pas, en négociant leurs salaires en monnaie, fixer leur salaire réel.</p>
<h4>7. Les conséquences politiques</h4>
<p>Keynes en tire que l’État doit veiller au niveau de l’investissement et de la demande : par des taux d’intérêt bas, par des travaux publics en période de crise, et, à plus long terme, par une certaine « socialisation de l’investissement ». Il ne s’agit pas de supprimer le marché, qu’il juge efficace pour répartir les ressources, mais de lui donner le cadre qui assure le plein emploi. Keynes se veut un libéral réformateur, qui sauve le capitalisme de ses propres défauts.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Les Conséquences économiques de la paix (1919).</b> Un pamphlet brillant contre le traité de Versailles, avec des portraits cruels de Clemenceau, Wilson et Lloyd George. Keynes y prédit que des réparations excessives ruineront l’Allemagne et déstabiliseront l’Europe. Traduit en une douzaine de langues, c’est l’un des livres d’économie les plus influents du siècle.</p>
<p><b>Traité sur la probabilité (1921).</b> Un ouvrage de philosophie et de logique, issu de sa thèse, qui défend une conception de la probabilité comme degré de croyance rationnelle. Il éclaire sa réflexion ultérieure sur l’incertitude.</p>
<p><b>La Réforme monétaire (1923).</b> Un plaidoyer pour une politique monétaire qui stabilise les prix intérieurs plutôt que le change, et contre le retour à l’étalon-or.</p>
<p><b>Essais de persuasion (1931).</b> Un recueil de ses articles, dont « Perspectives économiques pour nos petits-enfants » (1930), où il imagine un monde où le problème économique serait résolu, et « La fin du laissez-faire » (1926).</p>
<p><b>Théorie générale de l’emploi, de l’intérêt et de la monnaie (1936).</b> Son chef-d’œuvre, difficile et parfois touffu, qui fonde la macroéconomie. Les chapitres 1 à 3, 12 sur les anticipations et 24 sur la philosophie sociale sont les plus accessibles.</p>
<p><b>Comment payer la guerre (1940).</b> Une application de sa théorie à l’économie de guerre, avec une proposition d’épargne forcée pour éviter l’inflation, et l’une des premières utilisations des comptes nationaux.</p>` }
    ],
    cas: [
      { titre: "Versailles, 1919 : la démission", html: `
<p>Keynes participe aux négociations de paix comme principal représentant du Trésor britannique. Il propose un plan de reconstruction européenne et l’annulation des dettes entre alliés, que les États-Unis refusent. Les réparations exigées de l’Allemagne lui paraissent à la fois injustes et impossibles à payer. Il démissionne en juin 1919, épuisé et écœuré, et écrit en deux mois Les Conséquences économiques de la paix. L’historien Étienne Mantoux lui reprochera en 1946 d’avoir encouragé, par ce livre, la complaisance britannique envers l’Allemagne nazie. Le débat sur le poids réel des réparations reste ouvert chez les historiens.</p>` },
      { titre: "Bretton Woods, 1944 : le bancor", html: `
<p>Pour l’après-guerre, Keynes conçoit une « union internationale de compensation », dotée d’une monnaie internationale, le bancor. Les pays en excédent commercial comme les pays en déficit auraient été incités à rééquilibrer leurs échanges, pour éviter que les seuls débiteurs supportent l’ajustement. Le plan américain, porté par Harry Dexter White, l’emporte : le système de Bretton Woods repose sur le dollar et crée le Fonds monétaire international et la Banque mondiale. L’idée de Keynes d’une responsabilité partagée des pays excédentaires revient régulièrement, par exemple dans le débat sur les excédents allemands.</p>` },
      { titre: "Keynes investisseur", html: `
<p>Keynes gère pendant plus de vingt ans les placements du King’s College, ainsi que sa propre fortune. Il commence par spéculer sur les devises et les matières premières, frôle la ruine en 1920, puis se tourne vers les actions, en concentrant ses placements sur quelques entreprises qu’il connaît bien. David Chambers et Elroy Dimson (2013) montrent qu’il fut un pionnier de l’investissement en actions pour les institutions, et que ses résultats ont nettement dépassé ceux du marché britannique sur l’ensemble de sa gestion, malgré de lourdes pertes en 1929 et 1937. Son expérience nourrit le célèbre chapitre 12 de la Théorie générale, où il compare la bourse à un concours de beauté.</p>` },
      { titre: "Les petits-enfants de 1930", html: `
<p>En pleine dépression, Keynes publie un court essai optimiste, « Perspectives économiques pour nos petits-enfants ». Il prédit que dans cent ans, le niveau de vie des pays avancés sera quatre à huit fois plus élevé, et que le problème économique de la rareté pourrait être résolu, laissant à l’humanité la question de savoir comment bien vivre. Il imagine une semaine de quinze heures. Sa prévision de croissance s’est révélée assez juste ; celle sur le temps de travail beaucoup moins, ce que de nombreux économistes ont cherché à expliquer.</p>` }
    ],
    objections: `
<h4>1. Hayek et l’école autrichienne</h4>
<p>Dès 1931, Friedrich <a href="#eco-hayek">Hayek</a> engage avec Keynes une controverse célèbre. Pour lui, les crises viennent d’un crédit trop abondant qui fausse la structure de la production, et la relance par la dépense ne fait que prolonger les déséquilibres. Keynes juge la théorie de Hayek confuse ; Hayek regrettera de ne pas avoir répondu en détail à la Théorie générale (<a href="#controverses">voir le débat Keynes-Hayek</a>).</p>
<h4>2. Friedman et le monétarisme</h4>
<p>Milton <a href="#eco-friedman">Friedman</a> soutient que la Grande Dépression s’explique par les erreurs de la Réserve fédérale plutôt que par une instabilité du capitalisme, que la politique budgétaire a peu d’effet durable, et que la tentative de maintenir un chômage bas par la demande conduit à l’inflation. La stagflation des années 1970 semble lui donner raison (<a href="#c-stagflation">voir stagflation</a>).</p>
<h4>3. Lucas et les anticipations rationnelles</h4>
<p>Robert <a href="#eco-lucas">Lucas</a> reproche aux modèles keynésiens de ne pas reposer sur les choix des individus et d’ignorer les anticipations. En 1980, il déclare que l’on ne trouve plus de bons économistes de moins de quarante ans se disant keynésiens. La crise de 2008 a sérieusement ébranlé cette prédiction.</p>
<h4>4. Les keynésiens contre la synthèse</h4>
<p>À l’inverse, Joan <a href="#eco-robinson">Robinson</a> et les post-keynésiens accusent la synthèse d’après-guerre d’avoir trahi Keynes en réduisant sa pensée à un modèle mécanique, où le chômage ne vient que de salaires rigides et où l’incertitude disparaît. Robinson parle de « keynésiens bâtards ».</p>`,
    ecoles: `
<p><b>John Hicks</b> traduit en 1937 la Théorie générale en un modèle simple, IS-LM, qui deviendra l’outil d’enseignement standard.</p>
<p><b><a href="#eco-samuelson">Paul Samuelson</a></b> et la synthèse néoclassique combinent Keynes à court terme et l’équilibre classique à long terme.</p>
<p><b>Richard Kahn</b>, <b><a href="#eco-robinson">Joan Robinson</a></b>, <b>Nicholas Kaldor</b> et les post-keynésiens insistent sur l’incertitude et la répartition.</p>
<p><b><a href="#eco-minsky">Hyman Minsky</a></b> développe l’instabilité financière à partir de Keynes.</p>
<p><b>Les néokeynésiens</b>, comme Gregory Mankiw et Olivier Blanchard, fondent les rigidités sur des comportements individuels.</p>
<p><b><a href="#eco-krugman">Paul Krugman</a></b> et <a href="#eco-summers">Lawrence Summers</a> remettent Keynes au premier plan après 2008, avec la trappe à liquidité et la stagnation séculaire.</p>`,
    source: {
      titre: "J. M. Keynes, Théorie générale de l’emploi, de l’intérêt et de la monnaie, 1936, chapitre 24",
      texte: "Les idées des économistes et des philosophes politiques, qu’elles soient justes ou fausses, sont plus puissantes qu’on ne le pense généralement. À vrai dire, le monde n’est guère mené par autre chose. Les hommes d’action qui se croient affranchis de toute influence intellectuelle sont d’ordinaire les esclaves de quelque économiste défunt.",
      notes: `
<p><b>La fin du livre.</b> Ce passage conclut la Théorie générale. Après des centaines de pages techniques, Keynes affirme la puissance des idées, plus grande à ses yeux que celle des intérêts. C’est aussi un pari : il compte que ses idées finiront par s’imposer.</p>
<p><b>La suite.</b> Keynes ajoute que les idées agissent avec retard : peu de gens sont influencés par les théories nouvelles après vingt-cinq ou trente ans, si bien que les idées appliquées par les fonctionnaires et les hommes politiques sont rarement les plus récentes.</p>
<p><b>Une ironie.</b> La formule s’est appliquée à Keynes lui-même : pendant des décennies, des responsables ont appliqué des versions simplifiées de sa pensée, puis des critiques de celle-ci, sans toujours en connaître les sources.</p>`
    },
    quiz: [
      { q: "Quel livre fait de Keynes une célébrité mondiale en 1919 ?",
        o: ["La Théorie générale", "Les Conséquences économiques de la paix", "Le Traité sur la monnaie", "Comment payer la guerre"], c: 1,
        e: "Il y critique les réparations imposées à l’Allemagne au traité de Versailles." },
      { q: "Pourquoi, selon Keynes, une économie peut-elle rester durablement en sous-emploi ?",
        o: ["Parce que les salaires sont trop bas", "Parce que la demande effective peut être insuffisante, sans mécanisme automatique pour la rétablir", "Parce que l’État dépense trop", "Parce que la population augmente"], c: 1,
        e: "Rien ne garantit que l’investissement comble l’écart entre revenu et consommation." },
      { q: "Que désignent les « esprits animaux » ?",
        o: ["Les spéculateurs malhonnêtes", "Le besoin spontané d’agir des entrepreneurs face à un avenir incertain", "Les grèves ouvrières", "Les anticipations rationnelles des investisseurs"], c: 1,
        e: "L’investissement dépend de la confiance autant que du calcul." },
      { q: "Que proposait Keynes à Bretton Woods en 1944 ?",
        o: ["Le retour à l’étalon-or", "Une union de compensation avec une monnaie internationale, le bancor", "Des taux de change entièrement flottants", "Un système fondé sur le dollar"], c: 1,
        e: "Le plan américain de Harry Dexter White, fondé sur le dollar, l’a emporté." },
      { q: "Pourquoi Keynes juge-t-il qu’une baisse générale des salaires ne résout pas le chômage ?",
        o: ["Parce qu’elle fait monter les taux d’intérêt", "Parce qu’elle réduit aussi les revenus et donc la demande", "Parce qu’elle augmente les prix", "Parce que les syndicats l’empêchent"], c: 1,
        e: "Elle peut faire baisser les prix sans augmenter l’emploi, et alourdir les dettes." }
    ],
    ouverte: {
      q: "Le frein à l’endettement suisse est-il compatible avec la pensée de Keynes ?",
      r: "En partie, plus qu’on ne le croit. Keynes n’était pas partisan de déficits permanents : dans ses notes de 1943-1945 sur le plein emploi, il propose de séparer un budget ordinaire, qui devrait être équilibré, et un budget d’investissement, qui pourrait varier pour stabiliser l’économie. Le frein à l’endettement, qui autorise des déficits en récession à condition de les compenser en période de croissance, reprend l’idée de stabilisation sur le cycle. Mais il ne distingue pas les dépenses d’investissement, ce que Keynes aurait probablement critiqué, et ses règles laissent une marge de relance limitée en cas de crise profonde. Les propositions de « règle d’or », qui exclurait certains investissements du frein, se rapprochent de la conception keynésienne. Enfin, dans une petite économie très ouverte comme la Suisse, Keynes lui-même aurait reconnu que l’effet d’une relance nationale est réduit par les importations."
    },
    lectures: [
      ["Accessible", "Robert Skidelsky, Keynes: A Very Short Introduction, 2010."],
      ["Accessible", "Zachary Carter, The Price of Peace: Money, Democracy, and the Life of John Maynard Keynes, 2020."],
      ["Intermédiaire", "J. M. Keynes, Les Conséquences économiques de la paix (1919) et « Perspectives économiques pour nos petits-enfants » (1930)."],
      ["Intermédiaire", "Robert Skidelsky, John Maynard Keynes, 1883-1946: Economist, Philosopher, Statesman, 2003, version abrégée de sa biographie en trois volumes."],
      ["Recherche", "J. M. Keynes, Théorie générale (1936), chapitres 1 à 3, 12 et 24 ; David Chambers et Elroy Dimson, « John Maynard Keynes, Investment Innovator », Journal of Economic Perspectives, 2013."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Un homme aux mille vies</h3>
<p>John Maynard Keynes (1883-1946) a été professeur à Cambridge, haut fonctionnaire du Trésor britannique, négociateur à la conférence de paix de 1919 et à Bretton Woods en 1944, investisseur, ami des écrivains et artistes de Bloomsbury, mari d’une danseuse étoile russe. Mais il est surtout l’économiste qui a inventé la macroéconomie moderne.</p>
${vieKeynes}
<h3>Le problème de son temps</h3>
<p>Entre les deux guerres, le Royaume-Uni connaît un chômage massif et durable, puis le monde entier plonge dans la Grande Dépression. Les économistes de l’époque pensaient qu’il suffisait d’attendre que les salaires baissent pour que tout le monde retrouve un emploi. Keynes répond : « À long terme, nous serons tous morts. »</p>
<h3>Son idée centrale</h3>
<p>Dans sa Théorie générale (1936), il explique que les entreprises produisent ce qu’elles pensent pouvoir vendre. Si les ménages et les entreprises, inquiets, dépensent moins, la production baisse, et le chômage peut durer. Baisser les salaires ne suffit pas, car cela réduit aussi les achats. L’État doit alors soutenir la demande, par des taux d’intérêt bas et des dépenses publiques.</p>
<h3>Son héritage</h3>
<p>Ses idées ont inspiré les politiques de l’après-guerre, ont été très critiquées dans les années 1970 par Friedman et Lucas, puis sont revenues avec la crise de 2008. Le portrait complet raconte sa vie, détaille sa pensée et présente ses adversaires et ses héritiers.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Cambridge à Bretton Woods : professeur, haut fonctionnaire, négociateur, mécène.",
      epoque: "Le chômage britannique de l’entre-deux-guerres, l’étalon-or et la Grande Dépression.",
      pensee: "Sept étapes, de la monnaie à la demande effective et à ses conséquences politiques.",
      livres: "Six livres, du pamphlet de 1919 à la Théorie générale.",
      cas: "Versailles, Bretton Woods, l’investisseur, les petits-enfants de 1930.",
      objections: "Hayek, Friedman, Lucas, et les post-keynésiens contre la synthèse.",
      ecoles: "Hicks, Samuelson, les post-keynésiens, Minsky, les néokeynésiens, Krugman.",
      source: "Théorie générale, chapitre 24 : les esclaves de quelque économiste défunt.",
      quiz: "Cinq questions corrigées et une question sur le frein à l’endettement.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
