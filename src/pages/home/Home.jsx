import React from 'react';
import './Home.css';
import Header from '../../components/header/Header.jsx';
import dune from '../../assets/images/cropped-1920-1080-1314205.jpeg';
import movieCard from "../../components/moviecard/MovieCard.jsx";

function Home() {
    return (
        <div className="home">
            <section className="home-top">
                <img src={dune} alt="Dune film image" className="dune-image"/>
                <div className="website-info">
                <h1 className="website-info-text">Discover your next favorite film.
                    Curate your watchlist and favorites.
                    Catch up on the latest hits.</h1>
                </div>
            </section>
            <section className="home-bottom">
                <h2 className="home-category">Popular films</h2>
                <div className="movie-cards">
                    <movieCard />
                    <movieCard />
                    <movieCard />
                    <movieCard />
                    <movieCard />
                </div>
            </section>
        </div>
    );
}

export default Home;
