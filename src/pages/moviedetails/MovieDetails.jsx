import './MovieDetails.css'
import Header from "../../components/header/Header.jsx";
import React from "react";
import MovieCard from "../../components/moviecard/MovieCard.jsx";

function MovieDetails() {
    return (
        <div>
            <Header/>
            <div className="detail-page">
                <section className="detail-page-top">
                    <MovieCard/>
                    <div className="movie-info">
                        <div className="movie-name-container">
                            <h2 className="movie-name">Titanic</h2>
                            <p className="movie-year">1997</p>
                        </div>
                        <p className="movie-director">Directed by</p>
                        <p className="movie-plot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur commodi dolorem dolorum error est, explicabo, illo in, iure libero magnam minima nihil quis quisquam ratione totam voluptate voluptatem voluptatibus!</p>
                    </div>
                </section>
                <section className="detail-page-bottom">
                    <h2 className="detail-discover">Discover</h2>
                    <div className="movie-cards">
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MovieDetails;