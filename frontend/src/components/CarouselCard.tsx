import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/CarouselCard.css";
import SvgAnimation from "./SvgAnimation";
import SlideInCartMenu from "./SlideInCartMenu";
import { useEffect } from "react";
import { useState } from "react";
interface TitleProp {
  title: string;
  category: string;
}

function CarouselCard(props: TitleProp) {
  // const [activeIndex, setActiveIndex] = useState(0);
  // State för en mobil enhet eller inte
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // function CarouselCard() {
  //från handout: "publicering via Heroku"
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        console.log(`${result.hello}`);

        // alert(`Hello ${result.hello}!`)
      });
    // Hantera ändring av fönsterstorlek
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    //Lägg till en händelselyssnare när komponenten monteras
    window.addEventListener("resize", handleResize);
    //tar bort
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardData = {
    image: "http://localhost:8000/images/pizza/1.jpg",
    title: props.title,
    subtitle: "30 Pig Bucks",
    description:
      "Modern farmhouse shoyu with freshly cooked shrimps, chili and a touch of lime and fresh ginger",
    platsText: "Thai Tanic",
  };

  /**Gammal kod, inte ta bort ännu
 *
//  * <div className="carousel-item active">
//      // { http://localhost:8000  module heroku }
//       <img src="http://localhost:8000/images/chili.jpg" className="d-block w-100" alt="..."/>
//     </div> */

  const renderCards = (start: number, end: number, category: string) => {
    return Array.from({ length: end - start + 1 }, (_, index) => (
      <div key={start + index} className="card">
        <div className="image-wrapper">
          <img
            src={`http://localhost:8000/images/${category}/${
              start + index
            }.jpg`}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body">
          <div className="title-timer">
            {/* Hur skall jag få in pop-title baserad på bild... */}
            <h5 className="card-title">{props.category}</h5>
            <h5 className="card-timer">15.00</h5>
          </div>
          <div className="svg-location">
            <svg
              width="10"
              height="23"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.05859 3.81545C1.05866 3.09379 1.26696 2.38747 1.65849 1.78125C2.05003 1.17504 2.60817 0.694672 3.26594 0.397798C3.92371 0.100925 4.65318 0.000153624 5.3668 0.107577C6.08042 0.214999 6.74789 0.526053 7.28912 1.00341C7.83034 1.48077 8.22233 2.10416 8.41805 2.79878C8.61377 3.4934 8.6049 4.22973 8.39251 4.91944C8.18013 5.60914 7.77324 6.22291 7.22068 6.6871C6.66811 7.15129 5.99335 7.44618 5.27734 7.53639V12.7217C5.27734 12.846 5.22796 12.9652 5.14005 13.0532C5.05214 13.1411 4.93291 13.1904 4.80859 13.1904C4.68427 13.1904 4.56505 13.1411 4.47714 13.0532C4.38923 12.9652 4.33984 12.846 4.33984 12.7217V7.53732C3.43325 7.4231 2.59955 6.98179 1.99536 6.29629C1.39116 5.61079 1.05805 4.72921 1.05859 3.81545ZM3.39578 11.8536C3.41611 11.9761 3.38695 12.1018 3.3147 12.2029C3.24245 12.3039 3.13302 12.3722 3.01047 12.3926C2.34297 12.5033 1.81047 12.6692 1.45891 12.8548C1.32976 12.9169 1.21239 13.001 1.11203 13.1033C1.08934 13.128 1.07125 13.1566 1.05859 13.1876V13.1904L1.06047 13.1979C1.06416 13.2088 1.0692 13.2192 1.07547 13.2289C1.11247 13.2831 1.15844 13.3307 1.21141 13.3695C1.36609 13.4914 1.61922 13.6226 1.97359 13.7398C2.67766 13.9742 3.67984 14.1279 4.80859 14.1279C5.93734 14.1279 6.93953 13.9751 7.64359 13.7398C7.99797 13.6217 8.25109 13.4914 8.40578 13.3695C8.45906 13.3307 8.50535 13.2832 8.54266 13.2289C8.54859 13.2192 8.55332 13.2088 8.55672 13.1979L8.55859 13.1904V13.1867C8.54594 13.1556 8.52784 13.127 8.50516 13.1023C8.40474 13.0004 8.28737 12.9166 8.15828 12.8548C7.80578 12.6692 7.27422 12.5033 6.60672 12.3926C6.54454 12.3842 6.48469 12.3634 6.43071 12.3314C6.37673 12.2994 6.32972 12.2569 6.29246 12.2064C6.25521 12.1559 6.22848 12.0985 6.21384 12.0375C6.1992 11.9764 6.19697 11.9131 6.20726 11.8512C6.21756 11.7893 6.24017 11.7301 6.27377 11.6771C6.30737 11.6241 6.35127 11.5784 6.40286 11.5427C6.45445 11.507 6.51268 11.482 6.57411 11.4692C6.63554 11.4564 6.69891 11.4561 6.76047 11.4683C7.48234 11.5873 8.12172 11.7758 8.59516 12.0251C9.02734 12.2529 9.49609 12.6279 9.49609 13.1904C9.49609 13.5898 9.25234 13.8954 8.98609 14.1064C8.71422 14.3201 8.34859 14.4936 7.93984 14.6295C7.11672 14.9042 6.00953 15.0654 4.80859 15.0654C3.60766 15.0654 2.50047 14.9042 1.67734 14.6295C1.26859 14.4936 0.902969 14.3201 0.631094 14.1064C0.364844 13.8954 0.121094 13.5898 0.121094 13.1904C0.121094 12.6289 0.589844 12.2529 1.02203 12.0251C1.49547 11.7758 2.13484 11.5873 2.85672 11.4683C2.97929 11.4479 3.10492 11.4771 3.206 11.5493C3.30708 11.6216 3.37534 11.731 3.39578 11.8536Z"
                fill="#094EC7"
              />
            </svg>

            <p className="card-text">Gothenburg</p>
          </div>
          <p className="price-tag"> 20 Pig Bucks</p>
          <SvgAnimation />
          {/* <button className="btn btn-primary" onClick={toggleMenu}>
           Go somewhere
         </button> */}
        </div>
      </div>
    ));
  };

  return (
    <div id="CC-container">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* http://localhost:8000  module heroku */}
            {/* <img
              src="http://localhost:8000/images/chili.jpg"
              className="d-block w-100"
              alt="..."
            /> */}
          </div>
          {/* <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div> */}
          {/* <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h1 className="meal-title">{props.title}</h1>
      {!isMobile ? (
        <Carousel
          showArrows
          swipeable
          emulateTouch={false}
          infiniteLoop
          showStatus={false}
          centerMode
          centerSlidePercentage={33.33}
          renderIndicator={() => null}
          className="cardBorder"
        >
          {renderCards(1, 5, props.category)}
        </Carousel>
      ) : (
        <Carousel
          showThumbs={false}
          swipeable
          emulateTouch
          infiniteLoop
          showStatus={false}
          renderIndicator={() => null}
          centerMode
          centerSlidePercentage={undefined}
          className="cardBorder"
        >
          {renderCards(1, 5, props.category)}
        </Carousel>
      )}
      {/* <SlideInCartMenu cardData={cardData} /> */}
      {!isMenuOpen ? (
        <SlideInCartMenu onClickCard={toggleMenu} cardData={cardData} />
      ) : (
        <h1>hejTestförAddtocart</h1>
      )}
    </div>
  );
}

export default CarouselCard;
