import React from 'react';
import "../styles/Footer.css"


const Footer: React.FC = () => {
  return (
    <footer>
      <h2>Pigsty</h2>
    <nav>
      <a href="">Log in  </a>
      <a href="">Create account</a>
      <a href="">About Pig Food</a>
      <a href="">Get Help</a>
      <a href="">Buy gift cards</a>
    </nav>
    <div className="subscription-section">
      <h2>Subscribe to latest PigNews</h2>
      <div className="subscribe">
        <input type="text" placeholder="Email@example.com"/>

        <img src="/icon-0.svg" alt="Logo" style={{ width: "50px", height:"30px", padding:"20px" }} />
        <h3>ShrimpTech Ltd. All rights reserved</h3>
      </div>
    </div>
  </footer>
)
  }


export default Footer