import React from 'react';
import './TestimonialsSection.css'; // Use a separate CSS file for styling
import assets from '../assets';
import Image from 'next/image';

const testimonials = [
    {
        quote: "Natasha was great. She’s cleaned thoroughly and was very understanding and friendly. I can now focus on my career and spend more quality time with my family without the constant stress of home management. Definitely my preferred cleaner going forward.",
        name: "Dilawer K., Frisco, TX",
        image: assets.testimonial_placeholder.src, // Placeholder image, replace with actual client photo if available
        rating: 5,
    },
    {
        quote: "Natasha has consistently provided exceptional service. She’s always thorough and professional, making my life easier. I can now focus on my career and spend more quality time with my family without the constant stress of home management.",
        name: "Tyna H., Garland, TX",
        image: assets.testimonial_placeholder.src, // Placeholder image, replace with actual client photo if available
        rating: 5,
    },
    {
        quote: "Natasha has been amazing! I highly recommend her to anyone looking for a dependable cleaner. She’s made a significant difference in my life. I can now focus on my career and spend more quality time with my family without the constant stress of home management.",
        name: "BeJay C., Plano, TX",
        image: assets.testimonial_placeholder.src, // Placeholder image, replace with actual client photo if available
        rating: 5,
    },
    {
        quote: "Executive Care Services has been a lifesaver for me and my family. They took our chaotic home and completely transformed it—cleaning, organizing, and coordinating necessary repairs. I can now focus on my career and spend more quality time with my family without the constant stress of home management.",
        name: "Jonathan S., Dallas, TX - CEO of an AI Company",
        image: assets.jonathan.src, // Replace with actual client photo
        rating: 5,
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <Image 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="testimonial-image" 
                            width={200} 
                            height={200} 
                        />
                        <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                        <div className="testimonial-rating">
                            {Array(testimonial.rating).fill('⭐').join('')}
                        </div>
                    </div>
                ))}
            </div>
            <div className="review-logos">
                <a href="https://www.google.com/maps/place/Your+Business+Name" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={assets.google_reviews.src} 
                        alt="Google Reviews" 
                        width={100} 
                        height={30} 
                    />
                </a>
                <a href="https://www.yelp.com/biz/Your-Business-Name" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={assets.yelp.src} 
                        alt="Yelp Reviews" 
                        width={100} 
                        height={30} 
                    />
                </a>
            </div>
        </section>
    );
};

export default TestimonialsSection;
