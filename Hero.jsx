import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id="home" className='hero'>
       
         <img src={profile_img} alt="" />

        
        
        <h1><span>I'm Richitha Velma</span>, Frontend Developer </h1>
        <p>I am a fresher Frontend Developer with a passion for creating beautiful and functional web applications.</p> 
        <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
        
        </div>

    </div>
  )
}

export default Hero