import { LockClosedIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
export default function Example() {
  const inititalUser = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const [user, setUser] = useState(inititalUser);
  useEffect(() => {
    const preFetch = async () => {
      try {
        const config = {
          headers: {
            Authorization: `${localStorage.getItem('authToken')}`,
          },
        };
        const { data } = await axios.get('/api/private', config);
        console.log(data);
      } catch (error) {
        console.log(error.response.data.data);
      }
    };
    preFetch();
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', user);
      localStorage.setItem('authToken', `Bearer ${data.token}`);
      toast.success('Your are redirecting to Dashboard');
      window.location = '/';
    } catch (error) {
      toast.error(error.response.data.data);
    }
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className='flex min-h-screen  items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form
          className='mt-8 space-y-6'
          action='#'
          method='POST'
          onSubmit={handleLogin}
        >
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Email address'
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Password'
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='rememberMe'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              {/* <a
                href='#id'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </a> */}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
