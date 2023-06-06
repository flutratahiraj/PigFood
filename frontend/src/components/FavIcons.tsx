import React from "react";
import "../styles/FavIcons.css";

const FavIcons = () => {
  return (
    <div className="svg-container">
      <div className="row1">
        {/* SVG 1 */}
        <div className="svg-item">
          <img src="/favhambicon.svg" alt="hamburger" className="svg-icon" />
        </div>
        {/* SVG 2 */}
        <div className="svg-item">
          <img src="/favscrimpicon.svg" alt="Logout" className="svg-icon" />
        </div>
        {/* SVG 3 */}
        <div className="svg-item">
          <img src="/favpizicon.svg" alt="Logout" className="svg-icon" />
        </div>
      </div>
      <div className="row2">
        {/* SVG 4 */}
        <div className="svg-item">
          <img src="/favnoodleicon.svg" alt="Logout" className="svg-icon" />
        </div>
        {/* SVG 5 */}
        <div className="svg-item">
          <img src="/favbowlicon.svg" alt="Logout" className="svg-icon" />
        </div>
        {/* SVG 6 */}
        <div className="svg-item">
          <img src="/favsushiicon.svg" alt="Logout" className="svg-icon" />
        </div>
      </div>
    </div>
  );
};

export default FavIcons;
