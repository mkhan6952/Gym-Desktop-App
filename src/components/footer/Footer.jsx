import React from "react";
import "./footer.css";
import github from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="f-container">
        <hr />
        <div className="footer">
          <img src={github} alt="nm" />
          <img src={insta} alt="nm" />
          <img src={linkin} alt="nm" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="nm" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
