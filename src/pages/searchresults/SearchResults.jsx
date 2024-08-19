import React from 'react';
import './SearchResults.css';
import { useLocation } from 'react-router-dom';
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";

const SearchResults = () => {
    const location = useLocation();
    const { query, results } = location.state || { query: '', results: [] };

    return (
        <div>
            <Header />
            <section className="search-results">
                <h2 className="search-results-title">Search Results for: "{query}"</h2>
                {results.length > 0 ? (
                    <div className="search-movie-cards">
                        {results.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p>No results found.</p>
                )}
            </section>
        </div>
    );
};

export default SearchResults;
