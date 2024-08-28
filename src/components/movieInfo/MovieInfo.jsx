import React from 'react';
import './MovieInfo.css';
import MovieCard from '../../components/moviecard/MovieCard.jsx';
import {DateYear} from '../../helpers/DateYear.jsx';


const MovieInfo = ({movie, cast}) => {
    return (
        <div className="movie-info">
            <MovieCard movie={movie}/>
            <div className="movie-info-details">
                <div className="movie-name-container">
                    <h2 className="movie-name">{movie.title}</h2>
                    <p className="movie-year">{DateYear(movie.release_date)}</p>
                </div>
                <p className="movie-cast">
                    Cast: {cast.slice(0, 4).map(actor => actor.name).join(', ') || 'No cast information available'}
                </p>
                <p className="movie-plot">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieInfo;
