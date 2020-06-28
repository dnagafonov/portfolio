import React from 'react';
import Autoservice from '@assets/images/autoservice.png';
import PortfolioProjects from './__projects/portfolio__projects';
import SecondaryContainer from '../containers/secondary-container/secondary-container';

import './portfolio.scss';

const Portfolio = () => {
    const projects = [
        { name: "Online autoservice store", path: Autoservice, link:"https://github.com/dnagafonov/coursework-kpiyap" }
    ];
    return(
        <article className="portfolio">
            <SecondaryContainer>
                <h2 className="h2">Portfolio</h2>
                <PortfolioProjects projects={projects} />
            </SecondaryContainer>
        </article>
    )
}

export default Portfolio;