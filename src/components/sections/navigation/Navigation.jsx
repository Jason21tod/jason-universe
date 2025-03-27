import { useState } from 'react';

import './Navigation.css'


function Navigation () {
    const [menuState, setMenu] = useState("navigation_container--links--inactive")

    const handleClick = () => {
        (menuState === "navigation_container--links--inactive") ? 
        setMenu('navigation_container--links--active') : setMenu("navigation_container--links--inactive")
    }

    return (
        <div className="navigation_container">
            <div className='navigation_bar'>
                <ToggleMenu handleClick={handleClick}></ToggleMenu>
                <p className='navigation_bar-text'>
                    Welcome to my profile
                </p>
            </div>
            <nav className={`navigation_container--links ${menuState}`}>
                <ToggleMenu handleClick={handleClick}></ToggleMenu>
                <a onClick={handleClick} href="#about-section">About Me</a>
                <a onClick={handleClick} href="#projects-section">Projects</a>
                <a id='work_with_me--link' onClick={handleClick} href="#work-with-me">Work With Me</a>
            </nav>
        </div>
    )
}

function NavBarOclusion () {
    return (
        <div className='navigation_container--deactivate'>
        </div>
    )
}

function ToggleMenu ({handleClick}) {
    return (
        <button onClick={handleClick} className="navigation_container--button navigation_container--button--inactive">
            <i className="navigation_container--menu">
                <span class="material-symbols-outlined">menu</span>
            </i>
        </button>)
}

export {NavBarOclusion};
export {Navigation};
