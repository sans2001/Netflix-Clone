import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    login:(state, action) => {
      state.user=action.payload;
    },
    signOut:(state)=> {
      state.user=null;
    },
  },  
});

export const { login,signOut } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
