import React, { useRef, useState } from "react";
import classes from "../style/login.module.css";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [inputStyle, setInputStyle] = useState({});
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  async function loginHandler(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;
    if (!emailValue || !passwordValue) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    try {
      const { data } = await axios.post("users/login", {
        email: emailValue,
        password: passwordValue,
      });

      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || "An error occurred");
      setInputStyle({ borderBottom: "2px solid red" });
      setEmailValue("");
      setPasswordValue("");
    }
  }
  const handleFocus = () => {
    setInputStyle({});
    setErrorMessage("");
  };
  return (
    <section>
      <div className={classes.wrapper}>
        <form action="#" onSubmit={loginHandler}>
          <h2>Login</h2>
          <div className={classes.inputfield} style={inputStyle}>
            <input
              type="text"
              ref={emailDom}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <label>Email</label>
          </div>
          <div className={classes.inputfield} style={inputStyle}>
            <input
              type="password"
              ref={passwordDom}
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
          <div className={classes.forget}>
            <label for="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <Link to="#">Forgot password?</Link>
          </div>
          <button type="submit">Log In</button>
          <div className={classes.register}>
            <p>
              Don't have an account?
              <Link to="/Register">Register</Link>
            </p>
          </div>
        </form>
      </div>
      ;
    </section>
  );
};
export default Login;
