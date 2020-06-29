import React, { useReducer } from 'react';
import DividerGray from '../divider/_gray/divider_gray';
import AboutMeContainer from '../about-me/about-me-container';
import SkillsContainer from '../skills/skills-container';
import PortfolioContainer from '../portfolio/portfolio-container';
import ContactsContainer from '../contacts/contacts-container';
import { reducer, init } from '../../store/reducer';
import { LanguageContext } from '../../store/context';
import MeContainer from '../me/me-container';
import HeaderContainer from '../header/header-container';
import { languages } from '../../store/languages';

import './app.scss';
import '@scss/general.scss';


const App = () => {
    const [state, dispatch] = useReducer(reducer, languages);
    return(
        <div className="app">
            <LanguageContext.Provider value={{state: state[state.active], active: state.active, dispatch}}>
                <HeaderContainer />
                <DividerGray />
                <MeContainer />
                <AboutMeContainer />
                <SkillsContainer />
                <PortfolioContainer />
                <ContactsContainer />
            </LanguageContext.Provider>
        </div>
    );
}

export default App;