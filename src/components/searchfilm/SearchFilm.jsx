import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from "../searchbar/SearchBar.jsx";

const SearchFilm = () => {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'ab0d5ba967fa1d24e7605770a2c59e05',
                    query: query,
                },
            });
            setResults(response.data.results); // Update state with search results
        } catch (error) {
            console.error('Error fetching data:', error); // Log any errors to the console
        }
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} /> {/* Render SearchBar and pass handleSearch as a prop */}
            <div className="search-results">
                {results.map((film) => (
                    <div key={film.id} className="search-result-item">
                        <h3>{film.title}</h3> {/* Display film title */}
                        <p>{film.overview}</p> {/* Display film overview */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchFilm;
