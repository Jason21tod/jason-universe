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
    const [carrouselState, setCarrousel] = useState('carrousel_container--covered');
    const [carrouselItemState, setCarrouselItem] = useState('carrousel_item carrousel_item--inactive');
    const [projects, setProjects] = useState([])
    const [serverStatus, setServerStatus] = useState('offline')
    
    useEffect(() => {
        axios
            .get(`${server_address}/projects`)
            .then((response) => {
                setProjects(response.data.projects);
                setServerStatus('online')
            })
            .catch((error) => {
                console.log(error);
                setServerStatus('offline')
            });
    }, []);

    function expandContainer() {
        setCarrousel((prevState) =>
            prevState === 'carrousel_container--covered'
                ? 'carrousel_container--expanded'
                : 'carrousel_container--covered'
        );
        setCarrouselItem(carrouselState === 'carrousel_container--expanded'
                ? 'carrousel_item carrousel_item--inactive'
                : 'carrousel_item carrousel_item--active'
        );
    }

    if (serverStatus==='offline') {
        return (
            <div className='generic-container'>
                <h3>O servidor está offline </h3>
            </div>
        )
    }
    return (
        <div className={carrouselState} onClick={expandContainer}>
            {projects.map((project, index) => (
                <CarrousselItem
                    className={carrouselItemState}
                    key={project.id || index}
                    projectData={project}
                />
            ))}
        </div>
    );
}


function CarrousselItem ( {className, projectData} ) {

    console.log(`New project: ${projectData.name}`)
    return (
        <span className={className}>
            <h3>{projectData.title}</h3>
            <p>{projectData.description}</p>
            <img src={projectData.image_link} alt="" />
            <a href={projectData.link}>Take a Look</a>
        </span>
    )
}


export default Projects;