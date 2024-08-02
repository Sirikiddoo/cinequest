import './SearchBar.css'
import React from 'react'

function SearchBar() {
    return (
        <div>
            <input type="text" placeholder="Search movie" />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;