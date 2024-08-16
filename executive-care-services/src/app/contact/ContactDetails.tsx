import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
import './ContactDetails.css';

const ContactDetails: React.FC = () => {
    return (
        <div className="contact-details">
            <h2>Contact Information</h2>
            <div className="details-container">
                <div className="detail-item">
                    <h3>Phone</h3>
                    <p><a href="tel:+11234567890">(123) 456-7890</a></p>
                </div>
                <div className="detail-item">
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                </div>
            </div>
            <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
