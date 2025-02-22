# NextGes

Version 1.0 - Par DELOEIL Tristan

## Description

NextGes-vuejs est l'application Web écrite en VueJS de NextGes. Celle-ci est une application servant d'intranet pour un établissement scolaire. Sur cette application, il est possible de voir ses cours, les notes, les événements à venir sur le campus et les offres de stages et d'alternances recommandés par l'école.

## Preview
[![The preview](https://img.youtube.com/vi/lJeE0BsAI9w/0.jpg)](https://youtu.be/lJeE0BsAI9w))]

A simple preview to show some app fonctionnalities.

## Description structure

Ce projet utilise la structure de fichier suivantes.

- /src
  - /assets: Le fichier contenant les assets, ici le fichier `style.css` contenant le style généré par TailwindCSS
  - /components: Tous les composants VueJS/
    - /widgets: Les widgets utilisés sur la page home de l'application
    - /icons: Les icons utilisées sur l'application
  - /model: Les models/types de données, utilisés par TypeScript
  - /router: La configuration du router
  - /service: Différents outils/fonction pour faire fonctionner l'application
    - /database: La configuration de la base de données et les classes de base pour implémenter une autre base de données.
    - /repository: Les fichiers répository pour tous les entités de la base de données
    - auth.ts: Les fonctions de base pour intéragir avec l'authentification Firebase.
  - /store: Les différents stores de données nécéssaires à l'application
  - /view: Les views/pages de l'application
  - tailwind.css: Le point d'entré pour TaiwindCSS
