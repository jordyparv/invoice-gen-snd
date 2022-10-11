import { useState, useContext,  } from 'react';
import ProfileIcon from './profile.png';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from '../../Store/context';
export default function Dashboard({ list }) {
  const [showProfile, setShow] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const user = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  return (
    <div>
      <main
        className='min-h-screen w-full bg-gray-100 text-gray-700'
        x-data='layout'
      >
        {/* header page */}
        <header className='flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2'>
          <div className='flex items-center space-x-2'>
            <button
              type='button'
              className='text-3xl'
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <i className='bx bx-menu' />
            </button>
            <div className='select-none text-xl'>Invoice Creator</div>
          </div>
          {/* button profile */}
          <div>
            <button
              type='button'
              onClick={() => setShow(!showProfile)}
              className='h-9 w-9 overflow-hidden rounded-full'
            >
              <img src={ProfileIcon} alt='plchldr.co' />
            </button>
            {/* dropdown profile */}
            {showProfile && (
              <div className='absolute z-50 right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md'>
                <div className='flex items-center space-x-2 p-2'>
                  <img
                    src={ProfileIcon}
                    alt='plchldr.co'
                    className='h-9 w-9 rounded-full'
                  />
                  <div className='font-medium'>
                    {user.username ?? 'username'}
                  </div>
                </div>
                <div className='flex flex-col space-y-3 p-2'>
                  <a href='#' className='transition hover:text-blue-600'>
                    My Profile
                  </a>
                  <a href='#' className='transition hover:text-blue-600'>
                    Edit Profile
                  </a>
                  <a href='#' className='transition hover:text-blue-600'>
                    Settings
                  </a>
                </div>
                <div className='p-2'>
                  <button
                    className='flex items-center space-x-2 transition hover:text-blue-600'
                    onClick={handleLogout}
                  >
                    <svg
                      className='h-4 w-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                      ></path>
                    </svg>
                    <div>Log Out</div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>
        <div className='flex'>
          {/* aside */}
          {showSideBar && (
            <aside
              className='flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2'
              style={{ height: '90.5vh' }}
            >
              <a
                href='#/'
                className='flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600'
              >
                <span className='text-2xl'>
                  <i className='bx bx-home' />
                </span>
                <span>Invoice</span>
              </a>
              {/* <a
                href='#/sent-invoice'
                className='flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600'
              >
                <span className='text-2xl'>
                  <i className='bx bx-message-alt-check'></i>
                </span>
                <span>Sent Invoices</span>
              </a>
              <a
                href='#/pending-invoice'
                className='flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600'
              >
                <span className='text-2xl'>
                  <i className='bx bx-stopwatch'></i>
                </span>
                <span>Pending</span>
              </a> */}
              {user.user_type < 3 ? (
                <>
                  <a
                    href='#/Users'
                    className='flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600'
                  >
                    <span className='text-2xl'>
                      <i className='bx bx-user'></i>
                    </span>
                    <span>Users</span>
                  </a>
                  <a
                    href='#/Registration'
                    className='flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600'
                  >
                    <span className='text-2xl'>
                      <i className='bx bx-user-plus'></i>
                    </span>
                    <span>Create Account</span>
                  </a>
                </>
              ) : null}
            </aside>
          )}

          <div className='flex justify-center w-full px-6 py-4'>
            <HashRouter>
              <Routes>
                {list &&
                  list.map((item) => (
                    <Route
                      key={item.link}
                      path={item.link}
                      element={item.component}
                    />
                  ))}
              </Routes>
            </HashRouter>
          </div>
        </div>
      </main>
    </div>
  );
}
