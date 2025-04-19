import './Notifications.css'


/**
 * The component that show info on screen based on a seriees of attributes
 *
 * @param {{ content?: string; popup_status?: string; anim_duration?: string; type?: string; }} param0 
 * @param {The notification content} [param0.content='Hello, im notification :D'] 
 * @param {The status of the popup used to change the class name, changing the context} [param0.popup_status=''] 
 * @param {the duration of the animation, if has some} [param0.anim_duration='5s'] 
 * @param {The type of the animation: succes, failed or searching} [param0.type='success'] 
 * @returns {Return a popup that could be animated} 
 */
function SidePopup ( {content='Hello, im notification :D', popup_status='', anim_duration = '5s', type='success'}) {
    return (
        <div className={"side_popup side_popup"+popup_status+" "+type} style={{animationDuration:anim_duration}}>
            <p>{content}</p>
        </div>
    )
}


export default SidePopup;