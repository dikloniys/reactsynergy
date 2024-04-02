import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, selectUser } from '../../../userActions';

const UserList = () => {
  const userState = useSelector(state => state.user); 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUsers = async () => {
      const generateUsers = () => {
        const users = [];
        for (let i = 1; i <= 1000000; i++) {
          users.push({
            id: i,
            name: `John${i}`,
            lastName: `Doe${i}`,
            age: 30,
            email: "john@example.com"
          });
        }
        return users;
      };
      setUsers(generateUsers());
      setLoading(false);
    };

    fetchUsers();
  }, [dispatch]);

  const handleUserClick = (userId) => {
    dispatch(selectUser(userId));
  };

  if (loading) return <div>Loading...</div>; 
  if (!userState || !userState.users || userState.users.length === 0) return <div>No users found</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userState.users.map(user => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
