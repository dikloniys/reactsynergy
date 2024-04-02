import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './userActions';

const UserCard = () => {
  const selectedUserId = useSelector(state => state.user.selectedUserId);
  const selectedUser = useSelector(state => state.user.users.find(user => user.id === selectedUserId));
  const dispatch = useDispatch();

  const handleSave = (updatedUser) => {
    console.log("Updated user:", updatedUser);
  };

  if (!selectedUser) return <div>No user selected</div>;

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <p>Name: {selectedUser.name}</p>
        <p>Last Name: {selectedUser.lastName}</p>
        <p>Age: {selectedUser.age}</p>
        <p>Email: {selectedUser.email}</p>
      </div>
      <button onClick={() => dispatch(selectUser(null))}>Close</button>
    </div>
  );
};

export default UserCard;
