import React from 'react';

import './secondary-container.scss';

const SecondaryContainer = ({children}) => (
    <div className="secondary-container">
        <div className="wrapper">
            {children}
        </div>
    </div>
);

export default SecondaryContainer;