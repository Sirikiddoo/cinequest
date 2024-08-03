import './SignUp.css'


function SignUp() {
    return (
        <div>
            <section className="sign-up-container">
                <div className="container-text">
                <h2 className="text-item-left">SIGN UP</h2>
                <h2 className="text-item-right">LOG IN</h2>
                </div>
                <form className="sign-up-form">
                    <input type="text" placeholder="Username"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button>Join</button>
                </form>
                <div className="log-in-text">
                <p className="text-left">Already a user?</p>
                <navlink to="/signin">LOG IN</navlink>
                </div>
            </section>
        </div>
    );
}

export default SignUp;