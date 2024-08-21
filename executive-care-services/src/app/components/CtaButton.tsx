import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import './CtaButton.css'; // Import CSS for the button

const CtaButton: React.FC<{ buttonText: string }> = ({ buttonText }) => {
    const router = useRouter(); // Initialize useRouter

    const handleButtonClick = () => {
        router.push('/booking'); // Navigate to the /booking page
    };

    return (
        <button className="cta-button" onClick={handleButtonClick}>
            {buttonText}
        </button>
    );
};

export default CtaButton;
