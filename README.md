# Interrogation Angular

Une fois votre devoir terminer, envoyer le moi par mail à l'adresse : ange.picard@pm.me.

**PENSEZ BIEN A SUPRRIMER LE DOSSIER .git ET node_modules**

> Pas la peine de faire de CSS, uniquement l'aspect fonctionnel sera pris en compte.

## Informations

Nom:   VELOSO PAULOS  
Prenom:  Ruben

## Question ouvertes

Merci de répondre avec vos mots, même s'ils sont inexactes, je veux voir que vous avez compris, pas que vous savez faire un copier-coller.

### Qu'est qu'Angular et quel est son intérêt ?

```
Angular est un framework pour faciliter le développement FRONT, il permet de développer des applications sécurisées et complètes sans le besoin d'utiliser des extensions ou packages extérieurs.
```

### Qu'est-ce-qu'un composant

```
C'est une partie / un bloc qui va contenir des éléments de la page, une page est architecturé de plusieurs composants.
```

### Comment est découper un composant dans Angular ?

```
Il possède un template pour l'ihm, une classe TS ainsi que dans celle-ci les imports, décorateurs.
```

### Pourquoi vaut-il mieux faire de petit composant ?

```
Pour avoir une meilleur architecture de notra application, et aussi éviter qu'un composant ait trop de code HTML ce qui ferait des composants lourd et ne faciliterait pas le développement. 
```

### A quoi sert un service ?

```
Les services permettent de partager des valeurs / informations entre différents composants / classes grâce à l'injection de dépendances. C'est ici que les données sont récupérées et enregistrées.
```

### Qu'est-ce-qu'un observable, et quel est son intérêt ?

```
Un observable est un objet qui transmet du flux, nous pouvons ensuite s'abonner à ces flux pour faire des opérations dessus.

```

## Exercice 1

- Créer un nouveau projet Angular
- Dans le AppComponent
    - Ajouter un input
    - Ajouter un span
    - Faire en sorte que quand l'utilisateur entre du contenu dans l'input, il soit également écrit dans le span. On voit la même chose dans le span et dans l'input.
    - Ajouter un bouton permettant de vider le contenu de l'input et du span
- Créer un composant ListComponent
    - L'ajouter dans le template du AppComponent
    - Afficher la liste qui suit dans ListComponent
        - ['Jean', 'Jacques', 'Martin']
- Ajouter un bouton "CACHER" dans le AppComponent
    - A chaque click, cacher ou afficher ListComponent

## Exercice 2

Cette partie de l'interrogation porte sur le projet PokeAdopt.

Pour l'instant l'application n'affiche que la première page de la liste de pokemon l'API.

- Ajouter un bouton précédent et suivant en haut de la liste
- Quand on clique sur précédent ou suivant, afficher la page précédente ou suivante de l'API
- Bonus: Griser le bouton précédent s'il n'y a pas de page précédente
- Bonus: Afficher le numéro de page entre les deux boutons (Page 1 / XXX)
