import React from 'react';
import './MembershipPricing.css';

const MembershipPricing: React.FC = () => {
    const memberships = [
        {
            title: "Basic Membership",
            price: "$5,000/month",
            features: [
                "Access to Lingerie or Topless Service",
                "Personalized Health Care Coordination",
                "Two Gourmet Meals Per Week",
                "Priority Booking for Events"
            ]
        },
        {
            title: "Premium Membership",
            price: "$10,000/month",
            features: [
                "All Basic Membership Features",
                "Daily Lingerie or Topless Service",
                "Personal Chef On-Site Twice a Week",
                "Gourmet Wine Pairing with Meals"
            ]
        },
        {
            title: "Luxury Membership",
            price: "$20,000/month",
            features: [
                "All Premium Membership Features",
                "24/7 Personalized Service",
                "Custom-Tailored Sensual Packages",
                "Exclusive Access to Special Events"
            ]
        }
    ];

    const addOns = [
        {
            title: "Additional Cleaning Sessions",
            price: "$150 per session (Light Cleaning); $200 per session (Deep Cleaning)"
        },
        {
            title: "Upgrade to Deep Cleaning",
            price: "+$200 to $400 per month (depending on package)"
        },
        {
            title: "Additional Gourmet Meals",
            price: "$150 to $200 per meal"
        },
        {
            title: "Personal Chef On-Site",
            price: "$1,500 per month"
        },
        {
            title: "Wine Pairing with Meals",
            price: "$200 per month"
        },
        {
            title: "Physical Therapy Coordination",
            price: "$500 per month"
        },
        {
            title: "Extended Topless or Lingerie Service",
            price: "$1,500 per month"
        },
        {
            title: "Refined Luxury Experiences",
            price: "Starting at $3,000 (depending on request)"
        }
    ];

    return (
        <section className="membership-pricing">
            <h2>Membership Pricing & Add-Ons</h2>
            <div className="membership-container">
                {memberships.map((membership, index) => (
                    <div key={index} className="membership-card">
                        <h3>{membership.title}</h3>
                        <p className="price">{membership.price}</p>
                        <ul>
                            {membership.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="addon-container">
                <h3>Available Add-Ons</h3>
                <ul>
                    {addOns.map((addOn, index) => (
                        <li key={index} className="addon-item">
                            <strong>{addOn.title}</strong>: {addOn.price}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MembershipPricing;
