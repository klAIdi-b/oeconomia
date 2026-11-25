/* Œconomia — contenu éditorial */
window.OEC = {};

OEC.schools = {
  antique:   { label: "Antiquité & Moyen Âge", token: "--c-antique" },
  merc:      { label: "Mercantilisme & physiocratie", token: "--c-merc" },
  classique: { label: "Classiques", token: "--c-classique" },
  marx:      { label: "Marxisme", token: "--c-marx" },
  neoclass:  { label: "Néoclassiques", token: "--c-neoclass" },
  keynes:    { label: "Keynésiens", token: "--c-keynes" },
  postk:     { label: "Post-keynésiens", token: "--c-postk" },
  autrich:   { label: "École autrichienne", token: "--c-autrich" },
  chicago:   { label: "Chicago & monétaristes", token: "--c-chicago" },
  hetero:    { label: "Institutions & évolution", token: "--c-hetero" },
  contemp:   { label: "Économie contemporaine", token: "--c-contemp" }
};

/* Les économistes sont dans economists.js */

OEC.influences = [
  ["aristote","khaldoun","i"],["aristote","marx","i"],["quesnay","smith","i"],["mun","smith","c"],
  ["smith","ricardo","i"],["smith","say","i"],["smith","malthus","i"],["malthus","ricardo","c"],
  ["ricardo","marx","i"],["ricardo","mill","i"],["smith","marx","i"],["malthus","keynes","i"],
  ["say","keynes","c"],["mill","marshall","i"],["walras","pareto","i"],["marshall","keynes","i"],
  ["marshall","robinson","i"],["walras","samuelson","i"],["keynes","samuelson","i"],["keynes","robinson","i"],
  ["keynes","minsky","i"],["keynes","galbraith","i"],["marx","robinson","i"],["marx","schumpeter","i"],
  ["walras","schumpeter","i"],["mises","hayek","i"],["keynes","hayek","c"],["marshall","friedman","i"],
  ["keynes","friedman","c"],["friedman","lucas","i"],["keynes","lucas","c"],["veblen","galbraith","i"],
  ["schumpeter","minsky","i"],["smith","hayek","i"],["marx","piketty","c"],["smith","sen","i"],
  ["robinson","sen","i"],["sen","duflo","i"],["kahneman","duflo","i"],["pareto","samuelson","i"],
  ["quesnay","marx","i"],["say","walras","i"],["mises","friedman","c"],["samuelson","friedman","c"],
  ["hayek","ostrom","i"],["veblen","ostrom","i"],["samuelson","piketty","i"],
  ["keynes","krugman","i"],["samuelson","krugman","i"],["ricardo","krugman","i"],["samuelson","summers","i"],
  ["keynes","summers","i"],["krugman","summers","c"],["schumpeter","acemoglu","i"],["marx","acemoglu","c"],["acemoglu","duflo","i"],
  ["keynes","stiglitz","i"],["samuelson","stiglitz","i"],["robinson","stiglitz","i"],["friedman","stiglitz","c"],["hayek","stiglitz","c"],["stiglitz","piketty","i"],
  ["schumpeter","mazzucato","i"],["keynes","mazzucato","i"],["minsky","mazzucato","i"],["hayek","mazzucato","c"],["stiglitz","mazzucato","i"],
  ["marx","polanyi","i"],["mises","polanyi","c"],["polanyi","hayek","c"],["polanyi","mazzucato","i"],
  ["marx","kalecki","i"],["kalecki","robinson","i"],["kalecki","minsky","i"],
  ["marx","aglietta","i"],["keynes","aglietta","i"],
  ["keynes","waring","c"],
  ["keynes","kelton","i"],["minsky","kelton","i"],["kelton","summers","c"]
];

/* La frise, la table ronde et les crises sont dans chronique.js */

/* Les débats du Ring sont dans debates.js */
OEC.extraSpeakers = {
  hardin: { id: "hardin", nom: "Garrett Hardin", ini: "GH", vie: [1915, 2003], ecole: "hetero", devise: "Biologiste, auteur de « La tragédie des communs » (1968)." }
};

