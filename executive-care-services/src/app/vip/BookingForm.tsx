"use client";

import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './BookingForm.css';
import getStripe from '../booking/stripe';

const BookingForm: React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        consultationMethod: '',
        date: '',
        selectedPackage: '',
        addOns: [] as string[],
        comments: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            addOns: checked
                ? [...prevData.addOns, name]
                : prevData.addOns.filter((addOn) => addOn !== name),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return; // Stripe.js has not yet loaded.
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)!,
            billing_details: {
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
            },
        });

        if (error) {
            console.error(error);
        } else {
            // Here you can send `paymentMethod.id` to your server to complete the payment
            console.log(paymentMethod);

            // Process the rest of your booking data here by sending it to your backend
            const response = await fetch('https://api.yourexecutivecare.com/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    paymentMethodId: paymentMethod.id,
                }),
            });

            if (response.ok) {
                console.log('Booking successful!');
                // Handle successful booking
            } else {
                console.error('Booking failed');
                // Handle failed booking
            }
        }
    };

    const addOnOptions = [
        'Additional Cleaning Sessions',
        'Upgrade to Deep Cleaning',
        'Additional Gourmet Meals',
        'Personal Chef On-Site',
        'Wine Pairing with Meals',
        'Physical Therapy Coordination',
        'Extended Topless or Lingerie Service',
        'Refined Luxury Experiences'
    ];

    return (
        <section id="booking" className="booking-form">
            <h2>Join the Epicurean Lifestyle Society</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="consultationMethod">Preferred Consultation Method</label>
                    <select id="consultationMethod" name="consultationMethod" value={formData.consultationMethod} onChange={handleInputChange} required>
                        <option value="">Select</option>
                        <option value="phone">Phone</option>
                        <option value="video">Video Call</option>
                        <option value="in-person">In-Person</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Preferred Date and Time</label>
                    <input type="datetime-local" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="selectedPackage">Select a Package</label>
                    <select id="selectedPackage" name="selectedPackage" value={formData.selectedPackage} onChange={handleInputChange} required>
                        <option value="">Select a Package</option>
                        <option value="Basic Membership">Basic Membership</option>
                        <option value="Premium Membership">Premium Membership</option>
                        <option value="Luxury Membership">Luxury Membership</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Add-On Services</label>
                    <div className="checkbox-grid">
                        {addOnOptions.map((addOn, index) => (
                            <label 
                                key={index} 
                                className={`checkbox-item ${formData.addOns.includes(addOn) ? 'selected' : ''}`}
                            >
                                <input 
                                    type="checkbox" 
                                    name={addOn} 
                                    onChange={handleCheckboxChange} 
                                    checked={formData.addOns.includes(addOn)}
                                />
                                {addOn}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Additional Comments</label>
                    <textarea id="comments" name="comments" value={formData.comments} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="card">Payment Details</label>
                    <CardElement id="card" className="card-element" />
                </div>
                <button type="submit" className="cta-button">Book Now - $500 (credited towards first month’s service)</button>
            </form>
        </section>
    );
};

const StripeBookingForm = () => (
    <Elements stripe={getStripe()}>
        <BookingForm />
    </Elements>
);

export default StripeBookingForm;
