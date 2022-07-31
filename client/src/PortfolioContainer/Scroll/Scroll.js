import React, { useState, useEffect } from "react";
import "./Scroll.css";
import { FaArrowUp } from "react-icons/fa";




function Scroll() {
  const [showButton, setShowButton] = useState(true);
  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;

    // Scroll to top button logic
    window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className="page">
     
      <div className="progress_wrapper">
        <div className="progress_bar" id="bar"></div>
      </div>
      <FaArrowUp 
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
      /> 

    </div>
  );
}
export default Scroll;