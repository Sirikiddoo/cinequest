import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import SignIn from './pages/signin/SignIn.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Profile from './pages/profile/Profile.jsx';
import Library from './pages/library/Library.jsx';
import Watchlist from './pages/watchlist/Watchlist.jsx';
import Favorites from './pages/favorites/Favorites.jsx';
import Error from './pages/error/Error.jsx';
import MovieDetails from './pages/moviedetails/MovieDetails.jsx';
import SearchResults from './pages/searchresults/SearchResults.jsx';
import Header from "./components/header/Header.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/library" element={<Library />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
