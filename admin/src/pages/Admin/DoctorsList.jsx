import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react';

const DoctorsList = () => {

  const {doctors, aToken, getAllDoctors, changeAvailability} = useContext(AdminContext);

  useEffect(
    () => {
      if (aToken) {
        getAllDoctors();
      }
    },
    [aToken]
  )

  // console.log(doctors);

  return (
    <div className='px-4 w-full'>
      <h1 className='mt-5 mb-5 text-lg font-medium'>All Doctors</h1>
      <div className='w-full grid grid-cols-[var(--grid-cols-auto)] gap-4 gap-y-6'>
          {
            doctors.map((item, index) => (
                <div key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        <div className='flex gap-3'>
                            <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} />
                            <p>Available</p>
                        </div>
                    </div>
                </div>
            ))
          }
          
        </div>
    </div>
  )
}

export default DoctorsList