import React from "react";
import document from "./images/1948_Top_Secret_USAF_UFO_extraterrestrial_document.png";
import "./Style/styleSuccessLogin.css";
import logo from "./images/digio_logo.jpg";

const SuccessLogin = () => {
  return (
    <>
      <div class="body-content">
        <div class="container_Success">
          <div class="Company_Logo">
            <img src={logo} alt="Company_Logo" />
          </div>
          <div>
            <h4 class="signing">Signing...</h4>
            Mutual Non-Disclosure Agreement
            <br />
            <p class="verified">Aadhar Verified successfully</p>
          </div>
          <div class="login-form">
            <div class="form-item">
              <img width="340" height="340" src={document} alt="document" />
            </div>
          </div>
          <p class="website">
            Powered by <span style={{ color: "blue" }}>www.digio.in</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccessLogin;
