# Œconomia

Un site francophone d’histoire de la pensée économique, pour le grand public : vingt-quatre siècles de débats sur la valeur, la monnaie, les crises, le commerce et les inégalités.

- **Site en ligne** : https://klaidi-b.github.io/oeconomia/
- **Version de référence** (avec ŒconoChat) : https://claude.ai/artifact/7cm6THQkHe7xCzbPEPxpsH

## Contenu

- 39 portraits d’économistes, d’Aristote à Esther Duflo, en version courte et complète
- 56 notions expliquées, chacune avec une notice longue : raisonnement, preuves, cas, objections, texte source et quiz
- 9 dossiers sur les grandes questions, 10 controverses, 9 parcours guidés
- 221 exercices corrigés sur trois niveaux, 12 fiches de méthode, 6 simulateurs
- un test de positionnement et une révision espacée des exercices

## Fonctionnement

Le site est une application d’une seule page, en HTML, CSS et JavaScript, sans serveur ni dépendance externe. Les notices, portraits et exercices sont chargés à la demande (`chargement.js`). Les progrès des visiteurs restent dans leur navigateur.

Pour l’essayer localement, il suffit de servir ce dossier avec n’importe quel serveur web statique, par exemple :

```
npx serve .
```

ŒconoChat, l’assistant qui fait parler les économistes, et le mode édition ne fonctionnent que dans la version publiée sur claude.ai.

## Licence

À préciser. En attendant, tous droits réservés.
