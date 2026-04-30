import React from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './About.css';

const About: React.FC = () => {
    const { t } = useLanguage();

    // Replace with your actual LinkedIn profile picture URL
    // You can get it from: https://www.linkedin.com/in/adelsabic/
    // Right-click on your profile picture and copy the image URL
    const profileImageUrl = 'https://media.licdn.com/dms/image/v2/D4E03AQH7MqLfWVv4Gg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704203348717?e=2147483647&v=beta&t=';

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">{t.about.heading}</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            {t.about.bio1}
                        </p>
                        <p>
                            {t.about.bio2}
                        </p>
                        <p>
                            {t.about.bio3}
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <h3>50+</h3>
                                <p>{t.about.projectsCompleted}</p>
                            </div>
                            <div className="stat">
                                <h3>30+</h3>
                                <p>{t.about.satisfiedClients}</p>
                            </div>
                            <div className="stat">
                                <h3>5+</h3>
                                <p>{t.about.yearsExperience}</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        {profileImageUrl ? (
                            <img
                                src={profileImageUrl}
                                alt="Profile"
                                className="profile-photo"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        parent.innerHTML = `<div class="image-placeholder"><span>${t.about.yourPhoto}</span></div>`;
                                    }
                                }}
                            />
                        ) : (
                            <div className="image-placeholder">
                                <span>{t.about.yourPhoto}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
