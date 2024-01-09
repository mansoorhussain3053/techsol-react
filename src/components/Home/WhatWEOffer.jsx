import './whatweoffer.css'
import { MdOutlineDesignServices } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";




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
           <h3>Graphic <br />Clean Design</h3>
           <p>Tempore corrupti temporibus fuga earum asperiores fugit.</p>
          </article>

          <article> <FaLaptopCode className='Services__Icons'/>
           <h3>Web & <br />Mobile Design</h3>
           <p>Tempore corrupti temporibus fuga earum asperiores fugit.</p>
          </article>

          <article> <HiLightBulb className='Services__Icons'/>
           <h3>Social <br />Media Marketing</h3>
           <p>Tempore corrupti temporibus fuga earum asperiores fugit.</p>
          </article>
          
          


        </div>

        <button className='Services__Button'>Discover More <FaRegArrowAltCircleRight/></button>


        <div className='Line_Down_Parent'><div className='Line__Down'></div></div>
    </div>
  )
}

export default WhatWEOffer
