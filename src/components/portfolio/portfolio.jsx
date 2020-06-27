import React from 'react';
import Autoservice from '@assets/autoservice.png';

import './portfolio.scss';
import PortfolioProjects from './__projects/portfolio__projects';

const Portfolio = () => {
    const projects = [
        { name: "Online autoservice store", path: Autoservice, link:"https://github.com/dnagafonov/coursework-kpiyap" }
    ];
    return(
        <article className="portfolio">
            <div className="wrapper">
                <h2 className="h2">Portfolio</h2>
                <PortfolioProjects projects={projects} />
            </div>
        </article>
    )
}

export default Portfolio;