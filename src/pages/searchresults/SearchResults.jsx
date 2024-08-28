import React from 'react';
import './SearchResults.css';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import MovieCard from '../../components/moviecard/MovieCard.jsx';
import { filterSearch } from '../../helpers/FilterSearch.jsx';

const SearchResults = () => {
    const location = useLocation();
    const {query, results, isLoading} = location.state || {query: '', results: [], isLoading: true};

    const filteredResults = filterSearch(results);

    return (
        <div>
            <Header/>
            <section className="search-results">
                <h2 className="search-results-title">Search results for: "{query}"</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredResults.length > 0 ? (
                        <div className="search-movie-cards">
                            {filteredResults.map((movie) => (
                                <MovieCard key={movie.id} movie={movie}/>
                            ))}
                        </div>
                    ) : (
                        <p>No results found.</p>
                    )
                )}
            </section>
        </div>
    );
};

export default SearchResults;
