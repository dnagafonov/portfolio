import React from 'react';
import PropTypes from 'prop-types';
import ContactsLink from '../__link/contacts__link';
import Layout from '../../layout/layout';

import './contacts__links.scss';

const ContactsLinks = ({ links }) => {
    return(
        <Layout className="contacts__links">
            {links.map(e => <ContactsLink key={e.link} img={e.img} link={e.link} />)}
        </Layout>
    );
}

ContactsLinks.proptypes = {
    links: PropTypes.arrayOf(PropTypes.exact({
        img: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })).isRequired
}

export default ContactsLinks;