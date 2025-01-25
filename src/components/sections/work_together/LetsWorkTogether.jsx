import './LetsWorkTogether.css'

import SidePopup from '../../Notifications';
import { useEffect, useState } from 'react';
import axios from 'axios';


let server_address = process.env.REACT_APP_SERVER;



function LetsWorkTogether () {
    const [server_status, setServerStatus] = useState('offline')
    const [popup, setPopup] = useState('--deactivated')
    const [popup_type, setPopupType] = useState('failed')
    const [popup_content, setPopupContent] = useState('Backend System Is Offline :(')

    useEffect(() => {
    const checkServerStatus = async () => {
        try {
          const response = await axios.get(server_address+"/is_online");
          if (response.status === 200) {
            changePopupExibition('online', 'Server connection stablished!')
            console.log('connection success')
          } else {
            changePopupExibition('offline', 'Server is Offline...')
            console.log('connection failed')
          }
        } catch (error) {
            changePopupExibition('offline', 'Backend Connection Offline')
            console.log('connection failed')
        }
      };
  
      checkServerStatus();
    }, [])

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

    function handleSubmit(event) {
        event.preventDefault()
        const formData = event.target.elements
        console.log(formData.name.value)
        console.log(formData.email.value)
        console.log(formData.proposal.value)
        submitProposal()
        axios.post(server_address+'/email_service/', {
            name: formData.name.value,
            email: formData.email.value,
            about: formData.proposal.value,
            cellphone: ''
        }).then(response => {
            console.log(response)
            if (response.data['status']==='success') {
                changePopupExibition('online', 'Proposal sended, keep eyes on your email')
            }
        }).catch(error=> {
            console.log(error)
            changePopupExibition('offline', 'Server is down or unreacheable')
        })
    }

    return (
        <section id='work-with-me' className="lets_work-section">
            <SidePopup popup_status={popup} type={popup_type} content={popup_content} anim_duration='3s'/>
            <h2 className="lets_work-title">Work With Me</h2>
            <legend className="lets_work-legend">So let's build your universe?</legend>
            <div className='lets_work-form_area'>
                <img src="" alt="universe" className="lets_work-img"/>
                <form method='post' onSubmit={handleSubmit} className='lets_work-form_container' >
                    <div className='lets_work-form'>
                        <label required htmlFor="name">Name: </label>
                        <input required type="text" name="name" id="name" />
                        <label required htmlFor="email">Email: </label>
                        <input required type="email" name="email" id="email" />
                        <label required htmlFor="proposal">Proposal: </label>
                        <input required type="text" name="proposal" id="proposal"/>
                    </div>
                    <input className='lets_work-submit' type="submit" value="Enviar proposta" />
                </form>
            </div>
        </section>
    )
}

export default LetsWorkTogether;