import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/fotter.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/imgs/logo.png";
import {useNavigate } from "react-router-dom";
export default function Fotter() {
  const nav = useNavigate();
  function handleTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleContact() {
    nav("/about");
    // Delay the scrolling to ensure navigation completes first
    setTimeout(() => {
      const targetElement = document.querySelector(".contact-us"); // Adjust the selector accordingly
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        //targetElement.scrollIntoView({ behavior: "smooth" });: If the targetElement exists, this line uses the scrollIntoView method to smoothly scroll the page to make the targetElement visible in the viewport.
      }
    }, 100);
  }
  return (
    <div className="footer-container">
      <div className="fotter">
        <div className="fotter-logo-div">
          <img className="fotter-logo" src={logo} alt="logo" />
        </div>
        <div className="fotter-info">
          <div className="fotter-info-f">
            <div className="fotter-info-f-t">OBJECTS THAT INSPIRE.</div>
            <div className="fotter-info-s-t">
              <a href="/terms-of-service">Privacy & Terms</a>
              <span onClick={handleContact}> Contact Us</span>
            </div>
          </div>
          <div className="fotter-links">
            <a href="https://www.figma.com/" className="social">
              FIGMA
            </a>
            <a href="https://twitter.com/home" className="social">
              TWITTER
            </a>
            <a href="https://www.instagram.com/4maybes" className="social">
              INSTAGRAM
            </a>
            <a href="https://www.youtube.com/@InspiroRealm" className="social">
              YOUTUBE
            </a>
          </div>
        </div>
        <div className="fotter-arrow">
          <FontAwesomeIcon onClick={handleTop} icon={faArrowUp} />
        </div>
      </div>
    </div>
  );
}
