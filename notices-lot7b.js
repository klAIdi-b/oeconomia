/* Œconomia — notices longues, lot 7 (b) : coût d'opportunité, concurrence imparfaite */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const axes = (L, R, Top, B, yl, xl) => `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/><text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>${yl}</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>${xl}</text>`;

  /* =====================================================================
     37. COÛT D'OPPORTUNITÉ
     ===================================================================== */
  const fpp = fig(320, (() => {
    const L = 90, R = 540, Top = 50, B = 260, X = (a) => L + a * (R - L) / 10, Y = (b) => B - b * 19;
    const f = (a) => 10 * Math.sqrt(1 - (a / 9) ** 2);
    let s = `<text x="20" y="24" ${T}>La frontière des possibilités de production d’un pays (schéma)</text>`;
    s += axes(L, R, Top, B, "machines", "nourriture");
    let d = ""; for (let a = 0; a <= 9.0001; a += 0.25) d += `${a === 0 ? "M" : "L"} ${X(a)} ${Y(f(Math.min(a, 9)))} `;
    s += `<path d="${d}" style="fill:none; stroke:var(--plum); stroke-width:2.6"/>`;
    const P = [[3, f(3)], [6, f(6)]];
    s += `<circle cx="${X(P[0][0])}" cy="${Y(P[0][1])}" r="5" style="fill:var(--note)"/><circle cx="${X(P[1][0])}" cy="${Y(P[1][1])}" r="5" style="fill:var(--note)"/>`;
    s += `<text x="${X(3) + 8}" y="${Y(P[0][1]) - 8}" style="fill:var(--ink); font:600 11.5px Manrope, sans-serif">A</text><text x="${X(6) + 8}" y="${Y(P[1][1]) - 8}" style="fill:var(--ink); font:600 11.5px Manrope, sans-serif">B</text>`;
    s += `<line x1="${X(3)}" y1="${Y(P[0][1])}" x2="${X(3)}" y2="${Y(P[1][1])}" style="stroke:var(--serial); stroke-dasharray:3 3"/><line x1="${X(3)}" y1="${Y(P[1][1])}" x2="${X(6)}" y2="${Y(P[1][1])}" style="stroke:var(--note); stroke-dasharray:3 3"/>`;
    s += `<text x="${X(3) - 6}" y="${(Y(P[0][1]) + Y(P[1][1])) / 2 + 4}" text-anchor="end" style="fill:var(--serial); font:600 11px Manrope, sans-serif">machines sacrifiées</text>`;
    s += `<text x="${(X(3) + X(6)) / 2}" y="${Y(P[1][1]) + 16}" text-anchor="middle" style="fill:var(--note); font:600 11px Manrope, sans-serif">nourriture gagnée</text>`;
    s += `<circle cx="${X(3)}" cy="${Y(4)}" r="5" style="fill:var(--ink-soft)"/><text x="${X(3) + 8}" y="${Y(4) + 16}" ${S}>C : ressources inemployées</text>`;
    s += `<circle cx="${X(7.5)}" cy="${Y(8)}" r="5" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5"/><text x="${X(7.5) + 8}" y="${Y(8) + 4}" ${S}>D : hors d’atteinte</text>`;
    s += `<text x="20" y="306" ${S}>Passer de A à B : produire 3 de nourriture en plus coûte des machines. C’est le coût d’opportunité.</text>`;
    return s;
  })(), "Sur la frontière, on ne peut produire plus d’un bien qu’en renonçant à une partie de l’autre. La courbe est bombée : plus on se spécialise dans la nourriture, plus chaque unité supplémentaire coûte cher en machines, parce qu’on y affecte des ressources de moins en moins adaptées.", "Frontière des possibilités de production avec quatre points");

  const comptable = fig(280, (() => {
    const L = 40, sc = 1.4;
    let s = `<text x="20" y="24" ${T}>Bénéfice comptable et bénéfice économique (en milliers de francs)</text>`;
    const bar = (x, items, title) => {
      let y = 230, out = `<text x="${x + 80}" y="252" text-anchor="middle" ${T}>${title}</text>`;
      items.forEach(([v, lab, c]) => { const h = v * sc; y -= h; out += `<rect x="${x}" y="${y}" width="160" height="${h}" style="fill:${c}; stroke:var(--card)"/><text x="${x + 80}" y="${y + h / 2 + 4}" text-anchor="middle" style="fill:var(--paper); font:600 11.5px Manrope, sans-serif">${lab} ${v}</text>`; });
      return out;
    };
    s += bar(L + 20, [[80, "dépenses payées", "var(--ink-soft)"]], "Ce qu’elle dépense");
    s += bar(L + 220, [[80, "recettes", "var(--note)"]], "Ce qu’elle encaisse : 80 + 40");
    s += `<rect x="${L + 220}" y="${230 - 120 * sc}" width="160" height="${40 * sc}" style="fill:var(--gold); stroke:var(--card)"/><text x="${L + 300}" y="${230 - 100 * sc + 4}" text-anchor="middle" style="fill:var(--paper); font:600 11.5px Manrope, sans-serif">bénéfice comptable 40</text>`;
    s += `<rect x="${L + 420}" y="${230 - 55 * sc}" width="160" height="${55 * sc}" style="fill:var(--serial)"/><text x="${L + 500}" y="${230 - 27 * sc + 4}" text-anchor="middle" style="fill:var(--paper); font:600 11.5px Manrope, sans-serif">salaire auquel</text><text x="${L + 500}" y="${230 - 27 * sc + 20}" text-anchor="middle" style="fill:var(--paper); font:600 11.5px Manrope, sans-serif">elle renonce 55</text>`;
    s += `<text x="${L + 500}" y="252" text-anchor="middle" ${T}>Son meilleur autre choix</text>`;
    s += `<text x="20" y="272" ${S}>Bénéfice comptable : 40. Bénéfice économique : 40 − 55 = −15.</text>`;
    return s;
  })(), "Le comptable ne retient que les dépenses effectives. L’économiste ajoute ce à quoi l’on renonce : ici le salaire que l’indépendante pourrait toucher comme employée. Une activité peut être rentable sur le papier et coûteuse en réalité, ou l’inverse si elle procure d’autres satisfactions.", "Comparaison entre bénéfice comptable et bénéfice économique");

  OEC.notices["cout-opportunite"] = {
    essentiel: [
      "Le coût d’opportunité d’un choix est la valeur de la meilleure option à laquelle on renonce en le faisant. Une heure passée à étudier coûte l’heure de travail ou de loisir qu’on aurait pu avoir ; un franc dépensé ici ne peut plus l’être ailleurs.",
      "C’est peut-être la notion la plus fondamentale du raisonnement économique : elle oblige à considérer ce qu’on ne voit pas, selon la formule de Frédéric Bastiat. Elle explique l’avantage comparatif, la différence entre bénéfice comptable et bénéfice économique, et l’erreur des coûts irrécupérables.",
      "Les études de comportement montrent que nous négligeons souvent les coûts d’opportunité, surtout quand ils ne prennent pas la forme d’une dépense visible."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : la vitre cassée enrichit-elle la ville ?", html: `
<p>En 1850, l’économiste français Frédéric Bastiat publie un petit texte resté célèbre, Ce qu’on voit et ce qu’on ne voit pas. Il raconte l’histoire d’un gamin qui casse la vitre d’un commerçant. Les badauds se consolent : au moins, cela fait marcher le commerce, puisque le vitrier va gagner six francs. Bastiat admet que c’est ce qu’on voit. Mais il demande de regarder ce qu’on ne voit pas : avec ces six francs, le commerçant aurait acheté une paire de souliers ou un livre. Le vitrier gagne ce que le cordonnier perd, et la ville compte une vitre de moins.</p>
<p>Bastiat vient d’illustrer ce qu’on appellera le coût d’opportunité : la valeur de ce à quoi l’on renonce. Le terme anglais, « opportunity cost », apparaît sous la plume de l’Américain David Green en 1894, et l’Autrichien Friedrich von Wieser en fait un pilier de la théorie économique. C’est aujourd’hui la première notion enseignée dans presque tous les cours d’introduction.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La rareté impose des choix</h4>
<p>Le temps, l’argent, les terres, les compétences sont limités. Choisir une chose, c’est renoncer à une autre. Le coût réel d’un choix n’est donc pas seulement ce qu’on paie, mais ce qu’on aurait pu faire de mieux à la place avec les mêmes ressources.</p>
<h4>2. La meilleure option sacrifiée</h4>
<p>Le coût d’opportunité ne correspond pas à l’ensemble des options abandonnées, mais à la meilleure d’entre elles. Si, au lieu d’aller au cinéma, j’aurais pu lire, dormir ou travailler, le coût de la séance est la valeur de la meilleure de ces trois options, en plus du prix du billet.</p>
<h4>3. Le temps a un prix</h4>
<p>Une partie importante des coûts d’opportunité ne passe pas par de l’argent. Faire soi-même sa déclaration d’impôts plutôt que de payer un fiduciaire coûte des heures qu’on aurait pu consacrer à autre chose. Faire la queue pour un produit gratuit n’est pas gratuit. C’est pourquoi les personnes dont le temps est très bien rémunéré achètent souvent des services qui leur en font gagner.</p>
<h4>4. Bénéfice comptable et bénéfice économique</h4>
<p>Le comptable d’une entreprise retient les dépenses effectivement payées. L’économiste ajoute les coûts implicites : le salaire auquel renonce l’entrepreneur qui travaille pour lui-même, le rendement qu’aurait rapporté son capital placé ailleurs. Une entreprise peut afficher un bénéfice comptable et une perte économique.</p>
${comptable}
<h4>5. Les coûts irrécupérables</h4>
<p>À l’inverse, les dépenses déjà faites et qu’on ne peut pas récupérer ne sont pas un coût d’opportunité pour la décision présente : quoi qu’on fasse, elles sont perdues. Il ne faut donc pas en tenir compte. Continuer un projet parce qu’on y a déjà beaucoup investi est une erreur fréquente, appelée « sophisme des coûts irrécupérables », ou « erreur du Concorde ».</p>
<h4>6. La frontière des possibilités de production</h4>
<p>À l’échelle d’un pays, le coût d’opportunité se représente par la frontière des possibilités de production : toutes les combinaisons de biens qu’on peut produire avec les ressources et les techniques disponibles. Sur la frontière, produire plus d’un bien oblige à produire moins d’un autre. À l’intérieur, des ressources sont inemployées, comme pendant une récession : on peut alors produire plus de tout sans rien sacrifier.</p>
${fpp}
<h4>7. L’avantage comparatif</h4>
<p>C’est le coût d’opportunité qui fonde l’<a href="#c-avantage-comparatif">avantage comparatif</a> de Ricardo : un pays a intérêt à produire le bien qu’il sacrifie le moins pour obtenir, même s’il est moins efficace que ses voisins dans tous les domaines. Le même raisonnement explique la répartition des tâches dans un ménage ou une entreprise.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Nous oublions ce que nous ne voyons pas</h4>
<p>Shane Frederick et ses coauteurs (2009) proposent de choisir entre deux baladeurs numériques, l’un de plus grande capacité, l’autre moins cher de 100 dollars. Quand on précise simplement que le second choix « laisse 100 dollars en poche », la part de ceux qui le choisissent double à peu près. Le rappel d’une évidence suffit à changer les décisions : les coûts d’opportunité ne viennent pas spontanément à l’esprit.</p>
<h4>Le billet de ski</h4>
<p>Hal Arkes et Catherine Blumer (1985) demandent à des participants d’imaginer qu’ils ont acheté deux séjours de ski incompatibles, l’un à 100 dollars, l’autre, plus agréable, à 50 dollars, sans pouvoir se faire rembourser. Une majorité choisit le séjour le plus cher, le moins agréable, parce qu’il a coûté plus. Les deux dépenses étant de toute façon perdues, le choix rationnel serait le séjour préféré. Le sophisme des coûts irrécupérables est bien réel.</p>
<h4>Le Concorde</h4>
<p>Dès les années 1960, les gouvernements britannique et français savent que l’avion supersonique Concorde ne sera probablement jamais rentable. Ils poursuivent pourtant le programme, en partie parce que des sommes considérables ont déjà été dépensées et que l’abandon serait politiquement humiliant. L’expression « erreur du Concorde » est employée dès 1976 par les biologistes Richard Dawkins et Tamsin Carlisle, puis adoptée par les économistes et les psychologues.</p>` }
    ],
    cas: [
      { titre: "Apprentissage ou gymnase ?", html: `
<p>En Suisse, environ deux tiers des jeunes choisissent une formation professionnelle après l’école obligatoire. Pour une famille, le coût d’une voie gymnasiale puis universitaire ne se limite pas aux frais d’études, modestes dans les hautes écoles publiques suisses : il comprend surtout le salaire d’apprenti, puis les années de salaire de professionnel qualifié auxquels l’étudiant renonce. Ce coût d’opportunité explique en partie l’attrait de l’apprentissage, d’autant que la maturité professionnelle et les hautes écoles spécialisées permettent de reprendre des études plus tard. Les études de rendement de l’éducation tiennent compte de ces salaires sacrifiés.</p>` },
      { titre: "La fin de la conscription aux États-Unis", html: `
<p>À la fin des années 1960, les États-Unis recrutent encore une partie de leurs soldats par la conscription, en les payant bien moins que ce qu’ils gagneraient dans la vie civile. Une commission présidentielle, à laquelle participe Milton Friedman, montre en 1970 que ce faible coût budgétaire est trompeur : le vrai coût d’un soldat appelé inclut ce à quoi lui et la société renoncent, ses études, son métier, son revenu. Une armée de métier, payée au prix du marché, ferait apparaître ce coût dans le budget au lieu de le faire supporter aux jeunes appelés. La conscription prend fin en 1973. Le débat revient régulièrement dans les pays qui envisagent de rétablir un service obligatoire.</p>` },
      { titre: "La gratuité qui coûte", html: `
<p>Les files d’attente devant les distributions gratuites ou les soldes illustrent un coût d’opportunité caché : le temps. Gary Becker, prix Nobel 1992, a fait du temps une ressource centrale de son analyse des ménages : les activités qui prennent beaucoup de temps, comme cuisiner, deviennent relativement plus coûteuses quand les salaires montent, ce qui explique en partie l’essor des repas préparés et des services à domicile.</p>` }
    ],
    objections: `
<h4>1. Tout n’est pas comparable</h4>
<p>Le coût d’opportunité suppose qu’on peut comparer les options sur une même échelle. Mais comment comparer une heure avec ses enfants et une heure de travail rémunéré ? Les choix de vie ne se réduisent pas toujours à un calcul.</p>
<h4>2. La subjectivité du coût</h4>
<p>Pour les économistes autrichiens, comme Ludwig von <a href="#eco-mises">Mises</a> ou James Buchanan, le coût d’opportunité est purement subjectif : il existe dans l’esprit de celui qui choisit, au moment du choix, et ne peut pas être mesuré de l’extérieur. Cela limite fortement les calculs de coûts par des experts ou par l’État.</p>
<h4>3. L’argument du chômage</h4>
<p>Quand des ressources sont inemployées, comme en récession, le coût d’opportunité d’une dépense peut être nul : les ouvriers employés à réparer la vitre seraient restés au chômage. Keynes répondrait à Bastiat qu’en dépression, la vitre cassée peut effectivement relancer l’activité (<a href="#c-multiplicateur">voir multiplicateur</a>).</p>
<h4>4. Les coûts irrécupérables ne sont pas toujours à ignorer</h4>
<p>Abandonner un projet peut nuire à la réputation, à la crédibilité ou à l’apprentissage. Persévérer peut parfois se justifier pour des raisons stratégiques, même si les dépenses passées, en elles-mêmes, ne doivent pas compter.</p>`,
    ecoles: `
<p><b>Frédéric Bastiat</b> (1850) illustre l’idée avec la vitre cassée.</p>
<p><b>David Green</b> (1894) forge l’expression anglaise.</p>
<p><b>Friedrich von Wieser</b> en fait le fondement de la théorie du coût de l’école autrichienne.</p>
<p><b><a href="#eco-mises">Mises</a></b> et <b>Buchanan</b> insistent sur son caractère subjectif.</p>
<p><b>Gary Becker</b> l’applique au temps et à la vie familiale.</p>
<p><b><a href="#eco-kahneman">Kahneman</a></b>, Thaler et Frederick montrent que nous le négligeons souvent.</p>`,
    source: {
      titre: "Frédéric Bastiat, Ce qu’on voit et ce qu’on ne voit pas, 1850, introduction",
      texte: "Entre un mauvais et un bon Économiste, voici toute la différence : l’un s’en tient à l’effet visible ; l’autre tient compte et de l’effet qu’on voit et de ceux qu’il faut prévoir.",
      notes: `
<p><b>Un pamphlet.</b> Bastiat, député libéral et polémiste, écrit ce texte peu avant sa mort, en 1850. Il le dirige contre les arguments en faveur des dépenses publiques, des protections douanières et des subventions, qui mettent en avant les emplois visibles et oublient les emplois détruits ailleurs.</p>
<p><b>La suite du texte.</b> Bastiat enchaîne une douzaine d’exemples : la vitre cassée, le licenciement de soldats, les impôts, les théâtres subventionnés, les travaux publics, les machines. Chaque fois, il oppose ce qu’on voit à ce qu’on ne voit pas.</p>
<p><b>Ce que Keynes y répondrait.</b> L’argument de Bastiat suppose que les ressources sont pleinement employées. Quand elles ne le sont pas, ce qu’on ne voit pas peut être l’inactivité, et non une autre dépense.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que le coût d’opportunité d’un choix ?",
        o: ["Le prix payé", "La valeur de la meilleure option à laquelle on renonce", "La somme de toutes les options abandonnées", "Les coûts déjà dépensés"], c: 1,
        e: "Seule la meilleure alternative sacrifiée compte." },
      { q: "Que veut montrer Bastiat avec l’histoire de la vitre cassée ?",
        o: ["Que les vitriers sont utiles", "Que la dépense du commerçant chez le vitrier se fait au détriment d’une autre dépense qu’on ne voit pas", "Qu’il faut casser des vitres pour relancer l’économie", "Que l’assurance devrait rembourser les vitres cassées"], c: 1,
        e: "Ce qu’on voit, le travail du vitrier ; ce qu’on ne voit pas, les souliers qui ne seront pas achetés." },
      { q: "Une indépendante encaisse 120, dépense 80, et pourrait gagner 55 comme salariée. Quel est son bénéfice économique ?",
        o: ["40", "−15", "55", "120"], c: 1,
        e: "Bénéfice comptable : 120 − 80 = 40 ; moins le salaire sacrifié de 55 : −15." },
      { q: "Pourquoi faut-il ignorer les coûts irrécupérables dans une décision ?",
        o: ["Parce qu’ils sont faibles", "Parce qu’ils sont perdus quoi qu’on décide, et ne changent donc pas la comparaison des options", "Parce qu’ils sont déjà inclus dans le prix de vente", "Parce qu’ils sont remboursés"], c: 1,
        e: "Continuer un projet parce qu’on y a beaucoup investi est l’erreur du Concorde." },
      { q: "Que représente un point à l’intérieur de la frontière des possibilités de production ?",
        o: ["Une production impossible", "Une situation où des ressources sont inemployées", "La production maximale", "Une production qui n’utilise que du capital"], c: 1,
        e: "On peut alors produire plus de tout sans rien sacrifier, comme en récession." }
    ],
    transfert: { q: "Une ville offre un terrain qu’elle possède « gratuitement » pour construire un stade, au lieu de le vendre 20 millions à un promoteur. Que dirait un économiste du coût de ce terrain pour la ville ?",
      o: ["Il coûte 20 millions : c’est ce à quoi la ville renonce en ne le vendant pas", "Il ne coûte rien, puisque la ville le possède déjà", "Il coûte seulement l’entretien futur du stade", "Il rapporte de l’argent, puisque le stade attire des visiteurs"], c: 0,
      e: "Le coût d’opportunité d’un bien qu’on possède est ce qu’on pourrait en tirer autrement." },
    ouverte: {
      q: "L’Allemagne, l’Autriche ou la Suisse forment une grande partie de leurs jeunes par l’apprentissage plutôt que par l’université. Le coût d’opportunité des études longues justifie-t-il ce modèle ?",
      r: "Le coût d’opportunité des études longues est réel : plusieurs années de salaire sacrifiées, que le supplément de revenu futur doit compenser. Dans les pays où l’apprentissage débouche sur des emplois bien rémunérés et où des passerelles vers l’enseignement supérieur existent, ce coût est particulièrement élevé, ce qui rend l’apprentissage rationnel pour beaucoup de jeunes. Mais la comparaison ne se limite pas aux salaires : les études universitaires ouvrent d’autres carrières, d’autres réseaux et une capacité d’adaptation qui peut compter face aux changements technologiques. Certains économistes s’inquiètent que les compétences très spécifiques de l’apprentissage deviennent obsolètes plus vite ; d’autres soulignent que la formation continue limite ce risque. Le faible chômage des jeunes dans ces pays plaide en faveur du modèle, mais il repose sur des entreprises disposées à former, difficiles à reproduire ailleurs."
    },
    lectures: [
      ["Accessible", "Frédéric Bastiat, Ce qu’on voit et ce qu’on ne voit pas, 1850, texte court et vivant."],
      ["Accessible", "Henry Hazlitt, L’Économie politique en une leçon, 1946, chapitres 1 et 2."],
      ["Intermédiaire", "James Buchanan, Cost and Choice, 1969."],
      ["Intermédiaire", "Hal Arkes et Catherine Blumer, « The Psychology of Sunk Cost », Organizational Behavior and Human Decision Processes, 1985."],
      ["Recherche", "Shane Frederick et al., « Opportunity Cost Neglect », Journal of Consumer Research, 2009 ; Gary Becker, « A Theory of the Allocation of Time », Economic Journal, 1965."]
    ],
    decouvrir: {
      questions: [
        { q: "Pour un étudiant, que comprend le vrai coût de ses études ?",
          o: ["Les frais d’inscription, mais aussi le salaire qu’il aurait gagné en travaillant à la place", "Seulement les frais d’inscription", "Seulement le prix des livres", "Rien, si les études sont gratuites"], c: 0,
          e: "Le vrai coût d’un choix, c’est la meilleure chose qu’on aurait pu faire à la place." },
        { q: "Qu’est-ce que l’« erreur du Concorde » ?",
          o: ["Continuer un projet raté parce qu’on y a déjà beaucoup investi", "Arrêter un projet trop tôt", "Investir dans les avions", "Refuser tout projet risqué"], c: 0,
          e: "L’argent déjà dépensé et perdu ne doit pas influencer la décision." }
      ],
      duree: 5,
      html: `
<h3>Ce qu’on ne voit pas</h3>
<p>Un gamin casse la vitre d’un commerçant. « Au moins, cela fait travailler le vitrier », disent les passants. En 1850, Frédéric Bastiat leur répond : avec cet argent, le commerçant se serait acheté des souliers. Le vitrier gagne ce que le cordonnier perd, et il y a une vitre de moins. Il faut voir ce à quoi on renonce : c’est le <b>coût d’opportunité</b>.</p>
<h3>Tout choix a un prix caché</h3>
<p>Une heure passée devant un écran, c’est une heure qu’on ne passe pas à dormir, à lire ou à travailler. Le vrai coût d’un choix, c’est la meilleure chose qu’on aurait pu faire à la place. Pour un étudiant, le coût des études comprend le salaire qu’il aurait gagné en commençant un apprentissage.</p>
${fpp}
<h3>Oublier le passé</h3>
<p>À l’inverse, l’argent déjà dépensé et perdu ne doit pas influencer une décision : continuer un projet raté parce qu’on y a beaucoup investi est une erreur classique, dite « erreur du Concorde ».</p>
<h3>À retenir</h3>
<p>Choisir, c’est renoncer. La notice complète présente le raisonnement, les erreurs fréquentes et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "La vitre cassée de Bastiat, 1850.",
      raisonnement: "Sept étapes, de la rareté à l’avantage comparatif.",
      preuves: "L’oubli du coût d’opportunité, le billet de ski, le Concorde.",
      cas: "Apprentissage ou gymnase, la fin de la conscription américaine, la gratuité qui coûte.",
      objections: "L’incomparable, la subjectivité, le chômage, les coûts passés.",
      ecoles: "Bastiat, Green, Wieser, Mises et Buchanan, Becker, Kahneman et Thaler.",
      source: "Bastiat, 1850 : l’effet qu’on voit et ceux qu’il faut prévoir.",
      quiz: "Six questions corrigées, dont un calcul, et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     38. CONCURRENCE IMPARFAITE
     ===================================================================== */
  const structures = fig(290, (() => {
    const L = 210, W = 340;
    const rows = [["Monopole", 45, 55, "var(--serial)"], ["Duopole de Cournot", 60, 40, "var(--gold)"], ["Concurrence", 90, 10, "var(--note)"]];
    let s = `<text x="20" y="24" ${T}>Même marché, trois structures : quantité vendue et prix (exemple chiffré)</text>`;
    s += `<text x="${L}" y="50" ${M}>quantité vendue</text><text x="${L + W + 30}" y="50" ${M}>prix</text>`;
    rows.forEach(([n, q, p, c], i) => {
      const y = 62 + i * 62, w = q / 90 * W;
      s += `<text x="${L - 12}" y="${y + 22}" text-anchor="end" ${T}>${n}</text>`;
      s += `<rect x="${L}" y="${y}" width="${w}" height="34" rx="4" style="fill:${c}"/>`;
      s += `<text x="${L + w - 8}" y="${y + 22}" text-anchor="end" style="fill:var(--paper); font:700 12.5px 'JetBrains Mono', monospace">${q}</text>`;
      s += `<text x="${L + W + 30}" y="${y + 22}" style="fill:var(--ink); font:700 14px 'JetBrains Mono', monospace">${p}</text>`;
    });
    s += `<text x="20" y="262" ${S}>Demande : prix = 100 − quantité. Coût de production : 10 par unité.</text>`;
    s += `<text x="20" y="278" ${S}>Le monopole vend moins et plus cher ; deux concurrents font déjà baisser le prix ; la concurrence le ramène au coût.</text>`;
    return s;
  })(), "Calcul classique. Le monopole choisit la quantité qui maximise son profit (45), deux entreprises qui choisissent chacune leur quantité selon le modèle de Cournot en produisent ensemble 60, et la concurrence parfaite pousse la production jusqu’à ce que le prix égale le coût (90).", "Barres comparant monopole, duopole et concurrence");

  const plage = fig(240, (() => {
    const L = 60, R = 580, y = 110;
    let s = `<text x="20" y="24" ${T}>La plage de Hotelling (1929) : deux marchands de glaces</text>`;
    s += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" style="stroke:var(--gold); stroke-width:8; stroke-linecap:round; opacity:.5"/>`;
    for (let i = 0; i <= 20; i++) s += `<circle cx="${L + i * (R - L) / 20}" cy="${y + 26}" r="4" style="fill:var(--ink-soft); opacity:.5"/>`;
    s += `<text x="${L}" y="${y + 52}" ${M}>baigneurs répartis sur toute la plage</text>`;
    const st = (x, c, t) => `<rect x="${x - 14}" y="${y - 34}" width="28" height="24" rx="4" style="fill:${c}"/><text x="${x}" y="${y - 42}" text-anchor="middle" style="fill:${c}; font:700 11.5px Manrope, sans-serif">${t}</text>`;
    s += st(L + (R - L) * 0.25, "var(--ink-soft)", "A, au départ") + st(L + (R - L) * 0.75, "var(--ink-soft)", "B, au départ");
    s += st(L + (R - L) * 0.5 - 18, "var(--serial)", "") + st(L + (R - L) * 0.5 + 18, "var(--note)", "");
    s += `<text x="${(L + R) / 2}" y="${y - 50}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">à la fin : A et B au centre</text>`;
    s += `<text x="20" y="200" ${S}>Chacun se rapproche pour gagner les clients du milieu ; ceux des extrémités marchent plus loin.</text>`;
    s += `<text x="20" y="218" ${S}>Le même mécanisme explique la ressemblance des produits concurrents et le recentrage des partis politiques.</text>`;
    return s;
  })(), "Harold Hotelling montre que la concurrence entre deux vendeurs peut conduire à une différenciation trop faible : ils s’installent côte à côte au centre, alors que le placement aux quarts de la plage minimiserait la distance moyenne des clients. La concurrence imparfaite ne porte pas seulement sur les prix, mais aussi sur l’emplacement et les caractéristiques des produits.", "Plage avec deux vendeurs qui convergent vers le centre");

  OEC.notices["concurrence-imparfaite"] = {
    essentiel: [
      "La concurrence imparfaite désigne tous les marchés où les entreprises ne sont pas de simples « preneuses de prix » : monopole, oligopole avec quelques grandes entreprises, concurrence monopolistique entre produits différenciés.",
      "Une entreprise qui a du pouvoir de marché fixe un prix supérieur à son coût, vend moins qu’en concurrence, et réalise des profits durables. Les oligopoles agissent stratégiquement, en anticipant les réactions de leurs rivaux, ce qu’étudie la théorie des jeux.",
      "C’est la règle plutôt que l’exception dans les économies modernes. Le droit de la concurrence cherche à limiter les abus, les cartels et les fusions dangereuses, tout en tenant compte du fait que les profits récompensent aussi l’innovation."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : que fait une entreprise qui peut fixer son prix ?", html: `
<p>Dans le modèle de l’<a href="#c-offre-demande">offre et de la demande</a>, aucune entreprise ne peut influencer le prix : si elle le relève, ses clients partent chez les concurrents. C’est vrai pour un producteur de blé parmi des milliers. Mais ce ne l’est pas pour un fabricant de médicaments protégé par un brevet, pour l’unique compagnie d’électricité d’une région, ou pour les deux ou trois grandes enseignes qui dominent la distribution d’un pays.</p>
<p>En 1838, le mathématicien français Antoine-Augustin Cournot imagine le propriétaire d’une source d’eau minérale unique, puis deux propriétaires de sources concurrentes, et calcule les prix qu’ils fixeraient. Près d’un siècle plus tard, en 1933, Joan <a href="#eco-robinson">Robinson</a> à Cambridge et Edward Chamberlin à Harvard publient la même année deux ouvrages qui font de la concurrence imparfaite un domaine central de l’économie.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le monopole</h4>
<p>Un monopole fait face à toute la demande du marché. S’il veut vendre davantage, il doit baisser son prix, sur toutes les unités vendues. Il a donc intérêt à vendre moins, plus cher, que ne le ferait un marché concurrentiel. Le prix dépasse le coût, les profits sont durables, et une partie des échanges utiles n’a pas lieu : c’est la perte sèche du monopole (<a href="#c-surplus">voir surplus</a>).</p>
<h4>2. La marge et l’élasticité</h4>
<p>Abba Lerner propose en 1934 de mesurer le pouvoir de marché par l’écart entre le prix et le coût marginal, rapporté au prix. Cet écart est d’autant plus grand que la demande est peu élastique, c’est-à-dire que les clients ont peu d’alternatives. Un médicament vital sans équivalent peut être vendu très au-dessus de son coût de fabrication.</p>
<h4>3. L’oligopole et la stratégie</h4>
<p>Quand quelques entreprises dominent un marché, chacune doit tenir compte des réactions des autres. Dans le modèle de Cournot, chaque entreprise choisit sa quantité en anticipant celle des autres ; le prix se situe entre celui du monopole et celui de la concurrence. En 1883, Joseph Bertrand objecte que si les entreprises fixent leurs prix plutôt que leurs quantités, deux concurrents suffisent à ramener le prix au coût. La vérité dépend des capacités de production et de la nature du produit.</p>
${structures}
<h4>4. La tentation de l’entente</h4>
<p>Les entreprises d’un oligopole gagneraient davantage en s’entendant pour se comporter comme un monopole. Adam <a href="#eco-smith">Smith</a> l’avait remarqué dès 1776. Mais chaque membre d’un cartel est tenté de tricher en vendant un peu plus, ce qui rend les ententes instables : c’est un dilemme du prisonnier. Les cartels survivent surtout quand les membres peuvent surveiller et punir les tricheurs, comme lorsque les marchés sont transparents et les interactions répétées.</p>
<h4>5. La concurrence monopolistique</h4>
<p>Chamberlin étudie les marchés où de nombreuses entreprises vendent des produits différenciés : restaurants, vêtements, marques de bière. Chacune a un petit monopole sur son produit, mais la concurrence des substituts proches et l’entrée de nouveaux concurrents limitent ses profits à long terme. La publicité et la marque servent à renforcer la différenciation.</p>
<h4>6. La différenciation et l’emplacement</h4>
<p>En 1929, Harold Hotelling montre que la concurrence peut aussi porter sur l’emplacement et les caractéristiques des produits. Deux marchands de glaces sur une plage finissent côte à côte au centre, pour ne pas laisser l’autre gagner les clients du milieu. Ce modèle explique la ressemblance des produits concurrents, et sera transposé à la politique, où les partis se rapprochent de l’électeur médian.</p>
${plage}
<h4>7. Le monopsone</h4>
<p>Le pouvoir de marché peut aussi se trouver du côté des acheteurs. Joan Robinson nomme « monopsone », en 1933, la situation d’un acheteur unique ou dominant, par exemple le principal employeur d’une petite ville. Il peut payer ses salariés moins que la valeur de ce qu’ils produisent, et embauche moins qu’un marché concurrentiel. En 1994, David Card et Alan Krueger comparent les fast-foods du New Jersey, où le salaire minimum vient d’augmenter, et ceux de la Pennsylvanie voisine, et ne trouvent pas de baisse de l’emploi. Le monopsone est l’une des explications avancées : face à un employeur dominant, un salaire minimum modéré peut augmenter à la fois les salaires et l’emploi. Le résultat reste discuté, mais le pouvoir des employeurs sur le marché du travail est devenu un thème majeur de recherche.</p>
<h4>8. Les barrières à l’entrée</h4>
<p>Le pouvoir de marché ne dure que si de nouveaux concurrents ne peuvent pas entrer facilement. Les barrières peuvent être légales, comme les brevets et les licences, techniques, comme les économies d’échelle et les <a href="#c-rendements-croissants">rendements croissants</a>, ou stratégiques. Dans l’économie numérique, les effets de réseau, plus un service a d’utilisateurs, plus il est attractif, créent des positions dominantes très difficiles à contester.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La hausse des marges</h4>
<p>Jan De Loecker, Jan Eeckhout et Gabriel Unger (2020) estiment, à partir des comptes des entreprises cotées américaines, que la marge moyenne du prix sur le coût marginal serait passée d’environ 21 % en 1980 à environ 61 % en 2016. La hausse est concentrée dans les entreprises les plus grandes. Ces chiffres sont discutés, notamment sur la mesure des coûts, mais de nombreux travaux confirment une hausse de la concentration et du pouvoir de marché dans plusieurs secteurs.</p>
<h4>Les cartels découverts</h4>
<p>Les autorités de la concurrence découvrent régulièrement des cartels, souvent grâce aux programmes de clémence qui accordent l’immunité au premier membre qui dénonce l’entente. Le cartel international des vitamines, démantelé à la fin des années 1990, impliquait les plus grands producteurs mondiaux et a conduit à des amendes de plusieurs centaines de millions de dollars. Les études estiment que les cartels relèvent en moyenne les prix de 20 à 25 %.</p>
<h4>Les fusions et les prix</h4>
<p>Les études qui examinent les prix après des fusions, dans les compagnies aériennes, les hôpitaux ou la grande distribution, trouvent souvent des hausses de prix, surtout quand la fusion réduit fortement le nombre de concurrents sur un marché local. Ces résultats ont conduit à renforcer le contrôle des fusions dans plusieurs pays.</p>` }
    ],
    cas: [
      { titre: "La Suisse, pays des cartels", html: `
<p>Jusqu’aux années 1990, la Suisse est souvent décrite comme un « pays des cartels » : de nombreux secteurs étaient organisés par des accords de prix et de répartition des marchés, tolérés par la loi. La loi sur les cartels de 1995 renforce la concurrence, et sa révision, en vigueur depuis 2004, permet à la Commission de la concurrence, la COMCO, d’infliger des amendes directes. En 2012, la COMCO condamne BMW à une amende de 156 millions de francs pour avoir empêché les importations parallèles de voitures depuis l’Espace économique européen ; la décision est confirmée par le Tribunal fédéral. Les prix suisses élevés, l’« îlot de cherté », restent un sujet récurrent de débat sur la concurrence.</p>` },
      { titre: "Standard Oil", html: `
<p>À la fin du XIXe siècle, la Standard Oil de John D. Rockefeller contrôle environ 90 % du raffinage du pétrole aux États-Unis, grâce à des économies d’échelle, mais aussi à des rabais secrets négociés avec les chemins de fer et à des baisses de prix ciblées pour éliminer les concurrents. Le Sherman Act de 1890, première grande loi antitrust, permet à la Cour suprême d’ordonner en 1911 le démantèlement de la Standard Oil en 34 sociétés. Les historiens discutent encore de savoir si la Standard Oil faisait vraiment monter les prix, qui avaient beaucoup baissé pendant sa domination.</p>` },
      { titre: "Google Shopping", html: `
<p>En 2017, la Commission européenne inflige à Google une amende de 2,42 milliards d’euros pour avoir favorisé son propre service de comparaison de prix dans les résultats de son moteur de recherche, au détriment des comparateurs concurrents. La décision est confirmée par la Cour de justice de l’Union européenne en 2024. Le cas illustre les difficultés du droit de la concurrence face aux plateformes numériques, gratuites pour les utilisateurs, dont le pouvoir de marché repose sur les effets de réseau et le contrôle des données.</p>` }
    ],
    objections: `
<h4>1. Les profits récompensent l’innovation</h4>
<p>Joseph <a href="#eco-schumpeter">Schumpeter</a> soutient que les positions dominantes temporaires sont le moteur de l’innovation : sans perspective de profits élevés, aucune entreprise n’investirait dans la recherche (<a href="#c-destruction-creatrice">voir destruction créatrice</a>). Le pouvoir de marché d’aujourd’hui est souvent la récompense d’une innovation d’hier, menacée par celle de demain.</p>
<h4>2. Les marchés contestables</h4>
<p>William Baumol montre en 1982 qu’un marché dominé par une seule entreprise peut se comporter de manière presque concurrentielle si l’entrée et la sortie sont faciles : la simple menace d’un concurrent discipline les prix. Le nombre d’entreprises n’est donc pas le bon indicateur.</p>
<h4>3. L’école de Chicago</h4>
<p>Les économistes de Chicago, comme Robert Bork et George Stigler, estiment que beaucoup de positions dominantes s’expliquent par l’efficacité, et que le droit de la concurrence doit se limiter à protéger les consommateurs contre les hausses de prix, non à protéger les concurrents. Cette approche a dominé la politique américaine à partir des années 1980.</p>
<h4>4. Le retour des critiques</h4>
<p>À l’inverse, un courant récent, dont Lina Khan, présidente de la Federal Trade Commission américaine de 2021 à 2025, est une figure, juge que l’approche de Chicago a laissé se former des géants trop puissants, en particulier dans le numérique, et que le pouvoir économique concentré menace aussi les salaires, l’innovation et la démocratie.</p>`,
    ecoles: `
<p><b><a href="#eco-smith">Smith</a></b> se méfie des ententes entre marchands.</p>
<p><b>Cournot</b> (1838) et <b>Bertrand</b> (1883) modélisent le monopole et le duopole.</p>
<p><b><a href="#eco-robinson">Joan Robinson</a></b> et <b>Chamberlin</b> (1933) fondent la théorie de la concurrence imparfaite.</p>
<p><b>Hotelling</b> étudie la différenciation ; <b>Nash</b> et la théorie des jeux donnent les outils de l’oligopole.</p>
<p><b><a href="#eco-schumpeter">Schumpeter</a></b> défend le rôle des monopoles temporaires dans l’innovation.</p>
<p><b>Stigler</b>, <b>Bork</b> et l’école de Chicago, puis <b>Jean Tirole</b> et la nouvelle économie industrielle, renouvellent l’analyse.</p>`,
    source: {
      titre: "Adam Smith, Recherches sur la nature et les causes de la richesse des nations, 1776, livre I, chapitre 10",
      texte: "Il est rare que des gens du même métier se trouvent réunis, fût-ce pour quelque partie de plaisir ou pour se distraire, sans que la conversation finisse par quelque conspiration contre le public, ou par quelque machination pour faire hausser les prix.",
      notes: `
<p><b>Le défenseur du marché, méfiant envers les marchands.</b> Smith, souvent présenté comme l’apôtre du laissez-faire, se méfie profondément des commerçants et des manufacturiers, qu’il soupçonne de chercher à restreindre la concurrence à leur profit.</p>
<p><b>La suite du texte.</b> Smith ajoute qu’il est impossible d’empêcher ces réunions par une loi compatible avec la liberté, mais que la loi ne devrait au moins rien faire pour les faciliter, et encore moins pour les rendre nécessaires, comme le faisaient les corporations.</p>
<p><b>Une citation fondatrice.</b> Cette phrase est devenue la devise implicite des autorités de la concurrence, qui la citent régulièrement pour justifier la lutte contre les cartels.</p>`
    },
    quiz: [
      { q: "Pourquoi un monopole vend-il moins qu’un marché concurrentiel ?",
        o: ["Parce qu’il produit mal", "Parce que pour vendre davantage, il devrait baisser son prix sur toutes les unités, ce qui réduit son profit", "Parce que ses coûts de production sont plus élevés", "Parce qu’il manque de clients"], c: 1,
        e: "Il choisit la quantité qui maximise son profit, inférieure à celle de la concurrence." },
      { q: "Dans l’exemple chiffré (prix = 100 − quantité, coût de 10), quel est le prix de monopole ?",
        o: ["10", "40", "55", "100"], c: 2,
        e: "Le monopole produit 45 unités, vendues au prix de 100 − 45 = 55." },
      { q: "Pourquoi les cartels sont-ils souvent instables ?",
        o: ["Parce qu’ils sont trop petits", "Parce que chaque membre est tenté de tricher en vendant davantage", "Parce que les consommateurs les boycottent", "Parce que les prix baissent toujours"], c: 1,
        e: "C’est un dilemme du prisonnier : l’intérêt collectif contredit l’intérêt individuel." },
      { q: "Que montre le modèle de la plage de Hotelling ?",
        o: ["Que deux concurrents s’installent aux deux extrémités pour se partager la clientèle", "Que deux concurrents tendent à s’installer côte à côte au centre, et à proposer des produits semblables", "Que la concurrence fait toujours baisser les prix", "Que les monopoles sont efficaces"], c: 1,
        e: "Le même mécanisme explique le recentrage des partis politiques." },
      { q: "Pour quel motif la COMCO a-t-elle condamné BMW en 2012 ?",
        o: ["Pour pollution", "Pour avoir empêché les importations parallèles de voitures vers la Suisse", "Pour fraude fiscale", "Pour publicité mensongère"], c: 1,
        e: "Cloisonner le marché suisse permettait de maintenir des prix plus élevés qu’à l’étranger." }
    ],
    transfert: { q: "Dans une région, une seule entreprise fournit l’internet à haut débit. Une deuxième entreprise obtient le droit de s’installer. Que prévoit l’analyse de la concurrence imparfaite ?",
      o: ["Les prix baissent et les quantités vendues augmentent", "Les prix montent, car il y a deux entreprises à rémunérer", "Rien ne change, car un monopole fixe déjà le juste prix", "La qualité baisse forcément"], c: 0,
      e: "Quelques concurrents suffisent déjà à réduire le pouvoir de marché." },
    ouverte: {
      q: "Quelques entreprises dominent la recherche en ligne, les réseaux sociaux ou la vente en ligne. Faut-il les démanteler ?",
      r: "Plusieurs arguments plaident pour une action forte. Ces marchés présentent des effets de réseau puissants : plus une plateforme a d’utilisateurs, plus elle est attractive, ce qui rend la concurrence très difficile. Les géants rachètent souvent de jeunes concurrents prometteurs, et peuvent favoriser leurs propres services. En 2024, un juge américain a estimé que Google détenait un monopole illégal dans la recherche en ligne, et l’Union européenne impose depuis 2022 des obligations particulières aux plus grandes plateformes. D’autres économistes appellent à la prudence : ces services sont souvent gratuits pour les utilisateurs, ils financent beaucoup de recherche, et leur position peut être remise en cause par une nouvelle vague d’innovation, comme Schumpeter l’a décrit (<a href=\"#c-destruction-creatrice\">voir destruction créatrice</a>). Entre le démantèlement et le laisser-faire, le débat porte sur des règles d’interopérabilité, de portabilité des données et de contrôle des rachats."
    },
    lectures: [
      ["Accessible", "Thomas Philippon, The Great Reversal: How America Gave Up on Free Markets, 2019."],
      ["Accessible", "Jean Tirole, Économie du bien commun, 2016, chapitres sur la concurrence et le numérique."],
      ["Intermédiaire", "Joan Robinson, The Economics of Imperfect Competition, 1933, introduction."],
      ["Intermédiaire", "Harold Hotelling, « Stability in Competition », Economic Journal, 1929."],
      ["Recherche", "Jan De Loecker, Jan Eeckhout et Gabriel Unger, « The Rise of Market Power and the Macroeconomic Implications », Quarterly Journal of Economics, 2020 ; Antoine-Augustin Cournot, Recherches sur les principes mathématiques de la théorie des richesses, 1838, chapitres 5 et 7."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi un producteur de blé parmi des milliers ne peut-il pas choisir son prix ?",
          o: ["Parce que s’il le relève, ses clients achètent ailleurs", "Parce que l’État fixe le prix du blé", "Parce que son blé est de moins bonne qualité", "Parce que ses coûts sont trop élevés"], c: 0,
          e: "En concurrence parfaite, chacun prend le prix du marché comme une donnée." },
        { q: "Qu’est-ce qu’un cartel ?",
          o: ["Une entente secrète entre entreprises pour fixer les prix ou se partager le marché", "Une entreprise publique", "Une fusion autorisée", "Un syndicat de salariés"], c: 0,
          e: "Les cartels sont interdits ; Adam Smith s’en méfiait déjà en 1776." }
      ],
      duree: 5,
      html: `
<h3>Quand une entreprise fixe son prix</h3>
<p>Un producteur de blé parmi des milliers ne choisit pas son prix : s’il le relève, ses clients vont ailleurs. Mais l’unique fabricant d’un médicament, ou deux ou trois grandes enseignes qui dominent un marché, peuvent fixer leurs prix. C’est la <b>concurrence imparfaite</b>, la situation la plus fréquente dans l’économie réelle.</p>
<h3>Moins vendre, plus cher</h3>
<p>Une entreprise en monopole a intérêt à vendre moins et plus cher qu’un marché concurrentiel. Quelques concurrents suffisent déjà à faire baisser les prix. Et si les entreprises s’entendent secrètement, elles forment un cartel, interdit par la loi. Adam <a href="#eco-smith">Smith</a> s’en méfiait dès 1776.</p>
${structures}
<h3>Protéger la concurrence</h3>
<p>Les autorités de la concurrence surveillent les ententes et les abus de position dominante. En Suisse, la COMCO a par exemple condamné BMW à 156 millions de francs d’amende en 2012 pour avoir empêché l’importation de voitures moins chères. Mais les profits récompensent aussi l’innovation, ce qui rend l’équilibre délicat.</p>
<h3>À retenir</h3>
<p>Le pouvoir de marché fait monter les prix et réduit les quantités. La notice complète présente les modèles, les preuves et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Que fait une entreprise qui peut fixer son prix ? De Cournot à Robinson et Chamberlin.",
      raisonnement: "Huit étapes, du monopole au monopsone et aux barrières à l’entrée.",
      preuves: "La hausse des marges, les cartels découverts, les fusions et les prix.",
      cas: "La Suisse des cartels et l’amende de BMW, Standard Oil, Google Shopping.",
      objections: "Innovation, marchés contestables, école de Chicago, retour des critiques.",
      ecoles: "Smith, Cournot et Bertrand, Robinson et Chamberlin, Hotelling et Nash, Schumpeter, Chicago et Tirole.",
      source: "Smith, 1776 : une conspiration contre le public.",
      quiz: "Six questions corrigées, dont un calcul, et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
