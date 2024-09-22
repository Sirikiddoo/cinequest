# CineQuest Web Application

## Introduction

Welcome to CineQuest, a film discovery web application! CineQuest uses data from the TMDB API to provide users with a list of trending films, allow them to search for specific titles, and view detailed information about those films. Each film's detail page includes a Discover section that offers personalized recommendations, helping users discover new and interesting movies. Additionally, users can create an account to manage their watchlist of movies they plan to watch, as well as a favorites list.

The application starts on the homepage, where users can search for a movie via the search bar or navigate to other sections using the navigation bar. Scrolling down, users will see an overview of some of the most popular films at the moment. The Library page also displays popular films, but with a larger selection. By clicking on a movie poster, users can access detailed information about that film. The Discover Mode on the movie detail page showcases similar films, enabling users to explore new recommendations.

Once users create an account and log in, they can access their profile page and add movies to their watchlist or favorites list by clicking on the respective icons on the movie posters. 

## Home page

 <img width="1440" alt="Home page CineQuest" src="https://github.com/user-attachments/assets/679d8fac-fd67-450d-bfb0-1059cfb52f86">

## Features
- Search for movies using the search bar.
- View the most popular movies on the homepage and the library page.
- Explore detailed information and personalized recommendations on each movie's detail page.
- Sign up and log in to access your profile.
- Add movies to a watchlist or favorites list after logging in.

## API Keys

The application makes use of two different API keys:

API Key for the TMDB API: 1cd909ddfb02d57013652931cdaf9f82

API Backend Key: cinequest:EC6fq6TGydzYniuieNpz

## Installation

To install and run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following commands:

npm install

This will install all necessary dependencies for the application.

npm run dev

This command will start the app in development mode. Open http://localhost:5174 in your browser to view it.

## Account data

To test the sign-up and log-in functionality, you can use the following credentials:

- Username: hendrik
- Email: hendrik@gmail.com
- Password: hendrikjansen

## NPM Packages

Other NPM commands to install for the use of this application are:
- npm install axios
- npm install jwt-decode
- npm install react-router-dom
- npm install react-dom


