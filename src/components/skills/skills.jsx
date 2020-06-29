import React from 'react';
import SkillNotes from './__notes/skills__notes';
import PrimaryContainer from '../containers/primary-container/primary-container';
import PropTypes from 'prop-types'

const Skills = ({ technologies, header }) => {
    return(
        <article className="skills">
            <PrimaryContainer>
                <h2 className="h2">{header}</h2>
                <SkillNotes notes={technologies} />
            </PrimaryContainer>
        </article>
    )
}

Skills.proptypes = {
    technologies: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired,
    }),
    header: PropTypes.string.isRequired
}

export default Skills;