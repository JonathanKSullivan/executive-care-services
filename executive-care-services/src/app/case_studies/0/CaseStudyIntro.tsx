import React from 'react';
import './CaseStudyPage.css';

interface CaseStudyIntroProps {
    text: string;
}

const CaseStudyIntro: React.FC<CaseStudyIntroProps> = ({ text }) => {
    return (
        <section className="case-study-intro">
            <p>{text}</p>
        </section>
    );
};

export default CaseStudyIntro;
