import './Profile.css'
import Header from "../../components/header/Header.jsx";
import React from "react";
import heart from "../../assets/images/heart.png";
import eye from "../../assets/images/eye.png";
import userIcon from "../../assets/images/circle-user.png";
import emailIcon from "../../assets/images/envelope.png";

function Profile() {
    return (
        <div>
            <Header/>
            <div className="profile">
                <section className="profile-container">
                    <div className="profile-content">
                        <h2>Profile</h2>
                        <div className="user-data">
                            <div className="profile-user">
                                <img src={userIcon} alt="User Icon" className="user-icon"></img>
                                <p>Username</p>
                            </div>
                            <div className="profile-email">
                                <img src={emailIcon} alt="Email Icon" className="email-icon"></img>
                                <p>Email</p>
                            </div>
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