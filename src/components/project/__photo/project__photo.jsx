import React from 'react';
import PropTypes from 'prop-types';

const ProjectPhoto = ({name, path}) => <img className="project__photo" src={path} alt={name} width="100%"/>

ProjectPhoto.proptypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default ProjectPhoto;