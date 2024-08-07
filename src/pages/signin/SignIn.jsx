import './SignIn.css'
import emailIcon from '../../assets/images/envelope.png'
import passwordIcon from '../../assets/images/lock.png'
import React from "react";
import {Link, NavLink} from "react-router-dom";


function SignIn() {
    return (
        <div className="sign-in">
            <section className="sign-in-container">
                <div className="container-text">
                    <h2 className="text-item-left">LOG IN</h2>
                    <h2 className="text-item-right">SIGN UP</h2>
                </div>
                <form className="sign-in-form">
                    <div className="input-container">
                        <img src={emailIcon} alt="Email Icon" className="input-icon"></img>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input-container">
                        <img src={passwordIcon} alt="Password Icon" className="input-icon"></img>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button>Continue</button>
                </form>
                <div className="sign-in-text">
                    <p className="text-left">New to CineQuest?</p>
                    <navLink to="/signin">SIGN UP</navLink>
                </div>
                <div className="home-button-container">
                    <Link to="/" className="home-button">Back to Homepage &#8594;</Link>
                </div>
            </section>
        </div>
    );
}

export default SignIn;