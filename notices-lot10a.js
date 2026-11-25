/* Œconomia — notices longues, lot 10 (a) : élasticité */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:var(--ink-soft); stroke-width:1; stroke-dasharray:4 3"/>`;

  /* =====================================================================
     ÉLASTICITÉ
     ===================================================================== */
  /* deux courbes de demande, une même hausse de prix */
  const deuxCourbes = fig(300, (() => {
    const panneau = (ox, x1, y1, x2, y2, titre, sous, col) => {
      let s = `<text x="${ox + 120}" y="24" text-anchor="middle" ${T}>${titre}</text>`;
      s += `<line x1="${ox}" y1="250" x2="${ox}" y2="44" style="stroke:var(--ink); stroke-width:1.5"/><line x1="${ox}" y1="250" x2="${ox + 250}" y2="250" style="stroke:var(--ink); stroke-width:1.5"/>`;
      s += `<text x="${ox + 6}" y="54" ${S}>Prix</text><text x="${ox + 250}" y="242" text-anchor="end" ${S}>Quantité</text>`;
      s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:3"/>`;
      const at = (y) => Math.round(x1 + (y - y1) / (y2 - y1) * (x2 - x1));
      const q1 = at(170), q2 = at(120);
      s += dash(ox, 170, q1, 170) + dash(q1, 170, q1, 250) + dash(ox, 120, q2, 120) + dash(q2, 120, q2, 250);
      s += `<text x="${ox - 6}" y="174" text-anchor="end" ${S}>P₁</text><text x="${ox - 6}" y="124" text-anchor="end" ${S}>P₂</text>`;
      s += arrow(q1, 264, q2 + 4, 264, col);
      s += `<text x="${ox + 120}" y="290" text-anchor="middle" ${S}>${sous}</text>`;
      return s;
    };
    return panneau(50, 130, 50, 182, 250, "Demande peu élastique", "le prix monte, la quantité baisse à peine", "var(--note)")
         + panneau(370, 400, 100, 610, 190, "Demande élastique", "le prix monte, la quantité chute", "var(--plum)");
  })(), "Schéma. Une même hausse de prix, de P₁ à P₂, provoque une petite baisse de la quantité quand la demande est peu élastique (à gauche : essence, cigarettes, médicaments) et une forte baisse quand elle est élastique (à droite : une marque précise parmi d’autres).", "Deux courbes de demande, l’une raide et l’autre plate, face à la même hausse de prix");

  /* une échelle de valeurs */
  const echelle = fig(200, (() => {
    const X = (v) => v <= 1 ? 40 + v * 280 : Math.min(600, 320 + (v - 1) / 2 * 280);
    let s = `<text x="20" y="22" ${T}>Quelques ordres de grandeur (en valeur absolue)</text>`;
    s += `<rect x="40" y="92" width="280" height="16" rx="4" style="fill:var(--note); opacity:.25"/><rect x="320" y="92" width="280" height="16" rx="4" style="fill:var(--plum); opacity:.25"/>`;
    s += `<line x1="40" y1="100" x2="600" y2="100" style="stroke:var(--ink); stroke-width:1.5"/>`;
    const mark = (v, txt, y, up) => {
      const x = X(v);
      return `<line x1="${x}" y1="${up ? y + 4 : 108}" x2="${x}" y2="${up ? 92 : y - 12}" style="stroke:var(--ink-soft); stroke-width:1"/><circle cx="${x}" cy="100" r="4" style="fill:var(--ink)"/><text x="${x}" y="${y}" text-anchor="middle" ${S}>${txt}</text>`;
    };
    s += mark(0, "0", 128, false);
    s += mark(0.25, "essence, court terme ≈ 0,25", 72, true);
    s += mark(0.4, "tabac ≈ 0,4", 128, false);
    s += mark(0.6, "essence, long terme ≈ 0,6", 50, true);
    s += mark(1, "1 : élasticité unitaire", 128, false);
    s += mark(2.5, "une marque parmi d’autres", 72, true);
    s += `<text x="180" y="164" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">Inélastique</text><text x="180" y="182" text-anchor="middle" ${S}>une hausse du prix augmente la recette</text>`;
    s += `<text x="460" y="164" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">Élastique</text><text x="460" y="182" text-anchor="middle" ${S}>une hausse du prix diminue la recette</text>`;
    return s;
  })(), "D’après P. Goodwin, J. Dargay et M. Hanly (Transport Reviews, 2004) pour l’essence, et Banque mondiale (1999) pour le tabac dans les pays à revenu élevé. La valeur donnée pour une marque est illustrative : elle dépend du nombre de substituts proches.", "Échelle des élasticités-prix, de zéro à plus de deux");

  OEC.notices["elasticite"] = {
    essentiel: [
      "L’élasticité-prix de la demande mesure de combien la quantité demandée varie, en pour cent, quand le prix varie de 1 %. On la calcule en divisant la variation en pour cent de la quantité par la variation en pour cent du prix.",
      "Une demande est dite inélastique quand les acheteurs réagissent peu au prix (élasticité inférieure à 1 en valeur absolue), et élastique dans le cas contraire. Ce chiffre dit si une hausse de prix fait monter ou baisser la recette du vendeur, et qui supporte le poids d’une taxe.",
      "La même idée s’applique au revenu (élasticité-revenu), au prix d’un autre bien (élasticité croisée) et aux producteurs (élasticité de l’offre). C’est l’un des outils les plus utilisés de l’économie appliquée."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi certaines hausses de prix rapportent-elles et d’autres non ?", html: `
<p>Une compagnie de bus augmente ses tarifs de 10 %. Va-t-elle gagner plus d’argent ? Tout dépend de la réaction de ses clients. S’ils continuent presque tous à prendre le bus, la recette augmente. S’ils se rabattent sur le vélo ou la voiture, elle peut baisser. La <a href="#c-offre-demande">loi de la demande</a> dit seulement que la quantité baisse quand le prix monte ; elle ne dit pas de combien.</p>
<p>Dès la fin du XVIIe siècle, l’Anglais Gregory King remarque qu’une mauvaise récolte de blé fait monter son prix bien plus que la quantité ne diminue : les agriculteurs peuvent gagner davantage les mauvaises années. Antoine Augustin Cournot décrit en 1838 la sensibilité de la demande au prix. Alfred <a href="#eco-marshall">Marshall</a> lui donne en 1890 le nom qu’on utilise encore : l’élasticité.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Raisonner en pour cent</h4>
<p>On compare des variations en pour cent, et non en francs ou en unités. Cela permet de comparer le marché du pain et celui des voitures, ou un prix en francs et un prix en euros. Si le prix des billets augmente de 10 % et que le nombre de voyages baisse de 3 %, l’élasticité vaut −3 ÷ 10 = <b>−0,3</b>. Elle est presque toujours négative ; on parle souvent de sa valeur absolue, ici 0,3.</p>
${deuxCourbes}
<h4>2. Lire le chiffre</h4>
<p>Une élasticité de 0 signifie que la quantité ne bouge pas du tout. Entre 0 et 1, la demande est <b>inélastique</b> : la quantité réagit moins que le prix. Égale à 1, elle est <b>unitaire</b>. Au-delà de 1, la demande est <b>élastique</b> : la quantité réagit plus que le prix.</p>
<h4>3. Ce qui rend une demande élastique</h4>
<p>Quatre éléments jouent. L’existence de <b>substituts</b> : on renonce facilement à une marque de café, beaucoup moins au café en général. La <b>nécessité</b> du bien : on achète ses médicaments presque quel que soit leur prix. La <b>part du budget</b> : le prix du sel compte peu, celui du loyer beaucoup. Et le <b>temps</b> : face à une hausse de l’essence, on roule un peu moins la première année, puis on change de voiture ou de logement les années suivantes.</p>
<h4>4. Élasticité et recette</h4>
<p>La recette du vendeur est le prix multiplié par la quantité. Si la demande est inélastique, une hausse du prix fait monter la recette, parce que la quantité baisse moins que le prix ne monte. Si elle est élastique, la hausse fait baisser la recette. C’est pourquoi une entreprise qui a de nombreux concurrents hésite à augmenter ses prix, alors que l’État peut taxer lourdement le tabac sans voir fondre ses recettes.</p>
${echelle}
<h4>5. L’élasticité-revenu</h4>
<p>On peut mesurer de la même façon la réaction de la demande au revenu. En 1857, le statisticien allemand Ernst Engel observe que plus une famille est riche, plus la part de son budget consacrée à la nourriture est faible. L’alimentation est un bien <b>normal</b> (on en achète un peu plus quand le revenu augmente), les voyages lointains sont souvent un bien <b>de luxe</b> (la dépense augmente plus vite que le revenu), et certains produits bon marché sont des biens <b>inférieurs</b> (on en achète moins quand on devient plus riche).</p>
<h4>6. L’élasticité croisée</h4>
<p>Elle mesure la réaction de la demande d’un bien au prix d’un autre. Positive, les deux biens sont des <b>substituts</b> : quand le bus devient plus cher, on loue plus de vélos. Négative, ce sont des <b>compléments</b> : quand le forfait de ski augmente, on loue moins de skis.</p>
<h4>7. L’élasticité de l’offre et le poids des taxes</h4>
<p>Les producteurs aussi réagissent plus ou moins au prix. Quand l’État pose une taxe, elle est supportée surtout par le côté du marché le moins élastique, celui qui a le moins de solutions de rechange, quelle que soit la personne qui la verse au fisc. C’est ce qu’on appelle l’incidence fiscale (<a href="#c-surplus">voir surplus et perte sèche</a>).</p>
<p class="ex-revoir">Fiche méthode : <a href="#methode-elasticite">Calculer et interpréter une élasticité</a></p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>L’essence, peu élastique à court terme</h4>
<p>Une revue de dizaines d’études publiée en 2004 par Phil Goodwin, Joyce Dargay et Mark Hanly trouve une élasticité-prix de la consommation de carburant d’environ −0,25 la première année et d’environ −0,6 à long terme. La différence vient du temps nécessaire pour changer de voiture, de trajet ou de lieu de vie.</p>
<h4>Le tabac et les jeunes</h4>
<p>Selon la Banque mondiale (1999), une hausse de 10 % du prix des cigarettes réduit la consommation d’environ 4 % dans les pays à revenu élevé, et d’environ 8 % dans les pays à revenu faible ou moyen. Les jeunes, qui ont moins d’argent et une habitude moins installée, réagissent davantage. La taxe est donc à la fois une source de recettes et un outil de santé publique.</p>
<h4>La loi d’Engel en Suisse</h4>
<p>L’enquête sur le budget des ménages de l’Office fédéral de la statistique confirme l’observation d’Engel : l’alimentation pèse en moyenne quelques pour cent seulement du revenu des ménages, mais une part nettement plus grande dans le budget des ménages modestes. Une hausse du prix des denrées frappe donc plus fort les plus pauvres.</p>
<h4>Mesurer n’est pas simple</h4>
<p>Pour estimer une élasticité, il ne suffit pas d’observer les prix et les quantités : les deux bougent en même temps parce que l’offre et la demande se déplacent ensemble. Les économistes cherchent des situations où seul le prix change, par exemple une hausse de taxe décidée pour d’autres raisons, une expérience contrôlée ou une comparaison entre régions voisines.</p>` }
    ],
    cas: [
      { titre: "L’impôt sur le tabac et l’AVS", html: `
<p>En Suisse, l’impôt sur le tabac rapporte environ deux milliards de francs par an à la Confédération, qui les affecte à l’AVS et à l’AI. Ce rendement s’explique par une demande peu élastique : à chaque hausse, la consommation baisse un peu, mais les recettes augmentent. Les autorités de santé y voient aussi un moyen de dissuader les jeunes de commencer, puisque leur demande est plus sensible au prix.</p>` },
      { titre: "Netflix, 2011", html: `
<p>En juillet 2011, Netflix annonce que l’abonnement combinant la location de DVD par la poste et la vidéo en ligne passera d’environ 10 à 16 dollars par mois, une hausse d’environ 60 %. Les clients disposent de substituts : vidéoclubs, autres services en ligne, télévision payante. En trois mois, l’entreprise perd environ 800 000 abonnés aux États-Unis, et son action chute fortement. Pour un service qui a des concurrents proches, la demande est élastique : la hausse de prix fait fuir une partie des clients.</p>` },
      { titre: "La récolte trop abondante", html: `
<p>La demande de produits agricoles de base est peu élastique : on ne mange pas deux fois plus de pommes de terre parce qu’elles sont moins chères. Une récolte exceptionnelle fait donc chuter les prix plus que les quantités n’augmentent, et le revenu des agriculteurs peut baisser les bonnes années. C’est l’une des raisons pour lesquelles de nombreux pays encadrent l’offre agricole, par des quotas, des stocks publics ou des aides. En 2020, l’Union européenne finance ainsi la distillation de vins excédentaires, dont la demande s’était effondrée avec la fermeture des restaurants.</p>` }
    ],
    objections: `
<h4>1. Une élasticité n’est pas une constante</h4>
<p>Le même produit peut avoir une demande peu élastique à bas prix et élastique à prix élevé. L’élasticité change aussi avec le temps, le revenu et les habitudes. Un chiffre unique, cité sans précision, peut donc tromper.</p>
<h4>2. Des comportements qui échappent au prix</h4>
<p>L’addiction, l’habitude ou les normes sociales rendent certaines demandes presque insensibles au prix. Et pour quelques biens, la demande peut même augmenter avec le prix : un bien de luxe recherché parce qu’il est cher (<a href="#c-consommation-ostentatoire">voir consommation ostentatoire</a>), ou un aliment de base dont les familles très pauvres achètent davantage quand son prix monte, faute de pouvoir se payer autre chose.</p>
<h4>3. Taxer ce qui est inélastique, est-ce juste ?</h4>
<p>En 1927, l’économiste britannique Frank Ramsey montre que, pour lever un montant donné en causant le moins de distorsions, il faut taxer davantage les biens dont la demande est inélastique. Mais ces biens sont souvent des biens nécessaires, qui pèsent plus lourd dans le budget des ménages modestes. L’efficacité et l’équité tirent alors dans des directions opposées, et c’est un choix politique de trancher.</p>`,
    ecoles: `
<p><b>Gregory King</b> et <b>Charles Davenant</b> observent, à la fin du XVIIe siècle, que le prix du blé varie bien plus que les récoltes.</p>
<p><b>Antoine Augustin Cournot</b> écrit la première fonction de demande en 1838.</p>
<p><b>Alfred <a href="#eco-marshall">Marshall</a></b> nomme et définit l’élasticité dans ses Principes d’économie politique (1890).</p>
<p><b>Ernst Engel</b> établit en 1857 la loi qui porte son nom sur la part de l’alimentation dans les budgets.</p>
<p><b>Frank Ramsey</b> en tire en 1927 une règle de taxation optimale.</p>
<p><b>Thorstein <a href="#eco-veblen">Veblen</a></b> décrit des biens recherchés parce qu’ils sont chers, qui échappent à la loi de la demande.</p>`,
    source: {
      titre: "Alfred Marshall, Principes d’économie politique, 1890, livre III, chapitre 4",
      texte: "L’élasticité de la demande sur un marché est grande ou petite selon que la quantité demandée augmente beaucoup ou peu pour une baisse donnée du prix, et diminue beaucoup ou peu pour une hausse donnée du prix.",
      notes: `
<p><b>Une définition encore en usage.</b> Marshall formule l’idée en mots, avant toute formule. Les manuels d’aujourd’hui la traduisent par un rapport de deux variations en pour cent.</p>
<p><b>Ce qu’il ajoute.</b> Il insiste sur le temps : la demande réagit plus fortement à long terme, quand les acheteurs ont pu changer leurs habitudes. Il note aussi que l’élasticité dépend du revenu de l’acheteur, et qu’une même hausse de prix ne pèse pas autant sur un riche que sur un pauvre.</p>
<p><b>Sa portée.</b> En donnant un nom et une mesure à cette sensibilité, Marshall transforme la loi de la demande en outil de prévision, utilisé pour les taxes, les tarifs publics ou les prix des entreprises.</p>`
    },
    quiz: [
      { q: "Le prix d’un produit augmente de 10 % et la quantité vendue baisse de 20 %. Que vaut l’élasticité-prix de la demande ?",
        o: ["−0,5", "−2", "−20", "+2"], c: 1,
        e: "−20 % ÷ 10 % = −2. En valeur absolue, elle est supérieure à 1 : la demande est élastique." },
      { q: "Si la demande d’un bien est inélastique, que fait une hausse de son prix à la recette du vendeur ?",
        o: ["Elle la fait baisser", "Elle la fait monter", "Elle ne change rien", "Elle dépend uniquement du coût de production"], c: 1,
        e: "La quantité baisse moins que le prix ne monte : le produit des deux augmente." },
      { q: "Pourquoi la demande d’essence est-elle plus élastique à long terme qu’à court terme ?",
        o: ["Parce que les prix baissent toujours avec le temps", "Parce qu’avec le temps, on peut changer de voiture, de trajet ou de logement", "Parce que l’essence devient un bien de luxe", "Parce que les automobilistes s’habituent au nouveau prix"], c: 1,
        e: "Les possibilités d’adaptation augmentent avec le temps." },
      { q: "L’élasticité croisée entre deux biens est positive. Que peut-on en conclure ?",
        o: ["Ce sont des compléments", "Ce sont des substituts", "Ce sont des biens inférieurs", "Ce sont des biens de luxe"], c: 1,
        e: "Quand l’un devient plus cher, on achète davantage de l’autre." },
      { q: "Qui supporte l’essentiel d’une taxe sur un marché ?",
        o: ["Toujours celui qui la verse au fisc", "Le côté du marché le moins élastique", "Le côté du marché le plus élastique", "Les deux côtés à parts égales, toujours"], c: 1,
        e: "Celui qui a le moins de solutions de rechange ne peut pas éviter la taxe." }
    ],
    transfert: { q: "Une ville augmente de 20 % le prix des tickets de métro, et le nombre de trajets baisse de 4 %. Que peut-on en conclure ?",
      o: ["La demande est élastique, et la recette de la compagnie baisse", "La demande est inélastique (environ −0,2), et la recette de la compagnie augmente", "L’élasticité vaut −5", "On ne peut rien dire sans connaître le prix de l’essence"], c: 1,
      e: "−4 % ÷ 20 % = −0,2 : la quantité réagit bien moins que le prix, donc la recette augmente." },
    ouverte: {
      q: "Faut-il taxer les boissons sucrées, comme le font le Mexique depuis 2014 ou le Royaume-Uni depuis 2018 ?",
      r: "L’élasticité aide à poser les termes du débat. La demande de boissons sucrées est en général plus élastique que celle du tabac, parce qu’il existe des substituts proches : l’eau, les boissons sans sucre ou moins sucrées. Une taxe peut donc réduire la consommation : au Mexique, les achats de boissons taxées ont baissé d’environ 6 % la première année, et davantage chez les ménages modestes ; au Royaume-Uni, de nombreux fabricants ont réduit la teneur en sucre de leurs boissons pour échapper à la taxe. Ses partisans y voient un moyen de prévenir l’obésité et le diabète, dont les coûts pèsent sur les systèmes de santé (<a href=\"#c-externalite\">voir externalité</a>). Ses adversaires soulignent qu’une telle taxe pèse plus lourd, en proportion, sur les ménages modestes, qu’elle restreint la liberté de choix, et que d’autres moyens existent, comme les engagements volontaires de l’industrie que privilégient plusieurs pays, dont la Suisse. Le débat porte à la fois sur l’efficacité de la mesure et sur le rôle de l’État dans les choix de consommation."
    },
    lectures: [
      ["Accessible", "N. Gregory Mankiw et Mark P. Taylor, Principes de l’économie, De Boeck, chapitre sur l’élasticité."],
      ["Accessible", "Banque mondiale, Maîtriser l’épidémie : l’État et les aspects économiques de la lutte contre le tabagisme, 1999."],
      ["Intermédiaire", "Alfred Marshall, Principes d’économie politique, 1890, livre III."],
      ["Intermédiaire", "Paul Krugman et Robin Wells, Microéconomie, De Boeck, chapitres sur l’élasticité et la fiscalité."],
      ["Recherche", "Phil Goodwin, Joyce Dargay et Mark Hanly, « Elasticities of road traffic and fuel consumption with respect to price and income: a review », Transport Reviews, 2004."],
      ["Recherche", "Frank Ramsey, « A Contribution to the Theory of Taxation », Economic Journal, 1927."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi la demande de cigarettes réagit-elle peu à une hausse de prix ?",
          o: ["Parce que les fumeurs ont peu de substituts et une forte habitude", "Parce que les cigarettes sont bon marché", "Parce que l’État fixe leur prix", "Parce que les fumeurs ne connaissent pas les prix"], c: 0,
          e: "Sans substitut proche et avec la dépendance, la quantité achetée baisse peu." },
        { q: "Une marque de café augmente fortement son prix, les autres non. Que se passe-t-il probablement ?",
          o: ["Ses ventes changent à peine", "Beaucoup de clients passent à une autre marque : la demande pour cette marque est élastique", "Toutes les marques vendent moins", "Ses ventes augmentent, car son café paraît meilleur"], c: 1,
          e: "Quand les substituts sont nombreux, les acheteurs réagissent fortement au prix." }
      ],
      duree: 5,
      html: `
<h3>Le prix monte : achète-t-on encore ?</h3>
<p>Quand le prix d’un produit augmente, on en achète moins. Mais de combien ? Pour l’essence ou les cigarettes, presque autant qu’avant. Pour une marque de café parmi d’autres, beaucoup moins : on change de marque. L’élasticité mesure cette sensibilité, en comparant la variation de la quantité à celle du prix, en pour cent.</p>
${deuxCourbes}
<h3>Pourquoi c’est utile</h3>
<p>Si les acheteurs réagissent peu, une hausse de prix rapporte plus au vendeur. C’est pourquoi les taxes sur le tabac rapportent beaucoup aux États, de l’Europe à l’Australie. Si les acheteurs réagissent beaucoup, la hausse fait fuir les clients : quand Netflix a augmenté ses prix d’environ 60 % aux États-Unis en 2011, il a perdu environ 800 000 abonnés en trois mois.</p>
<h3>À retenir</h3>
<p>Une demande est élastique quand il existe des substituts, que le bien n’est pas indispensable ou qu’il pèse lourd dans le budget. La notice complète présente le calcul, l’élasticité-revenu et croisée, et le débat sur les taxes.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Une hausse de prix rapporte-t-elle ? De King à Marshall, la naissance d’une mesure.",
      raisonnement: "Sept étapes, du calcul en pour cent à l’incidence fiscale.",
      preuves: "L’essence, le tabac, la loi d’Engel en Suisse, et la difficulté de mesurer.",
      cas: "L’impôt sur le tabac, Netflix en 2011, la récolte trop abondante.",
      objections: "Un chiffre qui varie, des comportements insensibles au prix, la règle de Ramsey.",
      ecoles: "King et Davenant, Cournot, Marshall, Engel, Ramsey, Veblen.",
      source: "La définition de Marshall, en 1890.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Six lectures classées par niveau."
    }
  };
})();
