import React from 'react';
import PropTypes from 'prop-types';

import './note.scss';

const Note = ({children}) => <p className="note">{children}</p>

Note.proptypes = {
    children: PropTypes.node.isRequired
}

export default Note;