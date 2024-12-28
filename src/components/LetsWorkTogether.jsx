import './LetsWorkTogether.css'

function LetsWorkTogether () {
    return (
        <section className="lets_work-section">
            <h2 className="lets_work-title">Lets Work Together</h2>
            <legend className="lets_work-legend">Im glad that you stayed, so let's build your universe?</legend>
            <div className='lets_work-form_area'>
                <img src="" alt="universe" className="lets_work-img"/>
                <form className="lets_work-form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="proposal">Proposal: </label> 
                    <input type="text" name="proposal" id="email"/>
                    <button type="submit">Lets Go!</button>
                </form>
            </div>
        </section>
    )
}

export default LetsWorkTogether;