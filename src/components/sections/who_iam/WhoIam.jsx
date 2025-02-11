import './WhoIam.css'
import ScrollAnimation from '../../utils/text_animations.jsx'


function WhoIam() {
  return(
    <section id='about-section' className='who-iam-container'>
      <ScrollAnimation >
        <h2 className='scroll-animation--title'>Sobre Mim</h2>
        <p className='scroll-animation--paragraph'>
          Olá, me chamo Gian Pereira e tenho 22 anos. Atuamente, trabalho como freelancer.
          Meu principal foco é desenvolvimento de soluções de automação, desenvolvimento de sites e melhorias
          de processos empresariais e relacionados ao cliente.
        </p>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className='scroll-animation--paragraph'>
          Desenvolvo/desenvolvi soluções de chat; Pedidos Online; Sites simples; automações de escala de trabalho; Hotelaria e mais;
        </p>
      </ScrollAnimation>
      <ScrollAnimation>
        <img id='planet' src="./images/astra-planet-64x64.png" alt="collection of projects" />
      </ScrollAnimation>
    </section>
  )
}


export default WhoIam;
