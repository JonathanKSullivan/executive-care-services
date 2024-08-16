import React from 'react';
import PackageCard from './PackageCard';
import './HighlightedPackages.css';
import assets from '../assets';

const HighlightedPackages: React.FC = () => {
    return (
        <section className="highlighted-packages">
            <h2>Discover Our Premium Care Packages</h2>
            <p className="section-intro">
                Tailored to meet your unique needs, our care packages offer the finest in luxury service, 
                ensuring your home and health are in expert hands.
            </p>
            <div className="packages-container">
                <PackageCard
                    title="Essential Care Package"
                    price="$1,500/month"
                    description="Perfect for smaller homes seeking regular maintenance and personal care without the full-service luxury."
                    image={assets.booking_package_essential.src}
                    link="/service/essential-care"
                />
                <PackageCard
                    title="Premium Care Package"
                    price="$3,000/month"
                    description="Ideal for larger homes needing more frequent service and enhanced health care coordination."
                    image={assets.booking_package_premium.src}
                    link="/service/premium-care"
                />
                <PackageCard
                    title="Luxury Care Package"
                    price="$6,000/month"
                    description="Designed for high-net-worth clients demanding premium service and exceptional attention to detail."
                    image={assets.booking_package_luxury.src}
                    link="/service/luxury-care"
                />
            </div>
        </section>
    );
};

export default HighlightedPackages;
