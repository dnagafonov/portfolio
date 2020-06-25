import React from 'react';
import HeaderElement from './__element/header__element';

import './header.scss';

const Header = () => {
    const links = [
        { name: "Home", to: "home" },
        { name: "About me", to: "about-me" },
        { name: "Skills", to: "skills" },
        { name: "Portfolio", to: "portfolio" },
        { name: "Contacts", to: "contacts" }
    ]
    return(
        <header className="header">
            {links.map(e => <HeaderElement {...e} key={e.to} />)}
        </header>
    )
}

export default Header;