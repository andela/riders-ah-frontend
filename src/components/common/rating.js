import React from 'react';
import Rating from 'react-rating';
import yellowStar from '../../assets/images/star-yellow.png';
import greyStar from '../../assets/images/star-grey.png';
import Button from './button';

const Ratings = ({ rate, onChange, rates, id }) => {
  const actualRate = rates.actual.toFixed(1);
  return (
    <React.Fragment>
      <h4>Rating </h4>
      <Rating
        id={id}
        initialRating={rate}
        onChange={onChange}
        emptySymbol={<img src={greyStar} className='ratings' />}
        placeholderSymbol={<img src={greyStar} className='ratings' />}
        fullSymbol={<img src={yellowStar} className='ratings' />}
      />
      <Button className='btn btn-edit btn-rate' value={String(actualRate)} />
    </React.Fragment>
  );
};

export default Ratings;
