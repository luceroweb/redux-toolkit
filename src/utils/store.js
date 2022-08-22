import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/homeSlice";
import profileReducer from "../features/Profile/profileSlice";

const store = configureStore({
  reducer: {
    app: homeReducer,
    comments: profileReducer,
  },
});

export default store;
