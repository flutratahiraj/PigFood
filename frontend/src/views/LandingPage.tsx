import React, { useState, useEffect } from "react";
import "../styles/LandingPage.css";
import HeaderMobile from "../components/HeaderMobile";

const LandingPage: React.FC = () => {
  const faqItems = [
    { question: "Why Pig Food?", answer: "Why not" },
    { question: "Who are the piglets?", answer: "I dont know" },
    { question: "Why Pig Food?", answer: "Again why not" },
    { question: "Why is pig bucks?", answer: "ok dude" },
    { question: "Is climate change real?", answer: "No" },
  ];

  const images = [
    "Pizza.png",
    "Ramen.png",
    "Pig.png",
    "Shrimp.png",
    "Dumpling.png",
    "Pizza.png",
  ];

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const toggleAnswer = (index: number) => {
    if (index === activeQuestionIndex) {
      setActiveQuestionIndex(-1);
    } else {
      setActiveQuestionIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="Landing">
          {/* <HeaderLanding /> */}
          <HeaderMobile
            joinButtonProps={{
              label: "Join the pigsty!",
              onClick: () => {
                {
                  /* /* handle onClick */
                }
              },
            }}
          />
          <div className="background-image">
            <img src="Big-picture.jpg" alt="Background" />
            <div className="overlay">
              <h1 className="pig-food-title">
                We are <br /> Pig Food
              </h1>
              <p className="be-a-pig-text">
                Be a pig and eat tasty crap that otherwise goes to the bin. Pig
                food offers you quality food from top-notch restaurants for a
                minimal amount of pig bucks
              </p>
            </div>
          </div>
        </div>
        <h1 className="faq-title">FAQ</h1>
        /*{" "}
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
      <h1 className="Food-h1">
        Think of all <br></br> the food you<br></br> can save!
      </h1>
    </>
  );
};

export default LandingPage;
