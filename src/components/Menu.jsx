import React from 'react';
import { Link } from 'react-router-dom';


export const Menu = () => {
    return (
        <nav className="menu__link">
            <Link to="/galery" className="menu__link">Galería</Link>
            <Link to="/aboutMe" className="menu__link">Sobre mí</Link>
            <Link to="/contact" className="menu__link">Contacto</Link>
        </nav>
        
    )
}