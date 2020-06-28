import React from 'react';
import PrimaryContainer from '../containers/primary-container/primary-container';

import './contacts.scss';

const Contacts = () => {
    return(
        <article className="contacts">
            <PrimaryContainer>
                <h2 className="h2">Contacts</h2>
            </PrimaryContainer>
        </article>
    )
}

export default Contacts;