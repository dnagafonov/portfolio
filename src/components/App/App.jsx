import React from 'react';
import Header from '../header/header';
import DividerGray from '../divider/_gray/divider_gray';
import Me from '../me/me';
import AboutMe from '../about-me/about-me';

import './app.scss';
import '@scss/general.scss';

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