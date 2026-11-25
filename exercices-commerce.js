/* Œconomia — Entraînement : thème « Commerce international » (24 exercices, trois niveaux). */
(function () {
  const X = OEC.exo, { rnd, pick, fmt } = X;
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");
  const lin = (a, b) => `${a} − ${b === 1 ? "" : b}P`;
  const linp = (c, d) => (c >= 0 ? `${c} + ${d === 1 ? "" : d}P` : `${d === 1 ? "" : d}P − ${-c}`);

  /* Marché d’un petit pays importateur : prix mondial, droit de douane (en francs), demande et offre intérieures linéaires */
  const genTarif = () => {
    const b = rnd(3, 6), d = rnd(2, 5), Pw = rnd(10, 18), t = pick([2, 3, 4]);
    const Pa = Pw + t + rnd(3, 8);                     /* prix d’autarcie, au-dessus du prix avec taxe */
    const Qa = rnd(150, 300);
    return { a: Qa + b * Pa, b, c: Qa - d * Pa, d, Pw, t };
  };
  const imports = (p, prix) => (p.a - p.b * prix) - (p.c + p.d * prix);

  X.theme({ id: "commerce", nom: "Commerce international",
    intro: "Pourquoi les pays échangent-ils, qui y gagne et qui y perd, et que provoquent les droits de douane ? Ces exercices vous entraînent à calculer des avantages comparatifs, des soldes commerciaux et les effets d’un droit de douane, et à discuter du libre-échange et du protectionnisme.",
    notions: ["avantage-comparatif", "rendements-croissants", "division-travail", "institutions-inclusives", "surplus"] });

  X.add([
  /* =========================== NIVEAU 1 : DÉCOUVERTE =========================== */
  { id: "co1-absolu-comparatif", theme: "commerce", niveau: 1, type: "qcm", notion: "avantage-comparatif",
    titre: "Avantage absolu et avantage comparatif", competence: "Distinguer les deux notions.",
    enonce: P("Une avocate tape son courrier deux fois plus vite que sa secrétaire. Pourtant, elle a intérêt à lui confier cette tâche. Pourquoi ?"),
    options: ["Parce que la secrétaire a un avantage absolu dans la frappe.", "Parce que le temps de l’avocate est plus utile dans son métier d’avocate : la secrétaire a un avantage comparatif dans la frappe.", "Parce que la loi interdit aux avocats de taper leur courrier.", "Parce qu’il vaut toujours mieux faire faire le travail par quelqu’un d’autre."], c: 1, pourquoi: ["C’est l’avocate qui a l’avantage absolu, puisqu’elle tape plus vite. La secrétaire a un avantage comparatif.", null, "Aucune loi n’interdit à un avocat de taper son courrier : la raison est économique.", "Pas toujours : déléguer n’est avantageux que si l’autre a un coût d’opportunité plus faible pour cette tâche."],
    explication: P("L’avocate a un <b>avantage absolu</b> dans la frappe : elle est plus rapide. Mais chaque heure passée à taper l’empêche de plaider, ce qui lui rapporte beaucoup plus. Son <b>coût d’opportunité</b> pour la frappe est élevé ; celui de la secrétaire est faible. La secrétaire a donc un <b>avantage comparatif</b> dans la frappe.", "C’est le raisonnement de Ricardo appliqué aux pays : chacun gagne à se spécialiser là où il renonce au moins, même s’il est moins efficace en tout.") },

  { id: "co1-balance", theme: "commerce", niveau: 1, type: "calcul", notion: "avantage-comparatif",
    titre: "Le solde de la balance commerciale", competence: "Calculer un solde commercial et un taux de couverture.",
    gen: () => ({ x: rnd(260, 420), m: rnd(230, 400) }),
    enonce: (p) => P(`Un pays a exporté pour <b>${p.x} milliards</b> de francs de marchandises et importé pour <b>${p.m} milliards</b>.`, "Calculez le solde de la balance commerciale (signe moins en cas de déficit), puis le taux de couverture (exportations ÷ importations × 100), arrondi à une décimale."),
    champs: [{ label: "Solde", unite: "milliards", tol: 0.05 }, { label: "Taux de couverture", unite: "%", tol: 0.1 }],
    reponses: (p) => [p.x - p.m, Math.round((p.x / p.m) * 1000) / 10],
    indice: "Solde = exportations − importations.",
    correction: (p) => P(`Solde = ${p.x} − ${p.m} = <b>${p.x - p.m} milliards</b> : ${p.x >= p.m ? "un excédent" : "un déficit"} commercial.`, `Taux de couverture = ${p.x} ÷ ${p.m} × 100 ≈ <b>${fmt(100 * p.x / p.m, 1)} %</b>.`, "Un excédent n’est pas forcément une « victoire » et un déficit pas forcément une faiblesse : un pays en forte croissance peut importer beaucoup de machines. La Suisse a des excédents commerciaux importants depuis longtemps.") },

  { id: "co1-cout-opp", theme: "commerce", niveau: 1, type: "calcul", notion: "avantage-comparatif",
    titre: "Le coût d’opportunité d’une production", competence: "Calculer ce à quoi on renonce en produisant un bien.",
    gen: () => { const m = rnd(2, 6), f = pick([2, 3, 4, 6, 8, 10, 12].filter((x) => x !== m)); return { m, f }; },
    enonce: (p) => P(`En une journée de travail, un atelier peut fabriquer soit <b>${p.m} montres</b>, soit <b>${p.f} meules de fromage</b>.`, "Quel est le coût d’opportunité d’une montre, exprimé en meules de fromage ? Arrondissez à deux décimales."),
    champs: [{ label: "1 montre =", unite: "meules", tol: 0.01 }],
    reponses: (p) => [Math.round((p.f / p.m) * 100) / 100],
    indice: "Produire une montre prend 1/" + "n journée : combien de fromages aurait-on pu faire pendant ce temps ?",
    correction: (p) => P(`Une montre demande 1/${p.m} de journée. Pendant ce temps, on aurait pu fabriquer ${p.f} ÷ ${p.m} = <b>${fmt(p.f / p.m, 2)} meules</b> de fromage.`, `Inversement, une meule coûte ${fmt(p.m / p.f, 2)} montre. Le pays qui a le coût d’opportunité le plus faible pour un bien a l’avantage comparatif dans ce bien.`) },

  { id: "co1-vf-bases", theme: "commerce", niveau: 1, type: "vf", notion: "avantage-comparatif",
    titre: "Commerce international : les bases", competence: "Utiliser le vocabulaire du commerce international.",
    affirmations: [
      ["Un droit de douane est un impôt prélevé sur les produits importés.", true, "Il renchérit les importations et protège les producteurs nationaux de la concurrence étrangère."],
      ["Le protectionnisme désigne l’ensemble des mesures qui favorisent les importations.", false, "C’est l’inverse : il regroupe les mesures qui <b>limitent</b> les importations pour protéger la production nationale (droits de douane, quotas, normes, subventions)."],
      ["L’essentiel du commerce mondial se fait entre pays très différents, qui échangent des produits très différents.", false, "Une grande partie du commerce se fait entre pays riches semblables, qui échangent des produits semblables : c’est le commerce intra-branche, expliqué par Krugman."],
      ["Les produits chimiques et pharmaceutiques représentent la plus grande part des exportations de marchandises de la Suisse.", true, "Ils représentent environ la moitié des exportations suisses de marchandises, loin devant les machines et l’horlogerie."]
    ] },

  { id: "co1-douane", theme: "commerce", niveau: 1, type: "qcm", notion: "surplus",
    titre: "Qui paie un droit de douane ?", competence: "Prévoir l’effet d’un droit de douane pour les consommateurs.",
    enonce: P("Un pays impose un droit de douane de 25 % sur les vélos importés. Quel effet peut-on attendre pour les consommateurs de ce pays ?"),
    options: ["Les vélos deviennent moins chers, car les producteurs nationaux baissent leurs prix.", "Les vélos importés, et souvent aussi les vélos nationaux, deviennent plus chers.", "Rien ne change pour les consommateurs : ce sont les pays exportateurs qui paient.", "Les consommateurs reçoivent la recette du droit de douane."], c: 1, pourquoi: ["Protégés par le droit de douane, les producteurs nationaux subissent moins de concurrence : ils ont plutôt intérêt à monter leurs prix.", null, "Le droit est payé à la frontière par l’importateur, qui le répercute en grande partie sur le prix de vente : ce sont surtout les consommateurs du pays qui paient.", "La recette va à l’État, pas directement aux consommateurs."],
    explication: P("Le droit de douane renchérit les vélos importés. Protégés de la concurrence, les producteurs nationaux peuvent eux aussi augmenter leurs prix. Les <b>consommateurs</b> paient donc plus cher et achètent moins.", "Les producteurs nationaux et l’État, qui perçoit la taxe, y gagnent ; mais la perte des consommateurs est en général plus importante que ces gains.") },

  { id: "co1-mercantilisme", theme: "commerce", niveau: 1, type: "qcm", notion: "division-travail",
    titre: "La doctrine mercantiliste", competence: "Connaître une vision historique du commerce.",
    enonce: P("Au XVIIe siècle, Thomas Mun en Angleterre ou Colbert en France défendent le mercantilisme. Que pensent-ils du commerce extérieur ?"),
    options: ["Que l’échange enrichit tous les pays.", "Qu’un pays doit exporter plus qu’il n’importe pour accumuler de l’or et de l’argent, source de sa puissance.", "Qu’il faut supprimer tous les droits de douane.", "Que la richesse vient de la terre et de l’agriculture."], c: 1, pourquoi: ["C’est la vision de Smith et de Ricardo, qui critiqueront le mercantilisme.", null, "Les mercantilistes défendent au contraire les droits de douane, pour protéger les manufactures et limiter les importations.", "C’est la thèse des physiocrates, comme Quesnay au XVIIIe siècle."],
    explication: P("Pour les mercantilistes, la richesse d’un État se mesure à son stock de métaux précieux. Il faut donc des <b>excédents commerciaux</b> : exporter des produits finis, importer peu, protéger les manufactures. Le commerce est vu comme une rivalité.", "Adam Smith et David Ricardo critiqueront cette vision : la richesse est ce qu’un pays produit, et l’échange peut enrichir tous les partenaires. La dernière réponse correspond aux physiocrates.") },

  { id: "co1-partenaires", theme: "commerce", niveau: 1, type: "qcm", notion: "rendements-croissants",
    titre: "Les partenaires commerciaux de la Suisse", competence: "Connaître les grandes caractéristiques du commerce suisse.",
    enonce: P("Quel est le principal partenaire commercial de la Suisse, pris dans son ensemble ?"),
    options: ["La Chine.", "L’Union européenne.", "Le Japon.", "Les pays d’Afrique."], c: 1, pourquoi: ["La Chine est un partenaire important, mais loin derrière l’Union européenne.", null, "Le Japon pèse bien moins que l’Union européenne dans le commerce suisse.", "Les pays d’Afrique représentent une part faible des échanges suisses."],
    explication: P("L’<b>Union européenne</b> est de loin le premier partenaire commercial de la Suisse, en particulier l’Allemagne, l’Italie et la France : elle représente environ la moitié des exportations de marchandises et une part plus importante encore des importations. Les échanges sont encadrés par l’accord de libre-échange de 1972 et par les accords bilatéraux.", "Pris individuellement, les États-Unis sont devenus l’un des premiers pays de destination des exportations suisses, notamment pour les produits pharmaceutiques.") },

  { id: "co1-exports", theme: "commerce", niveau: 1, type: "document", notion: "avantage-comparatif",
    titre: "Que vend la Suisse au monde ?", competence: "Lire la structure des exportations d’un pays.",
    enonce: P("Part approximative des principales branches dans les exportations suisses de marchandises (années 2020, valeurs arrondies, hors or) :") +
      `<table><thead><tr><th>Branche</th><th>Part</th></tr></thead><tbody><tr><td>Chimie et pharmacie</td><td>environ 50 %</td></tr><tr><td>Machines et électronique</td><td>environ 12 %</td></tr><tr><td>Horlogerie</td><td>environ 9 %</td></tr><tr><td>Instruments de précision</td><td>environ 7 %</td></tr><tr><td>Autres</td><td>environ 22 %</td></tr></tbody></table><p class="ex-source">Source : Office fédéral de la douane et de la sécurité des frontières (OFDF), statistique du commerce extérieur ; parts arrondies, années 2020, hors or.</p>` +
      P("Quelle conclusion est la plus juste ?"),
    options: ["La Suisse exporte surtout des matières premières.", "La Suisse s’est spécialisée dans des produits à forte valeur ajoutée, qui demandent beaucoup de recherche et de main-d’œuvre qualifiée.", "L’horlogerie est la première branche exportatrice de la Suisse.", "La Suisse n’a aucun avantage comparatif."], c: 1, pourquoi: ["La Suisse a peu de matières premières : elle exporte surtout des produits transformés, d’abord chimiques et pharmaceutiques.", null, "L’horlogerie pèse environ 9 % ; la chimie et la pharmacie, environ 50 %, viennent largement en tête.", "Une spécialisation aussi nette révèle au contraire des avantages comparatifs, dans les produits qui demandent recherche et main-d’œuvre qualifiée."],
    explication: P("La chimie et la pharmacie, les machines, l’horlogerie et les instruments de précision sont des produits qui demandent beaucoup de <b>capital humain</b> et d’innovation. La Suisse, pauvre en ressources naturelles mais riche en main-d’œuvre qualifiée et en recherche, a un avantage comparatif dans ces productions, comme le prévoit la théorie de Heckscher et Ohlin.", "Cette concentration sur la pharmacie rend aussi la Suisse sensible aux décisions de quelques grandes entreprises et aux politiques commerciales de ses clients.") },

  /* =========================== NIVEAU 2 : INTERMÉDIAIRE =========================== */
  { id: "co2-ricardo", theme: "commerce", niveau: 2, type: "calcul", notion: "avantage-comparatif",
    titre: "Trouver l’avantage comparatif", competence: "Calculer et comparer des coûts d’opportunité entre deux pays.",
    gen: () => { let a1, a2, b1, b2; do { a1 = rnd(2, 8); a2 = rnd(2, 8); b1 = rnd(2, 8); b2 = rnd(2, 8); } while (Math.abs(a1 / a2 - b1 / b2) < 0.15); return { a1, a2, b1, b2 }; },
    enonce: (p) => P("Heures de travail nécessaires pour produire une unité :") +
      `<table><thead><tr><th></th><th>Chocolat (1 kg)</th><th>Logiciel (1 licence)</th></tr></thead><tbody><tr><td>Pays A</td><td>${p.a1} h</td><td>${p.a2} h</td></tr><tr><td>Pays B</td><td>${p.b1} h</td><td>${p.b2} h</td></tr></tbody></table><p class="ex-source">Données tirées au hasard pour l’exercice.</p>` +
      P("Calculez, pour chaque pays, le coût d’opportunité d’un kilo de chocolat en licences de logiciel (arrondi à deux décimales). Le pays dont le coût est le plus faible a l’avantage comparatif dans le chocolat."),
    champs: [{ label: "Pays A", unite: "licence(s)", tol: 0.01 }, { label: "Pays B", unite: "licence(s)", tol: 0.01 }],
    reponses: (p) => [Math.round((p.a1 / p.a2) * 100) / 100, Math.round((p.b1 / p.b2) * 100) / 100],
    indice: "Coût d’opportunité du chocolat = heures pour le chocolat ÷ heures pour un logiciel.",
    correction: (p) => { const ca = p.a1 / p.a2, cb = p.b1 / p.b2, A = ca < cb; return P(`Pays A : ${p.a1} ÷ ${p.a2} = <b>${fmt(ca, 2)}</b> licence ; pays B : ${p.b1} ÷ ${p.b2} = <b>${fmt(cb, 2)}</b> licence.`, `Le pays <b>${A ? "A" : "B"}</b> renonce à moins de logiciels pour produire du chocolat : il a l’avantage comparatif dans le chocolat ; l’autre pays l’a dans les logiciels.`, (p.a1 < p.b1 && p.a2 < p.b2) || (p.a1 > p.b1 && p.a2 > p.b2) ? `Remarquez qu’un des deux pays est plus productif pour les deux biens (avantage absolu), et pourtant l’échange profite aux deux : c’est le résultat de Ricardo.` : `Ici, chaque pays a aussi un avantage absolu dans un bien différent.`); } },

  { id: "co2-termes", theme: "commerce", niveau: 2, type: "calcul", notion: "avantage-comparatif",
    titre: "À quel prix échanger ?", competence: "Déterminer l’intervalle des termes de l’échange mutuellement avantageux.",
    gen: () => { const pairs = [[1, 2], [2, 3], [3, 4], [1, 3], [2, 5], [3, 5]]; const [x, y] = pick(pairs); const k = pick([1, 2]); return { lo: x * k / (y * k), hi: (y + x) / y, x, y }; },
    enonce: (p) => P(`Le Portugal peut produire 1 tonneau de vin en renonçant à <b>${fmt(p.lo, 2)}</b> pièce de drap ; l’Angleterre doit renoncer à <b>${fmt(p.hi, 2)}</b> pièce de drap pour produire 1 tonneau de vin.`, "Le Portugal se spécialise dans le vin, l’Angleterre dans le drap. Entre quelles limites doit se situer le prix d’un tonneau de vin, exprimé en drap, pour que l’échange profite aux deux pays ?"),
    champs: [{ label: "Prix minimal", unite: "drap", tol: 0.01 }, { label: "Prix maximal", unite: "drap", tol: 0.01 }],
    reponses: (p) => [Math.round(p.lo * 100) / 100, Math.round(p.hi * 100) / 100],
    indice: "Le Portugal n’accepte pas de vendre son vin moins cher que ce qu’il lui coûte ; l’Angleterre n’accepte pas de le payer plus cher que ce qu’il lui coûterait de le produire.",
    correction: (p) => P(`Le Portugal vend son vin seulement s’il reçoit au moins ce qu’il lui coûte : <b>${fmt(p.lo, 2)}</b> drap par tonneau.`, `L’Angleterre l’achète seulement si c’est moins cher que de le produire elle-même : au plus <b>${fmt(p.hi, 2)}</b> drap par tonneau.`, "Tout prix compris entre ces deux limites fait gagner les deux pays. Le prix exact, appelé <b>termes de l’échange</b>, dépend de la demande de chaque pays et détermine comment le gain est partagé.") },

  { id: "co2-ho", theme: "commerce", niveau: 2, type: "qcm", notion: "avantage-comparatif",
    titre: "Le modèle de Heckscher-Ohlin", competence: "Relier les dotations en facteurs à la spécialisation.",
    enonce: P("Selon le modèle de Heckscher et Ohlin, quel type de biens la Suisse, riche en capital et en main-d’œuvre très qualifiée mais pauvre en terres et en ressources naturelles, devrait-elle exporter ?"),
    options: ["Des céréales et du bois.", "Des biens qui utilisent beaucoup de capital et de travail qualifié, comme les médicaments ou les machines de précision.", "Des produits textiles bon marché.", "Du pétrole."], c: 1,
    explication: P("Le modèle de Heckscher-Ohlin explique le commerce par les <b>dotations en facteurs</b> : chaque pays exporte les biens qui utilisent intensivement ce dont il dispose en abondance, et importe ceux qui utilisent ce qui lui manque. La Suisse exporte des produits à forte intensité en capital et en qualifications, et importe des matières premières, de l’énergie et des produits agricoles.", "Le théorème de Stolper et Samuelson en tire une conséquence : l’ouverture profite aux facteurs abondants et pèse sur les facteurs rares.") },

  { id: "co2-tarif-effets", theme: "commerce", niveau: 2, type: "qcm", notion: "surplus",
    titre: "Le bilan d’un droit de douane", competence: "Identifier les gagnants et les perdants d’un droit de douane.",
    enonce: P("Un petit pays, qui ne peut pas influencer les prix mondiaux, impose un droit de douane sur l’acier importé. Quel bilan l’analyse économique standard en tire-t-elle pour ce pays ?"),
    options: ["Tout le monde y gagne : producteurs, consommateurs et État.", "Les producteurs nationaux et l’État y gagnent, les consommateurs y perdent davantage : il reste une perte nette, la perte sèche.", "Seuls les pays étrangers y perdent.", "Les consommateurs y gagnent, car l’acier national est de meilleure qualité."], c: 1,
    explication: P("Le droit de douane fait monter le prix intérieur. Les <b>producteurs nationaux</b> vendent plus cher et produisent davantage : ils y gagnent. L’<b>État</b> perçoit la taxe sur les importations restantes. Les <b>consommateurs</b> paient plus cher et achètent moins : ils y perdent.", "La perte des consommateurs dépasse la somme des gains : la différence est la <b>perte sèche</b>, due à une production nationale plus coûteuse et à des achats qui n’ont plus lieu. Pour un grand pays, qui peut faire baisser le prix mondial, le bilan peut être différent.") },

  { id: "co2-importations", theme: "commerce", niveau: 2, type: "calcul", notion: "surplus",
    titre: "L’effet d’un droit de douane sur les importations", competence: "Calculer les importations avant et après un droit de douane.",
    gen: genTarif,
    enonce: (p) => P(`Dans un petit pays, la demande et l’offre intérieures de fromage à raclette (en tonnes) sont : <b>Q<sub>d</sub> = ${lin(p.a, p.b)}</b> et <b>Q<sub>o</sub> = ${linp(p.c, p.d)}</b> (P en francs par kilo).`, `Le prix mondial est de <b>${p.Pw} francs</b>. Le pays importe ce qui manque à ce prix. Il instaure ensuite un droit de douane de <b>${p.t} francs par kilo</b>.`, "Calculez les importations avant et après le droit de douane."),
    champs: [{ label: "Importations avant", unite: "t", tol: 0.5 }, { label: "Importations après", unite: "t", tol: 0.5 }],
    reponses: (p) => [imports(p, p.Pw), imports(p, p.Pw + p.t)],
    indice: "Importations = quantité demandée − quantité offerte, au prix en vigueur (prix mondial, puis prix mondial + droit de douane).",
    correction: (p) => { const P1 = p.Pw + p.t; return P(`Avant : Q<sub>d</sub> = ${p.a} − ${p.b} × ${p.Pw} = ${p.a - p.b * p.Pw} ; Q<sub>o</sub> = ${p.c} + ${p.d} × ${p.Pw} = ${p.c + p.d * p.Pw}. Importations = <b>${imports(p, p.Pw)} t</b>.`, `Après, au prix de ${P1} francs : Q<sub>d</sub> = ${p.a - p.b * P1} ; Q<sub>o</sub> = ${p.c + p.d * P1}. Importations = <b>${imports(p, P1)} t</b>.`, `Les importations baissent de ${imports(p, p.Pw) - imports(p, P1)} tonnes : la production nationale augmente de ${p.d * p.t} t et la consommation diminue de ${p.b * p.t} t.`); } },

  { id: "co2-vf-gagnants", theme: "commerce", niveau: 2, type: "vf", notion: "avantage-comparatif",
    titre: "Gagnants et perdants de la mondialisation", competence: "Connaître les effets répartitifs du commerce.",
    affirmations: [
      ["Selon la théorie, l’ouverture au commerce augmente le revenu total d’un pays, mais peut faire des perdants.", true, "Le gain d’ensemble permettrait en principe de compenser les perdants, mais cette compensation n’a souvent pas eu lieu."],
      ["Les travaux sur le « choc chinois » ont montré que les pertes d’emplois industriels aux États-Unis étaient réparties de façon uniforme sur tout le territoire.", false, "Elles ont été <b>concentrées</b> dans certaines régions, durables et mal compensées, selon David Autor, David Dorn et Gordon Hanson."],
      ["Les consommateurs des pays riches ont bénéficié de la baisse des prix de nombreux produits importés.", true, "Vêtements, électronique et jouets sont devenus beaucoup moins chers, ce qui a surtout profité aux ménages modestes, qui y consacrent une part importante de leur budget."],
      ["Le théorème de Stolper-Samuelson prédit que l’ouverture profite au facteur de production rare dans le pays.", false, "Il prédit l’inverse : l’ouverture profite au facteur <b>abondant</b> et pèse sur le facteur rare."]
    ] },

  { id: "co2-agriculture", theme: "commerce", niveau: 2, type: "redaction", notion: "surplus",
    titre: "Faut-il protéger l’agriculture suisse ?", competence: "Argumenter sur une politique commerciale (10 à 15 lignes).",
    enonce: P("La Suisse a supprimé ses droits de douane sur les produits industriels en 2024, mais son agriculture reste l’une des plus protégées du monde, par des droits de douane élevés et des paiements directs aux paysans.", "<b>Consigne :</b> présentez des arguments en faveur et contre cette protection, en utilisant au moins une notion d’économie (avantage comparatif, prix, surplus, externalité, bien public), puis concluez."),
    criteres: ["La réponse présente au moins deux arguments en faveur : sécurité de l’approvisionnement, entretien des paysages et des régions de montagne, qualité et normes, emplois agricoles, tourisme…", "Elle présente au moins deux arguments contre : prix plus élevés pour les consommateurs, coût pour les contribuables, perte sèche, entrave aux accords de libre-échange, absence d’avantage comparatif…", "Elle utilise correctement au moins une notion d’économie.", "Elle distingue éventuellement les instruments : droits de douane (payés par les consommateurs) et paiements directs (payés par les contribuables, liés à des prestations).", "Elle conclut de façon argumentée."],
    corrige: P("<b>Pour :</b> l’agriculture ne produit pas seulement des aliments. Elle entretient les paysages, maintient la vie dans les régions de montagne et contribue au tourisme : ce sont des <b>externalités positives</b> et des <b>biens publics</b> que le marché ne rémunère pas. La protection assure aussi une part d’approvisionnement national en cas de crise, et le respect de normes élevées en matière de bien-être animal et d’environnement.", "<b>Contre :</b> la Suisse n’a pas d’<b>avantage comparatif</b> dans la plupart des productions agricoles, en raison du relief, du climat et de salaires élevés. Les droits de douane font payer aux consommateurs des prix bien plus élevés qu’à l’étranger, entraînent une perte sèche, et compliquent la conclusion d’accords de libre-échange avec de grands pays agricoles.", "<b>Conclusion :</b> soutenir les prestations utiles à toute la société, comme l’entretien des paysages, par des paiements directs ciblés est plus efficace que de protéger les prix par des droits de douane, qui pèsent surtout sur les ménages modestes.") },

  { id: "co2-intra", theme: "commerce", niveau: 2, type: "qcm", notion: "rendements-croissants",
    titre: "Des voitures contre des voitures", competence: "Expliquer le commerce intra-branche.",
    enonce: P("L’Allemagne vend des voitures à la France, et la France vend des voitures à l’Allemagne. Comment Paul Krugman explique-t-il ce commerce entre pays semblables ?"),
    options: ["Par l’avantage comparatif de Ricardo : chaque pays produit le type de voiture où il est le plus efficace.", "Par les rendements croissants et le goût des consommateurs pour la variété : chaque entreprise produit en grande série quelques modèles, que les autres pays achètent aussi.", "Par les différences de dotations en pétrole.", "Par les droits de douane élevés entre les deux pays."], c: 1,
    explication: P("Quand la production bénéficie de <b>rendements croissants</b>, produire en grande série réduit les coûts : chaque constructeur se concentre sur quelques modèles. Comme les consommateurs aiment la <b>variété</b>, chaque pays exporte certains modèles et importe les autres.", "Ce commerce <b>intra-branche</b>, qui domine les échanges entre pays riches, fait moins de perdants que le commerce entre pays très différents, car il ne supprime pas des branches entières.") },

  /* =========================== NIVEAU 3 : AVANCÉ =========================== */
  { id: "co3-recette-perte", theme: "commerce", niveau: 3, type: "calcul", notion: "surplus",
    titre: "Recette douanière et perte sèche", competence: "Calculer la recette fiscale et la perte sèche d’un droit de douane.",
    gen: genTarif,
    enonce: (p) => P(`Petit pays : <b>Q<sub>d</sub> = ${lin(p.a, p.b)}</b>, <b>Q<sub>o</sub> = ${linp(p.c, p.d)}</b>, prix mondial <b>${p.Pw} francs</b>, droit de douane <b>${p.t} francs</b> par unité.`, "Calculez la recette du droit de douane pour l’État, puis la perte sèche totale (les deux triangles de perte : surcoût de la production nationale supplémentaire et consommation perdue)."),
    champs: [{ label: "Recette", unite: "fr.", tol: 0.5 }, { label: "Perte sèche", unite: "fr.", tol: 0.5 }],
    reponses: (p) => [p.t * imports(p, p.Pw + p.t), 0.5 * p.t * (p.d * p.t) + 0.5 * p.t * (p.b * p.t)],
    indice: "Recette = droit de douane × importations après le droit. Chaque triangle de perte = ½ × droit × variation de quantité (production pour l’un, consommation pour l’autre).",
    correction: (p) => { const M1 = imports(p, p.Pw + p.t), dQo = p.d * p.t, dQd = p.b * p.t; return P(`Importations après le droit : ${M1}. Recette = ${p.t} × ${M1} = <b>${fmt(p.t * M1)} francs</b>.`, `La production nationale augmente de ${p.d} × ${p.t} = ${dQo} ; la consommation baisse de ${p.b} × ${p.t} = ${dQd}.`, `Perte sèche = ½ × ${p.t} × ${dQo} + ½ × ${p.t} × ${dQd} = ${fmt(0.5 * p.t * dQo)} + ${fmt(0.5 * p.t * dQd)} = <b>${fmt(0.5 * p.t * (dQo + dQd))} francs</b>.`, "Le premier triangle correspond à des unités produites dans le pays plus cher qu’à l’étranger ; le second à des achats qui n’ont plus lieu. Ni l’État ni les producteurs ne récupèrent ces montants."); } },

  { id: "co3-change", theme: "commerce", niveau: 3, type: "calcul", notion: "avantage-comparatif",
    titre: "Le franc fort et le prix des exportations", competence: "Calculer l’effet d’une variation du taux de change sur un prix à l’export.",
    gen: () => ({ prix: pick([1200, 2500, 4800, 6500, 9000]), e0: pick([1.2, 1.1, 1.05]), e1: pick([1.0, 0.95, 0.93]) }),
    enonce: (p) => P(`Une montre suisse coûte <b>${fmt(p.prix)} francs</b>. Le taux de change passe de <b>1 € = ${fmt(p.e0, 2)} CHF</b> à <b>1 € = ${fmt(p.e1, 2)} CHF</b>, le prix en francs restant inchangé.`, "Quel est le prix de la montre en euros avant et après ? Arrondissez à l’euro."),
    champs: [{ label: "Prix avant", unite: "€", tol: 1 }, { label: "Prix après", unite: "€", tol: 1 }],
    reponses: (p) => [Math.round(p.prix / p.e0), Math.round(p.prix / p.e1)],
    indice: "Prix en euros = prix en francs ÷ nombre de francs pour un euro.",
    correction: (p) => { const a = p.prix / p.e0, b = p.prix / p.e1; return P(`Avant : ${fmt(p.prix)} ÷ ${fmt(p.e0, 2)} ≈ <b>${fmt(Math.round(a))} €</b>. Après : ${fmt(p.prix)} ÷ ${fmt(p.e1, 2)} ≈ <b>${fmt(Math.round(b))} €</b>.`, `Le prix pour un client de la zone euro augmente d’environ ${fmt(100 * (b / a - 1), 1)} %, sans que l’entreprise suisse ait rien changé.`, "C’est le problème du franc fort pour les exportateurs : ils doivent soit accepter de vendre moins, soit baisser leurs prix en francs et réduire leurs marges, soit gagner en productivité ou miser sur la qualité, comme l’a fait l’horlogerie de luxe."); } },

  { id: "co3-termes-indice", theme: "commerce", niveau: 3, type: "calcul", notion: "avantage-comparatif",
    titre: "Les termes de l’échange", competence: "Calculer un indice des termes de l’échange et l’interpréter.",
    gen: () => ({ px: pick([96, 100, 104, 108, 112]), pm: pick([92, 98, 105, 110, 118]) }),
    enonce: (p) => P(`Par rapport à l’année de base (indices 100), l’indice des prix des exportations d’un pays est de <b>${p.px}</b> et celui des prix de ses importations de <b>${p.pm}</b>.`, "Calculez l’indice des termes de l’échange (prix des exportations ÷ prix des importations × 100), arrondi à une décimale."),
    champs: [{ label: "Termes de l’échange", unite: "", tol: 0.1 }],
    reponses: (p) => [Math.round((p.px / p.pm) * 1000) / 10],
    indice: "Termes de l’échange = indice des prix à l’exportation ÷ indice des prix à l’importation × 100.",
    correction: (p) => { const v = 100 * p.px / p.pm; return P(`Termes de l’échange = ${p.px} ÷ ${p.pm} × 100 ≈ <b>${fmt(v, 1)}</b>.`, v > 100 ? "L’indice dépasse 100 : les termes de l’échange se sont <b>améliorés</b>. Avec la même quantité d’exportations, le pays peut acheter davantage d’importations." : v < 100 ? "L’indice est inférieur à 100 : les termes de l’échange se sont <b>détériorés</b>. Il faut exporter davantage pour acheter la même quantité d’importations, comme lors d’une forte hausse du prix du pétrole pour un pays importateur." : "Les termes de l’échange n’ont pas changé.", "Les pays qui exportent surtout une matière première, comme le cuivre ou le cacao, voient leurs termes de l’échange varier fortement avec les cours mondiaux."); } },

  { id: "co3-smoot", theme: "commerce", niveau: 3, type: "qcm", notion: "avantage-comparatif",
    titre: "La guerre commerciale des années 1930", competence: "Tirer des leçons d’un épisode historique.",
    enonce: P("En 1930, les États-Unis adoptent le tarif Smoot-Hawley, qui relève fortement les droits de douane sur des milliers de produits. Que se passe-t-il ensuite ?"),
    options: ["Le commerce mondial augmente fortement, car les États-Unis importent moins.", "De nombreux pays répliquent par leurs propres droits de douane ; le commerce mondial s’effondre d’environ deux tiers en valeur entre 1929 et 1933, sous l’effet conjoint de la crise et des représailles.", "La Grande Dépression prend fin en 1931 grâce à ces mesures.", "Seuls les pays européens sont touchés, les États-Unis en sortent renforcés."], c: 1,
    explication: P("Les autres pays, dont le Canada et plusieurs pays européens, répliquent par des droits de douane ou des quotas. Avec la baisse des prix et de la production liée à la crise, le commerce mondial s’effondre. Les économistes discutent de la part exacte des droits de douane dans cette chute, mais l’épisode a durablement marqué les esprits.", "Il est à l’origine, après 1945, du GATT puis de l’OMC, conçus pour éviter les spirales de représailles en négociant des baisses de droits de douane réciproques.") },

  { id: "co3-vf-regles", theme: "commerce", niveau: 3, type: "vf", notion: "institutions-inclusives",
    titre: "Les règles du commerce mondial", competence: "Connaître les institutions et accords commerciaux.",
    affirmations: [
      ["Selon la clause de la nation la plus favorisée de l’OMC, un avantage commercial accordé à un pays membre doit en principe être étendu à tous les autres membres.", true, "C’est l’un des principes de base du système commercial multilatéral, avec des exceptions comme les accords de libre-échange et les préférences pour les pays en développement."],
      ["L’Organisation mondiale du commerce a été créée en 1947.", false, "C’est le <b>GATT</b>, l’Accord général sur les tarifs douaniers et le commerce, qui date de 1947. L’OMC lui a succédé en 1995 ; son siège est à Genève."],
      ["La Suisse a conclu un accord de libre-échange avec la Chine, entré en vigueur en 2014.", true, "Elle a été l’un des premiers pays d’Europe continentale à le faire."],
      ["Depuis 2024, la Suisse a supprimé ses droits de douane sur les produits agricoles.", false, "Elle a supprimé ses droits de douane sur les produits <b>industriels</b>. L’agriculture reste fortement protégée."]
    ] },

  { id: "co3-clusters", theme: "commerce", niveau: 3, type: "qcm", notion: "rendements-croissants",
    titre: "Pourquoi la pharmacie est-elle à Bâle ?", competence: "Appliquer la nouvelle économie géographique.",
    enonce: P("Une grande partie de l’industrie pharmaceutique suisse est concentrée autour de Bâle, et l’horlogerie dans l’Arc jurassien. Comment la nouvelle économie géographique de Krugman explique-t-elle ces concentrations ?"),
    options: ["Par les ressources naturelles propres à ces régions.", "Par une causalité cumulative : une avance historique attire entreprises, travailleurs qualifiés, sous-traitants et chercheurs, ce qui renforce l’attractivité de la région.", "Par des lois qui interdisent ces activités ailleurs.", "Par le hasard pur, sans aucun mécanisme économique."], c: 1,
    explication: P("Selon Krugman, les <b>rendements croissants</b> et les coûts de transport favorisent la concentration : les entreprises s’installent là où se trouvent déjà les clients, les fournisseurs et la main-d’œuvre spécialisée, ce qui attire d’autres entreprises. Une petite avance historique se renforce d’elle-même.", "À Bâle, l’industrie chimique est née au XIXe siècle des teintures pour l’industrie textile, puis s’est tournée vers la pharmacie ; dans l’Arc jurassien, l’horlogerie s’est développée dès le XVIIIe siècle. L’histoire décide du lieu, la causalité cumulative fait le reste.") },

  { id: "co3-droits-us", theme: "commerce", niveau: 3, type: "redaction", notion: "surplus",
    titre: "Les droits de douane américains de 2025", competence: "Analyser une politique commerciale récente (15 à 25 lignes).",
    enonce: P("En août 2025, les États-Unis imposent des droits de douane de 39 % sur de nombreux produits suisses, l’un des taux les plus élevés appliqués à un pays développé. Un accord annoncé en novembre 2025 prévoit de les ramener à 15 %. Les produits pharmaceutiques sont traités à part.", "<b>Consigne :</b> qui paie ces droits de douane, et quelles sont leurs conséquences pour l’économie suisse ? Utilisez au moins une notion d’économie (incidence, élasticité, prix, avantage comparatif, taux de change) et proposez des réponses possibles de la Suisse."),
    criteres: ["La réponse explique que le droit de douane est payé à l’importation aux États-Unis, et que sa charge réelle se partage entre consommateurs américains et exportateurs suisses selon les élasticités (incidence).", "Elle identifie les branches et régions suisses les plus touchées : horlogerie, machines, instruments, sous-traitants, Arc jurassien…", "Elle mobilise au moins une notion : élasticité, incidence fiscale, prix, avantage comparatif, taux de change…", "Elle propose au moins deux réponses possibles : négociation, diversification des marchés, investissements aux États-Unis, chômage partiel, innovation, accords avec d’autres partenaires…", "Elle conclut de façon nuancée."],
    corrige: P("Le droit de douane est payé par l’importateur américain, mais sa charge réelle se partage. Si les clients américains peuvent facilement se tourner vers d’autres produits, la demande est <b>élastique</b> : les exportateurs suisses doivent baisser leurs prix pour rester compétitifs et supportent l’essentiel du coût. Pour des produits difficilement remplaçables, comme certaines montres de luxe, les consommateurs américains paient une plus grande part.", "Les conséquences touchent surtout les branches très exposées au marché américain, comme l’horlogerie, les machines et les instruments de précision, ainsi que leurs sous-traitants, souvent des PME de l’Arc jurassien. Elles peuvent réduire les exportations, les marges, les investissements et l’emploi, surtout si le franc reste fort.", "La Suisse peut négocier, comme l’a montré l’accord de novembre 2025, diversifier ses débouchés grâce à ses accords de libre-échange, soutenir les entreprises par le chômage partiel, et miser sur l’innovation et la qualité. Les entreprises peuvent aussi produire davantage aux États-Unis. Ces droits de douane rappellent qu’une petite économie ouverte dépend de règles commerciales qu’elle ne fixe pas seule.") },

  { id: "co3-dependance", theme: "commerce", niveau: 3, type: "document", notion: "institutions-inclusives",
    titre: "La dépendance à une matière première", competence: "Analyser la vulnérabilité d’une structure d’exportations.",
    enonce: P("Structure des exportations de deux pays fictifs :") +
      `<table><thead><tr><th></th><th>Pays A</th><th>Pays B</th></tr></thead><tbody>
      <tr><td>Part de la principale exportation</td><td>Cuivre : 72 %</td><td>Machines : 18 %</td></tr><tr><td>Nombre de produits représentant 75 % des exportations</td><td>2</td><td>35</td></tr>
      <tr><td>Évolution du prix mondial de la principale exportation sur 5 ans</td><td>entre −40 % et +60 % selon les années</td><td>stable</td></tr></tbody></table>` +
      P("Quelle analyse est la plus juste ?"),
    options: ["Le pays A est moins vulnérable, car le cuivre est indispensable.", "Le pays A est très exposé aux variations des cours : ses recettes d’exportation, ses termes de l’échange et souvent son budget public fluctuent fortement ; diversifier son économie réduirait ce risque.", "Les deux pays sont exposés de la même façon.", "Le pays B devrait se spécialiser davantage dans les machines."], c: 1,
    explication: P("Le pays A dépend presque entièrement d’une seule matière première dont le prix varie beaucoup. Quand le cours chute, ses recettes d’exportation, ses <b>termes de l’échange</b> et ses recettes fiscales s’effondrent, et sa monnaie se déprécie. Le pays B, plus diversifié, est bien moins exposé.", "Les économistes parlent parfois de « malédiction des ressources » : une forte dépendance aux matières premières peut s’accompagner d’une croissance instable et, selon Acemoglu et Robinson, d’institutions extractives, quand une élite contrôle la rente.") },
  { id: "co1-fait-valeur", theme: "commerce", niveau: 1, type: "vf", typeLib: "Constat ou jugement de valeur", etiquettes: ["Constat", "Jugement de valeur"],
    titre: "Constat ou jugement de valeur ?", competence: "Distinguer un constat, que l’on peut vérifier, d’un jugement de valeur, qui dit ce qui devrait être.",
    enonce: P("Pour chaque affirmation, dites s’il s’agit d’un <b>constat</b>, que l’on peut vérifier avec des données, même s’il se révèle faux, ou d’un <b>jugement de valeur</b>, qui dit ce qui devrait être."),
    affirmations: [
      ["L’Union européenne est le premier partenaire commercial de la Suisse.", true, "On peut le vérifier avec des données : les statistiques du commerce extérieur le montrent."],
      ["La Suisse devrait protéger davantage son agriculture.", false, "Il dit ce qui devrait être. Des faits peuvent éclairer le débat, mais pas le trancher : « devrait » signale un choix politique."],
      ["Un droit de douane sur les vélos importés fait monter leur prix dans le pays.", true, "On peut le vérifier avec des données : on peut comparer les prix avant et après le droit de douane."],
      ["Il vaut mieux acheter des produits locaux, même plus chers.", false, "Il dit ce qui devrait être. Des faits peuvent éclairer le débat, mais pas le trancher : « il vaut mieux » exprime une préférence."]] },
  ]);
})();
