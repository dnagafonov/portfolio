import React from 'react';
import Link from '../../link/link';
import PropTypes from 'prop-types';

import './contacts__link.scss';

const ContactsLink = ({img, link}) => <Link className="contacts__link" link={link}><img src={img}/></Link>

ContactsLink.proptypes = {
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default ContactsLink;
