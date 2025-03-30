import { WordPopup } from "../../utils/text_animations";
import './Header.css';


function Header() {
  const title_text = "Vamos";
  const tittle_text_2 = " Construir";
  const tittle_text_3 = " Seu";
  const tittle_text_4 = " Universo?";
  const animation_time = '0.5s';

  return (
    <header className="header-container">
      <h1 className="header-container_title">
        {/* O codigo abaixo cria uma animação de pop up em letra por letra */}
        <WordPopup word={title_text} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
        <WordPopup word={tittle_text_2} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
        <WordPopup word={tittle_text_3} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
        <WordPopup word={tittle_text_4} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
      </h1>
      <hr />
      <legend className="header-container_legend">Gian P. Nunes Desenvolvedor FullStack</legend>
    </header>
  );
}



export default Header;
