import {
  faBars,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/header.css";
import { WindowSize } from "../Context/WindowContext";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [seachValue, setSeachValue] = useState("");
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;
  const nav = useNavigate();
  const { getTotalCart } = useContext(CartContext);
  const TotalCart = getTotalCart();
  function handleTop() {
    setIsOpen(false);

    nav("/");

    setTimeout(() => {
      const targetElement = document.querySelector(".hover-text-div"); // Adjust the selector accordingly
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        //targetElement.scrollIntoView({ behavior: "smooth" });: If the targetElement exists, this line uses the scrollIntoView method to smoothly scroll the page to make the targetElement visible in the viewport.
      }
    }, 100);
  }
  function handleContact() {
    setIsOpen(false);
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
  function handleSearch() {
    window.location.pathname = `/search/${seachValue}`;
  }



  return (
    <div>
      {searchBar && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            onChange={(e) => setSeachValue(e.target.value)}
            value={seachValue}
          />
        </div>
      )}
      <div
        style={{ backgroundColor: isOpen ? "white" : "transparent" }}
        className="header"
      >
        <div className="d-flex f-header">
          <div>
            {windowSize > 880 ? (
              <div className="d-flex ">
                <div onClick={handleTop} className="text-border ">
                  SHOP
                </div>
                <NavLink to={"/about"} className="text-border">
                  ABOUT
                </NavLink>
              </div>
            ) : isOpen ? (
              <FontAwesomeIcon
                className="icon-border icon"
                onClick={() => setIsOpen(!isOpen)}
                icon={faX}
              />
            ) : (
              <FontAwesomeIcon
                className="icon-border icon"
                onClick={() => setIsOpen(!isOpen)}
                icon={faBars}
              />
            )}
          </div>
          <div>
            <FontAwesomeIcon
              className="icon search-icon"
              icon={faMagnifyingGlass}
              onClick={() => setSearchBar(!searchBar)}
            />
          </div>
        </div>
        <a href="/" className="h-header icon ">
          LuxeLegacy
        </a>
        <div className="d-flex f-header">
          <div
            onClick={() => (window.location.pathname = "/cart")}
            className="text-border icon"
          >
            {windowSize > 350 ? <span>Cart</span> : ""} {TotalCart}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="inner">
          <ul className="primary">
            <li>
              <p onClick={handleTop}>SHOP</p>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
          <ul className="secondary">
            <li>
              <a href="/terms-of-service">Privacy & Terms</a>
            </li>
            <li>
              <p color="#000" onClick={handleContact}>
                Contact Us
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
