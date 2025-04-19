import { WordPopup } from "../../utils/text_animations";
import {  LanguageContext } from "../../../languageContext";
import translations from "../../../translations";
import './Header.css';
import { useContext } from "react";




/**
 * The Header Section. That Component uses a lot of text that popup with an animation called WordPopup, but, its applied letter by letter.
 *
 * @returns {The Header Component} 
 */
function Header() {
  const language = useContext(LanguageContext);  

  const title_text = translations[language.language].title_text_1;
  const title_text_2 = translations[language.language].title_text_2;
  const title_text_3 = translations[language.language].title_text_3;
  const title_text_4 = translations[language.language].title_text_4;
  const animation_time = '0.5s';


  return (
    <header className="header-container">
      <h1 className="header-container_title">
        <WordPopup word={title_text} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
        <WordPopup word={title_text_2} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
        <WordPopup word={title_text_3} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
        <WordPopup word={title_text_4} anim_time={animation_time} delay_coefficient={0.1} ></WordPopup>
      </h1>
      <hr />
      <legend className="header-container_legend">{translations[language.language]?.about}</legend>
    </header>
  );
}



export default Header;
