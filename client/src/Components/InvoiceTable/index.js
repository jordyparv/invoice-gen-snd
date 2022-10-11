import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../Search';
export default function InvoiceTable({ title }) {
  const navigate = useNavigate();
  return (
    <>
      <div className='w-full  flex flex-col'>
        <h2 className='text-xl font-extrabold  text-indigo-500 sm:text-3xl md:text-5xl mb-4'>
          {title}
        </h2>

        <button
          className='px-4 mb-2 py-2 self-end bg-transparent outline-none border-2  border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200'
          onClick={() => navigate('/')}
        >
          Create Invoice
        </button>
        <Search />
        <div className='flex flex-col'>
          <div className='overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='inline-block min-w-full align-middle'>
              <div className='overflow-hidden '>
                <table className='min-w-full divide-y divide-gray-200 table-fixed '>
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
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase'
                      >
                        Product Name
                      </th>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase '
                      >
                        Category
                      </th>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase'
                      >
                        Price
                      </th>
                      <th scope='col' className='p-4'>
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                    <tr className='hover:bg-gray-100 '>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-table-1'
                            type='checkbox'
                            className='w-4 h-4 text-indigo-500  bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2'
                          />
                          <label htmlFor='checkbox-table-1' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                        Apple Imac 27"
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                        Desktop PC
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                        $1999
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-right whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-indigo-500  hover:underline'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 '>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-table-2'
                            type='checkbox'
                            className='w-4 h-4 text-indigo-500  bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2  '
                          />
                          <label htmlFor='checkbox-table-2' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                        Apple MacBook Pro 17"
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap'>
                        Laptop
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                        $2999
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-right whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-indigo-500   hover:underline'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100'>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-table-3'
                            type='checkbox'
                            className='w-4 h-4 text-indigo-500  bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2'
                          />
                          <label htmlFor='checkbox-table-3' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                        iPhone 13 Pro
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap'>
                        Phone
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>
                        $999
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-right whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-indigo-500   hover:underline'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100'>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-table-4'
                            type='checkbox'
                            className='w-4 h-4 text-indigo-500  bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2  '
                          />
                          <label htmlFor='checkbox-table-4' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap '>
                        Apple Magic Mouse 2
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap '>
                        Accessories
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap '>
                        $99
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-right whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-indigo-500  hover:underline'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100'>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-table-5'
                            type='checkbox'
                            className='w-4 h-4 text-indigo-500  bg-gray-100 rounded border-gray-300 focus:ring-blue-500  ring-offset-gray-800 focus:ring-2  '
                          />
                          <label htmlFor='checkbox-table-5' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap '>
                        Apple Watch Series 7
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap '>
                        Accessories
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap '>
                        $599
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-right whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-indigo-500   hover:underline'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
