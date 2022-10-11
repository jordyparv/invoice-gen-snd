import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { List } from './consts';
import { useEffect, useState } from 'react';
import { UserContext } from './Store/context';
import axios from 'axios';
function App(props) {
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem('authToken'),
          },
        };
        const { data } = await axios.get('/api/private/', config);
        setUser(data.data);
      } catch (error) {
        localStorage.removeItem('authToken');
        console.log(error.response.data.data);
        setUser('');
      }
    };
    fetchUser();
  }, []);

  return localStorage.getItem('authToken') ? (
    <UserContext.Provider value={user}>
      <Dashboard list={List} />
    </UserContext.Provider>
  ) : (
    <Login />
  );
}

export default App;
