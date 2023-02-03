import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from './Contact.class'


const ContactComponent = ({ contact, remove, change }) => {




    return (
        <>
            <ul>
                <li>
                    Nombre:{contact.name} - Edad :{contact.age} - Telefono :{contact.number} - Estado :{contact.isConnected ? <span> Conectado</span> : <span>Desconectado</span>}
                    <button style={{ backgroundColor: "#4dce4d", marginLeft: "0.8rem" }} onClick={() => change(contact)}>Cambiar estado</button>
                    <button style={{ backgroundColor: "#e62b2b", marginLeft: "0.8rem" }} onClick={() => remove(contact)}>Delete</button>
                </li>

            </ul>
        </>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired
}

export default ContactComponent