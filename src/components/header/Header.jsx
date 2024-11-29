function Header() {
  const title_text = "Vamos construir seu universo?";

  return (
    <header className="header-container">
      <h1 className="header-container_title">
        {/* O codigo abaixo cria uma animação de fadeIn em letra por letra */}
        {Array.from(title_text).map((char, index) => (
          <span
            key={index}
            style={{
              animation: "fadeIn 0.2s", //Hoje aprendi a criar uma animação :D
              animationDelay: `${index * 0.1}s`,
              display: "inline-block"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <legend>Gian P. Nunes</legend>
      <p>Desenvolvedor FullStack</p>
    </header>
  );
}

export default Header;
