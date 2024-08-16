const CaseStudySummary: React.FC<CaseStudySummaryProps> = ({ id, title, description, thumbnail }) => {
    return (
        <div className={styles.caseStudySummary}>
            <Image 
                src={thumbnail} 
                alt={`${title} Thumbnail`} 
                className={styles.thumbnail} 
                width={150} // Add width here
                height={150} // Optional: Add height to maintain aspect ratio
            />
            <div className={styles.caseStudyDetails}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={`/case_studies/${id}`}>Read More</Link>
            </div>
        </div>
    );
};
