/* Œconomia — notices longues, lot 2 (b) : externalités, courbe de Phillips */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     7. EXTERNALITÉS
     ===================================================================== */
  const pigou = fig(320, (() => {
    const X0 = 70, X1 = 600, Y0 = 270, Y1 = 30, sx = (q) => X0 + (q / 100) * (X1 - X0), sy = (p) => Y0 - (p / 100) * (Y0 - Y1);
    const dem = (q) => 90 - 0.8 * q, priv = (q) => 10 + 0.7 * q, soc = (q) => 30 + 0.7 * q;
    const qp = 80 / 1.5, qs = 60 / 1.5;
    let s = `<line x1="${X0}" y1="${Y0}" x2="${X1}" y2="${Y0}" style="stroke:var(--line)"/><line x1="${X0}" y1="${Y0}" x2="${X0}" y2="${Y1}" style="stroke:var(--line)"/>`;
    s += `<polygon points="${sx(qs)},${sy(soc(qs))} ${sx(qp)},${sy(soc(qp))} ${sx(qp)},${sy(dem(qp))}" style="fill:var(--serial); opacity:.35"/>`;
    s += `<line x1="${sx(0)}" y1="${sy(dem(0))}" x2="${sx(100)}" y2="${sy(dem(100))}" style="stroke:var(--note); stroke-width:2.5"/>`;
    s += `<line x1="${sx(0)}" y1="${sy(priv(0))}" x2="${sx(100)}" y2="${sy(priv(100))}" style="stroke:var(--plum); stroke-width:2.5"/>`;
    s += `<line x1="${sx(0)}" y1="${sy(soc(0))}" x2="${sx(100)}" y2="${sy(soc(100))}" style="stroke:var(--serial); stroke-width:2.5; stroke-dasharray:7 5"/>`;
    s += `<text x="${sx(98)}" y="${sy(dem(98)) - 8}" text-anchor="end" style="fill:var(--note); font:600 12px Manrope, sans-serif">Demande</text>`;
    s += `<text x="${sx(100)}" y="${sy(priv(100)) + 18}" text-anchor="end" style="fill:var(--plum); font:600 12px Manrope, sans-serif">Coût privé</text>`;
    s += `<text x="${sx(88)}" y="${sy(soc(88)) - 10}" text-anchor="end" style="fill:var(--serial); font:600 12px Manrope, sans-serif">Coût social = privé + pollution</text>`;
    [[qp, dem(qp), "Q marché"], [qs, dem(qs), "Q optimal"]].forEach(([q, p, l]) => { s += `<line x1="${sx(q)}" y1="${sy(p)}" x2="${sx(q)}" y2="${Y0}" style="stroke:var(--ink-soft); stroke-dasharray:3 3"/><circle cx="${sx(q)}" cy="${sy(p)}" r="5" style="fill:var(--ink)"/><text x="${sx(q)}" y="${Y0 + 18}" text-anchor="middle" ${M}>${l}</text>`; });
    s += `<text x="${X0}" y="20" ${T}>Une externalité négative : le marché produit trop</text>`;
    s += `<text x="${X1}" y="${Y0 + 40}" text-anchor="end" ${S}>Le triangle rouge est la perte pour la société ; une taxe égale au dommage ramène la quantité à l’optimum.</text>`;
    return s;
  })(), "Schéma de Pigou. Le producteur ne paie que son coût privé ; la société supporte en plus le dommage de la pollution. Le marché produit donc davantage que la quantité qui maximise le bien-être collectif.", "Graphique offre et demande avec un coût privé et un coût social");

  OEC.notices["externalite"] = {
    essentiel: [
      "Une externalité est l’effet d’une activité sur des personnes qui n’y participent pas et qui n’en paient ni n’en reçoivent le prix : la fumée d’une usine, le bruit d’un aéroport, mais aussi la pollinisation par les abeilles d’un voisin ou les découvertes d’un laboratoire.",
      "Parce que ces effets ne sont pas dans les prix, le marché produit trop de ce qui nuit aux autres et trop peu de ce qui leur profite. C’est l’une des principales « défaillances du marché ».",
      "On peut la corriger par une taxe ou une subvention (Pigou), par la négociation entre les parties quand c’est possible (Coase), par des quotas échangeables ou par des normes. Le changement climatique en est l’exemple le plus important."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : le smog de Londres", html: `
<p>Le vendredi 5 décembre 1952, un anticyclone immobilise l’air au-dessus de Londres. La fumée des millions de cheminées à charbon, des centrales et des usines s’accumule dans un brouillard jaune si épais que les bus avancent précédés d’un homme à pied portant une torche. En quatre jours, plusieurs milliers de personnes meurent de maladies respiratoires ; les estimations ultérieures portent le bilan à environ 12 000 morts. Aucun des habitants qui allumaient leur feu, aucune centrale qui brûlait son charbon, n’avait l’intention de nuire. Chacun payait son combustible ; personne ne payait pour l’air qu’il dégradait.</p>
<p>C’est la situation qu’Arthur Pigou, successeur d’Alfred <a href="#eco-marshall">Marshall</a> à Cambridge, analyse dès 1920 dans L’Économie du bien-être. Lorsqu’une activité impose des coûts à d’autres sans qu’ils soient payés, le prix du marché ne dit plus la vérité sur ce que coûte réellement la production. Le marché, si efficace par ailleurs, se trompe alors systématiquement.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Coût privé et coût social</h4>
<p>Quand une entreprise décide de produire une tonne d’acier de plus, elle compare le prix qu’elle en obtiendra à ce qu’elle lui coûte : minerai, énergie, salaires. C’est le coût privé. Mais si la production rejette du dioxyde de soufre qui abîme les forêts et la santé des riverains, la société subit un coût supplémentaire. Le coût social est la somme des deux. Le marché, qui ne tient compte que du coût privé, produit au-delà du point où le bénéfice d’une tonne supplémentaire égale son coût total pour la société.</p>
${pigou}
<h4>2. Les externalités positives</h4>
<p>L’inverse existe. L’apiculteur dont les abeilles pollinisent les vergers voisins, l’entreprise dont les chercheurs forment des ingénieurs qui iront ensuite ailleurs, le propriétaire qui restaure une façade historique : tous procurent aux autres un bénéfice qu’ils ne sont pas payés pour produire. Le marché en fournit alors trop peu. La recherche fondamentale, la vaccination ou l’éducation sont souvent analysées ainsi.</p>
<h4>3. La solution de Pigou</h4>
<p>Pigou propose de faire payer au pollueur le dommage qu’il cause, au moyen d’une taxe égale au coût externe à la marge, et de subventionner symétriquement les activités qui ont des effets positifs. Le prix intègre alors le coût social, et les décisions privées redeviennent compatibles avec l’intérêt général. On parle de « taxe pigouvienne ». Son avantage est de laisser chaque entreprise décider comment réduire sa pollution, celles qui le peuvent à moindre coût réduisant le plus.</p>
<h4>4. L’objection de Coase</h4>
<p>En 1960, Ronald Coase publie « The Problem of Social Cost », l’un des articles les plus cités de l’histoire de l’économie. Il montre que si les droits de propriété sont clairement définis et si les coûts de négociation sont faibles, les parties peuvent régler elles-mêmes le problème : le riverain peut payer l’usine pour qu’elle pollue moins, ou l’usine indemniser le riverain, et l’on aboutit à la même quantité efficace quel que soit celui qui détient le droit. L’intervention de l’État n’est donc pas toujours nécessaire. Mais Coase souligne lui-même que ces conditions sont rarement réunies : quand des millions de personnes subissent la pollution, aucune négociation n’est possible.</p>
<h4>5. Les quotas échangeables</h4>
<p>En 1968, l’économiste canadien John Dales propose une troisième voie : l’État fixe la quantité totale de pollution autorisée, distribue ou vend des permis correspondants, et laisse les entreprises les échanger. Celles qui peuvent réduire leurs émissions à bas coût le font et vendent leurs permis à celles pour qui c’est plus cher. On obtient la réduction voulue au moindre coût. La taxe fixe le prix et laisse la quantité s’ajuster ; le marché de permis fixe la quantité et laisse le prix s’ajuster. Martin Weitzman a montré en 1974 que le meilleur choix dépend de l’incertitude sur les coûts et les dommages.</p>
<h4>6. Et les normes ?</h4>
<p>L’État peut aussi interdire ou plafonner directement certaines émissions : pots catalytiques obligatoires, interdiction de l’essence au plomb, normes d’isolation. Les économistes jugent souvent ces normes plus coûteuses que les instruments de prix, car elles imposent la même contrainte à tous, quel que soit leur coût de réduction. Mais elles sont simples à contrôler et peuvent s’imposer quand le dommage est grave ou mal mesurable.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les pluies acides et le marché du dioxyde de soufre</h4>
<p>En 1990, une révision de la loi américaine sur la qualité de l’air crée un marché de permis d’émission de dioxyde de soufre pour les centrales électriques, responsables des pluies acides. Les émissions diminuent fortement, et le coût de la réduction s’avère bien inférieur aux estimations initiales, grâce notamment au charbon à faible teneur en soufre et aux épurateurs. Le programme est longtemps cité comme la démonstration de l’efficacité des quotas échangeables.</p>
<h4>Le marché européen du carbone</h4>
<p>Lancé en 2005, le système européen d’échange de quotas d’émission couvre les centrales et l’industrie lourde. Ses débuts sont décevants : trop de quotas sont distribués gratuitement, le prix s’effondre presque à zéro en 2007, puis reste bas après la crise de 2008. Les réformes successives, dont une réserve de stabilité qui retire les quotas excédentaires, font remonter le prix, qui dépasse 80 euros la tonne en 2022 et 2023. Les émissions des secteurs couverts ont nettement baissé depuis 2005. La Suisse a relié son propre système au système européen en 2020.</p>
<h4>Mesurer le coût social du carbone</h4>
<p>Pour fixer une taxe pigouvienne, il faut estimer le dommage d’une tonne de CO₂ supplémentaire : c’est le « coût social du carbone ». William Nordhaus, Nobel 2018, a construit les premiers modèles reliant croissance économique et climat pour l’estimer. Les valeurs varient beaucoup selon les hypothèses, notamment le taux d’actualisation des dommages futurs : l’Agence américaine de protection de l’environnement a retenu en 2023 une valeur centrale d’environ 190 dollars la tonne. Le rapport Stern (2006) avait qualifié le changement climatique de « plus grande défaillance de marché que le monde ait jamais connue ».</p>` }
    ],
    cas: [
      { titre: "Après le smog : le Clean Air Act de 1956", html: `
<p>Le gouvernement britannique réagit d’abord avec réticence au smog de 1952. Il faut quatre ans pour adopter le Clean Air Act de 1956, qui crée des zones où seuls les combustibles « sans fumée » sont autorisés et finance la conversion des foyers domestiques. La solution n’est pas une taxe, mais une norme accompagnée de subventions. Elle est efficace : les épisodes de smog mortel deviennent beaucoup plus rares. Le cas illustre une réalité fréquente : face à un dommage massif et immédiat, les gouvernements choisissent souvent l’interdiction plutôt que le prix, et l’efficacité économique n’est pas le seul critère.</p>` },
      { titre: "La Suisse, laboratoire des taxes pigouviennes", html: `
<p>La Suisse fait partie des pays qui appliquent le plus directement les recommandations de Pigou. Depuis 2001, la redevance poids lourds liée aux prestations (RPLP) fait payer aux camions un montant qui dépend des kilomètres parcourus, du poids et des émissions du véhicule, afin d’intégrer dans le prix du transport routier ses coûts pour la santé, l’environnement et les infrastructures ; une partie finance le rail. Depuis 2008, une taxe sur le CO₂ frappe les combustibles fossiles de chauffage ; elle s’élève à 120 francs par tonne depuis 2022. Environ deux tiers du produit sont redistribués à la population, par une réduction des primes d’assurance maladie, et aux entreprises. Le ménage moyen ne paie donc pas davantage, mais chacun est incité à moins polluer, celui qui pollue peu y gagnant.</p>` },
      { titre: "La pêche, la congestion et le bruit", html: `
<p>Les externalités sont partout. Chaque voiture qui entre dans une ville encombrée ralentit toutes les autres sans en payer le prix : Stockholm a instauré en 2007 un péage urbain variable selon l’heure, qui a durablement réduit le trafic. Chaque avion qui atterrit la nuit réveille des milliers de riverains : de nombreux aéroports appliquent des taxes de bruit. Chaque bateau qui pêche dans une zone partagée réduit les prises des autres (<a href="#c-biens-communs">voir les biens communs</a>). Dans chaque cas, la question est la même : comment faire entrer dans les décisions individuelles un coût qu’elles imposent aux autres ?</p>` }
    ],
    objections: `
<h4>1. Mesurer le dommage</h4>
<p>Une taxe pigouvienne suppose de connaître la valeur du dommage. Or il est souvent difficile à estimer : combien vaut une vie statistique, une espèce disparue, un paysage ? Pour le climat, les estimations du coût social du carbone varient de quelques dizaines à plusieurs centaines de dollars selon les hypothèses éthiques sur le poids des générations futures.</p>
<h4>2. Les effets sur la répartition</h4>
<p>Les taxes sur l’énergie pèsent proportionnellement plus sur les ménages modestes et ruraux, qui dépensent une plus grande part de leur revenu en chauffage et en carburant. Le mouvement des « gilets jaunes », en France, est parti en 2018 d’une hausse de la taxe carbone sur les carburants. La redistribution du produit, comme en Suisse, est une réponse possible.</p>
<h4>3. Les fuites de carbone</h4>
<p>Si un pays taxe ses émissions, ses industries peuvent se délocaliser vers des pays qui ne le font pas, sans bénéfice pour le climat. C’est pourquoi l’Union européenne met en place un mécanisme d’ajustement carbone aux frontières, qui taxe les importations selon leur contenu en carbone.</p>
<h4>4. Les défaillances de l’État</h4>
<p>Les économistes du choix public rappellent que l’État qui fixe la taxe n’est pas un planificateur bienveillant : les secteurs organisés obtiennent des exemptions, les recettes sont affectées à d’autres usages, et la taxe peut être fixée à un niveau politique plutôt qu’efficace. Coase invitait à comparer les institutions réelles, imparfaites, plutôt qu’un marché imparfait à un État idéal.</p>`,
    ecoles: `
<p><b><a href="#eco-marshall">Marshall</a></b> avait introduit les « économies externes » pour expliquer les avantages des districts industriels ; Pigou, son successeur, en tire une théorie générale des défaillances du marché.</p>
<p><b><a href="#eco-samuelson">Samuelson</a></b> formalise les biens publics, proches des externalités positives.</p>
<p><b><a href="#eco-ostrom">Ostrom</a></b> montre que les communautés peuvent gérer certaines externalités par des règles locales, sans État ni marché.</p>
<p><b>Ronald Coase</b> (Nobel 1991) déplace l’attention vers les droits de propriété et les coûts de transaction.</p>
<p><b><a href="#eco-hayek">Hayek</a> et l’école autrichienne</b> se méfient de l’intervention, mais admettent que des règles générales peuvent être nécessaires quand les droits de propriété sont mal définis.</p>
<p><b>Les économistes écologiques</b>, comme Herman Daly, jugent que la nature ne peut être réduite à des externalités à corriger à la marge : l’économie est un sous-système de la biosphère, avec des limites physiques.</p>`,
    source: {
      titre: "Arthur C. Pigou, The Economics of Welfare, 1920, deuxième partie",
      texte: "Le produit net social marginal peut s’écarter du produit net privé marginal lorsqu’une personne, en rendant un service à une autre contre paiement, rend aussi des services ou cause des dommages à des tiers, sans pouvoir exiger de paiement des bénéficiaires ni être contrainte d’indemniser les victimes.",
      notes: `
<p><b>Le contexte.</b> Pigou écrit au lendemain de la Première Guerre mondiale, dans la tradition de Cambridge qui cherche à mettre l’économie au service du bien-être collectif. Il prend des exemples très concrets : les étincelles des locomotives qui brûlent les récoltes, les lapins d’un domaine de chasse qui ravagent les champs voisins.</p>
<p><b>Le vocabulaire.</b> « Produit net privé » et « produit net social » sont les ancêtres de nos coûts privé et social. L’essentiel tient dans l’écart entre les deux, qui justifie l’intervention.</p>
<p><b>La condition décisive.</b> « Sans pouvoir exiger de paiement… ni être contrainte d’indemniser » : si la négociation était possible, il n’y aurait pas de problème. C’est exactement le point que Coase développera quarante ans plus tard.</p>`
    },
    quiz: [
      { q: "Qu’est-ce qu’une externalité négative ?",
        o: ["Un coût que l’entreprise paie pour ses matières premières et son énergie", "Un dommage causé à des tiers qui n’est pas pris en compte dans le prix", "Un avantage procuré à des tiers qui n’est pas pris en compte dans le prix", "Une perte comptable que l’entreprise inscrit dans ses comptes annuels"], c: 1,
        e: "Le pollueur ne paie pas le dommage qu’il cause aux riverains ou à la collectivité : ce coût est « externe » au marché." },
      { q: "Pourquoi le marché produit-il trop d’un bien qui pollue ?",
        o: ["Parce que la demande des consommateurs est devenue beaucoup trop forte", "Parce que le producteur ne compte que son coût privé, inférieur au coût social", "Parce que les entreprises polluantes sont en situation de monopole sur leur marché", "Parce que les consommateurs sont mal informés sur la qualité de ce bien"], c: 1,
        e: "Tant que le prix couvre le coût privé, l’entreprise produit, même si le coût total pour la société est plus élevé que le bénéfice." },
      { q: "Que montre Coase en 1960 ?",
        o: ["Qu’il faut taxer les pollueurs pour que le marché retrouve l’efficacité économique", "Que des droits clairs et une négociation peu coûteuse permettent de s’entendre", "Que les externalités n’existent pas dès lors que les prix sont libres et flexibles", "Que les normes imposées par l’État valent mieux que les taxes et les marchés"], c: 1,
        e: "Le théorème de Coase montre que l’intervention n’est pas toujours nécessaire, mais ses conditions sont rarement réunies quand les victimes sont nombreuses." },
      { q: "Quelle est la différence entre une taxe pigouvienne et un marché de quotas ?",
        o: ["La taxe fixe le prix de la pollution, le marché de quotas fixe sa quantité", "La taxe est volontaire pour les entreprises, les quotas sont obligatoires", "La taxe interdit la pollution, tandis que le marché de quotas l’autorise", "La taxe rapporte des recettes à l’État, alors que les quotas n’en rapportent pas"], c: 0,
        e: "Avec la taxe, la quantité de pollution s’ajuste au prix fixé ; avec les quotas, la quantité est plafonnée et le prix des permis s’ajuste." },
      { q: "Comment la Suisse limite-t-elle l’effet de la taxe CO₂ sur le pouvoir d’achat des ménages ?",
        o: ["En ne l’appliquant qu’aux entreprises, pas aux ménages", "En redistribuant une large part de son produit à la population", "En exonérant totalement le mazout de chauffage des ménages", "En l’indexant sur l’évolution annuelle des salaires moyens"], c: 1,
        e: "Environ deux tiers des recettes sont reversés, notamment par une réduction des primes d’assurance maladie : le signal-prix subsiste, mais le ménage moyen n’est pas appauvri." }
    ],
    transfert: { q: "Une compagnie aérienne fixe ses prix selon le carburant, les salaires et les taxes d’aéroport, mais ne paie rien pour les émissions de CO₂ de ses vols. Que prévoit l’analyse des externalités ?",
      o: ["Les vols sont trop bon marché pour la société, et trop nombreux", "Il y a trop peu de vols, car les compagnies peinent à couvrir leurs coûts", "Le prix du billet reflète exactement le coût réel pour la société", "Les passagers paient déjà le coût du climat à travers le prix du carburant"], c: 0,
      e: "Le coût privé est inférieur au coût social : le marché produit trop." },
    ouverte: {
      q: "Le kérosène des vols internationaux n’est presque nulle part taxé. Une taxe sur les billets d’avion serait-elle une bonne taxe pigouvienne ?",
      r: "Du point de vue de Pigou, une taxe sur les billets peut corriger une externalité réelle, puisque chaque vol émet du CO₂ dont le dommage n’est pas payé ; l’exonération du kérosène des vols internationaux, héritée d’accords conclus dès 1944, rend même l’avion relativement avantagé. La taxe serait plus précise si elle dépendait de la distance et du type d’avion, donc des émissions réelles. Plusieurs pays en appliquent une, comme la Suède depuis 2018 ou la France depuis 2020. Des difficultés apparaissent cependant : le risque que les passagers partent d’aéroports voisins non taxés, une forme de fuite de carbone ; l’effet sur la répartition, qui dépend de qui voyage le plus, souvent les ménages aisés ; et l’usage des recettes, redistribution ou financement de la transition. En Suisse, une telle taxe faisait partie d’une loi sur le CO₂ rejetée en votation en 2021, ce qui montre que l’acceptabilité politique compte autant que l’efficacité économique."
    },
    lectures: [
      ["Accessible", "William Nordhaus, The Climate Casino, 2013. Les enjeux économiques du climat expliqués par le lauréat du Nobel 2018."],
      ["Accessible", "Jean Tirole, Économie du bien commun, 2016, chapitres sur le climat."],
      ["Intermédiaire", "Ronald Coase, « The Problem of Social Cost », Journal of Law and Economics, 1960. Long mais lisible, plein d’exemples juridiques."],
      ["Intermédiaire", "Nicholas Stern, The Economics of Climate Change: The Stern Review, 2006, résumé exécutif."],
      ["Recherche", "Martin Weitzman, « Prices vs. Quantities », Review of Economic Studies, 1974 ; A. Denny Ellerman et al., Markets for Clean Air: The U.S. Acid Rain Program, 2000."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi le brouillard de Londres de 1952 est-il un exemple d’externalité ?",
          o: ["Chacun payait son charbon, mais personne ne payait pour l’air qu’il polluait", "Parce que le prix du charbon avait fortement augmenté cet hiver-là", "Parce que l’État avait interdit le charbon et provoqué une pénurie", "Parce que le brouillard était un simple phénomène naturel, sans cause humaine"], c: 0,
          e: "Le dommage causé aux autres n’était compté dans aucun prix." },
        { q: "Pourquoi l’apiculteur dont les abeilles pollinisent les vergers voisins en fait-il « moins qu’il ne le faudrait » ?",
          o: ["Parce qu’il n’est pas payé pour le service qu’il rend aux voisins", "Parce que les ruches coûtent trop cher à acheter et à entretenir", "Parce que les arboriculteurs refusent que ses abeilles entrent dans leurs vergers", "Parce que le miel est lourdement taxé et se vend mal sur les marchés"], c: 0,
          e: "C’est une externalité positive : le marché en produit trop peu." }
      ],
      duree: 5,
      html: `
<h3>Le brouillard qui a tué Londres</h3>
<p>En décembre 1952, la fumée des cheminées à charbon recouvre Londres d’un brouillard si épais qu’on n’y voit plus à quelques mètres. En quelques jours, des milliers de personnes meurent. Chaque habitant payait son charbon, mais personne ne payait pour l’air qu’il polluait. C’est ce que les économistes appellent une <b>externalité</b> : un effet sur les autres qui n’est pas compté dans les prix.</p>
<h3>Quand le marché se trompe</h3>
<p>Une entreprise qui pollue ne paie que ses coûts : matières premières, énergie, salaires. Les dégâts qu’elle cause aux voisins ou à la planète ne figurent pas dans ses comptes. Elle produit donc plus que ce qui serait raisonnable pour la société. À l’inverse, celui qui rend service aux autres sans être payé, comme l’apiculteur dont les abeilles pollinisent les vergers voisins, en fait moins qu’il ne le faudrait.</p>
${pigou}
<h3>Trois solutions</h3>
<p>L’économiste Arthur Pigou propose en 1920 de faire payer au pollueur le dommage qu’il cause, par une taxe. Ronald Coase répond en 1960 que, si les personnes concernées peuvent négocier, elles trouveront parfois seules une solution. Enfin, l’État peut fixer un plafond de pollution et vendre des permis que les entreprises s’échangent. La Suisse applique notamment une taxe sur le CO₂ des combustibles, dont la plus grande partie est rendue à la population.</p>
<h3>À retenir</h3>
<p>Les externalités expliquent pourquoi le marché seul ne protège pas l’environnement, et le changement climatique en est l’exemple le plus grave. La notice complète présente les expériences réelles et leurs limites.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Le smog de Londres en 1952 et l’analyse de Pigou.",
      raisonnement: "Six étapes : coût privé et social, externalités positives, Pigou, Coase, quotas, normes.",
      preuves: "Le marché américain du soufre, le marché européen du carbone, le coût social du carbone.",
      cas: "Le Clean Air Act de 1956, la RPLP et la taxe CO₂ suisses, congestion et bruit.",
      objections: "Mesurer le dommage, effets sur la répartition, fuites de carbone, défaillances de l’État.",
      ecoles: "Marshall, Samuelson, Ostrom, Coase, Hayek, l’économie écologique.",
      source: "Pigou, 1920 : l’écart entre produit net privé et produit net social.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     8. COURBE DE PHILLIPS
     ===================================================================== */
  const data = {
    s60: [[1961, 6.7, 1.0], [1962, 5.5, 1.0], [1963, 5.7, 1.3], [1964, 5.2, 1.3], [1965, 4.5, 1.6], [1966, 3.8, 2.9], [1967, 3.8, 3.1], [1968, 3.6, 4.2], [1969, 3.5, 5.5]],
    s70: [[1974, 5.6, 11.0], [1975, 8.5, 9.1], [1979, 5.8, 11.3], [1980, 7.1, 13.5], [1982, 9.7, 6.2], [1983, 9.6, 3.2]],
    s20: [[2015, 5.3, 0.1], [2019, 3.7, 1.8], [2022, 3.6, 8.0]]
  };
  const phillips = fig(360, (() => {
    const X0 = 70, X1 = 610, Y0 = 300, Y1 = 30, sx = (u) => X0 + ((u - 3) / 7.5) * (X1 - X0), sy = (i) => Y0 - (i / 14) * (Y0 - Y1);
    let s = "";
    for (let i = 0; i <= 14; i += 2) s += `<line x1="${X0}" x2="${X1}" y1="${sy(i)}" y2="${sy(i)}" style="stroke:var(--line)"/><text x="${X0 - 8}" y="${sy(i) + 4}" text-anchor="end" ${M}>${i} %</text>`;
    for (let u = 3; u <= 10; u++) s += `<text x="${sx(u)}" y="${Y0 + 18}" text-anchor="middle" ${M}>${u} %</text>`;
    s += `<polyline points="${data.s60.map((d) => sx(d[1]) + "," + sy(d[2])).join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2"/>`;
    const dot = (d, col, lab) => `<circle cx="${sx(d[1])}" cy="${sy(d[2])}" r="5" style="fill:${col}"/>${lab ? `<text x="${sx(d[1]) + 8}" y="${sy(d[2]) + 4}" ${M}>${d[0]}</text>` : ""}`;
    data.s60.forEach((d, i) => (s += dot(d, "var(--note)", i === 0 || i === 8)));
    data.s70.forEach((d) => (s += d[0] === 1979 ? dot(d, "var(--serial)", false) + `<text x="${sx(d[1]) - 8}" y="${sy(d[2]) - 6}" text-anchor="end" ${M}>${d[0]}</text>` : dot(d, "var(--serial)", true)));
    data.s20.forEach((d) => (s += dot(d, "var(--plum)", true)));
    s += `<text x="${X0}" y="20" ${T}>États-Unis : chômage (horizontal) et inflation des prix (vertical), moyennes annuelles</text>`;
    s += `<text x="${X1}" y="${Y0 + 40}" text-anchor="end" ${S}>Vert : années 1960 · Rouge : années 1970-1983 · Violet : 2015, 2019, 2022</text>`;
    s += `<text x="${sx(6.9)}" y="${sy(1.8)}" ${S} >la « courbe » des années 1960</text>`;
    return s;
  })(), "Données annuelles du Bureau of Labor Statistics (taux de chômage et hausse annuelle moyenne de l’indice des prix à la consommation), arrondies. Les années 1960 dessinent une courbe nette ; les années 1970 la font exploser ; les années 2010 montrent une courbe très plate, avant le sursaut de 2022.", "Nuage de points chômage et inflation aux États-Unis pour les années 1960, 1970 et récentes");

  OEC.notices["courbe-phillips"] = {
    essentiel: [
      "La courbe de Phillips décrit une relation inverse entre chômage et inflation : quand le chômage est bas, les salaires et les prix montent plus vite. Dans les années 1960, on a cru qu’elle offrait aux gouvernements un menu de choix.",
      "Friedman et Phelps ont montré en 1967-1968 que cette relation dépend des anticipations : si l’inflation devient attendue, la courbe se déplace, et à long terme on ne peut pas acheter durablement moins de chômage avec plus d’inflation. La stagflation des années 1970 leur a donné raison.",
      "Depuis les années 1990, la courbe paraît très plate : l’inflation réagit peu au chômage. Le retour brutal de l’inflation en 2021-2022 a relancé la question de sa forme et du rôle des anticipations."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : peut-on choisir entre chômage et inflation ?", html: `
<p>En 1958, l’économiste néo-zélandais Alban William Phillips, qui enseigne à la London School of Economics, publie un article statistique sur près d’un siècle de données britanniques (1861-1957). Il y trouve une relation remarquablement stable : quand le chômage est faible, les salaires nominaux augmentent rapidement ; quand il est élevé, ils stagnent. Phillips est un esprit original : ancien chasseur de crocodiles et ingénieur, il avait construit une machine hydraulique, le MONIAC, qui simulait l’économie britannique avec de l’eau colorée.</p>
<p>Deux ans plus tard, <a href="#eco-samuelson">Paul Samuelson</a> et Robert Solow transposent la relation aux États-Unis, en remplaçant les salaires par les prix. Ils suggèrent qu’un chômage de 3 % exigerait une inflation de 4 à 5 % par an, et présentent la courbe comme un « menu » de choix. La question semble posée : combien d’inflation la société est-elle prête à accepter pour réduire le chômage ? Dix ans plus tard, la réponse change du tout au tout.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Pourquoi chômage et inflation seraient liés</h4>
<p>Quand le chômage est bas, les entreprises peinent à recruter : elles augmentent les salaires pour attirer et garder les travailleurs, et répercutent ces hausses sur leurs prix. Quand le chômage est élevé, les travailleurs sont en position de faiblesse et les salaires progressent peu. La relation entre tension sur le marché du travail et hausse des prix paraît donc naturelle.</p>
<h4>2. La courbe comme menu</h4>
<p>Dans les années 1960, cette relation est intégrée à la synthèse keynésienne. Les gouvernements peuvent relancer la demande pour faire baisser le chômage, en acceptant un peu plus d’inflation. Les données américaines des années 1960 dessinent d’ailleurs une courbe presque parfaite : le chômage baisse de 6,7 % à 3,5 %, tandis que l’inflation monte de 1 % à 5,5 %.</p>
${phillips}
<h4>3. L’objection de Friedman et Phelps</h4>
<p>En décembre 1967, <a href="#eco-friedman">Milton Friedman</a> prononce son discours présidentiel à l’American Economic Association ; Edmund Phelps arrive indépendamment à la même conclusion. Leur argument repose sur les anticipations. Les salariés ne se soucient pas de leur salaire nominal, mais de ce qu’il permet d’acheter. Si le gouvernement relance l’économie et que l’inflation monte de 2 à 4 %, les salariés, surpris, acceptent d’abord des hausses de salaire insuffisantes, et les entreprises embauchent davantage : le chômage baisse. Mais une fois que les salariés s’attendent à 4 % d’inflation, ils réclament des hausses en conséquence ; l’effet sur l’emploi disparaît, et le chômage revient à son niveau initial, avec une inflation plus élevée.</p>
<h4>4. Le taux de chômage naturel</h4>
<p>Il existe donc un <a href="#c-taux-naturel">taux de chômage « naturel »</a>, déterminé par les caractéristiques réelles du marché du travail : la vitesse à laquelle chômeurs et emplois vacants se rencontrent, les qualifications, les institutions. Tenter de maintenir le chômage en dessous de ce niveau exige une inflation toujours croissante, car il faut sans cesse surprendre des anticipations qui s’adaptent. À long terme, la courbe de Phillips est verticale. On parle aussi de NAIRU, le taux de chômage qui n’accélère pas l’inflation.</p>
<h4>5. La version moderne</h4>
<p>La courbe de Phillips qu’utilisent aujourd’hui les banques centrales intègre ces leçons. L’inflation y dépend des anticipations d’inflation, de l’écart entre le chômage et son niveau naturel, et des chocs d’offre (énergie, alimentation, importations). Si les anticipations sont bien « ancrées », c’est-à-dire si le public croit que la banque centrale ramènera l’inflation vers sa cible, un choc temporaire n’entraîne pas de spirale. C’est pourquoi la crédibilité de la banque centrale est devenue un enjeu central.</p>
<h4>6. Une courbe devenue plate</h4>
<p>Depuis les années 1990, l’inflation réagit beaucoup moins aux variations du chômage. En 2019, le chômage américain tombe à 3,7 % en moyenne sans que l’inflation dépasse 2 %. Les explications discutées sont nombreuses : anticipations mieux ancrées grâce à la crédibilité des banques centrales, mondialisation qui limite le pouvoir de négociation salarial, affaiblissement des syndicats, poids des services. Certains économistes se demandent alors si la courbe de Phillips existe encore.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La stagflation, une prédiction réussie</h4>
<p>Friedman avait annoncé en 1967 que la tentative de maintenir un chômage bas finirait par produire une inflation croissante sans gain durable d’emploi. Les années 1970 le confirment de façon spectaculaire : aux États-Unis, l’inflation dépasse 11 % en 1974 avec un chômage de 5,6 %, puis 13,5 % en 1980 avec 7,1 % de chômage. Les chocs pétroliers de 1973 et 1979 aggravent la situation, mais la hausse des anticipations d’inflation joue un rôle central. C’est l’une des prédictions les plus célèbres de l’histoire de l’économie.</p>
<h4>Le coût de la désinflation</h4>
<p>Pour casser ces anticipations, Paul Volcker, à la tête de la Réserve fédérale à partir de 1979, relève les taux d’intérêt à des niveaux sans précédent. L’inflation recule de 13,5 % en 1980 à 3,2 % en 1983, mais le chômage atteint 9,7 % en 1982, son niveau le plus élevé depuis la Grande Dépression. La courbe de Phillips de court terme existe donc bien : réduire l’inflation coûte des emplois, au moins temporairement.</p>
<h4>2021-2022 : la courbe se redresse</h4>
<p>Après des années d’inflation faible, les prix américains augmentent de 8 % en moyenne en 2022, avec un chômage de 3,6 %. Plusieurs travaux, dont ceux de Pierpaolo Benigno et Gauti Eggertsson (2023), suggèrent que la courbe de Phillips n’est pas linéaire : plate quand le marché du travail est détendu, elle devient beaucoup plus pentue quand les emplois vacants dépassent le nombre de chômeurs, comme en 2021-2022. L’inflation est ensuite redescendue sans hausse importante du chômage, ce qui est compatible avec cette forme coudée et avec des anticipations restées ancrées.</p>` }
    ],
    cas: [
      { titre: "Les années 1960 aux États-Unis : le menu appliqué", html: `
<p>Sous les présidents Kennedy et Johnson, les conseillers économiques, dont plusieurs proches de Samuelson et de Solow, veulent ramener le chômage vers 4 %. La baisse d’impôts de 1964, puis les dépenses de la guerre du Vietnam et des programmes sociaux de la « Grande Société », stimulent fortement la demande. Le chômage atteint 3,5 % en 1969, mais l’inflation, d’environ 1 % au début de la décennie, dépasse 5 %. Les années suivantes montrent que cette inflation ne redescend pas d’elle-même : les anticipations ont changé.</p>` },
      { titre: "La Suisse et la stabilité des prix", html: `
<p>La Suisse connaît dans les années 1970 une inflation élevée, autour de 10 % en 1973-1974. Mais à partir de 1975, la Banque nationale adopte une politique d’objectifs de croissance de la masse monétaire, d’inspiration monétariste, et l’inflation recule rapidement. Depuis 2000, la BNS définit la stabilité des prix comme une hausse de l’indice des prix à la consommation inférieure à 2 % par an. Le chômage suisse, mesuré par le Secrétariat d’État à l’économie, est resté faible par comparaison internationale, généralement entre 2 et 4 %. Le cas suisse montre qu’un faible chômage et une faible inflation peuvent coexister durablement lorsque les anticipations sont ancrées et que le marché du travail fonctionne bien, ce qui revient à un taux de chômage naturel bas.</p>` },
      { titre: "L’hystérèse européenne", html: `
<p>Dans les années 1980, le chômage monte fortement en Europe après les chocs pétroliers et la désinflation, et ne redescend pas lors de la reprise. Olivier Blanchard et Larry <a href="#eco-summers">Summers</a> proposent en 1986 une explication : le taux de chômage naturel n’est pas fixe, il augmente après une longue période de chômage élevé, parce que les chômeurs de longue durée perdent leurs compétences et leur lien avec l’emploi, et que les salariés en place négocient sans tenir compte d’eux. C’est l’<a href="#c-hysterese">hystérèse</a>. Une récession mal combattue peut ainsi dégrader durablement l’emploi, ce qui tempère la conclusion de Friedman sur la neutralité de long terme.</p>` }
    ],
    objections: `
<h4>1. Les anticipations rationnelles</h4>
<p>Robert <a href="#eco-lucas">Lucas</a>, Thomas Sargent et Neil Wallace vont plus loin que Friedman dans les années 1970 : si les agents anticipent rationnellement, même la courbe de court terme disparaît pour toute politique annoncée. Seules les surprises ont un effet. Les rigidités de prix et de salaires, que les nouveaux keynésiens ont réintroduites, rendent ce résultat moins absolu.</p>
<h4>2. Le taux naturel est inobservable</h4>
<p>Le taux de chômage naturel ne se mesure pas directement ; il s’estime, avec de larges marges d’erreur, et il change dans le temps. Les banques centrales qui s’appuient sur lui risquent de se tromper, comme dans les années 1990 aux États-Unis, où il s’est révélé plus bas que prévu.</p>
<h4>3. Une relation instable</h4>
<p>La courbe a changé de pente et de position à plusieurs reprises. Certains économistes en concluent qu’elle n’est pas une relation structurelle, mais un résumé statistique qui dépend de la politique monétaire en vigueur, une illustration de la critique de Lucas.</p>
<h4>4. L’inflation ne vient pas seulement du travail</h4>
<p>Les chocs pétroliers, les pénuries de 2021 ou les marges des entreprises peuvent faire monter les prix indépendamment du chômage. Réduire l’inflation au seul marché du travail risque de conduire à des politiques trop restrictives quand la cause est ailleurs.</p>`,
    ecoles: `
<p><b><a href="#eco-keynes">Keynes</a></b> n’a jamais formulé la courbe, mais la synthèse keynésienne l’a intégrée pour compléter un modèle qui ne disait rien de l’inflation.</p>
<p><b><a href="#eco-samuelson">Samuelson</a> et Solow</b> en ont fait un menu de politique économique, tout en avertissant que la relation pouvait se déplacer.</p>
<p><b><a href="#eco-friedman">Friedman</a> et Phelps</b> ont introduit les anticipations et le taux naturel ; les deux ont reçu le Nobel (1976 et 2006).</p>
<p><b><a href="#eco-lucas">Lucas</a></b> et la nouvelle économie classique ont radicalisé la critique avec les anticipations rationnelles.</p>
<p><b>Les nouveaux keynésiens</b> ont reconstruit une courbe de Phillips fondée sur la fixation échelonnée des prix par les entreprises, au cœur des modèles des banques centrales.</p>
<p><b>Les post-keynésiens</b> insistent sur le conflit de répartition : l’inflation naît des revendications concurrentes des salariés et des entreprises sur le revenu national.</p>`,
    source: {
      titre: "Milton Friedman, « The Role of Monetary Policy », discours présidentiel à l’American Economic Association, 1967 (publié en 1968)",
      texte: "Il y a toujours un arbitrage temporaire entre inflation et chômage ; il n’y a pas d’arbitrage permanent.",
      notes: `
<p><b>Le contexte.</b> À la fin de 1967, l’inflation américaine commence à monter, mais la courbe de Phillips semble encore fonctionner. Friedman affirme, contre l’opinion dominante, qu’elle va cesser de le faire.</p>
<p><b>L’équilibre de la phrase.</b> Friedman ne nie pas l’existence de la courbe : il admet un effet temporaire. Ce qu’il nie, c’est qu’on puisse l’exploiter durablement. La nuance est souvent oubliée dans les résumés de sa pensée.</p>
<p><b>Ce que l’histoire a retenu.</b> La stagflation a donné raison à Friedman. Mais la désinflation de Volcker a aussi montré que l’arbitrage temporaire peut être très coûteux, et l’hystérèse suggère que le « temporaire » peut durer longtemps.</p>`
    },
    quiz: [
      { q: "Qu’a observé Phillips en 1958 sur les données britanniques ?",
        o: ["Une relation positive entre le chômage et la hausse des salaires nominaux", "Une relation inverse entre chômage et hausse des salaires nominaux", "Aucun lien stable entre le chômage et l’évolution des salaires nominaux", "Une baisse continue des salaires nominaux pendant toute la période"], c: 1,
        e: "Quand le chômage est bas, les salaires nominaux augmentent vite ; quand il est élevé, ils progressent peu. Samuelson et Solow ont ensuite transposé la relation aux prix." },
      { q: "Pourquoi, selon Friedman, une relance ne réduit-elle le chômage que temporairement ?",
        o: ["Parce que l’État manque d’argent pour financer durablement la relance", "Parce que les salariés finissent par anticiper l’inflation et exigent des hausses", "Parce que les entreprises délocalisent leur production vers des pays moins chers", "Parce que la population active diminue et que les emplois vacants restent non pourvus"], c: 1,
        e: "L’effet sur l’emploi repose sur une surprise ; une fois l’inflation anticipée, le chômage revient à son niveau naturel avec une inflation plus forte." },
      { q: "Qu’est-ce que la stagflation des années 1970 a montré ?",
        o: ["Que la courbe de Phillips était stable", "Qu’inflation et chômage pouvaient augmenter ensemble", "Que l’inflation réduit toujours le chômage", "Que l’inflation ne dépend que de la quantité de monnaie"], c: 1,
        e: "Le menu de Samuelson et Solow ne tenait plus : l’inflation dépassait 10 % alors que le chômage augmentait." },
      { q: "Que signifie une courbe de Phillips « plate » ?",
        o: ["Que l’inflation réagit très peu aux variations du taux de chômage", "Que le chômage reste fixe quelle que soit l’évolution de l’économie", "Que l’inflation reste fixée à 2 % quelle que soit la situation", "Que les salaires baissent dès que le chômage commence à reculer"], c: 0,
        e: "Dans les années 2010, le chômage a fortement baissé sans que l’inflation monte nettement, d’où l’idée d’une courbe aplatie." },
      { q: "Quelle est l’idée de Benigno et Eggertsson (2023) ?",
        o: ["La courbe de Phillips n’existe pas, car l’inflation ne dépend pas du chômage actuel", "La pente varie, faible quand le marché du travail est détendu et forte quand il est tendu", "L’inflation dépend avant tout de la quantité de monnaie, et non du chômage", "La courbe est devenue verticale, y compris à court terme, depuis les années 1990"], c: 1,
        e: "Quand les emplois vacants dépassent le nombre de chômeurs, comme en 2021-2022, une petite baisse du chômage s’accompagne d’une forte hausse de l’inflation." }
    ],
    transfert: { q: "Un gouvernement veut ramener le chômage de 5 % à 3 % en poussant durablement l’inflation de 2 % à 6 %. Selon Friedman, que se passera-t-il à long terme ?",
      o: ["Le chômage revient vers son niveau de départ, l’inflation reste élevée", "Le chômage restera à 3 % durablement, sans autre conséquence notable", "L’inflation reviendra d’elle-même à 2 %, et le chômage restera à 3 %", "Le chômage continuera de baisser jusqu’à tomber presque à zéro, grâce à l’inflation"], c: 0,
      e: "Une fois l’inflation anticipée, les salaires s’ajustent et l’effet sur l’emploi disparaît." },
    ouverte: {
      q: "Si l’inflation d’un pays tombe à 0 % alors que son chômage est bas, sa banque centrale doit-elle chercher à relancer l’économie ?",
      r: "Selon la courbe de Phillips moderne, une inflation nulle avec un chômage proche de son niveau habituel ne signale pas de surchauffe. Plusieurs arguments plaident pourtant pour la vigilance : une inflation proche de zéro laisse peu de marge avant la déflation, qui alourdit les dettes ; elle limite la capacité de la banque centrale à baisser les taux réels en cas de crise ; et elle peut s’installer dans les anticipations, comme au Japon pendant deux décennies. La zone euro a connu une situation proche en 2014-2016, et la BCE a alors lancé des achats massifs d’obligations. À l’inverse, relancer sans tension sur le marché du travail risque d’alimenter des bulles, notamment immobilières (<a href=\"#c-instabilite-financiere\">voir instabilité financière</a>). La réponse dépend donc des causes : une monnaie très forte, une demande faible ou un choc temporaire sur les prix de l’énergie appellent des réponses différentes."
    },
    lectures: [
      ["Accessible", "Olivier Blanchard, Macroéconomie (manuel), chapitres sur la courbe de Phillips et le taux naturel."],
      ["Accessible", "Alan Blinder, A Monetary and Fiscal History of the United States, 1961-2021, 2022."],
      ["Intermédiaire", "Milton Friedman, « The Role of Monetary Policy », American Economic Review, 1968, une quinzaine de pages lisibles."],
      ["Intermédiaire", "A. W. Phillips, « The Relation between Unemployment and the Rate of Change of Money Wage Rates in the United Kingdom, 1861-1957 », Economica, 1958."],
      ["Recherche", "Paul Samuelson et Robert Solow, « Analytical Aspects of Anti-Inflation Policy », 1960 ; Pierpaolo Benigno et Gauti Eggertsson, « It’s Baaack: The Surge in Inflation in the 2020s and the Return of the Non-Linear Phillips Curve », 2023."]
    ],
    decouvrir: {
      questions: [
        { q: "Dans les années 1960, quel choix les gouvernements croient-ils pouvoir faire ?",
          o: ["Un peu plus d’inflation contre un peu moins de chômage", "Moins d’impôts contre plus de croissance", "Plus d’exportations contre moins d’importations", "Des prix fixes contre des salaires fixes"], c: 0,
          e: "Friedman montrera que ce choix est une illusion à long terme." },
        { q: "Qu’est-ce qui a surpris les économistes en 2021-2022 ?",
          o: ["Avec un marché du travail très tendu, l’inflation est repartie brusquement", "Le chômage a dépassé 25 % dans la plupart des grands pays riches en 2021", "Les prix ont fortement baissé partout, malgré la reprise de l’activité", "Les salaires ont été gelés dans presque tous les pays, sans effet sur les prix"], c: 0,
          e: "La relation semble surtout exister quand l’économie est très tendue." }
      ],
      duree: 5,
      html: `
<h3>Moins de chômage, plus d’inflation ?</h3>
<p>En 1958, l’économiste A. W. Phillips observe sur un siècle de données britanniques que, quand le chômage est bas, les salaires augmentent vite. Logique : les entreprises qui peinent à recruter doivent payer davantage, et répercutent ces hausses sur leurs prix. Dans les années 1960, les gouvernements croient pouvoir choisir : un peu plus d’inflation contre un peu moins de chômage.</p>
${phillips}
<h3>Le piège des anticipations</h3>
<p>En 1967, <a href="#eco-friedman">Milton Friedman</a> prévient que ce choix est une illusion. Si le gouvernement pousse l’inflation de 2 à 4 % pour réduire le chômage, les salariés sont d’abord surpris. Mais ils finissent par s’attendre à 4 % d’inflation et réclament des augmentations en conséquence. Le chômage revient alors à son niveau de départ, et il ne reste que l’inflation. Les années 1970 lui donnent raison : inflation et chômage montent ensemble, c’est la <b>stagflation</b>.</p>
<h3>Une relation qui change</h3>
<p>Dans les années 2010, le chômage baisse beaucoup sans faire monter les prix, et l’on se demande si la courbe existe encore. Puis, en 2021-2022, avec un marché du travail très tendu, l’inflation repart brusquement. Les économistes pensent aujourd’hui que la relation existe surtout quand l’économie est très tendue, et que la confiance dans la banque centrale compte beaucoup.</p>
<h3>À retenir</h3>
<p>On ne peut pas acheter durablement moins de chômage avec plus d’inflation, mais réduire l’inflation peut coûter des emplois pendant un temps. La notice complète présente les données et les débats.</p>`,
      quiz: [1, 2]
    },
    resumes: {
      depart: "Phillips en 1958, puis le « menu » de Samuelson et Solow.",
      raisonnement: "Six étapes, des tensions sur les salaires au taux naturel et à la courbe aplatie.",
      preuves: "La stagflation prédite, le coût de la désinflation Volcker, le redressement de 2021-2022.",
      cas: "Les années 1960 américaines, la stabilité des prix suisse, l’hystérèse européenne.",
      objections: "Anticipations rationnelles, taux naturel inobservable, relation instable, chocs d’offre.",
      ecoles: "Keynes, Samuelson et Solow, Friedman et Phelps, Lucas, nouveaux keynésiens, post-keynésiens.",
      source: "Friedman, 1967 : un arbitrage temporaire, pas d’arbitrage permanent.",
      quiz: "Six questions corrigées et une question de réflexion.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
