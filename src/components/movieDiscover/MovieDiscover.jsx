import React from 'react';
import './MovieDiscover.css';
import MovieCard from '../../components/moviecard/MovieCard.jsx';

const MovieDiscover = ({recommendations}) => {
    return (
        <div className="movie-cards-discover">
            {recommendations.length > 0 ? (
                recommendations.slice(0, 10).map((recMovie) => (
                    <MovieCard key={recMovie.id} movie={recMovie}/>
                ))
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
};

export default MovieDiscover;
