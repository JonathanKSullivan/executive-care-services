import React from 'react';
import Link from 'next/link';
import PricingHeader from './PricingHeader';
import SubscriptionPackage from './SubscriptionPackage';
import AddOnService from './AddOnService';
import OneTimeService from './OneTimeService';
import FinalCTA from './FinalCTA';
import './PricingPage.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import assets from '../assets';

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <Navbar />
            <PricingHeader />
            <div className="packages-section">
                <h2>Subscription-Based Monthly Packages</h2>
                <div className="packages-container">
                    <SubscriptionPackage
                        id="essential-care"
                        title="Essential Care Package"
                        price="$1,500/month"
                        description="Perfect for those with smaller homes who desire regular maintenance and personal care without the full-service luxury."
                        services={[
                            { name: "Bi-Weekly Light Cleaning: Maintain your home’s pristine condition with thorough dusting, vacuuming, and surface cleaning." },
                            { name: "Weekly Basic Wellness Checks: General health monitoring, including blood pressure checks and medication reminders." },
                            { name: "Two Gourmet Dinners per Month: Enjoy chef-prepared meals tailored to your dietary preferences, delivered fresh to your dining table." }
                        ]}
                        image={assets.pricing_package_essential.src}
                    >
                        <Link href={`/service/essential-care`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </SubscriptionPackage>

                    <SubscriptionPackage
                        id="premium-care"
                        title="Premium Care Package"
                        price="$3,000/month"
                        description="Ideal for those with larger homes who require more frequent service and enhanced health care coordination."
                        services={[
                            { name: "Weekly Light Cleaning: Detailed cleaning for homes between 1,500 - 3,000 sq. ft." },
                            { name: "Weekly Comprehensive Health Care: In-depth health services, including coordination with your personal physicians." },
                            { name: "Weekly Gourmet Dinner: Delight in a chef-prepared meal every week, with options for a sophisticated wine pairing." }
                        ]}
                        image={assets.pricing_package_premium.src}
                    >
                        <Link href={`/service/premium-care`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </SubscriptionPackage>

                    <SubscriptionPackage
                        id="luxury-care"
                        title="Luxury Care Package"
                        price="$6,000/month"
                        description="Designed for high-net-worth clients with large homes who demand premium service and exceptional attention to detail."
                        services={[
                            { name: "Bi-Weekly Deep Cleaning: Extensive cleaning for homes over 3,000 sq. ft." },
                            { name: "Daily Wellness Checks and Health Coordination: Full-service health care, including daily visits, medical coordination." },
                            { name: "Two Gourmet Dinners per Week: Savor luxurious, chef-prepared meals twice a week." }
                        ]}
                        image={assets.pricing_package_luxury.src}
                    >
                        <Link href={`/service/luxury-care`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </SubscriptionPackage>
                </div>
            </div>

            <div className="addons-section">
                <h2>Add-On Services and Upgrades</h2>
                <div className="addons-container">
                    <AddOnService
                        id="additional-cleaning-sessions"
                        title="Additional Cleaning Sessions"
                        price="$150 per session (Light Cleaning); $200 per session (Deep Cleaning)"
                    >
                        <Link href={`/service/additional-cleaning-sessions`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </AddOnService>

                    <AddOnService
                        id="upgrade-to-deep-cleaning"
                        title="Upgrade to Deep Cleaning"
                        price="+$200 to $400 per month (depending on package)"
                    >
                        <Link href={`/service/upgrade-to-deep-cleaning`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </AddOnService>

                    <AddOnService
                        id="additional-gourmet-meals"
                        title="Additional Gourmet Meals"
                        price="$150 to $200 per meal"
                    >
                        <Link href={`/service/additional-gourmet-meals`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </AddOnService>
                    <AddOnService
                        id="personal-chef-on-site"
                        title="Personal Chef On-Site"
                        price="$1,500 per month"
                    >
                        <Link href={`/service/personal-chef-on-site`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </AddOnService>

                    <AddOnService
                        id="wine-pairing-with-meals"
                        title="Wine Pairing with Meals"
                        price="$200 per month"
                    >
                        <Link href={`/service/wine-pairing-with-meals`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </AddOnService>

                    <AddOnService
                        id="physical-therapy-coordination"
                        title="Physical Therapy Coordination"
                        price="$500 per month"
                    >
                        <Link href={`/service/physical-therapy-coordination`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </AddOnService>
                </div>
            </div>

            <div className="onetime-section">
                <h2>One-Time Services and Consultations</h2>
                <div className="onetime-container">
                    <OneTimeService
                        id="initial-consultation"
                        title="Initial Consultation"
                        price="$500 (credited towards the first month’s subscription)"
                        description="Begin with a thorough assessment of your needs and preferences."
                    >
                        <Link href={`/service/initial-consultation`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </OneTimeService>

                    <OneTimeService
                        id="trial-services"
                        title="Trial Services"
                        price="Priced individually based on service"
                        description="Experience a sample of our luxury services before committing to a subscription."
                    >
                        <Link href={`/service/trial-services`}>
                            <a className="cta-button">Learn More</a>
                        </Link>
                    </OneTimeService>
                </div>
            </div>

            <FinalCTA />
            <Footer />
        </div>
    );
};

export default PricingPage;
