import React from 'react';
import cn from 'classnames';

const BorderButton = ({ text = '', onClick, active = false, data_test }) => (
  <div data-test={data_test} onClick={onClick} className={cn('inline-block border border-active-bg-dark p-4 rounded-full cursor-pointer', active && 'bg-active-bg-dark text-white' )}>
    <span>{text}</span>
    <span className='ml-3'><i class='fa-solid fa-plus' style={{ color: active ? '#fff' : '#1B1B1B' }}></i></span>
  </div>
);

export default BorderButton;
