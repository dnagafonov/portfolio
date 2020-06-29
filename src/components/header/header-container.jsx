import React, { useContext } from 'react'
import { LanguageContext } from '../../store/context'
import Header from './header';

const HeaderContainer = () => {
    const { state } = useContext(LanguageContext);
    const links = state.header.links;
    return <Header links={links}/>
}

export default HeaderContainer;