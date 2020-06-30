import React from 'react';
import PropTypes from 'prop-types';
import TechnologyPhoto from './__photo/technology__photo';
import TechnologyName from './__name/technology__name';
import Rate from '../rate/rate';

import './technology.scss';

const Technology = ({name, stars, path}) => (
    <article className="technology">
        <TechnologyPhoto name={name} path={path} />
        <TechnologyName name={name} />
        <Rate stars={stars}/>
    </article>
);

Technology.proptypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired
};

export default Technology;