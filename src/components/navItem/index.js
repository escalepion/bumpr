import React from 'react';
import cn from 'classnames';

const NavItem = ({ href = '', text = '', active = false, icon = '', bordered = false }) => {
  return (
    <div className='flex items-center mr-5 h-14 relative cursor-pointer'>
      <div className={cn('flex items-center', bordered && 'py-1 px-2 border boder-active-bg-dark rounded-full')}>
        <a href={href}>{text}</a>
        {icon && <div className='w-4 h-4 ml-2'><img alt="nav icon" src={icon} /></div>}
        {!!active && <div className='absolute bottom-0 left-0 w-full h-1 bg-active-bg-dark rounded-t' />}
      </div>
    </div>
  );
} 

export default NavItem;
