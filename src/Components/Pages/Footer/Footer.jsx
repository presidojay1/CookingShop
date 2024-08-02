import React from "react";
import "./Footer.css";

import logo from "../NavBar/assets/logo.png";
const Footer = () => {
  return (
    <footer className="Footer-Section">
      <section className="Footer-FlexSection">
        <div className="Footer-FirstFlex">
          <div className="Footer-FlexLogo">
            <img src={logo} alt="" />
          </div>
          <div className="Footer-Flex-BesideLogo">
            <div className="Footer-Flex-ContactDetails">
              <p>
                5th Floor Cocoa House Oba Adebimpe Rd Dugbe, Ibadan Oyo State
              </p>
            </div>
            <div className="Number-Footer-Div">
              <p>+2349094568701, +2349160285456</p>
              <p style={{ fontWeight: "700" }}>
                customerservice@tenterprisemall.net
              </p>
            </div>
          </div>
        </div>

        <div className="Footer-Second">
          <div className="Route-Footer-Div">
            <p>Home</p>
            <p>MarketPlace</p>
          </div>
          <div className="Route-Footer-Div">
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
