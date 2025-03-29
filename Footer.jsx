// filepath: c:\Users\richi\OneDrive\Desktop\Portfolio\portfolio\src\Components\Footer\Footer.jsx
import React from 'react';
import './Footer.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import email from '../../assets/email.png';

const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="footer-links">
                <a href="https://github.com/richithardy" target="_blank" rel="noopener noreferrer">
                  <img src={github}alt="" srcset="" />
                    </a>
                <a href="https://www.linkedin.com/in/richitha-velma" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" srcset="" />
                </a>
                <a href="mailto:richithavelma@gmail.com">
                    <img src={email} alt="" srcset="" />
                    
                </a>
            </div>
            <p>© 2025 Richitha Velma. All rights reserved.</p>

        </footer>
    );
};

export default Footer;