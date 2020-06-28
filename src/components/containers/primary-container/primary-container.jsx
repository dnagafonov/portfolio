import React from 'react';
import PropTypes from 'prop-types';

import './primary-container.scss';

const PrimaryContainer = ({children}) => (
    <div className="wrapper primary-container">
        {children}
    </div>
);

PrimaryContainer.proptypes = {
    children: PropTypes.node.isRequired
};

export default PrimaryContainer;