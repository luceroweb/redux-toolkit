import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  comments: ["first comment"],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState: initialSate,
  reducers: {
    addComment(state, action) {
      const newComment = [...state.comments, action.payload];
      state.comments = newComment;
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
