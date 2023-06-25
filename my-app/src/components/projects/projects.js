import Cookies from "js-cookie";
import Header from "../header/header";

import "./projects.css";



const Projects = props => {
  
  const getRemove = () =>{
    Cookies.remove('user_name')
    const {history}=props
    history.replace("/pass")
    
  }

  return(
    <div>
    <Header />

    <div className="projects-container">
      <div className="projects-box">
        <h1 className="project-head">Project-1</h1>
        <p className="project-para">Project Title: E-commerce Website</p>
        <p className="project-para">Technologies Used: Html,CSS,Bootstrap.</p>
        <p className="project-para">
          Project Link:{" "}
          <a
            href="https://dskrfoodmunch.ccbp.tech/"
            target="_blank"
            rel="noreferrer"
            className="link-style"
          >
            Visit me!
          </a>
        </p>
      </div>
      <div className="projects-box">
        <h1 className="project-head">Project-2</h1>
        <p className="project-para">Project Title: To-Do List</p>
        <p className="project-para">Technologies Used: Html,CSS,Javascript</p>
        <p className="project-para">
          Project Link:{" "}
          <a
            href="https://dskrtodolist.ccbp.tech/"
            target="_blank"
            rel="noreferrer"
            className="link-style"
          >
            Visit me!
          </a>
        </p>
      </div>
      <div className="projects-box">
        <h1 className="project-head">Project-3</h1>
        <p className="project-para">Project Title: W3Schools Clone</p>
        <p className="project-para">
          Technologies Used: Html,CSS,Javascript,Bootstrap.
        </p>
        <p className="project-para">
          Project Link:{" "}
          <a
            href="https://dskrw3clone.ccbp.tech/"
            target="_blank"
            rel="noreferrer"
            className="link-style"
          >
            Visit me!
          </a>
        </p>
      </div>
      <div className="projects-box">
        <h1 className="project-head">Project-4</h1>
        <p className="project-para">Project Title: Digital Clock</p>
        <p className="project-para">Technologies Used: Html,CSS,Javascript.</p>
        <p className="project-para">
          Project Link:{" "}
          <a
            href="https://dskr.ccbp.tech/"
            target="_blank"
            rel="noreferrer"
            className="link-style"
          >
            Visit me!
          </a>
        </p>
      </div>
    </div>
    <div className="align-exit-button">
    <button type="button" className="exit-button" onClick={getRemove}>Exit</button>
    </div>
    <h1>hello</h1>
  </div>
  )

}



 


export default Projects;
