import './MovieCard.css'
import { Link } from 'react-router-dom'
import heart from '../../assets/images/heart.png'
import eye from '../../assets/images/eye.png'

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster"/>
            <div className="overlay">
                <div className="overlay-content">
                    <img src={heart} alt="Heart Icon" className="icon"/>
                    <img src={eye} alt="Eye Icon" className="icon"/>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default MovieCard;