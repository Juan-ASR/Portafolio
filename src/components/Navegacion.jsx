import { useRef, useState, useEffect } from "react"
import Home from "../pages/Home.jsx"
import Header from "./Header.jsx"
import AboutMe from "./AboutMe.jsx"
import Habilities from "./Habilities.jsx"
import Formation from "./Formation.jsx"

function Navegacion() {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)  
    const habilRef = useRef(null)
    const formaRef = useRef(null)


    return (
        <>
        <header><Header/></header>
        <section ref={homeRef} className="section">
            <Home/>
        </section>
        <section ref={aboutRef} className="section-about">
            <AboutMe/>
        </section>
        <section ref={habilRef} className="section-h">
            <Habilities/>
        </section>

        <section ref={formaRef} className="section-f">
            <Formation/>
        </section>

        </>
    )
}

export default Navegacion