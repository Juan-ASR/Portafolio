import { useRef, useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Header.css"
import Home from "../pages/Home.jsx"
import AboutMe from "./AboutMe.jsx"
import Habilities from "./Habilities.jsx"
import Formation from "./Formation.jsx"
import { AnimationContext } from "./AnimationProvider.jsx"
// import "../styles/App.css"

function Header() {
  const navegarA = useNavigate();
  const {showHandler, hideHandler} = useContext(AnimationContext);

  const navigateHandler = (event, donde) => {
    event.preventDefault();
    hideHandler();
    setTimeout(() => {
      navegarA(donde);
      showHandler();
    }, 1000); 
  }


  return (
    <nav>
      <ul>
        <li><a href="#" onClick={(e) => navigateHandler(e, "/")}>Inicio</a></li>
        <li><a href="#" onClick={(e) => navigateHandler(e, "/about")}>Sobre Mi</a></li>
        <li><a href="#" onClick={(e) => navigateHandler(e, "/habilities")}>Habilidades</a></li>
        <li> <a href="#" onClick={(e) => navigateHandler(e, "/formation")}>Formacion</a></li>
        <li><a href="#" onClick={(e) => navigateHandler(e, "/projects")}>Proyectos</a></li>
        <li><a href="#" onClick={(e) => navigateHandler(e, "/contact")}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Header