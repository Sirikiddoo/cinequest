import './SearchBar.css';
import React, {useState} from 'react';
import search from '../../assets/images/search.png';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {API_URL} from '../../constants/Constants.jsx';

const SearchBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        const controller = new AbortController();
        const {signal} = controller;

        setIsLoading(true);
        try {
            const response = await axios.get(`${API_URL}/search/movie`, {
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    query: query,
                },
                signal: signal,
            });
            const results = response.data.results;
            navigate('/search-results', {state: {query, results, isLoading: false}});
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Error getting search results:', error);
            }
        } finally {
            setIsLoading(false);
        }

        return () => {
            controller.abort();
        };
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search film"
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="search-bar"
                disabled={isLoading}
            />
            <button className="search-button" onClick={handleSearch}>
                {isLoading ? 'Loading...' : 'Search'}
                <img src={search} alt="Search icon" className="search-icon"/>
            </button>
        </div>
    );
};

export default SearchBar;
