import React from "react";
import "../styles/HeaderLanding.css";
import HeaderMobile from "./HeaderMobile";
import BecomeAPigButton from "./buttons/BecomeAPigButton";
import "../styles/HeaderMobile.css";

const HeaderLanding = () => {
  return (
    // <div className="container">
    <div className="background-food">
      <HeaderMobile />
      <div className="background-food">
        <img src="Big-picture.jpg" alt="Background" />
        <div className="overlay">
          <h1 className="we-are-title">
            We are <br /> Pig Food
          </h1>
          <p className="header-text">
            Be a pig and eat tasty crap that otherwise goes to the bin. Pig food
            offers you quality food from top-notch restaurants for a minimal
            amount of pig bucks
          </p>
        </div>
      </div>
      <BecomeAPigButton />
    </div>
    // </div>
  );
};

export default HeaderLanding;
