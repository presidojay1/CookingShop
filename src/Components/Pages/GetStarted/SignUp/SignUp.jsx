import React, { useState } from "react";
import "./SignUp.css";
import bg1 from "./Assets/bg1.png";
import logo from "../../NavBar/assets/logo.png";
import frame1 from "./Assets/frame1.jpeg";
import frame2 from "./Assets/frame2.jpeg";
import frame3 from "./Assets/frame3.jpeg";
import frame4 from "./Assets/frame4.jpeg";
import frame5 from "./Assets/frame5.jpeg";
import frame6 from "./Assets/frame6.jpeg";
import frame7 from "./Assets/frame7.jpeg";
import frame8 from "./Assets/frame8.jpeg";
import frame9 from "./Assets/frame9.jpeg";
import frame10 from "./Assets/frame10.jpeg";
import frame11 from "./Assets/frame11.jpeg";
import frame12 from "./Assets/frame12.jpeg";
const SignUp = () => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const images = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
  ];

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const checkPasswordStrength = (password) => {
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[@$!%*?&#]/.test(password)
    ) {
      return "strong";
    } else if (password.length >= 6) {
      return "good";
    } else {
      return "weak";
    }
  };

  const renderStrengthBars = () => {
    const bars = [];
    let barClass = "PasswordStrength-Bar";
    if (password === "") {
      barClass += " Empty-Password";
    } else if (passwordStrength === "strong") {
      barClass += " Strong-Password";
    } else if (passwordStrength === "good") {
      barClass += " Good-Password";
    } else {
      barClass += " Weak-Password";
    }

    for (let i = 0; i < 4; i++) {
      bars.push(<div key={i} className={barClass}></div>);
    }
    return bars;
  };

  const renderStrengthText = () => {
    if (password === "") {
      return null;
    } else if (passwordStrength === "strong") {
      return <span className="PasswordStrength-Text Text-Strong">Strong</span>;
    } else if (passwordStrength === "good") {
      return <span className="PasswordStrength-Text Text-Good">Good</span>;
    } else if (passwordStrength === "weak") {
      return <span className="PasswordStrength-Text Text-Weak">Weak</span>;
    }
    return null;
  };
  return (
    <>
      <section className="SignUp-Section">
        <section className="SignUp-Desktop-Section">
          <section className="SignUp-FrameImage-Section">
            <div className="SignUp-FrameImage-TopFrames">
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${image})` }}
                  className="SignUp-FrameImage-Div"
                ></div>
              ))}
            </div>
            <div className="SignUp-FrameImage-BottomFooter">
              <div className="SignUp-FrameImage-BottomFooterImg">
                <img src={logo} alt="logo" />
              </div>
              <div className="SignUp-FrameImage-BottomFooterH1">
                <p>Discover Our Range of Products and Services</p>
              </div>

              <div className="SignUp-FrameImage-BottomFooterP">
                <p>
                  Explore our diverse categories or search by product name,
                  purchase location, or delivery destination to find exactly
                  what you need.
                </p>
              </div>
            </div>
          </section>
          <section className="SignUp-BoxSection">
            <div className="Sign-CardBox">
              <section className="Sign-CardBox-Section">
                <div className="Sign-CardHeading">
                  <h5>Create A new Account</h5>
                  <p>
                    Fill in all required fields in order to create an account
                    with us
                  </p>
                </div>

                <div className="Sign-Card-InputDivs">
                  <p>Name</p>
                  <input
                    className="Sign-CardInputDivs-Input"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="Sign-Card-InputDivs">
                  <p>Enter Your Phone Number</p>
                  <input
                    className="Sign-CardInputDivs-Input"
                    placeholder="Enter Your Phone Number"
                  />
                </div>

                <div className="Sign-Card-InputDivs">
                  <p>Enter Your Password</p>
                  <input
                    className="Sign-CardInputDivs-Input"
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="PasswordStrength-Container">
                  {renderStrengthBars()}
                  {renderStrengthText()}
                </div>

                <div className="Sign-Card-InputDivs">
                  <p>Enter Your Confirm Password</p>
                  <input
                    className="Sign-CardInputDivs-Input"
                    type="password"
                    placeholder="Enter Your Confirm Password"
                  />
                </div>

                <div className="Sign-Card-Button">Continue</div>

                <div className="Sign-Card-AlreadyHave">
                  <p className="Card-HaveAccount">Already Have an Account?</p>
                  <p className="Card-SignIn">SignIn</p>
                </div>
              </section>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default SignUp;
