import React from 'react';
import PropTypes from 'prop-types';

import './secondary-container.scss';

const SecondaryContainer = ({children}) => (
    <div className="secondary-container">
        <div className="wrapper">
            {children}
        </div>
    </div>
);

SecondaryContainer.proptypes = {
    children: PropTypes.node.isRequired
};

export default SecondaryContainer;