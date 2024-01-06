import './herosection.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const content = (
    <div className="slide-content">
      <h2>Your Slide Title</h2>
      <p>Your slide description or content goes here.</p>
      {/* Add any other content or components as needed */}
    </div>
  );
  
  const HeroSection = () => {
    return (
      <div className="slide-container">
        <Slide>
          {[1, 2, 3].map((index) => (
            <div key={index} className="each-slide">
              <div className="slide-content-container">{content}</div>
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  
  export default HeroSection;