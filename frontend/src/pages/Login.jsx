import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { backendUrl: ctxBackendUrl, token, setToken } = useContext(AppContext)
  const backendUrl = ctxBackendUrl || import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up' && password.length < 4) {
      return toast.warning('Password must be at least 4 characters long')
    }

    setLoading(true)
    try {
      if (state === 'Sign Up') {

        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          toast.success('Account created successfully!')
        } else {
          toast.error(data.message)
        }

      } else {

        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          toast.success('Logged in successfully!')
        } else {
          toast.error(data.message)
        }

      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message || 'Server connection error. Ensure backend is running.')
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {state === 'Sign Up'
          ? <div className='w-full '>
            <p>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
          : null
        }
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" minLength={4} required />
          <p className='text-xs text-gray-400 mt-1'>Minimum 4 characters</p>
        </div>
        <button disabled={loading} className='bg-primary text-white w-full py-2 my-2 rounded-md text-base disabled:opacity-50 flex justify-center items-center gap-2'>
          {loading ? (state === 'Sign Up' ? 'Creating Account...' : 'Logging In...') : (state === 'Sign Up' ? 'Create account' : 'Login')}
        </button>
        {state === 'Sign Up'
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login