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
                setServerStatus('online')
                setPopup('--active')
                setPopupType('success')
                setPopupContent('Backend System Online. Welcome!')
                console.log('sets as success')
          } else {
                setServerStatus('online')
                setPopup('--active')
                setPopupType('failed')
                console.log('sets as failed')
          }
        } catch (error) {
                setPopup('--active')
                setPopupType('failed')
                console.log('sets as failed')
        } finally {
            setTimeout(() => 
                setPopup('--deactivated'),
                8000
            )
        }
      };
  
      checkServerStatus();
    }, [])


    return (
        <section id='work-with-me' className="lets_work-section">
            <SidePopup popup_status={popup} type={popup_type} content={popup_content} anim_duration='3s'/>
            <h2 className="lets_work-title">Work With Me</h2>
            <legend className="lets_work-legend">So let's build your universe?</legend>
            <div className='lets_work-form_area'>
                <img src="" alt="universe" className="lets_work-img"/>
                <form className="lets_work-form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="proposal">Proposal: </label> 
                    <input type="text" name="proposal" id="email"/>
                </form>
                <button>Let's Go!</button>
            </div>
        </section>
    )
}

export default LetsWorkTogether;