import React from 'react';
import './Library.css';
import Header from '../../components/header/Header.jsx';
import { fetchPopularMovies } from '../../helpers/Api.jsx';
import MovieList from '../../components/movieList/MovieList.jsx';
import useFetchData from '../../hooks/useFetchData.jsx';

const Library = () => {
    const { data: movies, isLoading } = useFetchData(fetchPopularMovies);

    return (
        <div>
            <Header/>
            <section className="library">
                <h2 className="library-title">Library</h2>
                {isLoading ? <p>Loading...</p> : <MovieList movies={movies} />}
            </section>
        </div>
    );
};

export default Library;
