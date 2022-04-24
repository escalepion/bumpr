import React, { useState } from 'react';
import logo from 'assets/images/logo.png';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='absolute w-full px-4 py-3 bg-pinkish-orange z-[999]'>
      <div className='relative flex justify-between w-full'>
        <div><a href="/"><img alt="logo" src={logo} /></a></div>
        <button className='relative border border-active-bg-dark rounded-full w-10 h-10 flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
          <div className='cursor-pointer'>
            {!isOpen ? (
              <i class="fa-solid fa-bars" style={{ color: '#1B1B1B' }}></i>
            ) : (
              <i class="fa-solid fa-xmark" style={{ color: '#1B1B1B' }}></i>
            )}
          </div>
          {isOpen && (
            <div className='absolute bg-white min-h-[60rem] min-w-[20rem] top-1 right-10 z-[999]'>
              <div className='flex flex-col items-start p-4'>
                <a href="/">Home</a>
                <a href="/signup">Signup</a>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
