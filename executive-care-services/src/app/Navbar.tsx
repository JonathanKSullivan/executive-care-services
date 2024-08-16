"use client";

import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import assets from './assets';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={assets.logo.src} alt="Executive Care Services" className="navbar-image" />
                <a href="/">Executive Care Services</a>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="/about">About ECS</a>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blogs</a>
                <a href="/case_studies">Case Studies</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </div>
        </nav>
    );
};

export default Navbar;
