import { useDispatch, useSelector } from "react-redux";
import { setModalVisible } from "../Home/homeSlice";
import Modal from "../../Components/Modal";
import CommentForm from "../../Components/CommentForm";

const Profile = () => {
  const app = useSelector((state) => state.app);
  const comments = useSelector((state) => state.comments.list);
  const dispatch = useDispatch();

  const listComments = comments.map((comment, index) => (
    <p key={index}>{comment}</p>
  ));

  return (
    <>
      <h1>Profile Screen</h1>
      <div>
        <img
          src={require("../../images/profile.jpg")}
          alt=""
          style={{ width: 200 }}
        />
      </div>
      <div>{listComments}</div>
      <button onClick={() => dispatch(setModalVisible(true))}>
        Add Comment
      </button>
      {app.modalVisible && (
        <Modal>
          <CommentForm />
        </Modal>
      )}
    </>
  );
};

export default Profile;
