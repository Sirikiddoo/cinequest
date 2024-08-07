import './Profile.css'
import Header from "../../components/header/Header.jsx";
import React from "react";
import heart from "../../assets/images/heart.png";
import eye from "../../assets/images/eye.png";

function Profile() {
    return (
        <div>
        <Header/>
        <div className="profile">
            <section className="profile-container">
                <div className="profile-content">
                    <h2>Profile</h2>
                    <div className="user-data">
                        <p>Username: </p>
                        <p>Email: </p>
                    </div>
                    <div className="user-links">
                        <article className="user-watchlist">
                            <img src={eye} alt="Eye Icon" className="icon"/>
                            <h3>Watchlist</h3>
                        </article>
                        <article className="user-faves">
                            <img src={heart} alt="Heart Icon" className="icon"/>
                            <h3>Favorites</h3>
                        </article>
                    </div>
                </div>
            </section>

        </div>
        </div>);
}

export default Profile;