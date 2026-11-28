/* Œconomia — notices longues, lot 7 (a) : offre et demande, surplus */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const axes = (L, R, Top, B, yl, xl) => `<line x1="${L}" y1="${Top}" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/><text x="${L - 8}" y="${Top + 4}" text-anchor="end" ${M}>${yl}</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>${xl}</text>`;

  /* =====================================================================
     35. OFFRE ET DEMANDE
     ===================================================================== */
  // Demand P = 9 - 0.8Q ; supply P = 1 + 0.8Q ; new demand P = 11 - 0.8Q
  const ciseaux = fig(310, (() => {
    const L = 90, R = 560, Top = 50, B = 260, X = (q) => L + q * (R - L) / 12, Y = (p) => B - p * 19;
    let s = `<text x="20" y="24" ${T}>Les « ciseaux » de Marshall : l’offre, la demande et un déplacement de la demande</text>`;
    s += axes(L, R, Top, B, "prix", "quantité");
    const ln = (f, q1, q2, c, w, op) => `<line x1="${X(q1)}" y1="${Y(f(q1))}" x2="${X(q2)}" y2="${Y(f(q2))}" style="stroke:${c}; stroke-width:${w}; opacity:${op}"/>`;
    s += ln((q) => 9 - 0.8 * q, 0.5, 10.5, "var(--serial)", 2.4, 0.45) + ln((q) => 11 - 0.8 * q, 1, 12, "var(--serial)", 2.6, 1) + ln((q) => 1 + 0.8 * q, 0.5, 11.5, "var(--note)", 2.6, 1);
    s += `<text x="${X(10.5) - 4}" y="${Y(9 - 0.8 * 10.5) + 16}" text-anchor="end" style="fill:var(--serial); font:600 11.5px Manrope, sans-serif; opacity:.7">demande avant</text>`;
    s += `<text x="${X(12)}" y="${Y(11 - 0.8 * 12) - 8}" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">demande après</text>`;
    s += `<text x="${X(11.5)}" y="${Y(1 + 0.8 * 11.5) - 8}" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">offre</text>`;
    const e1 = [5, 5], e2 = [6.25, 6];
    [[e1, "var(--ink-soft)", "équilibre 1"], [e2, "var(--gold)", "équilibre 2"]].forEach(([[q, p], c, t]) => {
      s += `<line x1="${L}" y1="${Y(p)}" x2="${X(q)}" y2="${Y(p)}" style="stroke:${c}; stroke-dasharray:3 3"/><line x1="${X(q)}" y1="${Y(p)}" x2="${X(q)}" y2="${B}" style="stroke:${c}; stroke-dasharray:3 3"/><circle cx="${X(q)}" cy="${Y(p)}" r="5" style="fill:${c}"/>`;
    });
    s += `<text x="${L - 8}" y="${Y(5) + 4}" text-anchor="end" ${M}>5</text><text x="${L - 8}" y="${Y(6) + 4}" text-anchor="end" ${M}>6</text>`;
    s += `<text x="${X(5)}" y="${B + 16}" text-anchor="middle" ${M}>5</text><text x="${X(6.25)}" y="${B + 16}" text-anchor="middle" ${M}>6,25</text>`;
    s += `<text x="20" y="300" ${S}>Les acheteurs veulent davantage à chaque prix : le prix monte de 5 à 6 et la quantité échangée de 5 à 6,25.</text>`;
    return s;
  })(), "Une hausse de la demande, par exemple due à une hausse des revenus ou à une mode, déplace toute la courbe vers la droite. Le nouveau prix d’équilibre est plus élevé ; la quantité échangée augmente, parce que les producteurs répondent au prix plus élevé en produisant davantage.", "Courbes d’offre et de demande avec un déplacement de la demande");

  const plafond = fig(300, (() => {
    const L = 90, R = 560, Top = 50, B = 250, X = (q) => L + q * (R - L) / 12, Y = (p) => B - p * 19;
    let s = `<text x="20" y="24" ${T}>Un prix plafond sous l’équilibre crée une pénurie</text>`;
    s += axes(L, R, Top, B, "prix", "quantité");
    s += `<line x1="${X(0.5)}" y1="${Y(8.6)}" x2="${X(10.5)}" y2="${Y(0.6)}" style="stroke:var(--serial); stroke-width:2.4"/>`;
    s += `<line x1="${X(0.5)}" y1="${Y(1.4)}" x2="${X(10.5)}" y2="${Y(9.4)}" style="stroke:var(--note); stroke-width:2.4"/>`;
    s += `<text x="${X(10.5)}" y="${Y(0.6) - 8}" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">demande</text>`;
    s += `<text x="${X(10.5)}" y="${Y(9.4) + 16}" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">offre</text>`;
    s += `<line x1="${L}" y1="${Y(3)}" x2="${R - 20}" y2="${Y(3)}" style="stroke:var(--gold); stroke-width:2.4"/>`;
    s += `<text x="${R - 20}" y="${Y(3) - 8}" text-anchor="end" style="fill:var(--gold); font:700 12px Manrope, sans-serif">prix plafond légal</text>`;
    s += `<circle cx="${X(2.5)}" cy="${Y(3)}" r="5" style="fill:var(--note)"/><circle cx="${X(7.5)}" cy="${Y(3)}" r="5" style="fill:var(--serial)"/>`;
    s += `<line x1="${X(2.5)}" y1="${Y(3)}" x2="${X(2.5)}" y2="${B}" style="stroke:var(--note); stroke-dasharray:3 3"/><line x1="${X(7.5)}" y1="${Y(3)}" x2="${X(7.5)}" y2="${B}" style="stroke:var(--serial); stroke-dasharray:3 3"/>`;
    s += `<line x1="${X(2.5)}" y1="${B - 18}" x2="${X(7.5)}" y2="${B - 18}" style="stroke:var(--ink); stroke-width:2"/><text x="${X(5)}" y="${B - 24}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">pénurie</text>`;
    s += `<text x="${X(2.5)}" y="${B + 16}" text-anchor="middle" ${M}>offert</text><text x="${X(7.5)}" y="${B + 16}" text-anchor="middle" ${M}>demandé</text>`;
    s += `<text x="20" y="290" ${S}>À ce prix, on demande beaucoup plus qu’on n’offre : files d’attente, marché noir, pots-de-vin, qualité dégradée.</text>`;
    return s;
  })(), "Le même raisonnement, inversé, s’applique à un prix plancher fixé au-dessus de l’équilibre : il crée des excédents, comme les « montagnes de beurre » européennes et suisses des années 1980. Le prix réglementé protège certains, mais l’ajustement se fait alors par d’autres voies.", "Prix plafond sous l’équilibre et écart entre quantités offerte et demandée");

  OEC.notices["offre-demande"] = {
    essentiel: [
      "Le modèle de l’offre et de la demande explique la formation des prix sur un marché concurrentiel : les acheteurs demandent moins quand le prix monte, les vendeurs offrent davantage, et le prix s’ajuste jusqu’à ce que les deux quantités s’égalisent.",
      "Il permet de prévoir l’effet d’un changement : une hausse des revenus, une mauvaise récolte, une taxe, une réglementation. Il distingue les déplacements le long d’une courbe, dus au prix, et les déplacements de la courbe entière, dus à d’autres causes.",
      "Simple et puissant, il repose sur des hypothèses fortes : nombreux acheteurs et vendeurs, produits comparables, information correcte. Ses limites apparaissent quand ces conditions ne sont pas réunies, ou quand les prix heurtent le sentiment de justice."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : qui fixe le prix, le coût ou l’envie ?", html: `
<p>Pendant un siècle, les économistes se sont disputé la réponse. Pour les classiques, d’Adam <a href="#eco-smith">Smith</a> à David <a href="#eco-ricardo">Ricardo</a>, la valeur d’un bien dépend surtout de ce qu’il coûte à produire, en travail notamment (<a href="#c-valeur-travail">voir valeur-travail</a>). Pour les marginalistes des années 1870, Jevons, Menger, <a href="#eco-walras">Walras</a>, elle dépend de l’utilité qu’en retirent les acheteurs pour la dernière unité consommée (<a href="#c-utilite-marginale">voir utilité marginale</a>).</p>
<p>En 1890, dans ses Principes d’économie politique, Alfred <a href="#eco-marshall">Marshall</a> met fin à la querelle par une image restée célèbre : demander si c’est le coût ou l’utilité qui fixe le prix revient à demander laquelle des deux lames d’une paire de ciseaux coupe le papier. Les deux ensemble. Son diagramme, deux courbes qui se croisent, deviendra l’image la plus connue de toute l’économie.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La demande</h4>
<p>La demande indique, pour chaque prix possible, la quantité que les acheteurs souhaitent acquérir. Elle diminue en général quand le prix monte, pour deux raisons : on se tourne vers des produits de remplacement, et la satisfaction apportée par chaque unité supplémentaire diminue. Le Français Antoine-Augustin Cournot trace dès 1838 la première « loi du débit », qui relie prix et quantité vendue.</p>
<h4>2. L’offre</h4>
<p>L’offre indique, pour chaque prix, la quantité que les producteurs souhaitent vendre. Elle augmente en général avec le prix, parce que produire davantage coûte de plus en plus cher à court terme : il faut payer des heures supplémentaires, utiliser des machines moins efficaces, mettre en culture des terres moins fertiles. Un prix plus élevé rend rentable cette production supplémentaire.</p>
<h4>3. L’équilibre</h4>
<p>Au prix où la quantité demandée égale la quantité offerte, le marché est « en équilibre » : chacun trouve à acheter ou à vendre ce qu’il souhaite à ce prix. Si le prix est trop haut, des invendus s’accumulent et les vendeurs baissent leurs prix ; s’il est trop bas, des acheteurs repartent les mains vides et les vendeurs relèvent leurs prix. Le prix joue le rôle d’un signal qui coordonne des millions de décisions.</p>
<h4>4. Déplacements le long de la courbe et de la courbe</h4>
<p>Il faut distinguer deux choses. Quand le prix change, on se déplace le long d’une courbe. Quand un autre facteur change, revenus, goûts, prix des autres biens, technique, coûts de production, c’est toute la courbe qui se déplace. Une mode, une hausse des revenus déplacent la demande ; une mauvaise récolte, une innovation, une hausse des salaires déplacent l’offre.</p>
${ciseaux}
<h4>5. L’élasticité</h4>
<p>Marshall introduit aussi la notion d’élasticité : de combien la quantité demandée varie-t-elle quand le prix varie de 1 % ? Pour le pain, l’essence à court terme ou les médicaments, la demande est peu élastique : on en achète presque autant même s’ils sont plus chers. Pour un modèle de voiture ou une destination de vacances, elle est très élastique. Cela détermine l’effet des taxes et la répartition de leur charge entre acheteurs et vendeurs.</p>
<h4>6. Le temps</h4>
<p>Marshall souligne le rôle du temps. Au marché aux poissons du matin, la quantité est fixée : le prix dépend presque uniquement de la demande. Sur quelques mois, les pêcheurs peuvent sortir plus souvent. Sur des années, de nouveaux bateaux sont construits et le prix se rapproche du coût de production. L’offre est d’autant plus élastique que la période est longue, ce qui réconcilie les classiques, qui raisonnaient à long terme, et les marginalistes.</p>
<h4>7. Les prix réglementés</h4>
<p>Le modèle prédit les effets des prix fixés par la loi. Un prix plafond sous l’équilibre, comme un contrôle des loyers strict, crée une pénurie : plus de demandeurs que de logements disponibles, avec des files d’attente, des passe-droits, un entretien négligé. Un prix plancher au-dessus de l’équilibre, comme un prix agricole garanti, crée des excédents qu’il faut stocker ou détruire.</p>
${plafond}` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les marchés en laboratoire</h4>
<p>En 1956, Vernon Smith, jeune professeur, organise avec ses étudiants un marché fictif : chacun reçoit un prix maximum d’achat ou un prix minimum de vente, connu de lui seul, et tous négocient à voix haute. Malgré le petit nombre de participants et l’absence d’information sur les courbes, les prix convergent rapidement vers l’équilibre prévu par la théorie. Smith publie ses résultats en 1962 et recevra le prix Nobel en 2002 pour avoir fondé l’économie expérimentale.</p>
<h4>Le contrôle des loyers à San Francisco</h4>
<p>En 1994, San Francisco étend le contrôle des loyers aux petits immeubles construits avant 1980. Rebecca Diamond, Tim McQuade et Franklin Qian (2019) comparent ces immeubles à des immeubles semblables construits juste après 1980. Les locataires protégés restent plus longtemps dans leur logement, ce qui était l’objectif. Mais les propriétaires des immeubles concernés réduisent l’offre locative d’environ 15 %, en vendant les appartements ou en les transformant, ce qui contribue à faire monter les loyers dans le reste de la ville.</p>
<h4>Les files d’attente à la pompe</h4>
<p>En 1973-1974 et en 1979, les États-Unis plafonnent le prix de l’essence pendant les chocs pétroliers. De longues files d’attente se forment devant les stations, certains États instaurent un rationnement par plaque d’immatriculation paire ou impaire. Les pays qui laissent les prix monter, comme l’Allemagne, ne connaissent pas ces files. L’épisode est devenu un exemple d’école des effets d’un prix plafond.</p>` }
    ],
    cas: [
      { titre: "Les montagnes de beurre et l’Union suisse du fromage", html: `
<p>Pendant des décennies, la Confédération garantit aux producteurs de lait un prix fixe, nettement supérieur au prix mondial, et prend en charge l’écoulement de la production. L’Union suisse du commerce de fromage, organisme semi-public, achète le fromage à prix garanti et l’exporte souvent à perte. Comme le prévoit le modèle d’un prix plancher, les excédents s’accumulent : beurre stocké pendant des années, fromage vendu à bas prix à l’étranger avec des subventions. Après des scandales de gestion, l’Union est dissoute en 1999, et la réforme agricole remplace progressivement les prix garantis par des paiements directs liés aux prestations écologiques et au paysage.</p>` },
      { titre: "Uber et la nuit du Nouvel An", html: `
<p>Uber fait varier ses prix selon la demande : quand beaucoup de personnes cherchent une voiture, le tarif monte, ce qui attire davantage de chauffeurs. Dans la nuit du 31 décembre 2014 au 1er janvier 2015, à New York, ce mécanisme tombe en panne pendant une demi-heure. Jonathan Hall, Cory Kendrick et Chris Nosko (2015) en étudient les conséquences : sans hausse de prix, les demandes explosent, le temps d’attente s’allonge fortement et une grande partie des demandes ne sont pas satisfaites. L’épisode illustre la fonction du prix comme mécanisme d’allocation, même si ces hausses soudaines sont souvent jugées injustes.</p>` },
      { titre: "Le prix de la pelle à neige", html: `
<p>En 1986, Daniel <a href="#eco-kahneman">Kahneman</a>, Jack Knetsch et Richard Thaler posent une question à des habitants de Toronto : un quincaillier vend des pelles à neige 15 dollars ; au lendemain d’une forte tempête de neige, il passe le prix à 20 dollars. Est-ce acceptable ? 82 % des personnes interrogées jugent cela injuste. Selon le modèle, c’est pourtant la réponse normale à une hausse de la demande. L’étude montre que les consommateurs ont des normes d’équité qui limitent les hausses de prix, et que les entreprises, soucieuses de leur réputation, en tiennent compte.</p>` }
    ],
    objections: `
<h4>1. La concurrence n’est pas toujours là</h4>
<p>Le modèle suppose de nombreux acheteurs et vendeurs, aucun ne pouvant influencer le prix. Dans la réalité, beaucoup de marchés sont dominés par quelques entreprises, qui fixent leurs prix stratégiquement (<a href="#c-concurrence-imparfaite">voir concurrence imparfaite</a>).</p>
<h4>2. L’information est imparfaite</h4>
<p>Quand les acheteurs ne peuvent pas évaluer la qualité, comme sur le marché des voitures d’occasion ou des soins médicaux, le prix ne transmet pas toute l’information nécessaire et le marché peut mal fonctionner (<a href="#c-asymetrie-information">voir asymétrie d’information</a>).</p>
<h4>3. Les courbes ne sont pas indépendantes</h4>
<p>Sur les marchés financiers et immobiliers, une hausse des prix peut accroître la demande, car les acheteurs anticipent de nouvelles hausses. Les bulles naissent de ce mécanisme. Thorstein <a href="#eco-veblen">Veblen</a> avait aussi décrit des biens dont la demande augmente avec le prix.</p>
<h4>4. L’équilibre partiel ignore les répercussions</h4>
<p>Le modèle de Marshall étudie un marché à la fois, en supposant le reste inchangé. Mais une variation du prix du pétrole affecte les salaires, les autres prix, les revenus, qui modifient à leur tour la demande de pétrole. C’est le domaine de l’<a href="#c-equilibre-general">équilibre général</a>.</p>`,
    ecoles: `
<p><b><a href="#eco-smith">Smith</a></b> et <b><a href="#eco-ricardo">Ricardo</a></b> mettent l’accent sur le coût de production à long terme.</p>
<p><b>Cournot</b> (1838) trace la première courbe de demande ; <b>Fleeming Jenkin</b> (1870) dessine les premiers croisements de courbes.</p>
<p><b>Les marginalistes</b>, Jevons, Menger et <a href="#eco-walras">Walras</a>, fondent la demande sur l’utilité.</p>
<p><b><a href="#eco-marshall">Marshall</a></b> réunit les deux approches et popularise le diagramme.</p>
<p><b>Vernon Smith</b> en teste les prédictions en laboratoire.</p>
<p><b><a href="#eco-kahneman">Kahneman</a></b> et Thaler montrent le rôle des normes d’équité.</p>`,
    source: {
      titre: "Alfred Marshall, Principes d’économie politique, 1890, livre V, chapitre 3",
      texte: "Nous pourrions aussi raisonnablement discuter pour savoir si c’est la lame supérieure ou la lame inférieure d’une paire de ciseaux qui coupe un morceau de papier, que de savoir si la valeur est réglée par l’utilité ou par le coût de production.",
      notes: `
<p><b>La réconciliation.</b> Marshall répond à la querelle entre classiques et marginalistes. L’utilité commande la demande, le coût commande l’offre : le prix dépend des deux.</p>
<p><b>Le rôle du temps.</b> Marshall ajoute aussitôt que l’une des lames peut sembler plus active selon la période considérée : à court terme, la demande domine ; à long terme, le coût de production. Les classiques et les marginalistes avaient donc chacun raison pour un horizon différent.</p>
<p><b>Un style pédagogique.</b> Marshall reléguait les mathématiques en notes et en annexe, et privilégiait les images et les exemples tirés de la vie des affaires. Ses Principes ont été le manuel de référence en Angleterre pendant un demi-siècle.</p>`
    },
    quiz: [
      { q: "Selon Marshall, qu’est-ce qui détermine le prix ?",
        o: ["Le coût de production des vendeurs, sans rôle pour les acheteurs", "L’utilité que les acheteurs retirent du bien, sans rôle pour les vendeurs", "L’offre et la demande ensemble, comme les deux lames de ciseaux", "Le travail nécessaire à la production, comme le pensaient les classiques"], c: 2,
        e: "L’utilité commande la demande, le coût l’offre : les deux déterminent le prix." },
      { q: "Une hausse des revenus des consommateurs, pour un bien ordinaire…",
        o: ["fait se déplacer le long de la courbe de demande", "déplace toute la courbe de demande vers la droite", "déplace la courbe d’offre, car les producteurs vendent plus", "fait baisser la quantité demandée à chaque prix"], c: 1,
        e: "Un facteur autre que le prix déplace toute la courbe." },
      { q: "Que provoque un prix plafond fixé sous le prix d’équilibre ?",
        o: ["Un excédent, car l’offre dépasse la demande au prix plafonné", "Une pénurie, la quantité demandée dépassant la quantité offerte", "Une baisse de la demande, car les produits deviennent moins attractifs", "Une hausse de la quantité offerte, les producteurs étant attirés par le prix bas"], c: 1,
        e: "Files d’attente, marché noir et qualité dégradée en sont les conséquences habituelles." },
      { q: "Qu’a montré l’étude du contrôle des loyers à San Francisco ?",
        o: ["Que tous les loyers ont baissé, y compris ceux des logements non contrôlés", "Que les locataires protégés sont restés, mais que l’offre locative a baissé d’environ 15 %", "Que le contrôle n’a pas eu d’effet visible sur le marché du logement", "Que les propriétaires ont construit davantage pour compenser la baisse des loyers"], c: 1,
        e: "La protection des locataires en place s’est accompagnée d’une réduction de l’offre et d’une hausse des loyers ailleurs." },
      { q: "Pourquoi l’Union suisse du fromage accumulait-elle des excédents ?",
        o: ["Parce que les Suisses mangeaient moins de fromage et que la production restait la même", "Parce que des prix garantis trop élevés encourageaient une production excédentaire", "Parce que les prix du fromage étaient fixés trop bas pour couvrir les coûts", "Parce que la demande étrangère s’était effondrée après l’introduction de droits de douane"], c: 1,
        e: "C’est l’effet d’un prix plancher : excédents à stocker ou à écouler à perte." }
    ],
    transfert: { q: "Une sécheresse détruit une partie de la récolte de café au Brésil, premier producteur mondial. Que prévoit le modèle de l’offre et de la demande sur le marché mondial du café ?",
      o: ["L’offre diminue, le prix monte, et la quantité échangée baisse sur le marché", "L’offre augmente, car les autres pays compensent, et le prix baisse", "Le prix et la quantité augmentent ensemble, car la demande se renforce", "Rien ne change sur le marché mondial, car le café est un produit de nécessité"], c: 0,
      e: "Un choc d’offre déplace la courbe d’offre vers la gauche : prix plus élevé, quantité plus faible." },
    ouverte: {
      q: "De Berlin à New York, de nombreuses villes ont renforcé le contrôle des loyers. Le modèle de l’offre et de la demande condamne-t-il ces mesures ?",
      r: "Le modèle simple prédit qu’un plafonnement des loyers sous le prix de marché réduit l’offre de logements et crée une pénurie. Les études comme celle de San Francisco le confirment en partie, et le gel des loyers berlinois de 2020, annulé par la justice en 2021, a vu l’offre de logements à louer chuter. Mais la réalité est plus nuancée. Le marché du logement n’est pas parfaitement concurrentiel : déménager coûte cher, l’information est imparfaite, et les locataires en place sont en position de faiblesse face à des hausses brutales. Une protection contre les hausses abusives en cours de bail peut corriger ce déséquilibre sans réduire fortement l’offre. Les effets dépendent donc de la conception : une limitation des loyers des nouveaux contrats freine davantage l’investissement qu’une protection des locataires existants. Le problème de fond, dans la plupart des grandes villes, reste le manque de terrains constructibles et la lenteur des procédures, que seule une hausse de l’offre peut résoudre."
    },
    lectures: [
      ["Accessible", "Tim Harford, The Undercover Economist, 2005, chapitres 1 et 2."],
      ["Accessible", "Paul Krugman et Robin Wells, Microéconomie, chapitres 3 et 4."],
      ["Intermédiaire", "Alfred Marshall, Principes d’économie politique (1890), livre V, chapitres 1 à 5."],
      ["Intermédiaire", "Daniel Kahneman, Jack Knetsch et Richard Thaler, « Fairness as a Constraint on Profit Seeking », American Economic Review, 1986."],
      ["Recherche", "Vernon Smith, « An Experimental Study of Competitive Market Behavior », Journal of Political Economy, 1962 ; Rebecca Diamond, Tim McQuade et Franklin Qian, « The Effects of Rent Control Expansion », American Economic Review, 2019."]
    ],
    decouvrir: {
      questions: [
        { q: "Que se passe-t-il si un prix est fixé trop haut sur un marché libre ?",
          o: ["Des invendus s’accumulent, et les vendeurs finissent par baisser leurs prix", "Il manque des produits, et les acheteurs se font concurrence par les prix", "Les acheteurs en veulent davantage, attirés par le niveau élevé du prix", "Les vendeurs produisent moins et le prix monte encore, faute de concurrence"], c: 0,
          e: "Le prix s’établit là où quantités offerte et demandée sont égales." },
        { q: "Qu’a provoqué le prix maximum de l’essence aux États-Unis en 1973 ?",
          o: ["Des pénuries et de longues files d’attente aux stations-service", "Des invendus d’essence dans les stations, faute de clients à ce prix", "Une baisse de la demande, les automobilistes renonçant à rouler", "Une hausse de la production, car les raffineurs y voyaient un prix attractif"], c: 0,
          e: "Un prix plafond trop bas crée une pénurie." }
      ],
      duree: 5,
      html: `
<h3>Deux lames de ciseaux</h3>
<p>Le prix d’un bien dépend-il de ce qu’il coûte à produire, ou de l’envie qu’on en a ? En 1890, Alfred <a href="#eco-marshall">Marshall</a> répond : des deux, comme les deux lames d’une paire de ciseaux coupent ensemble. C’est le modèle de l’<b>offre et de la demande</b>.</p>
<h3>Comment le prix s’ajuste</h3>
<p>Plus un bien est cher, moins les acheteurs en veulent, et plus les vendeurs en proposent. Si le prix est trop haut, des invendus s’accumulent et les vendeurs baissent leurs prix ; s’il est trop bas, il en manque et les prix montent. Le prix s’établit là où les deux quantités sont égales.</p>
${ciseaux}
<h3>Quand on fixe le prix par la loi</h3>
<p>Un prix maximum trop bas crée des pénuries et des files d’attente, comme aux stations-service américaines en 1973. Un prix minimum trop haut crée des excédents : la Suisse a longtemps accumulé du beurre et du fromage à cause de prix garantis aux producteurs de lait.</p>
<h3>À retenir</h3>
<p>Le modèle est simple et puissant, mais il suppose une vraie concurrence et une bonne information. La notice complète présente le raisonnement, les preuves et les limites.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Le coût ou l’envie ? La querelle et les ciseaux de Marshall.",
      raisonnement: "Sept étapes, de la demande aux prix réglementés.",
      preuves: "Les marchés en laboratoire, le contrôle des loyers à San Francisco, les files à la pompe.",
      cas: "Les excédents laitiers suisses, Uber au Nouvel An, la pelle à neige.",
      objections: "Concurrence, information, bulles, répercussions sur les autres marchés.",
      ecoles: "Smith et Ricardo, Cournot et Jenkin, les marginalistes, Marshall, Vernon Smith, Kahneman.",
      source: "Marshall, 1890 : laquelle des deux lames coupe le papier ?",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     36. SURPLUS
     ===================================================================== */
  // Demand P = 10 - Q ; supply P = 2 + Q ; eq Q=4, P=6
  const triangles = fig(310, (() => {
    const L = 90, R = 520, Top = 50, B = 260, X = (q) => L + q * (R - L) / 9, Y = (p) => B - p * 19;
    let s = `<text x="20" y="24" ${T}>Surplus du consommateur et du producteur à l’équilibre</text>`;
    s += axes(L, R, Top, B, "prix", "quantité");
    s += `<polygon points="${X(0)},${Y(10)} ${X(4)},${Y(6)} ${X(0)},${Y(6)}" style="fill:color-mix(in srgb, var(--serial) 28%, transparent)"/>`;
    s += `<polygon points="${X(0)},${Y(2)} ${X(4)},${Y(6)} ${X(0)},${Y(6)}" style="fill:color-mix(in srgb, var(--note) 28%, transparent)"/>`;
    s += `<line x1="${X(0)}" y1="${Y(10)}" x2="${X(8.5)}" y2="${Y(1.5)}" style="stroke:var(--serial); stroke-width:2.4"/>`;
    s += `<line x1="${X(0)}" y1="${Y(2)}" x2="${X(7.5)}" y2="${Y(9.5)}" style="stroke:var(--note); stroke-width:2.4"/>`;
    s += `<line x1="${L}" y1="${Y(6)}" x2="${X(4)}" y2="${Y(6)}" style="stroke:var(--ink-soft); stroke-dasharray:3 3"/><line x1="${X(4)}" y1="${Y(6)}" x2="${X(4)}" y2="${B}" style="stroke:var(--ink-soft); stroke-dasharray:3 3"/>`;
    s += `<circle cx="${X(4)}" cy="${Y(6)}" r="5" style="fill:var(--ink)"/>`;
    s += `<text x="${X(1.1)}" y="${Y(7.1)}" text-anchor="middle" style="fill:var(--ink); font:700 11.5px Manrope, sans-serif">surplus des</text><text x="${X(1.1)}" y="${Y(7.1) + 14}" text-anchor="middle" style="fill:var(--ink); font:700 11.5px Manrope, sans-serif">acheteurs : 8</text>`;
    s += `<text x="${X(1.1)}" y="${Y(4.6)}" text-anchor="middle" style="fill:var(--ink); font:700 11.5px Manrope, sans-serif">surplus des</text><text x="${X(1.1)}" y="${Y(4.6) + 14}" text-anchor="middle" style="fill:var(--ink); font:700 11.5px Manrope, sans-serif">vendeurs : 8</text>`;
    s += `<text x="${X(8.5)}" y="${Y(1.5) - 8}" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">demande</text><text x="${X(7.5) + 4}" y="${Y(9.5) + 4}" style="fill:var(--note); font:700 12px Manrope, sans-serif">offre</text>`;
    s += `<text x="${L - 8}" y="${Y(6) + 4}" text-anchor="end" ${M}>6</text><text x="${X(4)}" y="${B + 16}" text-anchor="middle" ${M}>4</text>`;
    s += `<text x="20" y="298" ${S}>Les premiers acheteurs auraient payé jusqu’à 10 et paient 6 ; les premiers vendeurs auraient accepté 2.</text>`;
    return s;
  })(), "Le surplus du consommateur est la différence entre ce que chaque acheteur était prêt à payer et le prix effectivement payé ; celui du producteur, entre le prix reçu et le prix minimum auquel il aurait vendu. Dans cet exemple, chaque triangle vaut ½ × 4 × 4 = 8.", "Deux triangles de surplus entre les courbes d’offre et de demande");

  const taxe = fig(310, (() => {
    const L = 90, R = 520, Top = 50, B = 260, X = (q) => L + q * (R - L) / 9, Y = (p) => B - p * 19;
    let s = `<text x="20" y="24" ${T}>Une taxe de 2 par unité : recettes et perte sèche (même marché)</text>`;
    s += axes(L, R, Top, B, "prix", "quantité");
    s += `<polygon points="${X(0)},${Y(7)} ${X(3)},${Y(7)} ${X(3)},${Y(5)} ${X(0)},${Y(5)}" style="fill:color-mix(in srgb, var(--gold) 35%, transparent)"/>`;
    s += `<polygon points="${X(3)},${Y(7)} ${X(4)},${Y(6)} ${X(3)},${Y(5)}" style="fill:color-mix(in srgb, var(--plum) 55%, transparent)"/>`;
    s += `<line x1="${X(0)}" y1="${Y(10)}" x2="${X(8.5)}" y2="${Y(1.5)}" style="stroke:var(--serial); stroke-width:2.4"/>`;
    s += `<line x1="${X(0)}" y1="${Y(2)}" x2="${X(7.5)}" y2="${Y(9.5)}" style="stroke:var(--note); stroke-width:2.4"/>`;
    s += `<text x="${X(1.5)}" y="${Y(6) + 4}" text-anchor="middle" style="fill:var(--ink); font:700 11.5px Manrope, sans-serif">recettes : 6</text>`;
    s += `<line x1="${X(3.4)}" y1="${Y(6)}" x2="${X(5.2)}" y2="${Y(3.2)}" style="stroke:var(--plum)"/><text x="${X(5.3)}" y="${Y(3.2) + 4}" style="fill:var(--plum); font:700 11.5px Manrope, sans-serif">perte sèche : 1</text>`;
    s += `<text x="${L - 8}" y="${Y(7) + 4}" text-anchor="end" ${M}>7</text><text x="${L - 8}" y="${Y(5) + 4}" text-anchor="end" ${M}>5</text><text x="${X(3)}" y="${B + 16}" text-anchor="middle" ${M}>3</text><text x="${X(4)}" y="${B + 16}" text-anchor="middle" ${M}>4</text>`;
    s += `<text x="20" y="298" ${S}>Les acheteurs paient 7, les vendeurs reçoivent 5. La quatrième unité, qui créait de la valeur, n’est plus échangée.</text>`;
    return s;
  })(), "Jules Dupuit l’avait vu dès 1844 à propos des péages : une taxe prélève une recette (rectangle), mais supprime aussi des échanges qui auraient profité aux deux parties (triangle). Cette « perte sèche » croît à peu près comme le carré du taux : doubler la taxe la multiplie environ par quatre.", "Rectangle de recettes et triangle de perte sèche d’une taxe");

  OEC.notices["surplus"] = {
    essentiel: [
      "Le surplus du consommateur est la différence entre le prix maximum qu’un acheteur serait prêt à payer et le prix qu’il paie effectivement ; le surplus du producteur est la différence entre le prix reçu et le prix minimum auquel il aurait accepté de vendre. Leur somme mesure le gain total tiré de l’échange.",
      "Inventée par l’ingénieur français Jules Dupuit en 1844 pour évaluer l’utilité des ponts et des routes, la notion est popularisée par Marshall. Elle permet de mesurer ce que coûtent les taxes, les monopoles et les réglementations, à travers la « perte sèche ».",
      "C’est l’outil de base de l’analyse coût-bénéfice des politiques publiques. Elle a des limites : elle additionne des francs sans tenir compte de qui les gagne, et elle suppose que la disposition à payer reflète bien le bien-être."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : combien vaut un pont ?", html: `
<p>Dans la France des années 1840, les ingénieurs des Ponts et Chaussées construisent des ponts, des canaux et des routes, et se demandent comment fixer les péages. Faut-il les fixer pour couvrir le coût de l’ouvrage, pour maximiser les recettes, ou pas du tout ? Et comment savoir si un ouvrage vaut la peine d’être construit ?</p>
<p>En 1844, l’ingénieur Jules Dupuit publie un article, « De la mesure de l’utilité des travaux publics ». Il observe que l’utilité d’un pont ne se mesure pas aux péages encaissés, mais à ce que les usagers seraient prêts à payer pour le traverser. Celui qui paie un péage de 5 centimes mais aurait payé 50 centimes en retire un bénéfice de 45 centimes, que les recettes ne montrent pas. Dupuit vient d’inventer le surplus du consommateur, cinquante ans avant que <a href="#eco-marshall">Marshall</a> ne lui donne son nom.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La disposition à payer</h4>
<p>Chaque acheteur potentiel a un prix maximum qu’il accepterait de payer pour un bien. La courbe de demande, lue autrement, classe les acheteurs selon cette disposition à payer, du plus pressé au plus indifférent.</p>
<h4>2. Le surplus du consommateur</h4>
<p>Comme tous paient le même prix de marché, ceux qui étaient prêts à payer davantage font une bonne affaire. La somme de ces bonnes affaires est le surplus du consommateur : l’aire entre la courbe de demande et le prix. Elle mesure en francs le bénéfice que les acheteurs retirent du marché, au-delà de ce qu’ils dépensent.</p>
<h4>3. Le surplus du producteur</h4>
<p>Symétriquement, chaque vendeur a un prix minimum en dessous duquel il ne vendrait pas, qui dépend de son coût. Ceux dont le coût est inférieur au prix de marché gagnent la différence. La somme est le surplus du producteur : l’aire entre le prix et la courbe d’offre.</p>
${triangles}
<h4>4. Le marché maximise le surplus total</h4>
<p>À l’équilibre concurrentiel, le surplus total est le plus grand possible : tous les échanges où l’acheteur valorise le bien plus que ce qu’il coûte au vendeur ont lieu, et aucun autre. C’est une manière de formuler le premier théorème du bien-être (<a href="#c-optimum-pareto">voir optimum de Pareto</a>). Ce résultat suppose l’absence d’<a href="#c-externalite">externalités</a> et de pouvoir de marché.</p>
<h4>5. La perte sèche</h4>
<p>Une taxe, un monopole, un quota ou un prix réglementé réduisent la quantité échangée. Certains échanges qui auraient profité aux deux parties n’ont plus lieu. La valeur ainsi perdue, qui ne profite à personne, est la « perte sèche », représentée par un triangle, parfois appelé « triangle de Harberger ». Dupuit observe qu’elle augmente à peu près comme le carré de la taxe : une taxe deux fois plus élevée détruit environ quatre fois plus de valeur.</p>
${taxe}
<h4>6. La discrimination par les prix</h4>
<p>Un vendeur qui pourrait faire payer à chaque acheteur son prix maximum s’approprierait tout le surplus des consommateurs. En pratique, il segmente sa clientèle : classes dans les trains, tarifs étudiants, réductions pour ceux qui réservent tôt. Dupuit remarquait en 1849 que les compagnies de chemin de fer rendaient volontairement inconfortables les wagons de troisième classe pour dissuader ceux qui pouvaient payer la deuxième d’y monter.</p>
<h4>7. L’analyse coût-bénéfice</h4>
<p>Le surplus est à la base de l’analyse coût-bénéfice des projets publics : on compare la somme des bénéfices des usagers, mesurés par leur disposition à payer, gain de temps, sécurité, confort, au coût du projet. Les transports, l’environnement et la santé publique sont évalués de cette manière dans la plupart des pays.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le surplus d’Uber</h4>
<p>Peter Cohen, Robert Hahn, Jonathan Hall, Steven Levitt et Robert Metcalfe (2016) utilisent les variations de prix d’Uber pour reconstituer la courbe de demande des usagers dans quatre grandes villes américaines. Ils estiment le surplus des consommateurs à environ 2,9 milliards de dollars pour 2015 dans ces quatre villes, soit environ 6,8 milliards pour l’ensemble des États-Unis : pour chaque dollar dépensé, les usagers retirent en moyenne environ 1,60 dollar de surplus.</p>
<h4>La valeur des services gratuits</h4>
<p>Erik Brynjolfsson, Avinash Collis et Felix Eggers (2019) demandent à des milliers de personnes combien il faudrait les payer pour qu’elles renoncent à un service numérique gratuit. Les réponses médianes atteignent plus de 17 000 dollars par an pour les moteurs de recherche, plusieurs milliers pour la messagerie électronique et les cartes en ligne. Ces services, dont le prix est nul, n’apparaissent presque pas dans le <a href="#c-pib">PIB</a>, mais leur surplus est considérable.</p>
<h4>La perte sèche des monopoles</h4>
<p>En 1954, Arnold Harberger estime la perte sèche due aux monopoles dans l’industrie américaine et la trouve minuscule, environ 0,1 % du PIB. Ce résultat a beaucoup servi à relativiser les dangers du pouvoir de marché. Des travaux plus récents, qui tiennent compte de la hausse des marges depuis les années 1980, trouvent des pertes nettement plus élevées (<a href="#c-concurrence-imparfaite">voir concurrence imparfaite</a>).</p>` }
    ],
    cas: [
      { titre: "L’abonnement demi-tarif des CFF", html: `
<p>Les CFF proposent depuis 1987 un abonnement demi-tarif sous sa forme actuelle : pour moins de 200 francs par an, le voyageur paie ensuite la moitié du prix de chaque billet. C’est un tarif en deux parties, qui permet de capter une partie du surplus des voyageurs fréquents, tout en les incitant à prendre davantage le train, puisque chaque trajet supplémentaire leur coûte moins. L’abonnement général, qui donne un accès illimité, pousse la logique au bout : une fois payé, le coût de chaque trajet est nul. Avec plusieurs millions de détenteurs d’abonnements, ces formules sont au cœur du modèle ferroviaire suisse.</p>` },
      { titre: "Les billets de concert revendus", html: `
<p>En novembre 2022, la mise en vente des billets de la tournée américaine de Taylor Swift bloque le site de Ticketmaster : des millions de fans se connectent en même temps pour des places dont le prix officiel est le plus souvent inférieur à 500 dollars. Beaucoup étaient prêts à payer bien davantage, et certaines places se revendent ensuite plusieurs milliers de dollars. Fixer un prix inférieur à la disposition à payer laisse un surplus important aux acheteurs chanceux, mais aussi aux revendeurs, qui en captent une grande partie. Les organisateurs hésitent pourtant à vendre au prix fort, par crainte de décevoir leur public et pour préserver leur image.</p>` },
      { titre: "Les wagons sans toit de Dupuit", html: `
<p>Au milieu du XIXe siècle, certaines compagnies ferroviaires françaises font circuler des wagons de troisième classe sans toit ni banquettes rembourrées. Dupuit explique que ce n’est pas pour économiser le coût d’un toit, mais pour rendre la troisième classe assez désagréable afin que ceux qui peuvent payer la deuxième ne soient pas tentés de s’en contenter. C’est l’une des premières analyses de la discrimination par la qualité, que pratiquent aujourd’hui les compagnies aériennes en dégradant leur classe économique de base.</p>` }
    ],
    objections: `
<h4>1. Un franc n’est pas un franc pour tout le monde</h4>
<p>Le surplus additionne les gains de tous en francs, comme si un franc avait la même valeur pour un pauvre et pour un riche. Or la disposition à payer dépend du revenu : un riche est prêt à payer plus pour un même bien, ce qui donne plus de poids à ses préférences. Amartya <a href="#eco-sen">Sen</a> et d’autres critiquent cette mesure du bien-être.</p>
<h4>2. La disposition à payer n’est pas le bien-être</h4>
<p>Les biais de comportement, l’information imparfaite ou l’addiction font que ce qu’on est prêt à payer ne reflète pas toujours ce qui nous rend vraiment heureux. Un fumeur est prêt à payer cher ses cigarettes, sans que cela mesure son bien-être.</p>
<h4>3. Les biens sans marché</h4>
<p>Pour l’environnement, la santé ou la vie humaine, il n’y a pas de prix de marché. Les économistes utilisent des enquêtes de disposition à payer, dont les résultats varient fortement selon la manière de poser les questions. Les estimations de la valeur d’une vie statistique, utilisées dans les analyses de sécurité, suscitent des débats éthiques.</p>
<h4>4. Les triangles sont petits, les rectangles sont gros</h4>
<p>Les économistes ont longtemps concentré leur attention sur les pertes sèches, souvent faibles, et négligé les transferts, comme les rentes de monopole, qui peuvent être énormes et ont des effets sur les inégalités et le pouvoir politique (<a href="#c-rente">voir rente</a>).</p>`,
    ecoles: `
<p><b>Jules Dupuit</b> (1844) invente le surplus et la perte sèche pour évaluer les travaux publics.</p>
<p><b><a href="#eco-marshall">Marshall</a></b> popularise le « surplus du consommateur ».</p>
<p><b>Hicks</b> et les théoriciens du bien-être affinent la mesure.</p>
<p><b>Arnold Harberger</b> estime la perte sèche des monopoles et des impôts.</p>
<p><b><a href="#eco-sen">Sen</a></b> critique l’agrégation des dispositions à payer.</p>
<p><b>Brynjolfsson</b> et d’autres mesurent le surplus de l’économie numérique.</p>`,
    source: {
      titre: "Jules Dupuit, « De l’influence des péages sur l’utilité des voies de communication », Annales des Ponts et Chaussées, 1849",
      texte: "Ce n’est pas à cause des quelques milliers de francs qu’il faudrait dépenser pour couvrir les voitures de troisième classe […] que telle compagnie a des voitures découvertes ; […] ce qu’elle cherche, c’est d’empêcher le voyageur qui peut payer la seconde classe d’aller en troisième.",
      notes: `
<p><b>Une intuition moderne.</b> Dupuit décrit ce que les économistes appellent aujourd’hui la discrimination par la qualité, ou « versionnage » : dégrader volontairement une version bon marché pour que les clients prêts à payer davantage choisissent la version chère.</p>
<p><b>Le surplus en jeu.</b> En séparant ses clients, la compagnie capte une partie du surplus de ceux dont la disposition à payer est élevée, tout en continuant de servir ceux dont elle est faible.</p>
<p><b>La suite du texte.</b> Dupuit ajoute que la compagnie frappe les pauvres « non qu’elle ait envie de les faire souffrir », mais pour effrayer les riches. Le ton ironique montre qu’il est conscient de la dureté du procédé.</p>`
    },
    quiz: [
      { q: "Un acheteur prêt à payer 50 francs achète un bien à 30 francs. Quel est son surplus ?",
        o: ["30 francs", "20 francs", "50 francs", "80 francs"], c: 1,
        e: "Surplus = disposition à payer − prix = 50 − 30 = 20." },
      { q: "Qui a inventé la notion de surplus du consommateur ?",
        o: ["L’économiste Adam Smith, en 1776", "L’ingénieur Jules Dupuit, en 1844", "L’économiste John Maynard Keynes, en 1936", "L’économiste Vilfredo Pareto, en 1906"], c: 1,
        e: "Dupuit voulait mesurer l’utilité des ponts et des routes au-delà des péages encaissés." },
      { q: "Qu’est-ce que la perte sèche d’une taxe ?",
        o: ["Les recettes que l’État encaisse grâce à la taxe sur chaque unité vendue", "La valeur des échanges avantageux qui n’ont plus lieu à cause de la taxe", "Le coût de perception de la taxe, supporté par l’administration fiscale", "La hausse du prix payé par les acheteurs, qui rend le produit moins abordable"], c: 1,
        e: "Elle ne profite à personne : ni à l’État, ni aux acheteurs, ni aux vendeurs." },
      { q: "Si une taxe double, comment évolue à peu près la perte sèche ?",
        o: ["Elle double, en proportion de la taxe", "Elle est multipliée par quatre environ", "Elle reste à peu près stable, quelle que soit la taxe", "Elle est divisée par deux, car les échanges diminuent"], c: 1,
        e: "Elle croît à peu près comme le carré de la taxe, comme l’avait vu Dupuit." },
      { q: "Pourquoi l’abonnement demi-tarif est-il un exemple de tarification en deux parties ?",
        o: ["Parce qu’il coûte deux fois plus cher qu’un billet plein tarif", "Parce qu’il combine un montant fixe annuel et un prix réduit par trajet", "Parce qu’il est vendu par deux entreprises, qui se partagent les recettes", "Parce que le prix varie selon l’heure et selon le jour du trajet"], c: 1,
        e: "Le montant fixe capte une partie du surplus des voyageurs fréquents, le prix réduit les incite à voyager davantage." }
    ],
    transfert: { q: "Une ville se demande s’il faut construire un pont dont le péage rapportera peu. Comment, selon Dupuit, évaluer son utilité ?",
      o: ["Par ce que les usagers seraient prêts à payer pour traverser, au-delà du péage", "Par le seul montant des péages encaissés, qui mesure la valeur du pont", "Par le coût de construction, qui reflète la valeur sociale de l’ouvrage", "Par le nombre d’ouvriers employés, qui montre l’ampleur des retombées"], c: 0,
      e: "L’utilité d’un ouvrage se mesure au surplus de ses usagers, pas seulement aux recettes." },
    ouverte: {
      q: "Les analyses coût-bénéfice des projets de transport additionnent les gains de temps des usagers. Faut-il donner le même poids à une heure gagnée par un cadre et par un apprenti ?",
      r: "Dans une analyse fondée sur la disposition à payer, l’heure du cadre vaut plus, car il est prêt à payer davantage pour gagner du temps. Cela peut orienter les investissements vers les liaisons utilisées par les usagers aux revenus élevés, comme les trains rapides entre grandes villes. Pour éviter ce biais, la plupart des méthodes officielles, au Royaume-Uni, en France ou en Suisse, utilisent une valeur moyenne du temps par motif de déplacement, la même pour tous les usagers, plutôt que des valeurs individuelles selon le revenu. C’est un choix éthique : traiter le temps de chacun comme également précieux. Les critiques font valoir que cela s’éloigne des préférences réelles ; les défenseurs y voient une correction nécessaire du biais du surplus en faveur des plus riches."
    },
    lectures: [
      ["Accessible", "Tim Harford, The Undercover Economist, 2005, chapitre 2 sur la discrimination par les prix."],
      ["Accessible", "Erik Brynjolfsson et Avinash Collis, « How Should We Measure the Digital Economy? », Harvard Business Review, 2019."],
      ["Intermédiaire", "Jules Dupuit, « De la mesure de l’utilité des travaux publics », Annales des Ponts et Chaussées, 1844."],
      ["Intermédiaire", "Alfred Marshall, Principes d’économie politique (1890), livre III, chapitre 6."],
      ["Recherche", "Peter Cohen et al., « Using Big Data to Estimate Consumer Surplus: The Case of Uber », NBER, 2016 ; Arnold Harberger, « Monopoly and Resource Allocation », American Economic Review, 1954."]
    ],
    decouvrir: {
      questions: [
        { q: "Vous étiez prêt à payer 50 francs pour un billet et l’avez payé 30. Comment appelle-t-on les 20 francs de différence ?",
          o: ["Le surplus du consommateur", "Le surplus du producteur", "La perte sèche de l’échange", "Le coût d’opportunité"], c: 0,
          e: "C’est le gain de l’échange pour l’acheteur." },
        { q: "Pourquoi une taxe provoque-t-elle une « perte sèche » ?",
          o: ["Parce qu’elle empêche des échanges profitables à l’acheteur comme au vendeur", "Parce que l’État dépense mal les recettes de la taxe, qui sont alors perdues", "Parce qu’elle fait baisser les salaires et réduit le pouvoir d’achat", "Parce que les entreprises la paient deux fois, sur leurs achats et leurs ventes"], c: 0,
          e: "Cette perte ne profite à personne, ni à l’État ni aux acteurs du marché." }
      ],
      duree: 5,
      html: `
<h3>La bonne affaire</h3>
<p>Vous étiez prêt à payer 50 francs pour un billet de concert, et vous l’avez eu pour 30. Vous avez gagné 20 francs de satisfaction en plus de ce que vous avez dépensé. Les économistes appellent ce gain le <b>surplus du consommateur</b>. Le vendeur, qui aurait accepté de vendre moins cher, réalise lui aussi un surplus.</p>
<h3>Combien vaut un pont ?</h3>
<p>L’idée vient d’un ingénieur français, Jules Dupuit, en 1844. Il observe que l’utilité d’un pont ne se mesure pas aux péages encaissés, mais à ce que les usagers seraient prêts à payer. C’est ainsi qu’on évalue encore aujourd’hui les grands projets publics, des lignes de train à grande vitesse aux tunnels alpins.</p>
${triangles}
<h3>Ce que coûte une taxe</h3>
<p>Une taxe rapporte des recettes à l’État, mais empêche aussi des échanges qui auraient profité à l’acheteur comme au vendeur. Cette perte, qui ne profite à personne, s’appelle la perte sèche. Elle augmente vite : une taxe deux fois plus élevée en crée environ quatre fois plus.</p>
<h3>À retenir</h3>
<p>Le surplus mesure le gain de l’échange. La notice complète présente le calcul, les exemples et les limites de cette mesure.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Combien vaut un pont ? Dupuit et les ingénieurs de 1844.",
      raisonnement: "Sept étapes, de la disposition à payer à l’analyse coût-bénéfice.",
      preuves: "Le surplus d’Uber, la valeur des services gratuits, la perte sèche des monopoles.",
      cas: "Le demi-tarif, les billets de concert revendus, les wagons sans toit de Dupuit.",
      objections: "Un franc n’est pas un franc pour tous, disposition à payer et bien-être, biens sans marché, triangles et rectangles.",
      ecoles: "Dupuit, Marshall, Hicks, Harberger, Sen, Brynjolfsson.",
      source: "Dupuit, 1849 : empêcher le voyageur de deuxième classe d’aller en troisième.",
      quiz: "Six questions corrigées, dont un calcul, et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
