import React from 'react';
import PropTypes from 'prop-types';

import './select-language.scss';

const SelectLanguage = ({ changeLanguage, language }) => {
    return(
        <div className="select-language">
           {["RU", "ENG"].map(e => e === language ?
             <div className="select-language__lang_active" key={e}>{e}</div> :  
             <div className="select-language__lang" key={e} onClick={() => changeLanguage(e)}>{e}</div>)}
        </div>
    );
}

SelectLanguage.proptypes = {
    changeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
}

export default SelectLanguage;