import React from 'react';
import './Introduction.css';
import assets from '../assets';

const Introduction: React.FC = () => {
    return (
        <section className="introduction">
            <div className="intro-content">
                <div className="text-content">
                    <h2>Welcome to Executive Care Services</h2>
                    <p>We provide a white-glove experience, ensuring every aspect of your home and health is meticulously cared for. Our services are tailored to meet your unique needs, delivering unparalleled comfort and convenience.</p>
                </div>
                <div className="image-content">
                    <img src={assets.booking_introduction.src} alt="Caregiver assisting a client" />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
