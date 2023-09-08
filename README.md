# score-management-app

Score Manager is a real-time football team score management application.
We have the Administrator who updates the scores and the users who make match predictions by logging in.
Leaderboard and matches pages in consultation does not require a connection.

## Features

- Authentication with Laravel Sanctum
- Management of user roles (Administrator, users)
- CRUD team, players, matches
- Functionality for sharing scores on social networks
- Exporting Matches and Ranking data to PDF
- Ranking updated in real time

## Build with

| Stack                | Version |
|----------------------|---------|
| Angular              | 15      |
| Laravel              | 10      |
| Firebase / firestore | -       |
| MariaDb              | 10.4.2  |
| TypeScript           | 4       |
| PHP                  | 8.2     |

## Set up
Clone this github project

### Requires 

### Frontend 
In the root of the folder `score-management-app` and follow the instructions
- Move into frontend folder
> cd frontend/
- You must have this path to execute the rest of the instructions
> $your-path/score-management-app/frontend/
- Install dependencies 
>   npm install 
- start the front
> npm start 

### Backend
Go back to the root of the folder `score-management-app` and follow the instructions

move into backend folder
> cd backend/
- You must have this path to execute the rest of the instructions

> $your-path/score-management-app/backend/
- Install PHP dependencies
> composer install

Copy the `.env.example` file, renaming it to `.env`.

- Generate a new application key
>  php artisan key:generate

- Configure your database and update the .env file
- Exécutez les migrations  and seeders Laravel pour créer les tables de base de données and datas
> php artisan migrate --seed
- Start the backend server
> php artisan serve 
---
>The firestore configurations were left in the project by default in order to facilitate the startup of the application and reduce the account creation process

## ScreenShots