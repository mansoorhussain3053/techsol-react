import './herosection.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const contentSlides = [
    {
      title: 'Original Solutions',
      description: 'If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.',
    },
    {
      title: 'Business Value through digital products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse fugit velit accusamus dignissimos in perferendis obcaecati. Minima, rerum eius.'
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
  
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
  };
  
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="Icon__Left">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>






      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="Icon__Right">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>


      </button>
    )
  };
  
  
  const HeroSection = () => {
    return (
      <div className="slide-container">
        
        <Slide {...properties}>
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