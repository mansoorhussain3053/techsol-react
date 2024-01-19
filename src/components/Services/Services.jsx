import './services.css'
import { MdOutlineDesignServices } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import ServicesSecurity from './ServicesSecurity';


const Services = () => {
  return (
    <>
    <div className='Service__Parent'>


      <div className='Upper__Line'>
          <span className='Line__Service'></span>
      </div>


        <div className='Service__Heading'>
          <h3>BEST FEATURES</h3>
          <h2>Explore Our Services! From Web Design to Digital<span className='Service__Span'> Branding</span></h2>
        </div>

        <div className='Service__Div'>

          <article> <MdOutlineDesignServices className='Services__Icons'/>
           <h3> Web Design  & <br />Development</h3>

           <p> We start with a clear vision, creating a secure, user-friendly website tailored to your goals, ensuring ongoing support for success.</p>
          </article>

          <article> <FaLaptopCode className='Services__Icons'/>
           <h3>Application <br />Development</h3>
           <p>
           We excel in mobile app development, offering expertise in UI/UX design, secure coding, optimization, launch, and ongoing support for success.</p>
          </article>

          <article> <HiLightBulb className='Services__Icons'/>
           <h3>Digital Branding</h3>
           <p>We prioritize web design's visual appeal, ensuring positive experiences, seamless navigation, and responsive functionality, including rebranding services.


                      </p>
          </article>
          
          

        </div>

        <div className='Service__Div'>

          <article> <MdOutlineDesignServices className='Service__Icons'/>
           <h3> Web Design  & <br />Development</h3>

           <p> We start with a clear vision, creating a secure, user-friendly website tailored to your goals, ensuring ongoing support for success.</p>
          </article>

          <article> <FaLaptopCode className='Service__Icons'/>
           <h3>Application <br />Development</h3>
           <p>
           We excel in mobile app development, offering expertise in UI/UX design, secure coding, optimization, launch, and ongoing support for success.</p>
          </article>

          <article> <HiLightBulb className='Service__Icons'/>
           <h3>Digital Branding</h3>
           <p>We prioritize web design's visual appeal, ensuring positive experiences, seamless navigation, and responsive functionality, including rebranding services.


                      </p>
          </article>
          
          

        </div>


        

       

    </div>
   <ServicesSecurity/>
    </>
    
  )
}

export default Services
