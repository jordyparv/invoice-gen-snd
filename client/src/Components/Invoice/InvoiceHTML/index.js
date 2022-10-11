import React, { useState } from 'react';
import Popup from '../../Popup';
import InvoicePreview from './InvoicePreview';

export default function InvoiceHTML() {
  const [show, setShow] = useState(false);
  const [htmlCode, setHtmlCode] = useState('');
  return (
    <>
      <div className='w-full md:w-1/2 px-3 mb-6'>
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-gray-90'
        >
          Enter html code
        </label>
        <textarea
          id='message'
          rows={4}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Your <code />'
          defaultValue={''}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div className='flex gap-2 mt-2 float-right'>
          <button
            className='px-4 mb-2 py-2 self-end bg-transparent outline-none border-2  border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200'
            onClick={() => setShow(true)}
          >
            Preview
          </button>

          <button className='px-4 mb-2 py-2 self-end bg-transparent outline-none border-2  border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200'>
            Submit
          </button>
        </div>
        {show && (
          <Popup setShow={setShow}>
            <InvoicePreview fetch={show} htmlCode={htmlCode} />
          </Popup>
        )}
      </div>
    </>
  );
}
