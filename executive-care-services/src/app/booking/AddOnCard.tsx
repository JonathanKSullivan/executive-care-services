import React from 'react';
import Link from 'next/link'; // Use Link from next/link for routing
import './AddOnCard.css';
import Image from 'next/image';

interface AddOnCardProps {
    title: string;
    price: string;
    image: string;
    link: string;
    width?: number;  // Optional width property
    height?: number; // Optional height property
}

const AddOnCard: React.FC<AddOnCardProps> = ({ title, price, image, link, width, height }) => {
    return (
        <div className="addon-card">
            <Image 
                src={image} 
                alt={title} 
                className="addon-image" 
                width={width || 200} // Set the width here, default to 200px if width is not provided
                height={height || 200} // Set the height here, default to 200px if height is not provided
            />
            <div className="addon-content">
                <h4>{title}</h4>
                <p className="price">{price}</p>
                <Link href={link} passHref legacyBehavior>
                    <a className="cta-button">Learn More</a>
                </Link>
            </div>
        </div>
    );
};

export default AddOnCard;
