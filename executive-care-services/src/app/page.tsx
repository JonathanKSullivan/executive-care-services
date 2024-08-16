"use client";

import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FeaturesSection from './components/FeaturesSection';
import FaqSection from './components/FaqSection';
import CallToActionSection from './components/CallToActionSection';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection 
                title="Experience Luxury and Care in Every Detail"
                description="Transform your home into a haven with our personalized home health care, expert cleaning, and gourmet cooking services tailored exclusively for discerning clients."
                buttonText="Schedule Your Exclusive Consultation Today"
                onButtonClick={() => console.log("Button Clicked!")}
            />
            <ProblemSolutionSection />
            <BenefitsSection />
            <TestimonialsSection />
            <FeaturesSection />
            <FaqSection />
            <CallToActionSection />
            <Footer />
        </div>
    );
}

export default HomePage;
