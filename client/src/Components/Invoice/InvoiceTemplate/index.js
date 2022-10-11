import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default function InvoiceTemplate() {
  const [currLogo, setCurrent] = useState('');
  useEffect(() => {
    const fetchInvoiceTemplate = async () => {
      try {
        const { data } = await axios.get(
          '/api/invoice-template/getinvoice-template'
        );

        setCurrent(data.template);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInvoiceTemplate();
  }, []);
  const [file, setFile] = useState('');

  const handleLogo = (e) => {
    setFile(e.target.files[0]);
  };
  const updateLogo = async () => {
    const buffer = await getBase64(file);

    try {
      const { data } = await axios.put(
        '/api/invoice-template/update-invoice-template',
        {
          data: { name: file.name, base64: buffer.toString() },
          id: currLogo ? currLogo._id : '',
        }
      );
      toast.success(data.data);
    } catch (error) {
      toast.success(error.response.data.data);
      console.log(error.message);
    }
  };

  return (
    <div className='max-w-2xl mx-auto'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm '>
        <img
          className='w-36 h-36 rounded-full object-cover mx-auto mt-2'
          src={currLogo ? currLogo.base64 : ''}
          alt=''
        />

        <main className='flex my-2 items-center justify-center bg-gray-100 font-sans mx-2'>
          <label
            htmlFor='dropzone-file'
            className='mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-blue-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
              />
            </svg>
            <h2 className='mt-4 text-xl font-medium text-gray-700 tracking-wide'>
              Image File
            </h2>
            <p className='mt-2 text-gray-500 tracking-wide'>
              Upload or darg &amp; drop your file PNG, JPG.{' '}
            </p>
            <input
              id='dropzone-file'
              type='file'
              className='hidden'
              name='logo'
              accept='image/*'
              onChange={handleLogo}
            />
          </label>
        </main>

        <div className='p-5'>
          <p className='text-indigo-600 underline'>{file.name}</p>
          <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2'>
            Change invoice Logo
          </h5>

          <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={updateLogo}
          >
            Upload
            <svg
              className='mr-1 ml-2 h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
