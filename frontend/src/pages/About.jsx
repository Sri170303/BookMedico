import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img src={assets.about_img} className='w-full md:max-w-[360px] rounded' alt="" />
        <div className='flex flex-col justify-center gap-4 text-sm text-gray-600 border border-gray-200 p-4 rounded'>
          <p>Welcome to BookMedico, your trusted companion in healthcare management. At BookMedico, we recognize the challenges of scheduling doctor appointments and keeping track of medical records. That's why we've designed a seamless and efficient platform to simplify your healthcare experience.</p>
          <p>We are committed to innovation in medical technology, continuously enhancing our platform to provide intuitive solutions that improve accessibility and convenience. Whether you’re booking your first consultation or managing ongoing treatments, BookMedico is here to support you every step of the way.</p>
          <b className='text-gray-600'>Our Vision</b>
          <p>Our vision at BookMedico is to revolutionize the way patients connect with healthcare providers. By bridging the gap between individuals and medical professionals, we make quality care more accessible, ensuring that you receive the attention you need when you need it.</p>
          <p>Let BookMedico be your partner in proactive healthcare management—effortless, reliable, and designed for your well-being.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border border-gray-400 rounded px-10 md:px-16 py-8 sm:py-16 flex flex-col ga-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>Effortless Appointment Booking:</b>
          <p>Schedule consultations with verified doctors in just a few clicks—anytime, anywhere, from your desktop or mobile.</p>
        </div>
        <div className='border border-gray-400 rounded px-10 md:px-16 py-8 sm:py-16 flex flex-col ga-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>Centralized Health Management:</b>
          <p>Access your medical records, prescriptions, and follow-up schedules all in one secure, easy-to-use platform.</p>
        </div>
        <div className='border border-gray-400 rounded px-10 md:px-16 py-8 sm:py-16 flex flex-col ga-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>Trusted and Accessible Care:</b>
          <p>We connect you with top healthcare professionals, ensuring quality care that's just a tap away.</p>
        </div>
      </div>
    </div>
  )
}

export default About