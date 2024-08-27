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
                    <p><a href="tel:+13613095008">(361) 309-5008</a></p>
                </div>
                <div className="detail-item">
                    <h3>Email</h3>
                    <p><a href="mailto:info@yourexecutivecare.com">info@yourexecutivecare.com</a></p>
                </div>
                <div className="detail-item">
                    <h3>Location</h3>
                    <p><a href="https://www.google.com/maps/search/?api=1&query=2310+North+Henderson+Ave.+%231565+Dallas,+Texas+75206" target="_blank" rel="noopener noreferrer">
                        2310 North Henderson Ave. #1565 Dallas, Texas 75206
                    </a></p>
                </div>
            </div>
            <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61565108966677" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://x.com/YourExecCare" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/yourexeccare/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
