import React, { useContext } from 'react'
import { LanguageContext } from '../../store/context'
import Portfolio from './portfolio';

const PortfolioContainer = () => {
    const { state } = useContext(LanguageContext);
    const { header, projects } = state.portfolio;
    return <Portfolio projects={projects} header={header} />
}

export default PortfolioContainer;