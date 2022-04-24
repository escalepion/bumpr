import React from 'react';

import PrimaryHero from 'components/primaryHero';
import PayInfo from 'components/payInfo';
import Benefits from 'components/benefits';
import PayNow from 'components/payNow';
import Customer from 'components/customer';

const Home = () => (
  <div>
    <PrimaryHero />
    <PayInfo />
    <Benefits />
    <PayNow />
    <Customer />
  </div>
)

export default Home;
