import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './SignUp.css';
import userIcon from '../../assets/images/circle-user.png';
import emailIcon from '../../assets/images/envelope.png';
import passwordIcon from '../../assets/images/lock.png';

function SignUp() {
    /* State for setting user data and registering */
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {registerUser} = useContext(AuthContext);

    /* Registering user function */
    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (username.length < 4) {
            setError('Username must be at least 4 characters long.');
            setLoading(false);
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            setLoading(false);
            return;
        }

        const userData = {
            username,
            email,
            password,
            info: 'testinfo',
            authorities: [{authority: 'USER'}]
        };

        try {
            await registerUser(userData);
            alert('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/sign-in'), 2000);
        } catch (e) {
            console.error('Registration failed:', e.response ? e.response.data : e.message);

            if (e.response && e.response.status === 409) {
                setError('This email is already registered. Please use a different email.');
            } else {
                setError('An error occurred during registration. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="sign-up">
            <section className="sign-up-container">
                <div className="container-text">
                    <h2 className="text-item-left">SIGN UP</h2>
                    <h2 className="text-item-right">
                        <Link to="/sign-in">
                            LOG IN
                        </Link>
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <div className="input-container">
                        <img src={userIcon} alt="User Icon" className="input-icon"/>
                        <input
                            type="text"
                            placeholder="Username (min 4 characters)"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <img src={emailIcon} alt="Email Icon" className="input-icon"/>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <img src={passwordIcon} alt="Password Icon" className="input-icon"/>
                        <input
                            type="password"
                            placeholder="Password (min 8 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
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
                    <Link className="log-in-link" to="/sign-in">LOG IN</Link>
                </div>
                <div className="home-button-container">
                    <Link to="/" className="home-button">Back to Homepage &#8594;</Link>
                </div>
            </section>
        </div>
    );
}

export default SignUp;
