import React from 'react';
import Link from 'next/link';
import styles from './CaseStudyListPage.module.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Image from 'next/image';
import assets from '../assets';

interface CaseStudySummaryProps {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
}

const CaseStudySummary: React.FC<CaseStudySummaryProps> = ({ id, title, description, thumbnail }) => {
    return (
        <div className={styles.caseStudySummary}>
            <Image 
                src={thumbnail} 
                alt={`${title} Thumbnail`} 
                className={styles.thumbnail} 
                width={150}  // Set the desired width
                height={150} // Set the desired height
            />
            <div className={styles.caseStudyDetails}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={`/case_studies/${id}`}>Read More</Link>
            </div>
        </div>
    );
};

const CaseStudyListPage: React.FC = () => {
    const caseStudies = [
        {
            id: 0,
            title: "Transforming Home Life for Jonathan S.",
            description: "How Executive Care Services provided holistic care and support, transforming the living environment for Jonathan S and his father.",
            thumbnail: assets.casestudy_jonathan.src
        }
    ];

    return (
        <div className={styles.caseStudyListPage}>
            <Navbar />
            
            {/* Hero Section */}
            <section className={styles.heroSection} aria-label="Case Studies Hero Section">
                <div className={styles.contentWrapper}>
                    <h1>Success Stories &amp; Case Studies</h1>
                    <p>Discover how we&apos;ve partnered with clients to provide exceptional service and achieve remarkable results.</p>
                </div>
            </section>

            <h1>Our Case Study</h1>
            <p>Explore how we&apos;ve helped Jonathan S and his family achieve a better quality of life.</p>
            <div className={styles.caseStudyList}>
                {caseStudies.map((caseStudy) => (
                    <CaseStudySummary
                        key={caseStudy.id}
                        id={caseStudy.id}
                        title={caseStudy.title}
                        description={caseStudy.description}
                        thumbnail={caseStudy.thumbnail}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default CaseStudyListPage;
