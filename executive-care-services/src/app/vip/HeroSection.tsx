"use client";  // Marking this file as a client component

import React from 'react';
import './HeroSection.css';
import assets from '../assets';

interface HeroSectionProps {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, onButtonClick }) => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
