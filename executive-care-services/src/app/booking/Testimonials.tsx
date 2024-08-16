import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                <div className="testimonial">
                    <p>"My home has never been this clean, and the wellness checks give me peace of mind."</p>
                    <span>- John D.</span>
                </div>
                <div className="testimonial">
                    <p>"The gourmet dinners are a real treat!"</p>
                    <span>- Jane S.</span>
                </div>
                <div className="testimonial">
                    <p>"ECS has been a game-changer, allowing me more time to focus on my work and family."</p>
                    <span>- Jonathan K. Sullivan, CEO of Lailia AI</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
