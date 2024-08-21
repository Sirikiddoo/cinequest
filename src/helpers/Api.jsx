import axios from 'axios';
import { API_URL, IMAGE_PATH } from '../constants/Constants.jsx';


// Fetch popular movies
export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movie/popular`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY,
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

// Fetch movie details
export const fetchMovieDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'en-US',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for movie ${id}:`, error);
        return null;
    }
};

// Fetch movie cast
export const fetchMovieCast = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/movie/${id}/credits`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'en-US',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching cast for movie ${id}:`, error);
        return null;
    }
};

// Fetch movie recommendations
export const fetchMovieRecommendations = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/movie/${id}/recommendations`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY,
                language: 'en-US',
            }
        });
        return response.data.results;
    } catch (error) {
        console.error(`Error fetching recommendations for movie ${id}:`, error);
        return [];
    }
};

// Get poster path
export const getPosterPath = (path) => {
    return `${IMAGE_PATH}${path}`;
};
