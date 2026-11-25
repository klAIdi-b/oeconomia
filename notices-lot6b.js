/* Œconomia — notices longues, lot 6 (b) : aléa moral, biens publics */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     31. ALÉA MORAL
     ===================================================================== */
  const rand = fig(270, (() => {
    const L = 230, W = 330;
    const rows = [["Soins gratuits", 100], ["Participation de 25 %", 81], ["Participation de 50 %", 75], ["Participation de 95 %*", 69]];
    let s = `<text x="20" y="24" ${T}>Expérience RAND : dépenses de santé selon la part payée par l’assuré (gratuité = 100)</text>`;
    rows.forEach(([n, v], i) => {
      const y = 50 + i * 46, w = v / 100 * W;
      s += `<text x="${L - 12}" y="${y + 20}" text-anchor="end" ${T}>${n}</text>`;
      s += `<rect x="${L}" y="${y}" width="${w}" height="30" rx="4" style="fill:${i === 0 ? "var(--serial)" : "var(--note)"}; opacity:${1 - i * 0.12}"/>`;
      s += `<text x="${L + w + 8}" y="${y + 20}" style="fill:var(--ink); font:700 13px 'JetBrains Mono', monospace">${v}</text>`;
    });
    s += `<text x="20" y="242" ${S}>* avec un plafond annuel de dépenses à charge, proportionnel au revenu. Valeurs arrondies.</text>`;
    s += `<text x="20" y="258" ${S}>L’état de santé moyen des participants n’a guère différé entre les groupes.</text>`;
    return s;
  })(), "D’après Willard Manning et ses coauteurs (1987). Entre 1974 et 1982, quelque 2 750 ménages américains sont répartis au hasard entre plusieurs contrats d’assurance. Ceux qui ne paient rien consultent nettement plus : c’est l’aléa moral, mesuré pour la première fois par une expérience à grande échelle.", "Barres de dépenses de santé selon le taux de participation");

  const agent = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Le problème principal-agent</text>`;
    const box = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + 26}" text-anchor="middle" style="fill:${c}; font:700 14px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + 46}" text-anchor="middle" ${S}>${sub}</text>`;
    s += box(30, 50, 220, 64, "Principal", "assureur, employeur, actionnaire", "var(--plum)");
    s += box(390, 50, 220, 64, "Agent", "assuré, salarié, dirigeant", "var(--note)");
    s += `<line x1="252" y1="72" x2="388" y2="72" style="stroke:var(--ink-soft); stroke-width:1.8"/><polygon points="388,72 380,68 380,76" style="fill:var(--ink-soft)"/>`;
    s += `<text x="320" y="64" text-anchor="middle" ${S}>contrat, rémunération</text>`;
    s += `<line x1="388" y1="98" x2="252" y2="98" style="stroke:var(--ink-soft); stroke-width:1.8; stroke-dasharray:4 4"/><polygon points="252,98 260,94 260,102" style="fill:var(--ink-soft)"/>`;
    s += `<text x="320" y="116" text-anchor="middle" ${S}>effort, prudence : non observables</text>`;
    s += `<rect x="30" y="146" width="580" height="116" rx="8" style="fill:var(--paper-2); stroke:var(--line)"/>`;
    s += `<text x="50" y="170" ${T}>Le dilemme de l’assurance et de l’incitation</text>`;
    s += `<text x="50" y="194" ${S}>Assurer complètement l’agent le protège, mais supprime son intérêt à faire attention.</text>`;
    s += `<text x="50" y="212" ${S}>Lui faire supporter une partie du risque l’incite à l’effort, mais lui fait porter un risque qu’il redoute.</text>`;
    s += `<text x="50" y="236" style="fill:var(--ink); font:600 12px Manrope, sans-serif">Le contrat optimal est un compromis : franchise, quote-part, bonus, malus, rémunération variable.</text>`;
    return s;
  })(), "La théorie des contrats, développée notamment par Bengt Holmström et Oliver Hart (prix Nobel 2016), montre qu’on ne peut pas à la fois assurer parfaitement quelqu’un et l’inciter parfaitement à l’effort quand cet effort est invisible.", "Schéma principal-agent avec contrat et effort non observable");

  OEC.notices["alea-moral"] = {
    essentiel: [
      "L’aléa moral désigne le changement de comportement d’une personne protégée contre un risque, lorsque celui qui supporte le risque ne peut pas observer ce comportement : l’assuré devient moins prudent, le salarié moins appliqué, la banque plus téméraire.",
      "Ce n’est pas forcément de la malhonnêteté : c’est la réaction normale à des incitations modifiées. Il découle d’une asymétrie d’information qui survient après la signature du contrat, alors que la sélection adverse survient avant.",
      "Il explique les franchises, les quotes-parts, les bonus et malus, la rémunération variable, la surveillance, et la réglementation des banques. Il oblige à arbitrer entre protection et incitation."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : l’assurance rend-elle imprudent ?", html: `
<p>Au XIXe siècle, les assureurs anglais parlent de « moral hazard » pour désigner les risques liés au caractère de l’assuré : un commerçant endetté dont l’entrepôt, bien assuré, prend feu de manière suspecte ; un propriétaire qui néglige l’entretien d’une maison couverte au-delà de sa valeur. L’expression a alors une coloration morale, presque religieuse : elle vise la malhonnêteté.</p>
<p>En 1963, Kenneth Arrow publie un article fondateur sur l’économie de la santé, où il note que l’assurance maladie pousse à consommer davantage de soins. En 1968, Mark Pauly lui répond qu’il ne s’agit pas d’une faute morale, mais d’un comportement économique rationnel : si une consultation devient gratuite, il est normal d’en faire davantage, même pour des troubles mineurs. Le terme perd sa connotation morale et devient un concept central de l’économie de l’information.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le risque transféré</h4>
<p>Une assurance transfère un risque de l’assuré vers l’assureur. C’est utile : l’assuré, qui redoute le risque, préfère payer une prime certaine plutôt que s’exposer à une perte incertaine. Mais une fois assuré, il supporte une partie moindre des conséquences de ses actes.</p>
<h4>2. Le comportement change</h4>
<p>Si le coût d’un accident, d’une maladie ou d’un vol est couvert, l’intérêt à l’éviter diminue. On ferme moins bien sa porte, on conduit un peu plus vite, on consulte un médecin pour un simple rhume. Ce n’est pas forcément conscient ni malhonnête : c’est une réaction aux incitations.</p>
<h4>3. L’action cachée</h4>
<p>Le problème n’existe que si l’assureur ne peut pas observer et contrôler ce comportement. S’il pouvait vérifier chaque soir que la porte est fermée, il pourrait l’exiger dans le contrat. C’est une asymétrie d’information qui survient après la signature : on parle d’« action cachée », par opposition à l’« information cachée » de la sélection adverse (<a href="#c-asymetrie-information">voir asymétrie d’information</a>).</p>
<h4>4. Le principal et l’agent</h4>
<p>Le même problème se retrouve dès qu’une personne, le « principal », confie une tâche à une autre, l’« agent », dont il ne peut pas observer l’effort. L’employeur et le salarié, les actionnaires et le dirigeant, le patient et le médecin, les électeurs et l’élu. Michael Jensen et William Meckling (1976) montrent que les dirigeants d’entreprise, qui ne supportent qu’une partie des conséquences de leurs décisions, peuvent poursuivre leurs propres intérêts aux dépens des actionnaires.</p>
${agent}
<h4>5. Les remèdes</h4>
<p>Pour limiter l’aléa moral, on fait supporter à l’agent une partie du risque : franchises et quotes-parts dans l’assurance, bonus-malus dans l’assurance automobile, rémunération liée aux résultats pour les salariés et les dirigeants. On surveille : expertises, contrôles, rapports. On construit une relation de long terme, où la réputation compte. Holmström montre en 1979 qu’une bonne rémunération incitative doit dépendre de tous les indicateurs qui renseignent sur l’effort, et seulement de ceux-là.</p>
<h4>6. Les limites des incitations</h4>
<p>Les incitations ont des effets pervers. Une rémunération liée à un seul indicateur pousse à négliger tout le reste : c’est le problème « multitâche » étudié par Holmström et Paul Milgrom (1991). Un enseignant payé selon les résultats de ses élèves à un test peut enseigner pour le test plutôt que pour apprendre. Des bonus fondés sur les profits à court terme peuvent encourager des risques cachés à long terme.</p>
<h4>7. L’aléa moral bancaire</h4>
<p>Le cas le plus lourd de conséquences concerne les banques. L’assurance des dépôts, qui protège les épargnants, supprime leur intérêt à surveiller leur banque. Le soutien probable de l’État aux grandes banques en difficulté réduit l’intérêt de leurs créanciers à exiger de la prudence. Les banques peuvent alors prendre plus de risques, en gardant les gains en cas de succès et en laissant les pertes à la collectivité en cas d’échec (<a href="#c-preteur-dernier-ressort">voir prêteur en dernier ressort</a>).</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>L’expérience RAND</h4>
<p>Entre 1974 et 1982, la RAND Corporation mène aux États-Unis l’une des plus grandes expériences de l’histoire des sciences sociales. Quelque 2 750 ménages, soit près de 7 700 personnes, sont répartis au hasard entre des contrats d’assurance maladie plus ou moins généreux, de la gratuité totale à une participation de 95 % jusqu’à un plafond. Ceux qui bénéficient de soins gratuits dépensent environ 45 % de plus que ceux qui paient la plus forte participation, sans que leur état de santé moyen soit sensiblement meilleur, sauf pour certains groupes pauvres et malades. L’aléa moral est réel, et sa mesure a influencé la conception des franchises dans le monde entier.</p>
${rand}
<h4>La ceinture de sécurité</h4>
<p>En 1975, Sam Peltzman soutient que les normes de sécurité imposées aux voitures américaines à partir de 1966, dont les ceintures, ont conduit les conducteurs, se sentant mieux protégés, à rouler plus vite et plus dangereusement, si bien que les morts parmi les piétons et cyclistes auraient augmenté. Les études ultérieures trouvent que cette « compensation du risque » existe, mais qu’elle est loin d’annuler le gain de sécurité. L’effet Peltzman reste un exemple classique de l’aléa moral hors de l’assurance.</p>
<h4>La crise des caisses d’épargne américaines</h4>
<p>Dans les années 1980, les caisses d’épargne américaines, les « savings and loans », sont déréglementées alors que leurs dépôts restent garantis par l’État. Beaucoup, déjà en difficulté, se lancent dans des placements très risqués : si ça marche, elles sont sauvées ; sinon, l’assurance des dépôts paiera. Plus d’un millier font faillite entre 1986 et 1995, pour un coût de l’ordre de 120 milliards de dollars pour les contribuables. L’épisode est devenu l’illustration type de l’aléa moral bancaire.</p>` }
    ],
    cas: [
      { titre: "La quote-part de la LAMal", html: `
<p>Dans l’assurance maladie obligatoire suisse, l’assuré adulte paie une franchise annuelle, de 300 francs au minimum, puis une quote-part de 10 % des frais au-delà, plafonnée à 700 francs par an. Ce mécanisme vise directement l’aléa moral : en payant une partie de ses soins, l’assuré est incité à éviter les consultations inutiles. Le plafond protège contre les dépenses catastrophiques. Le débat suisse porte régulièrement sur le niveau de ces montants : les augmenter réduit les dépenses, mais peut pousser des personnes modestes à renoncer à des soins nécessaires, ce qui peut coûter plus cher plus tard. Des enquêtes indiquent qu’une part non négligeable de la population renonce à certains soins pour des raisons financières.</p>` },
      { titre: "Les bonus bancaires et la crise de 2008", html: `
<p>Avant 2008, beaucoup de traders et de dirigeants de banques recevaient des bonus calculés sur les profits de l’année. Des positions très risquées, qui rapportaient beaucoup tant que le marché montait, généraient des bonus élevés ; les pertes, survenues plus tard, n’étaient pas remboursées. Après la crise, plusieurs pays, dont la Suisse par l’intermédiaire de la FINMA, ont imposé que les rémunérations variables soient en partie différées et puissent être réduites en cas de pertes ultérieures (« malus » et récupération). C’est une application directe de la théorie des incitations.</p>` },
      { titre: "Le chômage et l’assurance chômage", html: `
<p>L’assurance chômage protège les salariés contre la perte de revenu, mais peut réduire l’intensité de la recherche d’emploi. De nombreuses études, comme celles de Rafael Lalive, Jan van Ours et Josef Zweimüller sur l’Autriche, montrent que la durée du chômage augmente avec la durée et le montant des indemnités, et que la sortie du chômage s’accélère juste avant la fin des droits. D’autres travaux soulignent que des indemnités plus longues permettent aussi de trouver des emplois mieux adaptés. La Suisse combine des indemnités relativement généreuses avec des obligations de recherche et des sanctions, une manière de concilier protection et incitation.</p>` }
    ],
    objections: `
<h4>1. Un concept trop extensible</h4>
<p>Certains critiques, comme l’économiste John Nyman, soutiennent que l’essentiel de la consommation de soins supplémentaire des assurés n’est pas un gaspillage : elle permet à des malades d’accéder à des traitements qu’ils ne pourraient pas payer. Qualifier tout cela d’aléa moral justifie de réduire la couverture au détriment de la santé.</p>
<h4>2. Les motivations intrinsèques</h4>
<p>Les incitations financières peuvent évincer les motivations intrinsèques. Bruno Frey et d’autres montrent que payer pour un comportement que les gens adoptaient par devoir peut le réduire. Les médecins, les enseignants, les chercheurs ne travaillent pas seulement pour l’argent.</p>
<h4>3. L’argument utilisé contre la protection sociale</h4>
<p>L’aléa moral est souvent invoqué pour réduire les protections sociales, assurance chômage, assurance maladie, aide sociale. Ses critiques soulignent que l’effet est en général modéré, et que la sécurité économique a aussi des bénéfices, comme la prise de risque entrepreneuriale ou la meilleure santé.</p>
<h4>4. L’aléa moral des sauvetages, un argument à double tranchant</h4>
<p>On reproche souvent aux sauvetages bancaires d’encourager l’imprudence future. Mais ne pas sauver peut provoquer une crise bien plus coûteuse, comme la faillite de Lehman Brothers en 2008 l’a montré. Le choix n’est pas entre aléa moral et absence d’aléa moral, mais entre différentes manières de le contenir.</p>`,
    ecoles: `
<p><b>Les assureurs du XIXe siècle</b> emploient l’expression dans un sens moral.</p>
<p><b>Kenneth Arrow</b> (1963) l’introduit dans l’économie de la santé ; <b>Mark Pauly</b> (1968) en fait un comportement rationnel.</p>
<p><b>Jensen et Meckling</b> (1976) l’appliquent à la gouvernance des entreprises.</p>
<p><b>Holmström</b>, <b>Hart</b> et <b>Milgrom</b> développent la théorie des contrats et des incitations.</p>
<p><b><a href="#eco-minsky">Minsky</a></b> et les critiques des sauvetages bancaires insistent sur l’aléa moral systémique.</p>
<p><b>Bruno Frey</b> et l’économie comportementale rappellent les limites des incitations financières.</p>`,
    source: {
      titre: "Mark Pauly, « The Economics of Moral Hazard: Comment », American Economic Review, 1968",
      texte: "La réponse à l’assurance médicale par une utilisation accrue des soins n’est pas le résultat d’une perversion morale, mais d’un comportement économique rationnel.",
      notes: `
<p><b>Une réponse à Arrow.</b> Arrow avait suggéré que l’État pourrait fournir une assurance maladie complète là où le marché échoue. Pauly répond que l’assurance complète n’est pas forcément optimale, même si elle était disponible, parce qu’elle augmente la consommation de soins au-delà de ce que les assurés seraient prêts à payer.</p>
<p><b>La dé-moralisation du concept.</b> En affirmant que l’aléa moral n’a rien de moral, Pauly le transforme en outil d’analyse neutre. Les économistes cessent de parler de fraude pour parler d’incitations.</p>
<p><b>La conséquence pratique.</b> Il en résulte que les franchises et les quotes-parts ne sont pas des punitions, mais des moyens de rapprocher la consommation de soins de leur coût réel. Les débats ultérieurs porteront sur le niveau souhaitable de cette participation.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que l’aléa moral ?",
        o: ["Une fraude à l’assurance", "Le changement de comportement d’une personne protégée contre un risque, quand ce comportement n’est pas observable", "Le refus d’assurer les malades", "Le fait que l’assureur connaisse mal le risque avant le contrat"], c: 1,
        e: "Ce n’est pas forcément de la malhonnêteté, mais une réaction aux incitations modifiées par la protection." },
      { q: "En quoi l’aléa moral diffère-t-il de la sélection adverse ?",
        o: ["L’aléa moral survient avant le contrat, la sélection adverse après", "L’aléa moral survient après le contrat (action cachée), la sélection adverse avant (information cachée)", "L’aléa moral concerne seulement les banques", "La sélection adverse concerne seulement la santé"], c: 1,
        e: "On parle d’action cachée dans un cas, d’information cachée dans l’autre." },
      { q: "Que montre l’expérience RAND sur l’assurance maladie ?",
        o: ["Que l’assurance n’a aucun effet sur les dépenses", "Que les assurés aux soins gratuits dépensent nettement plus sans être en moyenne en meilleure santé", "Que les franchises détériorent toujours la santé", "Que les assurés aux soins gratuits sont en bien meilleure santé"], c: 1,
        e: "Environ 45 % de dépenses en plus entre la gratuité et la participation de 95 %, sans différence moyenne marquée de santé." },
      { q: "Pourquoi la LAMal comporte-t-elle une quote-part de 10 % plafonnée à 700 francs par an ?",
        o: ["Pour financer les hôpitaux", "Pour inciter à éviter les soins inutiles tout en protégeant contre les dépenses catastrophiques", "Pour couvrir les frais administratifs des caisses", "Pour que les assurés paient la totalité de leurs soins"], c: 1,
        e: "La participation réduit l’aléa moral ; le plafond préserve la fonction d’assurance." },
      { q: "Qu’est-ce que le problème « multitâche » de Holmström et Milgrom ?",
        o: ["Un salarié qui a deux emplois", "Une rémunération fondée sur un seul indicateur pousse à négliger les autres aspects du travail", "Le fait de travailler trop", "Le fait qu’un salarié surveillé travaille toujours mieux"], c: 1,
        e: "Par exemple, un enseignant payé selon un test peut enseigner pour le test plutôt que pour apprendre." }
    ],
    transfert: { q: "Une plateforme de location de vélos ne fait rien payer aux utilisateurs pour les dégâts causés aux vélos. Que prévoit l’analyse de l’aléa moral ?",
      o: ["Les utilisateurs feront moins attention aux vélos, et les réparations augmenteront", "Les vélos seront mieux entretenus", "Aucun changement de comportement", "Les utilisateurs louent moins de vélos"], c: 0,
      e: "Quand on ne supporte pas les conséquences de ses actes, on fait moins attention." },
    ouverte: {
      q: "Faut-il augmenter la franchise minimale de la LAMal, aujourd’hui de 300 francs, pour freiner la hausse des primes ?",
      r: "La théorie de l’aléa moral et l’expérience RAND suggèrent qu’une participation plus élevée réduit la consommation de soins, et donc les coûts. Le Parlement suisse a d’ailleurs discuté à plusieurs reprises d’une hausse de la franchise minimale. Mais l’effet n’est pas uniforme : les personnes aux revenus modestes réduisent aussi des soins utiles, comme le suivi de maladies chroniques ou la prévention, ce qui peut entraîner plus tard des hospitalisations coûteuses. Les personnes à faible revenu bénéficient de réductions de primes, mais pas de réductions de franchise. Une hausse générale aurait donc un effet régressif. Certains économistes proposent plutôt de moduler la participation selon l’utilité des soins, en la supprimant pour les traitements dont l’efficacité est prouvée et en l’augmentant pour les autres, une approche dite « fondée sur la valeur »."
    },
    lectures: [
      ["Accessible", "Tim Harford, The Undercover Economist, 2005, chapitre sur l’assurance."],
      ["Accessible", "Amy Finkelstein, Moral Hazard in Health Insurance, 2015, essai court avec débats."],
      ["Intermédiaire", "Kenneth Arrow, « Uncertainty and the Welfare Economics of Medical Care », American Economic Review, 1963."],
      ["Intermédiaire", "Bengt Holmström, conférence Nobel « Pay for Performance and Beyond », 2016."],
      ["Recherche", "Willard Manning et al., « Health Insurance and the Demand for Medical Care: Evidence from a Randomized Experiment », American Economic Review, 1987 ; Michael Jensen et William Meckling, « Theory of the Firm », Journal of Financial Economics, 1976."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi celui dont les consultations sont gratuites va-t-il plus souvent chez le médecin ?",
          o: ["Parce qu’il ne supporte plus le coût de ses décisions", "Parce qu’il est malhonnête", "Parce qu’il est plus souvent malade", "Parce que les médecins l’y obligent"], c: 0,
          e: "Ce n’est pas de la fraude : c’est une réaction normale, l’aléa moral." },
        { q: "Comment limite-t-on en général l’aléa moral ?",
          o: ["En faisant payer une petite partie du risque, comme une franchise ou un bonus-malus", "En supprimant l’assurance", "En remboursant tout", "En interdisant les consultations"], c: 0,
          e: "Mais trop d’incitations peut pousser à renoncer à des soins utiles." }
      ],
      duree: 5,
      html: `
<h3>Quand on est protégé, on fait moins attention</h3>
<p>Celui qui a une bonne assurance vol ferme peut-être moins soigneusement sa porte. Celui dont les consultations sont gratuites va plus souvent chez le médecin. Ce n’est pas de la malhonnêteté : c’est une réaction normale quand on ne supporte plus les conséquences de ses actes. Les économistes appellent cela l’<b>aléa moral</b>.</p>
<h3>Une expérience grandeur nature</h3>
<p>Dans les années 1970, environ deux mille familles américaines reçoivent au hasard des assurances maladie plus ou moins généreuses. Celles qui ne paient rien dépensent nettement plus en soins que celles qui paient une partie, sans être en moyenne en meilleure santé.</p>
${rand}
<h3>Les remèdes</h3>
<p>Pour limiter l’aléa moral, on fait payer une petite partie du risque : les franchises des assurances maladie, par exemple en Suisse ou aux Pays-Bas, le bonus-malus de l’assurance auto, les primes liées aux résultats dans les entreprises. Mais trop d’incitations peut aussi pousser à renoncer à des soins utiles.</p>
<h3>À retenir</h3>
<p>Protéger et inciter sont deux objectifs en tension. La notice complète présente le mécanisme, les preuves et les cas des banques et du chômage.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Des assureurs du XIXe siècle à Arrow et Pauly : l’assurance rend-elle imprudent ?",
      raisonnement: "Sept étapes, du risque transféré à l’aléa moral bancaire.",
      preuves: "L’expérience RAND, la ceinture de sécurité, les caisses d’épargne américaines.",
      cas: "La quote-part de la LAMal, les bonus bancaires, l’assurance chômage.",
      objections: "Un concept trop extensible, les motivations intrinsèques, la protection sociale, les sauvetages.",
      ecoles: "Arrow et Pauly, Jensen et Meckling, Holmström et Hart, Minsky, Frey.",
      source: "Pauly, 1968 : non pas une perversion morale, mais un comportement rationnel.",
      quiz: "Six questions corrigées et une question sur la franchise minimale.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     32. BIENS PUBLICS
     ===================================================================== */
  const matrice = fig(345, (() => {
    const x0 = 170, y0 = 70, cw = 220, ch = 110;
    let s = `<text x="20" y="24" ${T}>Quatre types de biens selon deux critères</text>`;
    s += `<text x="${x0 + cw / 2}" y="${y0 - 12}" text-anchor="middle" ${T}>Rival</text><text x="${x0 + cw * 1.5}" y="${y0 - 12}" text-anchor="middle" ${T}>Non rival</text>`;
    s += `<text x="${x0 - 12}" y="${y0 + ch / 2 + 4}" text-anchor="end" ${T}>Exclusion possible</text><text x="${x0 - 12}" y="${y0 + ch * 1.5 + 4}" text-anchor="end" ${T}>Exclusion impossible</text>`;
    const cells = [[0, 0, "Biens privés", "pain, vêtements, voiture", "var(--note)"], [1, 0, "Biens de club", "cinéma, autoroute à péage, streaming", "var(--gold)"], [0, 1, "Biens communs", "pêcheries, pâturages, nappes d’eau", "var(--plum)"], [1, 1, "Biens publics purs", "défense, phare, digue, climat stable", "var(--serial)"]];
    cells.forEach(([c, r, t, ex, col]) => {
      const x = x0 + c * cw, y = y0 + r * ch;
      s += `<rect x="${x + 4}" y="${y + 4}" width="${cw - 8}" height="${ch - 8}" rx="10" style="fill:color-mix(in srgb, ${col} 14%, transparent); stroke:${col}; stroke-width:2"/>`;
      s += `<text x="${x + cw / 2}" y="${y + 46}" text-anchor="middle" style="fill:var(--ink); font:700 14px Manrope, sans-serif">${t}</text>`;
      s += `<text x="${x + cw / 2}" y="${y + 68}" text-anchor="middle" ${S}>${ex}</text>`;
    });
    s += `<text x="20" y="312" ${S}>Rival : ce que je consomme, tu ne peux plus le consommer.</text><text x="20" y="330" ${S}>Exclusion : on peut empêcher ceux qui ne paient pas d’en profiter.</text>`;
    return s;
  })(), "La classification issue de Paul Samuelson (1954), Richard Musgrave et James Buchanan (1965, pour les biens de club), et d’Elinor Ostrom pour les biens communs. Les frontières dépendent de la technique et du droit : une chaîne de télévision cryptée transforme un bien public en bien de club.", "Matrice deux sur deux des types de biens");

  const contrib = fig(290, (() => {
    const L = 80, R = 600, B = 240, X = (t) => L + (t - 1) * (R - L) / 9, Y = (v) => B - v * 1.8;
    const sans = [50, 46, 41, 37, 32, 28, 23, 19, 15, 10], avec = [55, 65, 72, 78, 82, 85, 87, 89, 90, 90];
    let s = `<text x="20" y="24" ${T}>Le jeu du bien public en laboratoire (schéma d’après Fehr et Gächter, 2000)</text>`;
    [0, 25, 50, 75, 100].forEach((v) => (s += `<line x1="${L}" y1="${Y(v)}" x2="${R}" y2="${Y(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end" ${M}>${v} %</text>`));
    for (let t = 1; t <= 10; t++) s += `<text x="${X(t)}" y="${B + 18}" text-anchor="middle" ${M}>${t}</text>`;
    s += `<text x="${R}" y="${B + 34}" text-anchor="end" ${M}>tour de jeu</text>`;
    const pl = (a, c) => `<polyline points="${a.map((v, i) => `${X(i + 1)},${Y(v)}`).join(" ")}" style="fill:none; stroke:${c}; stroke-width:2.6"/>` + a.map((v, i) => `<circle cx="${X(i + 1)}" cy="${Y(v)}" r="3" style="fill:${c}"/>`).join("");
    s += pl(sans, "var(--serial)") + pl(avec, "var(--note)");
    s += `<text x="${L + 10}" y="${Y(87)}" style="fill:var(--serial); font:700 12px Manrope, sans-serif">sans sanction : l’effort s’effondre</text>`;
    s += `<text x="${L + 10}" y="${Y(95)}" style="fill:var(--note); font:700 12px Manrope, sans-serif">avec possibilité de sanctionner</text>`;
    s += `<text x="${L - 8}" y="40" text-anchor="end" ${M}>part</text><text x="${L - 8}" y="52" text-anchor="end" ${M}>versée</text>`;
    return s;
  })(), "Chaque joueur reçoit une somme et choisit combien verser à un pot commun, qui est multiplié puis partagé entre tous. Le meilleur choix individuel est de ne rien verser ; le meilleur choix collectif est de tout verser. Sans sanction, les contributions déclinent ; quand on peut punir les profiteurs, à ses propres frais, elles se maintiennent. Valeurs arrondies.", "Deux courbes de contribution sur dix tours");

  OEC.notices["bien-public"] = {
    essentiel: [
      "Un bien public pur a deux propriétés : il est non rival, ce que l’un consomme ne prive pas l’autre, et non excluable, on ne peut pas empêcher quelqu’un d’en profiter. La défense nationale, un phare, une digue, la lutte contre une épidémie en sont des exemples.",
      "Comme chacun peut en profiter sans payer, chacun est tenté de laisser les autres le financer : c’est le problème du « passager clandestin ». Le marché tend donc à en produire trop peu, ce qui justifie souvent un financement par l’impôt.",
      "Mais la frontière est mouvante : la technique et le droit peuvent rendre un bien excluable, et des communautés, des mécènes ou des entreprises financent aussi des biens publics. Les grands défis actuels, climat, pandémies, savoir, sont des biens publics mondiaux."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : qui paie pour le phare ?", html: `
