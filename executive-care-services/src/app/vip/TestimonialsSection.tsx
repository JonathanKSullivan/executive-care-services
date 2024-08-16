"use client";

import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
    {
        quote: "The VIP service is beyond anything I’ve ever experienced. The attention to detail, combined with the alluring attire of the staff, creates an atmosphere of pure indulgence.",
        name: "James R., Dallas, TX",
    },
    {
        quote: "The combination of luxury, professionalism, and sensuality is unparalleled. The topless service added a unique and unforgettable touch to my home experience.",
        name: "Michael S., Houston, TX",
    },
    {
        quote: "I was hesitant at first, but the service was so discreet and tasteful. It turned out to be the most luxurious and enjoyable experience I’ve ever had at home.",
        name: "David T., Austin, TX",
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
