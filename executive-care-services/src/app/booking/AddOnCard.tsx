import React from 'react';
import Link from 'next/link'; // Use Link from next/link for routing
import './AddOnCard.css';
import Image from 'next/image';

interface AddOnCardProps {
    title: string;
    price: string;
    image: string;
    link: string;
}

const AddOnCard: React.FC<AddOnCardProps> = ({ title, price, image, link }) => {
    return (
        <div className="addon-card">
            <Image src={image} alt={title} className="addon-image" />
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
