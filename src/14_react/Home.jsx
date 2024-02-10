import React, { useState } from 'react';
import './home.css'; // Import your CSS file for styling

const Home = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <div>
            <div>
                <strong>Responsive navbar in react js</strong>
            </div>
            <nav className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="content">
                {/* Your page content goes here */}
            </div>
        </div>
    );
};

export default Home;
