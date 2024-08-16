"use client";

import React from 'react';
import './FeatureSection.css';

const features = [
    {
        title: 'Personalized Attention, Day and Night',
        description: 'Enjoy 24/7 access to me, your dedicated provider, ensuring every need and desire is met with care and discretion.'
    },
    {
        title: 'Custom-Tailored Sensual Packages',
        description: 'Each service package is uniquely crafted to match your tastes, providing a luxurious and unforgettable experience.'
    },
    {
        title: 'Discreet and Alluring Service',
        description: 'I offer a professional and charming presence, maintaining the highest level of discretion while delivering a sensual touch.'
    },
    {
        title: 'Intimate Health Care Coordination',
        description: 'Experience seamless, personalized care with close coordination between your medical team and me, prioritizing your well-being.'
    },
    {
        title: 'Gourmet Meals with a Sensual Twist',
        description: 'Delight in chef-prepared meals, crafted with passion and served in an intimate, enticing setting that heightens your senses.'
    },
    {
        title: 'Lingerie or Topless Service',
        description: 'Enhance your experience with the option of lingerie or topless service, designed to captivate and please your senses.'
    }
];

const FeatureSection: React.FC = () => {
    return (
        <section className="features-section">
            <h2 className="section-title">Indulge in My Exclusive Epicurean Lifestyle Society Experience</h2>
            <ul className="features-list">
                {features.map((feature, index) => (
                    <li key={index} className="feature-item">
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FeatureSection;
