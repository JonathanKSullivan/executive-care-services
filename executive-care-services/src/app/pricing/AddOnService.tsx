import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import './AddOnService.css';
import Image from 'next/image';

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
            {icon && (
                <Image 
                    src={icon} 
                    alt={title} 
                    className="addon-icon" 
                    width={50} // Add width property here
                    height={50} // Add height property here
                />
            )}
            <h4>{title}</h4>
            <p className="price">{price}</p>
            <Link href={`/service/${id}`} className="cta-button">
                Learn More
            </Link>
        </div>
    );
};

export default AddOnService;
