import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/assets/ContactImages/mailz.jpeg";
import load1 from "../../../src/assets/ContactImages/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  console.log(email);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post("/contact", data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={["Get in touch  🦅", 1000, "Send a mail📧 ", 1000]}
            />
          </h2>
          <div className="colz-icon">
            <a href="https://github.com/FreemanJE">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/freeman-johnson-b1b04683/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href=" #">
              <i className="fa fa-facebook-square"></i>
            </a>
            {/* <a href=" #">
              <i className="fa fa-twitter-square"></i>
            </a> */}
            <a href="pfreejohnson@gmail.com">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h3>Kindly fill the form or send a mail to<br /><i>pfreejohnson@gmail.com</i>  </h3>
            <img src={imgBack} alt="imag not found" />
            <h4>Thank you</h4>
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="imag not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
