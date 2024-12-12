import './reset.css';
import '../styles/Generics.css';
import '../styles/Header_container.css';
import './WhoIam.css'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';




function ScrollAnimation({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementReference = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementReference.current) return;

      const rect = elementReference.current.getBoundingClientRect();
      const isInViweport = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isInViweport) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      ref={elementReference}
      className={isVisible ? "generic-container generic-container--visible":"generic-container generic-container--hidden"}
      >
      {children}
    </div>
  )
}

function WhoIam() {
  return(
    <section className='who-iam-container'>
      <ScrollAnimation >
        <h2 className='generic-container--title'>Sobre Mim</h2>
        <p className='generic-container--paragraph'>
          Olá, me chamo Gian Pereira e tenho 22 anos. Sou desenvolvedor Fullstack e atuo desenvolvo soluções web.
          Meu principal foco em desenvolvimento de soluções de automação, desenvolvimento de sites e melhorias
          de processos empresariais e relacionados ao cliente.
        </p>
      </ScrollAnimation>
    </section>
  )
}


export default WhoIam;
