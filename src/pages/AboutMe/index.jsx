import React, { useState, useContext } from 'react';
import { context } from '../../context';
import { Ilustration } from '../../components/Ilustration';
import('./style.sass')

export const AboutMe = () => {
    const content = useContext(context);
    return (
        <section className="aboutMe">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum eaque vel sapiente quae dolore architecto culpa, cum alias quia, animi, sint amet doloremque laudantium mollitia quis similique temporibus. Laborum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic numquam veritatis nihil deleniti aperiam impedit repudiandae quae tempora! Sunt magnam error, delectus expedita officiis adipisci nulla voluptates non dicta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error perferendis, saepe earum consectetur dolores fuga eaque itaque ex quasi maiores a sed nam ut quo delectus quisquam corrupti id reprehenderit.
            </p>
            <Ilustration name={content[2].name} imageUrl={content[2].imageUrl} bgColor={content[2].bgColor} color={content[2].color} />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum eaque vel sapiente quae dolore architecto culpa, cum alias quia, animi, sint amet doloremque laudantium mollitia quis similique temporibus. Laborum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, omnis itaque? Inventore rerum similique labore vero, unde nulla quas debitis dolorem veniam. Ea atque deleniti culpa amet aliquam dolorum veritatis.
            </p>
        </section>
        
    )
}