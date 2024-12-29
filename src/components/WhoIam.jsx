import './reset.css';
import '../styles/Generics.css';
import '../styles/Header_container.css';
import './WhoIam.css'
import ScrollAnimation from './utils/text_animations.jsx'


function WhoIam() {
  return(
    <section id='about-section' className='who-iam-container'>
      <ScrollAnimation >
        <h2 className='generic-container--title'>Sobre Mim</h2>
        <p className='generic-container--paragraph'>
          Olá, me chamo Gian Pereira e tenho 22 anos. Atuamente, trabalho como freelancer.
          Meu principal foco é desenvolvimento de soluções de automação, desenvolvimento de sites e melhorias
          de processos empresariais e relacionados ao cliente.
        </p>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className='generic-container--paragraph'>
          Desenvolvo/desenvolvi soluções de chat; Pedidos Online; Sites simples; automações de escala de trabalho; Hotelaria e mais;
        </p>
      </ScrollAnimation>
    </section>
  )
}


export default WhoIam;
