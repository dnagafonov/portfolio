import React from 'react';

import './about-me.scss';
import AboutMeNotes from './__notes/about-me__notes';

const AboutMe = () => {
    const notes = [
        "Hello, I'm Denis – JavaScript developer from Minsk. I'm interested in developing and everything connected with it.",
        "Ready to implement excellent projects with wonderful people."
    ];
    return(
        <article id="#about-me" className="about-me">
            <div className="about-me__wrapper">
                <h2 className="h2">About me</h2>
                <AboutMeNotes notes={notes}/>
            </div>
        </article>
    )
}

export default AboutMe;