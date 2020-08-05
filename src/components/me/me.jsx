import React, { Suspense } from 'react';
import Layout from '../layout/layout';
import SelectLanguageContainer from '../select-language/select-language-container';
import Note from '../note/note';
import PropTypes from 'prop-types'

import './me.scss';

const MePhoto = React.lazy(() => import('./__photo/me__photo'));

const Me = ({name, info}) => {
    return(
        <article className="me">
            <div className="wrapper">
                <Layout>
                    <h1 className="me__name">{name}</h1>
                    <div className="me__info">
                        {info.map(e => <p key={e}>{e}</p>)}
                    </div>
                    <div/> 
                    <SelectLanguageContainer />
                </Layout>
                <Suspense fallback={<Note>Loading...</Note>}>
                    <MePhoto />
                </Suspense>
            </div>
        </article>
    );
}

Me.proptypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Me;