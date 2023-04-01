import React from 'react';

const CustomNumber = ({ amount }) => {
  return (
    <p className='border border-black rounded-full w-12 h-12 relative text-xl sm:h-12 text-center font-serif flex-2 mx-auto'>
      <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {amount}
      </span>
    </p>
  );
};

export default CustomNumber;
