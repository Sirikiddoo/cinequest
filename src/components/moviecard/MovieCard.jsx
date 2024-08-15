import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import heart from '../../assets/images/heart.png';
import eye from '../../assets/images/eye.png';
import { getPosterPath } from '../../helpers/Api.jsx';

const MovieCard = ({ movie }) => {
    if (!movie) return null; // Return null if no movie data is provided

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
                        <img src={heart} alt="Heart Icon" className="icon" />
                        <img src={eye} alt="Eye Icon" className="icon" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
