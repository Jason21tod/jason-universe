import './Footer.css';
import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';
import { useContext } from 'react';

function Footer () {
    const language = useContext(LanguageContext);

    return (
        <section className='footer-section'>
            <div className='footer-section--links'>
            </div>
            <legend className='footer-legend'>{translations[language.language]?.rights}</legend>
            <p className='footer-text'>Gian Pereira Nunes</p>
        </section>
    )
}

export default Footer;
