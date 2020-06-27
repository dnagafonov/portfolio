import React from 'react';
import PropTypes from 'prop-types';

import './link.scss';

const Link = ({text, link}) => <a className="link" href={link} target="_blank">{text}</a>

Link.proptypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Link;