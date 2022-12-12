import React from 'react'
import { Contacto } from './ContactClass.class';
import PropTypes from 'prop-types';

const Contact = ({ contacto }) => {
    return (
        <>
            <p> Nombre : {contacto.nombre}</p>
            <p> Apellido : {contacto.apellido}</p>
            <p> Email : {contacto.email}</p>
            <p> Estado : {contacto.conectado ? ' Contacto En Línea' : 'Contacto No Disponible'}</p>
        </>
    )
}
Contact.propTypes = {
    contacto: PropTypes.object
};



export default Contact