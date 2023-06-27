# Covoiturer avec Vinsnaturels.fr 

Ce projet a pour but d'intégrer un module de covoiturage pour le site [https://vinsnaturels.fr](https://vinsnaturels.fr)

## Utilisation

1 - Dans le répertoire 1_covoit_front
    `   npm start   `

2 - Dans le répertoire 2_covoit_back
    En dev : `   npm run dev   `
    En production : `   npm start   `

### Utilisation

Le but de ce projet est de proposer des covoiturages pour les salons des vins référencés sur  [https://vinsnaturels.fr](https://vinsnaturels.fr)
Pour cela il a besoin de récupérer certaines infos du salon
Ces infos sont intégrées dans l'url :
- **id_salon** correspondant à l'id du salon
- **salon** correspondant au nom du salon
- **date** correspondant à la date du début du salon

L'**id_salon** est indispensable pour afficher tous les covoiturages proposés pour le salon

### Exemple

Aller sur [http://localhost:3000/?id_salon=995&salon=Barrik%20%C3%B4%20Mazet&date=2023-06-10](http://localhost:3000/?id_salon=995&salon=Barrik%20%C3%B4%20Mazet&date=2023-06-10) 

Les paramètres de l'url sont stockées : 
- Dans le store de redux
- Dans le local storage

### Déposer une annonce / répondre à une annonce

Pour déposer une annonce, l'internaute doit être connecté

