import React from 'react';
import './TestimonialsSection.css'; // Use a separate CSS file for styling
import assets from '../assets';

const testimonials = [
    {
        quote: "Executive Care Services has been a lifesaver for me and my family. They took our chaotic home and completely transformed it—cleaning, organizing, and coordinating necessary repairs. They even handled the emotional task of packing up a deceased relative’s belongings with great care. Their flexible food preparation and compassionate healthcare services have made a world of difference for my father and me. Thanks to ECS, I can now focus on my career and spend more quality time with my family without the constant stress of home management.",
        name: "Jonathan K. Sullivan, Dallas, TX",
        image: assets.jonathan.src, // Placeholder image, replace with actual client photo
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
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                        <div className="testimonial-rating">
                            {Array(testimonial.rating).fill('⭐').join('')}
                        </div>
                    </div>
                ))}
            </div>
            <div className="review-logos">
            <a href="https://www.google.com/maps/place/Your+Business+Name" target="_blank" rel="noopener noreferrer">
                    <img src={assets.google_reviews.src} alt="Google Reviews" />
                </a>
                <a href="https://www.yelp.com/biz/Your-Business-Name" target="_blank" rel="noopener noreferrer">
                    <img src={assets.yelp.src} alt="Yelp Reviews" />
                </a>
            </div>
        </section>
    );
}

export default TestimonialsSection;
