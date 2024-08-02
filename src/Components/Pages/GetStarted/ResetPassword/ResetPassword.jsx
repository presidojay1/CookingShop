import React, { useRef } from "react";
import GradientImage from "../SignUp/Assets/Gradient.png";
import backarrow from "../SignUp/Assets/back.svg";
import email from "../SignUp/Assets/email-icon.svg";
import phone from "../SignUp/Assets/smart-phone.svg";
import eye from "../SignUp/Assets/view-off.svg";
import "./ResetPassword.css";
const ResetPassword = () => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <section className="SignUp-Section">
      <section className="SignUp-Desktop-Section">
        <section
          style={{ backgroundImage: `url(${GradientImage})` }}
          className="SignUp-FrameImage-Section"
        ></section>
        {/* Firsttt <section className="SignUp-BoxSection">
          <div className="Sign-CardBox">
            <section className="Sign-CardBox-Section">
              <div className="Sign-CardBox-Goback">
                <img src={backarrow} alt="" />
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "19px",
                    marginTop: "-2px",
                  }}
                >
                  Go back
                </p>
              </div>
              <div className="Sign-CardHeading">
                <h5>Reset Password</h5>
                <p>
                  Opps you must have forgotten your password. We got you covered
                </p>
              </div>

              <div className=" ResetPassowrd-Beginning">
                <img src={email} alt="" />
                <p>Reset password using your e-mail</p>
              </div>

              <div className=" ResetPassowrd-Beginning">
                <img src={phone} alt="" />
                <p>Reset password using your phone number</p>
              </div>

              <div className="Sign-Card-Button">Continue</div>
            </section>
          </div>
        </section> */}

        {/* <section className="SignUp-BoxSection">
          <div className="Sign-CardBox">
            <section className="Sign-CardBox-Section">
              <div className="Sign-CardBox-Goback">
                <img src={backarrow} alt="" />
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "19px",
                    marginTop: "-2px",
                  }}
                >
                  Go back
                </p>
              </div>
              <div className="Sign-CardHeading">
                <h5>Reset Password</h5>
                <p>
                  Opps you must have forgotten your password. We got you covered
                </p>
              </div>

              <div className="Sign-Card-InputDivs">
                <p>Enter Your Phone Number To get your Email Reset</p>
                <input
                  className="Sign-CardInputDivs-Input"
                  placeholder="Enter Your Phone Number"
                />
              </div>

              <div className="Sign-Card-Button">Continue</div>
            </section>
          </div>
        </section> */}

        {/* <section className="SignUp-BoxSection">
          <div className="Sign-CardBox">
            <section className="Sign-CardBox-Section">
              <div className="Sign-CardBox-Goback">
                <img src={backarrow} alt="" />
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "19px",
                    marginTop: "-2px",
                  }}
                >
                  Go back
                </p>
              </div>
              <div className="Sign-CardHeading">
                <h5>Reset Password</h5>
                <p>Enter the Code to Reset Password</p>
              </div>

              <div className="ResetPassword-EnterCode">
                {[0, 1, 2, 3].map((_, index) => (
                  <input
                    key={index}
                    className="Sign-Card-EnterCode"
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>

              <div className="Sign-Card-Button">Continue</div>
            </section>
          </div>
        </section> */}
        {/* 
        <section className="SignUp-BoxSection">
          <div style={{ minHeight: "250px" }} className="Sign-CardBox">
            <section className="Sign-CardBox-Section">
              <div className="Sign-CardHeading">
                <h5>Password Reset Successfully</h5>
              </div>
              <div style={{ marginTop: "100px" }} className="Sign-Card-Button">
                Login
              </div>
            </section>
          </div>
        </section> */}

        {/* <section className="SignUp-BoxSection">
          <div className="Sign-CardBox">
            <section className="Sign-CardBox-Section">
              <div className="Sign-CardHeading">
                <h5>Reset Password</h5>
                <p>Enter your new password.</p>
              </div>

              <div className="Sign-Card-InputDivs">
                <p>New PassWord</p>
                <div className="ResetPassWord-ViewPassDiv">
                  <input
                    className="Sign-CardInputDivs-Input"
                    placeholder="Enter Your New Password"
                  />
                  <img src={eye} alt="" />
                </div>
              </div>
              <div className="Sign-Card-InputDivs">
                <p>New PassWord</p>
                <div className="ResetPassWord-ViewPassDiv">
                  <input
                    className="Sign-CardInputDivs-Input"
                    placeholder="Enter Your New Password"
                  />
                  <img src={eye} alt="" />
                </div>
              </div>

              <div className="Sign-Card-Button">Continue</div>
            </section>
          </div>
        </section> */}
      </section>
    </section>
  );
};

export default ResetPassword;
