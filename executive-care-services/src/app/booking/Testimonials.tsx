import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                <div className="testimonial">
                    <p>&quot;My home has never been this clean, and the wellness checks give me peace of mind.&quot;</p>
                    <span>- John D.</span>
                </div>
                <div className="testimonial">
                    <p>&quot;The gourmet dinners are a real treat!&quot;</p>
                    <span>- Jane S.</span>
                </div>
                <div className="testimonial">
                    <p>&quot;ECS has been a game-changer, allowing me more time to focus on my work and family.&quot;</p>
                    <span>- Jonathan K. Sullivan, CEO of Lailia AI</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
