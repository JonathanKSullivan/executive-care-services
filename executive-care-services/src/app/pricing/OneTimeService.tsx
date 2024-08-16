import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import './OneTimeService.css';

interface OneTimeServiceProps {
    id: string;
    title: string;
    price: string;
    description: string;
    children?: React.ReactNode; 
}

const OneTimeService: React.FC<OneTimeServiceProps> = ({ id, title, price, description }) => {
    return (
        <div className="onetime-service">
            <h4>{title}</h4>
            <p className="price">{price}</p>
            <p>{description}</p>
            <Link href={`/service/${id}`} className="cta-button">
                Learn More
            </Link>
        </div>
    );
};

export default OneTimeService;
