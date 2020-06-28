import React from 'react';
import PropTypes from 'prop-types';
import ContactsLink from '../__link/contacts__link';
import Telegram from '@assets/images/telegram.svg';
import Instagram from '@assets/images/instagram.svg';
import LinkedIn from '@assets/images/linkedIn.svg';
import Github from '@assets/images/github.svg';
import Layout from '../../layout/layout';

import './contacts__links.scss';

const ContactsLinks = () => {
    const links = [
        { img: Github, link: "https://github.com/dnagafonov" },
        { img: Telegram, link: "https://t.me/dnagafonov" },
        { img: Instagram, link: "https://www.instagram.com/dnagafonov" },
        { img: LinkedIn, link: "https://www.linkedin.com/in/denis-agafonov-2213061a2/" },
    ];
    return(
        <Layout className="contacts__links">
            {links.map(e => <ContactsLink key={e.link} img={e.img} link={e.link} />)}
        </Layout>
    );
}

ContactsLinks.proptypes = {
    notes: PropTypes.arrayOf(PropTypes.exact({
        img: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })).isRequired
}

export default ContactsLinks;