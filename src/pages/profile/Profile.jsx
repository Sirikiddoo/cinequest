import './Profile.css'
import Header from "../../components/header/Header.jsx";
import React from "react";

function Profile() {
    return (
        <div>
            <Header />
            <section>
                <h2>Profile</h2>
                <div>
                    <p>Username: </p>
                    <p>Email: </p>
                </div>
                <div>
                    <article>
                        <p>img</p>
                        <h3>Watchlist</h3>
                    </article>
                    <article>
                        <p>img</p>
                        <h3>Favorites</h3>
                    </article>
                </div>
            </section>

        </div>);
}

export default Profile;