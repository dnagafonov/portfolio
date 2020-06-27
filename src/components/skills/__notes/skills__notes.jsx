import React from 'react';
import PropTypes from 'prop-types';
import Technology from '../../technology/technology';

import './skills__notes.scss';

const SkillNotes = ({notes}) => (
    <section className="skills__notes">
        {notes.map(e => <Technology key={e.name} name={e.name} path={e.path} stars={e.stars} />)}
    </section>
)

SkillNotes.proptypes = {
    notes: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired
    })).isRequired
}

export default SkillNotes;