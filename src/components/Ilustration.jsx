import React from 'react';

export const Ilustration = ({name, imageUrl,bgColor,color}) => {
    const cardImageStyle = {
        backgroundColor: bgColor,
        border: `1px solid ${color}`
    };
    const cardInfoStyle = {
        border: `1px solid ${color}`,
        color:color
    };
    return (
        <div className="card">
            <div className="card__image" style={cardImageStyle}>
                <img src={`${imageUrl}`} alt={`Imagen de la ilustración ${name}`} />
            </div>
            <div className="card__info" style={cardInfoStyle}>
                <h4>{name}</h4>
            </div>
        </div>
        
    )
}