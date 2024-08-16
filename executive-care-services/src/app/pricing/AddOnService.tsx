import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import './AddOnService.css';

interface AddOnServiceProps {
    id: string;
    title: string;
    price: string;
    icon?: string;
    children?: React.ReactNode; 
}

const AddOnService: React.FC<AddOnServiceProps> = ({ id, title, price, icon }) => {
    return (
        <div className="addon-service">
            {icon && <img src={icon} alt={title} className="addon-icon" />}
            <h4>{title}</h4>
            <p className="price">{price}</p>
            <Link href={`/service/${id}`} className="cta-button">
                Learn More
            </Link>
        </div>
    );
};

export default AddOnService;
