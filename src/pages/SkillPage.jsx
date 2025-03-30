import React from 'react'
import './skillPage.css'
import reactLogoL from '../assets/reactLogoLight.png'
import TailwindLogo from '../assets/tailwindLogoLight.png'
import JavaLogo from '../assets/javaLogoLight.png'
import PsLogo from '../assets/psLogoDark.png'



function SkillPage() {
  return (
    <div className='mainSkill' >
      <div className="skillHeader">
        These are the things I'm proficient with.
      </div>

      <div className="skillCont"  id='1'>
        <div className="skill">
            <img className='skillImg' src={reactLogoL} alt="" />
            <p className='skillName'>ReactJs</p>
        </div>
        <div className="skill">
            <img className='skillImg' src={TailwindLogo} alt="" />
            <p className='skillName'>Tailwind CSS</p>
        </div>
      </div>


      <div className="skillCont">
      <div className="skill">
            <img className='skillImg' src={JavaLogo} alt="" />
            <p className='skillName'>Java</p>
        </div>
        <div className="skill">
            <img className='skillImg' src={PsLogo} alt="" />
            <p className='skillName'>Photoshop</p>
        </div>

      </div>
        {/* <div className="skillCont">
          <div className="skill" id='1'>
              skill1
          </div>
          <div className="skill" id='2'>
              skill2
          </div>
        </div> */}
    </div>
  )
}

export default SkillPage
