import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import './header__element.scss';

const HeaderElement = ({name, to}) => {
    const props = {
        className: "header__element",
        to,
        smooth: true, 
        duration: 500
    }
    return <Link {...props}>{name}</Link>
};

HeaderElement.proptypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default HeaderElement;