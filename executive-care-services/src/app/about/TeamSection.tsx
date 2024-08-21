import React from 'react';
import './TeamSection.css';
import Image from 'next/image';
import assets from '../assets';

const teamMembers = [
    { 
        name: 'Natasha Sobers', 
        role: 'Founder & CEO', 
        image: assets.about_natasha.src, 
        bio: 'Natasha Sobers is the Founder & CEO of Executive Care Services. With over a decade of experience in legal documentation and customer service, she established Executive Care Services to deliver personalized, luxury home care with a focus on trust and reliability. Natasha\'s dedication to excellence ensures every service meets the highest standards, making her company a trusted partner in enhancing clients\' quality of life.' 
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
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                className="team-member-image" 
                                width={300} // Add the width property here
                                height={300} // Add height property to maintain aspect ratio
                            />
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
