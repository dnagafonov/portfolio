import React from 'react';
import PropTypes from 'prop-types';
import ProjectPhoto from './__photo/project__photo';
import Link from '../link/link';

import './project.scss';

const Project = ({name, link, path}) => (
    <article className="project">
        <ProjectPhoto name={name} path={path} />
        <Link link={link} >{name}</Link>
    </article>
);

Project.proptypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Project;