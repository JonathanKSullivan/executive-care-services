import React from 'react';
import './CallToActionSection.css';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const CallToActionSection: React.FC = () => {
    const router = useRouter(); // Initialize useRouter

    const handleButtonClick = () => {
        router.push('/booking'); // Navigate to the /booking page
    };

    return (
        <section className="cta-section">
            <h2 className="cta-title">Are You Ready to Indulge in Luxury?</h2>
            <p className="cta-subtitle">Experience personalized care, sensual services, and gourmet delights tailored exclusively for you.</p>
            <button className="cta-button" onClick={handleButtonClick}>
                Schedule Your Exclusive Consultation Today
            </button>
        </section>
    );
}

export default CallToActionSection;
