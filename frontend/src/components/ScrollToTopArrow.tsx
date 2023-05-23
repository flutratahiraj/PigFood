import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
//set the arrows visible to tro when user scolls 100px
    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    //trigger event listener on scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      //include the navbar hieght later
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
    // style={{
    //   position:"fixed",
    //   bottom:"20px",
    //   right: "50px",
    //   height: "50px",
    //   width :"50px",
    //   fontSize: "50px",
    //   borderRadius: "45px"
    // }}
    // className="scroll-to-top-arrow"
    onClick={scrollToTop}>
      {/* Nu är pilen transparant, kanske finns det en icon som inte är det eller så går det att fixa via css men tänker MBP */}
      <i className="bi bi-arrow-up-circle-fill"  style={{
      position:"fixed",
      bottom:"20px",
      right: "50px",
    //   height: "50px",
      width :"50px",
      fontSize: "50px",
      color: "#212121",
    }}></i>
    </button>
  ) : null;
};

export default ScrollToTopArrow;
