import React from 'react';
import PropTypes from 'prop-types';

const TechnologyPhoto = ({name, path}) => <img className="technology__photo" src={path} alt={name} width="80" height="80" align="middle"/>

TechnologyPhoto.proptypes = {
    path: PropTypes.string.isRequired
};

export default TechnologyPhoto;