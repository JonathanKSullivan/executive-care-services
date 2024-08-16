import React from 'react';
import './ServiceHeader.css';

interface ServiceHeaderProps {
    title: string;
    image: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ title, image }) => {
    const headerStyle = {
        backgroundImage: `url(${image})`,
    };

    return (
        <header className="service-header" style={headerStyle} aria-label={title}>
            <div className="overlay"></div>
            <h1>{title}</h1>
        </header>
    );
};

export default ServiceHeader;
