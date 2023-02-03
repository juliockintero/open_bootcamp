import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contact } from './Contact.class'
import ContactComponent from './ContactComponent'
import ContactForm from './ContactForm'

const ContactList = () => {
    const defaultContact1 = new Contact("Example1", 10, 12345678, false);
    const defaultContact2 = new Contact("Example2", 12, 12345678, false);
    const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Contacto State has been modified');
        setLoading(false);
        return () => {
            console.log('Contactlist component is going to unmount...')
        }
    }, [contacts])


    const removeContact = (contact) => {
        console.log('Detele this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setContacts(tempContact);


    }

    const changeStatus = (contact) => {
        console.log('Change:', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];

        tempContact[index].isConnected = !tempContact[index].isConnected
        setContacts(tempContact);


    }
    const add = (contact) => {
        console.log('Added:', contact);
        const tempContact = [...contacts];
        tempContact.push(contact)
        setContacts(tempContact);

    }

    return (
        <>
            <h1>Contacts</h1>
            {
                contacts.map((contact, index) => {
                    console.log(contact)
                    return (
                        <ContactComponent key={index} contact={contact} remove={removeContact} change={changeStatus} />
                    )
                })
            }
            <h2>Add Contact</h2>
            <ContactForm add={add} />
        </>
    )
}



export default ContactList