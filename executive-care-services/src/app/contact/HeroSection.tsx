import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <section className="hero-section" aria-label="Hero Section">
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
};

export default HeroSection;
