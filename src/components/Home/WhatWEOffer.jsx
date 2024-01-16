import './whatweoffer.css'
import { MdOutlineDesignServices } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-router-dom';




const WhatWEOffer = () => {
  return (  
        
     
    
    <div className='Services__Parent'>
      <div className='Line_Top_Parent'><div className='Line__Top'></div></div>

      <div className='Upper__Line'>
          <span className='Line__Services'></span>
      </div>


        <div className='Services__Heading'>
          <h3>BEST FEATURES</h3>
          <h2>We are a new digital product development <span className='Service__Span'> Agency</span></h2>
        </div>

        <div className='Services__Divs'>

          <article> <MdOutlineDesignServices className='Services__Icons'/>
           <h3> Web Design & <br />Developing</h3>

           <p> We start with a clear vision, creating a secure, user-friendly website tailored to your goals, ensuring ongoing support for success.
                      </p>
          </article>

          <article> <FaLaptopCode className='Services__Icons'/>
           <h3>Mobile <br />App Dev</h3>
           <p>
           We excel in mobile app development, offering expertise in UI/UX design, secure coding, optimization, launch, and ongoing support for success.
                        </p>
          </article>

          <article> <HiLightBulb className='Services__Icons'/>
           <h3>Digital Branding</h3>
           <p>We prioritize web design's visual appeal, ensuring positive experiences, seamless navigation, and responsive functionality, including rebranding services.


                      </p>
          </article>
          
          


        </div>

       <button className='Services__Button'><Link to="/services">Discover More</Link>  <FaRegArrowAltCircleRight/></button>


        <div className='Line_Down_Parent'><div className='Line__Down'></div></div>
    </div>
  )
}

export default WhatWEOffer
