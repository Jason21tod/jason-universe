import './Notifications.css'


function SidePopup ( {content='Hello, im notification :D', popup_status='', anim_duration = '5s', type='success'}) {
    return (
        <div className={"side_popup side_popup"+popup_status+" "+type} style={{animationDuration:anim_duration}}>
            <p>{content}</p>
        </div>
    )
}


export default SidePopup;