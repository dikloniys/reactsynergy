import { createSlice } from '@reduxjs/toolkit';
// import { jest } from '@jest/globals'
import { users } from "../../constant"

// jest.mock("../../constant")

// const users = async () => {
//     await api
//     }

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    
    users,
    selectedUser: null
  },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    ChangeUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    saveUser: (state, action) => {
      state.users = action.payload;
     
    }
  }
});

export const { selectUser, ChangeUser, saveUser } = userSlice.actions;

export default userSlice.reducer;
  