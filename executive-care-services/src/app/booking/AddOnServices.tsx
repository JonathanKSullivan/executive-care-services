import React from 'react';
import AddOnCard from './AddOnCard';
import './AddOnServices.css';
import assets from '../assets';

const AddOnServices: React.FC = () => {
    const addOnServices = [
        {
            title: "Additional Cleaning Sessions",
            price: "$150 per session (Light Cleaning); $200 per session (Deep Cleaning)",
            image: assets.booking_addon_cleaning.src,
            link: "/service/additional-cleaning-sessions",
        },
        {
            title: "Upgrade to Deep Cleaning",
            price: "+$200 to $400 per month (depending on package)",
            image: assets.booking_addon_deep_cleaning.src,
            link: "/service/upgrade-to-deep-cleaning",
        },
        {
            title: "Additional Gourmet Meals",
            price: "$150 to $200 per meal",
            image: assets.booking_addon_gourmet.src,
            link: "/service/additional-gourmet-meals",
        },
        {
            title: "Personal Chef On-Site",
            price: "$1,500 per month",
            image: assets.booking_addon_chef.src,
            link: "/service/personal-chef-on-site",
        },
        {
            title: "Wine Pairing with Meals",
            price: "$200 per month",
            image: assets.booking_addon_wine_pairing.src,
            link: "/service/wine-pairing-with-meals",
        },
        {
            title: "Physical Therapy Coordination",
            price: "$500 per month",
            image: assets.booking_addon_physical_therapy.src,
            link: "/service/physical-therapy-coordination",
        },
    ];

    return (
        <section className="addon-services">
            <h2>Enhance Your Experience with Add-On Services</h2>
            <div className="addons-container">
                {addOnServices.map((service, index) => (
                    <AddOnCard
                        key={index}
                        title={service.title}
                        price={service.price}
                        image={service.image}
                        link={service.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default AddOnServices;
