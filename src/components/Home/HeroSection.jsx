import './herosection.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const contentSlides = [
    {
      title: 'Original Solutions',
      description: 'If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.',
    },
    {
      title: 'Business Value through digital products',
      description: 'Trusted by the world’s most established brands',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum laboriosam odio consequuntur, doloribus dolorum repellendus facere sed sequi fugiat ullam nihil harum reprehenderit accusantium. Reprehenderit omnis accusamus blanditiis eum.',
    },
    {
      title: 'Digital Design Awards',
      description: 'If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.',
    },
    {
      title: 'Trusted by the world’s most established brands',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum laboriosam odio consequuntur, doloribus dolorum repellendus facere sed sequi fugiat ullam nihil harum reprehenderit accusantium. Reprehenderit omnis accusamus blanditiis eum.',  
    },
    // Add more slides as needed
  ];
  

  
  const HeroSection = () => {
    return (
      <div className="slide-container">
        
        <Slide>
          {contentSlides.map((slide, index) => (
            <div key={index} className="each-slide">
              <div className="slide-content-container">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button type='button' className='Hover__Button'><span className='Button__Span'> </span>Learn More</button>
                
              </div>
              
            </div>
          ))}
        </Slide>
      </div>
    );
    
    
  };
  
  
  export default HeroSection;