import './LetsWorkTogether.css'

import SidePopup from '../../utils/Notifications';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { checkServerStatus } from '../../../middleware/api_services';
import translations from '../../../translations';
import { LanguageContext } from '../../../languageContext';
import { clearForm, dataFactory, formDataRetriver, submitProposal } from './utils/main';


let server_address = process.env.REACT_APP_SERVER;


/**
 * Section Lets Work Together
 * 
 * This Sectin handle the form and process its data
 *
 * @returns {The Section LetsWorkTogether} 
 */
function LetsWorkTogether () {
    const language = useContext(LanguageContext)
    const [server_status, setServerStatus] = useState('offline')
    const [popup_class, setPopupClass] = useState('--searching')
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


    
    /**
     * This Function Attemps to connect the server peridically
     *
     * @param {The server context provided on the function call and used to change the all form context} server_context 
     * @param {The message that you can see in the form} message 
     * @param {The timer until another call to this function} [timer=3000] 
     */
    const changePopupExibition = (server_context, message, timer=3000) => {
        setPopupClass('--active')
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
            setPopupClass('--deactivated'),
            timer
        )
    }


    
    /**
     * Handle Submit and Change the form state
     * 
     * This function attempts to send the form data to the backend, changing the form state based on the response.
     *
     * @param {the event that triger the function} event 
     */
    function handleSubmit(event) {
        event.preventDefault()
        let form_data = formDataRetriver(event);
        submitProposal(server_status, changePopupExibition)
        
        axios.post(server_address+'/email_service/', form_data)
        .then(response => {
            console.log(response)
            if (response.data['status']==='success') {
                changePopupExibition('online', translations[language.language]?.proposal_sended)
                clearForm(event);
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
                        <SidePopup popup_status={popup_class} type={popup_type} content={popup_content} anim_duration='3s'/>
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