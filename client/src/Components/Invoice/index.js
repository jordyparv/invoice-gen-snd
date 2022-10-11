import React, { useState } from 'react';
//import InvoiceForm from './InvoiceForm';
import InvoiceForm from './InvoiceForm/Invoice';
import InvoiceHTML from './InvoiceTemplate';
//import InvoicePreview from './InvoicePreview';
export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full flex flex-col items-center mt-4 rounded'>
      <ul id='tabs' className='inline-flex px-1 pt-2'>
        <li
          className={`px-4 py-2 font-semibold text-gray-800 border-b-2 transition-all ${
            !toggle ? ' bg-white border-indigo-600' : 'border-indigo-100'
          } rounded-t outline-none`}
          onClick={() => setToggle(false)}
        >
          <button>Create Invoice</button>
        </li>
        <li
          className={`px-4 py-2 font-semibold text-gray-800 border-b-2 transition-all ${
            toggle ? 'bg-white border-indigo-600' : 'border-indigo-100'
          } rounded-t outline-none`}
          //  onClick={() => setToggle(true)}
        >
          <button>HTML</button>
        </li>
      </ul>
      {!toggle ? <InvoiceForm /> : <InvoiceHTML />}
    </div>
  );
}
