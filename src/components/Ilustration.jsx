import React from 'react';

export const Ilustration = ({name, imageUrl}) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={`${imageUrl}`} alt={`Imagen de la ilustración ${name}`} />
            </div>
            <div className="card__info">
                <h4>{name}</h4>
            </div>
        </div>
        
    )
}