import React from 'react';
import PropTypes from 'prop-types';

import './technology__name.scss';

const TechnologyName = ({name}) => <div className="technology__name">{name}</div>

TechnologyName.proptypes = {
    name: PropTypes.string.isRequired
};

export default TechnologyName;