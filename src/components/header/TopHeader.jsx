import React from "react";
import { Link } from "react-router-dom";

const TopHeader = ({ menuClicked, setMenuClicked }) => {
  return (
    <>
      <div className="top-header header-section">
        <i
          className="bi bi-list"
          onClick={() => {
            setMenuClicked(!menuClicked);
          }}></i>
        <div className="phone">
          <i className="bi bi-telephone-fill"></i>
          123-456-789
        </div>
        <h2>Welcome To Shoopy</h2>
        <Link to="/login" className="login-link">
          <i className="bi bi-person-fill"></i>
          Login
        </Link>
      </div>
      <hr />
    </>
  );
};

export default TopHeader;
