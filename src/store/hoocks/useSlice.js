import { createSlice } from '@reduxjs/toolkit';
import { users } from "../../constant"

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
      console.log(state.users);
    }
  }
});

export const { selectUser, ChangeUser, saveUser } = userSlice.actions;

export default userSlice.reducer;
  