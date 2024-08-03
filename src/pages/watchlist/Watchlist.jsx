import './Watchlist.css'
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React from "react";

function Watchlist() {
    return (
        <div>
            <Header />
            <section className="watchlist">
                <h2 className="watchlist-title">Watchlist</h2>
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

export default Watchlist;