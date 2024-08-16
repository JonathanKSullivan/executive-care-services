"use client";

import React from 'react';
import './FAQSection.css';

const faqs = [
    {
        question: 'What does the lingerie or topless service include?',
        answer: 'Our lingerie or topless service offers all the luxurious, personalized care of our Epicurean Lifestyle Society, enhanced by the intimate allure of elegant lingerie or topless service, creating a uniquely sensual experience tailored just for you.',
    },
    {
        question: 'Is the lingerie or topless service discreet?',
        answer: 'Discretion is the cornerstone of our service. Your privacy and comfort are our top priorities, ensuring a serene, intimate experience that respects your boundaries.',
    },
    {
        question: 'Can I customize the attire and services?',
        answer: 'Absolutely. Your desires guide every aspect of our Epicurean Lifestyle Society, from selecting the perfect lingerie to tailoring the service level, adding those personal touches that make your experience truly unique.',
    },
    {
        question: 'What areas do you serve?',
        answer: 'We proudly serve Dallas, Houston, Austin, and San Antonio, with plans to bring our luxurious, intimate experiences to more cities soon.',
    },
];

const FAQSection: React.FC = () => {
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
        </section>
    );
};

export default FAQSection;
