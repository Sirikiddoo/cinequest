import {useEffect, useState} from 'react';
import {fetchMovieDetails, fetchMovieRecommendations, fetchMovieCast} from '../helpers/Api.jsx';

const useMovieDetails = (id) => {
    const [movie, setMovie] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /* Fetching movie details function */
    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
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
                console.error("Error fetching movie details:", err);
                setError("Error fetching details. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    return {movie, recommendations, cast, loading, error};
};

export default useMovieDetails;
