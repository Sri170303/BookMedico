import React , {useState} from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)
  return (
    <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-gray-300'>
        <img src={assets.logo} alt="" className='w-45 cursor-pointer'/>
        <ul className='hidden md:flex gap-5 items-start font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
            </NavLink>
            <NavLink to='contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
          {
            token ?
            <div className='flex items-center gap-4 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-15 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 flex flex-col bg-stone-200 gap-4 p-4 rounded'>
                  <p className='hover:text-black cursor-pointer' onClick={() => navigate('/my-profile')}>My Profile</p>
                  <p className='hover:text-black cursor-pointer' onClick={() => navigate('my-appointments')}>My Appointments</p>
                  <p className='hover:text-black cursor-pointer' onClick={() => setToken(false)}>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='border-none text-white bg-primary px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>

          }
        </div>
    </div>
  )
}

export default NavBar