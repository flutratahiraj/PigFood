import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import { slide as Menu } from "react-burger-menu";
// import '../css/HeaderLogo.css'

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
        top: "36px",
      },
      bmBurgerBars: {
        background: "#333",
      },
      bmMenu: {
        background: "#fafafa",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
      },
      bmItemList: {
        display: "flex",
        flexDirection: "column",
      },
      bmItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 0 10px 0",
        color: "#333",
        textDecoration: "none",
        fontWeight: "500",
      },
    }),
    []
  );

  return (
    // <div className="header-mobile">
    //   <div className="logo-container">
    //     <NavLink to="/">logo</NavLink>
    //   </div>

    <Menu
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      styles={memoizedStyles}
    >
      <NavLink id="login" className="menu-item" onClick={closeSideBar} to="/">
        login
      </NavLink>
      <NavLink
        id="about"
        className="menu-item"
        to="/about"
        onClick={closeSideBar}
      >
        About
      </NavLink>
      <NavLink
        id="contact"
        className="menu-item"
        onClick={closeSideBar}
        to="/contact"
      >
        Contact
      </NavLink>
    </Menu>
    // </div>
  );
};

export default HeaderMobile;
