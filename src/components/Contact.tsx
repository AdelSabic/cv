import React, { useState } from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './Contact.css';

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">{t.contact.heading}</h2>
                <p className="contact-subtitle">
                    {t.contact.subtitle}
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <h3>📧 {t.contact.email}</h3>
                            <p><a href="mailto:adel.sabic@example.com">adel.sabic@example.com</a></p>
                        </div>
                        <div className="info-item">
                            <h3>📱 {t.contact.phone}</h3>
                            <p><a href="tel:+38761000000">+387 61 000 000</a></p>
                        </div>
                        <div className="info-item">
                            <h3>📍 {t.contact.location}</h3>
                            <p>Bosnia and Herzegovina</p>
                        </div>
                        <div className="social-links">
                            <a href="https://linkedin.com/in/adelsabic" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {isSubmitted && <div className="success-message">{t.contact.successMessage}</div>}

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder={t.contact.name}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder={t.contact.emailPlaceholder}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder={t.contact.subject}
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder={t.contact.message}
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">{t.contact.sendMessage}</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
