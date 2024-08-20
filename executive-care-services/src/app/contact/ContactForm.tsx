'use client';  // Add this at the top to ensure it's a Client Component

import React, { useState } from 'react';
import './ContactForm.css'; // Ensure you have a corresponding CSS file for styling

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setFeedbackMessage('');

        try {
            const response = await fetch('https://https://executive-care-services-backend.railway.app/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFeedbackMessage('Form submitted successfully!');
                // Reset form after submission
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                setFeedbackMessage('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFeedbackMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
        </form>
    );
};

export default ContactForm;
