import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'signup' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'signup' ? 'Signup' : 'Login'} to book Appointment</p>
        {
          state==='signup'
          &&
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required/>
          </div>
        }
        <div>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required/>
        </div>
        <div>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required/>
        </div>
        <button className='w-full bg-primary text-white py-2 rounded-md text-base'>{state === 'signup' ? 'Create Account': 'Login'}</button>
        {
          state==='signup'
          ?
          <p>Already have an account? <span onClick={()=>setState('login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          :
          <p>Create an new account? <span onClick={()=>setState('signup')} className='bg-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login