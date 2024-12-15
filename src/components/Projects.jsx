import { useState } from 'react'
import './Projects.css'

function Projects () {

    return (
        <section className="projects_section">
            <h2 className='projects_section--title'>Meus projetos</h2>
            <CarrouselContainer>
                <CarrousselItem/>
                <CarrousselItem/>
            </CarrouselContainer>
            <CarrouselContainer>
                <CarrousselItem/>
            </CarrouselContainer>
            <CarrouselContainer></CarrouselContainer>
        </section>
    )
}

function CarrouselContainer ({children}) {
    const [carrouselState, setCarrousel] = useState('carrousel_container');
    function expandMyContainer () {
        if (carrouselState === 'carrousel_container') {
            setCarrousel('carrousel_container--expanded')
        }
        if (carrouselState === 'carrousel_container--expanded') {
            setCarrousel('carrousel_container')
        }
    }

    return (
        <div className={carrouselState} onClick={expandMyContainer}>
            {children}
        </div>
    )
}


function CarrousselItem () {
    const [carrouselState, setCarrousel] = useState('carrousel_item');
    

    function shoMyCarrousel () {
        if (carrouselState === 'carrousel_item') {
            setCarrousel('carrousel_item--active');
            return
            
        } if (carrouselState === 'carrousel_item--active'){
            setCarrousel('carrousel_item');
            return
        };
    }

    return (
        <span className={carrouselState} onClick={shoMyCarrousel}>
        </span>
    )
}


export default Projects;