import React, { useState } from "react";
// import validator from "validator"; //for verifying email

const Login = (props) => {
  const [email, setemail] = useState("");
  const [ecolor, setecolor] = useState("");
  const [eemail, seteemail] = useState("");
  const validateEmail = () => {
    if (email.includes(".") && email.includes("@")) {
      seteemail("");
      setecolor("green");
      props.history.push("/register");
    } else {
      seteemail("Please enter valid email id");
      setecolor("red");
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        marginLeft: "300px",
      }}
    >
      <h2>Proceed with your email address</h2>
      <input
        type="text"
        placeholder="email"
        className="form-control"
        style={{ borderColor: ecolor }}
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <p>{eemail}</p>
      By continuing, I confirm to the terms and services and privacy policy of{" "}
      <span style={{ color: "blue" }}>Digio.in</span>
      <br />
      <button onClick={validateEmail}>Continue</button>
    </div>
  );
};

export default Login;
