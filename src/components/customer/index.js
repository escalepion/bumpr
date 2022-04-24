import React from 'react';

import CustomerCard from 'components/customerCard';

const Customer = () => {
  return(
    <div className='min-h-[43.125rem] bg-pinkish-orange'>
      <div className='bg-customer bg-top bg-cover'>
        <div className='py-[4.375rem] pr-[5.5rem] flex justify-end'>
          <CustomerCard />
        </div>
      </div>
    </div>
  );
}

export default Customer;
