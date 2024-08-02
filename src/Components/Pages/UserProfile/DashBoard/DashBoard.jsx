import React from "react";
import "./DashBoard.css";
import bag from "./assets/bag.svg";
import briefcase from "./assets/briefcase.svg";
const DashBoard = () => {
  return (
    <>
      <section className="DashBoard-MainSection">
        <header className="DashBoard-HeaderItems">
          <div className="DashBoard-HeaderItems-H1">
            <h1>DashBoard</h1>
          </div>

          <div className="DashBoard-Header-Buttons">
            <div className="DashBoard-Header-CreateProduct">
              <p>Create Product</p>
              <img src={bag} alt="" />
            </div>

            <div className="DashBoard-Header-ViewBusiness">
              <p>View Bussiness Page</p>
              <img src={briefcase} alt="" />
            </div>
          </div>
        </header>

        <section className="DashBoard-Table-MainSection">
          <div className="Dash"></div>
        </section>
      </section>
    </>
  );
};

export default DashBoard;
