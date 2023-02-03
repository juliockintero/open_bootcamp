import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from './Contact.class'

const ContactForm = ({ add }) => {

    const nameRef = useRef("")
    const numberRef = useRef("")
    const ageRef = useRef("")

    const addContact = (event) => {
        event.preventDefault();

        const newContact = new Contact(
            nameRef.current.value,
            ageRef.current.value,
            numberRef.current.value,
            false
        )
        add(newContact)
    }
    return (
        <>
            <form onSubmit={addContact}>
                <input type="text" ref={nameRef} placeholder='NAME' required style={{ marginLeft: "0.5rem,", padding: "0.5rem", borderRadius: "0.2rem" }} />
                <input type="number" ref={ageRef} placeholder='AGE' required style={{ marginLeft: "0.5rem,", padding: "0.5rem", borderRadius: "0.2rem" }} />
                <input type="number" ref={numberRef} placeholder='NUMBER' required style={{ marginLeft: "0.5rem,", padding: "0.5rem", borderRadius: "0.2rem" }} />
                <button type='submit' style={{ backgroundColor: "#61dafb", marginLeft: "0.8rem" }} >Guardar</button>
            </form>
        </>
    )
}
ContactForm.protoTypes = {
    add: PropTypes.func.isRequired
}


export default ContactForm