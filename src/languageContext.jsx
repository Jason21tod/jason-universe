import { createContext, useState } from 'react';
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const changeLanguage = () => {
        setLanguage(language === "en" ? "pt" : "en");
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <button className="language_context_button"onClick={changeLanguage}>
                <span class="material-symbols-outlined">
                translate
                </span>
            </button>
            {children}
        </LanguageContext.Provider>
    );
}
