import React from 'react';

const AcceptLink = ({ text = '', href="", icon="" }) => (
  <div className='bg-shamrock w-max mt-5 py-3 px-4 border boder-active-bg-dark rounded-full flex items-center'>
    <a href={href}>{text}</a>
    {icon && <div className='ml-2.5 pt-0.5'><i class={icon}></i></div>}
  </div>
)

export default AcceptLink;
