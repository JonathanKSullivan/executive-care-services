import React from 'react';
import HeroSection from './HeroSection';
import Introduction from './Introduction';
import HighlightedPackages from './HighlightedPackages';
import AddOnServices from './AddOnServices';
import BookingForm from './BookingForm';
import Testimonials from './Testimonials';
import Navbar from '../Navbar';
import Footer from '../Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <HeroSection />
            <Introduction />
            <HighlightedPackages />
            <AddOnServices />
            <BookingForm />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default LandingPage;
