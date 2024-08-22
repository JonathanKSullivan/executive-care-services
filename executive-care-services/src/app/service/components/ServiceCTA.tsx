import React from 'react';
import './ServiceCTA.css';

interface ServiceCTAProps {
    ctaText: string;
    buttonStyle?: 'primary' | 'secondary'; // Optional button style prop
    subtext?: string; // Optional subtext or description
    icon?: React.ReactNode; // Optional icon
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ ctaText, buttonStyle = 'primary', subtext, icon }) => {
    return (
        <section className="service-cta">
            {subtext && <p className="cta-subtext">{subtext}</p>}
            <button className={`cta-button ${buttonStyle}`}>
                {icon && <span className="cta-icon">{icon}</span>}
                {ctaText}
            </button>
        </section>
    );
};

export default ServiceCTA;
