import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import langReducer from "./slices/langSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, lang: langReducer, auth: authReducer },
});
