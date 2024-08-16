import React from 'react';
import './CaseStudyPage.css';

interface CaseStudyCTAProps {
    text: string;
}

const CaseStudyCTA: React.FC<CaseStudyCTAProps> = ({ text }) => {
    return (
        <section className="case-study-cta">
            <button className="cta-button">{text}</button>
        </section>
    );
};

export default CaseStudyCTA;
