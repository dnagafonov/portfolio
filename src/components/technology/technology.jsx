import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import TechnologyName from './__name/technology__name';
import Rate from '../rate/rate';
import Note from "../note/note";
import './technology.scss';

const TechnologyPhoto = React.lazy(() => import('./__photo/technology__photo'))

const Technology = ({name, stars, path}) => (
    <article className="technology">
        <Suspense fallback={<Note>Loading...</Note>}><TechnologyPhoto name={name} path={path} /></Suspense>
        <TechnologyName name={name} />
        <Rate stars={stars}/>
    </article>
);

Technology.proptypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired
};

export default Technology;