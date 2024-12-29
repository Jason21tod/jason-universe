import React, { useState, cloneElement } from 'react'
import ScrollAnimation from './utils/text_animations';

import './Projects.css'

function Projects () {

    return (
        <ScrollAnimation>
            <section id='projects-section' className="projects_section">
                <h2 className='projects_section--title'>Meus projetos</h2>
                <CarrouselContainer>
                    <CarrousselItem/>
                    <CarrousselItem/>
                </CarrouselContainer>
                <CarrouselContainer>
                    <CarrousselItem/>
                </CarrouselContainer>
                <CarrouselContainer>
                    <CarrousselItem/>
                    <CarrousselItem/>
                    <CarrousselItem/>
                </CarrouselContainer>
            </section>
        </ScrollAnimation>
    )
}

function CarrouselContainer ({children}) {
    const [carrouselState, setCarrousel] = useState('carrousel_container');
    
    function expandMyContainer() {
        setCarrousel((prevState) =>
            prevState === 'carrousel_container'
                ? 'carrousel_container--expanded'
                : 'carrousel_container'
        );
    }

    // Criando um componente modificado, usando a clonagem

    const modifiedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            console.log("modfy container infos")
            const newClassName = `${child.props.className || 'carrousel_item'} 
            ${ carrouselState === 'carrousel_container--expanded'
                ? 'carrousel_item--active'
                : 'carrousel_item'
            }
            `.trim();

            return  cloneElement(child, {className: newClassName});
        }
        return child;
    });

    return (
        <div className={carrouselState} onClick={expandMyContainer}>
            {modifiedChildren}
        </div>
    )
}


function CarrousselItem ( {className} ) {

    return (
        <span className={className}>
        </span>
    )
}


export default Projects;