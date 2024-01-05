import Cookies from "universal-cookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {} };
const cookies = new Cookies(null, { path: "/" });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      cookies.remove("jwt");
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
