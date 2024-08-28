import React from 'react';
import './Home.css';
import dune from '../../assets/images/stretched-2880-1800-1314205.jpeg';
import Header from '../../components/header/Header.jsx';
import {fetchPopularMovies} from '../../helpers/Api.jsx';
import MovieList from '../../components/movieList/MovieList.jsx';
import useFetchData from '../../hooks/useFetchData.jsx';


const Home = () => {
    const {data: movies, isLoading} = useFetchData(fetchPopularMovies, {limit: 5});

    return (
        <div className="home">
            <Header/>
            <section className="home-top">
                <img src={dune} alt="Dune film image" className="dune-image"/>
                <div className="website-info">
                    <h1 className="website-info-text">
                        Discover your next favorite film.<br/>
                        Curate your watchlist and favorites.<br/>
                        Catch up on the latest hits.<br/>
                    </h1>
                </div>
            </section>
            <section className="home-bottom">
                <h2 className="home-category">Popular Films</h2>
                {isLoading ? <p>Loading...</p> :
                    <MovieList movies={movies ? movies.slice(0, 5) : []} isLoading={isLoading}/>}
            </section>
        </div>
    );
};

export default Home;
