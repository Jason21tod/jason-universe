import React, { useState, useEffect, useContext } from 'react'
import {ScrollAnimation} from '../../utils/text_animations';
import axios from 'axios';

import './Projects.css'
import {checkServerStatus } from '../../../middleware/api_services';
import { project_data_mock } from './test';

import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';

let server_address = process.env.REACT_APP_SERVER;
let dev_environ = process.env.REACT_APP_ENV;



console.log(`enviroment`, dev_environ)



/**
 * The Projects Section
 * 
 * The section that holds the projects that are returned by backend.
 *
 * @returns {The ScrollAnimation With the Project Section} 
 */
function Projects () {
    const language = useContext(LanguageContext);

    useEffect(() => {
        checkServerStatus(server_address+'/projects', axios.get, {});
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



/**
 * The Carrousel Container
 * 
 * This component iterate through a array returned by the backend, then, make a lot of carrouselItem with the data.
 *
 * @returns {The CarouselContainer with carrouselItems} 
 */
function CarouselContainer () {
    const [projects, setProjects] = useState([])
    const [serverStatus, setServerStatus] = useState('offline')
    
    useEffect(() => {
        axios.get(`${server_address}/projects`)
            .then((response) => {
                    setServerStatus("online")
                    setProjects(response.data.projects);
                }
            )
        .catch((error) => {
            console.log(error);
            setServerStatus("offline")
            setProjects([])
        }
      );
    }, []);

    if (serverStatus==='offline' && dev_environ !=='dev') {
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


/**
 * The Carrousel Item
 *
 * 
 * @param {The Class Name to teh carrousel Item} param0.className 
 * @param {The project that to be included in the Carroussel Item. Should have the fields: image_link, title, description_pt, description_en, link} param0.projectData 
 * @returns {The carrouselItem with the prjects data} 
 */
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