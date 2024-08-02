import React from "react";
import service from "./assets/service.svg";
import checkmark from "./assets/checkmark.png";
import "./LandingPage.css";
const OurSub = () => {
  return (
    <section className="Our-Sub-Section">
      <div className="Sub-Section-Intro">
        <div className="Subscribe-Floater">
          <img src={service} alt="" width="24px" />
          <p>Our Subscription Plan</p>
        </div>
        <p className="Sub-Plan-BigP">We’ve the perfect subscription for you</p>
      </div>

      <div className="Subscribe-StandTo-Box">
        <section className="SubPlan-ThreeBoxes-Section">
          <div className="Payment-Card">
            <p className="PaymentCard-Date">Monthly</p>
            <p className="PaymentCard-Text">
              You will be charged monthly to use our services
            </p>
            <p className="PaymentCard-Price">
              NGN 6,450
              <span className="PaymentCard-VAT">VAT included 7.5%</span>
            </p>

            <div className="PaymentCard-Button">Register Now</div>
          </div>

          <div className="Payment-Card">
            <p className="PaymentCard-Date">Monthly</p>
            <p className="PaymentCard-Text">
              You will be charged monthly to use our services
            </p>
            <p className="PaymentCard-Price">
              NGN 6,450
              <span className="PaymentCard-VAT">VAT included 7.5%</span>
            </p>

            <div className="PaymentCard-Button">Register Now</div>
          </div>

          <div className="Payment-Card">
            <p className="PaymentCard-Date">Monthly</p>
            <p className="PaymentCard-Text">
              You will be charged monthly to use our services
            </p>
            <p className="PaymentCard-Price">
              NGN 6,450
              <span className="PaymentCard-VAT">VAT included 7.5%</span>
            </p>

            <div className="PaymentCard-Button">Register Now</div>
          </div>
        </section>

        <section className="StandTo-Enjoy-Section">
          <p className="ToEnjoy-Header">
            What you Stand to Enjoy from our Business
          </p>

          <div className="MarkBox-Section">
            <div className="MarkBox-FlexDiv">
              <img src={checkmark} alt="" />
              <p>A large online marketplace with access to online consumers.</p>
            </div>

            <div className="MarkBox-FlexDiv">
              <img src={checkmark} alt="" />
              <p>A large online marketplace with access to online consumers.</p>
            </div>

            <div className="MarkBox-FlexDiv">
              <img src={checkmark} alt="" />
              <p>A large online marketplace with access to online consumers.</p>
            </div>

            <div className="MarkBox-FlexDiv">
              <img src={checkmark} alt="" />
              <p>
                Direct WhatsApp call enabled directly from your online shop to
                facilitate inquiries from customers visiting your site.
              </p>
            </div>

            <div className="MarkBox-FlexDiv">
              <img src={checkmark} alt="" />
              <p>A large online marketplace with access to online consumers.</p>
            </div>

            <div className="MarkBox-FlexDiv">
              <img src={checkmark} alt="" />
              <p>A large online marketplace with access to online consumers.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurSub;
