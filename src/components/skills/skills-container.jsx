import React, { useContext } from 'react'
import { LanguageContext } from '../../store/context'
import Skills from './skills';

const SkillsContainer = () => {
    const { state } = useContext(LanguageContext);
    const { technologies, header } = state.skills;
    return <Skills technologies={technologies} header={header} />
}

export default SkillsContainer;