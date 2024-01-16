import "./testimonials.css";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ipsa ipsam saepe culpa voluptatem architecto non perferendis hic animi laboriosam.",
    designation: "Co-Founder, Colabrio",
  },
  {
    name: "Dana Lorem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ipsa ipsam saepe culpa voluptatem architecto non perferendis hic animi laboriosam.",
    designation: "Co-Founder, Colabrio",
  },
  {
    name: "Sesha Margot",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ipsa ipsam saepe culpa voluptatem architecto non perferendis hic animi laboriosam.",
    designation: "Co-Founder, Colabrio",
  },
  {
    name: "Lisa Jack",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ipsa ipsam saepe culpa voluptatem architecto non perferendis hic animi laboriosam.",
    designation: "Co-Founder, Colabrio",
  },
];

const Testimonials = () => {
  return (
    <div className="Projects__Parent">
      <div className="Projects__Counter">
        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Project</p>
            <h3>Consulting</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>90%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Project</p>
            <h3>Consulting</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>78%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Project</p>
            <h3>Consulting</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>94%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Project</p>
            <h3>Consulting</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>95%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Project</p>
            <h3>Consulting</h3>
          </div>

          <div className="circle-border">
            <div className="circle">
              <p>88%</p>
            </div>
          </div>
        </div>

        <div className="Circle__Parent">
          <div className="Circle__Content">
            <p>Project</p>
            <h3>Consulting</h3>
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
          <h2>What Clients Say?</h2>
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
