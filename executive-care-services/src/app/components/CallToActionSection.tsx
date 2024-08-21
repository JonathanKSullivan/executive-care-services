import React from 'react';
import './CallToActionSection.css';
import CtaButton from './CtaButton'; // Import the new CtaButton component

const CallToActionSection: React.FC = () => {
    return (
        <section className="cta-section">
            <h2 className="cta-title">Are You Ready to Indulge in Luxury?</h2>
            <p className="cta-subtitle">Experience personalized care, sensual services, and gourmet delights tailored exclusively for you.</p>
            <CtaButton buttonText="Schedule Your Exclusive Consultation Today" />
        </section>
    );
};

export default CallToActionSection;
