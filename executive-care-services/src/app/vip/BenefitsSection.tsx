"use client";

import React from 'react';
import './BenefitsSection.css';
import assets from '../assets';
import Image from 'next/image';

const benefits = [
    {
        title: 'Sensual Cleaning Experience',
        description: 'Transform your space into a haven of cleanliness and sensuality. Our professionals perform their duties in luxurious lingerie or topless, adding a unique and intimate touch to your home environment.',
        icon: assets.vip_benefit_1.src
    },
    {
        title: 'Personalized Health Care',
        description: 'Experience top-tier health and personal care, all delivered with a touch of elegance and allure. Our discreet staff ensures your every need is met with the utmost care and attention.',
        icon: assets.vip_benefit_2.src
    },
    {
        title: 'Gourmet Dining with a Sensual Twist',
        description: 'Indulge in chef-prepared meals served in an intimate setting, with our staff attending to you in elegant lingerie or topless—creating a dining experience like no other.',
        icon: assets.vip_benefit_3.src
    },
    {
        title: 'Exclusive Lingerie or Topless Service',
        description: 'The highlight of our Epicurean Lifestyle Society—our team’s attire adds an extra layer of allure, making your experience not just luxurious, but tantalizingly unforgettable.',
        icon: assets.vip_benefit_4.src
    },
];

const BenefitsSection: React.FC = () => {
    return (
        <section className="benefits-section">
            <h2 className="section-title">Why Choose Our Epicurean Lifestyle Society?</h2>
            <div className="benefits-container">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <Image src={benefit.icon} alt={benefit.title} className="benefit-icon" />
                        <h3 className="benefit-title">{benefit.title}</h3>
                        <p className="benefit-description">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsSection;
