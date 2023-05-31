import React from 'react';
import '../styles/Benefit.css'

const Benefit: React.FC = () => {
  return (
    <>
      <div className="Benefit">
      <h1>You can  be a Food Rescue Pig</h1>
      <p>
        Together with quality takeout restaurants, we work to ensure that ordered but uncollected food can still bring goodness to both your tummy and wallet and to our planet.
      </p>
      <ul>
        <li>Rescue and Enjoy: Save restaurant food from waste and savor every bite</li>
        <li>Sustainable Impact: Reduce our carbon footprint, conserve resources, and support an efficient food system</li>
        <li>Compassion and Conservation: Value resources, promote equity, preserve habitats, and protect biodiversity</li>
      </ul>
    </div>
    <img src='Benefit.png' className='Benefit-img'></img>
    <div className='Sec-Benefit'>
      <h1>Our Food Rescue Mission: Save, Savor and Sustain</h1>
      <p>
        Restaurants throw away a lot of food every day. Our mission is to stop the waste! With your help, the food can be rescued and eaten.
      </p>
      <ul>
        <li>Rescue and Enjoy: Save restaurant food from waste and savor every bite</li>
        <li>Sustainable Impact: Reduce our carbon footprint, conserve resources, and support an efficient food system</li>
        <li>Compassion and Conservation: Value resources, promote equity, preserve habitats, and protect biodiversity</li>
      </ul>
    </div>
    </>

  );
};

export default Benefit;
