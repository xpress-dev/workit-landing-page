import React from 'react';
import CustomButton from '../UI/CustomButton';
import phoneImage from '../../assets/image-hero.webp';
import leftDoodle from '../../assets/bg-pattern-1.svg';
import rightDoodle from '../../assets/bg-pattern-2.svg';
import curve from '../../assets/curve.svg';
const Jumbotron = () => {
  return (
    <section className='bg-main px-2 pt-10 text-center relative w-full h-[22rem] sm:h-[28rem] lg:h-[36rem] bg-svg-images'>
      <h1 className='text-white text-5xl sm:text-6xl lg:text-[5rem] font-serif font-bold lg:font-semibold '>
        Data tailored to{' '}
      </h1>
      <br className='hidden sm:block' />
      <h1 className='text-white text-5xl sm:text-6xl lg:text-[5rem] font-serif font-bold lg:font-semibold -mt-1 sm:-mt-8 mb-8 '>
        {' '}
        your needs.
      </h1>
      <div className=''>
        <CustomButton title={'Learn more'} />
      </div>
      <div className='h-24 sm:h-48 absolute bottom-0 left-1/2 -translate-x-1/2'>
        <img
          src={phoneImage}
          className='max-w-xs sm:max-w-lg lg:max-w-3xl absolute z-10 -bottom-[10rem] sm:-bottom-[12rem] lg:-bottom-[12rem] left-1/2 -translate-x-1/2'
        />
      </div>
      <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 bg-main h-20 -z-10 w-full rounded-b-[50%]'></div>
    </section>
  );
};

export default Jumbotron;
