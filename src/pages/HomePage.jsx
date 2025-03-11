import React from 'react'
import './homePage.css'
import { useState,useEffect } from 'react';

import SkillPage from './SkillPage.jsx';
import ProjectsPage from './ProjectsPage.jsx';

import profilePic from '../assets/bhu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';



function HomePage() {

  const [activeSection, setActiveSection] = useState("skillsSection");

  // Function to handle smooth scrolling
  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Function to detect scrolling and update the active section
  useEffect(() => {
    const handleScrollChange = () => {
      const sections = ["skillsSection", "projectsSection"];
      let foundSection = activeSection;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            foundSection = id;
          }
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, [activeSection]);


  return (

     
    <div className='mainDiv'>
      <p style={{position:"absolute"}}>*Still under development*</p>
    <div className="another">
    <div className="left">
        
        <div className="nameText">
          BHUVAN HEGDE
        </div>

        <div className="briefText">
          Student and developer
        </div>

        <div className="moreText">
          <p className='normalText'>Hi, I'm Bhuvan, A passionate developer and a student. I'm a <a className='underlineText' href='/' target='blank'>Graphic Designer</a> and like to build websites when I'm free</p> 
        </div>

        <div className="sideNav">
        <a
  className={`limkk ${activeSection === "skillsSection" ? "active" : ""}`}
  href="#skillsSection"
  onClick={(e) => handleScroll(e, "skillsSection")}
>
  <div className="one">
    01
    <div className="line"></div>
    SKILLS
  </div>
</a>

<a
  className={`limkk ${activeSection === "projectsSection" ? "active" : ""}`}
  href="#projectsSection"
  onClick={(e) => handleScroll(e, "projectsSection")}
>
  <div className="one">
    02
    <div className="line"></div>
    PROJECTS
  </div>
</a>


          <a className='limkk' href="/">
          <div className="one">
            03 
            <div className="line"></div>
            SKILLS
          </div>
          </a>
        </div>

        <div className="socials">

          <div className="leftsoc">
            <img className='profilePic' src={profilePic} alt="" />
          </div>

          <div className="rightsoc">
            <div className="top">
              <a href="/" target="_blank" className='socLinks'>
                <p  className='iicons'><FontAwesomeIcon className='socIcon' icon={faGithub} size='2x'/> GITHUB <FontAwesomeIcon className='linkIcon' icon={faExternalLinkAlt}/> </p>
              </a>

              <a href="/" target="_blank" className='socLinks'>
                <p className='iicons'><FontAwesomeIcon className='socIcon' icon={faLinkedin}/> LINKEDIN <FontAwesomeIcon className='linkIcon' icon={faExternalLinkAlt}/> </p>
              </a>
            </div>

            {/* <div className="top">
              <a href="/" target="_blank" className='socLinks'>
                <p  className='iicons'><FontAwesomeIcon className='socIcon' icon={faGithub} size='2x'/> GITHUB <FontAwesomeIcon className='linkIcon' icon={faExternalLinkAlt}/> </p>
              </a>

              <a href="/" target="_blank" className='socLinks'>
                <p className='iicons'><FontAwesomeIcon className='socIcon' icon={faLinkedin}/> LINKEDIN <FontAwesomeIcon className='linkIcon' icon={faExternalLinkAlt}/> </p>
              </a>
            </div> */}

            
          </div>
        </div>

      </div>

    </div>


      <div className="right" id='skillsSection'>
            <SkillPage />
            <ProjectsPage />
      </div>
    </div>
  )
}

export default HomePage
