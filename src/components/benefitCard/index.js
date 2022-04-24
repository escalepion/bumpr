import React from 'react';

const BenefitCard = ({ title = '', desc = '' }) => (
  <div>
    <div className='font-fortx text-shamrock'>
      <span className='text-[58px]'>{title}</span>
      <span className='text-[28px]'>%</span>
    </div>
    <div className='font-universal850 text-white font-bold pr-8'>
      {desc}
    </div>
  </div>
);

export default BenefitCard;
