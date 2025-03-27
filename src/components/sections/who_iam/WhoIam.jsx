import './WhoIam.css'
import {ScrollAnimation} from '../../utils/text_animations.jsx'


function WhoIam() {
  return(
    <section id='about-section' className='who-iam-container'>
      <div className='who-iam--column'>
        <ScrollAnimation >
          <h2 className='who-iam--title'>Sobre Mim</h2>
          <p className='who-iam--paragraph'>
            Olá, me chamo Gian Pereira (Ou Jason) e tenho 22 anos. Atualmente, trabalho como freelancer para renda extra.
            Meu principal foco é desenvolvimento de soluções de automação, desenvolvimento de sites e melhorias
            de processos empresariais e relacionados ao cliente.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className='who-iam--paragraph'>
            Meu maior trabalho foi feito para a rede de hotéis Clara Resorts, durante meu período lá, entretanto,
            já desenvolvi projetos menores, tanto voluntáriados quanto projetos remunerados.
          </p>
        </ScrollAnimation>
      </div>
      <div className='who-iam--column'>
        <ScrollAnimation>
          <img id='planet' src="./images/me-image-animation.gif" alt="collection of projects" />
        </ScrollAnimation>
      </div>
    </section>
  )
}


export default WhoIam;
