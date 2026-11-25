/* Œconomia — notices longues, lot 8 (c) : équivalence ricardienne, rendements croissants */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };

  /* =====================================================================
     45. ÉQUIVALENCE RICARDIENNE
     ===================================================================== */
  const calendrier = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Une baisse d’impôt financée par l’emprunt, vue par un ménage « ricardien » (taux d’intérêt 5 %)</text>`;
    const col = (x, title, lines, c) => `<rect x="${x}" y="46" width="270" height="150" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + 135}" y="72" text-anchor="middle" style="fill:${c}; font:700 14px Manrope, sans-serif">${title}</text>` + lines.map((l, i) => `<text x="${x + 18}" y="${100 + i * 22}" ${S}>${l}</text>`).join("");
    s += col(30, "Cette année", ["L’État baisse l’impôt de 100.", "Il emprunte 100 pour combler le trou.", "Le ménage reçoit 100 de plus…", "… et les place à 5 %."], "var(--note)");
    s += col(340, "L’an prochain", ["L’État doit rembourser 105.", "Il relève l’impôt de 105.", "Le ménage paie 105…", "… avec son épargne devenue 105."], "var(--serial)");
    s += arrow(302, 121, 338, 121);
    s += `<rect x="30" y="214" width="580" height="54" rx="8" style="fill:var(--paper-2); stroke:var(--line)"/>`;
    s += `<text x="320" y="238" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">Résultat : la consommation ne change pas. L’emprunt public a simplement remplacé l’impôt.</text>`;
    s += `<text x="320" y="256" text-anchor="middle" ${S}>L’épargne privée augmente exactement autant que l’épargne publique diminue.</text>`;
    return s;
  })(), "Le raisonnement de Robert Barro (1974). Si les ménages anticipent parfaitement les impôts futurs et peuvent épargner et emprunter librement, financer une dépense par l’impôt ou par la dette revient au même. Une relance par une baisse d’impôt temporaire ne relance rien.", "Deux colonnes décrivant la baisse d’impôt cette année et la hausse l’an prochain");

  const depense = fig(260, (() => {
    const L = 260, W = 300;
    const rows = [["Prédiction ricardienne", 0, 0, "var(--ink-soft)"], ["Chèques de 2001, biens courants", 20, 40, "var(--note)"], ["Chèques de 2008, toutes dépenses", 50, 90, "var(--gold)"]];
    let s = `<text x="20" y="24" ${T}>Part des chèques fiscaux américains dépensée en trois mois (en %)</text>`;
    [0, 25, 50, 75, 100].forEach((v) => (s += `<line x1="${L + v / 100 * W}" y1="44" x2="${L + v / 100 * W}" y2="196" style="stroke:var(--line)"/><text x="${L + v / 100 * W}" y="212" text-anchor="middle" ${M}>${v}</text>`));
    rows.forEach(([n, a, b, c], i) => {
      const y = 58 + i * 46;
      s += `<text x="${L - 12}" y="${y + 18}" text-anchor="end" ${T}>${n}</text>`;
      if (b === 0) s += `<circle cx="${L}" cy="${y + 13}" r="6" style="fill:${c}"/><text x="${L + 12}" y="${y + 18}" ${M}>0</text>`;
      else s += `<rect x="${L + a / 100 * W}" y="${y}" width="${(b - a) / 100 * W}" height="26" rx="4" style="fill:${c}"/><text x="${L + b / 100 * W + 8}" y="${y + 18}" style="fill:var(--ink); font:700 12px 'JetBrains Mono', monospace">${a} à ${b}</text>`;
    });
    s += `<text x="20" y="242" ${S}>Fourchettes estimées : les ménages dépensent une bonne part d’un revenu temporaire.</text>`;
    return s;
  })(), "D’après David Johnson, Jonathan Parker et Nicholas Souleles (2006) pour 2001, et Jonathan Parker et ses coauteurs (2013) pour 2008. Ces études exploitent le fait que les chèques ont été envoyés à des dates tirées selon le numéro de sécurité sociale, ce qui permet une comparaison quasi expérimentale.", "Fourchettes de dépense comparées à la prédiction ricardienne nulle");

  OEC.notices["equivalence-ricardienne"] = {
    essentiel: [
      "L’équivalence ricardienne est l’hypothèse selon laquelle financer les dépenses publiques par l’emprunt ou par l’impôt a les mêmes effets sur l’économie : les ménages, sachant que la dette d’aujourd’hui sera remboursée par des impôts demain, épargnent en conséquence.",
      "Formulée et aussitôt mise en doute par David Ricardo en 1820, elle est relancée en 1974 par Robert Barro. Si elle était vraie, une baisse d’impôt financée par la dette ne relancerait pas la consommation, et le déficit public ne réduirait pas l’épargne nationale.",
      "Elle repose sur des hypothèses fortes : ménages prévoyants, liés à leurs descendants, sans contraintes d’emprunt. Les études trouvent qu’elle ne tient qu’en partie, mais elle rappelle que les anticipations comptent pour l’efficacité de la politique budgétaire."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : la guerre se paie-t-elle par l’impôt ou par la dette ?", html: `
<p>Les guerres contre Napoléon ont coûté une fortune à la Grande-Bretagne. En 1815, sa dette publique dépasse largement deux fois son revenu national. Faut-il, pour les guerres futures, recourir à l’emprunt, comme on l’a fait, ou lever des impôts immédiats ? En 1820, David <a href="#eco-ricardo">Ricardo</a> aborde la question dans un « Essai sur le système de financement » rédigé pour l’Encyclopaedia Britannica.</p>
<p>Il fait un calcul simple : si une guerre coûte 20 millions de livres, payer 20 millions d’impôt en une fois ou emprunter 20 millions et payer chaque année l’intérêt de 1 million revient, pour un contribuable prévoyant, au même. Mais il ajoute aussitôt que les gens ne raisonnent pas ainsi : ils sous-estiment le fardeau d’une dette lointaine. Cent cinquante ans plus tard, Robert Barro reprend la première partie du raisonnement, et l’économiste James Buchanan baptise l’idée « équivalence ricardienne ».</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La contrainte budgétaire de l’État</h4>
<p>Un État qui emprunte aujourd’hui doit, un jour, rembourser sa dette et payer des intérêts, en levant des impôts ou en réduisant ses dépenses. Un déficit aujourd’hui, à dépenses inchangées, signifie donc des impôts plus élevés demain. La dette publique n’est qu’un impôt différé.</p>
<h4>2. Le ménage prévoyant</h4>
<p>Si les ménages le comprennent, une baisse d’impôt financée par l’emprunt ne les rend pas plus riches : elle leur donne 100 francs aujourd’hui, mais leur en prendra 100 plus les intérêts demain. Un ménage prévoyant épargne donc la baisse d’impôt pour payer l’impôt futur. Sa consommation ne change pas.</p>
${calendrier}
<h4>3. Les générations futures</h4>
<p>L’objection évidente : si la dette est remboursée après la mort du contribuable, par ses enfants, il ne paiera pas lui-même. En 1974, Barro répond que les parents se soucient de leurs enfants et leur laissent des héritages. Sachant que la dette alourdira les impôts de leurs enfants, ils augmentent les héritages en conséquence. Les générations reliées par l’altruisme se comportent comme une seule famille immortelle.</p>
<h4>4. Les conséquences</h4>
<p>Si l’équivalence tient, une relance par baisse d’impôt financée par la dette n’a aucun effet sur la consommation ni sur la production (<a href="#c-multiplicateur">voir multiplicateur</a>). Le déficit public ne réduit pas l’épargne nationale, puisque l’épargne privée augmente d’autant, et ne fait donc pas monter les taux d’intérêt. La dette publique n’est pas une « richesse nette » pour les ménages.</p>
<h4>5. Les hypothèses</h4>
<p>Le résultat suppose beaucoup : des ménages qui anticipent correctement les impôts futurs ; qui peuvent emprunter librement, sinon ceux qui sont à court d’argent dépenseront la baisse d’impôt ; qui laissent tous des héritages motivés par l’altruisme ; des impôts qui ne modifient pas les comportements ; et une population stable, car de nouveaux contribuables, immigrants ou enfants à naître sans parents actuels, paieront une partie de la dette.</p>
<h4>6. Ce qui reste vrai</h4>
<p>Même si l’équivalence ne tient pas entièrement, elle rappelle une vérité importante : les effets d’une politique budgétaire dépendent de ce que les gens anticipent pour la suite. Une baisse d’impôt présentée comme permanente a plus d’effet qu’une baisse temporaire ; une relance qui fait craindre des hausses d’impôts massives peut être en partie neutralisée par l’épargne de précaution (<a href="#c-anticipations-rationnelles">voir anticipations rationnelles</a>).</p>
<h4>7. L’austérité expansionniste</h4>
<p>Le raisonnement peut aussi s’inverser : si un État très endetté réduit fortement son déficit, les ménages anticipent des impôts futurs plus faibles et peuvent consommer davantage. Francesco Giavazzi et Marco Pagano (1990) ont avancé cette hypothèse à propos du Danemark et de l’Irlande dans les années 1980, où des cures d’austérité ont été suivies de reprises. L’idée a été invoquée en Europe après 2010, avec des résultats beaucoup plus décevants.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les chèques fiscaux américains</h4>
<p>En 2001 et en 2008, le gouvernement américain envoie aux ménages des chèques de remboursement d’impôts, à des dates qui dépendent des derniers chiffres de leur numéro de sécurité sociale, donc au hasard. Les économistes peuvent comparer les dépenses des ménages qui ont reçu le chèque avec celles des autres. En 2001, les ménages dépensent 20 à 40 % du chèque en biens courants dans les trois mois. En 2008, ils en dépensent 50 à 90 % si l’on compte les achats de voitures. C’est très loin de la prédiction ricardienne.</p>
${depense}
<h4>Déficits et épargne privée</h4>
<p>Au niveau des pays, l’épargne privée augmente souvent quand le déficit public augmente, mais en général beaucoup moins que d’un pour un. Les études sur les pays de l’OCDE trouvent que l’épargne privée compense en moyenne entre un tiers et la moitié des variations du déficit, ce qui suggère une équivalence partielle.</p>
<h4>Les ménages sans épargne</h4>
<p>Une partie importante des ménages vit « au jour le jour », sans épargne liquide, même parmi les classes moyennes. Greg Kaplan, Giovanni Violante et Justin Weidner (2014) estiment qu’environ un tiers des ménages américains sont dans ce cas. Ces ménages dépensent presque entièrement tout revenu supplémentaire, ce qui suffit à rompre l’équivalence ricardienne au niveau de l’économie.</p>` }
    ],
    cas: [
      { titre: "Ricardo et la dette après Waterloo", html: `
<p>Après 1815, la Grande-Bretagne doit gérer une dette énorme, héritée des guerres. Ricardo défend un plan audacieux : un impôt exceptionnel sur le capital pour rembourser la dette d’un coup. Il est convaincu que les contribuables, qui ne se sentent pas concernés par une dette lointaine, seraient tentés d’émigrer pour échapper aux impôts futurs, et que la dette affaiblit la vigilance des citoyens face aux dépenses de guerre. Son plan n’est pas adopté. Le pays rembourse progressivement sa dette au XIXe siècle grâce à des excédents budgétaires et à la croissance, et elle tombe à environ un tiers du revenu national à la veille de 1914.</p>` },
      { titre: "La dette des communes suisses", html: `
<p>En Suisse, les communes ont une large autonomie fiscale, et les ménages peuvent comparer facilement les impôts et les dettes de communes voisines. Des travaux d’économistes suisses, notamment David Stadelmann et Reiner Eichenberger, suggèrent que la dette communale se reflète en partie dans les prix de l’immobilier : à impôts égaux, un logement dans une commune plus endettée vaut un peu moins, parce que l’acheteur anticipe des impôts futurs plus élevés. C’est une forme locale d’équivalence ricardienne, passant par le prix du sol plutôt que par l’épargne. Elle rendrait les propriétaires actuels attentifs à la dette de leur commune, puisqu’elle diminue la valeur de leur bien.</p>` },
      { titre: "Le Danemark en 1983", html: `
<p>En 1982, le Danemark connaît un déficit public élevé, une inflation forte et une monnaie fragile. Le nouveau gouvernement mène un ajustement budgétaire brutal, accompagné de l’ancrage de la couronne au mark allemand. Contre toute attente keynésienne, la consommation privée et la croissance repartent fortement en 1983-1986. Giavazzi et Pagano y voient l’effet d’anticipations : la crédibilité retrouvée fait baisser les taux d’intérêt et rassure les ménages sur leurs impôts futurs. D’autres soulignent le rôle de la forte baisse des taux d’intérêt et de la libéralisation financière.</p>` }
    ],
    objections: `
<h4>1. Ricardo lui-même n’y croyait pas</h4>
<p>Ricardo jugeait que les contribuables ne raisonnent pas avec une telle prévoyance. L’« équivalence ricardienne » porte donc le nom d’un auteur qui la tenait pour fausse en pratique, ce que Gerald O’Driscoll a souligné dès 1977.</p>
<h4>2. Les contraintes de crédit</h4>
<p>Beaucoup de ménages ne peuvent pas emprunter autant qu’ils le voudraient. Pour eux, une baisse d’impôt aujourd’hui, même compensée par un impôt futur, est précieuse : elle leur permet de consommer maintenant. Les études sur les chèques fiscaux le confirment.</p>
<h4>3. Myopie et incertitude</h4>
<p>Les ménages ne savent pas quand ni comment la dette sera remboursée, ni qui paiera. L’économie comportementale montre qu’ils accordent peu de poids à l’avenir lointain. Les hypothèses de Barro supposent une rationalité et une information irréalistes.</p>
<h4>4. Quand le taux est inférieur à la croissance</h4>
<p>Si le taux d’intérêt sur la dette publique est durablement inférieur au taux de croissance de l’économie, l’État peut faire rouler sa dette sans jamais augmenter les impôts, et le ratio de dette au PIB diminue de lui-même. La dette n’est alors plus un impôt différé, comme l’a souligné Olivier Blanchard en 2019 (<a href="#c-r-g">voir r et g</a>).</p>`,
    ecoles: `
<p><b><a href="#eco-ricardo">Ricardo</a></b> (1820) formule l’équivalence et la juge irréaliste.</p>
<p><b>Robert Barro</b> (1974) la relance avec l’altruisme intergénérationnel.</p>
<p><b>James Buchanan</b> lui donne son nom en 1976 et la critique.</p>
<p><b>Les nouveaux classiques</b>, autour de <a href="#eco-lucas">Lucas</a>, l’intègrent à la critique des politiques de relance.</p>
<p><b>Les keynésiens</b>, comme <a href="#eco-krugman">Krugman</a> et <a href="#eco-summers">Summers</a>, en contestent la portée.</p>
<p><b>Parker</b>, <b>Souleles</b>, <b>Kaplan</b> et <b>Violante</b> la testent avec des données de ménages.</p>`,
    source: {
      titre: "David Ricardo, « Essay on the Funding System », Encyclopaedia Britannica, supplément, 1820",
      texte: "Mais les gens qui paient les impôts ne les estiment jamais ainsi, et par conséquent ne gèrent pas leurs affaires privées en conséquence.",
      notes: `
<p><b>Le contexte de la phrase.</b> Ricardo vient de montrer qu’en théorie, payer un impôt une fois ou payer pour toujours l’intérêt de la dette équivalente revient au même. Il ajoute aussitôt cette réserve décisive, qui contredit l’usage moderne de son nom.</p>
<p><b>La crainte de Ricardo.</b> Parce que les contribuables sous-estiment la charge de la dette, Ricardo craint que l’emprunt rende les guerres trop faciles et les dépenses publiques moins contrôlées. Il juge l’emprunt « l’un des plus terribles fléaux » inventés pour affliger une nation.</p>
<p><b>Un nom paradoxal.</b> Barro, qui connaissait mal ce passage en 1974, a ensuite reconnu que Ricardo n’adhérait pas à la thèse qui porte son nom. L’étiquette est restée.</p>`
    },
    quiz: [
      { q: "Que dit l’équivalence ricardienne ?",
        o: ["Que la dette publique est toujours dangereuse", "Que financer les dépenses publiques par l’emprunt ou par l’impôt a les mêmes effets, car les ménages anticipent les impôts futurs", "Que les impôts doivent être égaux pour tous", "Que l’emprunt public relance toujours davantage la consommation que l’impôt"], c: 1,
        e: "Les ménages épargnent la baisse d’impôt pour payer l’impôt futur." },
      { q: "Un ménage ricardien reçoit une baisse d’impôt de 100, financée par un emprunt à 5 %. Que fait-il ?",
        o: ["Il dépense 100", "Il épargne 100 pour payer l’impôt de 105 de l’année suivante", "Il dépense 50", "Il emprunte 100 de plus"], c: 1,
        e: "Placés à 5 %, les 100 deviennent 105, exactement la hausse d’impôt future." },
      { q: "Comment Barro répond-il à l’objection des générations futures ?",
        o: ["En disant que la dette n’est jamais remboursée", "Par l’altruisme : les parents augmentent leurs héritages pour compenser les impôts futurs de leurs enfants", "En supposant que la dette sera remboursée par l’inflation", "En comptant sur la croissance pour alléger la dette"], c: 1,
        e: "Les générations reliées par l’altruisme se comportent comme une famille immortelle." },
      { q: "Que montrent les études sur les chèques fiscaux américains de 2001 et 2008 ?",
        o: ["Que les ménages ont tout épargné", "Que les ménages ont dépensé une part importante des chèques, contrairement à la prédiction ricardienne", "Que la consommation a baissé après l’envoi des chèques", "Que les impôts ont augmenté"], c: 1,
        e: "20 à 40 % en biens courants en 2001, 50 à 90 % en 2008 en comptant les voitures." },
      { q: "Ricardo croyait-il à l’équivalence qui porte son nom ?",
        o: ["Oui, sans réserve", "Non : il jugeait que les contribuables ne raisonnent pas ainsi", "Il ne l’a jamais évoquée", "Il l’a démontrée mathématiquement"], c: 1,
        e: "Il formule l’équivalence en théorie, mais la juge fausse en pratique." }
    ],
    ouverte: {
      q: "Le frein à l’endettement suisse repose sur l’idée que les déficits d’aujourd’hui sont les impôts de demain. L’équivalence ricardienne justifie-t-elle ou affaiblit-elle cette règle ?",
      r: "L’équivalence ricardienne joue dans les deux sens. Si elle était parfaitement vraie, la dette n’aurait aucune importance économique, puisque les ménages compenseraient tout déficit par leur épargne : une règle budgétaire serait inutile. C’est justement parce qu’elle est en grande partie fausse, parce que les citoyens sous-estiment la charge future de la dette, comme le pensait Ricardo, qu’une règle comme le frein à l’endettement peut se justifier : elle compense la myopie des électeurs et la tentation des élus de reporter les coûts sur l’avenir. Mais l’échec de l’équivalence signifie aussi que la politique budgétaire a des effets réels sur la demande, ce qui justifie des déficits temporaires en récession, que le frein autorise. Le débat porte alors sur l’équilibre entre ces deux préoccupations, et sur le traitement des investissements publics."
    },
    lectures: [
      ["Accessible", "N. Gregory Mankiw, Macroéconomie, chapitre sur la dette publique et l’équivalence ricardienne."],
      ["Accessible", "Olivier Blanchard, Fiscal Policy under Low Interest Rates, 2023, chapitres 1 et 2."],
      ["Intermédiaire", "David Ricardo, « Essay on the Funding System », 1820."],
      ["Intermédiaire", "Robert Barro, « The Ricardian Approach to Budget Deficits », Journal of Economic Perspectives, 1989."],
      ["Recherche", "Robert Barro, « Are Government Bonds Net Wealth? », Journal of Political Economy, 1974 ; Jonathan Parker et al., « Consumer Spending and the Economic Stimulus Payments of 2008 », American Economic Review, 2013."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Un cadeau qu’on rendra plus tard</h3>
<p>Imaginez que l’État vous accorde une baisse d’impôt de 100 francs cette année, mais qu’il emprunte pour la financer. L’an prochain, il devra rembourser, et augmentera vos impôts de 105 francs. Si vous le savez, vous n’allez pas dépenser vos 100 francs : vous les mettrez de côté pour payer plus tard. C’est l’idée de l’<b>équivalence ricardienne</b>.</p>
${calendrier}
<h3>Une idée que Ricardo ne croyait pas</h3>
<p>David <a href="#eco-ricardo">Ricardo</a> l’avait formulée en 1820, tout en ajoutant que les gens ne raisonnent pas ainsi. L’économiste Robert Barro l’a relancée en 1974. Si elle était vraie, une baisse d’impôt financée par la dette ne relancerait pas l’économie.</p>
<h3>Ce que montrent les faits</h3>
<p>Quand les États-Unis ont envoyé des chèques d’impôts aux ménages en 2001 et 2008, ceux-ci en ont dépensé une grande partie en quelques mois. Beaucoup de ménages n’ont pas d’épargne et dépensent tout revenu supplémentaire. L’équivalence ne tient donc qu’en partie.</p>
<h3>À retenir</h3>
<p>Ce que les gens anticipent pour l’avenir influence l’effet des impôts et de la dette. La notice complète présente le raisonnement, ses hypothèses et les preuves.</p>`,
      quiz: [0, 4]
    },
    resumes: {
      depart: "Payer la guerre par l’impôt ou par la dette ? Ricardo en 1820.",
      raisonnement: "Sept étapes, de la contrainte budgétaire de l’État à l’austérité expansionniste.",
      preuves: "Les chèques fiscaux américains, déficits et épargne privée, les ménages sans épargne.",
      cas: "La dette britannique après Waterloo, la dette des communes suisses, le Danemark en 1983.",
      objections: "Ricardo n’y croyait pas, contraintes de crédit, myopie, taux inférieur à la croissance.",
      ecoles: "Ricardo, Barro, Buchanan, les nouveaux classiques, les keynésiens, les études de ménages.",
      source: "Ricardo, 1820 : les contribuables ne les estiment jamais ainsi.",
      quiz: "Cinq questions corrigées, dont un calcul, et une question sur le frein à l’endettement.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     46. RENDEMENTS CROISSANTS
     ===================================================================== */
  const courbe = fig(300, (() => {
    const L = 90, R = 580, Top = 50, B = 240, X = (q) => L + q * (R - L) / 10, Y = (c) => B - c * 16;
    let s = `<text x="20" y="24" ${T}>Rendements croissants : le coût moyen baisse quand la production augmente</text>`;
    s += `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>coût</text><text x="${L - 8}" y="${Top + 16}" text-anchor="end" ${M}>par unité</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>quantité produite</text>`;
    let d = ""; for (let q = 0.6; q <= 10.001; q += 0.1) d += `${q < 0.65 ? "M" : "L"} ${X(q)} ${Y(1.5 + 6 / q)} `;
    s += `<path d="${d}" style="fill:none; stroke:var(--plum); stroke-width:2.8"/>`;
    [[1, "petit atelier"], [4, "usine moyenne"], [9, "grande usine"]].forEach(([q, t]) => {
      const c = 1.5 + 6 / q;
      s += `<circle cx="${X(q)}" cy="${Y(c)}" r="5" style="fill:var(--gold)"/><text x="${X(q) + 10}" y="${Y(c) - 8}" ${S}>${t} : ${c.toFixed(1).replace(".", ",")}</text>`;
    });
    s += `<text x="20" y="274" ${S}>Les coûts fixes (machines, recherche, logiciel) se répartissent sur plus d’unités. Le plus grand producteur</text>`;
    s += `<text x="20" y="290" ${S}>peut vendre moins cher, gagner des parts de marché, et grandir encore.</text>`;
    return s;
  })(), "Exemple : un coût fixe de 6 et un coût de 1,5 par unité. À 1 unité, chaque unité coûte 7,5 ; à 9 unités, environ 2,2. Pour un logiciel ou un médicament, où presque tout le coût est fixe, l’écart est encore plus spectaculaire.", "Courbe de coût moyen décroissante avec trois points");

  const verrou = fig(300, (() => {
    const L = 80, R = 600, B = 240, X = (n) => L + n * (R - L) / 100, Y = (p) => B - p * 1.8;
    const pa = [50, 54, 58, 55, 60, 64, 67, 71, 74, 78, 81, 84, 86, 88, 90, 92, 93, 94, 95, 96, 97];
    let s = `<text x="20" y="24" ${T}>Une course entre deux technologies à rendements croissants (schéma d’après Brian Arthur)</text>`;
    [0, 25, 50, 75, 100].forEach((v) => (s += `<line x1="${L}" y1="${Y(v)}" x2="${R}" y2="${Y(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end" ${M}>${v} %</text>`));
    s += `<polyline points="${pa.map((p, i) => `${X(i * 5)},${Y(p)}`).join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.6"/>`;
    s += `<polyline points="${pa.map((p, i) => `${X(i * 5)},${Y(100 - p)}`).join(" ")}" style="fill:none; stroke:var(--serial); stroke-width:2.6"/>`;
    s += `<text x="${X(100)}" y="${Y(100) - 6}" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">technologie A : domine</text>`;
    s += `<text x="${X(100)}" y="${Y(20)}" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">technologie B : marginalisée</text>`;
    s += `<text x="${X(12)}" y="${Y(92)}" ${S}>une petite avance due au hasard…</text>`;
    s += `<text x="${X(50)}" y="${Y(45)}" ${S}>… attire de nouveaux utilisateurs, et s’amplifie</text>`;
    s += `<text x="${R}" y="${B + 20}" text-anchor="end" ${M}>nombre d’adoptions</text>`;
    s += `<text x="20" y="286" ${S}>Rien ne garantit que A soit la meilleure technologie : l’issue dépend de l’histoire, et une fois verrouillée, elle dure.</text>`;
    return s;
  })(), "Brian Arthur (1989) montre que lorsque chaque adoption rend une technologie plus attractive, par des effets d’apprentissage ou de réseau, de petits événements fortuits peuvent décider du vainqueur. L’économie peut alors rester « verrouillée » dans une solution qui n’est pas la meilleure. Trajectoire illustrative.", "Deux courbes divergentes de parts de marché");

  OEC.notices["rendements-croissants"] = {
    essentiel: [
      "Il y a rendements croissants quand augmenter la production fait baisser le coût de chaque unité, ou quand doubler les moyens de production fait plus que doubler la production. Ils naissent des coûts fixes, de la spécialisation, de l’apprentissage, des effets de réseau et de la concentration géographique des activités.",
      "Ils remettent en cause plusieurs résultats de la théorie classique : ils favorisent les grandes entreprises et les monopoles, rendent l’histoire et le hasard décisifs, et expliquent pourquoi les activités se concentrent dans certaines villes et certains pays.",
      "Longtemps mis de côté parce qu’ils compliquaient les modèles, ils ont été réintroduits dans les années 1980 et 1990 par Paul Krugman, pour le commerce et la géographie, et par Paul Romer, pour la croissance. Ils sont au cœur de l’économie numérique."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi les horlogers se regroupent-ils dans le Jura ?", html: `
<p>Pourquoi l’horlogerie s’est-elle concentrée dans l’arc jurassien, l’industrie pharmaceutique à Bâle, la finance à Zurich et à Genève, l’informatique dans la Silicon Valley ? Rien, dans le climat ou le sol, ne destinait ces régions à ces activités. Pourtant, une fois installées, ces industries y prospèrent depuis des décennies, voire des siècles, et attirent toujours plus d’entreprises et de talents.</p>
<p>En 1890, Alfred <a href="#eco-marshall">Marshall</a> observe le même phénomène dans les « districts industriels » anglais, comme la coutellerie de Sheffield ou le textile du Lancashire. Il remarque que, dans ces districts, les secrets du métier ne sont plus des secrets, mais sont comme « dans l’air ». Les entreprises y gagnent à être proches les unes des autres. C’est une forme de rendements croissants, l’une des notions les plus fécondes et les plus embarrassantes de la théorie économique.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Constants, décroissants, croissants</h4>
<p>On parle de rendements constants quand doubler tous les moyens de production double la production, de rendements décroissants quand elle augmente moins, et de rendements croissants quand elle augmente davantage. La théorie classique de Ricardo reposait sur les rendements décroissants de la terre (<a href="#c-rente">voir rente</a>). Adam <a href="#eco-smith">Smith</a> avait pourtant décrit des rendements croissants avec la <a href="#c-division-travail">division du travail</a>.</p>
<h4>2. Les économies d’échelle internes</h4>
<p>Dans une entreprise, les rendements croissants viennent surtout des coûts fixes : une usine, une machine, un programme de recherche, un logiciel coûtent la même chose qu’on produise peu ou beaucoup. Plus on produit, plus ces coûts sont répartis. Pour un logiciel ou un médicament, produire une unité supplémentaire ne coûte presque rien, alors que la conception a coûté des centaines de millions.</p>
${courbe}
<h4>3. Les économies externes</h4>
<p>Marshall distingue les économies internes à l’entreprise et les économies externes, qui viennent de la taille de l’industrie ou de la région. Dans un district industriel, les entreprises bénéficient d’un marché de travailleurs qualifiés, de fournisseurs spécialisés, et de la circulation des idées. Chacune gagne à la présence des autres. C’est une <a href="#c-externalite">externalité</a> positive, qui explique la concentration géographique des activités.</p>
<h4>4. Le problème théorique</h4>
<p>Les rendements croissants internes posent un problème à la théorie de la concurrence : si le plus grand producteur a toujours les coûts les plus bas, il finit par éliminer les autres et former un monopole (<a href="#c-concurrence-imparfaite">voir concurrence imparfaite</a>). Piero Sraffa le souligne en 1926. Pendant des décennies, les économistes ont préféré supposer des rendements constants ou décroissants, plus faciles à modéliser.</p>
<h4>5. L’apprentissage et les effets de réseau</h4>
<p>Les rendements croissants viennent aussi de l’apprentissage : en 1936, l’ingénieur Theodore Wright observe que le coût de fabrication d’un avion baisse d’environ 20 % chaque fois que la production cumulée double. Et des effets de réseau : un téléphone, un réseau social ou une plateforme sont d’autant plus utiles qu’ils ont d’utilisateurs. Ces mécanismes donnent l’avantage au premier qui prend de l’avance.</p>
<h4>6. Le hasard et le verrouillage</h4>
<p>Avec des rendements croissants, l’histoire compte. Brian Arthur montre en 1989 que de petits événements fortuits peuvent décider quelle technologie l’emporte, et que l’économie peut rester « verrouillée » dans un choix qui n’est pas le meilleur. Paul David cite en 1985 l’exemple du clavier QWERTY, conçu pour les machines à écrire mécaniques et resté dominant bien après leur disparition.</p>
${verrou}
<h4>7. La nouvelle théorie du commerce et de la croissance</h4>
<p>À partir de 1979, Paul <a href="#eco-krugman">Krugman</a> montre que les rendements croissants expliquent le commerce entre pays semblables, qui échangent des produits similaires mais différenciés, et la concentration des industries dans certaines régions. En 1990, Paul Romer montre que les idées, non rivales, engendrent des rendements croissants au niveau de toute l’économie, ce qui explique une croissance durable. Krugman reçoit le prix Nobel en 2008, Romer en 2018.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les usines à un million de dollars</h4>
<p>Michael Greenstone, Richard Hornbeck et Enrico Moretti (2010) étudient l’arrivée de très grandes usines dans des comtés américains, en comparant les comtés gagnants avec ceux qui avaient été finalistes pour accueillir la même usine. Cinq ans après l’ouverture, la productivité des usines déjà présentes dans les comtés gagnants est supérieure d’environ 12 %. C’est une mesure directe des économies d’agglomération décrites par Marshall.</p>
<h4>La courbe d’apprentissage du solaire</h4>
<p>Le prix des panneaux solaires photovoltaïques a baissé de plus de 99 % depuis les années 1970. Les études montrent qu’il diminue d’environ 20 % chaque fois que la production mondiale cumulée double, exactement comme les avions de Wright. Ce mécanisme explique pourquoi les subventions initiales, en Allemagne notamment, ont contribué à faire baisser les prix pour le monde entier.</p>
<h4>Les emplois qui en créent d’autres</h4>
<p>Enrico Moretti, dans The New Geography of Jobs (2012), estime qu’aux États-Unis, chaque nouvel emploi dans un secteur innovant d’une ville crée environ cinq emplois supplémentaires dans les services locaux. Les villes innovantes attirent ainsi toujours plus d’emplois et de talents, ce qui creuse l’écart avec les autres régions.</p>` }
    ],
    cas: [
      { titre: "Bâle et la pharmacie", html: `
<p>L’industrie chimique bâloise naît au XIXe siècle de la production de teintures pour l’industrie textile et la soierie, grâce à la proximité du Rhin, à la présence de chimistes et à une législation sur les brevets alors moins contraignante qu’ailleurs. Elle se transforme au XXe siècle en industrie pharmaceutique, avec des entreprises comme Roche et Novartis. Aujourd’hui, la région bâloise concentre des sièges mondiaux, des centres de recherche, des start-ups de biotechnologie, des universités et des sous-traitants spécialisés. Chaque acteur attire les autres. C’est un exemple type d’économies externes à la Marshall, et d’un avantage historique devenu durable.</p>` },
      { titre: "La Crypto Valley de Zoug", html: `
<p>Au milieu des années 2010, plusieurs projets de cryptomonnaies s’installent dans le canton de Zoug, dont la fondation Ethereum en 2014, attirés par une fiscalité favorable et une attitude ouverte des autorités. Rapidement, des centaines d’entreprises de la blockchain s’y établissent, ainsi que des avocats, des fiduciaires et des investisseurs spécialisés. Le nom de « Crypto Valley » apparaît. L’exemple montre comment un petit avantage initial peut, grâce aux rendements croissants d’agglomération, attirer tout un écosystème, même si la durabilité de cette concentration reste à démontrer.</p>` },
      { titre: "Le clavier QWERTY et sa controverse", html: `
<p>Pour Paul David (1985), le clavier QWERTY illustre le verrouillage : conçu dans les années 1870 pour éviter que les tiges des machines à écrire ne se coincent, il serait resté dominant malgré l’existence de dispositions plus efficaces, comme le clavier Dvorak, parce que dactylos et fabricants s’étaient coordonnés dessus. En 1990, Stan Liebowitz et Stephen Margolis publient « La fable des touches », où ils contestent les preuves de la supériorité du clavier Dvorak. La controverse montre qu’il est difficile de prouver qu’un marché est verrouillé dans une solution inférieure.</p>` }
    ],
    objections: `
<h4>1. Les rendements finissent par décroître</h4>
<p>Au-delà d’une certaine taille, les entreprises deviennent difficiles à gérer, les villes souffrent de congestion, de loyers élevés et de pollution. Les rendements croissants ne sont pas illimités, ce qui explique que plusieurs entreprises et plusieurs villes coexistent.</p>
<h4>2. Le verrouillage est rare</h4>
<p>Liebowitz et Margolis soutiennent que les marchés savent corriger les mauvais choix technologiques quand l’écart de qualité est important, et que les exemples de verrouillage dans une solution vraiment inférieure sont rares et contestables.</p>
<h4>3. La politique industrielle risquée</h4>
<p>Les rendements croissants peuvent justifier qu’un État soutienne ses industries pour qu’elles prennent l’avantage, ce que Krugman lui-même a qualifié de théorie du commerce stratégique. Mais choisir les bons secteurs est difficile, et les autres pays peuvent répliquer. Krugman a mis en garde contre ces politiques, souvent captées par des intérêts particuliers (<a href="#c-choix-public">voir choix publics</a>).</p>
<h4>4. Les gagnants emportent tout</h4>
<p>Dans l’économie numérique, les rendements croissants et les effets de réseau conduisent à des positions dominantes durables, et à des inégalités entre entreprises, régions et personnes. La question de leur régulation est devenue centrale.</p>`,
    ecoles: `
<p><b><a href="#eco-smith">Smith</a></b> relie la productivité à la division du travail et à la taille du marché.</p>
<p><b><a href="#eco-marshall">Marshall</a></b> distingue économies internes et externes, et décrit les districts industriels.</p>
<p><b>Sraffa</b> (1926) en montre l’incompatibilité avec la concurrence parfaite ; <b>Allyn Young</b> (1928) en fait un moteur de croissance.</p>
<p><b>Brian Arthur</b> et <b>Paul David</b> étudient le verrouillage technologique.</p>
<p><b><a href="#eco-krugman">Krugman</a></b> renouvelle le commerce international et la géographie économique.</p>
<p><b>Paul Romer</b> fonde la croissance endogène sur les idées.</p>`,
    source: {
      titre: "Alfred Marshall, Principes d’économie politique, 1890, livre IV, chapitre 10",
      texte: "Les secrets du métier cessent d’être des secrets ; ils sont pour ainsi dire dans l’air, et les enfants en apprennent inconsciemment beaucoup.",
      notes: `
<p><b>Les districts industriels.</b> Marshall décrit les régions où une industrie est concentrée depuis longtemps. Les compétences s’y transmettent, les innovations s’y diffusent rapidement : « si un homme a une idée nouvelle, elle est reprise par d’autres et combinée à leurs propres suggestions ».</p>
<p><b>Trois avantages.</b> Marshall identifie la transmission des savoirs, la présence d’industries auxiliaires spécialisées, et un marché du travail où les employeurs trouvent les compétences et les travailleurs des emplois. La recherche moderne sur l’agglomération reprend encore ces trois mécanismes.</p>
<p><b>Une idée redécouverte.</b> Marginalisée pendant des décennies, l’analyse de Marshall est redécouverte dans les années 1980 par les économistes de la géographie et les sociologues qui étudient les districts italiens et la Silicon Valley.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que des rendements croissants ?",
        o: ["Une hausse du rendement des placements financiers", "Le fait que doubler les moyens de production fait plus que doubler la production, ou que le coût unitaire baisse avec la quantité", "Une hausse des profits", "Le fait que chaque unité supplémentaire coûte plus cher à produire"], c: 1,
        e: "Les coûts fixes, l’apprentissage et les effets de réseau en sont les principales sources." },
      { q: "Avec un coût fixe de 6 et un coût de 1,5 par unité, quel est le coût moyen pour 3 unités ?",
        o: ["1,5", "3,5", "6", "7,5"], c: 1,
        e: "(6 + 3 × 1,5) / 3 = 10,5 / 3 = 3,5." },
      { q: "Que sont les économies externes selon Marshall ?",
        o: ["Les économies réalisées à l’étranger", "Les avantages qu’une entreprise retire de la présence d’autres entreprises de la même industrie dans sa région", "Les baisses de coûts internes", "Les gains tirés de l’exportation vers d’autres régions"], c: 1,
        e: "Main-d’œuvre qualifiée, fournisseurs spécialisés, circulation des idées." },
      { q: "Qu’est-ce que le « verrouillage » technologique décrit par Brian Arthur ?",
        o: ["La protection par brevet", "La domination durable d’une technologie due à une avance initiale amplifiée, même si elle n’est pas la meilleure", "Le remplacement rapide d’une technologie par une meilleure", "L’obligation légale d’utiliser une norme"], c: 1,
        e: "Avec des rendements croissants, l’histoire et le hasard peuvent décider du vainqueur." },
      { q: "Que montrent Greenstone, Hornbeck et Moretti avec l’arrivée de grandes usines ?",
        o: ["Qu’elles ne changent rien", "Que la productivité des usines déjà présentes augmente d’environ 12 % après cinq ans", "Que les salaires baissent", "Que les entreprises locales ferment"], c: 1,
        e: "C’est une mesure directe des économies d’agglomération." }
    ],
    ouverte: {
      q: "La Suisse doit-elle chercher à attirer et à concentrer certaines industries, comme la pharmacie à Bâle ou la blockchain à Zoug, par des avantages fiscaux ciblés ?",
      r: "Les rendements croissants d’agglomération plaident pour cette stratégie : une fois qu’un écosystème est constitué, il attire de lui-même entreprises et talents, et ses bénéfices dépassent l’avantage fiscal initial. La Suisse en a profité, avec ses clusters pharmaceutiques, financiers, horlogers ou technologiques. Mais la stratégie a des limites. Les avantages fiscaux ciblés sont contraints par les accords internationaux, comme l’impôt minimum de 15 % de l’OCDE pour les grandes entreprises, appliqué par la Suisse depuis 2024. Choisir les industries d’avenir est difficile, et un cluster bâti sur un seul avantage fiscal peut disparaître si celui-ci est supprimé. Les facteurs durables des clusters suisses sont plutôt la qualité des universités et de la formation professionnelle, la stabilité institutionnelle, l’ouverture aux talents étrangers et la qualité de vie. Les économistes recommandent souvent d’investir dans ces conditions générales plutôt que de subventionner des secteurs particuliers."
    },
    lectures: [
      ["Accessible", "Enrico Moretti, The New Geography of Jobs, 2012."],
      ["Accessible", "Paul Krugman, La Mondialisation n’est pas coupable, 1996, chapitres sur la géographie et le commerce."],
      ["Intermédiaire", "Alfred Marshall, Principes d’économie politique (1890), livre IV, chapitres 9 à 13."],
      ["Intermédiaire", "W. Brian Arthur, Increasing Returns and Path Dependence in the Economy, 1994."],
      ["Recherche", "Paul Romer, « Endogenous Technological Change », Journal of Political Economy, 1990 ; Paul Krugman, « Increasing Returns and Economic Geography », Journal of Political Economy, 1991."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Plus on produit, moins ça coûte</h3>
<p>Concevoir un logiciel ou un médicament coûte des centaines de millions ; en produire une copie supplémentaire ne coûte presque rien. Plus on en vend, plus le coût de chaque unité baisse. Les économistes parlent de <b>rendements croissants</b>. Ils avantagent les grandes entreprises et le premier arrivé.</p>
${courbe}
<h3>Pourquoi les entreprises se regroupent</h3>
<p>Les horlogers dans le Jura, la pharmacie à Bâle, la blockchain à Zoug : les entreprises d’un même secteur gagnent à être proches, car elles partagent des travailleurs qualifiés, des fournisseurs et des idées. Alfred <a href="#eco-marshall">Marshall</a> disait en 1890 que, dans ces régions, les secrets du métier sont « dans l’air ».</p>
<h3>Le hasard et l’histoire</h3>
<p>Avec les rendements croissants, une petite avance due au hasard peut devenir décisive : une technologie l’emporte parce qu’elle a été adoptée un peu plus tôt, pas forcément parce qu’elle est la meilleure. Le clavier QWERTY en serait un exemple, même si c’est discuté.</p>
<h3>À retenir</h3>
<p>Les rendements croissants expliquent la concentration des activités et des richesses. La notice complète présente les mécanismes, les preuves et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Pourquoi les horlogers se regroupent-ils dans le Jura ? Marshall et les districts industriels.",
      raisonnement: "Sept étapes, des économies d’échelle à la croissance endogène.",
      preuves: "Les usines à un million de dollars, la courbe d’apprentissage du solaire, les emplois qui en créent d’autres.",
      cas: "Bâle et la pharmacie, la Crypto Valley de Zoug, la controverse QWERTY.",
      objections: "Rendements qui décroissent, verrouillage rare, politique industrielle risquée, les gagnants emportent tout.",
      ecoles: "Smith, Marshall, Sraffa et Young, Arthur et David, Krugman, Romer.",
      source: "Marshall, 1890 : les secrets du métier sont dans l’air.",
      quiz: "Cinq questions corrigées, dont un calcul, et une question sur les clusters suisses.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
