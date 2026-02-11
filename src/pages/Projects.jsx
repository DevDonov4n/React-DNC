import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";

import './Projects.css'


function Projects() {
    return (
        <>
            <Header />
            <banner>
                <h1>Projetos</h1>
            </banner>
            <ProjectsGrid />
            <Footer />
        </>
    );
}

export default Projects;