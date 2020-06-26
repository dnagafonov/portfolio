import React from 'react';
import Header from '../header/header';
import DividerGray from '../divider/_gray/divider_gray';
import Me from '../me/me';

import './app.scss';
import AboutMe from '../about-me/about-me';

const App = () => {
    return(
        <div className="app">
            <Header />
            <DividerGray />
            <Me />
            <AboutMe />
        </div>
    );
}

export default App;