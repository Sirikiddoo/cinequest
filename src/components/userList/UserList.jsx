import './UserList.css';
import Header from '../../components/header/Header.jsx';
import MovieCard from '../../components/moviecard/MovieCard.jsx';
import React, {useEffect, useState} from 'react';

function UserList({title, localStorageKey, buttonClassName}) {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    /* Get movies from user local storage */
    useEffect(() => {
        setIsLoading(true);
        const storedMovies = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        setMovies(storedMovies);
        setIsLoading(false);
    }, [localStorageKey]);

    /* Remove movies from user local storage */
    const handleRemove = (movieId) => {
        const updatedMovies = movies.filter(movie => movie.id !== movieId);
        setMovies(updatedMovies);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedMovies));
    };

    return (
        <div>
            <Header/>
            <section className="user-list">
                <h2 className="user-list-title">{title}</h2>
                {isLoading ? <p>Loading...</p> : null}
                <div className="movie-cards">
                    {movies.map(movie => (
                        <div key={movie.id} className="movie-container">
                            <MovieCard movie={movie}/>
                            <button
                                className={buttonClassName}
                                onClick={() => handleRemove(movie.id)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default UserList;
