import React from 'react';
import PropTypes from 'prop-types';
import Star from '@assets/star.svg';
import {getArrayForStars} from '../../tools/getArrayForStars';

import './rate.scss';

const Rate = ({stars}) => {
    return(
        <section className="rate">
            {getArrayForStars(stars).map(e => e ? <img className="star__active" src={Star}/> : <img className="star" src={Star}/>)}
        </section>
    )
}

Rate.proptypes = {
    stars: PropTypes.number.isRequired
}

export default Rate;