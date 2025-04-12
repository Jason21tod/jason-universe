import './LetsWorkTogether.css'

import SidePopup from '../../utils/Notifications';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { checkServerStatus } from '../../../middleware/api_services';
import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';
import { useContext } from 'react';


let server_address = process.env.REACT_APP_SERVER;


function LetsWorkTogether () {
    const language = useContext(LanguageContext)
    const [server_status, setServerStatus] = useState('offline')
    const [popup, setPopup] = useState('--searching')
    const [popup_type, setPopupType] = useState('searching')
    const [popup_content, setPopupContent] = useState(translations[language.language]?.server_connecting)

    useEffect(() => {
        checkServerStatus(server_address+'/email_service', axios.post, dataFactory('name', 'test@gmail.com', 'my proposal test')).then(response=> {
            if (response===200) {
                changePopupExibition('online', translations[language.language]?.server_online)
            } else {
                changePopupExibition('offline', translations[language.language]?.server_offline)
            }
        });
    }, [language.language])


    const submitProposal = () => {
        console.log('submiting proposal')
        if (server_status === 'offline') {
            console.log('server is down')
            changePopupExibition('offline', 'Server is Offline...')
        } else {
            console.log('proposal sended')
            changePopupExibition('online', 'Sending proposal...')

        }
    }

    const changePopupExibition = (server_context, message, timer=3000) => {
        setPopup('--active')
        if (server_context === 'offline') {
            setServerStatus(server_context)
            setPopupType('failed')
            setPopupContent(message)
        } else {
            setServerStatus('online')
            setPopupType('success')
            setPopupContent(message)
        }
        setTimeout(() => 
            setPopup('--deactivated'),
            timer
        )
    }

    function dataFactory(name, email, proposal) {
        console.log('Name: '+name)
        console.log('Email: '+email)
        console.log('Proposal: '+proposal)
        return {
            name: name, email:email, about:proposal, cellphone: ''
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = event.target.elements
        submitProposal()
        axios.post(server_address+'/email_service/', {
            name: formData.name.value,
            email: formData.email.value,
            about: formData.proposal.value,
            cellphone: ''
        }).then(response => {
            console.log(response)
            if (response.data['status']==='success') {
                changePopupExibition('online', translations[language.language]?.proposal_sended)
                event.target.elements.name.value = '';
                event.target.elements.email.value = '';
                event.target.elements.proposal.value = '';
            }
        }).catch(error=> {
            console.log(error)
            changePopupExibition('offline', translations[language.language]?.server_is_down)
        })
    }

    return (   
            <section id='work-with-me' className="lets_work-section">
                <div className='lets_work-col col_form'>
                    <div className='col_form-header'>
                        <h2 className="lets_work-title">{translations[language.language]?.work_with_me}</h2>
                        <legend className="lets_work-legend">{translations[language.language]?.lets_work_legend}</legend>
                        <SidePopup popup_status={popup} type={popup_type} content={popup_content} anim_duration='3s'/>
                    </div>
                    <div className='col_form-form_area'>
                        <form method='post' onSubmit={handleSubmit} className='lets_work-form_container' >
                            <div className='lets_work-form'>
                                <label required htmlFor="name">{translations[language.language]?.name}: </label>
                                <input required type="text" name="name" id="name" />
                                <label required htmlFor="email">Email: </label>
                                <input required type="email" name="email" id="email" />
                                <label required htmlFor="proposal">{translations[language.language]?.proposal}: </label>
                                <input required type="text" name="proposal" id="proposal"/>
                            </div>
                            <input className='lets_work-submit' type="submit" value={translations[language.language]?.send_proposal} />
                        </form>
                    </div>
                </div>
                <div className='lets_work-col col_img'>
                </div>
            </section>
    )
}

export default LetsWorkTogether;