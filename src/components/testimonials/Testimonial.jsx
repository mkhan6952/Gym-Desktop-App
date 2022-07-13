import React, { useState } from "react";
import "./testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonial = () => {
  const [selected, setselected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="testimonial" id="testimonials">
      <div className="testi-l">
        <span>TESTIMONIALS</span>
        <span className="text-stroke">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review} </span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}{" "}
          </span>
          <span>
            {""}- {testimonialsData[selected].status}
          </span>
        </span>
      </div>
      <div className="testi-r">
        <div></div>
        <div></div>
        <img
          className="client"
          src={testimonialsData[selected].image}
          alt="mm"
        />
        <span className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setselected(tlength - 1)
                : setselected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tlength - 1
                ? setselected(0)
                : setselected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
