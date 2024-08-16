// ThankYouPage.tsx
import React from 'react';
import './ThankYouPage.css';
import PopularContentLinks from './PopularContentLinks';
import SocialMediaLinks from './SocialMediaLinks';

const ThankYouPage: React.FC = () => {
    return (
        <div className="thank-you-page">
            <h1>Thank You!</h1>
            <p>Your message has been received. We will get back to you shortly.</p>
            <PopularContentLinks />
            <SocialMediaLinks />
        </div>
    );
};

export default ThankYouPage;
