import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({children, href = "#"}) => <a className="btn" href={href} target='_blank'>{children}</a>

Button.proptypes = {
    children: PropTypes.node.isRequired
};

export default Button;