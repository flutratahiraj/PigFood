import '../styles/Faq.css'
import React, { useState, useEffect } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqItems: FaqItem[] = [
    { question: 'Why Pig Food?', answer: 'Why not' },
    { question: 'Who are the piglets?', answer: 'I dont know' },
    { question: 'Why Pig Food?', answer: 'Again why not' },
    { question: 'Why is pig bucks?', answer: 'ok dude' },
    { question: 'Is climate change real?', answer: 'No' },
  ];

  const images: string[] = [
    'Pizza.png',
    'Ramen.png',
    'Pig.png',
    'Shrimp.png',
    'Dumpling.png',
    'Pizza.png',
  ];

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(-1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

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

<div id="faq" className="faq-section">
  <h1 className="faq-title">FAQ</h1>
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

  <h1 className="Food-h1">Think of all <br /> the food you<br /> can save!</h1>

  <div id="faq-carousel">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        id ="faq-carousel-image"
      />
    ))}
  </div>
</div>

    </>
  );
}

export default Faq;
