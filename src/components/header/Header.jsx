function Header() {
  const title_text = "Vamos";
  const tittle_text_2 = " Construir";
  const tittle_text_3 = " Seu";
  const tittle_text_4 = " Universo?"

  return (
    <header className="header-container">
      <h1 className="header-container_title">
        {/* O codigo abaixo cria uma animação de pop up em letra por letra */}
        <TitleAnimator word={title_text} anim_time={"0.2s"} delay_coefficient={0.1}></TitleAnimator>
        <TitleAnimator word={tittle_text_2} anim_time={"0.2s"} delay_coefficient={0.1}></TitleAnimator>
        <TitleAnimator word={tittle_text_3} anim_time={"0.2s"} delay_coefficient={0.1}></TitleAnimator>
        <TitleAnimator word={tittle_text_4} anim_time={"0.2s"} delay_coefficient={0.1}></TitleAnimator>
      </h1>
      <legend className="header-container_legend">Gian P. Nunes, mas pode me chamar de Jason</legend>
      <p>Desenvolvedor FullStack</p>
    </header>
  );
}

function TitleAnimator ({word, anim_time, delay_coefficient}) {
   let anim_config = `${"fadeInY "+anim_time}`;
  return (
    <p>
      {Array.from(word).map((char, index) => (
        <span
          key={index}
          style={{
            animation: anim_config, //Hoje aprendi a criar uma animação :D
            animationDelay: `${index * delay_coefficient}s`,
            display: "inline-block",
            fontSize: "45px"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
        )
      )}
    </p>
  )
}

export default Header;
