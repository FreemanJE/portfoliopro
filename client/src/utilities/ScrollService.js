import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";
// import { Object } from 'prop-types'

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
  /* SCROLL TO HIRE ME / CONTACT ME SCREEN */
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    // console.log(homeScreen)
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    /* when the element is Partially Visible */

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;

    /* Completely Visible */
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  /* CHECK THE SCREEN THATS CURRENTLY UNDER VIEWPORT */
  // which means the screen that is displayed fully
  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDom = document.getElementById(screen.screen_name);
      if (!screenFromDom) continue;

      let fullyVisible = this.isElementInView(screenFromDom, "complete");
      let partiallyVisible = this.isElementInView(screenFromDom, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
             //BROADCAST FADE IN EFFECT
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }

        if (fullyVisible) {
             // BROADCAST SCREEN NAME
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });          
          break;
        }
      }
    }
  };
}
