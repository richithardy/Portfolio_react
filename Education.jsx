import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div id="education" className='Education'>
      <div className='Education-title'>
        <h1>My Academic Journey</h1>
      </div>
      <div className='Education-section'>
        <div className='Education-right'>
          <h2>Bachelor of Engineering in Electrical and Electronics Engineering</h2>
          <p>Geethanjali College of Engineering and Technology</p>
          <p>July 2020 - May 2024</p>
          <br />
          <br />
          <h2>Intermediate in Hyderabad</h2>
          <p>Sri Chaitanya Junior College</p>
          <p>June 2019 - May 2020</p>
          <br />
          <br />
          <h2>Secondary School Certificate in Nizamabad</h2>
          <p>Vignan High School</p>
          <p>June 2017 - March 2018</p>
        </div>
        <div className='Education-left'>
          <div className='Education-para'>
            <p>I have completed my bachelor's degree in Electrical and Electronics Engineering at Geethanjali College of Engineering and Technology.</p>
            <p>CGPA: 7.3</p>
            <br />
            <br />
            <p>Grade - A2. Percentage - 84%</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Grade - A1. Percentage - 90%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;