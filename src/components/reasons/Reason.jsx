import React from "react";
import "./reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reason = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" srcset="" />
        <img src={image2} alt="" srcset="" />
        <img src={image3} alt="" srcset="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="text-stroke">Why </span>
          <span>Choose Us</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" srcset="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ fontWeight: "normal", color: "var(--gray)" }}>
          Our Partner
        </span>
        <div className="partners">
          <img src={nb} alt="" srcset="" />
          <img src={adidas} alt="" srcset="" />
          <img src={nike} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
