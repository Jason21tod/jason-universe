import React, { useState, cloneElement, useEffect } from 'react'
import ScrollAnimation from '../../utils/text_animations';

import './Projects.css'
import { checkServerStatus } from '../../../middleware/api_services';
import axios from 'axios';


let server_address = process.env.REACT_APP_SERVER;


let project_data_test = {
    name: 'Project name',
    description: 'Description of a increadeable project made by myself and did ',
    image_link: '/',
    link: '/'
}

function project_factory() {
    
}

let projects = []


function Projects () {

    useEffect(() => {
        checkServerStatus(server_address+'/projects', axios.get, {}).then(response =>{
            console.log(response)
            console.log('server projects endpoint online')
        }).catch(error => {
            console.log(error)
            console.log('could not connect to projects endpoint')
        })
    })

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
            <img src={projectData.image_link} alt="" />
            <a href={projectData.link}>Take a Look</a>
        </span>
    )
}


export default Projects;