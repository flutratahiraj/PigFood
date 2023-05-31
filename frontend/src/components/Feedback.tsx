import React from 'react';
import '../styles/Feedback.css';

interface FeedbackItem {
  name: string;
  image: string;
  description: string;
  nationality: string;
}

const feedbackItems: FeedbackItem[] = [
  {
    name: 'Lisa McFlanagan',
    image: 'AVATAR.png',
    description:
      'This food website is the true gem in the gastronomic universe! The dishes here are so mouthwatering, I can practically taste them through my screen. I\'ve become a self-proclaimed foodie ninja, effortlessly navigating through the menu, unleashing my inner epicurean. Warning: side effects may include sudden cravings, uncontrollable foodgasms, and an addiction to refreshing the page for new culinary adventures',
    nationality: 'Probably Irish'
  },
  {
    name: 'Bubba',
    image: 'Bubba.svg',
    description:
      '“Wowza! This food website is like a flavor explosion in my mouth, and my taste buds are doing the happy dance! I use it all the time. It feels great to contribute to a better global environment and for my economy.”',
    nationality: 'Probably Irish',
  },
  {
    name: 'Seb Murphy',
    image: 'AVATAR.png',
    description:
      '“This site makes me fat and happy.”',
    nationality: 'Probably Irish',
  },
];

const Feedback: React.FC = () => {
  return (
    <div className="Feedback-container">
      {feedbackItems.map((item, index) => (
        <div className="Feedback-items" key={index}>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
          <h3>{item.nationality}</h3>
          <p>{item.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Feedback;
