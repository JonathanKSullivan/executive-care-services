import React from 'react';
import './PackageCard.css';
import Image from 'next/image';

interface PackageCardProps {
    title: string;
    price: string;
    description: string;
    image: string;
    link: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, price, description, image, link }) => {
    return (
        <div className="package-card">
            <Image src={image} alt={title} className="package-image" />
            <div className="package-details">
                <h3>{title}</h3>
                <p className="price">{price}</p>
                <p className="description">{description}</p>
                <a href={link} className="cta-button">Learn More</a>
            </div>
        </div>
    );
};

export default PackageCard;
