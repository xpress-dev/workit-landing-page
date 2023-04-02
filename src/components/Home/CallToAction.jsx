import founderImage from '../../assets/image-founder.webp';
import CustomButton from '../UI/CustomButton';
import callToActionDoodle from '../../assets/bg-pattern-3.svg';
const CallToAction = () => {
  return (
    <section className='flex flex-col w-full px-5 py-[4rem]   mt-20  items-center relative'>
      <img
        src={founderImage}
        className='w-72 sm:self-start lg:w-[32rem] lg:ml-16'
      />
      <div className='bg-main p-8 lg:p-16 flex flex-col gap-5 text-white -mt-10 sm:-mt-32 sm:w-[32rem] lg:w-[48rem] sm:self-end lg:mr-16'>
        <h2 className='font-serif text-4xl font-bold lg:text-6xl'>
          Be the first to test
        </h2>
        <p className='lg:text-xl'>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I'll be in touch to schedule a
          call.
        </p>
        <CustomButton title='Apply for access' />
        <img
          src={callToActionDoodle}
          className='absolute -bottom-5 right-5 hidden sm:block'
        />
      </div>
    </section>
  );
};

export default CallToAction;
