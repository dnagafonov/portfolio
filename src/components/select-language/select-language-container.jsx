import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SelectLanguage from './select-language';
import { LanguageContext } from '../../store/context';
import { CHANGE_LANGUAGE } from '../../store/reducer';

const SelectLanguageContainer = () => {
    const { active, dispatch } = useContext(LanguageContext);
    const change = (lang) => dispatch({type: CHANGE_LANGUAGE, language: lang});
    return <SelectLanguage changeLanguage={change} language={active}/>
}

SelectLanguageContainer.proptypes = {
    dispatch: PropTypes.func.isRequired
}

export default SelectLanguageContainer;