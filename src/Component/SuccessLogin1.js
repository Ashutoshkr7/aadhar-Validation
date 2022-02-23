import React from "react";
import document from "./images/1948_Top_Secret_USAF_UFO_extraterrestrial_document.png";

const SuccessLogin = () => {
  return (
    <div
      style={{
        margin: "auto",
        marginLeft: "300px",
      }}
    >
      <h1>Signing...</h1>
      {/* <br /> */}
      Mutual Non-Disclosure Agreement <br />
      Aadhar Verified successfully
      <br />
      <img width="300" height="300" src={document} alt="document" />
      <br />
      <button>Request OTP to Sign</button>
    </div>
  );
};

export default SuccessLogin;
