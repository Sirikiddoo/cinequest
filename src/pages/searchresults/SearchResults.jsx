import './SearchResults.css'
import Header from "../../components/header/Header.jsx";
import React from "react";

function SearchResults() {
    return (
        <div>
            <Header />
            <section>
                <h2>Movie title</h2>
                <p>Movie overview</p>
            </section>
        </div>
    );
}

export default SearchResults;