import React, { useState, useContext } from 'react';
import { context } from '../../context';
import { Ilustration } from '../../components/Ilustration';
import('./style.sass'); 

export const Galery = () => {
    const content = useContext(context);
    return (
        <section className="galerySection">
            {content.map((item, index)=>{
                return <Ilustration key={"Dot-"+index} name={content[index].name} imageUrl={content[index].imageUrl} bgColor={content[index].bgColor} color={content[index].color} hrefUrl={content[index].hrefUrl}/>
            })}
        </section>
        
    )
}