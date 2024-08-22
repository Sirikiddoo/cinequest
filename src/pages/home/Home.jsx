import React, { useState, useEffect } from 'react';
import './Home.css';
import dune from '../../assets/images/stretched-2880-1800-1314205.jpeg';
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import { fetchPopularMovies } from '../../helpers/Api.jsx';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const getPopularMovies = async () => {
            try {
                const moviesData = await fetchPopularMovies();
                setMovies(moviesData.slice(0, 5));
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        getPopularMovies();
    }, []);

    return (
        <div className="home">
            <Header />
            <section className="home-top">
                <img src={dune} alt="Dune film image" className="dune-image" />
                <div className="website-info">
                    <h1 className="website-info-text">
                        Discover your next favorite film.<br />
                        Curate your watchlist and favorites.<br />
                        Catch up on the latest hits.<br />
                    </h1>
                </div>
            </section>
            <section className="home-bottom">
                <h2 className="home-category">Popular Films</h2>
                {isLoading ? <p>Loading...</p> : null}
                <div className="movie-cards">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