<p>Un phare guide tous les navires qui passent, et la lumière qu’il projette pour l’un ne manque pas à l’autre. Le gardien ne peut pas éteindre la lampe au passage d’un navire qui n’a pas payé. Comment un entrepreneur privé pourrait-il se faire rémunérer ? Pour des générations d’économistes, de John Stuart <a href="#eco-mill">Mill</a> à Paul <a href="#eco-samuelson">Samuelson</a>, le phare est l’exemple parfait d’un service que le marché ne peut pas fournir et que l’État doit financer.</p>
<p>En 1974, Ronald Coase publie un article malicieux, « Le phare en économie ». Il a fouillé l’histoire des phares anglais et découvert que beaucoup ont été construits et exploités par des particuliers, financés par des droits perçus dans les ports auprès des navires qui y accostaient. L’exemple préféré des manuels se révélait plus compliqué que prévu. Le débat qu’il ouvre éclaire toute la notion de bien public.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Deux propriétés</h4>
<p>En 1954, Paul Samuelson publie un article de trois pages qui définit rigoureusement les « biens de consommation collective ». Leur consommation par une personne ne diminue pas la quantité disponible pour les autres : ils sont non rivaux. Richard Musgrave y ajoute la non-exclusion : on ne peut pas empêcher ceux qui ne paient pas d’en bénéficier. Un pain est rival et excluable ; la protection d’une digue contre les crues ne l’est pas.</p>
<h4>2. Quatre familles de biens</h4>
<p>En croisant les deux critères, on obtient quatre familles. Les biens privés, rivaux et excluables. Les biens publics purs, ni l’un ni l’autre. Les biens de club, non rivaux mais excluables, comme une salle de cinéma ou un service de streaming, étudiés par James Buchanan en 1965. Les <a href="#c-biens-communs">biens communs</a>, rivaux mais difficilement excluables, comme les ressources halieutiques, étudiés par Elinor <a href="#eco-ostrom">Ostrom</a>.</p>
${matrice}
<h4>3. Le passager clandestin</h4>
<p>Puisqu’on ne peut pas exclure ceux qui ne paient pas, chacun a intérêt à laisser les autres payer. Si tous raisonnent ainsi, le bien n’est pas financé, ou trop peu, alors que tout le monde y gagnerait. Le philosophe David Hume l’avait observé dès 1739 : deux voisins peuvent s’entendre pour drainer un pré commun, mais mille voisins n’y parviendront pas, chacun cherchant à se décharger de la peine sur les autres.</p>
<h4>4. La règle de Samuelson</h4>
<p>Pour un bien privé, la quantité efficace est atteinte quand le prix égale le coût de la dernière unité, pour chaque acheteur. Pour un bien public, que tous consomment ensemble, il faut additionner ce que chacun serait prêt à payer pour une unité supplémentaire, et comparer cette somme au coût. Le problème est que personne n’a intérêt à révéler sa vraie disposition à payer s’il risque d’être taxé en proportion.</p>
<h4>5. Pourquoi l’État ?</h4>
<p>L’État peut surmonter le problème du passager clandestin parce qu’il peut obliger tout le monde à contribuer par l’impôt. Adam <a href="#eco-smith">Smith</a> lui assignait déjà, au livre V de la Richesse des nations, la défense, la justice et les ouvrages publics « qu’il n’est jamais de l’intérêt d’un individu ou d’un petit nombre d’individus d’ériger ». Mais l’État doit alors deviner les préférences des citoyens, et ses décisions sont soumises aux défaillances étudiées par la <a href="#c-choix-public">théorie des choix publics</a>.</p>
<h4>6. Les solutions non étatiques</h4>
<p>Le phare de Coase montre qu’on peut parfois rattacher un bien public à un bien excluable : le droit d’accoster dans un port. D’autres solutions existent : le mécénat, la publicité, qui finance la radio et la télévision gratuites, les contributions volontaires, les clubs, les communautés capables de s’organiser. La technique déplace aussi la frontière : le cryptage a rendu excluable la télévision, les logiciels libres ont rendu publics des programmes qui étaient privés.</p>
<h4>7. Le savoir et les biens publics mondiaux</h4>
<p>Une idée, une formule, une découverte scientifique sont non rivales : leur usage par l’un n’empêche pas l’usage par d’autres. Kenneth Arrow (1962), puis Paul Romer, en tirent que la recherche est sous-financée par le marché, d’où les brevets, qui créent une exclusion temporaire, et le financement public de la recherche fondamentale. À l’échelle mondiale, le climat, la stabilité financière, la lutte contre les pandémies sont des biens publics sans État mondial pour les financer, ce qui rend leur fourniture particulièrement difficile.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les expériences de laboratoire</h4>
<p>Le « jeu du bien public » est l’une des expériences les plus répétées de l’économie expérimentale. Les participants contribuent d’abord environ la moitié de leur dotation, bien plus que ne le prévoit la théorie du passager clandestin. Mais leurs contributions déclinent au fil des tours, car les coopérateurs se découragent face aux profiteurs. Ernst Fehr et Simon Gächter (2000) montrent que lorsque les participants peuvent punir les profiteurs, même à leurs propres frais, la coopération se maintient à un niveau élevé.</p>
${contrib}
<h4>Les phares de Coase revisités</h4>
<p>En 1993, David Van Zandt, puis en 2006 l’économiste française Élodie Bertrand, ont réexaminé l’histoire des phares. Les phares « privés » anglais fonctionnaient avec des privilèges accordés par la Couronne, qui leur donnaient le droit de percevoir des taxes obligatoires dans les ports. Le cas montre moins que le marché peut fournir des biens publics qu’il existe des formes mixtes, entre l’État et le marché.</p>
<h4>Le financement de la recherche</h4>
<p>Les études sur le rendement social de la recherche, qui comparent ce qu’elle rapporte à la société et ce qu’elle rapporte à l’entreprise qui l’a financée, trouvent régulièrement un rendement social deux à trois fois supérieur au rendement privé. C’est l’indice d’un sous-investissement du marché, cohérent avec la nature de bien public du savoir.</p>` }
    ],
    cas: [
      { titre: "La Rega et ses donateurs", html: `
