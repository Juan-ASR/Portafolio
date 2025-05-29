// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import Contact from "./components/Contact.jsx"
// import Numero from "./components/Numero.jsx"

// function App(){
//   return(
//     <BrowserRouter basename="/Portafolio/">
//       <header>
//         <h1>Portafolio</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About Me</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/numeros/1">Numero 1</Link>
//         </nav>
//       </header>
//       <Routes>
//         <Route path="/" element={<p>Home</p>}/>
//         <Route path="/about" element={<p>About Me</p>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/numeros/:num/:nom" element={<Numero/>}/>
//         <Route path="*" element={<p>404 Not Found</p>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }