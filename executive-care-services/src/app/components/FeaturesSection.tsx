import React from 'react';
import './FeaturesSection.css'; // Use a separate CSS file for better styling

const features = [
    {
        title: 'Concierge-Level Customer Support',
        description: 'Enjoy reliable assistance with extended hours, ensuring your needs are met promptly and efficiently.',
    },
    {
        title: 'Customizable Service Packages',
        description: 'Tailor your service plan to perfectly match your lifestyle and preferences, with exclusive offerings.',
    },
    {
        title: 'Discreet, Professional Service',
        description: 'Our highly trained team delivers top-notch service with the utmost respect for your privacy and comfort.',
    },
    {
        title: 'Personalized Health and Wellness Care',
        description: 'Receive holistic care solutions designed to support your well-being, coordinated with your medical team.',
    },
    {
        title: 'Gourmet-Quality Meal Prep',
        description: 'Indulge in chef-prepared meals, customized to your dietary preferences and made with fresh, locally-sourced ingredients.',
    },
    {
        title: 'Eco-Friendly Cleaning Products',
        description: 'We use premium, non-toxic cleaning products to keep your home safe and sustainable without compromising on quality.',
    },
    {
        title: 'Flexible Scheduling',
        description: 'Our services are available at times that suit your schedule, offering ultimate convenience and adaptability.',
    },
    {
        title: 'Commitment to Sustainability',
        description: 'We are dedicated to reducing our environmental footprint through eco-conscious practices in every aspect of our service.',
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <h2 className="section-title">What We Offer</h2>
            <ul className="features-list">
                {features.map((feature, index) => (
                    <li key={index} className="feature-item">
                        <i className="fas fa-check-circle feature-icon"></i>
                        <div className="feature-content">
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FeaturesSection;
