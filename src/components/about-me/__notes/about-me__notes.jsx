import React from 'react';
import AboutMeNote from '../__note/about-me__note';
import PropTypes from 'prop-types';

import './about-me__notes.scss';

const AboutMeNotes = ({notes}) => (
    <section className="about-me__notes">
        {notes.map(e => <AboutMeNote key={e} msg={e}/>)}
    </section>
)

AboutMeNotes.proptypes = {
    notes: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AboutMeNotes;