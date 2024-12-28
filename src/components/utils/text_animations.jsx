import { useState, useRef, useEffect } from "react";

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


export default ScrollAnimation;