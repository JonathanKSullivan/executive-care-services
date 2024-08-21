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
            <div className="addon-image-container">
                <Image 
                    src={image} 
                    alt={title} 
                    className="addon-image" 
                    width={width || 300} // Default width set to 300px
                    height={height || 200} // Default height set to 200px
                />
            </div>
            <div className="addon-content">
                <h4>{title}</h4>
                <p className="price">{price}</p>
                <Link href={link} passHref>
                    <a className="detail-button">Learn More</a> {/* Ensure only one child element (the <a> tag) is passed to Link */}
                </Link>
            </div>
        </div>
    );
};

export default AddOnCard;
