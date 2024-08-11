import './SearchBar.css'
import React from 'react'
import search from '../../assets/images/search.png';

function SearchBar() {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search film"
                className="search-bar"
            />
            <button className="search-button">
                <img src={search} alt="Search icon" className="search-icon"/>
            </button>
        </div>
    );
}

export default SearchBar;