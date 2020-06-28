import React from 'react';

import './primary-container.scss';

const PrimaryContainer = ({children}) => (
    <div className="wrapper primary-container">
        {children}
    </div>
);


export default PrimaryContainer;