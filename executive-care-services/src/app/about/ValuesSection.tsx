import React from 'react';
import './ValuesSection.css';
import assets from '../assets';
import Image from 'next/image';

const values = [
    { 
        title: 'Luxury', 
        description: 'We provide an unparalleled level of service, ensuring that every detail is attended to with the utmost care and sophistication.', 
        icon: assets.about_values_luxury.src
    },
    { 
        title: 'Trust', 
        description: 'Our clients trust us to deliver consistent, high-quality experiences, and we take that responsibility seriously.', 
        icon: assets.about_values_trust.src
    },
    { 
        title: 'Respect', 
        description: 'We treat our clients with the respect and courtesy they deserve, fostering lasting relationships built on mutual respect.', 
        icon: assets.about_values_respect.src
    },
    { 
        title: 'Excellence', 
        description: 'We strive for excellence in every service we provide, going above and beyond to exceed our clients’ expectations.', 
        icon: assets.about_values_excellence.src
    },
];

const ValuesSection: React.FC = () => {
    return (
        <section className="values-section">
            <h2>Our Values</h2>
            <p>
                At [Your Company Name], we believe in delivering not just services, but experiences that embody luxury, trust, respect, and excellence.
                Our values are at the heart of everything we do, ensuring that our clients receive nothing but the best.
            </p>
            <div className="values-container">
                {values.map((value, index) => (
                    <div key={index} className="value-card">
                        <Image src={value.icon} alt={value.title} className="value-icon" />
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;
