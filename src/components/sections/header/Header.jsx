import { WordPopup } from "../../utils/text_animations";
import './Header_container.css';


function Header() {
  const title_text = "Vamos";
  const tittle_text_2 = " Construir";
  const tittle_text_3 = " Seu";
  const tittle_text_4 = " Universo?"

  return (
    <header className="header-container">
      <h1 className="header-container_title">
        {/* O codigo abaixo cria uma animação de pop up em letra por letra */}
        <WordPopup word={title_text} anim_time={"0.2s"} delay_coefficient={0.1}></WordPopup>
        <WordPopup word={tittle_text_2} anim_time={"0.2s"} delay_coefficient={0.1}></WordPopup>
        <WordPopup word={tittle_text_3} anim_time={"0.2s"} delay_coefficient={0.1}></WordPopup>
        <WordPopup word={tittle_text_4} anim_time={"0.2s"} delay_coefficient={0.1}></WordPopup>
      </h1>
      <legend className="header-container_legend">Gian P. Nunes, mas pode me chamar de Jason</legend>
      <p>Desenvolvedor FullStack</p>
    </header>
  );
}



export default Header;
