/* Œconomia — notices longues, lot 5 (a) : division du travail, loi des débouchés */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const box = (x, y, w, h, txt, col, sub) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${col}; stroke-width:2"/><text x="${x + w / 2}" y="${y + (sub ? h / 2 - 2 : h / 2 + 5)}" text-anchor="middle" style="fill:var(--ink); font:600 12.5px Manrope, sans-serif">${txt}</text>${sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 14}" text-anchor="middle" ${S}>${sub}</text>` : ""}`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };

  /* =====================================================================
     23. DIVISION DU TRAVAIL
     ===================================================================== */
  const epingles = fig(250, (() => {
    const L = 170, W = 360;
    let s = `<text x="20" y="24" ${T}>Épingles produites par ouvrier et par jour (chiffres de Smith, 1776)</text>`;
    const rows = [["Un ouvrier seul", 20, "« peut-être pas vingt »", "var(--serial)"], ["Dans la manufacture", 4800, "48 000 ÷ 10 ouvriers", "var(--note)"]];
    rows.forEach(([n, v, sub, col], i) => {
      const y = 60 + i * 80, w = Math.max(v / 4800 * W, 4);
      s += `<text x="${L - 12}" y="${y + 18}" text-anchor="end" ${T}>${n}</text>`;
      s += `<text x="${L - 12}" y="${y + 34}" text-anchor="end" ${S}>${sub}</text>`;
      s += `<rect x="${L}" y="${y}" width="${w}" height="36" rx="4" style="fill:${col}"/>`;
      s += `<text x="${L + w + 8}" y="${y + 23}" style="fill:var(--ink); font:700 13px 'JetBrains Mono', monospace">${v.toLocaleString("fr-CH")}</text>`;
    });
    s += `<text x="20" y="232" ${S}>Rapport : environ 240 à 1. Dix-huit opérations distinctes, réparties entre dix ouvriers.</text>`;
    return s;
  })(), "La manufacture d’épingles ouvre la Richesse des nations. Smith n’a probablement pas visité l’atelier qu’il décrit : ses chiffres viennent en grande partie de sources françaises, notamment l’article « Épingle » de l’Encyclopédie (1755). L’ordre de grandeur, lui, n’a jamais été contesté.", "Deux barres comparant la production d’un ouvrier seul et d’un ouvrier de manufacture");

  const babbage = fig(280, (() => {
    let s = `<text x="20" y="24" ${T}>Le principe de Babbage : payer chaque tâche à son juste niveau (exemple chiffré)</text>`;
    s += box(30, 50, 270, 90, "Un artisan fait tout", "var(--serial)", "10 heures payées 40 francs = 400 francs");
    s += box(340, 50, 270, 90, "Le travail est divisé", "var(--note)", "2 h qualifiées à 40 + 8 h simples à 25");
    s += `<text x="165" y="170" text-anchor="middle" style="fill:var(--serial); font:700 20px 'JetBrains Mono', monospace">400 francs</text>`;
    s += `<text x="475" y="170" text-anchor="middle" style="fill:var(--note); font:700 20px 'JetBrains Mono', monospace">280 francs</text>`;
    s += `<text x="20" y="210" ${S}>Sans aucun gain d’habileté ni machine nouvelle, le coût baisse de 30 % : seules les deux heures</text>`;
    s += `<text x="20" y="226" ${S}>qui exigent un savoir-faire rare sont payées au tarif qualifié. Babbage (1832) y voit le vrai moteur</text>`;
    s += `<text x="20" y="242" ${S}>de la manufacture ; Marx et Braverman y verront une déqualification délibérée du travail.</text>`;
    return s;
  })(), "Charles Babbage, On the Economy of Machinery and Manufactures (1832), chapitre 19. Le gain ne vient pas seulement de la productivité, mais de la possibilité d’acheter exactement la quantité de compétence nécessaire à chaque opération. Chiffres illustratifs.", "Comparaison de coût entre un artisan polyvalent et un travail divisé");

  const cercle = fig(300, (() => {
    const cx = 320, cy = 160, r = 105;
    const nodes = [["Taille du marché", -90], ["Spécialisation", 0], ["Productivité", 90], ["Revenus", 180]];
    let s = `<text x="20" y="24" ${T}>Le cercle de Smith et d’Allyn Young (1928)</text>`;
    const pos = nodes.map(([, d]) => [cx + r * 1.6 * Math.cos(d * Math.PI / 180), cy + r * Math.sin(d * Math.PI / 180)]);
    nodes.forEach(([n], i) => { const [x, y] = pos[i]; s += box(x - 75, y - 20, 150, 40, n, i === 0 ? "var(--gold)" : "var(--plum)"); });
    for (let i = 0; i < 4; i++) {
      const [x1, y1] = pos[i], [x2, y2] = pos[(i + 1) % 4];
      const dx = x2 - x1, dy = y2 - y1, k1 = 0.42, k2 = 0.58;
      s += arrow(x1 + dx * (k1 - 0.12), y1 + dy * (k1 - 0.12), x1 + dx * (k2 + 0.12), y1 + dy * (k2 + 0.12));
    }
    s += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" ${S}>rendements croissants</text>`;
    return s;
  })(), "« La division du travail est limitée par l’étendue du marché » (Smith, livre I, chapitre 3). Young ajoute la réciproque : un marché plus vaste permet plus de spécialisation, qui élève les revenus, qui élargissent le marché. La croissance se nourrit d’elle-même.", "Cercle reliant taille du marché, spécialisation, productivité et revenus");

  OEC.notices["division-travail"] = {
    essentiel: [
      "La division du travail est la répartition d’une production en tâches distinctes confiées à des personnes, des entreprises ou des pays différents. Elle est, pour Adam Smith, la première cause de la richesse des nations.",
      "Elle augmente la productivité par l’habileté acquise, le temps gagné et l’invention de machines ; Babbage y ajoute la possibilité de payer chaque tâche à son niveau de qualification. Mais elle est limitée par la taille du marché.",
      "Son prix humain a été souligné dès Smith lui-même : un travail parcellaire et répétitif abrutit. De Marx à Durkheim et à Taylor, la division du travail est au cœur des débats sur l’organisation de la production et de la société."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : qui sait fabriquer un crayon ?", html: `
<p>En 1958, l’essayiste américain Leonard Read publie un petit texte, « Moi, le crayon », écrit du point de vue d’un crayon ordinaire. Le crayon y affirme que personne au monde ne sait le fabriquer seul. Le cèdre vient de l’Oregon, abattu avec des scies d’acier et transporté par des camions et des trains ; le graphite vient de Ceylan ; la gomme est faite d’huile de colza des Indes néerlandaises ; la virole est en laiton. Des milliers de personnes ont contribué à sa fabrication, la plupart sans savoir qu’elles faisaient un crayon. Milton <a href="#eco-friedman">Friedman</a> rendra l’exemple célèbre à la télévision en 1980.</p>
<p>Le crayon illustre une idée formulée deux siècles plus tôt par Adam <a href="#eco-smith">Smith</a>, qui ouvre la Richesse des nations (1776) non par la monnaie, l’or ou le commerce, mais par une observation d’atelier : la fabrication des épingles. La richesse d’un pays, explique-t-il, dépend d’abord de la productivité de son travail, et celle-ci dépend de la façon dont le travail est divisé.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La manufacture d’épingles</h4>
<p>Un ouvrier qui ferait tout seul des épingles, sans formation ni machines, en produirait à peine une par jour, « certainement pas vingt », écrit Smith. Dans une petite manufacture qu’il décrit, la fabrication est divisée en dix-huit opérations : l’un tire le fil, un autre le dresse, un troisième le coupe, un quatrième l’empointe, un cinquième émoud le bout qui recevra la tête, et ainsi de suite. Dix ouvriers y fabriquent quarante-huit mille épingles par jour, soit quatre mille huit cents chacun.</p>
${epingles}
<h4>2. Trois raisons</h4>
<p>Smith explique ce gain par trois causes. L’habileté : en répétant la même opération, l’ouvrier acquiert une dextérité extraordinaire. Le temps gagné : il n’a plus à passer d’une tâche à l’autre, à changer d’outil et de place, ni à « flâner » entre deux activités. Les machines : en se concentrant sur une seule opération, on finit par trouver le moyen de la mécaniser. Smith cite un jeune garçon chargé d’ouvrir et fermer une soupape de machine à vapeur, qui aurait eu l’idée d’attacher la poignée à une autre partie de la machine pour qu’elle s’ouvre seule.</p>
<h4>3. Le principe de Babbage</h4>
<p>En 1832, le mathématicien anglais Charles Babbage, inventeur de la première machine à calculer programmable, ajoute une quatrième raison, que Smith avait négligée. Quand un artisan fait tout, il faut le payer au tarif de la tâche la plus difficile, même quand il effectue des opérations simples. En divisant le travail, l’employeur n’achète la compétence rare que pour les opérations qui l’exigent.</p>
${babbage}
<h4>4. La limite : l’étendue du marché</h4>
<p>On ne peut pas diviser le travail à l’infini. Un menuisier de village doit savoir tout faire, parce qu’il n’y a pas assez de clients pour qu’un artisan ne fasse que des chaises. C’est le titre du chapitre 3 de Smith : « La division du travail est limitée par l’étendue du marché ». D’où l’importance des routes, des canaux, de la navigation, et du libre-échange, qui élargissent les marchés.</p>
<h4>5. Un cercle vertueux</h4>
<p>L’économiste américain Allyn Young montre en 1928 que l’argument fonctionne dans les deux sens : un marché plus vaste permet davantage de spécialisation, qui augmente la productivité et les revenus, ce qui élargit le marché à son tour. La croissance devient un processus cumulatif, à <a href="#c-rendements-croissants">rendements croissants</a>. Cette idée sera reprise dans les années 1980 par la nouvelle théorie du commerce international de Paul <a href="#eco-krugman">Krugman</a> et la théorie de la croissance endogène de Paul Romer.</p>
${cercle}
<h4>6. Trois niveaux de division</h4>
<p>La division du travail opère à trois niveaux. Dans l’atelier ou l’entreprise, entre les ouvriers. Dans la société, entre les métiers et les entreprises : le boulanger, le meunier, le paysan. Entre les pays enfin, ce qui conduit à la théorie de l’<a href="#c-avantage-comparatif">avantage comparatif</a> de Ricardo. <a href="#eco-marx">Marx</a> distingue nettement la division « manufacturière », organisée par un patron, et la division « sociale », coordonnée par le marché.</p>
<h4>7. La coordination et le savoir</h4>
<p>Plus le travail est divisé, plus il faut coordonner les tâches. Dans l’entreprise, c’est la hiérarchie qui s’en charge ; dans la société, ce sont les prix. Friedrich <a href="#eco-hayek">Hayek</a> insiste en 1945 sur la « division du savoir » : personne ne connaît tout ce qui est nécessaire pour fabriquer un crayon, et les prix transmettent à chacun l’information dont il a besoin. Ronald Coase s’était demandé en 1937 pourquoi, si le marché coordonne si bien, les entreprises existent : parce que recourir au marché a un coût, et qu’il est parfois moins cher d’organiser le travail sous une même autorité.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La chaîne de montage de Ford</h4>
<p>En 1913, Henry Ford installe la chaîne de montage mobile dans son usine de Highland Park, près de Détroit. Le temps nécessaire pour assembler le châssis d’une Ford T passe d’environ douze heures et demie à un peu plus d’une heure et demie. Le prix de la voiture baisse de moitié en quelques années. La division extrême du travail, inspirée par l’organisation « scientifique » de Frederick Taylor, se paie cependant d’un taux de rotation du personnel énorme : en 1913, Ford doit embaucher environ 52 000 ouvriers pour en garder environ 14 000. En janvier 1914, il double le salaire journalier à cinq dollars pour stabiliser la main-d’œuvre.</p>
<h4>Les chaînes de valeur mondiales</h4>
<p>Depuis les années 1990, la baisse du coût des communications a permis de découper la production entre pays. Richard Baldwin parle d’un « second dégroupage » : après la séparation de la production et de la consommation par la baisse des coûts de transport au XIXe siècle, c’est la production elle-même qui se fragmente. Un téléphone portable est conçu en Californie, ses composants sont fabriqués au Japon, en Corée, à Taïwan, et il est assemblé en Chine. Selon la Banque mondiale, près de la moitié du commerce mondial passe aujourd’hui par de telles chaînes.</p>
<h4>Les vérifications historiques</h4>
<p>L’historien Jean-Louis Peaucelle a montré que les chiffres de Smith venaient de sources françaises, notamment l’Encyclopédie de Diderot et d’Alembert et les descriptions des manufactures d’épingles de Normandie, à L’Aigle. Les gains de productivité qu’on y observait étaient réels et considérables, même si les conditions de production étaient bien plus artisanales que l’image de l’usine moderne que l’exemple a fini par évoquer.</p>` }
    ],
    cas: [
      { titre: "L’horlogerie jurassienne et le choc de Philadelphie", html: `
<p>Au XIXe siècle, l’horlogerie suisse repose sur l’« établissage » : un établisseur fait fabriquer les pièces par des dizaines de petits ateliers et de travailleurs à domicile, chacun spécialisé dans une opération (ébauches, ressorts, aiguilles, cadrans, assemblage). C’est une division du travail poussée, mais dispersée entre des familles du Jura. En 1876, à l’Exposition universelle de Philadelphie, les horlogers suisses découvrent les montres américaines fabriquées en série, avec des pièces interchangeables produites par des machines dans une même usine. Le rapport de l’ingénieur Jacques David, en 1877, est un électrochoc. L’industrie suisse se mécanise et se concentre progressivement, tout en conservant pour le haut de gamme une part de savoir-faire artisanal.</p>` },
      { titre: "Durkheim et la solidarité organique", html: `
<p>En 1893, le sociologue français Émile Durkheim publie De la division du travail social. Il y soutient que la division du travail n’est pas seulement une source de productivité, mais aussi de cohésion sociale. Dans les sociétés traditionnelles, les individus se ressemblent et sont liés par une « solidarité mécanique ». Dans les sociétés modernes, ils sont différents mais dépendent les uns des autres : c’est la « solidarité organique », comme les organes d’un même corps. Durkheim met cependant en garde contre une division du travail « anomique », sans règles, qui produit des crises et des conflits.</p>` },
      { titre: "Le prix humain selon Smith lui-même", html: `
<p>Smith n’est pas l’apologiste naïf qu’on imagine. Au livre V de la Richesse des nations, il écrit que l’homme qui passe sa vie à accomplir quelques opérations simples « devient en général aussi stupide et ignorant qu’il soit possible à une créature humaine de le devenir ». Il en conclut que l’État doit financer l’éducation élémentaire du peuple, par de petites écoles de paroisse. <a href="#eco-marx">Marx</a> reprendra et radicalisera cette critique sous le nom d’aliénation ; Charlie Chaplin en fera une image inoubliable dans Les Temps modernes (1936).</p>` }
    ],
    objections: `
<h4>1. La déqualification du travail</h4>
<p>Harry Braverman, dans Travail et capitalisme monopoliste (1974), soutient que la division du travail sert surtout à retirer aux ouvriers leur savoir-faire pour le concentrer dans la direction, afin de mieux les contrôler et de les payer moins. Le gain de productivité serait en partie un transfert de pouvoir.</p>
<h4>2. Les limites du taylorisme</h4>
<p>À partir des années 1970, les méthodes japonaises, notamment le système de production de Toyota, montrent qu’une division moins rigide, avec des équipes polyvalentes et des ouvriers responsables de la qualité, peut être plus productive. Une division excessive coûte en absentéisme, en erreurs et en rigidité.</p>
<h4>3. La fragilité des chaînes</h4>
<p>Une division internationale du travail très poussée rend les économies vulnérables aux ruptures d’approvisionnement : la pandémie de 2020 et la pénurie de semi-conducteurs de 2021 l’ont montré. La spécialisation augmente l’efficacité en temps normal, mais réduit la résilience.</p>
<h4>4. Les inégalités entre territoires</h4>
<p>La spécialisation internationale fait des gagnants et des perdants. Les travaux de David Autor, David Dorn et Gordon Hanson sur le « choc chinois » montrent que les régions américaines spécialisées dans les industries concurrencées par la Chine ont subi des pertes d’emplois durables, sans que les gains globaux soient redistribués.</p>`,
    ecoles: `
<p><b>Platon</b>, dans La République, fonde déjà la cité sur la spécialisation des métiers selon les aptitudes.</p>
<p><b><a href="#eco-smith">Smith</a></b> en fait la cause première de la richesse, et en voit le prix humain.</p>
<p><b>Babbage</b> ajoute l’économie de compétences ; <b><a href="#eco-marx">Marx</a></b> analyse la division manufacturière comme instrument de domination.</p>
<p><b>Durkheim</b> y voit le fondement de la solidarité moderne.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> insiste sur la division du savoir et le rôle des prix pour la coordonner.</p>
<p><b><a href="#eco-krugman">Krugman</a></b> et Romer intègrent les rendements croissants dans les théories du commerce et de la croissance.</p>`,
    source: {
      titre: "Adam Smith, Recherches sur la nature et les causes de la richesse des nations, 1776, livre I, chapitre 1",
      texte: "Les plus grandes améliorations dans la puissance productive du travail, et la plus grande partie de l’habileté, de l’adresse et de l’intelligence avec laquelle il est dirigé ou appliqué, sont dues, à ce qu’il semble, à la division du travail.",
      notes: `
<p><b>La première phrase du livre.</b> Smith ouvre délibérément son ouvrage par la production, et non par la monnaie ou le commerce extérieur, que les mercantilistes plaçaient au centre. La richesse, c’est ce que produit le travail.</p>
<p><b>« À ce qu’il semble ».</b> La prudence de la formule est typique de Smith, qui procède par observations plutôt que par démonstrations.</p>
<p><b>Ce que la suite ajoute.</b> Au chapitre 2, Smith explique que la division du travail n’est pas le fruit d’une sagesse humaine, mais d’un « penchant naturel à trafiquer, troquer et échanger ». Au chapitre 3, il en montre la limite : la taille du marché.</p>`
    },
    quiz: [
      { q: "Selon les chiffres de Smith, combien d’épingles produit chaque ouvrier de la manufacture par jour ?",
        o: ["20", "480", "4 800", "48 000"], c: 2,
        e: "Dix ouvriers produisent 48 000 épingles, soit 4 800 chacun, contre moins de vingt pour un ouvrier seul." },
      { q: "Laquelle de ces raisons n’est PAS l’une des trois données par Smith ?",
        o: ["L’habileté acquise", "Le temps gagné entre les tâches", "L’invention de machines", "La possibilité de payer chaque tâche à son niveau de qualification"], c: 3,
        e: "C’est la quatrième raison, ajoutée par Charles Babbage en 1832." },
      { q: "Qu’est-ce qui limite la division du travail selon Smith ?",
        o: ["La fatigue des ouvriers spécialisés", "L’étendue du marché", "Le nombre de machines", "Le niveau d’instruction des ouvriers"], c: 1,
        e: "Sans assez de clients, un artisan ne peut pas se spécialiser dans une seule tâche." },
      { q: "Qu’appelle Durkheim la « solidarité organique » ?",
        o: ["La solidarité entre membres d’une famille", "La cohésion d’une société dont les membres, différents, dépendent les uns des autres", "L’entraide agricole", "Une assurance sociale"], c: 1,
        e: "La division du travail rend les individus différents mais interdépendants, comme les organes d’un corps." },
      { q: "Quel choc les horlogers suisses découvrent-ils à Philadelphie en 1876 ?",
        o: ["Les premières montres-bracelets anglaises", "La production en série de montres américaines avec des pièces interchangeables", "Les montres japonaises à quartz", "Une taxe américaine sur les montres"], c: 1,
        e: "La production mécanisée et concentrée des Américains contraste avec l’établissage dispersé du Jura." }
    ],
    transfert: { q: "Dans un petit village isolé, un seul artisan répare à la fois les vélos, les montres et les radios. Dans une grande ville, chaque réparateur a sa spécialité. Comment Smith l’explique-t-il ?",
      o: ["La division du travail est limitée par la taille du marché : au village, il n’y a pas assez de clients pour se spécialiser", "Les artisans de village sont plus habiles", "La loi interdit la spécialisation à la campagne", "En ville, les réparations sont moins chères à faire"], c: 0,
      e: "On ne peut se spécialiser que s’il y a assez de clients pour une seule activité." },
    ouverte: {
      q: "La pandémie a relancé dans de nombreux pays le débat sur la dépendance aux chaînes d’approvisionnement mondiales, par exemple pour les médicaments ou les puces électroniques. Faut-il relocaliser certaines productions ?",
      r: "La théorie de la division du travail explique pourquoi la spécialisation internationale rend les biens moins chers : aucun pays ne peut tout produire efficacement, et les marchés intérieurs sont trop étroits pour beaucoup d’industries. Relocaliser coûte donc cher. Mais l’efficacité en temps normal n’est pas le seul critère : pour des biens essentiels, comme certains médicaments ou composants électroniques, une rupture d’approvisionnement a un coût très élevé. Les États-Unis et l’Union européenne ont adopté en 2022 et 2023 de grands programmes de subventions pour produire davantage de puces sur leur sol, et plusieurs pays, comme la Suisse, imposent des réserves obligatoires pour certains biens vitaux. Les économistes recommandent souvent de diversifier les fournisseurs et de constituer des stocks plutôt que de relocaliser massivement, ce qui préserve l’essentiel des gains de la spécialisation tout en réduisant la vulnérabilité."
    },
    lectures: [
      ["Accessible", "Leonard Read, « I, Pencil », 1958, texte court disponible en ligne."],
      ["Accessible", "Richard Baldwin, The Great Convergence: Information Technology and the New Globalization, 2016."],
      ["Intermédiaire", "Adam Smith, Richesse des nations (1776), livre I, chapitres 1 à 3, et livre V, chapitre 1, troisième partie."],
      ["Intermédiaire", "Émile Durkheim, De la division du travail social, 1893, livre I."],
      ["Recherche", "Allyn Young, « Increasing Returns and Economic Progress », Economic Journal, 1928 ; Charles Babbage, On the Economy of Machinery and Manufactures, 1832, chapitre 19."]
    ],
    decouvrir: {
      questions: [
        { q: "Que montre l’exemple du crayon ?",
          o: ["Qu’aucune personne ne saurait le fabriquer seule : il résulte du travail spécialisé de milliers de gens", "Qu’un crayon est facile à fabriquer", "Que le bois est la matière la plus chère", "Que les crayons sont produits par une seule entreprise"], c: 0,
          e: "C’est le résultat de la division du travail, à l’échelle du monde." },
        { q: "Pourquoi Adam Smith plaide-t-il pour l’éducation publique ?",
          o: ["Parce qu’un travail répétitif toute la vie peut abrutir les ouvriers", "Parce que les écoles rapportent des impôts", "Parce que les patrons manquent de clients", "Parce que les épingles exigent des ingénieurs"], c: 0,
          e: "La division du travail a aussi un prix humain, que Smith souligne lui-même." }
      ],
      duree: 5,
      html: `
<h3>Personne ne sait fabriquer un crayon</h3>
<p>Un simple crayon demande du bois, du graphite, de la gomme, du métal, venus de plusieurs continents et travaillés par des milliers de personnes. Aucune d’entre elles ne saurait le fabriquer seule. C’est le résultat de la <b>division du travail</b> : chacun se spécialise dans une petite partie de la production.</p>
<h3>Les épingles d’Adam Smith</h3>
<p>En 1776, Adam <a href="#eco-smith">Smith</a> ouvre son grand livre avec une fabrique d’épingles. Seul, un ouvrier en ferait moins de vingt par jour. Dans une manufacture où le travail est découpé en dix-huit opérations, dix ouvriers en font quarante-huit mille. La raison : chacun devient très habile dans sa tâche, ne perd pas de temps à changer d’activité, et invente des outils pour aller plus vite.</p>
${epingles}
<h3>Une limite et un prix</h3>
<p>On ne peut se spécialiser que s’il y a assez de clients : la division du travail est limitée par la taille du marché. Elle a aussi un prix humain, que Smith lui-même a souligné : un travail répétitif toute la vie peut abrutir. D’où son plaidoyer pour l’éducation publique.</p>
<h3>À retenir</h3>
<p>La spécialisation est une source majeure de richesse, de l’atelier jusqu’au commerce mondial. La notice complète présente les mécanismes, l’histoire et les critiques.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Le crayon de Leonard Read et les épingles d’Adam Smith.",
      raisonnement: "Sept étapes, de la manufacture d’épingles à la division du savoir.",
      preuves: "La chaîne de Ford, les chaînes de valeur mondiales, les sources de Smith.",
      cas: "L’horlogerie jurassienne en 1876, Durkheim, le prix humain selon Smith.",
      objections: "Déqualification, limites du taylorisme, fragilité des chaînes, inégalités territoriales.",
      ecoles: "Platon, Smith, Babbage, Marx, Durkheim, Hayek, Krugman et Romer.",
      source: "Smith, 1776 : la première phrase de la Richesse des nations.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     24. LOI DES DÉBOUCHÉS
     ===================================================================== */
  const circuit = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Deux manières de voir l’échange</text>`;
    s += `<text x="160" y="58" text-anchor="middle" style="fill:var(--note); font:700 13px Manrope, sans-serif">Say : la monnaie n’est qu’un voile</text>`;
    s += box(40, 80, 100, 44, "Produit A", "var(--note)") + box(180, 80, 100, 44, "Produit B", "var(--note)");
    s += arrow(142, 102, 178, 102, "var(--note)");
    s += `<text x="160" y="150" text-anchor="middle" ${S}>On vend A pour acheter B.</text><text x="160" y="166" text-anchor="middle" ${S}>Toute offre est une demande d’autre chose.</text>`;
    s += `<text x="480" y="58" text-anchor="middle" style="fill:var(--serial); font:700 13px Manrope, sans-serif">Marx et Keynes : la monnaie peut s’arrêter</text>`;
    s += box(340, 80, 80, 44, "Produit", "var(--serial)") + box(440, 80, 80, 44, "Monnaie", "var(--gold)") + box(540, 80, 80, 44, "Produit", "var(--line)");
    s += arrow(422, 102, 438, 102, "var(--serial)");
    s += `<line x1="522" y1="102" x2="538" y2="102" style="stroke:var(--line); stroke-width:1.8; stroke-dasharray:3 3"/>`;
    s += `<text x="480" y="150" text-anchor="middle" ${S}>Si l’on garde la monnaie (incertitude,</text><text x="480" y="166" text-anchor="middle" ${S}>préférence pour la liquidité), la vente</text><text x="480" y="182" text-anchor="middle" ${S}>n’est pas suivie d’un achat.</text>`;
    s += `<rect x="40" y="208" width="580" height="60" rx="8" style="fill:var(--paper-2); stroke:var(--line)"/>`;
    s += `<text x="330" y="232" text-anchor="middle" ${S}>Loi de Walras : un excès d’offre de biens dans l’ensemble de l’économie</text>`;
    s += `<text x="330" y="250" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">a pour contrepartie un excès de demande de monnaie.</text>`;
    return s;
  })(), "La loi des débouchés suppose que la monnaie est dépensée aussitôt reçue. Si l’on peut désirer la monnaie pour elle-même, comme réserve, l’échange se coupe en deux, et une surproduction générale devient possible : c’est le cœur de la critique de Marx (1859-1867) et de Keynes (1936).", "Schéma comparant le troc de Say et la rupture monétaire");

  const coop = fig(270, (() => {
    const steps = [["Les couples veulent", "épargner des tickets", "var(--note)"], ["Chacun sort moins", "et garde ses tickets", "var(--gold)"], ["Personne ne peut", "gagner de tickets", "var(--serial)"], ["La coopérative", "tombe en récession", "var(--serial)"]];
    let s = `<text x="20" y="24" ${T}>La coopérative de baby-sitting de Capitol Hill (années 1970)</text>`;
    steps.forEach(([a, b, col], i) => {
      const x = 20 + i * 155;
      s += `<rect x="${x}" y="56" width="135" height="70" rx="10" style="fill:var(--card); stroke:${col}; stroke-width:2"/>`;
      s += `<text x="${x + 67}" y="86" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">${a}</text><text x="${x + 67}" y="104" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">${b}</text>`;
      if (i < 3) s += arrow(x + 137, 91, x + 153, 91);
    });
    s += `<text x="20" y="160" ${S}>Il y avait pourtant assez de parents prêts à garder des enfants, et assez de parents désireux de sortir :</text>`;
    s += `<text x="20" y="176" ${S}>l’offre ne créait pas sa demande, parce que tous voulaient accumuler la « monnaie » de la coopérative.</text>`;
    s += `<rect x="20" y="198" width="600" height="46" rx="8" style="fill:color-mix(in srgb, var(--note) 12%, transparent); stroke:var(--note)"/>`;
    s += `<text x="320" y="226" text-anchor="middle" style="fill:var(--ink); font:600 12.5px Manrope, sans-serif">Le remède : distribuer davantage de tickets. L’activité reprend.</text>`;
    return s;
  })(), "Racontée par Joan et Richard Sweeney en 1977 et rendue célèbre par Paul Krugman en 1998, l’histoire de cette coopérative de quelque 150 couples montre en miniature comment une demande excessive de monnaie peut provoquer une récession dans une économie où personne ne manque de rien.", "Quatre étapes de la récession de la coopérative de baby-sitting");

  OEC.notices["loi-debouches"] = {
    essentiel: [
      "La loi des débouchés, formulée par Jean-Baptiste Say en 1803, affirme que les produits s’échangent contre des produits : en vendant, chacun obtient les moyens d’acheter. Une surproduction de certains biens est possible, mais pas une surproduction générale.",
      "Keynes l’a résumée, en 1936, par la formule « l’offre crée sa propre demande », que Say n’a jamais écrite. Il a fait de son rejet le point de départ de la Théorie générale : si l’on garde la monnaie au lieu de la dépenser, la demande peut manquer.",
      "Le débat reste vivant. À long terme, la plupart des économistes admettent que la production est limitée par l’offre ; à court terme, en récession, la demande peut faire défaut, et la loi de Say ne s’applique pas."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : peut-on produire trop de tout ?", html: `
<p>Au début du XIXe siècle, l’industrialisation de l’Angleterre inquiète. Les machines multiplient la production de textiles, de fer, de quincaillerie. Ne finira-t-on pas par produire plus que ce que la population peut acheter ? En 1815, à la fin des guerres napoléoniennes, une crise frappe l’Angleterre : des marchandises restent invendues, des fabriques ferment. Beaucoup y voient la preuve d’une « surabondance générale » des produits.</p>
<p>L’économiste français Jean-Baptiste <a href="#eco-say">Say</a>, industriel du coton et lecteur enthousiaste de Smith, répond dès 1803 dans son Traité d’économie politique, et développe sa réponse dans les éditions suivantes : non, il ne peut y avoir trop de tout. S’il y a des invendus, c’est qu’on a produit trop de certaines choses et pas assez d’autres. Cette idée, la loi des débouchés, sera au centre d’une des plus longues controverses de l’histoire économique.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Les produits s’échangent contre des produits</h4>
<p>Say part d’une observation : personne ne produit pour accumuler de la monnaie. Le cordonnier vend ses chaussures pour acheter du pain, des vêtements, des outils. La monnaie n’est qu’un intermédiaire commode : « l’argent ne remplit qu’un office passager dans ce double échange ». En dernière analyse, on achète des produits avec des produits.</p>
<h4>2. Toute production crée un débouché</h4>
<p>Il en découle que chaque production fournit à son producteur le pouvoir d’achat nécessaire pour acheter d’autres produits, pour une valeur égale. Plus un pays produit, plus il offre de débouchés aux autres producteurs. Say en tire une conclusion favorable au commerce : un pays a intérêt à ce que ses voisins soient prospères, car ils seront de meilleurs clients.</p>
<h4>3. Des engorgements partiels, pas généraux</h4>
<p>Say ne nie pas qu’on puisse trouver des marchandises invendues. Mais une surabondance d’un produit va de pair avec une insuffisance d’autres produits : les producteurs se sont trompés sur ce que les gens voulaient. Les prix des biens trop abondants baissent, ceux des biens rares montent, et le capital se déplace. L’engorgement est un problème de composition, pas de niveau global.</p>
<h4>4. L’épargne n’est pas une fuite</h4>
<p>Et l’épargne ? Pour Say, comme pour <a href="#eco-smith">Smith</a> et <a href="#eco-ricardo">Ricardo</a>, ce qui est épargné est prêté et investi : il est dépensé en machines, en bâtiments, en salaires d’ouvriers. L’épargne change la composition de la demande, de la consommation vers l’investissement, mais pas son montant. Le taux d’intérêt assure l’ajustement.</p>
<h4>5. La controverse de la surproduction générale</h4>
<p>Thomas <a href="#eco-malthus">Malthus</a> et le Suisse Jean Charles Léonard Simonde de Sismondi contestent cette conclusion dans les années 1820. Sismondi, dans les Nouveaux Principes d’économie politique (1819), observe que les ouvriers mal payés ne peuvent racheter ce qu’ils produisent. Malthus soutient que les riches peuvent épargner plus que ce que l’investissement absorbe, et défend la dépense des propriétaires fonciers. Ricardo, ami de Malthus, rejette fermement ces arguments. Ricardo l’emporte : pendant un siècle, la loi des débouchés domine la pensée économique.</p>
<h4>6. La critique de Marx et de Keynes</h4>
<p><a href="#eco-marx">Marx</a> attaque la loi de Say en 1859 : la monnaie sépare la vente et l’achat dans le temps et dans l’espace. Rien n’oblige celui qui a vendu à acheter aussitôt. Si beaucoup de vendeurs retiennent leur monnaie, une crise générale éclate. <a href="#eco-keynes">Keynes</a> systématise la critique en 1936 : dans une économie monétaire, la monnaie peut être désirée pour elle-même, comme réserve contre l’incertitude (<a href="#c-preference-liquidite">préférence pour la liquidité</a>). L’épargne n’est pas automatiquement investie, et la <a href="#c-demande-effective">demande effective</a> peut être insuffisante.</p>
${circuit}
<h4>7. La loi de Walras</h4>
<p>Léon <a href="#eco-walras">Walras</a> fournit en 1874 l’outil qui permet de trancher clairement : dans une économie, la somme des excès d’offre et de demande sur tous les marchés, y compris celui de la monnaie, est nulle. Un excès d’offre général sur les marchés des biens n’est donc possible que s’il existe un excès de demande de monnaie. La loi de Say, dans sa version forte, revient à nier qu’on puisse désirer la monnaie pour elle-même. C’est précisément ce que contestent Marx et Keynes.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La Grande Dépression</h4>
<p>Entre 1929 et 1933, la production industrielle américaine chute d’environ la moitié, les prix baissent d’environ un quart, et le chômage atteint un quart de la population active. Les usines étaient intactes, les ouvriers disponibles, les besoins immenses : il ne manquait que la demande. Une surproduction générale, et non partielle, semble bien avoir eu lieu, avec dans le même temps une forte demande de monnaie et de liquidités.</p>
<h4>La coopérative de baby-sitting</h4>
<p>Dans les années 1970, une coopérative d’environ 150 jeunes couples de Capitol Hill, à Washington, organise la garde d’enfants par un système de tickets : garder les enfants d’un autre couple rapporte des tickets, sortir en coûte. Beaucoup de couples veulent constituer une réserve de tickets en prévision de futures sorties. Ils sortent moins, donc personne ne peut gagner de tickets. L’activité s’effondre, alors que personne ne manque de rien. Joan et Richard Sweeney, deux économistes membres de la coopérative, en tirent un article en 1977 ; Paul <a href="#eco-krugman">Krugman</a> le rend célèbre en 1998.</p>
${coop}
<h4>La crise de 2008-2009</h4>
<p>En 2009, la production et le commerce mondiaux reculent fortement dans presque tous les secteurs à la fois. Les entreprises et les ménages cherchent à accumuler des liquidités et à réduire leurs dettes. Les politiques de relance monétaire et budgétaire mises en place dans le monde entier relèvent toutes d’un diagnostic anti-Say : la demande globale manquait.</p>` }
    ],
    cas: [
      { titre: "La Suisse et la dévaluation de 1936", html: `
<p>Pendant la Grande Dépression, la Suisse fait partie du « bloc-or », avec la France, la Belgique et les Pays-Bas, qui maintiennent la parité de leur monnaie avec l’or alors que le Royaume-Uni (1931) et les États-Unis (1933) ont dévalué. Le franc est donc très cher, les exportations s’effondrent, et le gouvernement mène une politique de déflation des prix et des salaires, conforme à la logique de l’ajustement par l’offre. La crise se prolonge. En septembre 1936, la Suisse dévalue finalement le franc d’environ 30 %. L’économie se redresse dans les mois qui suivent. L’épisode illustre la difficulté de rétablir l’emploi en comptant seulement sur la baisse des prix quand la demande fait défaut.</p>` },
      { titre: "L’économie de l’offre", html: `
<p>Dans les années 1970, des économistes et journalistes américains, comme Jude Wanniski, Arthur Laffer et Robert Mundell, se réclament de Say pour défendre une « économie de l’offre » : réduire les impôts et les réglementations pour encourager la production, qui créerait d’elle-même sa demande. Leur influence culmine avec les baisses d’impôts de Ronald Reagan en 1981. Les résultats ont été discutés : la croissance a repris, mais les déficits publics se sont creusés. Le nom de Say a ainsi été utilisé dans des débats très éloignés des siens.</p>` },
      { titre: "Say contre le défaitisme industriel", html: `
<p>Say n’écrit pas seulement contre une erreur théorique, mais contre une politique. Beaucoup de ses contemporains, effrayés par la surproduction, réclamaient des protections douanières, des limites aux machines, ou des dépenses somptuaires pour « faire marcher le commerce ». Say répond que la prospérité vient de la production, et non de la consommation pour elle-même. Ce qui encourage la production, la liberté d’entreprendre, la sécurité de la propriété, l’éducation des entrepreneurs, est donc la meilleure politique. Cette idée garde une large part de vérité à long terme.</p>` }
    ],
    objections: `
<h4>1. Say avait raison à long terme</h4>
<p>À long terme, ce qui détermine le niveau de vie, c’est la capacité de production : la technique, le capital, l’éducation, les institutions. Aucun pays ne s’est enrichi en consommant plus sans produire plus. La plupart des économistes contemporains admettent la loi de Say comme description de la croissance à long terme, et la rejettent pour les fluctuations à court terme.</p>
<h4>2. Keynes a caricaturé Say</h4>
<p>Des historiens de la pensée, comme Steven Kates ou William Baumol, soutiennent que Keynes a déformé Say. Say n’a jamais écrit que « l’offre crée sa propre demande », et il admettait des crises liées à la confiance et au crédit. Sa loi visait surtout à montrer que la prospérité dépend de la production et que la demande n’est pas une fin en soi.</p>
<h4>3. Les prix finissent par s’ajuster</h4>
<p>Les économistes classiques et monétaristes soutiennent que, si les prix et les salaires baissent suffisamment, l’encaisse réelle des ménages augmente, ce qui relance la dépense : c’est l’« effet Pigou ». L’excès de demande de monnaie se résorbe donc de lui-même. Mais Irving Fisher a montré en 1933 que la baisse des prix augmente la valeur réelle des dettes et peut aggraver la crise.</p>
<h4>4. Un débat sur les mots</h4>
<p>On distingue aujourd’hui l’« identité de Say », toujours vraie dans une économie de troc, et l’« égalité de Say », qui ne vaut qu’à l’équilibre, comme l’ont montré Gary Becker et William Baumol en 1952. Une partie de la controverse tient à la confusion entre ces deux sens.</p>`,
    ecoles: `
<p><b><a href="#eco-smith">Smith</a></b> défend l’idée que l’épargne est aussitôt dépensée en investissement.</p>
<p><b><a href="#eco-say">Say</a></b> et James Mill formulent la loi des débouchés ; <b><a href="#eco-ricardo">Ricardo</a></b> la défend.</p>
<p><b><a href="#eco-malthus">Malthus</a></b> et <b>Sismondi</b> défendent la possibilité d’une surproduction générale.</p>
<p><b><a href="#eco-marx">Marx</a></b> montre que la monnaie peut rompre la chaîne des échanges.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> fait du rejet de la loi de Say le point de départ de la Théorie générale.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> et les monétaristes, puis les nouveaux classiques comme <a href="#eco-lucas">Lucas</a>, réhabilitent l’ajustement par les prix à moyen terme.</p>`,
    source: {
      titre: "Jean-Baptiste Say, Traité d’économie politique, 1803 (édition de 1814), livre I, chapitre « Des débouchés »",
      texte: "Il est bon de remarquer qu’un produit terminé offre, dès cet instant, un débouché à d’autres produits pour tout le montant de sa valeur.",
      notes: `
<p><b>« Dès cet instant ».</b> Say insiste sur la simultanéité : la production fournit immédiatement à son auteur les moyens d’acheter. C’est précisément ce que conteste Marx, pour qui la monnaie introduit un délai, et donc un risque.</p>
<p><b>Le contexte.</b> Le chapitre sur les débouchés, bref dans la première édition de 1803, est largement développé en 1814 puis dans les éditions suivantes, en réponse aux crises d’après-guerre et aux objections de Malthus et de Sismondi.</p>
<p><b>La conclusion pratique.</b> Say en tire que « c’est la production qui ouvre des débouchés aux produits » : l’intérêt de chaque producteur est que les autres produisent beaucoup. C’est un argument contre le protectionnisme et en faveur de la prospérité des voisins.</p>`
    },
    quiz: [
      { q: "Que dit la loi des débouchés de Say ?",
        o: ["Que les exportations sont la seule source de richesse", "Que les produits s’échangent contre des produits, si bien qu’une surproduction générale est impossible", "Que l’État doit créer des débouchés", "Qu’une surproduction peut toucher toute l’économie à la fois"], c: 1,
        e: "Chaque production fournit les moyens d’acheter d’autres produits ; seules des surproductions partielles sont possibles." },
      { q: "Qui a résumé la loi de Say par la formule « l’offre crée sa propre demande » ?",
        o: ["Say lui-même", "Ricardo", "Keynes", "Marx"], c: 2,
        e: "La formule est de Keynes, en 1936. Say ne l’a jamais écrite." },
      { q: "Selon Marx et Keynes, qu’est-ce qui peut provoquer une surproduction générale ?",
        o: ["Le progrès technique", "Le fait que l’on garde la monnaie au lieu de la dépenser", "La hausse des salaires", "Le commerce international"], c: 1,
        e: "Si la monnaie est désirée pour elle-même, la vente n’est pas suivie d’un achat, et la demande manque." },
      { q: "Selon la loi de Walras, un excès d’offre général de biens a pour contrepartie…",
        o: ["un excès d’offre de travail seulement", "un excès de demande de monnaie", "une hausse des prix", "un déficit public"], c: 1,
        e: "La somme des excès d’offre et de demande sur tous les marchés, monnaie comprise, est nulle." },
      { q: "Que montre l’histoire de la coopérative de baby-sitting de Capitol Hill ?",
        o: ["Que les coopératives fonctionnent mieux sans règles", "Qu’une demande excessive de monnaie peut provoquer une récession même quand personne ne manque de rien", "Que les coopératives sont inefficaces", "Que l’inflation est toujours nuisible"], c: 1,
        e: "Chacun voulant accumuler des tickets, personne ne sortait, et personne ne pouvait en gagner." }
    ],
    transfert: { q: "En 2009, après une crise financière, les ventes chutent dans presque tous les secteurs en même temps, et les entreprises gardent leurs liquidités. Ce constat donne-t-il raison à Say ou à Keynes ?",
      o: ["Plutôt à Keynes : la demande manque partout à la fois parce que l’argent est gardé", "Plutôt à Say : il y a trop de certains biens et pas assez d’autres", "Aux deux à égalité, puisque les prix baissent", "À aucun des deux, car les crises n’ont rien à voir avec la demande"], c: 0,
      e: "On admet souvent que Say a raison à long terme, et Keynes en période de crise." },
    ouverte: {
      q: "Pendant la Grande Dépression, les pays du « bloc-or », comme la France, la Belgique ou la Suisse, ont maintenu la valeur de leur monnaie et cherché à baisser prix et salaires jusqu’en 1935-1936. Que dirait Say de cette politique, et que dirait Keynes ?",
      r: "Dans la logique de Say et des classiques, ces économies souffraient de coûts trop élevés par rapport à leurs concurrents, qui avaient dévalué : la baisse des prix et des salaires devait rétablir la compétitivité et la production, qui créerait elle-même ses débouchés. Keynes répondrait que la baisse générale des prix et des salaires réduit les revenus et donc la demande, augmente le poids réel des dettes, et pousse chacun à retarder ses dépenses en attendant de nouvelles baisses : la demande manque, et la crise se prolonge. Les pays qui ont dévalué tôt, comme le Royaume-Uni en 1931, se sont redressés plus vite que ceux du bloc-or, qui n’ont repris qu’après leurs dévaluations de 1935 et 1936 : l’expérience est souvent citée en faveur de la seconde interprétation. Les défenseurs de la politique de l’époque soulignaient la volonté de préserver la confiance dans la monnaie et l’épargne des ménages."
    },
    lectures: [
      ["Accessible", "Paul Krugman, « Baby-Sitting the Economy », Slate, 1998, en ligne."],
      ["Accessible", "Steven Kates (dir.), Two Hundred Years of Say’s Law, 2003, introduction."],
      ["Intermédiaire", "Jean-Baptiste Say, Traité d’économie politique, livre I, chapitre « Des débouchés »."],
      ["Intermédiaire", "J. M. Keynes, Théorie générale (1936), chapitres 2 et 3."],
      ["Recherche", "Joan Sweeney et Richard Sweeney, « Monetary Theory and the Great Capitol Hill Baby Sitting Co-op Crisis », Journal of Money, Credit and Banking, 1977 ; Thomas Sowell, Say’s Law: An Historical Analysis, 1972."]
    ],
    decouvrir: {
      questions: [
        { q: "Pour Say, pourquoi une surproduction de tout à la fois est-elle impossible ?",
          o: ["Parce qu’en produisant et en vendant, on gagne de quoi acheter autre chose", "Parce que l’État achète les invendus", "Parce que les machines produisent peu", "Parce que les prix ne changent jamais"], c: 0,
          e: "Les produits s’échangent contre des produits." },
        { q: "Qu’objecte Keynes à la loi des débouchés ?",
          o: ["L’argent gagné n’est pas toujours dépensé : en période d’inquiétude, on le garde", "La production est toujours insuffisante", "Les prix s’ajustent trop vite", "Le commerce international l’empêche"], c: 0,
          e: "La demande peut alors manquer partout à la fois, comme pendant la Grande Dépression." }
      ],
      duree: 5,
      html: `
<h3>Peut-on produire trop de tout ?</h3>
<p>Au début de l’industrialisation, beaucoup craignent que les machines produisent plus que ce que les gens peuvent acheter. En 1803, l’économiste français Jean-Baptiste <a href="#eco-say">Say</a> répond : non. Quand on produit et qu’on vend, on gagne de quoi acheter autre chose. Les produits s’échangent contre des produits. C’est la <b>loi des débouchés</b>.</p>
<h3>Trop de certaines choses, pas de tout</h3>
<p>Pour Say, il peut y avoir trop de chaussures et pas assez de pain, mais pas trop de tout à la fois. Les prix s’ajustent, et les producteurs se tournent vers ce qui manque. Conclusion : la prospérité vient de la production, et chaque pays a intérêt à ce que ses voisins produisent beaucoup.</p>
<h3>L’objection de Keynes</h3>
<p>En 1936, <a href="#eco-keynes">Keynes</a> objecte que l’argent gagné n’est pas toujours dépensé : en période d’inquiétude, on le garde. La demande manque alors partout à la fois, comme pendant la Grande Dépression. Une petite coopérative de baby-sitting à Washington l’a vécu en miniature : chacun voulait garder ses tickets, personne ne sortait, et plus personne ne gardait d’enfants.</p>
${coop}
<h3>À retenir</h3>
<p>Aujourd’hui, on admet souvent que Say a raison à long terme et Keynes en période de crise. La notice complète présente le débat en détail.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "La peur de la surproduction au début de l’industrialisation.",
      raisonnement: "Sept étapes, de l’échange de produits contre produits à la loi de Walras.",
      preuves: "La Grande Dépression, la coopérative de baby-sitting, la crise de 2009.",
      cas: "La Suisse et le franc en 1936, l’économie de l’offre, Say contre le défaitisme.",
      objections: "Say avait raison à long terme, la caricature de Keynes, l’effet Pigou, identité et égalité.",
      ecoles: "Smith, Say et Ricardo, Malthus et Sismondi, Marx, Keynes, Friedman et Lucas.",
      source: "Say : un produit terminé offre un débouché à d’autres produits.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
