import React from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './Projects.css';

const Projects: React.FC = () => {
    const { t } = useLanguage();
    const projects = t.projectsData.map((project, index) => ({
        ...project,
        link: '#'
    }));

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">{t.projects.heading}</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} className="project-card">
                            <div className="project-image">
                                <span>Project {index + 1}</span>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-link">
                                    {t.projects.viewProject} →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
