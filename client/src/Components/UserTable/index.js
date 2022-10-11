import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../Search';
import Head from './Head';
import Item from './Item';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function UserTable() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/api/acc/getusers');
        setUsers(data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchUser();
  }, []);
  
  return (
    <>
      <div className='w-full  flex flex-col'>
        <h2 className='text-xl font-extrabold  text-indigo-500 sm:text-3xl md:text-5xl mb-4'>
          Registered Users
        </h2>

        <button
          className='px-4 mb-2 py-2 self-end bg-transparent outline-none border-2  border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200'
          onClick={() => navigate('/registration')}
        >
          Add user
        </button>
        <Search setUsers={setUsers} />
        <div className='flex flex-col'>
          <div className='overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='inline-block min-w-full align-middle'>
              <div className='overflow-hidden '>
                <table className='min-w-full divide-y divide-gray-200 table-fixed '>
                  <Head
                    list={[
                      'name',
                      'email',
                      'sent count',
                      'email send limit',
                      'user type',
                    ]}
                  />
                  <tbody className='bg-white divide-y divide-gray-200 '>
                    {users &&
                      users.map((user) => (
                        <Item
                          key={user._id}
                          name={user.username}
                          login_id={user.email}
                          user_type={user.user_type}
                          sent_count={user.sent_count}
                          email_send_limit={user.email_send_limit}
                          _id={user._id}
                        />
                      ))}
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
