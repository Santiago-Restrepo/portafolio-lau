import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { FaFacebookF, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
/** Contentful */
import { client } from './client';

/** Contexto */ 
import { context } from './context';

import {Galery} from './pages/Galery';
import {AboutMe} from './pages/AboutMe';
import {Contact} from './pages/Contact';
import {NotFound} from './pages/NotFound';
import { Menu } from './components/Menu';

export const App = () => {

    const [ content, setContent ] = useState([{
        "name": "Limoncito bonito",
        'color': "#F3B8BF",
        "bgColor": "#F3B8BF",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.03.10%20PM.jpeg?alt=media&token=4448ef85-bf6d-4c5e-936b-155966591b34",
        "hrefUrl": "https://www.instagram.com/p/CVWrY25D4Ve/"
    },
    {
        "name": "Orejas puntiagudas",
        'color': "#C79350",
        "bgColor": "#C37100",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.03.36%20PM.jpeg?alt=media&token=6fac6b3d-1dfc-4669-9fd7-84a9ff118afa",
        "hrefUrl": "https://www.instagram.com/p/CTUyeZ8nS69/"
    },{
        "name": "Un autoretrato más",
        'color': "#D4C2AF",
        "bgColor": "#FFE9D3",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.04.45%20PM.jpeg?alt=media&token=aaf5fc5f-0caa-4c4f-aa5a-ab929609287d",
        "hrefUrl": "https://www.instagram.com/p/CQun-9Sj_Rz/"
    },{
        "name": "#soscolombia",
        'color': "#5E5E5E",
        "bgColor": "#363636",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.04.57%20PM.jpeg?alt=media&token=65a9a1a0-0ea6-4d33-a622-1bbea92cbe8a",
        "hrefUrl": "https://www.instagram.com/p/COb5ZjRjS3N/"
    },{
        "name": " sin contexto",
        'color': "#DCB784",
        "bgColor": "#704C39",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.05.14%20PM.jpeg?alt=media&token=bf371ef4-a26d-46b6-9446-d91e603bc2f1",
        "hrefUrl": "https://www.instagram.com/p/CNah4v-n-Gm/"
    },{
        "name": "Feminicidios",
        'color': "#D99DF3",
        "bgColor": "#D668FF",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.07.55%20PM.jpeg?alt=media&token=270ebfca-c30a-475a-a7fa-0182c5071514",
        "hrefUrl": "https://www.instagram.com/p/CMKe4WfHEn8/"
    },{
        "name": "Sí, sin tilde.",
        'color': "#B68B8A",
        "bgColor": "#E2CBCB",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.08.13%20PM.jpeg?alt=media&token=c87fdf9a-7012-4466-8311-ad09d3ed2ca4",
        "hrefUrl": "https://www.instagram.com/p/CFEGsg1jSTM/"
    },{
        "name": "100 seguidores",
        'color': "#FFB3C1",
        "bgColor": "#FFDDCD",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/analitics-greazy.appspot.com/o/WhatsApp%20Image%202021-11-06%20at%2010.08.31%20PM.jpeg?alt=media&token=99c17986-d2d9-4030-9758-91913c41b7a6",
        "hrefUrl": "https://www.instagram.com/p/CD98Sf4jT9I/"
    } ]);

    // useEffect(() => { 
    //     (async () => {
    //         const res = await client.getEntries();
    //         const Talleres = res.items.filter((item) => item.sys.contentType.sys.id === "talleres" )
    //         const Galeria = res.items.filter((item) => item.sys.contentType.sys.id === "galeria" )
    //         const Novedades = res.items.filter((item) => item.sys.contentType.sys.id === "novedades" )
    //         const Integrantes = res.items.filter((item) => item.sys.contentType.sys.id === "integrantes" )
    //         const Testimonios = res.items.filter((item) => item.sys.contentType.sys.id === "testimonios" )

    //         setContenido({
    //             galeria: Galeria,
    //             news: Novedades,
    //             talleres: Talleres,
    //             members: Integrantes,
    //             testimonios: Testimonios
    //         })

    //     })();
    // }, []);

    const [menuState, setMenuState] = useState("galery")

    return (
        <context.Provider value={content}>
            <header className="header">
                <h3 className="header__title">
                    LauraCadabra
                </h3>
                <h4 className="header__subtitle">
                    Ilustra
                </h4>
            </header>
            <HashRouter>
                <Menu status={menuState} setMenuState={setMenuState}/>
                { /** Lo que cambiará */}
                <Switch>
                    <Route exact path="/" component={Galery} />
                    <Route exact path="/galery" component={Galery} />
                    <Route exact path="/aboutMe" component={AboutMe} />
                    <Route exact path="/contact" component={Contact} />                
                    <Route path="*" component={NotFound} />               

                </Switch>
            </HashRouter>
            <footer className="footer__icons--social">
                <a href="https://www.instagram.com/ofiartes/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                    <FaFacebookF className="footer__icons--social--facebook"/>
                </a>
                <a href="https://www.instagram.com/ofiartes/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                    <FaWhatsappSquare className="footer__icons--social--whatsapp"/>
                </a>
                <a href="https://www.instagram.com/ofiartes/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                    <FaInstagramSquare className="footer__icons--social--instagram"/>
                </a>
            </footer>
        </context.Provider>
    )
}