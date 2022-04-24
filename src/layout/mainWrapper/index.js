import React from 'react';

const MainWrapper = ({ children }) => (
  <div className='bg-slate-blue h-screen w-full overflow-y-auto'>
    <div className='max-w-[48.125rem] m-auto px-4 lg:px-0 pt-[6.5rem] lg:pt-64'>
      {children}
    </div>
  </div>
);

export default MainWrapper;
