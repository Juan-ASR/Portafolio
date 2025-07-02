import "../styles/Formation.css"
import { datos } from "../../datos.js"
import { useRef, useState } from "react";
import FormaCard from "./FormaCard.jsx";

function Formation() {
    const [view, setView] = useState(0);
    const refMov = useRef();

    const leftHandler = () => {
        if (view % datos.formacion.length == 0 || view == 0){
            const moverMas = view + datos.formacion.length;
            refMov.current.style.left = `${moverMas * -20}rem`;
        }
        setView(view + 1);
    }

    const rightHandler = () => {    
        if (view % datos.formacion.length == 0){
            // setView(0);
            refMov.current.style.left = `${view * -20}rem`;
        }
        setView(view - 1);
    }

    return (
        <div className="formaCont">
            <h2>Formación</h2>

            <div className="cardsF">
                <div className="movCardsF" ref={refMov} style={{transform: `translateX(${view * 20}rem)`,width: `${(datos.formacion.length + 3) * 20}rem`}}>
                    {datos.formacion.map((formacion, index) => {
                        return <FormaCard key={index} foto={formacion.foto} titulo={formacion.titulo} duracion={formacion.duracion}/>
                    })}

                    {datos.formacion.map((formacion, index) => {
                        if (index < 3) return <FormaCard key={index} foto={formacion.foto} titulo={formacion.titulo} duracion={formacion.duracion}/>
                    })}
                </div>

            </div>
                <div className="buttonCont">
                    <button className="leftBtn" onClick={leftHandler} >&#10148;</button>
                    <button className="rightBtn" onClick={rightHandler}>&#10148;</button>
                </div>


        </div>
    )
}



export default Formation