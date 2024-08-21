import './Watchlist.css'
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React, {useEffect, useState} from "react";

function Watchlist() {
    const [watchlistMovies, setWatchlistMovies] = useState([]);

    useEffect( () => {
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        setWatchlistMovies(watchlist);
    }, []);

    return (
        <div>
            <Header />
            <section className="watchlist">
                <h2 className="watchlist-title">Watchlist</h2>
                <div className="movie-cards">
                    {watchlistMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Watchlist;