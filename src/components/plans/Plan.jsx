import React from "react";
import "./plan.css";
import { plansData } from "../../data/plansData";
import tick from "../../assets/whiteTick.png";

const Plan = () => {
  return (
    <div className="plansection" id="plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="plan-header">
        <span className="text-stroke">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="text-stroke">NOW WITHUS</span>
      </div>
      <div className="pricecard">
        {plansData.map((plan, i) => {
          return (
            <div className="card" key={i}>
              <span>{plan.icon}</span>
              <span>{plan.name}</span>
              <span>${plan.price}</span>
              <div className="features">
                <div>
                  <img src={tick} alt="" srcset="" />
                  <span>{plan.features[0]}</span>
                </div>
                <div>
                  <img src={tick} alt="" srcset="" />
                  <span>{plan.features[1]}</span>
                </div>
                <div>
                  <img src={tick} alt="" srcset="" />
                  <span>{plan.features[2]}</span>
                </div>
              </div>
              <div>
                <span className="seemore">See more benefits -></span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
