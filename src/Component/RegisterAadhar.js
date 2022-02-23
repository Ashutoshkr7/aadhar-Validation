import React, { useState } from "react";
// import document from "./images/1948_Top_Secret_USAF_UFO_extraterrestrial_document.png";
import Aadhar_Logo from "./images/1200px-Aadhaar_Logo.svg.png";
import "./Style/styleRegisterAadhar.css";

const RegisterAadhar = (props) => {
  const [username, setusername] = useState("");
  const [eusername, seteusername] = useState("");
  const [ucolor, setucolor] = useState("Black");

  const [otp, setotp] = useState("");
  const [eotp, seteotp] = useState("");
  const [ocolor, setocolor] = useState("Black");

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
      <div class="body-content_Aadhar">
        <div class="container_Aadhar">
          <div>
            <h2>Register Aadhar</h2>
          </div>
          <div class="Aadhar_Logo">
            <img src={Aadhar_Logo} alt="Company_Logo" />
          </div>
          <div class="login-form">
            <div class="form-item">
              <input
                type="number"
                placeholder="Enter Aadhar No."
                style={{ borderColor: ucolor }}
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </div>
            <p class="error_email">{eusername}</p>
            {/* <button onClick={aadharVerify}>Verify</button> */}
            <div class="form-btns">
              <button type="submit" onClick={aadharVerify}>
                Verify
              </button>
            </div>
            <div class="checkBox">
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              I agree to sign this <u>KYC Document</u> to get it started.
            </div>
            <div class="form-item">
              <input
                type="number"
                placeholder="Enter OTP"
                style={{ borderColor: ocolor }}
                value={otp}
                onChange={(e) => {
                  setotp(e.target.value);
                }}
              />
            </div>
            <p class="error_email">{eotp}</p>
            <div class="form-btns">
              <button type="submit" onClick={verify}>
                Submit
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

export default RegisterAadhar;
