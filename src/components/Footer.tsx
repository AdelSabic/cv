import React from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Adel Sabic</h3>
                    <p>{t.footer.title}</p>
                </div>
                <div className="footer-section">
                    <h4>{t.footer.quickLinks}</h4>
                    <ul>
                        <li><a href="#about">{t.nav.about}</a></li>
                        <li><a href="#skills">{t.nav.skills}</a></li>
                        <li><a href="#projects">{t.nav.projects}</a></li>
                        <li><a href="#contact">{t.nav.contact}</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>{t.footer.followMe}</h4>
                    <div className="footer-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">{t.footer.github}</a>
                        <a href="https://linkedin.com/in/adelsabic" target="_blank" rel="noopener noreferrer">{t.footer.linkedin}</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">{t.footer.twitter}</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Adel Sabic. {t.footer.allRightsReserved}</p>
            </div>
        </footer>
    );
};

export default Footer;
