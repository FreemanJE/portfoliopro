import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Freeman</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Ethusiastic Dev 😎",
                      1500,
                      "Full Stack Developer 9️⃣",
                      1500,
                      "MERN Stack Dev 🐆  ",
                      1500,
                      "Cross Platform Dev 🌉 ",
                      1500,
                      "React/React Native Dev 📜  ",
                      1500,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Web Dev with Full Stack Simplified
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <button className="btn highlighted-btn">
              <a href="freeman-cv.png" downloaded="Freeman-cv.png">Get Resume</a>
              </button>
            </div>
            <div className="colz-icon">
              <a href="https://github.com/FreemanJE">
                <i className="fa fa-google-plus-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/freeman-johnson-links/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href=" #">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href=" #">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"> </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
