import './Error.css'


function Error() {
    return (
        <div className="error-page">
            <div className="error-container">
            <h1>Oops!</h1>
            <h3>404 - Page not found</h3>
            <p>The page you are looking for might have been removed, <br/>
                had its name changed or is temporarily unavailable.</p>
            <button>GO TO HOMEPAGE</button>
            </div>
        </div>
    );
}

export default Error;