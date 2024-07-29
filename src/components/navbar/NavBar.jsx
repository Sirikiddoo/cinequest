import './NavBar.css'

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/signup">SIGN UP</a></li>
                    <li><a href="/signin">SIGN IN</a></li>
                    <li><a href="/library">FILMS</a></li>
                    <li><a href="/watchlist">WATCHLIST</a></li>
                    <li><a href="/favorites">FAVORITES</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;