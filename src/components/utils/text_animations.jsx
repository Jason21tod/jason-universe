import { useState, useRef, useEffect } from "react";

function ScrollAnimation({ children, className='' }) {
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
        className={isVisible ? `${className} scroll-animation scroll-animation--visible`:`${className} scroll-animation scroll-animation--hidden`}
        >
        {children}
      </div>
    )
  }


  function WordPopup ({word, anim_time, delay_coefficient}) {
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

export {WordPopup};
export default ScrollAnimation;