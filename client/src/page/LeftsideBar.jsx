import React, { useContext } from "react";
import classes from "../style/leftside.module.css";
import logo from "../images/logos/logo-no-background.png";
import { VscAccount } from "react-icons/vsc";
import { AppState } from "../App";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import { CiSaveDown2 } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { LuImagePlus } from "react-icons/lu";
const LeftsideBar = () => {
  const { user } = useContext(AppState);
  return (
    <nav className={classes.leftsidebar}>
      <div className={classes.leftlogo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.pp}>
        {user.imageUrl ? (
          <img src={user.imageUrl} alt="" />
        ) : (
          <VscAccount size={40} />
        )}
        <h3>{user.username}</h3>
      </div>
      <div className={classes.list}>
        <ul>
          <Link to="/" className={classes.nounderline}>
            <li>
              {" "}
              <FiHome size={30} />
              <h4>Home</h4>
            </li>
          </Link>

          <Link to="#" className={classes.nounderline}>
            <li>
              {" "}
              <GoPeople size={30} />
              <h4>People</h4>
            </li>
          </Link>

          <Link to="#" className={classes.nounderline}>
            <li>
              {""}
              <CiSaveDown2 size={30} />
              <h4>Saved</h4>
            </li>
          </Link>

          <Link to="#" className={classes.nounderline}>
            <li>
              {""}
              <LiaComments size={30} />
              <h4>Comments</h4>
            </li>
          </Link>
          <Link to="#" className={classes.nounderline}>
            <li>
              {""}
              <LuImagePlus size={30} />
              <h4>Create Posts</h4>
            </li>
          </Link>
          <Link to="/Login">
            <button> Logout</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default LeftsideBar;
