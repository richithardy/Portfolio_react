import React from 'react'
import './Projects.css'
import FaceRecognition from '../../assets/Face Recognition.jpg'
import Portfolio from '../../assets/portfolio.jpg'
const projects = [
    {
        id: 1, 
        title: "Face-Recognition-Attendance",
        image: FaceRecognition,
        description: "A futuristic face recognition-based attendance system with biometric scanning and a Chart.js dashboard displaying attendance statistics."
    },
    {
        id: 2,
        title: "Portfolio",
        image: Portfolio,
        description:"A sleek and responsive portfolio showcasing my projects, skills, and expertise. "
    },
];
const Projects = () => {
    return (
        <div id="projects" className='projects-Container'>
            <h1 className='projects-title'>My Projects</h1>
            <div className='projects-grid'>
                {projects.map((project) => (
                    <div key={project.id} 
                    className='project-card'>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                    </div>

                ))}

            </div>


        </div>
    )
}




export default Projects