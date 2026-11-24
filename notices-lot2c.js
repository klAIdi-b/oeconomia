/* Œconomia — notices longues, lot 2 (c) : r > g, biens communs */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     9. r > g (PIKETTY)
     ===================================================================== */
  const compound = fig(320, (() => {
    const L = 70, R = 600, B = 260, Tp = 40, years = 50, max = 1200;
    const sx = (t) => L + (t / years) * (R - L), sy = (v) => B - (v / max) * (B - Tp);
    let s = "";
    for (let v = 0; v <= max; v += 200) s += `<line x1="${L}" x2="${R}" y1="${sy(v)}" y2="${sy(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${sy(v) + 4}" text-anchor="end" ${M}>${v}</text>`;
    for (let t = 0; t <= years; t += 10) s += `<text x="${sx(t)}" y="${B + 18}" text-anchor="middle" ${M}>${t} ans</text>`;
    const curve = (rate, col, dash) => { const p = []; for (let t = 0; t <= years; t++) p.push(sx(t) + "," + sy(100 * Math.pow(1 + rate, t))); return `<polyline points="${p.join(" ")}" style="fill:none; stroke:var(--${col}); stroke-width:2.5${dash ? "; stroke-dasharray:6 4" : ""}"/>`; };
    s += curve(0.05, "serial") + curve(0.03, "gold", true) + curve(0.015, "note");
    const end = (rate) => Math.round(100 * Math.pow(1 + rate, years));
    s += `<text x="${R - 4}" y="${sy(end(0.05)) - 8}" text-anchor="end" style="fill:var(--serial); font:600 12px Manrope, sans-serif">Patrimoine entièrement réinvesti à r = 5 % : ${end(0.05)}</text>`;
    s += `<text x="${R - 4}" y="${sy(end(0.03)) - 8}" text-anchor="end" style="fill:var(--gold); font:600 12px Manrope, sans-serif">Patrimoine dont on consomme 2 points : ${end(0.03)}</text>`;
    s += `<text x="${R - 4}" y="${sy(end(0.015)) + 18}" text-anchor="end" style="fill:var(--note); font:600 12px Manrope, sans-serif">Revenus du travail, g = 1,5 % : ${end(0.015)}</text>`;
    s += `<text x="${L}" y="22" ${T}>Indice 100 au départ, sur cinquante ans (calcul exact)</text>`;
    return s;
  })(), "Illustration arithmétique de r > g. Même en consommant une partie de ses revenus, un patrimoine qui rapporte plus que la croissance de l’économie grossit plus vite que les salaires. Les taux choisis sont des ordres de grandeur historiques retenus par Piketty, non des données.", "Trois courbes de croissance composée sur cinquante ans");

  OEC.notices["r-g"] = {
    essentiel: [
      "Notons r le rendement moyen du capital (loyers, dividendes, intérêts, plus-values) et g le taux de croissance de l’économie. Quand r dépasse durablement g, les patrimoines existants croissent plus vite que les revenus du travail, et les fortunes héritées pèsent de plus en plus.",
      "Thomas Piketty soutient, à partir de séries fiscales couvrant plus d’un siècle, que r > g a été la norme historique. Le XXe siècle, où les inégalités ont fortement baissé, serait une exception due aux guerres, à l’inflation et à l’impôt progressif.",
      "Cette thèse a relancé le débat sur les inégalités de patrimoine et la fiscalité, mais elle est discutée : la hausse du capital tient beaucoup au logement, et d’autres économistes jugent que les institutions et la politique expliquent davantage que l’écart r − g."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : le monde de Balzac revient-il ?", html: `
<p>Dans <i>Le Père Goriot</i> (1835), l’ancien bagnard Vautrin explique au jeune Rastignac qu’il ne fera jamais fortune par l’étude et le travail : même un brillant avocat ne gagnera qu’une fraction de ce que rapporte un beau mariage avec une héritière. Dans la France du XIXe siècle, le patrimoine compte davantage que le mérite, et la meilleure manière de devenir riche est d’hériter ou d’épouser un héritage.</p>
<p><a href="#eco-piketty">Thomas Piketty</a> ouvre sa réflexion par cette scène dans <i>Le Capital au XXIe siècle</i> (2013). Il constate que le monde de Vautrin avait largement disparu au milieu du XXe siècle : les classes moyennes accédaient à la propriété, les salaires progressaient vite, l’héritage pesait moins. Mais depuis les années 1980, les patrimoines augmentent plus vite que les revenus, et la part de la richesse héritée remonte. La question est alors : s’agit-il d’un accident, ou d’un retour à la norme du capitalisme ?</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Deux grandeurs simples</h4>
<p>Le rendement du capital, r, est le revenu annuel que rapporte un patrimoine, rapporté à sa valeur : un immeuble de un million qui rapporte 40 000 francs de loyers nets rapporte 4 %. Le taux de croissance, g, est la progression annuelle du revenu national, qui détermine en moyenne celle des salaires. Piketty estime que r a historiquement tourné autour de 4 à 5 % par an, tandis que g, hors périodes exceptionnelles de reconstruction ou de rattrapage, est plus faible, de l’ordre de 1 à 2 %.</p>
<h4>2. L’arithmétique de l’accumulation</h4>
<p>Si un patrimoine rapporte 5 % et que son détenteur n’en consomme qu’une partie, réinvestissant le reste, il croît plus vite que l’économie. Les patrimoines accumulés dans le passé prennent alors une importance croissante par rapport aux revenus du travail. Plus l’écart r − g est grand, plus la concentration des patrimoines tend à être forte et à se perpétuer par l’héritage.</p>
${compound}
<h4>3. Le rapport capital sur revenu</h4>
<p>Piketty mesure l’importance du capital par le rapport β entre la valeur du patrimoine privé et le revenu national annuel. Il relie ce rapport à l’épargne et à la croissance par une relation de long terme : β = s / g, où s est le taux d’épargne. Avec une épargne de 10 % et une croissance de 2 %, le patrimoine finit par représenter cinq années de revenu national ; si la croissance tombe à 1 %, il en représente dix. Une croissance faible, du fait de la démographie et du ralentissement de la productivité, conduit donc à un poids du capital plus élevé.</p>
<h4>4. La part du capital dans le revenu</h4>
<p>La part des revenus du capital dans le revenu national est le produit du rendement par le rapport capital sur revenu : α = r × β. Si β augmente sans que r baisse beaucoup, la part du revenu national qui va aux détenteurs de capital s’accroît, au détriment des salaires. Comme le capital est bien plus concentré que les revenus du travail, l’inégalité globale augmente.</p>
<h4>5. Pourquoi le XXe siècle a été différent</h4>
<p>Entre 1914 et 1945, les patrimoines européens sont laminés : destructions physiques des guerres, inflation qui ruine les détenteurs d’obligations, faillites de 1929, nationalisations, expropriations des avoirs à l’étranger, et surtout fiscalité progressive sur les revenus et les successions, avec des taux marginaux supérieurs souvent compris entre 70 et 90 % aux États-Unis et au Royaume-Uni. Le rendement net du capital tombe, tandis que la reconstruction et la croissance démographique portent g à des niveaux exceptionnels. Pour Piketty, la baisse des inégalités de cette période doit plus aux chocs et à la politique qu’à une tendance spontanée du développement, contrairement à ce que suggérait la <a href="#c-courbe-kuznets">courbe de Kuznets</a>.</p>
<h4>6. La proposition</h4>
<p>Piketty en tire une recommandation : un impôt progressif mondial sur le capital, à des taux modestes pour les patrimoines moyens et plus élevés pour les très grandes fortunes, accompagné d’une transparence financière internationale. Il la qualifie lui-même d’« utopie utile ». Dans Capital et idéologie (2019), il élargit le propos : chaque société justifie ses inégalités par un récit politique, et ces récits peuvent changer.</p>` },
      { id: "preuves", titre: "Ce que disent les données", html: `
<h4>La courbe en U des inégalités</h4>
<p>Les séries construites par Piketty, Emmanuel Saez, Anthony Atkinson, Facundo Alvaredo, Gabriel Zucman et de nombreux collègues, rassemblées dans la World Inequality Database, utilisent les archives fiscales disponibles depuis la création de l’impôt sur le revenu. Elles montrent dans la plupart des pays riches une courbe en U : forte concentration des revenus et des patrimoines avant 1914, chute brutale entre 1914 et 1950, stabilité jusqu’aux années 1970, puis remontée. Aux États-Unis, la part du revenu national avant impôt reçue par le 1 % le plus aisé passe d’environ 10 % vers 1980 à près de 20 % dans les années 2010 ; la remontée est bien plus modérée en Europe continentale.</p>
<h4>Le retour du capital</h4>
<p>Avec Gabriel Zucman (2014), Piketty estime que le rapport entre patrimoine privé et revenu national, qui représentait environ six à sept années de revenu en Europe avant 1914, était tombé à deux ou trois années vers 1950, avant de remonter à cinq ou six années dans les années 2010. Une grande partie de cette remontée tient à la hausse des prix de l’immobilier.</p>
<h4>Paris à la Belle Époque</h4>
<p>Les archives successorales parisiennes, étudiées par Piketty, Gilles Postel-Vinay et Jean-Laurent Rosenthal (2006), montrent qu’à la veille de 1914, environ 1 % des Parisiens décédés détenaient environ deux tiers de la richesse léguée, et que la majorité de la population mourait sans patrimoine notable. Le monde de Vautrin n’était pas qu’une fiction.</p>` }
    ],
    cas: [
      { titre: "Les États-Unis depuis 1980", html: `
<p>Les États-Unis sont le pays riche où les inégalités ont le plus augmenté. Le taux marginal supérieur de l’impôt fédéral sur le revenu, de 70 % en 1980, est abaissé à 28 % en 1988 ; il remonte ensuite partiellement. Les salaires des dirigeants explosent, les revenus du capital se concentrent. Piketty et Saez insistent sur le rôle de la baisse des impôts progressifs, qui a rendu plus attractive la négociation de très hautes rémunérations. Le cas montre aussi les limites de r > g comme explication unique : une grande partie de la hausse initiale des inégalités américaines vient des très hauts salaires, et non des revenus du capital hérité.</p>` },
      { titre: "L’Europe et le poids de l’héritage", html: `
<p>En France, Piketty estime que le flux annuel d’héritages et de donations, qui représentait environ 20 % du revenu national au début du XXe siècle, était tombé à moins de 5 % dans les années 1950, avant de remonter vers 15 % au début des années 2010. Dans une société vieillissante à croissance lente, une part croissante des patrimoines provient de la transmission plutôt que de l’épargne accumulée au cours d’une vie. Ce retour de l’héritage est au cœur des débats européens sur la fiscalité des successions, souvent très impopulaire, y compris parmi ceux qui n’ont pas grand-chose à transmettre.</p>` },
      { titre: "La Suisse, l’impôt sur la fortune et les successions", html: `
<p>La Suisse est l’un des rares pays de l’OCDE à conserver un impôt annuel sur la fortune, prélevé par les cantons et les communes à des taux modestes, généralement inférieurs à 1 %. Les successions en ligne directe sont en revanche exonérées dans la plupart des cantons. Le patrimoine y est très concentré, en partie parce que le pays attire de grandes fortunes. Une initiative populaire de la Jeunesse socialiste, qui proposait un impôt fédéral de 50 % sur les successions dépassant 50 millions de francs pour financer la politique climatique, a été très largement rejetée en votation le 30 novembre 2025. Le cas suisse montre qu’on peut taxer la fortune existante tout en ménageant la transmission, et que la fiscalité du capital dépend autant de l’acceptabilité politique que de l’analyse économique.</p>` }
    ],
    objections: `
<h4>1. Le capital, c’est surtout le logement</h4>
<p>En 2015, l’étudiant du MIT Matthew Rognlie montre que la hausse de la part du capital dans le revenu des pays riches tient presque entièrement au logement. Or le logement suit une logique particulière, liée à la rareté du foncier dans les villes et aux règles d’urbanisme, plus qu’à une accumulation générale du capital. La réponse pourrait passer par la construction et l’urbanisme davantage que par la fiscalité du capital.</p>
<h4>2. r baisse quand le capital s’accumule</h4>
<p>Dans la théorie standard, plus il y a de capital, plus son rendement baisse, ce qui freine le mécanisme décrit par Piketty. Celui-ci répond que l’élasticité de substitution entre capital et travail est suffisamment élevée pour que r baisse moins vite que β n’augmente ; c’est une question empirique toujours discutée. Per Krusell et Anthony Smith (2015) contestent aussi sa relation β = s / g quand la croissance devient très faible.</p>
<h4>3. Les fortunes ne se perpétuent pas mécaniquement</h4>
<p>Gregory Mankiw (2015) rappelle que les héritiers consomment, que les fortunes se divisent entre enfants, et que les impôts réduisent le rendement net. Les listes de grandes fortunes montrent un renouvellement important : la part des fortunes « créées » plutôt qu’héritées a augmenté dans le classement Forbes depuis les années 1980.</p>
<h4>4. Ce sont les institutions qui comptent</h4>
<p>Daron <a href="#eco-acemoglu">Acemoglu</a> et James Robinson (2015) contestent l’idée de « lois générales du capitalisme » : selon eux, l’évolution des inégalités dépend des institutions politiques et économiques, qui diffèrent d’un pays à l’autre, bien plus que d’un écart arithmétique entre r et g.</p>
<h4>5. Les mesures elles-mêmes</h4>
<p>Gerald Auten et David Splinter estiment, en traitant différemment les revenus non déclarés et les transferts, que la hausse de la part du 1 % américain après impôts et transferts est bien plus faible que dans les séries de Piketty et Saez. Le débat méthodologique se poursuit.</p>`,
    ecoles: `
<p><b><a href="#eco-ricardo">Ricardo</a></b> craignait que la rente foncière n’absorbe une part croissante du produit ; Piketty cite volontiers cette intuition, que la hausse des prix immobiliers rend à nouveau actuelle.</p>
<p><b><a href="#eco-marx">Marx</a></b> annonçait une accumulation sans limite du capital ; Piketty rejette sa théorie de la valeur mais reprend la question de la répartition.</p>
<p><b>Simon Kuznets</b> pensait que la croissance finirait par réduire les inégalités ; Piketty voit dans sa courbe le produit d’une période exceptionnelle.</p>
<p><b><a href="#eco-pareto">Pareto</a></b> avait mis en évidence la forme stable des hautes fortunes ; les outils statistiques de Piketty prolongent cette tradition.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> jugeait que la « justice sociale » n’a pas de sens dans un ordre de marché ; les libéraux contemporains contestent la légitimité d’une fiscalité confiscatoire.</p>
<p><b><a href="#eco-sen">Sen</a></b> rappelle que l’inégalité de revenu ou de patrimoine n’est qu’une dimension : ce qui compte, ce sont les libertés réelles des personnes.</p>`,
    source: {
      titre: "Thomas Piketty, Le Capital au XXIe siècle, 2013, introduction",
      texte: "Lorsque le taux de rendement du capital dépasse durablement le taux de croissance de la production et du revenu, le capitalisme produit mécaniquement des inégalités arbitraires et insoutenables, remettant radicalement en cause les valeurs méritocratiques sur lesquelles se fondent nos sociétés démocratiques.",
      notes: `
<p><b>Le mot « mécaniquement ».</b> C’est le terme le plus discuté. Piketty présente r > g comme une force qui agit d’elle-même, sauf si des chocs ou des politiques la contrarient. Ses critiques répondent que rien n’est mécanique : l’épargne, la consommation, la division des héritages et la fiscalité interviennent.</p>
<p><b>Le registre moral.</b> « Arbitraires », « insoutenables », « valeurs méritocratiques » : Piketty n’écrit pas seulement en statisticien. Il défend l’idée que des inégalités héritées, sans lien avec le mérite, menacent la démocratie elle-même.</p>
<p><b>Ce que la phrase ne dit pas.</b> Elle ne dit pas que r > g suffit à expliquer toutes les inégalités ; dans le livre, Piketty consacre aussi de longues pages aux très hauts salaires, qui relèvent d’une autre logique.</p>`
    },
    quiz: [
      { q: "Que désignent r et g chez Piketty ?",
        o: ["Le revenu et le gouvernement", "Le rendement du capital et le taux de croissance de l’économie", "Les recettes fiscales et la dette", "Le taux de change et le PIB"], c: 1,
        e: "r est le rendement annuel moyen du patrimoine, g la croissance du revenu national. Quand r > g, le capital croît plus vite que l’économie." },
      { q: "Avec un taux d’épargne de 12 % et une croissance de 2 %, quel rapport capital sur revenu β = s / g obtient-on à long terme ?",
        o: ["2,4", "6", "10", "24"], c: 1,
        e: "β = 0,12 / 0,02 = 6 : le patrimoine représente six années de revenu national." },
      { q: "Pourquoi les inégalités de patrimoine ont-elles fortement baissé entre 1914 et 1950 selon Piketty ?",
        o: ["Grâce à la croissance spontanée de l’économie", "À cause des guerres, de l’inflation, des faillites et de l’impôt progressif", "Grâce à la hausse des prix de l’immobilier", "À cause du libre-échange"], c: 1,
        e: "Les chocs de la période ont détruit ou réduit les grands patrimoines, et la fiscalité progressive a limité leur reconstitution." },
      { q: "Quelle est l’objection principale de Matthew Rognlie ?",
        o: ["r est toujours inférieur à g", "La hausse de la part du capital tient presque entièrement au logement", "Les données fiscales sont fausses", "L’héritage a disparu"], c: 1,
        e: "Si le phénomène vient du logement, il s’explique par la rareté du foncier et l’urbanisme, ce qui appelle d’autres réponses qu’un impôt général sur le capital." },
      { q: "Que reprochent Acemoglu et Robinson à Piketty ?",
        o: ["D’ignorer les données", "De présenter des « lois générales » alors que les institutions expliquent davantage l’évolution des inégalités", "De proposer un impôt trop faible", "De négliger l’Afrique"], c: 1,
        e: "Pour eux, ce sont les institutions politiques et économiques, différentes selon les pays, qui déterminent la répartition, plus qu’un écart arithmétique." }
    ],
    ouverte: {
      q: "Faut-il taxer davantage les successions, plutôt que la fortune ou le revenu, si l’on veut limiter le mécanisme décrit par Piketty ?",
      r: "Plusieurs arguments plaident pour la taxation des successions : elle frappe une richesse que l’héritier n’a pas gagnée par son mérite, ce qui la rend compatible avec l’idéal méritocratique, y compris pour des libéraux comme John Stuart Mill ; elle décourage moins le travail et l’épargne que l’impôt sur le revenu ; et elle s’attaque directement à la transmission des inégalités. Mais elle est souvent très impopulaire, y compris parmi les ménages modestes ; elle peut inciter les grandes fortunes à s’installer ailleurs ; et elle pose des difficultés pour les entreprises familiales, dont la transmission pourrait obliger à vendre. L’impôt suisse sur la fortune, annuel et modeste, illustre une autre voie, de même que les droits de succession élevés de pays comme la France ou le Royaume-Uni. Le choix dépend autant des valeurs politiques que de l’efficacité économique."
    },
    lectures: [
      ["Accessible", "Thomas Piketty, Une brève histoire de l’égalité, 2021. Une synthèse courte et optimiste de ses travaux."],
      ["Accessible", "Branko Milanovic, Inégalités mondiales, 2016, sur la « courbe de l’éléphant » des revenus mondiaux."],
      ["Intermédiaire", "Thomas Piketty, Le Capital au XXIe siècle, 2013, introduction et parties II et III."],
      ["Intermédiaire", "Heather Boushey, J. Bradford DeLong et Marshall Steinbaum (dir.), After Piketty, 2017, un recueil de critiques et de prolongements."],
      ["Recherche", "Thomas Piketty et Gabriel Zucman, « Capital is Back », Quarterly Journal of Economics, 2014 ; Matthew Rognlie, « Deciphering the Fall and Rise in the Net Capital Share », Brookings Papers, 2015 ; Daron Acemoglu et James Robinson, « The Rise and Decline of General Laws of Capitalism », Journal of Economic Perspectives, 2015."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Le conseil de Vautrin</h3>
<p>Dans un roman de Balzac, un personnage explique au jeune Rastignac qu’il ne deviendra jamais riche en travaillant : mieux vaut épouser une héritière. Au XIXe siècle, l’héritage comptait plus que le travail. L’économiste <a href="#eco-piketty">Thomas Piketty</a> se demande si ce monde est en train de revenir.</p>
<h3>Une inégalité simple</h3>
<p>Piketty compare deux nombres. <b>r</b>, ce que rapporte chaque année un patrimoine (loyers, dividendes, intérêts), souvent 4 à 5 %. <b>g</b>, la croissance de l’économie, souvent 1 à 2 %. Quand r est plus grand que g, un patrimoine qui réinvestit une partie de ses revenus grossit plus vite que les salaires. Les grandes fortunes, surtout héritées, prennent alors de plus en plus de place.</p>
${compound}
<h3>Un XXe siècle exceptionnel</h3>
<p>Entre 1914 et 1950, les guerres, l’inflation, la crise de 1929 et des impôts très progressifs ont réduit les grandes fortunes. Les inégalités ont fortement baissé, et beaucoup ont cru que c’était définitif. Depuis 1980, elles remontent, surtout aux États-Unis.</p>
<h3>À retenir, et à discuter</h3>
<p>Piketty propose un impôt progressif sur les grandes fortunes. Ses critiques rappellent que la hausse du patrimoine vient surtout des prix de l’immobilier, que les fortunes se renouvellent, et que les institutions comptent davantage qu’une formule. La notice complète présente les données et ces débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Vautrin, Rastignac et le retour possible d’une société d’héritiers.",
      raisonnement: "Six étapes : r et g, accumulation, β = s / g, α = r × β, l’exception du XXe siècle, la proposition.",
      preuves: "La courbe en U, le retour du capital, les successions parisiennes de la Belle Époque.",
      cas: "Les États-Unis depuis 1980, le poids de l’héritage en Europe, la Suisse et ses impôts.",
      objections: "Le logement, la baisse de r, le renouvellement des fortunes, les institutions, les mesures.",
      ecoles: "Ricardo, Marx, Kuznets, Pareto, Hayek, Sen.",
      source: "Piketty, 2013 : des inégalités « mécaniquement » produites.",
      quiz: "Cinq questions corrigées, dont un calcul, et une question sur la fiscalité des successions.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     10. BIENS COMMUNS
     ===================================================================== */
  const regen = fig(310, (() => {
    const L = 70, R = 600, B = 250, Tp = 50, K = 1000, r = 0.4, maxG = r * K / 4;
    const sx = (st) => L + (st / K) * (R - L), sy = (g) => B - (g / (maxG * 1.25)) * (B - Tp);
    let s = `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" style="stroke:var(--line)"/><line x1="${L}" y1="${B}" x2="${L}" y2="${Tp - 10}" style="stroke:var(--line)"/>`;
    const p = []; for (let st = 0; st <= K; st += 10) p.push(sx(st) + "," + sy(r * st * (1 - st / K)));
    s += `<polyline points="${p.join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.5"/>`;
    s += `<line x1="${sx(500)}" y1="${sy(maxG)}" x2="${sx(500)}" y2="${B}" style="stroke:var(--gold); stroke-dasharray:4 4"/><circle cx="${sx(500)}" cy="${sy(maxG)}" r="6" style="fill:var(--gold)"/>`;
    s += `<text x="${sx(500)}" y="${sy(maxG) - 28}" text-anchor="middle" style="fill:var(--gold); font:700 12px Manrope, sans-serif">rendement maximal durable</text>`;
    const effort = (E) => { const pts = []; for (let st = 0; st <= K; st += 50) pts.push(sx(st) + "," + sy(E * st)); return pts.join(" "); };
    s += `<polyline points="${effort(0.1)}" style="fill:none; stroke:var(--plum); stroke-width:1.8; stroke-dasharray:6 4"/>`;
    s += `<polyline points="${effort(0.35)}" style="fill:none; stroke:var(--serial); stroke-width:1.8; stroke-dasharray:6 4"/>`;
    s += `<text x="${sx(1000) - 4}" y="${sy(100) - 6}" text-anchor="end" style="fill:var(--plum); font:600 11.5px Manrope, sans-serif">pêche modérée</text>`;
    s += `<text x="${sx(300) + 6}" y="${sy(105) - 4}" style="fill:var(--serial); font:600 11.5px Manrope, sans-serif">pêche intensive</text>`;
    s += `<text x="${R}" y="${B + 20}" text-anchor="end" ${M}>stock de poissons →</text>`;
    s += `<text x="${L - 6}" y="${Tp - 18}" ${M}>renouvellement annuel</text>`;
    s += `<text x="${L}" y="${B + 44}" ${S}>Le stock se stabilise là où la prise (droites) égale le renouvellement (courbe).</text>`;
    return s;
  })(), "Modèle logistique d’une ressource renouvelable (courbe calculée). Le renouvellement est maximal à mi-capacité ; une pêche trop intensive fait converger le stock vers un niveau très bas, voire vers l’effondrement. Un simulateur du site reprend ce modèle.", "Courbe de renouvellement d’un stock et droites de prélèvement");

  const principes = fig(330, (() => {
    const P = [["1", "Limites claires", "qui a droit à quoi"], ["2", "Règles adaptées", "aux conditions locales"], ["3", "Décisions collectives", "les usagers fixent les règles"], ["4", "Surveillance", "par des responsables"], ["5", "Sanctions graduées", "légères d’abord"], ["6", "Règlement des conflits", "rapide et peu coûteux"], ["7", "Reconnaissance", "par les autorités"], ["8", "Niveaux emboîtés", "pour les grands systèmes"]];
    let s = `<text x="20" y="24" ${T}>Les huit principes d’Ostrom (La Gouvernance des biens communs, 1990)</text>`;
    P.forEach(([n, a, b], i) => {
      const col = i % 4, row = Math.floor(i / 4), x = 20 + col * 152, y = 44 + row * 136;
      s += `<rect x="${x}" y="${y}" width="140" height="122" rx="10" style="fill:var(--card); stroke:var(--note)"/>`;
      s += `<text x="${x + 14}" y="${y + 34}" style="fill:var(--gold); font:400 30px 'Instrument Serif', Georgia, serif">${n}</text>`;
      s += `<text x="${x + 14}" y="${y + 70}" ${T}>${a}</text><text x="${x + 14}" y="${y + 92}" ${S}>${b}</text>`;
    });
    return s;
  })(), "Les principes de conception communs aux institutions qui ont géré durablement des ressources communes. Ostrom les a dégagés en comparant des cas de réussite et d’échec dans le monde entier ; la numérotation suit son livre.", "Grille des huit principes d’Ostrom");

  OEC.notices["biens-communs"] = {
    essentiel: [
      "Un bien commun est une ressource dont il est difficile d’exclure qui que ce soit, mais dont l’usage par l’un réduit ce qui reste aux autres : une pêcherie, un pâturage, une nappe phréatique, une forêt.",
      "Garrett Hardin a soutenu en 1968 que de telles ressources sont condamnées à la surexploitation (la « tragédie des communs »), sauf à les privatiser ou à les confier à l’État.",
      "Elinor Ostrom a montré, à partir de centaines de cas, que des communautés d’usagers savent souvent les gérer durablement par leurs propres règles, et a dégagé les conditions de ces réussites. Il n’y a pas de solution unique : ni le marché, ni l’État, ni la communauté ne sont des panacées."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : la morue de Terre-Neuve", html: `
<p>Pendant près de cinq siècles, les bancs de Terre-Neuve, au large du Canada, comptent parmi les zones de pêche les plus riches du monde. Les marins basques, bretons et portugais y pêchent la morue depuis le XVIe siècle. Dans les années 1960, de grands chalutiers-usines venus d’Europe et d’Union soviétique multiplient les prises. Le Canada étend sa zone économique à 200 milles en 1977 et développe sa propre flotte. Les scientifiques signalent un déclin inquiétant ; les quotas restent élevés. En juillet 1992, le gouvernement canadien décrète un moratoire sur la pêche à la morue du nord : le stock s’est effondré. Environ 30 000 à 40 000 personnes perdent leur emploi à Terre-Neuve. Plus de trente ans plus tard, le stock ne s’est que partiellement reconstitué.</p>
<p>Comment des pêcheurs dont la survie dépendait de la ressource ont-ils pu la détruire ? Pour le biologiste Garrett Hardin, la réponse est structurelle : quand une ressource est ouverte à tous, chacun a intérêt à prélever le plus possible avant les autres. Pour <a href="#eco-ostrom">Elinor Ostrom</a>, cette conclusion est trop rapide : d’autres pêcheurs, ailleurs, ont su éviter la catastrophe. La question est de comprendre pourquoi.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Une catégorie de biens à part</h4>
<p>Les économistes classent les biens selon deux critères. Un bien est <b>rival</b> si son usage par l’un réduit ce qui reste aux autres ; il est <b>excluable</b> si l’on peut empêcher quelqu’un d’en profiter. Les biens privés (une pomme) sont rivaux et excluables ; les <a href="#c-bien-public">biens publics</a> (un phare) ne sont ni l’un ni l’autre. Les biens communs sont rivaux mais difficilement excluables : chaque poisson pêché manque aux autres, mais il est coûteux d’interdire l’accès à la mer.</p>
<h4>2. La logique de la tragédie</h4>
<p>En 1954, l’économiste H. Scott Gordon analyse la pêche en accès libre : tant que la pêche rapporte plus qu’elle ne coûte, de nouveaux bateaux arrivent, jusqu’à ce que tout le surplus soit dissipé et que le stock soit surexploité. En 1968, Hardin popularise l’argument dans la revue Science avec l’image d’un pâturage ouvert à tous : chaque berger qui ajoute une vache en garde tout le bénéfice et ne supporte qu’une fraction du surpâturage, partagé entre tous. Chacun ajoute donc des vaches, et le pâturage est détruit. C’est aussi la structure du dilemme du prisonnier : ce qui est rationnel pour chacun est désastreux pour tous.</p>
<h4>3. Le renouvellement de la ressource</h4>
<p>Une ressource renouvelable, comme un stock de poissons, se reconstitue d’autant plus vite qu’il en reste une quantité moyenne : trop peu de poissons se reproduisent peu, trop de poissons se heurtent aux limites de la nourriture. Il existe donc un niveau de prélèvement qui peut être maintenu indéfiniment, le « rendement maximal durable ». Au-delà, le stock diminue, et chaque année de pêche excessive réduit les prises futures (<a href="#labo" data-lab="4">tester ce mécanisme avec le simulateur</a>).</p>
${regen}
<h4>4. Les deux solutions classiques</h4>
<p>Hardin ne voit que deux issues : la propriété privée, qui donne au propriétaire intérêt à préserver sa ressource, ou la gestion par l’État, qui impose des quotas et les fait respecter. Il parle d’une « coercition mutuelle, mutuellement consentie ». Les deux solutions ont été largement appliquées, avec des succès et des échecs : les quotas individuels transférables en pêche, les nationalisations de forêts dans de nombreux pays en développement.</p>
<h4>5. La troisième voie d’Ostrom</h4>
<p>Ostrom observe que des communautés réelles ne ressemblent pas aux bergers de Hardin. Ceux-ci ne se parlent jamais et ne peuvent pas changer les règles. Les vrais usagers, eux, se connaissent, discutent, fixent des règles, se surveillent et sanctionnent les tricheurs. Elle étudie des dispositifs qui fonctionnent depuis des siècles : les alpages de Törbel en Valais, les huertas de Valence, les forêts villageoises du Japon, les réseaux d’irrigation des Philippines. Elle les compare à des échecs, comme certaines pêcheries de Turquie ou du Sri Lanka, et en tire des principes communs.</p>
${principes}
<h4>6. Pas de panacée</h4>
<p>Ostrom ne prétend pas que l’autogestion fonctionne toujours. Elle échoue quand le groupe est trop grand ou instable, quand la ressource est mal connue, quand les usagers n’ont pas de perspective de long terme, ou quand l’État ne reconnaît pas leurs règles. Sa leçon est plutôt qu’il faut adapter les institutions à chaque ressource et à chaque communauté, et se méfier des solutions uniques imposées d’en haut, qu’elles viennent du marché ou de l’État.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Des centaines de cas de terrain</h4>
<p>Ostrom et ses collègues de l’université de l’Indiana ont constitué des bases de données rassemblant des centaines d’études de cas de pêcheries, de systèmes d’irrigation et de forêts dans le monde entier. Elles montrent que l’autogestion par les usagers n’est pas une curiosité locale, mais une forme d’organisation répandue, souvent plus durable que les gestions imposées. Dans certains pays, la nationalisation des forêts a même détruit des systèmes communautaires qui fonctionnaient, les villageois perdant tout intérêt à protéger une ressource qui ne leur appartenait plus.</p>
<h4>Le pouvoir de la parole en laboratoire</h4>
<p>Avec James Walker et Roy Gardner (1992), Ostrom reproduit le dilemme en laboratoire : des étudiants « pêchent » dans une ressource commune et gagnent de l’argent réel. Sans communication, ils surexploitent la ressource comme le prédit Hardin. Quand ils peuvent discuter, même brièvement et sans engagement contraignant, la surexploitation diminue fortement. Quand ils peuvent en outre se sanctionner mutuellement, à leurs propres frais, ils s’approchent de la gestion optimale. Le titre de leur article résume le résultat : des « engagements sans épée » peuvent fonctionner.</p>
<h4>Les pêcheurs de homard du Maine</h4>
<p>L’anthropologue James Acheson a décrit dans les années 1980 les « gangs du homard » des côtes du Maine : sans base légale, les pêcheurs de chaque port se partagent des territoires, en excluent les étrangers en coupant leurs casiers et respectent des règles de taille et de protection des femelles porteuses d’œufs. Leurs zones sont mieux préservées que les zones en accès libre. L’État du Maine a ensuite reconnu officiellement une forme de cogestion par zones.</p>` }
    ],
    cas: [
      { titre: "Törbel et les alpages valaisans", html: `
<p>Le village valaisan de Törbel, étudié par l’anthropologue Robert Netting puis par Ostrom, gère en commun ses alpages, ses forêts et ses canaux d’irrigation depuis le Moyen Âge ; ses archives remontent à 1224. En 1483, les habitants fondent une association pour administrer ces biens. Une règle de 1517 interdit d’envoyer à l’alpage plus de vaches qu’on ne peut en nourrir l’hiver avec son propre foin, ce qui ajuste automatiquement la charge des pâturages aux ressources de chacun. Un responsable élu contrôle, des amendes sanctionnent les infractions, l’assemblée des propriétaires décide des travaux communs. Les alpages n’ont pas été surexploités. On retrouve des institutions semblables dans toute la Suisse alpine, comme les consortages qui entretiennent les bisses du Valais.</p>` },
      { titre: "L’Islande et les quotas individuels transférables", html: `
<p>Face à l’épuisement de ses stocks de hareng puis de morue, l’Islande généralise en 1990 un système de quotas individuels transférables : l’État fixe chaque année la prise totale autorisée selon les avis scientifiques, et chaque navire reçoit une part de ce total, qu’il peut vendre ou louer. C’est une solution de marché à la Hardin. Les stocks se sont globalement mieux portés et la pêche est devenue plus rentable. Mais les quotas se sont concentrés entre les mains de quelques grandes entreprises, des villages côtiers ont perdu leur flotte, et la question de la propriété de cette ressource nationale est devenue un sujet politique majeur. Le cas montre qu’une solution efficace peut poser de lourdes questions de répartition.</p>` },
      { titre: "Les communs de la connaissance", html: `
<p>Dans ses dernières années, Ostrom s’est intéressée avec Charlotte Hess aux communs de la connaissance : bibliothèques, archives scientifiques, logiciels libres, encyclopédies collaboratives. Ces ressources ne sont pas rivales comme les poissons, puisqu’un texte lu par l’un reste disponible pour les autres, mais elles posent des problèmes semblables de contribution, de qualité et de règles. Wikipédia, par exemple, repose sur des règles écrites, des procédures de résolution des conflits, des rôles de surveillance et des sanctions graduées qui rappellent étonnamment les principes d’Ostrom.</p>` }
    ],
    objections: `
<h4>1. Ce qui marche dans un village marche-t-il pour la planète ?</h4>
<p>Les réussites étudiées par Ostrom concernent des communautés stables de quelques centaines ou milliers de personnes, qui se connaissent et vivent sur place. L’atmosphère, les océans ou la biodiversité mondiale impliquent des milliards d’usagers, des États souverains et des générations futures. Ostrom proposait une gouvernance « polycentrique », à plusieurs niveaux, mais la difficulté reste immense.</p>
<h4>2. Les communs peuvent être excluants</h4>
<p>Les règles qui protègent une ressource excluent souvent les étrangers, les nouveaux venus ou les plus pauvres. Les « gangs du homard » coupent les casiers des intrus ; les communautés villageoises réservaient l’accès aux familles anciennes. Une gestion durable n’est pas forcément une gestion équitable.</p>
<h4>3. Les incitations de marché restent puissantes</h4>
<p>Les défenseurs des droits de propriété soulignent que les quotas transférables, en Islande ou en Nouvelle-Zélande, ont permis de rétablir des stocks là où les règles communautaires n’existaient pas ou avaient échoué. Pour eux, l’autogestion est une solution parmi d’autres, adaptée à certaines situations seulement.</p>
<h4>4. Une liste de conditions plutôt qu’une théorie ?</h4>
<p>Certains critiques jugent que les huit principes décrivent les réussites sans permettre de prédire lesquelles réussiront. Ostrom a répondu en développant un cadre d’analyse des institutions (IAD) et en multipliant les études comparatives, mais la question de la généralisation reste ouverte.</p>`,
    ecoles: `
<p><b><a href="#eco-aristote">Aristote</a></b> notait déjà que « ce qui est commun au plus grand nombre fait l’objet des soins les moins attentifs », intuition reprise par Hardin.</p>
<p><b>H. Scott Gordon</b> (1954) et Anthony Scott (1955) ont fondé l’économie de la pêche en montrant la dissipation de la rente en accès libre.</p>
<p><b>Garrett Hardin</b> (1968) a popularisé la tragédie et la nécessité d’une coercition mutuelle (<a href="#controverses" data-debat="ostrom-hardin">voir son débat avec Ostrom</a>).</p>
<p><b>Ronald Coase</b> rappelait que la définition des droits de propriété est la clé ; Ostrom montre que ces droits peuvent être collectifs.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> aurait reconnu dans les règles villageoises un « ordre spontané », issu de l’expérience plutôt que d’un plan.</p>
<p><b>Les mouvements des communs</b> contemporains (logiciels libres, coopératives, jardins partagés) se réclament d’Ostrom, parfois au-delà de ce qu’elle affirmait elle-même.</p>`,
    source: {
      titre: "Garrett Hardin, « The Tragedy of the Commons », Science, 1968",
      texte: "La ruine est la destination vers laquelle tous les hommes se précipitent, chacun poursuivant son propre intérêt dans une société qui croit à la liberté des communs. La liberté dans un commun apporte la ruine à tous.",
      notes: `
<p><b>Le contexte.</b> Hardin est biologiste, et son article porte d’abord sur la croissance démographique, qu’il juge impossible à contrôler par l’appel à la conscience. Le pâturage n’est qu’une illustration ; c’est pourtant elle qui est restée.</p>
<p><b>Un texte qui a fait école.</b> L’article est l’un des plus cités de l’histoire de la revue Science. Il a servi à justifier des privatisations comme des nationalisations de ressources naturelles dans le monde entier.</p>
<p><b>La correction de Hardin lui-même.</b> En 1998, Hardin reconnaît qu’il aurait dû intituler son article « La tragédie des communs non gérés ». C’est précisément la distinction qu’Ostrom avait mise au centre de son œuvre : un commun n’est pas un accès libre, c’est une ressource partagée sous des règles.</p>`
    },
    quiz: [
      { q: "Qu’est-ce qui caractérise un bien commun ?",
        o: ["Il est non rival et non excluable", "Il est rival mais difficilement excluable", "Il appartient toujours à l’État", "Il est gratuit et inépuisable"], c: 1,
        e: "Chaque usage réduit ce qui reste aux autres (rivalité), mais il est coûteux d’interdire l’accès (non-excluabilité). D’où le risque de surexploitation." },
      { q: "Quelles solutions Hardin propose-t-il en 1968 ?",
        o: ["La gestion par les usagers eux-mêmes", "La privatisation ou la gestion par l’État", "La suppression de la ressource", "L’appel à la conscience des usagers"], c: 1,
        e: "Hardin ne voit que la propriété privée ou la coercition publique ; il juge l’appel à la conscience inefficace." },
      { q: "Qu’ont montré les expériences de laboratoire d’Ostrom, Walker et Gardner ?",
        o: ["Que la communication ne change rien", "Que la simple possibilité de discuter réduit fortement la surexploitation", "Que seules les amendes de l’État fonctionnent", "Que les participants coopèrent toujours"], c: 1,
        e: "Sans communication, les participants surexploitent ; avec quelques minutes de discussion, et plus encore avec des sanctions mutuelles, la gestion s’améliore nettement." },
      { q: "Quelle règle de Törbel ajuste la charge des alpages aux ressources de chacun ?",
        o: ["Un tirage au sort annuel des pâturages", "L’interdiction d’envoyer à l’alpage plus de vaches qu’on ne peut en nourrir l’hiver", "Un impôt sur chaque vache", "La vente des alpages au plus offrant"], c: 1,
        e: "La règle de 1517 lie le droit d’usage estival à la capacité de chacun à nourrir ses bêtes en hiver avec son propre foin." },
      { q: "Quelle limite le cas islandais des quotas transférables illustre-t-il ?",
        o: ["Les stocks se sont effondrés", "Une solution efficace pour la ressource peut concentrer les droits et poser des problèmes de répartition", "Les quotas ont été interdits", "Les pêcheurs ont refusé de pêcher"], c: 1,
        e: "Les stocks et la rentabilité se sont améliorés, mais les quotas se sont concentrés et certains villages ont perdu leur pêche." }
    ],
    ouverte: {
      q: "Les glaciers et les ressources en eau des Alpes sont-ils des biens communs ? Comment les principes d’Ostrom pourraient-ils s’appliquer à la gestion de l’eau en Suisse face au réchauffement ?",
      r: "L’eau des Alpes présente bien les caractéristiques d’un commun : rivale (l’eau prélevée pour l’irrigation, la neige artificielle ou l’hydroélectricité manque aux autres usages) et difficile à exclure. La Suisse dispose déjà d’institutions proches des principes d’Ostrom : consortages des bisses, droits d’eau communaux, gestion par bassins, et un fédéralisme qui emboîte les niveaux de décision (principe 8). Le réchauffement modifie toutefois les conditions : la fonte des glaciers augmente les débits à court terme puis les réduira, et les conflits d’usage entre agriculture, tourisme, énergie et écosystèmes vont s’intensifier. Les principes suggèrent des limites claires des droits d’eau, des règles révisées par les usagers eux-mêmes, une surveillance partagée des débits et des mécanismes de résolution des conflits entre communes et cantons. Mais une partie du problème, le climat lui-même, dépasse toute gestion locale."
    },
    lectures: [
      ["Accessible", "Elinor Ostrom, La Gouvernance des biens communs (1990), traduction française 2010. Le livre fondateur, riche en études de cas."],
      ["Accessible", "Benjamin Coriat (dir.), Le Retour des communs, 2015, sur les prolongements contemporains."],
      ["Intermédiaire", "Garrett Hardin, « The Tragedy of the Commons », Science, 1968, et son « Extensions of “The Tragedy of the Commons” », Science, 1998."],
      ["Intermédiaire", "Elinor Ostrom, « Au-delà des marchés et des États », discours du prix Nobel, 2009."],
      ["Recherche", "Elinor Ostrom, James Walker et Roy Gardner, « Covenants with and without a Sword », American Political Science Review, 1992 ; H. Scott Gordon, « The Economic Theory of a Common-Property Resource: The Fishery », Journal of Political Economy, 1954."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>La morue disparue</h3>
<p>Au large du Canada, la pêche à la morue a nourri des générations de pêcheurs pendant cinq siècles. En 1992, le stock s’effondre et la pêche est interdite : des dizaines de milliers d’emplois disparaissent. Comment des pêcheurs qui vivaient de cette ressource ont-ils pu la détruire ?</p>
<h3>La tragédie des communs</h3>
<p>En 1968, le biologiste Garrett Hardin propose une explication. Imaginez un pâturage ouvert à tous. Chaque berger qui ajoute une vache en garde tout le profit, mais les dégâts du surpâturage sont partagés entre tous. Chacun ajoute donc des vaches, et le pâturage est détruit. Pour Hardin, il n’y a que deux solutions : diviser la ressource en propriétés privées, ou la confier à l’État.</p>
<h3>La réponse d’Ostrom</h3>
<p><a href="#eco-ostrom">Elinor Ostrom</a>, prix Nobel 2009, a étudié des centaines de cas réels. Elle a découvert que de nombreuses communautés gèrent très bien leurs ressources communes depuis des siècles, sans privatisation ni État. À Törbel, en Valais, les villageois gèrent leurs alpages depuis le Moyen Âge : personne ne peut y envoyer plus de vaches qu’il ne peut en nourrir l’hiver. Le secret : des règles décidées ensemble, une surveillance mutuelle et des sanctions progressives.</p>
${principes}
<h3>À retenir</h3>
<p>Les ressources partagées ne sont pas condamnées, mais elles ont besoin de règles adaptées. Il n’existe pas de solution unique : selon les cas, la communauté, le marché ou l’État peuvent être les mieux placés. La notice complète présente les preuves et les débats.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      depart: "L’effondrement de la morue de Terre-Neuve en 1992.",
      raisonnement: "Six étapes : définition, tragédie, renouvellement, solutions classiques, troisième voie, pas de panacée.",
      preuves: "Des centaines de cas de terrain, les expériences de laboratoire, les gangs du homard.",
      cas: "Törbel et les alpages valaisans, l’Islande et ses quotas, les communs de la connaissance.",
      objections: "Changer d’échelle, communs excluants, efficacité des marchés, portée des principes.",
      ecoles: "Aristote, Gordon et Scott, Hardin, Coase, Hayek, les mouvements des communs.",
      source: "Hardin, 1968, et sa propre correction de 1998.",
      quiz: "Cinq questions corrigées et une question sur l’eau des Alpes.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
