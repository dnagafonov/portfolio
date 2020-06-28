import React from 'react';
import PropTypes from 'prop-types';
import Star from '@assets/images/star.svg';
import {getArrayForStars} from '../../tools/getArrayForStars';

import './rate.scss';

const Rate = ({stars}) => {
    return(
        <section className="rate">
            {getArrayForStars(stars).map((e, i) => e ? <img className="star__active" key={i} src={Star}/> : <img className="star" key={i} src={Star}/>)}
        </section>
    )
}

Rate.proptypes = {
    stars: PropTypes.number.isRequired
}

export default Rate;