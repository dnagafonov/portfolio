import React from 'react';
import Header from '../header/header';
import DividerGray from '../divider/_gray/divider_gray';

import './app.scss';

const App = () => {
    return(
        <div className="app">
            <Header />
            <DividerGray />
        </div>
    );
}

export default App;