OEC.quiz = [
  { ctx: "Une récession frappe le pays : les commandes s’effondrent, les entreprises licencient et le chômage passe en deux ans de 4 % à 12 %. Les ménages inquiets épargnent davantage, ce qui freine encore la consommation. Le gouvernement vous demande conseil, et les taux d’intérêt sont déjà proches de zéro.",
    q: "Le chômage atteint 12 %. Quel est votre premier réflexe ?", o: [
    ["Lancer un grand plan de travaux publics pour relancer la demande, quitte à creuser le déficit", 1, -0.1],
    ["Alléger les charges des entreprises et laisser les salaires s’ajuster pour que l’embauche redevienne rentable", -1, -0.3],
    ["Commencer par étudier sur le terrain comment fonctionne le marché du travail de chaque région", 0.1, 0.9],
    ["Tester deux dispositifs d’aide au retour à l’emploi sur des groupes tirés au sort, puis étendre le meilleur", 0.2, 0.3]
  ]},
  { ctx: "Un chercheur a construit un modèle mathématique très élégant : à partir de quelques hypothèses simples, il prédit comment les prix réagissent à une hausse des impôts. Mais lorsqu’on le confronte aux données des vingt dernières années, ses prévisions sont souvent fausses. Il vous demande ce qu’il devrait faire.",
    q: "Un modèle élégant contredit les observations. Que lui conseillez-vous ?", o: [
    ["Garder le modèle : sa logique est solide, et les données sont peut-être mal mesurées", -0.2, -1],
    ["Abandonner le modèle : l’économie dépend trop de l’histoire et des institutions pour être mise en équations", 0.2, 1],
    ["Améliorer le modèle en y intégrant ce que montrent les données", 0, -0.3],
    ["Chercher du côté de la psychologie : les gens ne se comportent pas comme le suppose le modèle", 0.1, 0.6]
  ]},
  { ctx: "En un an, les prix à la consommation augmentent de 8 %, du jamais-vu depuis quarante ans. Auparavant, la banque centrale a fortement augmenté la quantité de monnaie pendant la crise, l’État a versé des aides massives, les prix de l’énergie ont bondi à cause d’une guerre, et certaines grandes entreprises affichent des marges record.",
    q: "L’inflation grimpe à 8 %. Quelle est selon vous la cause principale ?", o: [
    ["La banque centrale, qui a créé trop de monnaie : l’inflation est toujours un phénomène monétaire", -0.9, -0.4],
    ["Les grandes entreprises, qui profitent de leur pouvoir de marché pour augmenter leurs marges", 0.9, 0.5],
    ["Un choc d’offre temporaire : énergie, guerre, pénuries ; il se résorbera de lui-même", 0.3, 0.1],
    ["L’État, dont les dépenses ont fait exploser la demande", -0.7, 0]
  ]},
  { ctx: "Dans un grand lac, les prises de poissons diminuent d’année en année. Chaque pêcheur sait qu’il faudrait pêcher moins, mais s’il se restreint seul, les autres prendront les poissons à sa place. Une centaine de familles vivent de cette pêche depuis des générations, et la ressource risque de disparaître.",
    q: "La pêcherie s’épuise. Que proposez-vous ?", o: [
    ["Fixer un plafond total de prises et le répartir en quotas individuels que les pêcheurs peuvent s’échanger", -0.6, -0.4],
    ["Laisser les pêcheurs se réunir pour fixer leurs propres règles et les faire respecter entre eux", -0.1, 0.9],
    ["Confier la gestion du lac à l’État, avec des contrôles et des sanctions", 0.9, 0.1],
    ["Ne rien faire : la rareté fera monter le prix du poisson, et les pêcheurs s’adapteront", -1, -0.2]
  ]},
  { ctx: "Une étude montre que, depuis quarante ans, la part du patrimoine détenue par le 1 % le plus riche a fortement augmenté. Une grande partie de ces fortunes est héritée, et elles rapportent davantage que la croissance des salaires. Dans le même temps, le niveau de vie des plus pauvres a légèrement progressé.",
    q: "Le 1 % le plus riche détient une part croissante du patrimoine. Votre réaction ?", o: [
    ["Il faut un impôt progressif sur les grandes fortunes et les héritages", 1, 0.6],
    ["C’est la récompense de l’innovation et de la prise de risque, qui profitent à tous", -0.8, 0.2],
    ["Ce qui compte, c’est d’améliorer la situation des plus pauvres, pas de réduire la fortune des riches", 0, 0.3],
    ["Il faut d’abord vérifier les données et mesurer précisément avant de conclure", 0.2, -0.2]
  ]},
  { ctx: "Une entreprise d’assurances remplace la moitié de ses employés de bureau par un logiciel d’intelligence artificielle qui traite les dossiers plus vite. D’autres entreprises s’apprêtent à faire de même. Les salariés concernés, souvent âgés de plus de cinquante ans, craignent de ne pas retrouver d’emploi.",
    q: "L’intelligence artificielle remplace des milliers d’emplois de bureau. Que faut-il faire ?", o: [
    ["Rien de particulier : c’est la destruction créatrice, de nouveaux métiers apparaîtront comme toujours", -0.5, 0.6],
    ["Taxer une partie des gains des entreprises pour indemniser et former ceux qui perdent leur emploi", 0.8, 0.2],
    ["Éviter toute réglementation : le marché du travail s’adaptera s’il reste flexible", -0.9, -0.4],
    ["Réduire le temps de travail pour partager les emplois qui restent", 0.8, 0.5]
  ]},
  { ctx: "Un pays envisage d’augmenter fortement ses droits de douane sur les produits industriels importés, pour protéger ses usines qui ferment face à la concurrence de pays à bas salaires. Les consommateurs paieraient plus cher, mais des emplois seraient peut-être sauvés dans des régions en difficulté.",
    q: "Faut-il protéger l’industrie nationale par des droits de douane ?", o: [
    ["Non : le libre-échange enrichit les deux pays, chacun doit se spécialiser dans ce qu’il fait le mieux", -0.8, -0.5],
    ["Oui, temporairement, pour laisser aux industries naissantes ou fragiles le temps de se renforcer", 0.6, 0.6],
    ["Non, mais l’État doit aider activement les régions et les travailleurs touchés", 0.6, 0.1],
    ["Cela dépend : il faut d’abord mesurer qui gagne et qui perd dans chaque région", 0.1, 0.4]
  ]},
  { ctx: "Après une crise, la dette publique d’un pays atteint 120 % de son produit intérieur brut. Les taux d’intérêt sont bas pour l’instant, mais ils pourraient remonter. Certains veulent réduire rapidement les dépenses, d’autres estiment qu’il faut d’abord soutenir la reprise.",
    q: "La dette publique atteint 120 % du PIB. Que faites-vous ?", o: [
    ["Réduire rapidement les dépenses publiques pour rétablir la confiance des marchés", -0.8, -0.3],
    ["Continuer à soutenir l’économie : le poids de la dette baissera avec la croissance", 0.8, -0.1],
    ["Inscrire une règle stricte dans la Constitution pour empêcher les déficits à l’avenir", -0.6, 0.3],
    ["Faire contribuer davantage les plus hauts revenus et patrimoines", 0.9, 0.4]
  ]},
  { ctx: "Ces quelques formules résument des manières très différentes de voir l’économie. Aucune n’est fausse : chacune met l’accent sur un aspect du monde. Choisissez celle qui exprime le mieux votre intuition.",
    q: "Quelle phrase vous ressemble le plus ?", o: [
    ["« Les prix transmettent des informations que personne ne pourrait rassembler seul. »", -0.9, 0.4],
    ["« Laissé à lui-même, le capitalisme connaît des crises dont il ne sort pas seul. »", 0.8, 0.3],
    ["« Toute affirmation doit être testée par l’expérience. »", 0.2, -0.1],
    ["« Une bonne théorie est simple, générale et mathématiquement rigoureuse. »", -0.3, -0.9]
  ]},
  { ctx: "Vous partez six mois sur une île déserte et ne pouvez emporter qu’un seul grand livre d’économie. Chacun représente une tradition : le marché et la division du travail, la critique du capitalisme, l’intervention de l’État contre le chômage, ou l’économie mathématique de l’équilibre.",
    q: "Quel livre emportez-vous sur une île déserte ?", o: [
    ["La Richesse des nations, d’Adam Smith (1776)", -0.6, 0.3],
    ["Le Capital, de Karl Marx (1867)", 1, 0.6],
    ["La Théorie générale, de John Maynard Keynes (1936)", 0.6, -0.1],
    ["Éléments d’économie politique pure, de Léon Walras (1874)", 0, -1]
  ]}
];

OEC.phaseNames = ["Déplacement", "Essor", "Euphorie", "Retournement", "Panique"];
