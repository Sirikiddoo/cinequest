import './Library.css'
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React from "react";
function Library() {
    return (
        <div>
            <Header />
            <section className="library">
                <h2 className="library-title">Library</h2>
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

export default Library;