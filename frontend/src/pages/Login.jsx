import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { backendURL, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [state, setState] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "signup") {
        const {data} = await axios.post(backendURL + "/api/user/register", {name, password, email});
        if (data.success) {
          localStorage.setItem('userToken', data.token);
          setToken(data.token);
        }
        else {
          toast.error(data.message);
        }
      }
      else {
        const {data} = await axios.post(backendURL + "/api/user/login", {password, email});
        if (data.success) {
          localStorage.setItem('userToken', data.token);
          setToken(data.token);
        }
        else {
          toast.error(data.message);
        }
      }

    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'signup' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'signup' ? 'Signup' : 'Login'} to book Appointment</p>
        {
          state==='signup'
          &&
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required/>
          </div>
        }
        <div>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>
        <div>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>
        <button type='submit' className='w-full bg-primary text-white py-2 rounded-md text-base'>{state === 'signup' ? 'Create Account': 'Login'}</button>
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