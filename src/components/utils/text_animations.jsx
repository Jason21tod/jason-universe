import { useState, useRef, useEffect } from "react";



/**
 * That its a Wrapper for the react components that play a animation when its in the viewport
 *
 * @param {{ children: React.Component; className?: string; id?: string; }} param0 
 * @param {The Component that should be Wrapped} param0.children 
 * @param {The class name of this scroll animation} [param0.className=''] 
 * @param {The Id of this, used for navigation porpouses} [param0.id=''] 
 * @returns {The ScrollAnimation container} 
 */
function ScrollAnimation({ children, className='', id='' }) {
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
        id={id}
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
             animation: anim_config, 
             animationDelay: `${index * delay_coefficient}s`,
             display: "inline-block",
             fontSize: 'var(--word-popup-font-size)'
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
export {ScrollAnimation};