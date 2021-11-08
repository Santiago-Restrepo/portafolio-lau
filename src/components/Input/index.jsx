import React from 'react';
import('./style.sass')

export const Input = ({label,placeholder}) => {
    return (
        <div className="form__element">
            <label htmlFor="">{label}</label>
            <input placeholder={placeholder}></input>
        </div>
        
    )
}