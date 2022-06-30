import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  list: ["first comment"],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState: initialSate,
  reducers: {
    addComment(state, action) {
      let addedComment = [...state.list, action.payload];
      state.list = addedComment;
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
