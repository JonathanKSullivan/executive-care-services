import React from 'react';
import './BenefitsSection.css'; // Use a separate CSS file for styling
import assets from '../assets';
import Image from 'next/image';

const benefits = [
    {
        title: 'Immaculate Living Spaces',
        description: 'Our expert cleaning team ensures your home remains spotless and welcoming, perfect for relaxation or entertaining guests.',
        icon: assets.benefit1 // Placeholder icon, replace with actual icon URL
    },
    {
        title: 'Personalized Health Care',
        description: 'Receive professional, compassionate health care in the comfort of your home, tailored to your specific needs and preferences.',
        icon: assets.benefit2 // Placeholder icon, replace with actual icon URL
    },
    {
        title: 'Gourmet Dining at Home',
        description: 'Enjoy chef-prepared meals, customized to your taste, delivered fresh to your dining table.',
        icon: assets.benefit3
    },
];

const BenefitsSection: React.FC = () => {
    return (
        <section className="benefits-section">
            <h2 className="section-title">Why Choose Executive Cleaning Service?</h2>
            <div className="benefits-container">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <Image 
                            src={benefit.icon.src} 
                            alt={benefit.title} 
                            className="benefit-icon" 
                            width={100} // Set the width here, e.g., 100px
                            height={100} // Set the height here, e.g., 100px
                        />
                        <h3 className="benefit-title">{benefit.title}</h3>
                        <p className="benefit-description">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BenefitsSection;
