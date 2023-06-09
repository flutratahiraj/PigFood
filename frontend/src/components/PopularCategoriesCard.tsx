import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useState } from "react";
interface TitleProp {
  title: string;
  category: string;
}

function PopularCategoriesCard(props: TitleProp) {
  // const [activeIndex, setActiveIndex] = useState(0);
  // State för en mobil enhet eller inte
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  //från handout: "publicering via Heroku"
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        console.log(`${result.hello}`);
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


            <h5 className="card-title">{props.category}</h5>

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
    </div>
  );
}

export default PopularCategoriesCard;
