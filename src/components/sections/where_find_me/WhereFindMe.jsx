import './WhereFindMe.css';
import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';
import { useContext } from 'react';



/**
 * Where Find Me Section
 * 
 * The Ways to contact me.
 *
 * @returns {Returns the Ways to contact} 
 */
function WhereFindMe () {
    const language = useContext(LanguageContext)
    
    return (
        <section id='find-me' className="findme_container">
            <h2>{translations[language.language]?.where_find_me}</h2>
            <div className="findme--link_block">
                <a id='github' href="https://github.com/Jason21tod">Github</a>
                <a id='linkedin' href="https://www.linkedin.com/in/gian-pereira-595b48205">Linkedin</a>
                <a id='upwork' href="https://www.upwork.com/freelancers/~01c85774bb5d8274f5?mp_source=share">Upwork</a>
                <a id='fiverr' href="https://www.fiverr.com/jason_universe">Fiverr</a>
            </div>
        </section>
    )
}

export default WhereFindMe;