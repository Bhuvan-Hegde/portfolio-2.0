import React from 'react'
import '../pages/ProjectsPage.css'

function ProjectsPage() {
  return (
    <div className='mainProjects' id='projectsSection'>
        <div className="projectsHeader">
            These are the projects I've worked on.
        </div>
    
        <div className="projectsCont">
            <div className="project" id='1'>
                project1
            </div>
            <div className="project" id='2'>
                project2
            </div>
            <div className="project" id='1'>
                project1
            </div>
            <div className="project" id='2'>
                project2
            </div>
            <div className="project" id='1'>
                project1
            </div>
            <div className="project" id='2'>
                project2
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsPage
