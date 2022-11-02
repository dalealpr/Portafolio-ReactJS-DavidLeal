import React from 'react';
import Nav from '../nav/Nav';

function Header() {
    return (
    <div className='header_nav'>
        <Nav/>
            <div className='headerCont'>

                <div className='headerCont-text'>
                    <p className='headerBtn'>Bivenvenidos a mi portafolio</p>

                    <h1 className='headerTitle'>Hola, mi nombre es David Leal Programador Front End  </h1>

                    <p>Joven programador Front end con conocimientos necesarios para la creacion de sitios web.
                    dentro de mis habilidades podemos destacar el uso de React JS y el uso de conocimientos UX/UI para el desarrollo de proyectos deacuerdo al cliente.
                    </p>
                </div>

            <div className='headerCont-img'>
                <img src="" alt="" />
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;