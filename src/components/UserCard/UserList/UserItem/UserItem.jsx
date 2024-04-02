import React from "react";
import { useDispatch } from "react-redux";
import { selectUser } from "../../../../userActions";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleUserClick = () => {
    dispatch(selectUser(user.id));
  };

  return (
    <div className="user-item" onClick={handleUserClick}>
      <span>{user.name} {user.lastName}</span>
    </div>
  );
};

export default UserItem;
