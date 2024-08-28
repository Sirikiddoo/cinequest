import './Profile.css';
import Header from '../../components/header/Header.jsx';
import React, { useContext } from 'react';
import heart from '../../assets/images/heart.png';
import eye from '../../assets/images/eye.png';
import userIcon from '../../assets/images/circle-user.png';
import emailIcon from '../../assets/images/envelope.png';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function Profile() {
    const {user} = useContext(AuthContext);

    if (!user) {
        return (
            <div>
                <Header />
                <div className="profile">
                    <section className="profile-container">
                        <div className="profile-content">
                            <h2>Loading your profile...</h2>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header/>
            <div className="profile">
                <section className="profile-container">
                    <div className="profile-content">
                        <h2>Profile</h2>
                        <div className="user-data">
                            <div className="profile-user">
                                <img src={userIcon} alt="User Icon" className="user-icon"/>
                                <p>Username: {user.username}</p>
                            </div>
                            <div className="profile-email">
                                <img src={emailIcon} alt="Email Icon" className="email-icon"/>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                        <div className="user-links">
                            <article className="user-watchlist">
                                <Link to="/watchlist">
                                    <img src={eye} alt="Eye Icon" className="icon"/>
                                    <h3>Watchlist</h3>
                                </Link>
                            </article>
                            <article className="user-faves">
                                <Link to="/favorites">
                                    <img src={heart} alt="Heart Icon" className="icon"/>
                                    <h3>Favorites</h3>
                                </Link>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;
