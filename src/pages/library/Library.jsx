import './Library.css';
import Header from "../../components/header/Header.jsx";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Library() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
                    params: {
                        api_key: 'ab0d5ba967fa1d24e7605770a2c59e05' // Replace with your actual API key
                    }
                });
                setTrendingMovies(response.data.results); // Update state with fetched movies
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies(); // Fetch data when component mounts
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <Header />
            <section className="library">
                <h2 className="library-title">Library</h2>
                <div className="movie-cards">
                    {trendingMovies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Library;
