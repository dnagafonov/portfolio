import React, { useContext } from 'react'
import { LanguageContext } from '../../store/context'
import AboutMe from './about-me';

const AboutMeContainer = () => {
    const { state } = useContext(LanguageContext);
    const { header, notes } = state.aboutMe;
    return <AboutMe notes={notes} header={header} />
}

export default AboutMeContainer;