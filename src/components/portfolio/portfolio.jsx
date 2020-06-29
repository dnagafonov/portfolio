import React from 'react';
import PortfolioProjects from './__projects/portfolio__projects';
import SecondaryContainer from '../containers/secondary-container/secondary-container';
import PropTypes from 'prop-types'

import './portfolio.scss';

const Portfolio = ({ header, projects }) => {
    return(
        <article className="portfolio">
            <SecondaryContainer>
                <h2 className="h2">{header}</h2>
                <PortfolioProjects projects={projects} />
            </SecondaryContainer>
        </article>
    )
}

Portfolio.proptypes = {
    header: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired
}

export default Portfolio;