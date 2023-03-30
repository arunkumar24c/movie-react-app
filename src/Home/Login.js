import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            
          />
        </div>
      </div>
      <div className="containers1">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            className="input-form"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-form"
          />
          <button className="loginButton">Sign In</button>
          <span className="spans">
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b className="bold">Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
