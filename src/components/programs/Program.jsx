import React from "react";
import "./program.css";
import { programsData } from "../../data/programsData";
import rightarrow from "../../assets/rightArrow.png";

const Program = () => {
  return (
    <div className="programs" id="programs">
      <div className="program-header">
        <span className="text-stroke">EXPLORE OUR</span>
        <span>program</span>
        <span className="text-stroke">TO SHAPE YOU</span>
      </div>
      <div className="programdata">
        {programsData.map((program, i) => {
          return (
            <div className="category" key={i}>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={rightarrow} alt="mm" srcSet="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Program;
