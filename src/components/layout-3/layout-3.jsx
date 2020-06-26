import React from 'react';
import PropTypes from 'prop-types';

import './layout-3.scss';

const Layout3 = props => (
    <section className="layout-3">
        {props.children}
    </section>
)

Layout3.proptypes = {
    children: PropTypes.node.isRequired
}

export default Layout3;