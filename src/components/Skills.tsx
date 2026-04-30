import React, { useState } from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './Skills.css';

const Skills: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    const skills = {
        frontend: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'HTML/CSS', level: 95 },
            { name: 'Tailwind CSS', level: 88 },
        ],
        backend: [
            { name: 'Node.js', level: 92 },
            { name: 'Express', level: 90 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'MongoDB', level: 85 },
        ],
        tools: [
            { name: 'Git', level: 95 },
            { name: 'Docker', level: 80 },
            { name: 'REST APIs', level: 92 },
            { name: 'GraphQL', level: 80 },
        ],
    };

    const allSkills = [...skills.frontend, ...skills.backend, ...skills.tools];
    const displaySkills = activeCategory === 'all' ? allSkills : skills[activeCategory as keyof typeof skills];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">{t.skills.heading}</h2>

                <div className="category-filters">
                    <button
                        className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        {t.skills.allSkills}
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('frontend')}
                    >
                        {t.skills.frontend}
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'backend' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('backend')}
                    >
                        {t.skills.backend}
                    </button>
                    <button
                        className={`filter-btn ${activeCategory === 'tools' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('tools')}
                    >
                        {t.skills.tools}
                    </button>
                </div>

                <div className="skills-grid">
                    {displaySkills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-header">
                                <h3>{skill.name}</h3>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
