import React from 'react';
import('./style.sass');

export const Ilustration = ({name, imageUrl,bgColor,color, hrefUrl}) => {
    const cardImageStyle = {
        backgroundColor: bgColor,
        border: `1px solid ${color}`
    };
    const cardInfoStyle = {
        border: `1px solid ${color}`,
        borderTop: "none",
        color:color
    };
    return (
        <a href={hrefUrl} className="card" target="_blank" rel="nofollow noopener noreferrer">
            <div className="card__image" style={cardImageStyle}>
                <img src={`${imageUrl}`} alt={`Imagen de la ilustración ${name}`} />
            </div>
            <div className="card__info" style={cardInfoStyle}>
                <h4>{name}</h4>
            </div>
        </a>
        
    )
}