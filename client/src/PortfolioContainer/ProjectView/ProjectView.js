import React from "react";
import FalmaShop from "../../assets/Project/falma-shop.png";
import mBoard from "../../assets/Project/mBoard.png";
import noteApp from "../../assets/Project/noteApp.png";
import picSearch from "../../assets/Project/picSearch.png";
import sinach from "../../assets/Project/sinach.png";
import forest from "../../assets/Project/forest.png";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ProjectView.css";

import "./ProjectView.css";

export default function ProjectView(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="container screen-container fade-in" id={props.id || ""}>
         <ScreenHeading
        title={"Project View"}
        subHeading={"See Some of My Projects"}
      />

      <div className="bg-items">
        <a href="https://freeman-shop.herokuapp.com/">
          <div
            className="items"
            style={{
              backgroundImage: `url(${FalmaShop})`,
            }}
          >
            <div className="one"></div>
            <div className="details">
              <h3>Falma E-commerce</h3>
              <h5>Final Project with DCI</h5>
              <h5>
                Fully responsive online shop using API to display
                products
              </h5>
            </div>
          </div>
        </a>
      </div>

      <a href="https://etukas-messageboard.herokuapp.com/">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage: `url(${mBoard})`,
            }}
          >
            <div className="two"></div>
            <div className="details">
              <h3>Etukas Message Board</h3>
              <h5> Using Fullstack MERN </h5>
            </div>
          </div>
        </div>
      </a>

      <a href="https://freemanje.github.io/notetaking-app/#/list">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage: `url(${noteApp})`,
            }}
          >
            <div className="three"></div>
            <div
              className="details"
              style={{ right: "0%", backgroundColor: "red" }}
            >
              <h3>React Note Taking App </h3>
              <h5>Search, List, Edit, and Save </h5>
            </div>
          </div>
        </div>
      </a>

      <a href="https://freemanje.github.io/picture-search/">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage: `url(${picSearch})`,
            }}
          >
            <div className="four"></div>
            <div className="details" style={{ right: "0%" }}>
              <h3>ETUKAS WORLD PICTURES</h3>
              <h5>
                React App using API to search and display images with
                information{" "}
              </h5>
            </div>
          </div>
        </div>
      </a>

      <a href="https://freemanje.github.io/sinach">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage: `url(${sinach})`,
            }}
          >
            <div className="five"></div>
            <div className="details" style={{ backgroundColor: "red" }}>
              <h3>SINACH BAND</h3>
              <h5>Sinach - a reknown Nigerian Gospel Singer and Song writer</h5>
            </div>
          </div>
        </div>
      </a>

      <a href="https://freemanje.github.io/foresto/">
        <div className="bg-items">
          <div
            className="items"
            style={{
              backgroundImage: `url(${forest})`,
            }}
          >
            <div className="six"></div>
            <div className="details" style={{ backgroundColor: "green" }}>
              <h3>..and many more</h3>
            </div>
          </div>
        </div>
      </a>
      {/* </div> */}
    </div>
  );
}
