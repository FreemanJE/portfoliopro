import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"Your Comments Are Valuable"}
      />
      <section className="testimonial-section fade-in" id={props.id}>
        <div className="container">
          <OwlCarousel
            className="owl-carousel"
            id="testimonial-carousel"
            {...options}
          >
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Thanks Freeman! That means a lot to me. You were one of the
                    best students I've ever had in DCI!.
                    <br />
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <div className="infoImage">                   
                  </div>
                  <div>
                    <h6>Mr Franco</h6>
                    <p>DCI Teacher</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item ">
                <div className="testi-comment ">
                  <p>
                    <i className="fa fa-quote-left" />
                    Thanks Freeman! That means a lot to me. You were one of the
                    best students I've ever had in DCI!.
                    <br />
                    <i className="fa fa-quote-right" />
                  </p>

                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>

                <div className="client-info">
                  <div className="infoImage">                   
                  </div>
                  <div>
                    <h6>Mr Franco</h6>
                    <p>DCI Teacher</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Thanks Freeman! That means a lot to me. You were one of the
                    best students I've ever had in DCI!.
                    <br />
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <div className="infoImage">                   
                  </div>
                  <div>
                    <h6>Mr Franco</h6>
                    <p>DCI Teacher</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Thanks Freeman! That means a lot to me. You were one of the
                    best students I've ever had in DCI!.
                    <br />
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <div className="infoImage">                   
                  </div>
                  <div>
                    <h6>Mr Franco</h6>
                    <p>DCI Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
