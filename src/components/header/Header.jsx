import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import SearchBar from "../searchbar/SearchBar.jsx";

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                {/* Clickable title */}
                <NavLink to="/" className="nav-title">CineQuest</NavLink>

                {/* Search bar */}
                <SearchBar />

                {/* Navigation links */}
                <div className="nav-links">
                    <NavLink to="/sign-up" className="nav-item" activeClassName="active-nav-item">SIGN UP</NavLink>
                    <NavLink to="/sign-in" className="nav-item" activeClassName="active-nav-item">LOG IN</NavLink>
                    <NavLink to="/library" className="nav-item" activeClassName="active-nav-item">FILMS</NavLink>
                    <NavLink to="/watchlist" className="nav-item" activeClassName="active-nav-item">WATCHLIST</NavLink>
                    <NavLink to="/favorites" className="nav-item" activeClassName="active-nav-item">FAVORITES</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
