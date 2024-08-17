"use client";

import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import assets from './assets';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href="/">
                    <Image 
                        src={assets.logo.src} 
                        alt="Executive Care Services" 
                        className="navbar-image" 
                        width={100} 
                        height={50} // Set width and height for the logo
                    />
                </Link>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link href="/about">About ECS</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/blog">Blogs</Link>
                <Link href="/case_studies">Case Studies</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/booking" className="cta-button">Book a Consultation</Link>
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
