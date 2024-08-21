import './Favorites.css'
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React, {useEffect, useState} from "react";

function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteMovies(favorites);
    }, []);

    return (
        <div>
            <Header />
            <section className="favorites">
                <h2 className="favorites-title">Favorites</h2>
                <div className="movie-cards">
                    {favoriteMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Favorites;