<p>La Garde aérienne suisse de sauvetage, la Rega, effectue chaque année plus de dix mille interventions en hélicoptère et en avion-ambulance. Elle est financée en grande partie par plus de trois millions de donateurs, qui versent une contribution annuelle. En contrepartie, la Rega peut renoncer à facturer les frais d’intervention non couverts par les assurances. C’est une solution ingénieuse au problème du passager clandestin : le service est disponible pour tous, mais un lien est créé entre la contribution et un avantage individuel. Un modèle de bien quasi public financé hors de l’État, rendu possible par une forte confiance et un sentiment d’appartenance.</p>` },
      { titre: "No Billag et le service public audiovisuel", html: `
<p>En mars 2018, les Suisses rejettent par plus de 71 % des voix l’initiative « No Billag », qui voulait supprimer la redevance radio et télévision. Les partisans faisaient valoir que chacun devrait payer seulement les programmes qu’il regarde, comme un bien de club. Les opposants défendaient l’idée d’un service public audiovisuel en quatre langues, que le marché ne pourrait pas financer dans un petit pays plurilingue, et qui contribue à l’information des citoyens et à la cohésion nationale. Le débat portait au fond sur la question de savoir si l’information est un bien public.</p>` },
      { titre: "Le climat, bien public mondial", html: `
