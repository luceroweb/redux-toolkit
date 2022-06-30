import { useDispatch } from "react-redux";
import { setScreen } from "../Utils/appSlice";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>Profile Screen</div>
      <button onClick={() => dispatch(setScreen("home"))}>Home</button>
    </>
  );
};

export default Profile;
