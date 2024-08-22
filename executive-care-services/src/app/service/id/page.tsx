'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import services from '../servicesData';
import ServiceHeader from './ServiceHeader';
import ServiceDescription from './ServiceDescription';
import ServiceFeatures from './ServiceFeatures';
import ServiceTestimonials from './ServiceTestimonials';
import ServiceCTA from './ServiceCTA';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import CallToActionSection from '../../components/CallToActionSection';

const ServicePage: React.FC = () => {
    const params = useParams<{ id: string }>(); // Use type-safe params
    const id = params?.id;

    if (!id) {
        return <p>Loading...</p>;
    }

    const service = services.find(service => service.id === id);

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

export default ServicePage;
