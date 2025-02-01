import React, { useState, useEffect } from 'react'
import ScrollAnimation from '../../utils/text_animations';

import './Projects.css'
import { checkServerStatus } from '../../../middleware/api_services';
import axios from 'axios';


let server_address = process.env.REACT_APP_SERVER;



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
            <h2 className='projects_section--title'>Meus projetos</h2>
            <section id='projects-section' className="projects_section">
                <CarrouselContainer>
                </CarrouselContainer>
            </section>
        </ScrollAnimation>
    )
}

function CarrouselContainer () {
    const [carrouselState, setCarrousel] = useState('carrousel_container');
    const [carrouselItemState, setCarrouselItem] = useState('carrousel_item carrousel_item--inactive');
    
    function expandContainer() {
        setCarrousel((prevState) =>
            prevState === 'carrousel_container'
                ? 'carrousel_container--expanded'
                : 'carrousel_container'
        );
        setCarrouselItem(carrouselState === 'carrousel_container--expanded'
                ? 'carrousel_item carrousel_item--inactive'
                : 'carrousel_item carrousel_item--active'
        );
    }

    function projectFactory(name, description, image_link, link) {
        return(
            <CarrousselItem className={carrouselItemState} projectData={
                {
                    name: name,
                    description: description,
                    image_link: image_link,
                    link: link
                }}/>)
    }
    

    let projects = [
        projectFactory(
            'test 1', 'description test', '/', '/'
        ),
        projectFactory(
            'test 2', 'description test 2', '/', '/'
        ),
        projectFactory(
            'test 2', 'description test 2', '/', '/'
        )
    ]
    
    // const modifiedChildren = React.Children.map(children, (child) => {
    //     console.log(child)
    //     console.log(children)
    //     if (React.isValidElement(child)) {
    //         const newClassName = `${child.props.className || 'carrousel_item'}
    //         ${ carrouselState === 'carrousel_container--expanded'
    //             ? 'carrousel_item carrousel_item--active'
    //             : 'carrousel_item carrousel_item--inactive'
    //         }
    //         `.trim();
    //     }
    // });

    return (
        <div className={carrouselState}  onClick={expandContainer}>
            {projects.map(children => {
                return children
            })}
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