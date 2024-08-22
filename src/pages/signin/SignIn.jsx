import './SignIn.css'
import emailIcon from '../../assets/images/envelope.png'
import passwordIcon from '../../assets/images/lock.png'
import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            });
            console.log(result.data);

            login(result.data.accessToken);

        } catch(e) {
            console.error('Login failed', e);
            toggleError(true);
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
                        <img src={emailIcon} alt="Email Icon" className="input-icon"></img>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <img src={passwordIcon} alt="Password Icon" className="input-icon"></img>
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
                {error && <p>Login failed. Please try again.</p>}
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