import React from 'react';
import cn from 'classnames';

const ListItem = ({ text = '', desc = '', main = false }) => (
  <div className='flex justify-between border-b border-smooth-gray py-4'>
    <span className={cn('font-bold text-universal850', main && 'text-xl')}>{text}</span>
    <span>{desc}</span>
  </div>
);

export default ListItem;
