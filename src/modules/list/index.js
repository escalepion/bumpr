import React, { useState } from 'react';

import { filterCompanies } from 'lib/helpers/filterCompanies';
import MainWrapper from 'layout/mainWrapper';
import BoxWrapper from 'components/boxWrapper';
import ListItem from 'components/listItem';

const List = ({ list = [] }) => {
  const [term, setTerm] = useState('');

  const filteredCompanies = filterCompanies(list, term);
  
  return (
    <MainWrapper>
      <div className='text-4xl text-white text-universal850 font-bold mb-4'>Interested Dealerships</div>
      <div className='mb-4'>
        <BoxWrapper> 
          <div>Search Company</div>
          <div>
            <input 
              type='text'
              className="w-full border boder-active-bg-dark border-active-bg-dark rounded-full px-4 py-4"
              placeholder="Start typing name, company, phone or email for search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </BoxWrapper>
      </div>
      {!filteredCompanies?.length && (
        <BoxWrapper>
          <div className='flex items-center justify-center h-20'>No company found !</div>
        </BoxWrapper>
      )}
      {!!filteredCompanies?.length && filteredCompanies.map((item, index) => (
        <div key={`${item.name}-${index}`} className='mb-4'>
          <BoxWrapper> 
            <ListItem main text={item.name} />
            <ListItem text="Company" desc={item.company} />
            <ListItem text="Mobile phone number" desc={item.mobile_phone} />
            <ListItem text="Email address" desc={item.email_address} />
            <ListItem text="Postcode" desc={item.postcode} />
          </BoxWrapper>
        </div>
      ))}
    </MainWrapper>
  )
}

export default List;
