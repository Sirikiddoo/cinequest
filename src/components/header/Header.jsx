import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import SearchBar from "../searchbar/SearchBar.jsx";

function Header({ onSearch }) {
    return (
        <header className="header">
            <nav className="navbar">
                {/* Clickable title */}
                <NavLink to="/" className="nav-title">CineQuest</NavLink>

                {/* Search bar */}
                <SearchBar />

                {/* Navigation links */}
                <div className="nav-links">
                    <NavLink to="/sign-up" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        SIGN UP
                    </NavLink>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? 'nav-item active-nav-item' : 'nav-item'}>
                        LOG IN
                    </NavLink>
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