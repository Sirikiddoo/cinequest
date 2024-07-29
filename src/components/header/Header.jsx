import './Header.css'
import navBar from "../navbar/NavBar.jsx";

function Header() {
    return (
        <div>
            <header>
                <h2>CineQuest</h2>
                <input type="text" placeholder="search film"></input>
                {navBar}
            </header>
        </div>
    );
}

export default Header;