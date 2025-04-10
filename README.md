# MoviieBooker

Une API REST développée avec NestJS pour gérer des réservations de films, et déployée sur Render.

## Fonctionnalités

- Authentification des utilisateurs (JWT)
- Gestion des films via l'API TMDB
- Système de réservation avec contraintes temporelles
- Documentation Swagger

- **Authentification des utilisateurs** : Inscription et connexion avec gestion de JWT
- **Gestion des films via l'API TMBD** : Permet d'ajouter, récupérer et manipuler des films
- **Système de réservations** : Permet aux utilisateurs de réserver des films avec certaines contraintes
- **Documentation Swagger** : Accédez à la documentation interactive des endpoints de l'API via Swagger
- **Gestion des erreurs** : L'API répond de manière cohérente aux erreurs et aux problèmes de validation


## Structure du Projet

```
src/
├── movies/           # Module de gestion des films
├── reservation/     # Module de réservation
├── user/            # Module d'authentification
├── prisma/          # Configuration de la base de données
└── main.ts          # Point d'entrée de l'application
```

## API Endpoints

### Authentification
- POST `/user/login` - Connexion
- POST `/user/register` - Inscription

### Films
- GET `/movies` - Liste des films avec possiblité de recherche
- GET `/movies/now_playing` - Films actuellement à l'affiche
- GET `/movies/:movieId` - Détails d'un film
- GET `/movies/genre/list` - Liste des genres de films

### Réservations
- POST `/reservations` - Créer une réservation
- GET `/reservations` - Liste des réservations
- DELETE `/reservations/:id` - Annuler une réservation

## Déploiement
Lien de l'API : https://moviiebooker-kbim.onrender.com/api
## Ressources d'apprentissage

### NestJS
- [Documentation officielle NestJS](https://docs.nestjs.com/)
- [Documentation NestJS passport](https://docs.nestjs.com/recipes/passport)

### Prisma
- [Documentation Prisma](https://www.prisma.io/docs/)
- [Getting Started with Prisma](https://www.prisma.io/docs/getting-started)

### Authentication
- [JWT Authentication with NestJS Tutorial] (https://www.prisma.io/blognestjs-prisma-authentication-7D056s1s0k3l#implement-authentication-in-your-rest-api)
- [Passport.js Tutorial](https://docs.starton.com/tutorials/jwt-authentication-nest#authguard)
- [REST API Tutorial] (https://www.prisma.io/blog/series/nestjs-prisma-kges29apbbik)

### TMDB API
- [TMDB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

