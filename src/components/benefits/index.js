import React from 'react';

import BenefitCard from 'components/benefitCard';

const Benefits = () => {
  return (
    <div className="bg-benefits-bg">
      <div className='lg:container pt-12 pb-14'>
        <div className='font-fortx text-[33px] text-white uppercase font-bold'>Benefits our other parners have noticed offering PayLater</div>
        <div className='flex'>
          <BenefitCard
            title="71"
            desc="of customers authorised more work because they split their bill with Bumper"
          />
          <BenefitCard
            title="90"
            desc="of customers would return to the same garage because they offered Bumper"
          />
          <BenefitCard
            title="+350"
            desc="increase in average invoice of customers using Bumper to split their bill."
          />
          <BenefitCard
            title="89"
            desc="of customers felt less stressed because they used Bumper to spread the cost."
          />
        </div>
        <div className='text-xs text-white font-universal850 pt-8'>Source: Survey of 2,750 Bumper customers in Feb 2021</div>
      </div>
    </div>
  );
}

export default Benefits;
