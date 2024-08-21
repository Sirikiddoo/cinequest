import './Profile.css';
import Header from "../../components/header/Header.jsx";
import React, { useContext, useEffect, useState } from 'react';
import heart from "../../assets/images/heart.png";
import eye from "../../assets/images/eye.png";
import userIcon from "../../assets/images/circle-user.png";
import emailIcon from "../../assets/images/envelope.png";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token');
            if (!token || !user) {
                console.error("No token found or user not logged in");
                return;
            }

            try {
                const result = await axios.get(`http://localhost:3000/600/users/${user.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [user]);

    if (!profileData) {
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
            <Header />
            <div className="profile">
                <section className="profile-container">
                    <div className="profile-content">
                        <h2>Profile</h2>
                        <div className="user-data">
                            <div className="profile-user">
                                <img src={userIcon} alt="User Icon" className="user-icon" />
                                <p>Username: {profileData.username}</p>
                            </div>
                            <div className="profile-email">
                                <img src={emailIcon} alt="Email Icon" className="email-icon" />
                                <p>Email: {profileData.email}</p>
                            </div>
                        </div>
                        <div className="user-links">
                            <article className="user-watchlist">
                                <img src={eye} alt="Eye Icon" className="icon" />
                                <h3>Watchlist</h3>
                            </article>
                            <article className="user-faves">
                                <img src={heart} alt="Heart Icon" className="icon" />
                                <h3>Favorites</h3>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;
