import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import SearchBar from "../searchbar/SearchBar.jsx";
import { AuthContext } from '../../context/AuthContext';

function Header({ onSearch }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="header">
            <nav className="navbar">
                {/* Clickable title */}
                <NavLink to="/" className="nav-title">CineQuest</NavLink>

                {/* Search bar */}
                <SearchBar onSearch={onSearch} />

                {/* Navigation links */}
                <div className="nav-links">
                    {user ? (
                        <>
                            <NavLink to="/profile" className="nav-item">
                                Hello, {user.username}
                            </NavLink>
                            <button onClick={logout} className="nav-item nav-button">LOG OUT</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/sign-up" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                                SIGN UP
                            </NavLink>
                            <NavLink to="/sign-in" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                                LOG IN
                            </NavLink>
                        </>
                    )}
                    <NavLink to="/library" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        FILMS
                    </NavLink>
                    <NavLink to="/watchlist" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        WATCHLIST
                    </NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        FAVORITES
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
