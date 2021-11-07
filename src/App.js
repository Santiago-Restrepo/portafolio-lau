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
        "bg-color": "#F3B8BF",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1e07eef6-c899-429a-9d5a-47eeae704b4b/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T032632Z&X-Amz-Expires=86400&X-Amz-Signature=4ca34b8e7d00fd2929d17f322f6cc90009f740fd50c2f34215ce107ac58e05d1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22"
    },
    {
        "name": "Orejas puntiagudas",
        'color': "#C79350",
        "bg-color": "#C37100",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4829022b-2fd6-4511-8e88-6525c7ec8f95/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T034948Z&X-Amz-Expires=86400&X-Amz-Signature=e3bcaa8eb9f47ddde854dfc78e49877b4bf64c33963442cd1176a10a1acedba6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
    },{
        "name": "Un autoretrato más",
        'color': "#D4C2AF",
        "bg-color": "#FFE9D3",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9164e581-0a3d-471e-9321-e02b27d8c396/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T035634Z&X-Amz-Expires=86400&X-Amz-Signature=de1aea852ede3da12b3f9ae8eddb1412547638d026c17ed9790761e5289d1204&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22"
    },{
        "name": "#soscolombia",
        'color': "#5E5E5E",
        "bg-color": "#363636",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/50a2dad5-3837-4d68-b8ca-d476dfaaeb8b/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T040641Z&X-Amz-Expires=86400&X-Amz-Signature=e250ef2c1e250481b406897004e94dd59e7deebc9e4a837d0a124236041a310d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22"
    },{
        "name": " sin contexto",
        'color': "#DCB784",
        "bg-color": "#704C39",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0dd8fef5-e880-4543-9cb1-133595e13792/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T040756Z&X-Amz-Expires=86400&X-Amz-Signature=430e5e2978eac61bbeed06b4d8143828dfabff9929c582b2ced08adbd23d6ede&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22"
    },{
        "name": "Feminicidios",
        'color': "#D99DF3",
        "bg-color": "#D668FF",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fe09e06-b268-41fa-a1a6-566fc54866fa/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T041038Z&X-Amz-Expires=86400&X-Amz-Signature=07269cbc8a11191c619f46f99ef3da3bbfd5df544a4e2504efb84d5a106717ad&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22"
    },{
        "name": "Sí, sin tilde.",
        'color': "#B68B8A",
        "bg-color": "#E2CBCB",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec6a67c1-2b51-46c6-abd6-2bb322971c03/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T041311Z&X-Amz-Expires=86400&X-Amz-Signature=60e6b7ef76890c68a8d2c2b6697756270dc01558f920dd8fa52098ca5ee252a7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22"
    },{
        "name": "100 seguidores",
        'color': "#FFB3C1",
        "bg-color": "#FFDDCD",
        "imageUrl": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f290ee2-fee8-4fde-9e34-2fcf4991dfc7/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T043215Z&X-Amz-Expires=86400&X-Amz-Signature=f16f66950e409c8327d0361101d2d6cfa8c485f30f7ffad9e672672ce95ea1cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22"
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

    return (
        <context.Provider value={content}>
            <header>
                <h3 className="header__title">
                    LauraCadabra
                </h3>
                <h4>
                    Ilustra
                </h4>
            </header>
            <HashRouter>
                <Menu/>
                { /** Lo que cambiará */}
                <Switch>
                    <Route exact path="/" component={Galery} />
                    <Route exact path="/galery" component={Galery} />
                    <Route exact path="/aboutMe" component={AboutMe} />
                    <Route exact path="/contact" component={Contact} />                
                    <Route path="*" component={NotFound} />               

                </Switch>
            </HashRouter>
            <footer>
                <a href="https://www.instagram.com/ofiartes/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                    <FaFacebookF className="footer__icons--social--instagram"/>
                </a>
                <a href="https://www.instagram.com/ofiartes/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                    <FaWhatsappSquare className="footer__icons--social--instagram"/>
                </a>
                <a href="https://www.instagram.com/ofiartes/?hl=es" target="_blank" rel="nofollow noopener noreferrer">
                    <FaInstagramSquare className="footer__icons--social--instagram"/>
                </a>
            </footer>
        </context.Provider>
    )
}