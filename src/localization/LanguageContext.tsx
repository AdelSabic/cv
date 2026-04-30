import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './en';
import { bs } from './bs';

export type Language = 'en' | 'bs';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof en;
    isLanguageSelected: boolean;
    setLanguageSelected: (selected: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');
    const [isLanguageSelected, setLanguageSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Load language preference from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language | null;
        const hasLanguageSelected = localStorage.getItem('languageSelected') === 'true';

        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bs')) {
            setLanguageState(savedLanguage);
            setLanguageSelected(hasLanguageSelected);
        }
        setIsLoading(false);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        localStorage.setItem('languageSelected', 'true');
        setLanguageSelected(true);
    };

    const translations = language === 'en' ? en : bs;

    if (isLoading) {
        return null;
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations,
                isLanguageSelected,
                setLanguageSelected,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
