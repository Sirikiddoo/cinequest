// src/context/MovieContext.js
import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <MovieContext.Provider value={{ movies, setMovies, selectedMovie, setSelectedMovie }}>
            {children}
        </MovieContext.Provider>
    );
};
