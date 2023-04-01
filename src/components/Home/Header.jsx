import React from 'react';
import lightLogo from '../../assets/logo-light.svg';
import curve from '../../assets/curve.svg';
const Header = () => {
  return (
    <header className='bg-main flex justify-between items-center px-4 sm:px-10 lg:px-36 py-8 lg:py-16'>
      <img src={lightLogo} />
      <button className='text-white border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-300 ease-out sm:text-lg'>
        Apply for access
      </button>
    </header>
  );
};

export default Header;
