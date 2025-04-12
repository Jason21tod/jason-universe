import { useContext, useState } from 'react';

import './Navigation.css';
import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';

function Navigation() {
    const [menuState, setMenu] = useState("navigation_container--links--inactive");
    
    const language= useContext(LanguageContext);

    const handleClick = () => {
        (menuState === "navigation_container--links--inactive") 
            ? setMenu('navigation_container--links--active') 
            : setMenu("navigation_container--links--inactive");
    }

    return (
        <div className="navigation_container">
            <ToggleMenu handleClick={handleClick} />
            
            <div className='navigation_bar'>
                <p className='navigation_bar-text'>
                    {translations[language.language]?.welcome}
                </p>
            </div>
            
            <nav className={`navigation_container--links ${menuState}`}>
                <a id="about_me--link" onClick={handleClick} href="#about-section">
                    {translations[language.language]?.about_me}
                </a>
                <a id="projects--link" onClick={handleClick} href="#projects-section">
                    {translations[language.language]?.projects}
                </a>
                <a id="work_with_me--link" onClick={handleClick} href="#work-with-me">
                    {translations[language.language]?.work_with_me}
                </a>
            </nav>
        </div>
    )
}

function NavBarOclusion() {
    return (
        <div className='navigation_container--deactivate'></div>
    )
}

function ToggleMenu({ handleClick }) {
    return (
        <button onClick={handleClick} className="navigation_container--button navigation_container--button--inactive">
            <i className="navigation_container--menu">
                <span className="material-symbols-outlined">menu</span>
            </i>
        </button>
    )
}

export { NavBarOclusion };
export { Navigation };
