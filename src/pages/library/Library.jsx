import React, { useState, useEffect } from 'react';
import './Library.css';
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import { fetchPopularMovies } from '../../helpers/Api.jsx';

const Library = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const getPopularMovies = async () => {
            try {
                const moviesData = await fetchPopularMovies();
                setMovies(moviesData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching library:', error);
            }
        };

        getPopularMovies();
    }, []);

    return (
        <div>
            <Header />
            <section className="library">
                <h2 className="library-title">Library</h2>
                <div className="movie-cards">
                    {isLoading && <p>Loading...</p>}
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Library;
