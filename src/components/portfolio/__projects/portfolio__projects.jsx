import React from 'react';
import PropTypes from 'prop-types';
import Project from '../../project/project';

import './portfolio__projects.scss';

const PortfolioProjects = ({projects}) => (
    <section className="portfolio__projects">
        {projects.map(e => <Project key={e.name} name={e.name} path={e.path} link={e.link} />)}
    </section>
)

PortfolioProjects.proptypes = {
    notes: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })).isRequired
}

export default PortfolioProjects;