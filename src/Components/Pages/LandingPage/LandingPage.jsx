import React, { useState, useEffect } from "react";
import LandingPageSlider from "./LandingPageSlider";
import OurService from "./OurService";
import OurSub from "./OurSub";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <section className="LandingPage-Section">
      <LandingPageSlider />

      <OurService />

      <OurSub />

      <Footer />
    </section>
  );
};

export default LandingPage;
