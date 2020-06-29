import React, { useContext } from 'react'
import Me from './me'
import { LanguageContext } from '../../store/context'

const MeContainer = () => {
    const { state } = useContext(LanguageContext);
    const me = state.me;
    return <Me name={me.name} info={me.info}/>
}

export default MeContainer;