import React from 'react';

import HeroReview from 'components/heroReview';
import HeroTitle from 'components/heroTitle';
import HeroDesc from 'components/heroDesc';
import AcceptLink from 'components/acceptLink';

import carBg from 'assets/images/car-bg.jpg';

const PrimaryHero = () => {
  return(
    <div className="w-full relative pb-10">
      <div className='absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden bg-car-bg bg-cover'>
        {/* <img alt="hero bg" src={carBg} /> */}
      </div>
      <div className='absolute left-0 top-0 z-[-1] opacity-80 mix-blend-multiply bg-dark-bg-hero w-full h-full' />
      <div className='pt-36'>
        <div className='container'>
          <HeroReview />
          <div className='max-w-[49.625rem]'>
            <HeroTitle text='BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP' />
            <HeroDesc
              text="Join our network of 3,000+ garages and dealerships who already offer Bumper to their customers."
            />
            <div>
              <AcceptLink text='Register your interest' icon='fa-solid fa-arrow-right' href='/signup' />
            </div>
            <div className='cursor-pointer mt-5'>
              <span className='text-white'>Already registered?</span>
              <span className='text-dark-mint ml-1'>Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryHero;
