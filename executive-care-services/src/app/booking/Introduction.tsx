import React from 'react';
import './Introduction.css';
import assets from '../assets';
import Image from 'next/image';

const Introduction: React.FC = () => {
    return (
        <section className="introduction">
            <div className="intro-content">
                <div className="text-content">
                    <h2>Welcome to Executive Care Services</h2>
                    <p>We provide a white-glove experience, ensuring every aspect of your home and health is meticulously cared for. Our services are tailored to meet your unique needs, delivering unparalleled comfort and convenience.</p>
                </div>
                <div className="image-content">
                    <Image
                        src={assets.booking_introduction.src}
                        alt="Caregiver assisting a client"
                        width={500} // Adjust the width value as needed
                        height={300} // Add the desired height value here
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
