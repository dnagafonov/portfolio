import React from 'react';
import PropTypes from 'prop-types';

import './link.scss';

const Link = ({className = "", children, link}) => <a className={`${className} link`} href={link} target='_blank'>{children}</a>

Link.proptypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Link;