/* Œconomia — Entraînement : thème « Inégalités et répartition » (24 exercices, trois niveaux). */
(function () {
  const X = OEC.exo, { rnd, pick, fmt } = X;
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");
  const median = (arr) => { const s = [...arr].sort((a, b) => a - b), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
  /* Impôt par tranches : 0 % jusqu’à 20 000, 10 % de 20 000 à 50 000, 20 % de 50 000 à 100 000, 30 % au-delà */
  const TR = [[20000, 0], [50000, 0.1], [100000, 0.2], [Infinity, 0.3]];
  const impot = (r) => { let t = 0, prev = 0; for (const [lim, taux] of TR) { if (r > prev) t += (Math.min(r, lim) - prev) * taux; prev = lim; } return t; };

  X.theme({ id: "inegalites", nom: "Inégalités et répartition",
    intro: "Comment mesurer les inégalités de revenus et de patrimoine, comment l’impôt et les transferts les modifient-ils, et quelles inégalités sont justes ? Ces exercices vous entraînent à calculer des indicateurs, à comprendre la progressivité de l’impôt et à discuter des grandes théories de la justice.",
    notions: ["courbe-kuznets", "r-g", "capabilites", "optimum-pareto", "plus-value", "rente"] });

  X.add([
  /* =========================== NIVEAU 1 : DÉCOUVERTE =========================== */
  { id: "in1-revenu-patrimoine", theme: "inegalites", niveau: 1, type: "qcm", notion: "r-g",
    titre: "Revenu ou patrimoine ?", competence: "Distinguer un flux d’un stock.",
    enonce: P("Laquelle de ces affirmations décrit correctement la différence entre revenu et patrimoine ?"),
    options: ["Le revenu est ce qu’on possède à un moment donné ; le patrimoine, ce qu’on gagne chaque année.", "Le revenu est ce qu’on perçoit pendant une période (salaire, loyers, intérêts) ; le patrimoine est ce qu’on possède à un moment donné (logement, épargne, actions), moins les dettes.", "Le revenu et le patrimoine sont deux mots pour la même chose.", "Le patrimoine ne comprend que l’argent sur un compte bancaire."], c: 1, pourquoi: ["C’est l’inverse : le revenu est un flux perçu pendant une période ; le patrimoine, un stock possédé à une date.", null, "On peut avoir un revenu élevé et peu de patrimoine, ou l’inverse : ce sont deux grandeurs différentes.", "Le patrimoine comprend aussi le logement, les actions, les terrains ou une entreprise, moins les dettes."],
    explication: P("Le <b>revenu</b> est un <b>flux</b> : ce qu’on perçoit pendant une période, par exemple un salaire mensuel ou des intérêts annuels. Le <b>patrimoine</b> est un <b>stock</b> : la valeur de tout ce qu’on possède à une date donnée, net des dettes.", "Les inégalités de patrimoine sont toujours bien plus fortes que les inégalités de revenus, notamment à cause de l’héritage. En Suisse, le patrimoine est l’un des plus concentrés d’Europe.") },

  { id: "in1-s80s20", theme: "inegalites", niveau: 1, type: "calcul", notion: "courbe-kuznets",
    titre: "Le rapport entre les plus riches et les plus pauvres", competence: "Calculer un indicateur simple d’inégalité.",
    gen: () => ({ r: rnd(120, 190) * 1000, p: rnd(25, 45) * 1000 }),
    enonce: (p) => P(`Dans un pays, le revenu moyen des 20 % les plus aisés est de <b>${fmt(p.r)} francs</b> par an, et celui des 20 % les plus modestes de <b>${fmt(p.p)} francs</b>.`, "Calculez le rapport entre les deux (arrondi à une décimale)."),
    champs: [{ label: "Rapport", unite: "fois", tol: 0.05 }],
    reponses: (p) => [Math.round((p.r / p.p) * 10) / 10],
    indice: "Divisez le revenu des plus aisés par celui des plus modestes.",
    correction: (p) => P(`Rapport = ${fmt(p.r)} ÷ ${fmt(p.p)} ≈ <b>${fmt(p.r / p.p, 1)}</b>.`, `Les 20 % les plus aisés gagnent en moyenne ${fmt(p.r / p.p, 1)} fois plus que les 20 % les plus modestes. Cet indicateur, appelé S80/S20, est utilisé par l’OFS et par Eurostat. Il est simple à comprendre, mais ne dit rien de ce qui se passe au milieu de la distribution.`) },

  { id: "in1-mediane", theme: "inegalites", niveau: 1, type: "calcul", notion: "courbe-kuznets",
    titre: "Moyenne et médiane", competence: "Calculer une moyenne et une médiane et comprendre leur différence.",
    gen: () => { const base = Array.from({ length: 6 }, () => rnd(42, 75) * 100); return { s: [...base, pick([18000, 22000, 25000, 30000])] }; },
    enonce: (p) => P("Voici les salaires mensuels bruts des sept employés d’une petite entreprise (en francs) :", `<b>${p.s.map((x) => fmt(x)).join(" ; ")}</b>`, "Calculez le salaire moyen et le salaire médian (au franc près)."),
    champs: [{ label: "Moyenne", unite: "fr.", tol: 1 }, { label: "Médiane", unite: "fr.", tol: 1 }],
    reponses: (p) => [Math.round(p.s.reduce((a, b) => a + b, 0) / p.s.length), median(p.s)],
    indice: "Moyenne = somme ÷ nombre. Médiane : rangez les salaires dans l’ordre ; c’est celui du milieu (le 4e sur 7).",
    correction: (p) => { const s = [...p.s].sort((a, b) => a - b), m = p.s.reduce((a, b) => a + b, 0) / 7; return P(`Moyenne = ${fmt(p.s.reduce((a, b) => a + b, 0))} ÷ 7 ≈ <b>${fmt(Math.round(m))} francs</b>.`, `Dans l’ordre : ${s.map((x) => fmt(x)).join(" ; ")}. La médiane est le 4e : <b>${fmt(s[3])} francs</b>.`, "La moyenne est tirée vers le haut par le salaire très élevé du directeur ; la médiane, qui partage les salariés en deux moitiés, n’en dépend pas. C’est pourquoi on utilise surtout le salaire <b>médian</b> pour décrire la situation d’un salarié « typique ». En Suisse, il dépasse 6 500 francs par mois."); } },

  { id: "in1-vf-bases", theme: "inegalites", niveau: 1, type: "vf", notion: "courbe-kuznets",
    titre: "Mesurer les inégalités", competence: "Utiliser correctement les indicateurs d’inégalité.",
    affirmations: [
      ["Le coefficient de Gini vaut 0 en cas d’égalité parfaite et 1 si une seule personne reçoit tout.", true, "Plus il est élevé, plus la répartition est inégale. Il est d’environ 0,30 pour le revenu disponible en Suisse."],
      ["Les inégalités de patrimoine sont en général plus faibles que les inégalités de revenus.", false, "C’est l’inverse : le patrimoine s’accumule et se transmet, il est beaucoup plus concentré que le revenu."],
      ["La moitié des salariés gagnent plus que le salaire médian.", true, "C’est la définition de la médiane : elle partage la population en deux moitiés égales."],
      ["Le revenu disponible est le revenu avant impôts et prestations sociales.", false, "Le revenu disponible est le revenu <b>après</b> impôts et cotisations, et après les prestations sociales reçues. C’est ce dont un ménage dispose réellement pour consommer et épargner."]
    ] },

  { id: "in1-progressif", theme: "inegalites", niveau: 1, type: "qcm", notion: "r-g",
    titre: "Impôt progressif ou proportionnel ?", competence: "Distinguer les formes d’impôt.",
    enonce: P("Un impôt est dit progressif quand :"),
    options: ["Tout le monde paie le même montant.", "Tout le monde paie le même pourcentage de son revenu.", "Le pourcentage du revenu payé en impôt augmente avec le revenu.", "Les plus riches ne paient pas d’impôt."], c: 2, pourquoi: ["Un même montant pour tous est un impôt forfaitaire : en proportion, il pèse plus lourd sur les petits revenus.", "Un même pourcentage pour tous définit un impôt proportionnel.", null, "Un impôt progressif fait au contraire payer aux revenus élevés une part plus grande de leur revenu."],
    explication: P("Un impôt <b>progressif</b> prélève une part du revenu (taux moyen) d’autant plus grande que le revenu est élevé : c’est le cas de l’impôt fédéral direct et des impôts cantonaux sur le revenu en Suisse. Un impôt <b>proportionnel</b> prélève le même pourcentage pour tous ; un impôt <b>forfaitaire</b>, le même montant.", "Un impôt peut aussi être <b>régressif</b> : la TVA, qui frappe la consommation, pèse proportionnellement plus sur les ménages modestes, qui consomment une plus grande part de leur revenu.") },

  { id: "in1-pauvrete", theme: "inegalites", niveau: 1, type: "qcm", notion: "capabilites",
    titre: "Pauvreté absolue et pauvreté relative", competence: "Distinguer deux façons de définir la pauvreté.",
    enonce: P("L’OFS mesure en Suisse un « taux de risque de pauvreté » : la part des personnes dont le revenu est inférieur à 60 % du revenu médian. De quel type de mesure s’agit-il ?"),
    options: ["D’une pauvreté absolue : elle compte les personnes qui ne peuvent pas se nourrir.", "D’une pauvreté relative : elle compare le revenu de chacun au niveau de vie habituel de la société.", "D’une mesure du patrimoine.", "D’une mesure du chômage."], c: 1, pourquoi: ["Le seuil est fixé à 60 % du revenu médian : il dépend du niveau de vie du pays, ce n’est pas un minimum fixe.", null, "La mesure porte sur le revenu, pas sur ce que les ménages possèdent.", "Le chômage mesure l’accès à l’emploi ; ce taux mesure le revenu, et touche aussi des personnes qui travaillent."],
    explication: P("C’est une mesure de pauvreté <b>relative</b> : on est considéré comme à risque de pauvreté si l’on a beaucoup moins que la plupart des gens du même pays. Si tous les revenus doublaient, le taux ne changerait pas.", "La pauvreté <b>absolue</b>, elle, se définit par rapport à un minimum fixe, comme le seuil d’extrême pauvreté de la Banque mondiale, fixé à quelques dollars par jour (en parité de pouvoir d’achat). L’OFS publie aussi un taux de pauvreté fondé sur le minimum vital défini par les normes de l’aide sociale.") },

  { id: "in1-seuil", theme: "inegalites", niveau: 1, type: "calcul", notion: "capabilites",
    titre: "Calculer un seuil de pauvreté", competence: "Appliquer la définition d’un seuil de pauvreté relatif.",
    gen: () => ({ med: rnd(38, 52) * 100 }),
    enonce: (p) => P(`Le revenu disponible médian d’une personne seule est de <b>${fmt(p.med)} francs</b> par mois.`, "Calculez le seuil de risque de pauvreté à 60 % du revenu médian, et le seuil plus strict à 50 %."),
    champs: [{ label: "Seuil à 60 %", unite: "fr.", tol: 1 }, { label: "Seuil à 50 %", unite: "fr.", tol: 1 }],
    reponses: (p) => [0.6 * p.med, 0.5 * p.med],
    indice: "Multipliez le revenu médian par 0,6, puis par 0,5.",
    correction: (p) => P(`Seuil à 60 % : 0,6 × ${fmt(p.med)} = <b>${fmt(0.6 * p.med)} francs</b> ; seuil à 50 % : <b>${fmt(0.5 * p.med)} francs</b>.`, "Les personnes dont le revenu est inférieur à ces seuils sont dites « à risque de pauvreté ». Le résultat dépend fortement du seuil choisi, et ne tient pas compte du patrimoine, ce qui peut compter beaucoup pour les retraités.") },

  { id: "in1-quintiles", theme: "inegalites", niveau: 1, type: "document", notion: "courbe-kuznets",
    titre: "Comparer deux répartitions", competence: "Lire une répartition par quintiles.",
    enonce: P("Part du revenu total reçue par chaque cinquième de la population, du plus modeste au plus aisé, dans deux pays fictifs :") +
      `<table><thead><tr><th></th><th>1er quintile</th><th>2e</th><th>3e</th><th>4e</th><th>5e quintile</th></tr></thead><tbody><tr><td>Pays A</td><td>9 %</td><td>14 %</td><td>18 %</td><td>23 %</td><td>36 %</td></tr><tr><td>Pays B</td><td>4 %</td><td>9 %</td><td>14 %</td><td>21 %</td><td>52 %</td></tr></tbody></table>` +
      P("Quelle affirmation est correcte ?"),
    options: ["Le pays A est plus inégal, car son 3e quintile reçoit plus.", "Le pays B est plus inégal : ses 20 % les plus aisés reçoivent plus de la moitié du revenu, et ses 20 % les plus modestes seulement 4 %.", "Les deux pays sont également inégaux, car les parts totalisent 100 %.", "On ne peut pas comparer sans connaître le PIB."], c: 1, pourquoi: ["Une part plus grande pour le quintile du milieu signale plutôt une répartition plus égale ; il faut surtout comparer les extrêmes.", null, "Les parts totalisent toujours 100 % : c’est leur répartition entre quintiles qui compte.", "Le PIB dit la taille du gâteau, pas la façon dont il est partagé ; les parts suffisent pour comparer les inégalités."],
    explication: P("Dans le pays B, le cinquième le plus aisé reçoit 52 % du revenu, soit 13 fois plus que le cinquième le plus modeste (52 ÷ 4). Dans le pays A, ce rapport n’est que de 4 (36 ÷ 9).", "Si l’on traçait les courbes de Lorenz, celle du pays B serait plus éloignée de la diagonale d’égalité, et son coefficient de Gini plus élevé.") },

  /* =========================== NIVEAU 2 : INTERMÉDIAIRE =========================== */
  { id: "in2-tranches", theme: "inegalites", niveau: 2, type: "calcul", notion: "r-g",
    titre: "Calculer un impôt par tranches", competence: "Appliquer un barème progressif et distinguer taux marginal et taux moyen.",
    gen: () => ({ r: pick([35000, 48000, 62000, 75000, 90000, 120000, 150000, 210000]) }),
    enonce: (p) => P("Un barème fictif d’impôt sur le revenu annuel : <b>0 %</b> jusqu’à 20 000 francs ; <b>10 %</b> sur la part de 20 000 à 50 000 ; <b>20 %</b> sur la part de 50 000 à 100 000 ; <b>30 %</b> sur la part au-delà de 100 000.", `Calculez l’impôt dû sur un revenu de <b>${fmt(p.r)} francs</b>, puis le taux moyen d’imposition (arrondi à une décimale).`),
    champs: [{ label: "Impôt", unite: "fr.", tol: 1 }, { label: "Taux moyen", unite: "%", tol: 0.1 }],
    reponses: (p) => [impot(p.r), Math.round((impot(p.r) / p.r) * 1000) / 10],
    indice: "Chaque taux ne s’applique qu’à la part du revenu comprise dans sa tranche. Additionnez les montants, puis divisez par le revenu.",
    correction: (p) => { const parts = []; let prev = 0; for (const [lim, t] of TR) { if (p.r > prev && t > 0) parts.push(`${fmt(t * 100)} % × ${fmt(Math.min(p.r, lim) - prev)} = ${fmt((Math.min(p.r, lim) - prev) * t)}`); prev = lim; } const tm = TR.find(([lim]) => p.r <= lim)[1]; return P(`Par tranche : ${parts.join(" ; ")}.`, `Impôt total = <b>${fmt(impot(p.r))} francs</b> ; taux moyen = ${fmt(impot(p.r))} ÷ ${fmt(p.r)} ≈ <b>${fmt(100 * impot(p.r) / p.r, 1)} %</b>.`, `Le <b>taux marginal</b>, celui qui s’applique au dernier franc gagné, est de ${fmt(tm * 100)} %, bien plus que le taux moyen. Gagner plus ne fait jamais payer le taux supérieur sur tout le revenu : c’est une idée fausse répandue.`); } },

  { id: "in2-gini", theme: "inegalites", niveau: 2, type: "calcul", notion: "courbe-kuznets",
    titre: "Calculer un coefficient de Gini", competence: "Appliquer la formule du Gini à une petite population.",
    gen: () => ({ x: Array.from({ length: 4 }, () => rnd(2, 12) * 10) }),
    enonce: (p) => P(`Quatre personnes ont les revenus suivants (en milliers de francs) : <b>${p.x.join(" ; ")}</b>.`, "Le coefficient de Gini peut se calculer ainsi : <b>G = (somme des écarts absolus entre toutes les paires ordonnées) ÷ (2 × n² × revenu moyen)</b>, avec n = 4. Calculez-le (arrondi à trois décimales)."),
    champs: [{ label: "Gini", unite: "", tol: 0.0015 }],
    reponses: (p) => { const n = p.x.length, mu = p.x.reduce((a, b) => a + b, 0) / n; let s = 0; for (const a of p.x) for (const b of p.x) s += Math.abs(a - b); return [Math.round((s / (2 * n * n * mu)) * 1000) / 1000]; },
    indice: "Faites la somme des |xi − xj| pour toutes les paires (i, j), y compris dans les deux sens : chaque paire de personnes différentes compte deux fois.",
    correction: (p) => { const n = p.x.length, mu = p.x.reduce((a, b) => a + b, 0) / n; let s = 0; for (const a of p.x) for (const b of p.x) s += Math.abs(a - b); const g = s / (2 * n * n * mu); return P(`Revenu moyen = ${p.x.join(" + ")} ÷ 4 = ${fmt(mu, 2)}.`, `Somme des écarts absolus sur les paires ordonnées = ${fmt(s)} (chaque paire de personnes compte deux fois).`, `G = ${fmt(s)} ÷ (2 × 16 × ${fmt(mu, 2)}) ≈ <b>${fmt(g, 3)}</b>.`, "Le Gini vaudrait 0 si tous avaient le même revenu. Ici, avec seulement quatre personnes, sa valeur maximale possible serait 0,75."); } },

  { id: "in2-kuznets", theme: "inegalites", niveau: 2, type: "qcm", notion: "courbe-kuznets",
    titre: "La courbe de Kuznets à l’épreuve", competence: "Confronter une théorie aux données.",
    enonce: P("En 1955, Simon Kuznets suggère que les inégalités augmentent au début de l’industrialisation, puis diminuent avec le développement. Que montrent les séries reconstituées par Piketty, Saez et Atkinson pour les pays riches au XXe siècle ?"),
    options: ["Une baisse continue des inégalités, conforme à Kuznets.", "Une forte baisse entre 1914 et 1945, puis une remontée depuis 1980 : une courbe en U, où les chocs et les politiques comptent plus qu’une loi du développement.", "Une hausse continue depuis 1900.", "Aucune variation significative."], c: 1,
    explication: P("Les séries fiscales montrent une <b>courbe en U</b> : très fortes avant 1914, les inégalités chutent avec les guerres, la crise de 1929, l’inflation et l’impôt progressif, restent faibles jusqu’aux années 1970, puis remontent depuis 1980, surtout aux États-Unis.", "La baisse observée par Kuznets, qui disposait de données jusqu’aux années 1950, n’était donc pas le résultat naturel du développement, mais en grande partie de chocs et de choix politiques. En Suisse, selon Föllmi et Martínez, les inégalités de revenus ont moins varié au XXe siècle que dans les grands pays voisins.") },

  { id: "in2-redistribution", theme: "inegalites", niveau: 2, type: "calcul", notion: "r-g",
    titre: "L’effet de la redistribution", competence: "Mesurer l’effet des impôts et des transferts sur les inégalités.",
    gen: () => ({ r: rnd(140, 200) * 1000, p: rnd(18, 30) * 1000, ti: pick([0.25, 0.3, 0.35]), tr: rnd(10, 20) * 1000 }),
    enonce: (p) => P(`Avant impôts et transferts, le revenu moyen des 20 % les plus aisés est de <b>${fmt(p.r)} francs</b> par an, celui des 20 % les plus modestes de <b>${fmt(p.p)} francs</b>.`, `Les plus aisés paient en moyenne <b>${fmt(p.ti * 100)} %</b> de leur revenu en impôts et cotisations ; les plus modestes reçoivent en moyenne <b>${fmt(p.tr)} francs</b> de prestations sociales (on néglige leurs impôts).`, "Calculez le rapport S80/S20 avant, puis après redistribution (arrondis à une décimale)."),
    champs: [{ label: "Avant", unite: "", tol: 0.05 }, { label: "Après", unite: "", tol: 0.05 }],
    reponses: (p) => [Math.round((p.r / p.p) * 10) / 10, Math.round(((p.r * (1 - p.ti)) / (p.p + p.tr)) * 10) / 10],
    indice: "Après redistribution : revenu des plus aisés × (1 − taux) ; revenu des plus modestes + prestations.",
    correction: (p) => { const a = p.r / p.p, ra = p.r * (1 - p.ti), pa = p.p + p.tr, b = ra / pa; return P(`Avant : ${fmt(p.r)} ÷ ${fmt(p.p)} ≈ <b>${fmt(a, 1)}</b>.`, `Après : ${fmt(ra)} ÷ ${fmt(pa)} ≈ <b>${fmt(b, 1)}</b>.`, `La redistribution réduit le rapport d’environ ${fmt(100 * (1 - b / a), 0)} %. Dans tous les pays riches, les impôts et les transferts réduisent nettement les inégalités de revenus ; l’ampleur de cette réduction varie beaucoup d’un pays à l’autre.`); } },

  { id: "in2-vf-justice", theme: "inegalites", niveau: 2, type: "vf", notion: "capabilites",
    titre: "Les théories de la justice", competence: "Associer chaque auteur à sa conception de la justice.",
    affirmations: [
      ["Pour John Rawls, les inégalités ne sont justes que si elles profitent aux plus défavorisés.", true, "C’est son « principe de différence », choisi derrière un « voile d’ignorance », sans savoir quelle place on occupera dans la société."],
      ["Pour Hayek, la « justice sociale » est un objectif central de l’économie de marché.", false, "Pour Hayek, la répartition issue du marché ne résulte de l’intention de personne : parler de justice à son propos n’a pas de sens, et vouloir la corriger menace la liberté."],
      ["Pour Robert Nozick, une répartition est juste si elle résulte d’échanges libres à partir de possessions acquises légitimement.", true, "Il juge la justice aux procédures et aux droits, pas aux résultats."],
      ["Pour Amartya Sen, il suffit d’égaliser les revenus pour égaliser les libertés réelles.", false, "Sen rappelle que des personnes au même revenu n’ont pas les mêmes possibilités : une personne malade ou handicapée a besoin de plus de ressources. Il propose d’égaliser les <b>capabilités</b>."]
    ] },

  { id: "in2-pareto", theme: "inegalites", niveau: 2, type: "qcm", notion: "optimum-pareto",
    titre: "Efficace mais injuste ?", competence: "Comprendre la portée et les limites de l’optimum de Pareto.",
    enonce: P("Une situation est un optimum de Pareto si l’on ne peut améliorer la situation de quelqu’un sans détériorer celle d’un autre. Une répartition où une personne possède tout et les autres rien peut-elle être un optimum de Pareto ?"),
    options: ["Non, car elle est injuste.", "Seulement si la personne a travaillé pour obtenir ces biens.", "Non, car l’optimum de Pareto impose l’égalité.", "Oui : prendre une partie des biens de la personne qui possède tout détériorerait sa situation. L’optimum de Pareto concerne l’efficacité, pas l’équité."], c: 3,
    explication: P("L’<b>optimum de Pareto</b> est un critère d’<b>efficacité</b> : il dit qu’on ne gaspille pas de possibilités d’améliorer le sort de quelqu’un sans nuire à personne. Il existe une infinité d’optimums, des plus égalitaires aux plus inégalitaires.", "Choisir entre eux suppose un jugement d’<b>équité</b>, que le critère de Pareto ne fournit pas. C’est pourquoi l’économie du bien-être a dû faire appel à la philosophie, de Rawls à Sen.") },

  { id: "in2-successions", theme: "inegalites", niveau: 2, type: "redaction", notion: "r-g",
    titre: "Faut-il taxer davantage les grands héritages ?", competence: "Argumenter sur une question fiscale (10 à 15 lignes).",
    enonce: P("En Suisse, les successions transmises aux enfants sont exonérées d’impôt dans la plupart des cantons. Le 30 novembre 2025, une initiative qui proposait de taxer à 50 % les successions de plus de 50 millions de francs, pour financer la politique climatique, a été rejetée par près de 80 % des votants.", "<b>Consigne :</b> présentez des arguments pour et contre une imposition plus forte des grands héritages, en utilisant au moins une notion d’économie, puis concluez."),
    criteres: ["La réponse présente au moins deux arguments pour : égalité des chances, concentration du patrimoine, poids de l’héritage (r > g), mérite, recettes publiques, efficacité relative de cet impôt…", "Elle présente au moins deux arguments contre : risque de départ des grandes fortunes, transmission des entreprises familiales, double imposition, liberté de transmettre, concurrence fiscale entre pays et cantons…", "Elle mobilise correctement au moins une notion (r > g, inégalités de patrimoine, mobilité sociale, incitations, élasticité de la base fiscale).", "Elle tient compte du résultat de la votation de 2025 ou du contexte suisse (cantons, impôt sur la fortune).", "Elle conclut de façon argumentée."],
    corrige: P("<b>Pour :</b> l’héritage transmet des inégalités qui ne correspondent à aucun mérite ; taxer les très grandes successions favorise l’<b>égalité des chances</b>. Selon Piketty, quand le rendement du capital dépasse la croissance (<b>r > g</b>), le poids des patrimoines hérités augmente : l’impôt sur les successions en limite la concentration. Beaucoup d’économistes jugent aussi cet impôt moins nuisible à l’activité que les impôts sur le travail.", "<b>Contre :</b> les grandes fortunes sont mobiles ; un taux très élevé peut les inciter à quitter la Suisse, et la recette attendue peut alors baisser. La transmission des entreprises familiales peut être menacée si les héritiers doivent vendre pour payer l’impôt. Certains y voient aussi une double imposition d’un patrimoine déjà imposé chaque année par l’impôt cantonal sur la fortune.", "<b>Conclusion :</b> le rejet massif de 2025 montre que les électeurs ont surtout craint le départ des grandes fortunes. Un impôt modéré, avec des règles pour les entreprises familiales et une coordination entre pays, est souvent présenté comme un compromis plus réaliste.") },

  { id: "in2-gatsby", theme: "inegalites", niveau: 2, type: "qcm", notion: "capabilites",
    titre: "Inégalités et mobilité sociale", competence: "Relier inégalités et égalité des chances.",
    enonce: P("L’économiste Miles Corak a mis en évidence la « courbe de Gatsby le Magnifique ». Que montre-t-elle ?"),
    options: ["Que les pays les plus inégaux ont la plus forte mobilité sociale.", "Que la mobilité sociale est la même partout.", "Que les inégalités n’ont aucun lien avec la mobilité sociale.", "Que dans les pays les plus inégaux, le revenu des enfants dépend davantage de celui de leurs parents : la mobilité sociale y est plus faible."], c: 3,
    explication: P("Les pays où les inégalités de revenus sont fortes, comme les États-Unis ou le Royaume-Uni, sont aussi ceux où le revenu des enfants est le plus lié à celui de leurs parents. Les pays nordiques combinent faibles inégalités et forte mobilité.", "Cette relation suggère que les inégalités de résultats d’une génération deviennent des inégalités de chances pour la suivante, par l’éducation, les réseaux et l’héritage. Elle ne prouve pas à elle seule un lien de cause à effet.") },

  /* =========================== NIVEAU 3 : AVANCÉ =========================== */
  { id: "in3-rg", theme: "inegalites", niveau: 3, type: "calcul", notion: "r-g",
    titre: "Ce que r > g signifie vraiment", competence: "Distinguer le rapport entre patrimoine et revenu (β = s ÷ g) et l’effet de r > g sur la concentration des fortunes.",
    gen: () => ({ s: pick([8, 10, 12]), g: pick([1, 1.5, 2, 3]), r: pick([3, 4, 5]), h: pick([50, 100, 200]), n: pick([20, 30]) }),
    enonce: (p) => P(`Selon la « deuxième loi fondamentale » de Thomas Piketty, à long terme, le patrimoine d’un pays tend vers β = s ÷ g années de revenu national, où s est le taux d’épargne nette et g le taux de croissance.`, `1. Avec un taux d’épargne de <b>${fmt(p.s)} %</b> et une croissance de <b>${fmt(p.g)} %</b> par an, vers combien d’années de revenu national le patrimoine tend-il ? Arrondissez à une décimale.`, `2. Un héritier possède une fortune égale à <b>${p.h} fois</b> le revenu moyen. Il réinvestit chaque année tout le rendement de sa fortune, <b>r = ${fmt(p.r)} %</b>, tandis que le revenu moyen croît de <b>${fmt(p.g)} %</b>. Combien de fois le revenu moyen sa fortune vaudra-t-elle dans <b>${p.n} ans</b> ? Arrondissez à l’unité.`),
    champs: [{ label: "β (patrimoine ÷ revenu)", unite: "années", tol: 0.05 }, { label: "Fortune de l’héritier", unite: "fois le revenu moyen", tol: 1 }],
    reponses: (p) => [Math.round((p.s / p.g) * 10) / 10, Math.round(p.h * Math.pow((1 + p.r / 100) / (1 + p.g / 100), p.n))],
    indice: "1. Divisez s par g. 2. Chaque année, la fortune rapportée au revenu moyen est multipliée par (1 + r) ÷ (1 + g).",
    correction: (p) => { const v = p.h * Math.pow((1 + p.r / 100) / (1 + p.g / 100), p.n); return P(`1. β = ${fmt(p.s)} ÷ ${fmt(p.g)} = <b>${fmt(p.s / p.g, 1)} années</b> de revenu national. Le rapport ne grimpe pas sans limite : il se rapproche de cette valeur. Plus la croissance est faible, plus il est élevé : avec 10 % d’épargne, il vaut environ 3,3 années si la croissance est de 3 %, et 6,7 années si elle tombe à 1,5 % (exemple de Piketty et Zucman, 2014).`, `2. Fortune = ${p.h} × (${fmt(1 + p.r / 100, 3)} ÷ ${fmt(1 + p.g / 100, 3)})<sup>${p.n}</sup> ≈ <b>${fmt(v, 0)} fois</b> le revenu moyen.`, "C’est là que joue r > g : la fortune de celui qui peut réinvestir son rendement s’éloigne du revenu moyen. Chez Piketty, l’inégalité r > g explique la concentration des patrimoines entre les personnes, pas une explosion du patrimoine total.", "Ce calcul est très simplifié : l’héritier ne consomme rien, ne paie pas d’impôt et ne partage pas sa fortune entre plusieurs enfants."); } },

  { id: "in3-top", theme: "inegalites", niveau: 3, type: "calcul", notion: "r-g",
    titre: "La part des plus aisés", competence: "Calculer la part du revenu reçue par le sommet de la distribution.",
    gen: () => { const x = Array.from({ length: 9 }, () => rnd(4, 12) * 10); return { x: [...x, pick([200, 300, 450, 600])] }; },
    enonce: (p) => P(`Une population de dix personnes a les revenus annuels suivants (en milliers de francs) : <b>${p.x.join(" ; ")}</b>.`, "Quelle part du revenu total la personne la plus aisée (les « 10 % du sommet ») reçoit-elle ? Et quelle part reçoivent les cinq personnes les plus modestes ? Arrondissez à une décimale."),
    champs: [{ label: "Part des 10 % du sommet", unite: "%", tol: 0.1 }, { label: "Part de la moitié modeste", unite: "%", tol: 0.1 }],
    reponses: (p) => { const s = [...p.x].sort((a, b) => a - b), tot = s.reduce((a, b) => a + b, 0); return [Math.round((s[9] / tot) * 1000) / 10, Math.round((s.slice(0, 5).reduce((a, b) => a + b, 0) / tot) * 1000) / 10]; },
    indice: "Calculez le revenu total, puis rangez les revenus dans l’ordre.",
    correction: (p) => { const s = [...p.x].sort((a, b) => a - b), tot = s.reduce((a, b) => a + b, 0), b5 = s.slice(0, 5).reduce((a, b) => a + b, 0); return P(`Revenu total = ${fmt(tot)}. Revenus rangés : ${s.join(" ; ")}.`, `Sommet : ${s[9]} ÷ ${fmt(tot)} ≈ <b>${fmt(100 * s[9] / tot, 1)} %</b>. Moitié la plus modeste : ${b5} ÷ ${fmt(tot)} ≈ <b>${fmt(100 * b5 / tot, 1)} %</b>.`, "Les travaux de Piketty et Saez s’intéressent surtout à ces parts du sommet, que les enquêtes classiques mesurent mal et que les données fiscales permettent de suivre sur un siècle."); } },

  { id: "in3-marginal-effectif", theme: "inegalites", niveau: 3, type: "calcul", notion: "capabilites",
    titre: "Le taux marginal effectif et la trappe à pauvreté", competence: "Calculer ce que rapporte réellement un revenu supplémentaire.",
    gen: () => ({ gain: pick([500, 800, 1000, 1200]), aide: pick([0.3, 0.5, 0.6, 0.8]), imp: pick([0.05, 0.1, 0.15]) }),
    enonce: (p) => P(`Une mère seule touche un subside pour l’assurance maladie et une aide au logement. Si elle augmente son salaire de <b>${fmt(p.gain)} francs</b> par mois, elle perd des aides pour un montant égal à <b>${fmt(p.aide * 100)} %</b> de ce gain, et paie <b>${fmt(p.imp * 100)} %</b> de ce gain en impôts et cotisations supplémentaires.`, "Combien gagne-t-elle réellement en plus chaque mois, et quel est son taux marginal effectif de prélèvement ?"),
    champs: [{ label: "Gain réel", unite: "fr.", tol: 1 }, { label: "Taux marginal effectif", unite: "%", tol: 0.5 }],
    reponses: (p) => [Math.round(p.gain * (1 - p.aide - p.imp)), Math.round((p.aide + p.imp) * 100)],
    indice: "Retirez du gain brut les aides perdues et les impôts supplémentaires.",
    correction: (p) => { const g = p.gain * (1 - p.aide - p.imp); return P(`Aides perdues : ${fmt(p.aide * p.gain)} francs ; impôts et cotisations : ${fmt(p.imp * p.gain)} francs.`, `Gain réel = ${fmt(p.gain)} − ${fmt(p.aide * p.gain)} − ${fmt(p.imp * p.gain)} = <b>${fmt(Math.round(g))} francs</b>. Taux marginal effectif = <b>${fmt(Math.round((p.aide + p.imp) * 100))} %</b>.`, "Quand ce taux est très élevé, travailler davantage rapporte peu : on parle de <b>trappe à pauvreté</b>. Elle vient souvent du cumul d’aides qui diminuent toutes avec le revenu, parfois brutalement (effets de seuil). Plusieurs cantons ont réformé leurs barèmes pour l’atténuer."); } },

  { id: "in3-elephant", theme: "inegalites", niveau: 3, type: "qcm", notion: "courbe-kuznets",
    titre: "La courbe de l’éléphant", competence: "Distinguer inégalités mondiales et inégalités nationales.",
    enonce: P("L’économiste Branko Milanović a représenté la croissance du revenu de chaque centile de la population mondiale entre 1988 et 2008. La courbe obtenue ressemble à un éléphant. Que montre-t-elle ?"),
    options: ["Que tous les habitants du monde ont vu leur revenu progresser au même rythme.", "Que les classes moyennes des pays émergents, surtout en Asie, et les plus riches du monde ont beaucoup gagné, tandis que les classes moyennes et populaires des pays riches ont peu progressé.", "Que les plus pauvres du monde ont le plus gagné.", "Que les inégalités mondiales ont fortement augmenté pour tous."], c: 1,
    explication: P("La « bosse » de l’éléphant correspond aux classes moyennes de Chine, d’Inde et d’autres pays émergents, dont les revenus ont fortement augmenté. La « trompe » levée, aux 1 % les plus riches du monde. Le creux correspond aux classes moyennes et populaires des pays riches, dont les revenus ont stagné.", "Les inégalités <b>entre pays</b> ont ainsi diminué, alors que les inégalités <b>à l’intérieur</b> de nombreux pays ont augmenté. Cette évolution aide à comprendre le malaise d’une partie des classes moyennes occidentales face à la mondialisation.") },

  { id: "in3-vf-piketty", theme: "inegalites", niveau: 3, type: "vf", notion: "r-g",
    titre: "Débats autour de Piketty", competence: "Connaître les critiques adressées à une grande thèse.",
    affirmations: [
      ["Matthew Rognlie a montré qu’une grande partie de la hausse de la part du capital depuis 1950 vient du logement.", true, "La hausse des prix immobiliers explique l’essentiel de l’augmentation du patrimoine, plus qu’une accumulation de capital productif."],
      ["Acemoglu et Robinson jugent que r > g est une loi générale qui explique toutes les inégalités.", false, "Ils contestent l’idée de « lois générales du capitalisme » et insistent sur le rôle des institutions politiques."],
      ["Piketty a lui-même précisé que r > g n’était pas la cause principale de la hausse récente des inégalités de revenus aux États-Unis.", true, "Aux États-Unis, la hausse vient d’abord des très hauts salaires des dirigeants, qu’il relie à la baisse des taux d’imposition marginaux."],
      ["Toutes les études s’accordent sur l’ampleur exacte de la hausse des hauts revenus américains.", false, "Gerald Auten et David Splinter, par exemple, trouvent une hausse bien plus faible que Piketty et Saez une fois pris en compte les transferts et certains changements fiscaux. Le débat technique reste ouvert."]
    ] },

  { id: "in3-ecart-salarial", theme: "inegalites", niveau: 3, type: "calcul", notion: "capabilites",
    titre: "L’écart salarial entre femmes et hommes", competence: "Calculer un écart salarial et sa part inexpliquée.",
    gen: () => { const h = rnd(68, 80) * 100; const ecart = pick([10, 12, 14, 16, 18]); return { h, f: Math.round(h * (1 - ecart / 100)), expl: pick([45, 50, 55, 60]) }; },
    enonce: (p) => P(`Dans une branche, le salaire mensuel moyen est de <b>${fmt(p.h)} francs</b> pour les hommes et de <b>${fmt(p.f)} francs</b> pour les femmes.`, `Une analyse statistique montre que <b>${p.expl} %</b> de cet écart s’explique par des différences de formation, d’expérience, de poste ou de branche ; le reste n’est pas expliqué par ces facteurs.`, "Calculez l’écart salarial en % du salaire des hommes (arrondi à une décimale), puis la part inexpliquée en francs par mois (arrondie au franc)."),
    champs: [{ label: "Écart", unite: "%", tol: 0.1 }, { label: "Part inexpliquée", unite: "fr.", tol: 1 }],
    reponses: (p) => [Math.round(((p.h - p.f) / p.h) * 1000) / 10, Math.round((p.h - p.f) * (1 - p.expl / 100))],
    indice: "Écart = (salaire des hommes − salaire des femmes) ÷ salaire des hommes × 100. Part inexpliquée = écart en francs × (1 − part expliquée).",
    correction: (p) => { const d = p.h - p.f; return P(`Écart en francs : ${fmt(p.h)} − ${fmt(p.f)} = ${fmt(d)} ; en % : ${fmt(d)} ÷ ${fmt(p.h)} × 100 ≈ <b>${fmt(100 * d / p.h, 1)} %</b>.`, `Part inexpliquée : ${fmt(d)} × ${fmt(1 - p.expl / 100, 2)} ≈ <b>${fmt(Math.round(d * (1 - p.expl / 100)))} francs</b> par mois.`, "En Suisse, l’OFS mesure un écart salarial moyen de l’ordre de 15 à 18 % dans le secteur privé, dont près de la moitié n’est pas expliquée par des facteurs objectifs. La part inexpliquée n’est pas forcément entièrement due à une discrimination, mais elle en contient probablement une partie. Depuis 2020, les entreprises de 100 employés et plus doivent analyser l’égalité salariale."); } },

  { id: "in3-rbi", theme: "inegalites", niveau: 3, type: "redaction", notion: "capabilites",
    titre: "Un revenu de base inconditionnel ?", competence: "Construire une argumentation sur une réforme de la protection sociale (15 à 25 lignes).",
    enonce: P("Le 5 juin 2016, les Suisses ont rejeté à près de 77 % une initiative pour un « revenu de base inconditionnel », qui proposait de verser à chaque habitant un revenu permettant de vivre dignement, sans condition. L’idée revient régulièrement dans le débat, notamment face à l’automatisation.", "<b>Consigne :</b> faut-il instaurer un revenu de base inconditionnel ? Présentez les arguments pour et contre, en mobilisant au moins une notion d’économie, puis concluez."),
    criteres: ["La réponse présente au moins deux arguments pour : lutte contre la pauvreté, simplification des aides, suppression des trappes à pauvreté, liberté de choix (capabilités), réponse à l’automatisation, reconnaissance du travail non rémunéré…", "Elle présente au moins deux arguments contre : coût très élevé, hausse des impôts nécessaire, risque de baisse de l’offre de travail, montant insuffisant pour certains besoins, attractivité pour l’immigration, question de justice (« payer ceux qui ne travaillent pas »)…", "Elle mobilise au moins une notion : incitations, taux marginal effectif, trappe à pauvreté, capabilités, financement par l’impôt…", "Elle évoque des expériences ou alternatives : votation de 2016, expérience finlandaise, impôt négatif de Friedman, aides ciblées…", "Elle conclut de façon argumentée."],
    corrige: P("<b>Pour :</b> un revenu de base garantit à chacun un minimum, sans démarches ni contrôles humiliants. Il supprime les <b>trappes à pauvreté</b>, car on ne le perd pas en travaillant plus. Il élargit les <b>capabilités</b> au sens de Sen : se former, s’occuper de ses proches, s’engager bénévolement. Certains y voient une réponse à l’automatisation, et Milton Friedman défendait une idée proche, l’impôt négatif.", "<b>Contre :</b> verser un revenu suffisant à toute la population coûterait très cher et exigerait de fortes hausses d’impôts. Une partie des bénéficiaires pourrait réduire son temps de travail. Un montant identique pour tous ne couvre pas les besoins particuliers, liés au handicap ou au coût du logement, et l’idée de payer sans contrepartie heurte le sens de la réciprocité de beaucoup de citoyens. L’expérience finlandaise de 2017-2018 a montré une amélioration du bien-être, mais peu d’effet sur l’emploi.", "<b>Conclusion :</b> le rejet de 2016 montre la force de ces objections en Suisse. Des réformes plus ciblées, comme la simplification des aides et la réduction des effets de seuil, peuvent reprendre certains avantages du revenu de base à un coût plus faible.") },

  { id: "in3-capabilites", theme: "inegalites", niveau: 3, type: "document", notion: "capabilites",
    titre: "Même revenu, mêmes libertés ?", competence: "Appliquer l’approche par les capabilités.",
    enonce: P("Deux personnes ont exactement le même revenu disponible, 4 200 francs par mois :") +
      `<table><thead><tr><th></th><th>Anna</th><th>Bruno</th></tr></thead><tbody><tr><td>Santé</td><td>bonne</td><td>se déplace en fauteuil roulant</td></tr><tr><td>Logement</td><td>en ville, proche des transports</td><td>dans une vallée, sans transports adaptés</td></tr><tr><td>Charges particulières</td><td>aucune</td><td>soins à domicile partiellement à sa charge</td></tr></tbody></table>` +
      P("Selon Amartya Sen, que peut-on dire de leur situation ?"),
    options: ["Ils ont le même niveau de bien-être, puisqu’ils ont le même revenu.", "Bruno a des libertés réelles, ses capabilités, plus faibles qu’Anna : avec le même revenu, il ne peut pas faire et être les mêmes choses.", "Anna est désavantagée, car elle vit en ville où tout est plus cher.", "L’approche par les capabilités ne s’intéresse qu’au revenu."], c: 1,
    explication: P("Pour Sen, le revenu n’est qu’un moyen. Ce qui compte, ce sont les <b>capabilités</b> : les possibilités réelles de mener la vie qu’on a des raisons de valoriser (se déplacer, travailler, participer à la vie sociale). Bruno doit consacrer une partie de son revenu à des soins et a moins de possibilités de déplacement : à revenu égal, ses libertés réelles sont plus faibles.", "C’est pourquoi l’égalité des revenus ne suffit pas : des politiques comme l’accessibilité des transports ou la prise en charge des soins élargissent ses capabilités.") }
  ]);
})();
