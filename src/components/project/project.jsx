import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Link from '../link/link';

import './project.scss';
import Note from '../note/note';

const ProjectPhoto = React.lazy(() => import('./__photo/project__photo'));

const Project = ({name, link, path}) => (
    <article className="project">
        <Suspense fallback={<Note>Loading...</Note>}>
            <ProjectPhoto name={name} path={path} />
        </Suspense>
        <Link link={link} >{name}</Link>
    </article>
);

Project.proptypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Project;