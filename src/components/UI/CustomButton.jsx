import React from 'react';

const CustomButton = ({ title }) => {
  return (
    <button className='text-main bg-accent font-bold px-6 py-3 border-2 border-accent hover:bg-main hover:text-accent transition-colors duration-300 sm:text-[1.125rem] cursor-pointer w-48'>
      {title}
    </button>
  );
};

export default CustomButton;
