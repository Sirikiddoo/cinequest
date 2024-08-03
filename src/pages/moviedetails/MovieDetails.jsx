import './MovieDetails.css'
import Header from "../../components/header/Header.jsx";
import React from "react";

function MovieDetails() {
    return (
        <div>
            <Header />
            <section>
                <div>movie card</div>
                <div>
                    <h1>title</h1>
                    <p>year</p>
                    <p>director</p>
                    <p>plot</p>
                </div>
            </section>
            <section>
                <h2>Discover</h2>
                <div>
                    5 cards
                </div>
            </section>
        </div>
    );
}

export default MovieDetails;