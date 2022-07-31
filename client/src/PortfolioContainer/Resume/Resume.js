import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""} </span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""} </span>
        </div>
      </div>
    );
  };

  //Programming Skills
  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Related Experience", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "React Native", ratingPercentage: 65 },
    { skill: "Express JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "Mongo DB", ratingPercentage: 70 },    
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 75 },
  ];

  // Projects
  const projectsDetails = [
    {
      title: "Falma E-commerce",
      duration: { fromDate: "6/2022", toDate: "7/2022" },
      description:
        "An Online Shop using both Database and external API to display Products. This was our final Project with a team of 4 Students ",
      subHeading: "Technologies Used: Fullstack MERN, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "5/2022", toDate: "6/2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Etukas Message Board",
      duration: { fromDate: "4/2022", toDate: "4/2022" },
      description: "An Application design to search and display all types of images with corresponding information",
      subHeading: "Technology used: Fullstack MERN, Bootstrap",
    },
    
  ];

  // Education
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Digital Career Institute Berlin"}
        subHeading={"Web Development"}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"GFN AG Berlin"}
        subHeading={"Computer Network Technics"}
        fromDate={"2014"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"Polytechnic Calabar, Nigeria"}
        subHeading={"Electrical/Electronic Engineering"}
        fromDate={"1991"}
        toDate={"1993"}
      />
    </div>,

    // Work Experience

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ariston Vertrieb GmbH, Berlin"}
          subHeading={"HP Certified Service Technician"}
          fromDate={"2016"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as Service Technician with specialization on Hp Printers and Plotters. Repairs and installations on desktops and mobile computer devices.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - In-house and field repairs and maintenance services.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Upgrading Seminars on Hp Products
          </span>
          <br />
          <span className="resume-description-text">
            - Learning and Upgrading Seminars on HP Technologies and new
            Products
          </span>
          <br />
        </div>
      </div>
    </div>,

    // Programming Skills
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Projects */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    //   Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sport"
        description="Apart from being a code enthusiast, I love playing  and watching football and also cycling"
      />
      <ResumeHeading
        heading="Family life"
        description="As a father, I enjoy close family life"
      />
      <ResumeHeading
        heading="Reading, Music and Conferencing"
        description="Hosting Gospel Conferencing and Music is highly inspirational to me"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/ResumeIcons/${bullet.logoSrc}`)}
          alt="oops.. could not get logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetails) => ResumeDetails)}
      </div>
    );
  };
  
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
