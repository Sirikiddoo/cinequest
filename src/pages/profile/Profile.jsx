import './Profile.css'
import Header from "../../components/header/Header.jsx";

function Profile() {
    return (
        <div>
            {Header}
            <section>
                <h2>Profile</h2>
                <div>
                    <p>Username: </p>
                    <p>Email: </p>
                </div>
                <div>
                    <article>
                        <img src={}/>
                        <h3>Watchlist</h3>
                    </article>
                    <article>
                        <img src={}/>
                        <h3>Favorites</h3>
                    </article>
                </div>
            </section>

        </div>);
}

export default Profile;