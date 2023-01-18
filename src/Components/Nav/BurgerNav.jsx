import React from "react";
import './Navbar.css'

const BurgerNav = ({isOpen, setOpen}) => {

    const toggleMenu = () => 
        setOpen(prev=>!prev)
    
    const containerClass = isOpen ? 'container change': 'container '

    return(
        <div className={containerClass} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
}

export default BurgerNav