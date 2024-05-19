import React, { useRef } from "react";
import { Link } from "react-router-dom";

const LowerHeader = ({ menuClicked, setMenuClicked }) => {
  const closeButton = useRef();
  const menyStyle = menuClicked ? "polygon(0 0, 60% 0, 60% 100%, 0 100%)" : "";

  // close the menu
  const handleClose = () => {
    menuClicked ? closeButton.current.click() : null;
  };

  return (
    <div
      className="lower-header header-section"
      style={{ clipPath: menyStyle }}>
      {menuClicked && (
        <i
          ref={closeButton}
          className="bi bi-x-lg"
          onClick={() => setMenuClicked(!menuClicked)}></i>
      )}
      <nav>
        <ul>
          <li onClick={handleClose}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleClose}>
            <Link to="/about">About Us</Link>
          </li>
          <li onClick={handleClose}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li onClick={handleClose}>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LowerHeader;
