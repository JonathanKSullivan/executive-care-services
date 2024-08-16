import React from 'react';
import './ServiceTestimonials.css';
import Image from 'next/image';

interface Testimonial {
    quote: string;
    author: string;
    image?: string; // Optional image for the testimonial
}

interface ServiceTestimonialsProps {
    testimonials: Testimonial[];
}

const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = ({ testimonials }) => {
    return (
        <section className="service-testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-list">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-item" key={index}>
                        {testimonial.image && (
                            <Image src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                        )}
                        <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                        <p className="testimonial-author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceTestimonials;
