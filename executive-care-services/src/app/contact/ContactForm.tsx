'use client';  // Add this at the top to ensure it's a Client Component

import React, { useState } from 'react';
import './ContactForm.css'; // Ensure you have a corresponding CSS file for styling

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('https://api.yourexecutivecare.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } else {
            alert('Failed to submit the form. Please try again.');
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

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default ContactForm;
