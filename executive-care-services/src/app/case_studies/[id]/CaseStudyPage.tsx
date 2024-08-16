import React from 'react';
import CaseStudyHeader from './CaseStudyHeader';
import CaseStudyIntro from './CaseStudyIntro';
import CaseStudyDetails from './CaseStudyDetails';
import CaseStudyTestimonial from './CaseStudyTestimonial';
import CaseStudyCTA from './CaseStudyCTA';
import './CaseStudyPage.css';

interface CaseStudyPageProps {
    title: string;
    subtitle: string;
    intro: string;
    details: {
        challenge: string;
        solution: string;
        results: string;
    };
    testimonial: {
        clientName: string;
        clientTitle: string;
        quote: string;
        image?: string;
    };
    ctaText: string;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
    title,
    subtitle,
    intro,
    details,
    testimonial,
    ctaText,
}) => {
    return (
        <div className="case-study-page">
            <CaseStudyHeader title={title} subtitle={subtitle} />
            <CaseStudyIntro text={intro} />
            <CaseStudyDetails details={details} />
            <CaseStudyTestimonial testimonial={testimonial} />
            <CaseStudyCTA text={ctaText} />
        </div>
    );
};

export default CaseStudyPage;
