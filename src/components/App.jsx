import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PokeApi from "../pages/projects/pokeApi.jsx"
import PokeCard from "./PokeCard.jsx"
import Home from "../pages/Home.jsx"
import Header from "./Header.jsx"
import Navegacion from "./Navegacion.jsx"
import AboutMe from "./AboutMe.jsx"
import Habilities from "./Habilities.jsx"
import Formation from "./Formation.jsx"
import Projects from "./Projects.jsx"
import AnimationProvider from "./AnimationProvider.jsx"
import "../styles/App.css"
import Contact from "./Contact.jsx"


function App(){
  return(
    <BrowserRouter basename="/Portafolio/">
      <AnimationProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/habilities" element={<Habilities/>}/>
          <Route path="/formation" element={<Formation/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
          <Route path="/projects/pokeapi" element={<PokeApi/>}/>
          <Route path="/projects/pokeapi/:id" element={<PokeCard/>}/>
        </Routes>
      </AnimationProvider>
    </BrowserRouter>
  )
}

export default App