/* Œconomia — notices longues, lot 8 (a) : PIB, cycles économiques */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     41. PIB
     ===================================================================== */
  const trois = fig(300, (() => {
    const cols = [["Production", [["valeurs ajoutées", 100, "var(--note)"]], "somme des valeurs ajoutées"], ["Dépense", [["consommation", 55, "var(--note)"], ["investissement", 22, "var(--gold)"], ["dépenses publiques", 15, "var(--plum)"], ["exportations − importations", 8, "var(--serial)"]], "C + I + G + (X − M)"], ["Revenus", [["salaires", 58, "var(--note)"], ["profits, intérêts, loyers", 32, "var(--gold)"], ["impôts sur la production", 10, "var(--plum)"]], "revenus distribués"]];
    let s = `<text x="20" y="24" ${T}>Trois façons de mesurer le même PIB (pays fictif, PIB = 100)</text>`;
    const B = 250, sc = 1.9;
    cols.forEach(([t, items, sub], i) => {
      const x = 40 + i * 200; let y = B;
      items.forEach(([n, v, c]) => { const h = v * sc; y -= h; s += `<rect x="${x}" y="${y}" width="170" height="${h}" style="fill:${c}; stroke:var(--card)"/>`; if (h >= 15) s += `<text x="${x + 85}" y="${y + h / 2 + 4}" text-anchor="middle" style="fill:var(--paper); font:600 11px Manrope, sans-serif">${n} ${v}</text>`; });
      s += `<text x="${x + 85}" y="${B + 18}" text-anchor="middle" ${T}>${t}</text><text x="${x + 85}" y="${B + 34}" text-anchor="middle" ${M}>${sub}</text>`;
    });
    return s;
  })(), "Ce qui est produit est soit consommé, soit investi, soit acheté par l’État, soit exporté ; et la valeur de ce qui est produit est entièrement distribuée en revenus. Les trois mesures donnent donc, en principe, le même total. En pratique, les statisticiens doivent réconcilier des sources différentes.", "Trois colonnes égales décomposant le PIB par production, dépense et revenus");

  const compte = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Ce que le PIB compte, et ce qu’il ignore</text>`;
    const col = (x, title, c, items) => `<rect x="${x}" y="40" width="290" height="210" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + 145}" y="66" text-anchor="middle" style="fill:${c}; font:700 14px Manrope, sans-serif">${title}</text>` + items.map((t, i) => `<text x="${x + 18}" y="${94 + i * 24}" ${S}>• ${t}</text>`).join("");
    s += col(20, "Compté", "var(--note)", ["un repas au restaurant", "les soins d’un accident de la route", "la réparation après une inondation", "les heures de travail supplémentaires", "les dépenses de défense", "certaines activités illégales (estimées)"]);
    s += col(330, "Ignoré", "var(--serial)", ["le même repas cuisiné à la maison", "le bénévolat et l’aide aux proches", "l’épuisement des ressources naturelles", "le temps libre et la santé", "la répartition des revenus", "les services numériques gratuits"]);
    return s;
  })(), "Le PIB mesure la production marchande et les services publics, évalués à leur coût. Il n’est pas conçu pour mesurer le bien-être, ce que Simon Kuznets, l’un de ses inventeurs, avait souligné dès 1934. Plusieurs pays publient aujourd’hui des indicateurs complémentaires.", "Deux colonnes : ce que le PIB compte et ce qu’il ignore");

  OEC.notices["pib"] = {
    essentiel: [
      "Le produit intérieur brut mesure la valeur de tous les biens et services finaux produits sur le territoire d’un pays pendant une période. On peut le calculer par la production, en additionnant les valeurs ajoutées, par la dépense, ou par les revenus distribués.",
      "Inventé dans les années 1930 et 1940 pour comprendre la Grande Dépression et financer la guerre, il est devenu l’indicateur central de la politique économique. Sa croissance, corrigée de l’inflation, définit la croissance économique.",
      "Ses limites sont connues depuis l’origine : il ignore le travail domestique, l’environnement, les inégalités, le bien-être. Il peut aussi être faussé par les comptes des multinationales. D’où la recherche d’indicateurs complémentaires."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : comment savoir si l’économie va mieux ?", html: `
<p>En 1932, au cœur de la Grande Dépression, le Congrès américain ne sait pas mesurer l’ampleur de la crise. On dispose de statistiques éparses, prix des actions, chargements de wagons, production d’acier, mais d’aucun chiffre d’ensemble. Le Sénat demande au Département du commerce d’estimer le revenu national. Le travail est confié à un jeune économiste du National Bureau of Economic Research, Simon Kuznets.</p>
<p>En janvier 1934, Kuznets présente son rapport : le revenu national américain a diminué de moitié environ entre 1929 et 1932. Pour la première fois, la crise a un chiffre. Mais Kuznets avertit dans le même rapport que le bien-être d’une nation ne peut guère se déduire d’une mesure du revenu national. Pendant la guerre, au Royaume-Uni, Richard Stone et James Meade, encouragés par <a href="#eco-keynes">Keynes</a>, construisent les premiers comptes nationaux complets. Le PIB est né.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La valeur ajoutée</h4>
<p>On ne peut pas additionner simplement les chiffres d’affaires des entreprises : le blé vendu par l’agriculteur au meunier, puis la farine vendue au boulanger, seraient comptés plusieurs fois dans le prix du pain. On additionne donc les valeurs ajoutées, c’est-à-dire ce que chaque entreprise ajoute à ce qu’elle achète. La somme des valeurs ajoutées égale la valeur des produits finaux.</p>
<h4>2. Trois mesures du même total</h4>
<p>Ce qui est produit est utilisé : consommé par les ménages, investi par les entreprises, acheté par l’État, ou exporté, moins ce qui est importé. C’est l’approche par la dépense, la célèbre formule C + I + G + (X − M). Et la valeur produite est distribuée en salaires, profits, intérêts, loyers et impôts : c’est l’approche par les revenus. Les trois mesures sont égales par construction.</p>
${trois}
<h4>3. Nominal et réel</h4>
<p>Le PIB mesuré aux prix courants augmente quand la production augmente, mais aussi quand les prix montent. Pour mesurer la croissance réelle, on corrige de l’inflation en évaluant la production aux prix d’une année de référence, ou par des indices chaînés. La croissance économique désigne la variation du PIB réel.</p>
<h4>4. Intérieur ou national</h4>
<p>Le PIB mesure la production sur le territoire, qu’elle soit le fait de résidents ou d’étrangers. Le revenu national brut ajoute les revenus que les résidents reçoivent de l’étranger et retire ceux versés à l’étranger. Pour un pays comme la Suisse, dont les entreprises et les ménages détiennent beaucoup d’actifs à l’étranger et qui emploie de nombreux frontaliers, la différence peut être importante.</p>
<h4>5. Les services non marchands</h4>
<p>Les services publics, école, police, justice, n’ont pas de prix de marché. Les comptables nationaux les évaluent à leur coût de production, surtout les salaires des fonctionnaires. Cela signifie que la productivité des services publics est très difficile à mesurer.</p>
<h4>6. Les conventions</h4>
<p>Le PIB repose sur de nombreuses conventions, harmonisées par le Système de comptabilité nationale des Nations unies, adopté en 1953 et révisé régulièrement. Le loyer que les propriétaires « se paient » à eux-mêmes en habitant leur logement est compté ; le repas qu’on se prépare ne l’est pas. Depuis 2014, les pays européens ajoutent des estimations de certaines activités illégales, comme le trafic de drogue, ce qui a fait débat.</p>
<h4>7. Ce que le PIB ne mesure pas</h4>
<p>Le PIB mesure une production, pas un bien-être. Un accident de la route ou une inondation augmentent le PIB par les réparations qu’ils entraînent. L’épuisement d’une ressource naturelle n’y apparaît pas comme une perte. Le travail domestique, le bénévolat, le temps libre, la santé, la répartition des revenus en sont absents (<a href="#c-valeur-usage">voir valeur d’usage</a>).</p>
${compte}` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le PIB et le bien-être</h4>
<p>Malgré ses limites, le PIB par habitant est fortement corrélé à de nombreux indicateurs de bien-être : espérance de vie, mortalité infantile, éducation, satisfaction déclarée. Les pays riches vivent en moyenne plus longtemps et en meilleure santé. Mais au-delà d’un certain niveau, la relation s’affaiblit, et des pays au PIB comparable peuvent avoir des résultats très différents en santé ou en inégalités.</p>
<h4>La commission Stiglitz-Sen-Fitoussi</h4>
<p>En 2008, le président français Nicolas Sarkozy demande à Joseph Stiglitz, Amartya <a href="#eco-sen">Sen</a> et Jean-Paul Fitoussi un rapport sur la mesure des performances économiques et du progrès social. Publié en 2009, il recommande de s’intéresser davantage aux revenus et à la consommation des ménages qu’à la production, à la répartition, à la qualité de vie et à la soutenabilité. L’OCDE a lancé ensuite son indicateur du « vivre mieux ».</p>
<h4>Le « PIB des lutins » irlandais</h4>
<p>En 2015, le PIB réel de l’Irlande augmente de plus de 25 % en un an. Les Irlandais ne sont pas soudain devenus plus riches : plusieurs multinationales, notamment américaines, ont transféré dans le pays leurs droits de propriété intellectuelle, et la production qui y est attachée. Paul <a href="#eco-krugman">Krugman</a> parle d’« économie des lutins ». L’office statistique irlandais publie depuis un indicateur corrigé, le revenu national brut modifié, beaucoup plus proche de la réalité vécue.</p>` }
    ],
    cas: [
      { titre: "Le PIB suisse et les fédérations sportives", html: `
<p>Plusieurs grandes fédérations sportives internationales, comme le Comité international olympique, la FIFA et l’UEFA, ont leur siège en Suisse. Les recettes de leurs grands événements, comme les droits de télévision de la Coupe du monde ou des Jeux olympiques, sont comptabilisées dans le PIB suisse l’année où ils ont lieu, même s’ils se déroulent à l’étranger. Cela crée des variations artificielles de la croissance trimestrielle. Le Secrétariat d’État à l’économie publie donc, à côté du PIB officiel, un PIB « corrigé des grands événements sportifs », qui reflète mieux l’évolution de la conjoncture.</p>` },
      { titre: "Le PIB et l’effort de guerre", html: `
<p>Au début de la Seconde Guerre mondiale, Keynes publie Comment payer la guerre (1940), où il utilise les premières estimations du revenu national britannique pour calculer combien l’économie peut consacrer à l’armement sans inflation excessive. Aux États-Unis, les comptes nationaux de Kuznets et de Robert Nathan servent à planifier la production de guerre. Le PIB est d’abord un outil de pilotage de l’économie de guerre avant de devenir un indicateur de prospérité.</p>` },
      { titre: "Le bonheur national brut du Bhoutan", html: `
<p>En 1972, le jeune roi du Bhoutan, Jigme Singye Wangchuck, déclare que le « bonheur national brut » importe davantage que le produit national brut. Le pays construit ensuite un indice fondé sur des enquêtes, couvrant la santé, l’éducation, l’usage du temps, la culture, l’environnement et la gouvernance. L’exemple est souvent cité dans le débat sur les indicateurs alternatifs, même si le Bhoutan reste confronté à des problèmes de pauvreté et d’émigration des jeunes.</p>` }
    ],
    objections: `
<h4>1. Un indicateur qui pousse à la croissance à tout prix</h4>
<p>Les écologistes et les partisans de la décroissance reprochent au PIB d’orienter les politiques vers l’augmentation de la production, sans tenir compte de ses coûts environnementaux. Un pays qui épuise ses forêts ou ses sols voit son PIB augmenter.</p>
<h4>2. Un indicateur qui ignore les femmes</h4>
<p>Les économistes féministes, comme Marilyn Waring dans If Women Counted (1988), soulignent que le travail domestique et de soins, réalisé en majorité par des femmes, est exclu du PIB. Cela invisibilise une contribution essentielle à l’économie.</p>
<h4>3. Défendre le PIB</h4>
<p>Ses défenseurs répondent que le PIB n’a jamais prétendu mesurer le bien-être, mais l’activité économique, et qu’il le fait bien. Il est indispensable pour piloter la conjoncture, mesurer la capacité fiscale et comparer les économies. Le remplacer par un indicateur composite introduirait des pondérations arbitraires.</p>
<h4>4. L’économie numérique mal mesurée</h4>
<p>La croissance de la productivité serait sous-estimée parce que le PIB mesure mal les services gratuits et les améliorations de qualité, comme les téléphones de plus en plus puissants. Les études, comme celles de Chad Syverson, concluent cependant que cette mauvaise mesure n’explique qu’une petite partie du ralentissement de la productivité.</p>`,
    ecoles: `
<p><b>William Petty</b> et <b>Gregory King</b> estiment au XVIIe siècle le revenu de l’Angleterre.</p>
<p><b><a href="#eco-quesnay">Quesnay</a></b> représente la circulation des richesses dans son Tableau économique (1758).</p>
<p><b>Simon Kuznets</b> construit les premières estimations américaines (1934).</p>
<p><b>Richard Stone</b> et <b>James Meade</b>, avec <a href="#eco-keynes">Keynes</a>, construisent les comptes nationaux britanniques.</p>
<p><b>Stiglitz</b>, <b><a href="#eco-sen">Sen</a></b> et <b>Fitoussi</b> recommandent de dépasser le PIB.</p>
<p><b>Les économistes écologiques et féministes</b> en critiquent les angles morts.</p>`,
    source: {
      titre: "Simon Kuznets, National Income, 1929-1932, rapport au Sénat des États-Unis, 1934",
      texte: "Le bien-être d’une nation ne peut guère être déduit d’une mesure du revenu national telle que celle définie plus haut.",
      notes: `
<p><b>Un avertissement dès l’origine.</b> Le père du PIB américain met lui-même en garde contre son usage comme mesure du bien-être. Il souligne qu’un tel indicateur ne dit rien de la répartition des revenus ni des efforts consentis pour les obtenir.</p>
<p><b>Les choix de Kuznets.</b> Kuznets aurait voulu exclure du revenu national certaines dépenses qu’il jugeait non productives de bien-être, comme une partie des dépenses militaires ou de publicité. Ses vues ont été écartées au profit de conventions plus simples, mieux adaptées au pilotage de l’économie de guerre.</p>
<p><b>Une question toujours actuelle.</b> Le débat sur les indicateurs de bien-être, relancé par le rapport Stiglitz-Sen-Fitoussi, prolonge directement cette mise en garde de 1934.</p>`
    },
    quiz: [
      { q: "Pourquoi additionne-t-on les valeurs ajoutées plutôt que les chiffres d’affaires ?",
        o: ["Parce que les chiffres d’affaires sont trop difficiles à recueillir", "Pour ne pas compter plusieurs fois les biens intermédiaires", "Pour tenir compte des impôts payés par les entreprises", "Pour exclure les services, qui ne produisent rien de matériel"], c: 1,
        e: "Le blé, puis la farine, seraient comptés plusieurs fois dans le prix du pain." },
      { q: "Dans un pays, la consommation vaut 55, l’investissement 22, les dépenses publiques 15, les exportations 40 et les importations 32. Quel est le PIB ?",
        o: ["92", "100", "132", "164"], c: 1,
        e: "55 + 22 + 15 + (40 − 32) = 100." },
      { q: "Que mesure la croissance économique ?",
        o: ["La hausse du PIB nominal, mesuré aux prix courants", "La variation du PIB réel, corrigé de l’inflation", "La hausse du niveau général des prix d’une année à l’autre", "La hausse des exportations par rapport aux importations"], c: 1,
        e: "Le PIB nominal peut augmenter simplement parce que les prix montent." },
      { q: "Pourquoi le PIB irlandais a-t-il augmenté de plus de 25 % en 2015 ?",
        o: ["Grâce à un boom agricole et à de fortes exportations de produits laitiers vers l’Asie", "À cause du transfert de droits de propriété intellectuelle de multinationales", "Grâce à la découverte d’importants gisements de gaz au large des côtes", "À cause d’une forte hausse des prix de l’immobilier dans tout le pays"], c: 1,
        e: "La production comptée en Irlande a bondi sans changement comparable du niveau de vie : l’« économie des lutins »." },
      { q: "Pourquoi le SECO publie-t-il un PIB corrigé des grands événements sportifs ?",
        o: ["Parce que les grands événements attirent trop de touristes et saturent les hôtels", "Parce que les recettes des fédérations sportives en Suisse faussent la croissance", "Pour corriger l’effet d’un hiver trop doux sur les stations de ski et leurs remontées", "Parce que les paris sportifs sont exclus du PIB et doivent être réintégrés"], c: 1,
        e: "Les droits des Jeux olympiques ou de la Coupe du monde sont comptés en Suisse l’année de l’événement." }
    ],
    transfert: { q: "Dans un pays, de nombreuses familles cessent de cuisiner chez elles et achètent des repas livrés. Le temps passé à table et la nourriture consommée ne changent pas. Qu’arrive-t-il au PIB ?",
      o: ["Il augmente, car un travail auparavant gratuit devient une production payée", "Il baisse, car les familles passent moins de temps à cuisiner et produisent moins", "Il ne change pas, puisque la consommation de nourriture est la même", "Il baisse, car les livraisons créent des coûts de transport et de pollution"], c: 0,
      e: "Le PIB ne compte pas le repas cuisiné à la maison, mais compte le repas acheté." },
    ouverte: {
      q: "Les gouvernements devraient-ils accorder autant d’importance à d’autres indicateurs, comme le bien-être déclaré ou l’empreinte écologique, qu’au PIB ?",
      r: "Plusieurs pays ont essayé. La Nouvelle-Zélande a présenté en 2019 un « budget du bien-être », qui fixe ses priorités à partir d’indicateurs de santé, de pauvreté des enfants ou d’environnement ; le Bhoutan met en avant le « bonheur national brut » ; de nombreux instituts statistiques, comme ceux de la France, du Royaume-Uni ou de la Suisse, publient des tableaux d’indicateurs du bien-être et du développement durable. Mais le débat public reste dominé par le PIB et la croissance, en partie parce qu’un chiffre unique est plus facile à communiquer. Mettre davantage en avant d’autres indicateurs permettrait de mieux voir des enjeux que le PIB cache, comme l’empreinte carbone importée, le travail non rémunéré ou la répartition du patrimoine. Le risque d’un indicateur unique de bien-être est l’arbitraire des pondérations et la tentation de choisir l’indicateur qui flatte le gouvernement. La solution souvent recommandée est un « tableau de bord » restreint, de quelques indicateurs clés présentés ensemble, plutôt qu’un remplacement du PIB."
    },
    lectures: [
      ["Accessible", "Diane Coyle, GDP: A Brief but Affectionate History, 2014."],
      ["Accessible", "Florence Jany-Catrice et Jean Gadrey, Les Nouveaux Indicateurs de richesse, collection Repères."],
      ["Intermédiaire", "Joseph Stiglitz, Amartya Sen et Jean-Paul Fitoussi, Richesse des nations et bien-être des individus, rapport de 2009."],
      ["Intermédiaire", "Office fédéral de la statistique, Comptes nationaux de la Suisse, publications de méthode."],
      ["Recherche", "Simon Kuznets, National Income, 1929-1932, 1934 ; Chad Syverson, « Challenges to Mismeasurement Explanations for the US Productivity Slowdown », Journal of Economic Perspectives, 2017."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi le gouvernement américain fait-il calculer le revenu national en 1932 ?",
          o: ["Parce qu’il ne savait pas à quel point l’économie s’était effondrée", "Pour trouver de nouvelles sources d’impôts afin de combler le déficit", "Pour comparer les performances économiques des États-Unis à celles de l’Europe", "Pour fixer le niveau des salaires dans toutes les entreprises"], c: 0,
          e: "Simon Kuznets trouve que le revenu national a diminué de moitié en trois ans." },
        { q: "Pourquoi un accident de voiture peut-il faire augmenter le PIB ?",
          o: ["Parce que les réparations et les soins sont des productions payées", "Parce que l’accident crée de la richesse pour toute la société", "Parce que l’assurance rembourse deux fois les dégâts aux victimes", "Parce que le PIB compte les dégâts matériels comme des investissements"], c: 0,
          e: "Le PIB mesure la production, pas le bien-être." }
      ],
      duree: 5,
      html: `
<h3>Mesurer toute une économie</h3>
<p>En 1932, en pleine crise, le gouvernement américain ne sait pas à quel point l’économie s’est effondrée. L’économiste Simon Kuznets calcule alors le revenu national : il a diminué de moitié en trois ans. C’est l’ancêtre du <b>produit intérieur brut</b>, le PIB, qui mesure la valeur de tout ce qu’un pays produit en un an.</p>
<h3>Trois façons de le calculer</h3>
<p>On peut additionner ce que chaque entreprise ajoute à ce qu’elle achète, ou ce que dépensent ménages, entreprises, État et étrangers, ou encore les revenus distribués. Les trois donnent le même résultat. Quand le PIB, corrigé de la hausse des prix, augmente, on parle de croissance économique.</p>
${trois}
<h3>Ce qu’il ne dit pas</h3>
<p>Le PIB ne compte pas le repas cuisiné à la maison, le bénévolat ou la pollution. Un accident de voiture le fait même augmenter, par les réparations. Kuznets lui-même avertissait qu’il ne mesure pas le bien-être d’une nation. En Suisse, il est même corrigé des recettes des fédérations sportives, comme la FIFA, qui le font varier artificiellement.</p>
<h3>À retenir</h3>
<p>Le PIB mesure la production, pas le bonheur. La notice complète présente le calcul, son histoire et ses limites.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Comment savoir si l’économie va mieux ? Kuznets et la crise de 1932.",
      raisonnement: "Sept étapes, de la valeur ajoutée à ce que le PIB ne mesure pas.",
      preuves: "PIB et bien-être, la commission Stiglitz-Sen-Fitoussi, le PIB irlandais.",
      cas: "Le PIB suisse et les fédérations sportives, l’effort de guerre, le Bhoutan.",
      objections: "Croissance à tout prix, travail des femmes, défense du PIB, économie numérique.",
      ecoles: "Petty et King, Quesnay, Kuznets, Stone et Meade, Stiglitz-Sen-Fitoussi, écologistes et féministes.",
      source: "Kuznets, 1934 : le bien-être ne se déduit guère du revenu national.",
      quiz: "Six questions corrigées, dont un calcul, et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     42. CYCLES ÉCONOMIQUES
     ===================================================================== */
  const phases = fig(300, (() => {
    const L = 60, R = 600, B = 240, X = (t) => L + t * (R - L) / 12, Y = (v) => B - v * 14;
    const trend = (t) => 4 + t * 0.7, act = (t) => trend(t) + 2.4 * Math.sin((t - 1) * Math.PI / 4.2);
    let s = `<text x="20" y="24" ${T}>Les phases d’un cycle autour de la tendance (schéma)</text>`;
    let d1 = "", d2 = ""; for (let t = 0; t <= 12.001; t += 0.1) { d1 += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(trend(t))} `; d2 += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(act(t))} `; }
    s += `<line x1="${L}" y1="40" x2="${L}" y2="${B}" style="stroke:var(--ink-soft)"/><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--ink-soft)"/>`;
    s += `<text x="${L + 6}" y="46" ${M}>PIB réel</text><text x="${R}" y="${B + 20}" text-anchor="end" ${M}>temps</text>`;
    s += `<path d="${d1}" style="fill:none; stroke:var(--ink-soft); stroke-dasharray:5 4"/><path d="${d2}" style="fill:none; stroke:var(--note); stroke-width:2.8"/>`;
    const pk = 3.1, tr = 7.3;
    s += `<circle cx="${X(pk)}" cy="${Y(act(pk))}" r="5" style="fill:var(--gold)"/><text x="${X(pk)}" y="${Y(act(pk)) - 12}" text-anchor="middle" style="fill:var(--gold); font:700 12px Manrope, sans-serif">pic</text>`;
    s += `<circle cx="${X(tr)}" cy="${Y(act(tr))}" r="5" style="fill:var(--serial)"/><text x="${X(tr)}" y="${Y(act(tr)) + 22}" text-anchor="middle" style="fill:var(--serial); font:700 12px Manrope, sans-serif">creux</text>`;
    s += `<text x="${X(1.2)}" y="${Y(3) + 34}" text-anchor="middle" ${S}>expansion</text><text x="${X(5.3)}" y="${Y(4.5) + 46}" text-anchor="middle" ${S}>récession</text><text x="${X(9.6)}" y="${Y(6)}" text-anchor="middle" ${S}>reprise</text>`;
    s += `<text x="${X(11.6)}" y="${Y(trend(11.6)) + 18}" text-anchor="end" ${S}>tendance de long terme</text>`;
    s += `<text x="20" y="284" ${S}>Les cycles sont récurrents mais pas réguliers : leur durée et leur ampleur varient beaucoup.</text>`;
    return s;
  })(), "La définition classique d’Arthur Burns et Wesley Mitchell (1946) : des expansions simultanées dans de nombreuses activités, suivies de contractions également générales. Le National Bureau of Economic Research date les cycles américains ; en Suisse, le centre de recherches conjoncturelles KOF de l’ETH Zurich publie des indicateurs avancés.", "Courbe oscillant autour d’une tendance avec pic et creux");

  const durees = fig(250, (() => {
    const L = 230, W = 340, sc = W / 130;
    const rows = [["Expansion moyenne, 1945-2009", 58, "var(--note)"], ["Récession moyenne, 1945-2009", 11, "var(--serial)"], ["Expansion 2009-2020", 128, "var(--note)"], ["Récession de 2020", 2, "var(--serial)"]];
    let s = `<text x="20" y="24" ${T}>Durée des phases aux États-Unis, en mois (dates du NBER)</text>`;
    rows.forEach(([n, v, c], i) => {
      const y = 46 + i * 44, w = Math.max(v * sc, 3);
      s += `<text x="${L - 12}" y="${y + 20}" text-anchor="end" ${T}>${n}</text>`;
      s += `<rect x="${L}" y="${y}" width="${w}" height="28" rx="4" style="fill:${c}; opacity:${i > 1 ? 0.75 : 1}"/>`;
      s += `<text x="${L + w + 8}" y="${y + 19}" style="fill:var(--ink); font:700 12.5px 'JetBrains Mono', monospace">${v}</text>`;
    });
    s += `<text x="20" y="232" ${S}>Les expansions sont beaucoup plus longues que les récessions, et se sont allongées depuis l’après-guerre.</text>`;
    return s;
  })(), "Moyennes arrondies d’après la chronologie officielle des cycles américains. La récession de 2020, causée par la pandémie, a été la plus courte jamais enregistrée, mais aussi l’une des plus profondes.", "Barres des durées d’expansion et de récession");

  OEC.notices["cycles"] = {
    essentiel: [
      "Les cycles économiques sont les fluctuations de l’activité autour de sa tendance de long terme : des phases d’expansion, où la production et l’emploi augmentent, alternent avec des récessions, où ils reculent. Ils sont récurrents, mais irréguliers.",
      "Les économistes du XIXe et du début du XXe siècle ont cru y voir des rythmes réguliers, de quelques années à un demi-siècle. Les théories modernes les expliquent par des chocs, de demande, d’offre, financiers, propagés par des mécanismes d’amplification.",
      "Le débat oppose ceux qui y voient des défaillances que la politique économique doit corriger, comme les keynésiens, et ceux qui y voient en partie des réactions efficaces à des chocs réels. La crise de 2008 a rappelé le rôle central des cycles financiers."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi les crises reviennent-elles ?", html: `
<p>Au XIXe siècle, les crises commerciales frappent régulièrement les économies industrielles : 1825, 1836, 1847, 1857, 1866, 1873. Chaque fois, après une période de prospérité et de spéculation, des faillites en cascade, une chute du crédit, du chômage. Beaucoup les attribuent à des causes accidentelles, une mauvaise récolte, une guerre, une imprudence. Le médecin et statisticien français Clément Juglar observe en 1862 qu’elles reviennent avec une régularité troublante, tous les sept à onze ans environ.</p>
<p>Juglar en tire une conclusion qui frappe ses contemporains : les crises ne sont pas des accidents, mais une phase normale de la vie économique. « La seule cause de la dépression, c’est la prospérité », résume-t-il. Depuis, la question n’a cessé d’occuper les économistes : qu’est-ce qui fait que l’économie avance par vagues plutôt qu’en ligne droite ?</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Les phases</h4>
<p>On distingue l’expansion, où la production, l’emploi et l’investissement augmentent ; le pic ; la récession, où ils reculent ; le creux ; puis la reprise. Une récession est souvent définie, dans la presse, comme deux trimestres consécutifs de baisse du PIB réel. Les comités de datation, comme celui du National Bureau of Economic Research américain, utilisent une définition plus large, fondée sur l’emploi, les revenus, la production et les ventes.</p>
${phases}
<h4>2. Les cycles réguliers</h4>
<p>Les économistes ont cru identifier plusieurs rythmes : des cycles courts d’environ quarante mois liés aux stocks (Joseph Kitchin, 1923), les cycles de sept à onze ans de Juglar, liés à l’investissement, et les « ondes longues » d’environ cinquante ans décrites par le Russe Nikolaï Kondratiev en 1925. Joseph <a href="#eco-schumpeter">Schumpeter</a> les combine en 1939 et attribue les ondes longues aux grandes vagues d’innovation : machine à vapeur, chemin de fer, électricité (<a href="#c-destruction-creatrice">voir destruction créatrice</a>). La plupart des économistes doutent aujourd’hui de la régularité de ces rythmes.</p>
<h4>3. Impulsions et propagation</h4>
<p>En 1933, le Norvégien Ragnar Frisch, futur premier lauréat du prix Nobel d’économie, propose une distinction décisive, en reprenant une image de Knut Wicksell : un cheval à bascule frappé au hasard par un bâton oscille selon sa propre structure. Les chocs qui frappent l’économie sont aléatoires, les « impulsions » ; ce sont les mécanismes internes, la « propagation », qui transforment ces chocs en fluctuations durables.</p>
<h4>4. Les mécanismes keynésiens</h4>
<p>Pour <a href="#eco-keynes">Keynes</a>, les fluctuations de l’investissement, dépendant des « esprits animaux » des entrepreneurs, sont amplifiées par le <a href="#c-multiplicateur">multiplicateur</a>. Paul <a href="#eco-samuelson">Samuelson</a> montre en 1939 que l’interaction du multiplicateur et de l’accélérateur, l’investissement qui dépend de la croissance des ventes, peut produire des oscillations. La politique budgétaire et monétaire doit alors stabiliser l’économie.</p>
<h4>5. Les cycles monétaires et financiers</h4>
<p>Les économistes autrichiens, <a href="#eco-mises">Mises</a> et <a href="#eco-hayek">Hayek</a>, attribuent les cycles au crédit trop abondant, qui pousse les taux sous leur niveau naturel et encourage des investissements que l’épargne ne peut soutenir. <a href="#eco-friedman">Friedman</a> attribue les grandes récessions aux erreurs de la politique monétaire. Hyman <a href="#eco-minsky">Minsky</a> décrit un cycle financier endogène, où la stabilité engendre l’endettement et la prise de risque, jusqu’à la crise (<a href="#c-instabilite-financiere">voir instabilité financière</a>).</p>
<h4>6. Les cycles réels</h4>
<p>En 1982, Finn Kydland et Edward Prescott proposent une théorie radicalement différente : les cycles résulteraient surtout de chocs de productivité, technologiques ou autres, auxquels les ménages et les entreprises réagissent de manière optimale. Une récession serait en partie une réponse efficace à une baisse temporaire de la productivité. La politique de stabilisation serait alors inutile, voire nuisible. Cette théorie des cycles réels a fourni la méthode des modèles macroéconomiques modernes.</p>
<h4>7. La synthèse néokeynésienne</h4>
<p>Les modèles utilisés aujourd’hui par les banques centrales combinent les méthodes des cycles réels avec des rigidités de prix et de salaires qui donnent à la demande et à la politique monétaire un rôle important. Depuis 2008, on y ajoute un secteur financier, après que la crise a montré que les cycles du crédit et des prix immobiliers pouvaient provoquer des récessions profondes.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Des expansions longues, des récessions brèves</h4>
<p>Aux États-Unis, d’après la chronologie du NBER, les expansions ont duré en moyenne près de cinq ans entre 1945 et 2009, et les récessions environ onze mois. L’expansion qui suit la crise de 2008 dure plus de dix ans, la plus longue jamais enregistrée. Les récessions de l’après-guerre ont été en général moins profondes que celles d’avant 1945.</p>
${durees}
<h4>La « Grande Modération »</h4>
<p>Du milieu des années 1980 à 2007, la volatilité de la croissance et de l’inflation diminue fortement dans les pays riches. James Stock et Mark Watson (2002) documentent cette « Grande Modération », et Ben Bernanke l’attribue en partie à une meilleure politique monétaire. La crise de 2008 met brutalement fin à cette période, et montre que la stabilité apparente avait permis l’accumulation de risques financiers, comme Minsky l’avait prévu.</p>
<h4>Le coût des cycles</h4>
<p>En 1987, Robert <a href="#eco-lucas">Lucas</a> calcule que les fluctuations de la consommation américaine d’après-guerre coûtent l’équivalent d’une fraction minime de la consommation, à peine 0,05 %. Il en conclut que la recherche devrait se concentrer sur la croissance de long terme. Ses critiques répondent que le calcul ignore la concentration des pertes sur les chômeurs et les effets durables des récessions (<a href="#c-hysterese">voir hystérèse</a>).</p>` }
    ],
    cas: [
      { titre: "La Suisse et ses récessions", html: `
<p>L’économie suisse a connu plusieurs récessions marquantes depuis l’après-guerre : celle de 1975, l’une des plus profondes de l’OCDE ; la longue stagnation de 1991 à 1996, liée à l’éclatement d’une bulle immobilière et au franc fort, pendant laquelle le chômage atteint des niveaux inconnus depuis les années 1930 ; la récession de 2009, plutôt modérée ; et celle de 2020, causée par la pandémie. Le KOF, centre de recherches conjoncturelles de l’ETH Zurich, publie depuis des décennies un baromètre conjoncturel mensuel, suivi de près par les entreprises et les autorités. Le SECO et la BNS publient aussi leurs propres prévisions.</p>` },
      { titre: "Les ondes longues de Kondratiev", html: `
<p>Nikolaï Kondratiev, directeur de l’Institut de conjoncture de Moscou, publie en 1925 une étude des prix, des taux d’intérêt et de la production depuis la fin du XVIIIe siècle, et y voit des ondes longues d’environ cinquante ans. Son hypothèse, qui suggère que le capitalisme se rétablit de lui-même après ses crises, contredit la doctrine soviétique de son effondrement inévitable. Kondratiev est arrêté en 1930 et fusillé en 1938. Ses ondes longues restent discutées : les données sont trop courtes pour établir une régularité sur des cycles de cinquante ans.</p>` },
      { titre: "La récession de la pandémie", html: `
<p>En 2020, la pandémie provoque la récession la plus brutale de l’histoire moderne : au deuxième trimestre, le PIB de nombreux pays recule de plus de 10 %. Mais son origine est inédite : ni excès de crédit, ni choc pétrolier, ni politique monétaire trop restrictive, mais une décision sanitaire de mettre l’activité en pause. Grâce à des soutiens massifs, chômage partiel, prêts garantis, transferts, la reprise est rapide. Aux États-Unis, la récession ne dure que deux mois selon le NBER. L’épisode montre que les cycles peuvent naître de chocs très divers.</p>` }
    ],
    objections: `
<h4>1. Les cycles n’existent pas vraiment</h4>
<p>Certains statisticiens soutiennent que les « cycles » ne sont que des fluctuations aléatoires, auxquelles l’œil humain prête une régularité qui n’existe pas. Eugen Slutsky avait montré en 1927 que la somme de chocs aléatoires peut produire des séries qui ressemblent à des cycles.</p>
<h4>2. Les cycles réels contestés</h4>
<p>Les critiques de la théorie des cycles réels, comme Lawrence <a href="#eco-summers">Summers</a> dès 1986, demandent quels chocs technologiques auraient provoqué la Grande Dépression ou la récession de 2008. Ils jugent invraisemblable qu’une récession puisse être une réponse optimale.</p>
<h4>3. La prévision reste difficile</h4>
<p>Malgré tous les modèles, les économistes prévoient mal les récessions. Une étude du FMI a montré que, sur des centaines de récessions dans le monde depuis 1992, très peu avaient été prévues par le consensus des prévisionnistes un an à l’avance.</p>
<h4>4. Stabiliser peut déstabiliser</h4>
<p>Les économistes autrichiens et une partie des économistes de la BRI jugent que les politiques qui évitent systématiquement les récessions, en baissant les taux et en soutenant les marchés, encouragent l’accumulation de dettes et de risques, et préparent des crises plus graves.</p>`,
    ecoles: `
<p><b>Clément Juglar</b> (1862) montre la périodicité des crises.</p>
<p><b>Kitchin</b> et <b>Kondratiev</b> décrivent des cycles courts et longs ; <b><a href="#eco-schumpeter">Schumpeter</a></b> les relie à l’innovation.</p>
<p><b>Frisch</b> et <b>Slutsky</b> distinguent impulsions et propagation.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> et <b><a href="#eco-samuelson">Samuelson</a></b> expliquent les cycles par l’investissement et la demande.</p>
<p><b><a href="#eco-hayek">Hayek</a></b>, <b><a href="#eco-friedman">Friedman</a></b> et <b><a href="#eco-minsky">Minsky</a></b> insistent sur la monnaie et le crédit.</p>
<p><b>Kydland et Prescott</b> fondent la théorie des cycles réels ; <b><a href="#eco-lucas">Lucas</a></b> en relativise le coût.</p>`,
    source: {
      titre: "Arthur Burns et Wesley Mitchell, Measuring Business Cycles, NBER, 1946, chapitre 1",
      texte: "Un cycle consiste en des expansions qui se produisent à peu près au même moment dans de nombreuses activités économiques, suivies de récessions, de contractions et de reprises également générales, qui se fondent dans la phase d’expansion du cycle suivant ; cette suite de changements est récurrente mais pas périodique.",
      notes: `
<p><b>Une définition empirique.</b> Burns et Mitchell ne proposent pas de théorie : ils définissent les cycles par leurs caractéristiques observables, à partir de centaines de séries statistiques. Leur méthode est à la base de la datation des cycles par le NBER.</p>
<p><b>« Récurrente mais pas périodique ».</b> La formule est essentielle : les cycles reviennent, mais pas à intervalles réguliers. Elle tourne le dos aux tentatives de trouver des rythmes fixes, comme ceux de Juglar ou de Kondratiev.</p>
<p><b>La critique de Koopmans.</b> En 1947, Tjalling Koopmans reproche à cette méthode de « mesurer sans théorie ». Le débat entre approche empirique et approche fondée sur des modèles traverse toute l’histoire de la macroéconomie.</p>`
    },
    quiz: [
      { q: "Quelle définition simple de la récession utilise souvent la presse ?",
        o: ["Une hausse du chômage d’au moins un point en un an", "Deux trimestres consécutifs de baisse du PIB réel", "Une baisse de la bourse de 20 % depuis son sommet", "Un recul du niveau général des prix pendant deux trimestres"], c: 1,
        e: "Les comités de datation, comme le NBER, utilisent une définition plus large." },
      { q: "Qu’a observé Clément Juglar en 1862 ?",
        o: ["Que les crises sont des accidents venus de l’extérieur de l’économie", "Que les crises reviennent à peu près tous les sept à onze ans", "Que les crises ont disparu grâce aux progrès de l’industrie", "Que les crises reviennent tous les cinquante ans environ"], c: 1,
        e: "Pour Juglar, la crise est une phase normale qui suit la prospérité." },
      { q: "Que signifie la distinction de Frisch entre impulsion et propagation ?",
        o: ["Les chocs sont aléatoires, et la structure de l’économie les transforme en fluctuations", "Les cycles sont réguliers, car leur rythme est fixé par des lois naturelles", "Seuls les chocs comptent, la structure de l’économie ne jouant aucun rôle dans les cycles", "Les fluctuations viennent surtout des décisions de la banque centrale"], c: 0,
        e: "C’est l’image du cheval à bascule frappé au hasard." },
      { q: "Selon la théorie des cycles réels, qu’est-ce qui cause surtout les fluctuations ?",
        o: ["La politique monétaire, lorsque la banque centrale se trompe dans le réglage des taux", "Des chocs de productivité, auxquels les agents s’adaptent au mieux", "La spéculation, qui gonfle des bulles puis les fait éclater", "Le pouvoir des syndicats, qui bloquent la baisse des salaires"], c: 1,
        e: "Kydland et Prescott (1982) en tirent que la stabilisation est inutile." },
      { q: "Combien de temps a duré en moyenne une expansion américaine entre 1945 et 2009 ?",
        o: ["Environ 11 mois", "Environ 5 ans", "Environ 20 ans", "Environ 6 mois"], c: 1,
        e: "Près de 58 mois en moyenne, contre environ 11 mois pour les récessions." }
    ],
    transfert: { q: "En 2020, une pandémie oblige de nombreux pays à fermer magasins et usines pendant plusieurs semaines. Comment classer ce choc dans l’analyse des cycles ?",
      o: ["Un choc extérieur, amplifié ensuite par la baisse de la confiance et des revenus", "Un cycle régulier de sept à onze ans, comme celui décrit par Juglar", "Une simple variation saisonnière, comme celle des soldes ou des vacances", "Une crise causée par un crédit trop facile et un endettement excessif des ménages"], c: 0,
      e: "Les cycles naissent souvent d’un choc imprévu, que l’économie amplifie ensuite." },
    ouverte: {
      q: "Les cycles d’une petite économie très ouverte, comme la Belgique, Singapour ou la Suisse, suivent étroitement ceux de ses grands partenaires. A-t-elle encore les moyens de mener sa propre politique conjoncturelle ?",
      r: "Ses moyens sont réels mais limités, et dépendent de ses institutions. Un pays de la zone euro, comme la Belgique, n’a plus de politique monétaire propre et compte surtout sur son budget. Singapour pilote sa politique monétaire par le taux de change plutôt que par les taux d’intérêt, et la Suisse dispose d’une banque centrale indépendante qui agit aussi sur le change. Partout, les stabilisateurs automatiques, assurance chômage et chômage partiel, soutiennent la demande en récession sans décision politique. En revanche, comme l’économie est petite et très ouverte, une relance budgétaire a un effet limité, et les exportations dépendent d’une conjoncture mondiale que le pays ne contrôle pas. La politique conjoncturelle de ces pays vise donc surtout à amortir les chocs extérieurs et à préserver l’emploi et les compétences, plutôt qu’à piloter activement le cycle."
    },
    lectures: [
      ["Accessible", "Charles Kindleberger et Robert Aliber, Manias, Panics, and Crashes, édition récente, chapitres 1 et 2."],
      ["Accessible", "Paul Krugman, Pourquoi les crises reviennent toujours, 2009."],
      ["Intermédiaire", "Joseph Schumpeter, Business Cycles, 1939, chapitres de synthèse."],
      ["Intermédiaire", "Arthur Burns et Wesley Mitchell, Measuring Business Cycles, 1946, chapitre 1."],
      ["Recherche", "Finn Kydland et Edward Prescott, « Time to Build and Aggregate Fluctuations », Econometrica, 1982 ; Ragnar Frisch, « Propagation Problems and Impulse Problems in Dynamic Economics », 1933."]
    ],
    decouvrir: {
      questions: [
        { q: "Comment appelle-t-on les périodes où la production et l’emploi augmentent, puis reculent ?",
          o: ["Des expansions et des récessions, qui forment les cycles économiques", "Des inflations et des déflations, qui alternent au fil des années", "Des booms et des krachs boursiers, qui forment les cycles de la finance", "Des saisons économiques fixes, qui reviennent à date régulière"], c: 0,
          e: "L’économie ne croît pas en ligne droite." },
        { q: "Selon la plupart des économistes, comment naissent les cycles ?",
          o: ["Un choc au hasard est amplifié par le fonctionnement de l’économie", "Ils reviennent à date fixe, au rythme des saisons de l’année", "Ils sont décidés par les gouvernements, qui alternent relance et rigueur", "Ils dépendent de la météo et des récoltes de chaque année"], c: 0,
          e: "Confiance, crédit et chocs extérieurs se combinent." }
      ],
      duree: 5,
      html: `
<h3>L’économie avance par vagues</h3>
<p>L’économie ne croît pas en ligne droite. Des périodes où la production et l’emploi augmentent, les expansions, alternent avec des périodes où ils reculent, les récessions. C’est ce qu’on appelle les <b>cycles économiques</b>. En 1862 déjà, le Français Clément Juglar remarquait que les crises revenaient tous les sept à onze ans environ.</p>
${phases}
<h3>Pourquoi ces vagues ?</h3>
<p>Les explications varient. Pour <a href="#eco-keynes">Keynes</a>, l’investissement des entreprises dépend de leur confiance, et ses variations sont amplifiées. Pour d’autres, c’est le crédit trop facile qui crée des bulles, ou des chocs comme une flambée du pétrole ou une pandémie. La plupart des économistes pensent qu’un choc au hasard est amplifié par le fonctionnement de l’économie.</p>
<h3>Des récessions plus courtes</h3>
<p>Depuis la guerre, les expansions durent en moyenne plusieurs années et les récessions moins d’un an. Des instituts publient chaque mois des indicateurs pour anticiper les retournements, comme les enquêtes auprès des directeurs d’achat aux États-Unis et en Europe, ou le baromètre conjoncturel du KOF en Suisse.</p>
<h3>À retenir</h3>
<p>Les cycles sont récurrents mais irréguliers, et difficiles à prévoir. La notice complète présente les théories, les faits et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Pourquoi les crises reviennent-elles ? Juglar en 1862.",
      raisonnement: "Sept étapes, des phases du cycle à la synthèse néokeynésienne.",
      preuves: "Expansions longues et récessions brèves, la Grande Modération, le coût des cycles.",
      cas: "Les récessions suisses, les ondes longues de Kondratiev, la récession de la pandémie.",
      objections: "Des cycles illusoires, les cycles réels contestés, la prévision difficile, stabiliser qui déstabilise.",
      ecoles: "Juglar, Kitchin et Kondratiev, Schumpeter, Frisch, Keynes et Samuelson, Hayek et Minsky, Kydland et Prescott.",
      source: "Burns et Mitchell, 1946 : récurrents mais pas périodiques.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
