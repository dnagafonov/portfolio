import React from 'react';
import PrimaryContainer from '../containers/primary-container/primary-container';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Note from '../note/note';
import ContactsLinks from './__links/contacts__links';
import NoteBackstage from '../note/__backstage/note__backstage';

import './contacts.scss';

const Contacts = () => {
    return(
        <article className="contacts">
            <PrimaryContainer>
                <h2 className="h2">Contacts</h2>
                <Note>Want to know more or just chat? You are welcome!</Note>
                <Button href="https://t.me/dnagafonov">Send message</Button>
                <ContactsLinks />
                <NoteBackstage>Visit my profiles on Github, Telegram, LinkedIn, Instagram</NoteBackstage>
            </PrimaryContainer>
        </article>
    )
}

Contacts.proptypes = {
    notes: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })).isRequired
}

export default Contacts;