// import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import { slide as Menu } from "react-burger-menu";
import JoinButton from "./buttons/JoinButton";
// import FavIcons from "./FavIcons";
import "../styles/ArrowLink.css";
import "../styles/HeaderMobile.css";

interface HeaderMobileProps {
  joinButtonProps: {
    label: string;
    onClick: () => void;
  };
}

const HeaderMobile = ({ joinButtonProps }: HeaderMobileProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const memoizedStyles = useMemo(
    () => ({
      //position och storlek på burgerknappen
      bmBurgerButton: {
        position: "fixed",
        width: "26px",
        height: "20px",
        right: "36px",
        top: "30px",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "flex-start",
      },
      //färgen och formen på strecken för burgerikon.??
      bmBurgerBars: {
        background: "#333",
      },
      //Allmänna stilar för sidofältet, inklusive bakgrundsfärg, padding och fontstorlek.
      bmMenu: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "156px 40px",
        gap: "25px",
        isolation: "isolation",
        position: "relative",
        width: "358px",
        minHeight: "851px",
        background: "#212121",
        justifyContent: "spaceAround",
      },
      // container för alternativlistan
      bmItemList: {
        width: "61px",
        height: "30px",
        display: "flex",
        // justifyContent: "spaceAround",
        // flexDirection: "column",
        // alignItems: "flex-start",
        gap: "25px",
        alignItems: "baseline",
      },
      //enskilda element i containern
      bmItem: {
        flex: "50%",
        // width: "61px",
        // height: "30px",
        justifyContent: "start",
        fontFamily: "Clash Grotesk",
        fontStyle: "normal",
        fontSize: "24px",
        lineHeight: "30px",
        // marginRight: "100px",
        color: "#F7F800",

        // flex: "none",
        // order: "0",
        // flexGrow: "0",
      },
      //Styr position och storlek på klickbar kryssknapp.i detta fall "köttdelen"
      bmCrossButton: {
        height: "24px",
        width: "24px",
        position: "absolute",
        right: "36px",
        top: "20px",
        justifySelf: "end",
      },
      bmItemLogo: {
        // display: "flex",
        // alignItems: "center",
        // marginBottom: "20px",
      },
      bmLogoImg: {
        // marginRight: "10px",
      },
      bmItemContainer: {
        // display: "flex",
        // // flexDirection: "",
        // alignItems: "flex-start",
        // gap: "25px",
      },

      // arrowIcon: { width: "10px", height: "10px", paddingLeft: "20px" },
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
      <div className="bm-item-list" style={memoizedStyles.bmItemList}>
        <NavLink
          id="login"
          className="bm-item"
          onClick={closeSideBar}
          to="/login"
          style={memoizedStyles.bmItem}
        >
          Login
        </NavLink>
        <div className="arrow-icon">
          <div id="arrow-container">
            <img
              id="arrow-login"
              src="/ArrowLink.svg"
              alt="Arrow"
              className="arrow-login"
              // style={memoizedStyles.bmItem}
            />
          </div>
        </div>
      </div>
      <div className="bm-item-list" style={memoizedStyles.bmItemList}>
        <NavLink
          id="login"
          className="bm-item"
          onClick={closeSideBar}
          to="/about"
          style={memoizedStyles.bmItem}
        >
          About
        </NavLink>
        <div id="arrow-container">
          <img
            id="arrow-login"
            src="/ArrowLink.svg"
            alt="Arrow"
            className="arrow-about"
            // style={memoizedStyles.bmItem}
          />
        </div>
      </div>
      <div className="bm-item-list" style={memoizedStyles.bmItemList}>
        <NavLink
          id="login"
          className="bm-item"
          onClick={closeSideBar}
          to="/"
          style={memoizedStyles.bmItem}
        >
          Contact
        </NavLink>
        <div id="arrow-container">
          <img
            id="arrow-login"
            src="/ArrowLink.svg"
            alt="Arrow"
            className="arrow-contact"
            // style={memoizedStyles.bmItem}
          />
        </div>
      </div>

      <JoinButton {...joinButtonProps} />
      <div className="favvo">{/* <FavIcons /> */}</div>
    </Menu>
  );
};

export default HeaderMobile;
