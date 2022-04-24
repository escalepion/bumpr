import React from 'react';
import cn from 'classnames';

const PaynNowCard = ({ title = '', desc = '', icon = 'bg-secure-icon' }) => (
  <div className='text-active-bg-dark flex mt-6 lg:mt-0 lg:pr-2 '>
    <div className={cn('w-[4.5rem] h-[4.5rem]', icon)} />
    <div className='max-w-[14.625rem] pl-4'>
      <div className='font-bold'>{title}</div>
      <div>{desc}</div>
    </div>
  </div>
);

export default PaynNowCard;
