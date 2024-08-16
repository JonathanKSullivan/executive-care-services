import React from 'react';
import './VIPHintSection.css';
import assets from '../assets';
import Image from 'next/image';

const VIPHintSection: React.FC = () => {
    return (
        <section className="vip-hint-section">
            <div className="vip-hint-content">
                <div className="vip-hint-text">
                    <h2>Membership to the Epicurean Lifestyle Club</h2>
                    <p>
                    For our most exclusive clientele, we offer a discreet and luxurious membership to the Epicurean Lifestyle Club, designed for those who crave not only the finest in personal care and attention but also a touch of indulgence. Inquire within to discover how we can elevate your home experience to a new level of sophistication, intimacy, and perhaps even a few secrets shared behind closed doors.
                    </p>
                </div>
                <div className="vip-hint-image-container">
                    <Image 
                        src={assets.about_ecs.src}  // Placeholder image URL
                        alt="VIP Service"
                        className="vip-hint-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default VIPHintSection;
