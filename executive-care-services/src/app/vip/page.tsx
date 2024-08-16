"use client";

import React from 'react';
import HeroSection from './HeroSection';
import BenefitsSection from './BenefitsSection';
import FeatureSection from './FeatureSection';
import FAQSection from './FAQSection';
import TestimonialsSection from './TestimonialsSection';
import PricingAndAddOnsSection from './PricingAndAddOnsSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
import StripeBookingForm from './BookingForm'; // Import the Booking Form

const EpicureanLifestyleLandingPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection
                title="Indulge in Ultimate Sensual Luxury: Our Epicurean Lifestyle Society Awaits"
                description="Elevate your home experience with our exclusive Epicurean Lifestyle Society, where elegance meets sensuality. Enjoy personalized care delivered by our discreet professionals in luxurious lingerie or topless, creating an unforgettable atmosphere."
                buttonText="Join the Epicurean Lifestyle Society"
                onButtonClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} // Scroll to the booking section
            />
            <BenefitsSection />
            <TestimonialsSection />
            <FeatureSection />
            <PricingAndAddOnsSection /> {/* Include the Pricing and Add-Ons Section */}
            <FAQSection />
            <StripeBookingForm /> {/* Replace CallToActionSection with Booking Form */}
            <Footer />
        </div>
    );
};

export default EpicureanLifestyleLandingPage;
