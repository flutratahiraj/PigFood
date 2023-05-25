import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/ArrowLink.css";
// import HamburgerIcon from "./HamburgerIcon";
// import '../css/HeaderLogo.css'
// import { Container, Row, Col } from "react-bootstrap";

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const memoizedStyles = useMemo(
    () => ({
      bmBurgerButton: {
        position: "fixed",
        width: "26px",
        height: "20px",
        right: "36px",
        top: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      },
      bmBurgerBars: {
        background: "#333",
      },
      bmMenu: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "156px 40px",
        gap: "25px",
        isolation: "isolation",
        position: "relative",
        width: "324px",
        height: "851px",
        background: "#212121",
      },
      bmItemList: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
      bmItem: {
        width: "61px",
        height: "30px",
        fontFamily: "Clash Grotesk",
        fontStyle: "normal",
        fontSize: "24px",
        lineHeight: "30px",
        color: "#F7F800",
        flex: "none",
        order: "0",
        flexGrow: "0",
      },
      bmCrossButton: {
        height: "24px",
        width: "24px",
        position: "absolute",
        right: "36px",
        top: "20px",
        justifySelf: "end",
      },
    }),
    []
  );

  return (
    <Menu
      customBurgerIcon={<img src="/HamburgerIcon.svg" alt="HamburgerIcon" />}
      customCrossIcon={<img src="/NoBreadBurger.svg" alt="NoBreadBurger" />}
      right
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      styles={memoizedStyles}
    >
      <NavLink id="login" className="menu-item" onClick={closeSideBar} to="/">
        <div className="menu-item-container">
          Login
          <div className="arrow-container">
            <img src="/ArrowLink.svg" alt="Arrow" className="arrow-icon" />
          </div>
        </div>
      </NavLink>

      <NavLink
        id="about"
        className="menu-item"
        to="/about"
        onClick={closeSideBar}
      >
        <div className="menu-item-container">
          About
          <div className="arrow-container">
            <img src="/ArrowLink.svg" alt="Arrow" className="arrow-icon" />
          </div>
        </div>
      </NavLink>

      <NavLink
        id="contact"
        className="menu-item"
        onClick={closeSideBar}
        to="/contact"
      >
        <div className="menu-item-container">
          Contact
          <div className="arrow-container">
            <img src="/ArrowLink.svg" alt="Arrow" className="arrow-icon" />
          </div>
        </div>
      </NavLink>
    </Menu>
  );
};

export default HeaderMobile;
