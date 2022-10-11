import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { memo } from 'react';
function Mail({ invoiceForm, send, user, setLoading }) {
  const [mailOptions, setMailOptions] = useState({
    to: '',
    subject: '',
    bcc: '',
    mail_text: '',
    mail_html: '',
  });
  //useEffect(() => {}, [send]);
  const sendMail = async (e) => {
    e.preventDefault();
    if (!Object.values(mailOptions).length > 2) toast.error('input required');
    setLoading(true);
    try {
      const { data } = await axios.post('/api/generate-invoice/makeinvoice', {
        data: invoiceForm,
        user,
        mailOptions,
      });
      console.log(data.data);
      toast.success(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.data);
      console.log(err.response.data.data);
    }
  };
  const handleFormInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMailOptions((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className='w-full' method='post' onSubmit={sendMail}>
      <div className='max-w-5xl mx-auto px-4 sm:px-4 lg:px-8 mb-12'>
        <div className='bg-white w-full shadow rounded p-8 sm:p-12'>
          <p className='text-3xl font-bold leading-7 text-center'>Send Mail</p>
          <div className='md:flex items-center mt-12'>
            <div className='w-full md:w-full flex flex-col'>
              <label className='font-semibold leading-none'>To</label>
              <input
                type='text'
                name='to'
                value={mailOptions.to}
                onChange={handleFormInputs}
                placeholder='put , for multiple mail'
                className='leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200'
              />
            </div>
          </div>
          <div className='md:flex items-center mt-4'>
            <div className='w-full flex flex-col'>
              <label className='font-semibold leading-none'>Subject</label>
              <input
                type='text'
                name='subject'
                value={mailOptions.subject}
                onChange={handleFormInputs}
                placeholder='put , for multiple mail'
                className='leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200'
              />
            </div>
          </div>
          <div className='w-full flex flex-col mt-4'>
            <label className='font-semibold leading-none'>Bcc</label>
            <textarea
              type='text'
              name='bcc'
              value={mailOptions.bcc}
              onChange={handleFormInputs}
              className='h-12 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200'
            />
          </div>
          <div>
            <div className='w-full flex flex-col mt-4'>
              <label className='font-semibold leading-none'>Mail Message</label>
              <textarea
                type='text'
                name='mail_text'
                value={mailOptions.mail_text}
                onChange={handleFormInputs}
                className='h-20 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200'
              />
            </div>
            <div className='w-full flex flex-col mt-4'>
              <label className='font-semibold leading-none'>Mail HTML</label>
              <textarea
                type='text'
                name='mail_html'
                value={mailOptions.mail_html}
                onChange={handleFormInputs}
                className='h-20 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200'
              />
            </div>
          </div>
          <div className='flex items-center justify-center w-full'>
            <button
              className='mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none'
              type='submit'
            >
              Send mail
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default memo(Mail);
