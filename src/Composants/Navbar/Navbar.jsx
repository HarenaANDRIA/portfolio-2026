import React from 'react'
import './Navbar.css'
import menu_open from '../../assets/bars-solid.svg'
import menu_close from '../../assets/xmark-solid.svg'
import {useRef} from 'react'

function Navbar() {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
 
  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">Moi</a></li>
            <li><a href="#work">Mes projets</a></li>
            <li><a href="#contact">Contactez-moi</a></li>
        </ul>
    </div>
  )
}

export default Navbar