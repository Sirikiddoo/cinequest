import './MovieCard.css'
import barbarian from '../../assets/images/819648-barbarian-0-2000-0-3000-crop.jpg'
import heart from '../../assets/images/heart.png'
import eye from '../../assets/images/eye.png'

function MovieCard() {
    return (
        <div className="movie-card">
            <img src={barbarian} alt="Barbarian Film Poster" className="movie-poster"/>
            <div className="overlay">
                <div className="overlay-content">
                    <img src={heart} alt="Heart Icon" className="icon"/>
                    <img src={eye} alt="Eye Icon" className="icon"/>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;