<p>Chaque pays qui réduit ses émissions de gaz à effet de serre en supporte le coût, mais le bénéfice, un climat plus stable, profite au monde entier. Chacun est tenté de laisser les autres faire l’effort. William Nordhaus, prix Nobel 2018, propose des « clubs climatiques » : des pays qui s’engagent à réduire leurs émissions et imposent des droits de douane à ceux qui ne participent pas, ce qui rend l’adhésion intéressante. Le mécanisme d’ajustement carbone aux frontières de l’Union européenne s’inspire en partie de cette logique.</p>` }
    ],
    objections: `
<h4>1. Le passager clandestin est moins fréquent que prévu</h4>
<p>Les expériences et l’observation montrent que beaucoup de gens contribuent volontairement aux biens publics : dons, bénévolat, Wikipédia, logiciels libres. La théorie sous-estime la réciprocité, le sens du devoir et la pression sociale. Ostrom a montré que des communautés gèrent durablement des ressources communes sans État.</p>
<h4>2. L’argument sert à tout</h4>
<p>Presque toute activité peut être présentée comme produisant des bénéfices collectifs : un stade, un aéroport, un festival. Les économistes libéraux reprochent à la notion d’être invoquée pour justifier des dépenses publiques qui profitent surtout à des groupes particuliers.</p>
<h4>3. La frontière est politique</h4>
<p>Ce qui est traité comme bien public relève souvent d’un choix collectif plus que d’une propriété technique. L’éducation, la santé, les transports publics sont rivaux et excluables, mais beaucoup de sociétés choisissent de les financer collectivement, pour des raisons d’équité ou d’externalités. Musgrave parlait de « biens tutélaires ».</p>
<h4>4. L’État peut mal évaluer les besoins</h4>
<p>Sans prix pour révéler les préférences, l’État risque de produire trop de certains biens publics et pas assez d’autres. La démocratie directe, les analyses coût-bénéfice, les évaluations contingentes sont des tentatives imparfaites pour pallier ce problème.</p>`,
    ecoles: `
