import React from 'react';
import Header from '../header/header';
import DividerGray from '../divider/_gray/divider_gray';
import Me from '../me/me';

import './app.scss';

const App = () => {
    return(
        <div className="app">
            <Header />
            <DividerGray />
            <Me />
        </div>
    );
}

export default App;