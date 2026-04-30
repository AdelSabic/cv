import React from 'react';
import { useLanguage } from '../localization/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
    const { isLanguageSelected, setLanguage, t } = useLanguage();

    if (isLanguageSelected) {
        return null;
    }

    return (
        <div className="language-selector-modal">
            <div className="language-selector-content">
                <h1>{t.language.selectLanguage}</h1>
                <p>Choose your preferred language / Odaberite željeni jezik</p>

                <div className="language-buttons">
                    <button
                        className="language-button english"
                        onClick={() => setLanguage('en')}
                    >
                        <span className="flag">🇬🇧</span>
                        <span className="name">{t.language.english}</span>
                    </button>

                    <button
                        className="language-button bosnian"
                        onClick={() => setLanguage('bs')}
                    >
                        <span className="flag">🇧🇦</span>
                        <span className="name">{t.language.bosnian}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
