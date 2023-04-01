import React from 'react';
import CustomNumber from '../UI/CustomNumber';
const PerksItem = ({ amount, title, text }) => {
  return (
    <div className='text-center flex flex-col sm:flex-row lg:flex-col sm:items-center sm:text-left lg:text-center gap-5'>
      <CustomNumber amount={amount} />
      <div className='flex flex-col gap-3 flex-1'>
        <h2 className='font-serif text-3xl font-semibold'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PerksItem;
