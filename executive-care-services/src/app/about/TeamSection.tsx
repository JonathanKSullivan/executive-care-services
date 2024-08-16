import React from 'react';
import './TeamSection.css';
import Image from 'next/image';

const teamMembers = [
    { 
        name: 'Jane Doe', 
        role: 'Founder & CEO', 
        image: 'https://placehold.it/300x300', 
        bio: 'With over 20 years of experience in the luxury service industry, Jane has a passion for excellence and a vision for creating the ultimate client experience.' 
    },
    { 
        name: 'John Smith', 
        role: 'Head of Operations', 
        image: 'https://placehold.it/300x300', 
        bio: 'John ensures that every aspect of our service runs smoothly, from initial consultation to the final touch, with a focus on quality and client satisfaction.' 
    },
    // Add more team members as needed
];

const TeamSection: React.FC = () => {
    return (
        <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <div className="image-container">
                            <Image src={member.image} alt={member.name} className="team-member-image" />
                            <div className="overlay">
                                <p className="overlay-text">{member.role}</p>
                            </div>
                        </div>
                        <h3>{member.name}</h3>
                        <p className="team-member-role">{member.role}</p>
                        <p className="team-member-bio">{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
