import React, { useContext } from 'react'
import { LanguageContext } from '../../store/context'
import Contacts from './contacts';

const ContactsContainer = () => {
    const { state } = useContext(LanguageContext);
    const { note, button, header, noteBack, links } = state.contacts;
    return <Contacts note={note} button={button} header={header} noteBack={noteBack} links={links} />
}

export default ContactsContainer;