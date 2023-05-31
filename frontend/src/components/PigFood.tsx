import React from 'react';
import '../styles/PigFood.css';

const PigFood: React.FC = () => {
  return (
    <>
      <div className="container"></div>
      <div className="Landing">
        <img src="Big-picture.jpg" alt="Background Image" />
        <div className="Text">
          <h1> We are <br />Pig Food</h1>
          <p>Be a pig and eat tasty crap that otherwise goes<br />to the bin. Pig food offers you quality food from<br />top-notch restaurants for a minimal amount of<br />pig bucks</p>
          <h3>50,000 piglets save food <br />everyday. Join the pigsty</h3>


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
