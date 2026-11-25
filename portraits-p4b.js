/* Œconomia — portraits longs, lot 4 (b) : Thomas Mun, François Quesnay */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;
  const cards = (items, w, h, y0) => items.map(([n, d, c], i) => {
    const x = 20 + i * (w + 10);
    let s = `<rect x="${x}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y0 + 28}" text-anchor="middle" style="fill:${c}; font:700 13px Manrope, sans-serif">${n}</text>`;
    const words = d.split(" "); let line = "", ly = y0 + 56; const max = Math.floor(w / 6.6);
    words.forEach((wd) => { if ((line + wd).length > max) { s += `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
    return s + `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
  }).join("");

  /* =====================================================================
     THOMAS MUN
     ===================================================================== */
  const vieMun = lifeline(1571, 1641, [
    [1571, "naissance à Londres", true], [1596, "commerce en Italie et au Levant", false], [1615, "directeur de la Compagnie des Indes", true], [1621, "Discours sur le commerce", false],
    [1622, "commission sur la crise", true], [1641, "mort à Londres", false]
  ], "Thomas Mun, 1571-1641", "Marchand avant d’être auteur, Mun passe sa jeunesse dans le commerce méditerranéen, puis dirige la Compagnie anglaise des Indes orientales. Son ouvrage le plus célèbre ne paraît qu’en 1664, vingt-trois ans après sa mort, publié par son fils.");

  const circuit = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>L’argument de Mun : exporter de l’argent pour en faire revenir davantage (exemple)</text>`;
    s += node(20, 60, 170, 64, "Angleterre", "envoie 100 en argent", "var(--gold)");
    s += node(235, 60, 170, 64, "Indes orientales", "achat de poivre et d’épices", "var(--note)");
    s += node(450, 60, 170, 64, "Italie, Levant", "revente des épices", "var(--plum)");
    s += arrow(192, 92, 233, 92, "var(--gold)") + arrow(407, 92, 448, 92, "var(--note)");
    s += `<path d="M 535 126 C 535 200, 105 200, 105 128" style="fill:none; stroke:var(--serial); stroke-width:2"/><polygon points="105,128 101,138 109,138" style="fill:var(--serial)"/>`;
    s += `<text x="320" y="196" text-anchor="middle" style="fill:var(--serial); font:700 12.5px Manrope, sans-serif">retour en Angleterre : 300 en argent</text>`;
    s += `<text x="20" y="244" ${S}>Pris isolément, l’envoi d’argent aux Indes appauvrit le royaume ; vu dans l’ensemble du commerce, il l’enrichit.</text>`;
    s += `<text x="20" y="262" ${S}>Ce qui compte, c’est la balance générale du commerce, et non chaque échange pris à part.</text>`;
    return s;
  })(), "Mun défend la Compagnie des Indes orientales, accusée d’appauvrir l’Angleterre en exportant de l’argent métal pour acheter des épices. Il compare ce commerce à un semeur qui jette son grain en terre : il semble le perdre, mais récolte davantage. Chiffres illustratifs.", "Circuit commercial entre Angleterre, Indes et Méditerranée");

  const outils = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Les moyens d’une balance commerciale favorable selon Mun</text>`;
    s += cards([["Produire", "cultiver les terres incultes, développer la pêche", "var(--note)"], ["Exporter cher", "vendre cher ce dont l’étranger a besoin", "var(--note)"], ["Transporter", "utiliser ses propres navires", "var(--gold)"], ["Sobriété", "limiter le luxe importé", "var(--plum)"], ["Réexporter", "faire de Londres un entrepôt du monde", "var(--serial)"]], 112, 200, 44);
    return s;
  })(), "England’s Treasure by Forraign Trade énumère une douzaine de moyens d’accroître le trésor du royaume. Mun se méfie des interdictions brutales et des manipulations monétaires ; il mise sur la production, la navigation et le commerce de réexportation.", "Cinq cartes de politiques mercantilistes");

  OEC.portraits["mun"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Thomas Mun (1571-1641), marchand londonien et directeur de la Compagnie anglaise des Indes orientales, est le plus célèbre des auteurs mercantilistes. Son livre, England’s Treasure by Forraign Trade, publié en 1664, pose que la richesse d’un royaume s’accroît en vendant chaque année à l’étranger plus qu’il ne lui achète.",
      "Il dépasse le mercantilisme le plus naïf : il défend l’exportation de métaux précieux quand elle permet d’en faire revenir davantage, raisonne sur la balance générale du commerce plutôt que sur chaque échange, et insiste sur la production et la navigation.",
      "Adam Smith en fera la cible principale de sa critique du « système mercantile ». Mais l’idée que les excédents commerciaux enrichissent une nation reste présente dans les débats contemporains, de la Chine à l’Allemagne et à la Suisse."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Thomas Mun est baptisé à Londres le 17 juin 1571, fils d’un marchand de tissus fins, un mercier. Son grand-père était fonctionnaire à la Monnaie royale. Comme beaucoup de jeunes marchands, il part tôt pour la Méditerranée et passe de longues années en Italie, notamment à Livourne et à Florence, ainsi qu’au Levant, dans l’Empire ottoman. Il y acquiert une connaissance pratique du commerce international, des changes et des monnaies.</p>
<p>De retour à Londres, enrichi, il devient en 1615 l’un des directeurs de la Compagnie des Indes orientales, fondée en 1600 avec un monopole sur le commerce anglais avec l’Asie. La compagnie est critiquée : elle exporte de grandes quantités d’argent métal pour acheter du poivre, des épices et des étoffes, ce qui, aux yeux de beaucoup, appauvrit le royaume.</p>
${vieMun}
<p>Mun prend la défense de la compagnie dans un premier ouvrage, A Discourse of Trade from England unto the East-Indies (1621). Au début des années 1620, l’Angleterre traverse une grave crise commerciale ; Mun siège dans une commission chargée d’en chercher les causes. Il rédige alors, probablement entre 1626 et 1630, son grand ouvrage, England’s Treasure by Forraign Trade, adressé à son fils. Il meurt en 1641, très riche. Le livre n’est publié qu’en 1664 par son fils John, et connaît un grand succès.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Au début du XVIIe siècle, les États européens se constituent et rivalisent pour la puissance. L’or et l’argent affluent d’Amérique par l’Espagne et circulent dans toute l’Europe. Les souverains ont besoin de métaux précieux pour payer leurs armées et leurs flottes. La richesse d’un royaume est spontanément associée à son trésor, et les gouvernements cherchent à empêcher la sortie des métaux.</p>
<p>L’Angleterre, encore une puissance moyenne face à l’Espagne et aux Provinces-Unies, développe son commerce maritime et ses compagnies à charte. Les Hollandais dominent le commerce mondial, la pêche en mer du Nord et le transport maritime ; leur prospérité fascine et inquiète les Anglais.</p>
<p>Dans les années 1620, une crise frappe le commerce anglais des draps, principal produit d’exportation. Un débat s’engage entre plusieurs auteurs, Gerard Malynes, Edward Misselden et Mun, sur ses causes : manipulation des changes, sortie des métaux, ou déséquilibre du commerce extérieur. Mun soutient que la clé est la balance du commerce.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. La règle d’or</h4>
<p>Pour Mun, le moyen ordinaire d’accroître la richesse et le trésor du royaume est le commerce extérieur, à une condition : vendre chaque année aux étrangers plus, en valeur, que l’on consomme de leurs produits. La différence entre dans le royaume sous forme d’or et d’argent.</p>
<h4>2. La balance générale</h4>
<p>Mun raisonne sur la balance de l’ensemble du commerce, et non sur chaque échange. Une exportation de métaux précieux peut être bénéfique si elle permet, par le commerce de réexportation, de faire revenir davantage de métaux. C’est un raisonnement d’ensemble, qui prend en compte les services, comme le transport et les assurances.</p>
${circuit}
<h4>3. Contre les mesures monétaires</h4>
<p>Contre Gerard Malynes, qui voulait contrôler les changes, Mun soutient que ce n’est pas la manipulation des monnaies qui fait entrer ou sortir les métaux, mais l’état du commerce. Interdire la sortie de l’argent ne sert à rien si la balance est défavorable.</p>
<h4>4. Les moyens</h4>
<p>Pour obtenir une balance favorable, Mun recommande de cultiver les terres et de développer la pêche, pour moins importer ; de réduire la consommation de produits de luxe étrangers ; de vendre cher ce dont l’étranger a besoin, et bon marché ce qu’il pourrait acheter ailleurs ; d’utiliser ses propres navires ; et de faire de l’Angleterre un entrepôt de réexportation.</p>
${outils}
<h4>5. La monnaie et les prix</h4>
<p>Mun perçoit une limite à son propre raisonnement : si trop d’argent entre dans le royaume, les prix montent, les marchandises anglaises deviennent plus chères et les exportations diminuent. Il recommande donc de ne pas thésauriser l’argent, mais de le réinvestir dans le commerce. Cette intuition sera développée par David Hume en 1752 avec le mécanisme du « flux des espèces et des prix ».</p>
<h4>6. La puissance de l’État</h4>
<p>Le commerce, pour Mun, sert la puissance du royaume : le trésor permet au souverain de financer la guerre et la flotte. Mais il met en garde contre un trésor accumulé par le prince au-delà de ce que le commerce a fait entrer : cela appauvrirait les sujets et ruinerait le commerce lui-même.</p>
<h4>7. L’exemple hollandais</h4>
<p>Mun admire et redoute les Hollandais, qui, sans ressources naturelles importantes, sont devenus riches par la pêche, le transport et le commerce. Il veut que l’Angleterre les imite et les supplante, notamment dans la pêche du hareng au large des côtes anglaises, alors dominée par les flottes hollandaises.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>A Discourse of Trade from England unto the East-Indies (1621).</b> Un plaidoyer pour la Compagnie des Indes, qui répond aux accusations d’appauvrir le royaume en exportant de l’argent.</p>
<p><b>England’s Treasure by Forraign Trade, or The Balance of our Forraign Trade is the Rule of our Treasure (1664).</b> Son œuvre majeure, écrite vers 1630, publiée par son fils, rééditée de nombreuses fois au XVIIIe siècle. C’est le texte de référence du mercantilisme anglais.</p>
<p><b>Les écrits du débat des années 1620.</b> Les ouvrages de Malynes (The Maintenance of Free Trade, 1622) et de Misselden (Free Trade, 1622 ; The Circle of Commerce, 1623) permettent de comprendre le contexte des idées de Mun.</p>` }
    ],
    cas: [
      { titre: "La Compagnie des Indes orientales", html: `
<p>Fondée en 1600 par une charte de la reine Élisabeth Ire, la Compagnie anglaise des Indes orientales obtient le monopole du commerce anglais à l’est du cap de Bonne-Espérance. D’abord compagnie commerciale, elle deviendra aux XVIIIe et XIXe siècles une puissance politique et militaire qui gouverne une grande partie de l’Inde, jusqu’à ce que la Couronne lui retire ce pouvoir en 1858 ; elle est dissoute en 1874. Mun la dirige à ses débuts, quand elle n’est encore qu’une entreprise marchande en concurrence avec la puissante Compagnie néerlandaise. Adam Smith critiquera vivement ses monopoles.</p>` },
      { titre: "Smith contre Mun", html: `
<p>Dans le livre IV de la Richesse des nations, Adam <a href="#eco-smith">Smith</a> cite le titre de l’ouvrage de Mun comme l’expression même de l’erreur mercantiliste : confondre la richesse avec la monnaie. Pour Smith, l’or et l’argent ne sont que des marchandises parmi d’autres ; la richesse réelle est la production annuelle de la terre et du travail. Chercher à accumuler des métaux par une balance commerciale favorable revient à sacrifier la consommation et l’efficacité à une illusion.</p>` },
      { titre: "La balance commerciale aujourd’hui", html: `
<p>Les excédents commerciaux continuent d’être perçus comme un signe de réussite. La Chine, l’Allemagne, les Pays-Bas et la Suisse ont accumulé des excédents importants, parfois critiqués comme « néo-mercantilistes ». Les économistes rappellent qu’un excédent courant signifie qu’un pays épargne plus qu’il n’investit chez lui et prête le reste au monde, ce qui n’est pas forcément un signe de force, et qu’il implique des déficits ailleurs (<a href="#c-paradoxe-epargne">voir paradoxe de l’épargne</a>). Les guerres commerciales récentes montrent la persistance de la pensée de Mun.</p>` },
      { titre: "Le semeur et le grain", html: `
<p>Pour répondre à ceux qui accusaient la Compagnie de vider le royaume de son argent, Mun utilise une image restée célèbre : si l’on ne regardait que les actions du laboureur au moment des semailles, quand il jette dans le sol beaucoup de bon grain, on le prendrait pour un fou ; mais si l’on considère la récolte, on mesure la valeur de son geste. De même, l’argent envoyé aux Indes revient multiplié par le commerce de réexportation.</p>` }
    ],
    objections: `
<h4>1. La richesse n’est pas la monnaie</h4>
<p>Smith et les classiques montrent que la richesse d’une nation est sa production et sa consommation, non son stock de métaux. Accumuler de l’or par des excédents revient à échanger des biens réels contre un moyen de paiement qui n’apporte rien en lui-même.</p>
<h4>2. Le mécanisme de Hume</h4>
<p>David Hume montre en 1752 qu’un excédent commercial durable est impossible dans un régime de monnaie métallique : l’entrée de métaux fait monter les prix intérieurs, réduit les exportations et augmente les importations, jusqu’à ce que la balance se rééquilibre. La politique de Mun se détruit elle-même.</p>
<h4>3. Le commerce n’est pas un jeu à somme nulle</h4>
<p>Pour Mun, ce qu’un pays gagne, un autre le perd. Smith et <a href="#eco-ricardo">Ricardo</a> montrent que l’échange profite aux deux parties grâce à la division du travail et à l’<a href="#c-avantage-comparatif">avantage comparatif</a>.</p>
<h4>4. Une réhabilitation partielle</h4>
<p><a href="#eco-keynes">Keynes</a>, dans le chapitre 23 de la Théorie générale, réhabilite en partie les mercantilistes : dans une économie où les taux d’intérêt dépendent de la quantité de monnaie, une entrée de métaux précieux faisait baisser les taux et stimulait l’investissement et l’emploi. Leur souci de l’emploi et de la demande n’était pas absurde.</p>`,
    ecoles: `
<p><b>Edward Misselden</b> et <b>Gerard Malynes</b> sont ses interlocuteurs dans le débat des années 1620.</p>
<p><b>Josiah Child</b> et <b>Charles Davenant</b> prolongent le mercantilisme anglais à la fin du XVIIe siècle.</p>
<p><b>Colbert</b>, en France, met en œuvre une politique mercantiliste d’État.</p>
<p><b>David Hume</b> et <b><a href="#eco-smith">Adam Smith</a></b> en font la critique décisive.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> en réhabilite certains aspects en 1936.</p>
<p><b>Les débats sur les déséquilibres mondiaux</b> et le néo-mercantilisme en sont l’écho contemporain.</p>`,
    source: {
      titre: "Thomas Mun, England’s Treasure by Forraign Trade, 1664, chapitre 2",
      texte: "Le moyen ordinaire d’accroître notre richesse et notre trésor est donc le commerce étranger, où nous devons toujours observer cette règle : vendre chaque année aux étrangers plus, en valeur, que nous ne consommons des leurs.",
      notes: `
<p><b>La règle de la balance.</b> Mun illustre aussitôt sa règle par un calcul : si le royaume exporte pour 2,2 millions de livres et importe pour 2 millions, il entrera dans le royaume 200 000 livres de trésor par an. Ce raisonnement comptable est au cœur du mercantilisme.</p>
<p><b>« Consommons ».</b> Le mot est important : Mun vise la consommation de produits étrangers, notamment de luxe, plus que les importations qui seront réexportées ou transformées. Sa règle est moins rigide qu’il n’y paraît.</p>
<p><b>Un titre devenu proverbe.</b> Le sous-titre de son livre, « la balance de notre commerce étranger est la règle de notre trésor », a résumé pendant un siècle la doctrine mercantiliste, avant que Smith ne la conteste.</p>`
    },
    quiz: [
      { q: "Quelle est la règle principale de Mun pour enrichir le royaume ?",
        o: ["Interdire toute sortie d’or et d’argent du royaume", "Vendre chaque année aux étrangers plus que l’on consomme des leurs", "Imprimer de la monnaie", "Baisser les impôts"], c: 1,
        e: "La différence entre dans le royaume sous forme d’or et d’argent." },
      { q: "Pourquoi Mun défend-il l’exportation d’argent vers les Indes ?",
        o: ["Parce qu’il est payé par les Indes", "Parce que la revente des épices fait revenir davantage d’argent", "Parce que l’argent abonde en Angleterre", "Parce que la charte de la Compagnie l’y oblige"], c: 1,
        e: "Il raisonne sur la balance générale du commerce." },
      { q: "Quelle compagnie Mun dirige-t-il ?",
        o: ["La Compagnie des Indes occidentales", "La Compagnie anglaise des Indes orientales", "La Banque d’Angleterre", "La Compagnie de la baie d’Hudson"], c: 1,
        e: "Fondée en 1600, avec un monopole sur le commerce avec l’Asie." },
      { q: "Quelle critique David Hume adresse-t-il au mercantilisme en 1752 ?",
        o: ["Les droits de douane enrichissent l’État aux dépens des marchands", "L’entrée de métaux fait monter les prix, réduit les exportations et rééquilibre la balance", "Les colonies coûtent trop cher", "La monnaie doit être en papier"], c: 1,
        e: "C’est le mécanisme du flux des espèces et des prix." },
      { q: "Quand le grand ouvrage de Mun est-il publié ?",
        o: ["De son vivant, en 1621", "En 1664, vingt-trois ans après sa mort, par son fils", "En 1776", "En 1690, après la Glorieuse Révolution"], c: 1,
        e: "Écrit vers 1630, il est publié par son fils John." }
    ],
    ouverte: {
      q: "La Suisse dégage depuis des décennies un important excédent de sa balance courante. Mun la féliciterait-il, et aurait-il raison ?",
      r: "Mun y verrait sans doute la preuve d’une politique réussie : la Suisse vend chaque année au reste du monde bien plus qu’elle ne lui achète, en biens, en services financiers et en revenus de placements, et accumule des avoirs à l’étranger. Mais l’analyse moderne est plus nuancée. L’excédent courant suisse reflète surtout une épargne nationale élevée, liée notamment au deuxième pilier et au vieillissement, supérieure à l’investissement intérieur ; il s’accompagne d’une accumulation d’actifs étrangers, dont une partie par la BNS lors de ses interventions sur le franc. Ces actifs procurent des revenus, mais aussi des risques de change. Un économiste smithien rappellerait que le bien-être dépend de la consommation et de la productivité, pas de l’excédent lui-même. Et à l’échelle mondiale, les excédents des uns sont les déficits des autres, ce qui alimente les tensions commerciales, comme la Suisse l’a constaté en figurant sur la liste de surveillance du Trésor américain pour manipulation de change."
    },
    lectures: [
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitre sur le monde avant Smith."],
      ["Accessible", "Lars Magnusson, The Political Economy of Mercantilism, 2015."],
      ["Intermédiaire", "Thomas Mun, England’s Treasure by Forraign Trade (1664), chapitres 2 à 4."],
      ["Intermédiaire", "Adam Smith, Richesse des nations (1776), livre IV, chapitre 1."],
      ["Recherche", "J. M. Keynes, Théorie générale (1936), chapitre 23 ; Eli Heckscher, Mercantilism, 1931."]
    ],
    decouvrir: {
      questions: [
        { q: "De quoi accuse-t-on la compagnie dirigée par Mun ?",
          o: ["D’appauvrir l’Angleterre en envoyant de l’argent en Asie pour acheter des épices", "De vendre trop cher aux Anglais", "D’avoir causé une guerre", "De refuser de payer ses impôts"], c: 0,
          e: "Mun répond par un livre qui devient la référence du mercantilisme." },
        { q: "Que critique Adam Smith dans la doctrine de Mun ?",
          o: ["L’idée que la richesse d’un pays est son or : c’est ce qu’il produit et consomme qui compte", "L’idée que le commerce est utile", "L’idée que les épices sont chères", "L’idée qu’il faut produire davantage"], c: 0,
          e: "Pour Smith, le commerce profite aux deux partenaires." }
      ],
      duree: 6,
      html: `
<h3>Un marchand qui écrit sur le commerce</h3>
<p>Thomas Mun (1571-1641) est un marchand londonien qui a fait fortune en Méditerranée avant de diriger la Compagnie anglaise des Indes orientales. On accuse sa compagnie d’appauvrir l’Angleterre en envoyant de l’argent en Asie pour acheter des épices. Il répond par un livre qui devient la référence d’une doctrine, le mercantilisme.</p>
${vieMun}
<h3>Vendre plus qu’on n’achète</h3>
<p>Pour Mun, un pays s’enrichit en vendant chaque année à l’étranger plus qu’il ne lui achète : la différence lui est payée en or et en argent. Mais il est plus subtil que ses prédécesseurs : envoyer de l’argent aux Indes est utile si les épices achetées sont revendues plus cher en Europe. Ce qui compte, c’est le résultat de tout le commerce.</p>
${circuit}
<h3>Critiqué par Smith</h3>
<p>Adam Smith critiquera cette idée : la richesse d’un pays n’est pas son or, mais ce qu’il produit et consomme. Et le commerce profite aux deux partenaires. Pourtant, beaucoup de pays considèrent encore leurs excédents commerciaux comme une victoire.</p>
<h3>À retenir</h3>
<p>Mun est la grande voix du mercantilisme. Le portrait complet présente sa vie, sa pensée et sa postérité.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "D’un marchand de Livourne au directeur de la Compagnie des Indes.",
      epoque: "Les métaux d’Amérique, la rivalité hollandaise et la crise des années 1620.",
      pensee: "Sept étapes, de la règle d’or à l’exemple hollandais.",
      livres: "Le Discours de 1621, England’s Treasure et le débat avec Malynes et Misselden.",
      cas: "La Compagnie des Indes, Smith contre Mun, la balance aujourd’hui, le semeur.",
      objections: "La richesse n’est pas la monnaie, le mécanisme de Hume, le jeu à somme nulle, Keynes.",
      ecoles: "Misselden et Malynes, Child et Davenant, Colbert, Hume et Smith, Keynes.",
      source: "England’s Treasure : vendre plus que l’on consomme.",
      quiz: "Cinq questions corrigées et une question sur l’excédent suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     FRANÇOIS QUESNAY
     ===================================================================== */
  const vieQuesnay = lifeline(1694, 1774, [
    [1694, "naissance à Méré", true], [1718, "chirurgien à Mantes", false], [1749, "médecin de Madame de Pompadour", true], [1752, "anobli", false],
    [1756, "articles de l’Encyclopédie", true], [1758, "Tableau économique", false], [1767, "Physiocratie", true], [1774, "mort à Versailles", false]
  ], "François Quesnay, 1694-1774", "Fils de paysans devenu médecin du roi, Quesnay ne s’intéresse à l’économie qu’après soixante ans. Depuis son entresol du château de Versailles, il fonde la première école d’économistes de l’histoire, les physiocrates.");

  const tableau = fig(320, (() => {
    let s = `<text x="20" y="24" ${T}>Le Tableau économique simplifié (en milliards de livres, d’après la « formule » de 1766)</text>`;
    s += node(230, 46, 180, 64, "Propriétaires", "reçoivent la rente : 2", "var(--plum)");
    s += node(30, 200, 190, 64, "Classe productive", "fermiers : produisent 5", "var(--note)");
    s += node(420, 200, 190, 64, "Classe stérile", "artisans, commerçants", "var(--gold)");
    s += arrow(250, 112, 145, 196, "var(--plum)") + `<text x="168" y="148" text-anchor="end" style="fill:var(--plum); font:700 12px 'JetBrains Mono', monospace">1</text>`;
    s += arrow(390, 112, 495, 196, "var(--plum)") + `<text x="472" y="148" style="fill:var(--plum); font:700 12px 'JetBrains Mono', monospace">1</text>`;
    s += arrow(418, 222, 222, 222, "var(--gold)") + `<text x="320" y="214" text-anchor="middle" style="fill:var(--gold); font:700 12px 'JetBrains Mono', monospace">2 : nourriture, matières premières</text>`;
    s += arrow(222, 246, 418, 246, "var(--note)") + `<text x="320" y="262" text-anchor="middle" style="fill:var(--note); font:700 12px 'JetBrains Mono', monospace">1 : produits manufacturés</text>`;
    s += `<path d="M 110 198 C 110 130, 200 90, 228 80" style="fill:none; stroke:var(--serial); stroke-width:2"/><polygon points="228,80 218,79 222,88" style="fill:var(--serial)"/>`;
    s += `<text x="70" y="128" style="fill:var(--serial); font:700 12px 'JetBrains Mono', monospace">2 : rente</text>`;
    s += `<text x="20" y="302" ${S}>Seule l’agriculture produit un surplus, le « produit net », versé aux propriétaires et dépensé dans toute l’économie.</text>`;
    return s;
  })(), "Une version simplifiée des flux de dépenses entre les trois classes. La classe productive produit 5 ; elle garde 2 pour reconstituer ses avances et verse 2 de rente. Les dépenses circulent et reviennent : l’économie se reproduit d’année en année. Quesnay montre qu’une dépense excessive de luxe ou un impôt mal assis peuvent interrompre ce circuit.", "Schéma du Tableau économique avec trois classes et leurs flux");

  OEC.portraits["quesnay"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "François Quesnay (1694-1774), médecin de Madame de Pompadour et de Louis XV, fonde à plus de soixante ans la physiocratie, la première école d’économistes. Son Tableau économique (1758) représente pour la première fois l’économie comme un circuit de flux entre classes sociales.",
      "Pour les physiocrates, seule la terre produit un surplus, le « produit net » ; l’industrie et le commerce ne font que transformer et déplacer. Ils réclament la liberté du commerce des grains, un impôt unique sur le revenu des terres, et la fin des entraves au marché.",
      "Leur doctrine agricole a été abandonnée, mais leur idée d’un ordre naturel de l’économie, leur méthode du circuit et leur libéralisme ont profondément influencé Adam Smith, Marx, Walras et la comptabilité nationale moderne."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>François Quesnay naît le 4 juin 1694 à Méré, près de Montfort-l’Amaury, dans une famille de laboureurs. Il apprend à lire tardivement, devient apprenti chez un graveur à Paris, puis chez un chirurgien. Maître chirurgien en 1718, il s’installe à Mantes, où sa réputation grandit. Il publie des ouvrages de médecine, notamment sur la saignée, et entre en conflit avec les médecins de la faculté, qui méprisent les chirurgiens.</p>
<p>Devenu chirurgien du duc de Villeroy, puis docteur en médecine, il entre en 1749 au service de la marquise de Pompadour, favorite de Louis XV, puis devient médecin ordinaire du roi. Il loge à Versailles, dans un entresol situé sous les appartements de la marquise, où se réunissent philosophes et hommes de lettres : Diderot, d’Alembert, Buffon, Turgot. Le roi l’anoblit en 1752 et lui donne pour armes trois fleurs de pensée, avec la devise latine « propter cogitationem », à cause de la pensée.</p>
${vieQuesnay}
<p>Ce n’est qu’après soixante ans que Quesnay se tourne vers l’économie. Il rédige pour l’Encyclopédie les articles « Fermiers » (1756) et « Grains » (1757), rencontre en 1757 le marquis de Mirabeau, auteur à succès de L’Ami des hommes, qui devient son disciple, et fait imprimer à Versailles, en 1758, les premières versions du Tableau économique. Autour de lui se forme une école, que l’on appellera les « économistes », puis les « physiocrates », du grec signifiant le « gouvernement de la nature ». Il meurt à Versailles le 16 décembre 1774, quelques mois après Louis XV.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>La France du milieu du XVIIIe siècle est un royaume agricole, où plus des trois quarts de la population vivent de la terre. Mais l’agriculture française est jugée arriérée face à celle de l’Angleterre, et les famines restent une menace. Le commerce des grains est étroitement réglementé : interdiction d’exporter, contrôles des marchés, taxation des prix, pour éviter les pénuries et les émeutes.</p>
<p>La politique économique est héritée de Colbert : protection et privilèges pour les manufactures, en particulier de luxe, et maintien d’un pain bon marché pour les ouvriers, au détriment des paysans. Les finances royales sont en difficulté, la fiscalité est complexe et injuste, les nobles et le clergé étant largement exemptés, et la guerre de Sept Ans (1756-1763) aggrave la situation.</p>
<p>Médecin, Quesnay voit l’économie comme un corps, où la richesse circule comme le sang. Il veut découvrir les lois naturelles qui assurent la santé de ce corps, et convaincre le souverain de s’y conformer plutôt que de les contrarier par des règlements arbitraires.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’ordre naturel</h4>
<p>Les physiocrates pensent qu’il existe un ordre naturel et essentiel des sociétés, voulu par la Providence et découvrable par la raison. Le rôle du souverain est de le connaître et de le faire respecter, non de le modifier selon ses caprices. Ce gouvernement de la nature donne son nom à l’école.</p>
<h4>2. Le produit net</h4>
<p>Seule la terre, grâce au concours de la nature, produit plus que ce qui a été consommé pour la produire. Ce surplus, le « produit net », est la seule véritable source de richesse nouvelle. L’industrie transforme les matières premières, le commerce les déplace, mais ils ne font que restituer la valeur de ce qu’ils ont consommé : ils forment la classe « stérile ».</p>
<h4>3. Les trois classes</h4>
<p>La société se compose de la classe productive, les fermiers et cultivateurs, de la classe des propriétaires, qui reçoivent le produit net sous forme de rente, et de la classe stérile, les artisans et commerçants. Les échanges entre elles assurent la circulation des richesses.</p>
<h4>4. Le Tableau économique</h4>
<p>Le Tableau représente en un schéma les flux de dépenses entre ces classes au cours d’une année, et montre comment la production se reproduit d’une année sur l’autre. C’est la première représentation de l’économie comme un circuit, ancêtre de la comptabilité nationale et des tableaux entrée-sortie de Leontief (<a href="#c-equilibre-general">voir équilibre général</a>).</p>
${tableau}
<h4>5. La liberté du commerce des grains</h4>
<p>Pour que l’agriculture prospère, il faut que le prix des grains soit rémunérateur pour les cultivateurs. Les physiocrates réclament donc la liberté du commerce des grains, à l’intérieur et à l’exportation. C’est l’origine de la formule « laissez faire, laissez passer », empruntée à leur allié Vincent de Gournay.</p>
<h4>6. L’impôt unique</h4>
<p>Puisque seul le produit net est un surplus, tous les impôts retombent finalement sur lui. Les physiocrates proposent donc de remplacer la multitude des taxes par un impôt unique sur le revenu des terres, payé par les propriétaires, nobles compris. C’est une proposition révolutionnaire dans une France où la noblesse est largement exemptée (<a href="#c-rente">voir rente</a>).</p>
<h4>7. Le despotisme légal</h4>
<p>Les physiocrates ne sont pas des démocrates : ils veulent un monarque éclairé, un « despote légal », qui gouverne selon les lois naturelles et les fasse appliquer. Quesnay admire la Chine, dont l’empereur lui semble gouverner selon la raison et favoriser l’agriculture.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>Articles de l’Encyclopédie (1756-1757).</b> « Fermiers » et « Grains » plaident pour une grande agriculture moderne, à l’anglaise, et pour la liberté des grains.</p>
<p><b>Tableau économique (1758-1759).</b> Le célèbre « zigzag », imprimé en quelques exemplaires à Versailles, puis repris dans de nombreuses versions, dont l’« Analyse de la formule arithmétique du Tableau économique » (1766).</p>
<p><b>Maximes générales du gouvernement économique d’un royaume agricole (1767).</b> Trente maximes qui résument la doctrine physiocratique.</p>
<p><b>Physiocratie (1767).</b> Un recueil de ses textes publié par son disciple Pierre-Samuel Dupont de Nemours, qui donne son nom à l’école.</p>
<p><b>Le Despotisme de la Chine (1767).</b> Un éloge du gouvernement chinois, présenté comme un modèle d’ordre naturel.</p>` }
    ],
    cas: [
      { titre: "La Société économique de Berne", html: `
<p>En 1759, des patriciens bernois fondent la Société économique de Berne, l’une des premières sociétés d’amélioration agricole d’Europe. Inspirée par l’agronomie et par les idées des physiocrates, elle organise des concours, publie des mémoires sur les cultures, l’élevage et la population, et promeut des réformes : suppression des pâtures collectives, culture de la pomme de terre et des prairies artificielles. Elle compte parmi ses membres et correspondants de nombreux savants européens. Elle existe toujours aujourd’hui. C’est l’un des exemples les plus frappants de l’influence européenne des physiocrates.</p>` },
      { titre: "Turgot et la guerre des farines", html: `
<p>En 1774, Anne Robert Jacques Turgot, proche des physiocrates, devient contrôleur général des finances de Louis XVI. Il rétablit la liberté du commerce des grains. Mais la récolte de 1774 est mauvaise, le prix du pain monte, et des émeutes éclatent au printemps 1775 dans le Bassin parisien : c’est la « guerre des farines ». Turgot les réprime, mais ses réformes, dont la suppression des corvées et des corporations, suscitent l’hostilité des privilégiés. Il est renvoyé en 1776. L’échec montre les difficultés politiques de la liberté des prix des biens de première nécessité.</p>` },
      { titre: "Adam Smith à Paris", html: `
<p>Pendant son séjour à Paris en 1766, Adam <a href="#eco-smith">Smith</a> fréquente Quesnay et les physiocrates. Il admire leur système, tout en jugeant fausse l’idée que seule l’agriculture est productive. Selon son biographe Dugald Stewart, Smith aurait eu l’intention de dédier la Richesse des nations à Quesnay, mort avant sa publication. Dans le livre IV, Smith présente la physiocratie comme le système qui, avec toutes ses imperfections, est peut-être le plus proche de la vérité jamais publié en économie politique.</p>` },
      { titre: "Marx et Leontief, admirateurs du Tableau", html: `
<p><a href="#eco-marx">Marx</a> considère le Tableau économique comme « l’idée la plus géniale dont l’économie politique se soit jusqu’ici rendue coupable », et s’en inspire pour ses schémas de reproduction du capital. Au XXe siècle, Wassily Leontief, fondateur de l’analyse entrée-sortie, voit en Quesnay son précurseur direct. La comptabilité nationale moderne, qui décrit les flux entre secteurs, prolonge l’intuition du médecin de Versailles.</p>` }
    ],
    objections: `
<h4>1. L’industrie aussi est productive</h4>
<p>Smith et tous les économistes ultérieurs rejettent la stérilité de l’industrie et du commerce. Ces activités créent de la valeur en transformant et en déplaçant les biens. La révolution industrielle, qui commence au moment où Quesnay écrit, montre l’importance de la productivité manufacturière.</p>
<h4>2. Le despotisme légal</h4>
<p>Les contemporains, comme Mably, critiquent l’alliance d’une économie libérale et d’un pouvoir absolu. L’idée qu’un despote éclairé appliquerait les lois naturelles inquiète ceux qui défendent la séparation des pouvoirs et la représentation.</p>
<h4>3. La liberté des grains et la faim</h4>
<p>Les adversaires de la liberté des grains, comme l’abbé Galiani dans ses Dialogues sur le commerce des blés (1770), soutiennent que les biens vitaux ne peuvent être livrés au marché sans précaution : la hausse des prix peut provoquer la famine avant que l’offre ne s’ajuste. La guerre des farines leur donne en partie raison.</p>
<h4>4. Une secte</h4>
<p>Les physiocrates se faisaient appeler « les économistes » et vénéraient Quesnay, ce qui leur valait des moqueries : Voltaire les ridiculise dans L’Homme aux quarante écus. Leur dogmatisme a nui à la diffusion de leurs idées.</p>`,
    ecoles: `
<p><b>Richard Cantillon</b> et <b>Boisguilbert</b> sont leurs précurseurs français.</p>
<p><b>Mirabeau</b>, <b>Dupont de Nemours</b>, <b>Le Mercier de la Rivière</b> et <b>Turgot</b> forment le cercle physiocratique.</p>
<p><b><a href="#eco-smith">Adam Smith</a></b> s’en inspire tout en rejetant la stérilité de l’industrie.</p>
<p><b><a href="#eco-marx">Marx</a></b> reprend le Tableau dans ses schémas de reproduction.</p>
<p><b>Henry George</b> et les partisans de l’impôt foncier unique prolongent leur fiscalité.</p>
<p><b>Wassily Leontief</b> et la comptabilité nationale héritent de la méthode du circuit.</p>`,
    source: {
      titre: "François Quesnay, Maximes générales du gouvernement économique d’un royaume agricole, 1767, maxime III",
      texte: "Que le souverain et la nation ne perdent jamais de vue que la terre est l’unique source des richesses, et que c’est l’agriculture qui les multiplie.",
      notes: `
<p><b>Le cœur de la doctrine.</b> La maxime résume la conviction physiocratique : la terre seule produit un surplus, et toute la politique du royaume doit viser à favoriser l’agriculture, par la liberté des grains, l’investissement des fermiers et une fiscalité adaptée.</p>
<p><b>Contre Colbert.</b> La maxime vise la politique colbertiste, qui privilégiait les manufactures de luxe et maintenait les grains bon marché au détriment des cultivateurs.</p>
<p><b>Une erreur féconde.</b> L’idée que seule la terre est productive a été abandonnée, mais la recherche de l’origine du surplus, qui la sous-tend, inspirera la théorie de la plus-value de Marx et toute la réflexion classique sur la répartition.</p>`
    },
    quiz: [
      { q: "Quelle était la profession de Quesnay ?",
        o: ["Banquier", "Médecin de Madame de Pompadour et du roi", "Ministre des Finances", "Marchand"], c: 1,
        e: "Il ne s’intéresse à l’économie qu’après soixante ans." },
      { q: "Selon les physiocrates, quelle activité produit un surplus ?",
        o: ["L’industrie", "L’agriculture seule", "Le commerce", "La banque"], c: 1,
        e: "Ce surplus est le « produit net »." },
      { q: "Qu’est-ce que le Tableau économique ?",
        o: ["Une liste de prix", "La première représentation de l’économie comme un circuit de flux entre classes", "Un registre fiscal", "Un plan de réforme de la monarchie"], c: 1,
        e: "Ancêtre de la comptabilité nationale et des tableaux entrée-sortie." },
      { q: "Quel impôt les physiocrates proposent-ils ?",
        o: ["Un impôt sur les salaires", "Un impôt unique sur le revenu des terres", "Une taxe sur le commerce", "Un impôt sur la consommation de luxe"], c: 1,
        e: "Puisque seul le produit net est un surplus, tous les impôts retombent sur lui." },
      { q: "Quelle société suisse, fondée en 1759, s’inspire des idées agronomiques et physiocratiques ?",
        o: ["La Société helvétique de Schinznach", "La Société économique de Berne", "La Banque nationale suisse", "La Société suisse d’utilité publique"], c: 1,
        e: "Elle promeut l’amélioration de l’agriculture et existe toujours." }
    ],
    ouverte: {
      q: "La Suisse consacre plusieurs milliards de francs par an aux paiements directs à l’agriculture, au nom de ses fonctions économiques, écologiques et paysagères. Quesnay y verrait-il la confirmation de ses idées ?",
      r: "En partie. Quesnay aurait approuvé la place centrale donnée à l’agriculture, qu’il jugeait la source de toute richesse, et l’attention portée à la sécurité de l’approvisionnement. Mais il aurait été surpris par plusieurs aspects. D’abord, les paiements directs sont nécessaires parce que l’agriculture suisse, loin de dégager un produit net, est souvent peu rentable sans soutien public, ce qui contredit l’idée qu’elle serait seule productive. Ensuite, les physiocrates défendaient la liberté des prix et du commerce des grains, alors que l’agriculture suisse reste protégée par des droits de douane élevés. Enfin, une partie importante des paiements directs rémunère des prestations écologiques et paysagères, une préoccupation absente du XVIIIe siècle. Un physiocrate moderne pourrait cependant y voir une forme de reconnaissance de ce que la terre produit de valeur au-delà des seuls marchés : paysage, biodiversité, sols fertiles."
    },
    lectures: [
      ["Accessible", "Robert Heilbroner, Les Grands Économistes, chapitre sur le monde avant Smith."],
      ["Accessible", "Philippe Steiner, La Physiocratie, collection Repères, 1998."],
      ["Intermédiaire", "François Quesnay, Physiocratie, édition Garnier-Flammarion, 2008, présentée par Jean Cartelier."],
      ["Intermédiaire", "Steven Kaplan, Le Pain, le peuple et le roi : la bataille du libéralisme sous Louis XV, 1986."],
      ["Recherche", "Ronald Meek, The Economics of Physiocracy, 1962 ; Gianni Vaggi, The Economics of François Quesnay, 1987."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Quesnay, pourquoi l’artisan et le commerçant ne créent-ils pas de richesse nouvelle ?",
          o: ["Parce qu’ils transforment et déplacent les biens, alors que seule l’agriculture produit plus qu’elle ne consomme", "Parce qu’ils ne travaillent pas assez", "Parce qu’ils paient trop d’impôts", "Parce qu’ils vendent à l’étranger"], c: 0,
          e: "C’est le « produit net », qui vient de la nature." },
        { q: "Qu’est-ce qui inspire à Quesnay l’idée de l’économie comme un circuit ?",
          o: ["Sa connaissance de médecin de la circulation du sang", "Les canaux de Versailles", "Les comptes du roi", "Le commerce maritime"], c: 0,
          e: "Son Tableau économique est l’ancêtre de la comptabilité nationale." }
      ],
      duree: 6,
      html: `
<h3>Le médecin du roi devenu économiste</h3>
<p>François Quesnay (1694-1774), fils de paysans, devient chirurgien puis médecin de Madame de Pompadour et de Louis XV. Il loge au château de Versailles. À plus de soixante ans, il se passionne pour l’économie et fonde la première école d’économistes de l’histoire, les physiocrates.</p>
${vieQuesnay}
<h3>La terre, seule source de richesse</h3>
<p>Pour Quesnay, seule l’agriculture produit plus qu’elle ne consomme, grâce à la nature : c’est le « produit net ». L’artisan et le commerçant transforment et déplacent les biens, mais ne créent pas de richesse nouvelle. Il faut donc favoriser l’agriculture, laisser le commerce des grains libre et remplacer tous les impôts par un impôt unique sur les terres.</p>
${tableau}
<h3>Le circuit de l’économie</h3>
<p>En 1758, ce médecin qui connaît la circulation du sang dessine le Tableau économique : il montre comment l’argent circule entre paysans, propriétaires et artisans. C’est la première image de l’économie comme un circuit, que Marx admirera et dont descend la comptabilité nationale moderne.</p>
<h3>À retenir</h3>
<p>Quesnay s’est trompé sur la stérilité de l’industrie, mais il a inventé une manière de voir l’économie comme un tout. Le portrait complet présente sa vie, son école et ses héritiers.</p>`,
      quiz: [1, 2]
    },
    resumes: {
      vie: "De Méré à Mantes et à l’entresol de Versailles.",
      epoque: "Une France agricole, la réglementation des grains et l’héritage de Colbert.",
      pensee: "Sept étapes, de l’ordre naturel au despotisme légal.",
      livres: "De l’Encyclopédie au Tableau, aux Maximes et à la Physiocratie.",
      cas: "La Société économique de Berne, la guerre des farines, Smith à Paris, Marx et Leontief.",
      objections: "L’industrie productive, le despotisme, la liberté des grains, une secte.",
      ecoles: "Cantillon et Boisguilbert, Mirabeau et Turgot, Smith, Marx, Henry George, Leontief.",
      source: "Maximes générales : la terre, unique source des richesses.",
      quiz: "Cinq questions corrigées et une question sur les paiements directs suisses.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
