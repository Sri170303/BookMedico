import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      
      {/* Left Section: Text */}
      <div className='flex-1 w-1/2 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 justify-center items-center'>
        <p className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
          Book Appointment With 100+ Trusted Doctors          
        </p>
        <button className='bg-white text-primary px-6 py-2 rounded-full font-medium hover:shadow-lg transition'>
          Create Account
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="hidden md:flex md:w-[50%] lg:w-[400px] relative">
        <img
          className='w-full h-auto object-contain absolute bottom-0 right-0'
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
