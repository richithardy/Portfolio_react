import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import menu_opens from '../../assets/menu_opens.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  const opensMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img src={menu_opens} onClick={opensMenu} alt="opens Menu" className='nav-mob-opens'  />
        <ul ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu}  alt="close Menu" className='nav-mob-close' />

            <li>
                <Link to="home" smooth={true} duration={500} onClick={() => setMenu("home")}>
                    Home
                </Link>
                {menu === "home" && <span>  </span>}
            </li>
            <li>
                <Link to="about" smooth={true} duration={500} onClick={() => setMenu("about")}>
                    About
                </Link>
                {menu === "about" && <span>  </span>}
            </li>
            <li>
                <Link to="education" smooth={true} duration={500} onClick={() => setMenu("education")}>
                    Education
                </Link>
                {menu === "education" && <span>  </span>}
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500} onClick={() => setMenu("projects")}>
                    Projects
                </Link>
                {menu === "projects" && <span>  </span>}
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} onClick={() => setMenu("contact")}>
                    Contact
                </Link>
                {menu === "contact" && <span> </span>}
            </li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar;