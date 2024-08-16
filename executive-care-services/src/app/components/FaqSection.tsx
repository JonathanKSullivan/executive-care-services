import React from 'react';
import './FaqSection.css'; // Separate CSS file for styling

const faqs = [
    {
        question: 'How are the services customized to my needs?',
        answer: 'We begin with a thorough consultation to understand your lifestyle and preferences, then tailor our services to meet your specific needs.',
    },
    {
        question: 'Can I choose individual services?',
        answer: 'Yes, you can select services individually or as part of a package. We offer flexibility to ensure you get exactly what you need, and you can adjust your services as your needs change.',
    },
    {
        question: 'What areas do you serve?',
        answer: 'We currently serve Dallas, Houston, Austin, and San Antonio, with plans to expand soon.',
    },
    {
        question: 'What if I need to reschedule or cancel a service?',
        answer: 'We understand that plans change. You can reschedule or cancel your service with adequate notice. Please contact us directly for details on our cancellation policy.',
    },
    {
        question: 'How do you ensure the safety and security of my home?',
        answer: 'Our staff is thoroughly vetted and trained to respect your privacy and security. We take every precaution to ensure your home is safe and secure during our visits.',
    },
    {
        question: 'What happens if I’m not satisfied with the service?',
        answer: 'Your satisfaction is our priority. If you’re not happy with any aspect of our service, please let us know immediately, and we’ll do our best to make it right.',
    },
];

const FaqSection: React.FC = () => {
    return (
        <section className="faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3 className="faq-question">{faq.question}</h3>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
            <div className="faq-cta">
                <p>Have more questions? <a href="/contact">Feel free to reach out to us anytime!</a></p>
                <p>Ready to experience our services? <a href="/booking">Book your consultation today!</a></p>
            </div>
        </section>
    );
}

export default FaqSection;
