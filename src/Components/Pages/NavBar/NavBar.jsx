import React, { useReducer } from "react";
import "./NavBar.css";
import bucklogo from "./assets/logo.png";
import picklist from "./assets/picklist.svg";
import avatarloggedin from "./assets/avatar-loggedin.svg";
import dashboardsqare from "./assets/dashboard-square.svg";
import productloading from "./assets/product-loading.svg";
import logOut from "./assets/logout.svg";
import useraccount from "./assets/user-account.svg";
import invoice from "./assets/invoice.svg";
import { initialState, dropdownReducer } from "./NavBarReducer";

const NavBar = () => {
  const [state, dispatch] = useReducer(dropdownReducer, initialState);

  const handleToggleDropdown = () => {
    dispatch({ type: "TOGGLE_DROPDOWN" });
  };
  const handleLoginToggleDropdown = () => {
    dispatch({ type: "TOGGLE_LOGIN_DROPDOWN" });
  };

  return (
    <>
      {/* <section className="Nav-Section  px-2 md:px-0">
        <nav className="Nav-MainNav">
          <section className="Nav-Image-Section">
            <div>
              <img src={bucklogo} alt="logo" className="Logo-Image" />
            </div>
          </section>

          <section className="Nav-Items-Section">
            <div className="NavItems-Text">
              <p>Home</p>
            </div>

            <div className="NavItems-Text">
              <p>MarketPlace</p>
            </div>

            <div className="NavItems-Text">
              <p>Contact Us</p>
            </div>

            <div className="NavItems-Text">
              <p>About Us</p>
            </div>
          </section>

          <section className="Nav-Button-Section">
            <div className="NavButton-Login">Login</div>
            &nbsp;
            <div className="NavButton-SignUp">SignUp</div>
          </section>

          <section className="Nav-PickList-Section">
            <img src={picklist} alt="" onClick={handleToggleDropdown} />
          </section>
        </nav>

        {state.isDropdownOpen && (
          <nav className="NavMobile-DropDown">
            <div className="NavMobile-ListItems">
              <div className="NavMobile-ItemsBody">
                <p>Home</p>
              </div>
              <div className="NavMobile-ItemsBody">
                <p>MarketPlace</p>
              </div>
              <div className="NavMobile-ItemsBody">
                <p>Contact Us</p>
              </div>
              <div className="NavMobile-ItemsBody">
                <p>About US</p>
              </div>
            </div>
            <div className="NavButton-Mobile-Login">Login</div>
            &nbsp;
            <div className="NavButton-Mobile-SignUp">SignUp</div>
          </nav>
        )}
      </section> */}

      <section className="Nav-Section  px-2 md:px-0">
        <nav className="Nav-MainNav">
          <section className="Nav-Image-Section">
            <div>
              <img src={bucklogo} alt="logo" className="Logo-Image" />
            </div>
          </section>

          <section className="Nav-LoggedIn-Button-Section">
            <div
              style={{ fontWeight: "600", color: "#B6551C" }}
              className="NavButton-Login LogOutDisappear"
            >
              Logout
            </div>
            <div className="NavButton-LoggedIn-MainDiv">
              <div className="LoggedIn-NavBar-AvatarDiv">
                <div className="LoggedIn-NavBAr-PickList">
                  <img
                    src={picklist}
                    alt=""
                    onClick={handleLoginToggleDropdown}
                  />
                </div>
                <div className="LoggedIn-NavBAr-Avatar">
                  <img src={avatarloggedin} alt="" />
                </div>
                {state.isLoginDropdownOpen && (
                  <div className="LoggedIn-NavBar-DropDown">
                    <div className="LoggedIn-NavBar-DropDiv">
                      <div className="LoggedIn-NavBarDrop-Item">
                        <img src={dashboardsqare} alt="" />
                        <p>DashBoard</p>
                      </div>

                      <div className="LoggedIn-NavBarDrop-Item">
                        <img src={useraccount} alt="" />
                        <p>Profile</p>
                      </div>

                      <div className="LoggedIn-NavBarDrop-Item">
                        <img src={invoice} alt="" />
                        <p>Invoice</p>
                      </div>

                      <div className="LoggedIn-NavBarDrop-Item">
                        <img src={productloading} alt="" />
                        <p>Create Product</p>
                      </div>

                      <div className=" LogoutAppear LoggedIn-NavBarDrop-Item">
                        <img src={logOut} alt="" />
                        <p>LogOut</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
