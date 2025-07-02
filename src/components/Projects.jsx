import ProjectCard from "./ProjectCard.jsx";
import "../styles/Projects.css";


function Projects() {
        return (
            <div className="pCont">
                <br />
                <br />
                <br />
                <h2>Proyectos</h2>
                <div className="allP">
                    <ProjectCard />
                </div>
            </div>
    )
}

export default Projects