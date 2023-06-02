//slice avec deux actions setUser et setLogout
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infos: {},
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.infos = action.payload; 
      state.isLogged = true;
    },
    setLogout: (state) => {
      state.infos = {};
      state.isLogged = false;
    },
  },
});

export const { setUser, setLogout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;