import React, { useContext } from 'react';
import Layout from '../layout/layout';
import MePhoto from './__photo/me__photo';
import SelectLanguageContainer from '../select-language/select-language-container';
import PropTypes from 'prop-types'

import './me.scss';

const Me = ({name, info}) => {
    return(
        <article className="me">
            <div className="wrapper">
                <Layout>
                    <h1 className="me__name">{name}</h1>
                    <div className="me__info">
                        {info.map(e => <p key={e}>{e}</p>)}
                    </div>
                    <SelectLanguageContainer />
                </Layout>
                <MePhoto />
            </div>
        </article>
    );
}

Me.proptypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Me;