import React from "react";
import Carousel from "nuka-carousel";
import "./ProjectCarousel.css";

import FalmaShop from "../../assets/Project/falma-shop.png";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function ProjectCarousel(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="screen-container fade-in" id={props.id || ""}>
      <div className="all-carousel-category">
      <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"} />
        {/* <Carousel> */}
          {/* <Link to="/men-shoes"> */}
          <a href="https://freeman-shop.herokuapp.com/">
          <div className="carousel-category">
            <div className="carousel-img">
              <img src={FalmaShop} alt="" />
            </div>
            <div className="carousel-img">
              <img src={FalmaShop} alt="" />
            </div>
            <div className="carousel-img">
              <img src={FalmaShop} alt="" />
            </div>
          </div>
          </a>
          {/* </Link> */}

          {/* <Link to="/women-shoes"> */}
          <div className="carousel-category">
            <div className="carousel-img">
              <img src={FalmaShop} alt="" />
            </div>
            <div className="carousel-img">
              <img src={FalmaShop} alt="" />
            </div>
            <div className="carousel-img">
              <img src={FalmaShop} alt="" />
            </div>
          </div>
          {/* </Link> */}

          {/* <Link to="/kids-shoes"> */}
          <div className="carousel-category">
            <div className="carousel-img">
              <img src="../../assets/project/falma-shop.png" alt="" />
            </div>
            <div className="carousel-img">
              <img src="../../assets/project/falma-shop.png" alt="" />
            </div>
            <div className="carousel-img">
              <img src="../../assets/project/falma-shop.png" alt="" />
            </div>
          </div>
          {/* </Link> */}
        {/* </Carousel> */}
      </div>
    </div>
  );
}
