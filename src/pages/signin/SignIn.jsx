import './SignIn.css';
import userIcon from '../../assets/images/circle-user.png';
import passwordIcon from '../../assets/images/lock.png';
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, authenticateUser } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            const token = await authenticateUser({ username, password });
            console.log("Token:", token);

            if (token && typeof token === 'string') {
                login(token);
            } else {
                console.error("Invalid token received");
                setError('An unknown error occurred. Please try again.');
            }

        } catch (e) {
            console.error('Login failed', e);
            if (e.message === 'Invalid username') {
                setError('Username not found. Please check your username.');
            } else if (e.message === 'Invalid password') {
                setError('Incorrect password. Please try again.');
            } else {
                setError('Login failed. Please try again.');
            }
        }
    }

    return (
        <div className="sign-in">
            <section className="sign-in-container">
                <div className="container-text">
                    <h2 className="text-item-left">LOG IN</h2>
                    <h2 className="text-item-right">
                        <Link to="/sign-up">
                            SIGN UP
                        </Link>
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <div className="input-container">
                        <img src={userIcon} alt="User Icon" className="input-icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <img src={passwordIcon} alt="Password Icon" className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="form-button"
                    >
                        Continue
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <div className="sign-up-text">
                    <p className="text-left">New to CineQuest?</p>
                    <Link className="sign-up-link" to="/sign-up">SIGN UP</Link>
                </div>
                <div className="home-button-container">
                    <Link to="/" className="home-button">Back to Homepage &#8594;</Link>
                </div>
            </section>
        </div>
    );
}

export default SignIn;