<p><b>David Hume</b> (1739) décrit le problème du drainage du pré commun.</p>
<p><b><a href="#eco-smith">Smith</a></b> et <b><a href="#eco-mill">Mill</a></b> assignent à l’État les ouvrages publics que nul n’a intérêt à financer seul.</p>
<p><b>Knut Wicksell</b> et <b>Erik Lindahl</b> cherchent à lier contributions et bénéfices de chacun.</p>
<p><b><a href="#eco-samuelson">Samuelson</a></b> (1954) et <b>Musgrave</b> donnent la définition moderne.</p>
<p><b>Coase</b> (1974) conteste l’exemple du phare ; <b>Buchanan</b> étudie les biens de club.</p>
<p><b><a href="#eco-ostrom">Ostrom</a></b> montre les capacités d’auto-organisation des communautés ; <b>Nordhaus</b> traite du climat.</p>`,
    source: {
      titre: "David Hume, Traité de la nature humaine, 1739-1740, livre III, partie 2, section 7",
      texte: "Deux voisins peuvent s’accorder pour drainer une prairie qu’ils possèdent en commun ; […] mais il est très difficile, et même impossible, que mille personnes s’accordent pour une telle action.",
      notes: `
<p><b>Le cœur du problème.</b> Hume explique que deux voisins se surveillent mutuellement : chacun sait que s’il se dérobe, tout le projet échoue. Avec mille personnes, chacun espère que les autres feront l’effort et que sa propre défection passera inaperçue. C’est exactement le passager clandestin.</p>
<p><b>La solution de Hume.</b> Il en conclut que le gouvernement est nécessaire pour réaliser les « ponts, ports, remparts, canaux, flottes et armées », parce que les magistrats ont un intérêt direct à l’intérêt d’une partie considérable de leurs sujets et peuvent obliger chacun à contribuer.</p>
<p><b>Un texte d’avant l’économie politique.</b> Ce passage, écrit près de quarante ans avant la Richesse des nations par l’ami de Smith, contient l’essentiel de la théorie des biens publics qui ne sera formalisée qu’en 1954.</p>`
    },
    quiz: [
      { q: "Quelles sont les deux propriétés d’un bien public pur ?",
        o: ["Rival et non excluable", "Non rival et non excluable", "Produit par l’État et gratuit", "Rival et excluable"], c: 1,
        e: "La consommation de l’un ne prive pas l’autre, et on ne peut pas exclure ceux qui ne paient pas." },
      { q: "Un service de streaming payant est un exemple de…",
        o: ["bien public pur", "bien commun", "bien de club : non rival mais excluable", "bien privé rival"], c: 2,
        e: "Le film regardé par l’un reste disponible pour les autres, mais on peut exclure les non-abonnés." },
      { q: "Qu’est-ce que le problème du passager clandestin ?",
        o: ["Voyager sans billet en train", "La tentation de profiter d’un bien public sans contribuer à son financement", "Le vol de biens publics", "Le fait que l’État fasse payer un bien public trop cher"], c: 1,
        e: "Si chacun laisse les autres payer, le bien n’est pas financé, alors que tous y gagneraient." },
      { q: "Qu’a montré Coase en 1974 à propos des phares anglais ?",
        o: ["Qu’ils étaient tous publics", "Que beaucoup étaient privés, financés par des droits perçus dans les ports", "Qu’ils étaient gérés par des associations de pêcheurs bénévoles", "Qu’ils étaient financés par la publicité"], c: 1,
        e: "Des recherches ultérieures ont nuancé : ces droits étaient garantis par des privilèges de la Couronne." },
      { q: "Que montrent Fehr et Gächter (2000) dans le jeu du bien public ?",
        o: ["Que personne ne contribue jamais", "Que la possibilité de sanctionner les profiteurs maintient une coopération élevée", "Que les contributions augmentent toujours", "Que les sanctions découragent toute contribution"], c: 1,
        e: "Sans sanction, la coopération s’effondre au fil des tours ; avec sanction, elle se maintient." }
    ],
    transfert: { q: "Une ville lance une collecte volontaire pour installer un système d’alerte aux tsunamis qui protégera toute la côte. Quel risque principal menace le projet ?",
      o: ["Chacun peut espérer en profiter sans payer, et la collecte risque de ne pas suffire", "Le système sera trop utilisé", "Les habitants paieront trop", "Le système ne protégera que les donateurs"], c: 0,
      e: "C’est le problème du passager clandestin, typique des biens publics." },
    ouverte: {
      q: "Le modèle de la Rega, un service vital financé par des donateurs volontaires, pourrait-il être étendu à d’autres services publics en Suisse ?",
      r: "Le succès de la Rega repose sur des conditions particulières : un service très visible et apprécié, une forte identification nationale, et surtout un lien entre la contribution et un avantage personnel, la prise en charge des frais non couverts. Ces conditions transforment en partie un bien public en bien de club, ce qui limite le passager clandestin. Elles sont difficiles à reproduire pour des services moins spectaculaires ou dont le bénéfice est diffus, comme la défense, la recherche fondamentale ou l’entretien des infrastructures. Le financement volontaire pose aussi des questions d’équité : les services financés par des dons dépendent de la générosité et de la popularité, pas forcément des besoins. Il peut cependant compléter utilement le financement public pour des services où la motivation des contributeurs et le contrôle social sont forts, comme les sociétés de sauvetage, le patrimoine local ou certaines activités culturelles."
    },
    lectures: [
      ["Accessible", "Ronald Coase, « The Lighthouse in Economics », Journal of Law and Economics, 1974, très lisible."],
      ["Accessible", "Elinor Ostrom, La Gouvernance des biens communs, 1990, introduction."],
      ["Intermédiaire", "Paul Samuelson, « The Pure Theory of Public Expenditure », Review of Economics and Statistics, 1954, trois pages."],
      ["Intermédiaire", "William Nordhaus, « Climate Clubs », American Economic Review, 2015."],
      ["Recherche", "Ernst Fehr et Simon Gächter, « Cooperation and Punishment in Public Goods Experiments », American Economic Review, 2000 ; Richard Musgrave, The Theory of Public Finance, 1959."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi un phare est-il un bien public ?",
          o: ["Tous les bateaux en profitent en même temps, et on ne peut pas éteindre la lumière pour ceux qui n’ont pas payé", "Parce qu’il appartient à l’État", "Parce qu’il est gratuit à construire", "Parce qu’il n’éclaire qu’un seul bateau à la fois"], c: 0,
          e: "Non rival et non excluable." },
        { q: "Pourquoi beaucoup de biens publics sont-ils financés par l’impôt ?",
          o: ["Parce que l’impôt oblige chacun à contribuer, ce qui évite le passager clandestin", "Parce que les entreprises refusent de les produire par principe", "Parce qu’ils coûtent peu", "Parce que les citoyens ne les utilisent pas"], c: 0,
          e: "Sinon, chacun est tenté de laisser les autres payer." }
      ],
      duree: 5,
      html: `
