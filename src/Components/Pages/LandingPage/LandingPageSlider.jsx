import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import search from "./assets/search.svg";
import dropdown from "./assets/dropdown.svg";
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";
import bg5 from "./assets/bg5.png";
import "./LandingPage.css";

const backgrounds = [bg1, bg2, bg3, bg4, bg5];
const texts = [
  {
    big: "Discover Our Range of Products and Services",
    small:
      "Explore our diverse categories or search by product name, purchase location, or delivery destination to find exactly what you need.",
  },
  {
    big: "Welcome to Our Online Store",
    small: "Find the best products at unbeatable prices.",
  },
  {
    big: "Shop the Latest Trends",
    small: "Stay ahead with our new arrivals.",
  },
  {
    big: "Exclusive Deals for You",
    small: "Enjoy discounts and special offers on your favorite items.",
  },
  {
    big: "Fast and Secure Shopping",
    small: "Experience hassle-free online shopping with us.",
  },
];

const LandingPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + backgrounds.length) % backgrounds.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        {...handlers}
        style={{ backgroundImage: `url(${backgrounds[currentSlide]})` }}
        className="LandingPage-BigSlider BigScreen"
      >
        <div className="LandingPage-SliderItemsDiv">
          <div className="Slider-Search-FirstBox">
            <div className="Slider-Search-SecondBox">
              <div className="Slider-Icon">
                <img src={search} alt="search" width="24px" />
              </div>

              <div className="Slider-Input">
                <input
                  className="SliderInput-Input"
                  placeholder="Search for whatever item you want"
                />
              </div>

              <div className="Slider-DropDown">
                <p className="Slider-DropdownText">Filter By Category</p>
                <img src={dropdown} alt="dropdown" width="20px" />
              </div>

              <div className="SliderButton">Search</div>
            </div>
          </div>

          <div className="Slider-Welcome-Oval">
            <p>Welcome to T’enterprise E-Mall</p>
          </div>

          <div className="Slider-Text-Zone">
            <div className="Text-Zone-BigP">{texts[currentSlide].big}</div>
            <div className="Text-Zone-SmallP">{texts[currentSlide].small}</div>
          </div>
        </div>
        <div className="SliderSection-MoveButtons">
          <div className="SliderSection-RoundButtons">
            {backgrounds.map((_, index) => (
              <div
                key={index}
                className={`Slider-RoundButtons ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          {/* <div className="SliderSection-ArrowButtons">
          <div className="Slider-LftButton" onClick={handlePrev}>
            &#9664;
          </div>
          <div className="Slider-RightButton" onClick={handleNext}>
            &#9654;
          </div>
        </div> */}
        </div>
      </div>

      <div className="LandingPage-MobileSlider MobileScreen">
        <div className="LandingPage-SliderItemsDiv-Mobile">
          <div className="Slider-Search-FirstBox-Mobile">
            <div className="Slider-Search-SecondBox-Mobile">
              <div className="MobileIcon-Div">
                <div className="Slider-Icon">
                  <img
                    src={search}
                    alt="search"
                    width="15px"
                    style={{ marginTop: "8px", marginRight: "5px" }}
                  />
                </div>

                <div className="Slider-Input">
                  <input
                    className="SliderInput-Input"
                    placeholder="Search for whatever item you want"
                  />
                </div>

                <div className="Slider-DropDown">
                  <p className="Slider-DropdownText">Filter By Category</p>
                  <img src={dropdown} alt="dropdown" width="15px" />
                </div>
              </div>
            </div>
          </div>

          <div className="SliderButton">Search</div>

          <div className="Slider-Welcome-Oval">
            <p>Welcome to T’enterprise E-Mall</p>
          </div>

          <div className="Slider-Text-Zone">
            <div className="Text-Zone-BigP">
              Discover Our Range of Products and Services
            </div>
            <div className="Text-Zone-SmallP">
              Explore our diverse categories or search by product name, purchase
              location, or delivery destination to find exactly what you need.
            </div>
          </div>
        </div>

        <div
          {...handlers}
          style={{ backgroundImage: `url(${backgrounds[currentSlide]})` }}
          className="Mobile-ImageSlideDiv"
        >
          <div className=" ButtonMobile">
            <div className="SliderSection-RoundButtons">
              {backgrounds.map((_, index) => (
                <div
                  key={index}
                  className={`Slider-RoundButtons ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            {/* <div className="SliderSection-ArrowButtons">
          <div className="Slider-LftButton" onClick={handlePrev}>
            &#9664;
          </div>
          <div className="Slider-RightButton" onClick={handleNext}>
            &#9654;
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageSlider;
