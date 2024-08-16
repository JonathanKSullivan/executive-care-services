import React from 'react';
import './CaseStudyPage.css';
import Image from 'next/image';

interface CaseStudyTestimonialProps {
    testimonial: {
        clientName: string;
        clientTitle: string;
        quote: string;
        image?: string;
    };
}

const CaseStudyTestimonial: React.FC<CaseStudyTestimonialProps> = ({ testimonial }) => {
    return (
        <section className="case-study-testimonial">
            <blockquote>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <footer>
                    {testimonial.image && <Image src={testimonial.image} alt={testimonial.clientName} />}
                    <cite>
                        {testimonial.clientName}, {testimonial.clientTitle}
                    </cite>
                </footer>
            </blockquote>
        </section>
    );
};

export default CaseStudyTestimonial;
