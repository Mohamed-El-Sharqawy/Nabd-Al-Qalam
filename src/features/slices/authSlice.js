import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {} };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, _) => {
      localStorage.removeItem("jwt");
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
