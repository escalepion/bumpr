import React from 'react';
import PayInfoItem from 'components/payInfoItem';
import AcceptLink from 'components/acceptLink';
import phoneImg from 'assets/images/phone.svg';

const PayInfo = () => {
  return (
    <div className='bg-white'>
      <div className='lg:container py-20'>
        <div className='flex'>
          <div className='w-full lg:max-w-[39rem] text-active-bg-dark'>
            <div className='font-bold'><span>PayLater</span></div>
            <div className='text-xl my-2'>Allow your customers to split their repair or service bill over monthly repayments.</div>
            <div className='text-pinkish-orange text-6xl font-fortx my-8'>
              <div><span>NO RISK FOR DEALERS,</span></div>
              <div><span>NO WORRY FOR DRIVERS</span></div>
            </div>
            <div className='font-bold mb-4'><span>It's as simple as:</span></div>
            <div>
              <PayInfoItem 
                title="FIX IT"
                desc="Your customers bring their vehicle to you. You repair and service the car. Everything just like it works right now."
              />
              <PayInfoItem 
                title="SPLIT IT"
                desc="When the customer gets their bill or quote, Bumper either integrates into your existing online checkout or can be done on-site before you hand back the keys. All in just a few clicks."
              />
              <PayInfoItem 
                title="SORTED "
                desc="You and your customer part ways happy. You’re paid in full direct from Bumper, the customer repays Bumper over their chosen payment plan."
              />
            </div>
            <div className='py-2'>
              <AcceptLink text='Register your interest' icon='fa-solid fa-arrow-right' href='/signup' />
            </div>
          </div>
          <div>
            <img alt="phone" src={phoneImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayInfo;
