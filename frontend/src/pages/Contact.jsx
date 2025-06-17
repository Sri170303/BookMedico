import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10'>
        <img className='md:max-w-[360px]' src={assets.contact_us} alt="" />
        <div className='flex flex-col items-start justify-center rounded gap-6'>
          <p className='font-medium text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>Infinity Plaza <br /> South Bengaluru, Karnataka</p>
          <p className='text-gray-500'>+91 8111139999 <br /> Email: example@gmail.com</p>
          <p className='font-medium text-gray-600'>CAREERS AT BookMedico</p>
          <p className='text-gray-500'>Learn more about our terms and job openings.</p>
          <button className='border py-5 px-4  rounded-xl hover:bg-primary hover:text-white cursor-pointer transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact