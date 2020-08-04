import React from 'react';
import HeaderElement from './__element/header__element';
import PropTypes from 'prop-types'

import './header.scss';

const Header = ({ links }) => {
    return(
        <header className="header">
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
          <div className="wrapper menu">
              {links.map(e => <HeaderElement {...e} key={e.to} />)}
          </div>
        </header>
    )
}

Header.proptypes = {
    links: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    }).isRequired
}

export default Header;