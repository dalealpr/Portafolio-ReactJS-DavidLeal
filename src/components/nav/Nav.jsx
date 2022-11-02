import React from 'react';
import logo from '../../img/logo_david4.png';
import linkedin from '../../img/redes/linkedin.png';
import github from '../../img/redes/github.png';


function Nav() {
    return (
      <>
        <nav className='navCont'>
            <div className='logoCont'>
                <img className='logo' src={logo} alt="logo principal"/>
            </div>

            <ul className="navLinks">
                <li className="navLinks-li">
                  <a className="navLinks-a" href="#">Inicio</a>
                </li>
                <li className="navLinks-li">
                  <a className="navLinks-a" href="#">Skills</a>
                </li>
                <li className="navLinks-li">
                  <a className="navLinks-a" href="#">Proyectos</a>
                </li>
                <li className="navLinks-li">
                  <a className="navLinks-a" href="#">Contacto</a>
                </li>
            </ul>

            <div className='redes-cont'>
              <a className="redes-logoCont" href="#">
                <img className="logo-redes" src={linkedin} />
              </a>
              <a className="redes-logoCont" href="#">
                <img className="logo-redes" src={github} />
              </a>
            </div>
        </nav>
      </>
    );
  }
  
  export default Nav;