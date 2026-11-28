/* Œconomia — notices longues, lot 5 (c) : prêteur en dernier ressort, théorie des choix publics */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };

  /* =====================================================================
     27. PRÊTEUR EN DERNIER RESSORT
     ===================================================================== */
  const bilan = fig(320, (() => {
    let s = `<text x="20" y="24" ${T}>Pourquoi une banque saine peut tomber : le bilan d’une banque (schéma)</text>`;
    s += `<rect x="60" y="50" width="240" height="190" rx="6" style="fill:var(--card); stroke:var(--line)"/><rect x="300" y="50" width="240" height="190" rx="6" style="fill:var(--card); stroke:var(--line)"/>`;
    s += `<text x="180" y="72" text-anchor="middle" ${T}>Actif : ce qu’elle possède</text><text x="420" y="72" text-anchor="middle" ${T}>Passif : ce qu’elle doit</text>`;
    s += `<rect x="75" y="85" width="210" height="34" rx="4" style="fill:var(--note-soft); stroke:var(--note)"/><text x="180" y="107" text-anchor="middle" ${S}>Liquidités : 10</text>`;
    s += `<rect x="75" y="125" width="210" height="100" rx="4" style="fill:color-mix(in srgb, var(--gold) 28%, transparent); stroke:var(--gold)"/><text x="180" y="168" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">Prêts à long terme : 90</text><text x="180" y="186" text-anchor="middle" ${S}>bons, mais difficiles à vendre vite</text>`;
    s += `<rect x="315" y="85" width="210" height="110" rx="4" style="fill:color-mix(in srgb, var(--serial) 18%, transparent); stroke:var(--serial)"/><text x="420" y="132" text-anchor="middle" style="fill:var(--ink); font:600 12px Manrope, sans-serif">Dépôts : 92</text><text x="420" y="150" text-anchor="middle" ${S}>retirables à tout moment</text>`;
    s += `<rect x="315" y="201" width="210" height="24" rx="4" style="fill:var(--paper-2); stroke:var(--line)"/><text x="420" y="218" text-anchor="middle" ${S}>Fonds propres : 8</text>`;
    s += `<text x="20" y="266" ${S}>La banque est solvable : ce qu’elle possède (100) dépasse ce qu’elle doit (92). Mais si plus de 10 % des déposants</text>`;
    s += `<text x="20" y="282" ${S}>retirent leur argent en même temps, elle doit vendre ses prêts à perte et peut faire faillite. Chacun a donc</text>`;
    s += `<text x="20" y="298" ${S}>intérêt à retirer le premier : la panique se réalise d’elle-même. Le prêteur en dernier ressort coupe ce cercle.</text>`;
    return s;
  })(), "Le modèle de Douglas Diamond et Philip Dybvig (1983), prix Nobel 2022 avec Ben Bernanke. Une banque transforme des dépôts à vue en prêts à long terme : c’est son utilité, et sa fragilité. Deux équilibres sont possibles, la confiance et la panique, et rien dans la banque elle-même ne garantit le premier.", "Bilan simplifié d’une banque avec liquidités, prêts, dépôts et fonds propres");

  const bagehot = fig(240, (() => {
    const items = [["Prêter librement", "à toute banque solvable qui en a besoin, sans limite", "pour arrêter la panique", "var(--note)"], ["À un taux élevé", "plus cher qu’en temps normal", "pour décourager les abus", "var(--gold)"], ["Contre de bonnes garanties", "titres et prêts sains", "pour écarter les insolvables", "var(--plum)"]];
    let s = `<text x="20" y="24" ${T}>Les trois règles de Bagehot (Lombard Street, 1873)</text>`;
    items.forEach(([n, d, w, c], i) => {
      const x = 14 + i * 206;
      s += `<rect x="${x}" y="46" width="200" height="170" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/>`;
      s += `<text x="${x + 100}" y="80" text-anchor="middle" style="fill:${c}; font:700 13.5px Manrope, sans-serif">${n}</text>`;
      const words = d.split(" "); let line = "", ly = 112;
      words.forEach((wd) => { if ((line + wd).length > 26) { s += `<text x="${x + 100}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 16; line = ""; } line += wd + " "; });
      s += `<text x="${x + 100}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
      s += `<text x="${x + 100}" y="190" text-anchor="middle" style="fill:var(--ink); font:600 10.5px Manrope, sans-serif">${w}</text>`;
    });
    return s;
  })(), "La formule résume la doctrine de Walter Bagehot, rédacteur en chef de The Economist. Les banques centrales modernes s’en réclament encore, même si elles s’en écartent souvent en crise : taux bas plutôt que pénalisants, garanties de qualité moindre, aide à des institutions dont la solvabilité est douteuse.", "Trois cartes : prêter librement, à un taux élevé, contre de bonnes garanties");

  OEC.notices["preteur-dernier-ressort"] = {
    essentiel: [
      "Le prêteur en dernier ressort est l’institution, en général la banque centrale, qui prête aux banques à court de liquidités quand plus personne ne veut leur prêter, afin d’éviter qu’une panique ne transforme un manque de liquidités en faillites en chaîne.",
      "Sa doctrine a été formulée par Henry Thornton en 1802 et Walter Bagehot en 1873 : en cas de panique, prêter librement, à un taux élevé, contre de bonnes garanties, aux banques solvables.",
      "Son existence crée un dilemme : sans lui, les paniques bancaires peuvent ruiner une économie saine ; avec lui, les banques peuvent prendre plus de risques en comptant sur son aide. C’est le problème de l’aléa moral."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi une banque solide peut-elle s’effondrer en quelques jours ?", html: `
<p>Le 14 septembre 2007, des files d’attente se forment devant les agences de la banque britannique Northern Rock. Les clients veulent retirer leurs économies. La banque n’est pas en faillite : elle a simplement du mal à se refinancer sur les marchés, gelés par la crise des subprimes. Mais quand la nouvelle se répand, chacun se précipite, de peur d’arriver trop tard. C’est la première panique bancaire au Royaume-Uni depuis 1866.</p>
<p>Le 15 mars 2023, Credit Suisse, l’une des deux grandes banques suisses, voit les retraits de ses clients s’accélérer et son action s’effondrer. Le soir même, la Banque nationale suisse annonce qu’elle fournira à la banque les liquidités nécessaires. Quatre jours plus tard, la Confédération, la BNS et la FINMA annoncent le rachat de Credit Suisse par UBS, avec des garanties de liquidités sans précédent. Dans les deux cas, une institution publique intervient comme « prêteur en dernier ressort ». D’où vient ce rôle, et pourquoi est-il si discuté ?</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le métier de banquier</h4>
<p>Une banque reçoit des dépôts, que les clients peuvent retirer à tout moment, et prête cet argent pour des années à des entreprises et des ménages. Elle transforme des ressources à court terme en crédits à long terme. C’est très utile : les épargnants gardent leur argent disponible, et les emprunteurs peuvent financer des projets durables. Mais la banque ne garde en caisse qu’une petite partie des dépôts.</p>
<h4>2. La panique auto-réalisatrice</h4>
<p>Si tous les déposants veulent retirer leur argent en même temps, la banque ne peut pas les rembourser sans vendre ses prêts en urgence, à perte. Même une banque saine peut alors faire faillite. Chaque déposant le sait : s’il craint que les autres retirent leur argent, il a intérêt à retirer le sien le premier. La peur de la panique suffit à la provoquer. Douglas Diamond et Philip Dybvig formalisent ce mécanisme en 1983.</p>
${bilan}
<h4>3. La contagion</h4>
<p>Une panique ne reste pas isolée. Les banques se prêtent entre elles ; la faillite de l’une fait perdre de l’argent aux autres. Les déposants des autres banques se demandent si la leur est solide. Le crédit se raréfie, les entreprises ne peuvent plus financer leurs stocks ni payer leurs fournisseurs, et la crise financière devient une crise économique.</p>
<h4>4. Thornton et Bagehot</h4>
<p>En 1802, le banquier et député britannique Henry Thornton explique dans son Enquête sur la nature et les effets du crédit papier que la Banque d’Angleterre, qui peut émettre de la monnaie à volonté, doit en temps de panique prêter généreusement pour rassurer le public, et non restreindre ses prêts pour se protéger, comme le ferait une banque ordinaire. En 1873, Walter Bagehot, rédacteur en chef de The Economist, en tire une doctrine dans Lombard Street, du nom de la rue de la City où se trouvent les banques.</p>
${bagehot}
<h4>5. Illiquide ou insolvable ?</h4>
<p>La doctrine distingue les banques illiquides, solides mais à court de liquidités, qu’il faut aider, et les banques insolvables, dont les pertes dépassent les fonds propres, qu’il faut laisser faire faillite ou restructurer. Mais en pleine panique, la distinction est difficile : la valeur des actifs dépend justement de la survie du système. Charles Goodhart a souvent souligné que cette frontière est floue, et qu’une banque centrale qui la trace se trompe parfois.</p>
<h4>6. L’aléa moral</h4>
<p>Si les banques savent qu’elles seront secourues en cas de difficulté, elles sont tentées de prendre plus de risques, de garder moins de liquidités et moins de fonds propres (<a href="#c-alea-moral">voir aléa moral</a>). C’est le problème des banques « trop grandes pour faire faillite » : leur faillite serait si dangereuse que l’État ne peut pas la laisser se produire, ce que les marchés savent et intègrent dans le coût de leur financement. D’où la nécessité d’une réglementation stricte en contrepartie : exigences de fonds propres et de liquidités, surveillance, plans de résolution.</p>
<h4>7. Un rôle qui s’étend</h4>
<p>Depuis 2008, le rôle s’est élargi. Les banques centrales ont prêté non seulement aux banques, mais aussi aux fonds monétaires, aux marchés de titres, parfois aux entreprises. La Réserve fédérale a ouvert des lignes d’échange de dollars avec d’autres banques centrales, dont la BNS, devenant un prêteur en dernier ressort mondial. Et la BCE a promis en 2012 d’intervenir sur les dettes publiques de la zone euro : elle devenait, pour les États, une forme de prêteur en dernier ressort.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La Grande Dépression américaine</h4>
<p>Entre 1930 et 1933, environ neuf mille banques américaines font faillite, sur quelque vingt-cinq mille en 1929. La Réserve fédérale, créée en 1913 précisément pour éviter les paniques, ne joue pas son rôle de prêteur en dernier ressort. Milton <a href="#eco-friedman">Friedman</a> et Anna Schwartz, dans leur Histoire monétaire des États-Unis (1963), en font la cause principale de la gravité de la Dépression : la masse monétaire chute d’environ un tiers. Ben Bernanke, qui a étudié ces faillites dans ses travaux des années 1980, s’en souviendra comme président de la Réserve fédérale en 2008.</p>
<h4>La panique de 1907</h4>
<p>En octobre 1907, une panique frappe les banques et les sociétés fiduciaires de New York. Faute de banque centrale, c’est un banquier privé, John Pierpont Morgan, qui réunit les grands financiers dans sa bibliothèque et organise le sauvetage. L’épisode convainc le Congrès que l’on ne peut pas compter sur un homme providentiel : la Réserve fédérale est créée six ans plus tard.</p>
<h4>« Quoi qu’il en coûte »</h4>
<p>Le 26 juillet 2012, en pleine crise de la zone euro, le président de la BCE Mario Draghi déclare à Londres que la BCE est prête à faire « tout ce qu’il faudra » pour préserver l’euro. Le programme annoncé ensuite, qui permet d’acheter sans limite la dette des États en difficulté sous conditions, ne sera jamais utilisé. Mais les taux d’intérêt espagnols et italiens baissent fortement dans les mois suivants. La simple promesse crédible d’un prêteur en dernier ressort suffit à arrêter la panique, exactement comme le prévoit le modèle de Diamond et Dybvig.</p>` }
    ],
    cas: [
      { titre: "Credit Suisse, mars 2023", html: `
<p>Après des années de scandales et de pertes, Credit Suisse subit à l’automne 2022 puis en mars 2023 des retraits massifs de ses clients fortunés. Le 15 mars, la BNS annonce qu’elle fournira des liquidités ; le lendemain, la banque emprunte jusqu’à 50 milliards de francs. Le 19 mars, la reprise par UBS est annoncée, accompagnée de facilités de liquidités pouvant atteindre au total environ 200 milliards de francs, dont une partie garantie par la Confédération, et d’une garantie fédérale contre certaines pertes. Ces garanties, finalement remboursées, ont évité une panique mondiale. Mais l’épisode a relancé le débat sur l’aléa moral : la Suisse se retrouve avec une seule grande banque, UBS, dont le bilan dépasse le double du PIB du pays, et le Conseil fédéral a proposé de renforcer fortement les exigences de fonds propres.</p>` },
      { titre: "Lehman Brothers, septembre 2008", html: `
<p>Le 15 septembre 2008, les autorités américaines refusent de sauver la banque d’affaires Lehman Brothers, qui fait faillite. Elles veulent montrer que les banques imprudentes ne seront pas toujours secourues. La panique qui suit est immense : les marchés monétaires se figent, et dès le lendemain, la Réserve fédérale doit prêter 85 milliards de dollars à l’assureur AIG. Dans les semaines suivantes, elle ouvre de nombreuses facilités de prêt, et le Congrès vote un plan de 700 milliards de dollars pour soutenir les banques. L’épisode reste au cœur du débat : laisser tomber une banque limite l’aléa moral, mais peut déclencher la panique que le prêteur en dernier ressort doit justement éviter.</p>` },
      { titre: "Overend, Gurney et le « vendredi noir » de 1866", html: `
<p>Overend, Gurney & Co. était la plus grande maison d’escompte de Londres. Lorsqu’elle fait faillite le 10 mai 1866, une panique s’empare de la City. La Banque d’Angleterre refuse de la sauver, la jugeant insolvable, mais prête massivement aux autres banques solides. La panique s’arrête. Cet épisode, sept ans avant Lombard Street, illustre la doctrine que Bagehot va formuler : sauver le système, pas les institutions insolvables.</p>` }
    ],
    objections: `
<h4>1. La banque libre</h4>
<p>Des économistes libéraux, comme George Selgin et Lawrence White, soutiennent que les paniques sont en grande partie le produit de réglementations mal conçues. Ils citent l’exemple de l’Écosse de 1716 à 1845, où des banques libres, sans banque centrale, ont connu peu de paniques grâce à leur responsabilité illimitée et à leur surveillance mutuelle. <a href="#eco-hayek">Hayek</a> proposait en 1976 de laisser des banques privées émettre des monnaies concurrentes.</p>
<h4>2. Le socialisme pour les banquiers</h4>
<p>À gauche comme à droite, on reproche au prêteur en dernier ressort de privatiser les profits et de socialiser les pertes : les banques gagnent en temps normal, et l’État les secourt en crise. Hyman <a href="#eco-minsky">Minsky</a> jugeait que l’intervention de la banque centrale, indispensable, entretient l’<a href="#c-instabilite-financiere">instabilité financière</a> en validant après coup les comportements risqués.</p>
<h4>3. Bagehot n’est plus applicable</h4>
<p>Les crises modernes ne touchent pas seulement les banques, mais des marchés entiers, des fonds et des institutions non bancaires. Les garanties de qualité deviennent rares en pleine panique. Les banques centrales doivent donc s’écarter des règles de Bagehot, en prêtant à des taux bas et contre des garanties moins sûres, ce qui augmente leurs risques.</p>
<h4>4. La frontière avec le financement des États</h4>
<p>Quand une banque centrale achète massivement des dettes publiques pour éviter une panique, elle peut être accusée de financer les déficits, ce qui lui est interdit dans la zone euro. Les plaintes déposées en Allemagne contre les programmes de la BCE ont porté précisément sur ce point.</p>`,
    ecoles: `
<p><b>Henry Thornton</b> (1802) pose les principes du rôle de la banque centrale en temps de panique.</p>
<p><b>Walter Bagehot</b> (1873) en tire la doctrine classique.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> et Schwartz accusent la Réserve fédérale d’avoir failli à ce rôle dans les années 1930.</p>
<p><b><a href="#eco-minsky">Minsky</a></b> juge l’intervention indispensable mais génératrice d’instabilité.</p>
<p><b>Diamond et Dybvig</b> formalisent les paniques ; <b>Bernanke</b> applique ces leçons en 2008.</p>
<p><b>Selgin, White</b> et <b><a href="#eco-hayek">Hayek</a></b> défendent des alternatives sans banque centrale.</p>`,
    source: {
      titre: "Walter Bagehot, Lombard Street: A Description of the Money Market, 1873, chapitre 7",
      texte: "Ces prêts ne devraient être accordés qu’à un taux d’intérêt très élevé. […] Ils devraient être accordés sur toutes les bonnes garanties bancaires, et aussi largement que le public le demande.",
      notes: `
<p><b>Le taux élevé.</b> Pour Bagehot, il agit comme une « amende sur la timidité excessive » : il dissuade ceux qui n’ont pas vraiment besoin d’emprunter, et préserve les réserves de la Banque pour ceux qui en ont besoin.</p>
<p><b>« Aussi largement que le public le demande ».</b> C’est le cœur de la doctrine : en temps de panique, restreindre les prêts aggrave la peur. Seule la certitude de pouvoir obtenir de l’argent arrête la course aux retraits.</p>
<p><b>Le contexte.</b> Bagehot écrit pour convaincre la Banque d’Angleterre, société privée à l’époque, d’assumer publiquement une responsabilité qu’elle exerçait de fait mais refusait de reconnaître, de peur d’encourager l’imprudence des autres banques.</p>`
    },
    quiz: [
      { q: "Pourquoi une banque solvable peut-elle faire faillite lors d’une panique ?",
        o: ["Parce que la plupart de ses prêts sont mauvais et que ses clients ne remboursent pas", "Parce que ses dépôts sont à vue alors que ses prêts sont à long terme", "Parce que ses actionnaires retirent leur capital et font chuter son bilan", "Parce qu’elle a prêté uniquement à l’État, qui ne la rembourse pas"], c: 1,
        e: "Si tous les déposants retirent en même temps, la banque doit vendre ses prêts à perte." },
      { q: "Quelles sont les trois règles de Bagehot ?",
        o: ["Prêter peu, à taux bas, sans demander de garantie aux banques", "Prêter librement, à un taux élevé, contre de bonnes garanties", "Prêter à toutes les banques, sans exiger de garantie ni de pénalité", "Prêter à taux nul pour calmer la panique, contre des garanties symboliques"], c: 1,
        e: "Arrêter la panique, décourager les abus, ne pas sauver les banques insolvables." },
      { q: "Qu’est-ce que l’aléa moral dans ce contexte ?",
        o: ["La corruption de banquiers qui acceptent des pots-de-vin pour des prêts", "La tentation de prendre plus de risques quand on compte être secouru", "Le risque que la banque centrale perde de l’argent en prêtant aux banques", "La concurrence entre banques, qui les pousse à baisser leurs marges"], c: 1,
        e: "L’assurance d’être aidé réduit la prudence ; d’où la nécessité d’une réglementation stricte." },
      { q: "Selon Friedman et Schwartz, quelle a été l’erreur de la Réserve fédérale entre 1930 et 1933 ?",
        o: ["Elle a prêté trop largement aux banques et alimenté la spéculation", "Elle a laissé des milliers de banques faire faillite sans les secourir", "Elle a dévalué brutalement le dollar et provoqué une fuite des capitaux", "Elle a maintenu des taux trop bas dans les années 1920 et nourri la bulle"], c: 1,
        e: "Environ neuf mille banques ont fait faillite et la masse monétaire a chuté d’environ un tiers." },
      { q: "Comment la déclaration de Draghi en juillet 2012 a-t-elle arrêté la panique sur les dettes publiques ?",
        o: ["Par des achats massifs et immédiats d’obligations des pays attaqués", "Par la promesse crédible d’intervenir sans limite, sans avoir à le faire", "Par une hausse des taux directeurs pour attirer les capitaux vers la zone euro", "Par un plan d’austérité immédiat imposé par Bruxelles aux pays endettés"], c: 1,
        e: "Comme le prévoit le modèle de Diamond et Dybvig, la promesse crédible suffit à rétablir l’équilibre de confiance." }
    ],
    transfert: { q: "En mars 2023, une banque régionale américaine voit ses clients retirer des milliards en une journée, alerte relayée par les réseaux sociaux. Que recommanderait la règle de Bagehot pour éviter la contagion ?",
      o: ["Que la banque centrale prête largement aux banques solides, contre garanties", "Que la banque centrale refuse son aide pour punir les banques imprudentes", "Que l’État interdise les retraits pendant un an pour stopper la panique", "Que les clients soient obligés de garder leurs dépôts pendant la crise"], c: 0,
      e: "Il s’agit de la faillite de Silicon Valley Bank : les autorités ont garanti les dépôts et ouvert des facilités de prêt pour arrêter la contagion." },
    ouverte: {
      q: "Après la disparition de Credit Suisse, UBS est devenue une banque dont le bilan dépasse le double du PIB suisse. La Suisse peut-elle encore être son prêteur en dernier ressort ?",
      r: "C’est l’une des grandes questions de politique économique suisse. La BNS peut créer des francs sans limite et donc fournir des liquidités en francs ; mais une grande part des engagements d’UBS est en dollars, et la BNS dépend pour cela des lignes d’échange avec la Réserve fédérale. Surtout, si la banque devenait insolvable et non seulement illiquide, les pertes potentielles pourraient dépasser ce que la Confédération peut assumer. Le Conseil fédéral a donc proposé d’exiger d’UBS beaucoup plus de fonds propres, notamment pour ses filiales étrangères, afin que les actionnaires et créanciers supportent les pertes. UBS juge ces exigences excessives et fait valoir qu’elles nuiraient à sa compétitivité, voire la pousseraient à déplacer son siège. Le débat oppose la sécurité du contribuable suisse et la place d’une grande banque mondiale dans un petit pays."
    },
    lectures: [
      ["Accessible", "Walter Bagehot, Lombard Street, 1873, chapitres 1 et 7, d’une lecture étonnamment vivante."],
      ["Accessible", "Ben Bernanke, Courage to Act, 2015, mémoires de la crise de 2008."],
      ["Intermédiaire", "Milton Friedman et Anna Schwartz, The Great Contraction, 1929-1933, 1965, extrait de leur histoire monétaire."],
      ["Intermédiaire", "Charles Kindleberger, Histoire mondiale de la spéculation financière (Manias, Panics, and Crashes), chapitre sur le prêteur en dernier ressort."],
      ["Recherche", "Douglas Diamond et Philip Dybvig, « Bank Runs, Deposit Insurance, and Liquidity », Journal of Political Economy, 1983 ; Henry Thornton, An Enquiry into the Nature and Effects of the Paper Credit of Great Britain, 1802."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi, en cas de panique, chaque client a-t-il intérêt à se précipiter à sa banque ?",
          o: ["Parce qu’il craint que la banque n’ait plus de liquidités à son tour", "Parce que les retraits sont rémunérés par la banque en période de crise", "Parce que la banque centrale l’y oblige par une décision officielle", "Parce que les taux d’intérêt augmentent sur les dépôts retirés en premier"], c: 0,
          e: "La panique se nourrit d’elle-même, même si la banque est saine." },
        { q: "Pourquoi faut-il accompagner le prêteur en dernier ressort de règles strictes pour les banques ?",
          o: ["Parce que, sûres d’être secourues, les banques deviennent imprudentes", "Parce que la banque centrale manque d’argent pour secourir toutes les banques", "Parce que les clients refusent les sauvetages financés par l’impôt", "Parce que les paniques bancaires ont disparu depuis la fin du XXe siècle"], c: 0,
          e: "C’est le dilemme de l’aléa moral." }
      ],
      duree: 5,
      html: `
<h3>Quand tout le monde veut son argent</h3>
<p>Une banque prête pour des années l’argent que ses clients peuvent retirer à tout moment. Si tous viennent le chercher le même jour, elle ne peut pas les rembourser, même si elle est saine. Et chacun, craignant d’arriver trop tard, a intérêt à se précipiter : c’est la <b>panique bancaire</b>, qui peut se propager à tout le système.</p>
<h3>Le pompier du système</h3>
<p>Pour l’arrêter, il faut quelqu’un qui puisse prêter sans limite : la banque centrale, qui crée la monnaie. En 1873, le journaliste Walter Bagehot résume la règle : en cas de panique, prêter largement, à un taux élevé, contre de bonnes garanties, aux banques solides. C’est le rôle de <b>prêteur en dernier ressort</b>.</p>
${bagehot}
<h3>Un dilemme</h3>
<p>Sans ce pompier, les paniques peuvent ruiner l’économie, comme aux États-Unis dans les années 1930. Mais s’il intervient toujours, les banques risquent de devenir imprudentes. La crise de 2008 l’a montré à grande échelle, des États-Unis au Royaume-Uni et à la Suisse, et le dilemme est revenu en 2023 avec la faillite de la Silicon Valley Bank et la reprise forcée de Credit Suisse par UBS.</p>
<h3>À retenir</h3>
<p>Le prêteur en dernier ressort évite les catastrophes, mais doit être accompagné de règles strictes pour les banques. La notice complète présente l’histoire, les mécanismes et les débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Northern Rock en 2007, Credit Suisse en 2023 : pourquoi une banque tombe si vite.",
      raisonnement: "Sept étapes, du métier de banquier à l’élargissement du rôle depuis 2008.",
      preuves: "La Grande Dépression, la panique de 1907, le « quoi qu’il en coûte » de Draghi.",
      cas: "Credit Suisse en 2023, Lehman Brothers en 2008, Overend et Gurney en 1866.",
      objections: "La banque libre, profits privés et pertes publiques, les limites de Bagehot, le financement des États.",
      ecoles: "Thornton, Bagehot, Friedman et Schwartz, Minsky, Diamond-Dybvig et Bernanke, Selgin et Hayek.",
      source: "Bagehot, 1873 : prêter à un taux très élevé, aussi largement que demandé.",
      quiz: "Six questions corrigées et une question sur UBS.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     28. THÉORIE DES CHOIX PUBLICS
     ===================================================================== */
  const condorcet = fig(290, (() => {
    const voters = [["Électeur 1", ["A", "B", "C"]], ["Électeur 2", ["B", "C", "A"]], ["Électeur 3", ["C", "A", "B"]]];
    const col = { A: "var(--note)", B: "var(--gold)", C: "var(--plum)" };
    let s = `<text x="20" y="24" ${T}>Le paradoxe de Condorcet (1785)</text>`;
    voters.forEach(([n, pr], i) => {
      const x = 40 + i * 110;
      s += `<text x="${x + 40}" y="56" text-anchor="middle" ${T}>${n}</text>`;
      pr.forEach((c, j) => (s += `<rect x="${x + 15}" y="${68 + j * 46}" width="50" height="36" rx="6" style="fill:${col[c]}"/><text x="${x + 40}" y="${92 + j * 46}" text-anchor="middle" style="fill:var(--paper); font:700 15px Manrope, sans-serif">${c}</text>`));
    });
    s += `<text x="40" y="226" ${M}>1er choix en haut, dernier en bas</text>`;
    const cx = 500, cy = 140, r = 70;
    const P = { A: [cx, cy - r], B: [cx + r * 0.87, cy + r * 0.5], C: [cx - r * 0.87, cy + r * 0.5] };
    Object.entries(P).forEach(([k, [x, y]]) => (s += `<circle cx="${x}" cy="${y}" r="20" style="fill:${col[k]}"/><text x="${x}" y="${y + 5}" text-anchor="middle" style="fill:var(--paper); font:700 14px Manrope, sans-serif">${k}</text>`));
    const ed = (a, b) => { const [x1, y1] = P[a], [x2, y2] = P[b], d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d; return arrow(x1 + ux * 24, y1 + uy * 24, x2 - ux * 24, y2 - uy * 24); };
    s += ed("A", "B") + ed("B", "C") + ed("C", "A");
    s += `<text x="${cx}" y="${cy + 80}" text-anchor="middle" ${S}>A bat B (2 voix contre 1), B bat C,</text><text x="${cx}" y="${cy + 96}" text-anchor="middle" ${S}>et C bat A : la majorité tourne en rond.</text>`;
    s += `<text x="20" y="272" ${S}>Chaque électeur est cohérent, mais la volonté de la majorité ne l’est pas : le résultat dépend de l’ordre des votes.</text>`;
    return s;
  })(), "Nicolas de Condorcet découvre en 1785 qu’une majorité peut préférer A à B, B à C et C à A. Kenneth Arrow généralise le problème en 1951 : aucune règle de vote ne peut satisfaire à la fois quelques exigences démocratiques élémentaires. Celui qui fixe l’ordre du jour détient donc un pouvoir considérable.", "Préférences de trois électeurs et cycle des majorités");

  const olson = fig(250, (() => {
    let s = `<text x="20" y="24" ${T}>Pourquoi les petits groupes l’emportent : l’arithmétique d’Olson (exemple chiffré)</text>`;
    s += `<rect x="30" y="50" width="270" height="140" rx="10" style="fill:var(--card); stroke:var(--note); stroke-width:2"/>`;
    s += `<text x="165" y="78" text-anchor="middle" style="fill:var(--note); font:700 14px Manrope, sans-serif">10 000 producteurs</text>`;
    s += `<text x="165" y="104" text-anchor="middle" ${S}>gain total d’une protection : 100 millions</text>`;
    s += `<text x="165" y="138" text-anchor="middle" style="fill:var(--ink); font:700 20px 'JetBrains Mono', monospace">10 000 francs</text>`;
    s += `<text x="165" y="162" text-anchor="middle" ${S}>par producteur : on s’organise</text>`;
    s += `<rect x="340" y="50" width="270" height="140" rx="10" style="fill:var(--card); stroke:var(--serial); stroke-width:2"/>`;
    s += `<text x="475" y="78" text-anchor="middle" style="fill:var(--serial); font:700 14px Manrope, sans-serif">5 millions de consommateurs</text>`;
    s += `<text x="475" y="104" text-anchor="middle" ${S}>coût total : 150 millions</text>`;
    s += `<text x="475" y="138" text-anchor="middle" style="fill:var(--ink); font:700 20px 'JetBrains Mono', monospace">30 francs</text>`;
    s += `<text x="475" y="162" text-anchor="middle" ${S}>par personne : personne ne bouge</text>`;
    s += `<text x="20" y="222" ${S}>La mesure coûte plus qu’elle ne rapporte (150 contre 100), mais elle a de bonnes chances de passer.</text>`;
    return s;
  })(), "Mancur Olson, La Logique de l’action collective (1965). Les intérêts concentrés s’organisent facilement ; les intérêts diffus, même bien plus importants au total, restent passifs, car chacun espère que les autres agiront à sa place. Chiffres illustratifs.", "Comparaison du gain par producteur et du coût par consommateur");

  OEC.notices["choix-public"] = {
    essentiel: [
      "La théorie des choix publics applique aux décisions politiques les outils de l’économie : électeurs, élus, fonctionnaires et groupes de pression poursuivent leurs propres intérêts, comme les acteurs du marché. James Buchanan la résume comme « la politique sans romantisme ».",
      "Elle explique pourquoi l’État ne corrige pas toujours les défaillances du marché : ignorance rationnelle des électeurs, poids des intérêts organisés, recherche de rente, intérêt des administrations à grandir, instabilité des majorités.",
      "Elle en tire des recommandations institutionnelles : règles constitutionnelles, frein à l’endettement, démocratie directe, concurrence entre collectivités. Elle est critiquée pour son pessimisme et pour une vision étroite des motivations humaines."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : l’État est-il un despote bienveillant ?", html: `
<p>Dans les manuels d’économie des années 1950, le raisonnement est souvent le suivant : le marché présente des défaillances, comme les <a href="#c-externalite">externalités</a>, les <a href="#c-bien-public">biens publics</a> ou les monopoles ; l’État doit donc intervenir pour les corriger. Mais quel État ? Les modèles supposent implicitement un « despote bienveillant », omniscient et uniquement soucieux de l’intérêt général.</p>
<p>Deux économistes de l’université de Virginie, James Buchanan et Gordon Tullock, contestent cette hypothèse dans The Calculus of Consent (1962). Pourquoi supposer que l’homme d’affaires poursuit son intérêt sur le marché, mais qu’il devient désintéressé dès qu’il entre au parlement ou dans une administration ? Il faut, disent-ils, comparer les défaillances du marché aux défaillances de l’État, et non un marché réel à un État idéal. Buchanan recevra le prix Nobel en 1986.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La même personne, deux rôles</h4>
<p>Le point de départ est une hypothèse de cohérence : on suppose que les mêmes motivations guident les comportements au marché et en politique. Les élus cherchent à être réélus, les fonctionnaires à accroître leur budget et leur prestige, les électeurs à défendre leurs intérêts. Cela ne signifie pas que tous sont cyniques, mais qu’on ne peut pas fonder des institutions sur la vertu supposée de ceux qui les dirigent.</p>
<h4>2. Le paradoxe du vote</h4>
<p>Dès 1785, le marquis de Condorcet montre qu’une décision à la majorité peut être incohérente : trois électeurs aux préférences cohérentes peuvent produire une majorité qui préfère A à B, B à C et C à A. En 1951, Kenneth Arrow démontre qu’aucune règle de vote ne peut garantir à la fois la cohérence et quelques exigences démocratiques élémentaires. Le résultat d’un vote dépend souvent de l’ordre du jour, ce qui donne un pouvoir considérable à celui qui le fixe.</p>
${condorcet}
<h4>3. L’électeur médian et l’ignorance rationnelle</h4>
<p>Anthony Downs, dans Une théorie économique de la démocratie (1957), montre que deux partis qui veulent gagner tendent à converger vers les positions de l’électeur médian, celui qui se trouve au milieu de l’échiquier. Il souligne aussi que l’électeur a peu de raisons de s’informer : sa voix a une probabilité infime de changer le résultat, alors que s’informer coûte du temps. Son ignorance est rationnelle. Elle laisse le champ libre aux groupes bien informés.</p>
<h4>4. La logique de l’action collective</h4>
<p>Mancur Olson montre en 1965 que les petits groupes aux intérêts concentrés s’organisent beaucoup plus facilement que les grands groupes aux intérêts diffus. Chaque producteur de sucre a beaucoup à gagner d’une protection douanière ; chaque consommateur n’y perd que quelques francs par an et ne se mobilisera pas. Des mesures qui coûtent plus à la société qu’elles ne rapportent peuvent ainsi être adoptées et durer.</p>
${olson}
<h4>5. La recherche de rente et la capture</h4>
<p>Gordon Tullock (1967) et Anne Krueger (1974) montrent que les ressources dépensées pour obtenir des privilèges, lobbying, campagnes, procès, sont un gaspillage qui s’ajoute au coût du privilège lui-même (<a href="#c-rente">voir rente</a>). George Stigler, prix Nobel 1982, montre en 1971 que les régulateurs finissent souvent par servir les intérêts des industries qu’ils réglementent : c’est la « capture » de la réglementation.</p>
<h4>6. La bureaucratie</h4>
<p>William Niskanen soutient en 1971 que les administrations cherchent à maximiser leur budget, parce que le prestige, le pouvoir et les carrières de leurs dirigeants en dépendent. Comme elles connaissent mieux leurs coûts que le parlement qui les finance, elles obtiennent des budgets supérieurs à ce qui serait efficace.</p>
<h4>7. Des règles plutôt que des hommes</h4>
<p>Buchanan en tire un programme : puisqu’on ne peut pas compter sur la vertu des gouvernants, il faut encadrer leurs décisions par des règles constitutionnelles, adoptées à l’avance, quand personne ne sait encore qui en profitera. Équilibre budgétaire, majorités qualifiées pour les hausses d’impôts, référendums, décentralisation et concurrence entre collectivités. C’est l’« économie constitutionnelle ». Buchanan s’inspire du Suédois Knut Wicksell, qui proposait dès 1896 d’exiger une quasi-unanimité pour les dépenses publiques.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le cycle électoral</h4>
<p>William Nordhaus propose en 1975 la théorie du cycle politique : les gouvernements relancent l’économie avant les élections et la freinent après. Les études empiriques trouvent des effets électoraux sur les budgets, les dépenses visibles et les transferts, surtout dans les démocraties récentes, mais moins clairement sur la croissance et le chômage. L’indépendance des banques centrales a réduit cette tentation sur la politique monétaire.</p>
<h4>La démocratie directe suisse</h4>
<p>Les économistes suisses Lars Feld, Gebhard Kirchgässner et Bruno Frey ont étudié les cantons et les communes. Leurs travaux trouvent que les collectivités où les dépenses importantes doivent être approuvées par référendum ont en moyenne des dépenses et une dette plus faibles, et des services publics jugés au moins aussi efficaces. Les citoyens qui votent directement sur les budgets contrôleraient mieux les élus et les administrations.</p>
<h4>Les subventions agricoles</h4>
<p>Dans la plupart des pays riches, les agriculteurs représentent quelques pourcents de la population, mais reçoivent un soutien public considérable. Selon les estimations de l’OCDE, la Suisse, la Norvège, l’Islande, le Japon et la Corée du Sud ont les niveaux de soutien aux producteurs les plus élevés, qui représentent une part très importante de leurs recettes. La théorie d’Olson y voit l’exemple type d’un groupe concentré et organisé, même si d’autres raisons, comme la sécurité alimentaire, le paysage et l’attachement culturel, comptent aussi.</p>` }
    ],
    cas: [
      { titre: "Le frein à l’endettement suisse", html: `
<p>En 2001, 85 % des votants acceptent l’inscription dans la Constitution du frein à l’endettement : les dépenses de la Confédération ne peuvent dépasser les recettes qu’en cas de récession, et les déficits doivent être compensés en période de croissance. C’est une application presque littérale de l’économie constitutionnelle de Buchanan : une règle adoptée par le peuple pour limiter la tentation des élus de dépenser aujourd’hui en reportant la charge sur les générations futures. Depuis son entrée en vigueur en 2003, la dette de la Confédération a fortement baissé en proportion du PIB jusqu’à la pandémie. Ses critiques jugent qu’elle freine les investissements nécessaires.</p>` },
      { titre: "Le sucre américain", html: `
<p>Les États-Unis protègent leurs producteurs de sucre par des quotas d’importation et des prix garantis depuis des décennies. Le prix du sucre y est régulièrement bien supérieur au prix mondial, ce qui coûte chaque année des milliards de dollars aux consommateurs et a poussé des fabricants de confiseries à délocaliser. Le programme profite à quelques milliers de producteurs, très bien organisés et généreux en contributions électorales. C’est l’illustration la plus citée de la logique d’Olson.</p>` },
      { titre: "La controverse autour de Buchanan", html: `
<p>En 2017, l’historienne Nancy MacLean publie Democracy in Chains, qui présente Buchanan comme l’inspirateur d’un projet visant à protéger les riches contre la démocratie majoritaire. Le livre a suscité une vive controverse : de nombreux économistes, y compris des critiques de Buchanan, ont contesté sa lecture des sources et plusieurs de ses citations. Le débat illustre la charge politique de la théorie des choix publics, souvent associée au libéralisme, alors que ses outils, comme la capture réglementaire ou la recherche de rente, sont aussi utilisés pour critiquer l’influence des grandes entreprises.</p>` }
    ],
    objections: `
<h4>1. Les gens votent, et pas seulement par intérêt</h4>
<p>Si l’électeur était purement intéressé, il ne voterait presque jamais : sa voix n’a presque aucune chance d’être décisive. Or des millions de citoyens votent. Le sens du devoir, l’identité, l’altruisme comptent. Donald Green et Ian Shapiro (1994) ont reproché à la théorie du choix rationnel en politique de mal résister aux tests empiriques.</p>
<h4>2. Le pessimisme comme prophétie</h4>
<p>Supposer que les fonctionnaires et les élus sont intéressés peut conduire à concevoir des institutions qui les traitent comme tels, et à décourager l’esprit de service public. Bruno Frey lui-même a montré que les incitations monétaires peuvent évincer la motivation intrinsèque.</p>
<h4>3. Les défaillances de l’État ne justifient pas le marché</h4>
<p>Montrer que l’État échoue parfois ne prouve pas que le marché ferait mieux. Elinor <a href="#eco-ostrom">Ostrom</a> a montré que des communautés peuvent surmonter les problèmes d’action collective par leurs propres institutions (<a href="#c-biens-communs">voir biens communs</a>). Mariana Mazzucato souligne le rôle de l’État dans les grandes innovations.</p>
<h4>4. Les règles rigides ont un coût</h4>
<p>Les règles constitutionnelles, comme les plafonds de dette ou de dépense, empêchent parfois de répondre à des circonstances imprévues, comme une crise ou une pandémie. Elles doivent prévoir des exceptions, que les gouvernements peuvent alors utiliser de manière extensive.</p>`,
    ecoles: `
<p><b>Condorcet</b> (1785) et <b>Arrow</b> (1951) découvrent les paradoxes du vote.</p>
<p><b>Knut Wicksell</b> (1896) propose la règle de l’unanimité pour les dépenses publiques.</p>
<p><b>Buchanan et Tullock</b> (1962) fondent l’école de Virginie ; <b>Downs</b>, <b>Olson</b> et <b>Niskanen</b> en sont les grands contributeurs.</p>
<p><b>Stigler</b> et l’école de Chicago développent la théorie de la capture.</p>
<p><b>Bruno Frey</b>, Feld et Kirchgässner étudient la démocratie directe suisse.</p>
<p><b><a href="#eco-ostrom">Ostrom</a></b> et <a href="#eco-sen">Sen</a> proposent des visions plus riches de l’action collective et du choix social.</p>`,
    source: {
      titre: "James Madison, Le Fédéraliste, n° 51, 1788",
      texte: "Si les hommes étaient des anges, aucun gouvernement ne serait nécessaire. Si des anges gouvernaient les hommes, aucun contrôle externe ou interne du gouvernement ne serait nécessaire.",
      notes: `
<p><b>Pourquoi Madison ici.</b> Buchanan et Tullock placent leur travail dans la lignée des pères fondateurs américains et citent souvent ce passage. La théorie des choix publics ne dit pas autre chose : les gouvernants ne sont pas des anges, il faut donc des règles qui les contraignent.</p>
<p><b>La suite du texte.</b> Madison explique qu’il faut « d’abord permettre au gouvernement de contrôler les gouvernés, et ensuite l’obliger à se contrôler lui-même », par la dépendance envers le peuple et par des « précautions auxiliaires » : séparation des pouvoirs, fédéralisme, intérêts qui se surveillent mutuellement.</p>
<p><b>Ce que Buchanan ajoute.</b> Buchanan distingue les choix ordinaires, faits dans le cadre des règles, et le choix des règles elles-mêmes, qui devrait se faire sous un « voile d’incertitude », quand personne ne sait encore s’il sera gagnant ou perdant. C’est l’économie constitutionnelle, qui lui vaut le prix Nobel en 1986.</p>`
    },
    quiz: [
      { q: "Quelle hypothèse fonde la théorie des choix publics ?",
        o: ["Les élus sont désintéressés et servent le bien commun avant leur carrière", "Les acteurs politiques poursuivent leurs intérêts comme ceux du marché", "L’État est plus efficace que le marché pour corriger ses propres défauts", "Les électeurs sont parfaitement informés des conséquences de chaque loi"], c: 1,
        e: "Buchanan et Tullock refusent de supposer que l’on devient désintéressé en entrant en politique." },
      { q: "Trois électeurs classent A>B>C, B>C>A et C>A>B. Que se passe-t-il à la majorité ?",
        o: ["A l’emporte, car il est le premier choix de la majorité", "Les majorités tournent, car A bat B, B bat C et C bat A", "B l’emporte, car il est le choix du centre pour la majorité", "C’est l’égalité parfaite, chaque candidat recueillant autant de voix"], c: 1,
        e: "C’est le paradoxe de Condorcet : des préférences individuelles cohérentes donnent une majorité incohérente." },
      { q: "Pourquoi, selon Olson, les petits groupes concentrés l’emportent-ils souvent ?",
        o: ["Parce qu’ils sont plus nombreux et pèsent davantage dans les urnes", "Parce que chaque membre a beaucoup à gagner, alors que les coûts sont dispersés", "Parce qu’ils défendent mieux l’intérêt général que les grands groupes", "Parce qu’ils votent davantage que les autres citoyens à chaque élection fédérale"], c: 1,
        e: "Un gain important par tête justifie de s’organiser ; un coût minime par tête ne pousse personne à agir." },
      { q: "Qu’est-ce que l’« ignorance rationnelle » de l’électeur selon Downs ?",
        o: ["Un manque d’éducation qui empêche de comprendre les enjeux politiques", "Le fait qu’il est raisonnable de peu s’informer, sa voix pesant très peu", "Le refus de voter par méfiance envers tous les partis politiques", "Le fait de voter selon son intérêt personnel plutôt que l’intérêt général"], c: 1,
        e: "Le coût de l’information dépasse le bénéfice attendu d’un vote mieux informé." },
      { q: "Quelle institution suisse illustre l’« économie constitutionnelle » de Buchanan ?",
        o: ["Le Conseil fédéral, qui gouverne le pays de façon collégiale", "Le frein à l’endettement, accepté en votation en 2001", "La BNS, qui conduit la politique monétaire du pays", "La FINMA, qui surveille les banques et les assurances"], c: 1,
        e: "Une règle constitutionnelle adoptée par le peuple limite la tentation des élus de s’endetter." }
    ],
    transfert: { q: "Un pays maintient une subvention aux producteurs de sucre qui rapporte des millions à quelques centaines d’exploitants et coûte quelques euros par an à chaque consommateur. Comment Olson explique-t-il qu’elle survive ?",
      o: ["Peu nombreux et très concernés, les producteurs s’organisent, pas les consommateurs", "Les consommateurs approuvent la subvention, car elle protège l’emploi local", "La subvention profite surtout aux consommateurs, qui paient ainsi moins cher", "Le parlement ignore son existence, faute de débat sur le budget agricole"], c: 0,
      e: "C’est la logique de l’action collective : les petits groupes concentrés l’emportent souvent." },
    ouverte: {
      q: "La démocratie directe suisse est-elle un bon remède aux défaillances de l’État décrites par la théorie des choix publics ?",
      r: "Plusieurs arguments plaident en ce sens. Les référendums financiers permettent aux citoyens de contrôler les dépenses, et les travaux de Feld, Kirchgässner et Frey suggèrent qu’ils limitent les dépenses et la dette sans dégrader les services. L’initiative populaire permet de mettre à l’agenda des sujets que les élus préféreraient éviter, ce qui réduit le pouvoir de ceux qui fixent l’ordre du jour. Mais la démocratie directe n’échappe pas à la logique d’Olson : les groupes bien organisés et financés, associations professionnelles, syndicats, grandes entreprises, ont plus de moyens pour lancer des initiatives et mener des campagnes. L’ignorance rationnelle s’applique aussi aux votations sur des sujets techniques, et la participation est souvent inférieure à la moitié des inscrits. Enfin, le maintien d’un soutien agricole très élevé en Suisse montre que la démocratie directe ne suffit pas à vaincre les intérêts concentrés quand ils rencontrent une sympathie populaire."
    },
    lectures: [
      ["Accessible", "Mancur Olson, Logique de l’action collective, 1965, introduction et premier chapitre."],
      ["Accessible", "Bruno Frey et Alois Stutzer, Happiness and Economics, 2002, chapitres sur la démocratie directe."],
      ["Intermédiaire", "Anthony Downs, Une théorie économique de la démocratie, 1957, chapitres 1 à 3 et 13."],
      ["Intermédiaire", "Dennis Mueller, Public Choice III, 2003, manuel de référence."],
      ["Recherche", "James Buchanan et Gordon Tullock, The Calculus of Consent, 1962 ; Lars Feld et Gebhard Kirchgässner, « Direct Democracy, Political Culture, and the Outcome of Economic Policy », European Journal of Political Economy, 2001."]
    ],
    decouvrir: {
      questions: [
        { q: "Quelle hypothèse la théorie des choix publics fait-elle sur les élus et les fonctionnaires ?",
          o: ["Ils ont leurs propres intérêts, comme être réélus ou obtenir un budget plus gros", "Ils agissent pour l’intérêt général, sans penser à leur propre carrière ni à leur réélection", "Ils sont parfaitement informés de tous les effets de leurs décisions", "Ils n’ont aucun intérêt personnel dans les décisions qu’ils prennent"], c: 0,
          e: "La théorie étudie la politique avec les outils de l’économie." },
        { q: "Que propose Buchanan plutôt que d’espérer des dirigeants vertueux ?",
          o: ["Des règles qui limitent les abus, comme l’équilibre budgétaire", "La suppression des élections pour éviter les promesses démagogiques", "Un gouvernement d’experts non élus, à l’abri des pressions électorales", "La nationalisation des entreprises pour soustraire l’économie au marché"], c: 0,
          e: "Des règles plutôt que des sauveurs." }
      ],
      duree: 5,
      html: `
<h3>La politique sans illusions</h3>
<p>On suppose souvent que l’État agit pour l’intérêt général. Mais les élus, les fonctionnaires et les électeurs sont des êtres humains, avec leurs propres intérêts : être réélu, obtenir un budget plus important, défendre sa profession. La <b>théorie des choix publics</b>, fondée par James Buchanan et Gordon Tullock en 1962, étudie la politique avec les outils de l’économie.</p>
<h3>Les petits groupes l’emportent</h3>
<p>Une mesure qui rapporte beaucoup à quelques milliers de producteurs et coûte quelques francs à des millions de consommateurs a de bonnes chances d’être adoptée : les premiers s’organisent, les seconds ne bougent pas. C’est la logique de l’action collective de Mancur Olson.</p>
${olson}
<h3>Des règles plutôt que des sauveurs</h3>
<p>Plutôt que d’espérer des dirigeants vertueux, Buchanan propose des règles qui limitent les abus : équilibre budgétaire, référendums, décentralisation. La Suisse en offre des exemples, avec le frein à l’endettement accepté par 85 % des votants en 2001 et les référendums financiers des cantons.</p>
<h3>À retenir</h3>
<p>L’État aussi a ses défaillances, qu’il faut comparer à celles du marché. La notice complète présente les paradoxes du vote, les preuves et les critiques.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "L’État, despote bienveillant ? Buchanan et Tullock, 1962.",
      raisonnement: "Sept étapes, du paradoxe de Condorcet à l’économie constitutionnelle.",
      preuves: "Le cycle électoral, la démocratie directe suisse, les subventions agricoles.",
      cas: "Le frein à l’endettement, le sucre américain, la controverse sur Buchanan.",
      objections: "Le vote désintéressé, le pessimisme auto-réalisateur, Ostrom, le coût des règles rigides.",
      ecoles: "Condorcet et Arrow, Wicksell, l’école de Virginie, Stigler, Frey, Ostrom et Sen.",
      source: "Madison, 1788 : si les hommes étaient des anges…",
      quiz: "Six questions corrigées et une question sur la démocratie directe.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
