import React from 'react';

const PayInfoItem = ({ title = '', desc = '', number = '', last = false }) => (
  <div className='flex'>
    <div className='relative'>
      <div className='w-6 h-6 flex items-center justify-center bg-pinkish-orange rounded-full border border-active-bg-dark font-bold relative z-10'>
        <span>{number}</span>
      </div>
      { !last && <div className='w-px h-full absolute bg-active-bg-dark top-0 left-1/2' />}
    </div>
    <div className='mb-4 pl-4'>
      <div className='font-bold'>{title}</div>
      <div>{desc}</div>
    </div>
  </div>
);

export default PayInfoItem;
