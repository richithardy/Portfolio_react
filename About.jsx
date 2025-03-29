import React from 'react'
import './About.css'
import logoabout from '../../assets/logoabout.png'

const About = () => {
    
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
        
            

        </div>
        <div className='about-section'>
            <div className='about-left'>
            <img src={logoabout} alt="" />
            
             

            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am frontend developer passionate about creating modern, functional, and visually appealing web applications.</p>
                    <p>I love designing intuitive user interfaces and turning creative ideas into dynamic, responsive websites.</p>
                    <p>My goal is to continuously learn and grow as a developer while delivering meaningful solutions.</p>


                </div>
                <div className='about-skills'>
                    <div className="about-skill" >
                        <p>HTML & CSS</p>
                     <hr style={{width: "70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width: "65%"}} />
                   </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width: "55%"}} />
                     </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default About