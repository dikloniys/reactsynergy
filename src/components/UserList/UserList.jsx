import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../store/hoocks/useSlice';
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const UserList = () => {
  const userState = useSelector(state => state.userReducer.users); 
  const selectedUserState = useSelector(state => state.userReducer.selectedUser)
  const dispatch = useDispatch();
  if (!userState || userState.length === 0) return <div>No users found</div>;

  return (
    <div className="user-list-container">
      <ul className="user-list">
        {userState.map(user => (
          <li style={{color: `${selectedUserState === user.id ? "red" : "black"}`}} key={user.id} onClick={() => dispatch(selectUser(user))}>
            {user.name} {user.lastName}
          </li>
        ))}
      </ul>
      <UserCard />
    </div>
  );
};

export default UserList;