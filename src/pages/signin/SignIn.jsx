import './SignIn.css'

function SignIn() {
    return (
        <div>
            <section>
                <h2>LOG IN</h2>
                <form>
                    <input type="text" placeholder="username"></input>
                    <input type="password" placeholder="password"></input>
                    <button>Log In</button>
                </form>
            </section>
        </div>
    );
}

export default SignIn;