// AnimatedContent.jsx
import React, { useState, useEffect } from 'react';
import './AnimatedContent.css';

const AnimatedContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    console.log('Scrolling...');
    const scrollY = window.scrollY;
    const threshold = 200;
  
    if (scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

// Inside AnimatedContent component
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]); // Add isVisible to the dependency array
  
  return (
    <div className={`animated-content ${isVisible ? 'visible' : ''}`}>
      {/* Your animated content */}
    </div>
  );
};

export default AnimatedContent;
