import React, { useState } from "react";
import logo from "./images/digio_logo.jpg";
import "./Style/styleLogin.css";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [ecolor, setecolor] = useState("black");
  const [eemail, seteemail] = useState("");
  const validateEmail = () => {
    if (email.length >= 5 && email.includes(".") && email.includes("@")) {
      seteemail("");
      setecolor("green");
      props.history.push("/register");
    } else {
      seteemail("Please enter a valid email id");
      setecolor("red");
    }
  };

  return (
    <>
      <div class="body-content">
        <div class="container">
          <div class="Company_Logo">
            <img src={logo} alt="Company_Logo" />
          </div>
          <div class="login-form">
            <div class="form-item">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder=" Enter Email"
                style={{ borderColor: ecolor }}
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <p class="error_email">{eemail}</p>
            <p>
              By continuing, I confirm to the terms and services and privacy
              policy of <span style={{ color: "blue" }}>Digio.in</span>
            </p>
            {/* <br /> */}
            <div class="form-btns">
              <button type="submit" onClick={validateEmail}>
                Continue
              </button>
            </div>
            <p class="website">
              Powered by <span style={{ color: "blue" }}>www.digio.in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
