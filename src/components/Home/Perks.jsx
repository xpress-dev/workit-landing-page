import React from 'react';
import PerksItem from './PerksItem';

const Perks = () => {
  return (
    <section className='bg-[#fcf8ff] w-full h-50 pt-[15rem] pb-[4rem] relative -z-10'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 bg-main h-20 -z-10 w-full rounded-b-[40%]'></div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 sm:px-16'>
        <PerksItem
          amount='1'
          title='Actionable insights'
          text='Optimize your products, improve customer satisfaction and stay ahead of the competition with out product data analytics.'
        />
        <PerksItem
          amount='2'
          title='Data-driven decisions'
          text='Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
        />
        <PerksItem
          amount='3'
          title='Always affordable'
          text='Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
        />
      </div>
      <div className='bg-[#fcf8ff] absolute -bottom-20 left-1/2 -translate-x-1/2 h-20 w-full rounded-b-[50%]'></div>
    </section>
  );
};

export default Perks;
