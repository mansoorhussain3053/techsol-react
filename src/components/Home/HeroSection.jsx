import './herosection.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Parallax, Navigation } from 'swiper/modules';






  const HeroSection = () => {
    return (
      

      <Swiper
        style={{
          '--swiper-navigation-color': 'var(--color-white)',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        navigation={true}
        
        modules={[Parallax, Navigation]}
        className="mySwiper"
      >
        <div
        
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url("https://i.pinimg.com/originals/50/e4/3e/50e43ebcc0c1916dcd7a93cfc6bfeb6e.webp")',
          }}
          data-swiper-parallax="-23%"
        > </div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h2>Digital Design Awards</h2>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.
            </p>
            <button>Learn More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          <h2>Original Solutions</h2>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.
            </p>
            <button>Learn More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
           <h2>Business Vaule <br/>through Digital Products</h2>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at incidunt eos quasi et distinctio.
            </p>
            <button>Learn More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    );
    
  };
  
  
  export default HeroSection;