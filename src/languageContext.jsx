import { createContext, useState } from 'react';
export const LanguageContext = createContext();


/**
 * Used to provide a translation option for all the components tha could be wrapped and have translation.
 * 
 * Used together with the translation.js archive, this is a wrapper to make a global context ( Called LanguageContext ) and use to change the main language of the site.
 *
 * @export
 * @param {{ children: any; }} param0 
 * @param {*} param0.children 
 * @returns {*} 
 */
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
