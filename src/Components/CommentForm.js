import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalVisible } from "../features/Home/homeSlice";
import { addComment } from "../features/Profile/profileSlice";

function CommentForm() {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addComment(newComment));
    dispatch(setModalVisible(false));
  };

  return (
    <>
      <div>
        <strong>Comment Form</strong>
      </div>
      <textarea
        placeholder="add your comment"
        value={newComment}
        onChange={(text) => setNewComment(text.target.value)}
      ></textarea>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}

export default CommentForm;
