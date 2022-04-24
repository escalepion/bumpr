import React from 'react';

import PayNowCard from 'components/payNowCard';
import AcceptLink from 'components/acceptLink';

const PayNow = () => (
  <div className='bg-white'>
    <div className='lg: container py-20'>
      <div className='text-active-bg-dark font-universal850 font-bold'>PayNow</div>
      <div className='text-2xl text-[21px] text-active-bg-dark w-full max-w-[53.75rem] my-4'>
        Our contactless payment solution that allows you to take payments online from your customers.
      </div>
      <div className='uppercase font-fortx text-6xl text-pinkish-orange'>Accept payments anywhere, anytime</div>
      <div className='font-universal850 font-bold text-active-bg-dark pt-12 pb-8'>Benefits of PayNow</div>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <PayNowCard
         title="Secure"
         desc='Prevent customers from revealing sensitive information over the phone, GDPR safe and tested.'
         icon='bg-secure-icon'
        />
        <PayNowCard
         title="Low cost"
         desc='Low transaction fee, no setup or mobile phone fees.'
          icon='bg-low-icon'
        />
        <PayNowCard
         title="Fast"
         desc='Set up and ready to go in minutes!'
          icon='bg-basket-icon'
        />
      </div>
      <div className='mt-12'><AcceptLink text='Register your interest' icon='fa-solid fa-arrow-right' href='/signup' /></div>
    </div>
  </div>
);

export default PayNow;

