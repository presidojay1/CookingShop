import React from "react";
import "./Login.css";
import GradientImage from "../SignUp/Assets/Gradient.png";
const Login = () => {
  return (
    <>
      <section className="SignUp-Section">
        <section className="SignUp-Desktop-Section">
          <section
            style={{ backgroundImage: `url(${GradientImage})` }}
            className="SignUp-FrameImage-Section"
          ></section>
          <section className="SignUp-BoxSection">
            <div className="Sign-CardBox">
              <section className="Sign-CardBox-Section">
                <div className="Sign-CardHeading">
                  <h5>Login</h5>
                  <p>Login to your account to access your business profile.</p>
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
                  />
                </div>
                <p className="Login-ForgetPassword"> Forgot Pasword</p>

                <div className="Sign-Card-Button">Continue</div>

                <div className="Sign-Card-AlreadyHave">
                  <p className="Card-HaveAccount">Dont Have an Account?</p>
                  <p className="Card-SignIn">SignUp</p>
                </div>
              </section>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Login;
