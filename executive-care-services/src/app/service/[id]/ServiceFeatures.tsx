import React from 'react';
import './ServiceFeatures.css';
import Image from 'next/image';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface ServiceFeaturesProps {
    features: Feature[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
    return (
        <section className="service-features">
            <h2>Key Features</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <Image src={feature.icon} alt={`Icon representing ${feature.title}`} />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceFeatures;
