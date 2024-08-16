import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HeroSection from './HeroSection';
import ExpectationSetter from './ExpectationSetter';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import './ContactPage.css'; // Assuming you have a CSS file for this page

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <Navbar />
            <HeroSection title="Get in Touch" subtitle="We’re here to help you with any questions or concerns." />
            <main>
                <section className="contact-form-section">
                    <div className="contact-form-container">
                        <ContactForm />
                        <ContactDetails />
                    </div>
                </section>

                <section className="additional-info-section">
                    <ExpectationSetter />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
