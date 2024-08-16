// AboutPage.tsx
import React from 'react';
import IntroductionSection from './IntroductionSection';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';
import VIPHintSection from './VIPHintSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <IntroductionSection />
            <TeamSection />
            <ValuesSection />
            <VIPHintSection />
            <Footer />
        </div>
    );
};

export default AboutPage;
