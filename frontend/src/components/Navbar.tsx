import React from "react";
// import HeaderMobile from "./HeaderMobile";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Navbar-container">
        <img src="logo-navbar.png" alt="Logo" className="navbar-logo" />
        {/* <HeaderMobile
          joinButtonProps={{
            label: "Join the pigsty!",
            onClick: () => {
              // Hantera onClick-händelsen
            },
          }}
        /> */}
      </div>
    </>
  );
};

export default Navbar;
