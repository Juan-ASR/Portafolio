import "../styles/AboutMe.css"
import { datos } from "../../datos.js"

function AboutMe() {
    return (
        <div className="aboutme">
            <h2>Sobre Mi</h2>
            <br />
            <br />
            <br />
            <div className="todoA">
                <div className="imgA">
                    <img src={datos.about.imagen} alt="" />
                </div>
            
                <div className="infoA">
                    <h2>{datos.about.nombre}</h2>

                    <p>{datos.about.contenido}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe