import React from 'react'
import './skillPage.css'



function SkillPage() {
  return (
    <div className='mainSkill' >
      <div className="skillHeader">
        These are the things I'm proficient with.
      </div>

      <div className="skillCont">
        <div className="skill" id='1'>
            skill1
        </div>
        <div className="skill" id='2'>
            skill2
        </div>
      </div>
      <div className="skillCont">
        <div className="skill" id='1'>
            skill1
        </div>
        <div className="skill" id='2'>
            skill2
        </div>
      </div>
        <div className="skillCont">
          <div className="skill" id='1'>
              skill1
          </div>
          <div className="skill" id='2'>
              skill2
          </div>
        </div>
    </div>
  )
}

export default SkillPage
