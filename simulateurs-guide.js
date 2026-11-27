/* Œconomia — mode d’emploi des simulateurs.
   Pour chaque simulateur (dans l’ordre de labs.js) : la question posée, comment lire l’écran, les mots à connaître,
   trois expériences guidées (qui règlent le simulateur, posent une question et donnent l’explication),
   ce qu’il faut retenir et ce que le modèle simplifie.
   Actions d’une expérience : ["set", id du curseur, valeur], ["check", id de la case, vrai/faux],
   ["click", sélecteur, nombre de fois], ["wait", millisecondes]. */
(function () {
  "use strict";
  const G = [
    /* ---------- 1. Offre et demande ---------- */
    { question: "Pourquoi le prix d’un produit monte-t-il ou baisse-t-il ?",
      intro: "Sur un marché, le prix se fixe là où ce que les acheteurs veulent acheter rencontre ce que les vendeurs veulent vendre. Provoquez des événements, une mauvaise récolte, une mode, une taxe, et regardez comment réagissent le prix et la quantité vendue.",
      voir: [
        "<b>La droite verte (Demande)</b> : combien les acheteurs veulent acheter à chaque prix. Plus c’est cher, moins ils achètent.",
        "<b>La droite violette (Offre)</b> : combien les vendeurs veulent vendre à chaque prix. Plus c’est cher, plus ils ont intérêt à produire.",
        "<b>Le point doré</b> : l’équilibre, là où les deux droites se croisent. Il donne le prix du marché (axe vertical) et la quantité vendue (axe horizontal).",
        "<b>Les zones colorées</b> : le gain des acheteurs (vert) et celui des vendeurs (violet). Avec une taxe apparaissent la recette de l’État (doré) et la perte sèche (rouge)."],
      comment: "lancez une expérience ci-contre, ou choisissez un scénario, déplacez les curseurs, ou encore attrapez une droite avec la souris ou le doigt pour la déplacer.",
      mots: [
        ["Choc de demande", "Les acheteurs veulent plus (valeur positive) ou moins (valeur négative) du produit, à prix égal : effet de mode, hausse des revenus, produit concurrent devenu plus cher…"],
        ["Choc d’offre (coûts)", "Produire coûte plus cher (valeur positive) ou moins cher (valeur négative) : mauvaise récolte, hausse des salaires ou de l’énergie, progrès technique…"],
        ["Taxe par unité", "Un montant prélevé par l’État sur chaque unité vendue."],
        ["Surplus total", "Le gain total que l’échange procure : celui des acheteurs, celui des vendeurs et la recette de l’État."],
        ["Perte sèche", "Ce que tout le monde perd parce que des échanges utiles n’ont plus lieu, par exemple à cause d’une taxe."]],
      exps: [
        { titre: "Une mauvaise récolte", pred: {"q": "Que vont devenir le prix et la quantité vendue ?", "o": ["Le prix monte, la quantité vendue baisse", "Le prix et la quantité vendue montent", "Le prix baisse, la quantité vendue monte"], "c": 0}, consigne: "Un gel détruit une partie de la récolte d’oranges : produire coûte plus cher.",
          faire: [["click", '[data-sc="froid"]']],
          question: "Que deviennent le prix et la quantité vendue ?",
          reponse: "La droite d’offre monte : à chaque prix, les producteurs proposent moins d’oranges. Le prix grimpe de 47,3 à 60,7, et la quantité vendue tombe de 53,3 à 36,7. Les acheteurs qui ne veulent pas payer plus renoncent. Un choc d’offre fait bouger le prix et la quantité <b>en sens contraire</b>." },
        { titre: "Un produit à la mode", pred: {"q": "Que vont devenir le prix et la quantité vendue ?", "o": ["Le prix monte, la quantité vendue baisse", "Le prix et la quantité vendue montent", "Le prix baisse, la quantité vendue ne change pas"], "c": 1}, consigne: "Le quinoa devient à la mode : à prix égal, les gens en veulent davantage.",
          faire: [["click", '[data-sc="mode"]']],
          question: "Cette fois, que deviennent le prix et la quantité ?",
          reponse: "La droite de demande se déplace vers la droite. Le prix monte (de 47,3 à 59) et la quantité vendue aussi (de 53,3 à 70). Un choc de demande fait bouger le prix et la quantité <b>dans le même sens</b>. À plus long terme, ce prix élevé attire de nouveaux producteurs, ce qui peut le faire redescendre." },
        { titre: "Une taxe", pred: {"q": "Qui va payer la taxe ?", "o": ["Seulement les acheteurs, qui la paient à la caisse", "Seulement les vendeurs, qui la versent à l’État", "Les deux, chacun une partie"], "c": 2}, consigne: "L’État prélève une taxe de 25 sur chaque unité vendue, comme sur le tabac.",
          faire: [["click", '[data-sc="taxe"]']],
          question: "Qui paie vraiment la taxe : les acheteurs ou les vendeurs ?",
          reponse: "Les deux. Les acheteurs paient 60,7 au lieu de 47,3 (13,4 de plus), et les vendeurs ne touchent plus que 35,7 au lieu de 47,3 (11,6 de moins). Le rectangle doré est la recette de l’État. Le triangle rouge est la perte sèche : des ventes qui auraient profité à tous n’ont plus lieu." }],
      retenir: "Le prix d’équilibre résume deux forces : ce que les acheteurs sont prêts à payer et ce que coûte la production. Un événement qui touche l’offre fait bouger le prix et la quantité en sens contraire ; un événement qui touche la demande les fait bouger dans le même sens.",
      limites: "Le modèle suppose de nombreux acheteurs et vendeurs, dont aucun ne peut fixer le prix seul, et des réactions immédiates. Il ignore les stocks, le temps d’adaptation, la publicité et les situations de monopole.",
      liens: ["c:offre-demande", "c:surplus", "eco:marshall", "parcours:marche"] },

    /* ---------- 2. Multiplicateur ---------- */
    { question: "Quand l’État dépense 50 milliards, combien l’économie gagne-t-elle au total ?",
      intro: "L’argent dépensé par l’État devient le salaire ou le bénéfice de quelqu’un, qui en dépense à son tour une partie, et ainsi de suite. Le simulateur montre ces vagues de dépense successives et calcule leur effet total.",
      voir: [
        "<b>Chaque barre est une vague de dépense.</b> La première, dorée, est la dépense de l’État ; les suivantes, vertes, sont les dépenses qu’elle entraîne.",
        "<b>Les barres s’empilent</b> : la hauteur atteinte donne le revenu total créé jusque-là.",
        "<b>La ligne rouge pointillée</b> est la limite : l’effet total, une fois toutes les vagues passées."],
      comment: "lancez une expérience ci-contre, ou réglez les trois curseurs puis cliquez sur « Injecter la dépense » pour voir les vagues arriver une à une.",
      mots: [
        ["Dépense publique initiale", "Ce que l’État dépense au départ, par exemple pour construire des écoles ou des routes."],
        ["Part du revenu consommée", "Sur 1 franc gagné, la part que l’on dépense. 0,8 signifie 80 centimes dépensés et 20 centimes épargnés."],
        ["Part du revenu dépensée en importations", "Sur 1 franc de revenu, la part qui achète des produits étrangers. Elle fait partie de ce qui est dépensé, mais cet argent quitte le pays et n’y fait plus tourner l’économie."],
        ["Multiplicateur", "Le nombre de francs de revenu créés au total par 1 franc de dépense publique."]],
      exps: [
        { titre: "Des ménages dépensiers", pred: {"q": "Les 50 milliards vont créer au total…", "o": ["exactement 50 milliards de revenus", "un peu plus de 50 milliards de revenus", "beaucoup plus, des centaines de milliards"], "c": 2}, consigne: "Les ménages dépensent 90 % de ce qu’ils gagnent, et uniquement dans le pays.",
          faire: [["set", "muI", 50], ["set", "muC", 0.9], ["set", "muM", 0], ["click", "#muGo"]],
          question: "Combien de revenus créent les 50 milliards de départ ?",
          reponse: "500 milliards : le multiplicateur vaut 10. Chaque vague ne perd que 10 % de la précédente, donc il en faut beaucoup avant qu’elles s’épuisent. C’est un cas d’école : en réalité, une partie de chaque franc part toujours en impôts, en épargne et en achats à l’étranger." },
        { titre: "Un petit pays très ouvert", pred: {"q": "Par rapport à l’expérience précédente, l’effet de la dépense sera…", "o": ["nettement plus fort", "à peu près le même", "nettement plus faible"], "c": 2}, consigne: "Comme en Suisse, une grande partie de ce qu’on achète vient de l’étranger : sur 80 centimes dépensés par franc gagné, 40 partent à l’étranger.",
          faire: [["set", "muI", 50], ["set", "muC", 0.8], ["set", "muM", 0.4], ["click", "#muGo"]],
          question: "L’effet de la dépense publique est-il aussi fort ?",
          reponse: "Non : le multiplicateur tombe à 1,7 et les 50 milliards n’en créent que 83. À chaque vague, une grande partie de l’argent part à l’étranger. C’est pourquoi une relance a moins d’effet dans une petite économie ouverte que dans un grand pays comme les États-Unis." },
        { titre: "Des ménages qui épargnent davantage", pred: {"q": "Dans ce modèle, si les ménages dépensent une plus petite part de chaque franc gagné, l’effet de la relance…", "o": ["augmente", "ne change pas", "diminue"], "c": 2}, consigne: "Les ménages décident d’épargner davantage : sur chaque franc de revenu supplémentaire, ils n’en dépensent plus que 50 centimes.",
          faire: [["set", "muI", 50], ["set", "muC", 0.5], ["set", "muM", 0.1], ["click", "#muGo"]],
          question: "Que devient l’effet de la relance dans ce modèle ?",
          reponse: "Dans ce modèle simple, il s’effondre : le multiplicateur tombe à 1,7 (83 milliards au total). Attention pourtant : les études trouvent souvent l’inverse en récession. Alan Auerbach et Yuriy Gorodnichenko (2012) estiment un multiplicateur nettement plus élevé en récession qu’en expansion : des machines et des travailleurs sont inemployés, la dépense publique ne prend pas la place de l’investissement privé, la banque centrale ne relève pas ses taux, et beaucoup de ménages à court d’argent dépensent tout revenu supplémentaire. Le modèle simple ne contient aucun de ces mécanismes." }],
      retenir: "L’effet d’une dépense dépend de ce que deviennent les revenus qu’elle crée : plus ils sont redépensés dans le pays, plus l’effet total est grand. Le multiplicateur vaut 1 ÷ (1 − c + m), où c est la part du revenu dépensée et m la part dépensée en importations : c’est la forme des manuels, reprise dans les exercices.",
      limites: "Le modèle ignore les impôts, la hausse possible des taux d’intérêt, la réaction de la banque centrale et le fait que l’État doit emprunter ou prélever cet argent. Les économistes débattent encore de la vraie valeur du multiplicateur, souvent estimée entre 0,5 et 2.",
      liens: ["c:multiplicateur", "c:demande-effective", "c:paradoxe-epargne", "eco:keynes", "parcours:chomage"] },

    /* ---------- 3. Avantage comparatif ---------- */
    { question: "Un pays meilleur en tout a-t-il intérêt à commercer avec un pays moins efficace ?",
      intro: "Deux pays, l’Angleterre et le Portugal, produisent deux biens, du drap et du vin, avec un nombre limité d’heures de travail. Le simulateur compare ce que le monde produit quand chaque pays fabrique tout lui-même, et quand chacun se spécialise.",
      voir: [
        "<b>Chaque case représente 10 heures de travail.</b> Dorée : heures consacrées au drap. Violette : heures consacrées au vin.",
        "<b>À droite, la production mondiale</b> : toujours 2 draps, et une quantité de vin qui dépend de l’organisation choisie.",
        "<b>Les deux boutons au-dessus du dessin</b> : « Chacun produit tout » (sans échange) et « Chacun se spécialise »."],
      comment: "lancez une expérience ci-contre, ou passez d’un bouton à l’autre pour comparer, puis changez le nombre d’heures nécessaires dans chaque pays.",
      mots: [
        ["Heures pour 1 drap, pour 1 vin", "Le travail nécessaire pour produire une unité. Moins d’heures signifie plus efficace."],
        ["Coût relatif", "Ce à quoi on renonce pour produire un bien. Si un drap prend 100 heures et un vin 120, faire un drap coûte 100 ÷ 120 = 0,83 vin."],
        ["Autarcie", "Chaque pays produit tout lui-même, sans échanger."],
        ["Avantage comparatif", "Un pays a un avantage comparatif dans le bien qu’il produit au coût relatif le plus bas, même s’il est moins efficace que l’autre en tout."]],
      exps: [
        { titre: "L’exemple de Ricardo", pred: {"q": "Le Portugal est meilleur dans les deux productions. Si chacun se spécialise, le monde…", "o": ["ne gagne rien : le Portugal devrait tout produire", "produit davantage avec les mêmes heures", "produit moins"], "c": 1}, consigne: "Le Portugal produit le drap et le vin avec moins d’heures que l’Angleterre : il est meilleur dans les deux.",
          faire: [["set", "rEc", 100], ["set", "rEw", 120], ["set", "rPc", 90], ["set", "rPw", 80], ["click", '[data-m="0"]'], ["wait", 900], ["click", '[data-m="1"]']],
          question: "Le monde gagne-t-il quelque chose si chacun se spécialise ?",
          reponse: "Oui : avec les mêmes heures et toujours 2 draps, le monde obtient 2,29 vins au lieu de 2. L’Angleterre fait le drap, où son retard est le plus faible ; le Portugal se concentre sur le vin, où son avance est la plus grande. Les deux peuvent ensuite échanger et y gagner." },
        { titre: "Mêmes coûts relatifs", pred: {"q": "Dans les deux pays, un drap coûte autant d’heures qu’un vin. Se spécialiser rapporte…", "o": ["un gain important", "un petit gain", "aucun gain"], "c": 2}, consigne: "Le Portugal est 20 % plus efficace partout : 80 heures pour chaque bien, contre 100 en Angleterre.",
          faire: [["set", "rEc", 100], ["set", "rEw", 100], ["set", "rPc", 80], ["set", "rPw", 80], ["click", '[data-m="1"]']],
          question: "Y a-t-il encore un gain à se spécialiser ?",
          reponse: "Non : dans les deux pays, un drap coûte exactement un vin. Se spécialiser ne libère aucune heure. Ce qui crée le gain, ce n’est pas d’être meilleur, c’est une <b>différence de coûts relatifs</b>." },
        { titre: "Chacun son point fort", pred: {"q": "Chaque pays est très bon dans un seul bien. Le gain de la spécialisation sera…", "o": ["plus grand que dans l’exemple de Ricardo", "le même que dans l’exemple de Ricardo", "plus petit que dans l’exemple de Ricardo"], "c": 0}, consigne: "L’Angleterre est très efficace pour le drap, le Portugal pour le vin.",
          faire: [["set", "rEc", 60], ["set", "rEw", 140], ["set", "rPc", 120], ["set", "rPw", 60], ["click", '[data-m="1"]']],
          question: "Le gain de la spécialisation est-il plus grand ?",
          reponse: "Beaucoup plus : le monde obtient 3,57 vins au lieu de 2. Plus les coûts relatifs diffèrent, plus la spécialisation rapporte. C’est le cas le plus intuitif, celui de l’avantage absolu décrit par Adam Smith ; l’apport de Ricardo est de montrer que le gain existe aussi dans le premier cas." }],
      retenir: "Chaque pays a intérêt à se spécialiser dans ce qu’il fait relativement le mieux, même s’il est moins efficace que l’autre en tout. Le gain vient des différences de coûts relatifs.",
      limites: "Le modèle suppose que les travailleurs passent sans frais du drap au vin et ignore les coûts de transport. Il ne dit pas comment le gain est partagé entre les pays, ni qu’à l’intérieur de chaque pays il y a des gagnants et des perdants.",
      liens: ["c:avantage-comparatif", "c:cout-opportunite", "eco:ricardo", "q:commerce", "parcours:commerce"] },

    /* ---------- 4. Marché émergent ---------- */
    { question: "Faut-il des acheteurs et des vendeurs très habiles pour qu’un marché trouve le bon prix ?",
      intro: "Quarante acheteurs et quarante vendeurs proposent des prix au hasard. Chaque acheteur a un prix maximum qu’il ne dépassera jamais, chaque vendeur un prix minimum en dessous duquel il ne vend pas. Personne ne connaît le prix « juste ». Que se passe-t-il ?",
      voir: [
        "<b>Chaque point violet est un échange conclu</b>, placé à son prix (axe vertical), dans l’ordre où il a eu lieu.",
        "<b>La ligne verte pointillée</b> est le prix d’équilibre théorique, celui où l’offre égale la demande.",
        "<b>Les traits verticaux</b> séparent les séances de marché. Il y en a 8 ; à chaque séance, tous les participants reviennent."],
      comment: "lancez une expérience ci-contre, ou cliquez sur « Ouvrir le marché » et regardez où se placent les points.",
      mots: [
        ["Prix théorique", "Le prix d’équilibre, calculé à partir des prix limites de tous les participants. Eux ne le connaissent pas."],
        ["Dernier prix", "Le prix du dernier échange conclu."],
        ["Séance", "Une journée de marché. À la fin de chaque séance, chacun repart avec au plus un achat ou une vente."],
        ["Efficacité", "La part du gain maximal possible que les échanges ont réellement produit. 100 % : tous les échanges utiles ont eu lieu."]],
      exps: [
        { titre: "Ouvrir le marché", pred: {"q": "Les participants font des offres au hasard. Les prix des échanges vont…", "o": ["rester dispersés au hasard, sans tendance", "se rapprocher du prix d’équilibre", "monter sans arrêt, partie après partie"], "c": 1}, consigne: "Le marché ouvre : chacun lance des offres au hasard, sans jamais vendre à perte ni acheter au-dessus de son maximum.",
          faire: [["click", "#mkReset"], ["click", "#mkGo"]],
          question: "Où se placent les prix des échanges au fil des séances ?",
          reponse: "Les points se resserrent autour de la ligne verte et l’efficacité dépasse souvent 90 %. Aucun participant ne calcule rien : ce sont les règles du marché, où l’on garde toujours la meilleure offre d’achat et la meilleure offre de vente, qui font le travail." },
        { titre: "Vingt acheteurs de plus", pred: {"q": "Vingt acheteurs arrivent. Les prix des échanges vont…", "o": ["monter", "baisser", "ne pas changer"], "c": 0}, consigne: "Vingt nouveaux acheteurs arrivent sur le marché : la demande augmente d’un coup.",
          faire: [["click", "#mkReset"], ["click", "#mkShock"], ["click", "#mkGo"]],
          question: "Comment le marché réagit-il ?",
          reponse: "Le prix d’équilibre monte, et les prix des échanges suivent. Personne n’a annoncé la hausse : le marché s’ajuste de lui-même. On parle souvent de « main invisible », mais Adam Smith n’a jamais employé l’expression à propos de la formation des prix." },
        { titre: "Recommencer", pred: {"q": "Avec d’autres participants à chaque partie, le prix d’équilibre…", "o": ["sera le même, quels que soient les participants", "changera, mais les échanges le rejoindront", "changera, et les échanges ne le rejoindront pas"], "c": 1}, consigne: "Relancez le marché plusieurs fois : les prix limites des participants sont tirés au hasard à chaque partie.",
          faire: [["click", "#mkReset"], ["click", "#mkGo"]],
          question: "Le prix d’équilibre est-il toujours le même ? Les prix le rejoignent-ils à chaque fois ?",
          reponse: "Le prix d’équilibre change d’une partie à l’autre, mais les échanges convergent presque toujours vers lui. En 1993, les économistes Gode et Sunder ont montré ainsi qu’une grande part de l’efficacité d’un marché tient à ses règles plutôt qu’à l’intelligence de ses participants. Vernon Smith, qui avait obtenu des résultats proches avec des étudiants dès 1962, a reçu le prix Nobel en 2002." }],
      retenir: "Un marché bien organisé peut trouver un prix efficace même quand ses participants sont peu informés et ne calculent rien. Une grande part de cette efficacité vient des règles de l’échange.",
      limites: "Ici, personne ne ment, ne s’entend avec les autres ni n’a de pouvoir sur le prix. Dans la réalité, les monopoles, les ententes, les bulles spéculatives et le manque d’information peuvent empêcher le marché de converger.",
      liens: ["c:offre-demande", "c:equilibre-general", "eco:smith", "eco:hayek"] },

    /* ---------- 5. Tragédie des communs ---------- */
    { question: "Pourquoi une ressource partagée, comme un lac de pêche, risque-t-elle d’être épuisée, et comment l’éviter ?",
      intro: "Vous dirigez une flotte de pêche sur un lac partagé avec trois autres flottes. À chaque saison, vous choisissez combien de bateaux envoyer. Plus vous pêchez, plus vous gagnez tout de suite, mais moins il reste de poissons pour la suite. La partie dure 12 saisons.",
      voir: [
        "<b>Le lac</b> : les petits poissons représentent le stock ; les bateaux colorés sont ceux des quatre flottes.",
        "<b>Le tableau</b> : pour chaque flotte, le nombre de bateaux, la prise de la saison et le gain cumulé depuis le début.",
        "<b>La courbe sous le lac</b> : le stock de poissons saison après saison. La ligne grise (500) marque le stock qui permet la plus grande pêche durable ; la ligne dorée (650), celui qui rapporte le plus aux flottes, une fois le coût des bateaux payé."],
      comment: "lancez une expérience ci-contre (elle joue les 12 saisons pour vous), ou choisissez vos bateaux avec le curseur puis cliquez sur « Partir en mer », saison après saison.",
      mots: [
        ["Vos concurrents", "Sans règles, Brutus commence avec 8 bateaux et en ajoute 2 à chaque saison tant qu’un bateau lui rapporte plus qu’il ne coûte. Prudence sort toujours 4 bateaux. Le Copieur imite la moyenne des autres ; avec les règles, il reste dans le quota."],
        ["Coût d’un bateau", "3 par saison. Quand il reste peu de poissons, un bateau rapporte à peine ce qu’il coûte."],
        ["Renouvellement du stock", "Les poissons se reproduisent : le stock se reconstitue d’autant plus vite qu’il est proche de la moitié du maximum (500)."],
        ["Règles d’Ostrom", "Un quota de 5 bateaux par flotte (20 en tout) décidé ensemble, une surveillance mutuelle qui coûte 1 par saison à chaque flotte, et des amendes qui augmentent en cas de récidive. Les amendes sont reversées aux flottes qui respectent le quota. Le gain total serait le plus grand avec environ 16 bateaux en tout, la pêche durable la plus grande avec environ 22 : le quota se situe entre les deux."]],
      exps: [
        { titre: "Pêcher au maximum", pred: {"q": "Sans règles, avec 10 bateaux à chaque saison, le lac va…", "o": ["rester en bonne santé, les poissons se renouvelant", "être surexploité, un bateau rapportant à peine son coût", "se vider entièrement de ses poissons en quelques saisons"], "c": 1}, consigne: "Vous envoyez 10 bateaux à chaque saison, sans aucune règle commune.",
          faire: [["check", "ostrom", false], ["set", "boats", 10], ["click", "#sail", 12]],
          question: "Où finissez-vous au classement ? Qu’est devenu le lac, et combien les quatre flottes ont-elles gagné ensemble ?",
          reponse: "Vous finissez deuxième. Brutus ajoute des bateaux tant que la pêche lui rapporte, le Copieur suit, et le stock tombe de 800 à environ 160 poissons. À la fin, un bateau rapporte à peine ce qu’il coûte, et les quatre flottes n’ont gagné ensemble qu’environ 290. Chacun a intérêt à pêcher plus ; tous y perdent : c’est la « tragédie des communs » décrite par Garrett Hardin en 1968. Le lac n’est pas vide, mais il ne rapporte presque plus rien : les économistes parlent de rente dissipée (Scott Gordon, 1954)." },
        { titre: "Être raisonnable, seul", pred: {"q": "Si vous êtes le seul à pêcher avec prudence, vous finirez…", "o": ["premier", "au milieu du classement", "dernier"], "c": 2}, consigne: "Vous n’envoyez que 2 bateaux par saison pour protéger le lac, mais les autres ne changent rien.",
          faire: [["check", "ostrom", false], ["set", "boats", 2], ["click", "#sail", 12]],
          question: "Votre prudence est-elle récompensée ?",
          reponse: "Non : vous finissez dernier, et le lac tombe quand même à environ 330 poissons. Les poissons que vous laissez sont pêchés par Brutus, qui ajoute des bateaux tant que cela lui rapporte. Voilà le cœur du dilemme : ce qui est sage pour le groupe ne rapporte pas à celui qui le fait seul." },
        { titre: "Les règles d’Ostrom", pred: {"q": "Avec les règles d’Ostrom, les quatre flottes gagneront ensemble…", "o": ["moins que sans règles", "autant que sans règles", "davantage que sans règles"], "c": 2}, consigne: "Les quatre flottes adoptent ensemble un quota de 5 bateaux, surveillé, avec des amendes. Vous le respectez.",
          faire: [["check", "ostrom", true], ["set", "boats", 5], ["click", "#sail", 12]],
          question: "Que deviennent le lac et les gains ?",
          reponse: "Après une première amende, Brutus respecte le quota. Le lac garde environ 600 poissons, et les quatre flottes gagnent ensemble environ 790, contre environ 560 sans règles avec la même stratégie de votre part (5 bateaux). Vous finissez premier. La comparaison vaut pour toutes les stratégies : avec 2 ou 10 bateaux aussi, le groupe gagne davantage avec les règles. C’est la leçon d’Elinor Ostrom : des communautés savent gérer une ressource commune si elles fixent elles-mêmes des règles, les surveillent et les sanctionnent." }],
      retenir: "Quand une ressource est partagée sans règles, chacun a intérêt à en prendre davantage, et tous finissent par y perdre. Mais ce n’est pas une fatalité : des règles décidées ensemble, contrôlées et sanctionnées, permettent de la préserver.",
      limites: "Les concurrents suivent des règles simples et ne se parlent pas. Dans la réalité, les pêcheurs discutent, négocient, trichent parfois, et l’État peut aussi intervenir avec des quotas, des permis ou des taxes. Ostrom elle-même limitait ses principes aux ressources de taille locale, où les usagers se connaissent : pour la haute mer ou le climat, la logique de Hardin reste un vrai problème.",
      liens: ["c:biens-communs", "c:externalite", "eco:ostrom", "debat:ostrom-hardin", "parcours:communs"] },

    /* ---------- 6. Planche à billets ---------- */
    { question: "Si une banque centrale crée beaucoup de monnaie, les prix montent-ils forcément ?",
      intro: "Le simulateur repose sur une égalité simple : la monnaie en circulation, multipliée par le nombre de fois qu’elle change de mains, est égale à la valeur de tout ce qui est acheté. Si la quantité de monnaie augmente sans que la production suive, ce sont les prix qui montent. Mais est-ce toujours le cas ?",
      voir: [
        "<b>Le grand chiffre</b> : le prix d’un café, 4 francs au départ.",
        "<b>L’équation M × V = P × Q</b>, avec les valeurs du moment.",
        "<b>Les quatre barres</b> : la taille de chacun des quatre éléments."],
      comment: "lancez une expérience ci-contre, ou cliquez sur « Imprimer +50 % », déplacez les curseurs, et regardez le prix du café.",
      mots: [
        ["M, la masse monétaire", "La quantité de monnaie en circulation : les billets, les pièces et l’argent sur les comptes."],
        ["V, la vitesse de circulation", "Le nombre de fois qu’en moyenne un franc sert à payer quelque chose dans l’année."],
        ["P, le niveau des prix", "Le prix moyen des biens et des services."],
        ["Q, la production réelle", "La quantité de biens et de services produits."],
        ["Sous-emploi", "Des machines et des travailleurs restent inutilisés : la production peut encore augmenter. Hypothèse de ce simulateur : tant qu’il reste des capacités, 1 % de monnaie en plus donne environ 0,8 % de production en plus, jusqu’à 1 600."]],
      exps: [
        { titre: "Imprimer de la monnaie", pred: {"q": "La monnaie va augmenter de 125 %, la production ne change pas. Le prix du café va…", "o": ["monter d’environ 125 %", "monter, mais nettement moins", "ne pas bouger du tout"], "c": 0}, consigne: "La banque centrale augmente deux fois la quantité de monnaie de 50 %. La production ne change pas.",
          faire: [["click", "#mReset"], ["click", "#print"], ["wait", 500], ["click", "#print"]],
          question: "Que devient le prix du café ?",
          reponse: "La monnaie passe de 200 à 450, soit +125 %, et le café passe de 4 à 9 francs, +125 % lui aussi. Quand la production et la vitesse ne bougent pas, les prix montent exactement comme la monnaie : c’est la thèse de la théorie quantitative, défendue par Milton Friedman." },
        { titre: "Une économie en sous-emploi", pred: {"q": "Avec des usines au ralenti, la même création de monnaie fera monter les prix…", "o": ["autant que dans la première expérience", "nettement moins", "davantage"], "c": 1}, consigne: "Des usines tournent au ralenti et des gens cherchent du travail. La banque centrale imprime deux fois +50 %.",
          faire: [["click", "#mReset"], ["check", "slack", true], ["wait", 400], ["click", "#print"], ["wait", 500], ["click", "#print"]],
          question: "Les prix montent-ils autant que dans la première expérience ?",
          reponse: "Non : une bonne partie de la monnaie nouvelle sert à produire davantage, et la production passe de 800 à environ 1 530. Le café monte bien moins, d’environ 5,00 à 5,90 francs. C’est l’argument de Keynes : en période de chômage, créer de la monnaie peut relancer l’activité sans beaucoup d’inflation. Imprimez encore : une fois les usines à plein régime (1 600), seuls les prix montent." },
        { titre: "Une monnaie qui dort", pred: {"q": "La monnaie double, mais elle circule deux fois moins vite. Le prix du café va…", "o": ["doubler", "baisser de moitié", "rester stable"], "c": 2}, consigne: "La monnaie double, mais les gens et les banques la gardent deux fois plus longtemps : la vitesse passe de 5 à 2,5.",
          faire: [["click", "#mReset"], ["set", "mM", 400], ["set", "mV", 2.5]],
          question: "Que devient le prix du café ?",
          reponse: "Il ne bouge pas : la monnaie supplémentaire reste sur les comptes au lieu de circuler. C’est en partie ce qui s’est passé après la crise de 2008 : les grandes banques centrales ont créé énormément de monnaie sans provoquer d’inflation forte pendant des années." }],
      retenir: "À production et vitesse égales, plus de monnaie signifie des prix plus élevés. Mais la production et la vitesse de circulation ne sont pas toujours fixes : c’est tout l’enjeu du débat entre monétaristes et keynésiens.",
      limites: "L’égalité M × V = P × Q est toujours vraie par construction ; c’est l’hypothèse que V et Q ne bougent pas qui en fait une théorie de l’inflation. Le modèle ignore les anticipations, les taux d’intérêt et les délais, souvent longs, entre la création de monnaie et la hausse des prix.",
      liens: ["c:theorie-quantitative", "c:fonctions-monnaie", "eco:friedman", "debat:summers-krugman", "parcours:inflation"] }
  ];

  /* ---------- Affichage ---------- */
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  function lien(code) {
    const [t, id] = code.split(":"), A = window.OECAPP || {}, ECO = A.ECO || {};
    if (t === "c") { const c = (OEC.concepts || []).find((x) => x.id === id); return c ? `<a href="#c-${id}">Notion · ${c.nom}</a>` : ""; }
    if (t === "q") { const q = (OEC.questions || []).find((x) => x.id === id); return q ? `<a href="#q-${id}">Grande question · ${q.court || q.titre}</a>` : ""; }
    if (t === "eco") return ECO[id] ? `<a href="#eco-${id}">Portrait · ${ECO[id].nom}</a>` : "";
    if (t === "debat") { const d = (OEC.debates || []).find((x) => x.id === id); return d ? `<a href="#controverses" data-debat="${id}">Controverse · ${d.titre}</a>` : ""; }
    if (t === "parcours") { const p = OEC.parcours && OEC.parcours.list.find((x) => x.id === id); return p ? `<a href="#parcours-${id}">Parcours guidé · ${p.titre}</a>` : ""; }
    return "";
  }
  function top(g) {
    const open = window.innerWidth >= 720 ? " open" : "";
    return `<div class="lg">
      <div class="lg-head"><p class="eyebrow">La question</p><h3>${g.question}</h3><p class="lg-intro">${g.intro}</p></div>
      <div class="lg-help">
        <details class="lg-box"${open}><summary>Comment lire le simulateur</summary><ul>${g.voir.map((v) => `<li>${v}</li>`).join("")}</ul><p><b>Comment faire :</b> ${g.comment}</p></details>
        <details class="lg-box"><summary>Les mots à connaître</summary><dl>${g.mots.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join("")}</dl></details>
      </div></div>`;
  }
  function end(g) {
    return `<div class="lg-fin">
      <div><p class="eyebrow">À retenir</p><p>${g.retenir}</p></div>
      <div><p class="eyebrow">Ce que le modèle simplifie</p><p>${g.limites}</p></div>
      <div><p class="eyebrow">Pour aller plus loin</p><p class="lg-liens">${g.liens.map(lien).filter(Boolean).join("")}</p></div></div>`;
  }
  function expBody(g, j) {
    const e = g.exps[j];
    return `<p class="lg-et-t"><span>Expérience ${j + 1} sur ${g.exps.length}</span>${e.titre}</p><p class="lg-cons">${e.consigne}</p>
      ${e.pred ? `<div class="lg-pred"><p class="lg-pred-q"><b>Avant de lancer, prédisez :</b> ${e.pred.q}</p><div class="lg-pred-o" role="group" aria-label="Votre prédiction">${e.pred.o.map((o, i) => `<button type="button" class="lg-po" data-po="${i}" aria-pressed="false">${o}</button>`).join("")}</div><p class="lg-pred-res" role="status" hidden></p></div>` : ""}
      <button type="button" class="btn small lg-go">▶ Lancer l’expérience</button>
      <p class="lg-q"><b>Observez :</b> ${e.question}</p>
      <button type="button" class="btn small ghost lg-rep" aria-expanded="false">Voir l’explication</button>
      <div class="lg-r" hidden><p>${e.reponse}</p>${j + 1 < g.exps.length ? `<button type="button" class="btn small ghost lg-next">Expérience suivante →</button>` : `<p class="lg-fin-x">Vous avez fait les trois expériences. À vous de jouer librement avec les réglages !</p>`}</div>`;
  }
  function mount(body, g) {
    const side = body.querySelector(".side"); if (!side) return;
    const box = document.createElement("div"); box.className = "lg-exp";
    box.innerHTML = `<div class="lg-exp-top"><p class="lg-exp-k">Expériences guidées</p><div class="lg-tabs">${g.exps.map((e, j) => `<button type="button" class="lg-t${j ? "" : " on"}" data-j="${j}" title="${e.titre}">${j + 1}</button>`).join("")}</div></div><div class="lg-exp-b">${expBody(g, 0)}</div>`;
    (side.firstElementChild || side).insertAdjacentElement("afterend", box);
    let j = 0, busy = false, choix = null;
    const pick = (k) => { j = k; choix = null; box.querySelectorAll(".lg-t").forEach((b, i) => b.classList.toggle("on", i === k)); box.querySelector(".lg-exp-b").innerHTML = expBody(g, k); };
    box.addEventListener("click", async (ev) => {
      const t = ev.target.closest(".lg-t"); if (t) { pick(+t.dataset.j); return; }
      const po = ev.target.closest(".lg-po");
      if (po) { choix = +po.dataset.po; box.querySelectorAll(".lg-po").forEach((b) => { b.classList.toggle("on", b === po); b.setAttribute("aria-pressed", String(b === po)); }); const g0 = box.querySelector(".lg-go"); if (g0) g0.focus(); return; }
      if (ev.target.closest(".lg-next")) { pick(j + 1); return; }
      const rep = ev.target.closest(".lg-rep");
      if (rep) { const r = box.querySelector(".lg-r"); r.hidden = !r.hidden; rep.setAttribute("aria-expanded", String(!r.hidden)); rep.textContent = r.hidden ? "Voir l’explication" : "Masquer l’explication"; if (!r.hidden) box.querySelectorAll(".lg-t")[j].classList.add("vu"); return; }
      const go = ev.target.closest(".lg-go"); if (!go || busy) return;
      busy = true; go.disabled = true; go.textContent = "Expérience en cours…";
      /* garder le graphique en vue : sur petit écran, il est au-dessus des expériences */
      const target = window.innerWidth < 900 ? body.querySelector(".stage") : body.querySelector(".lab");
      if (target) { const r = target.getBoundingClientRect(), h = (window.OECAPP && OECAPP.headH) ? OECAPP.headH() : 80; if (r.top < h - 10 || r.top > window.innerHeight * 0.45) window.scrollTo({ top: r.top + window.scrollY - h, behavior: "instant" }); }
      try {
        for (const [k, a, b] of g.exps[j].faire) {
          if (k === "wait") { await wait(a); continue; }
          const el = body.querySelector(k === "click" ? a : "#" + a); if (!el) continue;
          if (k === "set") { el.value = b; el.dispatchEvent(new Event("input", { bubbles: true })); }
          if (k === "check") { el.checked = b; el.dispatchEvent(new Event("change", { bubbles: true })); }
          if (k === "click") { const n = b || 1; for (let i = 0; i < n; i++) { el.click(); if (n > 1) await wait(140); } }
        }
      } finally {
        busy = false; if (go.isConnected) { go.disabled = false; go.textContent = "↻ Relancer l’expérience"; }
        /* comparer la prédiction au résultat */
        const e = g.exps[j], res = box.querySelector(".lg-pred-res");
        const lc = (x) => x.charAt(0).toLowerCase() + x.slice(1);
        if (e.pred && res) {
          res.hidden = false;
          res.className = "lg-pred-res" + (choix == null ? "" : choix === e.pred.c ? " ok" : " ko");
          res.innerHTML = choix == null ? `Résultat attendu : <b>${lc(e.pred.o[e.pred.c])}</b>. La prochaine fois, essayez de prédire avant de lancer.`
            : choix === e.pred.c ? `Bien vu : <b>${lc(e.pred.o[e.pred.c])}</b>. Lisez l’explication pour vérifier votre raisonnement.`
            : `Pas tout à fait : <b>${lc(e.pred.o[e.pred.c])}</b>. Regardez le graphique, puis l’explication : qu’est-ce qui vous a surpris ?`;
          box.querySelectorAll(".lg-po").forEach((b) => b.classList.toggle("bon", +b.dataset.po === e.pred.c));
        }
      }
    });
  }

  const css = document.createElement("style");
  css.textContent = `
.lg{margin-bottom:16px}
.lg-head{max-width:860px}
.lg-head h3{font:400 clamp(26px, 3.2vw, 36px)/1.12 var(--f-display); margin:6px 0 8px}
.lg-intro{font-size:16.5px; line-height:1.6; color:var(--ink-soft); margin:0 0 14px}
.lg-help{display:grid; grid-template-columns:minmax(0,1.3fr) minmax(0,1fr); gap:12px; align-items:start}
.lg-box{border:1px solid var(--line); border-radius:var(--r); background:var(--card); padding:0 16px}
.lg-box summary{cursor:pointer; padding:12px 0; font-weight:700; font-size:15px}
.lg-box[open] summary{border-bottom:1px solid var(--line); margin-bottom:10px}
.lg-box ul{margin:0 0 10px; padding-left:18px; display:grid; gap:6px; font-size:14.5px; line-height:1.5}
.lg-box > p{font-size:14.5px; margin:0 0 14px}
.lg-box dl{margin:0 0 14px; font-size:14.5px; line-height:1.5}
.lg-box dt{font-weight:700; margin-top:8px} .lg-box dd{margin:2px 0 0; color:var(--ink-soft)}
.lg-exp{border:1.5px solid var(--note); border-radius:var(--r); background:var(--note-soft); padding:14px 16px; display:grid; gap:10px}
.lg-exp-top{display:flex; align-items:center; justify-content:space-between; gap:10px}
.lg-exp-k{margin:0; font:600 11px/1 var(--f-engr); letter-spacing:.16em; text-transform:uppercase; color:var(--note)}
.lg-tabs{display:flex; gap:6px}
.lg-t{width:32px; height:32px; border-radius:50%; border:1.5px solid var(--note); background:transparent; color:var(--note); font-weight:700; cursor:pointer}
.lg-t.on{background:var(--note); color:var(--paper)}
.lg-t.vu:not(.on)::after{content:"✓"; font-size:11px; margin-left:1px}
.lg-exp-b{display:grid; gap:10px; justify-items:start}
.lg-exp-b p{margin:0}
.lg-et-t{font-weight:700; font-size:17px} .lg-et-t span{display:block; font-weight:600; font-size:12px; color:var(--ink-soft); margin-bottom:2px}
.lg-cons, .lg-q{font-size:14.5px; line-height:1.5}
.lg-r{padding:10px 12px; border-radius:10px; background:var(--card); font-size:14.5px; line-height:1.55; display:grid; gap:10px; justify-items:start}
.lg-r[hidden]{display:none}
.lg-pred{display:grid; gap:8px; width:100%}
.lg-pred-q{font-size:14.5px; line-height:1.5}
.lg-pred-o{display:flex; flex-wrap:wrap; gap:6px}
.lg-po{font:600 13.5px var(--f-body); padding:7px 11px; min-height:36px; border-radius:999px; border:1.5px solid var(--note); background:var(--card); color:var(--ink); cursor:pointer; text-align:left}
.lg-po.on{background:var(--note); color:var(--paper)}
.lg-po.bon:not(.on){border-style:dashed}
.lg-pred-res{font-size:14.5px; line-height:1.5; padding:8px 10px; border-radius:8px; background:var(--card)}
.lg-pred-res.ok{border-left:3px solid var(--note)} .lg-pred-res.ko{border-left:3px solid var(--serial)}
.lg-pred-res[hidden]{display:none}
.lg-fin-x{color:var(--ink-soft); font-size:13.5px}
.lg-fin{display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:14px; margin-top:16px}
.lg-fin > div{padding:14px 16px; border:1px solid var(--line); border-radius:var(--r); background:var(--card)}
.lg-fin p{margin:6px 0 0; font-size:14.5px; line-height:1.55}
.lg-liens{display:grid; gap:6px} .lg-liens a{color:var(--note); font-weight:600; text-decoration:none} .lg-liens a:hover{text-decoration:underline}
@media (max-width: 900px){ .lg-help, .lg-fin{grid-template-columns:minmax(0,1fr)} }
@media print{ .lg-exp{display:none} }`;
  document.head.appendChild(css);

  OEC.labGuide = { list: G, top, end, mount };
})();
