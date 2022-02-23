import React, { useState } from "react";
// import document from "./images/1948_Top_Secret_USAF_UFO_extraterrestrial_document.png";
import Aadhar_Logo from "./images/1200px-Aadhaar_Logo.svg.png";

const RegisterAadhar = (props) => {
  const [username, setusername] = useState("");
  const [eusername, seteusername] = useState("");
  const [ucolor, setucolor] = useState("");

  const [otp, setotp] = useState("");
  const [eotp, seteotp] = useState("");
  const [ocolor, setocolor] = useState("");

  const [checked, setChecked] = useState(true);

  function aadharVerify() {
    if (!isNaN(username) && username.length === 12) {
      seteusername("Aadhar Number Verified");
      setucolor("green");
      return 1;
    } else {
      seteusername("Aadhar Number must be 12 digits long");
      setucolor("red");
      return 0;
    }
  }

  function otpVerify() {
    if (!isNaN(otp) && otp.length === 6) {
      seteotp("");
      setocolor("green");
      return 1;
    } else {
      seteotp("OTP must be 6 digits long");
      setocolor("red");
      return 0;
    }
  }

  function verify() {
    if (checked === true) {
      let x = aadharVerify();
      let y = otpVerify();
      if (x && y) props.history.push("/success");
    }
  }

  return (
    <>
      <div
        style={{
          margin: "auto",
          marginLeft: "300px",
        }}
      >
        <div>
          <div>
            <h2>Register Aadhar</h2>
          </div>
          <div>
            <img src={Aadhar_Logo} alt="document" width="50" height="50" />
            {/* <img src={Aadhar_Logo} alt="Logo" /> */}
            {/* <span>Enter Email: </span> */}
            {/* <input type="text" id="userEmail" /> */}
            <input
              type="number"
              placeholder="Enter Aadhar No."
              style={{ borderColor: ucolor }}
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <p>{eusername}</p>
            <button onClick={aadharVerify}>Verify</button>
          </div>
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          I agree to sign this <u>KYC document</u> to get it started.
          {/* <input type="checkbox" id="aadhar" />I agree to sign this
          <u>KYC document</u> to get it started. */}
        </div>{" "}
        <br />
        <div>
          <input
            type="number"
            placeholder="Enter OTP"
            style={{ borderColor: ocolor }}
            value={otp}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          />
          <p>{eotp}</p>
          {/* <input type="text" id="otp" /> */}
          <button onClick={verify}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default RegisterAadhar;
