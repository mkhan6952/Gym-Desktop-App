import React from "react";
import Header from "../header/Header";
import "./hero.css";
import heroimage from "../../assets/hero_image.png";
import heroimageback from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const hero = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/* Nav Section */}
        <Header />
        {/* Add Section */}
        <div className="best-add">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "4px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        {/* Heading Section */}
        <div className="hero-text">
          <div>
            <span className="text-stroke">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figure Section */}
        <div className="figures">
          <div>
            <span>
              + <CountUp start={100} end={140} duration={2} />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              + <CountUp start={500} end={550} duration={2} />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              + <CountUp start={35} end={50} duration={2} />{" "}
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* button Section */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
        >
          <img src={heart} alt="" srcSet="" />
          <span>Heart Rate</span>
          <span>116 bmp</span>
        </motion.div>

        {/* hero-image */}
        <img src={heroimage} className="heroimage" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={heroimageback}
          className="heroimageback"
        />

        {/* calories burn */}
        <motion.div
          className="calories"
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
        >
          <img src={calories} alt="" srcset="" />
          <div>
            <span>Calories burn</span>
            <span>216 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default hero;
