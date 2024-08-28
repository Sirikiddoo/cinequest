import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import SearchBar from '../searchBar/SearchBar.jsx';
import {AuthContext} from '../../context/AuthContext';

function Header({onSearch}) {
    const {user, logout} = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    /* Responsive Hamburger Menu */
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <NavLink to="/" className="nav-title">CineQuest</NavLink>
                <SearchBar onSearch={onSearch}/>
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {user ? (
                        <>
                            <NavLink to="/profile"
                                     className={({isActive}) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                                Hello, {user.username}
                            </NavLink>
                            <button onClick={logout} className="nav-item nav-button">LOG OUT</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/sign-up"
                                     className={({isActive}) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                                SIGN UP
                            </NavLink>
                            <NavLink to="/sign-in"
                                     className={({isActive}) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                                LOG IN
                            </NavLink>
                        </>
                    )}
                    <NavLink to="/library"
                             className={({isActive}) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        FILMS
                    </NavLink>
                    <NavLink to="/watchlist"
                             className={({isActive}) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        WATCHLIST
                    </NavLink>
                    <NavLink to="/favorites"
                             className={({isActive}) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        FAVORITES
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
