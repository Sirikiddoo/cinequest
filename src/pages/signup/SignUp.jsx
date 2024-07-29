import './SignUp.css'


function SignUp() {
    return (
        <div>
            <section>
                <h2>SIGN UP</h2>
                <h2>LOG IN</h2>
                <form>
                    <input type="text" placeholder="username"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <button>Join</button>
                </form>
                <p>Already a user?</p>
                <navlink to="/signin">LOG IN</navlink>
            </section>
        </div>
    );
}

export default SignUp;