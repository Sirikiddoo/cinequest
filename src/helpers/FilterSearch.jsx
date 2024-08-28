import { IMAGE_PATH } from '../constants/Constants.jsx';

/* Filter broken images out of the search results */
export const filterSearch= (results) => {
    return results.filter(movie => {
        const posterUrl = movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : null;
        return posterUrl && posterUrl !== `${IMAGE_PATH}null`;
    });
};
