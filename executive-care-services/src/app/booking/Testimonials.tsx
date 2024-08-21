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
                    <p>&quot;Executive Care Services has been a lifesaver for me and my family. They took our chaotic home and completely transformed it—cleaning, organizing, and coordinating necessary repairs. They even handled the emotional task of packing up a deceased relative’s belongings with great care. Their flexible food preparation and compassionate healthcare services have made a world of difference for my father and me. Thanks to ECS, I can now focus on my career and spend more quality time with my family without the constant stress of home management.&quot;</p>
                    <span>- Jonathan K. Sullivan, CEO of Lailia AI</span>
                </div>
                <div className="testimonial">
                    <p>&quot;I’ve never experienced such thorough cleaning and attentive care. Highly recommended.&quot;</p>
                    <span>- Emily R.</span>
                </div>
                <div className="testimonial">
                    <p>&quot;The luxury care package truly delivers on its promise of premium service.&quot;</p>
                    <span>- David L.</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
