'use client'

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import './FinalCTA.css';

const FinalCTA: React.FC = () => {
    const router = useRouter(); // Initialize useRouter

    const handleButtonClick = () => {
        router.push('/booking'); // Navigate to the /booking page
    };

    return (
        <div className="final-cta">
            <h2 className="cta-title">Ready to Elevate Your Home Experience?</h2>
            <p className="cta-subtitle">Contact us today to discuss the perfect package for your needs, and let us take care of the details so you can focus on what truly matters.</p>
            <button className="cta-button" onClick={handleButtonClick}>
                Schedule Your Exclusive Consultation Today
            </button>
        </div>
    );
};

export default FinalCTA;
