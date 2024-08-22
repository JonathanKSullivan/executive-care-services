'use client'

import React from 'react';
import services from '../servicesData';
import ServiceHeader from '../components/ServiceHeader';
import ServiceDescription from '../components/ServiceDescription';
import ServiceFeatures from '../components/ServiceFeatures';
import ServiceTestimonials from '../components/ServiceTestimonials';
import ServiceCTA from '../components/ServiceCTA';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CallToActionSection from '../../components/CallToActionSection';

const AdditionalGourmetMealsPage: React.FC = () => {
    const service = services.find(service => service.id === 'additional-gourmet-meals');

    if (!service) {
        return <p>Service not found</p>;
    }

    return (
        <>
            <Navbar />
            <ServiceHeader title={service.title} image={service.image} />
            <ServiceDescription description={service.description} />
            <ServiceFeatures features={service.features} />
            {service.testimonials.length > 0 && (
                <ServiceTestimonials testimonials={service.testimonials} />
            )}
            <CallToActionSection />
            <Footer />
        </>
    );
};

export default AdditionalGourmetMealsPage;
