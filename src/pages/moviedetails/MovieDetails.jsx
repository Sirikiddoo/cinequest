import './MovieDetails.css';
import Header from '../../components/header/Header.jsx';
import React from 'react';
import useMovieDetails from '../../hooks/useMovieDetails.jsx';
import { useParams } from 'react-router-dom';
import LoadingError from '../../components/loadingError/LoadingError.jsx';
import MovieInfo from '../../components/movieInfo/MovieInfo.jsx';
import MovieDiscover from '../../components/movieDiscover/MovieDiscover.jsx';

function MovieDetails() {
    const {id} = useParams();
    const {movie, recommendations, cast, loading, error} = useMovieDetails(id);


    return (
        <div className="detail-page">
            <Header/>
            <LoadingError loading={loading} error={error}>
                {movie && (
                    <>
                        <section className="detail-page-top">
                            <MovieInfo movie={movie} cast={cast}/>
                        </section>
                        <section className="detail-page-bottom">
                            <h2 className="detail-discover">Discover</h2>
                            <MovieDiscover recommendations={recommendations}/>
                        </section>
                    </>
                )}
            </LoadingError>
        </div>
    );
}

export default MovieDetails;
