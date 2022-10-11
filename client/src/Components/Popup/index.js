import React from 'react';
import toast from 'react-hot-toast';
export default function Popup({ setShow, children }) {
  return (
    <div className='absolute left-0 top-0 bottom-0  right-0 w-screen h-screen bg-black/[0.4] z-50 transition-all overflow-scroll'>
      <div className='w-1/2 h-full flex flex-col mx-auto bg-white rounded-lg my-4 border'>
        <button
          onClick={() => {
            setShow(false);
            toast.success('Closed');
          }}
          className='btn bg-indigo-500 p-2 rounded text-white m-2 self-end'
        >
          Close
        </button>
        <div className='overflow-y-auto flex  flex-col justify-center items-center h-full'>
          {children}
        </div>
      </div>
    </div>
  );
}
