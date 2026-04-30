import React from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './Header.css';

const Header: React.FC = () => {
    const { t } = useLanguage();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <h1>Adel Sabic</h1>
                </div>
                <ul className="nav-links">
                    <li><a onClick={() => scrollToSection('about')}>{t.nav.about}</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>{t.nav.skills}</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>{t.nav.experience}</a></li>
                    <li><a onClick={() => scrollToSection('projects')}>{t.nav.projects}</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a></li>
                </ul>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <h2 className="hero-title">{t.header.title}</h2>
                    <p className="hero-subtitle">
                        {t.header.subtitle}
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                            {t.header.getInTouch}
                        </button>
                        <button className="btn btn-secondary">{t.header.downloadCv}</button>
                    </div>
                    <div className="hero-animation">
                        <div className="floating-shape shape-1"></div>
                        <div className="floating-shape shape-2"></div>
                        <div className="floating-shape shape-3"></div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
