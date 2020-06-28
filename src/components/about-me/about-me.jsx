import React from 'react';
import AboutMeNotes from './__notes/about-me__notes';
import SecondaryContainer from '../containers/secondary-container/secondary-container';

const AboutMe = () => {
    const notes = [
        "Hello, I'm Denis – JavaScript developer from Minsk. I'm interested in developing and everything connected with it.",
        "Ready to implement excellent projects with wonderful people."
    ];
    return(
        <article className="about-me">
            <SecondaryContainer>
                <h2 className="h2">About me</h2>
                <AboutMeNotes notes={notes}/>
            </SecondaryContainer>
        </article>
    )
}

export default AboutMe;