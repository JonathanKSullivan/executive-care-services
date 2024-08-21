import React from 'react';
import CaseStudyPage from './CaseStudyPage';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import assets from '@/app/assets';

// Case study data
const executiveCareCaseStudy = {
    title: "Transforming Home Life for Jonathan S.",
    subtitle: "Comprehensive Home and Health Care Services for an Improved Quality of Life",
    intro: "Jonathan S., CEO at an AI company, faced significant challenges in managing his father's care and household maintenance. With his father suffering from cognitive decline and Jonathan himself being partially blind, the situation became increasingly overwhelming. Their home was in disarray, and they relied heavily on fast food for daily meals, which further impacted their well-being.",
    details: {
        challenge: "Jonathan's father required consistent health care and home maintenance, but managing these tasks was difficult due to Jonathan's own visual impairment and his demanding role as a CEO. The home was not only cluttered and unclean, but their diet consisted primarily of unhealthy fast food, contributing to further stress and health concerns.",
        solution: "Executive Care Services (ECS) stepped in to provide a holistic solution. They took over the cleaning and maintenance of the home, ensuring it was always in pristine condition. ECS also handled meal preparation, offering a variety of meal plans, from services like Blue Apron to fully customized diets. They prepared smoothie mixes, cooked meals that could be easily reheated, and accommodated all dietary needs. In addition, ECS provided compassionate and flexible home health care for Jonathan's father, enforcing healthy behaviors while ensuring his comfort. ECS also organized home repairs and helped clean out and pack belongings of a deceased relative.",
        results: "The impact of ECS's services was profound. The home was transformed into a clean, organized, and stress-free environment, which significantly improved the quality of life for both Jonathan and his father. Their diet improved, with nutritious meals replacing the fast food they previously relied on. The time and stress saved allowed Jonathan to focus more on his work and enjoy quality time with his family. ECS's compassionate care also ensured that Jonathan's father received the attention and support he needed, all while maintaining a comfortable and dignified living environment.",
    },
    testimonial: {
        clientName: "Jonathan S.",
        clientTitle: "CEO at an AI company",
        quote: "Executive Care Services has been a life-saver and game-changer for my family. They not only transformed our home but also provided the compassionate care my father needed. The burden of managing everything has been lifted, allowing me to focus on my work and enjoy time with my family. ECS truly exceeded our expectations in every way.",
        image: assets.jonathan.src,  // Replace with actual image URL if available
    },
    ctaText: "Experience the Transformation. Contact Executive Care Services Today!",
};

const ExecutiveCareCaseStudy = () => {
    return (
        <>
            <Navbar />
            <CaseStudyPage
                title={executiveCareCaseStudy.title}
                subtitle={executiveCareCaseStudy.subtitle}
                intro={executiveCareCaseStudy.intro}
                details={executiveCareCaseStudy.details}
                testimonial={executiveCareCaseStudy.testimonial}
                ctaText={executiveCareCaseStudy.ctaText}
            />
            <Footer />
        </>
    );
};

export default ExecutiveCareCaseStudy;
