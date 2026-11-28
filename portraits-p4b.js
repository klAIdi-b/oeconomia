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
<p><b>La question.</b> Comment un pays s’enrichit-il ?</p>
<p><b>Son raisonnement.</b> Pour Mun, le moyen ordinaire d’accroître la richesse et le trésor du royaume est le commerce extérieur, à une condition. Il faut vendre chaque année aux étrangers plus, en valeur, que l’on consomme de leurs produits. La différence entre dans le royaume sous forme d’or et d’argent.</p>
<p><b>Un exemple.</b> Mun est l’un des directeurs de la Compagnie anglaise des Indes orientales. Son livre, Le Trésor de l’Angleterre par le commerce extérieur, écrit vers 1630, n’est publié qu’en 1664 par son fils, et devient le bréviaire des mercantilistes anglais.</p>
<h4>2. La balance générale</h4>
<p><b>La question.</b> Faut-il juger le commerce échange par échange ?</p>
<p><b>Son raisonnement.</b> Non, répond Mun. Il raisonne sur la balance de l’ensemble du commerce. Une sortie de métaux précieux peut être bénéfique si elle permet, par la revente de marchandises à d’autres pays, d’en faire revenir davantage. Son raisonnement d’ensemble compte aussi les services, comme le transport et les assurances.</p>
<p><b>Un exemple.</b> On reproche à sa compagnie d’envoyer de l’argent en Asie pour acheter du poivre et des épices. Mun répond que ces épices, revendues en Europe, rapportent bien plus d’argent qu’il n’en est sorti.</p>
${circuit}
<h4>3. Contre les mesures monétaires</h4>
<p><b>La question.</b> Peut-on retenir l’argent dans le pays par décret ?</p>
<p><b>Son raisonnement.</b> Contre Gerard Malynes, qui voulait contrôler les changes, Mun soutient que ce n’est pas la manipulation des monnaies qui fait entrer ou sortir les métaux, mais l’état du commerce. Interdire la sortie de l’argent ne sert à rien si la balance est défavorable.</p>
<p><b>Un exemple.</b> Le débat naît de la crise commerciale qui frappe l’Angleterre au début des années 1620. Le gouvernement charge une commission d’en chercher les causes, et Mun y défend que le mal vient du commerce, non des taux de change.</p>
<p><a href="#c-taux-de-change">Pour aller plus loin, la notice « Taux de change » →</a></p>
<h4>4. Les moyens</h4>
<p><b>La question.</b> Comment vendre plus qu’on n’achète ?</p>
<p><b>Son raisonnement.</b> Mun recommande de cultiver les terres et de développer la pêche, pour moins importer, de réduire la consommation de produits de luxe étrangers, de vendre cher ce dont l’étranger a besoin et bon marché ce qu’il pourrait acheter ailleurs, d’utiliser ses propres navires, et de faire de l’Angleterre un entrepôt où l’on importe pour réexporter.</p>
<p><b>Un exemple.</b> Le vocabulaire de Mun n’a pas disparu. Les débats actuels sur les déficits commerciaux, par exemple entre les États-Unis et la Chine, le reprennent souvent, comme si un excédent était une victoire et un déficit une défaite.</p>
<p><a href="#c-avantage-comparatif">Pour aller plus loin, la notice « Avantage comparatif », qui montre pourquoi l’échange profite même sans excédent →</a></p>
${outils}
<h4>5. La monnaie et les prix</h4>
<p><b>La question.</b> Accumuler de l’or enrichit-il toujours ?</p>
<p><b>Son raisonnement.</b> Mun perçoit une limite à son propre raisonnement. Si trop d’argent entre dans le royaume, les prix montent, les marchandises anglaises deviennent plus chères et les exportations diminuent. Il recommande donc de ne pas entasser l’argent, mais de le réinvestir dans le commerce.</p>
<p><b>Un exemple.</b> David Hume pousse l’idée jusqu’au bout en 1752 et la retourne contre les mercantilistes, avec le mécanisme du « flux des espèces et des prix ». Si les quatre cinquièmes de la monnaie d’un pays disparaissaient en une nuit, imagine-t-il, les prix baisseraient, les exportations augmenteraient, et l’or reviendrait jusqu’à ce que les prix retrouvent leur niveau.</p>
<p><a href="#c-theorie-quantitative">Pour aller plus loin, la notice « Théorie quantitative de la monnaie » →</a></p>
<h4>6. La puissance de l’État</h4>
<p><b>La question.</b> À quoi sert la richesse d’un royaume ?</p>
<p><b>Son raisonnement.</b> Le commerce, pour Mun, sert la puissance du royaume, car le trésor permet au souverain de financer la guerre et la flotte. Mais il met en garde contre un trésor accumulé par le prince au-delà de ce que le commerce a fait entrer, qui appauvrirait les sujets et ruinerait le commerce lui-même.</p>
<p><b>Un exemple.</b> Après sa mort, en 1641, l’Angleterre adopte l’Acte de navigation de 1651. Les marchandises d’Asie, d’Afrique et d’Amérique doivent arriver sur des navires anglais, et celles d’Europe sur des navires anglais ou du pays qui les produit. Le texte vise les transporteurs hollandais, et pense ensemble le commerce et la puissance navale, dans l’esprit de Mun.</p>
<h4>7. L’exemple hollandais</h4>
<p><b>La question.</b> Comment un petit pays sans ressources devient-il riche ?</p>
<p><b>Son raisonnement.</b> Mun admire et redoute les Hollandais, qui, sans ressources naturelles importantes, sont devenus riches par la pêche, le transport et le commerce. Il veut que l’Angleterre les imite et les supplante.</p>
<p><b>Un exemple.</b> Il vise surtout la pêche du hareng au large des côtes anglaises, dominée par des centaines de bateaux hollandais. Que des étrangers s’enrichissent avec le poisson de ses propres eaux lui paraît le comble de la mauvaise gestion.</p>` },
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
        o: ["Interdire la sortie d’or et d’argent du royaume pour garder les métaux précieux", "Vendre chaque année aux étrangers plus que l’on consomme des leurs", "Imprimer de la monnaie en grande quantité pour baisser le coût du crédit", "Baisser les impôts des marchands pour qu’ils investissent dans la production"], c: 1,
        e: "La différence entre dans le royaume sous forme d’or et d’argent." },
      { q: "Pourquoi Mun défend-il l’exportation d’argent vers les Indes ?",
        o: ["Parce que les Indes paient la Compagnie en or pour chaque cargaison livrée", "Parce que la revente des épices fait revenir davantage d’argent", "Parce que l’argent est trop abondant en Angleterre et perd de sa valeur", "Parce que la charte de la Compagnie l’y oblige envers le roi"], c: 1,
        e: "Il raisonne sur la balance générale du commerce." },
      { q: "Quelle compagnie Mun dirige-t-il ?",
        o: ["La Compagnie des Indes occidentales, installée à Amsterdam", "La Compagnie anglaise des Indes orientales", "La Banque d’Angleterre, créée pour financer l’État", "La Compagnie de la baie d’Hudson, active au Canada"], c: 1,
        e: "Fondée en 1600, avec un monopole sur le commerce avec l’Asie." },
      { q: "Quelle critique David Hume adresse-t-il au mercantilisme en 1752 ?",
        o: ["Les droits de douane enrichissent l’État aux dépens des marchands", "L’afflux de métaux fait monter les prix et réduit les exportations", "Les colonies coûtent plus cher à l’État qu’elles ne rapportent au pays", "La monnaie devrait être en papier pour ne plus dépendre des métaux"], c: 1,
        e: "C’est le mécanisme du flux des espèces et des prix : l’afflux de métaux finit par rééquilibrer la balance." },
      { q: "Quand le grand ouvrage de Mun est-il publié ?",
        o: ["De son vivant, en 1621, pour défendre la Compagnie", "En 1664, vingt-trois ans après sa mort, par son fils", "En 1776, la même année que la Richesse des nations", "En 1690, après la Glorieuse Révolution, par des disciples"], c: 1,
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
          o: ["D’appauvrir le pays en envoyant de l’argent en Asie pour des épices", "De faire monter les prix en Angleterre en important trop d’épices", "D’avoir fraudé la Couronne en cachant une partie de ses bénéfices", "D’avoir provoqué une guerre contre les Hollandais pour les îles"], c: 0,
          e: "Mun répond par un livre qui devient la référence du mercantilisme." },
        { q: "Que critique Adam Smith dans la doctrine de Mun ?",
          o: ["L’idée que la richesse d’un pays se mesure à son stock d’or", "L’idée que le commerce extérieur peut enrichir un pays marchand", "L’idée que les épices d’Asie coûtent trop cher aux Anglais", "L’idée qu’il faut produire davantage pour exporter davantage"], c: 0,
          e: "Pour Smith, la richesse est ce qu’un pays produit et consomme, et le commerce profite aux deux partenaires." }
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
<p><b>La question.</b> Le roi peut-il faire les lois économiques qu’il veut ?</p>
<p><b>Son raisonnement.</b> Les physiocrates pensent qu’il existe un ordre naturel et essentiel des sociétés, voulu par la Providence et découvert par la raison. Le rôle du souverain est de le connaître et de le faire respecter, non de le modifier selon ses caprices.</p>
<p><b>Un exemple.</b> Le mot « physiocratie » vient du grec physis, la nature, et kratos, le pouvoir, le gouvernement de la nature. Quesnay, médecin de Madame de Pompadour à Versailles, pense l’économie comme un corps vivant, avec ses lois que le bon médecin respecte.</p>
<h4>2. Le produit net</h4>
<p><b>La question.</b> Où naît la richesse nouvelle ?</p>
<p><b>Son raisonnement.</b> Seule la terre, grâce au concours de la nature, produit plus que ce qui a été consommé pour la produire. Ce surplus, le « produit net », est pour Quesnay la seule véritable source de richesse nouvelle. L’industrie transforme les matières premières, le commerce les déplace, mais ils ne font que rendre la valeur de ce qu’ils ont consommé. Ils forment la classe « stérile ».</p>
<p><b>Un exemple.</b> Le grain semé revient multiplié à la récolte, alors que le menuisier qui fait une table ne fait, selon Quesnay, que transformer un bois qui existait déjà. Aujourd’hui, on compte la valeur ajoutée par chaque activité, celle du menuisier comprise.</p>
<p><a href="#c-pib">Pour aller plus loin, la notice « PIB et ses limites » →</a></p>
<h4>3. Les trois classes</h4>
<p><b>La question.</b> Comment les richesses circulent-elles dans la société ?</p>
<p><b>Son raisonnement.</b> La société se compose de la classe productive, les fermiers et cultivateurs, de la classe des propriétaires, qui reçoivent le produit net sous forme de rente, et de la classe stérile, les artisans et commerçants. Les échanges entre elles assurent la circulation des richesses.</p>
<p><b>Un exemple.</b> Dans la France du milieu du XVIIIe siècle, environ quatre habitants sur cinq vivent à la campagne, et l’agriculture fournit l’essentiel de la production. La vision de Quesnay colle à ce monde rural.</p>
<h4>4. Le Tableau économique</h4>
<p><b>La question.</b> Peut-on représenter toute une économie sur une seule page ?</p>
<p><b>Son raisonnement.</b> Le Tableau économique représente les flux de dépenses entre les trois classes au cours d’une année, et montre comment la production se reproduit d’une année sur l’autre. C’est la première représentation de l’économie comme un circuit, ancêtre de la comptabilité nationale et des tableaux entrée-sortie de Wassily Leontief.</p>
<p><b>Un exemple.</b> Le Tableau est imprimé à Versailles en 1758. Le marquis de Mirabeau, disciple de Quesnay, le met au rang des trois grandes inventions de l’humanité, avec l’écriture et la monnaie. Deux siècles plus tard, Leontief reçoit le prix Nobel (1973) pour des tableaux qui en sont les héritiers.</p>
<p><a href="#c-equilibre-general">Pour aller plus loin, la notice « Équilibre général » →</a></p>
${tableau}
<h4>5. La liberté du commerce des grains</h4>
<p><b>La question.</b> Faut-il laisser circuler librement le blé ?</p>
<p><b>Son raisonnement.</b> Pour que l’agriculture prospère, il faut que le prix des grains rémunère les cultivateurs. Les physiocrates réclament donc la liberté du commerce des grains, à l’intérieur du royaume et à l’exportation. La formule « laissez faire, laissez passer », qu’on attribue à leur allié Vincent de Gournay, résume ce programme.</p>
<p><b>Un exemple.</b> Turgot, proche des physiocrates, rétablit la libre circulation des grains dans le royaume en septembre 1774, juste après une récolte médiocre. Les prix montent, et la « guerre des farines » du printemps 1775 voit des émeutes dans tout le Bassin parisien. Après son renvoi, en 1776, ses successeurs reviennent peu à peu à la réglementation.</p>
<p><a href="#c-offre-demande">Pour aller plus loin, la notice « Offre et demande » →</a></p>
<h4>6. L’impôt unique</h4>
<p><b>La question.</b> Qui paie vraiment l’impôt ?</p>
<p><b>Son raisonnement.</b> Puisque seul le produit net est un surplus, tous les impôts retombent finalement sur lui. Les physiocrates proposent donc de remplacer la multitude des taxes par un impôt unique sur le revenu des terres, payé par les propriétaires, nobles compris. C’est une proposition révolutionnaire dans une France où la noblesse est largement exemptée.</p>
<p><b>Un exemple.</b> L’Américain Henry George reprend l’idée en 1879 dans Progrès et pauvreté, avec un impôt unique sur la valeur du sol. Des économistes de toutes les écoles jugent encore qu’un impôt sur la valeur des terrains décourage moins l’activité que les autres.</p>
<p><a href="#c-rente">Pour aller plus loin, la notice « Rente différentielle » →</a></p>
<h4>7. Le despotisme légal</h4>
<p><b>La question.</b> Quel régime politique pour faire respecter l’ordre naturel ?</p>
<p><b>Son raisonnement.</b> Les physiocrates ne sont pas des démocrates. Ils veulent un monarque éclairé, un « despote légal », qui gouverne selon les lois naturelles et les fasse appliquer. Le pouvoir doit être fort, mais soumis à l’évidence des lois économiques.</p>
<p><b>Un exemple.</b> Quesnay admire la Chine, dont l’empereur lui semble gouverner selon la raison et honorer l’agriculture. Il lui consacre en 1767 un livre, Le Despotisme de la Chine, qui en donne une image très idéalisée.</p>
<p><a href="#c-institutions-inclusives">Pour aller plus loin, la notice « Institutions inclusives et extractives », sur le lien entre régime politique et prospérité →</a></p>` },
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
        o: ["Banquier de la cour et conseiller des finances du roi", "Médecin de Madame de Pompadour et du roi", "Ministre des Finances de Louis XV pendant dix ans", "Marchand de grains installé près du port de Rouen"], c: 1,
        e: "Il ne s’intéresse à l’économie qu’après soixante ans." },
      { q: "Selon les physiocrates, quelle activité produit un surplus ?",
        o: ["L’industrie manufacturière, grâce à la division des tâches", "L’agriculture seule, grâce à la fertilité des sols", "Le commerce, grâce à l’écart entre prix d’achat et de vente", "La banque, grâce aux intérêts perçus sur les prêts"], c: 1,
        e: "Ce surplus est le « produit net »." },
      { q: "Qu’est-ce que le Tableau économique ?",
        o: ["Une liste des prix des grains et des denrées relevés dans le royaume", "Une représentation de l’économie comme un circuit de flux entre classes", "Un registre fiscal recensant les terres, leurs propriétaires et leurs revenus", "Un plan de réforme de la monarchie et de ses finances"], c: 1,
        e: "C’est la première représentation de ce genre, ancêtre de la comptabilité nationale et des tableaux entrée-sortie." },
      { q: "Quel impôt les physiocrates proposent-ils ?",
        o: ["Un impôt sur les salaires versés dans les villes", "Un impôt unique sur le revenu des terres", "Une taxe sur le commerce des grains et des draps", "Un impôt sur la consommation de luxe des nobles"], c: 1,
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
          o: ["Parce qu’ils ne font que transformer et déplacer des biens", "Parce qu’ils travaillent moins que les paysans et produisent peu", "Parce qu’ils paient des impôts trop lourds pour investir", "Parce qu’ils vendent surtout à l’étranger et non au royaume"], c: 0,
          e: "Seule l’agriculture produit plus qu’elle ne consomme : c’est le « produit net », qui vient de la nature." },
        { q: "Qu’est-ce qui inspire à Quesnay l’idée de l’économie comme un circuit ?",
          o: ["Sa connaissance de médecin de la circulation du sang", "Les canaux et les bassins des jardins du château de Versailles", "Les comptes tenus par les fermiers généraux du roi", "Le va-et-vient des navires dans les grands ports"], c: 0,
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
