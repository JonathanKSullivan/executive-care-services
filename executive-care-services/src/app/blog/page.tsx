import React from 'react';
import Parser from 'rss-parser';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './BlogPage.module.css';
import Image from 'next/image';

interface BlogPageProps {
    articles: {
        title: string;
        link: string;
        contentSnippet: string;
        pubDate: string;
        id: string;
        image: string;
    }[];
}

const fetchRSSFeed = async () => {
    const parser = new Parser();
    const feed = await parser.parseURL('https://medium.com/feed/@marketing_47888');
    return feed.items.map(item => {
        // Extract image from the content
        const content = item['content:encoded'] || '';
        const imageMatch = content.match(/<img.*?src=["'](.*?)["']/);
        const imageUrl = imageMatch ? imageMatch[1] : 'https://placehold.it/300x200';

        // Extract text content
        const contentSnippet = content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200) + '...';

        return {
            title: item.title,
            link: item.link,
            contentSnippet,
            pubDate: item.pubDate || '', // Provide an empty string as a fallback
            id: item.guid,
            image: imageUrl,
        };
    });
};

const BlogPage: React.FC = async () => {
    const articles = await fetchRSSFeed();

    return (
        <>
            <Navbar />
            <div className={styles.blogPage}>
                {/* Hero Section */}
                <section className={styles.heroSection} aria-label="Blog Hero Section">
                    <div className={styles.contentWrapper}>
                        <h1>Insights & Stories</h1>
                        <p>Explore our latest articles, tips, and insights that help you stay ahead in the luxury service industry.</p>
                    </div>
                </section>

                <div className={styles.articleList}>
                    {articles.map((article) => (
                        <div key={article.id} className={styles.article}>
                            <img 
                                src={article.image} 
                                alt={article.title || 'Blog image'} 
                                className={styles.articleImage} 
                                width={300}  // Provide appropriate width
                                height={200} // Provide appropriate height
                            />
                            <div className={styles.articleContent}>
                                <h2>{article.title}</h2>
                                <p>{article.contentSnippet}</p>
                                <p><small>{new Date(article.pubDate || '').toLocaleDateString()}</small></p> {/* Ensure a fallback for pubDate */}
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className={styles.readMoreLink}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPage;
