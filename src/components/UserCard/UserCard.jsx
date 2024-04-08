import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, ChangeUser, saveUser } from '../../store/hoocks/useSlice';
import "./UserCard.css"

const UserCard = () => {
  const userState = useSelector(state => state.userReducer.users); 
  const selectedUserState = useSelector(state => state.userReducer.selectedUser)
  const dispatch = useDispatch();
    const handleChange = (e) => {
      const { name, value } = e.target;
      const updatedUser = {
        ...selectedUserState,
        [name]: value
      };
      dispatch(ChangeUser(updatedUser));
    };
  
    const handleSave = () => {
      console.log("Updated user:", selectedUserState);
      userState.find((item) => item.id === selectedUserState.id);
      
      dispatch(saveUser(userState));
      dispatch(selectUser(null))
    };

  if (selectedUserState == null) return <div></div>;

    return (
      <div className="user-card">
        <h2>User Details</h2>
        <div>
          <p>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={selectedUserState.name}
              onChange={handleChange}
            />
          </p>
          <p>
            Last Name:{" "}
            <input
              type="text"
              name="lastName"
              value={selectedUserState.lastName}
              onChange={handleChange}
            />
          </p>
          <p>
            Age:{" "}
            <input
              type="number"
              name="age"
              value={selectedUserState.age}
              onChange={handleChange}
            />
          </p>
          <p>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={selectedUserState.email}
              onChange={handleChange}
            />
          </p>
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => dispatch(selectUser(null))}>Close</button>
      </div>
    );
  };
  
  export default UserCard;