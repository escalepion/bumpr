import React from 'react';
import { useLocation } from "react-router-dom";

import logo from 'assets/images/logo.png';
import homeIcon from 'assets/images/home-icon.png';
import lockIcon from 'assets/images/lock-icon.png';
import NavItem from 'components/navItem';

const Header = () => {
  const location = useLocation();
  return(
    <div className='fixed w-full z-10'>
      <div className='md:container mt-10'>
        <div className='bg-pinkish-orange pl-7 pr-2 rounded-full'>
          <nav className='flex justify-between'>
            <div className='flex'>
              <NavItem text="Apply" active={location?.pathname === 'apply'} />
              <NavItem text="How it works" active={location?.pathname === 'how-it-works'} />
              <NavItem text="About us"  active={location?.pathname === 'about-us'}/>
              <NavItem text="Blog" active={location?.pathname === 'blog'} />
            </div>
            <div className='flex items-center'>
              <a href="/"><img alt="logo" src={logo} /></a>
            </div>
            <div className='flex'>
              <NavItem href="/signup" text="Partner signup" active={location?.pathname === '/signup'} icon={lockIcon} />
              <NavItem text="Partner login" active={location?.pathname === '/login'} icon={homeIcon} bordered />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
