import React from 'react';
import {useContext} from "react";
import './App.css';
import {Route, Navigate, Routes} from 'react-router-dom';
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
import {AuthContext} from './context/AuthContext';

function App() {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/sign-in"/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/watchlist" element={isAuth ? <Watchlist/> : <Navigate to="/sign-in"/>}/>
                <Route path="/favorites" element={isAuth ? <Favorites/> : <Navigate to="/sign-in"/>}/>
                <Route path="/movie/:id" element={<MovieDetails/>}/>
                <Route path="/search-results" element={<SearchResults/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </>
    );
}

export default App;