import React from 'react';

const PayInfoItem = ({ title = '', desc = '' }) => (
  <div className='mb-4'>
    <div className='font-bold'>{title}</div>
    <div>{desc}</div>
  </div>
);

export default PayInfoItem;
