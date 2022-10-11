import React from 'react';

export default function Head({ list }) {
  return (
    <thead className='bg-gray-800 '>
      <tr>
        <th scope='col' className='p-4'>
          <div className='flex items-center'>
            <input
              id='checkbox-all'
              type='checkbox'
              className='w-4 h-4 text-indigo-500  bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2 '
            />
            <label htmlFor='checkbox-all' className='sr-only'>
              checkbox
            </label>
          </div>
        </th>
        {list &&
          list.map((item) => (
            <th
              key={item}
              scope='col'
              className='py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase'
            >
              {item}
            </th>
          ))}

        <th scope='col' className='p-4'>
          <span className='sr-only'>Edit</span>
        </th>
      </tr>
    </thead>
  );
}
