import './reset.css';
import './Main.css';
import '../styles/Generics.css';
import '../styles/Header_container.css';


function Main() {
  return (
      <main className='generic-container'>
        <h2>Sobre Mim</h2>
        <p className='generic-container--paragraph'>
          Olá, me chamo Gian Pereira e tenho 22 anos.
          Atúo no mercado de desenvolvimento desde os 20 anos com meu primeiro projeto para o Clara Resorts,
          o qual, foi o unico maior projeto qual participei.
        </p>
        <p className='generic-container--paragraph'>
          Desde então, tenho buscado projetos e experiência para entrar de vez na área de programação.
        </p>
        <p className='generic-container--paragraph'>
          Meu principal foco em desenvolvimento de soluções de automação web, desenvolvimento de sites e melhorias
          de processos empresariais.
        </p>
        <p className='generic-container--paragraph'>
          Por quê Jason? um amigo meu certa vez me disse que é mais facil de pronunciar.
        </p>
      </main>
  );
}

export default Main;
