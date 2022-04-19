import React from 'react';

import stars from 'assets/images/stars.png';
import starLogo from 'assets/images/star-logo.png';

const HeroReview = () => {
  return (
    <div className='flex items-center'>
      <div className='mr-4'>
        <span className='font-universal850 text-white text-xl font-bold'>Excellent</span>
      </div>
      <div className='mr-4'>
        <img alt="stars" src={stars} />
      </div>
      <div>
        <img alt="star logo" src={starLogo} />
      </div>
    </div>
  );
}

export default HeroReview;
