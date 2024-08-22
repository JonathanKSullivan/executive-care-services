import assets from "@/app/assets";

interface ServiceFeature {
    icon: string;
    title: string;
    description: string;
}

interface ServiceTestimonial {
    quote: string;
    author: string;
    authorTitle?: string;
    image?: string;
}

interface Service {
    id: string;
    title: string;
    image: string;
    description: string;
    features: ServiceFeature[];
    testimonials: ServiceTestimonial[];
    ctaText: string;
}

const services: Service[] = [
    {
        id: 'essential-care',
        title: 'Essential Care Package',
        image: assets.pricing_package_essential.src,
        description: 'Perfect for those with smaller homes who desire regular maintenance and personal care without the full-service luxury.',
        features: [
            { icon: assets.service_icon_light_cleaning.src, title: 'Bi-Weekly Light Cleaning', description: 'Maintain your home’s pristine condition with thorough dusting, vacuuming, and surface cleaning.' },
            { icon: assets.service_icon_health.src, title: 'Weekly Basic Wellness Checks', description: 'General health monitoring, including blood pressure checks and medication reminders.' },
            { icon: assets.service_icon_meal.src, title: 'Two Gourmet Dinners per Month', description: 'Enjoy chef-prepared meals tailored to your dietary preferences, delivered fresh to your dining table.' },
        ],
        testimonials: [
            {
                quote: "Natasha was great. She’s cleaned thoroughly and was very understanding and friendly. I can now focus on my career and spend more quality time with my family without the constant stress of home management. Definitely my preferred cleaner going forward.",
                author: "Dilawer K., Frisco, TX",
                image: assets.testimonial_placeholder.src,
            },
            {
                quote: "Natasha has consistently provided exceptional service. She’s always thorough and professional, making my life easier. I can now focus on my career and spend more quality time with my family without the constant stress of home management.",
                author: "Tyna H., Garland, TX",
                image: assets.testimonial_placeholder.src,
            },
        ],
        ctaText: 'Book Essential Care',
    },
    {
        id: 'premium-care',
        title: 'Premium Care Package',
        image: assets.pricing_package_premium.src,
        description: 'Ideal for those with larger homes who require more frequent service and enhanced health care coordination.',
        features: [
            { icon: assets.service_icon_light_cleaning.src, title: 'Weekly Light Cleaning', description: 'Detailed cleaning for homes between 1,500 - 3,000 sq. ft.' },
            { icon: assets.service_icon_health.src, title: 'Weekly Comprehensive Health Care', description: 'In-depth health services, including coordination with your personal physicians.' },
            { icon: assets.service_icon_meal.src, title: 'Weekly Gourmet Dinner', description: 'Delight in a chef-prepared meal every week, with options for a sophisticated wine pairing.' },
        ],
        testimonials: [
            {
                quote: "Natasha has been amazing! I highly recommend her to anyone looking for a dependable cleaner. She’s made a significant difference in my life. I can now focus on my career and spend more quality time with my family without the constant stress of home management.",
                author: "BeJay C., Plano, TX",
                image: assets.testimonial_placeholder.src,
            },
        ],
        ctaText: 'Book Premium Care',
    },
    {
        id: 'luxury-care',
        title: 'Luxury Care Package',
        image: assets.pricing_package_luxury.src,
        description: 'Designed for high-net-worth clients with large homes who demand premium service and exceptional attention to detail.',
        features: [
            { icon: assets.service_icon_deep_cleaning.src, title: 'Bi-Weekly Deep Cleaning', description: 'Extensive cleaning for homes over 3,000 sq. ft.' },
            { icon: assets.service_icon_health.src, title: 'Daily Wellness Checks and Health Coordination', description: 'Full-service health care, including daily visits, medical coordination.' },
            { icon: assets.service_icon_meal.src, title: 'Two Gourmet Dinners per Week', description: 'Savor luxurious, chef-prepared meals twice a week.' },
        ],
        testimonials: [
            {
                quote: "Executive Care Services has been a lifesaver for me and my family. They took our chaotic home and completely transformed it—cleaning, organizing, and coordinating necessary repairs. I can now focus on my career and spend more quality time with my family without the constant stress of home management.",
                author: "Jonathan S., Dallas, TX - CEO of an AI Company",
                image: assets.jonathan.src,
            },
        ],
        ctaText: 'Book Luxury Care',
    },
    {
        id: 'additional-cleaning-sessions',
        title: 'Additional Cleaning Sessions',
        image: assets.booking_addon_cleaning.src,
        description: 'Enhance your cleaning routine with additional sessions tailored to your needs. Choose between light or deep cleaning to keep your home in pristine condition.',
        features: [
            { icon: assets.service_icon_light_cleaning.src, title: 'Light Cleaning', description: 'Perfect for regular maintenance, including dusting, vacuuming, and surface cleaning.' },
            { icon: assets.service_icon_deep_cleaning.src, title: 'Deep Cleaning', description: 'A more thorough cleaning option, focusing on every nook and cranny of your home.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'upgrade-to-deep-cleaning',
        title: 'Upgrade to Deep Cleaning',
        image: assets.booking_addon_deep_cleaning.src,
        description: 'Upgrade your standard cleaning service to a deep cleaning option. Ideal for seasonal cleanings or special occasions where every detail matters.',
        features: [
            { icon: assets.service_icon_enhanced_cleaning.src, title: 'Enhanced Cleaning', description: 'Upgrade your current package with deep cleaning services, focusing on areas that need extra care.' },
            { icon: assets.service_icon_seasonal_cleaning.src, title: 'Seasonal Cleaning', description: 'Perfect for spring cleaning, post-event cleanups, or preparing your home for special occasions.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'additional-gourmet-meals',
        title: 'Additional Gourmet Meals',
        image: assets.booking_addon_gourmet.src,
        description: 'Indulge in more of our exquisite gourmet meals. Whether for special occasions or regular dining, enjoy chef-prepared dishes customized to your taste.',
        features: [
            { icon: assets.service_icon_customized_menu.src, title: 'Customized Menus', description: 'Our chefs craft personalized meals using the finest ingredients, tailored to your preferences.' },
            { icon: assets.service_icon_food_delivery.src, title: 'Convenient Delivery', description: 'Enjoy your meals delivered fresh to your dining table, ready to serve.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'personal-chef-on-site',
        title: 'Personal Chef On-Site',
        image: assets.booking_addon_chef.src,
        description: 'Elevate your dining experience with a personal chef who prepares meals in your kitchen. Perfect for intimate dinners, family gatherings, or special celebrations.',
        features: [
            { icon: assets.booking_addon_chef.src, title: 'On-Site Cooking', description: 'Our chefs prepare meals in your kitchen, bringing a restaurant experience to your home.' },
            { icon: assets.service_icon_tailored_menu.src, title: 'Tailored Menus', description: 'Work directly with our chefs to create a menu that perfectly suits your taste and dietary needs.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'wine-pairing-with-meals',
        title: 'Wine Pairing with Meals',
        image: assets.booking_addon_wine_pairing.src,
        description: 'Enhance your dining experience with expertly selected wine pairings that complement each course. Ideal for special dinners or everyday luxury.',
        features: [
            { icon: assets.service_icon_expert_selection.src, title: 'Expert Selection', description: 'Our sommeliers select wines that perfectly complement your meal, enhancing the flavors and overall experience.' },
            { icon: assets.service_icon_wine_delivery.src, title: 'Convenient Delivery', description: 'Enjoy the convenience of having wines delivered with your gourmet meals, ready to be served.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'physical-therapy-coordination',
        title: 'Physical Therapy Coordination',
        image: assets.booking_addon_physical_therapy.src,
        description: 'Receive personalized physical therapy coordination to improve your mobility and overall well-being. Our experts work with your healthcare providers to ensure seamless care.',
        features: [
            { icon: assets.service_icon_therapy.src, title: 'Tailored Therapy Plans', description: 'Work with our experts to develop a therapy plan that meets your specific needs and goals.' },
            { icon: assets.service_icon_seamless_contact.src, title: 'Seamless Coordination', description: 'We coordinate with your doctors and therapists to provide continuous care and support.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'extended-topless-lingerie-service',
        title: 'Extended Topless or Lingerie Service',
        image: assets.booking_addon_lingerie.src,
        description: 'For those who desire a more exclusive and intimate service, our extended topless or lingerie cleaning service offers a unique experience tailored to your preferences.',
        features: [
            { icon: assets.service_icon_exclusive_cleaning.src, title: 'Exclusive Cleaning Service', description: 'Enjoy up to 3 hours of topless or lingerie cleaning by our professional staff, designed to cater to your specific needs.' },
            { icon: assets.service_icon_discretion.src, title: 'Complete Discretion', description: 'Our staff is trained to provide service with the utmost discretion and professionalism.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'refined-luxury-experiences',
        title: 'Refined Luxury Experiences',
        image: assets.booking_addon_luxury.src,
        description: 'Indulge in curated luxury experiences that are tailored to your desires. From private events to unique services, we create moments that are truly unforgettable.',
        features: [
            { icon: assets.service_icon_bespoke.src, title: 'Bespoke Experiences', description: 'From private dining events to exclusive services, we craft experiences that cater to your every whim.' },
            { icon: assets.service_icon_personalized_service.src, title: 'Personalized Service', description: 'Our team works closely with you to design and deliver experiences that are as unique as you are.' },
        ],
        testimonials: [],
        ctaText: 'Learn More',
    },
    {
        id: 'initial-consultation',
        title: 'Initial Consultation',
        image: assets.service_initial_consultation_hero.src,
        description: 'Begin with a thorough assessment of your needs and preferences. This service is ideal for understanding your specific requirements and customizing our offerings to suit your lifestyle.',
        features: [
            { icon: assets.service_icon_assessment.src, title: 'Comprehensive Assessment', description: 'We thoroughly assess your needs to create a personalized service plan.' },
            { icon: assets.service_icon_reccomendations.src, title: 'Customized Recommendations', description: 'Receive tailored suggestions that align with your preferences.' },
        ],
        testimonials: [],
        ctaText: 'Book Initial Consultation',
    },
    {
        id: 'trial-services',
        title: 'Trial Services',
        image: assets.service_trial_service_hero.src,
        description: 'Experience a sample of our luxury services before committing to a subscription. Choose from a variety of our offerings to see which ones suit you best.',
        features: [
            { icon: assets.service_icon_flexible_options.src, title: 'Flexible Options', description: 'Try different services before you decide on a full package.' },
            { icon: assets.service_icon_no_commitment.src, title: 'No Commitment', description: 'Experience our offerings without any long-term obligation.' },
        ],
        testimonials: [],
        ctaText: 'Book Trial Services',
    },
];

export default services;
