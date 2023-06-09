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
          <div className="slideInCart-cross-container">
          <img
            id="slideInCart-cross"
            src="CloseDown.svg"
            style={{width:"30px", height:"20px"}}
          />
          </div>
          <img src={cardData.image} alt="Bild" />
          <div className='inner-container-text'>
          <h3 id='slideInCartMenu-text'>{cardData.title}</h3>
          <h4 id='slideInCartMenu-text' className="price">{cardData.subtitle}</h4>
          <p id='slideInCartMenu-text'>{cardData.description}</p>
          <h5 id='slideInCartMenu-text'>{cardData.platsText}</h5>
          </div>
          <button id='slideInCartMenu-button'>Add to cart</button>
        </div>
      )}
      </div>
    </div>
    </>
  );
};

export default SlideInCartMenu;
