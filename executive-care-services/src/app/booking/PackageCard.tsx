import React from 'react';
import './PackageCard.css';
import Image from 'next/image';

interface PackageCardProps {
    title: string;
    price: string;
    description: string;
    image: string;
    link: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
}

const PackageCard: React.FC<PackageCardProps> = ({ title, price, description, image, link, width = 300, height = 200 }) => { // Default width to 300 and height to 200 if not provided
    return (
        <div className="package-card">
            <Image src={image} alt={title} className="package-image" width={width} height={height} />
            <div className="package-details">
                <h3>{title}</h3>
                <p className="price">{price}</p>
                <p className="description">{description}</p>
                <a href={link} className="detail-button">Learn More</a> {/* Updated button class */}
            </div>
        </div>
    );
};

export default PackageCard;
