import './LetsWorkTogether.css'

function LetsWorkTogether () {
    return (
        <section className="lets_work-section">
            <h2 className="lets_work-title">Lets Work Together</h2>
            <legend className="lets_work-legend">Im glad that you stayed, so let's build your universe?</legend>
            <form className="lets_work-form">
                <label htmlFor="name">Name: <input type="text" name="name" id="name" /></label>
                <label htmlFor="email">Email: <input type="email" name="email" id="email" /></label>
                <label htmlFor="proposal">Proposal: <input type="text" name="proposal" id="email"/></label>
                <button type="submit">Lets Go!</button>
            </form>
        </section>
    )
}

export default LetsWorkTogether;