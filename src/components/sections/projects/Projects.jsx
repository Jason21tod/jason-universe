import React, { useState, useEffect } from 'react'
import {ScrollAnimation} from '../../utils/text_animations';

import './Projects.css'
import {checkProjectsEndpointStatus } from '../../../middleware/api_services';

import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';
import { useContext } from 'react';
import axios from 'axios';

let server_address = process.env.REACT_APP_SERVER;
let dev_environ = process.env.REACT_APP_ENV;
let project_data_mock = {
    title: 'title test',
    description_en: 'this is a increadeble project test to my aweasome portfolio',
    description_pt:'esse é meu incrivel projeto de teste no meu portfolio',
    image_link: './images/jason_scrapbot.png',
    link: '#'
}


console.log(`enviroment`, dev_environ)

function Projects () {
    const language = useContext(LanguageContext);

    useEffect(() => {
        checkProjectsEndpointStatus();
    })

    return (
        <ScrollAnimation id={'projects-section'}className={'projects-container'}>
            <h2  className='projects_section--title'>{translations[language.language]?.projects_title}</h2>
            <section className="projects_section">
                <CarouselContainer>
                </CarouselContainer>
            </section>
        </ScrollAnimation>
    )
}

function CarouselContainer () {
    const [projects, setProjects] = useState([])
    const [serverStatus, setServerStatus] = useState('offline')
    
    useEffect(() => {
        let serverIsOnline = checkProjectsEndpointStatus();
        serverIsOnline ? setServerStatus('online') : setServerStatus('offline'); 
        
        axios.get(`${server_address}/projects`)
            .then((response) => {
                    setProjects(response.data.projects);
                }
            )
        .catch((error) => {
            console.log(error);
            setProjects([])
        }
      );
    }, []);

    if (serverStatus==='offline' && dev_environ ==='production') {
        return (
            <div className='generic-container'>
                <h3>Server Is Offline</h3>
            </div>
        )
    }
    return (
        <div className={'carousel_container'} >
            {dev_environ === 'dev' ? <CarrousselItem className={'carousel_container--item'} projectData={project_data_mock}/>: undefined}
            {projects.map((project, index) => (
                <CarrousselItem
                    className={'carousel_container--item'}
                    key={project.id || index}
                    projectData={project}
                />
            ))}
        </div>
    );
}


function CarrousselItem ( {className, projectData} ) {
    const language = useContext(LanguageContext);

    console.log(`New project: ${projectData.title}`)
    return (
        <span className={className}>
            <div className='carousel_container--item_image_container'>
                <img src={projectData.image_link} alt="" />
            </div>
            <div className='carousel_container--item_body'>
                <h3>{projectData.title}</h3>
                <p>{projectData["description_"+language.language]}</p>
                <a href={projectData.link}>{translations[language.language]?.take_a_look}</a>
            </div>
        
        </span>
    )
}


export default Projects;