import './Favorites.css'
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React, {useEffect, useState} from "react";

function Favorites() {
    const [isLoading, setIsLoading] = useState(false);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteMovies(favorites);
        setIsLoading(false);
    }, []);

    return (
        <div>
            <Header />
            <section className="favorites">
                <h2 className="favorites-title">Favorites</h2>
                {isLoading ? <p>Loading...</p> : null}
                <div className="movie-cards-user">
                    {favoriteMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Favorites;