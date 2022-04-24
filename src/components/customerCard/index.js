import React from 'react';

import ArnoldImg from 'assets/images/arnold.svg';

const CustomerCard = () => (
  <div className='max-w-[24.375rem] bg-white rounded-3xl p-6'>
    <div className='font-univesal850 font-bold text-active-bg-dark'>“Est sem nisl morbi praesent tempor augue in venenatis dolor massa viverra parturient at ligula.</div>
    <div className='mt-1'>
      Ad magnis in justo lobortis vestibulum a adipiscing nisl magnis sociosqu 
      faucibus parturient aenean a metus sem quam adipiscing ut eget ullamcorper 
      pulvinar pharetra cursus consectetur ante. Senectus primis scelerisque a 
      vestibulum vestibulum consectetur inceptos pharetra. Suspendisse ultrices porta.”
    </div>
    <div className='mt-4 flex'>
      <div className='flex flex-col border-r border-pole-grey pr-4'>
        <span className='font-bold'>Eddie Hawthorne</span>
        <span>Managing Director</span>
      </div>
      <div className='flex items-center pl-4'>
        <img alt="name" src={ArnoldImg} />
      </div>
    </div>
  </div>
);

export default CustomerCard;
