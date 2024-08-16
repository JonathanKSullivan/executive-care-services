import React from 'react';
import './IntroductionSection.css';

const IntroductionSection: React.FC = () => {
    return (
        <section className="introduction-section">
            <div className="content-wrapper">
                <h1>About Us</h1>
                <p>
                    Welcome to <strong>[Your Company Name]</strong>, where <em>luxury</em> meets <em>impeccable service</em>. Our team is dedicated to transforming your home into a sanctuary of comfort and elegance. 
                    With a commitment to excellence, we bring a personal touch to every service, ensuring your complete satisfaction.
                </p>
            </div>
        </section>
    );
};

export default IntroductionSection;
