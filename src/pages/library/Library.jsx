import React, { useState, useEffect } from 'react';
import './Library.css';
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import { fetchPopularMovies } from '../../helpers/Api.jsx';

const Library = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const moviesData = await fetchPopularMovies();
                setMovies(moviesData);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        getPopularMovies();
    }, []);

    const moviesPerPage = 10;
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const nextPage = () => {
        if (currentPage < Math.ceil(movies.length / moviesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <Header />
            <section className="library">
                <h2 className="library-title">Library</h2>
                <div className="movie-cards">
                    {currentMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(movies.length / moviesPerPage)}>Next</button>
                </div>
            </section>
        </div>
    );
};

export default Library;
