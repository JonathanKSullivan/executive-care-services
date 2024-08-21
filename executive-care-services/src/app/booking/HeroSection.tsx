import React from 'react';
import './HeroSection.css';
import assets from '../assets';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${assets.booking_hero.src})` }}>
            <div className="hero-content">
                <h1>Elevate Your Lifestyle with Bespoke Home and Health Services</h1>
                <p>Personalized care, expert cleaning, and gourmet meals tailored to your needs.</p>
            </div>
        </section>
    );
};

export default HeroSection;
