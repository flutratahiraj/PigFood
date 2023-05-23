import React, { useState, useEffect } from 'react';
import '../styles/Landing.css';
import Footer from '../components/Footer';

const Landing: React.FC = () => {
  const faqItems = [
    { question: 'Why Pig Food?', answer: 'Why not' },
    { question: 'Who are the piglets?', answer: 'I dont know' },
    { question: 'Why Pig Food?', answer: 'Again why not' },
    { question: 'Why is pig bucks?', answer: 'ok dude' },
    { question: 'Is climate change real?', answer: 'No' },
  ];

  const images = [
    'Pizza.png',
    'Ramen.png',
    'Pig.png',
    'Shrimp.png',
    'Dumpling.png',
    'Pizza.png',
  ];


  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const toggleAnswer = (index: number) => {
    if (index === activeQuestionIndex) {
      setActiveQuestionIndex(-1);
    } else {
      setActiveQuestionIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>

    <div className="container">
      <div className="Landing">
      <img src='Big-picture.jpg'></img>
      <div className="Text">
      <h1> We are <br></br>Pig Food</h1>
      <p>Be a pig and eat tasty crap that otherwise goes<br></br> to the bin.
      Pig food offers you quality food from<br></br>top notch resturants for a minimal amount of<br></br> pig bucks</p>
      </div>
      </div>

      <h1 className="faq-title">FAQ</h1>
      <div id="faq" className="faq-section">
        {faqItems.map((item, index) => (
          <div key={index}>
            <div
              className={`question ${index === activeQuestionIndex ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <div className="arrow-icon" />
            </div>
            <div className={`answer ${index === activeQuestionIndex ? 'show' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <h1 className="Food-h1">Think of all <br></br> the food you<br></br> can save!</h1>
      <button>Join the pigsty!</button>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Landing;
