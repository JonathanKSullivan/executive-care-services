import React from 'react';
import './ServiceDescription.css';

interface ServiceDescriptionProps {
    description: string | string[]; // Accept a string or an array of strings
    title?: string; // Optional title
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ description, title }) => {
    return (
        <section className="service-description">
            {title && <h2>{title}</h2>}
            {Array.isArray(description) ? (
                description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))
            ) : (
                <p>{description}</p>
            )}
        </section>
    );
};

export default ServiceDescription;
