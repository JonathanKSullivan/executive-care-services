import React from 'react';
import './CaseStudyPage.css';
import Image from 'next/image';

interface CaseStudyTestimonialProps {
    testimonial: {
        clientName: string;
        clientTitle: string;
        quote: string;
        image?: string;
        imageWidth?: number; // Optional width property for the image
        imageHeight?: number; // Optional height property for the image
    };
}

const CaseStudyTestimonial: React.FC<CaseStudyTestimonialProps> = ({ testimonial }) => {
    return (
        <section className="case-study-testimonial">
            <blockquote>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <footer>
                    {testimonial.image && (
                        <Image
                            src={testimonial.image}
                            alt={testimonial.clientName}
                            width={testimonial.imageWidth || 100} // Default width of 100 if not provided
                            height={testimonial.imageHeight || 150} // Default height of 150 if not provided
                        />
                    )}
                    <cite>
                        {testimonial.clientName}, {testimonial.clientTitle}
                    </cite>
                </footer>
            </blockquote>
        </section>
    );
};

export default CaseStudyTestimonial;
