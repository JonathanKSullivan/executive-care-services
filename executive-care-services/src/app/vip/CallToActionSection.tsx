"use client";

import React from 'react';
import './CallToActionSection.css';

interface CallToActionSectionProps {
    title: string;
    buttonText: string;
    onButtonClick: () => void;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ title, buttonText, onButtonClick }) => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="section-title">{title}</h2>
                <button 
                    aria-label={buttonText} 
                    className="cta-button" 
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default CallToActionSection;
