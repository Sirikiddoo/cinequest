import React from 'react';
import MovieCard from '../../components/moviecard/MovieCard.jsx';

/* Movie list component to display a list of movies */
const MovieList = ({movies, isLoading}) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!movies || movies.length === 0) {
        return <p>No movies found.</p>;
    }

    return (
        <div className="movie-cards">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;
