import axios from 'axios';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
export default function Registration({ title }) {
  const initialErrorState = {
    name: false,
    email: false,
    phone: false,
    password: false,
    changepassword: false,
  };
  const inititalErrorMsg = {
    name: 'This field is ',
    email: 'This field is ',
    phone: 'This field is ',
    password: 'This field is ',
    changepassword: 'This field is ',
  };
  const initialUser = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    user_type: 3,
    email_send_limit: '',
  };
  const [showPw, setShowPw] = useState(false);
  const [showCnfPw, setshowCnfPw] = useState(false);
  const [errorMsg] = useState(inititalErrorMsg);
  const [errorState] = useState(initialErrorState);
  const [user, setUser] = useState(initialUser);
  const ref = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/register', user);
      toast.success('Account created successfully');
      setUser(initialUser);
    } catch (error) {
      toast.error(error.response.data.data || 'something went wrong');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-col w-full items-center '>
      {' '}
      <h2 className='text-xl font-extrabold  text-indigo-500 sm:text-3xl md:text-5xl mb-4 self-start'>
        {title || 'Registration'}
      </h2>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-1/2'
        onSubmit={handleSubmit}
        ref={ref}
      >
        <p className='text-red text-xs italic'>Please fill out this field.</p>
        <div className='-mx-3 md:flex mb-6'>
          <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              First Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded py-3 px-4 mb-3'
              type='text'
              placeholder='Jane'
              name='firstname'
              value={user.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className='md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'
              htmlFor='grid-last-name'
            >
              Last Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded py-3 px-4'
              type='text'
              placeholder='Doe'
              name='lastname'
              value={user.lastname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='-mx-3 md:flex mb-2'>
          <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'
              htmlFor='grid-city'
            >
              Email
            </label>
            <input
              className='appearance-none block w-full bg-gray-100 text-gray-900 border-2 border-gray-300 rounded py-3 px-4'
              type='email'
              placeholder='name@flowbite.com'
              name='email'
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'
              htmlFor='grid-zip'
            >
              Phone
            </label>
            <input
              className='appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded py-3 px-4'
              type='number'
              placeholder={9876543210}
              name='phone'
              value={user.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='-mx-3 md:flex mb-6'>
          <div className='md:w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Password
            </label>
            <input
              className='appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded py-3 px-4 mb-3'
              type={showPw ? 'text' : 'password'}
              placeholder={showPw ? 'password' : '********'}
              name='password'
              value={user.password}
              onChange={handleInputChange}
            />
            <p
              className='text-gray-900 text-xs italic select-none'
              onClick={() => setShowPw(!showPw)}
              style={{ cursor: 'pointer' }}
            >
              {showPw ? (
                <>
                  <i className='bx bxs-bullseye'></i>
                  {'Hide'}
                </>
              ) : (
                <>
                  <i className='bx bx-low-vision'></i>
                  {'Show'}
                </>
              )}{' '}
              password
            </p>
          </div>
          <div className='md:w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              User type
            </label>
            <select
              className='appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded py-3 px-4 mb-3'
              name='user_type'
              onChange={handleInputChange}
            >
              <option defaultValue={3}>User</option>
              <option value={2}> Admin</option>
              <option value={1}> SuperAdmin</option>
            </select>
          </div>
        </div>
        <div className='md:w-1/2 -mx-3 px-3'>
          <label
            className='block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            Mail send limit -{' '}
            <i className='text-red-500'>put 0 for Unlimited</i>
          </label>
          <input
            className='appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded py-3 px-4 mb-3'
            name='email_send_limit'
            type='number'
            value={user.email_send_limit}
            onChange={handleInputChange}
          />
        </div>
        <div className='-mx-3 md:flex mb-2 justify-end'>
          <div className='md:w-1/4 px-3 mb-6 md:mb-0'>
            <button
              type='reset'
              onClick={() => setUser(initialUser)}
              className='appearance-none block w-full bg-gray-500 text-white border border-gray-200  hover:bg-gray-700 rounded-md py-3 px-4 mb-3'
            >
              Reset
            </button>
          </div>
          <div className='md:w-1/4 px-3'>
            <button
              type='submit'
              className='appearance-none block w-full bg-blue-500 text-white border border-blue-100 hover:bg-blue-700 rounded-md py-3 px-4 mb-3'
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
