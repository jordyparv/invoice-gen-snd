import React, { useState } from 'react';

export default function InvoiceForm() {
  const [file, setFile] = useState('');

  return (
    <div>
      <div className='flex justify-center my-2 mx-4 md:mx-0'>
        <form className='w-full max-w-xl bg-white rounded-lg shadow-md p-6'>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-full px-3 mb-6'>
              <div>
                <label
                  htmlFor='upload'
                  className='flex flex-col gap-2 cursor-pointer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-10 fill-white stroke-indigo-500'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  <span className='text-gray-600 font-medium'>
                    Logo upload{' '}
                    {file && (
                      <span className='text-indigo-500 underline cursor-pointer'>
                        {file.name}
                      </span>
                    )}
                  </span>
                </label>
                <input
                  id='upload'
                  type='file'
                  className='hidden'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
            <h5 className='text-xl font-bold text-slate-500 w-full'>
              Item Details
            </h5>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                Company name
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                Address
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                Zip
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                City
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <h5 className='text-xl font-bold text-slate-500 w-full'>
              Item Details
            </h5>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                City
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                City
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                City
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                City
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <h5 className='text-xl font-bold text-slate-500 w-full'>
              Item Details
            </h5>{' '}
            <div className='w-1/2 md:w-1/2 px-3 mb-6'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='Password'
              >
                City
              </label>
              <input
                className='appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none'
                type='text'
                required
              />
            </div>
            <div className='w-full flex items-center justify-between px-3 mb-3 '>
              <label htmlFor='remember' className='flex items-center w-1/2'>
                <input type='checkbox' className='mr-1 bg-white shadow' />
                <span className='text-sm text-gray-700 pt-1 select-none'>
                  Send me a copy
                </span>
              </label>
            </div>
            <div className='w-full md:w-full px-3 mb-6 flex'>
              <button className='appearance-none block w-full bg-gray-400 text-gray-100 font-bold border border-gray-200 rounded py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500'>
                PREVIEW
              </button>
              <button className='appearance-none block w-full bg-indigo-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500'>
                SEND INVOICE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
