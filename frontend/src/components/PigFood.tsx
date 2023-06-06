import React from "react";
import { useNavigate } from "react-router-dom";
import BecomeAPigButton from "./buttons/BecomeAPigButton";
import TextBecome from "./TextBecome";
import "../styles/PigFood.css";

const PigFood: React.FC = () => {
  const navigate = useNavigate();

  const handleBecomeAPigClick = () => {
    navigate("/createaccount");
  };
  return (
    <>
      <div className="container"></div>
      <div className="Landing">
        <img src="Big-picture.jpg" alt="Background Image" />
        <div className="Text">
          <h1 className="pig-food">
            We are <br />
            Pig Food
          </h1>
          {/* <br /> Klara tog bort*/}
          <p className="text-header">
            Be a pig and eat tasty crap that otherwise goes to the bin. Pig food
            offers you quality food from top-notch restaurants for a minimal
            amount of pig bucks
          </p>

          {/*Klara kommenterat <h3>
            50,000 piglets save food <br />
            everyday. Join the pigsty
          </h3> */}

          {/* Klara lagt till*/}
          <div className="text-become">
            <TextBecome />
          </div>
          <BecomeAPigButton />
          {/* Klara -> Hann inte få ordning på css för bowl */}
          {/*
            <div className="big-bowl-container">
              <div className="BigBowl">
                <img
                  className="bowl-noodles"
                  src="BigBowlNoodles.svg"
                  alt="Big bowl"
                />
              </div>
            </div> */}

          <div className="LogoContainer">
            <div className="Logo">
              <img src="YellowShrimp.svg" alt="Shrimp logo" />
              <p>Get your shrimps</p>
            </div>
            <div className="Logo">
              <img src="YellowPizaa.svg" alt="Pizza logo" />
              <p>Get your pizza</p>
            </div>
            <div className="Logo">
              <img src="YellowRamen.svg" alt="Ramen logo" />
              <p>Get your ramen</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PigFood;
