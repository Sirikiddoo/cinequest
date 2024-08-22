import { IMAGE_PATH } from '../constants/Constants.jsx';

export const filterSearch= (results) => {
    return results.filter(movie => {
        const posterUrl = movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : null;
        return posterUrl && posterUrl !== `${IMAGE_PATH}null`;
    });
};
