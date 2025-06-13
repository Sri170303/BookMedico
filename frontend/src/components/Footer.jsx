import React from 'react'
import {assets} from "../assets/assets"

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi omnis dignissimos ipsum sint! Cum iure quasi debitis minus beatae fugiat in ipsum officiis veritatis doloremque sequi vel sint unde libero</p>
            </div>
            <div>
                <p className='text-xl mb-5 font-medium'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl mb-5 font-medium'>Get in Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 8111139999</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr className='mt-5'/>
        <div className='py-5 text-sm text-center'>
            
            <p>Copyright © 2025 ABC - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer