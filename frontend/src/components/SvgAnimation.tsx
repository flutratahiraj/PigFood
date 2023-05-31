import React from 'react';
import { ReactComponent as Animation } from '../svg/sea-hoover.svg';
import '../styles/SvgAnimation.css';

const SvgAnimation: React.FC = () => {
  return (
    <div className="svg-animation">
      <Animation className="slide-animation" />
    </div>
  );
};

export default SvgAnimation;
