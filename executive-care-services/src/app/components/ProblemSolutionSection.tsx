import React from 'react';
import './ProblemSolutionSection.css';
import assets from '../assets';
import Image from 'next/image';

const ProblemSolutionSection: React.FC = () => {
    return (
        <section className="problem-solution-section">
            <div className="container">
                <div className="content">
                    <h2 className="section-title">The Challenge of Maintaining a Luxurious Lifestyle</h2>
                    
                    <p className="section-text section-text-large">
                        Maintaining a luxurious lifestyle can be more challenging than it seems. You&rsquo;ve built a life of success, but with that success comes the responsibility of keeping up with the lifestyle you&rsquo;ve earned.
                    </p>

                    <p className="section-text">
                        Between managing your health, ensuring your home remains immaculate, and enjoying gourmet meals, it&rsquo;s easy to feel overwhelmed. The constant demands on your time and energy can leave you stressed and unable to fully enjoy the comforts you&rsquo;ve worked so hard to achieve. You might find yourself sacrificing the quality of your surroundings or neglecting your own well-being just to keep up.
                    </p>

                    <p className="section-text">
                        At Executive Cleaning Service, we take care of the details so you don&rsquo;t have to. Our personalized services are designed to keep your home pristine, meet your health needs with the utmost care, and ensure that every meal is a gourmet experience&mdash;all seamlessly integrated into your daily life. With us handling the essentials, you can focus on enjoying the luxury and success you deserve.
                    </p>
                </div>
                
                <div className="image-container">
                    <Image src={assets.problem.src} alt="Placeholder Image" className="section-image" />
                </div>
            </div>
        </section>
    );
}

export default ProblemSolutionSection;
