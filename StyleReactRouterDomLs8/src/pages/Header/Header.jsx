import React from 'react';

import { NavLink } from 'react-router-dom';

import './header.scss'

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <nav className="header__nav">
                    <NavLink to="/" className="header__link">Home</NavLink>
                    <NavLink to="/countries" className="header__link">Countries</NavLink>
                </nav>
            </div>
        </header>
    );
}