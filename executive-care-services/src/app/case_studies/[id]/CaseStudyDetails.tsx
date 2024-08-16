import React from 'react';
import './CaseStudyPage.css';

interface CaseStudyDetailsProps {
    details: {
        challenge: string;
        solution: string;
        results: string;
    };
}

const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({ details }) => {
    return (
        <section className="case-study-details">
            <div className="details-block">
                <h2>Challenge</h2>
                <p>{details.challenge}</p>
            </div>
            <div className="details-block">
                <h2>Solution</h2>
                <p>{details.solution}</p>
            </div>
            <div className="details-block">
                <h2>Results</h2>
                <p>{details.results}</p>
            </div>
        </section>
    );
};

export default CaseStudyDetails;
