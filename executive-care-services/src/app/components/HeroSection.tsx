import React from 'react';
import './HeroSection.css';
import assets from '../assets';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

interface HeroSectionProps {
    title: string;
    description: string;
    buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText }) => {
    const router = useRouter(); // Initialize useRouter

    const handleButtonClick = () => {
        router.push('/booking'); // Navigate to the /booking page
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button 
                        aria-label={buttonText} 
                        className="hero-button" 
                        onClick={handleButtonClick} // Use the new handler
                    >
                        {buttonText}
                    </button>
                </div>
                <div className="hero-image-container">
                    <img 
                        src={assets.hero.src} 
                        alt="Placeholder Image" 
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
