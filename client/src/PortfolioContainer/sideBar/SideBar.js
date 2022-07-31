import React from "react";
import "./SideBar.css";
import ScrollService from "../../utilities/ScrollService";


export default function SideBar() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >       
        <i className="fa fa-arrow-up">Top</i>        
      </button>
    </div>
  );
}
