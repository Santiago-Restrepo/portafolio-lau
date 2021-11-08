import React, { useState, useContext } from 'react';
import { context } from '../../context';
import { Ilustration } from '../../components/Ilustration';

export const AboutMe = () => {
    const content = useContext(context);
    return (
        <section className="aboutMe">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum eaque vel sapiente quae dolore architecto culpa, cum alias quia, animi, sint amet doloremque laudantium mollitia quis similique temporibus. Laborum.
            </p>
            <Ilustration name={content[2].name} imageUrl={content[2].imageUrl} />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum eaque vel sapiente quae dolore architecto culpa, cum alias quia, animi, sint amet doloremque laudantium mollitia quis similique temporibus. Laborum.
            </p>
        </section>
        
    )
}