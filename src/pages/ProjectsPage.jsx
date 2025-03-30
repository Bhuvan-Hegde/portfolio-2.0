import React from 'react'
import '../pages/ProjectsPage.css'
import ProjectImg from '../assets/project.png'
import Brightpath from '../assets/brightpath.png'
import FoodWebImg from '../assets/foodWeb.png'

function ProjectsPage() {
  return (
    <div className='mainProjects' id='projectsSection'>
        <div className="projectsHeader">
            These are the projects I've worked on.
        </div>
    
        <div className="projectsCont">
            <a href="https://github.com/Chethants05/final" target='_blank' className='projectLink'>
            <div className="project" id='1'>
                <img className='projectImg' src={Brightpath} alt="" />
                <h4>BrightPath</h4>
                <p className='projectText'>BrightPath is a MERN LMS Platform that was developed as a part of our curriculum. This gave a great insight on how to collaborate in a large project.</p>
            </div></a>


            <a href="https://github.com/Bhuvan-Hegde/FoodWebsite" target='_blank' className='projectLink'>
            <div className="project" id='1'>
                <img className='projectImg' src={FoodWebImg} alt="" />
                <h4>Cafe HomePage</h4>
                <p className='projectText'>An aesthetic looking website template for a cafe . A hobby project made to increase my knowlede in Tailwind CSS and React.</p>
            </div></a>


            <a href="/" target='_blank' className='projectLink'>
            <div className="project" id='999'>
                <h4 className='mobMore'>More On The Way!</h4>
            </div></a>




           
        </div>
      
    </div>
  )
}

export default ProjectsPage
