import { useSelector } from "react-redux";
import "./App.css";
import Home from "./features/Home/Home";
import Profile from "./features/Profile/Profile";
import Header from "./commons/Header";

function App() {
  const app = useSelector((state) => state.home);

  return (
    <div className="wrapper">
      <Header />
      {app.screen === "home" ? <Home /> : <Profile />}
    </div>
  );
}

export default App;