<h3>Qui paie pour le phare ?</h3>
<p>Un phare éclaire tous les bateaux qui passent, et on ne peut pas éteindre la lumière pour ceux qui n’ont pas payé. Une digue protège toutes les maisons derrière elle. Ces biens, dont tout le monde profite en même temps sans qu’on puisse exclure personne, sont appelés des <b>biens publics</b>.</p>
<h3>Le passager clandestin</h3>
<p>Comme chacun peut en profiter sans payer, chacun est tenté de laisser les autres financer. Si tout le monde raisonne ainsi, le phare n’est jamais construit. Les économistes parlent du problème du passager clandestin. C’est pourquoi beaucoup de biens publics, comme la défense ou la protection contre les crues, sont financés par l’impôt, qui oblige chacun à contribuer.</p>
${matrice}
<h3>D’autres solutions</h3>
<p>L’État n’est pas la seule réponse. En Suisse, la Rega, qui secourt les blessés en hélicoptère, est financée en grande partie par plus de trois millions de donateurs. Les expériences montrent aussi que beaucoup de gens coopèrent volontairement, surtout quand les profiteurs risquent d’être sanctionnés.</p>
<h3>À retenir</h3>
<p>Les grands défis d’aujourd’hui, comme le climat, sont des biens publics mondiaux. La notice complète présente la théorie, les débats et les exemples.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Qui paie pour le phare ? De Mill et Samuelson à Coase.",
      raisonnement: "Sept étapes, des deux propriétés aux biens publics mondiaux.",
      preuves: "Le jeu du bien public, les phares revisités, le rendement social de la recherche.",
      cas: "La Rega, No Billag, le climat.",
      objections: "Moins de passagers clandestins que prévu, un argument qui sert à tout, une frontière politique, les besoins mal évalués.",
      ecoles: "Hume, Smith et Mill, Wicksell et Lindahl, Samuelson et Musgrave, Coase et Buchanan, Ostrom et Nordhaus.",
      source: "Hume, 1739 : deux voisins peuvent drainer un pré, pas mille.",
      quiz: "Six questions corrigées et une question sur le modèle de la Rega.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
