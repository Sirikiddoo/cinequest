import './MovieDetails.css';
import Header from "../../components/header/Header.jsx";
import React, {useEffect, useState} from "react";
import MovieCard from "../../components/moviecard/MovieCard.jsx";
import {fetchMovieDetails, fetchMovieRecommendations, fetchMovieCast} from '../../helpers/Api.jsx';
import {useParams} from 'react-router-dom';

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const movieDetails = await fetchMovieDetails(id);
                setMovie(movieDetails);

                if (movieDetails) {
                    const [recommendedMovies, movieCast] = await Promise.all([
                        fetchMovieRecommendations(id),
                        fetchMovieCast(id)
                    ]);
                    setRecommendations(recommendedMovies);
                    setCast(movieCast.cast);
                }
            } catch (err) {
                console.error("Error fetching movie details, cast, or recommendations:", err);
                setError("Error fetching details, cast, or recommendations. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!movie) {
        return <p>No movie details found.</p>;
    }

    return (
        <div>
            <Header/>
            <div className="detail-page">
                <section className="detail-page-top">
                    <MovieCard movie={movie}/>
                    <div className="movie-info">
                        <div className="movie-name-container">
                            <h2 className="movie-name">{movie.title}</h2>
                            <p className="movie-year">{new Date(movie.release_date).getFullYear()}</p>
                        </div>
                        <p className="movie-cast">
                            Cast: {cast.slice(0, 4).map(actor => actor.name).join(', ') || 'No cast information available'}
                        </p>
                        <p className="movie-plot">{movie.overview}</p>
                    </div>
                </section>
                <section className="detail-page-bottom">
                    <h2 className="detail-discover">Discover</h2>
                    <div className="movie-cards">
                        {recommendations.length > 0 ? (
                            recommendations.slice(0, 10).map((recMovie) => (
                                <MovieCard key={recMovie.id} movie={recMovie}/>
                            ))
                        ) : (
                            <p>No recommendations available.</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MovieDetails;
