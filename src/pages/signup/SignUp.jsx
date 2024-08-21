import axios from 'axios';
import './SignUp.css';
import userIcon from '../../assets/images/circle-user.png';
import emailIcon from '../../assets/images/envelope.png';
import passwordIcon from '../../assets/images/lock.png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submission started');
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:3000/register', {
                email: email,
                password: password,
                username: username,
            });
            navigate('/sign-in');
        } catch (e) {
            console.error('Registration failed', e);
            toggleError(true);
        } finally {
            toggleLoading(false);
            console.log('Form submission ended');
        }
    }

    return (
        <div className="sign-up">
            <section className="sign-up-container">
                <div className="container-text">
                    <h2 className="text-item-left">SIGN UP</h2>
                    <h2 className="text-item-right">LOG IN</h2>
                </div>
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <div className="input-container">
                        <img src={userIcon} alt="User Icon" className="input-icon"/>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                console.log('Username updated:', e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <img src={emailIcon} alt="Email Icon" className="input-icon"/>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                console.log('Email updated:', e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <img src={passwordIcon} alt="Password Icon" className="input-icon"/>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                console.log('Password updated:', e.target.value);
                            }}
                            required
                        />
                    </div>
                    {error && <p>This account already exists. Try a different email address.</p>}
                    <button
                        type="submit"
                        className="form-button"
                        disabled={loading}
                    >
                        Join
                    </button>
                </form>
                <div className="log-in-text">
                    <p className="text-left">Already a user?</p>
                    <Link to="/sign-in">LOG IN</Link>
                </div>
                <div className="home-button-container">
                    <Link to="/" className="home-button">Back to Homepage &#8594;</Link>
                </div>
            </section>
        </div>
    );
}

export default SignUp;
