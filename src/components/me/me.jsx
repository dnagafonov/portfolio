import React from 'react';
import Layout from '../layout/layout';
import SelectLanguage from '../select-language/select-language';

import './me.scss';
import MePhoto from './__photo/me__photo';

const Me = () => (
    <article className="me">
        <div className="wrapper">
            <Layout>
                <h1 className="me__name">Denis Agafonov</h1>
                <div className="me__info">
                    <p>Junior Front-end developer</p>
                    <p>18 years old, Minsk</p>
                </div>
                <SelectLanguage />
            </Layout>
            <MePhoto />
        </div>
    </article>
);

export default Me;