import './Watchlist.css'
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React, {useEffect, useState} from "react";

function Watchlist() {
    const [isLoading, setIsLoading] = useState(false);
    const [watchlistMovies, setWatchlistMovies] = useState([]);

    useEffect( () => {
        setIsLoading(true);
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        setWatchlistMovies(watchlist);
        setIsLoading(false);
    }, []);

    return (
        <div>
            <Header />
            <section className="watchlist">
                <h2 className="watchlist-title">Watchlist</h2>
                {isLoading ? <p>Loading...</p> : null}
                        <div className="movie-cards-user">
                            {watchlistMovies.map(movie => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
            </section>
        </div>
    );
}

export default Watchlist;