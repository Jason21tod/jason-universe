import React, { useState, useEffect } from 'react'
import {ScrollAnimation} from '../../utils/text_animations';

import './Projects.css'
import { checkServerStatus } from '../../../middleware/api_services';
import axios from 'axios';


let server_address = process.env.REACT_APP_SERVER;
let dev_environ = process.env.REACT_APP_ENV;

console.log(`enviroment`, dev_environ)

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
        <ScrollAnimation id={'projects-section'}className={'projects-container'}>
            <h2  className='projects_section--title'>Meus projetos</h2>
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


    if (dev_environ ==='dev') {
        let project_data_mock = {
            title: 'title test',
            description: 'this is a increadeble project test to my aweasome portfolio',
            image_link: './images/jason_scrapbot.png',
            link: '#'
        }
        console.log("environ development")

        return (
            <div className='generic-container carousel_container'>
                <CarrousselItem className={'carousel_container--item'} projectData={project_data_mock}/>
                {projects.map((project, index) => (
                <CarrousselItem
                    className={'carousel_container--item'}
                    key={project.id || index}
                    projectData={project}
                />
            ))}
            </div>

        )
    } 

    if (serverStatus==='offline' && dev_environ!=='dev') {
        console.log((dev_environ==='dev'))
        console.log(dev_environ)
        return (
            <div className='generic-container'>
                <h3>O servidor está offline </h3>
            </div>
        )
    }
    return (
        <div className={'carousel_container'} >
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

    console.log(`New project: ${projectData.name}`)
    return (
        <span className={className}>
            <div className='carousel_container--item_image_container'>
                <img src={projectData.image_link} alt="" />
            </div>
            <div className='carousel_container--item_body'>
                <h3>{projectData.title}</h3>
                <p>{projectData.description}</p>
                <a href={projectData.link}>Take a Look</a>
            </div>
        
        </span>
    )
}


export default Projects;