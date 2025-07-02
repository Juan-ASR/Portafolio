import SocialHome from "../components/SocialHome"
import "../styles/Home.css"
import { datos } from "../../datos.js"

function Home() {
    return (
        <div className="home">
            <div className="cardH">
                <div className="infoH">
                    <span>{datos.home.saludo}</span>
                    <h2>{datos.home.nombre}</h2>
                    <span id="profe">{datos.home.profesion}</span>
                    <p>{datos.home.resumen}</p>
                    <button>Contacto</button>
                </div>

                <div className="imgH">
                    <img src={datos.home.foto} alt="" />
                </div>
            </div>
            <div className="socialH">
                <ul>
                    <SocialHome url="#" src="./public/icons/github.svg" alt="gitHub"/>
                    <SocialHome url="#" src="./public/icons/instagram.svg" alt="Instagram"/>
                </ul>
            </div>
        </div>
    )
}

export default Home