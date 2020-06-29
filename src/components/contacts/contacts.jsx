import React from 'react';
import PrimaryContainer from '../containers/primary-container/primary-container';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Note from '../note/note';
import ContactsLinks from './__links/contacts__links';
import NoteBackstage from '../note/__backstage/note__backstage';

import './contacts.scss';

const Contacts = ({ header, note, button, noteBack, links }) => {
    return(
        <article className="contacts">
            <PrimaryContainer>
                <h2 className="h2">{header}</h2>
                <Note>{note}</Note>
                <Button href={button.href}>{button.msg}</Button>
                <ContactsLinks links={links} />
                <NoteBackstage>{noteBack}</NoteBackstage>
            </PrimaryContainer>
        </article>
    )
}

Contacts.proptypes = {
    header: PropTypes.string.isRequired,    
    note: PropTypes.string.isRequired,    
    noteBack: PropTypes.string.isRequired,
    button: PropTypes.exact({
        href: PropTypes.string.isRequired,
        msg: PropTypes.string.isRequired
    }),
    links: PropTypes.arrayOf(PropTypes.exact({
        img: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })).isRequired
}

export default Contacts;