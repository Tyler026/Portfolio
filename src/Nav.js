import React from 'react';

const Navigation = (props) => {
    return (
        <header className="main-header">
        <div>
            <nav className="main-nav">
            <ul className="main-nav__items">
                <li className="main-nav__item">
                    <a href="About/index.html">About</a>
                </li>
                <li className="main-nav__item">
                    <a href="Projects/index.html">Projects</a>
                </li>
                <li className="main-nav__item">
                    <a href="Contact/index.html">Contact</a>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
}

export default Navigation;