import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../redux/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});
