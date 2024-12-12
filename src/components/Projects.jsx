import './Projects.css'

function Projects () {

    return (
        <section className="projects-section generic-container">
            <h2 className='projects-section--title'>Meus projetos</h2>
            <div className="carrousel-container">
                <CarrousselItem/>
                <CarrousselItem/>
            </div>
            <div  className="carrousel-container">
                <CarrousselItem/>
                <CarrousselItem/>
            </div>
            <div className="carrousel-container">
                <CarrousselItem/>
                <CarrousselItem/>
            </div>
        </section>
    )
}


function CarrousselItem () {
    function showMyModal () {
        alert("heyo, ths my modal")
    }
    return (
        <span  className="carrousel-item" onClick={showMyModal}>
        </span>
    )
}

export default Projects;