import "../styles/Habilities.css"
import { datos } from "../../datos.js"

function Habilities() {
    return (
        <div className="hCont">
            <h2>Habilidades</h2>
            <br />
            <br />
            <div className="allH">
                {datos.habilidades.map((habilidad, index) => (
                    <div className="cardsH" key={index}>
                        <img src={habilidad.icono} alt={habilidad.nombre} />
                        <p>{habilidad.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Habilities

