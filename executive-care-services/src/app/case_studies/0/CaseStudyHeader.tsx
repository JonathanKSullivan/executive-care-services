import React from 'react';
import './CaseStudyPage.css';

interface CaseStudyHeaderProps {
    title: string;
    subtitle: string;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ title, subtitle }) => {
    return (
        <header className="case-study-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
};

export default CaseStudyHeader;
