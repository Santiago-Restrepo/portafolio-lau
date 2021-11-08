import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import('./style.sass')

export const Menu = ({status, setMenuState}) => {

    const changeMenuState = ()=>{

        if (document.querySelector(".galery").getBoundingClientRect().x - 1 == document.querySelector(".menu").getBoundingClientRect().x) {
            document.querySelector(".galery").click();
        }else if (document.querySelector(".aboutMe").getBoundingClientRect().x - 2 <= document.querySelector(".menu").getBoundingClientRect().x && document.querySelector(".aboutMe").getBoundingClientRect().x - document.querySelector(".menu").getBoundingClientRect().x > 0) {
            document.querySelector(".aboutMe").click();
            // document.querySelector(".menu").appendChild(document.querySelector(".galery"));
        } else if(document.querySelector(".contact").getBoundingClientRect().x - 2 <= document.querySelector(".menu").getBoundingClientRect().x && document.querySelector(".contact").getBoundingClientRect().x - document.querySelector(".menu").getBoundingClientRect().x > 0) {
            document.querySelector(".contact").click();
        }

        // if (document.querySelector(".active").getBoundingClientRect().x - 1 == document.querySelector(".menu").getBoundingClientRect().x) {
        //         document.querySelector(".active").nextElementSibling.click();
        // }


    }

    useEffect(() => {
        document.querySelectorAll(".menu__link")[0].addEventListener("click", ()=>setMenuState("galery"))
        document.querySelectorAll(".menu__link")[1].addEventListener("click", ()=>setMenuState("aboutMe"))
        document.querySelectorAll(".menu__link")[2].addEventListener("click", ()=>setMenuState("contact"))
        document.querySelector(".menu").addEventListener('scroll', changeMenuState);
        return () => {
            document.querySelectorAll(".menu__link")[0].removeEventListener("click", ()=>setMenuState("galery"))
            document.querySelectorAll(".menu__link")[1].removeEventListener("click", ()=>setMenuState("aboutMe"))
            document.querySelectorAll(".menu__link")[2].removeEventListener("click", ()=>setMenuState("contact"))
            document.querySelector(".menu").removeEventListener('scroll', changeMenuState);
        }

    }, [])
    return (
        <nav className="menu">
            <Link to="/galery"  className={`menu__link galery ${status === "galery" ? "active" : "notActive"}`}>Galería</Link>
            <Link to="/aboutMe"  className={`menu__link aboutMe ${status === "aboutMe" ? "active" : "notActive"}`}>Sobre mí</Link>
            <Link to="/contact"  className={`menu__link contact ${status === "contact" ? "active" : "notActive"}`}>Contacto</Link>
            <Link to="/galery" className={`menu__link ${status === "galery" ? "active" : "notActive"}`}>Galería</Link>
            <Link to="/aboutMe"  className={`menu__link ${status === "aboutMe" ? "active" : "notActive"}`}>Sobre mí</Link>
            <Link to="/contact"  className={`menu__link ${status === "contact" ? "active" : "notActive"}`}>Contacto</Link>
        </nav>
        
    )
}