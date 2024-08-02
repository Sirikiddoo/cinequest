import './Favorites.css'
import Header from "../../components/header/Header.jsx";

function Favorites() {
    return (
        <div>
            {Header}
            <section>
                <h2>Favorites</h2>
                <div>
                    10 cards
                </div>
            </section>
        </div>
    );
}

export default Favorites;