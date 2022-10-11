import React from 'react';
import { toast } from 'react-hot-toast';
export default function Item({
  name,
  login_id,
  user_type,
  email_send_limit,
  sent_count,
  _id,
}) {
  return (
    <tr className='hover:bg-gray-100'>
      <td className='p-4 w-4' key={login_id + user_type}>
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
      <td
        className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'
        key={name}
      >
        {name || 'name'}
      </td>
      <td
        className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'
        key={login_id}
      >
        {login_id || 'login_id'}
      </td>
      <td
        className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'
        key={sent_count || sent_count + Math.random() + 1}
      >
        {sent_count || 'Nil'}
      </td>
      <td
        className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'
        key={email_send_limit}
      >
        {email_send_limit == 0 ? 'unlimited' : email_send_limit ?? 'Nil'}
      </td>
      <td
        className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'
        key={user_type}
      >
        {user_type < 3
          ? user_type === 1
            ? 'Super Admin'
            : user_type === 2
            ? 'Admin'
            : 'user'
          : 'user' || 'user_type'}
      </td>
      <td
        className='py-4 px-6 text-sm font-medium text-right whitespace-nowrap '
        key={_id}
      >
        <a
          href='#'
          className='text-gray-400 cursor-not-allowed disabled '
          onClick={(e) => {
            e.preventDefault();
            toast('coming soon');
          }}
        >
          Edit
        </a>
      </td>
    </tr>
  );
}
