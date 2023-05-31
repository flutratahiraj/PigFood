import React, { useState } from 'react';
import "../styles/SlideInCartMenu.css";


interface SlideInCartMenuProps {
  cardData: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    platsText: string;
  };
  onClickCard: () => void;
}

const SlideInCartMenu: React.FC<SlideInCartMenuProps> = ({ cardData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div id="flyoutMenu" className={isOpen ? 'show' : 'hide'}>
      <div id='slideInCartMenu-container'>
      <div onClick={handleClick}>Test för Add to Cart</div>
      {isOpen && (
        <div className="menu-container">
          <img src={cardData.image} alt="Bild" />
          <h3 id='slideInCartMenu-text'>{cardData.title}</h3>
          <h4 id='slideInCartMenu-text'>{cardData.subtitle}</h4>
          <p id='slideInCartMenu-text'>{cardData.description}</p>
          <h5 id='slideInCartMenu-text'>{cardData.platsText}</h5>
          <button id='slideInCartMenu-button'>Add to cart</button>
        </div>
      )}
      </div>
    </div>
    </>
  );
};

export default SlideInCartMenu;
