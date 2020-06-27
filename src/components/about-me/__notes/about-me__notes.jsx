import React from 'react';
import AboutMeNote from '../__note/about-me__note';

import './about-me__notes.scss';

const AboutMeNotes = ({notes}) => (
    <section className="about-me__notes">
        {notes.map(e => <AboutMeNote key={e} msg={e}/>)}
    </section>
)

export default AboutMeNotes;