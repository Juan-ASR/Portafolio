import { useRef, useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/ProjectCard.css"
import PokeApi from "../pages/projects/pokeApi.jsx"
import {datos} from "../../datos.js"


function ProjectCard() {    
    const irA = useNavigate();

    const navigateHandler = (event, donde) => {
        event.preventDefault();
        irA(donde); 
    };

    return (
        <>
            {datos.proyectos.map((proyecto, index) => (
                <div className="project-card" key={index}>
                    <img src={proyecto.imagen} alt={proyecto.nombre} />
                    <div className="infoCard">
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                    </div>
                    <div className="buttonsCard">
                        <button>
                            {<a href={proyecto.enlaceWeb} /*onClick={(e) => navigateHandler(e, proyecto.enlaceWeb)}*/>Ver Proyecto</a> }
                        </button>
                        <button>
                            <a href={proyecto.enlaceRepo} className="project-link" target="_blank" rel="noopener noreferrer">Repositorio</a>
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProjectCard