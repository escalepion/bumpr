import React from 'react';

const MainWrapper = ({ children }) => (
  <div className='bg-slate-blue h-screen w-full overflow-y-auto'>
    <div className='max-w-[48.125rem] m-auto pt-64'>
      {children}
    </div>
  </div>
);

export default MainWrapper;
