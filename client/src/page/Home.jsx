import { useContext } from "react";
import { AppState } from "../App";
import classes from "../style/home.module.css";
import LeftsideBar from "./LeftsideBar";
import Topbar from "./Topbar";
import RightsideBar from "./RightsideBar";
import CreatePost from "./CreatePost";
const Home = () => {
  const { user } = useContext(AppState);
  return (
    <>
      <Topbar />
      <div className={classes.dashboard}>
        <LeftsideBar />
        <CreatePost />
        <RightsideBar />
      </div>
    </>
  );
};

export default Home;
