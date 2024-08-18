import axios from 'axios';
import { API_URL, API_KEY, IMAGE_PATH } from '../config';


// Fetch popular movies
export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            }
        });
        console.log('Popular movies data:', response.data.results);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};

// Search movies
export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};

// Fetch movie details
export const fetchMovieDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for movie ${id}:`, error);
        return null;
    }
};

// Fetch genre list
export const fetchGenre = async () => {
    try {
        const response = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
};

// Get poster path
export const getPosterPath = (path) => {
    return `${IMAGE_PATH}${path}`;
};
