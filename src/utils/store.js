import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/homeSlice";
import profileReducer from "../features/Profile/profileSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    profile: profileReducer,
  },
});

export default store;
