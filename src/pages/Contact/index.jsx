import React from 'react';
import { Input } from '../../components/Input';
import './style.sass'

export const Contact = () => {
    return (
        <section className="contact">
            <h2>Déjame un correo</h2>
            <form method="post">
                <Input label="Nombre" placeholder="¿Cómo te llamas?"/>
                <Input label="Celular" placeholder="Por si tengo que llamarte"/>
                <Input label="Correo" placeholder="En caso de tener que escribirte"/>
                <Input label="¿En qué estás interesadx?" placeholder="Cuéntamelo todo para ver cómo puedo ayudarte"/>
                <h5>Muy pronto me pondré en contacto contigo, espera mi mensaje o llamada</h5>
                <button type="submit">Enviar</button>
            </form>            
        </section>
        
    )
}