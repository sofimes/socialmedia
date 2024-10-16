import React, { useContext, useState } from "react";
import classes from "../style/top.module.css";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import logo from "../images/logos/logo-no-background.png";
import { AppState } from "../App";
import { FiHome } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { CiSaveDown2 } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { LuImagePlus } from "react-icons/lu";
const Topbar = ({ hideHeader }) => {
  function logout() {
    localStorage.clear();
  }
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleList = () => {
    setIsListVisible((prevState) => !prevState);
  };
  const { user } = useContext(AppState);
  return (
    <>
      <section className={classes.Header}>
        <div className={classes.Header__container}>
          <div className={classes.logo__container}>
            <BsList size={30} onClick={toggleList} className={classes.list} />
          </div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div className={classes.links}>
            <div className={classes.link__containers}>
              <ul>
                <li>{/* <Link to={"/"}>Home</Link> */}</li>
                <li>{/* <Link to="#">How it Works</Link> */}</li>
              </ul>
            </div>
            <Link to="/Login">
              <button
                onClick={logout}
                className={hideHeader ? classes.hidden : ""}
              >
                {" "}
                Logout
              </button>
            </Link>
            <div className={classes.pp}>
              {user.imageUrl ? (
                <img src={user.imageUrl} alt="" />
              ) : (
                <VscAccount size={30} />
              )}
              <h6>{user.username}</h6>
            </div>
          </div>
        </div>
      </section>
      <ul
        id="myList"
        className={isListVisible ? classes.listed : classes.hidden}
      >
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
      </ul>
    </>
  );
};

export default Topbar;
