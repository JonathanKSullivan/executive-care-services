import React from 'react';
import Link from 'next/link';
import './SubscriptionPackage.css';

interface SubscriptionPackageProps {
    id: string;
    title: string;
    price: string;
    description: string;
    services: { name: string }[];
    image: string;
    children?: React.ReactNode; 
}

const SubscriptionPackage: React.FC<SubscriptionPackageProps> = ({ id, title, price, description, services, image }) => {
    return (
        <div className="subscription-package">
            <div className="package-header">
                <img src={image} alt={title} className="package-image" />
                <h3>{title}</h3>
                <p className="price">{price}</p>
            </div>
            <p className="description">{description}</p>
            <hr className="divider" />
            <ul>
                {services.map((service, index) => (
                    <li key={index} className="service-item">
                        <hr className="service-divider" />
                        {service.name}
                    </li>
                ))}
            </ul>
            <Link href={`/service/${id}`} className="cta-button">
                Learn More
            </Link>
        </div>
    );
};

export default SubscriptionPackage;
