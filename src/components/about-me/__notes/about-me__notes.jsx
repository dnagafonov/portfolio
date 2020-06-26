import React from 'react';

import './about-me__notes.scss';
import AboutMeNote from '../__note/about-me__note';

const AboutMeNotes = ({notes}) => (
    <section className="about-me__notes">
        {notes.map(e => <AboutMeNote key={e} msg={e}/>)}
    </section>
)

export default AboutMeNotes;