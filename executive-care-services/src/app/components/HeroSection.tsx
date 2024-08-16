import React from 'react';
import './HeroSection.css';
import assets from '../assets';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import Image from 'next/image';

interface HeroSectionProps {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
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
                    <Image 
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
