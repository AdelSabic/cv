import React from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './Experience.css';

const Experience: React.FC = () => {
    const { t } = useLanguage();
    const experiences = t.experienceData;

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">{t.experience.heading}</h2>
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>{exp.position}</h3>
                            <p className="company">{exp.company}</p>
                            <p className="period">{exp.period}</p>
                            <p className="description">{exp.description}</p>
                            <div className="skills-tags">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Experience;
