import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  list: ["first comment"],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialSate,
  reducers: {
    addComment(state, action) {
      let addedComment = [...state.list, action.payload];
      state.list = addedComment;
    },
  },
});

export const { addComment } = profileSlice.actions;

export default profileSlice.reducer;
