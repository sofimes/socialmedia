import React, { useState } from "react";
import "../style/register.module.css";
import { useRef } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "../style/register.module.css";
const Register = () => {
  const navigate = useNavigate();
  const userNameDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [inputStyle, setInputStyle] = useState({});
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const firstnameValue = firstNameDom.current.value;
    const lastnameValue = lastNameDom.current.value;
    const usernameValue = userNameDom.current.value;
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (
      !emailValue ||
      !usernameValue ||
      !passwordValue ||
      !lastnameValue ||
      !firstnameValue
    ) {
      setErrorMessage("Please fill all the fields");
      return;
    }

    try {
      await axios.post("/users/register", {
        firstname: firstnameValue,
        lastname: lastnameValue,
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
      });
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || "something went wrong!");
      setInputStyle({ borderBottom: "2px solid red" });
      setPasswordValue("");
      setFirstNameValue("");
      setLastNameValue("");
      setUserNameValue("");
      setEmailValue("");
    }
  }
  const handleFocus = () => {
    setInputStyle({});
    setErrorMessage("");
  };
  return (
    <section>
      <div className={classes.wrapper}>
        <form action="" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className={classes.inputfield} style={inputStyle}>
            <input
              ref={firstNameDom}
              type="text"
              value={firstNameValue}
              onChange={(e) => setFirstNameValue(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <label>First name</label>
          </div>

          <div className={classes.inputfield} style={inputStyle}>
            <input
              ref={lastNameDom}
              type="text"
              value={lastNameValue}
              onChange={(e) => {
                setLastNameValue(e.target.value);
              }}
              onFocus={handleFocus}
              required
            />
            <label>Last name</label>
          </div>

          <div className={classes.inputfield} style={inputStyle}>
            <input
              ref={userNameDom}
              type="text"
              value={userNameValue}
              onChange={(e) => setUserNameValue(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <label>User name</label>
          </div>
          <div className={classes.inputfield} style={inputStyle}>
            <input
              ref={emailDom}
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <label>Email</label>
          </div>
          <div className={classes.inputfield} style={inputStyle}>
            <input
              ref={passwordDom}
              type="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <label>Password</label>
          </div>
          {errorMessage && (
            <div className={classes.errorMessage}>{errorMessage}</div>
          )}
          <button type="submit" className={classes.register}>
            {" "}
            Register
          </button>
          <div className={classes.Login}>
            <p>
              Do have an account?
              <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
