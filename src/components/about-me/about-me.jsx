import React from 'react';
import AboutMeNotes from './__notes/about-me__notes';
import SecondaryContainer from '../containers/secondary-container/secondary-container';
import PropTypes from 'prop-types'

const AboutMe = ({ header, notes }) => {
    return(
        <article className="about-me">
            <SecondaryContainer>
                <h2 className="h2">{header}</h2>
                <AboutMeNotes notes={notes}/>
            </SecondaryContainer>
        </article>
    )
}

AboutMe.proptypes = {
    notes: PropTypes.arrayOf(PropTypes.string).isRequired,
    header: PropTypes.string.isRequired
}

export default AboutMe;