import React from 'react';

const HeroDesc = ({ text = '' }) => (
  <div>
    {text && <span className='block text-2xl text-white leading-8 mt-5'>{text}</span>}
  </div>
);

export default HeroDesc;
