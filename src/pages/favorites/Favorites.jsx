import './Favorites.css'
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React from "react";

function Favorites() {
    return (
        <div>
            <Header />
            <section className="favorites">
                <h2 className="favorites-title">Favorites</h2>
                <div className="movie-cards">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>
        </div>
    );
}

export default Favorites;