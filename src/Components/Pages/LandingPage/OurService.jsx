import React from "react";
import Discount from "./assets/discount.svg";
import delivery from "./assets/delivery.png";
import store from "./assets/store.jpg";
import "./LandingPage.css";
import cardback from "./assets/productcard.jpeg";
const OurService = () => {
  return (
    <section className="Our-All-Section">
      <section className="Our-Services-Section">
        <div className="Our-Services-Header">
          <p>Our Service</p>
          <h4>
            Comprehensive Solutions for All Your Needs: Explore, Select, and
            Enjoy Effortless Shopping and Delivery
          </h4>
        </div>

        <div className="Our-Services-CardDiv">
          <div className="Our-Service-Card">
            <div className="Service-CardImageDiv1">
              <div className="Our-ServiceImageDiv2">
                <img src={delivery} alt="delivery" width="delivery" />
              </div>
            </div>

            <div className="Service-Card-Text">
              <h5>Free Discount Card</h5>
              <p>Save on purchases with our exclusive discount card</p>
            </div>
          </div>

          <div className="Our-Service-Card">
            <div className="Service-CardImageDiv3">
              <div className="Our-ServiceImageDiv4">
                <img src={Discount} alt="delivery" width="delivery" />
              </div>
            </div>
            <div className="Service-Card-Text">
              <h5>Free Discount Card</h5>
              <p>Save on purchases with our exclusive discount card</p>
            </div>
          </div>

          <div className="Our-Service-Card">
            <div className="Service-CardImageDiv5">
              <div className="Our-ServiceImageDiv6">
                <img src={Discount} alt="delivery" width="delivery" />
              </div>
            </div>
            <div className="Service-Card-Text">
              <h5>Free Discount Card</h5>
              <p>Save on purchases with our exclusive discount card</p>
            </div>
          </div>

          <div className="Our-Service-Card">
            <div className="Service-CardImageDiv7">
              <div className="Our-ServiceImageDiv8">
                <img src={delivery} alt="delivery" width="delivery" />
              </div>
            </div>
            <div className="Service-Card-Text">
              <h5>Free Discount Card</h5>
              <p>Save on purchases with our exclusive discount card</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Our-Products-Section">
        <div className="Our-Services-Header">
          <p>Our Products</p>
          <h4>Featured Businesses</h4>
        </div>

        <div className="Our-Products-CardDiv">
          <div className="Our-Product-Card">
            <div
              style={{ backgroundImage: `url(${cardback})` }}
              className="Product-Card-BackgroundCard"
            ></div>

            <div className="Service-Product-Text">
              <h5>Free Discount Card</h5>
              <p className="Service-Product-description">
                Save on purchases with our exclusive discount card
              </p>

              <div className="Product-Card-StoreFlex">
                <img src={store} alt="store" width="20px" />
                &nbsp;
                <p>Iyanguku Ibadan</p>
              </div>

              <div className="ProductCard-ViewBusiness-Button">
                <p>View business</p>
              </div>
            </div>
          </div>

          <div className="Our-Product-Card">
            <div
              style={{ backgroundImage: `url(${cardback})` }}
              className="Product-Card-BackgroundCard"
            ></div>

            <div className="Service-Product-Text">
              <h5>Free Discount Card</h5>
              <p className="Service-Product-description">
                Save on purchases with our exclusive discount card
              </p>

              <div className="Product-Card-StoreFlex">
                <img src={store} alt="store" width="20px" />
                &nbsp;
                <p>Iyanguku Ibadan</p>
              </div>

              <div className="ProductCard-ViewBusiness-Button">
                <p>View business</p>
              </div>
            </div>
          </div>

          <div className="Our-Product-Card">
            <div
              style={{ backgroundImage: `url(${cardback})` }}
              className="Product-Card-BackgroundCard"
            ></div>

            <div className="Service-Product-Text">
              <h5>Free Discount Card</h5>
              <p className="Service-Product-description">
                Save on purchases with our exclusive discount card
              </p>

              <div className="Product-Card-StoreFlex">
                <img src={store} alt="store" width="20px" />
                &nbsp;
                <p>Iyanguku Ibadan</p>
              </div>

              <div className="ProductCard-ViewBusiness-Button">
                <p>View business</p>
              </div>
            </div>
          </div>

          <div className="Our-Product-Card">
            <div
              style={{ backgroundImage: `url(${cardback})` }}
              className="Product-Card-BackgroundCard"
            ></div>

            <div className="Service-Product-Text">
              <h5>Free Discount Card</h5>
              <p className="Service-Product-description">
                Save on purchases with our exclusive discount card
              </p>

              <div className="Product-Card-StoreFlex">
                <img src={store} alt="store" width="20px" />
                &nbsp;
                <p>Iyanguku Ibadan</p>
              </div>

              <div className="ProductCard-ViewBusiness-Button">
                <p>View business</p>
              </div>
            </div>
          </div>

          <div className="Our-Product-Card">
            <div
              style={{ backgroundImage: `url(${cardback})` }}
              className="Product-Card-BackgroundCard"
            ></div>

            <div className="Service-Product-Text">
              <h5>Free Discount Card</h5>
              <p className="Service-Product-description">
                Save on purchases with our exclusive discount card
              </p>

              <div className="Product-Card-StoreFlex">
                <img src={store} alt="store" width="20px" />
                &nbsp;
                <p>Iyanguku Ibadan</p>
              </div>

              <div className="ProductCard-ViewBusiness-Button">
                <p>View business</p>
              </div>
            </div>
          </div>

          <div className="Our-Product-Card">
            <div
              style={{ backgroundImage: `url(${cardback})` }}
              className="Product-Card-BackgroundCard"
            ></div>

            <div className="Service-Product-Text">
              <h5>Free Discount Card</h5>
              <p className="Service-Product-description">
                Save on purchases with our exclusive discount card
              </p>

              <div className="Product-Card-StoreFlex">
                <img src={store} alt="store" width="20px" />
                &nbsp;
                <p>Iyanguku Ibadan</p>
              </div>

              <div className="ProductCard-ViewBusiness-Button">
                <p>View business</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurService;
