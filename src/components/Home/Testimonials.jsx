import "./testimonials.css";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Tina Alan",
    review:
      "Incredible results! Our online presence soared with their expert strategies. Highly recommend this digital agency!",
    designation: "Administrative Assistant",
  },
  {
    name: "Dana Murphy",
    review:
      "Exceeded expectations! Innovative solutions and top-notch service. A game-changer for our brand.",
    designation: "Coordinator",
  },
  {
    name: "Jesica Swift",
    review:
      "Outstanding service! Boosted our traffic and engagement. The go-to digital agency for impactful results.",
    designation: "Supervisor",
  },
  {
    name: "Lisa Jack",
    review:
      "Impressed by their creativity and efficiency. Transformed our digital landscape. Exceptional work; highly satisfied!",
    designation: "Sales Representative",
  },
];

const Testimonials = () => {
  return (
    <div className="Projects__Parent">
      <div className="Projects__Counter">
        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Projects</p>
            <h3>Project <br />Consulting</h3>
          </div>
          
          <div className="circle-border">
            <div className="circle">
              <p>90%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Projects</p>
            <h3>Digital Marketing</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>78%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Projects</p>
            <h3>Web Development</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>94%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Projects</p>
            <h3>Content Writing</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>95%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Projects</p>
            <h3>UI/UX Design</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>93%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Projects</p>
            <h3>Communication</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>86%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="All__Slide__Parent">
        <div className="Testimonial__Heading">
          <h3>OUR CLIENTS</h3>
          <h2>What Our Clients Says?</h2>
        </div>
        
        <Swiper
          className="Testimonials__Parent" // install Swiper modules
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ name, review, designation }, index) => {
            return (
              <SwiperSlide key={index} className="Testimonials__Slides">
                <div className="Testimonial__Slide__Content">
                  <p>{review}</p>
                </div>

                <div className="Testimonials__Avatar">
                  <img src="" alt="" />
                  <h3>{name}</h3>
                  <p>{designation}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
