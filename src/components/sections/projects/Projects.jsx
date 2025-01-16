import React, { useState, cloneElement } from 'react'
import ScrollAnimation from '../../utils/text_animations';

import './Projects.css'


let project_data_test = {
    name: 'Project name',
    description: 'Description of a increadeable project made by myself and did '
}


function Projects () {

    return (
        <ScrollAnimation className={'projects-container'}>
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
    
    function expandContainer() {
        setCarrousel((prevState) =>
            prevState === 'carrousel_container'
                ? 'carrousel_container--expanded'
                : 'carrousel_container'
        );
    }

    // Criando um componente modificado, usando a clonagem

    const modifiedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            console.log("modify container infos")
            const newClassName = `${child.props.className || 'carrousel_item'}
            ${ carrouselState === 'carrousel_container--expanded'
                ? 'carrousel_item carrousel_item--active'
                : 'carrousel_item carrousel_item--inactive'
            }
            `.trim();
            return  cloneElement(child, {className: newClassName, projectData: project_data_test});
        }
        return child;
    });

    return (
        <div className={carrouselState}  onClick={expandContainer}>
            {modifiedChildren}
        </div>
    )
}


function CarrousselItem ( {className, projectData} ) {

    console.log(`New project: ${projectData.name}`)
    return (
        <span className={className}>
            <h3>{projectData.name}</h3>
            <p>{projectData.description}</p>
            <button>Take a Look</button>
        </span>
    )
}


export default Projects;