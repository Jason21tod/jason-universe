import './WhoIam.css'
import {ScrollAnimation} from '../../utils/text_animations.jsx'

import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';
import { useContext } from 'react';


function WhoIam() {
  const language = useContext(LanguageContext);

  return(
    <section id='about-section' className='who-iam-container'>
      <div className='who-iam--column'>
        <ScrollAnimation >
          <h2 className='who-iam--title'>{translations[language.language]?.about_me}</h2>
          <p className='who-iam--paragraph'>
            {translations[language.language]?.who_iam_paragraph_1}
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className='who-iam--paragraph'>
            {translations[language.language]?.who_iam_paragraph_2}
          </p>
        </ScrollAnimation>
      </div>
      <div className='who-iam--column'>
        <ScrollAnimation>
          <img id='planet' srcSet="
          ./images/me-image-animation-cel.gif 192w,
          ./images/me-image-animation.gif "
          sizes='(max-width: 480px) 192px,
          440px'

          alt="Me in pixel art!" />
        </ScrollAnimation>
      </div>
    </section>
  )
}


export default WhoIam;
