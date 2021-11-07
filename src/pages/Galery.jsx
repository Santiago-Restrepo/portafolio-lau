import React, { useState, useContext } from 'react';
import { context } from '../context';
import { Ilustration } from '../components/Ilustration';

export const Galery = () => {
    const content = useContext(context);
    return (
        <section className="galery">
            {content.map((item, index)=>{
                return <Ilustration key="index" name={content[index].name} imageUrl={content[index].imageUrl} />
            })}
        </section>
        
    )
}