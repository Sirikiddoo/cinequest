import React, { useContext } from 'react';
import './MovieCard.css';
import {Link} from 'react-router-dom';
import heart from '../../assets/images/heart.png';
import eye from '../../assets/images/eye.png';
import {getPosterPath} from '../../helpers/Api.jsx';
import {AuthContext} from "../../context/AuthContext.jsx";

const MovieCard = ({ movie }) => {
    const {user} = useContext(AuthContext);

    if (!movie) return null;

    const handleAddToFavorites = () => {
        if (user) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            if (!favorites.find(fav => fav.id === movie.id)) {
                favorites.push(movie);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('Added to favorites!');
            } else {
                alert('Already in favorites!');
            }
        } else {
            alert('Please log in to add to favorites.');
        }
    };

    const handleAddToWatchlist = () => {
        if (user) {
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            if (!watchlist.find(item => item.id === movie.id)) {
                watchlist.push(movie);
                localStorage.setItem('watchlist', JSON.stringify(watchlist));
                alert('Added to watchlist!');
            } else {
                alert('Already in watchlist!');
            }
        } else {
            alert('Please log in to add to your watchlist.');
        }
    };

    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={getPosterPath(movie.poster_path)}
                    alt={movie.title}
                    className="movie-poster"
                />
                <div className="overlay">
                    <div className="overlay-content">
                        <img
                            src={heart}
                            alt="Heart Icon"
                            className="icon"
                            onClick={handleAddToFavorites}
                        />
                        <img
                            src={eye}
                            alt="Eye Icon"
                            className="icon"
                            onClick={handleAddToWatchlist}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
