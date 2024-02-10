import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './users.css'

const Users = () => {

  const users = useLoaderData();
  return (
    <div>
      <h1>This is Users Page</h1>
      <p>Total Users:{users.length}</p>
          <div className='usersStyle'>
              {
                  users.map((user,index) => <User key={index} user={user}></User>)
              }
      </div>
    </div>
  )
};

export default Users;
