import './SignUp.css'
import userIcon from '../../assets/images/circle-user.png'
import emailIcon from '../../assets/images/envelope.png'
import passwordIcon from '../../assets/images/lock.png'
import React from "react";
import { Link } from "react-router-dom";



function SignUp() {
    return (
        <div className="sign-up">
            <section className="sign-up-container">
                <div className="container-text">
                <h2 className="text-item-left">SIGN UP</h2>
                <h2 className="text-item-right">LOG IN</h2>
                </div>
                <form className="sign-up-form">
                    <div className="input-container">
                        <img src={userIcon} alt="User Icon" className="input-icon"></img>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-container">
                        <img src={emailIcon} alt="Email Icon" className="input-icon"></img>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-container">
                        <img src={passwordIcon} alt="Password Icon" className="input-icon"></img>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Join</button>
                </form>
                <div className="log-in-text">
                <p className="text-left">Already a user?</p>
                <navlink to="/signin">LOG IN</navlink>
                </div>
                <div className="home-button-container">
                    <Link to="/" className="home-button">Back to Homepage &#8594;</Link>
                </div>
            </section>
        </div>
    );
}

export default SignUp;