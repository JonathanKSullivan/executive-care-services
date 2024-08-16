import React from 'react';
import './Footer.css';
import assets from './assets';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-column footer-about">
                    <Image 
                        src={assets.logo.src} 
                        alt="Executive Cleaning Service Logo" 
                        className="footer-logo" 
                        width={150} // Set your desired width here
                        height={150} // Set your desired width here
                    />
                    <p className="footer-description">
                        Transforming homes with personalized care, expert cleaning, and gourmet meals tailored to your lifestyle.
                    </p>
                </div>
                <div className="footer-column footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column footer-contact">
                    <h4>Get in Touch</h4>
                    <p>Email: <a href="mailto:info@executivecleaning.com">info@executivecleaning.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
                    <p>Location: Dallas, TX</p>
                    <div className="footer-socials">
                        <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                        <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-column footer-legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Website designed by <a href="https://www.linkedin.com/in/jonathanksullivan">Jonathan K Sullivan</a></p>
            </div>
        </footer>
    );
};

export default Footer;
