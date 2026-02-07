import "../Projects/Projects.css"

//ASSETS
import ft1 from '../../assets/Photo (1).svg';
import ft2 from '../../assets/Photo (2).svg';
import ft3 from '../../assets/Photo (3).svg';
import ft4 from '../../assets/Photo (4).svg';
import ft5 from '../../assets/Photo (5).svg';
import ft6 from '../../assets/Photo (6).svg';
import ft7 from '../../assets/Photo (7).svg';
import ft8 from '../../assets/Photo (8).svg';
import gostar from '../../assets/gostar 1.svg'

function Projects(){
    return(
        <>
        <section className="projects-section">
            <div className="projects-intro">
                <h1 id='projects-title'>Follow Our Projects</h1>
                <p id="projects-p">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className="projects-grid d-flex jc-space-between container">
                <div className="card-projects al-center ">
                    <img src={ ft1 } />
                    <h3>Levi Cohen</h3>
                    <p>New York, USA</p>
                    <a href="/"><img src={ gostar } /></a>
                </div> 
            </div>
        </section>

        
        </>
    )
}

export default Projects