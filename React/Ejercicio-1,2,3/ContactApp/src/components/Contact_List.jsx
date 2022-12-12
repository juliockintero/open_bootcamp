import React from 'react'
import Contact from './Contact'
import { Contacto } from './ContactClass.class'

const Contact_List = () => {
    const contactOb1 = new Contacto('Jhon', 'Doe', 'jhon@email.com', false)
    console.log('Console log:' + typeof Contact)

    return (
        <>
            <h1>Contact_List</h1>
            <Contact contacto={contactOb1} />
        </>


    )
}



export default Contact_List