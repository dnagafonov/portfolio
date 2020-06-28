import React from 'react';
import Note from '../../note/note';
import PropTypes from 'prop-types';

import './about-me__notes.scss';

const AboutMeNotes = ({notes}) => (
    <section className="about-me__notes">
        {notes.map(e => <Note key={e}>{e}</Note>)}
    </section>
)

AboutMeNotes.proptypes = {
    notes: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AboutMeNotes;