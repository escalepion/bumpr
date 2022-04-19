import React from 'react';

const HeroTitle = ({ text = '' }) => (
  <div className='font-fortx text-[4.8125rem] text-white mt-10'>
    {text && <span className='block leading-[5rem]'>{text}</span>}
  </div>
)

export default HeroTitle;
